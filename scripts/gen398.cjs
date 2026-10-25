'use strict';
// supplement398.json — 2026-10-25: 2026 (AU) Lexus NX — same variants and
// specs as 2025 (gen397) minus the NX250, repriced. Price when new: Carsales
// 2026 variant pages (base price incl GST & LCT). Replaces stale rows.
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const n = (t, p) => ({ ...existing('Lexus', 'NX', 2025, t), price: $(p) });

writeLineups(398, {
  'Lexus|NX|2026': {
    'NX350h Luxury': n('NX350h Luxury', 71830), 'NX350h Luxury AWD': n('NX350h Luxury AWD', 76630),
    'NX350h Sports Luxury': n('NX350h Sports Luxury', 79330), 'NX350h Sports Luxury AWD': n('NX350h Sports Luxury AWD', 85090),
    'NX350h F Sport': n('NX350h F Sport', 79580), 'NX350h F Sport AWD': n('NX350h F Sport AWD', 85090),
    'NX350 F Sport': n('NX350 F Sport', 79580),
    'NX450h+ Luxury': n('NX450h+ Luxury', 84630), 'NX450h+ F Sport': n('NX450h+ F Sport', 96090),
  },
});
