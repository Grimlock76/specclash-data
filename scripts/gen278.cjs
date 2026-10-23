'use strict';
// supplement278.json — 2026-10-23: 2026 (AU) BMW X2 (U10), Z4 (G29), 2 Series
// coupe (G42) + Gran Coupe (F74), 4 Series coupe/convertible (G22/G23 LCI),
// 7 Series (G70 + LCI), i4 (G26 LCI). Specs + price when new: Carsales variant
// pages; CarsGuide 2026 MSRP where Carsales has none (X2 xDrive20i, 7 Series).
// Carsales lists only the eDrive35 for the 2026 i4. M2 lives under its own
// model, so it leaves the 2 Series lineup.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, transmission: '8-speed automatic' };
const I3 = { ...B, engine: '1.5L I3 Turbo Petrol (MHEV)', displacement: 1499, cylinders: 3, aspiration: 'Turbo', fuelType: 'petrol',
  transmission: '7-speed dual-clutch', drivetrain: 'FWD' };
const I4 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol' };
const I6 = { ...B, engine: '3.0L I6 Turbo Petrol', displacement: 2998, cylinders: 6, aspiration: 'Turbo', fuelType: 'petrol', topSpeed: 250 };
const B48D = { ...I4, transmission: '7-speed dual-clutch' };
const M440 = { ...I6, engine: '3.0L I6 Turbo Petrol (MHEV)', drivetrain: 'AWD', power: 285, torque: 500, seats: 4 };

writeLineups(278, {
  'BMW|X2|2026': {
    'sDrive20i M Sport': { ...I3, power: 125, torque: 280, fx: 6.5, acceleration: 8.3, topSpeed: 213, weight: 1570, towing: 1800,
      fuelTank: 54, cargo: 515, price: $(72800) },
    'xDrive20i M Sport': { ...B48D, drivetrain: 'AWD', power: 150, torque: 300, fc: 9.6, fh: 6.3, fx: 7.5, acceleration: 7.4, topSpeed: 231,
      weight: 1620, towing: 1800, price: $(78900) },
    'M35i xDrive': { ...B48D, drivetrain: 'AWD', power: 221, torque: 400, fx: 8.3, acceleration: 5.4, topSpeed: 250, weight: 1695,
      price: $(96700) },
  },
  'BMW|Z4|2026': {
    'sDrive20i M Sport': { ...I4, drivetrain: 'RWD', power: 145, torque: 320, fc: 7.8, fh: 5.7, fx: 6.5, acceleration: 6.6, topSpeed: 235,
      weight: 1450, seats: 2, fuelTank: 52, cargo: 281, price: $(104300) },
    'M40i': { ...I6, drivetrain: 'RWD', power: 285, torque: 500, fc: 10.3, fh: 6.4, fx: 7.8, acceleration: 4.1, weight: 1570, seats: 2,
      price: $(143600) },
  },
  'BMW|2 Series Gran Coupe|2026': {
    '218 M Sport': { ...I3, engine: '1.5L I3 Turbo Petrol', power: 115, torque: 230, fc: 8.1, fh: 5.2, fx: 6.3, acceleration: 8.6,
      topSpeed: 230, weight: 1420, fuelTank: 49, cargo: 430, price: $(61800) },
    '220 M Sport': { ...B48D, engine: '2.0L I4 Turbo Petrol (MHEV)', drivetrain: 'FWD', power: 150, torque: 300, fc: 9.0, fh: 5.4, fx: 6.7,
      acceleration: 7.3, topSpeed: 250, weight: 1455, cargo: 430, price: $(64800) },
    'M235 xDrive': { ...B48D, drivetrain: 'AWD', power: 233, torque: 400, fc: 10.1, fh: 6.4, fx: 7.7, acceleration: 4.9, topSpeed: 250,
      weight: 1575, cargo: 430, price: $(88500) },
  },
  'BMW|2 Series|2026': {
    '230i M Sport Coupe': { ...I4, drivetrain: 'RWD', power: 190, torque: 400, fc: 7.7, fh: 5.7, fx: 6.4, acceleration: 5.8, topSpeed: 250,
      weight: 1525, seats: 4, price: $(80400) },
    'M240i xDrive Coupe': { ...I6, drivetrain: 'AWD', power: 285, torque: 500, fc: 10.3, fh: 6.6, fx: 8.0, acceleration: 4.3, weight: 1690,
      seats: 4, price: $(103400) },
  },
  'BMW|4 Series|2026': {
    '430i M Sport': { ...I4, drivetrain: 'RWD', power: 190, torque: 400, fc: 8.0, fh: 5.8, fx: 6.6, acceleration: 5.8, topSpeed: 250,
      weight: 1545, seats: 4, fuelTank: 59, cargo: 440, price: $(115300) },
    'M440i xDrive': { ...M440, fc: 10.3, fh: 6.6, fx: 8.0, acceleration: 4.5, weight: 1735, price: $(138700) },
  },
  'BMW|4 Series Convertible|2026': {
    '420i M Sport Convertible': { ...I4, drivetrain: 'RWD', power: 135, torque: 300, fc: 7.8, fh: 5.9, fx: 6.6, acceleration: 8.2,
      topSpeed: 236, weight: 1690, seats: 4, price: $(112100) },
    'M440i xDrive Convertible': { ...M440, fc: 10.9, fh: 7.0, fx: 8.4, acceleration: 4.9, weight: 1890, price: $(155200) },
  },
  'BMW|7 Series|2026': {
    '740i M Sport': { ...I6, engine: '3.0L I6 Turbo Petrol (MHEV)', drivetrain: 'RWD', power: 280, torque: 540, fc: 9.9, fh: 6.8, fx: 7.9,
      acceleration: 5.4, weight: 2090, fuelTank: 74, price: $(277900) },
    '740 M Sport (LCI)': { ...I6, engine: '3.0L I6 Turbo Petrol (MHEV)', drivetrain: 'RWD', power: 294, torque: 580, fc: 9.9, fh: 6.8,
      fx: 7.9, acceleration: 5.4, weight: 2115, price: $(277900) },
  },
  'BMW|i4|2026': {
    'eDrive35': { ...B, engine: 'Single-Motor Electric', displacement: null, cylinders: null, aspiration: null, fuelType: 'electric',
      transmission: '1-speed automatic', drivetrain: 'RWD', power: 210, torque: 400, fc: null, fh: null, fx: null, battery: '66.4 kWh',
      range: 448, acceleration: 6.0, topSpeed: 190, weight: 1990, towing: 1600, cargo: 470, price: $(88900) },
  },
});
