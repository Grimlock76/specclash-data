'use strict';
// supplement295.json — 2026-10-23: 2025 (AU) Suzuki Jimny, Hyundai Santa Fe
// (MX5), Kia Carnival (KA4 PE), Kia Sorento (MQ4 PE). Specs + price when new:
// Carsales 2025 variant pages (one page per grade/powertrain fetched). Santa Fe
// Hybrid system torque 367 Nm from the Carsales overview; Kia HEV/PHEV system
// torque not stated -> null. Sorento PHEV S electric range not listed -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null };
const JM = { ...B, engine: '1.5L I4 Petrol', displacement: 1462, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 75, torque: 130, drivetrain: '4WD', seats: 4, towing: 1300, fuelTank: 40 };
const SF = { ...B, engine: '2.5L I4 Turbo Petrol', displacement: 2497, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 206, torque: 422, transmission: '8-speed dual-clutch', fc: 12.9, fh: 6.9, fx: 9.1, seats: 7, towing: 2000, fuelTank: 67 };
const SFH = { ...B, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 172, torque: 367, transmission: '6-speed automatic', fc: 6.2, fh: 5.3, fx: 5.6, seats: 7, towing: 1650 };
const KD = { ...B, engine: '2.2L I4 Turbo Diesel', displacement: 2151, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 148, torque: 440, transmission: '8-speed automatic' };
const CV = { ...KD, drivetrain: 'FWD', fc: 7.8, fh: 5.7, fx: 6.5, weight: 2245, seats: 8, towing: 2000, fuelTank: 72 };
const CVH = { ...B, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 180, torque: null, transmission: '6-speed automatic', drivetrain: 'FWD', fc: 4.2, fh: 6.7, fx: 5.8, weight: 2334, seats: 8,
  towing: 1000 };
const SO = { ...KD, drivetrain: 'AWD', fc: 7.5, fh: 5.2, fx: 6.0, weight: 1828, seats: 7, towing: 2000, fuelTank: 67 };
const SOH = { ...CVH, power: 169, fc: 4.7, fh: 5.8, fx: 5.4, seats: 7, towing: 1650 };
const SOP = { ...CVH, engine: '1.6L I4 Turbo PHEV', fuelType: 'plug-in hybrid', power: 195, drivetrain: 'AWD', fc: null, fh: null,
  fx: 1.6, battery: '14 kWh', weight: 2030, seats: 7, towing: 1010 };

writeLineups(295, {
  'Suzuki|Jimny|2025': {
    'Lite Manual': { ...JM, transmission: '5-speed manual', fc: 7.7, fh: 5.7, fx: 6.4, weight: 1100, price: $(31990) },
    '3-door Auto': { ...JM, transmission: '4-speed automatic', fc: 8.2, fh: 6.1, fx: 6.9, weight: 1120, groundClearance: 210,
      price: $(36490) },
    'XL Heritage Manual': { ...JM, transmission: '5-speed manual', fc: 7.6, fh: 5.7, fx: 6.4, weight: 1185, price: $(36490) },
    'XL Auto': { ...JM, transmission: '4-speed automatic', fc: 8.1, fh: 6.3, fx: 6.9, weight: 1210, price: $(37490) },
  },
  'Hyundai|Santa Fe|2025': {
    'Santa Fe': { ...SF, drivetrain: 'FWD', weight: 1969, price: $(53250) },
    'Elite AWD': { ...SF, drivetrain: 'AWD', weight: 2034, price: $(62750) },
    'Calligraphy AWD': { ...SF, drivetrain: 'AWD', weight: 2034, price: $(72750) },
    'Hybrid': { ...SFH, drivetrain: 'FWD', weight: 1925, price: $(57650) },
    'Hybrid Elite AWD': { ...SFH, drivetrain: 'AWD', weight: 1990, price: $(67150) },
    'Hybrid Calligraphy AWD': { ...SFH, drivetrain: 'AWD', weight: 1990, price: $(77150) },
  },
  'Kia|Carnival|2025': {
    'S': { ...CV, price: $(52530) },
    'Sport': { ...CV, price: $(58430) },
    'Sport+': { ...CV, price: $(64760) },
    'GT-Line': { ...CV, price: $(73060) },
    'S HEV': { ...CVH, price: $(56100) },
    'GT-Line HEV': { ...CVH, price: $(76360) },
  },
  'Kia|Sorento|2025': {
    'S Diesel AWD': { ...SO, price: $(54380) },
    'GT-Line Diesel AWD': { ...SO, price: $(69290) },
    'HEV S': { ...SOH, weight: 1821, price: $(56630) },
    'HEV GT-Line': { ...SOH, weight: 1951, price: $(71540) },
    'PHEV S': { ...SOP, price: $(70880) },
    'PHEV GT-Line': { ...SOP, range: 55, price: $(85790) },
  },
});
