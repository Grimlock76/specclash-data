'use strict';
// supplement421.json — 2026-10-25: BMW iX1 + iX2 2024 and 2026 — same grades
// and specs as 2025 (gen415). Price when new: Carsales 2024 / 2026 variant
// pages (base price incl GST & LCT; 2026 xDrive30 M Sport iX1 $77,900 and iX2
// $79,900 — repriced). Replaces stale rows.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const a = (m, t, p) => ({ ...existing('BMW', m, 2025, t), price: $(p) });

writeLineups(421, {
  'BMW|iX1|2024': { 'eDrive20 xLine': a('iX1', 'eDrive20 xLine', 80600), 'xDrive30 xLine': a('iX1', 'xDrive30 xLine', 86800),
    'xDrive30 M Sport': a('iX1', 'xDrive30 M Sport', 86800) },
  'BMW|iX1|2026': { 'eDrive20 xLine': a('iX1', 'eDrive20 xLine', 80600), 'xDrive30 xLine': a('iX1', 'xDrive30 xLine', 86800),
    'xDrive30 M Sport': a('iX1', 'xDrive30 M Sport', 77900) },
  'BMW|iX2|2024': { 'eDrive20 M Sport': a('iX2', 'eDrive20 M Sport', 84700), 'xDrive30 M Sport': a('iX2', 'xDrive30 M Sport', 87600) },
  'BMW|iX2|2026': { 'eDrive20 M Sport': a('iX2', 'eDrive20 M Sport', 84700), 'xDrive30 M Sport': a('iX2', 'xDrive30 M Sport', 79900) },
});
