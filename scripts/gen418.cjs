'use strict';
// supplement418.json — 2026-10-25: BMW iX (I20) 2024 (xDrive40 Sport, xDrive50
// Sport, M60), 2025 (those + LCI xDrive45 M Sport) and 2026 (LCI xDrive45 M
// Sport only). Replaces stale rows ("xDrive40", "xDrive50", ~ prices). Specs
// + price when new: Carsales variant pages (base price incl GST & LCT).
// Range ADR; dual-motor torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, engine: 'Dual Motor Electric', drivetrain: 'AWD', torque: null,
  accelClaimed: true, ...o });
const X40 = ev({ power: 240, battery: '76.6 kWh', range: 420, acceleration: 6.1, weight: 2365, price: $(136900) });
const X50 = ev({ power: 385, battery: '112 kWh', range: 620, acceleration: 4.6, weight: 2510, price: $(185400) });
const M60 = ev({ power: 455, battery: '112 kWh', range: 585, acceleration: 3.8, weight: 2584, price: $(233400) });
const X45 = ev({ power: 300, battery: '94.8 kWh', range: 522, acceleration: 5.1, weight: 2450, price: $(142900) });

writeLineups(418, {
  'BMW|iX|2024': { 'xDrive40 Sport': X40, 'xDrive50 Sport': X50, 'M60': M60 },
  'BMW|iX|2025': { 'xDrive40 Sport': X40, 'xDrive45 M Sport': X45, 'xDrive50 Sport': X50, 'M60': M60 },
  'BMW|iX|2026': { 'xDrive45 M Sport': X45 },
});
