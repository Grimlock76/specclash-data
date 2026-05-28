'use strict';
// supplement221.json — Scion
const fs = require('fs'), path = require('path');

const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── xA (2004–2006) ────────────────────────────────────────────────────────
const xa = { engine:'1NZ-FE 1.5L I4', fuelType:'petrol', displacement:1496, cylinders:4,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:77, torque:133, weight:940, seats:5, cargo:234,
  fc:8.5, fh:6.5, fx:7.3, ft:'Petrol', acceleration:10.5, topSpeed:165 };
for (const yr of [2004,2005,2006]) {
  add('Scion','xA',yr,'Base',  {...xa, transmission:'5-speed manual', price:'~$14,800'});
  add('Scion','xA',yr,'Auto',  {...xa, price:'~$15,500'});
}

// ── xB Gen 1 (2004–2006) ─────────────────────────────────────────────────
const xb1 = { engine:'1NZ-FE 1.5L I4', fuelType:'petrol', displacement:1496, cylinders:4,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:77, torque:133, weight:950, seats:5, cargo:670,
  fc:9.0, fh:6.8, fx:7.7, ft:'Petrol', acceleration:10.2, topSpeed:165 };
for (const yr of [2004,2005,2006]) {
  add('Scion','xB',yr,'Base', {...xb1, transmission:'5-speed manual', price:'~$15,200'});
  add('Scion','xB',yr,'Auto', {...xb1, price:'~$15,900'});
}
// ── xB Gen 2 (2008–2015) ─────────────────────────────────────────────────
const xb2 = { engine:'2AZ-FE 2.4L I4', fuelType:'petrol', displacement:2362, cylinders:4,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:118, torque:224, weight:1310, seats:5, cargo:697,
  fc:10.0, fh:7.5, fx:8.5, ft:'Petrol', acceleration:8.5, topSpeed:185 };
for (const yr of [2008,2009,2010,2011,2012,2013,2014,2015]) {
  add('Scion','xB',yr,'Base', {...xb2, transmission:'5-speed manual', price:'~$16,800'});
  add('Scion','xB',yr,'Auto', {...xb2, price:'~$17,800'});
}

// ── tC Gen 1 (2005–2010) ─────────────────────────────────────────────────
const tc1 = { engine:'2AZ-FE 2.4L I4', fuelType:'petrol', displacement:2362, cylinders:4,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:118, torque:220, weight:1340, seats:5, cargo:280,
  fc:10.5, fh:7.8, fx:8.9, ft:'Petrol', acceleration:8.2, topSpeed:195 };
for (const yr of [2005,2006,2007,2008,2009,2010]) {
  add('Scion','tC',yr,'Base',  {...tc1, transmission:'5-speed manual', price:'~$17,400'});
  add('Scion','tC',yr,'Auto',  {...tc1, price:'~$18,400'});
}
// ── tC Gen 2 (2011–2016) ─────────────────────────────────────────────────
const tc2 = { engine:'2AR-FE 2.5L I4', fuelType:'petrol', displacement:2494, cylinders:4,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'FWD',
  power:132, torque:234, weight:1415, seats:5, cargo:293,
  fc:10.8, fh:7.8, fx:9.0, ft:'Petrol', acceleration:8.0, topSpeed:195 };
for (const yr of [2011,2012,2013,2014,2015,2016]) {
  add('Scion','tC',yr,'Base', {...tc2, transmission:'6-speed manual', price:'~$19,200'});
  add('Scion','tC',yr,'Auto', {...tc2, price:'~$19,900'});
}

// ── xD (2008–2014) ───────────────────────────────────────────────────────
const xd = { engine:'2ZR-FE 1.8L I4', fuelType:'petrol', displacement:1798, cylinders:4,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:100, torque:173, weight:1135, seats:5, cargo:368,
  fc:9.5, fh:7.0, fx:8.0, ft:'Petrol', acceleration:9.5, topSpeed:175 };
for (const yr of [2008,2009,2010,2011,2012,2013,2014]) {
  add('Scion','xD',yr,'Base', {...xd, transmission:'5-speed manual', price:'~$16,400'});
  add('Scion','xD',yr,'Auto', {...xd, price:'~$17,200'});
}

// ── FR-S (2013–2016) ─────────────────────────────────────────────────────
const frs = { engine:'FA20D 2.0L Boxer H4', fuelType:'petrol', displacement:1998, cylinders:4,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'RWD',
  power:147, torque:205, weight:1220, seats:4, cargo:232,
  fc:10.5, fh:7.8, fx:8.9, ft:'Petrol', acceleration:6.8, topSpeed:226 };
for (const yr of [2013,2014,2015,2016]) {
  add('Scion','FR-S',yr,'Base',   {...frs, transmission:'6-speed manual', price:'~$26,200'});
  add('Scion','FR-S',yr,'Auto',   {...frs, price:'~$27,200'});
  add('Scion','FR-S',yr,'Release Series',{...frs, transmission:'6-speed manual', price:'~$30,000'});
}

// ── iQ (2012–2015) ───────────────────────────────────────────────────────
const iq = { engine:'1KR-FE 1.0L I3', fuelType:'petrol', displacement:996, cylinders:3,
  aspiration:'NA', transmission:'CVT', drivetrain:'FWD',
  power:50, torque:91, weight:840, seats:4, cargo:32,
  fc:7.2, fh:5.8, fx:6.4, ft:'Petrol', acceleration:11.8, topSpeed:155, price:'~$16,200' };
for (const yr of [2012,2013,2014,2015]) {
  add('Scion','iQ',yr,'Base', {...iq});
}

// ── iA (2016) ─────────────────────────────────────────────────────────────
add('Scion','iA',2016,'Base', {
  engine:'P5-VPS 1.5L I4 SkyActiv-G', fuelType:'petrol', displacement:1496, cylinders:4,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'FWD',
  power:77, torque:136, weight:1088, seats:5, cargo:323,
  fc:8.2, fh:6.2, fx:7.0, ft:'Petrol', acceleration:10.0, topSpeed:175, price:'~$18,000' });
add('Scion','iA',2016,'Manual', {
  engine:'P5-VPS 1.5L I4 SkyActiv-G', fuelType:'petrol', displacement:1496, cylinders:4,
  aspiration:'NA', transmission:'6-speed manual', drivetrain:'FWD',
  power:77, torque:136, weight:1072, seats:5, cargo:323,
  fc:8.0, fh:6.0, fx:6.8, ft:'Petrol', acceleration:10.2, topSpeed:175, price:'~$17,400' });

// ── iM (2016) ─────────────────────────────────────────────────────────────
add('Scion','iM',2016,'Base', {
  engine:'2ZR-FAE 1.8L I4', fuelType:'petrol', displacement:1798, cylinders:4,
  aspiration:'NA', transmission:'CVT', drivetrain:'FWD',
  power:104, torque:170, weight:1315, seats:5, cargo:217,
  fc:9.0, fh:6.8, fx:7.7, ft:'Petrol', acceleration:9.0, topSpeed:180, price:'~$20,200' });
add('Scion','iM',2016,'Manual', {
  engine:'2ZR-FAE 1.8L I4', fuelType:'petrol', displacement:1798, cylinders:4,
  aspiration:'NA', transmission:'6-speed manual', drivetrain:'FWD',
  power:104, torque:170, weight:1295, seats:5, cargo:217,
  fc:8.8, fh:6.5, fx:7.5, ft:'Petrol', acceleration:9.2, topSpeed:180, price:'~$19,500' });

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement221.json'), JSON.stringify(out, null, 2));
console.log('supplement221.json —', Object.keys(specs).length, 'entries (Scion)');
