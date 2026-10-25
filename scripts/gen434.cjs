'use strict';
// supplement434.json — 2026-10-25: Mercedes-Benz GLE SUV (V167 facelift) 2024 +
// 2025 (Carsales slug "gle-class"). Replaces stale rows (GLE350de, "GLE300d",
// ~ prices). Adds Night Edition / Edition 7 (7 seats) / AMG Line Plus /
// Edition R grades. Specs as the 2026 rows; price when new: Carsales variant
// pages (base price incl GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const e = (t, p, o) => ({ ...existing('Mercedes-Benz', 'GLE', 2026, t), price: $(p), ...o });

writeLineups(434, {
  'Mercedes-Benz|GLE|2024': {
    'GLE300 d 4MATIC': e('GLE300 d 4MATIC', 144900), 'GLE300 d 4MATIC Night Edition': e('GLE300 d 4MATIC', 141600),
    'GLE450 d 4MATIC': e('GLE450 d 4MATIC', 166900), 'GLE450 4MATIC': e('GLE450 4MATIC', 159900),
    'GLE53 AMG 4MATIC+': e('GLE53 AMG 4MATIC+', 190900), 'GLE63 S AMG 4MATIC+': e('GLE63 S AMG 4MATIC+', 268900),
  },
  'Mercedes-Benz|GLE|2025': {
    'GLE300 d 4MATIC': e('GLE300 d 4MATIC', 136600), 'GLE300 d 4MATIC Edition 7': e('GLE300 d 4MATIC', 141800, { seats: 7 }),
    'GLE450 d 4MATIC': e('GLE450 d 4MATIC', 154900), 'GLE450 4MATIC': e('GLE450 4MATIC', 163600),
    'GLE450 4MATIC AMG Line Plus Edition': e('GLE450 4MATIC', 163300), 'GLE53 AMG 4MATIC+': e('GLE53 AMG 4MATIC+', 195300),
    'GLE53 AMG 4MATIC+ Edition R': e('GLE53 AMG 4MATIC+', 188100), 'GLE63 S AMG 4MATIC+': e('GLE63 S AMG 4MATIC+', 275300),
  },
});
