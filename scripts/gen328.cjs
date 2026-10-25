'use strict';
// supplement328.json — 2026-10-25: 2023 (AU) Tesla Model Y + Model 3 (pre-
// Highland), 2024 GWM Haval H6, and a price fix for H6 2025/2026.
// Specs + price when new: Carsales variant pages. Model Y: no 7-seat in AU;
// all Tesla pages list tare only -> weight null; torque not listed -> null
// (Model 3 RWD). H6: Carsales "price when new" for 2024-2026 is an indicative
// drive-away figure (checked on the pages), so per the price rule: 2026 =
// CarsGuide 2026 MSRP, 2024/2025 = null (CarsGuide shows used ranges only).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const MAKES = require('../src/data/makes.json');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, torque: null, weight: null, cargo: null, towing: null, ...o });
const S = { engine: 'Single Motor Electric', drivetrain: 'RWD' }, D = { engine: 'Dual Motor Electric', drivetrain: 'AWD' };
const H = { topSpeed: null, acceleration: null, cargo: null, seats: 5, price: null };
const OLD = { ...H, engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 150, torque: 320, transmission: '7-speed dual-clutch', drivetrain: 'FWD', fc: 9.3, fh: 6.3, fx: 7.4, towing: 2000, fuelTank: 61,
  weight: null };
const HY = { ...H, engine: '1.5L I4 Turbo Hybrid', displacement: 1499, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 179, torque: null, transmission: '2-speed DHT', drivetrain: 'FWD', fc: 3.5, fh: 6.2, fx: 5.2, towing: 1500, weight: null };

const carry = (y, prices) => Object.fromEntries(MAKES.GWM['Haval H6'][y].map(t =>
  [t, { ...existing('GWM', 'Haval H6', +y, t), price: prices ? (prices[t] === undefined ? null : prices[t]) : null }]));

writeLineups(328, {
  'Tesla|Model Y|2023': {
    'Rear-Wheel Drive': ev({ ...S, power: 220, battery: '60 kWh', range: 510, acceleration: 6.9, topSpeed: 217, towing: 1600,
      price: $(65400) }),
    'Long Range AWD': ev({ ...D, power: 378, battery: '79 kWh', range: 533, acceleration: 5.0, topSpeed: 217, towing: 1600,
      price: $(82300) }),
    'Performance': ev({ ...D, power: 393, battery: '79 kWh', range: 604, acceleration: 3.7, topSpeed: 250, towing: 1600,
      price: $(92020) }),
  },
  'Tesla|Model 3|2023': {
    'Rear-Wheel Drive': ev({ ...S, power: 208, battery: '60 kWh', range: 556, acceleration: 6.1, topSpeed: 225, price: $(57400) }),
    'Long Range AWD': ev({ ...D, power: 366, battery: '82 kWh', range: 681, acceleration: 4.4, topSpeed: 233, price: $(70400) }),
    'Performance': ev({ ...D, power: 377, battery: '82 kWh', range: 615, acceleration: 3.3, topSpeed: 261, price: $(83400) }),
  },
  'GWM|Haval H6|2024': {
    'Premium': { ...OLD }, 'Lux': { ...OLD }, 'Vanta': { ...OLD }, 'Ultra': { ...OLD },
    'Lux Hybrid': { ...HY }, 'Ultra Hybrid': { ...HY },
  },
  'GWM|Haval H6|2025': carry('2025', null),
  'GWM|Haval H6|2026': carry('2026', { 'Lux': $(34490), 'Ultra': $(37490), 'Lux Hybrid': $(39490), 'Ultra Hybrid': $(42490),
    'Lux PHEV': $(43490), 'Ultra PHEV': $(46490) }),
});
