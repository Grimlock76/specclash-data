'use strict';
// supplement407.json — 2026-10-25: Polestar 2 2024 (MY24) + 2025 (MY25) —
// Standard / Long Range Single Motor, Long Range Dual Motor (+ Performance
// Pack). Replaces stale rows ("BST Edition 270", ~ prices). Specs as the 2026
// rows (gen283) + kerb weights, ranges and price when new: Carsales variant
// pages (base price incl GST & LCT). Range ADR, else WLTP (2024 pages list
// WLTP only: 518 / 654 / 591 km).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const p = (t, o) => ({ ...existing('Polestar', '2', 2026, t), ...o, price: $(o.price) });
const SR = 'Standard Range Single Motor', LR = 'Long Range Single Motor', DM = 'Long Range Dual Motor',
  PP = 'Long Range Dual Motor Performance Pack';

writeLineups(407, {
  'Polestar|2|2024': {
    [SR]: p(SR, { range: 518, weight: 1944, price: 67400 }), [LR]: p(LR, { range: 654, weight: 2009, price: 71400 }),
    [DM]: p(DM, { range: 591, weight: 2108, price: 76400 }), [PP]: p(PP, { range: 568, weight: 2105, price: 80380 }),
  },
  'Polestar|2|2025': {
    [SR]: p(SR, { range: 546, weight: 1944, price: 62400 }), [LR]: p(LR, { range: 659, weight: 2009, price: 66400 }),
    [DM]: p(DM, { range: 596, weight: 2108, price: 71400 }), [PP]: p(PP, { range: 568, weight: 2105, price: 80380 }),
  },
});
