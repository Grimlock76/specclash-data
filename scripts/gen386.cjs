'use strict';
// supplement386.json — 2026-10-25: VW Amarok (NF) dual-cab utes 2024 (MY23 cars
// Carsales files under 2024) and 2025 (MY25, + TDI500 10 Deserts Edition).
// Replaces stale rows ("TDI580 Style", ~ prices). Specs as the 2026 rows
// (gen271; same Carsales spec tables); 2025 kerb weights + all prices:
// Carsales variant pages (base price incl GST & LCT). 2024 weights not checked
// on the MY23 pages -> null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const a = (t, p, w) => ({ ...existing('Volkswagen', 'Amarok', 2026, t), weight: w ?? null, price: $(p) });

writeLineups(386, {
  'Volkswagen|Amarok|2024': {
    'TDI405 Core': a('TDI405 Core', 52990), 'TDI500 Life': a('TDI500 Life', 56990),
    'TDI500 Style': a('TDI500 Style', 66990), 'TDI600 Style': a('TDI600 Style', 70990),
    'TSI452 Aventura': a('TSI452 Aventura', 79990), 'TDI600 PanAmericana': a('TDI600 PanAmericana', 75990),
    'TDI600 Aventura': a('TDI600 Aventura', 79990),
  },
  'Volkswagen|Amarok|2025': {
    'TDI405 Core': a('TDI405 Core', 55490, 2283), 'TDI500 Life': a('TDI500 Life', 59490, 2317),
    'TDI500 Style': a('TDI500 Style', 69740, 2345), 'TDI500 10 Deserts Edition': a('TDI500 Style', 68490, 2409),
    'TDI600 Style': a('TDI600 Style', 73740, 2393), 'TSI452 Aventura': a('TSI452 Aventura', 82990, 2293),
    'TDI600 PanAmericana': a('TDI600 PanAmericana', 78990, 2394), 'TDI600 Aventura': a('TDI600 Aventura', 82990, 2406),
  },
});
