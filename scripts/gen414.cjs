'use strict';
// supplement414.json — 2026-10-25: BMW i4 (G26) 2024 (pre-LCI eDrive35 70.2
// kWh, eDrive40 M Sport, M50) and 2025 (LCI eDrive35 only, as 2026). Replaces
// stale rows ("M50 xDrive", ~ prices). Specs + price when new: Carsales
// variant pages (base price incl GST & LCT); 2025 = the 2026 row (gen278; same
// Carsales spec table and price). Range ADR. Tare-only weight null; M50
// dual-motor torque null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const E35 = existing('BMW', 'i4', 2026, 'eDrive35');

writeLineups(414, {
  'BMW|i4|2024': {
    'eDrive35': { ...E35, battery: '70.2 kWh', range: 430, price: $(87800) },
    'eDrive40 M Sport': { ...E35, power: 250, torque: 430, battery: '83.9 kWh', range: 520, acceleration: 5.7, weight: null,
      price: $(102900) },
    'M50': { ...E35, engine: 'Dual-Motor Electric', drivetrain: 'AWD', power: 400, torque: null, battery: '83.9 kWh', range: 465,
      acceleration: 3.9, weight: 2215, topSpeed: null, price: $(133900) },
  },
  'BMW|i4|2025': { 'eDrive35': E35 },
});
