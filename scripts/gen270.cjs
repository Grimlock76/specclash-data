'use strict';
// supplement270.json — 2026-10-23: 2026 (AU) Volvo XC40, XC60, XC90 (MY27),
// EX30, EX40, EX90. Specs: Carsales variant pages (Redbook). Price when new:
// CarsGuide 2026 MSRP lists. PHEV system torque null; tare-only weights null.
// EX40 Twin Motor torque null (table repeats the single-motor 420 Nm, overview
// says 429). EX90 range is WLTP (no ADR figure published). EX90 Ultra Twin
// Motor Performance uses the spec-table figures (500 kW / 4.2 s); torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: 180, acceleration: null, cargo: null };
const I4 = { ...B, engine: '2.0L I4 Turbo Petrol (MHEV)', displacement: 1969, cylinders: 4, aspiration: 'Turbo', fuelType: 'petrol',
  transmission: '8-speed automatic' };
const XC40 = { ...I4, power: 145, torque: 300, drivetrain: 'FWD', seats: 5, towing: 1800, fuelTank: 54, cargo: 460, groundClearance: 211 };
const B5 = { ...I4, power: 183, torque: 350, drivetrain: 'AWD', towing: 2400, fuelTank: 71 };
const T8 = { ...I4, engine: '2.0L I4 Turbo PHEV', fuelType: 'plug-in hybrid', power: 340, torque: null, drivetrain: 'AWD',
  fc: null, fh: null, battery: '18.8 kWh' };
const EV1 = { ...B, engine: 'Single-Motor Electric', displacement: null, cylinders: null, aspiration: null, fuelType: 'electric',
  transmission: '1-speed automatic', drivetrain: 'RWD', fc: null, fh: null, fx: null };
const EV2 = { ...EV1, engine: 'Dual-Motor Electric', drivetrain: 'AWD' };
const EX30 = { ...EV1, power: 200, torque: 343, battery: '69 kWh', range: 462, acceleration: 5.3, weight: 1775, seats: 5, towing: 1600 };
const EX90T = { ...EV2, torque: null, battery: '106 kWh', range: 521, seats: 7, towing: 2200 };

writeLineups(270, {
  'Volvo|XC40|2026': {
    'Plus B4': { ...XC40, fc: 8.8, fh: 5.8, fx: 6.9, acceleration: 8.4, price: $(55490) },
    'Ultra B4 Bright': { ...XC40, fc: 9.1, fh: 6.0, fx: 7.1, acceleration: 8.5, price: $(62490) },
    'Ultra B4 Dark': { ...XC40, fc: 9.1, fh: 6.0, fx: 7.1, acceleration: 8.5, price: $(63490) },
  },
  'Volvo|XC60|2026': {
    'Plus B5 Bright': { ...B5, fc: 9.7, fh: 6.4, fx: 7.6, acceleration: 6.9, weight: 1880, seats: 5, cargo: 483, price: $(74990) },
    'Ultra B5 Dark': { ...B5, fc: 9.7, fh: 6.4, fx: 7.6, acceleration: 6.9, weight: 1880, seats: 5, cargo: 483, price: $(81990) },
    'Plus T8 PHEV Dark': { ...T8, fx: 1.6, range: 89, acceleration: 4.8, weight: 2200, seats: 5, towing: 2250, price: $(92990) },
    'Ultra T8 PHEV Dark': { ...T8, fx: 1.6, range: 89, acceleration: 4.8, weight: 2200, seats: 5, towing: 2250, price: $(101990) },
  },
  'Volvo|XC90|2026': {
    'Plus B5 Bright': { ...B5, fc: null, fh: null, fx: 8.1, acceleration: 7.7, seats: 7, price: $(97990) },
    'Ultra B5 Dark': { ...B5, fc: null, fh: null, fx: 8.1, acceleration: 7.7, seats: 7, price: $(105990) },
    'Plus T8 PHEV Dark': { ...T8, fx: 1.8, range: 77, acceleration: 5.3, seats: 7, towing: 2350, price: $(120990) },
    'Ultra T8 PHEV Dark': { ...T8, fx: 1.8, range: 77, acceleration: 5.3, seats: 7, towing: 2350, price: $(130990) },
  },
  'Volvo|EX30|2026': {
    'Plus P5 Long Range': { ...EX30, price: $(49990) },
    'Ultra P5 Long Range': { ...EX30, price: $(54990) },
  },
  'Volvo|EX40|2026': {
    'Ultra Single Motor Extended Range': { ...EV1, power: 185, torque: 420, battery: '82 kWh', range: 520, acceleration: 7.3,
      weight: 2000, seats: 5, towing: 1500, price: $(69990) },
    'Ultra Twin Motor Performance': { ...EV2, power: 300, torque: null, battery: '82 kWh', range: 485, acceleration: 4.8,
      weight: 2095, seats: 5, towing: 1800, price: $(74990) },
  },
  'Volvo|EX90|2026': {
    'Plus Single Motor': { ...EV1, power: 245, torque: 480, battery: '92 kWh', range: 479, acceleration: 6.8, seats: 7, towing: 1500,
      price: $(106990) },
    'Plus Twin Motor': { ...EX90T, power: 330, acceleration: 5.5, price: $(124990) },
    'Ultra Twin Motor Performance': { ...EX90T, power: 500, acceleration: 4.2, price: $(134990) },
  },
});
