'use strict';
// supplement258.json — 2026-10-23: 2026 (AU) Nissan X-Trail (T33) and
// Mitsubishi Outlander (ZM). Specs + "price when new": Carsales variant pages
// (the variant each badge page shows). X-Trail e-POWER: wheels are driven by
// the electric motor alone, so 150 kW / 330 Nm is the real drive output.
// Outlander PHEV: Mitsubishi publishes no system torque → null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const base = { cargo: null, acceleration: null, topSpeed: null };
const XT = { ...base, engine: '2.5L I4 Petrol', displacement: 2488, cylinders: 4, aspiration: 'Naturally Aspirated',
  power: 135, torque: 244, transmission: 'CVT', fuelType: 'petrol', towing: 2000, fuelTank: 55, cargo: 585, seats: 5 };
const XT2 = { drivetrain: 'FWD', fc: 9.9, fh: 6.1, fx: 7.4 };
const XT4 = { drivetrain: 'AWD', fc: 10.0, fh: 6.5, fx: 7.8 };
const XTE = { ...base, engine: '1.5L I3 Turbo e-POWER (series hybrid)', displacement: 1497, cylinders: 3, aspiration: 'Turbo',
  power: 150, torque: 330, transmission: '1-speed automatic', fuelType: 'hybrid', drivetrain: 'FWD',
  fc: 5.1, fh: 5.6, fx: 5.4, towing: 670, fuelTank: 55, cargo: 575, seats: 5 };
const OUT = { ...base, engine: '2.5L I4 Petrol', displacement: 2488, cylinders: 4, aspiration: 'Naturally Aspirated',
  power: 135, torque: 244, transmission: 'CVT (8-step)', fuelType: 'petrol', towing: 1600, fuelTank: 55 };
const O2 = { drivetrain: 'FWD', fc: 10.1, fh: 6.3, fx: 7.7, weight: 1694, seats: 7, cargo: 163 };
const O4 = { drivetrain: 'AWD', fc: 10.5, fh: 6.8, fx: 8.1, weight: 1729, seats: 5, cargo: 163 };
const OPH = { ...base, engine: '2.4L I4 PHEV (twin motor)', displacement: 2360, cylinders: 4, aspiration: 'Naturally Aspirated',
  power: 221, torque: null, transmission: '1-speed automatic', fuelType: 'plug-in hybrid', drivetrain: 'AWD',
  fc: null, fh: null, fx: 1.2, battery: '22.7 kWh', range: 103, towing: 1600, fuelTank: 53 };
writeLineups(258, {
  'Nissan|X-Trail|2026': {
    'ST': { ...XT, ...XT2, weight: 1535, price: $(38305) },
    'ST-L': { ...XT, ...XT2, weight: 1571, price: $(42780) },
    'Rock Creek': { ...XT, ...XT4, weight: 1672, seats: 7, cargo: 465, price: $(48315) },
    'Ti': { ...XT, ...XT4, weight: 1670, price: $(51580) },
    'Ti-L': { ...XT, ...XT4, weight: 1678, price: $(54580) },
    'ST-L e-POWER': { ...XTE, weight: 1752, price: $(45990) },
    'Ti e-POWER': { ...XTE, weight: 1782, price: $(50915) },
    'Ti-L e-POWER': { ...XTE, weight: 1787, price: $(54715) },
  },
  'Mitsubishi|Outlander|2026': {
    'ES': { ...OUT, drivetrain: 'FWD', fc: 9.9, fh: 6.1, fx: 7.5, weight: 1604, seats: 5, cargo: 485, price: $(39990) },
    'LS': { ...OUT, ...O2, price: $(44040) },
    'Black Edition': { ...OUT, ...O2, price: $(45490) },
    'Aspire': { ...OUT, ...O2, price: $(48540) },
    'Exceed': { ...OUT, ...O4, price: $(55890) },
    'Exceed Tourer': { ...OUT, ...O4, price: $(58740) },
    'PHEV ES': { ...OPH, weight: 2098, seats: 5, cargo: 472, price: $(58990) },
    'PHEV Aspire': { ...OPH, weight: 2188, seats: 7, cargo: 468, price: $(66790) },
    'PHEV Exceed': { ...OPH, weight: 2158, seats: 5, cargo: 472, price: $(71640) },
    'PHEV Exceed Tourer': { ...OPH, weight: 2158, seats: 5, cargo: 472, price: $(74490) },
  },
});
