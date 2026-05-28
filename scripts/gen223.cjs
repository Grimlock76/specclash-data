'use strict';
// supplement223.json — Hummer (H1, H2, H3, EV)
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── H1 (1992–2006) ───────────────────────────────────────────────────────
const h1d92 = { engine:'6.5L Turbo Diesel V8', fuelType:'diesel', displacement:6473, cylinders:8,
  aspiration:'Garrett Diesel Turbo', transmission:'4-speed auto', drivetrain:'4WD',
  power:135, torque:570, weight:3654, seats:4, cargo:null,
  fc:null, fh:null, fx:null, ft:'Diesel', acceleration:17.0, topSpeed:145 };
for (const yr of [1992,1993,1994,1995,1996,1997,1998,1999,2000]) {
  add('Hummer','H1',yr,'Hard Top', {...h1d92, price:`~$${yr <= 1995 ? '80,000' : '90,000'}`});
  add('Hummer','H1',yr,'Open Top', {...h1d92, weight:3560, price:`~$${yr <= 1995 ? '75,000' : '85,000'}`});
  add('Hummer','H1',yr,'Wagon',    {...h1d92, seats:5, weight:3765, price:`~$${yr <= 1995 ? '85,000' : '95,000'}`});
  add('Hummer','H1',yr,'Pickup',   {...h1d92, price:`~$${yr <= 1995 ? '82,000' : '92,000'}`});
}
const h1d01 = { engine:'6.6L Duramax Diesel V8', fuelType:'diesel', displacement:6599, cylinders:8,
  aspiration:'BorgWarner VGT Diesel Turbo', transmission:'4-speed auto', drivetrain:'4WD',
  power:189, torque:678, weight:3720, seats:4, cargo:null,
  fc:null, fh:null, fx:null, ft:'Diesel', acceleration:13.5, topSpeed:145 };
for (const yr of [2001,2002,2003,2004,2005,2006]) {
  add('Hummer','H1',yr,'Hard Top', {...h1d01, price:'~$130,000'});
  add('Hummer','H1',yr,'Open Top', {...h1d01, weight:3620, price:'~$125,000'});
  add('Hummer','H1',yr,'Wagon',    {...h1d01, seats:5, weight:3800, price:'~$135,000'});
  add('Hummer','H1',yr,'Alpha',    {...h1d01, power:194, price:'~$145,000'});
}

// ── H2 (2003–2009) ───────────────────────────────────────────────────────
const h2v8 = { engine:'LQ4 6.0L V8 Vortec', fuelType:'petrol', displacement:5967, cylinders:8,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'4WD',
  power:235, torque:447, weight:2903, seats:5, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.0, topSpeed:165 };
for (const yr of [2003,2004,2005,2006,2007]) {
  add('Hummer','H2',yr,'Base',    {...h2v8, price:'~$65,000'});
  add('Hummer','H2',yr,'Luxury',  {...h2v8, price:'~$70,000'});
  add('Hummer','H2',yr,'SUT',     {...h2v8, seats:5, price:'~$67,000'});
}
const h2v862 = { engine:'LY6 6.2L V8', fuelType:'petrol', displacement:6162, cylinders:8,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'4WD',
  power:298, torque:570, weight:2950, seats:5, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.0, topSpeed:170 };
for (const yr of [2008,2009]) {
  add('Hummer','H2',yr,'Base',    {...h2v862, price:'~$70,000'});
  add('Hummer','H2',yr,'Luxury',  {...h2v862, price:'~$76,000'});
  add('Hummer','H2',yr,'SUT',     {...h2v862, price:'~$72,000'});
}

// ── H3 (2006–2010) ───────────────────────────────────────────────────────
const h3i5 = { engine:'LLR 3.5L I5', fuelType:'petrol', displacement:3460, cylinders:5,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'4WD',
  power:173, torque:325, weight:2132, seats:5, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.8, topSpeed:175 };
const h3v8 = { engine:'LL8 5.3L V8 Vortec', fuelType:'petrol', displacement:5327, cylinders:8,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'4WD',
  power:224, torque:447, weight:2245, seats:5, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:8.5, topSpeed:185 };
for (const yr of [2006,2007,2008,2009,2010]) {
  add('Hummer','H3',yr,'Base',     {...h3i5, price:'~$38,000'});
  add('Hummer','H3',yr,'H3x',      {...h3i5, price:'~$42,000'});
  add('Hummer','H3',yr,'H3T',      {...h3i5, price:'~$40,000'}); // pickup
  if (yr >= 2008) add('Hummer','H3',yr,'H3 Alpha', {...h3v8, price:'~$48,000'});
}

// ── Hummer EV (2022–2025) ─────────────────────────────────────────────────
const evBase = { fuelType:'electric', displacement:null, cylinders:null,
  aspiration:'Electric', ft:'Electric', fc:null, fh:null, cargo:null };
for (const yr of [2022,2023,2024,2025]) {
  add('Hummer','EV Pickup',yr,'Edition 1', {...evBase, engine:'Tri-Motor Electric', transmission:'1-speed', drivetrain:'AWD',
    power:432, torque:1355, weight:4111, seats:5, fx:null, acceleration:3.3, topSpeed:170, price:'~$162,000'});
  add('Hummer','EV Pickup',yr,'EV3X', {...evBase, engine:'Tri-Motor Electric', transmission:'1-speed', drivetrain:'AWD',
    power:432, torque:1355, weight:4111, seats:5, fx:null, acceleration:3.3, topSpeed:170, price:'~$145,000'});
  add('Hummer','EV Pickup',yr,'EV2X', {...evBase, engine:'Dual-Motor Electric', transmission:'1-speed', drivetrain:'AWD',
    power:317, torque:1015, weight:4080, seats:5, fx:null, acceleration:4.5, topSpeed:170, price:'~$118,000'});
  add('Hummer','EV Pickup',yr,'EV2', {...evBase, engine:'Dual-Motor Electric', transmission:'1-speed', drivetrain:'AWD',
    power:317, torque:1015, weight:4046, seats:5, fx:null, acceleration:4.5, topSpeed:170, price:'~$105,000'});
  if (yr >= 2024) {
    add('Hummer','EV SUV',yr,'Edition 1', {...evBase, engine:'Tri-Motor Electric', transmission:'1-speed', drivetrain:'AWD',
      power:432, torque:1355, weight:4111, seats:5, fx:null, acceleration:3.5, topSpeed:170, price:'~$155,000'});
    add('Hummer','EV SUV',yr,'EV3X', {...evBase, engine:'Tri-Motor Electric', transmission:'1-speed', drivetrain:'AWD',
      power:432, torque:1355, weight:4111, seats:5, fx:null, acceleration:3.5, topSpeed:170, price:'~$138,000'});
  }
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement223.json'), JSON.stringify(out, null, 2));
console.log('supplement223.json —', Object.keys(specs).length, 'entries (Hummer)');
