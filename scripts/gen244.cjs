'use strict';
// supplement244.json — 2026-07-04 backlog-clearance pack, web-verified pricing:
// Skoda Superb gen4 (AU mid-2025, Sportline-only: sedan $73,990 d/a 2025 →
//   $67,990 +ORC MY26; wagon $74,990 d/a → $69,690; 195kW/400Nm EA888, no AU PHEV),
// Renault Duster (AU late-2025: Evolution/Techno, 1.3T 113kW 4x2 EDC or
//   1.2T MHEV 96kW 4x4 manual, $31,990–$37,990 +ORC),
// Audi Q5/SQ5 gen3 (AU 2026: TFSI $81,000 → SQ5 $122,400; Sportback +$3,500ish;
//   200kW TFSI quattro sport + 270kW e-hybrid added at $96,900, price parity).
// Q5 2025 stays gen2 runout in makes.json; 2026 trims replaced with gen3.
// Still excluded (no confirmed AU pricing as of 2026-07-04): BYD eMax 7,
// Nissan Patrol Y63 (Q4 2026 deliveries), XPeng G7, Lynk & Co range.
// Fuel convention: fc = city, fh = highway, fx = combined (city ≥ comb ≥ hwy).
// Q5 combined figures are published ADR; city/hwy are estimates from typical splits.
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

// ─── Skoda Superb gen4 (AU mid-2025, single Sportline grade) ─────────────────
for (const [yr, sedanPrice, wagonPrice] of [[2025, '~$73,990 d/a', '~$74,990 d/a'], [2026, '~$67,990', '~$69,690']]) {
  add('Skoda', 'Superb', yr, 'Sportline', ice({
    engine: '2.0L I4 Turbo EA888', disp: 1984, cyl: 4, dr: 'AWD', tx: '7-speed DSG',
    kw: 195, nm: 400, city: 10.0, hwy: 6.5, comb: 7.7, z1: 5.6, top: 250,
    wt: 1635, cargo: 645, price: sedanPrice }));
  add('Skoda', 'Superb', yr, 'Sportline Wagon', ice({
    engine: '2.0L I4 Turbo EA888', disp: 1984, cyl: 4, dr: 'AWD', tx: '7-speed DSG',
    kw: 195, nm: 400, city: 10.1, hwy: 6.6, comb: 7.8, z1: 5.7, top: 250,
    wt: 1666, cargo: 690, price: wagonPrice }));
}

// ─── Renault Duster (AU showrooms from late 2025) ────────────────────────────
const duster42 = (trim, wt, price) => ice({
  engine: '1.3L I4 Turbo', disp: 1333, cyl: 4, dr: 'FWD', tx: '7-speed dual-clutch',
  kw: 113, nm: 270, city: 8.5, hwy: 5.5, comb: 6.5, z1: 9.9, top: 183,
  wt, cargo: 472, price });
const duster44 = (trim, wt, price) => ice({
  engine: '1.2L I3 Turbo MHEV', disp: 1199, cyl: 3, dr: 'AWD', tx: '6-speed manual',
  kw: 96, nm: 230, city: 7.4, hwy: 4.8, comb: 5.7, z1: 11.4, top: 172,
  wt, cargo: 358, price });
for (const yr of [2025, 2026]) {
  add('Renault', 'Duster', yr, 'Evolution', duster42('Evolution', 1385, '~$31,990'));
  add('Renault', 'Duster', yr, 'Evolution 4x4', duster44('Evolution 4x4', 1440, '~$36,490'));
  add('Renault', 'Duster', yr, 'Techno', duster42('Techno', 1395, '~$36,990'));
  add('Renault', 'Duster', yr, 'Techno 4x4', duster44('Techno 4x4', 1450, '~$37,990'));
}

// ─── Audi Q5 gen3 (AU 2026) — SUV + Sportback + SQ5 ──────────────────────────
// [trim, kw, nm, fuel, engine, disp, cyl, dr, comb, city, hwy, z1, top, wt, suvPrice, sbPrice]
const Q5_VARIANTS = [
  ['TFSI', 150, 340, 'petrol', '2.0L I4 Turbo MHEV+', 1984, 4, 'FWD',
    5.7, 7.4, 4.9, 8.6, 226, 1920, '~$81,000', '~$84,500'],
  ['TDI quattro', 150, 400, 'diesel', '2.0L I4 Turbo Diesel MHEV+', 1968, 4, 'AWD',
    5.4, 7.0, 4.6, 7.4, 222, 2005, '~$87,600', '~$91,100'],
  ['TDI quattro sport', 150, 400, 'diesel', '2.0L I4 Turbo Diesel MHEV+', 1968, 4, 'AWD',
    5.4, 7.0, 4.6, 7.4, 222, 2015, '~$94,100', '~$97,600'],
  ['TFSI quattro sport', 200, 400, 'petrol', '2.0L I4 Turbo MHEV+', 1984, 4, 'AWD',
    7.9, 10.3, 6.7, 6.2, 240, 1975, '~$96,900', '~$100,400'],
];
for (const [trim, kw, nm, fuel, engine, disp, cyl, dr, comb, city, hwy, z1, top, wt, suvPrice, sbPrice] of Q5_VARIANTS) {
  add('Audi', 'Q5', 2026, trim, ice({ engine, disp, cyl, dr, tx: '7-speed S tronic',
    kw, nm, fuel, city, hwy, comb, z1, top, wt, cargo: 520, price: suvPrice }));
  add('Audi', 'Q5 Sportback', 2026, trim, ice({ engine, disp, cyl, dr, tx: '7-speed S tronic',
    kw, nm, fuel, city, hwy, comb, z1, top, wt: wt + 10, cargo: 515, price: sbPrice }));
}
// e-hybrid PHEV (20.7 kWh, 82 km WLTP EV range; ADR combined 3.3)
const ehybrid = (wt, price) => ({
  engine: '2.0L I4 Turbo PHEV + motor (270kW system)', displacement: 1984, cylinders: 4,
  aspiration: 'Turbo', drivetrain: 'AWD', transmission: '7-speed S tronic',
  power: 270, torque: 500, fc: null, fh: null, fx: 3.3, fuelType: 'hybrid',
  acceleration: 5.1, topSpeed: 250, weight: wt, seats: 5, cargo: null,
  price,
});
add('Audi', 'Q5', 2026, 'e-hybrid quattro', ehybrid(2185, '~$96,900'));
add('Audi', 'Q5 Sportback', 2026, 'e-hybrid quattro', ehybrid(2195, '~$100,400'));
// SQ5 — 3.0 V6 TFSI MHEV+
const sq5 = (wt, cargo, price) => ice({
  engine: '3.0L V6 Turbo MHEV+', disp: 2995, cyl: 6, dr: 'AWD', tx: '7-speed S tronic',
  kw: 270, nm: 550, city: 9.9, hwy: 6.5, comb: 7.6, z1: 4.5, top: 250,
  wt, cargo, price });
add('Audi', 'SQ5', 2026, 'TFSI edition one', sq5(2075, 520, '~$106,400'));
add('Audi', 'SQ5', 2026, 'TFSI', sq5(2075, 520, '~$122,400'));
add('Audi', 'Q5 Sportback', 2026, 'SQ5 Sportback edition one', sq5(2085, 515, '~$109,900'));
add('Audi', 'Q5 Sportback', 2026, 'SQ5 Sportback', sq5(2085, 515, '~$125,900'));

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement244.json'),
  JSON.stringify({ specs }, null, 2) + '\n');
console.log('wrote supplement244.json with', Object.keys(specs).length, 'entries');
