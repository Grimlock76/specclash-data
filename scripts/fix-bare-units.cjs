'use strict';
// One-time fix (2026-07-03): supplements 74-77 (European classics/exotics)
// stored bare unitless strings — hp:"610" (metric PS, per Euro spec sheets),
// z1:"3.2", fc:"15.5". Convert PS -> "NNN kW (NNN hp)" (kW = PS*0.7355,
// hp = PS*0.98632) and append display units elsewhere.
// Sanity anchors: Huracan LP610-4 610PS -> 449 kW (602 hp) matches published;
// Ferrari 348 tb 300PS -> 221 kW (296 hp) matches published.
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');

let hpFixed = 0, timeFixed = 0, fuelFixed = 0;
for (const f of ['supplement74.json', 'supplement75.json', 'supplement76.json', 'supplement77.json']) {
  const full = path.join(DATA, f);
  const j = JSON.parse(fs.readFileSync(full));
  for (const k of Object.keys(j.specs)) {
    const s = j.specs[k];
    if (typeof s.hp === 'string' && /^\d+(\.\d+)?$/.test(s.hp.trim())) {
      const ps = +s.hp;
      s.hp = `${Math.round(ps * 0.7355)} kW (${Math.round(ps * 0.98632)} hp)`;
      hpFixed++;
    }
    for (const key of ['z1', 'qm']) {
      if (typeof s[key] === 'string' && /^~?\d+(\.\d+)?$/.test(s[key].trim())) { s[key] = s[key].trim() + ' sec'; timeFixed++; }
    }
    for (const key of ['fc', 'fh', 'fx']) {
      if (typeof s[key] === 'string' && /^\d+(\.\d+)?$/.test(s[key].trim())) { s[key] = s[key].trim() + 'L'; fuelFixed++; }
    }
  }
  fs.writeFileSync(full, JSON.stringify(j, null, 2) + '\n');
}
console.log(`hp converted from PS: ${hpFixed}; time units appended: ${timeFixed}; fuel units appended: ${fuelFixed}`);
