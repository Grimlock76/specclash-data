'use strict';
// supplement329.json — 2026-10-25: 2024 (AU) Skoda Octavia (NX), Kodiaq (NS,
// 1st gen) and Karoq (NU). Replaces stale guessed rows. Specs: Carsales 2024
// variant pages (all list tare only -> weight null). Prices: Carsales shows
// drive-away figures (Karoq 110TSI Select excepted) and CarsGuide 2024 lists
// used ranges only -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, cargo: null, weight: null, seats: 5, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', price: null };
const O110 = { ...B, engine: '1.4L I4 Turbo Petrol', displacement: 1395, power: 110, torque: 250, transmission: '8-speed automatic',
  drivetrain: 'FWD' };
const ORS = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 180, torque: 370, transmission: '7-speed dual-clutch',
  drivetrain: 'FWD' };
const K132 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 132, torque: 320, transmission: '7-speed dual-clutch',
  drivetrain: 'AWD', fc: 10.3, fh: 7.0, fx: 8.2, acceleration: 8.4, seats: 7, towing: 2000 };
const KQ = { ...O110, fc: 8.1, fh: 5.7, fx: 6.6, acceleration: 9.2, towing: 1500 };

writeLineups(329, {
  'Skoda|Octavia|2024': {
    '110TSI Select Liftback': { ...O110, fc: 8.1, fh: 4.9, fx: 6.1, acceleration: 8.7, cargo: 600 },
    '110TSI Sportline Liftback': { ...O110, fc: 7.2, fh: 4.8, fx: 5.7, acceleration: 8.5 },
    'RS Liftback': { ...ORS, fc: 9.3, fh: 5.3, fx: 6.8, acceleration: 6.6 },
    '110TSI Select Wagon': { ...O110, fc: 8.1, fh: 5.0, fx: 6.2, acceleration: 8.7, cargo: 640 },
    '110TSI Sportline Wagon': { ...O110, fc: 7.2, fh: 4.9, fx: 5.8, acceleration: 8.6 },
    'RS Wagon': { ...ORS, fc: 9.3, fh: 5.4, fx: 6.8, acceleration: 6.7 },
  },
  'Skoda|Kodiaq|2024': {
    'Style': { ...K132 },
    'Sportline': { ...K132 },
    'RS': { ...K132, power: 180, torque: 370, fc: 9.6, fh: 6.2, fx: 7.5, acceleration: 6.6 },
  },
  'Skoda|Karoq|2024': {
    '110TSI Select': { ...KQ, price: $(38490) },
    '110TSI Style': { ...KQ, fc: 8.3 },
    '140TSI Sportline': { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 140, torque: 320,
      transmission: '7-speed dual-clutch', drivetrain: 'AWD', fc: 8.3, fh: 5.9, fx: 6.8, acceleration: 7.0, towing: 1900 },
  },
});
