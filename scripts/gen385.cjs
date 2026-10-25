'use strict';
// supplement385.json — 2026-10-25: VW Polo (AE) 2024 (MY24: 85TSI Life /
// Style, GTI) and 2025 (MY25 + the MY26 CityLife Carsales files under 2025).
// Replaces stale rows ("70TSI Trendline", "85TSI Comfortline", ~ prices).
// Specs as the 2026 rows (gen271; same Carsales spec tables) + price when new:
// Carsales variant pages (base price incl GST & LCT). Kerb below tare / tare-
// only -> weight null (also fixes the 2026 Life / CityLife rows: 1168 < 1187).
// MY24 85TSI: only combined fuel (5.0) listed -> city/highway null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const MAKES = require('../src/data/makes.json');
const p = t => ({ ...existing('Volkswagen', 'Polo', 2026, t), weight: null });
const y26 = Object.fromEntries(MAKES.Volkswagen.Polo['2026'].map(t => [t, p(t)]));
y26.GTI = existing('Volkswagen', 'Polo', 2026, 'GTI');
const L24 = { ...p('85TSI Life'), fc: null, fh: null, fx: 5.0 };

writeLineups(385, {
  'Volkswagen|Polo|2024': {
    '85TSI Life': { ...L24, price: $(29490) },
    '85TSI Style': { ...L24, price: $(32540) },
    'GTI': { ...y26.GTI, weight: null, price: $(40390) },
  },
  'Volkswagen|Polo|2025': {
    '85TSI Life': { ...p('85TSI Life'), price: $(30790) },
    '85TSI CityLife': { ...p('85TSI CityLife'), price: $(32790) },
    '85TSI Style': { ...p('85TSI Style'), weight: 1210, price: $(34790) },
    'GTI': { ...y26.GTI, weight: null, price: $(41790) },
  },
  'Volkswagen|Polo|2026': y26,
});
