'use strict';
// supplement430.json — 2026-10-25: Mercedes-Benz C-Class sedan (W206) 2024 + 2025.
// Replaces stale rows (C220d — not listed for AU 2024+; duplicate "C63 S AMG" /
// "AMG C63 S E Performance" → "C63 S AMG E Performance"; ~ prices). Adds Sport /
// Night / Edition R / AMG Line Plus editions. Specs as the 2026 rows (gen265),
// 2024 C43 = pre-update 300 kW / 4.6 s. Price when new: Carsales variant pages
// (base price incl GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const e = (t, p, o) => ({ ...existing('Mercedes-Benz', 'C-Class', 2026, t), price: $(p), ...o });
const C43_24 = { power: 300, acceleration: 4.6 };

writeLineups(430, {
  'Mercedes-Benz|C-Class|2024': {
    'C200': e('C200', 92600, { fx: 6.9 }), 'C200 Sport Edition': e('C200', 88400), 'C200 Night Edition': e('C200', 87800),
    'C300': e('C300', 98100), 'C350 e': e('C350 e', 98200),
    'C43 AMG': e('C43 AMG', 142300, C43_24), 'C43 AMG Edition R': e('C43 AMG', 114000, C43_24),
    'C63 S AMG E Performance': e('C63 S AMG E Performance', 193100),
  },
  'Mercedes-Benz|C-Class|2025': {
    'C200': e('C200', 87800), 'C200 Sport Edition': e('C200', 88327), 'C300': e('C300', 98200),
    'C300 AMG Line Plus Edition': e('C300', 95400), 'C350 e': e('C350 e', 98200), 'C43 AMG': e('C43 AMG', 123800),
    'C63 S AMG E Performance': e('C63 S AMG E Performance', 193100),
  },
});
