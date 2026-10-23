'use strict';
// supplement287.json — 2026-10-23: 2025 (AU) Toyota RAV4 (XA50, hybrid-only
// MY25 range) and HiLux (dual-cab 4x4 utes + Workmate 2.4). Specs + price when
// new: Carsales 2025 variant pages. RAV4 power = Toyota's system output
// (160 kW 2WD / 163 kW eFour); hybrid system torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, seats: 5 };
const RV = { ...B, engine: '2.5L I4 Hybrid', displacement: 2487, cylinders: 4, aspiration: 'Naturally Aspirated', fuelType: 'hybrid',
  torque: null, transmission: 'CVT', fuelTank: 55, cargo: 542 };
const R2 = { ...RV, power: 160, drivetrain: 'FWD', fc: 4.8, fh: 4.7, fx: 4.7, towing: 480 };
const R4 = { ...RV, power: 163, drivetrain: 'AWD', fc: 5.0, fh: 4.8, fx: 4.8, towing: 1500 };
const HL = { ...B, engine: '2.8L I4 Turbo Diesel', displacement: 2755, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel',
  power: 150, drivetrain: '4WD', towing: 3500, fuelTank: 80 };
const HM = { ...HL, torque: 420, transmission: '6-speed manual' };
const HA = { ...HL, torque: 500, transmission: '6-speed automatic', fc: 9.4, fh: 7.0, fx: 7.9 };
const H48 = { ...HA, engine: '2.8L I4 Turbo Diesel (48V MHEV)' };

writeLineups(287, {
  'Toyota|RAV4|2025': {
    'GX 2WD': { ...R2, weight: 1650, price: $(42260) },
    'GX eFour': { ...R4, weight: 1705, price: $(45260) },
    'GXL 2WD': { ...R2, weight: 1675, price: $(45810) },
    'GXL eFour': { ...R4, weight: 1735, price: $(48810) },
    'XSE 2WD': { ...R2, weight: 1690, price: $(48910) },
    'XSE eFour': { ...R4, weight: 1745, price: $(51910) },
    'Cruiser 2WD': { ...R2, weight: 1755, price: $(51410) },
    'Cruiser eFour': { ...R4, weight: 1755, price: $(54410) },
    'Edge eFour': { ...R4, weight: 1760, groundClearance: 195, price: $(58360) },
  },
  'Toyota|HiLux|2025': {
    'Workmate 2.4 Auto 4x4': { ...HA, engine: '2.4L I4 Turbo Diesel', displacement: 2393, power: 110, torque: 400, fc: 9.3, fh: 6.9,
      fx: 7.8, weight: 2110, payload: 940, price: $(50420) },
    'SR Manual 4x4': { ...HM, fc: 8.8, fh: 6.7, fx: 7.4, weight: 2100, payload: 950, price: $(52640) },
    'SR Auto 4x4': { ...HA, weight: 2110, payload: 940, price: $(55190) },
    'SR5 Manual 4x4': { ...HM, fc: 9.3, fh: 6.7, fx: 7.7, weight: 2160, payload: 890, groundClearance: 216, price: $(60670) },
    'SR5 Auto 4x4': { ...HA, weight: 2085, payload: 1015, price: $(60250) },
    'SR5 48V Auto 4x4': { ...H48, fc: 8.0, fh: 6.7, fx: 7.2, weight: 2150, payload: 900, price: $(63260) },
    'Rogue 48V': { ...H48, fc: 8.0, fh: 7.7, fx: 7.8, weight: 2286, payload: 764, groundClearance: 265, price: $(71530) },
    'Rugged X 48V': { ...H48, fc: 7.7, fh: 7.6, fx: 7.6, weight: 2327, payload: 793, groundClearance: 224, price: $(71990) },
    'GR Sport': { ...HA, power: 165, torque: 550, fc: 9.2, fh: 7.5, fx: 8.1, weight: 2140, payload: 910, groundClearance: 265,
      price: $(74310) },
  },
});
