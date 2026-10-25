'use strict';
// supplement429.json — 2026-10-25: Mercedes-Benz A-Class hatch 2024 + 2025, plus
// 2026 fixes (A250 / A35 / A45 are 8-speed DCT, 51 L tank). Replaces stale rows
// (A180 — not sold here 2024+, ~ prices). 2025 adds the Special Edition /
// Edition R / Edition R+ grades. Specs + price when new: Carsales hatch variant
// pages (base price incl GST & LCT). Tare-only weights null. fc = urban, fh =
// extra-urban (Carsales "Highway").
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const B = { seats: 5, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', weight: null, accelClaimed: true };
const A200 = p => ({ ...B, engine: '1.3L I4 Turbo Petrol', displacement: 1332, transmission: '7-speed dual-clutch', power: 120, torque: 270,
  drivetrain: 'FWD', fc: 9.2, fh: 5.1, fx: 6.6, acceleration: 8.2, topSpeed: 225, fuelTank: 43, cargo: 350, price: $(p) });
const T20 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1991, transmission: '8-speed dual-clutch', drivetrain: 'AWD', fuelTank: 51 };
const A250 = p => ({ ...T20, power: 165, torque: 350, fc: 10.3, fh: 5.1, fx: 7.0, acceleration: 6.3, topSpeed: 250, cargo: 350, price: $(p) });
const A35 = p => ({ ...T20, power: 225, torque: 400, fc: 11.1, fh: 6.4, fx: 8.2, acceleration: 4.7, topSpeed: 250, cargo: 370, price: $(p) });
const A45 = p => ({ ...T20, power: 310, torque: 500, fc: 11.7, fh: 7.3, fx: 8.9, acceleration: 3.9, topSpeed: 270, cargo: 370, price: $(p) });
const keep = t => existing('Mercedes-Benz', 'A-Class', 2026, t).price;

writeLineups(429, {
  'Mercedes-Benz|A-Class|2024': { 'A200': A200(62900), 'A250': A250(73000), 'A35 AMG': A35(88500), 'A45 S AMG': A45(121000) },
  'Mercedes-Benz|A-Class|2025': {
    'A200': A200(57500), 'A200 Special Edition': A200(57500), 'A250': A250(73800), 'A250 Special Edition': A250(73800),
    'A35 AMG': A35(89700), 'A35 AMG Edition R': A35(86200), 'A45 S AMG': A45(122500), 'A45 S AMG Edition R+': A45(122500),
  },
  'Mercedes-Benz|A-Class|2026': {
    'A200': { ...A200(0), price: keep('A200') }, 'A200 Special Edition': { ...A200(0), price: keep('A200 Special Edition') },
    'A250 Special Edition': { ...A250(0), price: keep('A250 Special Edition') },
    'A35 AMG Edition R': { ...A35(0), price: keep('A35 AMG Edition R') },
    'A45 S AMG Edition R+': { ...A45(0), price: keep('A45 S AMG Edition R+') },
  },
});
