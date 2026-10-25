'use strict';
// supplement333.json — 2026-10-25: 2025 (AU) Mazda CX-30 (DM) and CX-3 (DK),
// FWD autos. Replaces stale grades ("Astute", "Maxx", "sTouring"). Specs +
// price when new: Carsales 2025 variant pages (base price incl GST & LCT).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { acceleration: null, topSpeed: null, seats: 5, cylinders: 4, transmission: '6-speed automatic', drivetrain: 'FWD',
  fuelType: 'petrol', aspiration: 'Naturally Aspirated' };
const CX = { ...B, towing: 1200, cargo: 317 };
const C20 = { ...CX, engine: '2.0L I4 Petrol (Skyactiv-G)', displacement: 1998, power: 114, torque: 200, fc: 7.5, fh: 5.6, fx: 6.3,
  weight: 1468 };
const C25 = { ...CX, engine: '2.5L I4 Petrol (Skyactiv-G)', displacement: 2488, power: 139, torque: 252, fc: 8.5, fh: 5.5, fx: 6.6,
  weight: 1479 };
const C3 = { ...B, engine: '2.0L I4 Petrol (Skyactiv-G)', displacement: 1998, power: 110, torque: 195, fc: 7.7, fh: 5.5, fx: 6.3,
  weight: 1294, cargo: 264, fuelTank: 48 };

writeLineups(333, {
  'Mazda|CX-30|2025': {
    'G20 Pure': { ...C20, price: $(34060) },
    'G20 Evolve': { ...C20, price: $(35960) },
    'G20 Touring': { ...C20, price: $(39760) },
    'G25 Touring': { ...C25, weight: 1468, price: $(41260) },
    'G20 Touring LE': { ...C20, price: $(42060) },
    'G25 GT SP': { ...C25, price: $(43260) },
    'G20 Astina': { ...C20, weight: 1479, price: $(44960) },
    'G25 Astina': { ...C25, price: $(46460) },
  },
  'Mazda|CX-3|2025': {
    'G20 Pure': { ...C3, price: $(30370) },
    'G20 Evolve': { ...C3, price: $(32100) },
    'G20 GT SP': { ...C3, price: $(35330) },
    'G20 Akari': { ...C3, weight: 1306, price: $(38890) },
  },
});
