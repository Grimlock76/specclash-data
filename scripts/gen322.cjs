'use strict';
// supplement322.json — 2026-10-23: 2024 (AU) Tesla Model 3 (Highland), Suzuki
// Jimny (3-door GJ + 5-door XL) and Hyundai Kona (SX2 MY24). Replaces stale
// lists (Kona "Active/Highlander", Jimny "JLX"). Specs + price when new:
// Carsales 2024 variant pages. Model 3 pages list tare only -> weight null;
// Long Range battery not listed -> null. Kona Electric range WLTP (no ADR);
// Electric Premium kerb below tare -> null. Kei-car "XC" grey imports and
// the Kona 1.6T AWD N Line left out.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, ...o });
const M3 = { cargo: 594, weight: null };
const JM = { engine: '1.5L I4 Petrol', displacement: 1462, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol', power: 75,
  torque: 130, drivetrain: '4WD', topSpeed: null, acceleration: null, cargo: null, towing: 1300, fuelTank: 40 };
const JMM = { ...JM, transmission: '5-speed manual', fc: 7.7, fh: 5.7, fx: 6.4 };
const JMA = { ...JM, transmission: '4-speed automatic' };
const K = { topSpeed: null, acceleration: null, cargo: null, seats: 5, drivetrain: 'FWD' };
const KP = { ...K, engine: '2.0L I4 Petrol', displacement: 1999, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 110, torque: 180, transmission: 'CVT', fc: 8.6, fh: 5.5, fx: 6.6, weight: 1455, towing: 1300, fuelTank: 47, cargo: 407 };
const KH = { ...K, engine: '1.6L I4 Hybrid', displacement: 1580, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  power: 104, torque: null, transmission: '6-speed dual-clutch', fc: 3.9, fh: 4.0, fx: 3.9, weight: 1525, towing: 1300 };
const KE = ev({ ...K, engine: 'Single-Motor Electric', aspiration: null, power: 150, torque: 255, battery: '64.8 kWh' });

writeLineups(322, {
  'Tesla|Model 3|2024': {
    'Rear-Wheel Drive': ev({ ...M3, engine: 'Single Motor Electric', drivetrain: 'RWD', power: 208, torque: 350, battery: '62.5 kWh',
      range: 513, acceleration: 6.1, topSpeed: 201, price: $(54900) }),
    'Long Range AWD': ev({ ...M3, engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 366, torque: null, battery: null, range: 629,
      acceleration: 4.4, topSpeed: 201, price: $(64900) }),
    'Performance': ev({ ...M3, engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 461, torque: null, battery: '85 kWh', range: 528,
      acceleration: 3.1, topSpeed: 262, price: $(80900) }),
  },
  'Suzuki|Jimny|2024': {
    'Lite Manual': { ...JMM, weight: 1075, seats: 4, price: $(30490) },
    'GLX Manual': { ...JMM, weight: 1095, seats: 4, price: $(31990) },
    'GLX Auto': { ...JMA, fc: 8.2, fh: 6.1, fx: 6.9, weight: 1110, seats: 4, price: $(34490) },
    'XL Manual': { ...JMM, fc: 7.6, weight: 1185, seats: 4, price: $(34990) },
    'XL Heritage Manual': { ...JMM, fc: 7.6, weight: 1185, seats: 4, price: $(36490) },
    'XL Auto': { ...JMA, fc: 8.1, fh: 6.3, fx: 6.9, weight: 1210, seats: 4, price: $(37490) },
  },
  'Hyundai|Kona|2024': {
    'Kona': { ...KP, price: $(32000) },
    'N Line': { ...KP, price: $(36000) },
    'Premium': { ...KP, price: $(39500) },
    'Hybrid': { ...KH, price: $(36000) },
    'Hybrid Premium': { ...KH, price: $(43500) },
    'Electric': { ...KE, range: 505, weight: 1698, price: $(58000) },
    'Electric Premium': { ...KE, range: 444, weight: null, price: $(68000) },
  },
});
