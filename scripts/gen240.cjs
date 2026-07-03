'use strict';
// supplement240.json — 2026-07-03 expansion pack.
// NEW MAKES (4): KGM (Torres/Torres EVX/Actyon), Denza (B5), Iveco (Daily),
// Farizon (SV) — all current AU-market entrants.
// DEPTH into existing makes: Geely EX5 + Starray EM-i, Zeekr 7X,
// Leapmotor C10 REEV + B10, Smart #5, Mahindra XUV 3XO, Ford Ranger PHEV.
// Fuel convention (MANDATORY post-v1.10): fc = city, fh = highway,
// fx = combined (city >= combined >= highway for non-hybrids).
// Sources: australiancar.reviews / carexpert.com.au / carsales.com.au
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
const ev = o => ({
  engine: 'Electric', displacement: null, cylinders: null, aspiration: 'Electric',
  drivetrain: o.dr, transmission: '1sp auto', power: o.kw, torque: o.nm,
  fc: null, fh: null, fx: null, fuelType: 'electric', range: o.range, battery: o.battery,
  acceleration: o.z1, topSpeed: o.top, weight: o.wt, seats: o.seats || 5, cargo: o.cargo ?? null,
  price: o.price,
});

// ─── KGM (KG Mobility — SsangYong rebrand, AU relaunch late 2024) ────────────
for (const yr of [2024, 2025, 2026]) {
  add('KGM', 'Torres', yr, 'ELX', ice({
    engine: '1.5L I4 Turbo', disp: 1497, cyl: 4, dr: 'FWD', tx: '6-speed auto',
    kw: 120, nm: 280, city: 9.5, hwy: 6.9, comb: 8.1, z1: 10.8, top: 191,
    wt: 1500, cargo: 703, price: '~$38,000' }));
  add('KGM', 'Torres', yr, 'Ultimate', ice({
    engine: '1.5L I4 Turbo', disp: 1497, cyl: 4, dr: 'AWD', tx: '6-speed auto',
    kw: 120, nm: 280, city: 10.1, hwy: 7.4, comb: 8.7, z1: 11.2, top: 191,
    wt: 1585, cargo: 703, price: '~$43,500' }));
  add('KGM', 'Torres EVX', yr, 'Ultimate', ev({
    dr: 'FWD', kw: 152, nm: 339, range: 462, battery: '73.4 kWh LFP',
    z1: 8.1, top: 175, wt: 1865, cargo: 703, price: '~$52,000' }));
}
for (const yr of [2025, 2026]) {
  add('KGM', 'Actyon', yr, 'Ultimate', ice({
    engine: '1.5L I4 Turbo', disp: 1497, cyl: 4, dr: 'FWD', tx: '6-speed auto',
    kw: 120, nm: 280, city: 10.2, hwy: 7.3, comb: 8.6, z1: 10.9, top: 191,
    wt: 1690, cargo: 668, price: '~$47,000' }));
}

// ─── Denza (BYD premium brand, AU launch 2025) ───────────────────────────────
for (const yr of [2025, 2026]) {
  add('Denza', 'B5', yr, 'Premium', {
    engine: '1.5L I4 Turbo PHEV', displacement: 1497, cylinders: 4, aspiration: 'Turbo',
    drivetrain: 'AWD', transmission: '1sp DHT', power: 505, torque: 760,
    fc: null, fh: null, fx: 1.8, fuelType: 'hybrid',
    acceleration: 4.8, topSpeed: 200, weight: 2890, seats: 5, cargo: 425,
    price: '~$99,900' });
}

// ─── Iveco (Daily large van — long-running AU commercial staple) ─────────────
for (const yr of [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]) {
  add('Iveco', 'Daily', yr, '35S', ice({
    engine: '3.0L I4 Turbo Diesel', disp: 2998, cyl: 4, dr: 'RWD', tx: '8-speed auto',
    kw: 132, nm: 430, city: 12.5, hwy: 9.0, comb: 10.5, z1: 12.5, top: 160,
    wt: 2300, seats: 3, cargo: 12000, fuel: 'diesel', price: '~$62,500' }));
}

// ─── Farizon (Geely commercial — SV electric van, AU 2025) ───────────────────
for (const yr of [2025, 2026]) {
  add('Farizon', 'SV', yr, 'LWB', ev({
    dr: 'FWD', kw: 170, nm: 336, range: 342, battery: '83 kWh',
    z1: 9.0, top: 160, wt: 2550, seats: 3, cargo: 6950, price: '~$75,990' }));
}

// ─── Geely depth (EX5 launched the brand in AU Feb 2025; Starray EM-i PHEV) ──
for (const yr of [2025, 2026]) {
  add('Geely', 'EX5', yr, 'Complete', ev({
    dr: 'FWD', kw: 160, nm: 320, range: 430, battery: '60.2 kWh LFP',
    z1: 6.9, top: 175, wt: 1765, cargo: 461, price: '~$40,990' }));
  add('Geely', 'EX5', yr, 'Inspire', ev({
    dr: 'FWD', kw: 160, nm: 320, range: 410, battery: '60.2 kWh LFP',
    z1: 6.9, top: 175, wt: 1795, cargo: 461, price: '~$44,990' }));
  add('Geely', 'Starray EM-i', yr, 'Complete', {
    engine: '1.5L I4 PHEV', displacement: 1499, cylinders: 4, aspiration: 'NA',
    drivetrain: 'FWD', transmission: '1sp DHT', power: 160, torque: 262,
    fc: null, fh: null, fx: 4.9, fuelType: 'hybrid',
    acceleration: 8.9, topSpeed: 180, weight: 1770, seats: 5, cargo: 535,
    price: '~$44,990' });
}

// ─── Zeekr depth (7X mid-size EV SUV, AU 2025) ───────────────────────────────
for (const yr of [2025, 2026]) {
  add('Zeekr', '7X', yr, 'RWD', ev({
    dr: 'RWD', kw: 310, nm: 440, range: 480, battery: '75 kWh LFP',
    z1: 6.0, top: 210, wt: 2260, cargo: 539, price: '~$59,900' }));
  add('Zeekr', '7X', yr, 'Performance AWD', ev({
    dr: 'AWD', kw: 475, nm: 710, range: 543, battery: '100 kWh',
    z1: 3.8, top: 210, wt: 2410, cargo: 539, price: '~$69,900' }));
}

// ─── Leapmotor depth (C10 REEV range-extender; B10 compact EV, 2026) ─────────
for (const yr of [2025, 2026]) {
  add('Leapmotor', 'C10 REEV', yr, 'Style', {
    engine: '1.5L I4 REEV', displacement: 1499, cylinders: 4, aspiration: 'NA',
    drivetrain: 'RWD', transmission: '1sp auto', power: 158, torque: 320,
    fc: null, fh: null, fx: 6.5, fuelType: 'hybrid',
    acceleration: 8.5, topSpeed: 170, weight: 1980, seats: 5, cargo: 546,
    price: '~$45,900' });
}
add('Leapmotor', 'B10', 2026, 'Design', ev({
  dr: 'RWD', kw: 160, nm: 240, range: 434, battery: '67.1 kWh LFP',
  z1: 8.0, top: 170, wt: 1790, cargo: 420, price: '~$39,990' }));

// ─── Smart depth (#5 large EV SUV, AU 2025) ──────────────────────────────────
for (const yr of [2025, 2026]) {
  add('Smart', '#5', yr, 'Pro+', ev({
    dr: 'RWD', kw: 250, nm: 373, range: 465, battery: '76 kWh',
    z1: 6.9, top: 200, wt: 2450, cargo: 630, price: '~$64,900' }));
  add('Smart', '#5', yr, 'Brabus', ev({
    dr: 'AWD', kw: 475, nm: 640, range: 540, battery: '100 kWh',
    z1: 3.8, top: 210, wt: 2550, cargo: 630, price: '~$79,900' }));
}

// ─── Ford Ranger PHEV (AU mid-2025) — extra trims on the existing model ──────
for (const yr of [2025, 2026]) {
  add('Ford', 'Ranger', yr, 'P703 PHEV XLT', {
    engine: '2.3L I4 Turbo PHEV', displacement: 2261, cylinders: 4, aspiration: 'Turbo',
    drivetrain: '4WD', transmission: '10-speed auto', power: 207, torque: 697,
    fc: null, fh: null, fx: 2.9, fuelType: 'hybrid',
    acceleration: 8.5, topSpeed: 180, weight: 2692, seats: 5, cargo: null,
    price: '~$71,990' });
  add('Ford', 'Ranger', yr, 'P703 PHEV Stormtrak', {
    engine: '2.3L I4 Turbo PHEV', displacement: 2261, cylinders: 4, aspiration: 'Turbo',
    drivetrain: '4WD', transmission: '10-speed auto', power: 207, torque: 697,
    fc: null, fh: null, fx: 2.9, fuelType: 'hybrid',
    acceleration: 8.5, topSpeed: 180, weight: 2735, seats: 5, cargo: null,
    price: '~$79,990' });
}

// ─── Mahindra depth (XUV 3XO light SUV, AU 2025) ─────────────────────────────
for (const yr of [2025, 2026]) {
  add('Mahindra', 'XUV 3XO', yr, 'AX5L', ice({
    engine: '1.2L I3 Turbo', disp: 1197, cyl: 3, dr: 'FWD', tx: '6-speed auto',
    kw: 82, nm: 200, city: 8.0, hwy: 5.5, comb: 6.5, z1: 11.5, top: 180,
    wt: 1250, cargo: 364, price: '~$23,990' }));
  add('Mahindra', 'XUV 3XO', yr, 'AX7L', ice({
    engine: '1.2L I3 Turbo', disp: 1197, cyl: 3, dr: 'FWD', tx: '6-speed auto',
    kw: 82, nm: 200, city: 8.0, hwy: 5.5, comb: 6.5, z1: 11.5, top: 180,
    wt: 1265, cargo: 364, price: '~$26,490' }));
}

const out = { specs };
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement240.json'), JSON.stringify(out, null, 2) + '\n');
console.log('wrote supplement240.json with', Object.keys(specs).length, 'entries');
