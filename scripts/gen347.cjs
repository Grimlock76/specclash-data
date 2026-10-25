'use strict';
// supplement347.json — 2026-10-25: 2025 (AU) Hyundai Ioniq 6 (CE.V3 facelift
// MY25, + the Ioniq 6 N filed under 2025). Replaces stale rows ("Techniq",
// "Ultimate", "Active"). Specs + price when new: Carsales 2025 variant pages
// (base price incl GST & LCT). Range = ADR where listed, else WLTP. Tare-only
// weights null; dual-motor torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, weight: null, engine: 'Single Motor Electric', drivetrain: 'RWD',
  ...o });
const LR = { power: 168, torque: 350, battery: '77.4 kWh', range: 545, acceleration: 7.4 };
const AW = { engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 239, torque: null, battery: '77.4 kWh', range: 519, acceleration: 5.1 };

writeLineups(347, {
  'Hyundai|Ioniq 6|2025': {
    'Standard Range RWD': ev({ power: 111, torque: 350, battery: '53 kWh', range: 429, acceleration: 8.8, price: $(67300) }),
    'Long Range RWD': ev({ ...LR, range: 614, acceleration: 8.8, price: $(73300) }),
    'Dynamiq RWD': ev({ ...LR, price: $(78500) }),
    'Epiq RWD': ev({ ...LR, price: $(82000) }),
    'Dynamiq AWD': ev({ ...AW, price: $(83000) }),
    'Epiq AWD': ev({ ...AW, price: $(86500) }),
    'N': ev({ ...AW, power: 448, battery: '84 kWh', range: 487, acceleration: 3.4, topSpeed: 257, price: $(114918) }),
  },
});
