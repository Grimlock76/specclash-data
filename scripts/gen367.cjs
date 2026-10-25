'use strict';
// supplement367.json — 2026-10-25: Nissan Qashqai (J12) 2024 (MY24 grades: ST,
// ST+, ST-L, Ti, Ti e-POWER) and 2025 (MY25 regrade: ST, ST-L, Ti, Ti-L + Ti /
// Ti-L / N-DESIGN e-POWER). MY25 cars Carsales files under 2024 go to 2025;
// the MY26 e-POWER update stays in 2026. Replaces stale rows (~ prices).
// Specs + price when new: Carsales variant pages (base price incl GST & LCT).
// e-POWER = drive-motor output (140 kW / 330 Nm). MY24 petrol: only combined
// fuel listed -> city/highway null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { seats: 5, cargo: 504, fuelTank: 55, drivetrain: 'FWD', topSpeed: null, acceleration: null, cylinders: 4,
  aspiration: 'Turbo' };
const P = { ...B, engine: '1.3L I4 Turbo Petrol', displacement: 1332, fuelType: 'petrol', power: 110, torque: 250,
  transmission: 'CVT', towing: 1500 };
const E = { ...B, engine: '1.5L I3 Turbo e-POWER (series hybrid)', displacement: 1497, cylinders: 3, fuelType: 'hybrid', power: 140,
  torque: 330, transmission: '1-speed automatic', towing: 750, cargo: 404 };
const P24 = { ...P, fc: null, fh: null, fx: 6.1 }, P25 = { ...P, fc: 7.5, fh: 5.3, fx: 6.1 };

writeLineups(367, {
  'Nissan|Qashqai|2024': {
    'ST': { ...P24, weight: 1451, price: $(34665) },
    'ST+': { ...P24, weight: 1472, price: $(38665) },
    'ST-L': { ...P24, weight: 1482, price: $(42965) },
    'Ti': { ...P24, weight: 1524, price: $(48255) },
    'Ti e-POWER': { ...E, fc: 5.2, fh: 5.1, fx: 5.2, weight: 1729, price: $(52335) },
  },
  'Nissan|Qashqai|2025': {
    'ST': { ...P25, weight: 1454, price: $(34665) },
    'ST-L': { ...P25, weight: 1474, price: $(38665) },
    'Ti': { ...P25, weight: 1487, price: $(42965) },
    'Ti-L': { ...P25, fc: 7.1, fh: 5.1, fx: 5.8, weight: 1526, price: $(48165) },
    'Ti e-POWER': { ...E, fc: 4.9, fh: 4.8, fx: 4.8, weight: 1707, price: $(47165) },
    'Ti-L e-POWER': { ...E, fc: 4.9, fh: 4.8, fx: 4.8, weight: 1717, price: $(52365) },
    'N-DESIGN e-POWER': { ...E, fc: 4.9, fh: 4.8, fx: 4.8, weight: 1732, price: $(54365) },
  },
});
