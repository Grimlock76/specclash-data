'use strict';
// supplement321.json — 2026-10-23: 2025 (AU) Nissan Navara (D23 MY25 dual-cab
// 4x4 utes). Carsales' MY25 D23 pages match the MY24 rows (gen320) except the
// SL and ST autos' kerb/payload; each grade's manual + auto page checked. The
// D27 (Triton-based) cars Carsales also files under 2025 are the 2026 lineup.
const { writeLineups, existing } = require('./lineup-lib.cjs');
const keep = ['SL Manual', 'ST Manual', 'ST-X Manual', 'ST-X', 'PRO-4X Manual', 'PRO-4X', 'PRO-4X Warrior Manual', 'PRO-4X Warrior'];
const rows = {};
for (const t of keep) rows[t] = existing('Nissan', 'Navara', 2024, t);
rows['SL'] = { ...existing('Nissan', 'Navara', 2024, 'SL'), weight: 2026, payload: 1124 };
rows['ST'] = { ...existing('Nissan', 'Navara', 2024, 'ST'), weight: 2038, payload: 1112 };
const order = ['SL Manual', 'SL', 'ST Manual', 'ST', 'ST-X Manual', 'ST-X', 'PRO-4X Manual', 'PRO-4X', 'PRO-4X Warrior Manual',
  'PRO-4X Warrior'];
writeLineups(321, { 'Nissan|Navara|2025': Object.fromEntries(order.map(t => [t, rows[t]])) });
