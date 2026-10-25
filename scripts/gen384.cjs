'use strict';
// supplement384.json — 2026-10-25: VW T-Roc (D11) 2024 (MY24), 2025 (MY25 +
// the R Wolfsburg Edition, which Carsales also files under 2024 as MY25) and
// 2026 (CityLife / Style / R-Line only — the R is gone). Replaces stale rows
// (~ prices). Specs + price when new: Carsales variant pages (base price incl
// GST & LCT). Kerb below tare / tare-only -> weight null. 0-100 claimed
// (R-Line 7.2 s, R 4.9 s).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', seats: 5, cargo: 445, fuelTank: 50, topSpeed: null };
const TSI110 = { ...B, engine: '1.4L I4 Turbo Petrol', displacement: 1395, power: 110, torque: 250, transmission: '8-speed automatic',
  drivetrain: 'FWD', fc: 7.9, fh: 5.4, fx: 6.3, acceleration: null, weight: null };
const TSI140 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 140, torque: 320, transmission: '7-speed dual-clutch',
  drivetrain: 'AWD', fc: 8.9, fh: 6.3, fx: 7.2, acceleration: 7.2, accelClaimed: true, weight: null };
const R = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 221, torque: 400, transmission: '7-speed dual-clutch',
  drivetrain: 'AWD', fc: 10.4, fh: 7.1, fx: 8.3, acceleration: 4.9, accelClaimed: true };
const base = p => ({ 'CityLife': { ...TSI110, price: $(p[0]) }, '110TSI Style': { ...TSI110, price: $(p[1]) },
  '140TSI R-Line': { ...TSI140, price: $(p[2]) } });

writeLineups(384, {
  'Volkswagen|T-Roc|2024': { ...base([36990, 40590, 47990]), 'R': { ...R, weight: null, price: $(63490) } },
  'Volkswagen|T-Roc|2025': { ...base([38990, 41990, 49990]), 'R': { ...R, weight: 1593, price: $(64290) },
    'R Wolfsburg Edition': { ...R, weight: 1593, price: $(69290) } },
  'Volkswagen|T-Roc|2026': base([38990, 41990, 49990]),
});
