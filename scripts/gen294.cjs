'use strict';
// supplement294.json — 2026-10-23: 2025 (AU) Toyota Corolla (hybrid hatch +
// sedan), Camry (XV80 hybrid), Kluger (hybrid eFour). Specs + price when new:
// Carsales 2025 variant pages. Power = Toyota system output; hybrid system
// torque not published -> null. GR Corolla lives under its own model.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const H = { topSpeed: null, acceleration: null, cargo: null, seats: 5, fuelType: 'hybrid', aspiration: 'Naturally Aspirated',
  cylinders: 4, torque: null, transmission: 'CVT' };
const CO = { ...H, engine: '1.8L I4 Hybrid', displacement: 1798, power: 103, drivetrain: 'FWD', fuelTank: 43 };
const COH = { ...CO, fc: 3.8, fh: 4.3, fx: 4.0, weight: 1400, cargo: 217 };
const COS = { ...CO, fc: 3.9, fh: 4.2, fx: 3.9, weight: 1430, cargo: 470 };
const CA = { ...H, engine: '2.5L I4 Hybrid', displacement: 2487, power: 170, drivetrain: 'FWD', fc: 4.0, fh: 4.0, fx: 4.0, towing: 400,
  fuelTank: 50, cargo: 524 };
const KL = { ...H, engine: '2.5L I4 Hybrid', displacement: 2487, power: 184, drivetrain: 'AWD', fc: 6.0, fh: 5.6, fx: 5.6, seats: 7,
  towing: 2000, fuelTank: 65 };

writeLineups(294, {
  'Toyota|Corolla|2025': {
    'Ascent Sport Hybrid Hatch': { ...COH, price: $(32110) },
    'SX Hybrid Hatch': { ...COH, price: $(35260) },
    'ZR Hybrid Hatch': { ...COH, price: $(39100) },
    'Ascent Sport Hybrid Sedan': { ...COS, price: $(32585) },
    'SX Hybrid Sedan': { ...COS, price: $(34920) },
    'ZR Hybrid Sedan': { ...COS, price: $(40260) },
  },
  'Toyota|Camry|2025': {
    'Ascent Hybrid': { ...CA, weight: 1565, price: $(39990) },
    'Ascent Sport Hybrid': { ...CA, weight: 1565, price: $(42990) },
    'SL Hybrid': { ...CA, weight: 1625, price: $(53990) },
  },
  'Toyota|Kluger|2025': {
    'GX Hybrid': { ...KL, weight: 2050, price: $(62410) },
    'GXL Hybrid': { ...KL, weight: 2050, price: $(71930) },
    'Grande Hybrid': { ...KL, weight: 2095, price: $(85135) },
  },
});
