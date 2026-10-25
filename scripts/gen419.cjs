'use strict';
// supplement419.json — 2026-10-25: BMW i5 2024, 2025, 2026 — eDrive40 M Sport
// sedan (G60), M60 xDrive sedan (G60) and M60 xDrive Touring (G61); same specs
// and base prices all three years. Replaces stale rows ("xDrive40", ~ prices).
// Specs + price when new: Carsales variant pages (base price incl GST & LCT).
// Range ADR; dual-motor torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, battery: '84 kWh', accelClaimed: true, ...o });
const M60 = { engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 442, torque: null };
const line = () => ({
  'eDrive40 M Sport': ev({ engine: 'Single Motor Electric', drivetrain: 'RWD', power: 250, torque: 430, range: 550, acceleration: 6.0,
    weight: 2130, price: $(155900) }),
  'M60 xDrive': ev({ ...M60, range: 506, acceleration: 3.8, weight: 2305, price: $(215900) }),
  'M60 xDrive Touring': ev({ ...M60, range: 501, acceleration: 3.9, weight: 2350, price: $(219900) }),
});

writeLineups(419, { 'BMW|i5|2024': line(), 'BMW|i5|2025': line(), 'BMW|i5|2026': line() });
