'use strict';
// supplement281.json — 2026-10-23: 2026 (AU) Subaru WRX (VB), Toyota GR86,
// Lexus LBX (incl. Morizo RR), Mazda CX-80, Ford Mustang Mach-E. Specs:
// Carsales variant pages. Price: Carsales price when new, else CarsGuide 2026
// MSRP (GR86, CX-80, LBX Morizo RR). Mach-E GT (MY26 update) 434 kW per
// Carsales, 955 Nm per CarsGuide's 2026 GT review (Carsales lists no torque).
// Hybrid / PHEV system torque null. WRX tS Spec B / Club Spec Evo manual fuel
// = spec table (10.4; overview text says 9.9).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const WRX = { ...B, engine: '2.4L H4 Turbo Petrol (Boxer)', displacement: 2387, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 202, torque: 350, drivetrain: 'AWD', fuelTank: 63, cargo: 414 };
const WM = { ...WRX, transmission: '6-speed manual', fc: 13.8, fh: 7.7, fx: 9.9, acceleration: 6.0 };
const WA = { ...WRX, transmission: 'CVT', fc: 11.2, fh: 7.0, fx: 8.5, acceleration: 6.1 };
const WSB = { ...WM, fc: 14.2, fh: 8.2, fx: 10.4, weight: 1562 };
const GR = { ...B, engine: '2.4L H4 Petrol (Boxer)', displacement: 2387, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'petrol', power: 174, torque: 250, drivetrain: 'RWD', topSpeed: 226, seats: 4, fuelTank: 50, cargo: 237 };
const GRM = { ...GR, transmission: '6-speed manual', acceleration: 6.3 };
const LBX = { ...B, engine: '1.5L I3 Hybrid', displacement: 1490, cylinders: 3, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  power: 100, torque: null, transmission: 'CVT', drivetrain: 'FWD', fc: 3.6, fh: 4.0, fx: 3.8, acceleration: 9.2, weight: 1330,
  fuelTank: 36, cargo: 402 };
const CX = { ...B, transmission: '8-speed automatic', drivetrain: 'AWD', seats: 7, towing: 2500, fuelTank: 74, cargo: 258 };
const G40 = { ...CX, engine: '3.3L I6 Turbo Petrol (MHEV)', displacement: 3283, cylinders: 6, aspiration: 'Turbo', fuelType: 'petrol',
  power: 209, torque: 450, fc: 11.7, fh: 6.5, fx: 8.4 };
const D50 = { ...CX, engine: '3.3L I6 Turbo Diesel (MHEV)', displacement: 3283, cylinders: 6, aspiration: 'Turbo', fuelType: 'diesel',
  power: 187, torque: 550, fc: 5.6, fh: 5.1, fx: 5.2 };
const P50 = { ...CX, engine: '2.5L I4 PHEV', displacement: 2488, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'plug-in hybrid', power: 241, torque: null, fc: null, fh: null, fx: 2.7, battery: '17.8 kWh', range: 65, fuelTank: null };
const ME = { ...B, displacement: null, cylinders: null, aspiration: null, fuelType: 'electric', transmission: '1-speed automatic',
  fc: null, fh: null, fx: null };

writeLineups(281, {
  'Subaru|WRX|2026': {
    'WRX Manual': { ...WM, weight: 1524, price: $(48890) },
    'RS Manual': { ...WM, weight: 1561, price: $(54190) },
    'tS': { ...WA, weight: 1631, price: $(62190) },
    'tS Spec B Manual': { ...WSB, price: $(62190) },
    'Club Spec Evo Manual': { ...WSB, price: $(63190) },
    'GT Sportswagon': { ...WA, weight: 1655, cargo: 492, price: $(58490) },
  },
  'Toyota|GR86|2026': {
    'GT Manual': { ...GRM, fc: 13.2, fh: 7.2, fx: 9.4, weight: 1290, price: $(46340) },
    'GT Auto': { ...GR, transmission: '6-speed automatic', fc: 12.7, fh: 6.3, fx: 8.7, acceleration: 6.8, weight: 1309, price: $(46340) },
    'GTS Manual': { ...GRM, fc: 13.3, fh: 7.3, fx: 9.5, weight: 1299, price: $(48490) },
  },
  'Lexus|LBX|2026': {
    'Luxury 2WD': { ...LBX, price: $(47320) },
    'Sports Luxury 2WD': { ...LBX, price: $(52760) },
    'Morizo RR': { ...B, engine: '1.6L I3 Turbo Petrol', displacement: 1618, cylinders: 3, aspiration: 'Turbo', fuelType: 'petrol',
      power: 206, torque: 390, transmission: '8-speed automatic', drivetrain: 'AWD', fc: 13.4, fh: 6.8, fx: 9.2, acceleration: 5.2,
      topSpeed: 230, weight: 1485, fuelTank: 50, price: $(76490) },
  },
  'Mazda|CX-80|2026': {
    'G40e Pure': { ...G40, weight: 2089, price: $(56100) },
    'G40e GT': { ...G40, weight: 2114, price: $(70100) },
    'D50e Pure': { ...D50, weight: 2099, price: $(56100) },
    'D50e Azami': { ...D50, weight: 2136, price: $(75300) },
    'P50e Touring': { ...P50, weight: 2237, price: $(68100) },
    'P50e Azami': { ...P50, weight: 2267, price: $(80300) },
  },
  'Ford|Mustang Mach-E|2026': {
    'Select': { ...ME, engine: 'Single-Motor Electric', drivetrain: 'RWD', power: 212, torque: 525, battery: '73 kWh', range: 470,
      acceleration: 6.2, weight: 2151, price: $(65990) },
    'Premium': { ...ME, engine: 'Single-Motor Electric', drivetrain: 'RWD', power: 212, torque: 525, battery: '88 kWh', range: 615,
      acceleration: 6.1, weight: 2101, price: $(80490) },
    'GT': { ...ME, engine: 'Dual-Motor Electric', drivetrain: 'AWD', power: 434, torque: 955, battery: '91 kWh', range: 515,
      acceleration: 3.8, weight: 2307, price: $(98405) },
  },
});
