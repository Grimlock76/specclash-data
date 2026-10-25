'use strict';
// supplement366.json — 2026-10-25: Mazda CX-80 (KL) 2024 + 2025 — Carsales
// lists the same 10 launch variants (same specs and base prices) under both
// years. Replaces stale rows ("GT SP Diesel", "Azami PHEV", ~ prices). Specs
// as the 2026 rows (gen281, same Carsales spec tables); weights + price when
// new: Carsales MY24/25 variant pages (base price incl GST & LCT).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const c = t => existing('Mazda', 'CX-80', 2026, t);
const G40 = c('G40e Pure'), D50 = c('D50e Pure'), P50 = { ...c('P50e Touring'), fuelTank: null };
const line = () => ({
  'G40e Pure': { ...G40, weight: 2089, price: $(55200) },
  'G40e Touring': { ...G40, weight: 2084, price: $(62200) },
  'G40e GT': { ...G40, weight: 2114, price: $(69200) },
  'G40e Azami': { ...G40, weight: 2120, price: $(74400) },
  'D50e Touring': { ...D50, weight: 2106, price: $(64200) },
  'D50e GT': { ...D50, weight: 2130, price: $(71200) },
  'D50e Azami': { ...D50, weight: 2136, price: $(76400) },
  'P50e Touring': { ...P50, weight: 2237, price: $(75250) },
  'P50e GT': { ...P50, weight: 2273, price: $(82250) },
  'P50e Azami': { ...P50, weight: 2267, price: $(87450) },
});

writeLineups(366, { 'Mazda|CX-80|2024': line(), 'Mazda|CX-80|2025': line() });
