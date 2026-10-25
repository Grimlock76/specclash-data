'use strict';
// supplement335.json — 2026-10-25: 2024 (AU) MG4 (MY24). Specs + price when
// new: Carsales 2024 variant pages (base price incl GST & LCT). Range = ADR.
// XPOWER dual-motor torque not listed -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, engine: 'Single Motor Electric', drivetrain: 'RWD', ...o });

writeLineups(335, {
  'MG|MG4|2024': {
    'Excite 51': ev({ power: 125, torque: 250, battery: '51 kWh', range: 405, acceleration: 7.7, weight: 1655, price: $(39990) }),
    'Excite 64': ev({ power: 150, torque: 250, battery: '64 kWh', range: 535, acceleration: 7.2, weight: 1648, price: $(44990) }),
    'Essence 64': ev({ power: 150, torque: 250, battery: '64 kWh', range: 505, acceleration: 7.2, weight: 1672, price: $(46990) }),
    'Long Range 77': ev({ power: 180, torque: 350, battery: '77 kWh', range: 590, acceleration: 6.5, weight: 1748, price: $(52990) }),
    'XPOWER': ev({ engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 300, torque: null, battery: '64 kWh', range: 460,
      acceleration: 3.8, weight: 1800, price: $(59990) }),
  },
});
