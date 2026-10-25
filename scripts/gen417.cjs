'use strict';
// supplement417.json — 2026-10-25: BMW M2 (G87) 2024 (pre-LCI 338 kW / 550
// Nm, auto + manual) and 2025 (LCI 353 kW / 600 Nm auto + manual, M2 CS 390
// kW), and BMW M5 (G90 sedan / G99 Touring, 535 kW PHEV) 2024 (sedan only),
// 2025, 2026. Replaces stale rows ("Coupe", "M2 Coupe", ~ prices; 2026 M5 had
// the old 441 kW F90 specs). Specs as the 2026 M2 rows (gen277) + Carsales
// variant pages; price when new: Carsales (base price incl GST & LCT). M5:
// 535 kW system, torque null, 68 km ADR EV range, 3.0 L combined.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const m2 = t => existing('BMW', 'M2', 2026, t);
const A = m2('M2 Coupe Auto'), M = m2('M2 Coupe Manual');
const PRE = { power: 338, torque: 550 };
const M5 = { engine: '4.4L V8 Twin-Turbo PHEV', displacement: 4395, cylinders: 8, aspiration: 'Twin-Turbo',
  fuelType: 'plug-in hybrid', power: 535, torque: null, transmission: '8-speed automatic', drivetrain: 'AWD', fc: null, fh: null,
  fx: 3.0, battery: '18.6 kWh', range: 68, acceleration: 3.5, accelClaimed: true, seats: 5, topSpeed: null, cargo: null };
const m5 = (s, t) => ({ 'M5 Sedan': { ...M5, weight: 2435, price: $(s) }, 'M5 Touring': { ...M5, weight: 2475, price: $(t) } });

writeLineups(417, {
  'BMW|M2|2024': {
    'M2 Coupe Auto': { ...A, ...PRE, fx: 9.7, acceleration: 4.1, weight: 1725, price: $(121700) },
    'M2 Coupe Manual': { ...M, ...PRE, fx: 10.2, acceleration: 4.3, weight: 1700, price: $(121700) },
  },
  'BMW|M2|2025': {
    'M2 Coupe Auto': { ...A, fx: 9.7, acceleration: 4.0, price: $(127300) },
    'M2 Coupe Manual': { ...M, fx: 10.1, acceleration: 4.2, price: $(127300) },
    'M2 CS': { ...m2('M2 CS'), fx: 10.0, acceleration: 3.8, price: $(172900) },
  },
  'BMW|M5|2024': { 'M5 Sedan': { ...M5, weight: 2435, price: $(259900) } },
  'BMW|M5|2025': m5(261700, 263900),
  'BMW|M5|2026': m5(263400, 267400),
});
