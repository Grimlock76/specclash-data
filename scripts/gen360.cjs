'use strict';
// supplement360.json — 2026-10-25: Kia Picanto 2024 (JA PE2 MY24), 2025 (MY25)
// and 2026 (MY26/27 — same prices as 2025). AU grades are Sport and GT-Line,
// each manual or auto. Replaces stale rows ("S", ~ prices). Specs + price when
// new: Carsales variant pages (base price incl GST & LCT). Kerb tare-only or
// below tare -> weight null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { engine: '1.25L I4 Petrol', displacement: 1248, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 62, torque: 122, drivetrain: 'FWD', seats: 5, cargo: 255, fuelTank: 35, weight: null, topSpeed: null, acceleration: null };
const M = { ...B, transmission: '5-speed manual', fc: 6.8, fh: 4.6, fx: 5.4 };
const A = { ...B, transmission: '4-speed automatic', fc: 7.7, fh: 5.1, fx: 6.0 };
const line = (sm, sa, gm, ga) => ({
  'Sport Manual': { ...M, price: $(sm) }, 'Sport Auto': { ...A, price: $(sa) },
  'GT-Line Manual': { ...M, price: $(gm) }, 'GT-Line Auto': { ...A, price: $(ga) },
});

writeLineups(360, {
  'Kia|Picanto|2024': line(17890, 19490, 19690, 21290),
  'Kia|Picanto|2025': line(19190, 20790, 20990, 22590),
  'Kia|Picanto|2026': line(19190, 20790, 20990, 22590),
});
