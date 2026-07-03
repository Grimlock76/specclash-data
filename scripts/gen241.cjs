'use strict';
// supplement241.json — depth pack (2026-07-03): high-volume AU models missing
// from existing makes. Web-verified: MG HS (Vibe/Excite/Essence), Chery
// Tiggo 4 (Urban/Ultimate), GWM Haval H7 (Vanta HEV 179kW/530Nm $46,990,
// Aug 2025), Deepal S05 (200kW RWD 68.8kWh, H1 2026).
// Fuel convention: fc = city, fh = highway, fx = combined.
const fs = require('fs'), path = require('path');
const specs = {};
const add = (make, model, year, trim, d) => { specs[`${make}|${model}|${year}|${trim}`] = d; };

const ice = o => ({
  engine: o.engine, displacement: o.disp, cylinders: o.cyl, aspiration: 'Turbo',
  drivetrain: o.dr || 'FWD', transmission: o.tx, power: o.kw, torque: o.nm,
  fc: o.city ?? null, fh: o.hwy ?? null, fx: o.comb ?? null, fuelType: o.fuel || 'petrol',
  acceleration: o.z1, topSpeed: o.top, weight: o.wt, seats: 5, cargo: o.cargo ?? null,
  price: o.price,
});

// ─── MG HS — MK1 (2020-2023), 1.5T 119kW/250Nm 7DCT ─────────────────────────
for (const yr of [2020, 2021, 2022, 2023]) {
  for (const [trim, wt, price] of [['Vibe', 1523, '~$31,990'], ['Excite', 1543, '~$34,990'], ['Essence', 1573, '~$38,990']]) {
    add('MG', 'HS', yr, trim, ice({
      engine: '1.5L I4 Turbo', disp: 1490, cyl: 4, tx: '7-speed DCT',
      kw: 119, nm: 250, city: 9.5, hwy: 6.1, comb: 7.3, z1: 9.9, top: 190,
      wt, cargo: 463, price }));
  }
}
// ─── MG HS — new gen (2024-2026), 1.5T 125kW/275Nm ───────────────────────────
for (const yr of [2024, 2025, 2026]) {
  for (const [trim, wt, price] of [['Vibe', 1540, '~$33,990'], ['Excite', 1560, '~$36,990'], ['Essence', 1580, '~$40,990']]) {
    add('MG', 'HS', yr, trim, ice({
      engine: '1.5L I4 Turbo', disp: 1497, cyl: 4, tx: '7-speed DCT',
      kw: 125, nm: 275, city: 8.9, hwy: 5.9, comb: 6.9, z1: 9.4, top: 190,
      wt, cargo: 507, price }));
  }
}

// ─── Chery Tiggo 4 — light SUV, 1.5T 108kW/210Nm CVT (AU 2024+) ──────────────
for (const yr of [2024, 2025, 2026]) {
  for (const [trim, price] of [['Urban', '~$23,990'], ['Ultimate', '~$26,990']]) {
    add('Chery', 'Tiggo 4', yr, trim, ice({
      engine: '1.5L I4 Turbo', disp: 1498, cyl: 4, tx: 'CVT',
      kw: 108, nm: 210, city: 9.4, hwy: 6.4, comb: 7.5, z1: 10.2, top: 175,
      wt: 1361, cargo: 380, price }));
  }
}

// ─── GWM Haval H7 — boxy hybrid SUV, single Vanta trim (AU Aug 2025) ─────────
for (const yr of [2025, 2026]) {
  add('GWM', 'Haval H7', yr, 'Vanta', {
    engine: '1.5L I4 Turbo HEV', displacement: 1497, cylinders: 4, aspiration: 'Turbo',
    drivetrain: 'FWD', transmission: '2-speed DHT', power: 179, torque: 530,
    fc: null, fh: null, fx: 5.7, fuelType: 'hybrid',
    acceleration: 8.0, topSpeed: 180, weight: 1795, seats: 5, cargo: 483,
    price: '~$46,990',
  });
}

// ─── Deepal S05 — mid-size EV SUV (AU H1 2026) ───────────────────────────────
add('Deepal', 'S05', 2026, 'RWD', {
  engine: 'Electric', displacement: null, cylinders: null, aspiration: 'Electric',
  drivetrain: 'RWD', transmission: '1sp auto', power: 200, torque: 320,
  fc: null, fh: null, fx: null, fuelType: 'electric', range: 400, battery: '68.8 kWh',
  acceleration: 6.9, topSpeed: 180, weight: 1930, seats: 5, cargo: 492,
  price: '~$44,990',
});

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement241.json'),
  JSON.stringify({ specs }, null, 2) + '\n');
console.log('wrote supplement241.json with', Object.keys(specs).length, 'entries');
