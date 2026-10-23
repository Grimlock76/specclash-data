'use strict';
// supplement260.json — 2026-10-23: 2026 (AU) Kia Sorento + Hyundai Santa Fe.
// Specs: Carsales variant pages. Prices: Carsales "price when new"; CarsGuide
// 2026 MSRP where Carsales shows only a drive-away range (Sorento HEV S/Sport/
// Sport+, all PHEVs; Santa Fe Elite/Calligraphy petrol, 7-seat).
// Hybrid weights Carsales gives only as tare → null (except where kerb listed).
// Santa Fe hybrid 172 kW / 367 Nm = system output (Carsales overview);
// Kia publishes no Sorento HEV/PHEV system torque → null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const base = { acceleration: null, topSpeed: null, seats: 7 };
const SD = { ...base, engine: '2.2L I4 Turbo Diesel', displacement: 2151, cylinders: 4, aspiration: 'Turbo', power: 148, torque: 440,
  transmission: '8-speed dual-clutch', drivetrain: 'AWD', fc: 7.5, fh: 5.2, fx: 6.0, fuelType: 'diesel', weight: 1828,
  towing: 2000, fuelTank: 67, cargo: 179 };
const SH = { ...base, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', power: 169, torque: null,
  transmission: '6-speed automatic', drivetrain: 'FWD', fc: 4.7, fh: 5.8, fx: 5.4, fuelType: 'hybrid', weight: null,
  towing: 1650, fuelTank: 67, cargo: 179 };
const SP = { ...base, engine: '1.6L I4 Turbo PHEV', displacement: 1598, cylinders: 4, aspiration: 'Turbo', power: 195, torque: null,
  transmission: '6-speed automatic', drivetrain: 'AWD', fc: null, fh: null, fx: 1.6, fuelType: 'plug-in hybrid', battery: '14.0 kWh',
  range: 55, weight: null, towing: 1010, fuelTank: 47, cargo: 175 };
const SF = { ...base, engine: '2.5L I4 Turbo Petrol', displacement: 2497, cylinders: 4, aspiration: 'Turbo', power: 206, torque: 422,
  transmission: '8-speed dual-clutch', fuelType: 'petrol', towing: 2000, fuelTank: 67, cargo: 642 };
const SFA = { drivetrain: 'AWD', fc: 12.9, fh: 6.9, fx: 9.1, weight: 1915 };
const SFH = { ...base, engine: '1.6L I4 Turbo Hybrid', displacement: 1598, cylinders: 4, aspiration: 'Turbo', power: 172, torque: 367,
  transmission: '6-speed automatic', fuelType: 'hybrid', fc: 6.2, fh: 5.3, fx: 5.6, towing: 1650, fuelTank: 67, cargo: 628 };
writeLineups(260, {
  'Kia|Sorento|2026': {
    'S': { ...SD, price: $(54630) },
    'Sport': { ...SD, price: $(57250) },
    'Sport+': { ...SD, price: $(62180) },
    'GT-Line': { ...SD, price: $(69540) },
    'HEV S': { ...SH, price: $(56675) },
    'HEV Sport': { ...SH, price: $(59325) },
    'HEV Sport+': { ...SH, price: $(64255) },
    'HEV GT-Line': { ...SH, weight: 1951, price: $(71615) },
    'PHEV S': { ...SP, price: $(71175) },
    'PHEV Sport': { ...SP, price: $(73825) },
    'PHEV Sport+': { ...SP, price: $(78755) },
    'PHEV GT-Line': { ...SP, price: $(86115) },
  },
  'Hyundai|Santa Fe|2026': {
    'Santa Fe': { ...SF, drivetrain: 'FWD', fc: 12.6, fh: 6.2, fx: 8.6, weight: 1850, price: $(54650) },
    'Elite': { ...SF, ...SFA, price: $(63900) },
    'Calligraphy': { ...SF, ...SFA, price: $(73900) },
    'Hybrid': { ...SFH, drivetrain: 'FWD', weight: 1925, price: $(57650) },
    'Hybrid Elite AWD': { ...SFH, drivetrain: 'AWD', weight: 1990, price: $(67150) },
    'Hybrid Calligraphy AWD': { ...SFH, drivetrain: 'AWD', weight: 1990, price: $(77150) },
  },
});
