'use strict';
// supplement312.json — 2026-10-23: 2024 (AU) Tesla Model Y and Hyundai Tucson
// (NX4.V2 MY24). Specs + price when new: Carsales 2024 variant pages.
// Model Y: no 7-seat in Australia (stale row dropped); RWD has three 2024
// Carsales listings ($65,400 early, $55,900 Mar/Oct 2024) -> $55,900 used;
// tare-only weights null; range ADR where given, else WLTP; torque not
// published -> null. Tucson: the facelifted NX4.V3 / MY25 rows Carsales also
// files under 2024 are covered by the 2025 lineup; all MY24 pages list tare
// only -> weight null. N Line packs left out.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const EV = { engine: 'Single-Motor Electric', displacement: null, cylinders: null, aspiration: null, fuelType: 'electric',
  transmission: '1-speed automatic', drivetrain: 'RWD', fc: null, fh: null, fx: null, seats: 5, towing: 1600, cargo: null,
  torque: null, weight: null };
const AWD = { ...EV, engine: 'Dual-Motor Electric', drivetrain: 'AWD' };

const B = { topSpeed: null, acceleration: null, cargo: 539, seats: 5, fuelTank: 54 };
const T20 = { ...B, engine: '2.0L I4 Petrol', displacement: 1999, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 115, torque: 192, transmission: '6-speed automatic', drivetrain: 'FWD', fc: 11.0, fh: 6.5, fx: 8.1, towing: 1650 };
const T16 = { ...B, engine: '1.6L I4 Turbo Petrol', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 132, torque: 265, transmission: '7-speed dual-clutch', drivetrain: 'AWD', fc: 8.8, fh: 6.3, fx: 7.2, towing: 1650 };
const TD = { ...B, engine: '2.0L I4 Turbo Diesel', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 137, torque: 416, transmission: '8-speed automatic', drivetrain: 'AWD', fc: 7.7, fh: 5.4, fx: 6.3, towing: 1900 };

writeLineups(312, {
  'Tesla|Model Y|2024': {
    'Rear-Wheel Drive': { ...EV, power: 220, battery: '60 kWh', range: 510, acceleration: 6.9, topSpeed: 217, cargo: 971,
      price: $(55900) },
    'Long Range AWD': { ...AWD, power: 378, battery: '79 kWh', range: 533, acceleration: 5.0, topSpeed: 217, price: $(69900) },
    'Performance': { ...AWD, power: 393, battery: '79 kWh', range: 604, acceleration: 3.7, topSpeed: 250, price: $(82900) },
  },
  'Hyundai|Tucson|2024': {
    'Tucson': { ...T20, price: $(35650) },
    'Elite': { ...T20, price: $(40650) },
    'Elite 1.6T AWD': { ...T16, price: $(44650) },
    'Elite Diesel AWD': { ...TD, price: $(46650) },
    'Highlander': { ...T20, price: $(47650) },
    'Highlander 1.6T AWD': { ...T16, price: $(51650) },
    'Highlander Diesel AWD': { ...TD, price: $(53650) },
  },
});
