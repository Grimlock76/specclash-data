'use strict';
// supplement373.json — 2026-10-25: Honda price-rule fixes + 2024 lineups.
//  - CR-V 2025 and HR-V 2025: the Carsales "price when new" figures used in
//    gen301 / gen304 are labelled "Indicative drive away price" and CarsGuide
//    2025 shows only Glass's ranges -> price null (as Civic / ZR-V 2025).
//  - HR-V 2024 (Vi X, e:HEV X, e:HEV L) and ZR-V 2024 (VTi X+, VTi L+, VTi LX,
//    e:HEV LX): Carsales files the same variants as 2025 -> 2025 specs, price
//    null (same drive-away-only situation). Replaces stale "VTi-S" etc. rows.
const { writeLineups, existing } = require('./lineup-lib.cjs');
const MAKES = require('../src/data/makes.json');
const nul = (md, y) => Object.fromEntries(MAKES.Honda[md][y].map(t => [t, { ...existing('Honda', md, +y, t), price: null }]));
const hr25 = nul('HR-V', '2025'), zr25 = nul('ZR-V', '2025');

writeLineups(373, {
  'Honda|CR-V|2025': nul('CR-V', '2025'),
  'Honda|HR-V|2025': hr25,
  'Honda|HR-V|2024': hr25,
  'Honda|ZR-V|2024': zr25,
});
