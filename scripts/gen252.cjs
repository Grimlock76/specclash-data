'use strict';
// supplement252.json — 2026-10-23: Mitsubishi Triton MV (2024–2026, AU).
// Replaces the carried-over MR-era grades (GL, Exceed, Titan) and the wrong
// "4N15" engine on 2024+ cars. MV: 4N16 2.4L twin-turbo diesel, 150 kW /
// 470 Nm, 6-speed auto. Grades: GLX, GLX+, GLX-R, GLS, GSR (+ Raider 2026).
// Specs + "price when new": Carsales variant pages, one per grade per year
// (the variant Carsales shows — GLX is the 4x2 in 2024/2026, 4x4 in 2025;
// GLX+ is Club Cab in 2024/2026, Double Cab in 2025). 2025 GLX+ kerb weight
// and payload aren't published (only tare) → null.
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const specs = {};
const T = o => ({
  engine: '2.4L I4 Twin-Turbo Diesel (4N16)', displacement: 2442, cylinders: 4,
  aspiration: 'Twin-Turbo', drivetrain: o.rwd ? 'RWD' : '4WD', transmission: '6-speed automatic',
  power: 150, torque: 470, fc: o.rwd ? 9.3 : 9.6, fh: o.rwd ? 6.5 : 6.7, fx: o.rwd ? 7.5 : 7.7, fuelType: 'diesel',
  acceleration: null, topSpeed: null, weight: o.wt, seats: o.seats ?? 5, cargo: null,
  price: `$${o.price.toLocaleString('en-US')}`, towing: 3500, ...(o.pl ? { payload: o.pl } : {}),
  fuelTank: 75, groundClearance: o.gc ?? 228,
});
const LINEUP = {
  2024: [['GLX', T({ rwd: true, wt: 2000, price: 43690, pl: 1070 })],
         ['GLX+', T({ wt: 2080, seats: 4, price: 50340, pl: 1120 })],
         ['GLX-R', T({ wt: 2120, price: 56740, pl: 1080 })],
         ['GLS', T({ wt: 2125, price: 59090, pl: 1075 })],
         ['GSR', T({ wt: 2170, price: 63840, pl: 1030 })]],
  2025: [['GLX', T({ wt: 2111, price: 51440, pl: 1091 })],
         ['GLX+', T({ wt: null, price: 53790 })],
         ['GLX-R', T({ wt: 2120, price: 57240, pl: 1080 })],
         ['GLS', T({ wt: 2125, price: 59840, pl: 1075 })],
         ['GSR', T({ wt: 2164, price: 64590, pl: 916 })]],
  2026: [['GLX', T({ rwd: true, wt: 2015, price: 44190, pl: 1055 })],
         ['GLX+', T({ wt: 2089, seats: 4, price: 50690, pl: 1111 })],
         ['GLX-R', T({ wt: 2107, price: 57440, pl: 1093 })],
         ['GLS', T({ wt: 2129, price: 60140, pl: 1071 })],
         ['GSR', T({ wt: 2170, price: 65590, pl: 1030 })],
         ['Raider', T({ wt: 2195, price: 74990, pl: 990, gc: 243 })]],
};
const makes = JSON.parse(fs.readFileSync(path.join(DATA, 'makes.json'), 'utf8'));
for (const [y, rows] of Object.entries(LINEUP)) {
  for (const [t, d] of rows) specs[`Mitsubishi|Triton|${y}|${t}`] = d;
  makes.Mitsubishi.Triton[y] = rows.map(([t]) => t);
}
fs.writeFileSync(path.join(DATA, 'supplement252.json'), JSON.stringify({ specs }, null, 2) + '\n');
fs.writeFileSync(path.join(DATA, 'makes.json'), JSON.stringify(makes, null, 2) + '\n');
const supps = JSON.parse(fs.readFileSync(path.join(DATA, 'makeSupps.json'), 'utf8'));
if (!supps.Mitsubishi.includes(252)) supps.Mitsubishi.push(252);
fs.writeFileSync(path.join(DATA, 'makeSupps.json'), JSON.stringify(supps, null, 2) + '\n');
for (const f of fs.readdirSync(DATA).filter(f => /^supplement\d+\.json$/.test(f) && f !== 'supplement252.json')) {
  const p = path.join(DATA, f), raw = fs.readFileSync(p, 'utf8'), o = JSON.parse(raw);
  const ks = Object.keys(o.specs).filter(k => /^(Mitsubishi\|)?Triton\|202[456]\|/.test(k));
  if (!ks.length) continue;
  ks.forEach(k => delete o.specs[k]);
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));
  console.log(f, 'removed', ks.length);
}
