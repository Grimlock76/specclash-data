'use strict';
// supplement348.json — 2026-10-25: Hyundai Ioniq 6 2024 (CE.V2 MY24) and 2026
// (CE.V3). Specs as the 2025 rows (gen347; same Carsales spec tables). Prices:
// 2024 = Carsales MY24 price when new; 2026 = CarsGuide 2026 MSRP (Carsales
// lists only the N, drive-away) — identical to 2025.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const e = (t, p) => ({ ...existing('Hyundai', 'Ioniq 6', 2025, t), price: $(p) });
const base = ['Standard Range RWD', 'Long Range RWD', 'Dynamiq RWD', 'Epiq RWD', 'Dynamiq AWD', 'Epiq AWD'];
const p24 = [66500, 72500, 78500, 82000, 83000, 86500];
const p26 = [67300, 73300, 78500, 82000, 83000, 86500];

writeLineups(348, {
  'Hyundai|Ioniq 6|2024': Object.fromEntries(base.map((t, i) => [t, e(t, p24[i])])),
  'Hyundai|Ioniq 6|2026': { ...Object.fromEntries(base.map((t, i) => [t, e(t, p26[i])])), 'N': e('N', 114918) },
});
