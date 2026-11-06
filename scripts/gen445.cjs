'use strict';
// supplement445.json — 2026-11-06: Honda / Lexus / Suzuki / Skoda / Volvo gap fill
// (2024-26). Rules match by stored powertrain (model + kW) or exact trim and fill
// ONLY blank fields; everything else carried over (existing()).
// 0-100 claims: Honda UK ZR-V e:HEV product guide 7.8 (135 kW/315 Nm, e-CVT, FWD);
//   Lexus UK tech specs (0-62 mph) NX350h FWD 8.7 / AWD 7.7, UX300e 7.5; Skoda AU
//   Kodiaq PHEV 8.4; Volvo AU XC90 B6 6.7 (via CarExpert); EX90 Twin 5.5,
//   Performance 4.2.
// Torque (system/total as published): ZR-V e:HEV 315 Nm (CarExpert "total system
//   output"; Honda: drive motor), Kodiaq PHEV 350, Volvo T8 709, EX30 Twin 543,
//   EX90 Twin 670 / Performance 870, EX40 Twin 660.
// Weights: kerb only where kerb > tare (Carsales; Karoq from CarExpert's kerb/tare
//   pair). Prices before on-roads only: Lexus RZ 2026 (CarExpert / Chasing Cars),
//   Kodiaq PHEV $63,490.
// Skipped: Honda / Skoda / Suzuki prices (drive-away only), Civic and CR-V e:HEV
//   0-100 (grade-dependent, AU grade mapping unknown), UX300h (drive not stated),
//   LBX AWD (CarExpert data only), Suzuki UK 0-62 figures (third-party reprints),
//   Lexus hybrid/RZ torque (per-motor only), RZ550e price (sources disagree),
//   Octavia RS weight (sources disagree), kerb < tare / tare-only weights.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const makes = require('../src/data/makes.json');
const C = s => ({ acceleration: s, accelClaimed: true });
const kw = s => s.power ?? s.hp;
const dr = s => String(s.drivetrain || s.drive || '');
const Y = ['2024', '2025', '2026'];
const is = (...names) => (s, t) => names.includes(t);
const P = n => s => Math.abs(kw(s) - n) < 1;

const RULES = [
  // ---- Honda
  ['Honda', 'ZR-V', Y, (s, t) => P(135)(s) && /e:HEV/.test(t), { torque: 315, ...C(7.8) }],
  ['Honda', 'HR-V', ['2024'], is('Vi X'), { weight: 1267 }],
  ['Honda', 'Civic', ['2025'], is('Type R'), { weight: 1429 }],
  // ---- Lexus
  ['Lexus', 'NX', Y, s => P(179)(s) && /FWD/.test(dr(s)), C(8.7)],
  ['Lexus', 'NX', Y, s => P(179)(s) && /AWD/.test(dr(s)), C(7.7)],
  ['Lexus', 'UX', ['2024', '2025'], s => P(150)(s), C(7.5)],
  ['Lexus', 'RZ', ['2026'], is('RZ500e Luxury'), { price: $(84500) }],
  ['Lexus', 'RZ', ['2026'], is('RZ500e Sports Luxury'), { price: $(91000) }],
  ['Lexus', 'RZ', ['2026'], is('RZ600e F Sport Performance'), { price: $(135000) }],
  // ---- Suzuki
  ['Suzuki', 'Vitara', ['2025', '2026'], is('Turbo Hybrid ALLGRIP'), { weight: 1310, fx: 5.9 }],
  // ---- Skoda
  ['Skoda', 'Kodiaq', ['2025', '2026'], s => P(150)(s) && /PHEV/.test(String(s.engine)), { torque: 350, ...C(8.4) }],
  ['Skoda', 'Kodiaq', ['2025'], s => P(150)(s) && /PHEV/.test(String(s.engine)), { price: $(63490) }],
  ['Skoda', 'Karoq', ['2025'], s => P(110)(s), { weight: 1540 }],
  ['Skoda', 'Karoq', ['2025'], s => P(140)(s), { weight: 1685 }],
  // ---- Volvo
  ['Volvo', 'XC60', Y, P(340), { torque: 709 }],
  ['Volvo', 'XC90', Y, P(340), { torque: 709 }],
  ['Volvo', 'XC90', ['2024'], is('Ultimate B6 Bright'), C(6.7)],
  ['Volvo', 'EX30', Y, P(315), { torque: 543 }],
  ['Volvo', 'EX90', ['2026'], P(330), { torque: 670, ...C(5.5) }],
  ['Volvo', 'EX90', ['2026'], P(500), { torque: 870, ...C(4.2) }],
  ['Volvo', 'EX40', Y, P(300), { torque: 660 }],
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
writeLineups(445, lineups);
console.log('fields filled:', filled, JSON.stringify(per));
