'use strict';
// supplement412.json — 2026-10-25: 2025 (AU) Volvo EX40 (MY25: Ultra Single
// Motor Extended Range, Ultra Twin Motor Performance, Black Edition) and EX30
// (MY25: Single Motor Extended Range Plus / Ultra, Twin Motor Performance
// Ultra). Replaces stale rows ("Single Motor", "Extended Range", ~ prices).
// Specs + price when new: Carsales 2025 variant pages (base price incl GST &
// LCT). Range ADR. Tare-only / below-tare weights null; dual-motor torque null.
// EX30 single-motor Ultra lists the twin's 1885 kg -> null.
const { writeLineups, $ } = require('./lineup-lib.cjs');
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, accelClaimed: true, ...o });
const S40 = { engine: 'Single Motor Electric', drivetrain: 'RWD', power: 185, torque: 420, battery: '82 kWh', range: 520,
  acceleration: 7.3, weight: null };
const T40 = { engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 300, torque: null, battery: '82 kWh', range: 485,
  acceleration: 4.8, weight: 2192 };
const S30 = { engine: 'Single Motor Electric', drivetrain: 'RWD', power: 200, torque: 343, battery: '69 kWh', range: 462,
  acceleration: 5.3, weight: null };

writeLineups(412, {
  'Volvo|EX40|2025': {
    'Ultra Single Motor Extended Range': ev({ ...S40, price: $(76990) }),
    'Ultra Twin Motor Performance': ev({ ...T40, price: $(81990) }),
    'Black Edition': ev({ ...T40, price: $(82990) }),
  },
  'Volvo|EX30|2025': {
    'Single Motor Extended Range Plus': ev({ ...S30, price: $(59990) }),
    'Single Motor Extended Range Ultra': ev({ ...S30, price: $(66290) }),
    'Twin Motor Performance Ultra': ev({ engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 315, torque: null, battery: '69 kWh',
      range: 445, acceleration: 3.6, weight: 1885, price: $(71290) }),
  },
});
