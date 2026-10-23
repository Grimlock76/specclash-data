'use strict';
// supplement324.json — 2026-10-23: 2025 (AU) Tesla Model 3 (Highland). Replaces
// stale pre-Highland rows. Specs + price when new: Carsales 2025 variant pages
// (spec tables; range = ADR). Long Range AWD: tare only, battery/torque not
// listed -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, cargo: 594, topSpeed: 201, ...o });
const RWD = ev({ engine: 'Single Motor Electric', drivetrain: 'RWD', power: 208, torque: 350, battery: '62.5 kWh', acceleration: 6.1,
  weight: 1761, price: $(54900) });
const LRR = ev({ engine: 'Single Motor Electric', drivetrain: 'RWD', power: 235, torque: 450, battery: '85 kWh', range: 750,
  acceleration: 5.2, weight: 1747, price: $(61900) });

writeLineups(324, {
  'Tesla|Model 3|2025': {
    'Rear-Wheel Drive': { ...RWD, range: 513 },
    'Premium Rear-Wheel Drive': { ...RWD, range: 520 },
    'Long Range RWD': { ...LRR },
    'Premium Long Range RWD': { ...LRR },
    'Long Range AWD': ev({ engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 366, torque: null, battery: null, range: 629,
      acceleration: 4.4, weight: null, price: $(64900) }),
    'Performance': ev({ engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 461, torque: null, battery: '85 kWh', range: 528,
      acceleration: 3.1, topSpeed: 262, weight: 1854, price: $(80900) }),
  },
});
