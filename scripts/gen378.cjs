'use strict';
// supplement378.json — 2026-10-25: BYD Sealion 6 (DM-i PHEV) 2024 (launch
// Dynamic FWD + Premium AWD) and 2025 (Essential, Dynamic Extended Range,
// Premium AWD, Premium Extended Range AWD). Replaces stale rows ("PHEV",
// "Premium FWD", ~ prices). Specs as the 2026 rows (gen283) where the variant
// matches + Carsales variant pages; price when new: Carsales (base price incl
// GST & LCT). Power = combined system; system torque not listed -> null.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const s = t => existing('BYD', 'Sealion 6', 2026, t);
const ESS = s('Essential'), DER = s('Dynamic Extended Range'), PER = s('Premium Extended Range AWD');
const PREM = { ...PER, power: 238, battery: '18.3 kWh', range: 81, fx: 1.4, acceleration: 5.9, weight: 2100 };

writeLineups(378, {
  'BYD|Sealion 6|2024': { 'Dynamic': { ...ESS, price: $(48990) }, 'Premium AWD': { ...PREM, price: $(52990) } },
  'BYD|Sealion 6|2025': {
    'Essential': { ...ESS, price: $(42990) },
    'Dynamic Extended Range': { ...DER, price: $(46990) },
    'Premium AWD': { ...PREM, price: $(52990) },
    'Premium Extended Range AWD': { ...PER, price: $(52990) },
  },
});
