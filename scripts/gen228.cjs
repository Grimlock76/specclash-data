'use strict';
// supplement228.json — Shelby, Imperial, Rambler
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── Shelby Cobra (1962–1967) ──────────────────────────────────────────────
const cobra289 = { engine:'Ford 289 Hi-Po 4.7L V8', fuelType:'petrol', displacement:4727, cylinders:8,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
  power:195, torque:372, weight:862, seats:2, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.2, topSpeed:225 };
for (const yr of [1962,1963,1964,1965]) {
  add('Shelby','Cobra 289',yr,'Roadster', {...cobra289, price:`~$${yr<=1963?'5,995':'6,495'}`});
}
const cobra427 = { engine:'Ford 427 FE 7.0L V8', fuelType:'petrol', displacement:6997, cylinders:8,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
  power:298, torque:610, weight:1060, seats:2, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.1, topSpeed:260 };
const cobra427sc = { ...cobra427, engine:'Ford 427 S/C 7.0L V8 (Side Oiler)', power:332, torque:664, acceleration:3.6, topSpeed:285 };
for (const yr of [1965,1966,1967]) {
  add('Shelby','Cobra 427',yr,'Roadster',    {...cobra427,   price:'~$7,495'});
  add('Shelby','Cobra 427',yr,'S/C Roadster',{...cobra427sc, price:'~$8,995'});
}

// ── Shelby Mustang GT350 (1965–1970) ─────────────────────────────────────
const gt350_65 = { engine:'Ford K-code 289 HiPo 4.7L V8', fuelType:'petrol', displacement:4727, cylinders:8,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
  power:224, torque:380, weight:1278, seats:2, cargo:290,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:5.7, topSpeed:225 };
for (const yr of [1965,1966]) {
  add('Shelby','GT350',yr,'Fastback',  {...gt350_65, price:'~$4,547'});
  add('Shelby','GT350',yr,'R-Model',   {...gt350_65, power:243, weight:1210, acceleration:5.2, price:'~$5,950'});
  if (yr===1966) add('Shelby','GT350',yr,'Hertz (GT350H)', {...gt350_65, transmission:'3-speed auto', price:'~$4,845'});
}
const gt350_67 = { engine:'Ford 306 HiPo 5.0L V8', fuelType:'petrol', displacement:4999, cylinders:8,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
  power:224, torque:407, weight:1360, seats:4, cargo:290,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:6.0, topSpeed:218 };
for (const yr of [1967,1968,1969,1970]) {
  add('Shelby','GT350',yr,'Fastback',    {...gt350_67, price:`~$${yr<=1968?'3,995':'4,434'}`});
  add('Shelby','GT350',yr,'Convertible', {...gt350_67, weight:1390, price:`~$${yr<=1968?'4,238':'4,753'}`});
}

// ── Shelby Mustang GT500 (1967–1970) ─────────────────────────────────────
const gt500_67 = { engine:'Ford 428 Police Interceptor 7.0L V8', fuelType:'petrol', displacement:6997, cylinders:8,
  aspiration:'NA', transmission:'4-speed manual', drivetrain:'RWD',
  power:268, torque:610, weight:1478, seats:4, cargo:290,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:6.5, topSpeed:210 };
const gt500kr = { ...gt500_67, engine:'Ford 428 Cobra Jet 7.0L V8', power:268, torque:637, acceleration:6.0 };
for (const yr of [1967,1968]) {
  add('Shelby','GT500',yr,'Fastback',    {...gt500_67, price:`~$${yr===1967?'4,195':'4,317'}`});
  add('Shelby','GT500',yr,'Convertible', {...gt500_67, weight:1510, price:`~$${yr===1967?'4,438':'4,617'}`});
  if (yr===1968) {
    add('Shelby','GT500',yr,'KR Fastback',    {...gt500kr, price:'~$4,473'});
    add('Shelby','GT500',yr,'KR Convertible', {...gt500kr, weight:1530, price:'~$4,817'});
  }
}
for (const yr of [1969,1970]) {
  add('Shelby','GT500',yr,'Fastback',    {...gt500_67, price:`~$${yr===1969?'4,709':'5,027'}`});
  add('Shelby','GT500',yr,'Convertible', {...gt500_67, weight:1510, price:`~$${yr===1969?'5,027':'5,373'}`});
}

// ── Modern Shelby GT350 (2015–2020) ──────────────────────────────────────
const gt350m = { engine:'Voodoo 5.2L V8 Flat-Plane', fuelType:'petrol', displacement:5163, cylinders:8,
  aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
  power:375, torque:582, weight:1732, seats:4, cargo:290,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.3, topSpeed:277 };
for (const yr of [2015,2016,2017,2018,2019,2020]) {
  add('Shelby','GT350',yr,'Fastback',   {...gt350m, price:'~$59,150'});
  add('Shelby','GT350',yr,'R',          {...gt350m, weight:1678, acceleration:4.0, topSpeed:283, price:'~$65,650'});
}

// ── Modern Shelby GT500 (2020–2022) ──────────────────────────────────────
const gt500m = { engine:'Predator 5.2L V8 Supercharged', fuelType:'petrol', displacement:5163, cylinders:8,
  aspiration:'Eaton TVS2650 Supercharged', transmission:'7-speed DCT', drivetrain:'RWD',
  power:522, torque:868, weight:1923, seats:4, cargo:290,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:3.5, topSpeed:290 };
for (const yr of [2020,2021,2022]) {
  add('Shelby','GT500',yr,'Fastback',     {...gt500m, price:'~$75,995'});
  add('Shelby','GT500',yr,'Carbon Fiber', {...gt500m, weight:1868, acceleration:3.3, price:'~$93,580'});
}

// ── Shelby Series 1 (1999–2005) ───────────────────────────────────────────
for (const yr of [1999,2000,2001,2002,2003,2004,2005]) {
  add('Shelby','Series 1',yr,'Roadster', {
    engine:'Oldsmobile 4.0L DOHC V8', fuelType:'petrol', displacement:3995, cylinders:8,
    aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
    power:261, torque:379, weight:1110, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.4, topSpeed:230, price:'~$99,495' });
}

// ── Imperial (1955–1983) ──────────────────────────────────────────────────
const imp57 = { engine:'Hemi 392 6.4L V8', fuelType:'petrol', displacement:6424, cylinders:8,
  aspiration:'NA', transmission:'3-speed auto', drivetrain:'RWD',
  power:228, torque:549, weight:2267, seats:6, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.5, topSpeed:185 };
for (const yr of [1955,1956]) {
  add('Imperial','Newport',yr,'Hardtop', {
    engine:'FirePower 331 Hemi 5.4L V8', fuelType:'petrol', displacement:5424, cylinders:8,
    aspiration:'NA', transmission:'2-speed auto', drivetrain:'RWD',
    power:168, torque:455, weight:2132, seats:6, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:11.5, topSpeed:170, price:`~$${yr===1955?'4,483':'4,832'}`});
}
for (const yr of [1957,1958,1959,1960]) {
  add('Imperial','Crown',yr,'Hardtop',  {...imp57, price:`~$5,406`});
  add('Imperial','Crown',yr,'Convertible',{...imp57, price:`~$5,838`});
  add('Imperial','LeBaron',yr,'Hardtop',{...imp57, power:239, price:`~$6,100`});
}
const imp413 = { engine:'RB 413 6.8L V8', fuelType:'petrol', displacement:6768, cylinders:8,
  aspiration:'NA', transmission:'3-speed auto', drivetrain:'RWD',
  power:235, torque:578, weight:2245, seats:6, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.0, topSpeed:190 };
for (const yr of [1961,1962,1963,1964,1965,1966,1967,1968]) {
  add('Imperial','Crown',yr,'Hardtop',    {...imp413, price:'~$5,800'});
  add('Imperial','Crown',yr,'Convertible',{...imp413, price:'~$6,400'});
  add('Imperial','LeBaron',yr,'Hardtop',  {...imp413, power:250, price:'~$6,900'});
}
const imp440 = { engine:'RB 440 7.2L V8', fuelType:'petrol', displacement:7210, cylinders:8,
  aspiration:'NA', transmission:'3-speed auto', drivetrain:'RWD',
  power:246, torque:610, weight:2346, seats:6, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.5, topSpeed:185 };
for (const yr of [1969,1970,1971,1972,1973,1974,1975]) {
  add('Imperial','LeBaron',yr,'Hardtop',    {...imp440, price:`~$${5900+yr*200}`});
  add('Imperial','LeBaron',yr,'Convertible',{...imp440, price:`~$${6500+yr*200}`});
}
const impV8late = { engine:'360 5.9L V8', fuelType:'petrol', displacement:5898, cylinders:8,
  aspiration:'NA', transmission:'3-speed auto', drivetrain:'RWD',
  power:149, torque:380, weight:2168, seats:5, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:11.5, topSpeed:175 };
for (const yr of [1976,1977,1978,1979,1980,1981,1982,1983]) {
  add('Imperial','LeBaron',yr,'Coupe', {...impV8late, price:`~$${10000+yr*500}`});
}

// ── Rambler (1950–1969) ───────────────────────────────────────────────────
// American compact
const ramA = { engine:'3.2L I6 OHV', fuelType:'petrol', displacement:3213, cylinders:6,
  aspiration:'NA', transmission:'3-speed manual', drivetrain:'RWD',
  power:75, torque:211, weight:1260, seats:5, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:13.5, topSpeed:155 };
for (const yr of [1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969]) {
  const p = yr <= 1955 ? '1,489' : yr <= 1960 ? '1,795' : yr <= 1965 ? '1,895' : '1,995';
  add('Rambler','American',yr,'Sedan',    {...ramA, power:yr>=1965?90:75, price:`~$${p}`});
  add('Rambler','American',yr,'Wagon',    {...ramA, power:yr>=1965?90:75, weight:1320, price:`~$${parseInt(p)+200}`});
  if (yr >= 1961) add('Rambler','American',yr,'Convertible', {...ramA, power:yr>=1965?90:75, price:`~$${parseInt(p)+400}`});
}
// Classic mid-size
const ramC = { engine:'3.2L I6 OHV', fuelType:'petrol', displacement:3213, cylinders:6,
  aspiration:'NA', transmission:'3-speed auto', drivetrain:'RWD',
  power:90, torque:224, weight:1450, seats:5, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:12.0, topSpeed:165 };
const ramCV8 = { ...ramC, engine:'4.7L V8', displacement:4736, cylinders:8, power:154, torque:352, acceleration:9.5 };
for (const yr of [1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969]) {
  const p = yr <= 1960 ? '2,095' : yr <= 1965 ? '2,195' : '2,395';
  add('Rambler','Classic',yr,'Sedan',     {...ramC,   price:`~$${p}`});
  add('Rambler','Classic',yr,'Wagon',     {...ramC,   weight:1510, price:`~$${parseInt(p)+200}`});
  add('Rambler','Classic',yr,'V8 Sedan',  {...ramCV8, price:`~$${parseInt(p)+300}`});
}
// Ambassador full-size
const ramAmb = { engine:'5.6L V8 OHV', fuelType:'petrol', displacement:5621, cylinders:8,
  aspiration:'NA', transmission:'3-speed auto', drivetrain:'RWD',
  power:164, torque:407, weight:1630, seats:6, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.5, topSpeed:175 };
for (const yr of [1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969]) {
  const p = yr <= 1962 ? '2,395' : yr <= 1966 ? '2,595' : '2,795';
  add('Rambler','Ambassador',yr,'Sedan',  {...ramAmb, price:`~$${p}`});
  add('Rambler','Ambassador',yr,'Wagon',  {...ramAmb, weight:1680, price:`~$${parseInt(p)+200}`});
}
// Marlin fastback (1965–1967)
for (const yr of [1965,1966,1967]) {
  add('Rambler','Marlin',yr,'Fastback', {
    engine:'5.6L V8', fuelType:'petrol', displacement:5621, cylinders:8,
    aspiration:'NA', transmission:'3-speed auto', drivetrain:'RWD',
    power:164, torque:407, weight:1520, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.5, topSpeed:185, price:'~$3,100' });
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement228.json'), JSON.stringify(out, null, 2));
console.log('supplement228.json —', Object.keys(specs).length, 'entries (Shelby/Imperial/Rambler)');
