'use strict';
// supplement381.json — 2026-10-25: 2024 (AU) BYD Atto 3 Standard + Extended
// Range. Specs as the 2025 Essential / Premium rows (gen315; same Carsales spec
// tables) + price when new: Carsales 2024 variant pages (base price incl GST &
// LCT). Replaces stale ~ prices.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const a = (t, p) => ({ ...existing('BYD', 'Atto 3', 2025, t), price: $(p) });

writeLineups(381, {
  'BYD|Atto 3|2024': { 'Standard Range': a('Essential', 44499), 'Extended Range': a('Premium', 51011) },
});
