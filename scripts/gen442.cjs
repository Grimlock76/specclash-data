'use strict';
// supplement442.json — 2026-11-06: Toyota / Mazda / Subaru gap fill (2024-26).
// Only blank fields are filled; everything else is carried over (existing()).
// Torque (labelled combined/system): Mazda AU CX-60 & CX-80 P50e 500 Nm; Subaru AU
//   Solterra "combined 160kW/337Nm"; Toyota UK bZ4X AWD 160 kW 337 Nm.
// 0-100 claims (accelClaimed true): Mazda AU CX-80 PHEV 6.8, CX-90 G50e 6.9 /
//   D50e 8.4; Mazda Switzerland CX-80 D50e 8.4 (187 kW/550 Nm/8AT/AWD); CX-5 G35
//   7.7 (factory claim quoted by CarExpert); Toyota Europe Camry Hybrid 230
//   (169 kW, same engine 221 Nm / motor 208 Nm, e-CVT, FWD) 7.2; Subaru Belgium
//   Solterra AWD 160 kW / 2x168.5 Nm / 71.4 kWh 6.9; Subaru Germany MY26 Crosstrek
//   2.0ie (100 kW/182 Nm, CVT, AWD) 10.8.
// Weights: Carsales kerb, only where kerb >= tare (MY25/26 pages); 2024 pages list
//   tare only, so 2024 stays null. Prices: CarExpert MSRP (LC300 Perf. Hybrid).
// Skipped: 2026 RAV4 hybrid AWD 7.7 (dealer page only), bZ4X 2026 torque
//   (Toyota UK 338 vs CarExpert 438), Solterra 2026 5.1 (different battery),
//   BT-50 / HiLux GR Sport (CarExpert tests, not an allowed outlet), Solterra
//   weights (kerb == tare or tare only), hybrid torque for Toyota/Subaru
//   (only engine and motor figures published).
const fs = require('fs'), path = require('path');
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const makes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'makes.json'), 'utf8'));

const C = s => ({ acceleration: s, accelClaimed: true });
const pick = (mmy, re, v) => Object.fromEntries(makes[mmy.split('|')[0]][mmy.split('|')[1]][mmy.split('|')[2]].filter(t => re.test(t)).map(t => [t, v]));

const FILL = {
  // ---- Toyota
  'Toyota|Camry|2025': pick('Toyota|Camry|2025', /Hybrid/, C(7.2)),
  'Toyota|Camry|2026': pick('Toyota|Camry|2026', /Hybrid/, C(7.2)),
  'Toyota|bZ4X|2024': { 'AWD': { torque: 337 } },
  'Toyota|bZ4X|2025': { 'AWD': { torque: 337 } },
  'Toyota|Yaris Cross|2025': { ...pick('Toyota|Yaris Cross|2025', /AWD/, { weight: 1305 }), 'GR Sport Hybrid': { weight: 1235 } },
  'Toyota|Yaris Cross|2026': pick('Toyota|Yaris Cross|2026', /AWD/, { weight: 1305 }),
  'Toyota|LandCruiser 300|2026': { 'Performance Hybrid GR Sport': { price: $(156060) }, 'Performance Hybrid Sahara ZX': { price: $(156810) } },
  // ---- Mazda
  'Mazda|CX-60|2024': pick('Mazda|CX-60|2024', /^P50e/, { torque: 500 }),
  'Mazda|CX-60|2025': pick('Mazda|CX-60|2025', /^P50e/, { torque: 500 }),
  'Mazda|CX-60|2026': pick('Mazda|CX-60|2026', /^P50e/, { torque: 500 }),
  ...Object.fromEntries(['2024', '2025', '2026'].map(y => [`Mazda|CX-80|${y}`, {
    ...pick(`Mazda|CX-80|${y}`, /^P50e/, { torque: 500, ...C(6.8) }),
    ...pick(`Mazda|CX-80|${y}`, /^D50e/, C(8.4)),
  }])),
  ...Object.fromEntries(['2024', '2025', '2026'].map(y => [`Mazda|CX-90|${y}`, {
    ...pick(`Mazda|CX-90|${y}`, /^G50e/, C(6.9)),
    ...pick(`Mazda|CX-90|${y}`, /^D50e/, C(8.4)),
  }])),
  ...Object.fromEntries(['2024', '2025', '2026'].map(y => [`Mazda|CX-5|${y}`, pick(`Mazda|CX-5|${y}`, /^G35/, C(7.7))])),
  // ---- Subaru
  'Subaru|Solterra|2024': pick('Subaru|Solterra|2024', /AWD/, { torque: 337, ...C(6.9) }),
  'Subaru|Solterra|2025': pick('Subaru|Solterra|2025', /AWD/, { torque: 337, ...C(6.9) }),
  'Subaru|Crosstrek|2025': { 'Hybrid L': { weight: 1575 }, 'Hybrid S': { weight: 1614 }, '2.0L': { weight: 1494 }, '2.0R': { weight: 1510 }, '2.0S': { weight: 1533 } },
  'Subaru|Crosstrek|2026': pick('Subaru|Crosstrek|2026', /^Hybrid/, C(10.8)),
  'Subaru|Impreza|2025': { '2.0S': { weight: 1488 } },
  'Subaru|Impreza|2026': { '2.0L': { weight: 1446 }, '2.0S': { weight: 1488 } },
  'Subaru|WRX|2025': {
    'WRX Manual': { weight: 1524 }, 'RS Manual': { weight: 1561 },
    'WRX Auto': { weight: 1596 }, 'RS Auto': { weight: 1633 }, 'tS': { weight: 1631 },
    'Sportswagon': { weight: 1622 }, 'GT Sportswagon': { weight: 1655 }, 'tS Sportswagon': { weight: 1658 },
  },
  'Subaru|BRZ|2026': {
    'BRZ Manual': { weight: 1277 }, 'S Manual': { weight: 1280 }, 'tS Manual': { weight: 1286 },
    'BRZ Auto': { weight: 1297 }, 'S Auto': { weight: 1300 }, 'tS Auto': { weight: 1306 },
  },
};

const blank = v => v === null || v === undefined || v === '';
const alias = { acceleration: 'z1', torque: 'tq', weight: 'wt', price: 'pr' };
const lineups = {}; let filled = 0; const kept = [];
for (const [mmy, fills] of Object.entries(FILL)) {
  const [mk, md, y] = mmy.split('|');
  for (const t of Object.keys(fills)) if (!makes[mk][md][y].includes(t)) throw new Error('unknown trim ' + mmy + ' ' + t);
  lineups[mmy] = {};
  for (const trim of makes[mk][md][y]) {
    const s = existing(mk, md, y, trim);
    const f = fills[trim] || {};
    for (const [k, v] of Object.entries(f)) {
      if (k === 'accelClaimed') continue;
      if (!blank(s[k]) || (alias[k] && !blank(s[alias[k]]))) { kept.push(`${mmy}|${trim} ${k}`); continue }   // never overwrite
      s[k] = v; filled++;
      if (k === 'acceleration') s.accelClaimed = f.accelClaimed;
    }
    lineups[mmy][trim] = s;
  }
}
writeLineups(442, lineups);
console.log('fields filled:', filled, '| already set, left alone:', kept.length);
if (kept.length) console.log(kept.join('\n'));
