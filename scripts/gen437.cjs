'use strict';
// supplement437.json — 2026-10-25: Mercedes-Benz GLB (X247 facelift, 7 seats)
// 2024, 2025, 2026 (Carsales slug "glb-class"). Replaces stale rows ("GLB 200",
// "AMG GLB 35", ~ prices); adds the Special Edition grades (2025–26). Specs +
// price when new: Carsales variant pages (base price incl GST & LCT). Tare-only
// weights null. fc urban, fh extra-urban (Carsales "Highway").
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { seats: 7, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', cargo: null, weight: null, accelClaimed: true };
const T20 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1991, drivetrain: 'AWD', transmission: '8-speed dual-clutch', fuelTank: 60 };
const G200 = p => ({ ...B, engine: '1.3L I4 Turbo Petrol', displacement: 1332, transmission: '7-speed dual-clutch', drivetrain: 'FWD',
  power: 120, torque: 270, fc: 9.7, fh: 6.2, fx: 7.5, acceleration: 9.3, topSpeed: 207, fuelTank: 52, towing: 1500, price: $(p) });
const G250 = p => ({ ...T20, power: 165, torque: 350, fc: 10.8, fh: 6.2, fx: 7.9, acceleration: 7.0, topSpeed: 236, towing: 1900, price: $(p) });
const G35 = p => ({ ...T20, power: 225, torque: 400, fc: 12.3, fh: 7.2, fx: 9.1, acceleration: 5.5, topSpeed: 250, towing: 1800, price: $(p) });

writeLineups(437, {
  'Mercedes-Benz|GLB|2024': { 'GLB200': G200(74800), 'GLB250 4MATIC': G250(84100), 'GLB35 AMG 4MATIC': G35(102900) },
  'Mercedes-Benz|GLB|2025': {
    'GLB200': G200(67600), 'GLB200 Special Edition': G200(67600), 'GLB250 4MATIC': G250(85800),
    'GLB250 4MATIC Special Edition': G250(85800), 'GLB35 AMG 4MATIC': G35(105100),
  },
  'Mercedes-Benz|GLB|2026': {
    'GLB200': G200(68300), 'GLB200 Special Edition': G200(68300), 'GLB250 4MATIC': G250(86828),
    'GLB250 4MATIC Special Edition': G250(86828), 'GLB35 AMG 4MATIC': G35(106228),
  },
});
