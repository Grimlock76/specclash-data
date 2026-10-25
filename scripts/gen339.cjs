'use strict';
// supplement339.json — 2026-10-25: Honda Civic 2024 and ZR-V 2025. Replaces
// stale rows (Civic "RS/VTi-S", ZR-V "VTi-S e:HEV"). Specs: Carsales variant
// pages. Prices: Carsales lists Honda's drive-away figures only and CarsGuide
// 2024/2025 shows used ranges -> null. e:HEV = drive-motor output.
const { writeLineups, existing } = require('./lineup-lib.cjs');
const c = t => ({ ...existing('Honda', 'Civic', 2026, t), price: null });
const z = t => ({ ...existing('Honda', 'ZR-V', 2026, t), price: null });

writeLineups(339, {
  'Honda|Civic|2024': {
    'VTi LX': { ...c('e:HEV L'), engine: '1.5L I4 Turbo Petrol', displacement: 1498, aspiration: 'Turbo', fuelType: 'petrol', power: 131,
      torque: 240, transmission: 'CVT', fc: 8.0, fh: 5.4, fx: 6.3, weight: 1369, fuelTank: 47 },
    'e:HEV L': c('e:HEV L'),
    'e:HEV LX': c('e:HEV LX'),
    'Type R': { ...c('Type R'), fc: 12.0, fh: 7.1, fx: 8.9 },
  },
  'Honda|ZR-V|2025': {
    'VTi X+': z('VTi X+'),
    'VTi L+': z('VTi L+'),
    'VTi LX': z('VTi LX'),
    'e:HEV LX': z('e:HEV LX'),
  },
});
