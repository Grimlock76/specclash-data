'use strict';
// supplement380.json — 2026-10-25: BYD Shark 6 2024 (Premium only; Carsales
// files the MY25 launch car under 2024) and 2025 (Dynamic cab chassis +
// Premium), and BYD Sealion 7 2025 (Premium RWD / Performance AWD). Same specs
// and base prices as the 2026 rows (gen255 / gen261) per the Carsales 2024/25
// variant pages (base price incl GST & LCT). Replaces stale rows ("6",
// "Standard Range", "Long Range AWD", ~ prices).
const { writeLineups, existing } = require('./lineup-lib.cjs');
const sh = t => existing('BYD', 'Shark', 2026, t), s7 = t => existing('BYD', 'Sealion 7', 2026, t);

writeLineups(380, {
  'BYD|Shark|2024': { 'Premium': sh('Premium') },
  'BYD|Shark|2025': { 'Dynamic': sh('Dynamic'), 'Premium': sh('Premium') },
  'BYD|Sealion 7|2025': { 'Premium': s7('Premium'), 'Performance': s7('Performance') },
});
