'use strict';
// supplement266.json — 2026-10-23: 2026 (AU) Hyundai Ioniq 5 (+ Ioniq 5 N),
// Kia EV6, EV9, Toyota bZ4X. Specs + claimed 0-100: Carsales variant pages;
// prices: CarsGuide 2026 MSRP (Carsales shows only drive-away for most).
// Range = ADR. Weight null where Carsales lists tare only. Torque null on
// dual-motor cars (Carsales lists one motor's figure only).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, topSpeed: null, acceleration: null, weight: null, seats: 5, cargo: null,
  engine: o.awd ? 'Dual Motor Electric' : 'Single Motor Electric', drivetrain: o.awd ? 'AWD' : (o.fwd ? 'FWD' : 'RWD'),
  ...o, awd: undefined, fwd: undefined });
writeLineups(266, {
  'Hyundai|Ioniq 5|2026': {
    'RWD': ev({ power: 168, torque: 350, battery: '84.0 kWh', range: 570, towing: 1600, cargo: 520, price: $(68200) }),
    'Elite RWD': ev({ power: 168, torque: 350, battery: '84.0 kWh', range: 530, towing: 1600, cargo: 520, price: $(73200) }),
    'N Line Premium AWD': ev({ awd: true, power: 239, torque: null, battery: '84.0 kWh', range: 495, towing: 1600, cargo: 520, price: $(83700) }),
  },
  'Hyundai|Ioniq 5 N|2026': {
    'N': ev({ awd: true, power: 448, torque: null, battery: '84.0 kWh', range: 448, acceleration: 3.5, topSpeed: 260, price: $(114918) }),
  },
  'Kia|EV6|2026': {
    'Air RWD': ev({ power: 168, torque: 350, battery: '84.0 kWh', range: 582, acceleration: 7.7, towing: 1800, cargo: 490, price: $(72590) }),
    'GT-Line RWD': ev({ power: 168, torque: 350, battery: '84.0 kWh', range: 560, acceleration: 7.7, towing: 1800, cargo: 490, price: $(79590) }),
    'GT': ev({ awd: true, power: 478, torque: null, battery: '84.0 kWh', range: 450, acceleration: 3.5, topSpeed: 260, price: $(99590) }),
  },
  'Kia|EV9|2026': {
    'Air RWD': ev({ power: 160, torque: 350, battery: '76.1 kWh', range: 443, acceleration: 8.2, seats: 7, towing: 900, price: $(97000) }),
    'Earth AWD': ev({ awd: true, power: 282.6, torque: null, battery: '99.8 kWh', range: 512, acceleration: 6.0, seats: 7, towing: 2500, price: $(106500) }),
    'GT-Line AWD': ev({ awd: true, power: 282.6, torque: null, battery: '99.8 kWh', range: 505, acceleration: 5.3, seats: 7, towing: 2500, price: $(121000) }),
    'GT': ev({ awd: true, power: 374, torque: null, battery: '99.8 kWh', range: 510, acceleration: 4.5, seats: 6, towing: 2500, price: $(129250) }),
  },
  'Toyota|bZ4X|2026': {
    'FWD': ev({ fwd: true, power: 165, torque: 269, battery: '74.7 kWh', range: 591, acceleration: 7.4, weight: 1905, towing: 750, price: $(55990) }),
    'AWD': ev({ awd: true, power: 252, torque: null, battery: '74.7 kWh', range: null, price: $(67990) }),
    'Touring AWD': ev({ awd: true, power: 280, torque: null, battery: '74.7 kWh', range: 488, acceleration: 4.4, weight: 2065, towing: 1500, price: $(69990) }),
  },
});
