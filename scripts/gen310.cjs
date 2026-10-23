'use strict';
// supplement310.json — 2026-10-23: 2024 (AU) Toyota RAV4 (XA50: 2.0 petrol,
// 2.5 hybrid, Edge 2.5 petrol AWD), Ford Ranger (P703 MY24, dual-cab 4x4
// pick-ups) and Toyota HiLux (dual-cab 4x4 pick-ups, plus the SR5 Extra Cab
// auto). Specs + price when new: Carsales 2024 variant pages. RAV4 hybrid
// power = Toyota system output; system torque null.
// Also fixes 2025 HiLux "SR5 Auto 4x4": that Carsales row is the Extra Cab
// (4 seats), so it is renamed "SR5 Extra Cab Auto 4x4".
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const MAKES = require('../src/data/makes.json');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };

// RAV4
const RV = { ...B, fuelTank: 55, cargo: 542 };
const RH = { ...RV, engine: '2.5L I4 Hybrid', displacement: 2487, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  torque: null, transmission: 'CVT' };
const R2 = { ...RH, power: 160, drivetrain: 'FWD', fc: 4.8, fh: 4.7, fx: 4.7, towing: 480 };
const R4 = { ...RH, power: 163, drivetrain: 'AWD', fc: 5.0, fh: 4.8, fx: 4.8, towing: 1500 };
const RP = { ...RV, engine: '2.0L I4 Petrol', displacement: 1987, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 127, torque: 203, transmission: 'CVT (10-step)', drivetrain: 'FWD', fc: 7.1, fh: 5.4, fx: 6.0, towing: 800 };

// Ranger
const RB = { fuelType: 'diesel', drivetrain: '4WD', transmission: '10-speed automatic', seats: 5, cargo: null, acceleration: null,
  topSpeed: null, towing: 3500, fuelTank: 80 };
const BIT = { ...RB, engine: '2.0L I4 Bi-Turbo Diesel', displacement: 1996, cylinders: 4, aspiration: 'Twin-Turbo', power: 154,
  torque: 500, fc: 7.7, fh: 6.9, fx: 7.2 };
const V6 = { ...RB, engine: '3.0L V6 Turbo Diesel', displacement: 2993, cylinders: 6, aspiration: 'Turbo', power: 184, torque: 600,
  fc: 10.0, fh: 7.5, fx: 8.4 };
const WTX = { ...BIT, power: 150, fc: 9.2, fh: 8.4, fx: 8.7, groundClearance: 261 };

// HiLux
const HL = { ...B, engine: '2.8L I4 Turbo Diesel', displacement: 2755, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 150, drivetrain: '4WD', towing: 3500, fuelTank: 80 };
const HM = { ...HL, torque: 420, transmission: '6-speed manual' };
const HA = { ...HL, torque: 500, transmission: '6-speed automatic', fc: 9.4, fh: 7.0, fx: 7.9 };
const H48 = { ...HA, engine: '2.8L I4 Turbo Diesel (48V MHEV)' };
const WM = { ...HL, engine: '2.4L I4 Turbo Diesel', displacement: 2393, power: 110, torque: 400 };

// 2025 HiLux carried over with the Extra Cab rename
const hilux25 = {};
for (const t of MAKES.Toyota.HiLux['2025']) {
  const row = existing('Toyota', 'HiLux', 2025, t);
  if (t === 'SR5 Auto 4x4') hilux25['SR5 Extra Cab Auto 4x4'] = { ...row, seats: 4 };
  else hilux25[t] = row;
}

writeLineups(310, {
  'Toyota|RAV4|2024': {
    'GX 2.0 2WD': { ...RP, weight: 1550, price: $(39760) },
    'GXL 2.0 2WD': { ...RP, weight: 1590, price: $(43310) },
    'Cruiser 2.0 2WD': { ...RP, weight: 1625, price: $(48910) },
    'GX Hybrid 2WD': { ...R2, weight: 1650, price: $(42260) },
    'GX Hybrid eFour': { ...R4, weight: 1705, price: $(45260) },
    'GXL Hybrid 2WD': { ...R2, weight: 1675, price: $(45810) },
    'GXL Hybrid eFour': { ...R4, weight: 1735, price: $(48810) },
    'XSE Hybrid 2WD': { ...R2, weight: 1690, price: $(48910) },
    'XSE Hybrid eFour': { ...R4, weight: 1745, price: $(51910) },
    'Cruiser Hybrid 2WD': { ...R2, weight: 1700, price: $(51410) },
    'Cruiser Hybrid eFour': { ...R4, weight: 1755, price: $(54410) },
    'Edge 2.5 AWD': { ...RV, engine: '2.5L I4 Petrol', displacement: 2487, cylinders: 4, aspiration: 'Naturally Aspirated',
      fuelType: 'petrol', power: 152, torque: 243, transmission: '8-speed automatic', drivetrain: 'AWD', fc: 8.9, fh: 5.9, fx: 7.0,
      weight: 1705, towing: 1500, groundClearance: 195, price: $(56230) },
    'Edge Hybrid eFour': { ...R4, weight: 1760, groundClearance: 195, price: $(58360) },
  },
  'Ford|Ranger|2024': {
    'P703 XL': { ...RB, engine: '2.0L I4 Turbo Diesel', displacement: 1996, cylinders: 4, aspiration: 'Turbo', power: 125, torque: 405,
      transmission: '6-speed automatic', fc: 8.7, fh: 7.0, fx: 7.6, weight: 2182, payload: 1008, price: $(50880) },
    'P703 XL Bi-Turbo': { ...BIT, weight: 2204, payload: 1046, price: $(54380) },
    'P703 XLS': { ...BIT, weight: 2247, payload: 983, price: $(55430) },
    'P703 Black Edition': { ...BIT, weight: 2256, payload: 994, price: $(56680) },
    'P703 XLT': { ...BIT, weight: 2250, payload: 980, price: $(63390) },
    'P703 XLT V6': { ...V6, weight: 2306, payload: 974, price: $(67590) },
    'P703 Sport': { ...BIT, weight: 2267, payload: 963, price: $(65890) },
    'P703 Sport V6': { ...V6, weight: 2322, payload: 958, price: $(70090) },
    'P703 Wildtrak': { ...BIT, weight: 2329, payload: 901, price: $(69390) },
    'P703 Wildtrak V6': { ...V6, weight: 2384, payload: 966, price: $(73590) },
    'P703 Tremor': { ...WTX, weight: 2419, payload: 901, price: $(69690) },
    'P703 Wildtrak X': { ...WTX, weight: 2432, payload: 918, price: $(75990) },
    'P703 Platinum': { ...V6, weight: 2388, payload: 912, price: $(79390) },
    'P703 Raptor': { ...RB, fuelType: 'petrol', engine: '3.0L V6 Twin-Turbo Petrol (EcoBoost)', displacement: 2956, cylinders: 6,
      aspiration: 'Twin-Turbo', power: 292, torque: 583, fc: 14.0, fh: 10.0, fx: 11.5, weight: 2475, payload: 655, towing: 2500,
      groundClearance: 272, price: $(89190) },
  },
  'Toyota|HiLux|2024': {
    'Workmate 2.4 Manual 4x4': { ...WM, transmission: '6-speed manual', fc: 8.5, fh: 6.4, fx: 7.1, weight: 2100, payload: 1010,
      price: $(48420) },
    'Workmate 2.4 Auto 4x4': { ...WM, transmission: '6-speed automatic', fc: 9.3, fh: 6.9, fx: 7.8, weight: 2110, payload: 1000,
      price: $(50420) },
    'SR Manual 4x4': { ...HM, fc: 8.8, fh: 6.7, fx: 7.4, weight: 2100, payload: 1010, price: $(52640) },
    'SR Auto 4x4': { ...HA, weight: 2110, payload: 1000, price: $(55190) },
    'SR5 Manual 4x4': { ...HM, fc: 9.3, fh: 6.7, fx: 7.7, weight: 2093, payload: 1005, groundClearance: 216, price: $(60670) },
    'SR5 Extra Cab Auto 4x4': { ...HA, seats: 4, weight: 2085, payload: 1075, groundClearance: 216, price: $(60250) },
    'SR5 48V Auto 4x4': { ...H48, fc: 8.0, fh: 6.7, fx: 7.2, weight: 2110, payload: 1000, price: $(63260) },
    'Rogue 48V': { ...H48, fc: 8.0, fh: 7.7, fx: 7.8, weight: 2286, payload: 764, groundClearance: 265, price: $(71530) },
    'GR Sport': { ...HA, power: 165, torque: 550, fc: 9.2, fh: 7.5, fx: 8.1, weight: 2270, payload: 780, groundClearance: 265,
      price: $(74310) },
  },
  'Toyota|HiLux|2025': hilux25,
});
