'use strict';
// supplement230.json — NIO, Geely, Mitsuoka, Zastava, Talbot
const fs = require('fs'), path = require('path');
const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }
const ev = { fuelType:'electric', displacement:null, cylinders:null, aspiration:'Electric', ft:'Electric', fc:null, fh:null };

// ── NIO ───────────────────────────────────────────────────────────────────
for (const yr of [2018,2019,2020,2021,2022,2023,2024]) {
  add('NIO','ES8',yr,'Standard', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:400, torque:840, weight:2550, seats:7, cargo:310, fx:null,
    acceleration:4.4, topSpeed:200, price:'~$95,000' });
  add('NIO','ES8',yr,'Performance', {
    engine:'Tri-Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:480, torque:850, weight:2580, seats:7, cargo:310, fx:null,
    acceleration:3.8, topSpeed:200, price:'~$110,000' });
}
for (const yr of [2019,2020,2021,2022,2023,2024]) {
  add('NIO','ES6',yr,'Standard Range', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:320, torque:610, weight:2165, seats:5, cargo:575, fx:null,
    acceleration:4.7, topSpeed:200, price:'~$75,000' });
  add('NIO','ES6',yr,'Long Range', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:400, torque:725, weight:2245, seats:5, cargo:575, fx:null,
    acceleration:4.4, topSpeed:200, price:'~$85,000' });
}
for (const yr of [2020,2021,2022,2023,2024]) {
  add('NIO','EC6',yr,'Standard Range', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:320, torque:610, weight:2190, seats:5, cargo:400, fx:null,
    acceleration:4.7, topSpeed:200, price:'~$77,000' });
  add('NIO','EC6',yr,'Performance', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:400, torque:725, weight:2240, seats:5, cargo:400, fx:null,
    acceleration:4.4, topSpeed:200, price:'~$90,000' });
}
for (const yr of [2022,2023,2024,2025]) {
  add('NIO','ET7',yr,'Standard', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:480, torque:850, weight:2379, seats:5, cargo:450, fx:null,
    acceleration:3.9, topSpeed:200, price:'~$110,000' });
  add('NIO','ET5',yr,'Standard', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:360, torque:700, weight:2165, seats:5, cargo:386, fx:null,
    acceleration:4.0, topSpeed:200, price:'~$80,000' });
  add('NIO','ET5',yr,'Touring', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:360, torque:700, weight:2225, seats:5, cargo:600, fx:null,
    acceleration:4.0, topSpeed:200, price:'~$85,000' });
  add('NIO','EL7',yr,'Standard', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:480, torque:850, weight:2415, seats:5, cargo:579, fx:null,
    acceleration:3.9, topSpeed:200, price:'~$105,000' });
}

// ── Geely ─────────────────────────────────────────────────────────────────
for (const yr of [2019,2020,2021,2022,2023]) {
  add('Geely','Coolray',yr,'Standard', {
    engine:'JLH-3G15TD 1.5T I3', fuelType:'petrol', displacement:1477, cylinders:3,
    aspiration:'BorgWarner Single-Turbo', transmission:'7-speed DCT', drivetrain:'FWD',
    power:130, torque:255, weight:1395, seats:5, cargo:348,
    fc:7.5, fh:5.8, fx:6.5, ft:'Petrol', acceleration:8.5, topSpeed:185, price:'~$22,990' });
  add('Geely','Coolray',yr,'Sport', {
    engine:'JLH-3G15TD 1.5T I3', fuelType:'petrol', displacement:1477, cylinders:3,
    aspiration:'BorgWarner Single-Turbo', transmission:'7-speed DCT', drivetrain:'FWD',
    power:130, torque:255, weight:1420, seats:5, cargo:348,
    fc:7.8, fh:6.0, fx:6.7, ft:'Petrol', acceleration:8.5, topSpeed:185, price:'~$26,990' });
}
for (const yr of [2022,2023,2024,2025]) {
  add('Geely','Monjaro',yr,'2.0T FWD', {
    engine:'BHE 2.0T I4', fuelType:'petrol', displacement:1999, cylinders:4,
    aspiration:'BorgWarner Single-Turbo', transmission:'7-speed DCT', drivetrain:'FWD',
    power:155, torque:325, weight:1725, seats:5, cargo:452,
    fc:9.0, fh:7.0, fx:7.8, ft:'Petrol', acceleration:8.0, topSpeed:195, price:'~$35,990' });
  add('Geely','Monjaro',yr,'2.0T AWD', {
    engine:'BHE 2.0T I4', fuelType:'petrol', displacement:1999, cylinders:4,
    aspiration:'BorgWarner Single-Turbo', transmission:'8-speed auto', drivetrain:'AWD',
    power:155, torque:325, weight:1840, seats:5, cargo:452,
    fc:9.8, fh:7.5, fx:8.4, ft:'Petrol', acceleration:7.5, topSpeed:195, price:'~$42,990' });
}
for (const yr of [2023,2024,2025]) {
  add('Geely','Galaxy L7',yr,'PHEV', {
    engine:'1.5T PHEV I4 + Electric', fuelType:'petrol plug-in hybrid', displacement:1498, cylinders:4,
    aspiration:'IHI Single-Turbo PHEV', transmission:'7-speed DHT', drivetrain:'AWD',
    power:215, torque:490, weight:1850, seats:5, cargo:420,
    fc:1.2, fh:1.2, fx:1.2, ft:'Petrol PHEV', acceleration:6.5, topSpeed:190, price:'~$45,990' });
  add('Geely','Galaxy E8',yr,'Standard', {
    engine:'Dual Motor Electric', ...ev, transmission:'1-speed', drivetrain:'AWD',
    power:400, torque:700, weight:2050, seats:5, cargo:420, fx:null,
    acceleration:3.9, topSpeed:200, price:'~$58,990' });
}

// ── Mitsuoka ──────────────────────────────────────────────────────────────
for (const yr of [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]) {
  add('Mitsuoka','Galue',yr,'2.5', {
    engine:'Nissan VQ25DE 2.5L V6', fuelType:'petrol', displacement:2496, cylinders:6,
    aspiration:'NA', transmission:'5-speed auto', drivetrain:'RWD',
    power:143, torque:236, weight:1610, seats:5, cargo:380,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:10.0, topSpeed:180, price:'~$55,000' });
}
for (const yr of [2008,2009,2010,2011,2012,2013,2014,2015]) {
  add('Mitsuoka','Himiko',yr,'Roadster', {
    engine:'MZR 1.8L I4 DOHC', fuelType:'petrol', displacement:1798, cylinders:4,
    aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
    power:93, torque:167, weight:1100, seats:2, cargo:130,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.5, topSpeed:185, price:'~$45,000' });
}
for (const yr of [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]) {
  add('Mitsuoka','Rock Star',yr,'Roadster', {
    engine:'SkyActiv-G 2.0L I4', fuelType:'petrol', displacement:1998, cylinders:4,
    aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
    power:118, torque:198, weight:1100, seats:2, cargo:130,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:8.5, topSpeed:195, price:'~$50,000' });
}
for (const yr of [2006,2007,2008,2009,2010,2011,2012,2013,2014]) {
  add('Mitsuoka','Orochi',yr,'V6', {
    engine:'Camry 3.3L V6', fuelType:'petrol', displacement:3311, cylinders:6,
    aspiration:'NA', transmission:'5-speed auto', drivetrain:'FWD',
    power:176, torque:328, weight:1540, seats:2, cargo:null,
    fc:null, fh:null, fx:null, ft:'Petrol', acceleration:6.8, topSpeed:250, price:'~$95,000' });
}

// ── Zastava (non-Yugo models) ─────────────────────────────────────────────
for (const yr of [1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992]) {
  add('Zastava','101',yr,'Base', {
    engine:'Fiat 1.1L I4 OHV', fuelType:'petrol', displacement:1116, cylinders:4,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
    power:42, torque:78, weight:760, seats:5, cargo:295,
    fc:7.5, fh:6.0, fx:6.6, ft:'Petrol', acceleration:16.5, topSpeed:135, price:'~$3,200' });
}
for (const yr of [1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991]) {
  add('Zastava','128',yr,'Standard', {
    engine:'Fiat 1.3L I4 OHV', fuelType:'petrol', displacement:1290, cylinders:4,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
    power:55, torque:100, weight:840, seats:5, cargo:265,
    fc:8.0, fh:6.5, fx:7.1, ft:'Petrol', acceleration:14.5, topSpeed:148, price:'~$3,800' });
}

// ── Talbot ────────────────────────────────────────────────────────────────
for (const yr of [1978,1979,1980,1981,1982,1983,1984,1985,1986]) {
  add('Talbot','Horizon',yr,'GL', {
    engine:'1.3L I4 OHV', fuelType:'petrol', displacement:1294, cylinders:4,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
    power:55, torque:98, weight:900, seats:5, cargo:290,
    fc:9.0, fh:7.0, fx:7.8, ft:'Petrol', acceleration:14.0, topSpeed:155, price:'~$5,500' });
  add('Talbot','Horizon',yr,'SX', {
    engine:'1.6L I4', fuelType:'petrol', displacement:1592, cylinders:4,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
    power:73, torque:126, weight:930, seats:5, cargo:290,
    fc:9.5, fh:7.5, fx:8.3, ft:'Petrol', acceleration:12.0, topSpeed:170, price:'~$6,200' });
}
for (const yr of [1975,1976,1977,1978,1979,1980,1981,1982,1983,1984]) {
  add('Talbot','Alpine',yr,'GL', {
    engine:'1.3L I4', fuelType:'petrol', displacement:1294, cylinders:4,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
    power:55, torque:98, weight:880, seats:5, cargo:285,
    fc:9.0, fh:7.0, fx:7.8, ft:'Petrol', acceleration:14.5, topSpeed:155, price:'~$4,800' });
  add('Talbot','Alpine',yr,'SX', {
    engine:'1.5L I4', fuelType:'petrol', displacement:1498, cylinders:4,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
    power:68, torque:118, weight:910, seats:5, cargo:285,
    fc:9.5, fh:7.5, fx:8.3, ft:'Petrol', acceleration:13.0, topSpeed:165, price:'~$5,500' });
}
for (const yr of [1981,1982,1983,1984,1985,1986]) {
  add('Talbot','Samba',yr,'GL', {
    engine:'1.0L I4', fuelType:'petrol', displacement:954, cylinders:4,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
    power:45, torque:72, weight:720, seats:4, cargo:205,
    fc:8.5, fh:6.8, fx:7.5, ft:'Petrol', acceleration:16.0, topSpeed:145, price:'~$5,200' });
  add('Talbot','Samba',yr,'Cabriolet', {
    engine:'1.1L I4', fuelType:'petrol', displacement:1124, cylinders:4,
    aspiration:'NA', transmission:'4-speed manual', drivetrain:'FWD',
    power:50, torque:82, weight:745, seats:4, cargo:185,
    fc:9.0, fh:7.0, fx:7.8, ft:'Petrol', acceleration:15.0, topSpeed:152, price:'~$6,800' });
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement230.json'), JSON.stringify(out, null, 2));
console.log('supplement230.json —', Object.keys(specs).length, 'entries (NIO/Geely/Mitsuoka/Zastava/Talbot)');
