'use strict';
// supplement374.json — 2026-10-25: Subaru Solterra 2024 + 2025 (E1-1 MY24/25,
// 160 kW dual motor) and 2026 (MY26/27 update, 252 kW, 74.7 kWh). Replaces the
// single stale "AWD" row (~ price). Specs + price when new: Carsales variant
// pages (base price incl GST & LCT); 2026 prices = CarsGuide MSRP (Carsales
// 2026 shows drive-away only). Range ADR. Dual-motor torque null; kerb = tare
// (kept) on MY26, tare-only on MY24/25 -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, acceleration: null, cargo: 410, engine: 'Dual Motor Electric',
  drivetrain: 'AWD', torque: null, ...o });
const OLD = { power: 160, battery: '71.4 kWh', range: 485, weight: null, towing: 750 };
const NEW = { power: 252, battery: '74.7 kWh', towing: 1500 };
const old = () => ({ 'AWD': ev({ ...OLD, price: $(69990) }), 'AWD Touring': ev({ ...OLD, price: $(76990) }) });

writeLineups(374, {
  'Subaru|Solterra|2024': old(),
  'Subaru|Solterra|2025': old(),
  'Subaru|Solterra|2026': {
    'AWD': ev({ ...NEW, range: 566, weight: 2000, price: $(61990) }),
    'AWD Touring': ev({ ...NEW, range: 517, weight: 2035, price: $(67990) }),
  },
});
