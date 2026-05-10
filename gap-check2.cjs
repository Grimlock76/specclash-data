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
const s36 = JSON.parse(fs.readFileSync('src/data/supplement36.json','utf8'));
const s37 = JSON.parse(fs.readFileSync('src/data/supplement37.json','utf8'));
const s38 = JSON.parse(fs.readFileSync('src/data/supplement38.json','utf8'));
const s39 = JSON.parse(fs.readFileSync('src/data/supplement39.json','utf8'));
const s40 = JSON.parse(fs.readFileSync('src/data/supplement40.json','utf8'));
const s41 = JSON.parse(fs.readFileSync('src/data/supplement41.json','utf8'));
const s42 = JSON.parse(fs.readFileSync('src/data/supplement42.json','utf8'));
const s43 = JSON.parse(fs.readFileSync('src/data/supplement43.json','utf8'));
const s44 = JSON.parse(fs.readFileSync('src/data/supplement44.json','utf8'));
const s45 = JSON.parse(fs.readFileSync('src/data/supplement45.json','utf8'));
const s46 = JSON.parse(fs.readFileSync('src/data/supplement46.json','utf8'));
const s47 = JSON.parse(fs.readFileSync('src/data/supplement47.json','utf8'));
const s48 = JSON.parse(fs.readFileSync('src/data/supplement48.json','utf8'));
const s49 = JSON.parse(fs.readFileSync('src/data/supplement49.json','utf8'));
const s50 = JSON.parse(fs.readFileSync('src/data/supplement50.json','utf8'));
const s51 = JSON.parse(fs.readFileSync('src/data/supplement51.json','utf8'));
const s52 = JSON.parse(fs.readFileSync('src/data/supplement52.json','utf8'));
const s53 = JSON.parse(fs.readFileSync('src/data/supplement53.json','utf8'));
const s54 = JSON.parse(fs.readFileSync('src/data/supplement54.json','utf8'));
const s55 = JSON.parse(fs.readFileSync('src/data/supplement55.json','utf8'));
const s56 = JSON.parse(fs.readFileSync('src/data/supplement56.json','utf8'));
const s57 = JSON.parse(fs.readFileSync('src/data/supplement57.json','utf8'));
const s58 = JSON.parse(fs.readFileSync('src/data/supplement58.json','utf8'));
const s59 = JSON.parse(fs.readFileSync('src/data/supplement59.json','utf8'));
const s60 = JSON.parse(fs.readFileSync('src/data/supplement60.json','utf8'));
const s61 = JSON.parse(fs.readFileSync('src/data/supplement61.json','utf8'));
const s62 = JSON.parse(fs.readFileSync('src/data/supplement62.json','utf8'));
const s63 = JSON.parse(fs.readFileSync('src/data/supplement63.json','utf8'));
const s64 = JSON.parse(fs.readFileSync('src/data/supplement64.json','utf8'));
const s65 = JSON.parse(fs.readFileSync('src/data/supplement65.json','utf8'));
const s66 = JSON.parse(fs.readFileSync('src/data/supplement66.json','utf8'));
const s67 = JSON.parse(fs.readFileSync('src/data/supplement67.json','utf8'));
const s68 = JSON.parse(fs.readFileSync('src/data/supplement68.json','utf8'));
const s69 = JSON.parse(fs.readFileSync('src/data/supplement69.json','utf8'));
const s70 = JSON.parse(fs.readFileSync('src/data/supplement70.json','utf8'));
const SPECS = Object.assign({}, holden.specs, ford.specs, s1.specs, s2.specs, s3.specs, s4.specs, s5.specs, s6.specs, s7.specs, s8.specs, s9.specs, s10.specs, s11.specs, s12.specs, s13.specs, s14.specs, s15.specs, s16.specs, s17.specs, s18.specs, s19.specs, s20.specs, s21.specs, s22.specs, s23.specs, s24.specs, s25.specs, s26.specs, s27.specs, s28.specs, s29.specs, s30.specs, s31.specs, s32.specs, s33.specs, s36.specs, s37.specs, s38.specs, s39.specs, s40.specs, s41.specs, s42.specs, s43.specs, s44.specs, s45.specs, s46.specs, s47.specs, s48.specs, s49.specs, s50.specs, s51.specs, s52.specs, s53.specs, s54.specs, s55.specs, s56.specs, s57.specs, s58.specs, s59.specs, s60.specs, s61.specs, s62.specs, s63.specs, s64.specs, s65.specs, s66.specs, s67.specs, s68.specs, s69.specs, s70.specs);

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
