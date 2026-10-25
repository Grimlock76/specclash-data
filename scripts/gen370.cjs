'use strict';
// supplement370.json — 2026-10-25: Subaru WRX 2024 + 2025 (VB sedan / VN
// Sportswagon MY24 — same base prices both years; 2024 adds the Club Spec,
// 2025 the MY25 tS Spec B). Replaces stale rows ("WRX Premium", "WRX
// SportTech", ~ prices). Specs as the 2026 rows (gen281; same Carsales spec
// tables) + price when new: Carsales variant pages (base price incl GST &
// LCT). Weights tare-only -> null (Spec B: kerb 1562). "8-speed auto" on
// Carsales = the Sport Lineartronic CVT.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const w = t => existing('Subaru', 'WRX', 2026, t);
const M = { ...w('WRX Manual'), weight: null }, A = { ...w('tS'), weight: null };
const WG = { ...w('GT Sportswagon'), weight: null };
const SB = w('tS Spec B Manual');
const base = () => ({
  'WRX Manual': { ...M, price: $(47490) }, 'WRX Auto': { ...A, price: $(49990) },
  'RS Manual': { ...M, price: $(52990) }, 'RS Auto': { ...A, price: $(55490) },
  'tS': { ...A, price: $(57990) },
  'Sportswagon': { ...WG, price: $(51790) }, 'GT Sportswagon': { ...WG, price: $(57290) },
  'tS Sportswagon': { ...WG, price: $(59790) },
});

writeLineups(370, {
  'Subaru|WRX|2024': { ...base(), 'Club Spec Manual': { ...SB, weight: null, price: $(52590), fc: 13.8 } },
  'Subaru|WRX|2025': { ...base(), 'tS Spec B Manual': { ...SB, price: $(61490) } },
});
