'use strict';
// supplement264.json — 2026-10-23: 2026 (AU) Porsche 911 (992.2) and Cayenne
// (9YB II, + Cayenne Electric Turbo). The 2026 catalogue had 992.1/E3-I specs
// and run-out grades (GT3 RS, Dakar, Carrera 4, coupes). Specs + "price when
// new": Carsales variant pages; CarsGuide 2026 MSRP for Cayenne Turbo Electric.
// Hybrid power = combined system output; system torque not listed → null
// (911 GTS/Turbo S T-Hybrid, Cayenne E-Hybrids). 0-100 = Porsche claim via Carsales.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const P = { fuelType: 'petrol', cargo: null, fc: null, fh: null };
const C30 = { ...P, engine: '3.0L Flat-6 Twin-Turbo', displacement: 2981, cylinders: 6, aspiration: 'Twin-Turbo', seats: 4 };
const GTS = { ...P, engine: '3.6L Flat-6 Turbo T-Hybrid', displacement: 3591, cylinders: 6, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 398, torque: null, transmission: '8-speed PDK', seats: 4 };
const TS = { ...P, engine: '3.6L Flat-6 Twin-Turbo T-Hybrid', displacement: 3591, cylinders: 6, aspiration: 'Twin-Turbo', fuelType: 'hybrid',
  power: 523, torque: null, transmission: '8-speed PDK', drivetrain: 'AWD', topSpeed: 322, seats: 4 };
const GT3 = { ...P, engine: '4.0L Flat-6 (naturally aspirated)', displacement: 3996, cylinders: 6, aspiration: 'Naturally Aspirated',
  power: 375, torque: 450, transmission: '6-speed manual', drivetrain: 'RWD', fx: 13.6, acceleration: 3.9, topSpeed: 313, seats: null, price: $(449100) };
const CAY = { ...P, cargo: null, drivetrain: 'AWD', transmission: '8-speed automatic', towing: 3500, seats: null };
const V6 = { ...CAY, engine: '3.0L V6 Turbo', displacement: 2995, cylinders: 6, aspiration: 'Turbo', power: 260, torque: 500, fx: 10.4,
  acceleration: 5.7, topSpeed: 248, weight: 2085, fuelTank: 90 };
const EH = { ...CAY, engine: '3.0L V6 Turbo PHEV', displacement: 2995, cylinders: 6, aspiration: 'Turbo', fuelType: 'plug-in hybrid',
  power: 346, torque: null, fx: 1.9, battery: '25.9 kWh', range: 86, acceleration: 4.9, topSpeed: 254, weight: 2455 };
const SEH = { ...EH, power: 382, fx: 2.0, acceleration: 4.7, topSpeed: 263, weight: 2440 };
const V8 = { ...CAY, engine: '4.0L V8 Twin-Turbo', displacement: 3996, cylinders: 8, aspiration: 'Twin-Turbo' };
writeLineups(264, {
  'Porsche|911|2026': {
    'Carrera': { ...C30, power: 290, torque: 450, transmission: '8-speed PDK', drivetrain: 'RWD', fx: 10.6, acceleration: 4.1, topSpeed: 294, weight: 1520, price: $(296700) },
    'Carrera T': { ...C30, power: 290, torque: 450, transmission: '6-speed manual', drivetrain: 'RWD', fx: 11.5, acceleration: 4.5, topSpeed: 295, weight: 1490, price: $(318000) },
    'Carrera S': { ...C30, power: 353, torque: 530, transmission: '8-speed PDK', drivetrain: 'RWD', fx: 10.2, acceleration: 3.5, topSpeed: 308, weight: 1540, price: $(344300) },
    'Carrera 4S': { ...C30, power: 353, torque: 530, transmission: '8-speed PDK', drivetrain: 'AWD', fx: 10.6, acceleration: 3.5, topSpeed: 308, weight: 1585, price: $(362300) },
    'Targa 4S': { ...C30, power: 353, torque: 530, transmission: '8-speed PDK', drivetrain: 'AWD', fx: 10.8, acceleration: 3.7, topSpeed: 308, weight: 1695, price: $(389400) },
    'Carrera GTS': { ...GTS, drivetrain: 'RWD', fx: 10.7, acceleration: 3.0, topSpeed: 312, weight: 1595, price: $(392200) },
    'Carrera 4 GTS': { ...GTS, drivetrain: 'AWD', fx: 10.7, acceleration: 3.0, topSpeed: 312, weight: 1645, price: $(412300) },
    'Targa 4 GTS': { ...GTS, drivetrain: 'AWD', fx: 10.9, acceleration: 3.2, topSpeed: 308, weight: 1745, price: $(449000) },
    'GT3': { ...GT3, weight: 1462 },
    'GT3 Touring': { ...GT3, weight: 1461 },
    'Turbo S': { ...TS, fx: 11.8, acceleration: 2.5, weight: 1725, price: $(577300) },
    'Carrera Cabriolet': { ...C30, power: 290, torque: 450, transmission: '8-speed PDK', drivetrain: 'RWD', fx: 10.7, acceleration: 4.3, topSpeed: 291, weight: 1600, price: $(319500) },
    'Carrera S Cabriolet': { ...C30, power: 353, torque: 530, transmission: '8-speed PDK', drivetrain: 'RWD', fx: 10.5, acceleration: 3.7, topSpeed: 308, weight: 1625, price: $(367100) },
    'Turbo S Cabriolet': { ...TS, fx: 12.0, acceleration: 2.6, weight: 1810, price: $(598000) },
  },
  'Porsche|Cayenne|2026': {
    'Cayenne': { ...V6, price: $(153300) },
    'Black Edition': { ...V6, price: $(162500) },
    'E-Hybrid': { ...EH, price: $(171400) },
    'E-Hybrid Black Edition': { ...EH, price: $(180500) },
    'S': { ...V8, power: 349, torque: 600, fx: 12.3, acceleration: 5.0, topSpeed: 273, weight: 2190, price: $(194700) },
    'S E-Hybrid': { ...SEH, price: $(194700) },
    'S E-Hybrid Black Edition': { ...SEH, price: $(197600) },
    'GTS': { ...V8, power: 368, torque: 660, fx: 12.3, acceleration: 4.4, topSpeed: 275, weight: 2220, price: $(214700) },
    'Turbo E-Hybrid': { ...V8, engine: '4.0L V8 Twin-Turbo PHEV', fuelType: 'plug-in hybrid', power: 544, torque: null, fx: 2.5,
      battery: '25.9 kWh', range: 79, acceleration: 3.7, topSpeed: 295, weight: 2595, price: $(312300) },
    'Turbo GT': { ...V8, power: 485, torque: 850, fx: 12.5, acceleration: 3.3, topSpeed: 305, weight: 2245, seats: 4, price: $(376200) },
    'Turbo Electric': { fuelType: 'electric', engine: 'Dual Motor Electric', aspiration: 'Electric', transmission: null,
      drivetrain: 'AWD', cylinders: null, displacement: null, power: 630, torque: null, battery: '113.0 kWh', range: null,
      fc: null, fh: null, fx: null, acceleration: 2.5, topSpeed: 260, weight: 2650, towing: 3500, seats: null, cargo: null, price: $(259900) },
  },
});
