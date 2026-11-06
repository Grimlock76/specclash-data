'use strict';
// supplement444.json — 2026-11-06: Mercedes-Benz / BMW / Audi / GWM / MG gap fill
// (2024-26). Rules match by stored powertrain (model + kW) or exact trim and fill
// ONLY blank fields; everything else carried over (existing()).
// Torque = maker-published system/total figure (Mercedes media / AU launch
//   coverage quoting Mercedes, BMW AU launch coverage, Audi AU, GWM AU brochures
//   "Combined", MG AU/UK). 0-100 claims: Audi AU Q8 55 5.6 / SQ8 4.5 (boost),
//   GWM AU H6 AWD PHEV 4.8, GWM Germany H6 Hybrid 179 kW/530 Nm 8.3, BMW X5 50e 4.8,
//   iX3 50 4.9, MG3 Hybrid+ 8.0 (MG claim
//   via CarsGuide), ZS Hybrid+ 8.7 (MG launch figure).
// Weights: Carsales kerb only where kerb >= tare (and > tare where both shown).
// Prices: before on-roads MSRP (carsales "price when new" / Mercedes AU coverage).
// Skipped: GWM/MG drive-away prices, Q6 quattro/SQ6 torque (per-motor only),
//   Tank 300 Hybrid / MG3 / ZS Hybrid torque (sources disagree), HS Hybrid 0-100
//   (gearbox mismatch), Maybach GLS600 0-100 (different torque), Isuzu 0-100
//   (none published), kerb < tare / kerb == tare / tare-only weights.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const makes = require('../src/data/makes.json');
const C = s => ({ acceleration: s, accelClaimed: true });
const kw = s => s.power ?? s.hp;
const Y = ['2024', '2025', '2026'];
const is = (...names) => (s, t) => names.includes(t);
const P = n => s => Math.abs(kw(s) - n) < 1;

const RULES = [
  // ---- Mercedes-Benz torque
  ['Mercedes-Benz', 'C-Class', Y, P(230), { torque: 550 }],
  ['Mercedes-Benz', 'C-Class', Y, P(500), { torque: 1020 }],
  ['Mercedes-Benz', 'C-Class', ['2026'], is('C400 electric'), { torque: 800, price: $(105700) }],
  ['Mercedes-Benz', 'E-Class', Y, P(450), { torque: 750 }],
  ['Mercedes-Benz', 'GLA', ['2025', '2026'], P(160), { torque: 450 }],
  ['Mercedes-Benz', 'GLC', Y, P(500), { torque: 1020 }],
  ['Mercedes-Benz', 'GLC', ['2025', '2026'], P(230), { torque: 550 }],
  ['Mercedes-Benz', 'GLC', ['2026'], P(360), { torque: 800 }],
  ['Mercedes-Benz', 'EQA', ['2024'], is('EQA350 4MATIC'), { torque: 520 }],
  ['Mercedes-Benz', 'EQA', ['2026'], is('EQA250+'), { price: $(85800) }],
  ['Mercedes-Benz', 'CLE', ['2026'], is('CLE200 Coupe'), { price: $(104100), weight: 1823, fx: 7.3 }],
  ['Mercedes-Benz', 'CLE', ['2026'], is('CLE300 4MATIC Coupe'), { price: $(125300), weight: 1879, fx: 7.5 }],
  ['Mercedes-Benz', 'CLE', ['2026'], is('CLE53 AMG 4MATIC+ Coupe'), { price: $(158900), weight: 2015, fx: 9.6 }],
  // ---- Mercedes-Benz weights (kerb > tare)
  ['Mercedes-Benz', 'A-Class', ['2025'], is('A250'), { weight: 1590 }],
  ['Mercedes-Benz', 'A-Class', ['2025'], is('A35 AMG'), { weight: 1639 }],
  ['Mercedes-Benz', 'A-Class', ['2025'], is('A45 S AMG'), { weight: 1672 }],
  ['Mercedes-Benz', 'C-Class', ['2024', '2025'], is('C350 e'), { weight: 2100 }],
  ['Mercedes-Benz', 'E-Class', ['2024', '2025'], is('E53 AMG'), { weight: 2408 }],
  ['Mercedes-Benz', 'GLA', ['2024'], is('GLA200 City Edition'), { weight: 1562 }],
  ['Mercedes-Benz', 'GLE', ['2025'], is('GLE300 d 4MATIC', 'GLE300 d 4MATIC Edition 7'), { weight: 2458 }],
  ['Mercedes-Benz', 'CLA', ['2025'], is('CLA250'), { weight: 1633 }],
  ['Mercedes-Benz', 'GLB', ['2025'], is('GLB200 Special Edition'), { weight: 1708 }],
  ['Mercedes-Benz', 'GLB', ['2026'], is('GLB200', 'GLB200 Special Edition'), { weight: 1708 }],
  ['Mercedes-Benz', 'GLB', ['2025'], is('GLB250 4MATIC Special Edition'), { weight: 1849 }],
  ['Mercedes-Benz', 'GLB', ['2026'], is('GLB250 4MATIC', 'GLB250 4MATIC Special Edition'), { weight: 1849 }],
  ['Mercedes-Benz', 'GLB', ['2025'], is('GLB35 AMG 4MATIC'), { weight: 1862 }],
  ['Mercedes-Benz', 'GLB', ['2026'], is('GLB35 AMG 4MATIC'), { weight: 1864 }],
  // ---- BMW
  ['BMW', 'X1', ['2026'], P(180), { torque: 477 }],
  ['BMW', 'X3', ['2026'], P(220), { torque: 450 }],
  ['BMW', 'X5', ['2026'], P(360), { torque: 700, ...C(4.8) }],
  ['BMW', 'i4', Y, P(400), { torque: 795 }],
  ['BMW', 'iX', Y, P(240), { torque: 630 }],
  ['BMW', 'iX', Y, P(385), { torque: 765 }],
  ['BMW', 'iX', Y, P(455), { torque: 1100 }],
  ['BMW', 'iX', Y, P(300), { torque: 700 }],
  ['BMW', 'iX3', ['2026'], P(345), { torque: 645, ...C(4.9) }],
  ['BMW', 'i5', Y, P(442), { torque: 820 }],
  ['BMW', 'i7', Y, P(400), { torque: 745 }],
  ['BMW', 'i7', Y, P(485), { torque: 1100 }],
  ['BMW', 'M5', Y, P(535), { torque: 1000 }],
  ['BMW', 'iX2', Y, P(230), { torque: 494 }],
  ['BMW', 'iX1', Y, P(230), { torque: 494 }],
  // ---- Audi
  ['Audi', 'Q5', ['2024', '2025'], s => P(270)(s) && /PHEV/.test(String(s.engine)), { torque: 500 }],
  ['Audi', 'Q4 e-tron', Y, P(250), { torque: 679 }],
  ['Audi', 'Q4 Sportback e-tron', Y, P(250), { torque: 679 }],
  ['Audi', 'Q8 e-tron', ['2024', '2025'], s => P(250)(s) || P(300)(s), { torque: 664 }],
  ['Audi', 'Q8 e-tron Sportback', ['2024', '2025'], s => P(250)(s) || P(300)(s), { torque: 664 }],
  ['Audi', 'Q8 e-tron', ['2024', '2025'], P(300), C(5.6)],
  ['Audi', 'Q8 e-tron Sportback', ['2024', '2025'], P(300), C(5.6)],
  ['Audi', 'Q8 e-tron', ['2024', '2025'], P(370), { torque: 973, ...C(4.5) }],
  ['Audi', 'Q8 e-tron Sportback', ['2024', '2025'], P(370), { torque: 973, ...C(4.5) }],
  // ---- GWM
  ['GWM', 'Haval H6', Y, P(179), { torque: 530, ...C(8.3) }],
  ['GWM', 'Haval H6', Y, P(240), { torque: 540 }],
  ['GWM', 'Haval H6', Y, P(268), { torque: 760, ...C(4.8) }],
  ['GWM', 'Haval Jolion', Y, P(140), { torque: 375 }],
  ['GWM', 'Haval Jolion', ['2026'], (s, t) => /^(Premium|Vanta) Hybrid$/.test(t), { weight: 1575 }],
  // ---- MG
  ['MG', 'MG3', Y, P(155), C(8.0)],
  ['MG', 'ZS', Y, P(158), C(8.7)],
  ['MG', 'MG4', Y, P(300), { torque: 600 }],
  ['MG', 'Cyberster', Y, P(375), { torque: 725 }],
  ['MG', 'HS', ['2026'], P(165), { torque: 340 }],
  ['MG', 'HS', ['2026'], P(220), { torque: 350 }],
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
writeLineups(444, lineups);
console.log('fields filled:', filled, JSON.stringify(per));
