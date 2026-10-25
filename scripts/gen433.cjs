'use strict';
// supplement433.json — 2026-10-25: Mercedes-Benz GLC SUV (X254) 2024 + 2025
// (Carsales slug "glc-class"). Replaces stale rows (2WD "GLC200" / "GLC300",
// GLC300e, ~ prices) with the AU 4MATIC grades plus Avantgarde / Edition R /
// Carbon Edition. 2024 has no GLC350 e listed. Specs as the 2026 rows; price
// when new: Carsales variant pages (base price incl GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const e = (t, p) => ({ ...existing('Mercedes-Benz', 'GLC', 2026, t), price: $(p) });

writeLineups(433, {
  'Mercedes-Benz|GLC|2024': {
    'GLC200 4MATIC': e('GLC200 4MATIC', 89000), 'GLC300 4MATIC': e('GLC300 4MATIC', 113900),
    'GLC300 4MATIC Avantgarde': e('GLC300 4MATIC', 95700), 'GLC43 AMG 4MATIC': e('GLC43 AMG 4MATIC', 146900),
    'GLC43 AMG 4MATIC Edition R': e('GLC43 AMG 4MATIC', 141600), 'GLC63 S E Performance': e('GLC63 S E Performance', 199500),
  },
  'Mercedes-Benz|GLC|2025': {
    'GLC200 4MATIC': e('GLC200 4MATIC', 89000), 'GLC200 4MATIC Avantgarde': e('GLC200 4MATIC', 85400),
    'GLC300 4MATIC': e('GLC300 4MATIC', 117000), 'GLC350 e 4MATIC': e('GLC350 e 4MATIC', 99900),
    'GLC43 AMG 4MATIC': e('GLC43 AMG 4MATIC', 147500), 'GLC43 AMG 4MATIC Edition R': e('GLC43 AMG 4MATIC', 141600),
    'GLC43 AMG 4MATIC Carbon Edition': e('GLC43 AMG 4MATIC', 145800), 'GLC63 S E Performance': e('GLC63 S E Performance', 200700),
  },
});
