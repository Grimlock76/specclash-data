'use strict';
// supplement382.json — 2026-10-25: LDV T60 Max dual-cab 4x4 2024, 2025, 2026.
// Replaces stale rows (~ prices). Specs: Carsales variant pages (2.0 bi-turbo
// diesel 160 kW / 500 Nm). Prices: 2024 + 2025 null (Carsales shows LDV's
// drive-away price only; CarsGuide only Glass's ranges); 2026 = CarsGuide MSRP
// (auto-only Pro / Plus / Plus Mega Tub). Auto city/highway not listed. 2023
// (MY23) added so it no longer falls back to the removed stale 2024 rows.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const T = { engine: '2.0L I4 Bi-Turbo Diesel', displacement: 1996, cylinders: 4, aspiration: 'Twin Turbo', fuelType: 'diesel',
  power: 160, torque: 500, drivetrain: '4WD', seats: 5, towing: 3500, fuelTank: 73, fc: null, fh: null, topSpeed: null,
  acceleration: null, cargo: null, price: null };
const M = { ...T, transmission: '6-speed manual', fx: 9.2 }, A = { ...T, transmission: '8-speed automatic', fx: 8.1 };
const y25 = p => ({
  'Max Pro Auto': { ...A, weight: 2110, payload: 1040, price: p ? $(p[0]) : null },
  'Max Plus Auto': { ...A, weight: 2180, payload: 870, price: p ? $(p[1]) : null },
  'Max Plus Mega Tub': { ...A, weight: 2250, payload: 800, price: p ? $(p[2]) : null },
});

writeLineups(382, {
  // 2023 rows leaned on the stale 2024 ones; MY23 cars (same 160 kW engine) are the 2024 manual specs
  'LDV|T60|2023': {
    'Max Pro Manual': { ...M, weight: 2115, payload: 935 },
    'Max Luxe Manual': { ...M, weight: 2150, payload: 750 },
    'Max Pro Auto': { ...A, fx: null, weight: null },
    'Max Luxe Auto': { ...A, fx: null, weight: null },
  },
  'LDV|T60|2024': {
    'Max Pro Manual': { ...M, weight: 2115, payload: 935 },
    'Max Plus Manual': { ...M, fx: 9.3, weight: 2210, payload: 840 },
    'Max Luxe Manual': { ...M, weight: 2150, payload: 750 },
    ...y25(),
  },
  'LDV|T60|2025': y25(),
  'LDV|T60|2026': y25([45253, 52095, 53674]),
});
