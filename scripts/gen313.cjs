'use strict';
// supplement313.json — 2026-10-23: 2024 (AU) Isuzu D-MAX (MY24 crew-cab 4x4
// utes, 3.0 auto) and MU-X (MY24 3.0 auto, 4x2 + 4x4). Specs + price when new:
// Carsales 2024 variant pages. MU-X X-Terrain page is MY25 (Carsales files it
// under 2024). 1.9 diesel variants left out.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const I = { engine: '3.0L I4 Turbo Diesel (4JJ3-TCX)', displacement: 2999, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 140, torque: 450, transmission: '6-speed automatic', drivetrain: '4WD', acceleration: null, topSpeed: null, cargo: null,
  towing: 3500 };
const DM = { ...I, seats: 5, fuelTank: 76, fc: 9.8, fh: 6.9, fx: 8.0 };
const MU = { ...I, seats: 7, fuelTank: 80, fc: 10.3, fh: 7.2, fx: 8.3 };
const MU2 = { ...MU, drivetrain: 'RWD', fc: 9.6, fh: 6.8, fx: 7.8 };

writeLineups(313, {
  'Isuzu|D-MAX|2024': {
    'SX': { ...DM, weight: 2035, payload: 1065, groundClearance: 235, price: $(52700) },
    'LS-M': { ...DM, weight: 2030, payload: 1070, groundClearance: 235, price: $(55800) },
    'X-Rider': { ...DM, weight: 2055, payload: 1045, groundClearance: 235, price: $(59500) },
    'LS-U': { ...DM, weight: 2105, payload: 995, groundClearance: 240, price: $(62500) },
    'LS-U+': { ...DM, weight: 2110, payload: 990, groundClearance: 240, price: $(65500) },
    'X-Terrain': { ...DM, weight: 2170, payload: 930, groundClearance: 240, price: $(70500) },
    'Blade': { ...DM, weight: 2204, payload: 949, groundClearance: 244, price: $(78900) },
  },
  'Isuzu|MU-X|2024': {
    'LS-M 4x2': { ...MU2, weight: 2045, payload: 650, groundClearance: 230, price: $(49400) },
    'LS-M': { ...MU, weight: 2135, payload: 660, price: $(55400) },
    'LS-U 4x2': { ...MU2, weight: 2060, payload: 635, price: $(55900) },
    'LS-U': { ...MU, weight: 2155, payload: 640, price: $(61900) },
    'LS-T 4x2': { ...MU2, weight: 2090, payload: 610, price: $(63400) },
    'LS-T': { ...MU, weight: 2180, payload: 620, price: $(69400) },
    'X-Terrain': { ...MU, weight: 2195, payload: 605, groundClearance: 235, price: $(75100) },
  },
});
