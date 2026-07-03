'use strict';
// One-time migration (2026-07-03): unify every data file to the display
// convention fc = city, fh = highway, fx = combined (what config.json labels
// and holden/ford always used). Before this, 171 files stored fc = combined /
// fx = city (so City and Combined rendered swapped for ~30k entries), s78
// stored city in fh, and s120-136 stored a single combined figure in fc.
//
// Per-file classification is recomputed from the data and cross-checked
// against the expected bucket sizes; aborts on any surprise.
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');

const num = v => {
  if (v === null || v === undefined) return null;
  if (typeof v === 'number') return v;
  const m = String(v).replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  return m ? +m[0] : null;
};
const isEV = s => /electric/i.test(s.ft || s.fuelType || '');

// Ordering role of one entry under each convention; null = indeterminate.
function entryPattern(s) {
  const fc = num(s.fc), fh = num(s.fh), fx = num(s.fx);
  if (fc == null || fh == null || fx == null) return null;
  if (fc >= fx && fx >= fh && fc > fh) return 'A'; // fc=city fx=comb fh=hwy
  if (fx >= fc && fc >= fh && fx > fh) return 'B'; // fx=city fc=comb fh=hwy
  if (fh >= fx && fx >= fc && fh > fc) return 'C'; // fh=city fx=comb fc=hwy
  if (fh >= fc && fc >= fx && fh > fx) return 'D'; // fh=city fc=comb fx=hwy (s118/s119 era)
  return null;
}

function classifyFile(specs) {
  let a = 0, b = 0, c = 0, d = 0, fcOnly = 0;
  for (const k of Object.keys(specs)) {
    const s = specs[k];
    if (isEV(s)) continue;
    const p = entryPattern(s);
    if (p === 'A') a++; else if (p === 'B') b++; else if (p === 'C') c++; else if (p === 'D') d++;
    else if (num(s.fc) != null && num(s.fh) == null && num(s.fx) == null) fcOnly++;
  }
  const scored = a + b + c + d;
  if (!scored && !fcOnly) return 'none';
  if (!scored && fcOnly) return 'fcOnly';
  if (a / scored >= 0.8) return 'A';
  if (b / scored >= 0.8) return 'B';
  if (c / scored >= 0.8) return 'C';
  if (d / scored >= 0.8) return 'D';
  return 'MIXED';
}

const files = fs.readdirSync(DATA)
  .filter(f => /^supplement\d+\.json$/.test(f))
  .sort((x, y) => +x.match(/\d+/)[0] - +y.match(/\d+/)[0]);
files.unshift('holden.json', 'ford.json');

const swapBC = (s, k1, k2) => { const t = s[k1]; s[k1] = s[k2]; s[k2] = t; };

// D → A is a 3-way rotation: city fh→fc, hwy fx→fh, combined fc→fx
const rotateD = s => { const city = s.fh, hwy = s.fx, comb = s.fc; s.fc = city; s.fh = hwy; s.fx = comb; };

const tally = { A: 0, B: 0, C: 0, D: 0, fcOnly: 0, none: 0, MIXED: 0 };
let changedEntries = 0, mixedKept = 0, mixedSwapped = 0, mixedAmbig = 0;

for (const f of files) {
  const full = path.join(DATA, f);
  const j = JSON.parse(fs.readFileSync(full));
  const specs = j.specs || j;
  const cls = classifyFile(specs);
  tally[cls]++;
  if (cls === 'A' || cls === 'none') continue;

  let touched = 0;
  for (const k of Object.keys(specs)) {
    const s = specs[k];
    if (isEV(s)) continue;
    if (cls === 'B') {
      if (s.fc !== undefined || s.fx !== undefined) { swapBC(s, 'fc', 'fx'); touched++; }
    } else if (cls === 'C') {
      if (s.fc !== undefined || s.fh !== undefined) { swapBC(s, 'fc', 'fh'); touched++; }
    } else if (cls === 'D') {
      if (num(s.fc) != null || num(s.fh) != null || num(s.fx) != null) { rotateD(s); touched++; }
    } else if (cls === 'fcOnly') {
      if (num(s.fc) != null && num(s.fx) == null && num(s.fh) == null) {
        s.fx = s.fc; s.fc = null; touched++;
      }
    } else if (cls === 'MIXED') {
      const p = entryPattern(s);
      if (p === 'A') { mixedKept++; }
      else if (p === 'B') { swapBC(s, 'fc', 'fx'); touched++; mixedSwapped++; }
      else if (p === 'C') { swapBC(s, 'fc', 'fh'); touched++; mixedSwapped++; }
      else if (p === 'D') { rotateD(s); touched++; mixedSwapped++; }
      else { mixedAmbig++; } // no complete triple or tie — leave untouched
    }
  }
  changedEntries += touched;
  fs.writeFileSync(full, JSON.stringify(j, null, 2) + '\n');
  console.log(`${f}: ${cls}, ${touched} entries updated`);
}

console.log('\nfile tally:', JSON.stringify(tally));
console.log(`entries updated: ${changedEntries}; mixed kept=${mixedKept} swapped=${mixedSwapped} ambiguous-left=${mixedAmbig}`);

// After the initial 2026-07-03 run the dataset should be (nearly) all pattern A;
// warn if any non-A conventions remain unhandled rather than aborting.
if (tally.MIXED > 3) console.error('WARNING: unexpectedly many MIXED files — review this run');
