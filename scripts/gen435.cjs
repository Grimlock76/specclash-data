'use strict';
// supplement435.json — 2026-10-25: Mercedes-Benz GLS (X167 facelift) 2024 + 2025
// (Carsales slug "gls-class"). Replaces stale rows (GLS400d, GLS580, ~ prices).
// Adds the Maybach GLS600 and 2025 GLS450 d Edition 7. Specs as the 2026 rows
// (GLS450 torque 500 Nm per Carsales); price when new: Carsales variant pages
// (base price incl GST & LCT). Maybach: tare-only → weight null; 0-100 null
// (4.9 vs 4.2 s between years); seats null (spec says 5, overview 7).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const e = (t, p, o) => ({ ...existing('Mercedes-Benz', 'GLS', 2026, t), price: $(p), ...o });
const MAY = p => ({ engine: '4.0L V8 Twin-Turbo Petrol (MHEV)', displacement: 3982, cylinders: 8, aspiration: 'Twin-Turbo', fuelType: 'petrol',
  transmission: '9-speed automatic', drivetrain: 'AWD', power: 410, torque: 770, fc: 19.3, fh: 10.4, fx: 13.7, acceleration: null,
  topSpeed: 250, seats: null, cargo: null, weight: null, accelClaimed: true, price: $(p) });

writeLineups(435, {
  'Mercedes-Benz|GLS|2024': {
    'GLS450 d 4MATIC': e('GLS450 d 4MATIC', 184900), 'GLS63 AMG 4MATIC+': e('GLS63 AMG 4MATIC+', 299900),
    'Maybach GLS600 4MATIC': MAY(409900),
  },
  'Mercedes-Benz|GLS|2025': {
    'GLS450 4MATIC': e('GLS450 4MATIC', 176700, { torque: 500 }), 'GLS450 d 4MATIC': e('GLS450 d 4MATIC', 189100),
    'GLS450 d 4MATIC Edition 7': e('GLS450 d 4MATIC', 171000), 'GLS63 AMG 4MATIC+': e('GLS63 AMG 4MATIC+', 307100),
    'Maybach GLS600 4MATIC': MAY(419900),
  },
});
