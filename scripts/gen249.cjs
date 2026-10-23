'use strict';
// supplement249.json — 2026-10-23: Toyota Prado 2026 + Nissan Navara 2026 (AU).
// Replaces wrong 2026 data:
//  - Prado: every AU 250-series is the 1GD-FTV 2.8 turbo-diesel (150 kW/500 Nm)
//    with an 8 kW/65 Nm mild-hybrid motor. The old VX/Kakadu "2.4 turbo hybrid
//    229 kW" entries and the GR Sport/Sahara (Diesel/Hybrid) trims aren't sold
//    here. AU grades: GX, GXL, VX, Altitude, Kakadu.
//  - Navara: the 2026 D27 is Triton-based: 4N16 2.4 twin-turbo diesel,
//    150 kW/470 Nm, 6-speed auto, dual-cab 4x4 (not the old YD25 D23).
// Specs: Carsales variant spec tables (Redbook). Prices: CarsGuide 2026 list
// (matches Carsales "price when new"). 0-100/top speed not published → null.
// Fuel convention fc/fh/fx = city/highway/combined.
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const specs = {};
const $ = n => `$${n.toLocaleString('en-US')}`;

const prado = o => ({
  engine: '2.8L I4 Turbo Diesel mild hybrid (1GD-FTV)', displacement: 2755, cylinders: 4,
  aspiration: 'Turbo', drivetrain: '4WD', transmission: '8-speed automatic',
  power: 150, torque: 500, fc: 8.5, fh: 7.0, fx: 7.6, fuelType: 'diesel',
  acceleration: null, topSpeed: null, weight: o.wt, seats: o.seats, cargo: null,
  price: $(o.price), towing: 3500, ...(o.payload ? { payload: o.payload } : {}),
});
const PRADO = [
  ['GX', prado({ wt: 2495, seats: 5, price: 73200, payload: 605 })],
  ['GXL', prado({ wt: 2535, seats: 5, price: 79665 })],   // 5-seat GXL (7-seat $80,665)
  ['VX', prado({ wt: 2570, seats: 7, price: 88030 })],
  ['Altitude', prado({ wt: 2520, seats: 5, price: 93330 })],
  ['Kakadu', prado({ wt: 2595, seats: 7, price: 100620 })],
];

const navara = o => ({
  engine: '2.4L I4 Twin-Turbo Diesel (4N16)', displacement: 2442, cylinders: 4,
  aspiration: 'Twin-Turbo', drivetrain: '4WD', transmission: '6-speed automatic',
  power: 150, torque: 470, fc: 9.6, fh: 6.7, fx: 7.7, fuelType: 'diesel',
  acceleration: null, topSpeed: null, weight: o.wt, seats: 5, cargo: null,
  price: $(o.price), towing: 3500, payload: o.payload, fuelTank: 75, groundClearance: 228,
});
const NAVARA = [
  ['SL', navara({ wt: 2126, price: 53348, payload: 1064 })],
  ['ST', navara({ wt: 2143, price: 56765, payload: 1047 })],
  ['ST-X', navara({ wt: 2171, price: 63177, payload: 1019 })],
  ['PRO-4X', navara({ wt: 2226, price: 68418, payload: 964 })],
];

for (const [t, d] of PRADO) specs[`Toyota|Prado|2026|${t}`] = d;
for (const [t, d] of NAVARA) specs[`Nissan|Navara|2026|${t}`] = d;
fs.writeFileSync(path.join(DATA, 'supplement249.json'), JSON.stringify({ specs }, null, 2) + '\n');

const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
makes.Toyota.Prado['2026'] = PRADO.map(([t]) => t);
makes.Nissan.Navara['2026'] = NAVARA.map(([t]) => t);
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');
const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
for (const m of ['Toyota', 'Nissan']) if (!supps[m].includes(249)) supps[m].push(249);
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');

// Drop the old 2026 entries so they can't shadow the new ones
for (const f of fs.readdirSync(DATA).filter(f => /^supplement\d+\.json$/.test(f) && f !== 'supplement249.json')) {
  const p = path.join(DATA, f), raw = fs.readFileSync(p, 'utf8'), o = JSON.parse(raw);
  const ks = Object.keys(o.specs).filter(k => /^((Toyota\|)?Prado|(Nissan\|)?Navara)\|2026\|/.test(k));
  if (!ks.length) continue;
  ks.forEach(k => delete o.specs[k]);
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(f, 'removed', ks.join(', '));
}
console.log('wrote supplement249.json with', Object.keys(specs).length, 'entries');
