'use strict';
// supplement229.json — Noble, Spyker, Vector, Mosler, Ariel, BAC, Apollo/Gumpert, Glickenhaus, Gordon Murray, Hispano-Suiza
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── Noble ────────────────────────────────────────────────────────────────
for (const yr of [2000,2001,2002,2003,2004,2005,2006]) {
  add('Noble','M12 GTO',yr,'3R', {
    engine:'Ford 2.5T V6 Twin-Turbo', fuelType:'petrol', displacement:2496, cylinders:6,
    aspiration:'Garrett Twin-Turbo', transmission:'6-speed manual', drivetrain:'RWD',
    power:224, torque:390, weight:930, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.8, topSpeed:260, price:'~$65,000' });
}
for (const yr of [2005,2006]) {
  add('Noble','M14',yr,'Standard', {
    engine:'Ford 3.0T V6 Twin-Turbo', fuelType:'petrol', displacement:2967, cylinders:6,
    aspiration:'Garrett Twin-Turbo', transmission:'6-speed manual', drivetrain:'RWD',
    power:298, torque:530, weight:1050, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.5, topSpeed:275, price:'~$95,000' });
}
for (const yr of [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]) {
  add('Noble','M600',yr,'Standard', {
    engine:'Volvo/Noble 4.4T V8 Twin-Turbo', fuelType:'petrol', displacement:4439, cylinders:8,
    aspiration:'Garrett Twin-Turbo', transmission:'6-speed manual', drivetrain:'RWD',
    power:447, torque:720, weight:1198, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.0, topSpeed:362, price:'~$330,000' });
  add('Noble','M600',yr,'Carbon Sport', {
    engine:'Volvo/Noble 4.4T V8 Twin-Turbo', fuelType:'petrol', displacement:4439, cylinders:8,
    aspiration:'Garrett Twin-Turbo', transmission:'6-speed manual', drivetrain:'RWD',
    power:478, torque:740, weight:1165, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.9, topSpeed:370, price:'~$380,000' });
}

// ── Spyker ────────────────────────────────────────────────────────────────
for (const yr of [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]) {
  add('Spyker','C8 Laviolette',yr,'Standard', {
    engine:'Audi 4.2L V8 DOHC', fuelType:'petrol', displacement:4163, cylinders:8,
    aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
    power:298, torque:480, weight:1200, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.5, topSpeed:280, price:'~$230,000' });
  add('Spyker','C8 Spyder',yr,'Convertible', {
    engine:'Audi 4.2L V8 DOHC', fuelType:'petrol', displacement:4163, cylinders:8,
    aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
    power:298, torque:480, weight:1250, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.6, topSpeed:275, price:'~$240,000' });
}
for (const yr of [2007,2008,2009]) {
  add('Spyker','C12 Zagato',yr,'Coupe', {
    engine:'VW 6.0L W12 Twin-Turbo', fuelType:'petrol', displacement:5998, cylinders:12,
    aspiration:'IHI Twin-Turbo', transmission:'6-speed auto', drivetrain:'AWD',
    power:448, torque:700, weight:1665, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.8, topSpeed:320, price:'~$680,000' });
}

// ── Vector ────────────────────────────────────────────────────────────────
for (const yr of [1989,1990,1991,1992,1993]) {
  add('Vector','W8',yr,'Twin Turbo', {
    engine:'6.0L V8 Twin-Turbo', fuelType:'petrol', displacement:5973, cylinders:8,
    aspiration:'Garrett Twin-Turbo', transmission:'3-speed auto', drivetrain:'RWD',
    power:373, torque:791, weight:1505, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.2, topSpeed:370, price:'~$185,000' });
}
for (const yr of [1995,1996]) {
  add('Vector','M12',yr,'V12', {
    engine:'Lamborghini 5.7L V12', fuelType:'petrol', displacement:5707, cylinders:12,
    aspiration:'NA', transmission:'5-speed manual', drivetrain:'RWD',
    power:373, torque:600, weight:1451, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.0, topSpeed:306, price:'~$184,000' });
}

// ── Mosler ────────────────────────────────────────────────────────────────
for (const yr of [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]) {
  add('Mosler','MT900',yr,'Standard', {
    engine:'LS1 5.7L V8', fuelType:'petrol', displacement:5665, cylinders:8,
    aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
    power:303, torque:529, weight:930, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.4, topSpeed:315, price:'~$188,000' });
  add('Mosler','MT900',yr,'S', {
    engine:'LS7 7.0L V8', fuelType:'petrol', displacement:6997, cylinders:8,
    aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
    power:448, torque:644, weight:930, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.1, topSpeed:337, price:'~$250,000' });
}

// ── Ariel ─────────────────────────────────────────────────────────────────
for (const yr of [2000,2001,2002]) {
  add('Ariel','Atom 1',yr,'Honda', {
    engine:'Honda 1.8L I4 DOHC VTEC', fuelType:'petrol', displacement:1797, cylinders:4,
    aspiration:'NA', transmission:'5-speed manual', drivetrain:'RWD',
    power:118, torque:174, weight:456, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:5.0, topSpeed:217, price:'~$25,000' });
}
for (const yr of [2003,2004,2005,2006,2007,2008,2009,2010,2011]) {
  add('Ariel','Atom 2',yr,'220', {
    engine:'Honda 2.0L I4 DOHC VTEC', fuelType:'petrol', displacement:1998, cylinders:4,
    aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
    power:162, torque:200, weight:490, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.5, topSpeed:233, price:'~$45,000' });
  add('Ariel','Atom 2',yr,'300 Supercharged', {
    engine:'Honda 2.0L I4 DOHC VTEC Supercharged', fuelType:'petrol', displacement:1998, cylinders:4,
    aspiration:'Eaton Supercharged', transmission:'6-speed manual', drivetrain:'RWD',
    power:224, torque:246, weight:500, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.9, topSpeed:240, price:'~$55,000' });
}
for (const yr of [2011,2012,2013,2014,2015,2016,2017,2018]) {
  add('Ariel','Atom 3',yr,'Honda 245', {
    engine:'Honda K20Z 2.0L I4 DOHC VTEC', fuelType:'petrol', displacement:1998, cylinders:4,
    aspiration:'NA', transmission:'6-speed sequential', drivetrain:'RWD',
    power:183, torque:207, weight:550, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.0, topSpeed:241, price:'~$55,000' });
  add('Ariel','Atom 3',yr,'500 V8', {
    engine:'Honda V8 3.0L', fuelType:'petrol', displacement:2994, cylinders:8,
    aspiration:'NA', transmission:'6-speed sequential', drivetrain:'RWD',
    power:373, torque:373, weight:550, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.5, topSpeed:273, price:'~$150,000' });
}
for (const yr of [2019,2020,2021,2022,2023,2024,2025]) {
  add('Ariel','Atom 4',yr,'Honda Turbo', {
    engine:'Honda K20C 2.0T I4 DOHC VTEC', fuelType:'petrol', displacement:1996, cylinders:4,
    aspiration:'IHI Single-Turbo', transmission:'6-speed sequential', drivetrain:'RWD',
    power:221, torque:320, weight:595, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.8, topSpeed:257, price:'~$90,000' });
}
for (const yr of [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]) {
  add('Ariel','Nomad',yr,'Standard', {
    engine:'Honda 2.4L I4 DOHC i-VTEC', fuelType:'petrol', displacement:2354, cylinders:4,
    aspiration:'NA', transmission:'6-speed sequential', drivetrain:'RWD',
    power:140, torque:220, weight:670, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.4, topSpeed:217, price:'~$65,000' });
}

// ── BAC ───────────────────────────────────────────────────────────────────
for (const yr of [2011,2012,2013,2014,2015,2016,2017,2018,2019]) {
  add('BAC','Mono',yr,'Standard', {
    engine:'Cosworth 2.3T I4', fuelType:'petrol', displacement:2261, cylinders:4,
    aspiration:'BorgWarner Single-Turbo', transmission:'6-speed sequential', drivetrain:'RWD',
    power:213, torque:304, weight:555, seats:1, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.8, topSpeed:274, price:'~$170,000' });
}
for (const yr of [2020,2021,2022,2023,2024,2025]) {
  add('BAC','Mono R',yr,'Standard', {
    engine:'Mountune 2.3T I4', fuelType:'petrol', displacement:2261, cylinders:4,
    aspiration:'BorgWarner Single-Turbo', transmission:'6-speed sequential', drivetrain:'RWD',
    power:265, torque:340, weight:555, seats:1, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.5, topSpeed:280, price:'~$220,000' });
}

// ── Apollo (Gumpert) ──────────────────────────────────────────────────────
for (const yr of [2005,2006,2007,2008,2009,2010,2011,2012]) {
  add('Apollo','Sport',yr,'Twin Turbo', {
    engine:'Audi 4.2T V8 Twin-Turbo', fuelType:'petrol', displacement:4163, cylinders:8,
    aspiration:'Garrett Twin-Turbo', transmission:'6-speed sequential', drivetrain:'AWD',
    power:478, torque:630, weight:1100, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.0, topSpeed:360, price:'~$490,000' });
  add('Apollo','R',yr,'Race', {
    engine:'Audi 4.2T V8 Twin-Turbo', fuelType:'petrol', displacement:4163, cylinders:8,
    aspiration:'Garrett Twin-Turbo', transmission:'6-speed sequential', drivetrain:'AWD',
    power:530, torque:650, weight:1050, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.8, topSpeed:370, price:'~$620,000' });
}
for (const yr of [2019,2020,2021,2022,2023]) {
  add('Apollo','IE',yr,'V12', {
    engine:'6.3L V12 NA', fuelType:'petrol', displacement:6299, cylinders:12,
    aspiration:'NA', transmission:'6-speed sequential', drivetrain:'RWD',
    power:588, torque:550, weight:1250, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.7, topSpeed:335, price:'~$2,700,000' });
}

// ── Glickenhaus (SCG) ─────────────────────────────────────────────────────
for (const yr of [2015,2016,2017,2018,2019,2020]) {
  add('Glickenhaus','SCG 003',yr,'Competizione', {
    engine:'Ferrari 3.5T V8 Twin-Turbo', fuelType:'petrol', displacement:3499, cylinders:8,
    aspiration:'IHI Twin-Turbo', transmission:'7-speed DCT', drivetrain:'RWD',
    power:399, torque:600, weight:900, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.5, topSpeed:320, price:'~$2,500,000' });
}
for (const yr of [2021,2022,2023,2024,2025]) {
  add('Glickenhaus','SCG 007',yr,'LMH', {
    engine:'3.5T V6 Twin-Turbo + Hybrid', fuelType:'petrol hybrid', displacement:3496, cylinders:6,
    aspiration:'IHI Twin-Turbo', transmission:'7-speed auto', drivetrain:'4WD',
    power:500, torque:800, weight:1030, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol Hybrid', acceleration:3.0, topSpeed:340, price:'~$3,500,000' });
}

// ── Gordon Murray Automotive ──────────────────────────────────────────────
for (const yr of [2022,2023,2024,2025]) {
  add('Gordon Murray','T.50',yr,'Standard', {
    engine:'GMA/Cosworth V12 3.9L', fuelType:'petrol', displacement:3994, cylinders:12,
    aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
    power:477, torque:467, weight:986, seats:3, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.9, topSpeed:402, price:'~$3,600,000' });
  add('Gordon Murray','T.50s',yr,'Niki Lauda', {
    engine:'GMA/Cosworth V12 3.9L', fuelType:'petrol', displacement:3994, cylinders:12,
    aspiration:'NA', transmission:'6-speed sequential', drivetrain:'RWD',
    power:522, torque:467, weight:852, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.7, topSpeed:380, price:'~$4,300,000' });
}

// ── Hispano-Suiza (modern) ────────────────────────────────────────────────
for (const yr of [2019,2020,2021,2022,2023,2024]) {
  add('Hispano-Suiza','Carmen',yr,'Standard', {
    engine:'Quad-Motor Electric', fuelType:'electric', displacement:null, cylinders:null,
    aspiration:'Electric', transmission:'1-speed', drivetrain:'RWD',
    power:745, torque:1000, weight:1695, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Electric', acceleration:3.0, topSpeed:250, price:'~$1,500,000' });
  add('Hispano-Suiza','Carmen Biturbo',yr,'Petrol', {
    engine:'V8 Biturbo 4.0L', fuelType:'petrol', displacement:3996, cylinders:8,
    aspiration:'IHI Twin-Turbo', transmission:'8-speed DCT', drivetrain:'RWD',
    power:858, torque:900, weight:1650, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:2.6, topSpeed:290, price:'~$1,700,000' });
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement229.json'), JSON.stringify(out, null, 2));
console.log('supplement229.json —', Object.keys(specs).length, 'entries (Noble/Spyker/Vector/Mosler/Ariel/BAC/Apollo/Glickenhaus/GMA/Hispano-Suiza)');
