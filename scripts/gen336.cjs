'use strict';
// supplement336.json — 2026-10-25: 2025 (AU) Kia Seltos (SP2 PE MY25) and Toyota
// Yaris Cross (hybrid-only MY25). Replaces stale grades ("X-Line HEV", petrol
// Yaris Cross, "ZR"). Specs + price when new: Carsales 2025 variant pages
// (MY25 rows; base price incl GST & LCT). Tare-only weights null. Yaris Cross
// power = Toyota system output; hybrid torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, cylinders: 4 };
const SEL = { ...B, engine: '2.0L I4 Petrol', displacement: 1999, aspiration: 'Naturally Aspirated', fuelType: 'petrol', power: 110,
  torque: 180, transmission: 'CVT', drivetrain: 'FWD', fc: 8.8, fh: 5.6, fx: 6.9, towing: 1100, fuelTank: 50, cargo: 468, weight: null };
const SELT = { ...SEL, engine: '1.6L I4 Turbo Petrol', displacement: 1598, aspiration: 'Turbo', power: 146, torque: 265,
  transmission: '8-speed automatic', drivetrain: 'AWD', fc: 9.5, fh: 6.2, fx: 7.4, towing: 1250 };
const YC = { ...B, engine: '1.5L I3 Hybrid', displacement: 1490, cylinders: 3, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  power: 85, torque: null, transmission: 'CVT', drivetrain: 'FWD', fc: 3.4, fh: 4.2, fx: 3.8, weight: 1235, towing: 400, fuelTank: 36,
  cargo: 390 };
const YCA = { ...YC, drivetrain: 'AWD', fc: 3.6, fh: 4.3, fx: 4.0, weight: null };

writeLineups(336, {
  'Kia|Seltos|2025': {
    'S': { ...SEL, price: $(30050) },
    'Sport': { ...SEL, price: $(33250) },
    'Sport+ FWD': { ...SEL, price: $(36350) },
    'Sport+ AWD': { ...SELT, price: $(39870) },
    'GT-Line FWD': { ...SEL, price: $(42050) },
    'GT-Line AWD': { ...SELT, price: $(45470) },
  },
  'Toyota|Yaris Cross|2025': {
    'GX Hybrid': { ...YC, price: $(30900) },
    'GX Hybrid AWD': { ...YCA, price: $(33900) },
    'GXL Hybrid': { ...YC, price: $(33950) },
    'GXL Hybrid AWD': { ...YCA, price: $(36950) },
    'Urban Hybrid': { ...YC, price: $(36880) },
    'Urban Hybrid AWD': { ...YCA, price: $(39880) },
    'GR Sport Hybrid': { ...YC, fc: 3.7, fh: 4.4, fx: 4.1, weight: null, price: $(36930) },
  },
});
