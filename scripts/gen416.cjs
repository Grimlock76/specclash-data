'use strict';
// supplement416.json — 2026-10-25: BMW iX3 2024 + 2025 (G08: M Sport, M Sport
// Pro — 210 kW / 400 Nm, 80 kWh, 440 km ADR) and 2026 (new NA5 "Neue Klasse":
// 40 M Sport RWD 235 kW 86.9 kWh, 50 xDrive M Sport AWD 345 kW 113.4 kWh).
// Replaces stale rows ("Impressive", ~ prices). Specs + price when new:
// Carsales variant pages (base price incl GST & LCT). G08 weights tare-only ->
// null. 50 xDrive torque conflicts (435 vs 645 Nm) -> null; 40 range is the
// manufacturer figure (no ADR/WLTP label).
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, accelClaimed: true, ...o });
const G08 = { engine: 'Single Motor Electric', drivetrain: 'RWD', power: 210, torque: 400, battery: '80 kWh', range: 440,
  acceleration: 6.8, weight: null };
const old = () => ({ 'M Sport': ev({ ...G08, price: $(91000) }), 'M Sport Pro': ev({ ...G08, price: $(104900) }) });

writeLineups(416, {
  'BMW|iX3|2024': old(),
  'BMW|iX3|2025': old(),
  'BMW|iX3|2026': {
    '40 M Sport': ev({ engine: 'Single Motor Electric', drivetrain: 'RWD', power: 235, torque: 500, battery: '86.9 kWh', range: 635,
      acceleration: 5.9, weight: 2085, price: $(89900) }),
    '50 xDrive M Sport': ev({ engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 345, torque: null, battery: '113.4 kWh',
      range: 634, acceleration: 4.9, weight: 2285, price: $(112500) }),
  },
});
