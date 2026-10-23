'use strict';
// supplement319.json — 2026-10-23: 2024 (AU) Hyundai Santa Fe (MX5, Carsales'
// 2024 pages are MY25 stock), Kia Carnival (KA4 MY23 + KA4 PE) and Kia
// Sorento (MQ4 PE). Specs + price when new: Carsales 2024 variant pages.
// Pre-facelift Carnival pages list only drive-away prices -> price null.
// Santa Fe Hybrid AWD lists kerb below tare -> weight null. HEV/PHEV system
// torque null except Santa Fe Hybrid (367 Nm, as in the 2025 lineup).
// Sorento diesel/PHEV pages list tare only -> weight null. V6 petrol
// variants not fetched -> left out.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null };
const SF = { ...B, engine: '2.5L I4 Turbo Petrol', displacement: 2497, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 206, torque: 422, transmission: '8-speed dual-clutch', fc: 12.9, fh: 6.9, fx: 9.1, seats: 7, towing: 2000, fuelTank: 67 };
const SFH = { ...B, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 172, torque: 367, transmission: '6-speed automatic', fc: 6.2, fh: 5.3, fx: 5.6, seats: 7, towing: 1650 };
const KD = { ...B, engine: '2.2L I4 Turbo Diesel', displacement: 2151, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 148, torque: 440, transmission: '8-speed automatic' };
const CV = { ...KD, drivetrain: 'FWD', fc: 7.8, fh: 5.7, fx: 6.5, seats: 8, towing: 2000, fuelTank: 72 };
const CV23 = { ...CV, weight: 2134, price: null };
const CVPE = { ...CV, weight: 2245 };
const SO = { ...KD, drivetrain: 'AWD', fc: 7.5, fh: 5.2, fx: 6.0, seats: 7, towing: 2000, fuelTank: 67 };
const SOH = { ...B, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid', power: 169,
  torque: null, transmission: '6-speed automatic', drivetrain: 'FWD', fc: 4.7, fh: 5.8, fx: 5.4, seats: 7, towing: 1650 };

writeLineups(319, {
  'Hyundai|Santa Fe|2024': {
    'Santa Fe': { ...SF, drivetrain: 'FWD', weight: 1969, price: $(53250) },
    'Elite AWD': { ...SF, drivetrain: 'AWD', weight: 2034, price: $(62750) },
    'Calligraphy AWD': { ...SF, drivetrain: 'AWD', weight: 2034, price: $(72750) },
    'Hybrid': { ...SFH, drivetrain: 'FWD', weight: 2040, price: $(57250) },
    'Hybrid Elite AWD': { ...SFH, drivetrain: 'AWD', price: $(66750) },
    'Hybrid Calligraphy AWD': { ...SFH, drivetrain: 'AWD', price: $(76750) },
  },
  'Kia|Carnival|2024': {
    'S (KA4)': { ...CV23 },
    'Si (KA4)': { ...CV23 },
    'SLi (KA4)': { ...CV23 },
    'Platinum (KA4)': { ...CV23 },
    'S': { ...CVPE, price: $(52380) },
    'Sport': { ...CVPE, price: $(58280) },
    'Sport+': { ...CVPE, price: $(64610) },
    'GT-Line': { ...CVPE, price: $(72910) },
    'GT-Line HEV': { ...B, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
      power: 180, torque: null, transmission: '6-speed automatic', drivetrain: 'FWD', fc: 4.2, fh: 6.7, fx: 5.8, weight: 2334, seats: 8,
      towing: 1000, price: $(76210) },
  },
  'Kia|Sorento|2024': {
    'S Diesel AWD': { ...SO, price: $(53680) },
    'Sport Diesel AWD': { ...SO, price: $(56300) },
    'Sport+ Diesel AWD': { ...SO, price: $(61230) },
    'GT-Line Diesel AWD': { ...SO, price: $(68590) },
    'HEV GT-Line': { ...SOH, weight: 1951, price: $(70330) },
    'PHEV GT-Line': { ...SOH, engine: '1.6L I4 Turbo PHEV', fuelType: 'plug-in hybrid', power: 195, drivetrain: 'AWD', fc: null, fh: null,
      fx: 1.6, battery: '14 kWh', range: 55, towing: 1010, price: $(84660) },
  },
});
