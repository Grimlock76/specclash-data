'use strict';
// supplement368.json — 2026-10-25: Nissan Juke (F16) 2024 (MY23.5 grades incl.
// ST-L+ and Ti Energy Orange, + the MY24 N-Sport), 2025 (MY24) and 2026.
// Replaces stale rows (~ prices). Specs + price when new: Carsales variant
// pages (base price incl GST & LCT); 2026 prices = CarsGuide MSRP (Carsales
// 2026 pages carry no data).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const J = { engine: '1.0L I3 Turbo Petrol', displacement: 999, cylinders: 3, aspiration: 'Turbo', fuelType: 'petrol', power: 84,
  torque: 180, transmission: '7-speed dual-clutch', drivetrain: 'FWD', fc: 6.8, fh: 5.2, fx: 5.8, seats: 5, cargo: 422, fuelTank: 46,
  towing: 1250, topSpeed: null, acceleration: null };
const lo = p => ({ ...J, weight: 1251, price: $(p) }), hi = p => ({ ...J, weight: 1274, price: $(p) });
const line = p => ({ 'ST': lo(p[0]), 'ST+': lo(p[1]), 'ST-L': hi(p[2]), 'Ti': hi(p[3]), 'N-Sport': hi(p[4]) });

writeLineups(368, {
  'Nissan|Juke|2024': { ...line([28890, 31640, 34940, 37390, 38665]), 'ST-L+': hi(36040), 'Ti Energy Orange': hi(37390) },
  'Nissan|Juke|2025': line([29165, 31915, 35215, 37665, 38665]),
  'Nissan|Juke|2026': line([29440, 32190, 35490, 37940, 38940]),
});
