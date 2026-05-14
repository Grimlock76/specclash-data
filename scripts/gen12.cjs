#!/usr/bin/env node
// gen12.cjs — Toyota LandCruiser + Prado specs (supplement12.json)
const fs   = require('fs')
const path = require('path')

const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, startYear, inc = 500) {
  return `~$${fmt(base + (year - startYear) * inc)}`
}

// ── LANDCRUISER ───────────────────────────────────────────────────────────────

// FJ60 / 60 Series (1980–1987)  3F petrol + 2H diesel
for (let y = 1980; y <= 1987; y++) {
  specs[`Toyota|LandCruiser|${y}|GX`] = {
    en: '3F 4.2L OHV inline-6 petrol', di: '4.2L', cy: '6',
    hp: '107 kW (143 hp)', tq: '285 Nm',
    tx: '4-speed manual', dr: '4WD',
    z1: '~14.0 sec', qm: '~19.5 sec', ts: '~155 km/h',
    fc: '17.0L', fh: '13.0L', fx: '20.0L', ft: '91 RON',
    wt: '1,900 kg', se: '8', ca: '~2,000 L',
    pr: price(22990, y, 1980, 700)
  }
  specs[`Toyota|LandCruiser|${y}|GXL`] = {
    en: '2H 4.0L OHV inline-6 diesel', di: '4.0L', cy: '6',
    hp: '75 kW (101 hp)', tq: '217 Nm',
    tx: '4-speed manual', dr: '4WD',
    z1: '~16.0 sec', qm: '~21.0 sec', ts: '~140 km/h',
    fc: '13.5L', fh: '10.5L', fx: '16.0L', ft: 'Diesel',
    wt: '1,960 kg', se: '8', ca: '~2,000 L',
    pr: price(24990, y, 1980, 700)
  }
}

// 80 Series / HDJ80 / HZJ80 / FZJ80 (1990–1997)
for (let y = 1990; y <= 1997; y++) {
  specs[`Toyota|LandCruiser|${y}|GX`] = {
    en: '1HZ 4.2L diesel inline-6', di: '4.2L', cy: '6',
    hp: '96 kW (129 hp)', tq: '300 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~14.5 sec', qm: '~20.0 sec', ts: '~155 km/h',
    fc: '14.0L', fh: '11.0L', fx: '17.0L', ft: 'Diesel',
    wt: '2,180 kg', se: '8', ca: '~2,200 L',
    pr: price(47990, y, 1990, 900)
  }
  specs[`Toyota|LandCruiser|${y}|GXL`] = {
    en: '1HD-T 4.2L turbo-diesel inline-6', di: '4.2L', cy: '6',
    hp: '119 kW (160 hp)', tq: '380 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.5 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '14.5L', fh: '11.5L', fx: '17.5L', ft: 'Diesel',
    wt: '2,220 kg', se: '8', ca: '~2,200 L',
    pr: price(52990, y, 1990, 900)
  }
  specs[`Toyota|LandCruiser|${y}|VX`] = {
    en: '1HD-FT 4.2L turbo-diesel inline-6', di: '4.2L', cy: '6',
    hp: '147 kW (197 hp)', tq: '430 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '15.0L', fh: '12.0L', fx: '18.0L', ft: 'Diesel',
    wt: '2,280 kg', se: '8', ca: '~2,200 L',
    pr: price(61990, y, 1990, 900)
  }
}

// 100 Series / HDJ100 / UZJ100 (1998–2007)
for (let y = 1998; y <= 2007; y++) {
  specs[`Toyota|LandCruiser|${y}|GX`] = {
    en: '1HD-FTE 4.2L turbo-diesel inline-6', di: '4.2L', cy: '6',
    hp: '151 kW (202 hp)', tq: '430 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '14.5L', fh: '11.5L', fx: '17.5L', ft: 'Diesel',
    wt: '2,350 kg', se: '8', ca: '~2,300 L',
    pr: price(62990, y, 1998, 1000)
  }
  specs[`Toyota|LandCruiser|${y}|GXL`] = {
    en: '1HD-FTE 4.2L turbo-diesel inline-6', di: '4.2L', cy: '6',
    hp: '151 kW (202 hp)', tq: '430 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '14.5L', fh: '11.5L', fx: '17.5L', ft: 'Diesel',
    wt: '2,380 kg', se: '8', ca: '~2,300 L',
    pr: price(68990, y, 1998, 1000)
  }
  specs[`Toyota|LandCruiser|${y}|VX`] = {
    en: '1HD-FTE 4.2L turbo-diesel inline-6', di: '4.2L', cy: '6',
    hp: '151 kW (202 hp)', tq: '430 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '14.5L', fh: '11.5L', fx: '17.5L', ft: 'Diesel',
    wt: '2,410 kg', se: '8', ca: '~2,300 L',
    pr: price(75990, y, 1998, 1000)
  }
  specs[`Toyota|LandCruiser|${y}|Sahara`] = {
    en: '2UZ-FE 4.7L V8 petrol', di: '4.7L', cy: '8',
    hp: '170 kW (228 hp)', tq: '410 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~190 km/h',
    fc: '17.0L', fh: '13.5L', fx: '20.0L', ft: '95 RON',
    wt: '2,450 kg', se: '8', ca: '~2,300 L',
    pr: price(82990, y, 1998, 1200)
  }
}

// 200 Series / URJ202 / VDJ200 (2007–2021)  1VD-FTV V8 diesel AU spec
for (let y = 2007; y <= 2021; y++) {
  specs[`Toyota|LandCruiser|${y}|GX`] = {
    en: '1VD-FTV 4.5L V8 twin-turbo diesel', di: '4.5L', cy: '8',
    hp: '195 kW (261 hp)', tq: '650 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~195 km/h',
    fc: '13.5L', fh: '10.5L', fx: '16.5L', ft: 'Diesel',
    wt: '2,600 kg', se: '8', ca: '~2,400 L',
    pr: price(74990, y, 2007, 1500)
  }
  specs[`Toyota|LandCruiser|${y}|GXL`] = {
    en: '1VD-FTV 4.5L V8 twin-turbo diesel', di: '4.5L', cy: '8',
    hp: '195 kW (261 hp)', tq: '650 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~195 km/h',
    fc: '13.5L', fh: '10.5L', fx: '16.5L', ft: 'Diesel',
    wt: '2,650 kg', se: '8', ca: '~2,400 L',
    pr: price(82990, y, 2007, 1500)
  }
  specs[`Toyota|LandCruiser|${y}|VX`] = {
    en: '1VD-FTV 4.5L V8 twin-turbo diesel', di: '4.5L', cy: '8',
    hp: '195 kW (261 hp)', tq: '650 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~195 km/h',
    fc: '13.5L', fh: '10.5L', fx: '16.5L', ft: 'Diesel',
    wt: '2,700 kg', se: '8', ca: '~2,400 L',
    pr: price(95990, y, 2007, 1500)
  }
  specs[`Toyota|LandCruiser|${y}|Sahara`] = {
    en: '1VD-FTV 4.5L V8 twin-turbo diesel', di: '4.5L', cy: '8',
    hp: '195 kW (261 hp)', tq: '650 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~195 km/h',
    fc: '13.5L', fh: '10.5L', fx: '16.5L', ft: 'Diesel',
    wt: '2,740 kg', se: '8', ca: '~2,400 L',
    pr: price(112990, y, 2007, 1800)
  }
}

// 300 Series / VJA300 (2021–2023)  F33A-FTV 3.3L V6 twin-turbo diesel
for (let y = 2021; y <= 2023; y++) {
  specs[`Toyota|LandCruiser|${y}|GX`] = {
    en: 'F33A-FTV 3.3L V6 twin-turbo diesel', di: '3.3L', cy: '6',
    hp: '227 kW (304 hp)', tq: '700 Nm',
    tx: '10-speed auto', dr: '4WD',
    z1: '~8.2 sec', qm: '~16.2 sec', ts: '~210 km/h',
    fc: '10.5L', fh: '8.5L', fx: '13.0L', ft: 'Diesel',
    wt: '2,545 kg', se: '7', ca: '~2,200 L',
    pr: price(89990, y, 2021, 2000)
  }
  specs[`Toyota|LandCruiser|${y}|GXL`] = {
    en: 'F33A-FTV 3.3L V6 twin-turbo diesel', di: '3.3L', cy: '6',
    hp: '227 kW (304 hp)', tq: '700 Nm',
    tx: '10-speed auto', dr: '4WD',
    z1: '~8.2 sec', qm: '~16.2 sec', ts: '~210 km/h',
    fc: '10.5L', fh: '8.5L', fx: '13.0L', ft: 'Diesel',
    wt: '2,560 kg', se: '7', ca: '~2,200 L',
    pr: price(99990, y, 2021, 2000)
  }
  specs[`Toyota|LandCruiser|${y}|VX`] = {
    en: 'F33A-FTV 3.3L V6 twin-turbo diesel', di: '3.3L', cy: '6',
    hp: '227 kW (304 hp)', tq: '700 Nm',
    tx: '10-speed auto', dr: '4WD',
    z1: '~8.2 sec', qm: '~16.2 sec', ts: '~210 km/h',
    fc: '10.5L', fh: '8.5L', fx: '13.0L', ft: 'Diesel',
    wt: '2,580 kg', se: '7', ca: '~2,200 L',
    pr: price(115990, y, 2021, 2000)
  }
  specs[`Toyota|LandCruiser|${y}|Sahara`] = {
    en: 'F33A-FTV 3.3L V6 twin-turbo diesel', di: '3.3L', cy: '6',
    hp: '227 kW (304 hp)', tq: '700 Nm',
    tx: '10-speed auto', dr: '4WD',
    z1: '~8.2 sec', qm: '~16.2 sec', ts: '~210 km/h',
    fc: '10.5L', fh: '8.5L', fx: '13.0L', ft: 'Diesel',
    wt: '2,620 kg', se: '7', ca: '~2,200 L',
    pr: price(135990, y, 2021, 3000)
  }
  specs[`Toyota|LandCruiser|${y}|ZX`] = {
    en: 'F33A-FTV 3.3L V6 twin-turbo diesel', di: '3.3L', cy: '6',
    hp: '227 kW (304 hp)', tq: '700 Nm',
    tx: '10-speed auto', dr: '4WD',
    z1: '~8.2 sec', qm: '~16.2 sec', ts: '~210 km/h',
    fc: '10.5L', fh: '8.5L', fx: '13.0L', ft: 'Diesel',
    wt: '2,640 kg', se: '7', ca: '~2,200 L',
    pr: price(155990, y, 2021, 3000)
  }
}

// ── PRADO ─────────────────────────────────────────────────────────────────────

// 90 Series / KZJ90 / VZJ90 (1996–2002)  1KZ-TE diesel + 5VZ-FE V6 petrol
for (let y = 1996; y <= 2002; y++) {
  specs[`Toyota|Prado|${y}|GX`] = {
    en: '1KZ-TE 3.0L turbo-diesel 4-cyl', di: '3.0L', cy: '4',
    hp: '90 kW (121 hp)', tq: '300 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~13.0 sec', qm: '~19.0 sec', ts: '~155 km/h',
    fc: '11.5L', fh: '9.0L', fx: '14.0L', ft: 'Diesel',
    wt: '1,830 kg', se: '7', ca: '~1,700 L',
    pr: price(39990, y, 1996, 800)
  }
  specs[`Toyota|Prado|${y}|GXL`] = {
    en: '5VZ-FE 3.4L V6 petrol', di: '3.4L', cy: '6',
    hp: '140 kW (188 hp)', tq: '294 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~170 km/h',
    fc: '14.5L', fh: '11.5L', fx: '17.0L', ft: '91 RON',
    wt: '1,890 kg', se: '7', ca: '~1,700 L',
    pr: price(46990, y, 1996, 800)
  }
  specs[`Toyota|Prado|${y}|VX`] = {
    en: '5VZ-FE 3.4L V6 petrol', di: '3.4L', cy: '6',
    hp: '140 kW (188 hp)', tq: '294 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~170 km/h',
    fc: '14.5L', fh: '11.5L', fx: '17.0L', ft: '91 RON',
    wt: '1,920 kg', se: '7', ca: '~1,700 L',
    pr: price(52990, y, 1996, 800)
  }
}

// 120 Series / KDJ120 / GRJ120 (2002–2009)  1KD-FTV diesel + 1GR-FE V6 petrol
for (let y = 2002; y <= 2009; y++) {
  specs[`Toyota|Prado|${y}|GX`] = {
    en: '1KD-FTV 3.0L D-4D turbo-diesel', di: '3.0L', cy: '4',
    hp: '120 kW (161 hp)', tq: '343 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '11.0L', fh: '8.5L', fx: '13.5L', ft: 'Diesel',
    wt: '1,980 kg', se: '7', ca: '~1,800 L',
    pr: price(49990, y, 2002, 900)
  }
  specs[`Toyota|Prado|${y}|GXL`] = {
    en: '1KD-FTV 3.0L D-4D turbo-diesel', di: '3.0L', cy: '4',
    hp: '120 kW (161 hp)', tq: '343 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '11.0L', fh: '8.5L', fx: '13.5L', ft: 'Diesel',
    wt: '2,010 kg', se: '7', ca: '~1,800 L',
    pr: price(55990, y, 2002, 900)
  }
  specs[`Toyota|Prado|${y}|VX`] = {
    en: '1GR-FE 4.0L V6 petrol', di: '4.0L', cy: '6',
    hp: '175 kW (235 hp)', tq: '376 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~180 km/h',
    fc: '14.5L', fh: '11.5L', fx: '17.0L', ft: '91 RON',
    wt: '2,060 kg', se: '7', ca: '~1,800 L',
    pr: price(64990, y, 2002, 900)
  }
}

// 150 Series / KDJ150 / GRJ150 (2009–2023)  1KD-FTV → 1GD-FTV diesel + 1GR-FE V6 petrol
for (let y = 2009; y <= 2023; y++) {
  // 1KD-FTV until 2015, then 1GD-FTV from 2015 facelift — use 1GD from 2015
  const dieselEng = y >= 2015
    ? '1GD-FTV 2.8L GD turbo-diesel'
    : '1KD-FTV 3.0L D-4D turbo-diesel'
  const dieselDi  = y >= 2015 ? '2.8L' : '3.0L'
  const dieselHp  = y >= 2015 ? '130 kW (174 hp)' : '120 kW (161 hp)'
  const dieselTq  = y >= 2015 ? '450 Nm' : '343 Nm'

  specs[`Toyota|Prado|${y}|GX`] = {
    en: dieselEng, di: dieselDi, cy: '4',
    hp: dieselHp, tq: dieselTq,
    tx: '6-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '9.5L', fh: '7.5L', fx: '11.5L', ft: 'Diesel',
    wt: '2,065 kg', se: '7', ca: '~1,830 L',
    pr: price(56990, y, 2009, 1200)
  }
  specs[`Toyota|Prado|${y}|GXL`] = {
    en: dieselEng, di: dieselDi, cy: '4',
    hp: dieselHp, tq: dieselTq,
    tx: '6-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '9.5L', fh: '7.5L', fx: '11.5L', ft: 'Diesel',
    wt: '2,100 kg', se: '7', ca: '~1,830 L',
    pr: price(63990, y, 2009, 1200)
  }
  specs[`Toyota|Prado|${y}|VX`] = {
    en: '1GR-FE 4.0L V6 petrol', di: '4.0L', cy: '6',
    hp: '175 kW (235 hp)', tq: '376 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '14.0L', fh: '11.0L', fx: '16.5L', ft: '91 RON',
    wt: '2,145 kg', se: '7', ca: '~1,830 L',
    pr: price(72990, y, 2009, 1200)
  }
  specs[`Toyota|Prado|${y}|Kakadu`] = {
    en: dieselEng, di: dieselDi, cy: '4',
    hp: dieselHp, tq: dieselTq,
    tx: '6-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '9.5L', fh: '7.5L', fx: '11.5L', ft: 'Diesel',
    wt: '2,130 kg', se: '7', ca: '~1,830 L',
    pr: price(82990, y, 2009, 1500)
  }
}

// ── OUTPUT ────────────────────────────────────────────────────────────────────

fs.writeFileSync(
  path.join(__dirname, 'src/data/supplement12.json'),
  JSON.stringify({ make: 'Toyota', specs }, null, 2),
  'utf8'
)
console.log(`supplement12.json: ${Object.keys(specs).length} LandCruiser + Prado specs written`)
