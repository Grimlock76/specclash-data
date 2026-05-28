'use strict';
// supplement219.json — Haval (Australia)
const fs = require('fs'), path = require('path');

const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── H2 Gen 1 (2015–2017) ──────────────────────────────────────────────────
const h2g1 = { engine:'4G15B 1.5T I4', fuelType:'petrol', displacement:1497, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'CVT', drivetrain:'FWD',
  power:110, torque:202, weight:1450, seats:5, cargo:354,
  fc:9.5, fh:6.5, fx:7.7, ft:'Petrol' };
for (const yr of [2015,2016,2017]) {
  add('Haval','H2',yr,'H2',       {...h2g1, acceleration:10.5, topSpeed:180, price:'~$22,990'});
  add('Haval','H2',yr,'Lux',      {...h2g1, acceleration:10.5, topSpeed:180, price:'~$25,990'});
}
// H2 Lux AWD 2017–2019 (6AT + AWD)
const h2awd = { engine:'4G15B 1.5T I4', fuelType:'petrol', displacement:1497, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'6-speed auto', drivetrain:'AWD',
  power:110, torque:202, weight:1520, seats:5, cargo:354,
  fc:10.2, fh:7.2, fx:8.5, ft:'Petrol', acceleration:11.5, topSpeed:175 };
for (const yr of [2017,2018,2019]) {
  add('Haval','H2',yr,'Lux AWD',  {...h2awd, price:'~$28,990'});
}
// H2 2018–2021 refresh
const h2ref = { engine:'4G15B 1.5T I4', fuelType:'petrol', displacement:1497, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'CVT', drivetrain:'FWD',
  power:110, torque:202, weight:1460, seats:5, cargo:354,
  fc:9.5, fh:6.5, fx:7.7, ft:'Petrol', acceleration:10.5, topSpeed:180 };
for (const yr of [2018,2019,2020,2021]) {
  add('Haval','H2',yr,'H2',   {...h2ref, price:'~$22,990'});
  add('Haval','H2',yr,'Lux',  {...h2ref, price:'~$26,990'});
}

// ── H6 Gen 1 (2015–2017) ─────────────────────────────────────────────────
const h6g1 = { engine:'4B20 2.0T I4', fuelType:'petrol', displacement:1999, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'6-speed DCT', drivetrain:'FWD',
  power:150, torque:320, weight:1656, seats:5, cargo:390,
  fc:10.5, fh:7.5, fx:8.8, ft:'Petrol', acceleration:9.0, topSpeed:190 };
for (const yr of [2015,2016,2017]) {
  add('Haval','H6',yr,'Lux',     {...h6g1, price:'~$27,990'});
  add('Haval','H6',yr,'Premium', {...h6g1, price:'~$31,990'});
  add('Haval','H6',yr,'Ultra',   {...h6g1, price:'~$34,990'});
}

// ── H6 Gen 2 (2018–2021) ─────────────────────────────────────────────────
const h6g2 = { engine:'4C20B 2.0T I4', fuelType:'petrol', displacement:1999, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'7-speed DCT', drivetrain:'FWD',
  power:145, torque:315, weight:1680, seats:5, cargo:390,
  fc:10.2, fh:7.2, fx:8.6, ft:'Petrol', acceleration:9.0, topSpeed:190 };
const h6g2awd = { ...h6g2, drivetrain:'AWD', weight:1730, fc:11.0, fh:8.0, fx:9.2 };
for (const yr of [2018,2019,2020,2021]) {
  add('Haval','H6',yr,'H6',      {...h6g2,    price:'~$27,990'});
  add('Haval','H6',yr,'Lux',     {...h6g2,    price:'~$31,990'});
  add('Haval','H6',yr,'Ultra',   {...h6g2,    price:'~$35,990'});
  add('Haval','H6',yr,'Lux AWD', {...h6g2awd, price:'~$34,990'});
}

// ── H6 Gen 3 (2021–2025) ─────────────────────────────────────────────────
const h6g3 = { engine:'4C20C 2.0T I4', fuelType:'petrol', displacement:1999, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'7-speed DCT', drivetrain:'FWD',
  power:145, torque:320, weight:1700, seats:5, cargo:412,
  fc:9.8, fh:7.0, fx:8.2, ft:'Petrol', acceleration:8.5, topSpeed:195 };
const h6hev = { engine:'1.5T HEV I4 + Electric', fuelType:'petrol hybrid', displacement:1497, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'2-speed DHT', drivetrain:'FWD',
  power:179, torque:375, weight:1820, seats:5, cargo:380,
  fc:5.5, fh:5.5, fx:5.5, ft:'Petrol Hybrid', acceleration:6.5, topSpeed:185 };
const h6gt = { engine:'4C20C 2.0T I4', fuelType:'petrol', displacement:1999, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'7-speed DCT', drivetrain:'FWD',
  power:150, torque:325, weight:1720, seats:5, cargo:398,
  fc:10.0, fh:7.2, fx:8.4, ft:'Petrol', acceleration:8.2, topSpeed:198 };
for (const yr of [2021,2022,2023,2024,2025]) {
  add('Haval','H6',yr,'H6',      {...h6g3, price:'~$30,990'});
  add('Haval','H6',yr,'Ultra',   {...h6g3, power:150, torque:325, price:'~$34,990'});
  if (yr >= 2022) {
    add('Haval','H6',yr,'HEV',    {...h6hev, price:'~$39,990'});
    add('Haval','H6',yr,'GT',     {...h6gt,  price:'~$35,990'});
    add('Haval','H6',yr,'GT HEV', {...h6hev, power:182, topSpeed:188, price:'~$43,990'});
  }
}

// ── H9 (2015–2024) ───────────────────────────────────────────────────────
const h9base = { engine:'GW4C20 2.0T I4', fuelType:'petrol', displacement:1999, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'6-speed auto', drivetrain:'4WD',
  power:150, torque:324, weight:2100, seats:7, cargo:234,
  fc:12.5, fh:9.0, fx:10.5, ft:'Petrol', acceleration:11.0, topSpeed:185 };
for (const yr of [2015,2016,2017,2018,2019,2020]) {
  add('Haval','H9',yr,'H9',  {...h9base, price:'~$38,990'});
  add('Haval','H9',yr,'Lux', {...h9base, price:'~$43,990'});
}
const h9new = { ...h9base, weight:2150, fc:12.2, fh:9.0, fx:10.2 };
for (const yr of [2021,2022,2023,2024]) {
  add('Haval','H9',yr,'H9',      {...h9new, price:'~$42,990'});
  add('Haval','H9',yr,'Premium', {...h9new, price:'~$47,990'});
  add('Haval','H9',yr,'Ultra',   {...h9new, price:'~$51,990'});
}

// ── Jolion (2021–2025) ───────────────────────────────────────────────────
const jolion = { engine:'4B15A 1.5T I4', fuelType:'petrol', displacement:1497, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'7-speed DCT', drivetrain:'FWD',
  power:105, torque:204, weight:1400, seats:5, cargo:337,
  fc:8.5, fh:6.5, fx:7.5, ft:'Petrol', acceleration:10.5, topSpeed:175 };
const jolionHev = { engine:'1.5T HEV I4 + Electric', fuelType:'petrol hybrid', displacement:1497, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'2-speed DHT', drivetrain:'FWD',
  power:130, torque:265, weight:1500, seats:5, cargo:310,
  fc:5.2, fh:5.2, fx:5.2, ft:'Petrol Hybrid', acceleration:8.5, topSpeed:170 };
for (const yr of [2021,2022,2023,2024,2025]) {
  add('Haval','Jolion',yr,'Jolion',         {...jolion, price:'~$24,990'});
  add('Haval','Jolion',yr,'Premium',        {...jolion, price:'~$28,990'});
  add('Haval','Jolion',yr,'Ultra',          {...jolion, price:'~$33,990'});
  if (yr >= 2022) add('Haval','Jolion',yr,'HEV', {...jolionHev, price:'~$36,990'});
  if (yr >= 2023) add('Haval','Jolion',yr,'PHEV',{
    engine:'1.5T PHEV I4 + Electric', fuelType:'petrol plug-in hybrid', displacement:1497, cylinders:4,
    aspiration:'IHI Single-Turbo PHEV', transmission:'2-speed DHT', drivetrain:'FWD',
    power:145, torque:530, weight:1620, seats:5, cargo:285,
    fc:1.4, fh:1.4, fx:1.4, ft:'Petrol PHEV', acceleration:7.8, topSpeed:175, price:'~$39,990' });
}

// ── Hunter (2022–2025) ───────────────────────────────────────────────────
for (const yr of [2022,2023,2024,2025]) {
  add('Haval','Hunter',yr,'Standard', {
    engine:'4D20J 2.0T Diesel I4', fuelType:'diesel', displacement:1996, cylinders:4,
    aspiration:'BorgWarner VGT Diesel Turbo', transmission:'8-speed auto', drivetrain:'4WD',
    power:120, torque:400, weight:2095, seats:5, cargo:880,
    fc:10.0, fh:8.0, fx:8.7, ft:'Diesel', acceleration:12.5, topSpeed:175, price:'~$42,990' });
  add('Haval','Hunter',yr,'Premium', {
    engine:'4D20J 2.0T Diesel I4', fuelType:'diesel', displacement:1996, cylinders:4,
    aspiration:'BorgWarner VGT Diesel Turbo', transmission:'8-speed auto', drivetrain:'4WD',
    power:120, torque:400, weight:2110, seats:5, cargo:880,
    fc:10.0, fh:8.0, fx:8.7, ft:'Diesel', acceleration:12.5, topSpeed:175, price:'~$47,990' });
  add('Haval','Hunter',yr,'Ultra', {
    engine:'4C20D 2.0T Petrol I4', fuelType:'petrol', displacement:1999, cylinders:4,
    aspiration:'IHI Single-Turbo', transmission:'8-speed auto', drivetrain:'4WD',
    power:150, torque:360, weight:2060, seats:5, cargo:880,
    fc:11.5, fh:9.0, fx:10.0, ft:'Petrol', acceleration:10.5, topSpeed:180, price:'~$50,990' });
}

// ── Raptor (2023–2025) ───────────────────────────────────────────────────
for (const yr of [2023,2024,2025]) {
  add('Haval','Raptor',yr,'Raptor', {
    engine:'4C20D 2.0T I4', fuelType:'petrol', displacement:1999, cylinders:4,
    aspiration:'IHI Single-Turbo', transmission:'8-speed auto', drivetrain:'4WD',
    power:155, torque:380, weight:2200, seats:5, cargo:924,
    fc:11.8, fh:9.2, fx:10.2, ft:'Petrol', acceleration:9.8, topSpeed:180, price:'~$55,990' });
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement219.json'), JSON.stringify(out, null, 2));
console.log('supplement219.json —', Object.keys(specs).length, 'entries (Haval)');
