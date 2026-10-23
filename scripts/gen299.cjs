'use strict';
// supplement299.json — 2026-10-23: 2025 (AU) Toyota GR Corolla (GTS, now with
// the 8-speed auto option; Carsales files it under Corolla "GR GTS") and
// Mitsubishi Pajero Sport (QG MY25). Specs + price when new: Carsales 2025
// variant pages. GR Corolla manual 0-100 = 5.3 s claimed (spec table); the
// auto page gives no clean figure -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const GR = { engine: '1.6L I3 Turbo Petrol (G16E-GTS)', displacement: 1618, cylinders: 3, aspiration: 'Turbo', fuelType: 'petrol',
  power: 221, torque: 400, drivetrain: 'AWD', topSpeed: null, cargo: null, seats: 5, fuelTank: 50 };
const PS = { engine: '2.4L I4 Turbo Diesel', displacement: 2442, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel', power: 133,
  torque: 430, transmission: '8-speed automatic', drivetrain: '4WD', fc: 9.8, fh: 7.0, fx: 8.0, acceleration: null, topSpeed: null,
  cargo: null, towing: 3100, fuelTank: 68 };
writeLineups(299, {
  'Toyota|GR Corolla|2025': {
    'GTS Manual': { ...GR, transmission: '6-speed manual', fc: 11.1, fh: 6.8, fx: 8.4, acceleration: 5.3, weight: 1490,
      price: $(67990) },
    'GTS Auto': { ...GR, transmission: '8-speed automatic', fc: 13.7, fh: 7.1, fx: 9.5, acceleration: null, weight: 1510,
      price: $(70490) },
  },
  'Mitsubishi|Pajero Sport|2025': {
    'GLX': { ...PS, weight: 2087, seats: 5, groundClearance: 218, price: $(51540) },
    'GLS': { ...PS, weight: 2119, seats: 7, price: $(57640) },
    'Exceed': { ...PS, weight: 2125, seats: 7, price: $(63340) },
    'GSR': { ...PS, weight: 2118, seats: 7, price: $(65590) },
  },
});
