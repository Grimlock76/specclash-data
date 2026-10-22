'use strict';
// supplement248.json — 2026-10-23: Toyota HiLux 2026 (new generation, AU).
// Replaces the 2026 trims, which were the outgoing model (GR Sport, SR5+ etc).
// Specs: Carsales variant spec tables (Redbook). Prices: CarsGuide 2026 MSRP
// list (one consistent source; Carsales base prices differ by a few hundred
// on some variants). Dual-cab variants unless noted.
//  - 2.8 turbo-diesel 150 kW; 500 Nm auto, 420 Nm manual (SR5 manual).
//  - "48V" grades add a 48-volt mild-hybrid system to the same 2.8.
//  - BEV: 144 kW, 59.2 kWh, 315 km ADR range; torque not published.
// 0-100 and top speed aren't published → null. Fuel convention fc/fh/fx =
// city/highway/combined.
const fs = require('fs'), path = require('path');
const specs = {};
const DATA = path.join(__dirname, '..', 'src', 'data');

const diesel = o => ({
  engine: o.mhev ? '2.8L I4 Turbo Diesel 48V mild hybrid (1GD-FTV)' : '2.8L I4 Turbo Diesel (1GD-FTV)',
  displacement: 2755, cylinders: 4, aspiration: 'Turbo',
  drivetrain: o.drive, transmission: o.tx, power: 150, torque: o.nm,
  fc: o.city ?? null, fh: o.hwy ?? null, fx: o.comb, fuelType: 'diesel',
  acceleration: null, topSpeed: null, weight: o.wt, seats: 5, cargo: null,
  price: `$${o.price.toLocaleString('en-US')}`,
});
const bev = (wt, price) => ({
  engine: 'Dual Motor Electric', fuelType: 'electric', battery: '59.2 kWh', range: 315,
  aspiration: 'Electric', drivetrain: '4WD', transmission: '1-speed auto',
  power: 144, torque: null, fc: null, fh: null, fx: null,
  acceleration: null, topSpeed: null, weight: wt, seats: 5, cargo: null,
  price: `$${price.toLocaleString('en-US')}`,
});

const AUTO = '6-speed automatic', MAN = '6-speed manual';
const HILUX = [
  // [trim, spec]                         source of specs (Carsales variant page)
  ['Workmate', diesel({ drive: '4WD', tx: AUTO, nm: 500, city: 8.2, hwy: 6.9, comb: 7.4, wt: 2105, price: 52490 })],
  ['SR 4x2', diesel({ drive: 'RWD', tx: AUTO, nm: 500, city: 8.2, hwy: 6.9, comb: 7.4, wt: 2045, price: 52990 })],
  ['SR 48V', diesel({ mhev: true, drive: '4WD', tx: AUTO, nm: 500, city: 8.0, hwy: 6.8, comb: 7.2, wt: 2125, price: 57990 })],
  ['SR5', diesel({ drive: '4WD', tx: MAN, nm: 420, city: 7.9, hwy: 6.6, comb: 7.1, wt: 2110, price: 63990 })],
  ['SR5 48V', diesel({ mhev: true, drive: '4WD', tx: AUTO, nm: 500, city: 8.0, hwy: 6.8, comb: 7.2, wt: 2155, price: 65990 })],
  ['Rugged X 48V', diesel({ mhev: true, drive: '4WD', tx: AUTO, nm: 500, city: 7.7, hwy: 7.6, comb: 7.6, wt: 2327, price: 71990 })],
  ['Rogue 48V', diesel({ mhev: true, drive: '4WD', tx: AUTO, nm: 500, city: 7.7, hwy: 7.6, comb: 7.6, wt: 2342, price: 71990 })],
  ['SR BEV', bev(2420, 74990)],
  ['SR5 BEV', bev(2455, 82990)],
];
for (const [trim, d] of HILUX) specs[`Toyota|HiLux|2026|${trim}`] = d;
fs.writeFileSync(path.join(DATA, 'supplement248.json'), JSON.stringify({ specs }, null, 2) + '\n');

const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
makes.Toyota.HiLux['2026'] = HILUX.map(([t]) => t);
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');
const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
if (!supps.Toyota.includes(248)) supps.Toyota.push(248);
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');

// Drop the outgoing-model 2026 entries so they can't shadow or confuse
for (const f of fs.readdirSync(DATA).filter(f => /^supplement\d+\.json$/.test(f) && f !== 'supplement248.json')) {
  const p = path.join(DATA, f), raw = fs.readFileSync(p, 'utf8'), o = JSON.parse(raw);
  const ks = Object.keys(o.specs).filter(k => /^(Toyota\|)?HiLux\|2026\|/.test(k));
  if (!ks.length) continue;
  ks.forEach(k => delete o.specs[k]);
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(f, 'removed', ks.join(', '));
}
console.log('wrote supplement248.json with', Object.keys(specs).length, 'entries');
