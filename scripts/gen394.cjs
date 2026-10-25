'use strict';
// supplement394.json — 2026-10-25: 2024 (AU) Toyota Corolla Cross — GX / GXL /
// Atmos 2.0 petrol (126 kW) and Hybrid (146 kW system) FWD, + GXL / Atmos
// Hybrid AWD (eFour). Replaces stale rows ("ZR", ~ prices). Hybrid specs as
// the 2025 rows (gen315; same Carsales spec tables); petrol specs, weights and
// price when new: Carsales 2024 variant pages (base price incl GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const h = (t, p, w) => ({ ...existing('Toyota', 'Corolla Cross', 2025, t), weight: w, price: $(p) });
const P = { engine: '2.0L I4 Petrol', displacement: 1987, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 126, torque: 202, transmission: 'CVT', drivetrain: 'FWD', fc: 7.4, fh: 5.1, fx: 6.0, seats: 5, cargo: 436, fuelTank: 47,
  topSpeed: null, acceleration: null };

writeLineups(394, {
  'Toyota|Corolla Cross|2024': {
    'GX': { ...P, weight: 1380, price: $(33980) },
    'GX Hybrid': h('GX Hybrid', 36480, 1435),
    'GXL': { ...P, fc: null, fh: null, weight: 1420, price: $(37730) },
    'GXL Hybrid': h('GXL Hybrid', 40230, 1475),
    'GXL Hybrid AWD': h('GXL Hybrid AWD', 43230, 1545),
    'Atmos': { ...P, fc: null, fh: null, weight: 1430, price: $(44530) },
    'Atmos Hybrid': h('Atmos Hybrid', 47030, 1480),
    'Atmos Hybrid AWD': h('Atmos Hybrid AWD', 50030, 1550),
  },
});
