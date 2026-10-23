'use strict';
// supplement251.json — 2026-10-23: Prado 2024 + 2025 (250 Series, GDJ251R, AU).
// Replaces wrong data: "T24A 229 kW hybrid" VX/Kakadu and the non-AU
// GR Sport / Sahara (Diesel/Hybrid) trims. AU grades: GX, GXL, VX, Altitude,
// Kakadu, all 1GD-FTV 2.8 diesel 150 kW/500 Nm + 8 kW mild-hybrid, 8AT.
// Specs + "price when new": Carsales variant pages for each year.
// Also: 2022/2023 VX (150 Series) was stored as a 4.0 V6 petrol — AU VX was
// the 2.8 diesel (Carsales GDJ150R: 150 kW/500 Nm, 6AT, 2,385 kg, 3,000 kg
// braked, 150 L). Its price stays the existing "~" estimate (Carsales' figure
// is identical for both years so looks like a stale Redbook entry).
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const specs = {};
const prado = o => ({
  engine: '2.8L I4 Turbo Diesel mild hybrid (1GD-FTV)', displacement: 2755, cylinders: 4,
  aspiration: 'Turbo', drivetrain: '4WD', transmission: '8-speed automatic',
  power: 150, torque: 500, fc: 8.5, fh: 7.0, fx: 7.6, fuelType: 'diesel',
  acceleration: null, topSpeed: null, weight: o.wt, seats: o.seats, cargo: null,
  price: `$${o.price.toLocaleString('en-US')}`, towing: 3500, ...(o.pl ? { payload: o.pl } : {}),
});
const LINEUP = {
  2024: [['GX', prado({ wt: 2495, seats: 5, price: 72500, pl: 605 })],
         ['GXL', prado({ wt: 2535, seats: 7, price: 79990 })],
         ['VX', prado({ wt: 2570, seats: 7, price: 87400, pl: 610 })],
         ['Altitude', prado({ wt: 2520, seats: 5, price: 92700, pl: 580 })],
         ['Kakadu', prado({ wt: 2595, seats: 7, price: 99990, pl: 605 })]],
  2025: [['GX', prado({ wt: 2495, seats: 5, price: 73200, pl: 605 })],
         ['GXL', prado({ wt: 2535, seats: 5, price: 79690 })],
         ['VX', prado({ wt: 2570, seats: 7, price: 88100, pl: 610 })],
         ['Altitude', prado({ wt: 2520, seats: 5, price: 93400, pl: 580 })],
         ['Kakadu', prado({ wt: 2595, seats: 7, price: 99990, pl: 605 })]],
};
const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
for (const [y, rows] of Object.entries(LINEUP)) {
  for (const [t, d] of rows) specs[`Toyota|Prado|${y}|${t}`] = d;
  makes.Toyota.Prado[y] = rows.map(([t]) => t);
}
fs.writeFileSync(path.join(DATA, 'supplement251.json'), JSON.stringify({ specs }, null, 2) + '\n');
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');
const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
if (!supps.Toyota.includes(251)) supps.Toyota.push(251);
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');

for (const f of fs.readdirSync(DATA).filter(f => /^supplement\d+\.json$/.test(f) && f !== 'supplement251.json')) {
  const p = path.join(DATA, f), raw = fs.readFileSync(p, 'utf8'), o = JSON.parse(raw);
  let changed = false;
  for (const k of Object.keys(o.specs)) {
    if (/^(Toyota\|)?Prado\|202[45]\|/.test(k)) { delete o.specs[k]; changed = true; console.log(f, 'removed', k); continue; }
    if (/^(Toyota\|)?Prado\|202[23]\|VX$/.test(k) && o.specs[k].en !== undefined) {
      Object.assign(o.specs[k], {
        en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4', hp: '150 kW (201 hp)', tq: '500 Nm',
        tx: '6-speed auto', dr: '4WD', fc: '9.6L', fh: '7.0L', fx: '7.9L', ft: 'Diesel', wt: '2,385 kg', se: '7',
        aspiration: 'Turbo', tw: '3,000 kg', tk: '150 L', z1: null, qm: null, ts: null,
      });
      changed = true; console.log(f, 'fixed', k);
    }
  }
  if (changed) fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
}
