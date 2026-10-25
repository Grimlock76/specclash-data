'use strict';
// supplement401.json — 2026-10-25: 2026 (AU) Lexus UX — UX300h only (the
// UX300e is gone); same specs and base prices as the 2025 rows (gen400) per
// the Carsales 2026 variant pages (base price incl GST & LCT). Replaces stale
// rows ("UX 200", "UX 250h", "UX 300e", ~ prices).
const { writeLineups, existing } = require('./lineup-lib.cjs');
const T = ['UX300h Luxury', 'UX300h Sports Luxury', 'UX300h Sports Luxury AWD', 'UX300h F Sport', 'UX300h F Sport AWD'];

writeLineups(401, { 'Lexus|UX|2026': Object.fromEntries(T.map(t => [t, existing('Lexus', 'UX', 2025, t)])) });
