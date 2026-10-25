'use strict';
// supplement409.json — 2026-10-25: Polestar 3 (111 kWh) 2024, 2025, 2026 —
// Long Range Single Motor (220 kW RWD; from 2025), Long Range Dual Motor (360
// kW) and Dual Motor Performance Pack (380 kW). Plus / Pilot pack variants and
// the 2026 Rear Motor / Dual Motor (non-LR) grades not added. Replaces stale ~
// prices. Specs: Carsales variant pages. Prices: 2024 + 2025 = Carsales price
// when new (base price incl GST & LCT); 2026 = CarsGuide MSRP. Range ADR, else
// WLTP. Tare-only weights null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, battery: '111 kWh', weight: null, accelClaimed: true, ...o });
const SM = { engine: 'Single Motor Electric', drivetrain: 'RWD', power: 220, torque: 490, range: 706, acceleration: 7.8, towing: 1500 };
const DM = { engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 360, torque: null, range: 636, acceleration: 5.0, towing: 2200 };
const PP = { ...DM, power: 380, range: 567, acceleration: 4.7 };

writeLineups(409, {
  'Polestar|3|2024': { 'Long Range Dual Motor': ev({ ...DM, range: 610, price: $(131574) }),
    'Performance Pack': ev({ ...PP, price: $(142754) }) },
  'Polestar|3|2025': { 'Long Range Single Motor': ev({ ...SM, price: $(116754) }),
    'Long Range Dual Motor': ev({ ...DM, price: $(131054) }), 'Performance Pack': ev({ ...PP, price: $(142754) }) },
  'Polestar|3|2026': { 'Long Range Single Motor': ev({ ...SM, price: $(121920) }),
    'Long Range Dual Motor': ev({ ...DM, price: $(132900) }), 'Performance Pack': ev({ ...PP, price: $(141900) }) },
});
