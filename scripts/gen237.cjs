'use strict';
// supplement237.json — depth pack: recent AU model launches missing from existing makes
// MG (QS, U9, S5 EV), GWM (Cannon Alpha), Kia (EV4), Chery (Tiggo 9), Mahindra (Pik-Up)
// Sources: australiancar.reviews / whichcar.com.au / carsales.com.au launch specs
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

// ─── MG (3 new models) ───────────────────────────────────────────────────────
// QS — 7-seat SUV
for (const yr of [2025, 2026]) {
  add('MG', 'MG QS', yr, 'Excite', ice({
    engine: '2.0L I4 Turbo', displacement: 1999, cylinders: 4, transmission: '9-speed DCT',
    drivetrain: 'FWD', power: 153, torque: 360, weight: 1820, seats: 7, cargo: 203,
    fc: 8.3, fh: 7.0, fx: 10.8, acc: 8.6, top: 200, price: '~$45,990' }));
  add('MG', 'MG QS', yr, 'Essence', ice({
    engine: '2.0L I4 Turbo', displacement: 1999, cylinders: 4, transmission: '9-speed DCT',
    drivetrain: 'AWD', power: 153, torque: 360, weight: 1925, seats: 7, cargo: 203,
    fc: 8.9, fh: 7.5, fx: 11.5, acc: 8.4, top: 200, price: '~$50,990' }));
}
// U9 — dual-cab diesel ute
for (const yr of [2025, 2026]) {
  add('MG', 'MG U9', yr, 'Explore', ice({
    engine: '2.5L I4 Turbo-Diesel', displacement: 2497, cylinders: 4, fuelType: 'diesel', ft: 'Diesel',
    transmission: '8-speed auto', drivetrain: '4WD', power: 164, torque: 520, weight: 2305,
    seats: 5, cargo: 1100, fc: 8.4, fh: 7.3, fx: 10.3, acc: 10.5, top: 175, price: '~$55,990' }));
}
// S5 EV — compact electric SUV
for (const yr of [2025, 2026]) {
  add('MG', 'MG S5 EV', yr, 'Standard Range', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 125, torque: 250,
    weight: 1685, seats: 5, cargo: 453, acc: 8.0, top: 170, price: '~$40,490' }));
  add('MG', 'MG S5 EV', yr, 'Long Range', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 150, torque: 250,
    weight: 1750, seats: 5, cargo: 453, acc: 6.8, top: 170, price: '~$46,990' }));
}

// ─── GWM (Cannon Alpha — flagship ute) ───────────────────────────────────────
for (const yr of [2024, 2025, 2026]) {
  add('GWM', 'Cannon Alpha', yr, 'Ultra Diesel', ice({
    engine: '2.4L I4 Turbo-Diesel', displacement: 2384, cylinders: 4, fuelType: 'diesel', ft: 'Diesel',
    transmission: '9-speed auto', drivetrain: '4WD', power: 135, torque: 480, weight: 2545,
    seats: 5, cargo: 1200, fc: 8.9, fh: 7.7, fx: 10.9, acc: 11.5, top: 175, price: '~$52,990' }));
  add('GWM', 'Cannon Alpha', yr, 'Ultra PHEV', ice({
    engine: '2.0L I4 Turbo PHEV', displacement: 1998, cylinders: 4, fuelType: 'plug-in hybrid',
    ft: 'PHEV (95 RON)', transmission: '9-speed DHT', drivetrain: '4WD', power: 300, torque: 750,
    weight: 2810, seats: 5, cargo: 1200, fc: 1.7, fh: 1.5, fx: 2.1, acc: 6.9, top: 180, price: '~$64,990' }));
}

// ─── Kia (EV4 — electric sedan) ──────────────────────────────────────────────
for (const yr of [2025, 2026]) {
  add('Kia', 'EV4', yr, 'Air', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 150, torque: 283,
    weight: 1765, seats: 5, cargo: 435, acc: 7.7, top: 170, price: '~$53,000' }));
  add('Kia', 'EV4', yr, 'GT-Line', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 150, torque: 283,
    weight: 1880, seats: 5, cargo: 435, acc: 7.4, top: 170, price: '~$60,000' }));
}

// ─── Chery (Tiggo 9 — large SUV) ─────────────────────────────────────────────
for (const yr of [2025, 2026]) {
  add('Chery', 'Tiggo 9', yr, '2.0T AWD', ice({
    engine: '2.0L I4 Turbo', displacement: 1998, cylinders: 4, transmission: '8-speed auto',
    drivetrain: 'AWD', power: 192, torque: 400, weight: 1920, seats: 5, cargo: 660,
    fc: 8.7, fh: 7.3, fx: 11.3, acc: 8.0, top: 200, price: '~$49,990' }));
  add('Chery', 'Tiggo 9', yr, 'Super Hybrid PHEV', ice({
    engine: '1.5L I4 Turbo PHEV', displacement: 1498, cylinders: 4, fuelType: 'plug-in hybrid',
    ft: 'PHEV (95 RON)', transmission: '3-speed DHT', drivetrain: 'AWD', power: 250, torque: 540,
    weight: 2150, seats: 5, cargo: 660, fc: 1.4, fh: 1.2, fx: 1.8, acc: 6.3, top: 200, price: '~$55,990' }));
}

// ─── Mahindra (Pik-Up — dual-cab diesel ute, AU 2007–2016) ───────────────────
for (const yr of [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]) {
  add('Mahindra', 'Pik-Up', yr, 'S Dual Cab', ice({
    engine: '2.2L I4 mHawk Turbo-Diesel', displacement: 2179, cylinders: 4, fuelType: 'diesel',
    ft: 'Diesel', transmission: '6-speed manual', drivetrain: '4WD', power: 103, torque: 320,
    weight: 1965, seats: 5, cargo: 1000, fc: 9.1, fh: 7.9, fx: 11.2, acc: 14.0, top: 155, price: '~$26,990' }));
}

// ─── Output ──────────────────────────────────────────────────────────────────
const out = { specs };
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement237.json'), JSON.stringify(out, null, 2));
console.log(`supplement237.json written — ${Object.keys(specs).length} entries`);
const byMake = {};
for (const k of Object.keys(specs)) { const mk = k.split('|')[0]; byMake[mk] = (byMake[mk] || 0) + 1; }
for (const [mk, cnt] of Object.entries(byMake).sort()) console.log(`  ${mk}: ${cnt}`);
