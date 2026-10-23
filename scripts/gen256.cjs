'use strict';
// supplement256.json — 2026-10-23: Toyota Camry, Kluger, Corolla (hatch) 2026
// (AU). All three are hybrid-only for 2026; the catalogue had petrol and
// US-market grades (Camry SX/SXL, petrol Kluger, Corolla petrol/GR Sport).
// Specs + "price when new": Carsales variant pages. Power = combined system
// output. Toyota publishes no system torque (Carsales lists the petrol
// engine's alone), so torque is null rather than a misleading number.
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const $ = n => `$${n.toLocaleString('en-US')}`;
const hyb = { fuelType: 'hybrid', aspiration: 'Naturally Aspirated', cylinders: 4, torque: null, topSpeed: null, cargo: null };
const CAMRY = { ...hyb, engine: '2.5L I4 Hybrid (A25A-FXS)', displacement: 2487, power: 170, transmission: 'CVT',
  drivetrain: 'FWD', fc: 4.0, fh: 4.0, fx: 4.0, seats: 5, cargo: 524, fuelTank: 50, acceleration: null };
const KLUGER = { ...hyb, engine: '2.5L I4 Hybrid (A25A-FXS)', displacement: 2487, power: 184, transmission: 'CVT',
  drivetrain: 'AWD', fc: 6.0, fh: 5.6, fx: 5.6, seats: 7, towing: 2000, fuelTank: 65, acceleration: null };
const COROLLA = { ...hyb, engine: '1.8L I4 Hybrid (2ZR-FXE)', displacement: 1798, power: 103, transmission: 'CVT',
  drivetrain: 'FWD', fc: 3.8, fh: 4.3, fx: 4.0, seats: 5, fuelTank: 43, acceleration: null, weight: 1400 };
const L = {
  Camry: {
    'Ascent Hybrid': { ...CAMRY, weight: 1565, price: $(39990), acceleration: 7.2 },
    'Ascent Sport Hybrid': { ...CAMRY, weight: 1565, price: $(42990) },
    'SL Hybrid': { ...CAMRY, weight: 1625, price: $(53990) },
  },
  Kluger: {
    'GX Hybrid': { ...KLUGER, weight: 2050, price: $(62410) },
    'GXL Hybrid': { ...KLUGER, weight: 2050, price: $(71930) },
    'Grande Hybrid': { ...KLUGER, weight: 2095, price: $(85065) },
  },
  Corolla: {
    'Ascent Sport Hybrid': { ...COROLLA, price: $(32110), cargo: 217 },
    'SX Hybrid': { ...COROLLA, price: $(35260), cargo: 217 },
    'ZR Hybrid': { ...COROLLA, price: $(39100), cargo: 333 },
  },
};
const specs = {};
const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
for (const [model, rows] of Object.entries(L)) {
  for (const [t, d] of Object.entries(rows)) specs[`Toyota|${model}|2026|${t}`] = d;
  makes.Toyota[model]['2026'] = Object.keys(rows);
}
fs.writeFileSync(path.join(DATA, 'supplement256.json'), JSON.stringify({ specs }, null, 2) + '\n');
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');
const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
if (!supps.Toyota.includes(256)) supps.Toyota.push(256);
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');
for (const f of fs.readdirSync(DATA).filter(f => /^(supplement\d+|holden|ford)\.json$/.test(f) && f !== 'supplement256.json')) {
  const p = path.join(DATA, f), raw = fs.readFileSync(p, 'utf8'), o = JSON.parse(raw);
  const ks = Object.keys(o.specs).filter(k => /^(Toyota\|)?(Camry|Kluger|Corolla)\|2026\|/.test(k));
  if (!ks.length) continue;
  ks.forEach(k => delete o.specs[k]);
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(f, 'removed', ks.length);
}
