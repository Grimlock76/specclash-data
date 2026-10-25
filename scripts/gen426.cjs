'use strict';
// supplement426.json — 2026-10-25: Audi Q6 e-tron 2024–26 (incl. SQ6). Replaces
// stale "55 quattro" / "SQ6" rows. Grades: e-tron (RWD 185 kW, 83 kWh; MY25+),
// Performance (RWD 225 kW, 100 kWh), quattro (285 kW), SQ6 (360 kW), 2026 Sport
// (MY26 RWD 185 kW). Specs + price when new: Carsales Q6 / SQ6 variant pages
// (base price incl GST & LCT; MY25 quattro $122,500 listed under 2024 used for
// 2025 too). 2026 quattro / SQ6 are MY27 drive-away only → price null. Range
// ADR. Kerb < tare / tare-only → weight null. Dual-motor torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, weight: null, accelClaimed: true, ...o });
const RWD = { engine: 'Single Motor Electric', drivetrain: 'RWD' };
const AWD = { engine: 'Dual Motor Electric', drivetrain: 'AWD', torque: null };
const base = (range, price) => ev({ ...RWD, power: 185, torque: 450, battery: '83 kWh', range, acceleration: 7.6, towing: 2000, price });
const perf = () => ev({ ...RWD, power: 225, torque: 485, battery: '100 kWh', range: 558, acceleration: 6.7, towing: 2000, price: $(115500) });
const quat = price => ev({ ...AWD, power: 285, battery: '100 kWh', range: 542, acceleration: 5.9, towing: null, price });
const sq6 = (range, price) => ev({ ...AWD, power: 360, battery: '100 kWh', range, acceleration: 4.4, towing: 2400, price });

writeLineups(426, {
  'Audi|Q6 e-tron|2024': { 'Performance': perf(), 'quattro': quat($(122500)), 'SQ6': sq6(568, $(151400)) },
  'Audi|Q6 e-tron|2025': { 'e-tron': base(493, $(99900)), 'Performance': perf(), 'quattro': quat($(122500)), 'SQ6': sq6(585, $(156400)) },
  'Audi|Q6 e-tron|2026': { 'Sport': base(466, $(104018)), 'Performance': perf(), 'quattro': quat(null), 'SQ6': sq6(585, null) },
});
