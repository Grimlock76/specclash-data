'use strict';
// supplement315.json — 2026-10-23: 2025 (AU) Toyota Corolla Cross (hybrid-only
// facelift), BYD Atto 3, MG ZS (ZS32) and MG3 (hybrid + petrol), plus a fix
// for the 2026 MG3 (rows were the old 83 kW / 4-speed car with guessed
// figures). Specs: Carsales variant pages. Prices: Carsales "price when new";
// where Carsales shows only a drive-away figure (all 2025 ZS, MG3 Vibe) the
// CarsGuide 2025 page lists used ranges only, so price is null. 2026 MG3
// prices: CarsGuide 2026 MSRP (Carsales lists drive-away). MG hybrid city
// figure (0.9 L/100km) is implausible -> city/highway null; system torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const base = { acceleration: null, topSpeed: null, seats: 5, cylinders: 4 };
const CC = { ...base, fuelType: 'hybrid', aspiration: 'Naturally Aspirated', transmission: 'CVT', torque: null, engine: '2.0L I4 Hybrid',
  displacement: 1987, power: 146, drivetrain: 'FWD', fc: 4.0, fh: 4.5, fx: 4.2, towing: 750, fuelTank: 36, cargo: 425 };
const CCA = { ...CC, drivetrain: 'AWD', fc: 4.2, fh: 4.6, fx: 4.4 };

const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, engine: 'Single Motor Electric', drivetrain: 'FWD', power: 150, torque: 310, topSpeed: null, seats: 5,
  towing: 750, cargo: 440, ...o });

const ZS = { ...base, engine: '1.5L I4 Petrol', displacement: 1495, aspiration: 'Naturally Aspirated', fuelType: 'petrol', power: 81,
  torque: 140, transmission: '8-speed automatic', drivetrain: 'FWD', fc: 8.5, fh: 5.7, fx: 6.7, towing: 500, fuelTank: 55, cargo: 443,
  price: null };
const ZST = { ...ZS, engine: '1.5L I4 Turbo Petrol', displacement: 1496, aspiration: 'Turbo', power: 125, torque: 275, fc: 9.4, fh: 5.5,
  fx: 6.9, weight: 1390 };
const ZSH = { ...ZS, engine: '1.5L I4 Hybrid', power: 158, torque: null, transmission: '3-speed automatic', fuelType: 'hybrid', fc: null,
  fh: null, fx: 4.7 };

const M3 = { ...base, engine: '1.5L I4 Petrol', displacement: 1495, aspiration: 'Naturally Aspirated', fuelType: 'petrol', power: 81,
  torque: 142, transmission: '8-speed automatic', drivetrain: 'FWD', fc: 7.8, fh: 4.9, fx: 6.0, weight: 1199 };
const M3H = { ...M3, engine: '1.5L I4 Hybrid', displacement: 1498, fuelType: 'hybrid', power: 155, torque: null,
  transmission: '3-speed automatic', fc: null, fh: null, fx: 4.3 };

writeLineups(315, {
  'Toyota|Corolla Cross|2025': {
    'GX Hybrid': { ...CC, weight: 1435, price: $(37440) },
    'GXL Hybrid': { ...CC, weight: 1475, price: $(41190) },
    'GXL Hybrid AWD': { ...CCA, weight: 1545, price: $(44190) },
    'Atmos Hybrid': { ...CC, fc: 4.1, fx: 4.3, weight: 1480, price: $(47030) },
    'Atmos Hybrid AWD': { ...CCA, fc: 4.3, weight: 1550, price: $(50030) },
    'GR Sport Hybrid AWD': { ...CCA, fc: 4.3, fh: 4.7, fx: 4.5, weight: 1555, price: $(50990) },
  },
  'BYD|Atto 3|2025': {
    'Essential': ev({ battery: '49.9 kWh', range: 410, acceleration: 7.9, weight: 1680, price: $(39990) }),
    'Premium': ev({ battery: '60.5 kWh', range: 480, acceleration: 7.3, weight: 1750, price: $(44990) }),
  },
  'MG|ZS|2025': {
    'Vibe': { ...ZS, weight: 1295 },
    'Excite': { ...ZS, weight: 1295 },
    'Essence': { ...ZS, weight: 1330 },
    'Vibe Turbo': { ...ZST },
    'Essence Turbo': { ...ZST },
    'Excite Hybrid+': { ...ZSH, weight: 1410 },
    'Essence Hybrid+': { ...ZSH, weight: 1420 },
  },
  'MG|MG3|2025': {
    'Vibe': { ...M3, price: null },
    'Excite': { ...M3, price: $(23990) },
    'Essence': { ...M3, price: $(25990) },
    'Excite Hybrid+': { ...M3H, weight: 1298, price: $(27990) },
    'Essence Hybrid+': { ...M3H, weight: 1308, price: $(29990) },
  },
  'MG|MG3|2026': {
    'Vibe': { ...M3, price: $(21990) },
    'Excite': { ...M3, price: $(23990) },
    'Essence': { ...M3, price: $(25990) },
    'Excite Hybrid+': { ...M3H, weight: 1298, price: $(26990) },
    'Essence Hybrid+': { ...M3H, weight: 1308, price: $(29990) },
  },
});
