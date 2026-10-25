'use strict';
// supplement408.json — 2026-10-25: Polestar 4 (100 kWh) 2024, 2025, 2026 —
// Long Range Single Motor (200 kW RWD) and Long Range Dual Motor (400 kW AWD);
// Plus / Performance packs and the 2026 Rear Motor / Pilot grades not added.
// Replaces stale ~ prices. Specs: Carsales variant pages. Prices: 2024 + 2025
// = Carsales price when new (base price incl GST & LCT; 2025 Dual = the MY26
// listing's $88,350); 2026 = CarsGuide MSRP. Range ADR.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: 526, battery: '100 kWh', accelClaimed: true, ...o });
const SM = { engine: 'Single Motor Electric', drivetrain: 'RWD', power: 200, torque: 343, range: 620, acceleration: 7.1, weight: 2230,
  towing: 1500 };
const DM = { engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 400, torque: null, range: 590, acceleration: 3.8, weight: 2355,
  towing: 2000 };
const line = (s, d) => ({ 'Long Range Single Motor': ev({ ...SM, price: $(s) }), 'Long Range Dual Motor': ev({ ...DM, price: $(d) }) });

writeLineups(408, {
  'Polestar|4|2024': line(81500, 91350),
  'Polestar|4|2025': line(81500, 88350),
  'Polestar|4|2026': line(78500, 88350),
});
