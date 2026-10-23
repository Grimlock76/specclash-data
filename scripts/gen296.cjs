'use strict';
// supplement296.json — 2026-10-23: 2025 (AU) Hyundai Kona (SX2). Specs + price
// when new: Carsales 2025 variant pages. Hybrid power = system output; system
// torque not stated -> null. Electric range WLTP (no ADR listed).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, drivetrain: 'FWD' };
const P = { ...B, engine: '2.0L I4 Petrol', displacement: 1999, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 110, torque: 180, transmission: 'CVT', fc: 8.6, fh: 5.5, fx: 6.6, towing: 1300, fuelTank: 47, cargo: 407 };
const H = { ...B, engine: '1.6L I4 Hybrid', displacement: 1580, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  power: 104, torque: null, transmission: '6-speed dual-clutch', fc: 3.9, fh: 4.0, fx: 3.9, towing: 1300 };
const E = { ...B, engine: 'Single-Motor Electric', displacement: null, cylinders: null, aspiration: null, fuelType: 'electric',
  power: 150, torque: 255, transmission: '1-speed automatic', fc: null, fh: null, fx: null, battery: '64.8 kWh', weight: 1795 };

writeLineups(296, {
  'Hyundai|Kona|2025': {
    'Kona': { ...P, weight: 1335, price: $(32950) },
    'Elite': { ...P, weight: 1455, price: $(35950) },
    'Premium N Line': { ...P, weight: 1455, price: $(42750) },
    'Hybrid': { ...H, weight: 1525, price: $(36950) },
    'Hybrid Premium': { ...H, weight: 1410, price: $(43750) },
    'Electric': { ...E, range: 505, price: $(58000) },
    'Electric Premium': { ...E, range: 444, price: $(68000) },
  },
});
