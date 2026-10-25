'use strict';
// supplement402.json — 2026-10-25: 2024 (AU) Lexus UX — run-out UX250h (135 kW
// system) Luxury / Sports Luxury / F Sport 2WD, the updated UX300h Luxury, and
// UX300e Luxury / Sports Luxury. Replaces stale rows ("UX 200", ~ prices).
// Specs: Carsales 2024 variant pages + 2025 rows (gen400) for the UX300h /
// UX300e; price when new: Carsales 2024 pages (base price incl GST & LCT).
// (UX250h AWD and the other UX300h grades not verified for 2024 -> left out.)
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const u = t => existing('Lexus', 'UX', 2025, t);
const H250 = { ...u('UX300h Luxury'), power: 135, fc: 4.3, fh: 4.6, fx: 4.5, weight: 1625 };

writeLineups(402, {
  'Lexus|UX|2024': {
    'UX250h Luxury': { ...H250, price: $(54320) },
    'UX250h Sports Luxury': { ...H250, price: $(61350) },
    'UX250h F Sport': { ...H250, price: $(61995) },
    'UX300h Luxury': u('UX300h Luxury'),
    'UX300e Luxury': u('UX300e Luxury'),
    'UX300e Sports Luxury': u('UX300e Sports Luxury'),
  },
});
