'use strict';
// supplement440.json — 2026-11-05: Kia/Hyundai gap fill. Hybrid system torque,
// a few kerb weights, prices and one fuel figure. All other fields carried over
// unchanged (existing()).
// Torque = maker's "combined system output" figure: Kia AU spec PDFs (Sportage
// MY27 367 Nm = facelift, matching the stored 173 kW; Sorento MY26 HEV/PHEV
// 350 Nm; Carnival 367 Nm; Niro 265 Nm) and Hyundai AU Kona sheet (265 Nm),
// cross-checked on CarExpert. Weights: Carsales kerb, only where kerb >= tare.
// Prices: carsales/CarExpert before on-roads (Palisade XRT PRO $79,900; Niro EV
// 2025 = MSRP on CarExpert). Staria Lounge Hybrid fx: ADR combined 6.5.
// Left null on purpose: Carnival HEV 2025 torque (CarExpert 366 vs Kia 367),
// Staria Hybrid torque (sources 304/366/367), and every weight where carsales
// kerb < tare, kerb missing, or two pages disagree (Seltos, Picanto, Stonic, K4,
// Sorento HEV/PHEV, Niro, Venue, Staria, Palisade, Inster, i20 N, i30 N, Tasman
// X-Pro, Kona Premium / Hybrid Elite / Hybrid Premium).
const fs = require('fs'), path = require('path');
const { writeLineups, existing, $ } = require('./lineup-lib.cjs');
const makes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'makes.json'), 'utf8'));

const all = (mmy, v) => Object.fromEntries(makes[mmy.split('|')[0]][mmy.split('|')[1]][mmy.split('|')[2]].map(t => [t, v]));
const hev = (mmy, re, v) => Object.fromEntries(Object.keys(all(mmy, 0)).filter(t => re.test(t)).map(t => [t, v]));

const FILL = {
  'Kia|Sportage|2025': hev('Kia|Sportage|2025', /HEV/, { torque: 367 }),
  'Kia|Sportage|2026': hev('Kia|Sportage|2026', /HEV/, { torque: 367 }),
  'Kia|Sorento|2025': hev('Kia|Sorento|2025', /HEV/, { torque: 350 }),   // matches HEV and PHEV
  'Kia|Sorento|2026': hev('Kia|Sorento|2026', /HEV/, { torque: 350 }),
  'Kia|Carnival|2026': hev('Kia|Carnival|2026', /HEV/, { torque: 367 }),
  'Kia|Niro|2025': { 'HEV S': { torque: 265 }, 'HEV GT-Line': { torque: 265 }, 'EV S': { price: $(66590) }, 'EV GT-Line': { price: $(72360) } },
  'Kia|Niro|2026': { 'HEV S': { torque: 265 }, 'HEV GT-Line': { torque: 265 } },
  'Hyundai|Kona|2025': hev('Hyundai|Kona|2025', /Hybrid/, { torque: 265 }),
  'Hyundai|Kona|2026': {
    ...hev('Hyundai|Kona|2026', /Hybrid/, { torque: 265 }),
    'Elite': { weight: 1455 }, 'Elite N Line': { weight: 1455 },
    'Hybrid Elite N Line': { torque: 265, weight: 1525 }, 'Hybrid Premium N Line': { torque: 265, weight: 1525 },
  },
  'Hyundai|Staria|2026': { 'Lounge Hybrid': { fx: 6.5 } },
  'Hyundai|Palisade|2026': { 'XRT PRO': { price: $(79900) } },
};

const blank = v => v === null || v === undefined || v === '';
const alias = { torque: 'tq', weight: 'wt', price: 'pr' };
const lineups = {};
let filled = 0;
for (const [mmy, fills] of Object.entries(FILL)) {
  const [mk, md, y] = mmy.split('|');
  lineups[mmy] = {};
  for (const t of Object.keys(fills)) if (!makes[mk][md][y].includes(t)) throw new Error('unknown trim ' + mmy + ' ' + t);
  for (const trim of makes[mk][md][y]) {
    const s = existing(mk, md, y, trim);
    for (const [k, v] of Object.entries(fills[trim] || {})) {
      if (!blank(s[k]) || (alias[k] && !blank(s[alias[k]]))) throw new Error(`${mmy}|${trim} ${k} already set`);
      s[k] = v; filled++;
    }
    lineups[mmy][trim] = s;
  }
}
writeLineups(440, lineups);
console.log('fields filled:', filled);
