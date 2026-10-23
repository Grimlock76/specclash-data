'use strict';
// supplement306.json — 2026-10-23: 2025 (AU) Porsche Cayenne, and a fix for
// the 2026 Cayenne lineup. Carsales lists two bodies per badge: 9YA = SUV
// (5 seats) and 9YB = Coupe (4 seats). gen264 had taken the 9YB (Coupe) MY26
// figures for the plain SUV names; those rows are now the "... Coupe" trims
// and the SUV rows use the 9YA pages. 2025 = MY25 pages, 2026 = MY26 pages
// (Carsales files both under 2025). Specs + price when new: Carsales.
// Hybrid power = combined system output; system torque null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const CAY = { fuelType: 'petrol', cargo: null, fc: null, fh: null, drivetrain: 'AWD', transmission: '8-speed automatic', towing: 3500 };
const V6 = { ...CAY, engine: '3.0L V6 Turbo', displacement: 2995, cylinders: 6, aspiration: 'Turbo', power: 260, torque: 500, fx: 10.4,
  topSpeed: 248, fuelTank: 90 };
const EH = { ...CAY, engine: '3.0L V6 Turbo PHEV', displacement: 2995, cylinders: 6, aspiration: 'Turbo', fuelType: 'plug-in hybrid',
  power: 346, torque: null, fx: 1.9, battery: '25.9 kWh', range: 86, acceleration: 4.9, topSpeed: 254 };
const SEH = { ...EH, power: 382, fx: 2.0, acceleration: 4.7, topSpeed: 263 };
const V8 = { ...CAY, engine: '4.0L V8 Twin-Turbo', displacement: 3996, cylinders: 8, aspiration: 'Twin-Turbo' };
const S = { ...V8, power: 349, torque: 600, fx: 12.3, acceleration: 5.0, topSpeed: 273 };
const GTS = { ...V8, power: 368, torque: 660, fx: 12.3, acceleration: 4.4, topSpeed: 275 };
const TEH = { ...V8, engine: '4.0L V8 Twin-Turbo PHEV', fuelType: 'plug-in hybrid', power: 544, torque: null, fx: 2.5,
  battery: '25.9 kWh', range: 79, acceleration: 3.7, topSpeed: 295 };
const TGT = { ...V8, power: 485, torque: 850, fx: 12.5, acceleration: 3.3, topSpeed: 305, weight: 2245, seats: 4 };
// SUV (9YA) and Coupe (9YB) body deltas
const SUV = { seats: 5 }, CPE = { seats: 4 };
const base = { ...V6, ...SUV, acceleration: 6.0, weight: 2055 };
const baseC = { ...V6, ...CPE, acceleration: 5.7, weight: 2085 };

const turboElectric = existing('Porsche', 'Cayenne', 2026, 'Turbo Electric');

writeLineups(306, {
  'Porsche|Cayenne|2025': {
    'Cayenne': { ...base, price: $(141700) },
    'Coupe': { ...baseC, price: $(149500) },
    'E-Hybrid': { ...EH, ...SUV, weight: 2425, price: $(158100) },
    'E-Hybrid Coupe': { ...EH, ...CPE, weight: 2455, price: $(165500) },
    'S': { ...S, ...SUV, weight: 2160, price: $(181800) },
    'S Coupe': { ...S, ...CPE, weight: 2190, price: $(191600) },
    'S E-Hybrid': { ...SEH, ...SUV, weight: 2410, price: $(181100) },
    'S E-Hybrid Coupe': { ...SEH, ...CPE, weight: 2440, price: $(188000) },
    'GTS': { ...GTS, ...SUV, weight: 2190, price: $(208500) },
    'GTS Coupe': { ...GTS, ...CPE, weight: 2220, price: $(211500) },
    'Turbo E-Hybrid': { ...TEH, ...SUV, weight: 2570, price: $(297600) },
    'Turbo E-Hybrid Coupe': { ...TEH, ...CPE, weight: 2595, price: $(306600) },
    'Turbo GT': { ...TGT, price: $(370600) },
  },
  'Porsche|Cayenne|2026': {
    'Cayenne': { ...base, price: $(144900) },
    'Coupe': { ...baseC, price: $(153300) },
    'Black Edition': { ...base, price: $(156800) },
    'Black Edition Coupe': { ...baseC, price: $(162500) },
    'E-Hybrid': { ...EH, ...SUV, weight: 2425, price: $(164800) },
    'E-Hybrid Coupe': { ...EH, ...CPE, weight: 2455, price: $(171400) },
    'E-Hybrid Black Edition': { ...EH, ...SUV, weight: 2425, price: $(175800) },
    'E-Hybrid Black Edition Coupe': { ...EH, ...CPE, weight: 2455, price: $(180500) },
    'S': { ...S, ...SUV, weight: 2160, price: $(184900) },
    'S Coupe': { ...S, ...CPE, weight: 2190, price: $(194700) },
    'S E-Hybrid': { ...SEH, ...SUV, weight: 2410, price: $(187800) },
    'S E-Hybrid Coupe': { ...SEH, ...CPE, weight: 2440, price: $(194700) },
    'S E-Hybrid Black Edition': { ...SEH, ...SUV, weight: 2410, price: $(195500) },
    'S E-Hybrid Black Edition Coupe': { ...SEH, ...CPE, weight: 2440, price: $(197600) },
    'GTS': { ...GTS, ...SUV, weight: 2190, price: $(211700) },
    'GTS Coupe': { ...GTS, ...CPE, weight: 2220, price: $(214700) },
    'Turbo E-Hybrid': { ...TEH, ...SUV, weight: 2570, price: $(303300) },
    'Turbo E-Hybrid Coupe': { ...TEH, ...CPE, weight: 2595, price: $(312300) },
    'Turbo GT': { ...TGT, price: $(376200) },
    'Turbo Electric': turboElectric,
  },
});
