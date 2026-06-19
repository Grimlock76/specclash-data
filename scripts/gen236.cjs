'use strict';
// supplement236.json — next-wave Chinese brands entering Australia
// Jetour, Voyah, Avatr, Seres, IM Motors
// Sources: australiancar.reviews / whichcar.com.au / carsales.com.au launch coverage
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

function ice(o) {
  return {
    engine: o.engine, fuelType: o.fuelType || 'petrol', displacement: o.displacement,
    cylinders: o.cylinders, aspiration: o.aspiration || 'Turbo', ft: o.ft || 'Petrol',
    fc: o.fc, fh: o.fh, fx: o.fx, transmission: o.transmission, drivetrain: o.drivetrain,
    power: o.power, torque: o.torque, weight: o.weight, seats: o.seats, cargo: o.cargo,
    acceleration: o.acc, topSpeed: o.top, price: o.price
  };
}
function ev(o) {
  return {
    engine: o.engine, fuelType: 'electric', displacement: null, cylinders: null,
    aspiration: 'Electric', ft: 'Electric', fc: null, fh: null, fx: null,
    transmission: '1-speed', drivetrain: o.drivetrain, power: o.power, torque: o.torque,
    weight: o.weight, seats: o.seats, cargo: o.cargo, acceleration: o.acc, topSpeed: o.top, price: o.price
  };
}

// ─── JETOUR (Chery sub-brand; AU launch 2025) ────────────────────────────────
// Dashing — mid-size SUV
for (const yr of [2025, 2026]) {
  add('Jetour', 'Dashing', yr, 'Inspira', ice({
    engine: '1.5L I4 Turbo', displacement: 1498, cylinders: 4, transmission: '7-speed DCT',
    drivetrain: 'FWD', power: 115, torque: 230, weight: 1505, seats: 5, cargo: 500,
    fc: 7.0, fh: 6.0, fx: 8.7, acc: 9.5, top: 180, price: '~$32,990' }));
  add('Jetour', 'Dashing', yr, 'Vortex', ice({
    engine: '1.6L I4 Turbo', displacement: 1598, cylinders: 4, transmission: '7-speed DCT',
    drivetrain: 'AWD', power: 145, torque: 290, weight: 1620, seats: 5, cargo: 500,
    fc: 7.6, fh: 6.5, fx: 9.5, acc: 8.5, top: 195, price: '~$39,990' }));
}
// T2 — boxy off-road SUV
for (const yr of [2025, 2026]) {
  add('Jetour', 'T2', yr, 'Adventure', ice({
    engine: '2.0L I4 Turbo', displacement: 1997, cylinders: 4, transmission: '8-speed auto',
    drivetrain: '4WD', power: 187, torque: 390, weight: 1995, seats: 5, cargo: 590,
    fc: 9.2, fh: 7.8, fx: 11.5, acc: 8.8, top: 190, price: '~$45,990' }));
}

// ─── VOYAH (Dongfeng luxury; AU launch 2024) ─────────────────────────────────
// Free — mid-large SUV (EV + EREV range-extender)
for (const yr of [2024, 2025, 2026]) {
  add('Voyah', 'Free', yr, 'EV', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 360, torque: 720,
    weight: 2295, seats: 5, cargo: 560, acc: 4.7, top: 200, price: '~$77,000' }));
  add('Voyah', 'Free', yr, 'EREV', ice({
    engine: '1.5L I4 Range Extender', displacement: 1497, cylinders: 4, fuelType: 'plug-in hybrid',
    ft: 'PHEV (95 RON)', aspiration: 'Turbo', transmission: '1-speed', drivetrain: 'AWD',
    power: 380, torque: 720, weight: 2435, seats: 5, cargo: 560, fc: 1.2, fh: 1.1, fx: 1.5,
    acc: 5.0, top: 200, price: '~$72,000' }));
}
// Courage — mid SUV (EV)
for (const yr of [2025, 2026]) {
  add('Voyah', 'Courage', yr, 'AWD', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 320, torque: 620,
    weight: 2180, seats: 5, cargo: 520, acc: 5.6, top: 190, price: '~$60,000' }));
}
// Dreamer — luxury MPV (EREV)
for (const yr of [2025, 2026]) {
  add('Voyah', 'Dreamer', yr, 'EREV', ice({
    engine: '1.5L I4 Range Extender', displacement: 1497, cylinders: 4, fuelType: 'plug-in hybrid',
    ft: 'PHEV (95 RON)', aspiration: 'Turbo', transmission: '1-speed', drivetrain: 'RWD',
    power: 175, torque: 320, weight: 2570, seats: 7, cargo: 480, fc: 1.3, fh: 1.2, fx: 1.6,
    acc: 7.8, top: 180, price: '~$80,000' }));
}

// ─── AVATR (Changan/Huawei/CATL; AU launch 2025) ─────────────────────────────
for (const yr of [2025, 2026]) {
  add('Avatr', '11', yr, 'Dual Motor', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 425, torque: 650,
    weight: 2420, seats: 5, cargo: 560, acc: 4.0, top: 200, price: '~$80,000' }));
  add('Avatr', '12', yr, 'Dual Motor', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 425, torque: 650,
    weight: 2330, seats: 5, cargo: 420, acc: 3.9, top: 200, price: '~$85,000' }));
}

// ─── SERES (formerly DFSK; AU 2022–2023) ─────────────────────────────────────
for (const yr of [2022, 2023]) {
  add('Seres', 'Seres 3', yr, 'Luxury', ev({
    engine: 'Single Motor Electric', drivetrain: 'FWD', power: 120, torque: 300,
    weight: 1620, seats: 5, cargo: 466, acc: 8.9, top: 155, price: '~$45,900' }));
}

// ─── IM MOTORS (SAIC/MG premium EV; AU launch 2025) ──────────────────────────
// IM5 — EV sedan
for (const yr of [2025, 2026]) {
  add('IM Motors', 'IM5', yr, 'RWD', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 220, torque: 450,
    weight: 2150, seats: 5, cargo: 457, acc: 6.4, top: 200, price: '~$60,000' }));
  add('IM Motors', 'IM5', yr, 'Performance', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 578, torque: 802,
    weight: 2295, seats: 5, cargo: 457, acc: 3.2, top: 200, price: '~$85,000' }));
}
// IM6 — EV SUV
for (const yr of [2025, 2026]) {
  add('IM Motors', 'IM6', yr, 'RWD', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 235, torque: 450,
    weight: 2280, seats: 5, cargo: 525, acc: 6.5, top: 200, price: '~$65,000' }));
  add('IM Motors', 'IM6', yr, 'Performance', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 572, torque: 802,
    weight: 2420, seats: 5, cargo: 525, acc: 3.5, top: 200, price: '~$90,000' }));
}

// ─── Output ──────────────────────────────────────────────────────────────────
const out = { specs };
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement236.json'), JSON.stringify(out, null, 2));
console.log(`supplement236.json written — ${Object.keys(specs).length} entries`);
const byMake = {};
for (const k of Object.keys(specs)) { const mk = k.split('|')[0]; byMake[mk] = (byMake[mk] || 0) + 1; }
for (const [mk, cnt] of Object.entries(byMake).sort()) console.log(`  ${mk}: ${cnt}`);
