'use strict';
// supplement330.json — 2026-10-25: 2024 (AU) Subaru Forester (S5 MY24) and
// Outback (6GEN MY24). Specs + price when new: Carsales 2024 variant pages
// (base price incl GST & LCT). Tare-only weights null. Forester Hybrid lists
// only the 110 kW engine (no system figure); hybrid torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, drivetrain: 'AWD', transmission: 'CVT', weight: null };
const S5 = { ...B, engine: '2.5L H4 Petrol (Boxer)', displacement: 2498, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'petrol', power: 136, torque: 239, fc: 9.3, fh: 6.3, fx: 7.4, towing: 1800, fuelTank: 63, cargo: 498,
  groundClearance: 220 };
const S5H = { ...B, engine: '2.0L H4 Hybrid (e-Boxer)', displacement: 1995, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'hybrid', power: 110, torque: null, fc: 7.5, fh: 6.2, fx: 6.7, towing: 1200, fuelTank: 48, cargo: 509,
  groundClearance: 220 };
const OB = { ...B, engine: '2.5L H4 Petrol (Boxer)', displacement: 2498, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'petrol', power: 138, torque: 245, fc: 9.3, fh: 6.2, fx: 7.3, towing: 2000, fuelTank: 63, groundClearance: 213 };
const OXT = { ...OB, engine: '2.4L H4 Turbo Petrol (Boxer)', displacement: 2387, aspiration: 'Turbo', power: 183, torque: 350, fc: 12.0,
  fh: 7.3, fx: 9.0, towing: 2400 };

writeLineups(330, {
  'Subaru|Forester|2024': {
    '2.5i': { ...S5, price: $(38690) },
    '2.5i-L': { ...S5, price: $(41090) },
    '2.5i Premium': { ...S5, price: $(43890) },
    'Hybrid L': { ...S5H, price: $(44090) },
    '2.5i Sport': { ...S5, price: $(45640) },
    '2.5i-S': { ...S5, price: $(47140) },
    'STI Sport': { ...S5, price: $(48640) },
    'Hybrid S': { ...S5H, price: $(50140) },
  },
  'Subaru|Outback|2024': {
    'AWD': { ...OB, price: $(43690) },
    'AWD Sport': { ...OB, price: $(48190) },
    'AWD Touring': { ...OB, price: $(51990) },
    'AWD Sport XT': { ...OXT, weight: 1743, price: $(53190) },
    'AWD Touring XT': { ...OXT, weight: 1770, price: $(56990) },
    'AWD Sport Touring XT': { ...OXT, weight: 1769, price: $(57490) },
  },
});
