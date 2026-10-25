'use strict';
// supplement369.json — 2026-10-25: Mitsubishi Pajero Sport (QG, 4x4 only)
// 2024 (MY24) and 2026. Replaces stale rows ("GLX+", ~ prices). Specs as the
// 2025 rows (gen299; same Carsales spec tables). Prices: 2024 = Carsales MY24
// price when new (base price incl GST & LCT); 2026 = CarsGuide MSRP (Carsales
// 2026 page returned server errors) — identical to 2025.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const T = ['GLX', 'GLS', 'Exceed', 'GSR'];
const line = p => Object.fromEntries(T.map((t, i) => [t, { ...existing('Mitsubishi', 'Pajero Sport', 2025, t), price: $(p[i]) }]));

writeLineups(369, {
  'Mitsubishi|Pajero Sport|2024': line([51540, 56890, 62590, 64840]),
  'Mitsubishi|Pajero Sport|2026': line([51540, 57640, 63340, 65590]),
});
