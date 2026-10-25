'use strict';
// supplement400.json — 2026-10-25: 2025 (AU) Lexus UX — UX300h Luxury / Sports
// Luxury / F Sport (2WD; Sports Luxury + F Sport also AWD) and UX300e Luxury /
// Sports Luxury (EV). Replaces stale rows ("UX 200", "UX 250h", ~ prices).
// Specs + price when new: Carsales 2025 variant pages (base price incl GST &
// LCT). Hybrid power = 146 kW system, torque null. UX300e: spec table used
// (72.8 kWh / 560 km ADR) over the overview's old 54.3 kWh figures; kerb
// below tare -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const H = { engine: '2.0L I4 Petrol Hybrid', displacement: 1987, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  power: 146, torque: null, transmission: 'CVT', drivetrain: 'FWD', fc: 4.0, fh: 4.4, fx: 4.2, weight: 1585, seats: 5, cargo: 368,
  fuelTank: 43, topSpeed: null, acceleration: null };
const HA = { ...H, drivetrain: 'AWD', fc: null, fh: null, fx: 4.4, weight: 1640 };
const E = { engine: 'Single Motor Electric', displacement: null, cylinders: null, aspiration: 'Electric', fuelType: 'electric',
  power: 150, torque: 300, transmission: '1-speed automatic', drivetrain: 'FWD', fc: null, fh: null, fx: null, battery: '72.8 kWh',
  range: 560, weight: null, seats: 5, cargo: null, topSpeed: null, acceleration: null };

writeLineups(400, {
  'Lexus|UX|2025': {
    'UX300h Luxury': { ...H, price: $(55370) },
    'UX300h Sports Luxury': { ...H, price: $(62320) }, 'UX300h Sports Luxury AWD': { ...HA, price: $(70520) },
    'UX300h F Sport': { ...H, price: $(63110) }, 'UX300h F Sport AWD': { ...HA, price: $(73210) },
    'UX300e Luxury': { ...E, price: $(80720) }, 'UX300e Sports Luxury': { ...E, price: $(88190) },
  },
});
