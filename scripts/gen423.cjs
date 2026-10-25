'use strict';
// supplement423.json — 2026-10-25: 2024 (AU) Audi Q5 (FY, MY24; Carsales files
// the 35 TDI page as MY25, same spec). Eight grades incl. Dynamic Black editions
// and 40 TDI S line. Replaces stale rows ("40 TFSI quattro", "Black Edition").
// Specs as the 2025 rows (gen422); price when new: Carsales 2024 variant pages
// (base price incl GST & LCT). Tare-only weights null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const a = (t, p) => ({ ...existing('Audi', 'Q5', 2025, t), price: $(p) });

writeLineups(423, {
  'Audi|Q5|2024': {
    '35 TDI': a('35 TDI', 73400),
    '35 TDI Dynamic Black': a('35 TDI', 76200),
    '40 TDI Sport': a('40 TDI Sport', 87000),
    '40 TDI S line': a('40 TDI Sport', 89769),
    '45 TFSI Sport': a('45 TFSI Sport', 88315),
    '45 TFSI S line': a('45 TFSI S line', 96515),
    '45 TFSI Dynamic Black': a('45 TFSI Sport', 92115),
    '55 TFSI e S line': a('55 TFSI e S line', 113984),
  },
});
