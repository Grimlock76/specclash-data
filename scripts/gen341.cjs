'use strict';
// supplement341.json — 2026-10-25: 2024 (AU) Subaru Crosstrek (G6X MY24) and
// Toyota C-HR (2nd gen, hybrid only). Specs as the 2025 rows (gen340, same
// MY24 cars / same Carsales spec tables); price when new from the Carsales
// 2024 variant pages (base price incl GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const c = (t, p) => ({ ...existing('Subaru', 'Crosstrek', 2025, t), price: $(p) });
const h = (t, p) => ({ ...existing('Toyota', 'C-HR', 2025, t), price: $(p) });

writeLineups(341, {
  'Subaru|Crosstrek|2024': {
    '2.0L': c('2.0L', 34990),
    '2.0X': c('2.0X', 36990),
    '2.0R': c('2.0R', 38490),
    'Hybrid L': c('Hybrid L', 38590),
    '2.0S': c('2.0S', 41490),
    'Hybrid S': c('Hybrid S', 45090),
  },
  'Toyota|C-HR|2024': {
    'GXL Hybrid': h('GXL Hybrid', 42990),
    'Koba Hybrid': h('Koba Hybrid', 49990),
    'GR Sport Hybrid AWD': h('GR Sport Hybrid AWD', 54990),
  },
});
