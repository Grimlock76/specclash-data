'use strict';
// supplement250.json — 2026-10-23: Isuzu D-MAX + MU-X 2026 (AU), 3.0 turbo-diesel
// auto 4x4 variants (D-MAX crew-cab utes). Replaces the old 2026 data (estimated
// "~" prices, one shared weight, ex-RG trim names like "RG LS-M Crew Cab").
// Specs + "price when new": Carsales variant spec tables (Redbook).
// 0-100/top speed not published → null. fc/fh/fx = city/highway/combined.
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const specs = {};
const isuzu = o => ({
  engine: '3.0L I4 Turbo Diesel (4JJ3-TCX)', displacement: 2999, cylinders: 4,
  aspiration: 'Turbo', drivetrain: '4WD', transmission: '6-speed automatic',
  power: 140, torque: 450, fc: o.f[0], fh: o.f[1], fx: o.f[2], fuelType: 'diesel',
  acceleration: null, topSpeed: null, weight: o.wt, seats: o.seats, cargo: null,
  price: `$${o.price.toLocaleString('en-US')}`,
  towing: 3500, payload: o.pl, fuelTank: o.tank, groundClearance: o.gc,
});
const DM = [8.3, 6.5, 7.1], XR = [8.4, 7.4, 7.8], MU = [8.6, 7.1, 7.6];
const DMAX = [
  ['SX', isuzu({ f: DM, wt: 2035, seats: 5, price: 54200, pl: 1065, tank: 76, gc: 235 })],
  ['LS-U', isuzu({ f: DM, wt: 2105, seats: 5, price: 65000, pl: 995, tank: 76, gc: 240 })],
  ['LS-U+', isuzu({ f: DM, wt: 2105, seats: 5, price: 68000, pl: 995, tank: 76, gc: 240 })],
  ['X-Rider', isuzu({ f: XR, wt: 2060, seats: 5, price: 61500, pl: 1040, tank: 76, gc: 235 })],
  ['X-Terrain', isuzu({ f: XR, wt: 2170, seats: 5, price: 73000, pl: 930, tank: 76, gc: 240 })],
  ['Blade', isuzu({ f: DM, wt: 2199, seats: 5, price: 80900, pl: 901, tank: 76, gc: 244 })],
];
const MUX = [
  ['LS-M', isuzu({ f: MU, wt: 2140, seats: 7, price: 57900, pl: 660, tank: 80, gc: 230 })],
  ['LS-U', isuzu({ f: MU, wt: 2160, seats: 7, price: 64900, pl: 640, tank: 80, gc: 235 })],
  ['LS-T', isuzu({ f: MU, wt: 2185, seats: 7, price: 73400, pl: 615, tank: 80, gc: 235 })],
  ['X-Terrain', isuzu({ f: MU, wt: 2195, seats: 7, price: 77100, pl: 605, tank: 80, gc: 235 })],
];
for (const [t, d] of DMAX) specs[`Isuzu|D-MAX|2026|${t}`] = d;
for (const [t, d] of MUX) specs[`Isuzu|MU-X|2026|${t}`] = d;
fs.writeFileSync(path.join(DATA, 'supplement250.json'), JSON.stringify({ specs }, null, 2) + '\n');

const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
makes.Isuzu['D-MAX']['2026'] = DMAX.map(([t]) => t);
makes.Isuzu['MU-X']['2026'] = MUX.map(([t]) => t);
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');
const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
if (!supps.Isuzu.includes(250)) supps.Isuzu.push(250);
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');

for (const f of fs.readdirSync(DATA).filter(f => /^supplement\d+\.json$/.test(f) && f !== 'supplement250.json')) {
  const p = path.join(DATA, f), raw = fs.readFileSync(p, 'utf8'), o = JSON.parse(raw);
  const ks = Object.keys(o.specs).filter(k => /^(Isuzu\|)?(D-MAX|MU-X)\|2026\|/.test(k));
  if (!ks.length) continue;
  ks.forEach(k => delete o.specs[k]);
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(f, 'removed', ks.join(', '));
}
console.log('wrote supplement250.json with', Object.keys(specs).length, 'entries');
