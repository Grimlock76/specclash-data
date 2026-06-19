'use strict';
// One-off: extract the hand-maintained MAKE_SUPPS object from index.js into
// src/data/makeSupps.json, then add the missing supplement numbers for packs
// 233-238 (computed from the supplement data, using canonical make names).
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data');

// 1) extract current MAKE_SUPPS literal from index.js
const idx = fs.readFileSync(path.join(dir, 'index.js'), 'utf8');
const start = idx.indexOf('const MAKE_SUPPS = {');
const open = idx.indexOf('{', start);
// find matching close brace
let depth = 0, end = -1;
for (let i = open; i < idx.length; i++) {
  if (idx[i] === '{') depth++;
  else if (idx[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
}
const literal = idx.slice(open, end + 1);
const map = (new Function('return ' + literal))();
console.log('Extracted MAKE_SUPPS:', Object.keys(map).length, 'makes');

// 2) add supplement numbers for packs 233-238 from the data
for (let n = 233; n <= 238; n++) {
  const supp = JSON.parse(fs.readFileSync(path.join(dir, `supplement${n}.json`)));
  const makes = new Set(Object.keys(supp.specs).map(k => k.split('|')[0]));
  for (const mk of makes) {
    if (!map[mk]) map[mk] = [];
    if (!map[mk].includes(n)) map[mk].push(n);
  }
}

// 3) sort each list numerically and write JSON
for (const k of Object.keys(map)) map[k].sort((a, b) => a - b);
fs.writeFileSync(path.join(dir, 'makeSupps.json'), JSON.stringify(map, null, 2));
console.log('Wrote makeSupps.json:', Object.keys(map).length, 'makes');
