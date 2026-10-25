'use strict';
// supplement379.json — 2026-10-25: BYD Dolphin 2024 (Dynamic / Premium) and
// 2025 + 2026 (Essential / Premium — same MY25 cars, repriced). Replaces stale
// rows ("Standard Range", "Extended Range", ~ prices). Specs + price when new:
// Carsales variant pages (base price incl GST & LCT). Range ADR. 0-100 claimed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: 345, engine: 'Single Motor Electric', drivetrain: 'FWD',
  accelClaimed: true, ...o });
const SR = { power: 70, torque: 180, battery: '44.9 kWh', range: 410, acceleration: 12.3, weight: 1506 };
const ER = { power: 150, torque: 310, battery: '60.5 kWh', range: 490, acceleration: 7.0, weight: 1658 };
const y25 = () => ({ 'Essential': ev({ ...SR, price: $(29990) }), 'Premium': ev({ ...ER, price: $(36990) }) });

writeLineups(379, {
  'BYD|Dolphin|2024': { 'Dynamic': ev({ ...SR, price: $(36890) }), 'Premium': ev({ ...ER, price: $(42890) }) },
  'BYD|Dolphin|2025': y25(),
  'BYD|Dolphin|2026': y25(),
});
