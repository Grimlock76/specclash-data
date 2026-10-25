'use strict';
// supplement431.json — 2026-10-25: Mercedes-Benz E-Class sedan (W214) 2024 + 2025.
// Replaces stale W213-era rows (E220d, E300e, E400e 4MATIC, "AMG E53 4MATIC+",
// ~ prices). Specs as the 2026 rows (gen265); price when new: Carsales variant
// pages (base price incl GST & LCT). E53 wagon (2024, unpriced) not added.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const e = (t, p) => ({ ...existing('Mercedes-Benz', 'E-Class', 2026, t), price: $(p) });

writeLineups(431, {
  'Mercedes-Benz|E-Class|2024': { 'E200': e('E200', 117900), 'E300': e('E300', 131500), 'E53 AMG': e('E53 AMG', 199900) },
  'Mercedes-Benz|E-Class|2025': {
    'E200': e('E200', 117900), 'E300': e('E300', 132000), 'E300 AMG Night Edition': e('E300 AMG Night Edition', 129400),
    'E53 AMG': e('E53 AMG', 199900), 'E53 AMG Dark Carbon Edition': e('E53 AMG Dark Carbon Edition', 206900),
  },
});
