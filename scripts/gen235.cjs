'use strict';
// supplement235.json — world brands: Proton, Tata, Maybach, Hongqi
// Proton + Tata = AU-market history; Maybach = current ultra-luxury; Hongqi = emerging Chinese luxury
// Sources: australiancar.reviews / whichcar.com.au / carsales.com.au
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

function ice(o) {
  return {
    engine: o.engine, fuelType: o.fuelType || 'petrol', displacement: o.displacement,
    cylinders: o.cylinders, aspiration: o.aspiration || 'NA', ft: o.ft || 'Petrol',
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

// ─── PROTON (Malaysian; AU ~2000–2017) ───────────────────────────────────────
// Satria GTi — Lotus-tuned hot hatch (cult AU car)
for (const yr of [2000, 2001, 2002, 2003, 2004, 2005]) {
  add('Proton', 'Satria', yr, 'GTi', ice({
    engine: '1.8L I4 4G93 DOHC', displacement: 1834, cylinders: 4, transmission: '5-speed manual',
    drivetrain: 'FWD', power: 103, torque: 164, weight: 1080, seats: 5, cargo: 208,
    fc: 8.2, fh: 6.8, fx: 10.9, acc: 8.6, top: 200, price: '~$28,990' }));
  add('Proton', 'Satria', yr, 'GLi', ice({
    engine: '1.5L I4 4G15', displacement: 1468, cylinders: 4, transmission: '5-speed manual',
    drivetrain: 'FWD', power: 66, torque: 126, weight: 980, seats: 5, cargo: 208,
    fc: 7.0, fh: 5.9, fx: 9.2, acc: 11.5, top: 165, price: '~$16,990' }));
}
// Jumbuck — coupe-utility
for (const yr of [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]) {
  add('Proton', 'Jumbuck', yr, 'GLi', ice({
    engine: '1.5L I4 4G15', displacement: 1468, cylinders: 4, transmission: '5-speed manual',
    drivetrain: 'FWD', power: 65, torque: 120, weight: 985, seats: 2, cargo: 650,
    fc: 7.2, fh: 6.1, fx: 9.4, acc: 12.5, top: 160, price: '~$13,990' }));
}
// Gen-2 — small hatch
for (const yr of [2004, 2005, 2006, 2007, 2008, 2009, 2010]) {
  add('Proton', 'Gen-2', yr, 'GX', ice({
    engine: '1.6L I4 CamPro', displacement: 1597, cylinders: 4, transmission: '5-speed manual',
    drivetrain: 'FWD', power: 82, torque: 148, weight: 1185, seats: 5, cargo: 290,
    fc: 7.5, fh: 6.3, fx: 9.8, acc: 11.0, top: 185, price: '~$17,490' }));
}
// Persona — small sedan
for (const yr of [2008, 2009, 2010, 2011, 2012]) {
  add('Proton', 'Persona', yr, 'GX', ice({
    engine: '1.6L I4 CamPro', displacement: 1597, cylinders: 4, transmission: '4-speed auto',
    drivetrain: 'FWD', power: 82, torque: 148, weight: 1180, seats: 5, cargo: 430,
    fc: 7.8, fh: 6.6, fx: 10.2, acc: 11.5, top: 180, price: '~$16,990' }));
}
// Preve — turbo small sedan
for (const yr of [2012, 2013, 2014, 2015, 2016]) {
  add('Proton', 'Preve', yr, 'GXR', ice({
    engine: '1.6L I4 CFE Turbo', displacement: 1561, cylinders: 4, aspiration: 'Turbo',
    transmission: 'CVT', drivetrain: 'FWD', power: 103, torque: 205, weight: 1310, seats: 5,
    cargo: 508, fc: 6.6, fh: 5.6, fx: 8.6, acc: 9.8, top: 190, price: '~$19,990' }));
}
// Suprima S — turbo hatch
for (const yr of [2013, 2014, 2015, 2016]) {
  add('Proton', 'Suprima S', yr, 'GXR', ice({
    engine: '1.6L I4 CFE Turbo', displacement: 1561, cylinders: 4, aspiration: 'Turbo',
    transmission: 'CVT', drivetrain: 'FWD', power: 103, torque: 205, weight: 1340, seats: 5,
    cargo: 437, fc: 6.7, fh: 5.7, fx: 8.7, acc: 10.0, top: 190, price: '~$21,990' }));
}
// Exora — 7-seat MPV
for (const yr of [2011, 2012, 2013, 2014, 2015, 2016]) {
  add('Proton', 'Exora', yr, 'GXR', ice({
    engine: '1.6L I4 CFE Turbo', displacement: 1561, cylinders: 4, aspiration: 'Turbo',
    transmission: 'CVT', drivetrain: 'FWD', power: 103, torque: 205, weight: 1490, seats: 7,
    cargo: 270, fc: 7.6, fh: 6.4, fx: 9.9, acc: 11.5, top: 180, price: '~$23,990' }));
}

// ─── TATA (Indian; AU 2014–2016) ─────────────────────────────────────────────
for (const yr of [2014, 2015, 2016]) {
  add('Tata', 'Xenon', yr, 'Dual Cab', ice({
    engine: '2.2L I4 DICOR Turbo-Diesel', displacement: 2179, cylinders: 4, fuelType: 'diesel',
    ft: 'Diesel', aspiration: 'Turbo', transmission: '5-speed manual', drivetrain: '4WD',
    power: 110, torque: 320, weight: 1920, seats: 5, cargo: 1050, fc: 8.5, fh: 7.4, fx: 10.4,
    acc: 13.5, top: 160, price: '~$26,990' }));
}

// ─── MAYBACH (Mercedes-Maybach; current ultra-luxury) ────────────────────────
for (const yr of [2021, 2022, 2023, 2024, 2025, 2026]) {
  add('Maybach', 'S-Class', yr, 'S 580', ice({
    engine: '4.0L V8 BiTurbo', displacement: 3982, cylinders: 8, aspiration: 'Twin-Turbo',
    transmission: '9-speed auto', drivetrain: 'AWD', power: 370, torque: 700, weight: 2235, seats: 5,
    cargo: 550, fc: 11.0, fh: 9.2, fx: 14.0, acc: 4.9, top: 250, price: '~$380,000' }));
  add('Maybach', 'S-Class', yr, 'S 680', ice({
    engine: '6.0L V12 BiTurbo', displacement: 5980, cylinders: 12, aspiration: 'Twin-Turbo',
    transmission: '9-speed auto', drivetrain: 'AWD', power: 450, torque: 900, weight: 2330, seats: 5,
    cargo: 550, fc: 13.0, fh: 10.8, fx: 16.5, acc: 4.5, top: 250, price: '~$500,000' }));
}
for (const yr of [2021, 2022, 2023, 2024, 2025, 2026]) {
  add('Maybach', 'GLS', yr, 'GLS 600', ice({
    engine: '4.0L V8 BiTurbo + EQ Boost', displacement: 3982, cylinders: 8, aspiration: 'Twin-Turbo',
    transmission: '9-speed auto', drivetrain: 'AWD', power: 410, torque: 730, weight: 2785, seats: 5,
    cargo: 680, fc: 12.5, fh: 10.4, fx: 15.8, acc: 4.9, top: 250, price: '~$390,000' }));
}
for (const yr of [2024, 2025, 2026]) {
  add('Maybach', 'EQS SUV', yr, 'EQS 680', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 484, torque: 950,
    weight: 2890, seats: 5, cargo: 645, acc: 4.4, top: 210, price: '~$420,000' }));
}

// ─── HONGQI (Chinese luxury; emerging AU) ────────────────────────────────────
for (const yr of [2021, 2022, 2023, 2024, 2025, 2026]) {
  add('Hongqi', 'H9', yr, '3.0T', ice({
    engine: '3.0L V6 Supercharged', displacement: 2956, cylinders: 6, aspiration: 'Supercharged',
    transmission: '7-speed DCT', drivetrain: 'RWD', power: 210, torque: 400, weight: 1920, seats: 5,
    cargo: 510, fc: 9.5, fh: 8.0, fx: 12.0, acc: 7.4, top: 230, price: '~$85,000' }));
}
for (const yr of [2021, 2022, 2023, 2024, 2025, 2026]) {
  add('Hongqi', 'E-HS9', yr, 'Flagship', ev({
    engine: 'Dual Motor Electric', drivetrain: 'AWD', power: 405, torque: 770,
    weight: 2810, seats: 7, cargo: 320, acc: 5.0, top: 200, price: '~$120,000' }));
}
for (const yr of [2022, 2023, 2024, 2025, 2026]) {
  add('Hongqi', 'HS5', yr, 'Premium', ice({
    engine: '2.0L I4 Turbo', displacement: 1997, cylinders: 4, aspiration: 'Turbo',
    transmission: '7-speed DCT', drivetrain: 'AWD', power: 165, torque: 340, weight: 1820, seats: 5,
    cargo: 478, fc: 8.4, fh: 7.0, fx: 10.9, acc: 8.5, top: 200, price: '~$55,000' }));
}

// ─── Output ──────────────────────────────────────────────────────────────────
const out = { specs };
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement235.json'), JSON.stringify(out, null, 2));
console.log(`supplement235.json written — ${Object.keys(specs).length} entries`);
const byMake = {};
for (const k of Object.keys(specs)) { const mk = k.split('|')[0]; byMake[mk] = (byMake[mk] || 0) + 1; }
for (const [mk, cnt] of Object.entries(byMake).sort()) console.log(`  ${mk}: ${cnt}`);
