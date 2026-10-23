'use strict';
// supplement254.json — 2026-10-23: Ford Everest 2026 (AU) lineup. Replaces
// estimated 2026 data and drops Titanium / Platinum+ (not in the 2026 range);
// "UB Tremor" becomes "Tremor". Specs + "price when new": Carsales variant
// pages. Active 2.0 price: CarsGuide 2026 MSRP (no Carsales page). Wolftrak:
// Carsales lists tare only and no new price → weight/price null.
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const $ = n => (n ? `$${n.toLocaleString('en-US')}` : null);
const base = { fuelType: 'diesel', drivetrain: '4WD', transmission: '10-speed automatic', cargo: null,
  acceleration: null, topSpeed: null, towing: 3500, fuelTank: 80, groundClearance: 226 };
const BIT = { ...base, engine: '2.0L I4 Bi-Turbo Diesel', displacement: 1996, cylinders: 4, aspiration: 'Twin-Turbo',
  power: 154, torque: 500, fc: 8.3, fh: 6.6, fx: 7.2 };
const V6 = { ...base, engine: '3.0L V6 Turbo Diesel', displacement: 2993, cylinders: 6, aspiration: 'Turbo',
  power: 184, torque: 600, fc: 10.2, fh: 7.6, fx: 8.5 };
const E = (eng, wt, seats, price, payload, extra = {}) =>
  ({ ...eng, weight: wt, seats, price: $(price), ...(payload ? { payload } : {}), ...extra });
const R = {
  'Active': E(BIT, null, null, 58990, null, { groundClearance: undefined }),
  'Active V6': E(V6, 2456, 5, 66990, 694),
  'Ambiente': E(BIT, 2369, 5, 59490, 731),
  'Trend': E(BIT, 2383, 7, 67290, 717),
  'Black Edition': E(BIT, 2383, 7, 69000, 717),
  'Sport Bi-Turbo': E(BIT, 2424, 7, 71190, 676),
  'Sport': E(V6, 2468, 7, 76990, 682),
  'Wolftrak': E(V6, null, 7, null, null),
  'Wildtrak': E(V6, 2530, 7, 79990, 620),
  'Tremor': E(V6, 2550, 7, 79990, 690, { fc: 10.4, fh: 8.7, fx: 9.3, groundClearance: 255 }),
  'Platinum': E(V6, 2512, 7, 82917, 638),
};
for (const d of Object.values(R)) for (const k of Object.keys(d)) if (d[k] === undefined) delete d[k];
const specs = Object.fromEntries(Object.entries(R).map(([t, d]) => [`Ford|Everest|2026|${t}`, d]));
fs.writeFileSync(path.join(DATA, 'supplement254.json'), JSON.stringify({ specs }, null, 2) + '\n');
const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
makes.Ford.Everest['2026'] = Object.keys(R);
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');
const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
if (!supps.Ford.includes(254)) supps.Ford.push(254);
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');
for (const f of fs.readdirSync(DATA).filter(f => /^supplement\d+\.json$/.test(f) && f !== 'supplement254.json')) {
  const p = path.join(DATA, f), raw = fs.readFileSync(p, 'utf8'), o = JSON.parse(raw);
  const ks = Object.keys(o.specs).filter(k => /^(Ford\|)?Everest\|2026\|/.test(k));
  if (!ks.length) continue;
  ks.forEach(k => delete o.specs[k]);
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(f, 'removed', ks.join(', '));
}
