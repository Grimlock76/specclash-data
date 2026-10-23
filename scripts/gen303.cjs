'use strict';
// supplement303.json — 2026-10-23: 2025 (AU) Hyundai IONIQ 5 (+ IONIQ 5 N),
// Kia EV6, Kia EV9. Specs + price when new: Carsales 2025 variant pages.
// Ranges ADR. Tare-only weights null. Dual-motor torque null where Carsales
// lists a single motor's figure only.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const EV = { displacement: null, cylinders: null, aspiration: null, fuelType: 'electric', transmission: '1-speed automatic', fc: null,
  fh: null, fx: null, topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const RWD = { ...EV, engine: 'Single-Motor Electric', drivetrain: 'RWD' };
const AWD = { ...EV, engine: 'Dual-Motor Electric', drivetrain: 'AWD', torque: null };
writeLineups(303, {
  'Hyundai|Ioniq 5|2025': {
    'Standard Range RWD': { ...RWD, power: 125, torque: 350, battery: '63 kWh', range: 440, towing: 750, price: $(69800) },
    'Elite RWD': { ...RWD, power: 168, torque: 350, battery: '84 kWh', range: 530, price: $(81200) },
    'N Line Premium AWD': { ...AWD, power: 239, battery: '84 kWh', range: 495, price: $(91618) },
  },
  'Hyundai|Ioniq 5 N|2025': {
    'N': { ...AWD, power: 448, battery: '84 kWh', range: 448, acceleration: 3.5, topSpeed: 260, price: $(110383) },
  },
  'Kia|EV6|2025': {
    'Air RWD': { ...RWD, power: 168, torque: 350, battery: '77.4 kWh', range: 528, acceleration: 7.3, price: $(72590) },
    'GT-Line RWD': { ...RWD, power: 168, torque: 350, battery: '77.4 kWh', range: 504, acceleration: 7.3, price: $(79590) },
    'GT': { ...AWD, power: 430, battery: '77.4 kWh', range: 424, acceleration: 3.5, topSpeed: 260, price: $(99590) },
  },
  'Kia|EV9|2025': {
    'Air RWD': { ...RWD, power: 160, torque: 350, battery: '76.1 kWh', range: 443, acceleration: 8.2, weight: 2315, seats: 7, towing: 900,
      price: $(97000) },
    'Earth AWD': { ...AWD, power: 283, battery: '99.8 kWh', range: 512, acceleration: 6.0, weight: 2550, seats: 7, price: $(106500) },
    'GT-Line AWD': { ...AWD, power: 283, battery: '99.8 kWh', range: 505, acceleration: 5.3, weight: 2634, seats: 7, price: $(121000) },
    'GT': { ...AWD, power: 374, battery: '99.8 kWh', range: 510, acceleration: 4.5, seats: 6, price: $(129250) },
  },
});
