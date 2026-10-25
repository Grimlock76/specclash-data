'use strict';
// supplement428.json — 2026-10-25: Audi A3 sedan ("A3") + Sportback hatch ("A3
// Sportback") 2024 (MY24: 35 TFSI, 40 TFSI S line quattro), 2025 (MY25 facelift:
// 35 TFSI S line only — the 150 kW cars Carsales files under 2025 are MY26 =
// the 2026 rows) and 2026 fixes (110 kW weight null: kerb < tare; 150 kW tank
// 55 L). S3 / RS3 Sportback rows carried over unchanged. Replaces stale
// "35 TFSI" / "40 TFSI quattro" rows. Specs + price when new: Carsales variant
// pages (base price incl GST & LCT). Tare-only weights null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const B = { seats: 5, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', transmission: '7-speed dual-clutch', weight: null,
  accelClaimed: true };
const T35 = { ...B, engine: '1.5L I4 Turbo Petrol', displacement: 1498, power: 110, torque: 250, drivetrain: 'FWD', fuelTank: 50,
  topSpeed: 226 };
const T40 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 140, torque: 320, drivetrain: 'AWD', fuelTank: 55,
  topSpeed: null, acceleration: 7.0 };
const sedan = { cargo: 425 }, hatch = { cargo: 380 };
const keep = (y, t) => existing('Audi', 'A3 Sportback', y, t);
const n26 = (m, t, o) => ({ ...existing('Audi', m, 2026, t), ...o });

writeLineups(428, {
  'Audi|A3|2024': {
    '35 TFSI': { ...T35, ...sedan, acceleration: 8.4, fc: 6.0, fh: 4.2, fx: 4.9, price: $(53100) },
    '40 TFSI S line quattro': { ...T40, cargo: 390, fc: 8.6, fh: 5.5, fx: 6.6, price: $(60200) },
  },
  'Audi|A3 Sportback|2024': {
    '35 TFSI': { ...T35, ...hatch, acceleration: 8.4, fc: 6.1, fh: 4.3, fx: 5.0, towing: 1500, price: $(50600) },
    '40 TFSI S line quattro': { ...T40, cargo: 325, fc: 8.7, fh: 5.6, fx: 6.7, price: $(57700) },
    'S3': keep(2024, 'S3'), 'RS3': keep(2024, 'RS3'),
  },
  'Audi|A3|2025': { '35 TFSI S line': { ...T35, ...sedan, acceleration: 8.1, fc: 6.5, fh: 4.5, fx: 5.3, price: $(57800) } },
  'Audi|A3 Sportback|2025': {
    '35 TFSI S line': { ...T35, ...hatch, acceleration: 8.1, fc: 6.6, fh: 4.6, fx: 5.3, price: $(54800) },
    'S3': keep(2025, 'S3'), 'RS3': keep(2025, 'RS3'),
  },
  'Audi|A3|2026': {
    'TFSI 110kW S line': n26('A3', 'TFSI 110kW S line', { weight: null }),
    'TFSI 150kW S line quattro': n26('A3', 'TFSI 150kW S line quattro', { fuelTank: 55, price: $(65800) }),
  },
  'Audi|A3 Sportback|2026': {
    'TFSI 110kW S line': n26('A3 Sportback', 'TFSI 110kW S line', { weight: null }),
    'TFSI 150kW S line quattro': n26('A3 Sportback', 'TFSI 150kW S line quattro', { fuelTank: 55 }),
    'S3': keep(2026, 'S3'), 'RS3': keep(2026, 'RS3'),
  },
});
