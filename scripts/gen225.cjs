'use strict';
// supplement225.json — Tank, LYNK & CO, Maxus, Mahindra, Daewoo
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── Tank 300 (2022–2025) ──────────────────────────────────────────────────
const t300 = { engine:'4N20 2.0T I4', fuelType:'petrol', displacement:1996, cylinders:4,
  aspiration:'BorgWarner Single-Turbo', transmission:'8-speed auto', drivetrain:'4WD',
  power:167, torque:380, weight:2100, seats:5, cargo:null,
  fc:11.5, fh:9.0, fx:10.0, ft:'Petrol', acceleration:10.2, topSpeed:185 };
for (const yr of [2022,2023,2024,2025]) {
  add('Tank','300',yr,'Lux',      {...t300, price:'~$49,990'});
  add('Tank','300',yr,'Ultra',    {...t300, price:'~$56,990'});
  add('Tank','300',yr,'PHEV',     {...t300, engine:'2.0T PHEV I4 + Electric', fuelType:'petrol plug-in hybrid',
    aspiration:'BorgWarner Single-Turbo PHEV', power:240, torque:530, weight:2250,
    fc:1.8, fh:1.8, fx:1.8, ft:'Petrol PHEV', acceleration:7.5, price:'~$65,990'});
}

// ── Tank 500 (2023–2025) ──────────────────────────────────────────────────
const t500 = { engine:'4V20 3.0T V6', fuelType:'petrol', displacement:2999, cylinders:6,
  aspiration:'BorgWarner Twin-Turbo', transmission:'9-speed auto', drivetrain:'4WD',
  power:250, torque:500, weight:2500, seats:7, cargo:null,
  fc:14.5, fh:11.0, fx:12.5, ft:'Petrol', acceleration:7.5, topSpeed:195 };
for (const yr of [2023,2024,2025]) {
  add('Tank','500',yr,'Lux',      {...t500, price:'~$72,990'});
  add('Tank','500',yr,'Ultra',    {...t500, price:'~$82,990'});
  add('Tank','500',yr,'PHEV',     {...t500, engine:'3.0T V6 PHEV + Electric', fuelType:'petrol plug-in hybrid',
    aspiration:'BorgWarner Twin-Turbo PHEV', power:348, torque:750, weight:2720,
    fc:2.2, fh:2.2, fx:2.2, ft:'Petrol PHEV', acceleration:5.5, price:'~$92,990'});
}

// ── Tank 700 (2024–2025) ──────────────────────────────────────────────────
for (const yr of [2024,2025]) {
  add('Tank','700',yr,'Hi4-T', {
    engine:'3.0T V6 + Electric', fuelType:'petrol plug-in hybrid', displacement:2999, cylinders:6,
    aspiration:'BorgWarner Twin-Turbo PHEV', transmission:'9-speed auto + e-axle', drivetrain:'4WD',
    power:430, torque:950, weight:2950, seats:6, cargo:null,
    fc:2.8, fh:2.8, fx:2.8, ft:'Petrol PHEV', acceleration:4.5, topSpeed:200, price:'~$115,990' });
}

// ── LYNK & CO 01 (2023–2025) ─────────────────────────────────────────────
const lc01 = { engine:'B4204T47 2.0T I4', fuelType:'petrol', displacement:1969, cylinders:4,
  aspiration:'BorgWarner Single-Turbo', transmission:'7-speed DCT', drivetrain:'AWD',
  power:194, torque:360, weight:1767, seats:5, cargo:402,
  fc:8.2, fh:6.5, fx:7.2, ft:'Petrol', acceleration:7.3, topSpeed:205 };
const lc01p = { engine:'1.5T PHEV I3 + Electric', fuelType:'petrol plug-in hybrid', displacement:1477, cylinders:3,
  aspiration:'IHI Single-Turbo PHEV', transmission:'7-speed DCT', drivetrain:'AWD',
  power:195, torque:430, weight:1910, seats:5, cargo:370,
  fc:1.6, fh:1.6, fx:1.6, ft:'Petrol PHEV', acceleration:5.7, topSpeed:200 };
for (const yr of [2023,2024,2025]) {
  add('LYNK & CO','01',yr,'AWD',  {...lc01,  price:'~$55,990'});
  add('LYNK & CO','01',yr,'PHEV', {...lc01p, price:'~$66,990'});
}

// ── LYNK & CO 02 (2024–2025) ─────────────────────────────────────────────
for (const yr of [2024,2025]) {
  add('LYNK & CO','02',yr,'AWD', {
    engine:'2.0T I4', fuelType:'petrol', displacement:1969, cylinders:4,
    aspiration:'BorgWarner Single-Turbo', transmission:'7-speed DCT', drivetrain:'AWD',
    power:187, torque:350, weight:1625, seats:5, cargo:360,
    fc:8.0, fh:6.2, fx:7.0, ft:'Petrol', acceleration:6.8, topSpeed:210, price:'~$52,990' });
}

// ── Maxus T60 (2017–2025) ─────────────────────────────────────────────────
const mt60 = { engine:'4JJ1-TC 2.8L Isuzu Diesel I4', fuelType:'diesel', displacement:2776, cylinders:4,
  aspiration:'Isuzu IHI VGT Diesel Turbo', transmission:'6-speed auto', drivetrain:'4WD',
  power:110, torque:360, weight:1900, seats:5, cargo:950,
  fc:9.5, fh:7.5, fx:8.3, ft:'Diesel', acceleration:12.5, topSpeed:175 };
for (const yr of [2017,2018,2019,2020,2021,2022,2023,2024,2025]) {
  add('Maxus','T60',yr,'SX',    {...mt60, transmission:'6-speed manual', price:'~$34,990'});
  add('Maxus','T60',yr,'SX+',   {...mt60, price:'~$37,990'});
  add('Maxus','T60',yr,'Luxury',{...mt60, price:'~$42,990'});
}

// ── Maxus T90 EV (2024–2025) ─────────────────────────────────────────────
for (const yr of [2024,2025]) {
  add('Maxus','T90 EV',yr,'Elite', {
    engine:'Single Motor Electric', fuelType:'electric', displacement:null, cylinders:null,
    aspiration:'Electric', transmission:'1-speed', drivetrain:'RWD',
    power:180, torque:350, weight:2385, seats:5, cargo:900,
    fc:null, fh:null, fx:null, ft:'Electric', acceleration:7.8, topSpeed:160, price:'~$69,990' });
}

// ── Maxus MIFA 9 (2023–2025) ─────────────────────────────────────────────
for (const yr of [2023,2024,2025]) {
  add('Maxus','MIFA 9',yr,'Elite', {
    engine:'Dual Motor Electric', fuelType:'electric', displacement:null, cylinders:null,
    aspiration:'Electric', transmission:'1-speed', drivetrain:'AWD',
    power:180, torque:350, weight:2575, seats:7, cargo:null,
    fc:null, fh:null, fx:null, ft:'Electric', acceleration:8.0, topSpeed:160, price:'~$79,990' });
}

// ── Mahindra XUV700 (2023–2025 AU) ───────────────────────────────────────
const xuv7p = { engine:'mStallion 2.0T I4', fuelType:'petrol', displacement:1997, cylinders:4,
  aspiration:'BorgWarner Single-Turbo', transmission:'6-speed auto', drivetrain:'AWD',
  power:149, torque:380, weight:1855, seats:7, cargo:575,
  fc:10.5, fh:8.0, fx:9.0, ft:'Petrol', acceleration:8.5, topSpeed:185 };
const xuv7d = { engine:'mHawk 2.2L Diesel I4', fuelType:'diesel', displacement:2179, cylinders:4,
  aspiration:'BorgWarner VGT Diesel Turbo', transmission:'6-speed auto', drivetrain:'AWD',
  power:138, torque:450, weight:1890, seats:7, cargo:575,
  fc:8.5, fh:6.5, fx:7.3, ft:'Diesel', acceleration:9.8, topSpeed:185 };
for (const yr of [2023,2024,2025]) {
  add('Mahindra','XUV700',yr,'AX7 Petrol',  {...xuv7p, price:'~$49,990'});
  add('Mahindra','XUV700',yr,'AX7 Diesel',  {...xuv7d, price:'~$52,990'});
  add('Mahindra','XUV700',yr,'AX7 L Petrol',{...xuv7p, price:'~$55,990'});
  add('Mahindra','XUV700',yr,'AX7 L Diesel',{...xuv7d, price:'~$58,990'});
}

// ── Mahindra Scorpio-N (2023–2025 AU) ─────────────────────────────────────
for (const yr of [2023,2024,2025]) {
  add('Mahindra','Scorpio-N',yr,'Z8 Petrol', {
    engine:'mStallion 2.0T I4', fuelType:'petrol', displacement:1997, cylinders:4,
    aspiration:'BorgWarner Single-Turbo', transmission:'6-speed auto', drivetrain:'4WD',
    power:149, torque:380, weight:2025, seats:7, cargo:null,
    fc:11.0, fh:8.5, fx:9.5, ft:'Petrol', acceleration:9.5, topSpeed:180, price:'~$44,990' });
  add('Mahindra','Scorpio-N',yr,'Z8 Diesel', {
    engine:'mHawk 2.2L Diesel I4', fuelType:'diesel', displacement:2179, cylinders:4,
    aspiration:'BorgWarner VGT Diesel Turbo', transmission:'6-speed auto', drivetrain:'4WD',
    power:118, torque:400, weight:2075, seats:7, cargo:null,
    fc:9.0, fh:7.0, fx:7.8, ft:'Diesel', acceleration:11.0, topSpeed:175, price:'~$46,990' });
}

// ── Daewoo (Australian models 1994–2006) ──────────────────────────────────
// Matiz (1998–2005)
const matiz = { engine:'0.8L I3', fuelType:'petrol', displacement:796, cylinders:3,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:37, torque:60, weight:720, seats:4, cargo:152,
  fc:7.0, fh:5.5, fx:6.1, ft:'Petrol', acceleration:17.0, topSpeed:140 };
for (const yr of [1998,1999,2000,2001,2002,2003,2004,2005]) {
  add('Daewoo','Matiz',yr,'S',  {...matiz, price:'~$10,990'});
  add('Daewoo','Matiz',yr,'SE', {...matiz, transmission:'4-speed auto', price:'~$11,990'});
}
// Lanos (1997–2003)
const lanos15 = { engine:'A15SMS 1.5L I4', fuelType:'petrol', displacement:1498, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:70, torque:130, weight:1050, seats:5, cargo:385,
  fc:9.5, fh:7.0, fx:8.0, ft:'Petrol', acceleration:12.0, topSpeed:170 };
const lanos16 = { ...lanos15, engine:'A16DMS 1.6L I4', displacement:1598, power:74, torque:140 };
for (const yr of [1997,1998,1999,2000,2001,2002,2003]) {
  add('Daewoo','Lanos',yr,'S Hatch',   {...lanos15, price:'~$12,990'});
  add('Daewoo','Lanos',yr,'SX Hatch',  {...lanos16, price:'~$15,490'});
  add('Daewoo','Lanos',yr,'SX Sedan',  {...lanos16, cargo:430, price:'~$14,990'});
}
// Nubira (1997–2003)
const nubira16 = { engine:'A16DMS 1.6L I4', fuelType:'petrol', displacement:1598, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:74, torque:140, weight:1175, seats:5, cargo:440,
  fc:10.0, fh:7.5, fx:8.5, ft:'Petrol', acceleration:11.5, topSpeed:175 };
const nubira20 = { ...nubira16, engine:'X20XE 2.0L I4', displacement:1998, power:94, torque:175, acceleration:10.0 };
for (const yr of [1997,1998,1999,2000,2001,2002,2003]) {
  add('Daewoo','Nubira',yr,'SX Sedan', {...nubira16, price:'~$16,990'});
  add('Daewoo','Nubira',yr,'CDX Sedan',{...nubira20, price:'~$20,490'});
  add('Daewoo','Nubira',yr,'SX Wagon', {...nubira16, cargo:590, price:'~$17,990'});
}
// Leganza (1997–2004)
const leganza20 = { engine:'X20XE 2.0L I4', fuelType:'petrol', displacement:1998, cylinders:4,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:94, torque:175, weight:1390, seats:5, cargo:470,
  fc:11.0, fh:8.0, fx:9.2, ft:'Petrol', acceleration:10.5, topSpeed:185 };
for (const yr of [1997,1998,1999,2000,2001,2002,2003,2004]) {
  add('Daewoo','Leganza',yr,'SX',   {...leganza20, transmission:'5-speed manual', price:'~$22,990'});
  add('Daewoo','Leganza',yr,'CDX',  {...leganza20, price:'~$26,990'});
}
// Kalos (2003–2006)
const kalos12 = { engine:'1.2L I4', fuelType:'petrol', displacement:1196, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:55, torque:100, weight:1010, seats:5, cargo:255,
  fc:8.5, fh:6.5, fx:7.3, ft:'Petrol', acceleration:13.5, topSpeed:160 };
const kalos14 = { ...kalos12, engine:'1.4L I4', displacement:1399, power:62, torque:122, acceleration:12.0 };
for (const yr of [2003,2004,2005,2006]) {
  add('Daewoo','Kalos',yr,'S Hatch',  {...kalos12, price:'~$13,990'});
  add('Daewoo','Kalos',yr,'SX Hatch', {...kalos14, price:'~$16,490'});
  add('Daewoo','Kalos',yr,'SX Sedan', {...kalos14, cargo:430, price:'~$15,990'});
}
// Lacetti (2003–2006)
const lacetti16 = { engine:'1.6L I4', fuelType:'petrol', displacement:1598, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:80, torque:148, weight:1280, seats:5, cargo:390,
  fc:10.0, fh:7.5, fx:8.5, ft:'Petrol', acceleration:11.0, topSpeed:180 };
const lacetti18 = { ...lacetti16, engine:'1.8L I4', displacement:1799, power:89, torque:174, acceleration:10.0 };
for (const yr of [2003,2004,2005,2006]) {
  add('Daewoo','Lacetti',yr,'SX Sedan',  {...lacetti16, price:'~$18,990'});
  add('Daewoo','Lacetti',yr,'CDX Sedan', {...lacetti18, price:'~$22,490'});
  add('Daewoo','Lacetti',yr,'SX Hatch',  {...lacetti16, price:'~$17,990'});
}
// Magnus (2003–2006)
for (const yr of [2003,2004,2005,2006]) {
  add('Daewoo','Magnus',yr,'CDX', {
    engine:'2.0L I4', fuelType:'petrol', displacement:1998, cylinders:4,
    aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
    power:94, torque:175, weight:1430, seats:5, cargo:465,
    fc:11.5, fh:8.5, fx:9.7, ft:'Petrol', acceleration:11.0, topSpeed:185, price:'~$26,990' });
  add('Daewoo','Magnus',yr,'CDX V6', {
    engine:'2.5L V6', fuelType:'petrol', displacement:2498, cylinders:6,
    aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
    power:131, torque:230, weight:1490, seats:5, cargo:465,
    fc:13.0, fh:9.5, fx:11.0, ft:'Petrol', acceleration:9.5, topSpeed:200, price:'~$31,990' });
}
// Tacuma (2001–2006)
for (const yr of [2001,2002,2003,2004,2005,2006]) {
  add('Daewoo','Tacuma',yr,'SX', {
    engine:'X16XE 1.6L I4', fuelType:'petrol', displacement:1598, cylinders:4,
    aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
    power:74, torque:140, weight:1370, seats:7, cargo:680,
    fc:10.5, fh:8.0, fx:9.0, ft:'Petrol', acceleration:13.0, topSpeed:170, price:'~$19,990' });
  add('Daewoo','Tacuma',yr,'CDX', {
    engine:'X20XE 2.0L I4', fuelType:'petrol', displacement:1998, cylinders:4,
    aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
    power:94, torque:175, weight:1400, seats:7, cargo:680,
    fc:11.0, fh:8.5, fx:9.5, ft:'Petrol', acceleration:11.5, topSpeed:180, price:'~$23,490' });
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement225.json'), JSON.stringify(out, null, 2));
console.log('supplement225.json —', Object.keys(specs).length, 'entries (Tank/LYNK&CO/Maxus/Mahindra/Daewoo)');
