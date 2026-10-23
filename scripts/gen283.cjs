'use strict';
// supplement283.json — 2026-10-23: 2026 (AU) Hyundai i30 N hatch, IONIQ 9,
// BYD Sealion 6, CUPRA Formentor, Polestar 2. Specs: Carsales variant pages.
// Price: Carsales price when new, else CarsGuide 2026 MSRP (IONIQ 9;
// Formentor, where Carsales shows CUPRA's national drive-away figures).
// i30 N DCT weights null (Carsales kerb < tare). EV dual-motor / PHEV system
// torque null where unpublished. (Duplicate 'Polestar 2' model removed in gen284.)
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const N = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 206, torque: 392, drivetrain: 'FWD', fuelTank: 50, cargo: 381 };
const NM = { ...N, transmission: '6-speed manual', fc: 11.8, fh: 6.6, fx: 8.5, weight: 1508 };
const ND = { ...N, transmission: '8-speed dual-clutch', fc: 11.9, fh: 6.5, fx: 8.5 };
const EV = { ...B, displacement: null, cylinders: null, aspiration: null, fuelType: 'electric', transmission: '1-speed automatic',
  fc: null, fh: null, fx: null };
const I9 = { ...EV, engine: 'Dual-Motor Electric', drivetrain: 'AWD', power: 314, torque: null, battery: '110.3 kWh', range: 600,
  acceleration: 5.2, weight: 2774, towing: 2500 };
const SL6 = { ...B, engine: '1.5L I4 PHEV (DM-i)', displacement: 1498, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'plug-in hybrid', torque: null, transmission: '1-speed automatic', drivetrain: 'FWD', fc: null, fh: null, towing: 750,
  fuelTank: 60 };
const FM = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1984, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  transmission: '7-speed dual-clutch', drivetrain: 'AWD', fc: null, fh: null, cargo: 420 };
const PS = { ...EV, engine: 'Single-Motor Electric', drivetrain: 'RWD', torque: 490, topSpeed: 205, towing: 1500, cargo: 407 };
const PS_LINEUP = {
  'Standard Range Single Motor': { ...PS, power: 200, battery: '70 kWh', range: 554, acceleration: 6.4, price: $(62400) },
  'Long Range Single Motor': { ...PS, power: 220, battery: '82 kWh', range: 659, acceleration: 6.2, price: $(66400) },
  'Long Range Dual Motor': { ...PS, engine: 'Dual-Motor Electric', drivetrain: 'AWD', power: 310, torque: null, battery: '82 kWh',
    range: 596, acceleration: 4.5, price: $(71400) },
  'Long Range Dual Motor Performance Pack': { ...PS, engine: 'Dual-Motor Electric', drivetrain: 'AWD', power: 350, torque: null,
    battery: '82 kWh', range: 568, acceleration: 4.2, price: $(85080) },
};

writeLineups(283, {
  'Hyundai|i30 N|2026': {
    'N Manual': { ...NM, price: $(52000) },
    'N DCT': { ...ND, price: $(52500) },
    'N Premium Manual': { ...NM, price: $(55500) },
    'N Premium DCT': { ...ND, price: $(56000) },
  },
  'Hyundai|Ioniq 9|2026': {
    'Calligraphy AWD 7 Seat': { ...I9, seats: 7, price: $(119668) },
    'Calligraphy AWD 6 Seat': { ...I9, seats: 6, price: $(121668) },
  },
  'BYD|Sealion 6|2026': {
    'Essential': { ...SL6, power: 160, fx: 1.1, battery: '18.3 kWh', range: 92, acceleration: 8.5, weight: 1940, price: $(42990) },
    'Dynamic Extended Range': { ...SL6, power: 160, fx: 0.8, battery: '26.6 kWh', range: 140, acceleration: 8.9, weight: 1995,
      price: $(46990) },
    'Premium Extended Range AWD': { ...SL6, drivetrain: 'AWD', power: 253, fx: 1.1, battery: '26.6 kWh', range: 128, acceleration: 5.5,
      weight: 2160, towing: 1300, price: $(52990) },
  },
  'CUPRA|Formentor|2026': {
    'V': { ...FM, power: 150, torque: 320, fx: 7.0, acceleration: 6.7, price: $(51990) },
    'VZx': { ...FM, power: 245, torque: 420, fx: 8.3, acceleration: 4.8, price: $(65790) },
    'VZ5': { ...FM, engine: '2.5L I5 Turbo Petrol', displacement: 2480, cylinders: 5, power: 287, torque: 480, fx: 9.3,
      acceleration: 4.2, topSpeed: 280, fuelTank: 55, cargo: 410, price: $(94990) },
  },
  'Polestar|2|2026': PS_LINEUP,
});
