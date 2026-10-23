'use strict';
// supplement320.json — 2026-10-23: 2024 (AU) Mazda BT-50 (TF dual-cab utes),
// Nissan Navara (D23 MY24 dual-cab 4x4 utes, manual + auto) and Nissan Patrol
// (Y62 MY24). Replaces stale rows (guessed 0-100s, "ST/ST-L" Patrol grades
// not sold in 2024). Specs + price when new: Carsales 2024 variant pages.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const BT = { engine: '3.0L I4 Turbo Diesel', displacement: 2999, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel', power: 140,
  torque: 450, transmission: '6-speed automatic', drivetrain: '4WD', fc: 9.8, fh: 6.9, fx: 8.0, acceleration: null, topSpeed: null,
  cargo: null, seats: 5, towing: 3500, fuelTank: 76 };
const BT2 = { ...BT, drivetrain: 'RWD', fc: 9.5, fh: 6.7, fx: 7.7 };
const NV = { engine: '2.3L I4 Twin-Turbo Diesel (YS23DDTT)', displacement: 2298, cylinders: 4, aspiration: 'Twin-Turbo',
  fuelType: 'diesel', power: 140, torque: 450, drivetrain: '4WD', acceleration: null, topSpeed: null, cargo: null, seats: 5, towing: 3500,
  fuelTank: 80 };
const NVM = { ...NV, transmission: '6-speed manual', fc: 8.5, fh: 6.6, fx: 7.3 };
const NVA = { ...NV, transmission: '7-speed automatic', fc: 9.9, fh: 6.7, fx: 7.9 };
const NVPM = { ...NVM, fc: 8.6, fh: 6.9, fx: 7.5 };
const NVPA = { ...NVA, fc: 10.1, fh: 7.0, fx: 8.1 };
const PT = { engine: '5.6L V8 Petrol', displacement: 5552, cylinders: 8, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 298, torque: 560, transmission: '7-speed automatic', drivetrain: '4WD', fc: 20.2, fh: 11.0, fx: 14.4, acceleration: null,
  topSpeed: null, cargo: null, towing: 3500, fuelTank: 140 };

writeLineups(320, {
  'Mazda|BT-50|2024': {
    'XT 4x2': { ...BT2, weight: 1929, payload: 1071, price: $(48210) },
    'XTR 4x2': { ...BT2, weight: 1945, payload: 1055, price: $(51540) },
    'XT 4x4': { ...BT, weight: 2015, payload: 1085, price: $(56220) },
    'GT': { ...BT, weight: 2035, payload: 1065, price: $(62660) },
    'XTR 4x4': { ...BT, weight: 2098, payload: 1002, price: $(62750) },
    'SP': { ...BT, weight: 2208, payload: 892, price: $(68690) },
    'Thunder': { ...BT, weight: 2213, payload: 887, groundClearance: 240, price: $(74095) },
  },
  'Nissan|Navara|2024': {
    'SL Manual': { ...NVM, weight: 2024, payload: 1126, price: $(48228) },
    'SL': { ...NVA, weight: 2033, payload: 1117, price: $(50728) },
    'ST Manual': { ...NVM, weight: 2053, payload: 1097, price: $(53333) },
    'ST': { ...NVA, weight: 2062, payload: 1088, price: $(55833) },
    'ST-X Manual': { ...NVM, weight: 2134, payload: 1016, price: $(56823) },
    'ST-X': { ...NVA, weight: 2142, payload: 1008, price: $(59323) },
    'Black Edition': { ...NVA, weight: 2062, payload: 1088, price: $(60833) },
    'PRO-4X Manual': { ...NVPM, weight: 2137, payload: 1013, price: $(59783) },
    'PRO-4X': { ...NVPA, weight: 2146, payload: 1004, price: $(62283) },
    'PRO-4X Warrior Manual': { ...NVPM, weight: 2289, payload: 961, groundClearance: 260, price: $(69143) },
    'PRO-4X Warrior': { ...NVPA, weight: 2298, payload: 952, groundClearance: 260, price: $(71643) },
  },
  'Nissan|Patrol|2024': {
    'Ti': { ...PT, weight: 2812, seats: 8, groundClearance: 272, price: $(88900) },
    'Ti-L': { ...PT, weight: 2861, seats: 7, price: $(101960) },
    'Warrior': { ...PT, weight: 2884, seats: 8, groundClearance: 323, price: $(105520) },
  },
});
