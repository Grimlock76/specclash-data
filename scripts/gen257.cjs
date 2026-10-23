'use strict';
// supplement257.json — 2026-10-23: 2026 (AU) Hyundai Tucson, Kia Sportage,
// Mazda CX-5. Replaces estimated "~" data and non-current grades (Tucson
// Active/Highlander/PHEV, Sportage Platinum/PHEV, CX-5 "GT").
// Specs + "price when new": Carsales variant pages (the variant each badge
// page shows). Tucson hybrid torque 367 Nm = system figure from the Carsales
// overview; Kia publishes no Sportage HEV system torque → null.
// CX-5 2026 is two generations side by side: KF run-out (G20 Maxx, G25 Maxx
// Sport, G35 turbo) and new KM (G25 AWD grades).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const base = { cargo: null, acceleration: null, topSpeed: null, seats: 5 };
const TUC = { ...base, engine: '2.0L I4 Petrol', displacement: 1999, cylinders: 4, aspiration: 'Naturally Aspirated',
  power: 115, torque: 192, transmission: '6-speed automatic', drivetrain: 'FWD', fc: 11, fh: 6.5, fx: 8.1, fuelType: 'petrol',
  weight: 1456, towing: 1650, fuelTank: 54, cargo: 539 };
const TUC_H = { ...base, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo',
  power: 172, torque: 367, transmission: '6-speed automatic', fuelType: 'hybrid', towing: 1900, fuelTank: 52, cargo: 582 };
const H_FWD = { drivetrain: 'FWD', fc: 4.8, fh: 4.9, fx: 4.9, weight: 1626 };
const H_AWD = { drivetrain: 'AWD', fc: 3.6, fh: 6.5, fx: 5.3, weight: 1686 };
const SPD = { ...base, engine: '2.0L I4 Turbo Diesel', displacement: 1998, cylinders: 4, aspiration: 'Turbo',
  power: 137, torque: 416, transmission: '8-speed automatic', drivetrain: 'AWD', fc: 7.7, fh: 5.4, fx: 6.3, fuelType: 'diesel',
  weight: 1764, towing: 1900, fuelTank: 54, cargo: 543 };
const SPH = { ...base, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo',
  power: 173, torque: null, transmission: '6-speed automatic', drivetrain: 'AWD', fc: 3.6, fh: 6.5, fx: 5.3, fuelType: 'hybrid',
  weight: 1793, towing: 1900, fuelTank: 52, cargo: 586 };
const CX = { ...base, cylinders: 4, transmission: '6-speed automatic', fuelType: 'petrol', fuelTank: 58 };
const KM25 = { ...CX, engine: '2.5L I4 Petrol (KM)', displacement: 2488, aspiration: 'Naturally Aspirated', power: 132, torque: 242,
  drivetrain: 'AWD', fc: 9.2, fh: 6.4, fx: 7.4, weight: 1720, towing: 1800, cargo: 466 };
const KF35 = { ...CX, engine: '2.5L I4 Turbo Petrol (KF)', displacement: 2488, aspiration: 'Turbo', power: 170, torque: 420,
  drivetrain: 'AWD', fc: 10.3, fh: 6.9, fx: 8.2, weight: 1730, towing: 2000, cargo: 438 };
writeLineups(257, {
  'Hyundai|Tucson|2026': {
    'Tucson': { ...TUC, price: $(39350) },
    'Elite': { ...TUC, price: $(44350) },
    'Hybrid': { ...TUC_H, ...H_FWD, price: $(42850) },
    'Elite Hybrid': { ...TUC_H, ...H_FWD, price: $(48350) },
    'Elite Hybrid N Line': { ...TUC_H, ...H_FWD, price: $(50850) },
    'Premium Hybrid AWD': { ...TUC_H, ...H_AWD, price: $(58350) },
    'Premium Hybrid N Line AWD': { ...TUC_H, ...H_AWD, price: $(59850) },
  },
  'Kia|Sportage|2026': {
    'S Diesel AWD': { ...SPD, price: $(43890) },
    'SX Diesel AWD': { ...SPD, price: $(46380) },
    'SX+ Diesel AWD': { ...SPD, price: $(50980) },
    'GT-Line Diesel AWD': { ...SPD, price: $(56900) },
    'HEV S AWD': { ...SPH, price: $(47450) },
    'HEV SX AWD': { ...SPH, price: $(49450) },
    'HEV GT-Line AWD': { ...SPH, price: $(60370) },
  },
  'Mazda|CX-5|2026': {
    'G20 Maxx': { ...CX, engine: '2.0L I4 Petrol (KF)', displacement: 1998, aspiration: 'Naturally Aspirated', power: 115, torque: 200,
      drivetrain: 'FWD', fc: 8.1, fh: 6.2, fx: 6.9, weight: 1575, price: $(37240), towing: 1800, fuelTank: 56, cargo: 438 },
    'G25 Maxx Sport': { ...CX, engine: '2.5L I4 Petrol (KF)', displacement: 2488, aspiration: 'Naturally Aspirated', power: 140, torque: 252,
      drivetrain: 'FWD', fc: 9.2, fh: 6.0, fx: 7.2, weight: 1603, price: $(40960), towing: 1800, cargo: 438 },
    'G25 Pure': { ...KM25, price: $(39990) },
    'G25 Evolve': { ...KM25, price: $(42990) },
    'G25 Touring': { ...KM25, price: $(47490) },
    'G25 GT SP': { ...KM25, price: $(51990) },
    'G25 Akera': { ...KM25, price: $(54990) },
    'G35 GT SP': { ...KF35, price: $(53960) },
    'G35 Akera': { ...KF35, price: $(56150) },
  },
});
