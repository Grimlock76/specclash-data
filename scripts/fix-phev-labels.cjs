'use strict';
// One-time fix (2026-07-16): relabel plug-in hybrids stored with ft/fuelType
// "hybrid", "petrol", or "diesel". Detection: a non-EV, non-PHEV-labeled entry
// whose best fuel figure is under 2.2 L/100km — impossible for anything
// without a charge socket. The 2026-07 validator sweep confirmed every such
// model/trim (62 combos, e.g. Outlander PHEV, Volvo T8 Recharge, BMW X5
// xDrive45e, GLC300e, GLE350de, BYD DM-i) is a genuine plug-in.
// Also normalizes the label-spelling zoo ("phev", "PHEV (95 RON)",
// "Petrol/Plugin Hybrid", …) to the single display string "Plug-in Hybrid".
// Run with --dry to preview without writing.
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const DRY = process.argv.includes('--dry');

const num = v => {
  if (v === null || v === undefined) return null;
  if (typeof v === 'number') return v;
  const m = String(v).replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  return m ? +m[0] : null;
};

const files = fs.readdirSync(DATA)
  .filter(f => /^supplement\d+\.json$/.test(f))
  .sort((x, y) => +x.match(/\d+/)[0] - +y.match(/\d+/)[0]);
files.unshift('holden.json', 'ford.json');

let changed = 0, filesTouched = 0;
for (const f of files) {
  const full = path.join(DATA, f);
  const j = JSON.parse(fs.readFileSync(full));
  const specs = j.specs || j;
  let touched = 0;
  for (const key of Object.keys(specs)) {
    const s = specs[key];
    const field = s.ft !== undefined ? 'ft' : 'fuelType';
    const ft = s[field] || '';
    if (/plug|phev/i.test(ft)) {
      if (ft === 'Plug-in Hybrid') continue;
      console.log(`${key}  [${f}]  ${JSON.stringify(ft)} -> "Plug-in Hybrid" (normalize)`);
      s[field] = 'Plug-in Hybrid';
      touched++;
      continue;
    }
    if (/electric/i.test(ft)) continue;
    const vals = ['fc', 'fh', 'fx'].map(k => num(s[k])).filter(v => v !== null);
    if (!vals.length || Math.min(...vals) >= 2.2) continue;
    console.log(`${key}  [${f}]  ${JSON.stringify(ft)} -> "Plug-in Hybrid"`);
    s[field] = 'Plug-in Hybrid';
    touched++;
  }
  if (touched && !DRY) fs.writeFileSync(full, JSON.stringify(j, null, 2) + '\n');
  if (touched) filesTouched++;
  changed += touched;
}
console.log(`\n${changed} entries relabeled across ${filesTouched} files${DRY ? ' (dry run)' : ''}`);
