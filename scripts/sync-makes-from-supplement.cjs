'use strict';
// Merge a supplement's spec keys into makes.json (the dropdown source).
// Usage: node scripts/sync-makes-from-supplement.cjs <supplementNumber>
// Derives Make > Model > Year > [trims] from `Make|Model|Year|Trim` keys,
// merges (non-destructive) into makes.json, de-dupes + sorts trims.
const fs = require('fs'), path = require('path');

const n = process.argv[2];
if (!n) { console.error('Usage: node sync-makes-from-supplement.cjs <number>'); process.exit(1); }

const dataDir = path.join(__dirname, '..', 'src', 'data');
const suppPath = path.join(dataDir, `supplement${n}.json`);
const makesPath = path.join(dataDir, 'makes.json');

const supp = JSON.parse(fs.readFileSync(suppPath));
const makes = JSON.parse(fs.readFileSync(makesPath));

let added = 0, newMakes = 0, newModels = 0;
for (const key of Object.keys(supp.specs)) {
  const parts = key.split('|');
  if (parts.length !== 4) { console.warn(`  skip malformed key: ${key}`); continue; }
  const [make, model, year, trim] = parts;
  if (!makes[make]) { makes[make] = {}; newMakes++; }
  if (!makes[make][model]) { makes[make][model] = {}; newModels++; }
  if (!makes[make][model][year]) makes[make][model][year] = [];
  if (!makes[make][model][year].includes(trim)) { makes[make][model][year].push(trim); added++; }
}

// sort trims within every touched year for stable output
for (const make of Object.keys(supp.specs).map(k => k.split('|')[0])) {
  for (const model of Object.keys(makes[make])) {
    for (const year of Object.keys(makes[make][model])) {
      makes[make][model][year].sort();
    }
  }
}

fs.writeFileSync(makesPath, JSON.stringify(makes, null, 2));
console.log(`Merged supplement${n} into makes.json`);
console.log(`  +${newMakes} makes, +${newModels} models, +${added} trim entries`);
