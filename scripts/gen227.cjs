'use strict';
// supplement227.json — Rimac, SSC, Hennessey, Saleen, Fisker, Rivian, Lucid
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }
const ev = { fuelType:'electric', displacement:null, cylinders:null, aspiration:'Electric', ft:'Electric', fc:null, fh:null };

// ── Rimac ────────────────────────────────────────────────────────────────
add('Rimac','Concept_One',2016,'Standard', {
  engine:'Quad-Motor Electric', fuelType:'electric', displacement:null, cylinders:null,
  aspiration:'Electric', transmission:'1-speed', drivetrain:'AWD',
  power:1073, torque:1600, weight:1850, seats:2, cargo:null,
  fc:null, fh:null, fx:null, ft:'Electric', acceleration:2.6, topSpeed:355, price:'~$1,070,000' });
for (const yr of [2016,2017,2018]) {
  add('Rimac','Concept_One',yr,'Standard', {
    engine:'Quad-Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:1073, torque:1600, weight:1850, seats:2, cargo:null, fx:null,
    acceleration:2.6, topSpeed:355, price:'~$1,070,000' });
}
for (const yr of [2021,2022,2023,2024]) {
  add('Rimac','Nevera',yr,'Standard', {
    engine:'Quad-Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:1408, torque:2360, weight:1950, seats:2, cargo:null, fx:null,
    acceleration:1.97, topSpeed:412, price:'~$2,800,000' });
  add('Rimac','Nevera',yr,'Time Attack', {
    engine:'Quad-Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:1408, torque:2360, weight:1880, seats:2, cargo:null, fx:null,
    acceleration:1.81, topSpeed:412, price:'~$3,200,000' });
}

// ── SSC ───────────────────────────────────────────────────────────────────
for (const yr of [2007,2008,2009,2010,2011,2012,2013]) {
  add('SSC','Ultimate Aero',yr,'Standard', {
    engine:'6.35L V8 Twin-Turbo', fuelType:'petrol', displacement:6346, cylinders:8,
    aspiration:'BorgWarner Twin-Turbo', transmission:'6-speed manual', drivetrain:'RWD',
    power:895, torque:1247, weight:1247, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.78, topSpeed:437, price:'~$654,500' });
  if (yr >= 2009) add('SSC','Ultimate Aero TT',yr,'Twin Turbo', {
    engine:'6.35L V8 Twin-Turbo', fuelType:'petrol', displacement:6346, cylinders:8,
    aspiration:'BorgWarner Twin-Turbo', transmission:'6-speed manual', drivetrain:'RWD',
    power:895, torque:1247, weight:1247, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.78, topSpeed:437, price:'~$740,000' });
}
for (const yr of [2020,2021,2022,2023]) {
  add('SSC','Tuatara',yr,'Standard', {
    engine:'Nelson 5.9L V8 Twin-Turbo', fuelType:'petrol', displacement:5900, cylinders:8,
    aspiration:'Garrett Twin-Turbo', transmission:'7-speed auto', drivetrain:'RWD',
    power:960, torque:1280, weight:1247, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.5, topSpeed:455, price:'~$1,900,000' });
  add('SSC','Tuatara',yr,'Aggressor', {
    engine:'Nelson 5.9L V8 Twin-Turbo (E85)', fuelType:'petrol', displacement:5900, cylinders:8,
    aspiration:'Garrett Twin-Turbo', transmission:'7-speed auto', drivetrain:'RWD',
    power:1305, torque:1735, weight:1247, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.5, topSpeed:455, price:'~$2,100,000' });
}

// ── Hennessey ─────────────────────────────────────────────────────────────
for (const yr of [2011,2012,2013,2014,2015,2016,2017]) {
  add('Hennessey','Venom GT',yr,'Standard', {
    engine:'LS9 7.0L V8 Twin-Turbo', fuelType:'petrol', displacement:6998, cylinders:8,
    aspiration:'BorgWarner Twin-Turbo', transmission:'6-speed manual', drivetrain:'RWD',
    power:928, torque:1566, weight:1244, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.7, topSpeed:435, price:'~$1,200,000' });
  add('Hennessey','Venom GT',yr,'Spyder', {
    engine:'LS9 7.0L V8 Twin-Turbo', fuelType:'petrol', displacement:6998, cylinders:8,
    aspiration:'BorgWarner Twin-Turbo', transmission:'6-speed manual', drivetrain:'RWD',
    power:928, torque:1566, weight:1260, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.7, topSpeed:427, price:'~$1,250,000' });
}
for (const yr of [2022,2023,2024,2025]) {
  add('Hennessey','Venom F5',yr,'Coupe', {
    engine:'Fury 6.6L V8 Twin-Turbo', fuelType:'petrol', displacement:6600, cylinders:8,
    aspiration:'BorgWarner Twin-Turbo', transmission:'7-speed auto', drivetrain:'RWD',
    power:1355, torque:1617, weight:1360, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.6, topSpeed:483, price:'~$2,100,000' });
  add('Hennessey','Venom F5',yr,'Roadster', {
    engine:'Fury 6.6L V8 Twin-Turbo', fuelType:'petrol', displacement:6600, cylinders:8,
    aspiration:'BorgWarner Twin-Turbo', transmission:'7-speed auto', drivetrain:'RWD',
    power:1355, torque:1617, weight:1390, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.7, topSpeed:483, price:'~$2,500,000' });
}

// ── Saleen ────────────────────────────────────────────────────────────────
add('Saleen','S7',2000,'Standard', {
  engine:'Ford 7.0L V8 Twin-Turbo', fuelType:'petrol', displacement:6998, cylinders:8,
  aspiration:'BorgWarner Twin-Turbo', transmission:'6-speed manual', drivetrain:'RWD',
  power:746, torque:935, weight:1225, seats:2, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.8, topSpeed:399, price:'~$395,000' });
for (const yr of [2000,2001,2002,2003,2004,2005,2006]) {
  add('Saleen','S7',yr,'Standard', {
    engine:'Ford 7.0L V8 Twin-Turbo', fuelType:'petrol', displacement:6998, cylinders:8,
    aspiration:'BorgWarner Twin-Turbo', transmission:'6-speed manual', drivetrain:'RWD',
    power:746, torque:935, weight:1225, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.8, topSpeed:399, price:'~$395,000' });
}
// Saleen S281 Mustang
for (const yr of [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]) {
  add('Saleen','S281',yr,'Supercharged', {
    engine:'4.6L V8 Supercharged', fuelType:'petrol', displacement:4601, cylinders:8,
    aspiration:'Eaton Supercharged', transmission:'5-speed manual', drivetrain:'RWD',
    power:317, torque:542, weight:1535, seats:4, cargo:385,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:5.0, topSpeed:245, price:'~$46,000' });
}
// Saleen S302
for (const yr of [2014,2015,2016,2017,2018,2019,2020]) {
  add('Saleen','S302',yr,'White Label', {
    engine:'5.0L V8 Supercharged', fuelType:'petrol', displacement:4951, cylinders:8,
    aspiration:'Eaton TVS Supercharged', transmission:'6-speed manual', drivetrain:'RWD',
    power:392, torque:542, weight:1640, seats:4, cargo:385,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.4, topSpeed:270, price:'~$55,000' });
  add('Saleen','S302',yr,'Black Label', {
    engine:'5.0L V8 Supercharged', fuelType:'petrol', displacement:4951, cylinders:8,
    aspiration:'Eaton TVS Supercharged', transmission:'6-speed manual', drivetrain:'RWD',
    power:441, torque:605, weight:1640, seats:4, cargo:385,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.0, topSpeed:286, price:'~$69,000' });
}

// ── Fisker ────────────────────────────────────────────────────────────────
for (const yr of [2011,2012,2013,2014,2015,2016]) {
  add('Fisker','Karma',yr,'EcoSport', {
    engine:'2.0L I4 Range Extender + Electric', fuelType:'petrol plug-in hybrid', displacement:1998, cylinders:4,
    aspiration:'IHI Single-Turbo PHEV', transmission:'1-speed', drivetrain:'RWD',
    power:300, torque:1329, weight:2443, seats:4, cargo:170,
    fc:null, fh:null, fx:null, ft:'Petrol PHEV', acceleration:6.3, topSpeed:201, price:'~$103,000' });
}
for (const yr of [2023,2024]) {
  add('Fisker','Ocean',yr,'Sport', {
    engine:'Single Motor Electric', ...ev, transmission:'1-speed', drivetrain:'FWD',
    power:186, torque:386, weight:2150, seats:5, cargo:476, fx:null,
    acceleration:6.9, topSpeed:175, price:'~$52,990' });
  add('Fisker','Ocean',yr,'Ultra', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:327, torque:696, weight:2250, seats:5, cargo:476, fx:null,
    acceleration:3.9, topSpeed:205, price:'~$72,990' });
  add('Fisker','Ocean',yr,'One', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:399, torque:737, weight:2280, seats:5, cargo:476, fx:null,
    acceleration:3.6, topSpeed:205, price:'~$82,990' });
}

// ── Rivian ────────────────────────────────────────────────────────────────
for (const yr of [2022,2023,2024,2025]) {
  add('Rivian','R1T',yr,'Adventure', {
    engine:'Quad-Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:415, torque:1124, weight:2850, seats:5, cargo:900, fx:null,
    acceleration:3.0, topSpeed:200, price:'~$95,000' });
  add('Rivian','R1T',yr,'Performance', {
    engine:'Quad-Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:522, torque:1124, weight:2900, seats:5, cargo:900, fx:null,
    acceleration:2.6, topSpeed:200, price:'~$115,000' });
  add('Rivian','R1S',yr,'Adventure', {
    engine:'Quad-Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:415, torque:1124, weight:3040, seats:7, cargo:580, fx:null,
    acceleration:3.0, topSpeed:200, price:'~$99,000' });
  add('Rivian','R1S',yr,'Performance', {
    engine:'Quad-Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:522, torque:1124, weight:3090, seats:7, cargo:580, fx:null,
    acceleration:2.6, topSpeed:200, price:'~$119,000' });
}

// ── Lucid ─────────────────────────────────────────────────────────────────
for (const yr of [2022,2023,2024,2025]) {
  add('Lucid','Air',yr,'Pure', {
    engine:'Single Motor Electric', ...ev, transmission:'1-speed', drivetrain:'RWD',
    power:373, torque:572, weight:2282, seats:5, cargo:740, fx:null,
    acceleration:4.5, topSpeed:250, price:'~$130,000' });
  add('Lucid','Air',yr,'Touring', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:452, torque:900, weight:2360, seats:5, cargo:740, fx:null,
    acceleration:3.4, topSpeed:270, price:'~$175,000' });
  add('Lucid','Air',yr,'Grand Touring', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:597, torque:1000, weight:2394, seats:5, cargo:740, fx:null,
    acceleration:3.0, topSpeed:270, price:'~$215,000' });
  add('Lucid','Air',yr,'Sapphire', {
    engine:'Tri-Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:828, torque:1300, weight:2415, seats:5, cargo:740, fx:null,
    acceleration:1.89, topSpeed:330, price:'~$360,000' });
  if (yr >= 2024) {
    add('Lucid','Gravity',yr,'Grand Touring', {
      engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
      power:597, torque:1000, weight:2767, seats:7, cargo:730, fx:null,
      acceleration:3.5, topSpeed:250, price:'~$230,000' });
  }
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement227.json'), JSON.stringify(out, null, 2));
console.log('supplement227.json —', Object.keys(specs).length, 'entries (Rimac/SSC/Hennessey/Saleen/Fisker/Rivian/Lucid)');
