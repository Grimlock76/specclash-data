'use strict';
// supplement298.json — 2026-10-23: 2025 (AU) Mitsubishi Outlander (ZM, pre-
// MY26 PHEV with 20 kWh pack) and Nissan X-Trail (T33). Specs + price when new:
// Carsales 2025 variant pages. X-Trail e-POWER here is the twin-motor
// e-4ORCE: Carsales' 157 kW system figure is used, torque null. Outlander PHEV
// system torque unpublished -> null. Outlander ES weight: tare only -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const base = { cargo: null, acceleration: null, topSpeed: null };
const OUT = { ...base, engine: '2.5L I4 Petrol', displacement: 2488, cylinders: 4, aspiration: 'Naturally Aspirated', power: 135,
  torque: 244, transmission: 'CVT (8-step)', fuelType: 'petrol', towing: 1600, fuelTank: 55 };
const OPH = { ...base, engine: '2.4L I4 PHEV (twin motor)', displacement: 2360, cylinders: 4, aspiration: 'Naturally Aspirated',
  power: 185, torque: null, transmission: '1-speed automatic', fuelType: 'plug-in hybrid', drivetrain: 'AWD', fc: null, fh: null,
  fx: 1.5, battery: '20 kWh', range: 84, towing: 1600 };
const XT = { ...base, engine: '2.5L I4 Petrol', displacement: 2488, cylinders: 4, aspiration: 'Naturally Aspirated', power: 135,
  torque: 244, transmission: 'CVT', fuelType: 'petrol', towing: 2000, fuelTank: 55, seats: 5 };
const XT2 = { ...XT, drivetrain: 'FWD', fc: 9.9, fh: 6.1, fx: 7.4 };
const XTE = { ...base, engine: '1.5L I3 Turbo e-POWER (series hybrid)', displacement: 1497, cylinders: 3, aspiration: 'Turbo',
  power: 157, torque: null, transmission: '1-speed automatic', fuelType: 'hybrid', drivetrain: 'AWD', fc: 6.5, fh: 5.8, fx: 6.1,
  seats: 5, towing: 1650 };

writeLineups(298, {
  'Mitsubishi|Outlander|2025': {
    'ES 2WD': { ...OUT, drivetrain: 'FWD', fc: 10.1, fh: 6.1, fx: 7.6, seats: 7, price: $(42540) },
    'Aspire 2WD': { ...OUT, drivetrain: 'FWD', fc: 10.1, fh: 6.3, fx: 7.7, weight: 1665, seats: 7, price: $(44840) },
    'Exceed Tourer AWD': { ...OUT, drivetrain: 'AWD', fc: 10.5, fh: 6.8, fx: 8.1, weight: 1695, seats: 5, price: $(58740) },
    'PHEV ES': { ...OPH, weight: 2020, seats: 5, price: $(57290) },
    'PHEV Exceed Tourer': { ...OPH, weight: 2145, seats: 7, price: $(71790) },
    'PHEV GSR': { ...OPH, weight: 2139, seats: 7, price: $(73790) },
  },
  'Nissan|X-Trail|2025': {
    'ST': { ...XT2, weight: 1539, price: $(36990) },
    'ST-L': { ...XT2, weight: 1578, price: $(41465) },
    'N-TREK': { ...XT2, weight: 1578, groundClearance: 205, price: $(46060) },
    'Ti 4WD': { ...XT, drivetrain: 'AWD', fc: 10.0, fh: 6.5, fx: 7.8, weight: 1668, price: $(50265) },
    'ST-L e-POWER': { ...XTE, weight: 1871, price: $(47765) },
    'Ti-L e-POWER': { ...XTE, weight: 1912, price: $(57065) },
  },
});
