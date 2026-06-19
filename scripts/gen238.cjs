'use strict';
// supplement238.json — depth pack: notable AU-market models missing from existing makes
// Honda (City, Insight, CR-Z, MDX, Concerto), Renault (Captur, Trafic),
// Volvo (C30, S40), BMW (i8), Jeep (Patriot)
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

// ─── HONDA (range expansion) ─────────────────────────────────────────────────
// City — light sedan
for (const yr of [2009, 2010, 2011, 2012, 2013, 2014]) {
  add('Honda', 'City', yr, 'VTi-L', ice({
    engine: '1.5L I4 i-VTEC', displacement: 1497, cylinders: 4, transmission: '5-speed auto',
    drivetrain: 'FWD', power: 88, torque: 145, weight: 1110, seats: 5, cargo: 506,
    fc: 6.6, fh: 5.6, fx: 8.6, acc: 11.0, top: 180, price: '~$19,990' }));
}
// Insight — hybrid liftback
for (const yr of [2010, 2011, 2012, 2013, 2014]) {
  add('Honda', 'Insight', yr, 'Hybrid', ice({
    engine: '1.3L I4 IMA Hybrid', displacement: 1339, cylinders: 4, fuelType: 'hybrid', ft: 'Hybrid',
    transmission: 'CVT', drivetrain: 'FWD', power: 72, torque: 167, weight: 1198, seats: 5,
    cargo: 408, fc: 4.6, fh: 4.0, fx: 5.6, acc: 12.5, top: 182, price: '~$29,990' }));
}
// CR-Z — hybrid sport coupe
for (const yr of [2011, 2012, 2013, 2014, 2015, 2016]) {
  add('Honda', 'CR-Z', yr, 'Sport', ice({
    engine: '1.5L I4 IMA Hybrid', displacement: 1497, cylinders: 4, fuelType: 'hybrid', ft: 'Hybrid',
    transmission: '6-speed manual', drivetrain: 'FWD', power: 91, torque: 174, weight: 1198, seats: 4,
    cargo: 225, fc: 5.0, fh: 4.3, fx: 6.2, acc: 9.0, top: 200, price: '~$34,990' }));
}
// MDX — 7-seat SUV
for (const yr of [2003, 2004, 2005, 2006]) {
  add('Honda', 'MDX', yr, 'Luxury', ice({
    engine: '3.5L V6 SOHC VTEC', displacement: 3471, cylinders: 6, transmission: '5-speed auto',
    drivetrain: 'AWD', power: 195, torque: 353, weight: 2010, seats: 7, cargo: 425,
    fc: 12.8, fh: 10.6, fx: 16.2, acc: 8.5, top: 200, price: '~$59,990' }));
}
// Concerto — small sedan/hatch
for (const yr of [1991, 1992, 1993]) {
  add('Honda', 'Concerto', yr, 'JX', ice({
    engine: '1.6L I4 SOHC', displacement: 1590, cylinders: 4, transmission: '5-speed manual',
    drivetrain: 'FWD', power: 88, torque: 137, weight: 1080, seats: 5, cargo: 380,
    fc: 7.8, fh: 6.6, fx: 10.2, acc: 10.5, top: 185, price: '~$24,990' }));
}

// ─── RENAULT ─────────────────────────────────────────────────────────────────
// Captur — light SUV
for (const yr of [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]) {
  add('Renault', 'Captur', yr, 'Intens', ice({
    engine: '1.3L I4 Turbo', displacement: 1333, cylinders: 4, aspiration: 'Turbo',
    transmission: '7-speed DCT', drivetrain: 'FWD', power: 113, torque: 270, weight: 1320, seats: 5,
    cargo: 422, fc: 6.6, fh: 5.6, fx: 8.6, acc: 9.6, top: 192, price: '~$33,990' }));
}
// Trafic — mid-size van
for (const yr of [2015, 2017, 2019, 2021, 2023]) {
  add('Renault', 'Trafic', yr, 'Pro', ice({
    engine: '2.0L I4 Turbo-Diesel', displacement: 1995, cylinders: 4, fuelType: 'diesel', ft: 'Diesel',
    aspiration: 'Turbo', transmission: '6-speed manual', drivetrain: 'FWD', power: 125, torque: 380,
    weight: 1860, seats: 3, cargo: 8600, fc: 7.3, fh: 6.4, fx: 8.9, acc: 11.5, top: 175, price: '~$44,990' }));
}

// ─── VOLVO ───────────────────────────────────────────────────────────────────
// C30 — sport hatch
for (const yr of [2007, 2008, 2009, 2010, 2011, 2012, 2013]) {
  add('Volvo', 'C30', yr, 'T5', ice({
    engine: '2.5L I5 Turbo', displacement: 2521, cylinders: 5, aspiration: 'Turbo',
    transmission: '5-speed auto', drivetrain: 'FWD', power: 169, torque: 320, weight: 1417, seats: 4,
    cargo: 251, fc: 8.6, fh: 7.2, fx: 11.2, acc: 6.7, top: 240, price: '~$44,950' }));
}
// S40 — compact sedan
for (const yr of [2004, 2006, 2008, 2010, 2012]) {
  add('Volvo', 'S40', yr, 'T5', ice({
    engine: '2.5L I5 Turbo', displacement: 2521, cylinders: 5, aspiration: 'Turbo',
    transmission: '5-speed auto', drivetrain: 'FWD', power: 169, torque: 320, weight: 1430, seats: 5,
    cargo: 404, fc: 9.0, fh: 7.5, fx: 11.7, acc: 6.8, top: 240, price: '~$49,950' }));
}

// ─── BMW i8 — plug-in hybrid sports car ──────────────────────────────────────
for (const yr of [2014, 2015, 2016, 2017, 2018, 2019, 2020]) {
  add('BMW', 'i8', yr, 'Coupe', ice({
    engine: '1.5L I3 Turbo + Electric', displacement: 1499, cylinders: 3, fuelType: 'plug-in hybrid',
    ft: 'PHEV (98 RON)', aspiration: 'Turbo', transmission: '6-speed auto', drivetrain: 'AWD',
    power: 274, torque: 570, weight: 1485, seats: 4, cargo: 154, fc: 2.1, fh: 1.9, fx: 2.6,
    acc: 4.4, top: 250, price: '~$299,000' }));
}
for (const yr of [2018, 2019, 2020]) {
  add('BMW', 'i8', yr, 'Roadster', ice({
    engine: '1.5L I3 Turbo + Electric', displacement: 1499, cylinders: 3, fuelType: 'plug-in hybrid',
    ft: 'PHEV (98 RON)', aspiration: 'Turbo', transmission: '6-speed auto', drivetrain: 'AWD',
    power: 275, torque: 570, weight: 1595, seats: 2, cargo: 88, fc: 2.1, fh: 1.9, fx: 2.6,
    acc: 4.6, top: 250, price: '~$348,900' }));
}

// ─── JEEP Patriot — compact SUV ──────────────────────────────────────────────
for (const yr of [2007, 2009, 2011, 2013, 2015, 2016]) {
  add('Jeep', 'Patriot', yr, 'Limited', ice({
    engine: '2.4L I4 DOHC', displacement: 2360, cylinders: 4, transmission: 'CVT',
    drivetrain: '4WD', power: 125, torque: 220, weight: 1490, seats: 5, cargo: 642,
    fc: 9.1, fh: 7.7, fx: 11.5, acc: 10.5, top: 185, price: '~$29,990' }));
}

// ─── Output ──────────────────────────────────────────────────────────────────
const out = { specs };
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'supplement238.json'), JSON.stringify(out, null, 2));
console.log(`supplement238.json written — ${Object.keys(specs).length} entries`);
const byMake = {};
for (const k of Object.keys(specs)) { const mk = k.split('|')[0]; byMake[mk] = (byMake[mk] || 0) + 1; }
for (const [mk, cnt] of Object.entries(byMake).sort()) console.log(`  ${mk}: ${cnt}`);
