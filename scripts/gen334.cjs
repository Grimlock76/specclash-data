'use strict';
// supplement334.json — 2026-10-25: 2024 + 2025 (AU) BYD Seal and 2025 MG4.
// Replaces stale rows ("RWD Standard Range" etc., 4 MG4 grades with guessed
// figures). Specs + price when new: Carsales variant pages (base price incl
// GST & LCT). Range = ADR, else WLTP. Seal 2024 pages list tare only -> weight
// null. MG4 Essence 64 (140 kW MY26): drive-away only, CarsGuide used ranges
// -> price null. Dual-motor torque null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, engine: 'Single Motor Electric', drivetrain: 'RWD', ...o });
const SD = { power: 150, torque: 310, battery: '61.5 kWh', range: 510 };
const SP = { power: 230, torque: 360, battery: '82.5 kWh', range: 650, acceleration: 5.9 };
const SF = { engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 390, torque: null, battery: '82.5 kWh', range: 580, acceleration: 3.8 };

writeLineups(334, {
  'BYD|Seal|2024': {
    'Dynamic': ev({ ...SD, acceleration: 7.5, weight: null, price: $(49888) }),
    'Premium': ev({ ...SP, weight: null, price: $(58798) }),
    'Performance': ev({ ...SF, weight: null, price: $(68748) }),
  },
  'BYD|Seal|2025': {
    'Dynamic': ev({ ...SD, acceleration: 7.6, weight: 1922, price: $(46990) }),
    'Premium': ev({ ...SP, weight: 2055, price: $(52990) }),
    'Performance': ev({ ...SF, weight: 2185, price: $(61990) }),
  },
  'MG|MG4|2025': {
    'Excite 51': ev({ power: 125, torque: 250, battery: '51 kWh', range: 405, acceleration: 7.7, weight: 1655, price: $(37990) }),
    'Essence 64 (140kW)': ev({ power: 140, torque: 350, battery: '64 kWh', range: 452, acceleration: 7.5, weight: 1765, price: null }),
    'Essence 64': ev({ power: 150, torque: 250, battery: '64 kWh', range: 505, acceleration: 7.2, weight: 1672, price: $(44990) }),
    'Long Range 77': ev({ power: 180, torque: 350, battery: '77 kWh', range: 590, acceleration: 6.5, weight: 1748, price: $(50990) }),
    'XPOWER': ev({ engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 300, torque: null, battery: '64 kWh', range: 460,
      acceleration: 3.8, weight: 1800, price: $(55990) }),
  },
});
