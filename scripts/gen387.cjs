'use strict';
// supplement387.json — 2026-10-25: VW Touareg (CR) 2024 (MY24) and 2025 (MY25 +
// MY26 210TDI Wolfsburg Edition filed under 2025) — 170TDI, 210TDI Elegance,
// 210TDI R-Line, R eHybrid. Replaces stale rows ("190TSI", "Touareg R", ~
// prices). Specs as the 2026 rows (gen271) + Carsales variant pages; price
// when new: Carsales (base price incl GST & LCT). Tare-only / below-tare
// weights null. R-Line combined 7.4 (city/highway not listed). R eHybrid: 340
// kW system, torque null, 51 km range / 3.3 L combined per the MY24/25 pages.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const t = n => existing('Volkswagen', 'Touareg', 2026, n);
const D170 = t('170TDI'), D210 = { ...t('210TDI Elegance'), weight: null };
const RL = { ...D210, fc: null, fh: null, fx: 7.4 };
const R = { ...t('R eHybrid'), range: 51, fx: 3.3 };

writeLineups(387, {
  'Volkswagen|Touareg|2024': {
    '170TDI': { ...D170, weight: null, price: $(86790) },
    '210TDI Elegance': { ...D210, price: $(99990) },
    '210TDI R-Line': { ...RL, price: $(109990) },
    'R eHybrid': { ...R, weight: null, price: $(129990) },
  },
  'Volkswagen|Touareg|2025': {
    '170TDI': { ...D170, weight: 2224, price: $(89490) },
    '210TDI Elegance': { ...D210, price: $(103490) },
    '210TDI R-Line': { ...RL, weight: 2309, price: $(113490) },
    '210TDI Wolfsburg Edition': { ...RL, weight: 2309, price: $(124990) },
    'R eHybrid': { ...R, weight: 2463, price: $(133490) },
  },
});
