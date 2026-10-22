'use strict';
// supplement245.json — 2026-10-22, Carsales-verified (Redbook spec tables):
//
// Toyota RAV4 gen6 (XA60, AU 2026). Replaces the 2026 trims, which were gen5
// carry-over names with estimated prices. Hybrid-only range: 143 kW 2.5 hybrid
// (2WD AXAL62R / eFour AXAL64R) and PHEV (201 kW FWD AXAP62R, 227 kW eFour
// AXAP64R). Prices are Carsales "price when new" (base incl. GST & LCT).
// Weight is tare (Carsales lists no kerb mass for this generation).
// Torque left null: Carsales only publishes engine torque (221 Nm), not system.
//
// Nissan Patrol 2026: Y62 run-out (Ti, Ti-L, Warrior; ST/ST-L gone) plus the
// new Y63 (3.5 twin-turbo V6, MY27). Carsales has no price, fuel or weight for
// Y63 yet, so those stay null rather than guessed.
//
// 0-100 and top speed are not published on Carsales → null throughout.
// Fuel convention: fc = city, fh = highway, fx = combined.
const fs = require('fs'), path = require('path');
const specs = {};
const add = (make, model, year, trim, d) => { specs[`${make}|${model}|${year}|${trim}`] = d; };

// ─── Toyota RAV4 gen6 ────────────────────────────────────────────────────────
const rav4 = o => ({
  engine: o.phev ? `2.5L I4 Plug-in Hybrid (${o.range} km EV range)` : '2.5L I4 Hybrid',
  displacement: 2487, cylinders: 4, aspiration: 'NA',
  drivetrain: o.awd ? 'AWD' : 'FWD', transmission: 'CVT',
  power: o.kw, torque: null,
  fc: o.city ?? null, fh: o.hwy ?? null, fx: o.comb,
  fuelType: o.phev ? 'plug-in hybrid' : 'hybrid',
  acceleration: null, topSpeed: null, weight: o.tare, seats: 5, cargo: null,
  price: `$${o.price.toLocaleString('en-US')}`,
});
const HEV_2WD = { kw: 143, city: 4.2, hwy: 4.7, comb: 4.5 };
const HEV_AWD = { kw: 143, awd: true, city: 4.4, hwy: 4.8, comb: 4.6 };
const RAV4 = [
  ['GX',             { ...HEV_2WD, tare: 1605, price: 45990 }],
  ['GX eFour',       { ...HEV_AWD, tare: 1665, price: 49340 }],
  ['GXL',            { ...HEV_2WD, tare: 1630, price: 48990 }],
  ['GXL eFour',      { ...HEV_AWD, tare: 1695, price: 52340 }],
  ['Edge',           { ...HEV_AWD, tare: 1695, price: 55340 }],
  ['Cruiser',        { ...HEV_2WD, tare: 1675, price: 56990 }],
  ['Cruiser eFour',  { ...HEV_AWD, tare: 1740, price: 60340 }],
  ['XSE eFour',      { ...HEV_AWD, tare: 1710, price: 59015 }],
  ['XSE PHEV',       { phev: true, kw: 201, comb: 0.7, range: 154, tare: 1935, price: 59515 }],
  ['XSE PHEV eFour', { phev: true, awd: true, kw: 227, comb: 0.7, range: 144, tare: 1995, price: 64015 }],
  ['GR Sport PHEV',  { phev: true, awd: true, kw: 227, comb: 0.7, range: 144, tare: 1990, price: 66340 }],
];
for (const [trim, o] of RAV4) add('Toyota', 'RAV4', 2026, trim, rav4(o));

// ─── Nissan Patrol 2026 ──────────────────────────────────────────────────────
const y62 = (wt, seats, price) => ({
  engine: '5.6L V8 (VK56VD)', displacement: 5552, cylinders: 8, aspiration: 'NA',
  drivetrain: '4WD', transmission: '7-speed automatic', power: 298, torque: 560,
  fc: 20.2, fh: 11.0, fx: 14.4, fuelType: 'petrol',
  acceleration: null, topSpeed: null, weight: wt, seats, cargo: null,
  price: `$${price.toLocaleString('en-US')}`,
});
add('Nissan', 'Patrol', 2026, 'Ti', y62(2786, 8, 95600));
add('Nissan', 'Patrol', 2026, 'Ti-L', y62(2847, 7, 107100));
add('Nissan', 'Patrol', 2026, 'Warrior', y62(2884, 8, 110660));

const y63 = () => ({
  engine: '3.5L V6 Twin-Turbo (VR35DDTT)', displacement: 3492, cylinders: 6, aspiration: 'Twin-Turbo',
  drivetrain: '4WD', transmission: '9-speed automatic', power: 317, torque: 700,
  fc: null, fh: null, fx: null, fuelType: 'petrol',
  acceleration: null, topSpeed: null, weight: null, seats: 8, cargo: null,
  price: null,
});
for (const trim of ['Y63 Ti', 'Y63 Ti-L', 'Y63 Ti+', 'Y63 Ti-L+', 'Y63 PRO-4X', 'Y63 Ti-L Reserve']) {
  add('Nissan', 'Patrol', 2026, trim, y63());
}

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement245.json'),
  JSON.stringify({ specs }, null, 2) + '\n');

// Catalogue + lazy-load registration
const DATA = path.join(__dirname, '..', 'src', 'data');
const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
makes.Toyota.RAV4['2026'] = RAV4.map(([t]) => t).sort();
makes.Nissan.Patrol['2026'] = ['Ti', 'Ti-L', 'Warrior', 'Y63 Ti', 'Y63 Ti-L', 'Y63 Ti+', 'Y63 Ti-L+', 'Y63 PRO-4X', 'Y63 Ti-L Reserve'];
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');

const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
for (const mk of ['Toyota', 'Nissan']) if (!supps[mk].includes(245)) supps[mk].push(245);
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');

console.log('wrote supplement245.json with', Object.keys(specs).length, 'entries');
