'use strict';
// supplement311.json — 2026-10-23: 2024 (AU) Ford Everest (MY24), Mazda CX-5
// (KF) and Kia Sportage (NQ5 MY24). Specs + price when new: Carsales 2024
// variant pages. Everest Tremor page is MY25.25 (Carsales files it under
// 2024). Sportage petrol/diesel pages list tare only -> weight null; HEV
// system torque not stated -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const EB = { fuelType: 'diesel', drivetrain: '4WD', transmission: '10-speed automatic', cargo: null, acceleration: null,
  topSpeed: null, towing: 3500, fuelTank: 80 };
const BIT = { ...EB, engine: '2.0L I4 Bi-Turbo Diesel', displacement: 1996, cylinders: 4, aspiration: 'Twin-Turbo', power: 154,
  torque: 500, fc: 8.3, fh: 6.6, fx: 7.2 };
const BITR = { ...BIT, drivetrain: 'RWD', fc: 8.4, fh: 6.3, fx: 7.1 };
const V6 = { ...EB, engine: '3.0L V6 Turbo Diesel', displacement: 2993, cylinders: 6, aspiration: 'Turbo', power: 184, torque: 600,
  fc: 10.2, fh: 7.6, fx: 8.5 };

const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const MZ = { ...B, cylinders: 4, fuelType: 'petrol', transmission: '6-speed automatic', cargo: 438 };
const G25 = { ...MZ, engine: '2.5L I4 Petrol', displacement: 2488, aspiration: 'Naturally Aspirated', power: 140, torque: 252,
  towing: 1800 };
const G25A = { ...G25, drivetrain: 'AWD', fc: 9.2, fh: 6.3, fx: 7.4 };
const G35 = { ...MZ, engine: '2.5L I4 Turbo Petrol', displacement: 2488, aspiration: 'Turbo', power: 170, torque: 420, drivetrain: 'AWD',
  fc: 10.3, fh: 6.9, fx: 8.2, weight: 1730, towing: 2000 };

const SP = { ...B, cargo: 543, fuelTank: 54 };
const SP20 = { ...SP, engine: '2.0L I4 Petrol', displacement: 1999, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 115, torque: 192, drivetrain: 'FWD', towing: 1650 };
const SP20M = { ...SP20, transmission: '6-speed manual', fc: 9.7, fh: 6.6, fx: 7.7 };
const SP20A = { ...SP20, transmission: '6-speed automatic', fc: 11.0, fh: 6.5, fx: 8.1 };
const SP16 = { ...SP, engine: '1.6L I4 Turbo Petrol', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 132, torque: 265, transmission: '7-speed dual-clutch', drivetrain: 'AWD', fc: 8.8, fh: 6.3, fx: 7.2 };
const SPD = { ...SP, engine: '2.0L I4 Turbo Diesel', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 137, torque: 416, transmission: '8-speed automatic', drivetrain: 'AWD', fc: 7.7, fh: 5.4, fx: 6.3, towing: 1900 };
const SPH = { ...SP, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 169, torque: null, transmission: '6-speed automatic', drivetrain: 'FWD', fc: 4.8, fh: 4.9, fx: 4.9, weight: 1738, towing: 1650,
  fuelTank: null };

writeLineups(311, {
  'Ford|Everest|2024': {
    'Ambiente RWD': { ...BITR, weight: 2261, seats: 5, price: $(53490) },
    'Ambiente': { ...BIT, weight: 2369, seats: 5, price: $(58490) },
    'Trend': { ...BIT, weight: 2385, seats: 7, price: $(65990) },
    'Sport RWD': { ...BITR, weight: 2295, seats: 7, price: $(62990) },
    'Sport': { ...V6, weight: 2457, seats: 7, price: $(70590) },
    'Wildtrak': { ...V6, weight: 2488, seats: 7, price: $(73090) },
    'Tremor': { ...V6, fc: 10.7, fh: 8.8, fx: 9.5, weight: 2550, seats: 7, groundClearance: 255, price: $(76590) },
    'Platinum': { ...V6, weight: 2501, seats: 7, price: $(78530) },
  },
  'Mazda|CX-5|2024': {
    'G20 Maxx': { ...MZ, engine: '2.0L I4 Petrol', displacement: 1998, aspiration: 'Naturally Aspirated', power: 115, torque: 200,
      drivetrain: 'FWD', fc: 8.1, fh: 6.2, fx: 6.9, weight: 1576, towing: 1800, fuelTank: 56, price: $(36740) },
    'G25 Maxx Sport': { ...G25, drivetrain: 'FWD', fc: 9.2, fh: 6.0, fx: 7.2, weight: 1607, price: $(40460) },
    'G25 Touring': { ...G25A, weight: 1659, price: $(45100) },
    'G25 GT SP': { ...G25A, weight: 1693, price: $(50460) },
    'G25 Akera': { ...G25A, weight: 1693, price: $(52650) },
    'G35 GT SP': { ...G35, price: $(52960) },
    'G35 Akera': { ...G35, price: $(55150) },
  },
  'Kia|Sportage|2024': {
    'S Manual': { ...SP20M, price: $(32995) },
    'S': { ...SP20A, price: $(34995) },
    'S Diesel AWD': { ...SPD, price: $(40395) },
    'SX Manual': { ...SP20M, price: $(35550) },
    'SX': { ...SP20A, price: $(37550) },
    'SX Diesel AWD': { ...SPD, price: $(42950) },
    'SX+': { ...SP20A, price: $(42050) },
    'SX+ 1.6T AWD': { ...SP16, price: $(44050) },
    'SX+ Diesel AWD': { ...SPD, price: $(47450) },
    'GT-Line 1.6T AWD': { ...SP16, price: $(49920) },
    'GT-Line Diesel AWD': { ...SPD, price: $(52920) },
    'HEV SX': { ...SPH, price: $(45950) },
    'HEV GT-Line': { ...SPH, price: $(55420) },
  },
});
