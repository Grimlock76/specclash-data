const fs = require('fs');
const makes = JSON.parse(fs.readFileSync('src/data/makes.json','utf8'));
const holden = JSON.parse(fs.readFileSync('src/data/holden.json','utf8'));
const ford = JSON.parse(fs.readFileSync('src/data/ford.json','utf8'));
const SPECS = Object.assign({}, holden.specs, ford.specs);

const missing = [];
for (const [make, models] of Object.entries(makes)) {
  for (const [model, years] of Object.entries(models)) {
    for (const [year, trims] of Object.entries(years)) {
      for (const trim of trims) {
        const yr = parseInt(year);
        let hit = SPECS[`${make}|${model}|${year}|${trim}`] || SPECS[`${model}|${year}|${trim}`];
        if (!hit) for (let d=1;d<=2&&!hit;d++) for (const s of [-1,1]) {
          const y2=(yr+s*d).toString();
          hit = SPECS[`${make}|${model}|${y2}|${trim}`] || SPECS[`${model}|${y2}|${trim}`];
        }
        if (!hit) missing.push({ make, model, year, trim });
      }
    }
  }
}
fs.writeFileSync('gaps.json', JSON.stringify(missing, null, 2));
console.log(`Written ${missing.length} gaps to gaps.json`);
