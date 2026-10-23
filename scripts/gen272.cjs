'use strict';
// supplement272.json — 2026-10-23: 2026 (AU) MG HS (incl. Hybrid+ and Super
// Hybrid PHEV), MG4, GWM Haval Jolion. Specs: Carsales variant pages
// (Redbook spec table; where the overview text disagrees, the table wins).
// Prices: CarsGuide 2026 MSRP where listed; HS Hybrid+/Super Hybrid from
// Carsales "price when new" (CarsGuide lists petrol HS only). Jolion: Carsales
// price-when-new is pre-cut, CarsGuide's current MSRP used. Hybrid system
// torque null. MG4 range is WLTP (no ADR published). Jolion Premium/Vanta
// Hybrid share the Lux/Ultra Hybrid powertrain; weights null (not fetched).
// (Duplicate 'MG HS' model merged into 'HS' and removed in gen284.)
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null };
const HS = { ...B, engine: '1.5L I4 Turbo Petrol', displacement: 1498, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 125, torque: 275, transmission: '7-speed dual-clutch', drivetrain: 'FWD', fc: 8.9, fh: 5.8, fx: 6.9, seats: 5, towing: 1500,
  fuelTank: 55, cargo: 507 };
const HSH = { ...HS, engine: '1.5L I4 Hybrid', aspiration: 'Naturally Aspirated', fuelType: 'hybrid', power: 165, torque: null,
  transmission: '3-speed DHT', fc: 4.2, fh: 5.8, fx: 5.2, battery: '1.8 kWh' };
const HSP = { ...HSH, engine: '1.5L I4 PHEV', fuelType: 'plug-in hybrid', power: 220, fc: null, fh: null, fx: 0.7, battery: '24.7 kWh',
  range: 135, fuelTank: null };
const HS_LINEUP = {
  'Vibe': { ...HS, weight: 1585, price: $(33990) },
  'Excite': { ...HS, price: $(36990) },
  'Essence': { ...HS, weight: 1630, price: $(39990) },
  'Hybrid+ Excite': { ...HSH, weight: 1690, price: $(40990) },
  'Hybrid+ Essence': { ...HSH, weight: 1720, price: $(44990) },
  'Super Hybrid Excite': { ...HSP, weight: 1854, price: $(48990) },
  'Super Hybrid Essence': { ...HSP, weight: 1904, price: $(52990) },
};
const EV = { ...B, engine: 'Single-Motor Electric', displacement: null, cylinders: null, aspiration: null, fuelType: 'electric',
  transmission: '1-speed automatic', fc: null, fh: null, fx: null, seats: 5 };
const JOL = { ...B, engine: '1.5L I4 Turbo Petrol', displacement: 1497, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  transmission: '7-speed dual-clutch', drivetrain: 'FWD', fc: null, fh: null, seats: 5, towing: 1500, fuelTank: 55, cargo: 337 };
const JOLH = { ...JOL, engine: '1.5L I4 Hybrid', aspiration: 'Naturally Aspirated', fuelType: 'hybrid', power: 140, torque: null,
  transmission: '2-speed DHT', fx: 4.8, towing: 1300 };

writeLineups(272, {
  'MG|HS|2026': HS_LINEUP,
  'MG|MG4|2026': {
    'Essence 64': { ...EV, power: 140, torque: 350, drivetrain: 'RWD', battery: '64 kWh', range: 452, acceleration: 7.5, topSpeed: 180,
      weight: 1765, cargo: 350, price: $(36990) },
    'XPOWER': { ...EV, engine: 'Dual-Motor Electric', power: 300, torque: null, drivetrain: 'AWD', battery: '64 kWh', range: 405,
      acceleration: 3.8, topSpeed: 200, weight: 1810, price: $(55990) },
  },
  'GWM|Haval Jolion|2026': {
    'Premium': { ...JOL, power: 105, torque: 210, fx: 6.7, weight: 1410, price: $(25790) },
    'Vanta': { ...JOL, power: 130, torque: 270, fx: 6.5, weight: 1520, price: $(32490) },
    'Premium Hybrid': { ...JOLH, price: $(31790) },
    'Lux Hybrid': { ...JOLH, weight: 1575, price: $(34790) },
    'Ultra Hybrid': { ...JOLH, weight: 1575, price: $(37490) },
    'Vanta Hybrid': { ...JOLH, price: $(38490) },
  },
});
