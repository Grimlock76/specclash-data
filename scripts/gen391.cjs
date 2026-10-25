'use strict';
// supplement391.json — 2026-10-25: Suzuki Fronx 2025 + 2026 — AU sells one
// grade, the Fronx Hybrid (1.5 mild hybrid, 6-speed auto). Carsales lists it
// twice ("Hybrid" and "Hybrid GLX") with identical specs and price -> one
// row. Replaces stale rows ("GL", "GLX", "GLX+", ~ prices). Specs + price when
// new: Carsales variant pages (base price incl GST & LCT; spec table used over
// the overview's 75 kW / 136 Nm). 2024 not touched (Carsales page errored).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const F = { engine: '1.5L I4 Petrol Mild Hybrid', displacement: 1462, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'petrol', power: 76, torque: 137, transmission: '6-speed automatic', drivetrain: 'FWD', fc: 5.5, fh: 4.5, fx: 4.9,
  weight: 1064, seats: 5, cargo: 304, fuelTank: 37, topSpeed: null, acceleration: null, price: $(28990) };

writeLineups(391, { 'Suzuki|Fronx|2025': { 'Hybrid': F }, 'Suzuki|Fronx|2026': { 'Hybrid': F } });
