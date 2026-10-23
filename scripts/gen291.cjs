'use strict';
// supplement291.json — 2026-10-23: 2025 (AU) Mazda CX-5 (KF), Hyundai Tucson
// (NX4 MY25/MY26 facelift), Kia Sportage (NQ5 MY25 + PE). Specs + price when
// new: Carsales 2025 variant pages (one page per grade/drivetrain fetched;
// unfetched combos left out). Tucson Hybrid system torque 367 Nm from the
// Carsales overview; Sportage HEV system torque not stated -> null. Sportage
// diesel weights: tare only -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const MZ = { ...B, cylinders: 4, fuelType: 'petrol', transmission: '6-speed automatic', cargo: 438 };
const G20 = { ...MZ, engine: '2.0L I4 Petrol', displacement: 1998, aspiration: 'Naturally Aspirated', power: 115, torque: 200 };
const G25 = { ...MZ, engine: '2.5L I4 Petrol', displacement: 2488, aspiration: 'Naturally Aspirated', power: 140, torque: 252,
  towing: 1800 };
const G25A = { ...G25, drivetrain: 'AWD', fc: 9.2, fh: 6.3, fx: 7.4, weight: 1693 };
const G35 = { ...MZ, engine: '2.5L I4 Turbo Petrol', displacement: 2488, aspiration: 'Turbo', power: 170, torque: 420, drivetrain: 'AWD',
  fc: 10.3, fh: 6.9, fx: 8.2, weight: 1730, towing: 2000 };
const TU20 = { ...B, engine: '2.0L I4 Petrol', displacement: 1999, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 115, torque: 192, transmission: '6-speed automatic', drivetrain: 'FWD', fc: 11.0, fh: 6.5, fx: 8.1, weight: 1456,
  towing: 1650, fuelTank: 54, cargo: 539 };
const TUH = { ...B, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 172, torque: 367, transmission: '6-speed automatic', drivetrain: 'FWD', fc: 4.8, fh: 4.9, fx: 4.9, weight: 1626, towing: 1900,
  cargo: 539 };
const SPD = { ...B, engine: '2.0L I4 Turbo Diesel', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 137, torque: 416, transmission: '8-speed automatic', drivetrain: 'AWD', fc: 7.7, fh: 5.4, fx: 6.3, towing: 1900, fuelTank: 54,
  cargo: 543 };
const SPH = { ...B, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 173, torque: null, transmission: '6-speed automatic', drivetrain: 'AWD', fc: 3.6, fh: 6.5, fx: 5.3, weight: 1793, towing: 1900,
  cargo: 543 };

writeLineups(291, {
  'Mazda|CX-5|2025': {
    'G20 Maxx': { ...G20, drivetrain: 'FWD', fc: 8.1, fh: 6.2, fx: 6.9, weight: 1575, towing: 1800, fuelTank: 56, price: $(36740) },
    'G25 Maxx Sport': { ...G25, drivetrain: 'FWD', fc: 9.2, fh: 6.0, fx: 7.2, weight: 1607, price: $(40460) },
    'G25 Touring': { ...G25, drivetrain: 'FWD', fc: 9.2, fh: 6.3, fx: 7.4, weight: 1603, price: $(42600) },
    'G25 GT SP': { ...G25A, price: $(50460) },
    'G25 Akera': { ...G25A, price: $(52650) },
    'G35 GT SP': { ...G35, price: $(52960) },
    'G35 Akera': { ...G35, price: $(55650) },
  },
  'Hyundai|Tucson|2025': {
    'Tucson': { ...TU20, price: $(39350) },
    'Elite': { ...TU20, price: $(44350) },
    'Premium 1.6T AWD': { ...TU20, engine: '1.6L I4 Turbo Petrol', displacement: 1598, aspiration: 'Turbo', power: 132, torque: 265,
      transmission: '7-speed dual-clutch', drivetrain: 'AWD', fc: 8.8, fh: 6.3, fx: 7.2, weight: 1591, towing: null, price: $(55850) },
    'Hybrid': { ...TUH, price: $(42850) },
    'Hybrid Elite': { ...TUH, price: $(48350) },
    'Hybrid Premium AWD': { ...TUH, drivetrain: 'AWD', fc: 3.6, fh: 6.5, fx: 5.3, weight: 1686, price: $(58350) },
  },
  'Kia|Sportage|2025': {
    'S Diesel AWD': { ...SPD, price: $(40395) },
    'SX Diesel AWD': { ...SPD, price: $(42950) },
    'SX+ Diesel AWD': { ...SPD, price: $(47450) },
    'GT-Line Diesel AWD': { ...SPD, price: $(52920) },
    'HEV S AWD': { ...SPH, price: $(47450) },
    'HEV GT-Line AWD': { ...SPH, price: $(60370) },
  },
});
