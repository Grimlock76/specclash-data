'use strict';
// supplement345.json — 2026-10-25: Toyota GR86 2024 and Subaru BRZ 2024 + 2026.
// Specs as the 2025 rows (gen344; same Carsales spec tables). Prices: Carsales
// price when new (base incl GST & LCT) for 2024; 2026 BRZ = CarsGuide 2026
// MSRP (Carsales drive-away only). tS Kiiro left out.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const g = (t, p, o = {}) => ({ ...existing('Toyota', 'GR86', 2025, t), price: $(p), ...o });
const b = (t, p) => ({ ...existing('Subaru', 'BRZ', 2025, t), price: $(p) });
const brz = p => ({
  'BRZ Manual': b('BRZ Manual', p[0]), 'BRZ Auto': b('BRZ Auto', p[1]),
  'S Manual': b('S Manual', p[2]), 'S Auto': b('S Auto', p[3]),
  'tS Manual': b('tS Manual', p[4]), 'tS Auto': b('tS Auto', p[5]),
});

writeLineups(345, {
  'Toyota|GR86|2024': {
    'GT Manual': g('GT Manual', 43240),
    'GT Auto': g('GT Auto', 43240),
    'GTS Manual': g('GTS Manual', 45390),
    'GTS Auto': g('GTS Auto', 45390, { weight: 1318 }),
  },
  'Subaru|BRZ|2024': brz([43790, 44790, 45090, 46090, 48690, 49690]),
  'Subaru|BRZ|2026': brz([44290, 45290, 45590, 46590, 49190, 50190]),
});
