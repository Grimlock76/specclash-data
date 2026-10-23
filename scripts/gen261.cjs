'use strict';
// supplement261.json — 2026-10-23: 2026 (AU) BYD Seal + Sealion 7, MG ZS,
// Subaru Forester, Kia Carnival. Specs + "price when new": Carsales variant
// pages. CarsGuide 2026 MSRP for MG ZS petrol grades (Carsales showed two
// grades at one price) and the Carnival GT-Line diesel (page wouldn't load).
// Nulls: system torque on Subaru/Kia/MG hybrids and BYD Seal Performance (not
// published); MG ZS Hybrid+ city/highway (Carsales lists an impossible 0.9 city).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', engine: o.awd ? 'Dual Motor Electric' : 'Single Motor Electric',
  transmission: '1-speed automatic', drivetrain: o.awd ? 'AWD' : 'RWD', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, topSpeed: null, seats: 5, ...o, awd: undefined });
const ZS = { engine: '1.5L I4 Petrol', displacement: 1498, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  transmission: '8-speed automatic', drivetrain: 'FWD', seats: 5, towing: 500, fuelTank: 55, cargo: 443, acceleration: null, topSpeed: null };
const ZST = { ...ZS, engine: '1.5L I4 Turbo Petrol', aspiration: 'Turbo', power: 125, torque: 275, fc: 9.4, fh: 5.5, fx: 6.9, weight: 1390 };
const ZSH = { ...ZS, engine: '1.5L I4 Hybrid', power: 158, torque: null, transmission: '3-speed automatic', fuelType: 'hybrid',
  fc: null, fh: null, fx: 4.7, acceleration: 8.7 };
const FOR = { engine: '2.5L H4 Petrol (Boxer)', displacement: 2498, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  transmission: 'CVT', drivetrain: 'AWD', power: 136, torque: 247, fc: 10.1, fh: 6.7, fx: 7.9, seats: 5, towing: 1800, fuelTank: 63,
  groundClearance: 220, cargo: 496, acceleration: null, topSpeed: null };
const FORH = { ...FOR, engine: '2.5L H4 Hybrid (Boxer)', fuelType: 'hybrid', power: 145, torque: null, fc: 6.4, fh: 6.0, fx: 6.2,
  towing: 1200, cargo: 484 };
const CAR = { engine: '2.2L I4 Turbo Diesel', displacement: 2151, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  transmission: '8-speed automatic', drivetrain: 'FWD', power: 148, torque: 440, fc: 7.8, fh: 5.7, fx: 6.5, weight: 2112, seats: 8,
  towing: 2000, fuelTank: 72, cargo: 627, acceleration: null, topSpeed: null };
const CARH = { ...CAR, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, aspiration: 'Turbo', fuelType: 'hybrid',
  transmission: '6-speed automatic', power: 180, torque: null, fc: 4.2, fh: 6.7, fx: 5.8, weight: 2334, towing: 1000 };
writeLineups(261, {
  'BYD|Seal|2026': {
    'Dynamic': ev({ power: 150, torque: 310, battery: '61.5 kWh', range: 510, acceleration: 7.6, weight: 1922, towing: 750, cargo: 400, price: $(46990) }),
    'Premium': ev({ power: 230, torque: 360, battery: '82.5 kWh', range: 650, acceleration: 5.9, weight: 2055, towing: 750, cargo: 400, price: $(52990) }),
    'Performance': ev({ awd: true, power: 390, torque: null, battery: '82.5 kWh', range: 580, acceleration: 3.8, weight: 2185, towing: 1500, cargo: 400, price: $(61990) }),
  },
  'BYD|Sealion 7|2026': {
    'Premium': ev({ power: 230, torque: 380, battery: '82.6 kWh', range: 567, acceleration: 6.7, weight: 2225, towing: 750, cargo: 500, price: $(54990) }),
    'Performance': ev({ awd: true, power: 390, torque: 690, battery: '82.6 kWh', range: 542, acceleration: 4.5, weight: 2340, towing: 1500, cargo: 500, price: $(63990) }),
  },
  'MG|ZS|2026': {
    'Vibe': { ...ZS, power: 81, torque: 140, fc: 8.5, fh: 5.7, fx: 6.7, weight: 1295, price: $(23990) },
    'Excite Turbo': { ...ZST, price: $(24990) },
    'Vibe Turbo': { ...ZST, price: $(25990) },
    'Essence Turbo': { ...ZST, price: $(29990) },
    'Excite Hybrid+': { ...ZSH, weight: 1410, price: $(30990) },
    'Essence Hybrid+': { ...ZSH, weight: 1420, price: $(34990) },
  },
  'Subaru|Forester|2026': {
    '2.5i': { ...FOR, weight: 1622, price: $(43490) },
    'Premium': { ...FOR, weight: 1632, price: $(46490) },
    'Sport': { ...FOR, weight: 1651, price: $(48490) },
    'Touring': { ...FOR, weight: 1662, price: $(50990) },
    'Hybrid': { ...FORH, weight: 1717, price: $(46490) },
    'Hybrid Sport': { ...FORH, weight: 1763, price: $(54990) },
    'Hybrid Touring': { ...FORH, weight: 1766, price: $(55990) },
  },
  'Kia|Carnival|2026': {
    'S': { ...CAR, price: $(54560) },
    'Sport': { ...CAR, price: $(60200) },
    'Sport+': { ...CAR, price: $(66530) },
    'GT-Line Lite': { ...CAR, price: $(70500) },
    'GT-Line': { ...CAR, weight: null, price: $(75030) },
    'S HEV': { ...CARH, price: $(56310) },
    'Sport+ HEV': { ...CARH, price: $(68540) },
    'GT-Line HEV': { ...CARH, price: $(76840) },
  },
});
