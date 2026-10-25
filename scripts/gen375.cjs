'use strict';
// supplement375.json — 2026-10-25: 2024 (AU) MG ZS — what Carsales + CarsGuide
// list under 2024: the outgoing ZS Excite 1.5 (MY24) and the new-gen Excite /
// Essence Hybrid+ (MY25 early build). Replaces stale rows ("Essence Turbo",
// "Excite+ Turbo", ~ prices). Specs: Carsales variant pages. Price: Excite =
// Carsales price when new (base price incl GST & LCT); Hybrid+ = null (Carsales
// shows drive-away only, CarsGuide 2024 only Glass's ranges). Hybrid+ power =
// 158 kW system, system torque not stated -> null; city/highway figures on the
// page are implausible (0.9 city) -> null, combined 4.7 kept. Excite kerb
// tare-only -> null. (The 1.0T Essence is on CarsGuide only, no spec page ->
// not added.)
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { seats: 5, drivetrain: 'FWD', topSpeed: null, acceleration: null, cylinders: 4, displacement: 1498,
  aspiration: 'Naturally Aspirated' };
const HY = { ...B, engine: '1.5L I4 Petrol Hybrid', fuelType: 'hybrid', power: 158, torque: null, transmission: '3-speed automatic',
  fc: null, fh: null, fx: 4.7, cargo: 443, fuelTank: 41, price: null };

writeLineups(375, {
  'MG|ZS|2024': {
    'Excite': { ...B, engine: '1.5L I4 Petrol', fuelType: 'petrol', power: 84, torque: 150, transmission: '4-speed automatic', fc: 9.1,
      fh: 5.9, fx: 7.1, cargo: 359, fuelTank: 48, weight: null, price: $(22990) },
    'Excite Hybrid+': { ...HY, weight: 1410 },
    'Essence Hybrid+': { ...HY, weight: 1420 },
  },
});
