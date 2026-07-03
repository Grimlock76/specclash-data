'use strict';
// supplement242.json — 2026-07-05 new-AU-arrivals pack, web-verified pricing:
// VW Tayron (carsales: $48,290–$73,490), Kia K4 (Cerato replacement),
// Jaecoo J8 (Track $49,990 / Ridge AWD $54,990 d/a, 183kW/385Nm),
// Chery Tiggo 8 Super Hybrid (Urban $45,990 d/a; Chery publishes no combined
// system figure — motor 150kW/310Nm stored, engine string is transparent),
// Ford Everest UB Tremor. BYD eMax 7 deliberately excluded (no confirmed AU
// launch). Fuel convention: fc = city, fh = highway, fx = combined.
const fs = require('fs'), path = require('path');
const specs = {};
const add = (make, model, year, trim, d) => { specs[`${make}|${model}|${year}|${trim}`] = d; };

const ice = o => ({
  engine: o.engine, displacement: o.disp, cylinders: o.cyl, aspiration: o.asp || 'Turbo',
  drivetrain: o.dr, transmission: o.tx, power: o.kw, torque: o.nm,
  fc: o.city ?? null, fh: o.hwy ?? null, fx: o.comb ?? null, fuelType: o.fuel || 'petrol',
  acceleration: o.z1, topSpeed: o.top, weight: o.wt, seats: o.seats || 5, cargo: o.cargo ?? null,
  price: o.price,
});

// ─── Volkswagen Tayron (AU mid-2025, 7-seat Tiguan Allspace successor) ───────
for (const yr of [2025, 2026]) {
  add('Volkswagen', 'Tayron', yr, '110TSI Life', ice({
    engine: '1.4L I4 Turbo', disp: 1395, cyl: 4, dr: 'FWD', tx: '8-speed auto',
    kw: 110, nm: 250, city: 9.6, hwy: 6.4, comb: 7.6, z1: 9.4, top: 202,
    wt: 1658, seats: 7, cargo: 850, price: '~$48,290' }));
  add('Volkswagen', 'Tayron', yr, '150TSI Life', ice({
    engine: '2.0L I4 Turbo', disp: 1984, cyl: 4, dr: 'AWD', tx: '7-speed DSG',
    kw: 150, nm: 320, city: 11.0, hwy: 7.3, comb: 8.7, z1: 7.8, top: 210,
    wt: 1780, seats: 7, cargo: 850, price: '~$53,990' }));
  add('Volkswagen', 'Tayron', yr, '150TSI Elegance', ice({
    engine: '2.0L I4 Turbo', disp: 1984, cyl: 4, dr: 'AWD', tx: '7-speed DSG',
    kw: 150, nm: 320, city: 11.0, hwy: 7.3, comb: 8.7, z1: 7.8, top: 210,
    wt: 1795, seats: 7, cargo: 850, price: '~$59,490' }));
  add('Volkswagen', 'Tayron', yr, '195TSI R-Line', ice({
    engine: '2.0L I4 Turbo', disp: 1984, cyl: 4, dr: 'AWD', tx: '7-speed DSG',
    kw: 195, nm: 400, city: 11.4, hwy: 7.5, comb: 8.9, z1: 6.1, top: 228,
    wt: 1856, seats: 7, cargo: 850, price: '~$73,490' }));
}

// ─── Kia K4 sedan (AU 2025, replaces Cerato) ─────────────────────────────────
for (const yr of [2025, 2026]) {
  for (const [trim, price, wt] of [['S', '~$30,590', 1345], ['Sport', '~$33,190', 1350], ['Sport+', '~$36,690', 1360]]) {
    add('Kia', 'K4', yr, trim, ice({
      engine: '2.0L I4 MPi', disp: 1999, cyl: 4, asp: 'NA', dr: 'FWD', tx: '6-speed auto',
      kw: 112, nm: 192, city: 9.6, hwy: 6.2, comb: 7.4, z1: 9.9, top: 195,
      wt, cargo: 508, price }));
  }
  add('Kia', 'K4', yr, 'GT-Line', ice({
    engine: '1.6L I4 Turbo', disp: 1598, cyl: 4, dr: 'FWD', tx: '7-speed DCT',
    kw: 142, nm: 264, city: 8.7, hwy: 5.7, comb: 6.7, z1: 7.7, top: 210,
    wt: 1445, cargo: 508, price: '~$42,990' }));
}

// ─── Jaecoo J8 (AU April 2025) ───────────────────────────────────────────────
for (const yr of [2025, 2026]) {
  add('Jaecoo', 'J8', yr, 'Track', ice({
    engine: '2.0L I4 Turbo', disp: 1998, cyl: 4, dr: 'FWD', tx: '8-speed auto',
    kw: 183, nm: 385, city: 10.9, hwy: 7.2, comb: 8.6, z1: 8.5, top: 200,
    wt: 1930, cargo: 738, price: '~$49,990' }));
  add('Jaecoo', 'J8', yr, 'Ridge AWD', ice({
    engine: '2.0L I4 Turbo', disp: 1998, cyl: 4, dr: 'AWD', tx: '8-speed auto',
    kw: 183, nm: 385, city: 11.3, hwy: 7.5, comb: 9.0, z1: 8.8, top: 200,
    wt: 2010, cargo: 738, price: '~$54,990' }));
}

// ─── Chery Tiggo 8 Super Hybrid (AU 2025, PHEV 7-seater) ─────────────────────
for (const yr of [2025, 2026]) {
  for (const [trim, price] of [['Super Hybrid Urban', '~$45,990'], ['Super Hybrid Ultimate', '~$49,990']]) {
    add('Chery', 'Tiggo 8', yr, trim, {
      engine: '1.5L I4 Turbo PHEV (105kW) + 150kW motor', displacement: 1499, cylinders: 4,
      aspiration: 'Turbo', drivetrain: 'FWD', transmission: '1sp DHT',
      power: 150, torque: 310, fc: null, fh: null, fx: 1.5, fuelType: 'hybrid',
      acceleration: 8.5, topSpeed: 180, weight: 1910, seats: 7, cargo: 889,
      price,
    });
  }
}

// ─── Ford Everest UB Tremor (AU 2024, V6 off-road pack) ──────────────────────
for (const yr of [2024, 2025, 2026]) {
  add('Ford', 'Everest', yr, 'UB Tremor', ice({
    engine: '3.0L V6 Turbo Diesel', disp: 2993, cyl: 6, dr: '4WD', tx: '10-speed auto',
    kw: 184, nm: 600, city: 10.6, hwy: 7.4, comb: 8.5, z1: 8.7, top: 190,
    wt: 2537, seats: 7, cargo: 898, fuel: 'diesel', price: '~$76,590' }));
}

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement242.json'),
  JSON.stringify({ specs }, null, 2) + '\n');
console.log('wrote supplement242.json with', Object.keys(specs).length, 'entries');
