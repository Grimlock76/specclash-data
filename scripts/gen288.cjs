'use strict';
// supplement288.json — 2026-10-23: 2025 (AU) Ford Ranger (P703 MY25.25) dual-
// cab 4x4 utes. Specs + price when new: Carsales 2025 variant pages. Naming
// follows gen253 (2026): "XLT" = 2.0 bi-turbo, "XLT V6" = 3.0 V6. PHEV torque
// 697 Nm = Ford's system figure, as in gen253. Replaces the stale 2025 list
// (FX4 Max etc.).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const base = { fuelType: 'diesel', drivetrain: '4WD', transmission: '10-speed automatic', seats: 5, cargo: null,
  acceleration: null, topSpeed: null, towing: 3500, fuelTank: 80 };
const BIT = { ...base, engine: '2.0L I4 Bi-Turbo Diesel', displacement: 1996, cylinders: 4, aspiration: 'Twin-Turbo', power: 154,
  torque: 500, fc: 7.7, fh: 6.9, fx: 7.2 };
const V6 = { ...base, engine: '3.0L V6 Turbo Diesel', displacement: 2993, cylinders: 6, aspiration: 'Turbo', power: 184, torque: 600,
  fc: 10.0, fh: 7.5, fx: 8.4 };
const PHEV = { ...base, fuelType: 'plug-in hybrid', engine: '2.3L I4 Turbo PHEV', displacement: 2261, cylinders: 4, aspiration: 'Turbo',
  power: 207, torque: 697, battery: '11.8 kWh', fuelTank: 70, fc: null, fh: null, fx: 2.9, range: 49 };

writeLineups(288, {
  'Ford|Ranger|2025': {
    'P703 XL': { ...base, engine: '2.0L I4 Turbo Diesel', displacement: 1996, cylinders: 4, aspiration: 'Turbo', power: 125, torque: 405,
      transmission: '6-speed automatic', fc: 8.7, fh: 7.0, fx: 7.6, weight: 2232, payload: 1018, price: $(51130) },
    'P703 XL Bi-Turbo': { ...BIT, weight: 2360, payload: 890, price: $(54630) },
    'P703 XLS': { ...BIT, weight: 2247, payload: 983, price: $(57880) },
    'P703 Black Edition': { ...BIT, weight: 2256, payload: 994, price: $(57000) },
    'P703 XLT': { ...BIT, weight: 2360, payload: 870, groundClearance: 234, price: $(63890) },
    'P703 XLT V6': { ...V6, weight: 2416, payload: 864, price: $(69090) },
    'P703 Sport': { ...BIT, weight: 2296, payload: 934, price: $(66390) },
    'P703 Sport V6': { ...V6, weight: 2353, payload: 927, price: $(71590) },
    'P703 Wildtrak': { ...BIT, weight: 2360, payload: 920, groundClearance: 234, price: $(69890) },
    'P703 Wildtrak V6': { ...V6, weight: 2416, payload: 934, price: $(75090) },
    'P703 Wildtrak X': { ...BIT, power: 150, fc: 9.2, fh: 8.4, fx: 8.7, weight: 2431, payload: 919, groundClearance: 261,
      price: $(77640) },
    'P703 Platinum': { ...V6, weight: 2416, payload: 934, price: $(80890) },
    'P703 Raptor': { ...base, fuelType: 'petrol', engine: '3.0L V6 Twin-Turbo Petrol (EcoBoost)', displacement: 2956, cylinders: 6,
      aspiration: 'Twin-Turbo', power: 292, torque: 583, fc: 14.0, fh: 10.0, fx: 11.5, weight: 2510, payload: 620, towing: 2500,
      groundClearance: 272, price: $(90690) },
    'P703 PHEV XLT': { ...PHEV, weight: 2670, payload: 830, price: $(71990) },
    'P703 PHEV Sport': { ...PHEV, weight: 2685, payload: 815, price: $(75990) },
    'P703 PHEV Wildtrak': { ...PHEV, weight: 2695, payload: 805, price: $(79990) },
    'P703 PHEV Stormtrak': { ...PHEV, weight: 2695, payload: 805, price: $(86990) },
  },
});
