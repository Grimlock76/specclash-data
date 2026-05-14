#!/usr/bin/env node
// gen14.cjs — Toyota LandCruiser 70 + MR2 (supplement14.json)
const fs   = require('fs')
const path = require('path')

const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, startYear, inc = 500) {
  return `~$${fmt(base + (year - startYear) * inc)}`
}

// ── LANDCRUISER 70 SERIES ─────────────────────────────────────────────────────
// Separate continuous-production workhorse line alongside the luxury wagon series

// HZJ75 / FZJ75 (1984–1998)  1HZ diesel 4.2L  workhorse era
for (let y = 1984; y <= 1998; y++) {
  specs[`Toyota|LandCruiser 70|${y}|Workmate`] = {
    en: '1HZ 4.2L diesel inline-6', di: '4.2L', cy: '6',
    hp: '96 kW (129 hp)', tq: '300 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~14.5 sec', qm: '~20.5 sec', ts: '~150 km/h',
    fc: '13.5L', fh: '10.5L', fx: '16.0L', ft: 'Diesel',
    wt: '1,900 kg', se: '3', ca: '~1,800 L',
    pr: price(22990, y, 1984, 700)
  }
}

// HZJ78 / HZJ79 (1999–2007)  1HZ diesel + GX trim added
for (let y = 1999; y <= 2006; y++) {
  specs[`Toyota|LandCruiser 70|${y}|Workmate`] = {
    en: '1HZ 4.2L diesel inline-6', di: '4.2L', cy: '6',
    hp: '96 kW (129 hp)', tq: '300 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~14.5 sec', qm: '~20.5 sec', ts: '~150 km/h',
    fc: '13.5L', fh: '10.5L', fx: '16.0L', ft: 'Diesel',
    wt: '2,080 kg', se: '3', ca: '~1,800 L',
    pr: price(38990, y, 1999, 800)
  }
  specs[`Toyota|LandCruiser 70|${y}|GX`] = {
    en: '1HZ 4.2L diesel inline-6', di: '4.2L', cy: '6',
    hp: '96 kW (129 hp)', tq: '300 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~14.5 sec', qm: '~20.5 sec', ts: '~150 km/h',
    fc: '13.5L', fh: '10.5L', fx: '16.0L', ft: 'Diesel',
    wt: '2,120 kg', se: '8', ca: '~1,800 L',
    pr: price(45990, y, 1999, 800)
  }
}

// VDJ76 / VDJ78 / VDJ79 (2007–2016)  1VD-FTV V8 twin-turbo diesel
for (let y = 2007; y <= 2016; y++) {
  specs[`Toyota|LandCruiser 70|${y}|Workmate`] = {
    en: '1VD-FTV 4.5L V8 twin-turbo diesel', di: '4.5L', cy: '8',
    hp: '195 kW (261 hp)', tq: '650 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.8 sec', ts: '~170 km/h',
    fc: '14.0L', fh: '11.0L', fx: '17.0L', ft: 'Diesel',
    wt: '2,380 kg', se: '3', ca: '~1,800 L',
    pr: price(44990, y, 2007, 1000)
  }
  specs[`Toyota|LandCruiser 70|${y}|GX`] = {
    en: '1VD-FTV 4.5L V8 twin-turbo diesel', di: '4.5L', cy: '8',
    hp: '195 kW (261 hp)', tq: '650 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.8 sec', ts: '~170 km/h',
    fc: '14.0L', fh: '11.0L', fx: '17.0L', ft: 'Diesel',
    wt: '2,440 kg', se: '8', ca: '~1,800 L',
    pr: price(52990, y, 2007, 1000)
  }
  specs[`Toyota|LandCruiser 70|${y}|GXL`] = {
    en: '1VD-FTV 4.5L V8 twin-turbo diesel', di: '4.5L', cy: '8',
    hp: '195 kW (261 hp)', tq: '650 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.8 sec', ts: '~170 km/h',
    fc: '14.5L', fh: '11.5L', fx: '17.5L', ft: 'Diesel',
    wt: '2,465 kg', se: '8', ca: '~1,800 L',
    pr: price(58990, y, 2007, 1000)
  }
}

// GRJ76 / GRJ78 / GRJ79 (2017–2023)  1GR-FE V6 petrol (controversial AU switch)
for (let y = 2017; y <= 2023; y++) {
  specs[`Toyota|LandCruiser 70|${y}|Workmate`] = {
    en: '1GR-FE 4.0L V6 petrol', di: '4.0L', cy: '6',
    hp: '175 kW (235 hp)', tq: '376 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.5 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '15.5L', fh: '12.0L', fx: '18.5L', ft: '91 RON',
    wt: '2,375 kg', se: '3', ca: '~1,800 L',
    pr: price(52990, y, 2017, 1200)
  }
  specs[`Toyota|LandCruiser 70|${y}|GX`] = {
    en: '1GR-FE 4.0L V6 petrol', di: '4.0L', cy: '6',
    hp: '175 kW (235 hp)', tq: '376 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.5 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '15.5L', fh: '12.0L', fx: '18.5L', ft: '91 RON',
    wt: '2,430 kg', se: '8', ca: '~1,800 L',
    pr: price(58990, y, 2017, 1200)
  }
  specs[`Toyota|LandCruiser 70|${y}|GXL`] = {
    en: '1GR-FE 4.0L V6 petrol', di: '4.0L', cy: '6',
    hp: '175 kW (235 hp)', tq: '376 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.5 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '15.5L', fh: '12.0L', fx: '18.5L', ft: '91 RON',
    wt: '2,460 kg', se: '8', ca: '~1,800 L',
    pr: price(64990, y, 2017, 1200)
  }
}

// ── MR2 ──────────────────────────────────────────────────────────────────────

// AW11 (1985–1989)  4A-GE 1.6L  first-gen mid-engine
for (let y = 1985; y <= 1989; y++) {
  specs[`Toyota|MR2|${y}|MR2`] = {
    en: '4A-GE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '86 kW (115 hp)', tq: '133 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~195 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '980 kg', se: '2', ca: '175 L',
    pr: price(15990, y, 1985, 800)
  }
}

// SW20 (1989–1999)  3S-GE NA + 3S-GTE Turbo
for (let y = 1989; y <= 1999; y++) {
  specs[`Toyota|MR2|${y}|NA`] = {
    en: '3S-GE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '118 kW (158 hp)', tq: '186 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~220 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '95 RON',
    wt: '1,225 kg', se: '2', ca: '205 L',
    pr: price(28990, y, 1989, 700)
  }
  specs[`Toyota|MR2|${y}|Turbo`] = {
    en: '3S-GTE 2.0L DOHC Turbo', di: '2.0L', cy: '4',
    hp: '147 kW (197 hp)', tq: '255 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~6.5 sec', qm: '~14.8 sec', ts: '~235 km/h',
    fc: '11.0L', fh: '8.5L', fx: '13.5L', ft: '95 RON',
    wt: '1,290 kg', se: '2', ca: '205 L',
    pr: price(38990, y, 1989, 800)
  }
}

// ZZW30 Roadster (2000–2005)  1ZZ-FE 1.8L  convertible
for (let y = 2000; y <= 2005; y++) {
  specs[`Toyota|MR2|${y}|Roadster`] = {
    en: '1ZZ-FE 1.8L VVT-i', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp)', tq: '170 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~9.0 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '8.5L', fh: '6.5L', fx: '10.5L', ft: '91 RON',
    wt: '975 kg', se: '2', ca: '150 L',
    pr: price(33990, y, 2000, 500)
  }
}

// ── OUTPUT ────────────────────────────────────────────────────────────────────

fs.writeFileSync(
  path.join(__dirname, 'src/data/supplement14.json'),
  JSON.stringify({ make: 'Toyota', specs }, null, 2),
  'utf8'
)
console.log(`supplement14.json: ${Object.keys(specs).length} LC70 + MR2 specs written`)
