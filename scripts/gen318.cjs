'use strict';
// supplement318.json — 2026-10-23: 2024 (AU) Toyota Corolla (E210: 2.0 petrol
// + 1.8 hybrid, hatch + sedan). Specs + price when new: Carsales 2024 variant
// pages. Hybrid power = system output; system torque null. GR Corolla lives
// under its own model.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, seats: 5, cylinders: 4, aspiration: 'Naturally Aspirated', drivetrain: 'FWD' };
const P = { ...B, engine: '2.0L I4 Petrol', displacement: 1987, fuelType: 'petrol', power: 126, torque: 203,
  transmission: 'CVT (10-step)', fuelTank: 50 };
const PH = { ...P, fc: 7.5, fh: 5.1, fx: 6.0, weight: 1420, cargo: 217 };
const PS = { ...P, fc: 7.6, fh: 4.9, fx: 5.9, weight: 1410, cargo: 470 };
const H = { ...B, engine: '1.8L I4 Hybrid', displacement: 1798, fuelType: 'hybrid', power: 103, torque: null, transmission: 'CVT',
  fuelTank: 43 };
const HH = { ...H, fc: 3.8, fh: 4.3, fx: 4.0, weight: 1400, cargo: 217 };
const HS = { ...H, fc: 3.9, fh: 4.2, fx: 3.9, weight: 1430, cargo: 470 };

writeLineups(318, {
  'Toyota|Corolla|2024': {
    'Ascent Sport Hatch': { ...PH, price: $(29610) },
    'SX Hatch': { ...PH, price: $(32760) },
    'ZR Hatch': { ...PH, price: $(36600) },
    'Ascent Sport Hybrid Hatch': { ...HH, price: $(32110) },
    'SX Hybrid Hatch': { ...HH, price: $(35260) },
    'ZR Hybrid Hatch': { ...HH, price: $(39100) },
    'Ascent Sport Sedan': { ...PS, price: $(29270) },
    'SX Sedan': { ...PS, price: $(32760) },
    'ZR Sedan': { ...PS, price: $(36600) },
    'Ascent Sport Hybrid Sedan': { ...HS, price: $(32110) },
    'SX Hybrid Sedan': { ...HS, price: $(34920) },
    'ZR Hybrid Sedan': { ...HS, price: $(40260) },
  },
});
