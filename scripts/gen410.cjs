'use strict';
// supplement410.json — 2026-10-25: Volvo XC40 (B4 mild hybrid) 2024 (MY24:
// Plus B4 FWD, Ultimate B4 Bright / Dark AWD) and 2025 additions (MY25 Ultra
// B4 Dark, Black Edition — Carsales also files them under 2024). The
// Recharge EVs are the EX40 / EC40 models. Replaces stale rows ("T4
// Momentum", "T5 R-Design", "Recharge", ~ prices). Specs as the 2025 rows
// (gen305) + price when new: Carsales variant pages (base price incl GST &
// LCT). Kerb below tare / tare-only -> weight null (fixes 2025 Ultra Bright).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const PLUS = existing('Volvo', 'XC40', 2025, 'Plus B4');
const AWD = { ...existing('Volvo', 'XC40', 2025, 'Ultra B4 Bright'), weight: null };

writeLineups(410, {
  'Volvo|XC40|2024': {
    'Plus B4': { ...PLUS, price: $(54990) },
    'Ultimate B4 Bright': { ...AWD, price: $(61990) },
    'Ultimate B4 Dark': { ...AWD, price: $(62990) },
  },
  'Volvo|XC40|2025': {
    'Plus B4': PLUS,
    'Ultra B4 Bright': { ...AWD, price: $(61990) },
    'Ultra B4 Dark': { ...AWD, price: $(62990) },
    'Black Edition': { ...AWD, price: $(63990) },
  },
});
