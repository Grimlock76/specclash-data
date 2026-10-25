'use strict';
// supplement438.json — 2026-10-25: Mercedes-Benz EQA + EQB 2024 + 2025, plus EQA
// 2026 (EQA250+ only, MY26 drive-away only → price null). Replaces stale rows
// ("EQA 250", "EQA 300 4MATIC", "EQB 350 4MATIC", ~ prices). Specs + price when
// new: Carsales variant pages (base price incl GST & LCT). Range ADR. EQB kerb <
// tare → weight null. EQB 2024 Night Edition (not fetched) and EQB 2026 left.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, topSpeed: null, accelClaimed: true, ...o });
const A250 = p => ev({ engine: 'Single Motor Electric', drivetrain: 'FWD', power: 140, torque: 385, battery: '70.5 kWh', range: 578,
  acceleration: 8.6, topSpeed: 160, weight: 2048, seats: 5, cargo: 340, price: p });
const A350 = p => ev({ engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 215, torque: null, battery: '66.5 kWh', range: 489,
  acceleration: 6.0, weight: 2100, seats: 5, cargo: 340, price: p });
const B250 = p => ev({ engine: 'Single Motor Electric', drivetrain: 'FWD', power: 140, torque: 385, battery: '70.5 kWh', range: 564,
  acceleration: 8.9, weight: null, seats: 7, cargo: null, price: p });

writeLineups(438, {
  'Mercedes-Benz|EQA|2024': { 'EQA250+': A250($(84900)), 'EQA250+ Night Edition': A250($(85800)), 'EQA350 4MATIC': A350($(102283)) },
  'Mercedes-Benz|EQA|2025': { 'EQA250+': A250($(84900)), 'EQA250+ City Edition': A250($(80700)) },
  'Mercedes-Benz|EQA|2026': { 'EQA250+': A250(null) },
  'Mercedes-Benz|EQB|2024': { 'EQB250+': B250($(89100)) },
  'Mercedes-Benz|EQB|2025': { 'EQB250+': B250($(89100)), 'EQB250+ City Edition': B250($(85400)) },
});
