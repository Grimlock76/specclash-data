#!/usr/bin/env node
// gen16.cjs — Toyota HiAce + Tarago + C-HR + Fortuner + FJ Cruiser (supplement16.json)
const fs   = require('fs')
const path = require('path')

const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, startYear, inc = 500) {
  return `~$${fmt(base + (year - startYear) * inc)}`
}

// ── HIACE ─────────────────────────────────────────────────────────────────────

// H200 (2005–2019)  2KD-FTV 2.5L diesel → 1KD-FTV 3.0L diesel
for (let y = 2005; y <= 2018; y++) {
  const diesel = y >= 2014
    ? { en: '1KD-FTV 3.0L D-4D turbo-diesel', di: '3.0L', hp: '100 kW (134 hp)', tq: '300 Nm' }
    : { en: '2KD-FTV 2.5L D-4D turbo-diesel', di: '2.5L', hp: '75 kW (101 hp)', tq: '200 Nm' }

  specs[`Toyota|HiAce|${y}|Standard`] = {
    en: diesel.en, di: diesel.di, cy: '4',
    hp: diesel.hp, tq: diesel.tq,
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.0 sec', qm: '~20.0 sec', ts: '~150 km/h',
    fc: '10.5L', fh: '8.5L', fx: '12.5L', ft: 'Diesel',
    wt: '2,085 kg', se: '3', ca: '~6,000 L (van)',
    pr: price(38990, y, 2005, 700)
  }
  specs[`Toyota|HiAce|${y}|LWB`] = {
    en: diesel.en, di: diesel.di, cy: '4',
    hp: diesel.hp, tq: diesel.tq,
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.5 sec', qm: '~20.5 sec', ts: '~148 km/h',
    fc: '11.0L', fh: '9.0L', fx: '13.0L', ft: 'Diesel',
    wt: '2,155 kg', se: '3', ca: '~7,500 L (van)',
    pr: price(43990, y, 2005, 700)
  }
  specs[`Toyota|HiAce|${y}|Commuter`] = {
    en: diesel.en, di: diesel.di, cy: '4',
    hp: diesel.hp, tq: diesel.tq,
    tx: '5-speed manual', dr: 'RWD',
    z1: '~15.0 sec', qm: '~21.0 sec', ts: '~145 km/h',
    fc: '11.5L', fh: '9.5L', fx: '13.5L', ft: 'Diesel',
    wt: '2,525 kg', se: '14', ca: '~2,000 L',
    pr: price(52990, y, 2005, 800)
  }
}

// H300 (2019–2023)  1GD-FTV 2.8L diesel
for (let y = 2019; y <= 2023; y++) {
  specs[`Toyota|HiAce|${y}|Standard`] = {
    en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4',
    hp: '150 kW (201 hp)', tq: '500 Nm',
    tx: '6-speed auto', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '9.5L', fh: '7.5L', fx: '11.5L', ft: 'Diesel',
    wt: '2,140 kg', se: '3', ca: '~6,200 L (van)',
    pr: price(49990, y, 2019, 1000)
  }
  specs[`Toyota|HiAce|${y}|LWB`] = {
    en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4',
    hp: '150 kW (201 hp)', tq: '500 Nm',
    tx: '6-speed auto', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '9.5L', fh: '7.5L', fx: '11.5L', ft: 'Diesel',
    wt: '2,230 kg', se: '3', ca: '~7,700 L (van)',
    pr: price(54990, y, 2019, 1000)
  }
  specs[`Toyota|HiAce|${y}|Commuter`] = {
    en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4',
    hp: '150 kW (201 hp)', tq: '500 Nm',
    tx: '6-speed auto', dr: 'RWD',
    z1: '~12.5 sec', qm: '~19.5 sec', ts: '~165 km/h',
    fc: '10.5L', fh: '8.5L', fx: '12.5L', ft: 'Diesel',
    wt: '2,800 kg', se: '14', ca: '~2,200 L',
    pr: price(64990, y, 2019, 1000)
  }
}

// ── TARAGO ────────────────────────────────────────────────────────────────────

// R20 (1983–1989)  2Y-U 2.0L petrol  original people mover
for (let y = 1983; y <= 1989; y++) {
  specs[`Toyota|Tarago|${y}|GLi`] = {
    en: '2Y-U 2.0L OHV 4-cyl', di: '2.0L', cy: '4',
    hp: '65 kW (87 hp)', tq: '156 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~15.0 sec', qm: '~20.5 sec', ts: '~145 km/h',
    fc: '11.0L', fh: '8.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,460 kg', se: '8', ca: '~2,000 L',
    pr: price(19990, y, 1983, 600)
  }
}

// R30 (1990–1999)  3Y-PE / 2RZ-FE  2.0L / 2.4L
for (let y = 1990; y <= 1999; y++) {
  const eng = y >= 1996
    ? { en: '2RZ-FE 2.4L DOHC 16V', di: '2.4L', hp: '100 kW (134 hp)', tq: '200 Nm' }
    : { en: '3Y-PE 2.0L OHV 4-cyl', di: '2.0L', hp: '72 kW (97 hp)', tq: '159 Nm' }

  specs[`Toyota|Tarago|${y}|GLi`] = {
    en: eng.en, di: eng.di, cy: '4',
    hp: eng.hp, tq: eng.tq,
    tx: '4-speed auto', dr: 'RWD',
    z1: '~13.5 sec', qm: '~19.5 sec', ts: '~155 km/h',
    fc: '12.0L', fh: '9.5L', fx: '14.0L', ft: '91 RON',
    wt: '1,610 kg', se: '8', ca: '~2,100 L',
    pr: price(24990, y, 1990, 600)
  }
  specs[`Toyota|Tarago|${y}|DLX`] = {
    en: eng.en, di: eng.di, cy: '4',
    hp: eng.hp, tq: eng.tq,
    tx: '4-speed auto', dr: 'RWD',
    z1: '~13.5 sec', qm: '~19.5 sec', ts: '~155 km/h',
    fc: '12.0L', fh: '9.5L', fx: '14.0L', ft: '91 RON',
    wt: '1,625 kg', se: '8', ca: '~2,100 L',
    pr: price(27990, y, 1990, 600)
  }
}

// R40 (2000–2006)  2AZ-FE 2.4L
for (let y = 2000; y <= 2006; y++) {
  specs[`Toyota|Tarago|${y}|GLi`] = {
    en: '2AZ-FE 2.4L VVT-i', di: '2.4L', cy: '4',
    hp: '120 kW (161 hp)', tq: '218 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '11.5L', fh: '9.0L', fx: '14.0L', ft: '91 RON',
    wt: '1,820 kg', se: '8', ca: '~2,300 L',
    pr: price(34990, y, 2000, 700)
  }
  specs[`Toyota|Tarago|${y}|GLX`] = {
    en: '2AZ-FE 2.4L VVT-i', di: '2.4L', cy: '4',
    hp: '120 kW (161 hp)', tq: '218 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '11.5L', fh: '9.0L', fx: '14.0L', ft: '91 RON',
    wt: '1,830 kg', se: '8', ca: '~2,300 L',
    pr: price(39990, y, 2000, 700)
  }
  specs[`Toyota|Tarago|${y}|Ultima`] = {
    en: '2AZ-FE 2.4L VVT-i', di: '2.4L', cy: '4',
    hp: '120 kW (161 hp)', tq: '218 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '11.5L', fh: '9.0L', fx: '14.0L', ft: '91 RON',
    wt: '1,840 kg', se: '8', ca: '~2,300 L',
    pr: price(45990, y, 2000, 700)
  }
}

// R50 (2006–2019)  2GR-FE V6 3.5L  final Tarago
for (let y = 2006; y <= 2019; y++) {
  specs[`Toyota|Tarago|${y}|GLi`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '333 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~9.0 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '12.5L', fh: '9.5L', fx: '15.0L', ft: '95 RON',
    wt: '2,040 kg', se: '8', ca: '~2,400 L',
    pr: price(44990, y, 2006, 800)
  }
  specs[`Toyota|Tarago|${y}|GLX`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '333 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~9.0 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '12.5L', fh: '9.5L', fx: '15.0L', ft: '95 RON',
    wt: '2,060 kg', se: '8', ca: '~2,400 L',
    pr: price(50990, y, 2006, 800)
  }
  specs[`Toyota|Tarago|${y}|Ultima`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '333 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~9.0 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '12.5L', fh: '9.5L', fx: '15.0L', ft: '95 RON',
    wt: '2,080 kg', se: '8', ca: '~2,400 L',
    pr: price(57990, y, 2006, 800)
  }
}

// ── C-HR ──────────────────────────────────────────────────────────────────────

// ZYX10 / NGX50 (2017–2021)  2ZR-FBE 1.8L Hybrid (AU = hybrid only)
for (let y = 2017; y <= 2021; y++) {
  specs[`Toyota|C-HR|${y}|GX`] = {
    en: '2ZR-FBE 1.8L Hybrid Atkinson', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp) combined', tq: '142 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~11.2 sec', qm: '~18.5 sec', ts: '~180 km/h',
    fc: '4.3L', fh: '4.0L', fx: '4.6L', ft: '91 RON',
    wt: '1,400 kg', se: '5', ca: '318 L',
    pr: price(29990, y, 2017, 500)
  }
  specs[`Toyota|C-HR|${y}|GXL`] = {
    en: '2ZR-FBE 1.8L Hybrid Atkinson', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp) combined', tq: '142 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~11.2 sec', qm: '~18.5 sec', ts: '~180 km/h',
    fc: '4.3L', fh: '4.0L', fx: '4.6L', ft: '91 RON',
    wt: '1,410 kg', se: '5', ca: '318 L',
    pr: price(33990, y, 2017, 500)
  }
  specs[`Toyota|C-HR|${y}|Koba`] = {
    en: '2ZR-FBE 1.8L Hybrid Atkinson', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp) combined', tq: '142 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~11.2 sec', qm: '~18.5 sec', ts: '~180 km/h',
    fc: '4.3L', fh: '4.0L', fx: '4.6L', ft: '91 RON',
    wt: '1,415 kg', se: '5', ca: '318 L',
    pr: price(37990, y, 2017, 500)
  }
}

// ZYX11 (2022–2023)  M20A-FXS 2.0L Hybrid
for (let y = 2022; y <= 2023; y++) {
  specs[`Toyota|C-HR|${y}|GX`] = {
    en: 'M20A-FXS 2.0L Hybrid Atkinson', di: '2.0L', cy: '4',
    hp: '112 kW (150 hp) combined', tq: '190 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~9.8 sec', qm: '~17.5 sec', ts: '~180 km/h',
    fc: '4.7L', fh: '4.3L', fx: '5.1L', ft: '91 RON',
    wt: '1,450 kg', se: '5', ca: '392 L',
    pr: price(34990, y, 2022, 1000)
  }
  specs[`Toyota|C-HR|${y}|GXL`] = {
    en: 'M20A-FXS 2.0L Hybrid Atkinson', di: '2.0L', cy: '4',
    hp: '112 kW (150 hp) combined', tq: '190 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~9.8 sec', qm: '~17.5 sec', ts: '~180 km/h',
    fc: '4.7L', fh: '4.3L', fx: '5.1L', ft: '91 RON',
    wt: '1,460 kg', se: '5', ca: '392 L',
    pr: price(38990, y, 2022, 1000)
  }
  specs[`Toyota|C-HR|${y}|Koba`] = {
    en: 'M20A-FXS 2.0L Hybrid Atkinson', di: '2.0L', cy: '4',
    hp: '112 kW (150 hp) combined', tq: '190 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~9.8 sec', qm: '~17.5 sec', ts: '~180 km/h',
    fc: '4.7L', fh: '4.3L', fx: '5.1L', ft: '91 RON',
    wt: '1,470 kg', se: '5', ca: '392 L',
    pr: price(43990, y, 2022, 1000)
  }
}

// ── FORTUNER ─────────────────────────────────────────────────────────────────

// GUN156 / GUN166 (2015–2023)  1GD-FTV 2.8L diesel + 2TR-FE 2.7L petrol
for (let y = 2015; y <= 2023; y++) {
  specs[`Toyota|Fortuner|${y}|GX`] = {
    en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4',
    hp: '130 kW (174 hp)', tq: '420 Nm',
    tx: '6-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '9.5L', fh: '7.5L', fx: '11.5L', ft: 'Diesel',
    wt: '2,025 kg', se: '7', ca: '~1,600 L',
    pr: price(43990, y, 2015, 800)
  }
  specs[`Toyota|Fortuner|${y}|GXL`] = {
    en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4',
    hp: '130 kW (174 hp)', tq: '450 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '9.5L', fh: '7.5L', fx: '11.5L', ft: 'Diesel',
    wt: '2,060 kg', se: '7', ca: '~1,600 L',
    pr: price(49990, y, 2015, 800)
  }
  specs[`Toyota|Fortuner|${y}|Crusade`] = {
    en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4',
    hp: '150 kW (201 hp)', tq: '500 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '9.8L', fh: '7.8L', fx: '12.0L', ft: 'Diesel',
    wt: '2,100 kg', se: '7', ca: '~1,600 L',
    pr: price(58990, y, 2015, 1000)
  }
}

// ── FJ CRUISER ────────────────────────────────────────────────────────────────

// GSJ15W (2011–2016 AU)  1GR-FE V6 4.0L petrol
for (let y = 2011; y <= 2016; y++) {
  specs[`Toyota|FJ Cruiser|${y}|GX`] = {
    en: '1GR-FE 4.0L V6 petrol', di: '4.0L', cy: '6',
    hp: '175 kW (235 hp)', tq: '376 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '14.0L', fh: '11.0L', fx: '17.0L', ft: '91 RON',
    wt: '2,009 kg', se: '5', ca: '~900 L',
    pr: price(49990, y, 2011, 500)
  }
}

// ── OUTPUT ────────────────────────────────────────────────────────────────────

fs.writeFileSync(
  path.join(__dirname, 'src/data/supplement16.json'),
  JSON.stringify({ make: 'Toyota', specs }, null, 2),
  'utf8'
)
console.log(`supplement16.json: ${Object.keys(specs).length} HiAce + Tarago + C-HR + Fortuner + FJ Cruiser specs written`)
