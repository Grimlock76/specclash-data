'use strict';
// supplement349.json — 2026-10-25: 2025 (AU) Hyundai Palisade (LX2.V5 MY25;
// the new LX3 hybrid is covered by the 2026 lineup). Replaces stale rows
// ("Active", "Highlander"). Specs + price when new: Carsales 2025 variant pages
// (base price incl GST & LCT). Elite diesel lists kerb below tare -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 7, transmission: '8-speed automatic', towing: 2200 };
const P = { ...B, engine: '3.8L V6 Petrol', displacement: 3778, cylinders: 6, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 217, torque: 355, drivetrain: 'FWD', fc: 14.9, fh: 8.3, fx: 10.7 };
const D = { ...B, engine: '2.2L I4 Turbo Diesel', displacement: 2199, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel', power: 147,
  torque: 440, drivetrain: 'AWD', fc: 9.2, fh: 6.2, fx: 7.3 };

writeLineups(349, {
  'Hyundai|Palisade|2025': {
    'Elite': { ...P, weight: 1911, price: $(66800) },
    'Elite Diesel AWD': { ...D, weight: null, price: $(70800) },
    'Calligraphy': { ...P, weight: 1984, price: $(75900) },
    'Calligraphy Black Ink': { ...P, weight: 1984, price: $(78400) },
    'Calligraphy Diesel AWD': { ...D, weight: 2070, price: $(79219) },
  },
});
