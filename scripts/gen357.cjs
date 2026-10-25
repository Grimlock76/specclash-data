'use strict';
// supplement357.json — 2026-10-25: Kia K4 2025 (CL4m MY25 launch sedans: 2.0
// 112 kW / 192 Nm 6-speed auto, + the GT-Line sedan) and 2026 additions (Sport
// and Sport+ hatch, MY26 CVT — Carsales lists them under 2025 too). Replaces
// stale 2025 rows (~ prices). Specs + price when new: Carsales variant pages
// (base price incl GST & LCT). Kerb below tare -> weight null (also fixes the
// 2026 GT-Line Sedan: 1395 < 1433).
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const MAKES = require('../src/data/makes.json');
const k26 = t => existing('Kia', 'K4', 2026, t);
const MY25 = { ...k26('S Sedan'), power: 112, torque: 192, transmission: '6-speed automatic', fc: 10.3, fh: 5.6, fx: 7.4, weight: null };
const HATCH = { ...k26('S Hatch'), weight: null };
const y26 = Object.fromEntries(MAKES.Kia.K4['2026'].map(t => [t, k26(t)]));
y26['GT-Line Sedan'] = { ...y26['GT-Line Sedan'], weight: null };

writeLineups(357, {
  'Kia|K4|2025': {
    'S Sedan': { ...MY25, price: $(30590) },
    'Sport Sedan': { ...MY25, price: $(35190) },
    'Sport+ Sedan': { ...MY25, price: $(37590) },
    'GT-Line Sedan': y26['GT-Line Sedan'],
  },
  'Kia|K4|2026': {
    'S Sedan': y26['S Sedan'], 'Sport Sedan': y26['Sport Sedan'], 'Sport+ Sedan': y26['Sport+ Sedan'],
    'GT-Line Sedan': y26['GT-Line Sedan'], 'S Hatch': y26['S Hatch'],
    'Sport Hatch': { ...HATCH, price: $(36690) },
    'Sport+ Hatch': { ...HATCH, price: $(39090) },
    'GT-Line Hatch': y26['GT-Line Hatch'],
  },
});
