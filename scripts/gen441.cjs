'use strict';
// supplement441.json — 2026-11-05: 0-100 km/h gap fill by cross-referencing
// identical powertrains (same engine, kW within 1, torque, gearbox, drive) sold
// overseas — the owner's rule: names/markets may differ, engines may not.
// Claims (accelClaimed true): Toyota Ireland/Finland/Europe spec guides, Hyundai
// Germany/Slovakia/Europe tech-data PDFs, Kia Ireland (Sorento PHEV), Hyundai AU
// (i30 N; hatch via Chasing Cars), LC300 Performance Hybrid (AU claim quoted by
// Fleet Auto News / 4X4 Australia; 790 Nm system torque from toyota.com.au).
// Tests (accelClaimed false): Drive.com.au VBox — Santa Fe Elite 2.5T AWD 7.7 s,
// Santa Fe Hybrid Elite AWD 8.5 s (tested trim only).
// Skipped on purpose: preliminary/"pending homologation" figures (2026 RAV4
// hybrid, Niro HEV), unlabelled rows (C-HR 2.0 AWD, HiLux 2.8 manual "10.13"),
// conflicts (Ioniq 5 168 kW: EU 7.5 vs AU outlets 7.3/7.4), possible 48V
// differences (Tucson 1.6T AWD), Inster Cross (not listed separately), 2026
// Corolla hybrid (body not recorded, hatch 9.1 vs sedan 9.3).
const fs = require('fs'), path = require('path');
const { writeLineups, existing } = require('./lineup-lib.cjs');
const makes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'makes.json'), 'utf8'));

const C = s => ({ acceleration: s, accelClaimed: true });   // maker claim
const T = s => ({ acceleration: s, accelClaimed: false });  // published test
const set = (trims, v) => Object.fromEntries(trims.map(t => [t, v]));

const FILL = {
  // ---- Hyundai
  'Hyundai|i30 N|2025': { ...set(['N Manual', 'N Premium Manual'], C(5.9)), 'Sedan N Premium Manual': C(5.8), 'Sedan N Premium DCT': C(5.3) },
  'Hyundai|i30 N|2026': set(['N Manual', 'N Premium Manual'], C(5.9)),
  'Hyundai|Santa Fe|2025': { 'Elite AWD': T(7.7), 'Hybrid Elite AWD': T(8.5) },
  'Hyundai|Santa Fe|2026': { 'Elite': T(7.7), 'Hybrid Elite AWD': T(8.5) },
  'Hyundai|Kona|2025': set(['Hybrid', 'Hybrid Premium'], C(11.2)),
  'Hyundai|Kona|2026': set(['Hybrid', 'Hybrid Elite', 'Hybrid Elite N Line', 'Hybrid Premium', 'Hybrid Premium N Line'], C(11.2)),
  'Hyundai|Ioniq 5|2025': { 'Standard Range RWD': C(8.5), 'N Line Premium AWD': C(5.3) },
  'Hyundai|Ioniq 5|2026': { 'N Line Premium AWD': C(5.3) },
  'Hyundai|Staria|2025': set(['Staria Diesel AWD', 'Elite Diesel AWD', 'Highlander Diesel AWD'], C(13.5)),
  'Hyundai|Staria|2026': { ...set(['Elite Diesel AWD', 'Highlander Diesel AWD'], C(13.5)), 'Staria Diesel 2WD': C(12.4) },
  'Hyundai|Inster|2025': { 'Standard Range': C(11.7), 'Extended Range': C(10.6) },
  'Hyundai|Inster|2026': { 'Standard Range': C(11.7), 'Extended Range': C(10.6) },
  // ---- Kia
  'Kia|Sorento|2025': set(['PHEV S', 'PHEV GT-Line'], C(8.7)),
  'Kia|Sorento|2026': set(['PHEV S', 'PHEV Sport', 'PHEV Sport+', 'PHEV GT-Line'], C(8.7)),
  // ---- Toyota
  'Toyota|Corolla|2025': {
    ...set(['Ascent Sport Hybrid Hatch', 'SX Hybrid Hatch', 'ZR Hybrid Hatch'], C(9.1)),
    ...set(['Ascent Sport Hybrid Sedan', 'SX Hybrid Sedan', 'ZR Hybrid Sedan'], C(9.3)),
  },
  'Toyota|C-HR|2025': set(['GXL Hybrid', 'Koba Hybrid'], C(9.9)),
  'Toyota|C-HR|2026': set(['GXL Hybrid', 'Koba Hybrid'], C(9.9)),
  'Toyota|Prado|2025': set(['GX', 'GXL', 'VX', 'Altitude', 'Kakadu'], C(12.3)),
  'Toyota|Prado|2026': set(['GX', 'GXL', 'VX', 'Altitude', 'Kakadu'], C(12.3)),
  'Toyota|HiLux|2025': {
    'Workmate 2.4 Auto 4x4': C(12.8),
    ...set(['SR Auto 4x4', 'SR5 Extra Cab Auto 4x4', 'SR5 48V Auto 4x4', 'Rogue 48V', 'Rugged X 48V'], C(10.7)),
  },
  'Toyota|HiLux|2026': set(['SR 48V', 'SR5 48V', 'Rugged X 48V', 'Rogue 48V'], C(10.7)),
  'Toyota|RAV4|2025': {
    ...set(['GX 2WD', 'GXL 2WD', 'XSE 2WD', 'Cruiser 2WD'], C(8.4)),
    ...set(['GX eFour', 'GXL eFour', 'XSE eFour', 'Cruiser eFour', 'Edge eFour'], C(8.1)),
  },
  'Toyota|RAV4|2026': { ...set(['GR Sport PHEV', 'XSE PHEV eFour'], C(5.8)), 'XSE PHEV': C(7.5) },
  'Toyota|Yaris Cross|2025': {
    ...set(['GX Hybrid', 'GXL Hybrid', 'Urban Hybrid', 'GR Sport Hybrid'], C(11.2)),
    ...set(['GX Hybrid AWD', 'GXL Hybrid AWD', 'Urban Hybrid AWD'], C(11.8)),
  },
  'Toyota|Yaris Cross|2026': {
    ...set(['GX Hybrid', 'GXL Hybrid', 'Urban Hybrid', 'GR Sport Hybrid'], C(11.2)),
    ...set(['GX Hybrid AWD', 'GXL Hybrid AWD', 'Urban Hybrid AWD'], C(11.8)),
  },
  'Toyota|Corolla Cross|2025': {
    ...set(['GX Hybrid', 'GXL Hybrid', 'Atmos Hybrid'], C(7.7)),
    ...set(['GXL Hybrid AWD', 'Atmos Hybrid AWD', 'GR Sport Hybrid AWD'], C(7.5)),
  },
  'Toyota|Corolla Cross|2026': { ...set(['GX Hybrid', 'GXL Hybrid', 'Atmos Hybrid'], C(7.7)), 'GR Sport Hybrid AWD': C(7.5) },
  'Toyota|LandCruiser 300|2026': {
    'Performance Hybrid Sahara ZX': { ...C(6.5), torque: 790 },
    'Performance Hybrid GR Sport': { ...C(6.6), torque: 790 },
  },
};

const blank = v => v === null || v === undefined || v === '';
const alias = { acceleration: 'z1', torque: 'tq' };
const lineups = {};
let filled = 0;
for (const [mmy, fills] of Object.entries(FILL)) {
  const [mk, md, y] = mmy.split('|');
  for (const t of Object.keys(fills)) if (!makes[mk][md][y].includes(t)) throw new Error('unknown trim ' + mmy + ' ' + t);
  lineups[mmy] = {};
  for (const trim of makes[mk][md][y]) {
    const s = existing(mk, md, y, trim);
    for (const [k, v] of Object.entries(fills[trim] || {})) {
      if (k === 'accelClaimed') { s[k] = v; continue }
      if (!blank(s[k]) || (alias[k] && !blank(s[alias[k]]))) throw new Error(`${mmy}|${trim} ${k} already set`);
      s[k] = v; filled++;
    }
    lineups[mmy][trim] = s;
  }
}
writeLineups(441, lineups);
console.log('fields filled:', filled);
