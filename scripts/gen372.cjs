'use strict';
// supplement372.json — 2026-10-25: 2024 (AU) Honda CR-V (RS MY24) — VTi X+,
// VTi X7, VTi L (FWD/AWD), VTi L7, VTi LX AWD, e:HEV RS. Replaces stale rows
// ("VTi", "VTi-L", "e:PHEV", ~ prices). Specs as the 2025 rows (gen301; same
// Carsales spec tables) + VTi L FWD from its Carsales MY24 page. Price null:
// Carsales shows only Honda's drive-away price and CarsGuide only Glass's
// ranges, so there is no base list price to use.
const { writeLineups, existing } = require('./lineup-lib.cjs');
const c = t => ({ ...existing('Honda', 'CR-V', 2025, t), price: null });

writeLineups(372, {
  'Honda|CR-V|2024': {
    'VTi X+': c('VTi X+'),
    'VTi X7': c('VTi X7'),
    'VTi L': { ...c('VTi X+'), weight: 1623 },
    'VTi L AWD': c('VTi L AWD'),
    'VTi L7': c('VTi L7'),
    'VTi LX AWD': c('VTi LX AWD'),
    'e:HEV RS': c('e:HEV RS'),
  },
});
