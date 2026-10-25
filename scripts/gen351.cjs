'use strict';
// supplement351.json — 2026-10-25: Hyundai Staria (people mover) 2024 (US4.V2
// MY24), 2025 (US4.V3 MY25) and 2026 (US4.V4 MY27 base + Lounge Hybrid, with
// the MY26 US4.V3 Elite/Highlander Carsales still files under 2026). Replaces
// stale rows ("Active", "Lounge" petrol, "Load" — the van is a separate Carsales
// model, Staria Load). Specs + price when new: Carsales variant pages (base
// price incl GST & LCT). Kerb is tare-only or below tare on every variant ->
// weight null. Lounge Hybrid: 132 kW engine / 180 kW system; system torque not
// listed -> null; fuel use not listed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, weight: null, seats: 8, transmission: '8-speed automatic', towing: 2500 };
const P = { ...B, engine: '3.5L V6 Petrol', displacement: 3470, cylinders: 6, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 200, torque: 331, drivetrain: 'FWD', fc: 14.5, fh: 8.2, fx: 10.5 };
const D = { ...B, engine: '2.2L I4 Turbo Diesel', displacement: 2199, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel', power: 130,
  torque: 430, drivetrain: 'AWD', fc: 10.4, fh: 7.0, fx: 8.2 };
const line = (s, sd, e, ed, h, hd) => ({
  'Staria': { ...P, price: $(s) }, 'Staria Diesel AWD': { ...D, price: $(sd) },
  'Elite': { ...P, price: $(e) }, 'Elite Diesel AWD': { ...D, price: $(ed) },
  'Highlander': { ...P, price: $(h) }, 'Highlander Diesel AWD': { ...D, price: $(hd) },
});

writeLineups(351, {
  'Hyundai|Staria|2024': line(49000, 52000, 57000, 60000, 64000, 67000),
  'Hyundai|Staria|2025': line(49750, 52750, 57750, 60750, 64750, 67750),
  'Hyundai|Staria|2026': {
    'Staria': { ...P, price: $(54300) },
    'Staria Diesel 2WD': { ...D, drivetrain: 'FWD', fc: 8.8, fh: 6.5, fx: 7.2, price: $(54300) },
    'Elite': { ...P, price: $(58500) }, 'Elite Diesel AWD': { ...D, price: $(61500) },
    'Highlander': { ...P, price: $(65500) }, 'Highlander Diesel AWD': { ...D, price: $(68500) },
    'Lounge Hybrid': { ...B, engine: '1.6L I4 Turbo Petrol Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo',
      fuelType: 'hybrid', power: 180, torque: null, transmission: '6-speed automatic', drivetrain: 'FWD', fc: null, fh: null, fx: null,
      seats: 7, towing: null, price: $(73740) },
  },
});
