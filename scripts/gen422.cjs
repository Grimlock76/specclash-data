'use strict';
// supplement422.json — 2026-10-25: 2025 (AU) Audi Q5 (FY run-out MY25: 35 TDI,
// 40 TDI Sport, 45 TFSI Sport, 45 TFSI S line, 55 TFSI e S line; the new-gen
// cars Carsales also files under 2025 are the 2026 rows). Replaces stale rows
// ("40 TFSI quattro", "Black Edition", ~ prices). Specs + price when new:
// Carsales MY25 variant pages (base price incl GST & LCT). Tare-only weights
// null. 55 TFSI e: 270 kW system, torque null, 53 km ADR. 0-100 claimed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { cylinders: 4, aspiration: 'Turbo', transmission: '7-speed dual-clutch', seats: 5, cargo: 520, fuelTank: 65, topSpeed: null,
  weight: null, accelClaimed: true };
const D = { ...B, engine: '2.0L I4 Turbo Diesel', displacement: 1968, fuelType: 'diesel', towing: 2000 };
const P = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1984, fuelType: 'petrol', power: 183, torque: 370, drivetrain: 'AWD',
  fc: 9.7, fh: 7.0, fx: 8.0, acceleration: 6.3 };

writeLineups(422, {
  'Audi|Q5|2025': {
    '35 TDI': { ...D, power: 120, torque: 370, drivetrain: 'FWD', fc: 5.5, fh: 4.4, fx: 4.8, acceleration: 9.0, price: $(73400) },
    '40 TDI Sport': { ...D, power: 150, torque: 400, drivetrain: 'AWD', fc: 6.1, fh: 5.0, fx: 5.4, acceleration: 7.6, price: $(88930) },
    '45 TFSI Sport': { ...P, price: $(88315) },
    '45 TFSI S line': { ...P, price: $(96515) },
    '55 TFSI e S line': { ...B, engine: '2.0L I4 Turbo PHEV', displacement: 1984, fuelType: 'plug-in hybrid', power: 270, torque: null,
      drivetrain: 'AWD', fc: null, fh: null, fx: 2.0, battery: '17.9 kWh', range: 53, acceleration: 5.3, price: $(113984) },
  },
});
