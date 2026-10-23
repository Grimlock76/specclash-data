'use strict';
// supplement314.json — 2026-10-23: 2023 (AU) Isuzu D-MAX (RG MY23 crew-cab
// 4x4 utes, 3.0 auto). Replaces the stale 2023 list (generic "LS", "RG LS-T"
// — an MU-X grade — and identical placeholder rows). Specs + price when new:
// Carsales 2023 variant pages. LS-M page would not load -> left out.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const DM = { engine: '3.0L I4 Turbo Diesel (4JJ3-TCX)', displacement: 2999, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 140, torque: 450, transmission: '6-speed automatic', drivetrain: '4WD', acceleration: null, topSpeed: null, cargo: null,
  towing: 3500, seats: 5, fuelTank: 76, fc: 9.8, fh: 6.9, fx: 8.0 };

writeLineups(314, {
  'Isuzu|D-MAX|2023': {
    'SX': { ...DM, weight: 2035, payload: 1065, price: $(52200) },
    'X-Rider': { ...DM, weight: 2045, payload: 1055, price: $(58000) },
    'LS-U': { ...DM, weight: 2110, payload: 990, price: $(61000) },
    'LS-U+': { ...DM, weight: 2115, payload: 985, price: $(63500) },
    'X-Terrain': { ...DM, weight: 2175, payload: 925, groundClearance: 240, price: $(67500) },
  },
});
