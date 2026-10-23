'use strict';
// supplement263.json — 2026-10-23: 2026 (AU) BMW 3 Series, 5 Series, X3, X5.
// The 2026 catalogue was a copy of older generations (318i/320d/G30 5er,
// X5 25d/45e). Replaced with the grades Carsales lists, with its variant
// specs + "price when new"; CarsGuide 2026 MSRP for the two new G65 X5 grades
// (Carsales shows only drive-away). M3/M5 live under their own models.
// 0-100 = BMW claimed figure as listed by Carsales. Hybrid system torque not
// published → null. X3 M50 power = combined figure with 48V assist (293 kW).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const b = { seats: 5, topSpeed: null, transmission: '8-speed automatic' };
const B48 = { ...b, engine: '2.0L I4 Turbo Petrol (B48)', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol' };
const B58 = { ...b, engine: '3.0L I6 Turbo Petrol (B58)', displacement: 2998, cylinders: 6, aspiration: 'Turbo', fuelType: 'petrol' };
const B57 = { ...b, engine: '3.0L I6 Turbo Diesel (B57)', displacement: 2993, cylinders: 6, aspiration: 'Turbo', fuelType: 'diesel' };
writeLineups(263, {
  'BMW|3 Series|2026': {
    '330i M Sport': { ...B48, power: 190, torque: 400, drivetrain: 'RWD', fc: 8.0, fh: 5.7, fx: 6.5, acceleration: 5.8, weight: 1525,
      fuelTank: 59, cargo: 480, price: $(96300) },
    '330i M Sport Touring': { ...B48, power: 190, torque: 400, drivetrain: 'RWD', fc: 8.2, fh: 6.0, fx: 6.8, acceleration: 6.1, weight: 1600,
      fuelTank: 59, cargo: 500, price: $(99300) },
    'M340i xDrive': { ...B58, power: 285, torque: 500, drivetrain: 'AWD', fc: 10.3, fh: 6.7, fx: 8.0, acceleration: 4.4, weight: 1695,
      fuelTank: 59, cargo: 480, price: $(119000) },
  },
  'BMW|5 Series|2026': {
    '520i M Sport': { ...B48, power: 153, torque: 330, drivetrain: 'RWD', fc: null, fh: null, fx: 6.7, acceleration: 7.5, weight: 1725,
      fuelTank: 60, cargo: 520, price: $(117400) },
    '540d xDrive': { ...B57, power: 223, torque: 670, drivetrain: 'AWD', fc: 8.5, fh: 5.4, fx: 6.5, acceleration: 5.2, weight: 1905,
      fuelTank: 60, cargo: 520, price: $(137400) },
  },
  'BMW|X3|2026': {
    '20 xDrive': { ...B48, power: 140, torque: 310, drivetrain: 'AWD', fc: 9.1, fh: 6.6, fx: 7.5, acceleration: 8.5, weight: 1855,
      towing: 2200, fuelTank: 65, cargo: 570, price: $(88100) },
    '30e xDrive': { ...B48, engine: '2.0L I4 Turbo PHEV (B48)', fuelType: 'plug-in hybrid', power: 220, torque: null, drivetrain: 'AWD',
      fc: null, fh: null, fx: 1.6, battery: '22.1 kWh', acceleration: 6.2, weight: 2065, towing: 2000, fuelTank: 50, cargo: 460, price: $(107700) },
    '40d xDrive': { ...B57, power: 210, torque: 650, drivetrain: 'AWD', fc: 8.3, fh: 5.5, fx: 6.6, acceleration: 5.4, weight: 1975,
      towing: 2200, cargo: 570, price: $(112700) },
    'M50 xDrive': { ...B58, power: 293, torque: 540, drivetrain: 'AWD', fc: 9.9, fh: 7.2, fx: 8.2, acceleration: 4.6, topSpeed: 250,
      weight: 1980, towing: 2200, cargo: 570, price: $(131400) },
  },
  'BMW|X5|2026': {
    'xDrive30d xLine': { ...B57, power: 210, torque: 650, drivetrain: 'AWD', fc: 9.5, fh: 6.9, fx: 7.8, acceleration: 6.1, weight: 2220,
      towing: 2700, fuelTank: 80, cargo: 650, price: $(139900) },
    'xDrive30d M Sport': { ...B57, power: 210, torque: 650, drivetrain: 'AWD', fc: 9.5, fh: 6.9, fx: 7.8, acceleration: 6.1, weight: 2295,
      towing: 2700, fuelTank: 80, cargo: 650, price: $(139900) },
    'Shadow Edition': { ...B57, power: 210, torque: 650, drivetrain: 'AWD', fc: 9.5, fh: 6.9, fx: 7.8, acceleration: 6.1, weight: 2220,
      towing: 2700, fuelTank: 80, cargo: 650, price: $(146900) },
    'xDrive40i M Sport': { ...B58, power: 280, torque: 520, drivetrain: 'AWD', fc: 10.9, fh: 8.4, fx: 9.3, acceleration: 5.4, weight: 2165,
      towing: 2700, price: $(143900) },
    '40d xDrive M Sport (G65)': { ...B57, power: 230, torque: 670, drivetrain: 'AWD', fc: null, fh: null, fx: null, acceleration: 6.1,
      weight: 2355, towing: 3500, price: $(143900) },
    '40 xDrive M Sport (G65)': { ...B58, power: 294, torque: 540, drivetrain: 'AWD', fc: null, fh: null, fx: null, acceleration: 5.3,
      weight: 2290, towing: 3500, price: $(145900) },
    'xDrive50e M Sport': { ...B58, engine: '3.0L I6 Turbo PHEV (B58)', fuelType: 'plug-in hybrid', power: 360, torque: null, drivetrain: 'AWD',
      fc: null, fh: null, fx: 1.9, battery: '29.5 kWh', range: 94, acceleration: 4.8, weight: 2420, towing: 2700, fuelTank: 69, price: $(154900) },
    'M60i': { ...b, engine: '4.4L V8 Twin-Turbo Petrol (S68)', displacement: 4395, cylinders: 8, aspiration: 'Twin-Turbo', fuelType: 'petrol',
      power: 390, torque: 750, drivetrain: 'AWD', fc: 15.8, fh: 9.6, fx: 11.9, acceleration: 4.3, topSpeed: 250, weight: 2345,
      towing: 2700, fuelTank: 83, price: $(177900) },
  },
});
