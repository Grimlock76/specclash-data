'use strict';
// supplement353.json — 2026-10-25: Hyundai i20 2024-2026 (AU sells only the
// i20 N: BC3.V1 MY23 under 2024, BC3.V2 MY25 under 2025/26) and i30 N
// 2024-2025 (hatch PDe.V5 MY23 under 2024 / PDe.V6 MY25 under 2025; sedan
// CN7.V2). Replaces stale rows ("Active", "Elite", "N Line", "Fastback",
// "Performance"). Specs + price when new: Carsales variant pages (base price
// incl GST & LCT). Kerb below tare -> weight null. 0-100: i20 N 6.2 s and
// i30 N DCT 5.3 s claimed (as gen286); manual / sedan claims not listed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const i20 = (w, p) => ({ engine: '1.6L I4 Turbo Petrol', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 150, torque: 275, transmission: '6-speed manual', drivetrain: 'FWD', fc: 8.9, fh: 5.7, fx: 6.9, acceleration: 6.2,
  accelClaimed: true, topSpeed: 230, weight: w, seats: 5, fuelTank: 40, cargo: null, price: $(p) });
const N = { engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', power: 206,
  torque: 392, drivetrain: 'FWD', seats: 5, topSpeed: null };
const HM = { ...N, transmission: '6-speed manual', fc: 11.8, fh: 6.6, fx: 8.5, acceleration: null, accelClaimed: false, cargo: 381,
  fuelTank: 50 };
const HA = { ...N, transmission: '8-speed dual-clutch', fc: 11.9, fh: 6.5, fx: 8.5, acceleration: 5.3, accelClaimed: true, cargo: 381,
  fuelTank: 50 };
const SM = { ...N, transmission: '6-speed manual', fc: 12.0, fh: 6.5, fx: 8.5, acceleration: null, accelClaimed: false, cargo: 464,
  fuelTank: 47, weight: 1475 };
const SA = { ...N, transmission: '8-speed dual-clutch', fc: 11.8, fh: 6.3, fx: 8.3, acceleration: null, accelClaimed: false, cargo: 464,
  fuelTank: 47, weight: 1515 };
const i30 = (p, haW) => ({
  'N Manual': { ...HM, weight: 1508, price: $(p[0]) },
  'N DCT': { ...HA, weight: haW, price: $(p[1]) },
  'N Premium Manual': { ...HM, weight: 1508, price: $(p[2]) },
  'N Premium DCT': { ...HA, weight: haW, price: $(p[3]) },
  'Sedan N Premium Manual': { ...SM, price: $(p[4]) },
  'Sedan N Premium DCT': { ...SA, price: $(p[5]) },
});

writeLineups(353, {
  'Hyundai|i20|2024': { 'N': i20(1235, 34990) },
  'Hyundai|i20|2025': { 'N': i20(null, 37500) },
  'Hyundai|i20|2026': { 'N': i20(null, 37500) },
  'Hyundai|i30 N|2024': i30([46200, 49200, 49200, 53700, 52000, 52000], 1541),
  'Hyundai|i30 N|2025': i30([52000, 52000, 55500, 55500, 53000, 53000], null),
});
