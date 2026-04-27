const fs = require('fs');
const makes = JSON.parse(fs.readFileSync('src/data/makes.json','utf8'));
const holden = JSON.parse(fs.readFileSync('src/data/holden.json','utf8'));
const ford = JSON.parse(fs.readFileSync('src/data/ford.json','utf8'));
const SPECS = Object.assign({}, holden.specs, ford.specs);

let total = 0, missing = 0, found = 0;
const gaps = {};

for (const [make, models] of Object.entries(makes)) {
  for (const [model, years] of Object.entries(models)) {
    for (const [year, trims] of Object.entries(years)) {
      for (const trim of trims) {
        total++;
        const k1 = `${make}|${model}|${year}|${trim}`;
        const k2 = `${model}|${year}|${trim}`;
        const yr = parseInt(year);
        let hit = SPECS[k1] || SPECS[k2];
        if (!hit) {
          for (let d=1;d<=2&&!hit;d++) for (const s of [-1,1]) {
            const y2=(yr+s*d).toString();
            hit = SPECS[`${make}|${model}|${y2}|${trim}`] || SPECS[`${model}|${y2}|${trim}`];
          }
        }
        if (hit) { found++; }
        else {
          missing++;
          const gk = `${make} / ${model}`;
          if (!gaps[gk]) gaps[gk] = [];
          gaps[gk].push(`${year} ${trim}`);
        }
      }
    }
  }
}
console.log(`Total combinations: ${total}`);
console.log(`Found (incl. ±2yr): ${found}`);
console.log(`Missing: ${missing}\n`);
const gkeys = Object.keys(gaps).sort();
gkeys.forEach(k => { console.log(`  ${k}: ${gaps[k].length} missing`); });
