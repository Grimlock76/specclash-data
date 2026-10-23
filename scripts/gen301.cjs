'use strict';
// supplement301.json — 2026-10-23: 2025 (AU) VW Golf (8.5 MY25 hatch) and
// Honda CR-V (RS). Specs + price when new: Carsales 2025 variant pages. Golf R
// figures from the spec table (overview text still quotes the Mk8's 235 kW).
// CR-V e:HEV RS power/torque = drive motor (135 kW / 335 Nm), as for 2026.
// Replaces stale lists (70TSI, GTE, CR-V "e:PHEV" etc.).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const G = { ...B, engine: '1.4L I4 Turbo Petrol', displacement: 1395, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 110, torque: 250, transmission: '8-speed automatic', drivetrain: 'FWD', fc: 8.1, fh: 5.2, fx: 6.3, weight: 1319, fuelTank: 50,
  cargo: 374 };
const G20 = { ...G, engine: '2.0L I4 Turbo Petrol', displacement: 1984, transmission: '7-speed dual-clutch' };
const R = { ...G20, power: 245, torque: 420, drivetrain: 'AWD', fc: 10.6, fh: 7.0, fx: 8.3, acceleration: 4.6, weight: 1527 };
const CR = { ...B, engine: '1.5L I4 Turbo Petrol', displacement: 1498, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', power: 140,
  torque: 240, transmission: 'CVT', fuelTank: 57 };
const CR2 = { ...CR, drivetrain: 'FWD' };
const CR4 = { ...CR, drivetrain: 'AWD' };
writeLineups(301, {
  'Volkswagen|Golf|2025': {
    '110TSI Life': { ...G, price: $(38690) },
    '110TSI Style': { ...G, price: $(43690) },
    '110TSI R-Line': { ...G, price: $(47990) },
    'GTI': { ...G20, power: 195, torque: 370, fc: 9.4, fh: 5.9, fx: 7.2, acceleration: 5.9, weight: 1435, price: $(58990) },
    'R': { ...R, price: $(70990) },
    'R Black Edition': { ...R, price: $(72490) },
  },
  'Honda|CR-V|2025': {
    'VTi X+': { ...CR2, fc: 9.3, fh: 5.8, fx: 7.1, weight: 1613, price: $(41900) },
    'VTi X7': { ...CR2, fc: 9.4, fh: 6.1, fx: 7.3, weight: 1665, seats: 7, towing: 1000, cargo: 150, price: $(47300) },
    'VTi L AWD': { ...CR4, fc: 9.5, fh: 6.2, fx: 7.4, weight: 1669, price: $(51800) },
    'VTi L7': { ...CR2, fc: 9.4, fh: 6.1, fx: 7.3, weight: 1700, seats: 7, price: $(53500) },
    'VTi LX AWD': { ...CR4, fc: 9.9, fh: 6.5, fx: 7.7, weight: 1719, price: $(57500) },
    'e:HEV RS': { ...B, engine: '2.0L I4 e:HEV (motor-driven hybrid)', displacement: 1993, cylinders: 4,
      aspiration: 'Naturally Aspirated', fuelType: 'hybrid', power: 135, torque: 335, transmission: '1-speed automatic',
      drivetrain: 'FWD', fc: 4.9, fh: 5.8, fx: 5.5, weight: 1771, towing: 750, price: $(59900) },
  },
});
