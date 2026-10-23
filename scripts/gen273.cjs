'use strict';
// supplement273.json — 2026-10-23: 2026 (AU) MINI Cooper hatch (F65/F66/J01)
// and Countryman (U25). Specs: Carsales variant pages (Carsales files the
// hatch under "Cooper"). Prices: CarsGuide 2026 MSRP lists (matching the
// MHEV/current rows Carsales' price-when-new points to). JCW Countryman
// braked towing shown as 0 kg -> null. EV ranges ADR where given, else WLTP;
// twin-motor torque null (Carsales lists one motor only).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const B = { topSpeed: null, acceleration: null, cargo: null, transmission: '7-speed dual-clutch' };
const P3 = { ...B, engine: '1.5L I3 Turbo Petrol', displacement: 1499, cylinders: 3, aspiration: 'Turbo', fuelType: 'petrol',
  drivetrain: 'FWD' };
const P4 = { ...P3, engine: '2.0L I4 Turbo Petrol', displacement: 1998, cylinders: 4 };
const EV = { ...B, engine: 'Single-Motor Electric', displacement: null, cylinders: null, aspiration: null, fuelType: 'electric',
  transmission: '1-speed automatic', drivetrain: 'FWD', fc: null, fh: null, fx: null };
const CM = { seats: 5, cargo: 505 };

writeLineups(273, {
  'Mini|Hatch|2026': {
    'C Core 5D': { ...P3, power: 115, torque: 230, fc: 7.8, fh: 5.1, fx: 6.1, acceleration: 8.0, topSpeed: 225, weight: 1320, seats: 5,
      fuelTank: 44, cargo: 275, price: $(43990) },
    'S Classic 5D': { ...P4, power: 150, torque: 300, fc: 8.9, fh: 5.3, fx: 6.6, acceleration: 6.8, topSpeed: 242, weight: 1355, seats: 5,
      fuelTank: 44, cargo: 275, price: $(51990) },
    'JCW Classic 3D': { ...P4, power: 170, torque: 380, fc: 9.2, fh: 5.4, fx: 6.8, acceleration: 6.1, topSpeed: 250, weight: 1330,
      seats: 4, price: $(57990) },
    'SE Favoured 3D': { ...EV, power: 160, torque: 330, battery: '54.2 kWh', range: 362, acceleration: 6.7, topSpeed: 170, weight: 1605,
      seats: 4, price: $(58990) },
  },
  'Mini|Countryman|2026': {
    'C Core': { ...P3, ...CM, power: 115, torque: 230, fc: 8.6, fh: 5.7, fx: 6.8, acceleration: 9.0, topSpeed: 212, weight: 1520,
      towing: 2000, fuelTank: 45, price: $(49990) },
    'C Classic': { ...P3, ...CM, power: 125, torque: 280, fc: null, fh: null, fx: 6.9, acceleration: 8.3, weight: 1545, price: $(54490) },
    'S ALL4 Classic': { ...P4, ...CM, power: 150, torque: 300, drivetrain: 'AWD', fc: 9.9, fh: 6.3, fx: 7.6, acceleration: 7.4,
      topSpeed: 228, weight: 1620, towing: 2000, fuelTank: 45, price: $(58990) },
    'JCW ALL4': { ...P4, ...CM, power: 221, torque: 400, drivetrain: 'AWD', fc: null, fh: null, fx: 8.3, acceleration: 5.4, topSpeed: 250,
      weight: 1660, price: $(75490) },
    'E Classic': { ...EV, ...CM, power: 150, torque: 250, battery: '66.5 kWh', range: 501, acceleration: 8.6, topSpeed: 170, weight: 1865,
      towing: 750, price: $(68990) },
    'SE ALL4 Classic': { ...EV, ...CM, engine: 'Dual-Motor Electric', drivetrain: 'AWD', power: 230, torque: null, battery: '66.5 kWh',
      range: 396, acceleration: 5.6, topSpeed: 180, weight: 2000, towing: 1200, price: $(73990) },
  },
});
