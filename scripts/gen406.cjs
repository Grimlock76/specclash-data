'use strict';
// supplement406.json — 2026-10-25: 2025 (AU) Genesis G70 (MY25) — 3.3T Sport
// Luxury sedan and 2.0T Shooting Brake Sport Line Luxury (the MY26 Signature
// cars Carsales also files under 2025 are the 2026 rows). Replaces stale rows
// ("2.0T", "3.3T Sport+", ~ prices). Specs as the 2026 rows (gen274; same
// Carsales spec tables) + price when new: Carsales MY25 pages (base price incl
// GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const g = t => existing('Genesis', 'G70', 2026, t);

writeLineups(406, {
  'Genesis|G70|2025': {
    '3.3T Sport Luxury Sedan': { ...g('3.3T Signature Sport Sedan'), price: $(87114) },
    '2.0T Shooting Brake Sport Line Luxury': { ...g('2.0T Shooting Brake Signature Sport Line'), price: $(80265) },
  },
});
