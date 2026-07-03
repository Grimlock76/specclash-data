'use strict';
// One-time fix (2026-07-03) for old-format US-pack entries where the hp inside
// the "NNN kW (NNN hp)" string disagrees with the kW figure.
// - Year >= 1972: US ratings were SAE net, so the period hp figure is the
//   canonical number — recompute kW from it.
// - Year < 1972 with hp well above kW-equivalent: that's a SAE gross figure —
//   keep both but label it "(NNN hp gross)" so the display is honest.
// - Year < 1972 with hp BELOW kW-equivalent (odd case): recompute hp from kW.
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');

const FILES = ['supplement80.json', 'supplement81.json', 'supplement82.json', 'supplement83.json',
  'supplement92.json', 'supplement95.json', 'supplement96.json', 'supplement97.json'];

let net = 0, gross = 0, hpFixed = 0;
for (const f of FILES) {
  const full = path.join(DATA, f);
  const j = JSON.parse(fs.readFileSync(full));
  const specs = j.specs || j;
  for (const k of Object.keys(specs)) {
    const s = specs[k];
    if (typeof s.hp !== 'string') continue;
    const m = s.hp.replace(/,/g, '').match(/^(\d+(?:\.\d+)?)\s*kW\s*\((\d+(?:\.\d+)?)\s*hp\)$/i);
    if (!m) continue;
    const kw = +m[1], hp = +m[2];
    if (Math.abs(kw * 1.34102 - hp) / hp <= 0.04) continue;
    const year = +k.split('|')[k.split('|').length - 2] || 0;
    if (year >= 1972) {
      const newKw = Math.round(hp / 1.34102);
      s.hp = `${newKw} kW (${hp} hp)`;
      net++;
    } else if (hp > kw * 1.34102) {
      s.hp = `${kw} kW (${hp} hp gross)`;
      gross++;
    } else {
      s.hp = `${kw} kW (${Math.round(kw * 1.34102)} hp)`;
      hpFixed++;
    }
  }
  fs.writeFileSync(full, JSON.stringify(j, null, 2) + '\n');
}
console.log(`net-era kW recomputed: ${net}; gross-labelled: ${gross}; hp recomputed: ${hpFixed}`);
