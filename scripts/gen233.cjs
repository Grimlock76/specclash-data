'use strict';
// supplement233.json — new-to-Australia brands: Cupra, Xpeng, Deepal, Skywell, Aiways
// Sources: australiancar.reviews / whichcar.com.au / carsales.com.au launch specs
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// EV spec helper — fills the electric-drivetrain field conventions used across the dataset
function ev(o) {
  return {
    engine: o.engine, fuelType: 'electric', displacement: null, cylinders: null,
    aspiration: 'Electric', ft: 'Electric', fc: null, fh: null, fx: null,
    transmission: '1-speed', drivetrain: o.drivetrain,
    power: o.power, torque: o.torque, weight: o.weight, seats: o.seats, cargo: o.cargo,
    acceleration: o.acc, topSpeed: o.top, price: o.price
  };
}
// ICE/PHEV spec helper
function ice(o) {
  return {
    engine: o.engine, fuelType: o.fuelType || 'petrol', displacement: o.displacement,
    cylinders: o.cylinders, aspiration: o.aspiration || 'Turbo', ft: o.ft || 'Petrol',
    fc: o.fc, fh: o.fh, fx: o.fx, transmission: o.transmission, drivetrain: o.drivetrain,
    power: o.power, torque: o.torque, weight: o.weight, seats: o.seats, cargo: o.cargo,
    acceleration: o.acc, topSpeed: o.top, price: o.price
  };
}

// ─── CUPRA (Spanish SEAT performance brand; AU launch 2022) ──────────────────
// Born — EV hatch
for (const yr of [2022, 2023, 2024]) {
  add('Cupra', 'Born', yr, 'V', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 150, torque: 310,
    weight: 1712, seats: 5, cargo: 385, acc: 7.3, top: 160, price: '~$59,990' }));
}
for (const yr of [2024, 2025, 2026]) {
  add('Cupra', 'Born', yr, 'VZ', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 240, torque: 545,
    weight: 1862, seats: 5, cargo: 385, acc: 5.6, top: 200, price: '~$64,990' }));
}
// Formentor — SUV coupe
for (const yr of [2022, 2023, 2024]) {
  add('Cupra', 'Formentor', yr, 'V', ice({
    engine: '1.5L I4 TSI', displacement: 1498, cylinders: 4, transmission: '7-speed DSG',
    drivetrain: 'FWD', power: 110, torque: 250, weight: 1480, seats: 5, cargo: 420,
    fc: 6.4, fh: 5.4, fx: 8.1, acc: 9.0, top: 204, price: '~$42,990' }));
  add('Cupra', 'Formentor', yr, 'VZ', ice({
    engine: '2.0L I4 TSI', displacement: 1984, cylinders: 4, transmission: '7-speed DSG',
    drivetrain: 'AWD', power: 228, torque: 400, weight: 1620, seats: 5, cargo: 420,
    fc: 8.0, fh: 6.6, fx: 10.6, acc: 4.9, top: 250, price: '~$57,990' }));
  add('Cupra', 'Formentor', yr, 'VZx', ice({
    engine: '1.4L I4 TSI PHEV', displacement: 1395, cylinders: 4, fuelType: 'plug-in hybrid',
    ft: 'PHEV (95 RON)', transmission: '6-speed DSG', drivetrain: 'FWD', power: 180, torque: 400,
    weight: 1715, seats: 5, cargo: 345, fc: 1.6, fh: 1.4, fx: 2.0, acc: 7.0, top: 210, price: '~$62,990' }));
}
for (const yr of [2025, 2026]) {
  add('Cupra', 'Formentor', yr, 'VZ', ice({
    engine: '2.0L I4 TSI', displacement: 1984, cylinders: 4, transmission: '7-speed DSG',
    drivetrain: 'AWD', power: 245, torque: 420, weight: 1645, seats: 5, cargo: 420,
    fc: 8.2, fh: 6.8, fx: 10.9, acc: 4.7, top: 250, price: '~$60,990' }));
}
// Leon — hot hatch
for (const yr of [2022, 2023, 2024]) {
  add('Cupra', 'Leon', yr, 'VZ', ice({
    engine: '2.0L I4 TSI', displacement: 1984, cylinders: 4, transmission: '7-speed DSG',
    drivetrain: 'FWD', power: 221, torque: 400, weight: 1452, seats: 5, cargo: 380,
    fc: 7.0, fh: 5.8, fx: 9.2, acc: 5.7, top: 250, price: '~$54,990' }));
}
// Ateca — performance SUV
for (const yr of [2022, 2023, 2024]) {
  add('Cupra', 'Ateca', yr, 'VZ', ice({
    engine: '2.0L I4 TSI', displacement: 1984, cylinders: 4, transmission: '7-speed DSG',
    drivetrain: 'AWD', power: 221, torque: 400, weight: 1615, seats: 5, cargo: 485,
    fc: 8.3, fh: 6.9, fx: 11.0, acc: 5.2, top: 247, price: '~$56,990' }));
}
// Tavascan — EV SUV coupe
for (const yr of [2025, 2026]) {
  add('Cupra', 'Tavascan', yr, 'Endurance', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 210, torque: 545,
    weight: 2200, seats: 5, cargo: 540, acc: 6.8, top: 180, price: '~$60,990' }));
  add('Cupra', 'Tavascan', yr, 'VZ', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 250, torque: 679,
    weight: 2330, seats: 5, cargo: 540, acc: 5.5, top: 180, price: '~$74,990' }));
}
// Terramar — PHEV SUV
for (const yr of [2025, 2026]) {
  add('Cupra', 'Terramar', yr, 'VZ', ice({
    engine: '1.5L I4 TSI eHybrid', displacement: 1498, cylinders: 4, fuelType: 'plug-in hybrid',
    ft: 'PHEV (95 RON)', transmission: '6-speed DSG', drivetrain: 'FWD', power: 200, torque: 400,
    weight: 1800, seats: 5, cargo: 400, fc: 1.0, fh: 0.9, fx: 1.3, acc: 7.3, top: 200, price: '~$60,000' }));
}

// ─── XPENG (Chinese EV; AU launch 2024) ──────────────────────────────────────
// G6 — mid-size EV SUV
for (const yr of [2024, 2025, 2026]) {
  add('Xpeng', 'G6', yr, 'Standard Range', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 190, torque: 440,
    weight: 1955, seats: 5, cargo: 571, acc: 6.9, top: 200, price: '~$54,800' }));
  add('Xpeng', 'G6', yr, 'Long Range', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 210, torque: 440,
    weight: 2020, seats: 5, cargo: 571, acc: 6.6, top: 200, price: '~$59,800' }));
  add('Xpeng', 'G6', yr, 'Performance', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 358, torque: 660,
    weight: 2125, seats: 5, cargo: 571, acc: 4.1, top: 200, price: '~$64,800' }));
}
// G9 — large EV SUV
for (const yr of [2025, 2026]) {
  add('Xpeng', 'G9', yr, 'Long Range', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 230, torque: 430,
    weight: 2200, seats: 5, cargo: 660, acc: 6.4, top: 200, price: '~$76,800' }));
  add('Xpeng', 'G9', yr, 'Performance', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 405, torque: 717,
    weight: 2360, seats: 5, cargo: 660, acc: 3.9, top: 200, price: '~$86,800' }));
}
// X9 — large EV MPV
for (const yr of [2025, 2026]) {
  add('Xpeng', 'X9', yr, 'Long Range', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 235, torque: 450,
    weight: 2545, seats: 7, cargo: 510, acc: 7.7, top: 200, price: '~$90,000' }));
  add('Xpeng', 'X9', yr, 'Performance', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 370, torque: 717,
    weight: 2700, seats: 7, cargo: 510, acc: 5.7, top: 200, price: '~$100,000' }));
}

// ─── DEEPAL (Changan EV/EREV brand; AU launch 2025) ──────────────────────────
// S07 — mid-size SUV (EV + range-extender EREV)
for (const yr of [2025, 2026]) {
  add('Deepal', 'S07', yr, 'EV', ev({
    engine: 'Single Motor Electric', drivetrain: 'RWD', power: 160, torque: 320,
    weight: 2025, seats: 5, cargo: 445, acc: 6.7, top: 170, price: '~$53,900' }));
  add('Deepal', 'S07', yr, 'EREV', ice({
    engine: '1.5L I4 Range Extender', displacement: 1498, cylinders: 4, fuelType: 'plug-in hybrid',
    ft: 'PHEV (95 RON)', aspiration: 'NA', transmission: '1-speed', drivetrain: 'RWD',
    power: 175, torque: 320, weight: 2095, seats: 5, cargo: 445, fc: 1.1, fh: 1.0, fx: 1.4,
    acc: 7.5, top: 170, price: '~$56,900' }));
}
// E07 — EV/EREV "transformer" SUV-ute
for (const yr of [2025, 2026]) {
  add('Deepal', 'E07', yr, 'EV AWD', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 440, torque: 645,
    weight: 2670, seats: 5, cargo: 520, acc: 4.5, top: 200, price: '~$69,900' }));
}

// ─── SKYWELL (Chinese EV; AU launch 2023) ────────────────────────────────────
for (const yr of [2023, 2024, 2025]) {
  add('Skywell', 'BE11', yr, 'Standard', ev({
    engine: 'Single Motor Electric', drivetrain: 'FWD', power: 150, torque: 320,
    weight: 1900, seats: 5, cargo: 467, acc: 9.6, top: 150, price: '~$46,900' }));
  add('Skywell', 'BE11', yr, 'Premium', ev({
    engine: 'Single Motor Electric', drivetrain: 'FWD', power: 150, torque: 320,
    weight: 1930, seats: 5, cargo: 467, acc: 9.6, top: 150, price: '~$52,900' }));
}

// ─── AIWAYS (Chinese EV; AU 2022–2023, since withdrawn) ──────────────────────
for (const yr of [2022, 2023]) {
  add('Aiways', 'U5', yr, 'Standard', ev({
    engine: 'Single Motor Electric', drivetrain: 'FWD', power: 150, torque: 310,
    weight: 1720, seats: 5, cargo: 432, acc: 7.5, top: 150, price: '~$46,990' }));
}
add('Aiways', 'U6', 2023, 'Coupe', ev({
  engine: 'Single Motor Electric', drivetrain: 'FWD', power: 160, torque: 315,
  weight: 1790, seats: 5, cargo: 472, acc: 6.9, top: 160, price: '~$50,990' }));

// ─── Output ──────────────────────────────────────────────────────────────────
const out = { specs };
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement233.json'), JSON.stringify(out, null, 2));
console.log(`supplement233.json written — ${Object.keys(specs).length} entries`);
const byMake = {};
for (const k of Object.keys(specs)) { const mk = k.split('|')[0]; byMake[mk] = (byMake[mk] || 0) + 1; }
for (const [mk, cnt] of Object.entries(byMake).sort()) console.log(`  ${mk}: ${cnt}`);
