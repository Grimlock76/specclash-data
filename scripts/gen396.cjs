'use strict';
// supplement396.json — 2026-10-25: Toyota GR Yaris 2024 (run-out 200 kW GR +
// Rallye, and the updated 221 kW GR GT / GR GTS manual), 2025 (GT / GTS,
// manual + 8-speed auto) and 2026 (+ GTS Aero Performance Package). Carsales
// files these under Yaris "GR ...". Replaces stale rows (~ prices). Specs +
// price when new: Carsales variant pages (base price incl GST & LCT); 2026 =
// CarsGuide MSRP (Carsales 2026 shows drive-away only). 0-100 not listed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { engine: '1.6L I3 Turbo Petrol (G16E-GTS)', displacement: 1618, cylinders: 3, aspiration: 'Turbo', fuelType: 'petrol',
  drivetrain: 'AWD', seats: 4, fuelTank: 50, cargo: null, topSpeed: null, acceleration: null };
const OLD = { ...B, power: 200, torque: 370, transmission: '6-speed manual', fc: null, fh: null, fx: 7.6, weight: 1320 };
const M = { ...B, power: 221, torque: 400, transmission: '6-speed manual', fc: 10.8, fh: 6.7, fx: 8.2 };
const A = { ...B, power: 221, torque: 400, transmission: '8-speed automatic', fc: 13.0, fh: 6.9, fx: 9.1, weight: 1300 };
const line = () => ({
  'GR GT Manual': { ...M, weight: 1305, price: $(55490) }, 'GR GT Auto': { ...A, price: $(57990) },
  'GR GTS Manual': { ...M, weight: 1280, price: $(60490) }, 'GR GTS Auto': { ...A, price: $(62990) },
});

writeLineups(396, {
  'Toyota|GR Yaris|2024': {
    'GR Yaris': { ...OLD, price: $(51390) }, 'Rallye': { ...OLD, price: $(56390) },
    'GR GT Manual': { ...M, weight: 1280, price: $(55490) }, 'GR GTS Manual': { ...M, weight: 1280, price: $(60490) },
  },
  'Toyota|GR Yaris|2025': line(),
  'Toyota|GR Yaris|2026': { ...line(),
    'GR GTS Aero Manual': { ...M, weight: null, price: $(64990) }, 'GR GTS Aero Auto': { ...A, weight: null, price: $(67490) } },
});
