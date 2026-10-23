'use strict';
// supplement262.json — 2026-10-23: 2026 (AU) Mazda3 (hatch), CX-30, Toyota
// Yaris Cross, Corolla Cross, C-HR. All three Toyotas are hybrid-only for 2026.
// Specs + "price when new": Carsales variant pages; CarsGuide 2026 MSRP for
// Yaris Cross GX and the AWD grades (no Carsales page for them, so AWD
// weight/fuel stay null). Power on Toyota hybrids = combined system output;
// Toyota publishes no system torque → null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const base = { acceleration: null, topSpeed: null, seats: 5, cylinders: 4 };
const M3 = { ...base, transmission: '6-speed automatic', drivetrain: 'FWD', fuelType: 'petrol', aspiration: 'Naturally Aspirated',
  fuelTank: 51, cargo: 295 };
const M3_20 = { ...M3, engine: '2.0L I4 Petrol (Skyactiv-G)', displacement: 1998, power: 114, torque: 200, fc: 7.3, fh: 5.0, fx: 5.9, weight: 1418 };
const M3_25 = { ...M3, engine: '2.5L I4 Petrol (Skyactiv-G)', displacement: 2488, power: 139, torque: 252, fc: 8.6, fh: 5.4, fx: 6.6, weight: 1417 };
const CX = { ...M3, towing: 1200, cargo: 317 };
const CX_20 = { ...CX, engine: '2.0L I4 Petrol (Skyactiv-G)', displacement: 1998, power: 114, torque: 200, fc: 7.5, fh: 5.6, fx: 6.3, weight: 1468 };
const CX_25 = { ...CX, engine: '2.5L I4 Petrol (Skyactiv-G)', displacement: 2488, power: 139, torque: 252, fc: 8.5, fh: 5.5, fx: 6.6, weight: 1468 };
const hyb = { ...base, fuelType: 'hybrid', aspiration: 'Naturally Aspirated', transmission: 'CVT', torque: null };
const YC = { ...hyb, engine: '1.5L I3 Hybrid', displacement: 1490, cylinders: 3, power: 85, drivetrain: 'FWD', fc: 3.5, fh: 4.2, fx: 3.8,
  weight: 1235, towing: 400, fuelTank: 36, cargo: 390 };
const YCA = { ...YC, drivetrain: 'AWD', fc: null, fh: null, fx: null, weight: null };
const CC = { ...hyb, engine: '2.0L I4 Hybrid', displacement: 1987, power: 146, drivetrain: 'FWD', fc: 4.0, fh: 4.5, fx: 4.2,
  towing: 750, fuelTank: 36, cargo: 425 };
const CHR = { ...hyb, engine: '1.8L I4 Hybrid', displacement: 1798, power: 103, drivetrain: 'FWD', fc: 3.8, fh: 4.2, fx: 4.0,
  towing: 725, fuelTank: 43, cargo: 388 };
writeLineups(262, {
  'Mazda|3|2026': {
    'G20 Pure': { ...M3_20, price: $(31610) },
    'G20 Evolve': { ...M3_20, price: $(33410) },
    'G20 Touring': { ...M3_20, price: $(37410) },
    'G25 Evolve SP': { ...M3_25, price: $(37410) },
    'G25 GT': { ...M3_25, price: $(40410) },
    'G25 Astina': { ...M3_25, weight: 1429, price: $(43610) },
  },
  'Mazda|CX-30|2026': {
    'G20 Pure': { ...CX_20, price: $(34360) },
    'G20 Evolve': { ...CX_20, price: $(36260) },
    'G20 Touring': { ...CX_20, price: $(40060) },
    'G20 Touring LE': { ...CX_20, price: $(42360) },
    'G20 Astina': { ...CX_20, weight: 1479, price: $(45260) },
    'G25 Touring': { ...CX_25, price: $(41560) },
    'G25 GT SP': { ...CX_25, weight: 1479, price: $(43560) },
    'G25 Astina': { ...CX_25, weight: 1479, price: $(46760) },
  },
  'Toyota|Yaris Cross|2026': {
    'GX Hybrid': { ...YC, price: $(31790) },
    'GX Hybrid AWD': { ...YCA, price: $(34790) },
    'GXL Hybrid': { ...YC, price: $(33990) },
    'GXL Hybrid AWD': { ...YCA, price: $(36990) },
    'Urban Hybrid': { ...YC, price: $(36930) },
    'Urban Hybrid AWD': { ...YCA, price: $(39930) },
    'GR Sport Hybrid': { ...YC, fc: 3.8, fh: 4.4, fx: 4.1, price: $(36990) },
  },
  'Toyota|Corolla Cross|2026': {
    'GX Hybrid': { ...CC, weight: 1435, price: $(37440) },
    'GXL Hybrid': { ...CC, weight: 1475, price: $(41190) },
    'Atmos Hybrid': { ...CC, weight: 1480, price: $(47990) },
    'GR Sport Hybrid AWD': { ...CC, drivetrain: 'AWD', fc: 4.3, fh: 4.7, fx: 4.5, weight: 1555, price: $(50990) },
  },
  'Toyota|C-HR|2026': {
    'GXL Hybrid': { ...CHR, weight: 1455, price: $(46940) },
    'Koba Hybrid': { ...CHR, weight: 1490, price: $(53890) },
    'GR Sport Hybrid AWD': { ...CHR, engine: '2.0L I4 Hybrid', displacement: 1987, power: 146, drivetrain: 'AWD',
      fc: 3.7, fh: 4.7, fx: 4.1, weight: 1575, price: $(58890) },
  },
});
