'use strict';
// supplement439.json — 2026-11-05: fill missing combined torque on Kia/Hyundai
// e-GMP AWD/N variants. Every other field is carried over unchanged (existing()).
// Sources: Hyundai AU spec sheets (Ioniq 5 2026, Ioniq 5 N, Ioniq 6 N: system
// totals; N figures paired with the 448 kW N Grin Boost power already stored);
// CarExpert variant pages "Maximum Torque" for Kia EV5/EV6/EV9, Ioniq 6 AWD and
// Ioniq 9 (also CarsGuide 2026 for Ioniq 6 AWD).
// Left null on purpose: kerb weights (sources give tare only, or kerb < tare,
// or CarExpert "kerb" == tare), EV9 GT 2025 (no AU 2025 GT listing), Ioniq 6 N
// 2025 (no MY25 listing), Ioniq 5 0-100 (CarsGuide 7.4 vs CarExpert 7.3, not
// labelled as a claim).
const fs = require('fs'), path = require('path');
const { writeLineups, existing } = require('./lineup-lib.cjs');
const makes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'makes.json'), 'utf8'));

const TORQUE = {
  'Kia|EV5|2025': { 'Earth AWD': 480, 'GT-Line AWD': 480 },
  'Kia|EV5|2026': { 'Earth AWD': 480, 'GT-Line AWD': 480 },
  'Kia|EV6|2025': { 'GT': 740 },            // pre-facelift 430 kW / 740 Nm
  'Kia|EV6|2026': { 'GT': 770 },            // facelift 478 kW / 770 Nm
  'Kia|EV9|2025': { 'Earth AWD': 700, 'GT-Line AWD': 700 },
  'Kia|EV9|2026': { 'Earth AWD': 700, 'GT-Line AWD': 700, 'GT': 740 },
  'Hyundai|Ioniq 5|2025': { 'N Line Premium AWD': 605 },
  'Hyundai|Ioniq 5|2026': { 'N Line Premium AWD': 605 },
  'Hyundai|Ioniq 5 N|2025': { 'N': 770 },
  'Hyundai|Ioniq 5 N|2026': { 'N': 770 },
  'Hyundai|Ioniq 6|2025': { 'Dynamiq AWD': 605, 'Epiq AWD': 605 },
  'Hyundai|Ioniq 6|2026': { 'Dynamiq AWD': 605, 'Epiq AWD': 605, 'N': 770 },
  'Hyundai|Ioniq 9|2025': { 'Calligraphy AWD 7 Seat': 700 },
  'Hyundai|Ioniq 9|2026': { 'Calligraphy AWD 7 Seat': 700, 'Calligraphy AWD 6 Seat': 700 },
};

const lineups = {};
for (const [mmy, fills] of Object.entries(TORQUE)) {
  const [mk, md, y] = mmy.split('|');
  lineups[mmy] = {};
  for (const trim of makes[mk][md][y]) {
    const s = existing(mk, md, y, trim);
    if (fills[trim] != null) {
      if (s.tq != null && s.tq !== '') throw new Error('tq already set ' + mmy + trim);
      if (s.torque != null && s.torque !== '') throw new Error('torque already set ' + mmy + trim);
      s.torque = fills[trim];
    }
    lineups[mmy][trim] = s;
  }
  for (const t of Object.keys(fills)) if (!makes[mk][md][y].includes(t)) throw new Error('unknown trim ' + mmy + ' ' + t);
}
writeLineups(439, lineups);
