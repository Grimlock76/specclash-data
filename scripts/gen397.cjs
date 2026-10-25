'use strict';
// supplement397.json — 2026-10-25: 2025 (AU) Lexus NX — NX250 Luxury, NX350h
// Luxury / Sports Luxury / F Sport (2WD + eFour AWD), NX350 F Sport (2.4T
// AWD), NX450h+ Luxury / F Sport (PHEV). Replaces stale rows ("NX 250", "NX
// 350h", ~ prices). Specs + price when new: Carsales 2025 variant pages (base
// price incl GST & LCT). Hybrid power = 179 kW system (NX450h+ 227 kW);
// system torque not listed -> null. NX450h+ range ADR 87 km.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { seats: 5, cargo: 520, fuelTank: 55, topSpeed: null, cylinders: 4, accelClaimed: true };
const N250 = { ...B, engine: '2.5L I4 Petrol', displacement: 2487, aspiration: 'Naturally Aspirated', fuelType: 'petrol', power: 152,
  torque: 247, transmission: '8-speed automatic', drivetrain: 'FWD', fc: 9.0, fh: 5.8, fx: 6.9, weight: 1705, acceleration: null };
const H = { ...B, engine: '2.5L I4 Petrol Hybrid', displacement: 2487, aspiration: 'Naturally Aspirated', fuelType: 'hybrid', power: 179,
  torque: null, transmission: 'CVT', drivetrain: 'FWD', fc: 5.2, fh: 5.0, fx: 5.0, weight: 1810, towing: 1000, acceleration: null };
const HA = { ...H, drivetrain: 'AWD', fc: null, fh: null, weight: 1870 };
const T = { ...B, engine: '2.4L I4 Turbo Petrol', displacement: 2393, aspiration: 'Turbo', fuelType: 'petrol', power: 205, torque: 430,
  transmission: '8-speed automatic', drivetrain: 'AWD', fc: 11.1, fh: 6.8, fx: 8.4, acceleration: 7.0, weight: 1860 };
const P = { ...B, engine: '2.5L I4 Petrol PHEV', displacement: 2487, aspiration: 'Naturally Aspirated', fuelType: 'plug-in hybrid',
  power: 227, torque: null, transmission: 'CVT', drivetrain: 'AWD', fc: null, fh: null, fx: 1.3, battery: '18.1 kWh', range: 87,
  acceleration: 6.3 };

writeLineups(397, {
  'Lexus|NX|2025': {
    'NX250 Luxury': { ...N250, price: $(63400) },
    'NX350h Luxury': { ...H, price: $(71700) }, 'NX350h Luxury AWD': { ...HA, price: $(76500) },
    'NX350h Sports Luxury': { ...H, price: $(79100) }, 'NX350h Sports Luxury AWD': { ...HA, price: $(85000) },
    'NX350h F Sport': { ...H, price: $(79200) }, 'NX350h F Sport AWD': { ...HA, price: $(84900) },
    'NX350 F Sport': { ...T, price: $(79450) },
    'NX450h+ Luxury': { ...P, weight: 2050, price: $(84500) },
    'NX450h+ F Sport': { ...P, weight: 2070, price: $(95900) },
  },
});
