'use strict';
// supplement413.json — 2026-10-25: Volvo EX30 2024 (MY24 prices; specs as the
// 2025 rows, gen412), EX40 2024 (= the XC40 Recharge Pure Electric /
// Recharge Twin, which Carsales still files under XC40 for 2024: 175 kW 69 kWh
// / 300 kW 82 kWh, WLTP range only) and EC40 2025 (Ultra Single Motor
// Extended Range only). Replaces stale ~ rows. Price when new: Carsales
// variant pages (base price incl GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const e30 = (t, p) => ({ ...existing('Volvo', 'EX30', 2025, t), price: $(p) });
const ev = o => ({ fuelType: 'electric', aspiration: 'Electric', transmission: '1-speed automatic', cylinders: null, displacement: null,
  fc: null, fh: null, fx: null, seats: 5, topSpeed: null, cargo: null, accelClaimed: true, ...o });

writeLineups(413, {
  'Volvo|EX30|2024': {
    'Single Motor Extended Range Plus': e30('Single Motor Extended Range Plus', 59990),
    'Single Motor Extended Range Ultra': e30('Single Motor Extended Range Ultra', 64990),
    'Twin Motor Performance Ultra': e30('Twin Motor Performance Ultra', 69990),
  },
  'Volvo|EX40|2024': {
    'Single Motor': ev({ engine: 'Single Motor Electric', drivetrain: 'FWD', power: 175, torque: null, battery: '69 kWh', range: 435,
      acceleration: 7.3, weight: null, price: $(76990) }),
    'Twin Motor Performance': ev({ engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 300, torque: null, battery: '82 kWh',
      range: 485, acceleration: 4.8, weight: null, price: $(85990) }),
  },
  'Volvo|EC40|2025': {
    'Ultra Single Motor Extended Range': ev({ engine: 'Single Motor Electric', drivetrain: 'RWD', power: 185, torque: 420,
      battery: '82 kWh', range: 540, acceleration: 7.3, weight: 2057, price: $(76990) }),
  },
});
