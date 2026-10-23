'use strict';
// supplement308.json — 2026-10-23: 2025 (AU) Porsche 911 (992.2). Carsales'
// 2025 listing is the 992 II range only; MY25 pages used where they exist,
// MY26 pages for Carrera 4S, Targa 4S and Turbo S (no MY25 listing). GTS
// T-Hybrid and Turbo S power = Carsales combined output; torque null for the
// hybrids. Specs + price when new: Carsales variant pages.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const P = { fuelType: 'petrol', cargo: null, fc: null, fh: null };
const C30 = { ...P, engine: '3.0L Flat-6 Twin-Turbo', displacement: 2981, cylinders: 6, aspiration: 'Twin-Turbo', seats: 4,
  transmission: '8-speed PDK', drivetrain: 'RWD' };
const C = { ...C30, power: 290, torque: 450 };
const CS = { ...C30, power: 353, torque: 530 };
const GTS = { ...P, engine: '3.6L Flat-6 Turbo T-Hybrid', displacement: 3591, cylinders: 6, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 398, torque: null, transmission: '8-speed PDK', seats: 4, fx: 10.7, acceleration: 3.0, topSpeed: 312 };
const TS = { ...P, engine: '3.6L Flat-6 Twin-Turbo T-Hybrid', displacement: 3591, cylinders: 6, aspiration: 'Twin-Turbo', fuelType: 'hybrid',
  power: 523, torque: null, transmission: '8-speed PDK', drivetrain: 'AWD', topSpeed: 322, seats: 4 };
const GT3 = { ...P, engine: '4.0L Flat-6 (naturally aspirated)', displacement: 3996, cylinders: 6, aspiration: 'Naturally Aspirated',
  power: 375, torque: 450, transmission: '6-speed manual', drivetrain: 'RWD', fx: 13.6, acceleration: 3.9, topSpeed: 313, seats: null,
  price: $(446700) };

writeLineups(308, {
  'Porsche|911|2025': {
    'Carrera': { ...C, fx: 10.6, acceleration: 4.1, topSpeed: 294, weight: 1520, price: $(279400) },
    'Carrera T': { ...C, transmission: '6-speed manual', fx: 11.5, acceleration: 4.5, topSpeed: 295, weight: 1490, price: $(306800) },
    'Carrera S': { ...CS, fx: 10.2, acceleration: 3.5, topSpeed: 308, weight: 1540, price: $(342700) },
    'Carrera 4S': { ...CS, drivetrain: 'AWD', fx: 10.6, acceleration: 3.5, topSpeed: 308, weight: 1585, price: $(362300) },
    'Targa 4S': { ...CS, drivetrain: 'AWD', fx: 10.8, acceleration: 3.7, topSpeed: 308, weight: 1695, price: $(389400) },
    'Carrera GTS': { ...GTS, drivetrain: 'RWD', weight: 1595, price: $(380100) },
    'Carrera 4 GTS': { ...GTS, drivetrain: 'AWD', weight: 1645, price: $(400200) },
    'Targa 4 GTS': { ...GTS, drivetrain: 'AWD', fx: 10.9, acceleration: 3.2, topSpeed: 308, weight: 1745, price: $(436800) },
    'GT3': { ...GT3, weight: 1462 },
    'GT3 Touring': { ...GT3, weight: 1461 },
    'Turbo S': { ...TS, fx: 11.8, acceleration: 2.5, weight: 1725, price: $(577300) },
    'Carrera Cabriolet': { ...C, fx: 10.7, acceleration: 4.3, topSpeed: 291, weight: 1600, price: $(302700) },
    'Carrera S Cabriolet': { ...CS, fx: 10.5, acceleration: 3.7, topSpeed: 308, weight: 1625, price: $(365400) },
    'Turbo S Cabriolet': { ...TS, fx: 12.0, acceleration: 2.6, weight: 1810, price: $(598000) },
  },
});
