'use strict';
// supplement337.json — 2026-10-25: 2024 (AU) Kia Seltos (SP2 PE MY24) and Toyota
// Yaris Cross (hybrid). Specs + price when new: Carsales 2024 variant pages
// (base price incl GST & LCT; some Yaris Cross AWD rows are MY25 stock with
// the newer fuel figures). Tare-only weights null; hybrid torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, cylinders: 4, weight: null };
const SEL = { ...B, engine: '2.0L I4 Petrol', displacement: 1999, aspiration: 'Naturally Aspirated', fuelType: 'petrol', power: 110,
  torque: 180, transmission: 'CVT', drivetrain: 'FWD', fc: 8.8, fh: 5.6, fx: 6.9, towing: 1100, fuelTank: 50, cargo: 468 };
const SELT = { ...SEL, engine: '1.6L I4 Turbo Petrol', displacement: 1598, aspiration: 'Turbo', power: 146, torque: 265,
  transmission: '8-speed automatic', drivetrain: 'AWD', fc: 9.5, fh: 6.2, fx: 7.4, towing: 1250 };
const YC = { ...B, engine: '1.5L I3 Hybrid', displacement: 1490, cylinders: 3, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  power: 85, torque: null, transmission: 'CVT', drivetrain: 'FWD', fc: 4.2, fh: 3.3, fx: 3.8, towing: 400, fuelTank: 36, cargo: 390 };
const YCA = { ...YC, drivetrain: 'AWD', fc: 3.6, fh: 4.3, fx: 4.0 };

writeLineups(337, {
  'Kia|Seltos|2024': {
    'S': { ...SEL, price: $(29780) },
    'Sport': { ...SEL, price: $(32980) },
    'Sport+ FWD': { ...SEL, price: $(36080) },
    'Sport+ AWD': { ...SELT, price: $(39580) },
    'GT-Line FWD': { ...SEL, price: $(41780) },
    'GT-Line AWD': { ...SELT, price: $(45180) },
  },
  'Toyota|Yaris Cross|2024': {
    'GX Hybrid': { ...YC, price: $(30000) },
    'GX Hybrid AWD': { ...YCA, fc: 4.4, fh: 3.5, price: $(33000) },
    'GXL Hybrid': { ...YC, price: $(33000) },
    'GXL Hybrid AWD': { ...YCA, price: $(36950) },
    'Urban Hybrid': { ...YC, price: $(36000) },
    'Urban Hybrid AWD': { ...YCA, price: $(39880) },
    'GR Sport Hybrid': { ...YC, price: $(36000) },
  },
});
