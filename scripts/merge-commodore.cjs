'use strict';
// Merge all generation-split Holden Commodore models — "Commodore (VB..ZB)" and
// "Commodore Ute" — into a single searchable "Commodore" model. The generation
// is already encoded in every trim name (e.g. "VF SS", "VE Sportwagon SS",
// "VN Ute SS"), so no information is lost; body type comes from the trim.
// Does NOT touch "HSV Commodore" (separate make/model).
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data');

// Matches both Holden key formats: bare "Commodore (VF)|..." and make-prefixed
// "Holden|Commodore (VF)|...". Never matches "HSV Commodore".
const RE_BARE = /^(Commodore \([A-Z]+\)|Commodore Ute)\|(.*)$/;
const RE_PREFIXED = /^Holden\|(Commodore \([A-Z]+\)|Commodore Ute)\|(.*)$/;
function rename(k) {
  let m = k.match(RE_PREFIXED);
  if (m) return `Holden|Commodore|${m[2]}`;
  m = k.match(RE_BARE);
  if (m) return `Commodore|${m[2]}`;
  return null;
}

// 1) rename spec keys across every data file (holden/ford + all supplements)
const dataFiles = ['holden.json', 'ford.json', ...fs.readdirSync(dir).filter(f => /^supplement\d+\.json$/.test(f))];
let totalRenamed = 0, filesTouched = 0;
for (const f of dataFiles) {
  const p = path.join(dir, f);
  const d = JSON.parse(fs.readFileSync(p));
  if (!d.specs) continue;
  let renamed = 0;
  const out = {};
  for (const k of Object.keys(d.specs)) {
    const nk = rename(k);
    if (nk) { out[nk] = d.specs[k]; renamed++; }
    else out[k] = d.specs[k];
  }
  if (renamed) { d.specs = out; fs.writeFileSync(p, JSON.stringify(d, null, 2)); totalRenamed += renamed; filesTouched++; console.log(`  ${f}: ${renamed} keys`); }
}
console.log(`Spec keys renamed: ${totalRenamed} across ${filesTouched} files`);

// 2) merge makes.json Holden model tree
const mp = path.join(dir, 'makes.json');
const m = JSON.parse(fs.readFileSync(mp));
const H = m.Holden;
const merged = H['Commodore'] || {};
let dropped = 0;
for (const model of Object.keys(H)) {
  if (!/^Commodore \([A-Z]+\)$/.test(model) && model !== 'Commodore Ute') continue;
  for (const year of Object.keys(H[model])) {
    const set = new Set([...(merged[year] || []), ...H[model][year]]);
    merged[year] = [...set].sort();
  }
  delete H[model];
  dropped++;
}
H['Commodore'] = merged;
fs.writeFileSync(mp, JSON.stringify(m, null, 2));
const yrs = Object.keys(merged).map(Number).sort((a, b) => a - b);
console.log(`makes.json: merged ${dropped} models -> "Commodore" (${yrs[0]}–${yrs[yrs.length - 1]}, ${Object.keys(merged).length} years)`);
