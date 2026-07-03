'use strict';
// One-time curation (2026-07-03): reconcile the dual/generated trim taxonomies
// on Omoda 5 / Omoda E5 / LDV T60 against the real AU line-ups.
// Sources: carexpert.com.au / carsales.com.au / whichcar.com.au —
//   Omoda 5: BX+EX from Mar 2023; GT (1.6T, incl AWD) + FX from 2024.
//   Omoda E5 (electric, Sep 2024): BX + EX. ('5 EV' model = same car, merged.)
//   LDV T60: Pro + Luxe from 2017; Trailrider LE 2019–21; Max Pro / Max Luxe
//   from the 2023 refresh (Max Plus 2024 not in data — not invented here).
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');

// action per (model, trim, year): rename → new [model, trim], null → delete, undefined → keep
function map(model, trim, year) {
  if (model === '5') {
    if (trim === 'Base') return ['5', 'BX'];
    if (trim === 'Premium') return ['5', 'EX'];
    if (trim === 'Style') return year >= 2024 ? ['5', 'FX'] : null;
    if (trim === 'GT AWD') return year >= 2024 ? undefined : null;
    if (['Sport', 'Turbo', 'AWD Premium'].includes(trim)) return null;
  }
  if (model === 'E5') {
    if (trim === 'Lite') return ['E5', 'BX'];
    if (trim === 'Premium') return ['E5', 'EX'];
    if (trim === 'E5') return null;
  }
  if (model === '5 EV') {
    if (trim === 'Premium') return ['E5', 'EX'];
    if (trim === 'GT') return ['E5', 'BX'];
    return null;
  }
  if (model === 'T60') {
    const max = year >= 2023;
    if (trim === 'Base') return ['T60', max ? 'Max Pro' : 'Pro'];
    if (trim === 'Luxe') return max ? ['T60', 'Max Luxe'] : undefined;
    if (trim === 'Trailrider') return (year >= 2019 && year <= 2021) ? undefined : null;
    if (['Luxury', 'S', 'SX', 'SX+'].includes(trim)) return null;
  }
  return undefined;
}

const FILES = ['supplement70.json', 'supplement112.json', 'supplement114.json',
  'supplement130.json', 'supplement142.json', 'supplement163.json', 'supplement225.json'];
let renamed = 0, deleted = 0;
for (const f of FILES) {
  const full = path.join(DATA, f);
  const j = JSON.parse(fs.readFileSync(full));
  const specs = j.specs;
  for (const k of Object.keys(specs)) {
    const [make, model, yearS, trim] = k.split('|');
    if (make !== 'Omoda' && !(make === 'LDV' && model === 'T60')) continue;
    const act = map(model, trim, +yearS);
    if (act === undefined) continue;
    if (act === null) { delete specs[k]; deleted++; continue; }
    const nk = [make, act[0], yearS, act[1]].join('|');
    if (!specs[nk]) { specs[nk] = specs[k]; renamed++; } else deleted++;
    delete specs[k];
  }
  fs.writeFileSync(full, JSON.stringify(j, null, 2) + '\n');
}

// makes.json: apply the same mapping
const mkPath = path.join(DATA, 'makes.json');
const makes = JSON.parse(fs.readFileSync(mkPath));
for (const [mk, models] of [['Omoda', ['5', 'E5', '5 EV']], ['LDV', ['T60']]]) {
  for (const model of models) {
    const years = makes[mk][model];
    if (!years) continue;
    for (const y of Object.keys(years)) {
      for (const trim of [...years[y]]) {
        const act = map(model, trim, +y);
        if (act === undefined) continue;
        years[y] = years[y].filter(t => t !== trim);
        if (act !== null) {
          const [nm, nt] = act;
          makes[mk][nm] = makes[mk][nm] || {};
          makes[mk][nm][y] = makes[mk][nm][y] || [];
          if (!makes[mk][nm][y].includes(nt)) { makes[mk][nm][y].push(nt); makes[mk][nm][y].sort(); }
        }
      }
      if (!years[y].length) delete years[y];
    }
    if (!Object.keys(years).length) delete makes[mk][model];
  }
}
fs.writeFileSync(mkPath, JSON.stringify(makes, null, 2) + '\n');
console.log(`spec keys renamed: ${renamed}, deleted: ${deleted}`);
console.log('Omoda models now:', Object.keys(makes.Omoda).join(', '));
console.log('Omoda 5 2024:', (makes.Omoda['5']['2024'] || []).join(', '));
console.log('E5 2024:', (makes.Omoda['E5']['2024'] || []).join(', '));
console.log('T60 2020:', (makes.LDV.T60['2020'] || []).join(', '), '| T60 2024:', (makes.LDV.T60['2024'] || []).join(', '));
