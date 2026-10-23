'use strict';
// Price-only patches from a verified MSRP list (CarsGuide/Carsales).
//   node scripts/apply-prices.cjs scripts/prices/<file>.json
// Input: { "source": "...", "prices": { "Make|Model|Year|Trim": 54990, … } }
// Patches the entry the app actually resolves (same file order as the app:
// later supplements win), in either data format. Unknown keys are an error,
// so a typo can't silently do nothing.
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const input = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
const CORE = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `supplement${n}.json`).concat(['holden.json', 'ford.json', 'supplement9.json']);
const cache = {};
const load = f => (cache[f] ??= { raw: fs.readFileSync(path.join(DATA, f), 'utf8'), dirty: false, get o() { return this._o ??= JSON.parse(this.raw) } });
const fmt = n => '$' + n.toLocaleString('en-US');
let ok = 0;
for (const [key, price] of Object.entries(input.prices)) {
  const [make, model, year, trim] = key.split('|');
  if (!makes[make]?.[model]?.[year]?.includes(trim)) throw new Error('not in catalogue: ' + key);
  const files = CORE.concat((supps[make] || []).map(n => `supplement${n}.json`));
  let hit = null;
  for (const f of files) {           // last match wins, like the app
    if (!fs.existsSync(path.join(DATA, f))) continue
    const s = load(f).o.specs
    if (s[key]) hit = [f, key]; else if (s[`${model}|${year}|${trim}`]) hit = [f, `${model}|${year}|${trim}`]
  }
  if (!hit) throw new Error('no spec entry for ' + key);
  const F = load(hit[0]), spec = F.o.specs[hit[1]];
  if (spec.en !== undefined) spec.pr = fmt(price); else spec.price = fmt(price);
  F.dirty = true; ok++;
}
for (const [f, F] of Object.entries(cache)) if (F.dirty)
  fs.writeFileSync(path.join(DATA, f), JSON.stringify(F.o, null, 2) + (F.raw.endsWith('\n') ? '\n' : ''));
console.log(`${ok} prices applied (${input.source})`);
