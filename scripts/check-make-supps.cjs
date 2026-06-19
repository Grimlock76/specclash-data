'use strict';
// Lint: every make that has spec data in a lazy supplement (N >= 10) must be
// listed in makeSupps.json for that N — otherwise the app can populate the
// dropdown from makes.json but never lazy-loads the specs (LOAD silently fails).
// Run after adding/editing any supplement. Exits non-zero on violations.
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data');

const makes = new Set(Object.keys(JSON.parse(fs.readFileSync(path.join(dir, 'makes.json')))));
const map = JSON.parse(fs.readFileSync(path.join(dir, 'makeSupps.json')));

const CORE = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]); // always statically imported in index.js

const violations = [];
const unknownSegs = new Set();
for (const f of fs.readdirSync(dir)) {
  const m = f.match(/^supplement(\d+)\.json$/);
  if (!m) continue;
  const n = parseInt(m[1], 10);
  if (CORE.has(n)) continue;
  const supp = JSON.parse(fs.readFileSync(path.join(dir, f)));
  const segs = new Set(Object.keys(supp.specs).map(k => k.split('|')[0]));
  for (const seg of segs) {
    if (!makes.has(seg)) { unknownSegs.add(`${seg} (s${n})`); continue; } // legacy/no-make-prefix keys
    if (!(map[seg] || []).includes(n)) violations.push(`${seg}: supplement${n} present in data but missing from makeSupps.json`);
  }
}

if (unknownSegs.size) {
  console.log(`Note: ${unknownSegs.size} key-prefix(es) are not makes.json makes (legacy model-prefixed keys, ignored):`);
  console.log('  ' + [...unknownSegs].sort().join(', '));
}
if (violations.length) {
  console.error(`\n✗ ${violations.length} MAKE_SUPPS coverage violation(s):`);
  for (const v of violations) console.error('  ' + v);
  process.exit(1);
}
console.log(`\n✓ makeSupps.json covers all ${Object.keys(map).length} makes across lazy supplements.`);
