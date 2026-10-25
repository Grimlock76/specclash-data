'use strict';
// supplement332.json — 2026-10-25: 2024 (AU) Mazda CX-30 (DM) and CX-3 (DK),
// FWD autos. Replaces stale grades ("Astute", "Maxx", "sTouring"). Specs +
// price when new: Carsales 2024 variant pages (base price incl GST & LCT).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { acceleration: null, topSpeed: null, seats: 5, cylinders: 4, transmission: '6-speed automatic', drivetrain: 'FWD',
  fuelType: 'petrol', aspiration: 'Naturally Aspirated' };
const CX = { ...B, towing: 1200, cargo: 317 };
const C20 = { ...CX, engine: '2.0L I4 Petrol (Skyactiv-G)', displacement: 1998, power: 114, torque: 200, fc: 7.5, fh: 5.6, fx: 6.3 };
const C25 = { ...CX, engine: '2.5L I4 Petrol (Skyactiv-G)', displacement: 2488, power: 139, torque: 252, fc: 8.5, fh: 5.5, fx: 6.6 };
const C3 = { ...B, engine: '2.0L I4 Petrol (Skyactiv-G)', displacement: 1998, power: 110, torque: 195, fc: 7.7, fh: 5.5, fx: 6.3,
  weight: 1294, cargo: 264, fuelTank: 48 };

writeLineups(332, {
  'Mazda|CX-30|2024': {
    'G20 Pure': { ...C20, weight: 1465, price: $(33140) },
    'G20 Evolve': { ...C20, weight: 1468, price: $(35840) },
    'G20 Touring': { ...C20, weight: 1465, price: $(38840) },
    'G25 Touring': { ...C25, weight: 1466, price: $(40340) },
    'G20 Touring LE': { ...C20, weight: 1468, price: $(41940) },
    'G25 GT SP': { ...C25, weight: 1479, price: $(43140) },
    'G20 Astina': { ...C20, weight: 1477, price: $(44040) },
    'G25 Astina': { ...C25, weight: 1477, price: $(45540) },
  },
  'Mazda|CX-3|2024': {
    'G20 Sport': { ...C3, price: $(27070) },
    'G20 Pure': { ...C3, price: $(29570) },
    'G20 Evolve': { ...C3, price: $(31320) },
    'G20 Touring SP': { ...C3, price: $(34570) },
    'G20 Akari': { ...C3, weight: 1306, price: $(38890) },
  },
});
