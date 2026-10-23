'use strict';
// supplement290.json — 2026-10-23: 2025 (AU) Ford Everest (MY25.25) and Toyota
// LandCruiser 300. Specs + price when new: Carsales 2025 variant pages. Names
// follow the 2026 lineups (gen254 / LC300 2026). The LC300 was diesel-only in
// 2025 (the stale list had "Petrol" grades); Everest drops Titanium/Platinum+.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const base = { fuelType: 'diesel', drivetrain: '4WD', transmission: '10-speed automatic', cargo: null, acceleration: null,
  topSpeed: null, towing: 3500, fuelTank: 80 };
const BIT = { ...base, engine: '2.0L I4 Bi-Turbo Diesel', displacement: 1996, cylinders: 4, aspiration: 'Twin-Turbo', power: 154,
  torque: 500, fc: 8.3, fh: 6.6, fx: 7.2 };
const V6 = { ...base, engine: '3.0L V6 Turbo Diesel', displacement: 2993, cylinders: 6, aspiration: 'Turbo', power: 184, torque: 600,
  fc: 10.2, fh: 7.6, fx: 8.5 };
const LC = { ...base, engine: '3.3L V6 Twin-Turbo Diesel', displacement: 3346, cylinders: 6, aspiration: 'Twin-Turbo', power: 227,
  torque: 700, fc: 11.3, fh: 7.6, fx: 8.9, fuelTank: 110 };

writeLineups(290, {
  'Ford|Everest|2025': {
    'Ambiente RWD': { ...BIT, drivetrain: 'RWD', fc: 8.4, fh: 6.3, fx: 7.1, weight: 2261, seats: 5, price: $(54240) },
    'Ambiente': { ...BIT, weight: 2369, seats: 5, price: $(59240) },
    'Trend': { ...BIT, weight: 2383, seats: 7, price: $(67040) },
    'Black Edition': { ...BIT, weight: 2383, seats: 7, price: $(69000) },
    'Sport Bi-Turbo': { ...BIT, weight: 2424, seats: 7, price: $(71190) },
    'Sport': { ...V6, weight: 2455, seats: 7, price: $(74640) },
    'Tremor': { ...V6, fc: 10.7, fh: 8.8, fx: 9.5, weight: 2550, seats: 7, groundClearance: 255, price: $(76590) },
    'Wildtrak': { ...V6, weight: 2488, seats: 7, price: $(76950) },
    'Platinum': { ...V6, weight: 2499, seats: 7, price: $(81200) },
  },
  'Toyota|LandCruiser 300|2025': {
    'GX': { ...LC, weight: 2495, seats: 5, payload: 785, groundClearance: 245, price: $(96991) },
    'GXL': { ...LC, weight: 2580, seats: 7, price: $(108791) },
    'VX': { ...LC, weight: 2630, seats: 7, price: $(120991) },
    'Sahara': { ...LC, weight: 2630, seats: 7, price: $(138191) },
    'GR Sport': { ...LC, weight: 2630, seats: 5, groundClearance: 245, price: $(144791) },
    'Sahara ZX': { ...LC, weight: 2610, seats: 5, groundClearance: 245, price: $(145791) },
  },
});
