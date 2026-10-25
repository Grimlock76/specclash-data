'use strict';
// supplement393.json — 2026-10-25: Toyota bZ4X 2024 + 2025 (pre-update FWD 150
// kW / AWD 160 kW, 71.4 kWh — the facelifted 165 / 252 kW cars Carsales also
// files under 2025 stay in 2026), and fills the 2026 AWD row's gaps (range 517
// km ADR, 0-100 5.1 s, kerb 2035 kg). Replaces stale rows ("GX", "GXL", "Koba",
// ~ prices). Specs + price when new: Carsales variant pages (base price incl
// GST & LCT). Range ADR. Dual-motor torque null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const MAKES = require('../src/data/makes.json');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, battery: '71.4 kWh', accelClaimed: true, ...o });
const old = () => ({
  'FWD': ev({ engine: 'Single Motor Electric', drivetrain: 'FWD', power: 150, torque: 266, range: 535, acceleration: 7.5, weight: 1960,
    price: $(66000) }),
  'AWD': ev({ engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 160, torque: null, range: 485, acceleration: 6.9, weight: 2055,
    price: $(74900) }),
});
const y26 = Object.fromEntries(MAKES.Toyota.bZ4X['2026'].map(t => [t, existing('Toyota', 'bZ4X', 2026, t)]));
y26.AWD = { ...y26.AWD, range: 517, acceleration: 5.1, accelClaimed: true, weight: 2035 };

writeLineups(393, { 'Toyota|bZ4X|2024': old(), 'Toyota|bZ4X|2025': old(), 'Toyota|bZ4X|2026': y26 });
