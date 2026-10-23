'use strict';
// supplement302.json — 2026-10-23: 2025 (AU) Subaru Forester (run-out S5
// MY24 + new S6 MY26 sold through 2025) and Land Rover Defender (MY25.5).
// Specs + price when new: Carsales 2025 variant pages. S5 weights tare-only ->
// null. S6 Hybrid = 145 kW system (strong hybrid); S5 Hybrid lists only the
// 110 kW engine (12.3 kW motor, no system figure). Hybrid torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, drivetrain: 'AWD', transmission: 'CVT' };
const S5 = { ...B, engine: '2.5L H4 Petrol (Boxer)', displacement: 2498, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'petrol', power: 136, torque: 239, fc: 9.3, fh: 6.3, fx: 7.4, towing: 1800, fuelTank: 63, cargo: 498,
  groundClearance: 220 };
const S5H = { ...B, engine: '2.0L H4 Hybrid (e-Boxer)', displacement: 1995, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'hybrid', power: 110, torque: null, fc: 7.5, fh: 6.2, fx: 6.7, towing: 1200, fuelTank: 48, cargo: 509,
  groundClearance: 220 };
const S6 = { ...S5, torque: 247, fc: 10.1, fh: 6.7, fx: 7.9, cargo: null };
const S6H = { ...S6, engine: '2.5L H4 Hybrid (Boxer)', fuelType: 'hybrid', power: 145, torque: null, fc: 6.4, fh: 6.0, fx: 6.2,
  towing: 1200, fuelTank: null };
const DF = { topSpeed: null, cargo: null, transmission: '8-speed automatic', drivetrain: 'AWD', towing: 3500 };
const D6 = { ...DF, engine: '3.0L I6 Turbo Diesel (MHEV)', displacement: 2997, cylinders: 6, aspiration: 'Turbo', fuelType: 'diesel',
  fc: 10.4, fh: 6.9, fx: 8.1 };
writeLineups(302, {
  'Subaru|Forester|2025': {
    '2.5i (S5)': { ...S5, price: $(38690) },
    'Hybrid L (S5)': { ...S5H, price: $(44090) },
    'Hybrid S (S5)': { ...S5H, price: $(50140) },
    'Premium': { ...S6, weight: 1632, price: $(46490) },
    'Hybrid': { ...S6H, weight: 1717, price: $(46490) },
    'Sport': { ...S6, weight: 1651, price: $(48490) },
    'Touring': { ...S6, weight: 1662, price: $(50990) },
    'Hybrid Sport': { ...S6H, weight: 1763, price: $(54990) },
    'Hybrid Touring': { ...S6H, weight: 1766, price: $(55990) },
  },
  'Land Rover|Defender|2025': {
    '90 D250 S': { ...D6, power: 183, torque: 570, acceleration: 8.0, topSpeed: 188, weight: 2241, seats: 5, fuelTank: 89,
      price: $(94942) },
    '110 D250 S': { ...D6, power: 183, torque: 570, acceleration: 8.3, weight: 2361, seats: 5, price: $(97384) },
    '110 D350 X-Dynamic SE': { ...D6, power: 258, torque: 700, acceleration: 6.4, topSpeed: 191, weight: 2361, seats: 5,
      price: $(111515) },
    '110 P400 X-Dynamic SE': { ...DF, engine: '3.0L I6 Turbo Petrol (MHEV)', displacement: 2996, cylinders: 6, aspiration: 'Turbo',
      fuelType: 'petrol', power: 294, torque: 550, fc: 12.2, fh: 8.1, fx: 9.6, acceleration: 6.1, topSpeed: 191, weight: 2326, seats: 5,
      price: $(117019) },
    '130 D350 X-Dynamic SE': { ...D6, power: 258, torque: 700, acceleration: 6.8, weight: 2552, seats: 8, towing: 3000,
      price: $(132599) },
    '110 P525 V8': { ...DF, engine: '5.0L V8 Supercharged Petrol', displacement: 4999, cylinders: 8, aspiration: 'Supercharged',
      fuelType: 'petrol', power: 386, torque: 625, fc: 17.0, fh: 10.2, fx: 12.7, acceleration: 5.4, topSpeed: 240, weight: 2603,
      seats: 5, price: $(203887) },
    '110 P635 OCTA': { ...DF, engine: '4.4L V8 Twin-Turbo Petrol (MHEV)', displacement: 4395, cylinders: 8, aspiration: 'Twin-Turbo',
      fuelType: 'petrol', power: 467, torque: 750, fc: 17.4, fh: 10.6, fx: 13.1, acceleration: 4.0, topSpeed: 250, weight: 2510,
      seats: 5, price: $(298831) },
  },
});
