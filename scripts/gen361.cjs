'use strict';
// supplement361.json — 2026-10-25: 2024 (AU) Kia EV6 (CV MY24) and EV9 (MV
// MY24). Replaces stale rows ("Air" AWD, "Earth", "Long Range" grades, ~
// prices). Specs + price when new: Carsales MY24 variant pages (base price incl
// GST & LCT). Range ADR. Tare-only weights null; dual-motor torque null.
// 0-100 claimed.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, weight: null, engine: 'Single Motor Electric', drivetrain: 'RWD', accelClaimed: true, ...o });
const AWD = { engine: 'Dual Motor Electric', drivetrain: 'AWD', torque: null };
const EV6 = { power: 168, torque: 350, battery: '77.4 kWh', topSpeed: 185, cargo: 480 };
const EV9 = { seats: 7, topSpeed: null, cargo: null, battery: '99.8 kWh', power: 282.6, towing: 2500 };

writeLineups(361, {
  'Kia|EV6|2024': {
    'Air RWD': ev({ ...EV6, cargo: 490, range: 528, acceleration: 7.3, price: $(72590) }),
    'GT-Line RWD': ev({ ...EV6, range: 504, acceleration: 7.3, price: $(79590) }),
    'GT-Line AWD': ev({ ...EV6, ...AWD, power: 239, range: 484, acceleration: 5.2, price: $(87590) }),
    'GT': ev({ ...EV6, ...AWD, power: 430, topSpeed: 260, range: 424, acceleration: 3.5, price: $(99590) }),
  },
  'Kia|EV9|2024': {
    'Air RWD': ev({ ...EV9, power: 160, torque: 350, battery: '76.1 kWh', range: 443, acceleration: 8.2, towing: 900, price: $(97000) }),
    'Earth AWD': ev({ ...EV9, ...AWD, range: 512, acceleration: 6.0, price: $(106500) }),
    'GT-Line AWD': ev({ ...EV9, ...AWD, range: 505, acceleration: 5.3, price: $(121000) }),
  },
});
