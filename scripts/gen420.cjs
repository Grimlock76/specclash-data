'use strict';
// supplement420.json — 2026-10-25: BMW i7 (G70) 2024 + 2025 — xDrive60 M Sport
// (400 kW, 105.7 kWh, 625 km ADR) and M70 xDrive (485 kW). Replaces stale rows
// ("eDrive50", "eDrive60", ~ prices). Specs as the 2026 rows (gen277) with the
// pre-update xDrive60 battery / range / weight; price when new: Carsales
// variant pages (base price incl GST & LCT).
const { writeLineups, existing } = require('./lineup-lib.cjs');
const line = () => ({
  '60 xDrive M Sport': { ...existing('BMW', 'i7', 2026, '60 xDrive M Sport'), battery: '105.7 kWh', range: 625, acceleration: 4.7,
    weight: 2640 },
  'M70 xDrive': existing('BMW', 'i7', 2026, 'M70 xDrive'),
});

writeLineups(420, { 'BMW|i7|2024': line(), 'BMW|i7|2025': line() });
