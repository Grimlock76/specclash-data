'use strict';
// supplement427.json — 2026-10-25: Audi Q8 e-tron + Q8 Sportback e-tron 2024 (MY24)
// + 2025 (MY25): 50 (250 kW, 89 kWh), 55 (300 kW, 106 kWh), SQ8 (370 kW).
// Replaces stale rows ("60 quattro", ~ prices). Specs + price when new: Carsales
// Q8 e-tron / SQ8 e-tron variant pages (base price incl GST & LCT); priced
// variants are the SUV → Sportback prices null. Range ADR. 55 / SQ8 0-100 null
// (spec table vs overview conflict: 6.5 vs 5.6, 5.1 vs 4.5). Tare-only →
// weight null. Dual-motor torque null. 2026 rows left alone (model ended).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, weight: null, engine: 'Dual Motor Electric', drivetrain: 'AWD',
  torque: null, towing: 1800, accelClaimed: true, ...o });
const line = (r50, p50, p55, pSQ) => ({
  '50 quattro': ev({ power: 250, battery: '89 kWh', range: r50, acceleration: 7.0, price: p50 }),
  '55 quattro': ev({ power: 300, battery: '106 kWh', range: 475, acceleration: null, price: p55 }),
  'SQ8': ev({ engine: 'Tri Motor Electric', power: 370, battery: '106 kWh', range: 444, acceleration: null, price: pSQ }),
});

writeLineups(427, {
  'Audi|Q8 e-tron|2024': line(405, $(139984), $(165984), $(179984)),
  'Audi|Q8 e-tron|2025': line(411, $(140090), $(166090), $(180090)),
  'Audi|Q8 e-tron Sportback|2024': line(405, null, null, null),
  'Audi|Q8 e-tron Sportback|2025': line(411, null, null, null),
});
