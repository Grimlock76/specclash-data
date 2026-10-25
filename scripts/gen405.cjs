'use strict';
// supplement405.json — 2026-10-25: 2025 (AU) Genesis GV70 (JK.V4 MY25) — 2.5T
// Advanced / Signature / Signature Sport, 3.5T Signature / Signature Sport,
// Electrified Signature Performance. Replaces stale rows ("2.5T Sport", "3.5T
// Sport+", ~ prices). Specs as the 2026 rows (gen274; same Carsales spec
// tables) + kerb weights and price when new: Carsales 2025 variant pages
// (base price incl GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const g = (t, p, w) => ({ ...existing('Genesis', 'GV70', 2026, t), weight: w, price: $(p) });

writeLineups(405, {
  'Genesis|GV70|2025': {
    '2.5T Advanced': g('2.5T Advanced', 78700, 1935),
    '2.5T Signature': g('2.5T Signature', 87700, 1935),
    '2.5T Signature Sport': g('2.5T Signature Sport', 89700, 1935),
    '3.5T Signature': g('3.5T Signature', 98200, 2020),
    '3.5T Signature Sport': g('3.5T Signature Sport', 100200, 2020),
    'Electrified Signature Performance': g('Electrified Signature Performance', 132800, 2340),
  },
});
