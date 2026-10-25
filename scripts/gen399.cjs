'use strict';
// supplement399.json — 2026-10-25: 2024 (AU) Lexus NX — NX250, NX350h Luxury /
// Sports Luxury / F Sport (2WD + eFour), NX350 F Sport, NX450h+ F Sport. Specs
// as the 2025 rows (gen397; same Carsales spec tables) + price when new:
// Carsales 2024 variant pages (base price incl GST & LCT; Carsales lists two
// builds per grade with mid-year price moves — first-listed used). Replaces
// stale rows (~ prices).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const n = (t, p) => ({ ...existing('Lexus', 'NX', 2025, t), price: $(p) });

writeLineups(399, {
  'Lexus|NX|2024': {
    'NX250 Luxury': n('NX250 Luxury', 62275),
    'NX350h Luxury': n('NX350h Luxury', 69050), 'NX350h Luxury AWD': n('NX350h Luxury AWD', 76400),
    'NX350h Sports Luxury': n('NX350h Sports Luxury', 79100), 'NX350h Sports Luxury AWD': n('NX350h Sports Luxury AWD', 81350),
    'NX350h F Sport': n('NX350h F Sport', 76550), 'NX350h F Sport AWD': n('NX350h F Sport AWD', 84900),
    'NX350 F Sport': n('NX350 F Sport', 77511),
    'NX450h+ F Sport': n('NX450h+ F Sport', 95900),
  },
});
