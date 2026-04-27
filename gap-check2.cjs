const fs = require('fs');
const makes = JSON.parse(fs.readFileSync('src/data/makes.json','utf8'));
const holden = JSON.parse(fs.readFileSync('src/data/holden.json','utf8'));
const ford = JSON.parse(fs.readFileSync('src/data/ford.json','utf8'));
const s1 = JSON.parse(fs.readFileSync('src/data/supplement1.json','utf8'));
const s2 = JSON.parse(fs.readFileSync('src/data/supplement2.json','utf8'));
const s3 = JSON.parse(fs.readFileSync('src/data/supplement3.json','utf8'));
const s4 = JSON.parse(fs.readFileSync('src/data/supplement4.json','utf8'));
const s5 = JSON.parse(fs.readFileSync('src/data/supplement5.json','utf8'));
const s6 = JSON.parse(fs.readFileSync('src/data/supplement6.json','utf8'));
const s7 = JSON.parse(fs.readFileSync('src/data/supplement7.json','utf8'));
const s8 = JSON.parse(fs.readFileSync('src/data/supplement8.json','utf8'));
const s9 = JSON.parse(fs.readFileSync('src/data/supplement9.json','utf8'));
const s10 = JSON.parse(fs.readFileSync('src/data/supplement10.json','utf8'));
const s11 = JSON.parse(fs.readFileSync('src/data/supplement11.json','utf8'));
const s12 = JSON.parse(fs.readFileSync('src/data/supplement12.json','utf8'));
const s13 = JSON.parse(fs.readFileSync('src/data/supplement13.json','utf8'));
const s14 = JSON.parse(fs.readFileSync('src/data/supplement14.json','utf8'));
const s15 = JSON.parse(fs.readFileSync('src/data/supplement15.json','utf8'));
const s16 = JSON.parse(fs.readFileSync('src/data/supplement16.json','utf8'));
const s17 = JSON.parse(fs.readFileSync('src/data/supplement17.json','utf8'));
const s18 = JSON.parse(fs.readFileSync('src/data/supplement18.json','utf8'));
const s19 = JSON.parse(fs.readFileSync('src/data/supplement19.json','utf8'));
const s20 = JSON.parse(fs.readFileSync('src/data/supplement20.json','utf8'));
const s21 = JSON.parse(fs.readFileSync('src/data/supplement21.json','utf8'));
const s22 = JSON.parse(fs.readFileSync('src/data/supplement22.json','utf8'));
const s23 = JSON.parse(fs.readFileSync('src/data/supplement23.json','utf8'));
const s24 = JSON.parse(fs.readFileSync('src/data/supplement24.json','utf8'));
const s25 = JSON.parse(fs.readFileSync('src/data/supplement25.json','utf8'));
const s26 = JSON.parse(fs.readFileSync('src/data/supplement26.json','utf8'));
const s27 = JSON.parse(fs.readFileSync('src/data/supplement27.json','utf8'));
const s28 = JSON.parse(fs.readFileSync('src/data/supplement28.json','utf8'));
const s29 = JSON.parse(fs.readFileSync('src/data/supplement29.json','utf8'));
const s30 = JSON.parse(fs.readFileSync('src/data/supplement30.json','utf8'));
const s31 = JSON.parse(fs.readFileSync('src/data/supplement31.json','utf8'));
const s32 = JSON.parse(fs.readFileSync('src/data/supplement32.json','utf8'));
const s33 = JSON.parse(fs.readFileSync('src/data/supplement33.json','utf8'));
const SPECS = Object.assign({}, holden.specs, ford.specs, s1.specs, s2.specs, s3.specs, s4.specs, s5.specs, s6.specs, s7.specs, s8.specs, s9.specs, s10.specs, s11.specs, s12.specs, s13.specs, s14.specs, s15.specs, s16.specs, s17.specs, s18.specs, s19.specs, s20.specs, s21.specs, s22.specs, s23.specs, s24.specs, s25.specs, s26.specs, s27.specs, s28.specs, s29.specs, s30.specs, s31.specs, s32.specs, s33.specs);

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
fs.writeFileSync('gaps2.json', JSON.stringify(missing, null, 2));
