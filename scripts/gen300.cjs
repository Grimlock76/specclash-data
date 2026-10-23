'use strict';
// supplement300.json — 2026-10-23: 2026 (AU) KGM (SsangYong) Musso, diesel
// 4x4 + new Musso EV. Specs + price when new: Carsales 2026 variant pages
// (KGM prices nationally drive-away, which is what Carsales lists). Diesel
// torque null (spec table 400 Nm vs overview 420 Nm). EV AWD torque null
// (Carsales lists one motor only). Catalogue keeps the SsangYong make name.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const D = { engine: '2.2L I4 Turbo Diesel', displacement: 2157, cylinders: 4, aspiration: 'Turbo', fuelType: 'diesel', power: 133,
  torque: null, transmission: '6-speed automatic', drivetrain: '4WD', fc: 10.9, fh: 7.5, fx: 8.6, acceleration: null, topSpeed: null,
  cargo: null, seats: 5, weight: 2097, towing: 3500, payload: 783, fuelTank: 75 };
const EV = { displacement: null, cylinders: null, aspiration: null, fuelType: 'electric', transmission: '1-speed automatic', fc: null,
  fh: null, fx: null, acceleration: null, topSpeed: null, cargo: null, seats: 5, battery: '80.6 kWh', towing: 1800 };
writeLineups(300, {
  'SsangYong|Musso|2026': {
    'ELX': { ...D, price: $(42500) },
    'Advance': { ...D, price: $(46500) },
    'Ultimate': { ...D, price: $(51500) },
    'EV 2WD': { ...EV, engine: 'Single-Motor Electric', drivetrain: 'FWD', power: 152, torque: 339, range: 420, weight: 2165, payload: 905,
      price: $(60000) },
    'EV AWD': { ...EV, engine: 'Dual-Motor Electric', drivetrain: 'AWD', power: 266, torque: null, range: 379, weight: 2285, payload: 805,
      price: $(64000) },
  },
});
