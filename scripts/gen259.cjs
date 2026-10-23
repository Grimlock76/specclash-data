'use strict';
// supplement259.json — 2026-10-23: 2026 (AU) Tesla Model Y + Model 3, BYD
// Atto 3, Suzuki Jimny. Specs + "price when new": Carsales variant pages
// (Model Y prices cross-checked with CarsGuide 2026 MSRP — identical).
// EV range = ADR figure. Torque/battery left null where Carsales lists none.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = (o) => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null,
  displacement: null, fc: null, fh: null, fx: null, cargo: null, ...o });
const MY = { seats: 5, towing: 1588, cargo: 938 };
const M3 = { seats: 5, cargo: 594 };
const JIM = { engine: '1.5L I4 Petrol (K15B)', displacement: 1462, cylinders: 4, aspiration: 'Naturally Aspirated',
  power: 75, torque: 130, fuelType: 'petrol', drivetrain: '4WD', seats: 4, towing: 1300, fuelTank: 40,
  groundClearance: 210, acceleration: null, topSpeed: null };
writeLineups(259, {
  'Tesla|Model Y|2026': {
    'Rear-Wheel Drive': ev({ ...MY, engine: 'Single Motor Electric', drivetrain: 'RWD', power: 255, torque: 450, battery: null,
      range: 466, acceleration: 5.9, topSpeed: 201, weight: 1921, price: $(58900) }),
    'Premium Rear-Wheel Drive': ev({ ...MY, engine: 'Single Motor Electric', drivetrain: 'RWD', power: 255, torque: 450, battery: null,
      range: 466, acceleration: 5.9, topSpeed: 201, weight: 1921, price: $(58900) }),
    'Long Range AWD': ev({ ...MY, engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 378, torque: null, battery: '85.0 kWh',
      range: 600, acceleration: 4.8, topSpeed: 201, weight: 1992, price: $(68900) }),
    'Premium Long Range AWD': ev({ ...MY, engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 378, torque: null, battery: '85.0 kWh',
      range: 600, acceleration: 4.8, topSpeed: 201, weight: 1992, price: $(68900) }),
    'L Premium AWD': ev({ ...MY, engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 378, torque: null, battery: '85.0 kWh',
      range: 681, acceleration: 5.0, topSpeed: 201, weight: null, seats: 6, cargo: 536, price: $(74900) }),
    'Performance': ev({ ...MY, engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 461, torque: null, battery: '85.0 kWh',
      range: 580, acceleration: 3.5, topSpeed: 250, weight: 2033, price: $(89400) }),
  },
  'Tesla|Model 3|2026': {
    'Rear-Wheel Drive': ev({ ...M3, engine: 'Single Motor Electric', drivetrain: 'RWD', power: 208, torque: 350, battery: '62.5 kWh',
      range: 520, acceleration: 6.1, topSpeed: 201, weight: 1761, price: $(54900) }),
    'Premium Rear-Wheel Drive': ev({ ...M3, engine: 'Single Motor Electric', drivetrain: 'RWD', power: 208, torque: 350, battery: '62.5 kWh',
      range: 520, acceleration: 6.1, topSpeed: 201, weight: 1761, price: $(54900) }),
    'Long Range RWD': ev({ ...M3, engine: 'Single Motor Electric', drivetrain: 'RWD', power: 235, torque: 450, battery: '85.0 kWh',
      range: 750, acceleration: 5.2, topSpeed: 201, weight: 1747, price: $(61900) }),
    'Premium Long Range RWD': ev({ ...M3, engine: 'Single Motor Electric', drivetrain: 'RWD', power: 235, torque: 450, battery: '85.0 kWh',
      range: 750, acceleration: 5.2, topSpeed: 201, weight: 1747, price: $(61900) }),
    'Performance': ev({ ...M3, engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 461, torque: null, battery: '85.0 kWh',
      range: 571, acceleration: 3.1, topSpeed: 261, weight: 1854, price: $(80900) }),
  },
  'BYD|Atto 3|2026': {
    'Essential': ev({ engine: 'Single Motor Electric', drivetrain: 'FWD', power: 150, torque: 310, battery: '49.9 kWh', range: 410,
      acceleration: 7.9, topSpeed: null, weight: 1680, seats: 5, towing: 750, cargo: 440, price: $(39990) }),
    'Premium': ev({ engine: 'Single Motor Electric', drivetrain: 'FWD', power: 150, torque: 310, battery: '60.5 kWh', range: 480,
      acceleration: 7.3, topSpeed: null, weight: 1750, seats: 5, towing: 750, cargo: 440, price: $(44990) }),
  },
  'Suzuki|Jimny|2026': {
    'Lite': { ...JIM, transmission: '5-speed manual', fc: 7.7, fh: 5.7, fx: 6.4, weight: 1100, cargo: 85, price: $(31990) },
    '3-door Auto': { ...JIM, transmission: '4-speed automatic', fc: 8.2, fh: 6.1, fx: 6.9, weight: 1120, cargo: 85, price: $(36490) },
    'XL Auto': { ...JIM, transmission: '4-speed automatic', fc: 8.1, fh: 6.3, fx: 6.9, weight: 1210, cargo: 211, price: $(37490) },
    'XL Rhino': { ...JIM, transmission: '4-speed automatic', fc: 8.1, fh: 6.3, fx: 6.9, weight: 1210, cargo: 211, price: $(47490) },
  },
});
