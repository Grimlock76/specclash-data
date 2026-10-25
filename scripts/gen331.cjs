'use strict';
// supplement331.json — 2026-10-25: 2024 (AU) VW Golf (Mk8 MY24 + the Mk8.5
// Style and R Black Edition Carsales files under 2024) and Tiguan (5N MY24 +
// the CT 195TSI R-Line). Replaces stale rows (Comfortline/Highline, 70TSI,
// GTE). Specs + price when new: Carsales 2024 variant pages (base price incl
// GST & LCT). Tare-only weights null; Golf Style lists kerb below tare -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  weight: null };
const G14 = { ...B, engine: '1.4L I4 Turbo Petrol', displacement: 1395, power: 110, torque: 250, transmission: '8-speed automatic',
  drivetrain: 'FWD', fc: 7.2, fh: 5.0, fx: 5.8, acceleration: 8.5 };
const G20 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1984, transmission: '7-speed dual-clutch' };
const T = { ...B, transmission: '7-speed dual-clutch', drivetrain: 'AWD', towing: 2000 };
const T132 = { ...T, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 132, torque: 320 };
const T162 = { ...T, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 162, torque: 350, fc: 10.4, fh: 7.4, fx: 8.5,
  towing: 2500 };

writeLineups(331, {
  'Volkswagen|Golf|2024': {
    '110TSI Life': { ...G14, price: $(39190) },
    '110TSI R-Line': { ...G14, price: $(42290) },
    '110TSI Style (8.5)': { ...G14, transmission: '7-speed dual-clutch', fc: 8.1, fh: 5.2, fx: 6.3, acceleration: null,
      price: $(43690) },
    'GTI': { ...G20, power: 180, torque: 370, drivetrain: 'FWD', fc: 9.3, fh: 5.6, fx: 7.0, acceleration: 6.3, price: $(56090) },
    'R': { ...G20, power: 235, torque: 400, drivetrain: 'AWD', fc: 10.1, fh: 6.4, fx: 7.8, acceleration: 4.8, price: $(70590) },
    'R Black Edition (8.5)': { ...G20, power: 245, torque: 420, drivetrain: 'AWD', fc: 10.6, fh: 7.0, fx: 8.3, acceleration: 4.6,
      weight: 1527, price: $(72490) },
  },
  'Volkswagen|Tiguan|2024': {
    '110TSI Life': { ...B, engine: '1.4L I4 Turbo Petrol', displacement: 1395, power: 110, torque: 250,
      transmission: '6-speed dual-clutch', drivetrain: 'FWD', fc: 9.9, fh: 6.4, fx: 7.7, towing: 1800, price: $(43990) },
    '132TSI Life': { ...T132, fc: 11.6, fh: 7.1, fx: 8.8, price: $(47990) },
    '132TSI Life Allspace': { ...T132, seats: 7, fc: 11.5, fh: 7.3, fx: 8.9, acceleration: 8.2, price: $(47990) },
    '162TSI Elegance': { ...T162, price: $(57090) },
    '162TSI R-Line': { ...T162, price: $(60590) },
    '162TSI R-Line Allspace': { ...T162, seats: 7, fc: 10.7, fh: 7.5, fx: 8.6, acceleration: 6.8, price: $(60590) },
    'R': { ...T, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 235, torque: 400, fc: 11.2, fh: 7.5, fx: 8.8,
      acceleration: 5.1, price: $(73790) },
    '195TSI R-Line (CT)': { ...T, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 195, torque: 400, fc: 10.5, fh: 7.4, fx: 8.5,
      acceleration: 5.9, weight: 1754, price: $(70490) },
  },
});
