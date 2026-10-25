'use strict';
// supplement376.json — 2026-10-25: 2024 (AU) MG MG3 — Carsales lists both the
// run-out old-shape car (MY24 1.5 / 4-speed auto: Core, Core Nav, Excite) and
// the new-gen MY24.5 (Excite, Essence, Excite / Essence Hybrid+; specs as the
// 2025 rows, gen315). Replaces stale rows ("Hybrid+", ~ prices). Price when
// new: Carsales variant pages (base price incl GST & LCT). Old-shape kerb
// tare-only -> null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const OLD = { engine: '1.5L I4 Petrol', displacement: 1498, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 82, torque: 150, transmission: '4-speed automatic', drivetrain: 'FWD', fc: 9.2, fh: 5.3, fx: 6.7, seats: 5, cargo: 307,
  fuelTank: 45, weight: null, topSpeed: null, acceleration: null };
const n = (t, p) => ({ ...existing('MG', 'MG3', 2025, t), price: $(p) });

writeLineups(376, {
  'MG|MG3|2024': {
    'Core': { ...OLD, price: $(18490) },
    'Core Nav': { ...OLD, price: $(18990) },
    'Excite (old shape)': { ...OLD, price: $(19990) },
    'Excite': n('Excite', 23990),
    'Essence': n('Essence', 25990),
    'Excite Hybrid+': n('Excite Hybrid+', 27990),
    'Essence Hybrid+': n('Essence Hybrid+', 29990),
  },
});
