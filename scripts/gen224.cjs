'use strict';
// supplement224.json — Saturn
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── S-Series (1991–2002) ──────────────────────────────────────────────────
const sc1 = { engine:'SOHC 1.9L I4', fuelType:'petrol', displacement:1901, cylinders:4,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:63, torque:145, weight:1040, seats:5, cargo:370,
  fc:9.5, fh:7.0, fx:8.0, ft:'Petrol', acceleration:12.5, topSpeed:170 };
const sc2 = { ...sc1, engine:'DOHC 1.9L I4', power:85, torque:162, acceleration:10.5 };
for (const yr of [1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002]) {
  add('Saturn','SC1',yr,'Base',   {...sc1, transmission:'5-speed manual', price:'~$11,000'});
  add('Saturn','SC1',yr,'Auto',   {...sc1, price:'~$11,800'});
  add('Saturn','SC2',yr,'Base',   {...sc2, transmission:'5-speed manual', price:'~$13,500'});
  add('Saturn','SL1',yr,'Base',   {...sc1, weight:1010, cargo:430, price:'~$10,500'});
  add('Saturn','SL2',yr,'Base',   {...sc2, weight:1020, cargo:430, price:'~$12,500'});
  add('Saturn','SW1',yr,'Wagon',  {...sc1, weight:1040, cargo:560, price:'~$12,000'});
  add('Saturn','SW2',yr,'Wagon',  {...sc2, weight:1050, cargo:560, price:'~$14,000'});
}

// ── L-Series (2000–2005) ──────────────────────────────────────────────────
const l22 = { engine:'ECOTEC 2.2L I4', fuelType:'petrol', displacement:2198, cylinders:4,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:107, torque:195, weight:1380, seats:5, cargo:410,
  fc:11.0, fh:8.0, fx:9.2, ft:'Petrol', acceleration:9.5, topSpeed:185 };
for (const yr of [2000,2001,2002,2003,2004,2005]) {
  add('Saturn','L200',yr,'Base',  {...l22, transmission:'5-speed manual', price:'~$16,000'});
  add('Saturn','L200',yr,'Auto',  {...l22, price:'~$17,000'});
  add('Saturn','L300',yr,'V6',    {...l22, engine:'3.0L V6', displacement:2999, cylinders:6, power:134, torque:264, price:'~$20,000'});
  add('Saturn','LW200',yr,'Wagon',{...l22, cargo:640, transmission:'5-speed manual', price:'~$17,500'});
  add('Saturn','LW300',yr,'Wagon V6',{...l22, engine:'3.0L V6', displacement:2999, cylinders:6, power:134, torque:264, cargo:640, price:'~$21,500'});
}

// ── Ion (2003–2007) ───────────────────────────────────────────────────────
const ion22 = { engine:'ECOTEC 2.2L I4', fuelType:'petrol', displacement:2198, cylinders:4,
  aspiration:'NA', transmission:'CVT', drivetrain:'FWD',
  power:103, torque:200, weight:1260, seats:5, cargo:310,
  fc:10.0, fh:7.5, fx:8.5, ft:'Petrol', acceleration:9.8, topSpeed:185 };
const ionRL = { engine:'LSJ 2.0L Supercharged I4', fuelType:'petrol', displacement:1998, cylinders:4,
  aspiration:'Eaton Supercharged', transmission:'5-speed manual', drivetrain:'FWD',
  power:142, torque:245, weight:1325, seats:5, cargo:310,
  fc:11.5, fh:8.5, fx:9.7, ft:'Petrol', acceleration:7.5, topSpeed:210 };
for (const yr of [2003,2004,2005,2006,2007]) {
  add('Saturn','Ion',yr,'Ion 1',     {...ion22, transmission:'5-speed manual', price:'~$13,500'});
  add('Saturn','Ion',yr,'Ion 2',     {...ion22, price:'~$15,500'});
  add('Saturn','Ion',yr,'Ion 3',     {...ion22, price:'~$17,500'});
  if (yr >= 2004) add('Saturn','Ion',yr,'Red Line', {...ionRL, price:'~$22,000'});
}

// ── Vue (2002–2010) ───────────────────────────────────────────────────────
const vue22 = { engine:'ECOTEC 2.2L I4', fuelType:'petrol', displacement:2198, cylinders:4,
  aspiration:'NA', transmission:'CVT', drivetrain:'FWD',
  power:107, torque:195, weight:1640, seats:5, cargo:900,
  fc:11.5, fh:8.5, fx:9.7, ft:'Petrol', acceleration:10.5, topSpeed:175 };
const vue35 = { engine:'J35A3 3.5L V6', fuelType:'petrol', displacement:3471, cylinders:6,
  aspiration:'NA', transmission:'5-speed auto', drivetrain:'AWD',
  power:133, torque:297, weight:1790, seats:5, cargo:900,
  fc:13.5, fh:10.0, fx:11.5, ft:'Petrol', acceleration:8.5, topSpeed:185 };
for (const yr of [2002,2003,2004,2005,2006,2007]) {
  add('Saturn','Vue',yr,'FWD',      {...vue22, price:'~$22,000'});
  add('Saturn','Vue',yr,'AWD',      {...vue35, price:'~$27,000'});
  add('Saturn','Vue',yr,'V6 FWD',   {...vue35, drivetrain:'FWD', price:'~$25,000'});
}
const vue24 = { engine:'LE5 2.4L I4', fuelType:'petrol', displacement:2384, cylinders:4,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'FWD',
  power:120, torque:220, weight:1680, seats:5, cargo:900,
  fc:11.0, fh:8.0, fx:9.2, ft:'Petrol', acceleration:9.5, topSpeed:178 };
const vue36 = { engine:'LY7 3.6L V6', fuelType:'petrol', displacement:3564, cylinders:6,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'AWD',
  power:185, torque:340, weight:1825, seats:5, cargo:900,
  fc:14.0, fh:10.0, fx:11.7, ft:'Petrol', acceleration:7.8, topSpeed:190 };
const vueHev = { engine:'2.4L I4 Hybrid', fuelType:'petrol hybrid', displacement:2384, cylinders:4,
  aspiration:'NA', transmission:'CVT', drivetrain:'FWD',
  power:121, torque:220, weight:1715, seats:5, cargo:900,
  fc:7.5, fh:7.5, fx:7.5, ft:'Petrol Hybrid', acceleration:10.5, topSpeed:175 };
for (const yr of [2008,2009,2010]) {
  add('Saturn','Vue',yr,'XE',        {...vue24, price:'~$24,000'});
  add('Saturn','Vue',yr,'XR',        {...vue24, price:'~$27,000'});
  add('Saturn','Vue',yr,'XR AWD',    {...vue36, price:'~$31,000'});
  add('Saturn','Vue',yr,'Green Line',{...vueHev, price:'~$29,000'});
}

// ── Sky (2007–2010) ───────────────────────────────────────────────────────
const sky24 = { engine:'LE5 2.4L I4', fuelType:'petrol', displacement:2384, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'RWD',
  power:134, torque:232, weight:1305, seats:2, cargo:160,
  fc:11.0, fh:8.0, fx:9.2, ft:'Petrol', acceleration:7.5, topSpeed:200 };
const skyRL = { engine:'LNF 2.0T I4 Ecotec', fuelType:'petrol', displacement:1998, cylinders:4,
  aspiration:'Garrett Single-Turbo', transmission:'5-speed manual', drivetrain:'RWD',
  power:187, torque:353, weight:1340, seats:2, cargo:160,
  fc:12.5, fh:9.0, fx:10.5, ft:'Petrol', acceleration:5.9, topSpeed:225 };
for (const yr of [2007,2008,2009,2010]) {
  add('Saturn','Sky',yr,'Base',     {...sky24, price:'~$25,000'});
  add('Saturn','Sky',yr,'Red Line', {...skyRL, price:'~$30,000'});
}

// ── Astra (2008–2009) ─────────────────────────────────────────────────────
const astra = { engine:'1.8L I4 Ecotec', fuelType:'petrol', displacement:1796, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:103, torque:175, weight:1310, seats:5, cargo:370,
  fc:9.5, fh:7.0, fx:8.0, ft:'Petrol', acceleration:9.5, topSpeed:200 };
for (const yr of [2008,2009]) {
  add('Saturn','Astra',yr,'XE',  {...astra, price:'~$18,500'});
  add('Saturn','Astra',yr,'XR',  {...astra, transmission:'6-speed auto', price:'~$20,000'});
}

// ── Outlook (2007–2010) ───────────────────────────────────────────────────
const outlook = { engine:'LY7 3.6L V6', fuelType:'petrol', displacement:3564, cylinders:6,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'AWD',
  power:227, torque:365, weight:2108, seats:8, cargo:580,
  fc:14.0, fh:10.0, fx:11.7, ft:'Petrol', acceleration:8.0, topSpeed:185 };
for (const yr of [2007,2008,2009,2010]) {
  add('Saturn','Outlook',yr,'XE',  {...outlook, drivetrain:'FWD', price:'~$28,000'});
  add('Saturn','Outlook',yr,'XR',  {...outlook, price:'~$33,000'});
  add('Saturn','Outlook',yr,'XR FWD',{...outlook, drivetrain:'FWD', price:'~$31,000'});
}

// ── Relay (2005–2007) ─────────────────────────────────────────────────────
const relay = { engine:'LX9 3.5L V6', fuelType:'petrol', displacement:3498, cylinders:6,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:136, torque:298, weight:1893, seats:7, cargo:null,
  fc:14.0, fh:10.0, fx:11.7, ft:'Petrol', acceleration:10.0, topSpeed:175 };
for (const yr of [2005,2006,2007]) {
  add('Saturn','Relay',yr,'1',  {...relay, price:'~$25,000'});
  add('Saturn','Relay',yr,'2',  {...relay, price:'~$28,000'});
  add('Saturn','Relay',yr,'3',  {...relay, engine:'LZE 3.9L V6', displacement:3880, power:146, torque:325, price:'~$31,000'});
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement224.json'), JSON.stringify(out, null, 2));
console.log('supplement224.json —', Object.keys(specs).length, 'entries (Saturn)');
