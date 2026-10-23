'use strict';
// supplement309.json — 2026-10-23: 2025 (AU) MINI Cooper hatch (F65/F66/J01;
// Carsales files it under "Cooper"). Specs + price when new: Carsales 2025
// variant pages. EV range ADR. JCW E Favoured: Carsales lists ADR 400 km above
// its own 371 km WLTP figure, so range left null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, transmission: '7-speed dual-clutch' };
const P3 = { ...B, engine: '1.5L I3 Turbo Petrol', displacement: 1499, cylinders: 3, aspiration: 'Turbo', fuelType: 'petrol',
  drivetrain: 'FWD' };
const P4 = { ...P3, engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4 };
const EV = { ...B, engine: 'Single-Motor Electric', displacement: null, cylinders: null, aspiration: null, fuelType: 'electric',
  transmission: '1-speed automatic', drivetrain: 'FWD', fc: null, fh: null, fx: null, seats: 4 };
const S = { ...P4, power: 150, torque: 300, fc: 8.9, fh: 5.3, fx: 6.6, acceleration: 6.8, topSpeed: 242, weight: 1355, seats: 5,
  fuelTank: 44, cargo: 275 };

writeLineups(309, {
  'Mini|Hatch|2025': {
    'C Core 5D': { ...P3, power: 115, torque: 230, fc: 7.8, fh: 5.1, fx: 6.1, acceleration: 8.0, topSpeed: 225, weight: 1320, seats: 5,
      fuelTank: 44, cargo: 275, price: $(43990) },
    'S Classic 5D': { ...S, price: $(51990) },
    'S Favoured 5D': { ...S, price: $(54990) },
    'JCW Classic 3D': { ...P4, power: 170, torque: 380, fc: 9.2, fh: 5.4, fx: 6.8, acceleration: 6.1, topSpeed: 250, weight: 1330,
      seats: 4, price: $(57990) },
    'E Classic 3D': { ...EV, power: 135, torque: 290, battery: '40.7 kWh', range: 271, acceleration: 7.3, topSpeed: 160, weight: 1540,
      price: $(53990) },
    'SE Favoured 3D': { ...EV, power: 160, torque: 330, battery: '54.2 kWh', range: 362, acceleration: 6.7, topSpeed: 170, weight: 1605,
      price: $(58990) },
    'JCW E Favoured 3D': { ...EV, power: 190, torque: 350, battery: '54.2 kWh', range: null, acceleration: 5.9, topSpeed: 200,
      weight: 1650, price: $(63990) },
  },
});
