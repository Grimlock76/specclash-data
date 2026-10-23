'use strict';
// supplement286.json — 2026-10-23: 0-100 fills for 2026 trims (rows otherwise
// carried over unchanged).
//   i30 N DCT (+ N Premium DCT): 5.3 s claimed with launch control — Carsales
//     "Hyundai i30 N Premium 2026 Review". Manual: no claim found -> null.
//   Ranger Raptor: estimate ~5.8 s, midpoint of Carsales' 2026 review
//     ("around 6.0sec") and CarsGuide's launch report (5.5 s).
const { writeLineups, existing } = require('./lineup-lib.cjs');
const { MAKES } = { MAKES: require('../src/data/makes.json') };
function carry(make, model, year, patch) {
  const rows = {};
  for (const t of MAKES[make][model][year]) rows[t] = { ...existing(make, model, year, t), ...(patch[t] || {}) };
  return rows;
}
writeLineups(286, {
  'Hyundai|i30 N|2026': carry('Hyundai', 'i30 N', '2026', {
    'N DCT': { acceleration: 5.3, accelClaimed: true },
    'N Premium DCT': { acceleration: 5.3, accelClaimed: true },
  }),
  'Ford|Ranger|2026': carry('Ford', 'Ranger', '2026', {
    'P703 Raptor': { acceleration: 5.8, accelClaimed: false },
  }),
});
