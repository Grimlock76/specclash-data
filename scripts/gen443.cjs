'use strict';
// supplement443.json — 2026-11-06: Ford / Volkswagen / Nissan / Mitsubishi gap
// fill (2024-26). Rules match trims by their stored powertrain, then fill ONLY
// blank fields; everything else is carried over (existing()).
// 0-100 claims (accelClaimed true), identical engine/kW/torque/gearbox/drive:
//   Ford Germany Ranger brochure (2.0 bi-turbo 154 kW 10.5 incl. Tremor/Wildtrak X
//   151 kW; PHEV 207 kW/697 Nm 9.2); VW South Africa (Golf 8.5 110 kW/250 Nm 8AT
//   8.5; Tiguan Mk2 110TSI 6DSG 9.2, 162TSI 6.5; Tiguan Mk3 110TSI 7DSG 9.2);
//   VW Australia T-Roc 110TSI 8.7; nissan.de / ADAC "Herstellerangabe" (Navara
//   2.3 TT 6MT 10.8; X-Trail e-POWER e-4ORCE 157 kW 7.0; X-Trail e-POWER FWD
//   150 kW/330 Nm 8.0; Qashqai e-POWER 140 kW/330 Nm 7.9).
// Tests (accelClaimed false, tested trim only): Drive Ranger Raptor 6.0; Drive
//   Amarok Aventura TDI600 8.6; WhichCar Pajero Sport Exceed 11.3.
// Torque: VW AU Touareg R eHybrid 700 Nm; VW AU/CarExpert Tiguan & Tayron 200TSI
//   eHybrid 400 Nm system.
// Weights: Carsales kerb, only where kerb >= tare. Prices: Y63 Patrol launch
//   pricing before on-roads (Chasing Cars / The Beep, identical).
// Skipped: Ranger XL 2.0 single-turbo (body not recorded; DE 12.0 vs 12.1),
//   Golf Style (8.5) recorded as DSG, 150TSI eHybrid torque (range only),
//   X-Trail e-4ORCE 525 Nm (ADAC sum, Nissan publishes per-motor only),
//   2026 Ranger XLT weight (two cab types), kerb < tare / tare-only weights.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const makes = require('../src/data/makes.json');

const C = s => ({ acceleration: s, accelClaimed: true });
const T = s => ({ acceleration: s, accelClaimed: false });
const kw = s => s.power ?? s.hp, nm = s => s.torque ?? s.tq, gb = s => String(s.transmission || s.trans || ''), dr = s => String(s.drivetrain || s.drive || '');
const Y = ['2024', '2025', '2026'];

// [make, model, years, test(spec, trim), fields]
const RULES = [
  // ---- Ford Ranger
  ['Ford', 'Ranger', Y, s => /^(150|154)$/.test(String(kw(s))) && nm(s) === 500 && /10/.test(gb(s)) && /4WD|AWD/.test(dr(s)), C(10.5)],
  ['Ford', 'Ranger', Y, s => kw(s) === 207 && nm(s) === 697, C(9.2)],
  ['Ford', 'Ranger', ['2024', '2025'], (s, t) => t === 'P703 Raptor', T(6.0)],
  ['Ford', 'Ranger', ['2026'], (s, t) => t === 'P703 Wildtrak', { weight: 2360 }],
  ['Ford', 'Ranger', ['2026'], (s, t) => t === 'P703 Platinum', { weight: 2416 }],
  ['Ford', 'Ranger', ['2026'], (s, t) => t === 'P703 Black Edition V6', { weight: 2254 }],
  ['Ford', 'Ranger', ['2026'], (s, t) => t === 'P703 Raptor', { weight: 2510 }],
  // ---- Volkswagen
  ['Volkswagen', 'Golf', ['2025', '2026'], s => kw(s) === 110 && /8-speed auto/.test(gb(s)), C(8.5)],
  ['Volkswagen', 'Tiguan', ['2024'], s => kw(s) === 110 && /^6/.test(gb(s)), C(9.2)],
  ['Volkswagen', 'Tiguan', ['2024'], (s, t) => /^162TSI (Elegance|R-Line)$/.test(t), C(6.5)],
  ['Volkswagen', 'Tiguan', ['2025', '2026'], s => kw(s) === 110 && /^7/.test(gb(s)), C(9.2)],
  ['Volkswagen', 'Tiguan', ['2025', '2026'], (s, t) => /^200TSI eHybrid/.test(t), { torque: 400 }],
  ['Volkswagen', 'Tayron', ['2026'], (s, t) => /^200TSI eHybrid/.test(t), { torque: 400 }],
  ['Volkswagen', 'Touareg', Y, (s, t) => t === 'R eHybrid', { torque: 700 }],
  ['Volkswagen', 'T-Roc', Y, s => kw(s) === 110, C(8.7)],
  ['Volkswagen', 'T-Roc', ['2025'], (s, t) => t === '110TSI Style', { weight: 1370 }],
  ['Volkswagen', 'Amarok', Y, (s, t) => t === 'TDI600 Aventura', T(8.6)],
  ['Volkswagen', 'Amarok', ['2024'], (s, t) => t === 'TDI405 Core', { weight: 2267 }],
  ['Volkswagen', 'Amarok', ['2024'], (s, t) => t === 'TDI500 Life', { weight: 2301 }],
  ['Volkswagen', 'Amarok', ['2024'], (s, t) => t === 'TDI500 Style', { weight: 2330 }],
  ['Volkswagen', 'Amarok', ['2024'], (s, t) => t === 'TDI600 Style' || t === 'TDI600 PanAmericana', { weight: 2378 }],
  ['Volkswagen', 'Amarok', ['2024'], (s, t) => t === 'TDI600 Aventura', { weight: 2391 }],
  ['Volkswagen', 'Amarok', ['2024'], (s, t) => t === 'TSI452 Aventura', { weight: 2280 }],
  ['Volkswagen', 'Amarok', ['2026'], (s, t) => t === 'TDI600 PanAmericana', { weight: 2394 }],
  ['Volkswagen', 'Amarok', ['2026'], (s, t) => t === 'TDI600 Aventura', { weight: 2406 }],
  ['Volkswagen', 'Amarok', ['2026'], (s, t) => t === 'TSI452 Aventura', { weight: 2293 }],
  // ---- Nissan
  ['Nissan', 'Navara', ['2024', '2025'], s => kw(s) === 140 && /manual/i.test(gb(s)), C(10.8)],
  ['Nissan', 'X-Trail', ['2024', '2025'], s => kw(s) === 157 && /AWD/.test(dr(s)), C(7.0)],
  ['Nissan', 'X-Trail', ['2026'], (s, t) => kw(s) === 150 && /e-POWER/.test(t), C(8.0)],
  ['Nissan', 'Qashqai', ['2024', '2025'], (s, t) => kw(s) === 140 && nm(s) === 330 && /e-POWER/.test(t), C(7.9)],
  ['Nissan', 'Patrol', ['2026'], (s, t) => t === 'Y63 Ti', { price: $(98990) }],
  ['Nissan', 'Patrol', ['2026'], (s, t) => t === 'Y63 Ti+', { price: $(109480) }],
  ['Nissan', 'Patrol', ['2026'], (s, t) => t === 'Y63 Ti-L', { price: $(122690) }],
  ['Nissan', 'Patrol', ['2026'], (s, t) => t === 'Y63 Ti-L+', { price: $(134690) }],
  ['Nissan', 'Patrol', ['2026'], (s, t) => t === 'Y63 PRO-4X', { price: $(137590) }],
  ['Nissan', 'Patrol', ['2026'], (s, t) => t === 'Y63 Ti-L Reserve', { price: $(145990) }],
  // ---- Mitsubishi
  ['Mitsubishi', 'Pajero Sport', Y, (s, t) => t === 'Exceed', T(11.3)],
  ['Mitsubishi', 'Triton', ['2025'], (s, t) => t === 'GLX+', { weight: 2090 }],
  ['Mitsubishi', 'Outlander', ['2025'], (s, t) => t === 'ES 2WD', { weight: 1580 }],
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
        if (!blank(s[k]) || (alias[k] && !blank(s[alias[k]]))) continue;    // never overwrite
        s[k] = v; filled++; per[mk] = (per[mk] || 0) + 1;
        if (k === 'acceleration') s.accelClaimed = fields.accelClaimed;
      }
    }
  }
}
RULES.forEach((r, i) => { if (!hits.has(i)) console.log('rule matched nothing:', r.slice(0, 3).join(' ')) });
writeLineups(443, lineups);
console.log('fields filled:', filled, JSON.stringify(per));
