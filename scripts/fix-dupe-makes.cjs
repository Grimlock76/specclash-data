'use strict';
// One-off: merge casing-duplicate makes created in packs 233/234 into the
// pre-existing canonical makes. Renames spec keys in the offending supplements
// and merges the makes.json model trees, then deletes the duplicate make.
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data');

// source (my new lowercase) -> canonical (pre-existing, already in MAKE_SUPPS)
const CANON = { Cupra: 'CUPRA', Xpeng: 'XPENG', Ineos: 'INEOS', Citroen: 'Citroën' };
// which supplement each source make's data lives in
const SUPP = { Cupra: 233, Xpeng: 233, Ineos: 234, Citroen: 234 };

// 1) rename spec keys in the supplements
for (const [src, canon] of Object.entries(CANON)) {
  const p = path.join(dir, `supplement${SUPP[src]}.json`);
  const d = JSON.parse(fs.readFileSync(p));
  const out = {};
  let renamed = 0;
  for (const k of Object.keys(d.specs)) {
    if (k.startsWith(src + '|')) { out[canon + k.slice(src.length)] = d.specs[k]; renamed++; }
    else out[k] = d.specs[k];
  }
  d.specs = out;
  fs.writeFileSync(p, JSON.stringify(d, null, 2));
  console.log(`supplement${SUPP[src]}: ${src}| -> ${canon}| (${renamed} keys)`);
}

// 2) merge makes.json model trees and drop the duplicate make
const mp = path.join(dir, 'makes.json');
const m = JSON.parse(fs.readFileSync(mp));
for (const [src, canon] of Object.entries(CANON)) {
  if (!m[src]) continue;
  m[canon] = m[canon] || {};
  for (const model of Object.keys(m[src])) {
    m[canon][model] = m[canon][model] || {};
    for (const year of Object.keys(m[src][model])) {
      const merged = new Set([...(m[canon][model][year] || []), ...m[src][model][year]]);
      m[canon][model][year] = [...merged].sort();
    }
  }
  delete m[src];
  console.log(`makes.json: merged ${src} into ${canon}, deleted ${src}`);
}
fs.writeFileSync(mp, JSON.stringify(m, null, 2));
console.log('Done.');
