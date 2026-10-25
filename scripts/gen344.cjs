'use strict';
// supplement344.json — 2026-10-25: 2025 (AU) Toyota GR86 (ZN8) and Subaru BRZ
// (ZD8 MY25), manual + auto. Replaces stale grades ("GR86 Premium", "BRZ
// Premium"). Specs + price when new: Carsales 2025 variant pages (base price
// incl GST & LCT). BRZ pages list tare only -> weight null. GR86 Limited
// Edition and BRZ tS Kiiro run-out editions left out.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const GR = { topSpeed: 226, acceleration: null, cargo: 237, seats: 4, engine: '2.4L H4 Petrol (Boxer)', displacement: 2387, cylinders: 4,
  aspiration: 'Naturally Aspirated', fuelType: 'petrol', power: 174, torque: 250, drivetrain: 'RWD', fuelTank: 50 };
const M = { ...GR, transmission: '6-speed manual', acceleration: 6.3, fc: 13.3, fh: 7.3, fx: 9.5 };
const A = { ...GR, transmission: '6-speed automatic', acceleration: 6.8, fc: 13.0, fh: 6.4, fx: 8.8 };
const BM = { ...M, weight: null }, BA = { ...A, weight: null };

writeLineups(344, {
  'Toyota|GR86|2025': {
    'GT Manual': { ...M, fc: 13.2, fh: 7.2, fx: 9.4, weight: 1289, price: $(43940) },
    'GT Auto': { ...A, fc: 12.7, fh: 6.3, fx: 8.7, weight: 1309, price: $(43940) },
    'GTS Manual': { ...M, weight: 1300, price: $(46090) },
    'GTS Auto': { ...A, weight: 1320, price: $(46090) },
  },
  'Subaru|BRZ|2025': {
    'BRZ Manual': { ...BM, price: $(44290) },
    'BRZ Auto': { ...BA, price: $(45290) },
    'S Manual': { ...BM, price: $(45590) },
    'S Auto': { ...BA, price: $(46590) },
    'tS Manual': { ...BM, price: $(49190) },
    'tS Auto': { ...BA, price: $(50190) },
  },
});
