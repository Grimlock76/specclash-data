'use strict';
// supplement446.json — 2026-11-06: Porsche / Land Rover / Polestar / BYD / Isuzu gap
// fill (2024-26). Rules match by stored powertrain (model + kW) and fill ONLY
// blank fields; everything else carried over (existing()).
// Torque (system/total): Porsche newsroom & tech data (911 GTS T-Hybrid 610,
//   Turbo S 800 via GoAuto, Cayenne E-Hybrid 650 / S 750 / Turbo 950, Panamera
//   4 E 650 / 4S E 750 / Turbo E 930 / Turbo S E 1000); Land Rover maker data via
//   ADAC (Defender P300e 625, RR & RRS P460e 660), RR/RRS EV550 850 (CarExpert);
//   Polestar UK/SG/global factsheets (2 dual 740, 3 360 kW 840 / 380 kW 910,
//   4 686); BYD AU (Sealion 6 FWD 300, AWD 550) and CarExpert (Seal Performance
//   670, Sealion 6 253 kW 550).
// 0-100: BYD AU claims via CarExpert (Shark 6 1.5T 5.7, 2.0T 5.5); WhichCar test
//   D-Max X-Terrain 3.0 6AT 10.1 (tested trim only).
// Skipped: Tesla torque (not published), Taycan Turbo GT (1240 vs 1340 Nm),
//   Cayenne Electric (torque quoted at 850 kW launch power), RRS Electric price
//   (MY27), LDV prices (drive-away only), all tare-only weights.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const makes = require('../src/data/makes.json');
const C = s => ({ acceleration: s, accelClaimed: true });
const T = s => ({ acceleration: s, accelClaimed: false });
const kw = s => s.power ?? s.hp;
const Y = ['2024', '2025', '2026'];
const is = (...names) => (s, t) => names.includes(t);
const P = n => s => Math.abs(kw(s) - n) < 1;

const RULES = [
  ['Porsche', '911', Y, P(398), { torque: 610 }],
  ['Porsche', '911', Y, P(523), { torque: 800 }],
  ['Porsche', 'Cayenne', Y, P(346), { torque: 650 }],
  ['Porsche', 'Cayenne', Y, P(382), { torque: 750 }],
  ['Porsche', 'Cayenne', Y, P(544), { torque: 950 }],
  ['Porsche', 'Panamera', Y, s => P(346)(s) && /PHEV/.test(String(s.engine)), { torque: 650 }],
  ['Porsche', 'Panamera', Y, s => P(400)(s) && /PHEV/.test(String(s.engine)), { torque: 750 }],
  ['Porsche', 'Panamera', Y, s => P(500)(s) && /PHEV/.test(String(s.engine)), { torque: 930 }],
  ['Porsche', 'Panamera', Y, s => P(575)(s) && /PHEV/.test(String(s.engine)), { torque: 1000 }],
  ['Land Rover', 'Defender', ['2026'], s => P(221)(s) && /PHEV/.test(String(s.engine)), { torque: 625 }],
  ['Land Rover', 'Range Rover', ['2026'], s => P(338)(s) && /PHEV/.test(String(s.engine)), { torque: 660 }],
  ['Land Rover', 'Range Rover Sport', ['2026'], s => P(338)(s) && /PHEV/.test(String(s.engine)), { torque: 660 }],
  ['Land Rover', 'Range Rover', ['2026'], P(405), { torque: 850 }],
  ['Land Rover', 'Range Rover Sport', ['2026'], P(405), { torque: 850 }],
  ['Polestar', '2', Y, s => P(310)(s) || P(350)(s), { torque: 740 }],
  ['Polestar', '3', Y, P(360), { torque: 840 }],
  ['Polestar', '3', Y, P(380), { torque: 910 }],
  ['Polestar', '4', Y, P(400), { torque: 686 }],
  ['BYD', 'Seal', Y, P(390), { torque: 670 }],
  ['BYD', 'Shark', Y, P(321), C(5.7)],
  ['BYD', 'Shark', ['2026'], P(350), C(5.5)],
  ['BYD', 'Sealion 6', Y, P(160), { torque: 300 }],
  ['BYD', 'Sealion 6', Y, s => P(238)(s) || P(253)(s), { torque: 550 }],
  ['Isuzu', 'D-MAX', Y, (s, t) => P(140)(s) && t === 'X-Terrain' && /6-speed auto/.test(String(s.transmission)), T(10.1)],
];

const blank = v => v === null || v === undefined || v === '';
const alias = { acceleration: 'z1', torque: 'tq', weight: 'wt', price: 'pr' };
const lineups = {}; const per = {}; let filled = 0; const hits = new Set();
for (const [i, [mk, md, years, test, fields]] of RULES.entries()) {
  for (const y of years) {
    const trims = makes[mk]?.[md]?.[y]; if (!trims) continue;
    const mmy = `${mk}|${md}|${y}`;
    lineups[mmy] ??= Object.fromEntries(trims.map(t => [t, existing(mk, md, y, t)]));
    for (const t of trims) {
      const s = lineups[mmy][t];
      if (!test(s, t)) continue;
      hits.add(i);
      for (const [k, v] of Object.entries(fields)) {
        if (k === 'accelClaimed') continue;
        if (!blank(s[k]) || (alias[k] && !blank(s[alias[k]]))) continue;
        s[k] = v; filled++; per[mk] = (per[mk] || 0) + 1;
        if (k === 'acceleration') s.accelClaimed = fields.accelClaimed;
      }
    }
  }
}
RULES.forEach((r, i) => { if (!hits.has(i)) console.log('rule matched nothing:', r[0], r[1], r[2].join(',')) });
writeLineups(446, lineups);
console.log('fields filled:', filled, JSON.stringify(per));
