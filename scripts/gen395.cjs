'use strict';
// supplement395.json — 2026-10-25: Toyota GR Corolla 2024 + 2026 — AU sells
// one grade, GTS (6-speed manual / 8-speed auto); Carsales files it under
// Corolla "GR GTS". Same specs and base prices as the 2025 rows (gen299) per
// the Carsales 2024 / 2026 variant pages (base price incl GST & LCT).
// Replaces stale rows ("Core", "Circuit", "Premium", "Morizo Edition", ~).
const { writeLineups, existing } = require('./lineup-lib.cjs');
const g = () => ({ 'GTS Manual': existing('Toyota', 'GR Corolla', 2025, 'GTS Manual'),
  'GTS Auto': existing('Toyota', 'GR Corolla', 2025, 'GTS Auto') });

writeLineups(395, { 'Toyota|GR Corolla|2024': g(), 'Toyota|GR Corolla|2026': g() });
