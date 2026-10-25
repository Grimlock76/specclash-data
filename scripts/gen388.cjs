'use strict';
// supplement388.json — 2026-10-25: VW Tayron (R4) 2025 — MY25 petrol range
// (110TSI Life, 150TSI Life, 150TSI Elegance, 195TSI R-Line); the MY26 eHybrids
// Carsales also files under 2025 stay in 2026. Replaces stale ~ prices. Specs
// as the 2026 rows (gen271) + price when new: Carsales MY25 variant pages
// (base price incl GST & LCT). Kerb below tare -> null (150TSI Life, Elegance).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const t = (n, p, w) => ({ ...existing('Volkswagen', 'Tayron', 2026, n), weight: w, price: $(p) });

writeLineups(388, {
  'Volkswagen|Tayron|2025': {
    '110TSI Life': t('110TSI Life', 48290, 1669),
    '150TSI Life': t('150TSI Life', 53990, null),
    '150TSI Elegance': t('150TSI Elegance', 59490, null),
    '195TSI R-Line': t('195TSI R-Line', 73490, 1844),
  },
});
