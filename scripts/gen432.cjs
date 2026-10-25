'use strict';
// supplement432.json — 2026-10-25: Mercedes-Benz GLA 2024 + 2025 (Carsales slug
// "gla-class"). Replaces stale rows (GLA180, GLA45 S — neither listed for AU
// 2024+; ~ prices). Adds City / Special Edition grades and the 2025 GLA250 e.
// Specs as the 2026 rows; price when new: Carsales variant pages (base price
// incl GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const e = (t, p) => ({ ...existing('Mercedes-Benz', 'GLA', 2026, t), price: $(p) });

writeLineups(432, {
  'Mercedes-Benz|GLA|2024': {
    'GLA200': e('GLA200', 68900), 'GLA200 City Edition': e('GLA200', 64600), 'GLA250 4MATIC': e('GLA250 4MATIC', 78900),
    'GLA35 AMG 4MATIC': e('GLA35 AMG 4MATIC', 96900),
  },
  'Mercedes-Benz|GLA|2025': {
    'GLA200': e('GLA200', 63600), 'GLA200 Special Edition': e('GLA200', 63600), 'GLA250 e': e('GLA250 e', 78000),
    'GLA250 4MATIC': e('GLA250 4MATIC', 80500), 'GLA250 4MATIC Special Edition': e('GLA250 4MATIC', 80500),
    'GLA35 AMG 4MATIC': e('GLA35 AMG 4MATIC', 99000),
  },
});
