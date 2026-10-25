'use strict';
// supplement383.json — 2026-10-25: VW T-Cross (D31) 2024 (MY24), 2025 + 2026
// (MY25/26 facelift, same prices) — 85TSI Life / Style / R-Line. Replaces stale
// rows (~ prices). Specs + price when new: Carsales variant pages (base price
// incl GST & LCT). Weights tare-only / below tare -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const T = { engine: '1.0L I3 Turbo Petrol', displacement: 999, cylinders: 3, aspiration: 'Turbo', fuelType: 'petrol', power: 85,
  torque: 200, transmission: '7-speed dual-clutch', drivetrain: 'FWD', seats: 5, cargo: 385, fuelTank: 40, weight: null,
  topSpeed: null, acceleration: null };
const line = (f, p) => ({ '85TSI Life': { ...T, ...f, price: $(p[0]) }, '85TSI Style': { ...T, ...f, price: $(p[1]) },
  '85TSI R-Line': { ...T, ...f, price: $(p[2]) } });
const F24 = { fc: 6.0, fh: 5.0, fx: 5.4 }, F25 = { fc: 6.5, fh: 5.0, fx: 5.6 };

writeLineups(383, {
  'Volkswagen|T-Cross|2024': line(F24, [33990, 37490, 40990]),
  'Volkswagen|T-Cross|2025': line(F25, [34990, 38490, 41490]),
  'Volkswagen|T-Cross|2026': line(F25, [34990, 38490, 41490]),
});
