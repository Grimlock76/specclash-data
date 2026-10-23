'use strict';
// supplement274.json — 2026-10-23: 2026 (AU) Genesis G70, G80, GV70, GV80;
// Kia Seltos (SP2 PE), K4. Specs: Carsales variant pages (Redbook). Prices:
// CarsGuide 2026 MSRP lists (Genesis) / Carsales price-when-new (Kia, which
// matches CarsGuide). Tare-only or inconsistent (kerb < tare) weights null.
// EV torque null where Carsales lists one motor only. GV80 3.5T seat count
// from the CarsGuide variant name (Carsales shows 5, conflicting). G80
// Electrified range is WLTP (no ADR published).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, transmission: '8-speed automatic' };
const T25 = { ...B, engine: '2.5L I4 Turbo Petrol', displacement: 2497, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 224, torque: 422 };
const T35 = { ...B, engine: '3.5L V6 Twin-Turbo Petrol', displacement: 3470, cylinders: 6, aspiration: 'Twin-Turbo', fuelType: 'petrol',
  power: 279, torque: 530, drivetrain: 'AWD' };
const GV70_25 = { ...T25, drivetrain: 'AWD', fc: 15.1, fh: 7.5, fx: 10.3, acceleration: 6.2, topSpeed: 240, seats: 5, towing: 2200,
  fuelTank: 66, cargo: 542 };
const GV70_35 = { ...T35, fc: 15.9, fh: 8.6, fx: 11.3, acceleration: 5.2, topSpeed: 250, seats: 5, towing: 2200 };
const GV80 = { drivetrain: 'AWD', towing: 2722, fuelTank: 80 };
const SEL = { ...B, engine: '2.0L I4 Petrol', displacement: 1999, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 110, torque: 180, transmission: 'CVT', drivetrain: 'FWD', fc: 8.8, fh: 5.6, fx: 6.9, seats: 5, towing: 1100, fuelTank: 50,
  cargo: 468 };
const SELT = { ...SEL, engine: '1.6L I4 Turbo Petrol', displacement: 1598, aspiration: 'Turbo', power: 146, torque: 265,
  transmission: '8-speed automatic', drivetrain: 'AWD', fc: 9.5, fh: 6.2, fx: 7.4, weight: 1430, towing: 1250 };
const K4 = { ...SEL, torque: 180, fc: 8.2, fh: 4.7, fx: 6.0, towing: null, fuelTank: 47, cargo: 508 };
const K4T = { ...K4, engine: '1.6L I4 Turbo Petrol', displacement: 1598, aspiration: 'Turbo', power: 142, torque: 265,
  transmission: '8-speed automatic' };

writeLineups(274, {
  'Genesis|GV70|2026': {
    '2.5T Advanced': { ...GV70_25, weight: 1935, price: $(80350) },
    '2.5T Signature': { ...GV70_25, price: $(89350) },
    '2.5T Signature Sport': { ...GV70_25, price: $(91350) },
    '3.5T Signature': { ...GV70_35, weight: 2020, price: $(99850) },
    '3.5T Signature Sport': { ...GV70_35, price: $(101850) },
    'Electrified Signature Performance': { ...B, engine: 'Dual-Motor Electric', displacement: null, cylinders: null, aspiration: null,
      fuelType: 'electric', transmission: '1-speed automatic', drivetrain: 'AWD', power: 360, torque: null, fc: null, fh: null, fx: null,
      battery: '84 kWh', range: 462, acceleration: 4.4, topSpeed: 235, weight: 2340, seats: 5, towing: 1800, price: $(132718) },
  },
  'Genesis|GV80|2026': {
    '2.5T Signature 7 Seat': { ...T25, ...GV80, fc: 14.5, fh: 8.1, fx: 10.4, acceleration: 7.1, topSpeed: 237, seats: 7, price: $(120250) },
    '3.5T Signature 7 Seat': { ...T35, ...GV80, fc: 16.4, fh: 9.3, fx: 11.9, acceleration: 5.7, topSpeed: 240, seats: 7, price: $(132250) },
    '3.5T Black 7 Seat': { ...T35, ...GV80, fc: 16.4, fh: 9.3, fx: 11.9, acceleration: 5.7, topSpeed: 240, seats: 7, price: $(136250) },
  },
  'Genesis|G80|2026': {
    '2.5T Signature': { ...T25, drivetrain: 'RWD', fc: 13.5, fh: 6.4, fx: 9.0, acceleration: 6.0, topSpeed: 240, seats: 5, fuelTank: 65,
      cargo: 424, price: $(104128) },
    '3.5T AWD Signature Sport': { ...T35, fc: 16.3, fh: 7.9, fx: 11.0, acceleration: 5.1, topSpeed: 250, weight: 2020, seats: 5,
      price: $(127128) },
    'Electrified Signature': { ...B, engine: 'Dual-Motor Electric', displacement: null, cylinders: null, aspiration: null,
      fuelType: 'electric', transmission: '1-speed automatic', drivetrain: 'AWD', power: 272, torque: null, fc: null, fh: null, fx: null,
      battery: '94.5 kWh', range: 570, acceleration: 5.1, topSpeed: 225, seats: 5, price: $(155000) },
  },
  'Genesis|G70|2026': {
    '3.3T Signature Sport Sedan': { ...B, engine: '3.3L V6 Twin-Turbo Petrol', displacement: 3342, cylinders: 6, aspiration: 'Twin-Turbo',
      fuelType: 'petrol', power: 274, torque: 510, drivetrain: 'RWD', fc: 15.4, fh: 7.8, fx: 10.6, acceleration: 4.7, topSpeed: 270,
      weight: 1765, seats: 5, fuelTank: 60, cargo: 330, price: $(87042) },
    '2.0T Shooting Brake Signature Sport Line': { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4, aspiration: 'Turbo',
      fuelType: 'petrol', power: 179, torque: 353, drivetrain: 'RWD', fc: 13.1, fh: 6.9, fx: 9.1, acceleration: 6.4, topSpeed: 235,
      weight: 1699, seats: 5, fuelTank: 60, cargo: 465, price: $(80265) },
  },
  'Kia|Seltos|2026': {
    'S': { ...SEL, weight: 1310, groundClearance: 170, price: $(31250) },
    'Sport': { ...SEL, price: $(34450) },
    'Sport+ FWD': { ...SEL, weight: 1310, price: $(37550) },
    'Sport+ AWD': { ...SELT, price: $(41070) },
    'GT-Line FWD': { ...SEL, price: $(43250) },
    'GT-Line AWD': { ...SELT, price: $(46670) },
  },
  'Kia|K4|2026': {
    'S Sedan': { ...K4, price: $(32090) },
    'Sport Sedan': { ...K4, price: $(36690) },
    'Sport+ Sedan': { ...K4, price: $(39090) },
    'GT-Line Sedan': { ...K4T, fc: 9.3, fh: 5.1, fx: 6.7, weight: 1395, price: $(43790) },
    'S Hatch': { ...K4, fc: 8.4, fh: 4.8, fx: 6.1, cargo: 438, price: $(32090) },
    'GT-Line Hatch': { ...K4T, fc: 10.8, fh: 5.5, fx: 7.4, weight: 1415, cargo: 438, price: $(43790) },
  },
});
