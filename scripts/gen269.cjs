'use strict';
// supplement269.json — 2026-10-23: 2026 (AU) Land Rover Defender (MY27),
// Range Rover Sport, Range Rover, Discovery. Specs: Carsales variant pages
// (Redbook). Price when new: CarsGuide 2026 MSRP lists. PHEV system torque
// null (Carsales lists none); EV550 range is Carsales' manufacturer figure.
// RRS EV550 has no CarsGuide MSRP yet -> price null. Discovery Landmark /
// Gemini share the D350 drivetrain + identical Carsales figures of the other
// three D350 grades.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, transmission: '8-speed automatic', drivetrain: 'AWD' };
const D6 = { ...B, engine: '3.0L I6 Turbo Diesel (MHEV)', displacement: 2997, cylinders: 6, aspiration: 'Turbo', fuelType: 'diesel' };
const V8S = { ...B, engine: '5.0L V8 Supercharged Petrol', displacement: 4999, cylinders: 8, aspiration: 'Supercharged', fuelType: 'petrol',
  fc: 17.0, fh: 10.2, fx: 12.7 };
const V8T = { ...B, engine: '4.4L V8 Twin-Turbo Petrol (MHEV)', displacement: 4395, cylinders: 8, aspiration: 'Twin-Turbo', fuelType: 'petrol' };
const EV = { ...B, engine: 'Dual-Motor Electric', displacement: null, cylinders: null, aspiration: null, fuelType: 'electric',
  transmission: '1-speed automatic', power: 405, torque: null, fc: null, fh: null, fx: null, battery: '118.5 kWh', range: 535,
  acceleration: 4.5, topSpeed: 200, towing: 2500, seats: 5 };
const P6 = { ...B, engine: '3.0L I6 Turbo PHEV', displacement: 2997, cylinders: 6, aspiration: 'Turbo', fuelType: 'plug-in hybrid',
  power: 338, torque: null, fc: null, fh: null, battery: '38.2 kWh', topSpeed: 225, seats: 5 };

// Defender
const DEF_D = { ...D6, fc: 10.4, fh: 6.9, fx: 8.1, towing: 3500, seats: 5 };
const DEF_D250 = { ...DEF_D, power: 183, torque: 570 };
const DEF_D350 = { ...DEF_D, power: 258, torque: 700 };

// Range Rover Sport
const RRS_D = { ...D6, fc: 9.6, fh: 6.0, fx: 7.3, seats: 5, towing: 3500, fuelTank: 80 };
// Range Rover
const RR_V8 = { ...V8T, power: 390, torque: 750, fc: 16.0, fh: 8.6, fx: 11.3, seats: 5, towing: 3500 };
// Discovery
const DISCO = { ...D6, power: 258, torque: 700, drivetrain: '4WD', fc: 10.1, fh: 6.5, fx: 7.8, acceleration: 6.3, topSpeed: 209,
  weight: 2367, seats: 7, towing: 3500, fuelTank: 89, groundClearance: 207 };

writeLineups(269, {
  'Land Rover|Defender|2026': {
    '90 D250 S': { ...DEF_D250, acceleration: 8.0, topSpeed: 188, weight: 2241, fuelTank: 89, groundClearance: 216, price: $(102800) },
    '110 D250 S': { ...DEF_D250, acceleration: 8.3, weight: 2393, price: $(105400) },
    '110 D350 X-Dynamic SE': { ...DEF_D350, acceleration: 6.4, topSpeed: 191, weight: 2361, price: $(119300) },
    '110 P300e X-Dynamic SE': { ...B, engine: '2.0L I4 Turbo PHEV', displacement: 1997, cylinders: 4, aspiration: 'Turbo',
      fuelType: 'plug-in hybrid', power: 221, torque: null, fc: null, fh: null, fx: 3.1, battery: '19.2 kWh', acceleration: 7.6,
      topSpeed: 191, weight: 2538, seats: 5, towing: 3000, price: $(136800) },
    '110 P425 X-Dynamic SE': { ...V8S, power: 313, torque: 550, acceleration: 5.8, topSpeed: 191, weight: 2336, seats: 5, towing: 3500,
      price: $(132400) },
    '110 D350 X': { ...DEF_D350, fc: null, fh: null, acceleration: 6.4, weight: 2361, price: $(171800) },
    '130 D350 X-Dynamic SE': { ...DEF_D350, acceleration: 6.8, weight: 2591, seats: 8, towing: 3000, price: $(141600) },
    '130 P500 V8': { ...V8S, power: 368, torque: 610, acceleration: 5.7, topSpeed: 240, weight: 2670, seats: 8, towing: 3000,
      price: $(235600) },
    '110 P635 OCTA': { ...V8T, power: 467, torque: 750, fc: 17.4, fh: 10.6, fx: 13.1, acceleration: 4.0, topSpeed: 250, weight: 2510,
      seats: 5, towing: 3500, groundClearance: 250, price: $(305200) },
  },
  'Land Rover|Range Rover Sport|2026': {
    'D250 Dynamic SE': { ...RRS_D, power: 183, torque: 600, acceleration: 7.7, topSpeed: 206, weight: 2315, price: $(151600) },
    'D350 Dynamic HSE': { ...RRS_D, power: 258, torque: 700, acceleration: 5.8, topSpeed: 234, weight: 2360, price: $(183700) },
    'P460e Dynamic HSE': { ...P6, fx: 1.7, acceleration: 5.5, weight: 2660, towing: 3000, price: $(188500) },
    'P530 Dynamic HSE': { ...RR_V8, acceleration: 4.5, topSpeed: 250, weight: 2505, towing: null, price: $(218900) },
    'EV550 Dynamic HSE': { ...EV, weight: 2695, price: null },
    'P635 SV': { ...V8T, power: 467, torque: 750, fc: 16.9, fh: 9.2, fx: 12.0, acceleration: 3.9, topSpeed: 266, weight: 2485, seats: 5,
      price: $(321000) },
  },
  'Land Rover|Range Rover|2026': {
    'D350 HSE SWB': { ...D6, power: 258, torque: 700, fc: 10.0, fh: 6.1, fx: 7.5, acceleration: 6.0, topSpeed: 234, weight: 2429, seats: 5,
      towing: 3500, fuelTank: 80, price: $(281600) },
    'P460e HSE SWB': { ...P6, fx: 1.6, range: 126, acceleration: 5.7, weight: 2695, price: $(284900) },
    'P530 HSE SWB': { ...RR_V8, acceleration: 4.6, topSpeed: 250, weight: 2510, price: $(317800) },
    'EV550 HSE': { ...EV, weight: 2735, price: $(317700) },
    'P615 SV': { ...RR_V8, power: 452, acceleration: 4.5, topSpeed: 261, weight: 2686, price: $(427000) },
  },
  'Land Rover|Discovery|2026': {
    'D350 S': { ...DISCO, price: $(117000) },
    'D350 Dynamic SE': { ...DISCO, price: $(124929) },
    'D350 Landmark': { ...DISCO, price: $(132000) },
    'D350 Gemini': { ...DISCO, price: $(134763) },
    'D350 Tempest': { ...DISCO, price: $(147000) },
  },
});
