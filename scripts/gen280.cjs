'use strict';
// supplement280.json — 2026-10-23: 2026 (AU) Jeep Wrangler (JL), RAM 1500
// (DT Hurricane), INEOS Grenadier wagon. Specs + price when new: Carsales
// variant pages. RAM payloads where the spec table and overview disagree
// (Express Black Edition 1027 vs 879, Laramie Night 799 vs 879) -> null.
// Grenadier Trialmaster/Fieldmaster petrol pages carry no specs -> diesel only.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, transmission: '8-speed automatic', drivetrain: '4WD' };
const JL = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1995, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 200, torque: 400, fc: 12.1, fh: 9.0, fx: 10.2, seats: 5, fuelTank: 81 };
const RAM = { ...B, engine: '3.0L I6 Twin-Turbo Petrol', displacement: 2993, cylinders: 6, aspiration: 'Twin-Turbo', fuelType: 'petrol',
  power: 313, torque: 635, fc: null, fh: null, fx: 10.7, seats: 5, towing: 4500, fuelTank: 98 };
const GD = { ...B, engine: '3.0L I6 Twin-Turbo Diesel', displacement: 2993, cylinders: 6, aspiration: 'Twin-Turbo', fuelType: 'diesel',
  power: 183, torque: 550, fc: 13.0, fh: 9.0, fx: 10.5, acceleration: 9.8, topSpeed: 160, weight: 2718, seats: 5, towing: 3500,
  fuelTank: 90 };

writeLineups(280, {
  'Jeep|Wrangler|2026': {
    'Unlimited Rewind': { ...JL, fc: 11.8, fh: 7.9, fx: 9.3, weight: 2087, towing: 2495, groundClearance: 255, price: $(73990) },
    'Rubicon 2-door': { ...JL, seats: 4, towing: 1497, groundClearance: 257, price: $(81990) },
    'Unlimited Rubicon': { ...JL, acceleration: 7.4, towing: 2495, groundClearance: 255, price: $(84990) },
  },
  'RAM|1500|2026': {
    'Express Black Edition Hurricane SO': { ...RAM, weight: 2478, groundClearance: 217, price: $(109950) },
    'Rebel Hurricane SO': { ...RAM, weight: 2612, payload: 893, groundClearance: 240, price: $(141950) },
    'Laramie Sport Hurricane SO RamBox': { ...RAM, weight: 2642, payload: 879, groundClearance: 217, price: $(141950) },
    'Laramie Night Hurricane SO RamBox': { ...RAM, weight: 2706, groundClearance: 217, price: $(141950) },
    'Limited Hurricane HO RamBox': { ...RAM, power: 403, torque: 707, fx: 11.8, weight: 2722, towing: 4200, payload: 783,
      price: $(159950) },
  },
  'INEOS|Grenadier|2026': {
    'Station Wagon Petrol': { ...GD, engine: '3.0L I6 Turbo Petrol', displacement: 2998, aspiration: 'Turbo', fuelType: 'petrol',
      power: 210, torque: 450, fc: 15.5, fh: 11.0, fx: 12.6, acceleration: 8.8, weight: 2643, payload: 907, price: $(107000) },
    'Station Wagon Diesel': { ...GD, payload: 833, groundClearance: 264, price: $(107000) },
    'Trialmaster Diesel': { ...GD, price: $(120000) },
    'Fieldmaster Diesel': { ...GD, price: $(120000) },
  },
});
