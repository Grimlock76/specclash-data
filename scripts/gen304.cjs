'use strict';
// supplement304.json — 2026-10-23: 2025 (AU) Subaru Outback (6GEN run-out +
// first 7GEN Premium), Honda HR-V, VW Tiguan (CT), Skoda Octavia (NX MY25
// liftback). Specs + price when new: Carsales 2025 variant pages. HR-V e:HEV
// power/torque = drive motor (96 kW / 253 Nm). HR-V Vi X seat count listed as
// 4 (wrong for an HR-V) -> null; tare-only weights null. Tiguan eHybrid system
// torque null. Replaces stale lists (Comfortline/Highline, 2.4XT, Ambition...).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const OB6 = { ...B, engine: '2.5L H4 Petrol (Boxer)', displacement: 2498, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'petrol', power: 138, torque: 245, transmission: 'CVT', drivetrain: 'AWD', fc: 9.3, fh: 6.2, fx: 7.3, towing: 2000,
  fuelTank: 63, groundClearance: 213 };
const HRH = { ...B, engine: '1.5L I4 e:HEV (motor-driven hybrid)', displacement: 1498, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'hybrid', power: 96, torque: 253, transmission: '1-speed automatic', drivetrain: 'FWD', fc: 2.9, fh: 5.1, fx: 4.3 };
const TG = { ...B, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', transmission: '7-speed dual-clutch' };
const T110 = { ...TG, engine: '1.4L I4 Turbo Petrol', displacement: 1395, power: 110, torque: 250, drivetrain: 'FWD', fc: 9.8, fh: 6.3,
  fx: 7.6, weight: 1610, towing: 1800, fuelTank: 55, cargo: 652 };
const T150 = { ...TG, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 150, torque: 320, drivetrain: 'AWD', fc: 9.4, fh: 6.6,
  fx: 7.6, acceleration: 7.1, weight: 1723, towing: 2300 };
const TPH = { ...TG, engine: '1.5L I4 Turbo PHEV', displacement: 1498, fuelType: 'plug-in hybrid', torque: null,
  transmission: '6-speed dual-clutch', drivetrain: 'FWD', fc: null, fh: null, battery: '19.7 kWh' };
const OC = { ...B, engine: '1.4L I4 Turbo Petrol', displacement: 1395, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol', power: 110,
  torque: 250, transmission: '8-speed automatic', drivetrain: 'FWD', fc: 8.1, fh: 4.9, fx: 6.1, acceleration: 8.7, fuelTank: 45 };
writeLineups(304, {
  'Subaru|Outback|2025': {
    'AWD': { ...OB6, weight: 1656, price: $(44190) },
    'AWD Sport': { ...OB6, weight: 1663, price: $(48690) },
    'AWD Touring': { ...OB6, weight: 1696, price: $(52490) },
    'AWD Premium (7th gen)': { ...OB6, power: 137, torque: 254, fc: 10.2, fh: 6.9, fx: 8.1, weight: 1732, groundClearance: 220,
      price: $(53490) },
    'AWD Sport XT': { ...OB6, engine: '2.4L H4 Turbo Petrol (Boxer)', displacement: 2387, aspiration: 'Turbo', power: 183, torque: 350,
      fc: 12.0, fh: 7.3, fx: 9.0, weight: 1736, towing: 2400, price: $(53690) },
  },
  'Honda|HR-V|2025': {
    'Vi X': { ...B, engine: '1.5L I4 Petrol', displacement: 1498, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
      power: 89, torque: 145, transmission: 'CVT', drivetrain: 'FWD', fc: 7.7, fh: 5.4, fx: 6.2, seats: null, fuelTank: 40, cargo: 304,
      price: $(32900) },
    'e:HEV X': { ...HRH, weight: 1381, price: $(39900) },
    'e:HEV L': { ...HRH, weight: 1385, price: $(42900) },
  },
  'Volkswagen|Tiguan|2025': {
    '110TSI Life': { ...T110, price: $(44990) },
    '110TSI Elegance': { ...T110, price: $(50690) },
    '150TSI R-Line': { ...T150, price: $(55990) },
    '150TSI Elegance': { ...T150, price: $(60690) },
    '150TSI eHybrid Elegance': { ...TPH, power: 150, fx: 1.6, range: 117, acceleration: 8.2, towing: 1800, price: $(64590) },
    '195TSI R-Line': { ...T150, power: 195, torque: 400, fc: 10.5, fh: 7.4, fx: 8.5, acceleration: 5.9, weight: 1754, price: $(70490) },
    '200TSI eHybrid R-Line': { ...TPH, power: 200, fx: 1.7, range: 113, acceleration: 7.2, towing: 2000, price: $(74550) },
  },
  'Skoda|Octavia|2025': {
    '110TSI Select Liftback': { ...OC, price: $(41490) },
    '110TSI Sportline Liftback': { ...OC, price: $(46490) },
    'RS Liftback': { ...OC, engine: '2.0L I4 Turbo Petrol', displacement: 1984, power: 195, torque: 370,
      transmission: '7-speed dual-clutch', fc: 9.3, fh: 5.6, fx: 7.0, acceleration: 6.4, fuelTank: 50, price: $(62990) },
  },
});
