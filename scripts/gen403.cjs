'use strict';
// supplement403.json — 2026-10-25: Lexus LBX 2024 + 2025 — Luxury 2WD, Sports
// Luxury 2WD / AWD, Morizo RR (8-speed auto; the 2025 manual has no Carsales
// price -> left out). Replaces stale rows ("LBX", "F Sport", ~ prices). Specs
// as the 2026 rows (gen281) + Carsales variant pages; price when new: Carsales
// (base price incl GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const l = t => existing('Lexus', 'LBX', 2026, t);
const AWD = { ...l('Sports Luxury 2WD'), drivetrain: 'AWD', fc: 3.7, fh: 4.1, fx: 3.8, weight: 1415, acceleration: null,
  accelClaimed: false };
const line = p => ({
  'Luxury 2WD': { ...l('Luxury 2WD'), price: $(p[0]) },
  'Sports Luxury 2WD': { ...l('Sports Luxury 2WD'), price: $(p[1]) },
  'Sports Luxury AWD': { ...AWD, price: $(p[2]) },
  'Morizo RR': { ...l('Morizo RR'), price: $(76490) },
});

writeLineups(403, {
  'Lexus|LBX|2024': line([47550, 52990, 56990]),
  'Lexus|LBX|2025': line([47200, 52640, 56640]),
});
