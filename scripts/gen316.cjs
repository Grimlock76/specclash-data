'use strict';
// supplement316.json — 2026-10-23: 2024 (AU) Mitsubishi Outlander (ZM MY24) and
// Nissan X-Trail (T33; Carsales' first 2024 listings are MY23/MY24 stock).
// Specs + price when new: Carsales 2024 variant pages. Outlander PHEV system
// torque null; LS AWD lists kerb below tare -> weight null. X-Trail e-POWER
// = e-4ORCE twin motor, 157 kW system output, torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const base = { cargo: null, acceleration: null, topSpeed: null };
const OUT = { ...base, engine: '2.5L I4 Petrol', displacement: 2488, cylinders: 4, aspiration: 'Naturally Aspirated', power: 135,
  torque: 244, transmission: 'CVT (8-step)', fuelType: 'petrol', towing: 1600, fuelTank: 55 };
const O2 = { ...OUT, drivetrain: 'FWD', fc: 10.1, fh: 6.3, fx: 7.7, seats: 7 };
const O4 = { ...OUT, drivetrain: 'AWD', fc: 10.5, fh: 6.8, fx: 8.1, seats: 7 };
const OPH = { ...base, engine: '2.4L I4 PHEV (twin motor)', displacement: 2360, cylinders: 4, aspiration: 'Naturally Aspirated',
  power: 185, torque: null, transmission: '1-speed automatic', fuelType: 'plug-in hybrid', drivetrain: 'AWD', fc: null, fh: null,
  fx: 1.5, battery: '20 kWh', range: 84, towing: 1600 };
const XT = { ...base, engine: '2.5L I4 Petrol', displacement: 2488, cylinders: 4, aspiration: 'Naturally Aspirated', power: 135,
  torque: 244, transmission: 'CVT', fuelType: 'petrol', towing: 2000, fuelTank: 55, seats: 5 };
const XT2 = { ...XT, drivetrain: 'FWD', fc: 9.9, fh: 6.1, fx: 7.4 };
const XT4 = { ...XT, drivetrain: 'AWD', fc: 10.0, fh: 6.5, fx: 7.8 };
const XTE = { ...base, engine: '1.5L I3 Turbo e-POWER (series hybrid)', displacement: 1497, cylinders: 3, aspiration: 'Turbo',
  power: 157, torque: null, transmission: '1-speed automatic', fuelType: 'hybrid', drivetrain: 'AWD', fc: 6.5, fh: 5.8, fx: 6.1,
  seats: 5, towing: 1650 };

writeLineups(316, {
  'Mitsubishi|Outlander|2024': {
    'ES 2WD': { ...O2, fc: 9.9, fh: 6.1, fx: 7.5, seats: 5, weight: 1580, price: $(37740) },
    'ES AWD': { ...O4, fc: 10.2, fh: 6.4, fx: 7.8, seats: 5, weight: 1635, price: $(40240) },
    'LS 2WD': { ...O2, weight: 1640, price: $(41240) },
    'LS AWD': { ...O4, price: $(43740) },
    'Black Edition 2WD': { ...O2, weight: 1660, price: $(42990) },
    'Aspire 2WD': { ...O2, weight: 1665, price: $(44840) },
    'Aspire AWD': { ...O4, weight: 1720, price: $(47340) },
    'Exceed AWD': { ...O4, weight: 1760, price: $(52640) },
    'Exceed Tourer AWD': { ...O4, weight: 1760, price: $(55190) },
    'PHEV ES': { ...OPH, weight: 2020, seats: 5, price: $(57290) },
    'PHEV Aspire': { ...OPH, weight: 2050, seats: 5, price: $(63790) },
    'PHEV Exceed': { ...OPH, weight: 2140, seats: 7, price: $(69290) },
    'PHEV Exceed Tourer': { ...OPH, weight: 2145, seats: 7, price: $(71790) },
    'PHEV GSR': { ...OPH, weight: 2139, seats: 7, price: $(73790) },
  },
  'Nissan|X-Trail|2024': {
    'ST': { ...XT2, weight: 1540, price: $(37750) },
    'ST-L': { ...XT2, weight: 1578, price: $(44190) },
    'N-TREK': { ...XT2, weight: 1578, price: $(47790) },
    'Ti 4WD': { ...XT4, weight: 1668, price: $(50990) },
    'Ti-L 4WD': { ...XT4, weight: 1672, price: $(53990) },
    'ST-L e-POWER': { ...XTE, weight: 1871, price: $(50490) },
    'Ti e-POWER': { ...XTE, weight: 1903, price: $(55190) },
    'Ti-L e-POWER': { ...XTE, weight: 1911, price: $(58190) },
  },
});
