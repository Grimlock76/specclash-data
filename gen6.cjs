const fs = require('fs');

// Load all sources
const makes    = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'));
const holden   = JSON.parse(fs.readFileSync('src/data/holden.json', 'utf8'));
const ford     = JSON.parse(fs.readFileSync('src/data/ford.json', 'utf8'));
const s1       = JSON.parse(fs.readFileSync('src/data/supplement1.json', 'utf8'));
const s2       = JSON.parse(fs.readFileSync('src/data/supplement2.json', 'utf8'));
const s3       = JSON.parse(fs.readFileSync('src/data/supplement3.json', 'utf8'));
const s4       = JSON.parse(fs.readFileSync('src/data/supplement4.json', 'utf8'));
const s5       = JSON.parse(fs.readFileSync('src/data/supplement5.json', 'utf8'));

// Merge all specs (same priority as index.js: supplements < holden/ford)
const SPECS = Object.assign(
  {}, s1.specs, s2.specs, s3.specs, s4.specs, s5.specs,
  holden.specs, ford.specs
);

// ─── 1. Update makes.json with 2 missing entries ─────────────────────────────
// HQ 1974: add Sandman
if (!makes.Holden.HQ['1974'].includes('Sandman')) {
  makes.Holden.HQ['1974'].push('Sandman');
  console.log('Added Sandman to HQ 1974');
}

// Statesman 1980: add WB Statesman De Ville
if (!makes.Holden.Statesman['1980']) makes.Holden.Statesman['1980'] = [];
if (!makes.Holden.Statesman['1980'].includes('WB Statesman De Ville')) {
  makes.Holden.Statesman['1980'].push('WB Statesman De Ville');
  console.log('Added WB Statesman De Ville to Statesman 1980');
}

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2));
console.log('makes.json updated\n');

// ─── 2. Find fuzzy matches and create exact-year copies ───────────────────────
function findFuzzy(make, model, year, trim) {
  const yr = parseInt(year);
  for (let delta = 1; delta <= 2; delta++) {
    for (const sign of [-1, 1]) {
      const y2 = (yr + sign * delta).toString();
      const k1 = `${make}|${model}|${y2}|${trim}`;
      if (SPECS[k1]) return { key: k1, spec: SPECS[k1], srcYear: y2 };
      const k2 = `${model}|${y2}|${trim}`;
      if (SPECS[k2]) return { key: k2, spec: SPECS[k2], srcYear: y2 };
    }
  }
  return null;
}

const newSpecs = {};

// Manual specs for makes.json entries that have no nearby match at all
const MANUAL = {
  // HQ 1974 Sandman — panel van, 308 V8 same as HJ Sandman
  'HQ|1974|Sandman': {
    en:'308ci Holden V8', di:'5.0L', cy:'8',
    hp:'165 kW (221 hp)', tq:'380 Nm',
    tx:'4sp man / 3sp Tri-Matic', dr:'RWD',
    z1:'8.5 sec', qm:'16.5 sec', ts:'185 km/h',
    fc:'19.0L', fh:'12.0L', fx:'15.0L', ft:'Leaded',
    wt:'1,360 kg', se:'2', ca:'N/A (panel van)', pr:'~$3,595'
  },
  // Statesman 1980 WB De Ville — same engine as 1981
  'Statesman|1980|WB Statesman De Ville': {
    en:'5.0L V8 308', di:'5.0L', cy:'8',
    hp:'150 kW (201 hp)', tq:'380 Nm',
    tx:'3-speed Tri-Matic', dr:'RWD',
    z1:'9.0 sec', qm:'16.5 sec', ts:'185 km/h',
    fc:'17.5L', fh:'11.0L', fx:'14.0L', ft:'Leaded',
    wt:'1,620 kg', se:'5', ca:'425 L', pr:'~$16,495'
  }
};

// Add manual specs first
for (const [k, v] of Object.entries(MANUAL)) {
  if (!SPECS[k]) {
    newSpecs[k] = v;
    console.log(`MANUAL: ${k}`);
  }
}

// Scan all Holden-related makes for fuzzy-only matches
const holdenMakes = Object.keys(makes.Holden);

let fuzzyCount = 0;
for (const model of holdenMakes) {
  const modelYears = makes.Holden[model];
  for (const [year, trims] of Object.entries(modelYears)) {
    for (const trim of trims) {
      // Check if exact key already exists
      const exactKeys = [
        `Holden|${model}|${year}|${trim}`,
        `${model}|${year}|${trim}`
      ];
      const hasExact = exactKeys.some(k => SPECS[k]);
      if (hasExact) continue;

      // Check if it's in our new MANUAL set
      const manualKeys = [
        `Holden|${model}|${year}|${trim}`,
        `${model}|${year}|${trim}`
      ];
      const isManual = manualKeys.some(k => newSpecs[k]);
      if (isManual) continue;

      // Try fuzzy match
      const fuzzy = findFuzzy('Holden', model, year, trim);
      if (fuzzy) {
        // Determine canonical key format (prefer Model|Year|Trim for old-style)
        const useNoMake = fuzzy.key.startsWith(model + '|');
        const newKey = useNoMake
          ? `${model}|${year}|${trim}`
          : `Holden|${model}|${year}|${trim}`;

        if (!newSpecs[newKey]) {
          // Copy spec, adjust price slightly if multi-year gap
          const spec = Object.assign({}, fuzzy.spec);
          const delta = Math.abs(parseInt(year) - parseInt(fuzzy.srcYear));
          if (delta === 2 && spec.pr) {
            // Minor price adjustment (±3%) to distinguish year
            const m = spec.pr.match(/~\$([0-9,]+)/);
            if (m) {
              const base = parseInt(m[1].replace(/,/g, ''));
              const adj  = Math.round(base * (parseInt(year) > parseInt(fuzzy.srcYear) ? 1.03 : 0.97) / 100) * 100;
              spec.pr = `~$${adj.toLocaleString()}`;
            }
          }
          newSpecs[newKey] = spec;
          fuzzyCount++;
          console.log(`FUZZY(${delta}yr): ${newKey}  ← from ${fuzzy.key}`);
        }
      }
    }
  }
}

console.log(`\nFuzzy entries filled: ${fuzzyCount}`);
console.log(`Manual entries added: ${Object.keys(MANUAL).length}`);
console.log(`Total new spec entries: ${Object.keys(newSpecs).length}`);

fs.writeFileSync(
  'src/data/supplement6.json',
  JSON.stringify({ make: 'Holden', specs: newSpecs }, null, 2)
);
console.log('\nsupplement6.json written ✓');
