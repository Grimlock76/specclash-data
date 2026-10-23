'use strict';
// supplement282.json — 2026-10-23: 2026 (AU) Subaru Crosstrek, Toyota HiAce
// (H300). Specs + price when new: Carsales variant pages (Redbook). Crosstrek
// Hybrid power is the published engine output (100 kW); system torque null.
// HiAce Commuter fuel use not listed -> null. Mazda 2 (DJ/DL): auto only
// listed by Carsales for 2026.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const CT = { ...B, engine: '2.0L H4 Petrol (Boxer)', displacement: 1995, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'petrol', power: 115, torque: 196, transmission: 'CVT', drivetrain: 'AWD', fc: 9.4, fh: 6.0, fx: 7.2, towing: 1400,
  fuelTank: 63, cargo: 291, groundClearance: 220 };
const CTH = { ...CT, engine: '2.0L H4 Hybrid (Boxer)', fuelType: 'hybrid', power: 100, torque: null, fc: 7.4, fh: 6.0, fx: 6.5,
  towing: 1270, fuelTank: 48 };
const HA = { ...B, engine: '2.8L I4 Turbo Diesel', displacement: 2755, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 130, torque: 450, transmission: '6-speed automatic', drivetrain: 'RWD', fc: null, fh: null, fx: 7.8, seats: 2, towing: 1500,
  fuelTank: 70 };
const COM = { ...HA, power: 120, torque: 420, fx: null, seats: 12, towing: null };

// Mazda 2
const M2 ={ ...B, engine: '1.5L I4 Petrol', displacement: 1496, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 81, torque: 142, transmission: '6-speed automatic', drivetrain: 'FWD', fc: 5.7, fh: 4.6, fx: 5.0, fuelTank: 44 };

writeLineups(282, {
  'Subaru|Crosstrek|2026': {
    '2.0L': { ...CT, weight: 1494, price: $(36490) },
    '2.0R': { ...CT, weight: 1510, price: $(40990) },
    'Sport': { ...CT, weight: 1531, price: $(43990) },
    '2.0S': { ...CT, weight: 1533, price: $(43990) },
    'Hybrid L': { ...CTH, weight: 1575, price: $(40090) },
    'Hybrid S': { ...CTH, weight: 1614, price: $(47590) },
  },
  'Toyota|HiAce|2026': {
    'LWB Van Manual': { ...HA, transmission: '6-speed manual', torque: 420, fx: 7.4, weight: 2256, towing: 1900, payload: 1044,
      price: $(51880) },
    'LWB Barn Door Van Auto': { ...HA, weight: 2221, payload: 1079, price: $(54630) },
    'LWB Crew Van Auto': { ...HA, weight: 2366, seats: 5, payload: 934, price: $(56880) },
    'SLWB Barn Door Van Auto': { ...HA, fx: 8.1, weight: 2401, payload: 1099, price: $(63190) },
    'SLWB Commuter': { ...COM, weight: 2630, price: $(77656) },
    'SLWB Commuter GL': { ...COM, weight: 2680, price: $(80656) },
  },
  'Mazda|2|2026': {
    'G15 Evolve Hatch': { ...M2, weight: 1109, cargo: 250, price: $(27290) },
    'G15 GT Hatch': { ...M2, weight: 1109, cargo: 250, price: $(28490) },
    'G15 GT Sedan': { ...M2, weight: 1123, cargo: 440, price: $(28490) },
  },
});
