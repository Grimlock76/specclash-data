'use strict';
// supplement350.json — 2026-10-25: 2024 (AU) Hyundai Palisade (LX2.V4 MY24) and
// adds the 2025 Calligraphy Black Ink diesel (LX2.V5). Specs as the 2025 rows
// (gen349; same Carsales spec tables). Price when new: Carsales MY24/MY25
// variant pages (base price incl GST & LCT). Kerb below tare -> weight null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const e = (y, t, o) => ({ ...existing('Hyundai', 'Palisade', 2025, t), ...o, price: $(o.price) });
const y25 = ['Elite', 'Elite Diesel AWD', 'Calligraphy', 'Calligraphy Black Ink', 'Calligraphy Diesel AWD'];

writeLineups(350, {
  'Hyundai|Palisade|2024': {
    'Elite': e(2024, 'Elite', { price: 66800 }),
    'Elite Diesel AWD': e(2024, 'Elite Diesel AWD', { price: 70800 }),
    'Calligraphy': e(2024, 'Calligraphy', { price: 75900 }),
    'Calligraphy Black Ink': e(2024, 'Calligraphy Black Ink', { price: 76900 }),
    'Calligraphy Diesel AWD': e(2024, 'Calligraphy Diesel AWD', { price: 79219 }),
    'Calligraphy Black Ink Diesel AWD': e(2024, 'Calligraphy Diesel AWD', { price: 79988 }),
  },
  'Hyundai|Palisade|2025': {
    ...Object.fromEntries(y25.map(t => [t, existing('Hyundai', 'Palisade', 2025, t)])),
    'Calligraphy Black Ink Diesel AWD': e(2025, 'Calligraphy Diesel AWD', { weight: null, price: 81719 }),
  },
});
