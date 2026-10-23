'use strict';
// supplement285.json — 2026-10-23: 2026 (AU) Aston Martin Vantage, McLaren
// Artura, Alfa Romeo Giulia. Specs: Carsales variant pages. Price: Carsales
// price when new, else CarsGuide 2026 MSRP (Vantage coupe, Artura coupe);
// null where neither publishes one (Vantage S / Roadster, Artura Spider).
// Artura torque null (table 585 Nm vs overview 720 Nm). Giulia: Carsales
// lists only the Veloce for 2026; Quadrifoglio carried over unchanged.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null };
const AM = { ...B, engine: '4.0L V8 Twin-Turbo Petrol', displacement: 3982, cylinders: 8, aspiration: 'Twin-Turbo', fuelType: 'petrol',
  power: 500, torque: 800, transmission: '8-speed automatic', drivetrain: 'RWD', fc: 17.8, fh: 8.7, fx: 12.1, topSpeed: 325, seats: 2,
  fuelTank: 73 };
const AR = { ...B, engine: '3.0L V6 Twin-Turbo PHEV', displacement: 2993, cylinders: 6, aspiration: 'Twin-Turbo',
  fuelType: 'plug-in hybrid', power: 515, torque: null, transmission: '8-speed dual-clutch', drivetrain: 'RWD', fc: null, fh: null,
  fx: 4.8, battery: '7.4 kWh', range: 33, acceleration: 3.0, topSpeed: 330, seats: 2 };

writeLineups(285, {
  'Aston Martin|Vantage|2026': {
    'Coupe': { ...AM, acceleration: 3.5, weight: 1745, price: $(410000) },
    'S Coupe': { ...AM, acceleration: 3.4, weight: 1745, price: null },
    'Roadster': { ...AM, fc: null, fh: null, fx: 12.4, acceleration: 3.6, weight: 1805, price: null },
  },
  'McLaren|Artura|2026': {
    'Coupe': { ...AR, weight: 1498, price: $(463000) },
    'Spider': { ...AR, weight: 1560, price: null },
  },
  'Alfa Romeo|Giulia|2026': {
    'Veloce': { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1995, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
      power: 206, torque: 400, transmission: '8-speed automatic', drivetrain: 'RWD', fc: 8.2, fh: 4.9, fx: 6.1, acceleration: 5.7,
      topSpeed: 240, weight: 1445, seats: 5, fuelTank: 58, cargo: 480, price: $(79990) },
    'Quadrifoglio': existing('Alfa Romeo', 'Giulia', 2026, 'Quadrifoglio'),
  },
});
