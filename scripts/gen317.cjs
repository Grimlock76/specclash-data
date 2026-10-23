'use strict';
// supplement317.json — 2026-10-23: 2024 (AU) Toyota Camry (XV70: 2.5 petrol +
// hybrid; the late-2024 XV80 is covered by the 2025 lineup) and Kluger (2.4
// turbo petrol + 2.5 hybrid eFour). Specs + price when new: Carsales 2024
// variant pages. Hybrid power = Toyota system output; system torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, cylinders: 4 };
const CA = { ...B, displacement: 2487, aspiration: 'Naturally Aspirated', drivetrain: 'FWD', cargo: 524 };
const CAP = { ...CA, engine: '2.5L I4 Petrol', fuelType: 'petrol', power: 152, torque: 243, transmission: '8-speed automatic' };
const CAH = { ...CA, engine: '2.5L I4 Hybrid', fuelType: 'hybrid', power: 160, torque: null, transmission: 'CVT', fuelTank: 50 };
const KL = { ...B, seats: 7, towing: 2000 };
const KLT = { ...KL, engine: '2.4L I4 Turbo Petrol', displacement: 2393, aspiration: 'Turbo', fuelType: 'petrol', power: 198, torque: 420,
  transmission: '8-speed automatic', fuelTank: 68 };
const KT2 = { ...KLT, drivetrain: 'FWD', fc: 11.1, fh: 6.8, fx: 8.3, weight: 1900 };
const KT4 = { ...KLT, drivetrain: 'AWD', fc: 11.1, fh: 6.9, fx: 8.5, weight: 1985 };
const KH = { ...KL, engine: '2.5L I4 Hybrid', displacement: 2487, aspiration: 'Naturally Aspirated', fuelType: 'hybrid', power: 184,
  torque: null, transmission: 'CVT', drivetrain: 'AWD', fc: 6.0, fh: 5.6, fx: 5.6, weight: 2050, fuelTank: 65 };

writeLineups(317, {
  'Toyota|Camry|2024': {
    'Ascent': { ...CAP, fc: 9.3, fh: 5.4, fx: 6.8, weight: 1500, fuelTank: 60, price: $(35051) },
    'Ascent Hybrid': { ...CAH, fc: 4.3, fh: 4.2, fx: 4.2, weight: 1655, price: $(37917) },
    'Ascent Sport Hybrid': { ...CAH, fc: 4.3, fh: 4.2, fx: 4.2, weight: 1655, price: $(40717) },
    'SX Hybrid': { ...CAH, fc: 4.9, fh: 4.7, fx: 4.7, weight: 1645, price: $(44117) },
    'SL Hybrid': { ...CAH, fc: 4.7, fh: 4.5, fx: 4.5, weight: 1655, price: $(51417) },
  },
  'Toyota|Kluger|2024': {
    'GX 2WD': { ...KT2, price: $(54420) },
    'GX AWD': { ...KT4, price: $(58420) },
    'GX Hybrid': { ...KH, price: $(60920) },
    'GXL 2WD': { ...KT2, price: $(63940) },
    'GXL AWD': { ...KT4, price: $(67940) },
    'GXL Hybrid': { ...KH, price: $(70440) },
    'Grande AWD': { ...KT4, fc: 11.3, fh: 7.1, fx: 8.7, weight: 2060, price: $(77973) },
    'Grande Hybrid': { ...KH, weight: 2095, price: $(82860) },
  },
});
