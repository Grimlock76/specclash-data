'use strict';
// supplement246.json — 2026-10-22, Carsales-verified (Redbook spec tables):
// Toyota LandCruiser 300 2026. The previous 2026 data had a 305 kW petrol
// twin-turbo in VX/Sahara/ZX grades (never sold here in ICE-only form) and
// estimated prices. Real 2026 lineup: 3.3 twin-turbo diesel (F33A-FTV) in
// GX/GXL/VX/Sahara/GR Sport/Sahara ZX, plus Performance Hybrid (VJH300R,
// 3.4 twin-turbo petrol V35A-FTS hybrid, 341 kW system) in Sahara ZX and
// GR Sport. Performance Hybrid has no Carsales price when new yet → null,
// and only tare mass is published for it. Hybrid system torque not published
// (engine 650 Nm) → null.
// 0-100 / top speed not on Carsales → null.
const fs = require('fs'), path = require('path');
const specs = {};
const add = (make, model, year, trim, d) => { specs[`${make}|${model}|${year}|${trim}`] = d; };
const $ = n => (n == null ? null : `$${n.toLocaleString('en-US')}`);

const diesel = (wt, seats, price) => ({
  engine: '3.3L V6 Twin-Turbo Diesel (F33A-FTV)', displacement: 3346, cylinders: 6, aspiration: 'Twin-Turbo',
  drivetrain: '4WD', transmission: '10-speed automatic', power: 227, torque: 700,
  fc: 11.1, fh: 7.6, fx: 8.9, fuelType: 'diesel',
  acceleration: null, topSpeed: null, weight: wt, seats, cargo: null, price: $(price),
});
const hybrid = () => ({
  engine: '3.4L V6 Twin-Turbo Hybrid (V35A-FTS)', displacement: 3445, cylinders: 6, aspiration: 'Twin-Turbo',
  drivetrain: '4WD', transmission: '10-speed automatic', power: 341, torque: null,
  fc: 13.7, fh: 8.0, fx: 10.0, fuelType: 'hybrid',
  acceleration: null, topSpeed: null, weight: 2650, seats: 5, cargo: null, price: null,
});

const LC300 = [
  ['GX', diesel(2480, 5, 99270)],
  ['GXL', diesel(2545, 7, 111750)],
  ['VX', diesel(2620, 7, 123440)],
  ['Sahara', diesel(2620, 7, 140240)],
  ['GR Sport', diesel(2620, 5, 147090)],
  ['Sahara ZX', diesel(2600, 5, 147840)],
  ['Performance Hybrid Sahara ZX', hybrid()],
  ['Performance Hybrid GR Sport', hybrid()],
];
for (const [trim, d] of LC300) add('Toyota', 'LandCruiser 300', 2026, trim, d);

const DATA = path.join(__dirname, '..', 'src', 'data');
fs.writeFileSync(path.join(DATA, 'supplement246.json'), JSON.stringify({ specs }, null, 2) + '\n');

const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
makes.Toyota['LandCruiser 300']['2026'] = LC300.map(([t]) => t);
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');

const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
if (!supps.Toyota.includes(246)) supps.Toyota.push(246);
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');
console.log('wrote supplement246.json with', Object.keys(specs).length, 'entries');
