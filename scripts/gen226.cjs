'use strict';
// supplement226.json — Eagle, Willys, Edsel, Kaiser, Frazer, Yugo, Trabant, Wartburg, DeLorean, Tucker
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── DeLorean DMC-12 (1981–1983) ───────────────────────────────────────────
const dmcBase = { engine:'PRV 2.85L V6', fuelType:'petrol', displacement:2849, cylinders:6,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'RWD',
  power:96, torque:235, weight:1233, seats:2, cargo:195,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.5, topSpeed:175 };
for (const yr of [1981,1982,1983]) {
  add('DeLorean','DMC-12',yr,'Manual',  {...dmcBase, price:'~$25,000'});
  add('DeLorean','DMC-12',yr,'Auto',    {...dmcBase, transmission:'3-speed auto', power:92, price:'~$25,500'});
}

// ── Tucker 48 (1948) ─────────────────────────────────────────────────────
add('Tucker','48',1948,'Torpedo', {
  engine:'Franklin 6HA 5.5L H6', fuelType:'petrol', displacement:5491, cylinders:6,
  aspiration:'NA', transmission:'4-speed manual (pre-selector)', drivetrain:'RWD',
  power:101, torque:null, weight:1771, seats:6, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.0, topSpeed:185, price:'~$2,450' });

// ── Eagle (1988–1998) ─────────────────────────────────────────────────────
// Premier (1988–1992)
const eagPrem = { engine:'2.5L I4 Renault', fuelType:'petrol', displacement:2498, cylinders:4,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:104, torque:196, weight:1416, seats:5, cargo:450,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:11.0, topSpeed:175 };
for (const yr of [1988,1989,1990,1991,1992]) {
  add('Eagle','Premier',yr,'LX',   {...eagPrem, price:'~$15,000'});
  add('Eagle','Premier',yr,'ES',   {...eagPrem, engine:'3.0L V6 PRV', displacement:2975, cylinders:6, power:144, price:'~$19,000'});
}
// Talon (1990–1998) — Mitsubishi Eclipse based
const talon20 = { engine:'4G63 2.0L DOHC I4', fuelType:'petrol', displacement:1997, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:90, torque:164, weight:1180, seats:4, cargo:240,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.0, topSpeed:195 };
const talonT = { ...talon20, engine:'4G63T 2.0T DOHC I4 Turbo', aspiration:'Mitsubishi Single-Turbo',
  power:122, torque:223, drivetrain:'AWD', weight:1285, acceleration:7.2, topSpeed:215 };
for (const yr of [1990,1991,1992,1993,1994,1995,1996,1997,1998]) {
  add('Eagle','Talon',yr,'Base',   {...talon20, price:'~$14,000'});
  add('Eagle','Talon',yr,'TSi FWD',{...talonT, drivetrain:'FWD', weight:1225, price:'~$17,000'});
  add('Eagle','Talon',yr,'TSi AWD',{...talonT, price:'~$20,000'});
}
// Vision (1993–1997)
for (const yr of [1993,1994,1995,1996,1997]) {
  add('Eagle','Vision',yr,'ESi', {
    engine:'3.5L V6 SOHC', fuelType:'petrol', displacement:3518, cylinders:6,
    aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
    power:148, torque:292, weight:1520, seats:5, cargo:455,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:8.5, topSpeed:200, price:'~$20,000' });
  add('Eagle','Vision',yr,'ESi AWD', {
    engine:'3.5L V6 SOHC', fuelType:'petrol', displacement:3518, cylinders:6,
    aspiration:'NA', transmission:'4-speed auto', drivetrain:'AWD',
    power:148, torque:292, weight:1620, seats:5, cargo:455,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.0, topSpeed:195, price:'~$23,000' });
}
// Summit (1992–1996) — Mitsubishi Expo based
for (const yr of [1992,1993,1994,1995,1996]) {
  add('Eagle','Summit',yr,'ES',  {
    engine:'4G15 1.5L I4', fuelType:'petrol', displacement:1468, cylinders:4,
    aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
    power:68, torque:122, weight:1020, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:12.0, topSpeed:165, price:'~$12,000' });
  add('Eagle','Summit Wagon',yr,'AWD', {
    engine:'4G63 2.0L I4', fuelType:'petrol', displacement:1997, cylinders:4,
    aspiration:'NA', transmission:'4-speed auto', drivetrain:'AWD',
    power:90, torque:164, weight:1365, seats:7, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.5, topSpeed:175, price:'~$17,000' });
}

// ── Willys (1941–1955) ────────────────────────────────────────────────────
add('Willys','MB',1941,'Military', {
  engine:'Go Devil 2.2L I4', fuelType:'petrol', displacement:2199, cylinders:4,
  aspiration:'NA', transmission:'3-speed manual', drivetrain:'4WD',
  power:45, torque:130, weight:1111, seats:4, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:null, topSpeed:105, price:'~$738' });
for (const yr of [1945,1946,1947,1948,1949]) {
  add('Willys','CJ-2A',yr,'Base', {
    engine:'Go Devil 2.2L I4', fuelType:'petrol', displacement:2199, cylinders:4,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'4WD',
    power:45, torque:130, weight:1091, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:null, topSpeed:105, price:'~$1,090' });
}
for (const yr of [1950,1951,1952,1953,1954,1955]) {
  add('Willys','CJ-3A',yr,'Base', {
    engine:'Go Devil 2.2L I4', fuelType:'petrol', displacement:2199, cylinders:4,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'4WD',
    power:45, torque:130, weight:1097, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:null, topSpeed:108, price:'~$1,300' });
}
for (const yr of [1952,1953,1954,1955]) {
  add('Willys','Aero',yr,'Lark', {
    engine:'Hurricane 2.6L I6', fuelType:'petrol', displacement:2638, cylinders:6,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:75, torque:183, weight:1260, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:14.0, topSpeed:148, price:'~$1,750' });
  add('Willys','Aero',yr,'Eagle', {
    engine:'Hurricane 2.6L I6', fuelType:'petrol', displacement:2638, cylinders:6,
    aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
    power:90, torque:203, weight:1275, seats:5, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:13.0, topSpeed:155, price:'~$2,100' });
}

// ── Edsel (1958–1960) ─────────────────────────────────────────────────────
const edselRgr = { engine:'272 V8 4.5L', fuelType:'petrol', displacement:4474, cylinders:8,
  aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
  power:132, torque:327, weight:1710, seats:6, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:12.5, topSpeed:165 };
const edselCors = { engine:'361 V8 5.9L', fuelType:'petrol', displacement:5900, cylinders:8,
  aspiration:'NA', transmission:'3-speed auto', drivetrain:'RWD',
  power:175, torque:420, weight:1890, seats:6, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.5, topSpeed:180 };
const edselCit = { engine:'410 V8 6.7L', fuelType:'petrol', displacement:6703, cylinders:8,
  aspiration:'NA', transmission:'3-speed auto', drivetrain:'RWD',
  power:224, torque:542, weight:2035, seats:6, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.0, topSpeed:190 };
add('Edsel','Ranger',1958,'Sedan',    {...edselRgr, price:'~$2,520'});
add('Edsel','Ranger',1958,'Hardtop',  {...edselRgr, price:'~$2,640'});
add('Edsel','Pacer',1958,'Sedan',     {...edselCors, price:'~$2,690'});
add('Edsel','Corsair',1958,'Hardtop', {...edselCors, price:'~$3,346'});
add('Edsel','Citation',1958,'Conv',   {...edselCit, price:'~$3,801'});
add('Edsel','Villager',1958,'Wagon',  {...edselCors, seats:9, price:'~$2,900'});
add('Edsel','Ranger',1959,'Sedan',    {...edselRgr, price:'~$2,629'});
add('Edsel','Corsair',1959,'Hardtop', {...edselCors, price:'~$3,072'});
add('Edsel','Ranger',1960,'Sedan',    {...edselRgr, price:'~$2,643'});
add('Edsel','Ranger',1960,'Hardtop',  {...edselRgr, price:'~$2,756'});

// ── Kaiser (1946–1955) ────────────────────────────────────────────────────
const kaiserI4 = { engine:'Continental 2.6L I6', fuelType:'petrol', displacement:2638, cylinders:6,
  aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
  power:75, torque:null, weight:1530, seats:5, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:14.0, topSpeed:145 };
for (const yr of [1946,1947,1948,1949,1950,1951,1952,1953,1954,1955]) {
  add('Kaiser','Special',yr,'Sedan', {...kaiserI4, price:`~$${yr <= 1949 ? '1,868' : '2,100'}`});
  if (yr >= 1951) add('Kaiser','Manhattan',yr,'Sedan', {...kaiserI4, power:90, price:'~$2,450'});
}
add('Kaiser','Darrin',1954,'Roadster', {
  engine:'Continental 2.6L I6', fuelType:'petrol', displacement:2638, cylinders:6,
  aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
  power:90, torque:null, weight:1151, seats:2, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:12.0, topSpeed:185, price:'~$3,668' });

// ── Frazer (1947–1951) ────────────────────────────────────────────────────
const frazerBase = { engine:'Continental 2.6L I6', fuelType:'petrol', displacement:2638, cylinders:6,
  aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
  power:75, torque:null, weight:1565, seats:5, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:14.5, topSpeed:140 };
for (const yr of [1947,1948,1949,1950,1951]) {
  add('Frazer','Standard',yr,'Sedan', {...frazerBase, price:'~$1,978'});
  add('Frazer','Manhattan',yr,'Sedan',{...frazerBase, power:90, price:'~$2,483'});
}

// ── Yugo (1984–1992) ─────────────────────────────────────────────────────
const yugoBase = { engine:'1.1L I4 OHV', fuelType:'petrol', displacement:1116, cylinders:4,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
  power:33, torque:72, weight:750, seats:5, cargo:290,
  fc:7.5, fh:6.0, fx:6.6, ft:'Petrol', acceleration:17.0, topSpeed:140 };
for (const yr of [1984,1985,1986,1987,1988,1989,1990,1991,1992]) {
  add('Yugo','GV',yr,'Base',    {...yugoBase, price:'~$3,990'});
  add('Yugo','GVX',yr,'Hatch',  {...yugoBase, engine:'1.3L I4', displacement:1289, power:40, price:'~$4,490'});
}

// ── Trabant (1958–1991) ───────────────────────────────────────────────────
const trabi = { engine:'2-stroke 0.6L I2', fuelType:'petrol', displacement:594, cylinders:2,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
  power:19, torque:50, weight:615, seats:4, cargo:230,
  fc:7.5, fh:7.5, fx:7.5, ft:'Petrol', acceleration:21.0, topSpeed:112 };
for (const yr of [1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990]) {
  add('Trabant','601',yr,'Limousine', {...trabi, price:`~${yr <= 1975 ? '7,600 MDN' : '9,000 MDN'}`});
  add('Trabant','601',yr,'Universal', {...trabi, weight:625, cargo:360, price:`~${yr <= 1975 ? '8,200 MDN' : '9,500 MDN'}`});
}
add('Trabant','1.1',1990,'Limousine', {
  engine:'VW 1.1L I4 4-stroke', fuelType:'petrol', displacement:1043, cylinders:4,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
  power:37, torque:86, weight:760, seats:4, cargo:230,
  fc:7.0, fh:5.5, fx:6.1, ft:'Petrol', acceleration:17.0, topSpeed:140, price:'~$8,500 MDN' });
add('Trabant','1.1',1991,'Limousine', {
  engine:'VW 1.1L I4 4-stroke', fuelType:'petrol', displacement:1043, cylinders:4,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
  power:37, torque:86, weight:760, seats:4, cargo:230,
  fc:7.0, fh:5.5, fx:6.1, ft:'Petrol', acceleration:17.0, topSpeed:140, price:'~$8,500 MDN' });

// ── Wartburg (1956–1991) ──────────────────────────────────────────────────
const wart353 = { engine:'2-stroke 0.99L I3', fuelType:'petrol', displacement:991, cylinders:3,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
  power:37, torque:75, weight:895, seats:5, cargo:310,
  fc:8.5, fh:8.5, fx:8.5, ft:'Petrol', acceleration:18.0, topSpeed:125 };
for (const yr of [1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988]) {
  add('Wartburg','353',yr,'Tourist', {...wart353, price:'~$8,500 MDN'});
  add('Wartburg','353',yr,'Kombi',   {...wart353, cargo:580, price:'~$9,200 MDN'});
}
// Wartburg Knight (1988–1991) — VW engine
const wartKnight = { engine:'VW 1.3L I4 4-stroke', fuelType:'petrol', displacement:1272, cylinders:4,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
  power:44, torque:97, weight:970, seats:5, cargo:310,
  fc:7.5, fh:6.0, fx:6.6, ft:'Petrol', acceleration:15.0, topSpeed:140 };
for (const yr of [1988,1989,1990,1991]) {
  add('Wartburg','Knight',yr,'Limousine', {...wartKnight, price:'~$10,500 MDN'});
  add('Wartburg','Knight',yr,'Estate',    {...wartKnight, cargo:580, price:'~$11,200 MDN'});
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement226.json'), JSON.stringify(out, null, 2));
console.log('supplement226.json —', Object.keys(specs).length, 'entries (Eagle/Willys/Edsel/Kaiser/Frazer/Yugo/Trabant/Wartburg/DeLorean/Tucker)');
