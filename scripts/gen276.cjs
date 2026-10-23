'use strict';
// supplement276.json — 2026-10-23: 2026 (AU) Mercedes-Benz GLS, S-Class,
// CLA (new-gen incl. CLA electric), CLE coupe. Specs + price when new:
// Carsales variant pages; CarsGuide 2026 MSRP where Carsales shows only
// drive-away (GLS450: the single non-hybrid "GLS 450 4Matic" row; S-Class;
// CLA). CLE prices null: Carsales drive-away only, CarsGuide list unreachable.
// Tare-only weights null; EV ranges WLTP (no ADR published).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, transmission: '9-speed automatic', drivetrain: 'AWD' };
const I6P = { ...B, engine: '3.0L I6 Turbo Petrol (MHEV)', displacement: 2999, cylinders: 6, aspiration: 'Turbo', fuelType: 'petrol' };
const V8 = { ...B, engine: '4.0L V8 Twin-Turbo Petrol (MHEV)', displacement: 3982, cylinders: 8, aspiration: 'Twin-Turbo',
  fuelType: 'petrol' };
const GLS = { seats: 7, towing: 2700, fuelTank: 90 };
const EV = { ...B, displacement: null, cylinders: null, aspiration: null, fuelType: 'electric', fc: null, fh: null, fx: null,
  transmission: '2-speed automatic' };
const I4 = { ...B, engine: '2.0L I4 Turbo Petrol (MHEV)', displacement: 1999, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  seats: 4 };

writeLineups(276, {
  'Mercedes-Benz|GLS|2026': {
    'GLS450 4MATIC': { ...I6P, ...GLS, power: 280, torque: 560, fc: null, fh: null, fx: 11.0, acceleration: 5.6, topSpeed: 250,
      price: $(181900) },
    'GLS450 d 4MATIC': { ...B, ...GLS, engine: '3.0L I6 Turbo Diesel', displacement: 2989, cylinders: 6, aspiration: 'Turbo',
      fuelType: 'diesel', power: 270, torque: 750, fc: 9.8, fh: 6.7, fx: 7.8, acceleration: 6.1, topSpeed: 250, price: $(191127) },
    'GLS63 AMG 4MATIC+': { ...V8, ...GLS, power: 450, torque: 850, fc: 18.4, fh: 10.5, fx: 13.4, acceleration: 4.2, topSpeed: 280,
      fuelTank: null, towing: null, price: $(310227) },
  },
  'Mercedes-Benz|S-Class|2026': {
    'S450 4MATIC': { ...I6P, power: 280, torque: 560, fc: null, fh: null, fx: 9.0, acceleration: 4.9, topSpeed: 250, fuelTank: 76,
      price: $(264200) },
    'S580 L 4MATIC': { ...V8, power: 395, torque: 750, fc: null, fh: null, fx: 11.4, acceleration: 4.0, topSpeed: 250,
      price: $(353900) },
  },
  'Mercedes-Benz|CLA|2026': {
    'CLA200': { ...B, engine: '1.5L I4 Turbo Petrol (MHEV)', displacement: 1497, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
      transmission: '8-speed dual-clutch', drivetrain: 'FWD', power: 120, torque: 250, fc: null, fh: null, fx: 5.4, acceleration: 8.0,
      topSpeed: 232, cargo: 405, price: $(68100) },
    'CLA200 Electric': { ...EV, engine: 'Single-Motor Electric', drivetrain: 'RWD', power: 165, torque: 335, battery: '58 kWh', range: 470,
      acceleration: 7.5, topSpeed: 210, weight: 2065, price: $(72200) },
    'CLA350 4MATIC Electric': { ...EV, engine: 'Dual-Motor Electric', power: 260, torque: 515, battery: '85 kWh', range: 663,
      acceleration: 4.9, topSpeed: 210, weight: 2160, price: $(91300) },
  },
  'Mercedes-Benz|CLE|2026': {
    'CLE200 Coupe': { ...I4, power: 150, torque: 320, drivetrain: 'RWD', fc: 10.1, fh: 5.6, fx: 7.3, acceleration: 7.4, topSpeed: 240,
      weight: 1823, fuelTank: 66, cargo: 420, price: null },
    'CLE300 4MATIC Coupe': { ...I4, power: 190, torque: 400, fc: 10.3, fh: 5.9, fx: 7.5, acceleration: 6.2, topSpeed: 250, weight: 1879,
      price: null },
    'CLE53 AMG 4MATIC+ Coupe': { ...I6P, seats: 4, power: 330, torque: 560, fc: 13.2, fh: 7.6, fx: 9.6, acceleration: 4.0, weight: 2015,
      price: null },
  },
});
