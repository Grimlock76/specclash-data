'use strict';
// supplement220.json — GMC
const fs = require('fs'), path = require('path');

const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── Syclone (1991) ───────────────────────────────────────────────────────
add('GMC','Syclone',1991,'Syclone', {
  engine:'LB4 4.3L V6 Turbo', fuelType:'petrol', displacement:4300, cylinders:6,
  aspiration:'Garrett Single-Turbo', transmission:'4-speed auto', drivetrain:'AWD',
  power:190, torque:475, weight:1440, seats:2, cargo:null,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:4.9, topSpeed:196, price:'~$29,000' });

// ── Typhoon (1992–1993) ───────────────────────────────────────────────────
for (const yr of [1992,1993]) {
  add('GMC','Typhoon',yr,'Typhoon', {
    engine:'LB4 4.3L V6 Turbo', fuelType:'petrol', displacement:4300, cylinders:6,
    aspiration:'Garrett Single-Turbo', transmission:'4-speed auto', drivetrain:'AWD',
    power:190, torque:475, weight:1640, seats:4, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:5.3, topSpeed:190, price:'~$31,000' });
}

// ── Jimmy (1995–2005) ─────────────────────────────────────────────────────
const jimmy = { engine:'4.3L V6 Vortec', fuelType:'petrol', displacement:4300, cylinders:6,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'4WD',
  power:136, torque:312, weight:1720, seats:5, cargo:null, fc:null, fh:null, fx:null, ft:'Petrol', topSpeed:175 };
for (const yr of [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005]) {
  add('GMC','Jimmy',yr,'SL',   {...jimmy, acceleration:10.5, price:'~$29,000'});
  add('GMC','Jimmy',yr,'SLE',  {...jimmy, acceleration:10.5, price:'~$32,000'});
  add('GMC','Jimmy',yr,'SLT',  {...jimmy, acceleration:10.5, price:'~$36,000'});
}

// ── Envoy (2002–2009) ─────────────────────────────────────────────────────
const envoy42 = { engine:'L52 4.2L I6', fuelType:'petrol', displacement:4200, cylinders:6,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'4WD',
  power:165, torque:386, weight:2010, seats:5, cargo:null, fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.0, topSpeed:185 };
const envoy53 = { engine:'LM4 5.3L V8', fuelType:'petrol', displacement:5327, cylinders:8,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'4WD',
  power:224, torque:447, weight:2095, seats:5, cargo:null, fc:null, fh:null, fx:null, ft:'Petrol', acceleration:7.5, topSpeed:195 };
for (const yr of [2002,2003,2004,2005,2006,2007,2008,2009]) {
  const tx = yr >= 2006 ? '4-speed auto' : '4-speed auto';
  add('GMC','Envoy',yr,'SLE',    {...envoy42, price:'~$34,000'});
  add('GMC','Envoy',yr,'SLT',    {...envoy42, price:'~$38,000'});
  add('GMC','Envoy',yr,'Denali', {...envoy53, price:'~$46,000'});
}

// ── Terrain (2010–2025) ───────────────────────────────────────────────────
const ter25 = { engine:'2.4L I4 SIDI', fuelType:'petrol', displacement:2400, cylinders:4,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'AWD',
  power:136, torque:234, weight:1780, seats:5, cargo:831,
  fc:11.2, fh:8.0, fx:9.4, ft:'Petrol', acceleration:9.5, topSpeed:175 };
for (const yr of [2010,2011,2012,2013,2014,2015,2016,2017]) {
  add('GMC','Terrain',yr,'SLE',   {...ter25, price:'~$29,000'});
  add('GMC','Terrain',yr,'SLT',   {...ter25, price:'~$34,000'});
  add('GMC','Terrain',yr,'Denali',{...ter25, price:'~$38,000'});
}
// Gen 2 (2018+)
const ter15t = { engine:'2.0T I4', fuelType:'petrol', displacement:1998, cylinders:4,
  aspiration:'BorgWarner Single-Turbo', transmission:'9-speed auto', drivetrain:'AWD',
  power:170, torque:353, weight:1810, seats:5, cargo:822,
  fc:11.8, fh:8.5, fx:9.9, ft:'Petrol', acceleration:7.8, topSpeed:190 };
const terD = { engine:'1.6L Diesel I4', fuelType:'diesel', displacement:1598, cylinders:4,
  aspiration:'BorgWarner VGT Diesel Turbo', transmission:'6-speed auto', drivetrain:'AWD',
  power:100, torque:320, weight:1870, seats:5, cargo:822,
  fc:8.2, fh:6.5, fx:7.2, ft:'Diesel', acceleration:11.5, topSpeed:175 };
for (const yr of [2018,2019,2020,2021,2022,2023,2024,2025]) {
  add('GMC','Terrain',yr,'SLE',    {...ter15t, power:125, torque:240, aspiration:'BorgWarner Single-Turbo', engine:'1.5T I4', displacement:1490, price:'~$29,000'});
  add('GMC','Terrain',yr,'SLT',    {...ter15t, price:'~$34,000'});
  add('GMC','Terrain',yr,'AT4',    {...ter15t, price:'~$38,000'});
  add('GMC','Terrain',yr,'Denali', {...ter15t, price:'~$42,000'});
  if (yr <= 2021) add('GMC','Terrain',yr,'SLT Diesel', {...terD, price:'~$38,000'});
}

// ── Canyon (2015–2025) ────────────────────────────────────────────────────
const cyn25 = { engine:'LCV 2.5L I4', fuelType:'petrol', displacement:2500, cylinders:4,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'RWD',
  power:134, torque:305, weight:1715, seats:5, cargo:null,
  fc:11.0, fh:8.0, fx:9.2, ft:'Petrol', acceleration:10.5, topSpeed:175 };
const cyn36 = { engine:'LGZ 3.6L V6', fuelType:'petrol', displacement:3600, cylinders:6,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'4WD',
  power:210, torque:353, weight:1835, seats:5, cargo:null,
  fc:13.5, fh:9.5, fx:11.2, ft:'Petrol', acceleration:7.8, topSpeed:195 };
const cyndsl = { engine:'LWN 2.8L Duramax Diesel I4', fuelType:'diesel', displacement:2800, cylinders:4,
  aspiration:'BorgWarner VGT Diesel Turbo', transmission:'6-speed auto', drivetrain:'4WD',
  power:147, torque:500, weight:1895, seats:5, cargo:null,
  fc:10.0, fh:7.8, fx:8.7, ft:'Diesel', acceleration:9.5, topSpeed:180 };
for (const yr of [2015,2016,2017,2018,2019,2020,2021,2022]) {
  add('GMC','Canyon',yr,'SL',      {...cyn25,  drivetrain:'RWD', price:'~$30,000'});
  add('GMC','Canyon',yr,'SLE',     {...cyn36,  price:'~$36,000'});
  add('GMC','Canyon',yr,'SLT',     {...cyn36,  price:'~$40,000'});
  add('GMC','Canyon',yr,'Denali',  {...cyn36,  price:'~$46,000'});
  add('GMC','Canyon',yr,'AT4',     {...cyn36,  price:'~$44,000'});
  add('GMC','Canyon',yr,'SLE Diesel',{...cyndsl, price:'~$40,000'});
  add('GMC','Canyon',yr,'Denali Diesel',{...cyndsl, price:'~$48,000'});
}
// Gen 2 Canyon (2023+)
const cyn27t = { engine:'L3B 2.7T I4', fuelType:'petrol', displacement:2700, cylinders:4,
  aspiration:'BorgWarner Single-Turbo', transmission:'8-speed auto', drivetrain:'4WD',
  power:235, torque:460, weight:1905, seats:5, cargo:null,
  fc:12.5, fh:9.0, fx:10.5, ft:'Petrol', acceleration:6.5, topSpeed:195 };
for (const yr of [2023,2024,2025]) {
  add('GMC','Canyon',yr,'SLE',    {...cyn27t, price:'~$42,000'});
  add('GMC','Canyon',yr,'SLT',    {...cyn27t, price:'~$48,000'});
  add('GMC','Canyon',yr,'AT4',    {...cyn27t, price:'~$54,000'});
  add('GMC','Canyon',yr,'AT4X',   {...cyn27t, price:'~$60,000'});
  add('GMC','Canyon',yr,'Denali', {...cyn27t, price:'~$60,000'});
}

// ── Acadia (2007–2025) ────────────────────────────────────────────────────
const aca36g1 = { engine:'LLT 3.6L V6', fuelType:'petrol', displacement:3600, cylinders:6,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'AWD',
  power:190, torque:353, weight:2040, seats:7, cargo:680,
  fc:14.0, fh:9.5, fx:11.5, ft:'Petrol', acceleration:8.5, topSpeed:185 };
for (const yr of [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]) {
  add('GMC','Acadia',yr,'SLE',    {...aca36g1, price:'~$38,000'});
  add('GMC','Acadia',yr,'SLT',    {...aca36g1, price:'~$44,000'});
  add('GMC','Acadia',yr,'Denali', {...aca36g1, price:'~$52,000'});
}
// Gen 2 (2017–2023)
const aca25 = { engine:'LYX 2.5L I4', fuelType:'petrol', displacement:2500, cylinders:4,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'FWD',
  power:136, torque:257, weight:1780, seats:7, cargo:505,
  fc:11.5, fh:8.5, fx:9.8, ft:'Petrol', acceleration:10.0, topSpeed:175 };
const aca36g2 = { engine:'LGX 3.6L V6', fuelType:'petrol', displacement:3600, cylinders:6,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'AWD',
  power:227, torque:365, weight:1860, seats:7, cargo:505,
  fc:14.5, fh:10.0, fx:12.0, ft:'Petrol', acceleration:7.2, topSpeed:195 };
for (const yr of [2017,2018,2019,2020,2021,2022,2023]) {
  add('GMC','Acadia',yr,'SLE',    {...aca25,   price:'~$38,000'});
  add('GMC','Acadia',yr,'SLT',    {...aca36g2, price:'~$46,000'});
  add('GMC','Acadia',yr,'AT4',    {...aca36g2, price:'~$50,000'});
  add('GMC','Acadia',yr,'Denali', {...aca36g2, price:'~$56,000'});
}
// Gen 3 (2024+)
const aca20t = { engine:'LSY 2.0T I4', fuelType:'petrol', displacement:1998, cylinders:4,
  aspiration:'BorgWarner Single-Turbo', transmission:'9-speed auto', drivetrain:'AWD',
  power:191, torque:350, weight:1870, seats:7, cargo:501,
  fc:12.0, fh:8.5, fx:10.0, ft:'Petrol', acceleration:7.5, topSpeed:190 };
for (const yr of [2024,2025]) {
  add('GMC','Acadia',yr,'SLE',    {...aca20t, power:141, aspiration:'NA', engine:'2.5L I4', displacement:2500, price:'~$42,000'});
  add('GMC','Acadia',yr,'SLT',    {...aca20t, price:'~$50,000'});
  add('GMC','Acadia',yr,'AT4',    {...aca20t, price:'~$55,000'});
  add('GMC','Acadia',yr,'Denali', {...aca20t, price:'~$60,000'});
}

// ── Sierra 1500 Gen 3 (2014–2018) ─────────────────────────────────────────
const si43 = { engine:'LV3 4.3L V6 EcoTec3', fuelType:'petrol', displacement:4300, cylinders:6,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'4WD',
  power:231, torque:434, weight:2020, seats:6, cargo:null,
  fc:14.5, fh:10.5, fx:12.2, ft:'Petrol', acceleration:8.5, topSpeed:180 };
const si53 = { engine:'L83 5.3L V8 EcoTec3', fuelType:'petrol', displacement:5328, cylinders:8,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'4WD',
  power:272, torque:519, weight:2115, seats:6, cargo:null,
  fc:16.5, fh:11.5, fx:13.7, ft:'Petrol', acceleration:7.2, topSpeed:185 };
const si62 = { engine:'L86 6.2L V8 EcoTec3', fuelType:'petrol', displacement:6162, cylinders:8,
  aspiration:'NA', transmission:'8-speed auto', drivetrain:'4WD',
  power:313, torque:623, weight:2145, seats:6, cargo:null,
  fc:18.5, fh:12.5, fx:15.2, ft:'Petrol', acceleration:5.8, topSpeed:195 };
for (const yr of [2014,2015,2016,2017,2018]) {
  add('GMC','Sierra 1500',yr,'SLE',    {...si43, price:'~$42,000'});
  add('GMC','Sierra 1500',yr,'SLT',    {...si53, price:'~$52,000'});
  add('GMC','Sierra 1500',yr,'Denali', {...si62, price:'~$65,000'});
}

// ── Sierra 1500 Gen 4 (2019–2025) ─────────────────────────────────────────
const si27t = { engine:'L3B 2.7T I4', fuelType:'petrol', displacement:2700, cylinders:4,
  aspiration:'BorgWarner Single-Turbo', transmission:'8-speed auto', drivetrain:'4WD',
  power:235, torque:470, weight:2020, seats:6, cargo:null,
  fc:14.0, fh:10.0, fx:11.7, ft:'Petrol', acceleration:7.5, topSpeed:180 };
const si53n = { engine:'L84 5.3L V8 EcoTec3', fuelType:'petrol', displacement:5328, cylinders:8,
  aspiration:'NA', transmission:'8-speed auto', drivetrain:'4WD',
  power:275, torque:519, weight:2095, seats:6, cargo:null,
  fc:16.5, fh:11.5, fx:13.7, ft:'Petrol', acceleration:6.8, topSpeed:190 };
const si62n = { engine:'L87 6.2L V8 EcoTec3', fuelType:'petrol', displacement:6162, cylinders:8,
  aspiration:'NA', transmission:'10-speed auto', drivetrain:'4WD',
  power:313, torque:623, weight:2165, seats:6, cargo:null,
  fc:18.5, fh:12.5, fx:15.2, ft:'Petrol', acceleration:5.6, topSpeed:200 };
const si30d = { engine:'LM2 3.0L Duramax Diesel I6', fuelType:'diesel', displacement:2996, cylinders:6,
  aspiration:'BorgWarner VGT Diesel Turbo', transmission:'10-speed auto', drivetrain:'4WD',
  power:185, torque:623, weight:2145, seats:6, cargo:null,
  fc:12.5, fh:9.5, fx:10.7, ft:'Diesel', acceleration:7.5, topSpeed:185 };
for (const yr of [2019,2020,2021,2022,2023,2024,2025]) {
  add('GMC','Sierra 1500',yr,'Regular',   {...si27t, price:'~$42,000'});
  add('GMC','Sierra 1500',yr,'SLE',       {...si27t, price:'~$48,000'});
  add('GMC','Sierra 1500',yr,'Elevation', {...si53n, price:'~$54,000'});
  add('GMC','Sierra 1500',yr,'SLT',       {...si53n, price:'~$58,000'});
  add('GMC','Sierra 1500',yr,'AT4',       {...si53n, price:'~$62,000'});
  add('GMC','Sierra 1500',yr,'Denali',    {...si62n, price:'~$72,000'});
  add('GMC','Sierra 1500',yr,'SLT Diesel',{...si30d, price:'~$58,000'});
  add('GMC','Sierra 1500',yr,'AT4 Diesel',{...si30d, price:'~$65,000'});
  if (yr >= 2022) add('GMC','Sierra 1500',yr,'Denali Ultimate',{...si62n, price:'~$80,000'});
}

// ── Yukon (2000–2025) ─────────────────────────────────────────────────────
// Gen 3 (2000–2014)
const yuk53 = { engine:'LMG 5.3L V8', fuelType:'petrol', displacement:5328, cylinders:8,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'4WD',
  power:237, torque:453, weight:2470, seats:8, cargo:1087,
  fc:18.0, fh:13.0, fx:15.2, ft:'Petrol', acceleration:8.0, topSpeed:185 };
for (const yr of [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]) {
  add('GMC','Yukon',yr,'SLE',   {...yuk53, price:'~$50,000'});
  add('GMC','Yukon',yr,'SLT',   {...yuk53, price:'~$58,000'});
  add('GMC','Yukon',yr,'Denali',{...yuk53, power:254, torque:473, price:'~$68,000'});
  add('GMC','Yukon XL',yr,'SLE',{...yuk53, weight:2610, cargo:1495, price:'~$54,000'});
  add('GMC','Yukon XL',yr,'SLT',{...yuk53, weight:2610, cargo:1495, price:'~$62,000'});
  add('GMC','Yukon XL',yr,'Denali',{...yuk53, power:254, weight:2620, cargo:1495, price:'~$72,000'});
}
// Gen 4 (2015–2020)
const yuk53g4 = { engine:'L83 5.3L V8 EcoTec3', fuelType:'petrol', displacement:5328, cylinders:8,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'4WD',
  power:272, torque:519, weight:2505, seats:8, cargo:1040,
  fc:17.5, fh:12.5, fx:14.7, ft:'Petrol', acceleration:7.5, topSpeed:185 };
const yuk62g4 = { engine:'L86 6.2L V8 EcoTec3', fuelType:'petrol', displacement:6162, cylinders:8,
  aspiration:'NA', transmission:'8-speed auto', drivetrain:'4WD',
  power:313, torque:623, weight:2545, seats:8, cargo:1040,
  fc:19.5, fh:13.5, fx:16.2, ft:'Petrol', acceleration:6.5, topSpeed:193 };
for (const yr of [2015,2016,2017,2018,2019,2020]) {
  add('GMC','Yukon',yr,'SLE',   {...yuk53g4, price:'~$58,000'});
  add('GMC','Yukon',yr,'SLT',   {...yuk53g4, price:'~$66,000'});
  add('GMC','Yukon',yr,'Denali',{...yuk62g4, price:'~$80,000'});
  add('GMC','Yukon XL',yr,'SLE',   {...yuk53g4, weight:2625, cargo:1420, price:'~$62,000'});
  add('GMC','Yukon XL',yr,'SLT',   {...yuk53g4, weight:2625, cargo:1420, price:'~$70,000'});
  add('GMC','Yukon XL',yr,'Denali',{...yuk62g4, weight:2660, cargo:1420, price:'~$86,000'});
}
// Gen 5 (2021–2025)
const yuk53g5 = { engine:'L84 5.3L V8 EcoTec3', fuelType:'petrol', displacement:5328, cylinders:8,
  aspiration:'NA', transmission:'10-speed auto', drivetrain:'4WD',
  power:275, torque:519, weight:2535, seats:7, cargo:1073,
  fc:17.5, fh:12.0, fx:14.5, ft:'Petrol', acceleration:7.2, topSpeed:190 };
const yuk62g5 = { engine:'L87 6.2L V8 EcoTec3', fuelType:'petrol', displacement:6162, cylinders:8,
  aspiration:'NA', transmission:'10-speed auto', drivetrain:'4WD',
  power:313, torque:623, weight:2575, seats:7, cargo:1073,
  fc:20.0, fh:13.5, fx:16.5, ft:'Petrol', acceleration:6.1, topSpeed:200 };
const yukD = { engine:'LM2 3.0L Duramax Diesel I6', fuelType:'diesel', displacement:2996, cylinders:6,
  aspiration:'BorgWarner VGT Diesel Turbo', transmission:'10-speed auto', drivetrain:'4WD',
  power:185, torque:623, weight:2570, seats:7, cargo:1073,
  fc:13.5, fh:9.8, fx:11.4, ft:'Diesel', acceleration:8.0, topSpeed:185 };
for (const yr of [2021,2022,2023,2024,2025]) {
  add('GMC','Yukon',yr,'SLE',    {...yuk53g5, price:'~$65,000'});
  add('GMC','Yukon',yr,'SLT',    {...yuk53g5, price:'~$72,000'});
  add('GMC','Yukon',yr,'AT4',    {...yuk53g5, price:'~$78,000'});
  add('GMC','Yukon',yr,'Denali', {...yuk62g5, price:'~$90,000'});
  add('GMC','Yukon',yr,'Denali Ultimate',{...yuk62g5, price:'~$98,000'});
  add('GMC','Yukon',yr,'SLT Diesel',{...yukD, price:'~$76,000'});
  add('GMC','Yukon XL',yr,'SLE', {...yuk53g5, weight:2640, cargo:1461, price:'~$68,000'});
  add('GMC','Yukon XL',yr,'SLT', {...yuk53g5, weight:2640, cargo:1461, price:'~$76,000'});
  add('GMC','Yukon XL',yr,'Denali',{...yuk62g5, weight:2680, cargo:1461, price:'~$95,000'});
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement220.json'), JSON.stringify(out, null, 2));
console.log('supplement220.json —', Object.keys(specs).length, 'entries (GMC)');
