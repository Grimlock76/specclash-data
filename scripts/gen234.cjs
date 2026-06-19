'use strict';
// supplement234.json — 4x4/ute newcomers + Citroen
// Ineos Grenadier, JAC T9, Foton Tunland, Citroen
// Sources: australiancar.reviews / whichcar.com.au / carsales.com.au launch specs
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ICE spec helper (petrol/diesel/PHEV)
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

// ─── INEOS (British 4x4; AU launch 2023) ─────────────────────────────────────
// Grenadier — BMW-engined ladder-frame 4x4 wagon
for (const yr of [2023, 2024, 2025, 2026]) {
  for (const [trim, price] of [['Trialmaster', '~$114,500'], ['Fieldmaster', '~$114,500']]) {
    add('INEOS', 'Grenadier', yr, `${trim} Petrol`, ice({
      engine: '3.0L I6 Turbo (BMW B58)', displacement: 2998, cylinders: 6,
      transmission: '8-speed ZF auto', drivetrain: '4WD', power: 210, torque: 450,
      weight: 2669, seats: 5, cargo: 1152, fc: 11.5, fh: 9.8, fx: 14.5, acc: 8.6, top: 160, price }));
    add('INEOS', 'Grenadier', yr, `${trim} Diesel`, ice({
      engine: '3.0L I6 Turbo-Diesel (BMW B57)', displacement: 2993, cylinders: 6,
      fuelType: 'diesel', ft: 'Diesel', transmission: '8-speed ZF auto', drivetrain: '4WD',
      power: 183, torque: 550, weight: 2718, seats: 5, cargo: 1152, fc: 9.5, fh: 8.2, fx: 11.7,
      acc: 9.9, top: 160, price }));
  }
}
// Quartermaster — dual-cab ute
for (const yr of [2024, 2025, 2026]) {
  add('INEOS', 'Quartermaster', yr, 'Trialmaster Petrol', ice({
    engine: '3.0L I6 Turbo (BMW B58)', displacement: 2998, cylinders: 6,
    transmission: '8-speed ZF auto', drivetrain: '4WD', power: 210, torque: 450,
    weight: 2738, seats: 5, cargo: 1075, fc: 12.0, fh: 10.2, fx: 15.1, acc: 8.8, top: 160, price: '~$116,500' }));
  add('INEOS', 'Quartermaster', yr, 'Fieldmaster Diesel', ice({
    engine: '3.0L I6 Turbo-Diesel (BMW B57)', displacement: 2993, cylinders: 6,
    fuelType: 'diesel', ft: 'Diesel', transmission: '8-speed ZF auto', drivetrain: '4WD',
    power: 183, torque: 550, weight: 2787, seats: 5, cargo: 1075, fc: 9.9, fh: 8.5, fx: 12.2,
    acc: 10.1, top: 160, price: '~$116,500' }));
}

// ─── JAC (Chinese; AU ute launch 2024) ───────────────────────────────────────
// T9 — dual-cab diesel ute
for (const yr of [2024, 2025, 2026]) {
  add('JAC', 'T9', yr, 'Oasis', ice({
    engine: '2.0L I4 Turbo-Diesel', displacement: 1999, cylinders: 4, fuelType: 'diesel', ft: 'Diesel',
    transmission: '8-speed ZF auto', drivetrain: '4WD', power: 125, torque: 410, weight: 2280,
    seats: 5, cargo: 1075, fc: 7.6, fh: 6.7, fx: 9.2, acc: 12.0, top: 170, price: '~$42,662' }));
  add('JAC', 'T9', yr, 'Haven', ice({
    engine: '2.0L I4 Turbo-Diesel', displacement: 1999, cylinders: 4, fuelType: 'diesel', ft: 'Diesel',
    transmission: '8-speed ZF auto', drivetrain: '4WD', power: 125, torque: 410, weight: 2310,
    seats: 5, cargo: 1075, fc: 7.6, fh: 6.7, fx: 9.2, acc: 12.0, top: 170, price: '~$45,630' }));
}

// ─── FOTON (Chinese; AU ute launch 2024) ─────────────────────────────────────
// Tunland V7 / V9 — dual-cab diesel utes
for (const yr of [2024, 2025, 2026]) {
  add('Foton', 'Tunland V7', yr, 'Lux', ice({
    engine: '2.0L I4 Bi-Turbo-Diesel', displacement: 1996, cylinders: 4, fuelType: 'diesel', ft: 'Diesel',
    aspiration: 'Bi-Turbo', transmission: '8-speed ZF auto', drivetrain: '4WD', power: 120, torque: 450,
    weight: 2185, seats: 5, cargo: 1080, fc: 7.9, fh: 6.9, fx: 9.6, acc: 12.5, top: 170, price: '~$44,990' }));
}
for (const yr of [2025, 2026]) {
  add('Foton', 'Tunland V9', yr, 'Lux', ice({
    engine: '2.0L I4 Bi-Turbo-Diesel', displacement: 1996, cylinders: 4, fuelType: 'diesel', ft: 'Diesel',
    aspiration: 'Bi-Turbo', transmission: '8-speed ZF auto', drivetrain: '4WD', power: 120, torque: 450,
    weight: 2340, seats: 5, cargo: 1100, fc: 8.2, fh: 7.1, fx: 9.9, acc: 12.8, top: 170, price: '~$50,990' }));
}

// ─── CITROEN (French; long AU history, range withdrawn 2024) ─────────────────
// C3 — light hatch
for (const yr of [2018, 2019, 2020, 2021, 2022]) {
  add('Citroën', 'C3', yr, 'Shine', ice({
    engine: '1.2L I3 PureTech Turbo', displacement: 1199, cylinders: 3, transmission: '6-speed auto',
    drivetrain: 'FWD', power: 81, torque: 205, weight: 1090, seats: 5, cargo: 300,
    fc: 5.3, fh: 4.6, fx: 6.6, acc: 9.3, top: 187, price: '~$23,990' }));
}
// C4 — small hatch (petrol + e-C4 EV)
for (const yr of [2022, 2023]) {
  add('Citroën', 'C4', yr, 'Shine', ice({
    engine: '1.2L I3 PureTech Turbo', displacement: 1199, cylinders: 3, transmission: '8-speed auto',
    drivetrain: 'FWD', power: 114, torque: 240, weight: 1296, seats: 5, cargo: 380,
    fc: 5.9, fh: 5.1, fx: 7.3, acc: 8.8, top: 207, price: '~$34,990' }));
  add('Citroën', 'e-C4', yr, 'Shine', ev({
    engine: 'Single Motor Electric', drivetrain: 'FWD', power: 100, torque: 260,
    weight: 1616, seats: 5, cargo: 380, acc: 9.0, top: 150, price: '~$54,990' }));
}
// C5 Aircross — mid SUV (petrol + PHEV)
for (const yr of [2019, 2020, 2021, 2022, 2023]) {
  add('Citroën', 'C5 Aircross', yr, 'Shine', ice({
    engine: '1.6L I4 PureTech Turbo', displacement: 1598, cylinders: 4, transmission: '8-speed auto',
    drivetrain: 'FWD', power: 121, torque: 240, weight: 1520, seats: 5, cargo: 580,
    fc: 7.0, fh: 6.0, fx: 8.7, acc: 9.6, top: 200, price: '~$45,990' }));
}
for (const yr of [2022, 2023]) {
  add('Citroën', 'C5 Aircross', yr, 'Plug-in Hybrid', ice({
    engine: '1.6L I4 PureTech PHEV', displacement: 1598, cylinders: 4, fuelType: 'plug-in hybrid',
    ft: 'PHEV (95 RON)', transmission: '8-speed auto', drivetrain: 'FWD', power: 165, torque: 360,
    weight: 1780, seats: 5, cargo: 460, fc: 1.6, fh: 1.4, fx: 2.0, acc: 8.7, top: 225, price: '~$59,990' }));
}
// C5 X — large hatch/wagon crossover (petrol + PHEV)
for (const yr of [2022, 2023]) {
  add('Citroën', 'C5 X', yr, 'Shine', ice({
    engine: '1.6L I4 PureTech Turbo', displacement: 1598, cylinders: 4, transmission: '8-speed auto',
    drivetrain: 'FWD', power: 133, torque: 250, weight: 1545, seats: 5, cargo: 545,
    fc: 6.9, fh: 5.9, fx: 8.6, acc: 8.8, top: 211, price: '~$53,990' }));
  add('Citroën', 'C5 X', yr, 'Plug-in Hybrid', ice({
    engine: '1.6L I4 PureTech PHEV', displacement: 1598, cylinders: 4, fuelType: 'plug-in hybrid',
    ft: 'PHEV (95 RON)', transmission: '8-speed auto', drivetrain: 'FWD', power: 165, torque: 360,
    weight: 1755, seats: 5, cargo: 485, fc: 1.5, fh: 1.3, fx: 1.9, acc: 7.8, top: 233, price: '~$62,990' }));
}
// Berlingo — compact people-mover/van
for (const yr of [2019, 2020, 2021, 2022, 2023]) {
  add('Citroën', 'Berlingo', yr, 'Shine', ice({
    engine: '1.2L I3 PureTech Turbo', displacement: 1199, cylinders: 3, transmission: '8-speed auto',
    drivetrain: 'FWD', power: 81, torque: 205, weight: 1438, seats: 5, cargo: 775,
    fc: 6.2, fh: 5.4, fx: 7.6, acc: 11.0, top: 183, price: '~$32,990' }));
}

// ─── Output ──────────────────────────────────────────────────────────────────
const out = { specs };
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement234.json'), JSON.stringify(out, null, 2));
console.log(`supplement234.json written — ${Object.keys(specs).length} entries`);
const byMake = {};
for (const k of Object.keys(specs)) { const mk = k.split('|')[0]; byMake[mk] = (byMake[mk] || 0) + 1; }
for (const [mk, cnt] of Object.entries(byMake).sort()) console.log(`  ${mk}: ${cnt}`);
