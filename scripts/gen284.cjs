'use strict';
// supplement284.json — 2026-10-23: tidy duplicate model names.
//   MG "MG HS" -> "HS": HS keeps its trims and gains the duplicate's extra
//     ones (Core, PHEV grades) with their existing specs.
//   Polestar "Polestar 3"/"Polestar 4" -> "3"/"4": the duplicate's trim names
//     (Long Range Single/Dual Motor, Performance Pack) match Polestar AU, so
//     they replace the base's generic ones; specs carried over unchanged.
//   Polestar "Polestar 2" -> "2": dropped ("Long Range Dual Motor" was the
//     same car as "Long Range AWD"; 2026 lineups were already identical).
// The duplicate models are then removed from the catalogue. No spec values
// are changed here — every row is copied from what the app resolved before.
const fs = require('fs'), path = require('path');
const { writeLineups } = require('./lineup-lib.cjs');
const DATA = path.join(__dirname, '..', 'src', 'data');
const files = fs.readdirSync(DATA).filter(f => /^(supplement\d+|holden|ford)\.json$/.test(f))
  .sort((a, b) => (parseInt(a.replace(/\D/g, '')) || 0) - (parseInt(b.replace(/\D/g, '')) || 0))
  .map(f => JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8')).specs);
function resolve(make, model, year, trim) {
  for (const dy of [0, -1, 1, -2, 2]) {
    let hit = null;
    for (const o of files) hit = o[`${make}|${model}|${year + dy}|${trim}`] || o[`${model}|${year + dy}|${trim}`] || hit;
    if (hit) return JSON.parse(JSON.stringify(hit));
  }
  throw new Error(`no spec for ${make}|${model}|${year}|${trim}`);
}
const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
const lineups = {};
// MG HS: union, base first.
for (const y of Object.keys(makes.MG['MG HS'])) {
  const base = makes.MG.HS[y] || [], dup = makes.MG['MG HS'][y];
  const rows = {};
  for (const t of base) rows[t] = resolve('MG', 'HS', +y, t);
  for (const t of dup) if (!rows[t]) rows[t] = resolve('MG', 'MG HS', +y, t);
  lineups[`MG|HS|${y}`] = rows;
}
// Polestar 3 / 4: duplicate's names win.
for (const n of ['3', '4']) {
  for (const y of Object.keys(makes.Polestar[`Polestar ${n}`])) {
    const rows = {};
    for (const t of makes.Polestar[`Polestar ${n}`][y]) rows[t] = resolve('Polestar', `Polestar ${n}`, +y, t);
    lineups[`Polestar|${n}|${y}`] = rows;
  }
}
writeLineups(284, lineups);
const m2 = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
for (const [mk, md] of [['MG', 'MG HS'], ['Polestar', 'Polestar 2'], ['Polestar', 'Polestar 3'], ['Polestar', 'Polestar 4']]) delete m2[mk][md];
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(m2, null, 2) + '\n');
console.log('removed duplicate models');
