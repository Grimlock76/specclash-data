const fs = require('fs');

const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'));
const ford  = JSON.parse(fs.readFileSync('src/data/ford.json', 'utf8'));
const s1    = JSON.parse(fs.readFileSync('src/data/supplement1.json', 'utf8'));
const s2    = JSON.parse(fs.readFileSync('src/data/supplement2.json', 'utf8'));
const s3    = JSON.parse(fs.readFileSync('src/data/supplement3.json', 'utf8'));
const s4    = JSON.parse(fs.readFileSync('src/data/supplement4.json', 'utf8'));
const s5    = JSON.parse(fs.readFileSync('src/data/supplement5.json', 'utf8'));

const ALL_SPECS = Object.assign({}, ford.specs, s1.specs, s2.specs, s3.specs, s4.specs, s5.specs);

const newSpecs = {};

// ─── 1. Migrate existing FPV GT specs to FPV|GT|year|trim keys ────────────────
const GT_SOURCES = ['FPV GT (BA-BF)', 'FPV GT (FG)'];

// Build merged GT years from both source models
const gtYears = {};
for (const srcModel of GT_SOURCES) {
  const data = makes.Ford[srcModel] || {};
  for (const [year, trims] of Object.entries(data)) {
    if (!gtYears[year]) gtYears[year] = new Set();
    for (const t of trims) gtYears[year].add(t);
  }
}
// Add GT-E to 2006 — spec exists but was missing from BA-BF makes entry
gtYears['2006'].add('GT-E');

const sortedGTYears = {};
for (const yr of Object.keys(gtYears).sort()) {
  sortedGTYears[yr] = [...gtYears[yr]];
}

// Create FPV|GT spec keys from old Ford|FPV GT (*)|year|trim
for (const [year, trims] of Object.entries(sortedGTYears)) {
  for (const trim of trims) {
    const newKey = `FPV|GT|${year}|${trim}`;
    // Try both source model names
    let spec = ALL_SPECS[`Ford|FPV GT (BA-BF)|${year}|${trim}`]
            || ALL_SPECS[`Ford|FPV GT (FG)|${year}|${trim}`];
    if (spec) {
      newSpecs[newKey] = spec;
    } else {
      console.warn(`  NO SPEC: ${newKey}`);
    }
  }
}

// ─── 2. F6 model (Typhoon BA-BF 2004-2008, F6 E FG 2008-2012) ────────────────
// F6 Typhoon – BA/BF era 4.0L Barra Turbo I6
const f6Typhoon = {
  en:'Barra 245T Turbo I6', di:'4.0L', cy:'6',
  hp:'270 kW (362 hp)', tq:'533 Nm',
  tx:'6-speed manual (Tremec)', dr:'RWD',
  z1:'5.0 sec', qm:'13.2 sec', ts:'250 km/h (limited)',
  fc:'13.5L', fh:'8.5L', fx:'10.8L', ft:'98 RON',
  wt:'1,710 kg', se:'5', ca:'535 L', pr:'~$57,990'
};
// F6 E – FG era (2008 updated tune/suspension)
const f6E = {
  en:'Barra 270T Turbo I6', di:'4.0L', cy:'6',
  hp:'270 kW (362 hp)', tq:'533 Nm',
  tx:'6-speed auto (ZF)', dr:'RWD',
  z1:'5.3 sec', qm:'13.5 sec', ts:'250 km/h (limited)',
  fc:'13.5L', fh:'8.5L', fx:'10.8L', ft:'98 RON',
  wt:'1,720 kg', se:'5', ca:'535 L', pr:'~$59,990'
};

const f6Years = {
  '2004': ['F6 Typhoon'],
  '2005': ['F6 Typhoon'],
  '2006': ['F6 Typhoon'],
  '2007': ['F6 Typhoon'],
  '2008': ['F6 Typhoon', 'F6 E'],
  '2009': ['F6 E'],
  '2010': ['F6 E'],
  '2011': ['F6 E'],
  '2012': ['F6 E'],
};

for (const [year, trims] of Object.entries(f6Years)) {
  const yr = parseInt(year);
  for (const trim of trims) {
    const base = trim === 'F6 Typhoon' ? f6Typhoon : f6E;
    const spec = Object.assign({}, base);
    // Minor year-on-year price bump
    const base$ = parseInt(base.pr.replace(/[^0-9]/g,''));
    const adj = Math.round((base$ + (yr - (trim === 'F6 Typhoon' ? 2004 : 2008)) * 500) / 100) * 100;
    spec.pr = `~$${adj.toLocaleString()}`;
    newSpecs[`FPV|F6|${year}|${trim}`] = spec;
  }
}

// ─── 3. Boss model (260 2008-2011, 290 2011-2014, 335 2014-2015) ─────────────
const boss260 = {
  en:'5.4L V8 Boss 260', di:'5.4L', cy:'8',
  hp:'260 kW (349 hp)', tq:'500 Nm',
  tx:'6-speed manual', dr:'RWD',
  z1:'5.5 sec', qm:'13.5 sec', ts:'250 km/h (limited)',
  fc:'15.5L', fh:'9.5L', fx:'12.2L', ft:'98 RON',
  wt:'1,750 kg', se:'5', ca:'535 L', pr:'~$57,990'
};
const boss290 = {
  en:'5.4L V8 Boss 290', di:'5.4L', cy:'8',
  hp:'290 kW (389 hp)', tq:'542 Nm',
  tx:'6-speed manual', dr:'RWD',
  z1:'5.2 sec', qm:'13.2 sec', ts:'250 km/h (limited)',
  fc:'15.8L', fh:'9.8L', fx:'12.5L', ft:'98 RON',
  wt:'1,755 kg', se:'5', ca:'535 L', pr:'~$62,990'
};
const boss335 = {
  en:'5.0L V8 Coyote Boss 335', di:'5.0L', cy:'8',
  hp:'335 kW (449 hp)', tq:'570 Nm',
  tx:'6-speed manual', dr:'RWD',
  z1:'4.9 sec', qm:'13.0 sec', ts:'250 km/h (limited)',
  fc:'15.8L', fh:'9.5L', fx:'12.5L', ft:'98 RON',
  wt:'1,760 kg', se:'5', ca:'535 L', pr:'~$74,990'
};

const bossYears = {
  '2008': ['Boss 260'],
  '2009': ['Boss 260'],
  '2010': ['Boss 260'],
  '2011': ['Boss 260', 'Boss 290'],
  '2012': ['Boss 290'],
  '2013': ['Boss 290'],
  '2014': ['Boss 290', 'Boss 335'],
  '2015': ['Boss 335'],
};

const bossBaseMap = { 'Boss 260': boss260, 'Boss 290': boss290, 'Boss 335': boss335 };
const bossBaseYear = { 'Boss 260': 2008, 'Boss 290': 2011, 'Boss 335': 2014 };

for (const [year, trims] of Object.entries(bossYears)) {
  const yr = parseInt(year);
  for (const trim of trims) {
    const base = bossBaseMap[trim];
    const spec = Object.assign({}, base);
    const base$ = parseInt(base.pr.replace(/[^0-9]/g,''));
    const adj = Math.round((base$ + (yr - bossBaseYear[trim]) * 600) / 100) * 100;
    spec.pr = `~$${adj.toLocaleString()}`;
    newSpecs[`FPV|Boss|${year}|${trim}`] = spec;
  }
}

// ─── 4. Restructure makes.json ────────────────────────────────────────────────
delete makes.Ford['FPV GT (BA-BF)'];
delete makes.Ford['FPV GT (FG)'];

makes.FPV = {
  GT:   sortedGTYears,
  F6:   f6Years,
  Boss: bossYears,
};

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2));
console.log('makes.json: FPV added as top-level make (GT, F6, Boss)');

fs.writeFileSync('src/data/supplement8.json', JSON.stringify({ make: 'FPV', specs: newSpecs }, null, 2));
console.log(`supplement8.json: ${Object.keys(newSpecs).length} entries written ✓`);
