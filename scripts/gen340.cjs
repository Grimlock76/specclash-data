'use strict';
// supplement340.json — 2026-10-25: 2025 (AU) Subaru Crosstrek (G6X; Carsales'
// 2025 pages are mostly MY24 stock) and Toyota C-HR (2nd gen, hybrid only).
// Replaces stale rows (Crosstrek "2.5i Premium", C-HR "GX"/PHEV). Specs +
// price when new: Carsales 2025 variant pages (base price incl GST & LCT).
// Crosstrek Hybrid = 110 kW engine figure as listed (no system figure);
// hybrid torque null; tare-only weights null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const CT = { ...B, engine: '2.0L H4 Petrol (Boxer)', displacement: 1995, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'petrol', power: 115, torque: 196, transmission: 'CVT', drivetrain: 'AWD', fc: 9.4, fh: 6.0, fx: 7.2, towing: 1400,
  fuelTank: 63, cargo: 291, groundClearance: 220, weight: null };
const CTH = { ...CT, engine: '2.0L H4 Hybrid (Boxer)', fuelType: 'hybrid', power: 110, torque: null, fc: 7.4, fh: 6.0, fx: 6.5,
  towing: 1270, fuelTank: 48 };
const CHR = { ...B, engine: '1.8L I4 Hybrid', displacement: 1798, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  power: 103, torque: null, transmission: 'CVT', drivetrain: 'FWD', fc: 3.8, fh: 4.2, fx: 4.0, towing: 725, fuelTank: 43, cargo: 388 };

writeLineups(340, {
  'Subaru|Crosstrek|2025': {
    '2.0L': { ...CT, price: $(35490) },
    '2.0X': { ...CT, price: $(36990) },
    '2.0R': { ...CT, price: $(38990) },
    'Hybrid L': { ...CTH, price: $(39090) },
    '2.0S': { ...CT, price: $(41990) },
    '2.0S Onyx': { ...CT, weight: 1533, price: $(43890) },
    'Hybrid S': { ...CTH, price: $(45590) },
  },
  'Toyota|C-HR|2025': {
    'GXL Hybrid': { ...CHR, weight: 1455, price: $(42990) },
    'Koba Hybrid': { ...CHR, weight: 1490, price: $(52390) },
    'GR Sport Hybrid AWD': { ...CHR, engine: '2.0L I4 Hybrid', displacement: 1987, power: 146, drivetrain: 'AWD', fc: 3.7, fh: 4.7,
      fx: 4.1, weight: 1575, price: $(54990) },
  },
});
