'use strict';
// One-time cleanup (2026-07-03): special-variant trims listed in years before
// the variant existed (generated data applied all trims uniformly across all
// years). Same treatment as the Huracan fix (v1.24): delete pre-launch keys
// from spec files + makes.json. Only high-confidence launch years included.
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');

// make|model → { trim: firstRealYear }
const RULES = {
  'Alpine|A110': { 'S': 2019, 'GT': 2022, 'R': 2023, 'Légende': 2019, 'Pure': 2018 },
  'Aston Martin|DB11': { 'AMR': 2018, 'V12 AMR': 2018, 'V8': 2017, 'V8 Volante': 2018 },
  'Bugatti|Veyron': { 'Super Sport': 2010, 'Grand Sport Vitesse': 2012 },
  'Bugatti|Chiron': { 'Pur Sport': 2020, 'Super Sport 300+': 2021 },
  'Cadillac|ATS': { 'ATS-V': 2016 },
  'Cadillac|CT6': { 'V-Sport': 2019 },
  'Chrysler|Neon': { 'SRT-4': 2003, 'R/T': 1998 },
  'Chrysler|Crossfire': { 'SRT-6': 2005 },
  'Chrysler|PT Cruiser': { 'GT': 2003 },
  'Ferrari|348': { 'Spider': 1993 },
  'Ferrari|456': { 'M GT': 1998, 'GTA': 1996 },
  'Ferrari|F355': { 'Spider': 1995, 'GTS': 1995 },
  'Ferrari|360 Modena': { 'Challenge Stradale': 2003, 'Spider': 2000 },
  'Ferrari|F430': { 'Scuderia': 2007, 'Spider': 2005 },
  'Ferrari|458 Italia': { 'Speciale': 2013, 'Spider': 2011 },
  'Ferrari|488 GTB': { 'Pista': 2018, 'Spider': 2016 },
  'Fiat|131': { 'Abarth': 1976 },
  'Hummer|H2': { 'SUT': 2005 },
  'Jaguar|XE': { 'SV Project 8': 2018 },
  'Kia|EV6': { 'GT': 2022 },
  'Hyundai|Ioniq 5': { 'Epiq AWD': 2023 },
  'Lamborghini|Miura': { 'P400 S': 1968, 'P400 SV': 1971 },
  'Lamborghini|Espada': { 'Series II': 1970, 'Series III': 1972 },
  'Lotus|Elise S3': { 'Sport 220': 2015, 'Cup 250': 2016 },
  'Maserati|Spyder': { 'GranSport': 2004 },
  'McLaren|720S': { 'Spider': 2019 },
  'Peugeot|205': { 'GTI': 1984, 'Cabriolet': 1986 },
  'Peugeot|306': { 'GTI 6': 1996 },
  'Peugeot|405': { 'Mi16': 1988 },
  'Renault|Megane': { 'RS 280': 2018, 'RS 300 Trophy': 2019 },
  'Saab|900 NG': { 'Cabriolet': 1994 },
  'Subaru|WRX STI': { 'WRX STI NBR Special': 2017 },
};

const files = fs.readdirSync(DATA).filter(f => /^supplement\d+\.json$/.test(f));
let deleted = 0;
for (const f of files) {
  const full = path.join(DATA, f);
  const j = JSON.parse(fs.readFileSync(full));
  const specs = j.specs || j;
  let touched = false;
  for (const k of Object.keys(specs)) {
    const [make, model, yearS, trim] = k.split('|');
    const rule = RULES[make + '|' + model];
    if (rule && rule[trim] && +yearS < rule[trim]) { delete specs[k]; deleted++; touched = true; }
  }
  if (touched) fs.writeFileSync(full, JSON.stringify(j, null, 2) + '\n');
}

const mkPath = path.join(DATA, 'makes.json');
const makes = JSON.parse(fs.readFileSync(mkPath));
let mkPruned = 0;
for (const [mm, rule] of Object.entries(RULES)) {
  const [make, model] = mm.split('|');
  const years = makes[make]?.[model];
  if (!years) { console.log('  (no makes.json entry for ' + mm + ')'); continue; }
  for (const y of Object.keys(years)) {
    const before = years[y].length;
    years[y] = years[y].filter(t => !(rule[t] && +y < rule[t]));
    mkPruned += before - years[y].length;
    if (!years[y].length) delete years[y];
  }
}
fs.writeFileSync(mkPath, JSON.stringify(makes, null, 2) + '\n');
console.log(`spec keys deleted: ${deleted}; makes.json trim-years pruned: ${mkPruned}`);
