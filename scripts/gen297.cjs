'use strict';
// supplement297.json — 2026-10-23: 2025 (AU) Nissan Patrol (Y62 V8) and Mazda
// BT-50 (TF, dual-cab utes). Specs + price when new: Carsales 2025 variant
// pages. Naming follows the 2026 BT-50 lineup (gen255).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const PT = { engine: '5.6L V8 Petrol', displacement: 5552, cylinders: 8, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 298, torque: 560, transmission: '7-speed automatic', drivetrain: '4WD', fc: 20.2, fh: 11.0, fx: 14.4, acceleration: null,
  topSpeed: null, cargo: null, towing: 3500, fuelTank: 140 };
const BT = { engine: '3.0L I4 Turbo Diesel', displacement: 2999, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel', power: 140,
  torque: 450, transmission: '6-speed automatic', drivetrain: '4WD', fc: 8.3, fh: 6.5, fx: 7.1, acceleration: null, topSpeed: null,
  cargo: null, seats: 5, towing: 3500, fuelTank: 76 };

writeLineups(297, {
  'Nissan|Patrol|2025': {
    'Ti': { ...PT, weight: 2786, seats: 8, groundClearance: 272, price: $(95600) },
    'Ti-L': { ...PT, weight: 2847, seats: 7, price: $(107100) },
    'Warrior': { ...PT, weight: 2884, seats: 8, groundClearance: 323, price: $(110660) },
  },
  'Mazda|BT-50|2025': {
    'XT 4x2': { ...BT, drivetrain: 'RWD', fc: 9.5, fh: 6.7, fx: 7.7, weight: 1929, payload: 1071, price: $(48210) },
    'XTR 4x2': { ...BT, drivetrain: 'RWD', weight: 2012, payload: 988, price: $(54240) },
    'XT 4x4': { ...BT, weight: 2015, payload: 1085, price: $(57220) },
    'Boss': { ...BT, weight: 2067, payload: 1033, price: $(60220) },
    'GT': { ...BT, fc: 9.8, fh: 6.9, fx: 8.0, weight: 2102, payload: 998, price: $(66170) },
    'SP': { ...BT, fc: 8.4, fh: 7.4, fx: 7.8, weight: 2176, payload: 924, price: $(73490) },
    'Thunder': { ...BT, weight: 2213, payload: 887, groundClearance: 240, price: $(79490) },
  },
});
