const fs = require('fs');

// Load data
const makes  = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'));
const holden = JSON.parse(fs.readFileSync('src/data/holden.json', 'utf8'));
const s1     = JSON.parse(fs.readFileSync('src/data/supplement1.json', 'utf8'));
const s2     = JSON.parse(fs.readFileSync('src/data/supplement2.json', 'utf8'));
const s3     = JSON.parse(fs.readFileSync('src/data/supplement3.json', 'utf8'));
const s4     = JSON.parse(fs.readFileSync('src/data/supplement4.json', 'utf8'));
const s5     = JSON.parse(fs.readFileSync('src/data/supplement5.json', 'utf8'));
const s6     = JSON.parse(fs.readFileSync('src/data/supplement6.json', 'utf8'));

const ALL_SPECS = Object.assign({}, s1.specs, s2.specs, s3.specs, s4.specs, s5.specs, s6.specs, holden.specs);

// ─── Map a trim name to the correct HSV model ────────────────────────────────
function getHSVModel(trim) {
  if (/GTSR Maloo/i.test(trim))    return 'GTSR';
  if (/GTSR|GTS-R/i.test(trim))    return 'GTSR';
  if (/W427/.test(trim))           return 'W427';
  if (/\bW1\b/.test(trim))         return 'W1';
  if (/Coupe GTO/.test(trim))      return 'Coupe GTO';
  if (/Maloo/.test(trim))          return 'Maloo';
  if (/Clubsport/.test(trim))      return 'Clubsport';
  if (/Senator/.test(trim))        return 'Senator';
  if (/Grange/.test(trim))         return 'Grange';
  if (/GTS/.test(trim))            return 'GTS';
  if (/Group A/.test(trim))        return 'Group A';
  if (/Walkinshaw/.test(trim))     return 'Walkinshaw';
  if (/SV90/.test(trim))           return 'SV90';
  if (/Manta/.test(trim))          return 'Manta';
  return 'Other';
}

// ─── Find existing spec for a trim using old HSV Commodore / Senator / Grange keys ───
function findOldSpec(year, trim) {
  // Try all the old key prefixes that existed before restructure
  const prefixes = ['HSV Commodore', 'HSV Senator', 'HSV Grange'];
  for (const p of prefixes) {
    const k = `${p}|${year}|${trim}`;
    if (ALL_SPECS[k]) return ALL_SPECS[k];
  }
  return null;
}

// ─── 1. Restructure makes.json ────────────────────────────────────────────────
const hsvData = makes.Holden['HSV Commodore'];
if (!hsvData) { console.error('HSV Commodore not found in Holden'); process.exit(1); }

const newHSV = {};

for (const [year, trims] of Object.entries(hsvData)) {
  for (const trim of trims) {
    const model = getHSVModel(trim);
    if (!newHSV[model]) newHSV[model] = {};
    if (!newHSV[model][year]) newHSV[model][year] = [];
    newHSV[model][year].push(trim);
  }
}

// Sort models and years
const sortedHSV = {};
const MODEL_ORDER = ['GTS','Clubsport','Senator','Maloo','Grange','GTSR','W427','W1',
                     'Coupe GTO','Group A','Walkinshaw','SV90','Manta','Other'];
for (const m of MODEL_ORDER) {
  if (!newHSV[m]) continue;
  sortedHSV[m] = {};
  for (const yr of Object.keys(newHSV[m]).sort()) {
    sortedHSV[m][yr] = newHSV[m][yr];
  }
}

// Remove HSV Commodore from Holden
delete makes.Holden['HSV Commodore'];

// Add HSV as top-level make
makes.HSV = sortedHSV;

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2));
console.log('makes.json: HSV extracted as top-level make');
console.log('HSV models:', Object.keys(sortedHSV).join(', '));

// ─── 2. Generate new spec keys: HSV|{model}|year|trim ─────────────────────────
const newSpecs = {};
let added = 0, missing = 0;

for (const [model, years] of Object.entries(sortedHSV)) {
  for (const [year, trims] of Object.entries(years)) {
    for (const trim of trims) {
      const newKey = `HSV|${model}|${year}|${trim}`;
      const spec   = findOldSpec(year, trim);
      if (spec) {
        newSpecs[newKey] = spec;
        added++;
      } else {
        console.warn(`  NO SPEC: ${newKey}`);
        missing++;
      }
    }
  }
}

console.log(`\nNew spec keys: ${added}  Missing: ${missing}`);

fs.writeFileSync('src/data/supplement7.json', JSON.stringify({ make: 'HSV', specs: newSpecs }, null, 2));
console.log('supplement7.json written ✓');
