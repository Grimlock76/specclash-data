'use strict';
// supplement277.json — 2026-10-23: 2026 (AU) BMW X1 (U11), 1 Series (F70),
// M2 (G87 LCI), M4 (G82/G83 LCI), i7 (G70). Specs + price when new: Carsales
// variant pages; CarsGuide 2026 MSRP where Carsales shows drive-away only
// (M2 range, i7 60 xDrive). M4 Competition 390 kW per the Carsales spec
// table (overview text still quotes the pre-LCI 375 kW). PHEV/EV system
// torque null where unpublished. X1 xDrive25e electric range not listed ->
// null. iX1 lives under its own model.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, transmission: '7-speed dual-clutch' };
const I3 = { ...B, engine: '1.5L I3 Turbo Petrol', displacement: 1499, cylinders: 3, aspiration: 'Turbo', fuelType: 'petrol',
  drivetrain: 'FWD' };
const I4 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol' };
const S58 = { ...B, engine: '3.0L I6 Twin-Turbo Petrol', displacement: 2993, cylinders: 6, aspiration: 'Twin-Turbo', fuelType: 'petrol',
  transmission: '8-speed automatic', seats: 4, topSpeed: 250 };
const EV = { ...B, engine: 'Dual-Motor Electric', displacement: null, cylinders: null, aspiration: null, fuelType: 'electric',
  transmission: '1-speed automatic', drivetrain: 'AWD', torque: null, fc: null, fh: null, fx: null };
const F70 = { ...I3, power: 115, torque: 230, fc: 8.2, fh: 5.3, fx: 6.4, acceleration: 8.5, topSpeed: 226, weight: 1390, fuelTank: 49,
  cargo: 380 };

writeLineups(277, {
  'BMW|X1|2026': {
    'sDrive18i': { ...I3, power: 115, torque: 230, fc: 8.0, fh: 5.7, fx: 6.5, acceleration: 9.0, topSpeed: 215, weight: 1500,
      towing: 1700, fuelTank: 54, cargo: 476, price: $(63400) },
    'sDrive20i M Sport': { ...I3, engine: '1.5L I3 Turbo Petrol (MHEV)', power: 125, torque: 280, acceleration: 8.3, topSpeed: 216,
      weight: 1550, towing: 1800, fuelTank: 54, cargo: 476, price: null },
    'xDrive20i M Sport': { ...I4, drivetrain: 'AWD', power: 150, torque: 300, fc: 9.3, fh: 6.0, fx: 7.2, acceleration: 7.4, topSpeed: 233,
      weight: 1595, towing: 2000, price: $(76400) },
    'xDrive25e M Sport': { ...I3, engine: '1.5L I3 Turbo PHEV', fuelType: 'plug-in hybrid', drivetrain: 'AWD', power: 180, torque: null,
      battery: '16.3 kWh', acceleration: 6.8, topSpeed: 190, weight: 1855, towing: 1700, fuelTank: 47, price: $(79900) },
    'M35i xDrive': { ...I4, drivetrain: 'AWD', power: 221, torque: 400, fx: 8.3, acceleration: 5.4, topSpeed: 250, weight: 1665,
      price: $(94700) },
  },
  'BMW|1 Series|2026': {
    '118 M Sport': { ...F70, price: $(59500) },
    '118 M Sport Sport Collection': { ...F70, price: $(64900) },
    '120 M Sport': { ...F70, engine: '2.0L I4 Turbo Petrol (MHEV)', displacement: 1998, cylinders: 4, power: 150, torque: 300, fc: 9.0,
      fh: 5.4, fx: 6.7, acceleration: 7.2, topSpeed: 246, weight: 1425, price: $(62500) },
    'M135 xDrive': { ...F70, engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4, drivetrain: 'AWD', power: 233, torque: 400,
      fc: 10.1, fh: 6.4, fx: 7.8, acceleration: 4.9, topSpeed: 250, weight: 1550, price: $(85500) },
  },
  'BMW|M2|2026': {
    'M2 Coupe Auto': { ...S58, drivetrain: 'RWD', power: 353, torque: 600, fx: 9.7, acceleration: 4.0, weight: 1730, price: $(128600) },
    'M2 Coupe Manual': { ...S58, transmission: '6-speed manual', drivetrain: 'RWD', power: 353, torque: 550, fx: 10.1, acceleration: 4.2,
      weight: 1704, price: $(128600) },
    'M2 M xDrive': { ...S58, drivetrain: 'AWD', power: 353, torque: 600, acceleration: 3.7, weight: 1790, price: $(133100) },
    'M2 CS': { ...S58, drivetrain: 'RWD', power: 390, torque: 650, fx: 10.0, acceleration: 3.8, topSpeed: 302, weight: 1700,
      price: $(172900) },
  },
  'BMW|M4|2026': {
    'M4 Coupe Manual': { ...S58, transmission: '6-speed manual', drivetrain: 'RWD', power: 353, torque: 550, fc: 13.7, fh: 8.0, fx: 10.1,
      acceleration: 4.2, weight: 1700, fuelTank: 59, price: $(174600) },
    'M4 Competition xDrive': { ...S58, drivetrain: 'AWD', power: 390, torque: 650, fc: 13.2, fh: 7.5, fx: 9.6, acceleration: 3.5,
      weight: 1775, price: $(192400) },
    'M4 Competition xDrive Convertible': { ...S58, drivetrain: 'AWD', power: 390, torque: 650, fc: 14.3, fh: 8.2, fx: 10.4,
      acceleration: 3.7, weight: 1925, price: $(203800) },
  },
  'BMW|i7|2026': {
    '60 xDrive M Sport': { ...EV, power: 400, battery: '118 kWh', range: 727, acceleration: 4.8, topSpeed: 240, weight: 2695,
      price: $(306900) },
    'M70 xDrive': { ...EV, power: 485, battery: '105.7 kWh', range: 576, acceleration: 3.7, topSpeed: 250, weight: 2695, price: $(344900) },
  },
});
