'use strict';
// supplement279.json — 2026-10-23: 2026 (AU) Porsche Taycan (J1.2 sedan),
// Panamera (G3), Audi A3 sedan + Sportback (8Y facelift). Specs + price when
// new: Carsales variant pages. Taycan power = Carsales "combined power"
// (nominal; the overboost/launch-control peaks quoted in Carsales' overview
// text are not used). Turbo GT torque null (table 1340 vs overview 1240 Nm).
// Panamera E-Hybrid torque null (Carsales lists engine torque only).
// A3 Sportback keeps S3/RS3 carried over unchanged.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: null };
const TAY = { ...B, displacement: null, cylinders: null, aspiration: null, fuelType: 'electric', transmission: '2-speed automatic',
  engine: 'Dual-Motor Electric', drivetrain: 'AWD', fc: null, fh: null, fx: null, battery: '97 kWh' };
const PAN = { ...B, seats: 4, transmission: '8-speed dual-clutch', aspiration: 'Twin-Turbo', drivetrain: 'AWD', fuelTank: 90 };
const PV6 = { ...PAN, engine: '2.9L V6 Twin-Turbo PHEV', displacement: 2894, cylinders: 6, fuelType: 'plug-in hybrid', torque: null,
  fc: null, fh: null, fx: 1.8, battery: '25.9 kWh', range: 96, fuelTank: null };
const PV8 = { ...PV6, engine: '4.0L V8 Twin-Turbo PHEV', displacement: 3996, cylinders: 8, fx: 2.1, range: 92 };
const A3 = { ...B, engine: '1.5L I4 Turbo Petrol', displacement: 1498, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 110, torque: 250, transmission: '7-speed dual-clutch', drivetrain: 'FWD', acceleration: 8.1, topSpeed: 226, seats: 5,
  fuelTank: 50 };
const A3Q = { ...A3, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 150, torque: 320, drivetrain: 'AWD', fc: null, fh: null,
  acceleration: 6.3, topSpeed: 245, weight: 1599 };

writeLineups(279, {
  'Porsche|Taycan|2026': {
    'Taycan': { ...TAY, engine: 'Single-Motor Electric', drivetrain: 'RWD', power: 300, torque: 410, battery: '82.3 kWh', range: 468,
      acceleration: 4.8, topSpeed: 230, weight: 2090, seats: 4, price: $(181200) },
    'Taycan 4S': { ...TAY, power: 380, torque: 710, range: 441, acceleration: 3.7, topSpeed: 250, weight: 2250, price: $(222100) },
    'Taycan GTS': { ...TAY, power: 445, torque: 790, range: 505, acceleration: 3.3, topSpeed: 250, price: $(264500) },
    'Taycan Turbo': { ...TAY, power: 520, torque: 940, range: 626, acceleration: 2.7, topSpeed: 260, price: $(317600) },
    'Taycan Turbo S': { ...TAY, power: 570, torque: 1110, range: 506, acceleration: 2.4, topSpeed: 260, price: $(376600) },
    'Taycan Turbo GT': { ...TAY, power: 580, torque: null, range: 512, acceleration: 2.3, topSpeed: 290, seats: 4, price: $(419000) },
  },
  'Porsche|Panamera|2026': {
    'Panamera': { ...PAN, engine: '2.9L V6 Twin-Turbo Petrol', displacement: 2894, cylinders: 6, fuelType: 'petrol', drivetrain: 'RWD',
      power: 260, torque: 500, fc: 12.8, fh: 7.6, fx: 9.5, acceleration: 5.1, topSpeed: 272, weight: 1885, cargo: 466, price: $(246700) },
    '4 E-Hybrid': { ...PV6, power: 346, acceleration: 4.1, topSpeed: 280, weight: 2230, price: $(283000) },
    '4S E-Hybrid': { ...PV6, power: 400, acceleration: 3.7, topSpeed: 290, weight: 2255, price: $(311200) },
    'GTS': { ...PAN, engine: '4.0L V8 Twin-Turbo Petrol', displacement: 3996, cylinders: 8, fuelType: 'petrol', power: 368, torque: 660,
      fc: 16.5, fh: 8.9, fx: 11.7, acceleration: 3.8, topSpeed: 302, weight: 2065, price: $(351800) },
    'Turbo E-Hybrid': { ...PV8, power: 500, acceleration: 3.2, topSpeed: 315, weight: 2360, price: $(425500) },
    'Turbo S E-Hybrid': { ...PV8, power: 575, acceleration: 2.9, topSpeed: 325, weight: 2365, price: $(499900) },
  },
  'Audi|A3|2026': {
    'TFSI 110kW S line': { ...A3, fc: 6.5, fh: 4.5, fx: 5.3, weight: 1397, cargo: 425, price: $(57800) },
    'TFSI 150kW S line quattro': { ...A3Q, fx: 6.5, cargo: 390, price: $(65800) },
  },
  'Audi|A3 Sportback|2026': {
    'TFSI 110kW S line': { ...A3, fc: 6.6, fh: 4.6, fx: 5.3, weight: 1394, cargo: 380, price: $(54800) },
    'TFSI 150kW S line quattro': { ...A3Q, fx: 6.6, cargo: 325, price: $(62800) },
    'S3': existing('Audi', 'A3 Sportback', 2026, 'S3'),
    'RS3': existing('Audi', 'A3 Sportback', 2026, 'RS3'),
  },
});
