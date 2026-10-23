'use strict';
// supplement305.json — 2026-10-23: 2025 (AU) Volvo XC40, XC60, XC90 and BMW
// 3 Series (G20 LCI) / 5 Series (G60). Specs + price when new: Carsales 2025
// variant pages. PHEV system torque null; tare-only weights null. BMW top
// speed 250 km/h (limited) as listed on Carsales.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: 180, acceleration: null, cargo: null };
const I4 = { ...B, engine: '2.0L I4 Turbo Petrol (MHEV)', displacement: 1969, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  transmission: '8-speed automatic' };
const XC40 = { ...I4, power: 145, torque: 300, drivetrain: 'FWD', seats: 5, towing: 1800, fuelTank: 54, cargo: 460 };
const B5 = { ...I4, power: 183, torque: 350, drivetrain: 'AWD', towing: 2400, fuelTank: 71 };
const T8 = { ...I4, engine: '2.0L I4 Turbo PHEV', fuelType: 'plug-in hybrid', power: 340, torque: null, drivetrain: 'AWD',
  fc: null, fh: null, battery: '18.8 kWh' };
const XC60B5 = { ...B5, fc: 9.7, fh: 6.4, fx: 7.6, acceleration: 6.9, seats: 5, cargo: 483 };
const XC60T8 = { ...T8, fx: 1.6, range: 81, acceleration: 4.8, seats: 5, towing: 2250 };
const XC90B5 = { ...B5, fc: null, fh: null, fx: 8.1, acceleration: 7.7, seats: 7 };

const b = { seats: 5, topSpeed: 250, transmission: '8-speed automatic' };
const B48 = { ...b, engine: '2.0L I4 Turbo Petrol (B48)', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol' };
const B58 = { ...b, engine: '3.0L I6 Turbo Petrol (B58)', displacement: 2998, cylinders: 6, aspiration: 'Turbo', fuelType: 'petrol' };
const B57 = { ...b, engine: '3.0L I6 Turbo Diesel (B57)', displacement: 2993, cylinders: 6, aspiration: 'Turbo', fuelType: 'diesel' };

writeLineups(305, {
  'Volvo|XC40|2025': {
    'Plus B4': { ...XC40, fc: 8.8, fh: 5.8, fx: 6.9, acceleration: 8.4, price: $(54990) },
    'Ultra B4 Bright': { ...XC40, drivetrain: 'AWD', fc: 9.1, fh: 6.0, fx: 7.1, acceleration: 8.5, weight: 1613, price: $(61990) },
  },
  'Volvo|XC60|2025': {
    'Plus B5 Bright': { ...XC60B5, price: $(73990) },
    'Ultra B5 Bright': { ...XC60B5, price: $(80090) },
    'Plus T8 PHEV': { ...XC60T8, price: $(92390) },
    'Ultra T8 PHEV': { ...XC60T8, price: $(101390) },
  },
  'Volvo|XC90|2025': {
    'Plus B5 Bright': { ...XC90B5, weight: 2005, price: $(97990) },
    'Ultra B5 Bright': { ...XC90B5, price: $(104990) },
    'Ultra T8 PHEV': { ...T8, fx: 1.8, range: 77, acceleration: 5.3, weight: 2222, seats: 7, towing: 2350, price: $(130990) },
  },
  'BMW|3 Series|2025': {
    '330i M Sport': { ...B48, power: 190, torque: 400, drivetrain: 'RWD', fc: 8.0, fh: 5.7, fx: 6.5, acceleration: 5.8, weight: 1525,
      fuelTank: 59, cargo: 480, price: $(92900) },
    'M340i xDrive': { ...B58, power: 285, torque: 500, drivetrain: 'AWD', fc: 10.3, fh: 6.7, fx: 8.0, acceleration: 4.4, weight: 1695,
      fuelTank: 59, cargo: 480, price: $(117600) },
  },
  'BMW|5 Series|2025': {
    '520i M Sport': { ...B48, power: 153, torque: 330, drivetrain: 'RWD', fc: null, fh: null, fx: 6.7, acceleration: 7.5, weight: 1725,
      fuelTank: 60, cargo: 520, price: $(114900) },
    '540d xDrive': { ...B57, power: 223, torque: 670, drivetrain: 'AWD', fc: 8.5, fh: 5.4, fx: 6.5, acceleration: 5.2, weight: 1905,
      fuelTank: 60, cargo: 520, price: $(136900) },
  },
});
