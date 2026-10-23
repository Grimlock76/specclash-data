'use strict';
// Shared helper for the genNNN lineup scripts: write a supplement, replace the
// catalogue year(s) and drop older entries for exactly those make/model/years.
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const $ = n => (n ? `$${n.toLocaleString('en-US')}` : null);
function writeLineups(num, lineups) {
  // lineups: { 'Make|Model|Year': { trim: spec, … }, … }
  const file = `supplement${num}.json`, specs = {};
  const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
  const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
  const targets = [];
  for (const [mmy, rows] of Object.entries(lineups)) {
    const [make, model, year] = mmy.split('|');
    for (const [t, d] of Object.entries(rows)) {
      for (const k of Object.keys(d)) if (d[k] === undefined) delete d[k];
      // gen scripts take 0-100 from Carsales/CarsGuide spec tables = claimed.
      // Carried-over rows (existing()) arrive with accelClaimed already set.
      if (typeof d.acceleration === 'number' && d.accelClaimed === undefined) d.accelClaimed = true;
      specs[`${make}|${model}|${year}|${t}`] = d;
    }
    if (!makes[make]?.[model]) throw new Error('unknown model ' + mmy);
    makes[make][model][year] = Object.keys(rows);
    if (!supps[make].includes(num)) supps[make].push(num);
    targets.push([make, model, year]);
  }
  fs.writeFileSync(path.join(DATA, file), JSON.stringify({ specs }, null, 2) + '\n');
  fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');
  fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');
  for (const f of fs.readdirSync(DATA).filter(f => /^(supplement\d+|holden|ford)\.json$/.test(f) && f !== file)) {
    const p = path.join(DATA, f), raw = fs.readFileSync(p, 'utf8'), o = JSON.parse(raw);
    const ks = Object.keys(o.specs).filter(k => targets.some(([mk, md, y]) =>
      k.startsWith(`${mk}|${md}|${y}|`) || k.startsWith(`${md}|${y}|`)));
    if (!ks.length) continue;
    ks.forEach(k => delete o.specs[k]);
    fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
    console.log(f, 'removed', ks.length);
  }
  console.log('wrote', file, Object.keys(specs).length, 'entries');
}
// Current resolved raw spec for a trim (last file wins, like the app) — used
// to carry a trim over unchanged when rebuilding the rest of its lineup.
function existing(make, model, year, trim) {
  let hit = null;
  const files = fs.readdirSync(DATA).filter(f => /^(supplement\d+|holden|ford)\.json$/.test(f))
    .sort((a, b) => (parseInt(a.replace(/\D/g, '')) || 0) - (parseInt(b.replace(/\D/g, '')) || 0));
  for (const f of files) {
    const o = JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8')).specs;
    hit = o[`${make}|${model}|${year}|${trim}`] || o[`${model}|${year}|${trim}`] || hit;
  }
  if (!hit) throw new Error(`no existing spec for ${make}|${model}|${year}|${trim}`);
  const out = JSON.parse(JSON.stringify(hit));
  if (out.accelClaimed === undefined) out.accelClaimed = false;
  return out;
}
module.exports = { writeLineups, existing, $ };
