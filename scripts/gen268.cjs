'use strict';
// supplement268.json — 2026-10-23: 2026 (AU) Hyundai Palisade (LX3), GWM
// Haval H6, Nissan Qashqai (e-POWER), Subaru Outback (7th gen), Honda CR-V,
// Hyundai Staria. Specs + price when new: Carsales variant pages.
// e-POWER / e:HEV are motor-driven, so motor output is the drive figure.
// Hybrid system torque only where Carsales states it (Palisade 460 Nm);
// tare-only weights null. Staria Load (van) carried over unchanged.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null };
const PAL_H = { ...B, engine: '2.5L I4 Turbo Hybrid', displacement: 2497, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 245, torque: 460, transmission: '6-speed automatic', drivetrain: 'AWD', fc: 7.3, fh: 6.3, fx: 6.8, weight: 2185, seats: 8,
  towing: 2000, fuelTank: 72 };
const H6 = { ...B, engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 170, torque: 380, transmission: '9-speed dual-clutch', drivetrain: 'FWD', fc: null, fh: null, fx: 7.4, weight: 1630, seats: 5,
  towing: 2000, fuelTank: 61 };
const H6H = { ...B, engine: '1.5L I4 Turbo Hybrid', displacement: 1499, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 179, torque: null, transmission: '2-speed DHT', drivetrain: 'FWD', fc: 3.5, fh: 6.2, fx: 5.2, seats: 5, towing: 1500 };
const H6P = { ...H6H, engine: '1.5L I4 Turbo PHEV', fuelType: 'plug-in hybrid', power: 240, fc: null, fh: null, fx: 1.0,
  battery: '19.1 kWh', range: 106, weight: 1895 };
const QQ = { ...B, engine: '1.5L I3 Turbo e-POWER (series hybrid)', displacement: 1497, cylinders: 3, aspiration: 'Turbo', fuelType: 'hybrid',
  power: 140, torque: 311, transmission: '1-speed automatic', drivetrain: 'FWD', fc: 3.8, fh: 4.3, fx: 4.1, seats: 5, towing: 750,
  fuelTank: 55, cargo: 404 };
const OB = { ...B, engine: '2.5L H4 Petrol (Boxer)', displacement: 2498, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 137, torque: 254, transmission: 'CVT', drivetrain: 'AWD', fc: 10.2, fh: 6.9, fx: 8.1, seats: 5, towing: 2000, fuelTank: 63, groundClearance: 220 };
const OBT = { ...OB, engine: '2.4L H4 Turbo Petrol (Boxer)', displacement: 2387, aspiration: 'Turbo', power: 194, torque: 382,
  fc: 14.0, fh: 7.2, fx: 9.7, towing: 2100, groundClearance: 240 };
const CRV = { ...B, engine: '1.5L I4 Turbo Petrol', displacement: 1498, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  power: 140, torque: 240, transmission: 'CVT', drivetrain: 'FWD', fuelTank: 57, cargo: 589 };
const CRH = { ...B, engine: '2.0L I4 e:HEV (motor-driven hybrid)', displacement: 1993, cylinders: 4, aspiration: 'Naturally Aspirated',
  fuelType: 'hybrid', power: 135, torque: 335, transmission: '1-speed automatic', seats: 5, towing: 750 };
const ST35 = { ...B, engine: '3.5L V6 Petrol', displacement: 3470, cylinders: 6, aspiration: 'Naturally Aspirated', fuelType: 'petrol',
  power: 200, torque: 331, transmission: '8-speed automatic', drivetrain: 'FWD', fc: 14.5, fh: 8.2, fx: 10.5, weight: 2142, seats: 8, towing: 2500 };
writeLineups(268, {
  'Hyundai|Palisade|2026': {
    'Elite Hybrid AWD': { ...PAL_H, price: $(76500) },
    'XRT PRO': { ...PAL_H, engine: '2.5L I4 Turbo Petrol', fuelType: 'petrol', power: 207, torque: 422, fc: 15.5, fh: 8.6, fx: 11.2,
      weight: null, towing: 2200, price: null },
    'Calligraphy Hybrid AWD': { ...PAL_H, price: $(89828) },
  },
  'GWM|Haval H6|2026': {
    'Lux': { ...H6, price: $(35990) },
    'Ultra': { ...H6, price: null },
    'Lux Hybrid': { ...H6H, weight: 1690, price: $(40990) },
    'Ultra Hybrid': { ...H6H, weight: 1720, price: $(43990) },
    'Lux PHEV': { ...H6P, price: $(44990) },
    'Ultra PHEV': { ...H6P, price: $(47990) },
  },
  'Nissan|Qashqai|2026': {
    'ST-L e-POWER': { ...QQ, weight: 1676, price: $(45850) },
    'Ti e-POWER': { ...QQ, weight: 1697, price: $(49850) },
    'Ti-L e-POWER': { ...QQ, weight: 1701, price: $(53850) },
    'N-DESIGN e-POWER': { ...QQ, weight: 1718, price: $(54350) },
  },
  'Subaru|Outback|2026': {
    'AWD': { ...OB, weight: 1705, price: $(48990) },
    'AWD Premium': { ...OB, weight: 1732, price: $(53490) },
    'AWD Touring': { ...OB, weight: 1733, price: $(56990) },
    'AWD Wilderness': { ...OBT, weight: 1781, price: $(59690) },
    'AWD Wilderness Apex': { ...OBT, weight: 1802, price: $(62690) },
  },
  'Honda|CR-V|2026': {
    'VTi X': { ...CRV, fc: 9.3, fh: 5.8, fx: 7.1, weight: 1613, seats: 5, towing: 1500, price: $(44900) },
    'VTi L7': { ...CRV, fc: 9.4, fh: 6.1, fx: 7.3, weight: 1700, seats: 7, towing: 1000, cargo: null, price: $(54900) },
    'e:HEV X': { ...CRH, drivetrain: 'FWD', fc: 4.9, fh: 5.8, fx: 5.5, weight: 1741, price: $(49900) },
    'e:HEV L': { ...CRH, drivetrain: 'FWD', fc: 4.9, fh: 5.8, fx: 5.5, weight: 1744, price: $(53900) },
    'e:HEV LX': { ...CRH, drivetrain: 'AWD', fc: 5.4, fh: 6.0, fx: 5.7, weight: 1796, price: $(58900) },
    'e:HEV RS': { ...CRH, drivetrain: 'AWD', fc: 5.4, fh: 6.0, fx: 5.7, weight: 1828, price: $(64400) },
  },
  'Hyundai|Staria|2026': {
    'Staria Diesel': { ...B, engine: '2.2L I4 Turbo Diesel', displacement: 2199, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
      power: 130, torque: 430, transmission: '8-speed automatic', drivetrain: 'FWD', fc: 8.8, fh: 6.5, fx: 7.2, weight: null, seats: 8,
      towing: 2500, fuelTank: 75, price: $(54300) },
    'Elite': { ...ST35, price: $(58500) },
    'Highlander': { ...ST35, price: $(65500) },
    'Lounge Hybrid': { ...B, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', fuelType: 'hybrid',
      power: 180, torque: null, transmission: '6-speed automatic', drivetrain: 'FWD', fc: null, fh: null, fx: null, weight: null, seats: 7,
      price: $(73740) },
    'Load': existing('Hyundai', 'Staria', '2026', 'Load'),
  },
});
