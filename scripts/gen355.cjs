'use strict';
// supplement355.json — 2026-10-25: Kia EV5 2024, 2025, 2026 (OVc MY25/MY26 —
// same specs and prices all three years). Replaces stale rows ("Standard
// Range", "Long Range", "Long Range AWD"). Specs + price when new: Carsales
// variant pages (base price incl GST & LCT). Range ADR. Kerb below tare on
// every variant -> weight null; dual-motor torque null. 0-100 claimed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: 185, cargo: 513, weight: null, engine: 'Single Motor Electric', drivetrain: 'FWD',
  power: 160, torque: 310, battery: '88.1 kWh', towing: 1250, accelClaimed: true, ...o });
const AWD = { engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 230, torque: null };
const line = () => ({
  'Air Standard Range': ev({ battery: '64.2 kWh', range: 400, acceleration: 8.5, towing: 300, price: $(56770) }),
  'Air Long Range': ev({ range: 555, acceleration: 8.9, price: $(61170) }),
  'Earth AWD': ev({ ...AWD, range: 500, acceleration: 6.1, price: $(64770) }),
  'GT-Line AWD': ev({ ...AWD, range: 470, acceleration: 6.3, price: $(71770) }),
});

writeLineups(355, { 'Kia|EV5|2024': line(), 'Kia|EV5|2025': line(), 'Kia|EV5|2026': line() });
