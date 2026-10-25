'use strict';
// supplement436.json — 2026-10-25: Mercedes-Benz CLA coupe (C118, outgoing gen)
// 2024 + 2025 (Carsales slug "cla-class"). Replaces stale ~ price rows; 2025 adds
// Special Edition / Edition R / Edition R+ grades. The new-gen CLA (electric,
// CLA180/220 hybrid) Carsales also files under 2025 is the 2026 rows. Specs +
// price when new: Carsales variant pages (base price incl GST & LCT). Tare-only
// weights null (CLA45: kerb 1,687 kg). fc urban, fh extra-urban.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { seats: 5, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', cargo: null, weight: null, accelClaimed: true };
const T20 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1991, drivetrain: 'AWD', fuelTank: 51 };
const C200 = p => ({ ...B, engine: '1.3L I4 Turbo Petrol', displacement: 1332, transmission: '7-speed dual-clutch', drivetrain: 'FWD',
  power: 120, torque: 270, fc: 9.3, fh: 5.1, fx: 6.7, acceleration: 8.4, topSpeed: 229, fuelTank: 43, price: $(p) });
const C250 = p => ({ ...T20, transmission: '8-speed dual-clutch', power: 165, torque: 350, fc: 10.8, fh: 5.3, fx: 7.3, acceleration: 6.4,
  topSpeed: 250, price: $(p) });
const C35 = p => ({ ...T20, transmission: '7-speed dual-clutch', power: 225, torque: 400, fc: 11.4, fh: 6.3, fx: 8.2, acceleration: 4.9,
  topSpeed: 250, price: $(p) });
const C45 = p => ({ ...T20, transmission: '8-speed dual-clutch', power: 310, torque: 500, fc: 12.9, fh: 7.3, fx: 9.3, acceleration: 4.1,
  topSpeed: 270, weight: 1687, price: $(p) });

writeLineups(436, {
  'Mercedes-Benz|CLA|2024': { 'CLA200': C200(76900), 'CLA250': C250(85900), 'CLA35 AMG': C35(99900), 'CLA45 S AMG': C45(126500) },
  'Mercedes-Benz|CLA|2025': {
    'CLA200': C200(73200), 'CLA200 Special Edition': C200(73200), 'CLA250': C250(87600), 'CLA250 Special Edition': C250(87527),
    'CLA35 AMG': C35(102000), 'CLA35 AMG Edition R': C35(97627), 'CLA45 S AMG': C45(129300), 'CLA45 S AMG Edition R+': C45(129227),
  },
});
