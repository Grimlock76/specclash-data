const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'src', 'data');
const read = f => JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8'));

const makes = read('makes.json');
const holden = read('holden.json');
const ford = read('ford.json');

// Dynamically load every supplement*.json (numeric order), so this stays in
// sync with the data dir — no hardcoded import list to fall behind.
const suppFiles = fs.readdirSync(DATA)
  .filter(f => /^supplement\d+\.json$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

// Merge order mirrors src/data/index.js: core supplements + holden/ford first,
// then the rest. For gap detection only existence matters, but we keep the
// order consistent anyway.
const SPECS = Object.assign({}, holden.specs, ford.specs);
for (const f of suppFiles) Object.assign(SPECS, read(f).specs);

console.log(`Loaded ${suppFiles.length} supplements + holden + ford → ${Object.keys(SPECS).length} spec keys`);

function lookup(make, model, year, trim) {
  const yr = parseInt(year);
  if (SPECS[`${make}|${model}|${year}|${trim}`]) return true;
  if (SPECS[`${model}|${year}|${trim}`]) return true;
  for (let d = 1; d <= 2; d++) {
    for (const s of [-1, 1]) {
      const y2 = (yr + s * d).toString();
      if (SPECS[`${make}|${model}|${y2}|${trim}`]) return true;
      if (SPECS[`${model}|${y2}|${trim}`]) return true;
    }
  }
  return false;
}

const missing = [];
let total = 0, found = 0;

for (const [make, models] of Object.entries(makes)) {
  for (const [model, years] of Object.entries(models)) {
    for (const [year, trims] of Object.entries(years)) {
      for (const trim of trims) {
        total++;
        if (lookup(make, model, year, trim)) found++;
        else missing.push({ make, model, year, trim });
      }
    }
  }
}

console.log(`Total: ${total}  Found: ${found}  Missing: ${missing.length}`);
const byGroup = {};
for (const m of missing) {
  const k = `${m.make} / ${m.model}`;
  if (!byGroup[k]) byGroup[k] = [];
  byGroup[k].push(`${m.year} ${m.trim}`);
}
Object.keys(byGroup).sort().forEach(k => console.log(`  ${k}: ${byGroup[k].length}`));
fs.writeFileSync(path.join(__dirname, '..', 'gaps2.json'), JSON.stringify(missing, null, 2));
