'use strict';
// One-off (2026-10-23): flag 0-100 times in the Carsales-sourced lineup
// supplements (249-283, 285) as manufacturer-claimed so the app shows them
// without "~". Rows carried over unchanged via existing() stay estimates.
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const CARRIED = new Set(['Hyundai|Staria|2026|Load', 'Audi|A3 Sportback|2026|S3', 'Audi|A3 Sportback|2026|RS3',
  'Alfa Romeo|Giulia|2026|Quadrifoglio']);
let n = 0;
for (let i = 249; i <= 285; i++) {
  if (i === 284) continue; // duplicate-model merge: copied rows, not claimed data
  const p = path.join(DATA, `supplement${i}.json`);
  if (!fs.existsSync(p)) continue;
  const o = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const [k, d] of Object.entries(o.specs)) {
    if (typeof d.acceleration !== 'number') continue;
    const claimed = !CARRIED.has(k);
    if (d.accelClaimed !== claimed) { d.accelClaimed = claimed; n++; }
  }
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + '\n');
}
console.log('flagged', n);
