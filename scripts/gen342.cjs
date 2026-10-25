'use strict';
// supplement342.json — 2026-10-25: Mitsubishi ASX 2025 (run-out XD + new
// Renault-based XE) and 2026 (XE), Hyundai Venue 2025 (QX.V5 autos). Replaces
// stale "MK2" rows. Specs: Carsales variant pages. Prices: Carsales base price
// incl GST & LCT; 2026 ASX = CarsGuide 2026 MSRP (Carsales drive-away only;
// matches Carsales' 2025 XE base prices).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5, cylinders: 4, drivetrain: 'FWD', fuelType: 'petrol' };
const XD20 = { ...B, engine: '2.0L I4 Petrol', displacement: 1998, aspiration: 'Naturally Aspirated', power: 110, torque: 197,
  transmission: 'CVT', fc: 9.5, fh: 6.4, fx: 7.6, weight: 1384, fuelTank: 63 };
const XD24 = { ...XD20, engine: '2.4L I4 Petrol', displacement: 2360, power: 123, torque: 222, fc: 10.4, fh: 6.4, fx: 7.9, weight: 1398 };
const XE = { ...B, engine: '1.3L I4 Turbo Petrol', displacement: 1332, aspiration: 'Turbo', power: 113, torque: 270,
  transmission: '7-speed dual-clutch', fc: 8.7, fh: 5.0, fx: 6.4 };
const VN = { ...B, engine: '1.6L I4 Petrol', displacement: 1591, aspiration: 'Naturally Aspirated', power: 90, torque: 151,
  transmission: '6-speed automatic', fc: 9.5, fh: 5.9, fx: 7.2, fuelTank: 45 };
const xe = p => ({
  'LS': { ...XE, weight: 1276, price: $(p.ls) },
  'Aspire': { ...XE, weight: 1294, price: $(p.as) },
  'Exceed': { ...XE, weight: 1294, price: $(p.ex) },
});

writeLineups(342, {
  'Mitsubishi|ASX|2025': {
    'ES (XD)': { ...XD20, price: $(27990) },
    'MR (XD)': { ...XD20, price: $(29740) },
    'GSR (XD)': { ...XD24, price: $(32740) },
    ...xe({ ls: 37740, as: 42690, ex: 46490 }),
  },
  'Mitsubishi|ASX|2026': xe({ ls: 37740, as: 42690, ex: 46490 }),
  'Hyundai|Venue|2025': {
    'Venue': { ...VN, weight: 1225, price: $(25000) },
    'Active': { ...VN, weight: 1225, price: $(27250) },
    'Elite': { ...VN, weight: 1142, price: $(29750) },
  },
});
