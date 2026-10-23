'use strict';
// supplement289.json — 2026-10-23: 2025 (AU) Tesla Model Y — both the
// outgoing model (RWD / Long Range / Performance) and the "Juniper" update
// (Premium RWD / Premium Long Range) sold during 2025. Specs + price when new:
// Carsales 2025 variant pages. Range = ADR where published, else WLTP.
// Dual-motor torque not published -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const EV = { engine: 'Single-Motor Electric', displacement: null, cylinders: null, aspiration: null, fuelType: 'electric',
  transmission: '1-speed automatic', drivetrain: 'RWD', fc: null, fh: null, fx: null, seats: 5, towing: 1600, cargo: null,
  torque: null };
const AWD = { ...EV, engine: 'Dual-Motor Electric', drivetrain: 'AWD' };

writeLineups(289, {
  'Tesla|Model Y|2025': {
    'Rear-Wheel Drive': { ...EV, power: 220, battery: '60 kWh', range: 510, acceleration: 6.9, topSpeed: 217, weight: 1921, cargo: 971,
      price: $(55900) },
    'Premium Rear-Wheel Drive': { ...EV, power: 255, torque: 450, range: 466, acceleration: 5.9, topSpeed: 201, weight: 1921,
      price: $(58900) },
    'Long Range AWD': { ...AWD, power: 378, battery: '79 kWh', range: 533, acceleration: 5.0, topSpeed: 217, price: $(69900) },
    'Premium Long Range AWD': { ...AWD, power: 378, battery: '85 kWh', range: 600, acceleration: 4.8, topSpeed: 201, weight: 1992,
      price: $(68900) },
    'Performance': { ...AWD, power: 393, battery: '79 kWh', range: 604, acceleration: 3.7, topSpeed: 250, price: $(82900) },
  },
});
