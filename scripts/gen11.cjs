#!/usr/bin/env node
// gen11.cjs — Toyota Camry + HiLux specs (supplement11.json)
const fs   = require('fs')
const path = require('path')

const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, startYear, inc = 500) {
  return `~$${fmt(base + (year - startYear) * inc)}`
}

// ── CAMRY ─────────────────────────────────────────────────────────────────────

// V20 / SV21 (1987–1992)  3S-FE 2.0L
for (let y = 1987; y <= 1992; y++) {
  specs[`Toyota|Camry|${y}|CS`] = {
    en: '3S-FE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '85 kW (114 hp)', tq: '167 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '1,145 kg', se: '5', ca: '450 L',
    pr: price(19990, y, 1987, 600)
  }
  specs[`Toyota|Camry|${y}|GL`] = {
    en: '3S-FE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '85 kW (114 hp)', tq: '167 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '1,165 kg', se: '5', ca: '450 L',
    pr: price(22990, y, 1987, 600)
  }
}

// V30 / SXV10 (1993–1997)  5S-FE 2.2L
for (let y = 1993; y <= 1997; y++) {
  specs[`Toyota|Camry|${y}|CS`] = {
    en: '5S-FE 2.2L DOHC 16V', di: '2.2L', cy: '4',
    hp: '97 kW (130 hp)', tq: '196 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~17.8 sec', ts: '~185 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,260 kg', se: '5', ca: '450 L',
    pr: price(22990, y, 1993, 600)
  }
  specs[`Toyota|Camry|${y}|GL`] = {
    en: '5S-FE 2.2L DOHC 16V', di: '2.2L', cy: '4',
    hp: '97 kW (130 hp)', tq: '196 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~17.8 sec', ts: '~185 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,270 kg', se: '5', ca: '450 L',
    pr: price(25490, y, 1993, 600)
  }
  specs[`Toyota|Camry|${y}|GLX`] = {
    en: '5S-FE 2.2L DOHC 16V', di: '2.2L', cy: '4',
    hp: '97 kW (130 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~185 km/h',
    fc: '10.0L', fh: '7.5L', fx: '12.0L', ft: '91 RON',
    wt: '1,285 kg', se: '5', ca: '450 L',
    pr: price(28490, y, 1993, 600)
  }
}

// SXV20 / MCV20 (1997–2001)  5S-FE 4-cyl + 1MZ-FE V6 Grande
for (let y = 1997; y <= 2001; y++) {
  specs[`Toyota|Camry|${y}|CS`] = {
    en: '5S-FE 2.2L DOHC 16V', di: '2.2L', cy: '4',
    hp: '97 kW (130 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~185 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,380 kg', se: '5', ca: '455 L',
    pr: price(25990, y, 1997, 600)
  }
  specs[`Toyota|Camry|${y}|GL`] = {
    en: '5S-FE 2.2L DOHC 16V', di: '2.2L', cy: '4',
    hp: '97 kW (130 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~185 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,390 kg', se: '5', ca: '455 L',
    pr: price(28990, y, 1997, 600)
  }
  specs[`Toyota|Camry|${y}|Grande`] = {
    en: '1MZ-FE 3.0L V6 DOHC', di: '3.0L', cy: '6',
    hp: '152 kW (204 hp)', tq: '275 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~225 km/h',
    fc: '11.5L', fh: '8.5L', fx: '13.5L', ft: '95 RON',
    wt: '1,450 kg', se: '5', ca: '455 L',
    pr: price(37990, y, 1997, 800)
  }
}

// ACV36 (2002–2006)  2AZ-FE 2.4L + 1MZ-FE V6 Grande
for (let y = 2002; y <= 2006; y++) {
  specs[`Toyota|Camry|${y}|Altise`] = {
    en: '2AZ-FE 2.4L VVT-i', di: '2.4L', cy: '4',
    hp: '120 kW (161 hp)', tq: '218 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,495 kg', se: '5', ca: '465 L',
    pr: price(29990, y, 2002, 600)
  }
  specs[`Toyota|Camry|${y}|Sportivo`] = {
    en: '2AZ-FE 2.4L VVT-i', di: '2.4L', cy: '4',
    hp: '120 kW (161 hp)', tq: '218 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,505 kg', se: '5', ca: '465 L',
    pr: price(33490, y, 2002, 600)
  }
  specs[`Toyota|Camry|${y}|Grande`] = {
    en: '1MZ-FE 3.0L V6 DOHC', di: '3.0L', cy: '6',
    hp: '152 kW (204 hp)', tq: '280 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~8.0 sec', qm: '~16.0 sec', ts: '~220 km/h',
    fc: '11.0L', fh: '8.0L', fx: '13.0L', ft: '95 RON',
    wt: '1,560 kg', se: '5', ca: '465 L',
    pr: price(38990, y, 2002, 800)
  }
}

// ACV40 (2006–2012)  2AZ-FE 2.4L + 2GR-FE V6 Atara SL
for (let y = 2006; y <= 2012; y++) {
  specs[`Toyota|Camry|${y}|Altise`] = {
    en: '2AZ-FE 2.4L Dual VVT-i', di: '2.4L', cy: '4',
    hp: '120 kW (161 hp)', tq: '221 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,520 kg', se: '5', ca: '476 L',
    pr: price(31990, y, 2006, 600)
  }
  specs[`Toyota|Camry|${y}|Atara SX`] = {
    en: '2AZ-FE 2.4L Dual VVT-i', di: '2.4L', cy: '4',
    hp: '120 kW (161 hp)', tq: '221 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,530 kg', se: '5', ca: '476 L',
    pr: price(36490, y, 2006, 600)
  }
  specs[`Toyota|Camry|${y}|Atara SL`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '333 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~230 km/h',
    fc: '11.5L', fh: '8.5L', fx: '13.5L', ft: '95 RON',
    wt: '1,600 kg', se: '5', ca: '476 L',
    pr: price(42990, y, 2006, 800)
  }
}

// ASV50 (2012–2017)  2AR-FE 2.5L + 2GR-FE V6 Atara SL
for (let y = 2012; y <= 2017; y++) {
  specs[`Toyota|Camry|${y}|Altise`] = {
    en: '2AR-FE 2.5L Dual VVT-i', di: '2.5L', cy: '4',
    hp: '133 kW (178 hp)', tq: '235 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~205 km/h',
    fc: '9.2L', fh: '7.0L', fx: '11.0L', ft: '91 RON',
    wt: '1,550 kg', se: '5', ca: '524 L',
    pr: price(31990, y, 2012, 500)
  }
  specs[`Toyota|Camry|${y}|Atara SX`] = {
    en: '2AR-FE 2.5L Dual VVT-i', di: '2.5L', cy: '4',
    hp: '133 kW (178 hp)', tq: '235 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~205 km/h',
    fc: '9.2L', fh: '7.0L', fx: '11.0L', ft: '91 RON',
    wt: '1,560 kg', se: '5', ca: '524 L',
    pr: price(35490, y, 2012, 500)
  }
  specs[`Toyota|Camry|${y}|Atara SL`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '333 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~7.0 sec', qm: '~15.2 sec', ts: '~230 km/h',
    fc: '10.8L', fh: '8.0L', fx: '13.0L', ft: '95 RON',
    wt: '1,630 kg', se: '5', ca: '524 L',
    pr: price(41990, y, 2012, 500)
  }
}

// ASV70 (2018–2023)  2.5L Hybrid — AU-only hybrid lineup
for (let y = 2018; y <= 2023; y++) {
  specs[`Toyota|Camry|${y}|Ascent`] = {
    en: '2AR-FXE 2.5L Hybrid Atkinson', di: '2.5L', cy: '4',
    hp: '160 kW (214 hp) combined', tq: '213 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.3 sec', ts: '~210 km/h',
    fc: '4.5L', fh: '4.2L', fx: '4.8L', ft: '91 RON',
    wt: '1,620 kg', se: '5', ca: '524 L',
    pr: price(33990, y, 2018, 1000)
  }
  specs[`Toyota|Camry|${y}|Ascent Sport`] = {
    en: '2AR-FXE 2.5L Hybrid Atkinson', di: '2.5L', cy: '4',
    hp: '160 kW (214 hp) combined', tq: '213 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.3 sec', ts: '~210 km/h',
    fc: '4.5L', fh: '4.2L', fx: '4.8L', ft: '91 RON',
    wt: '1,630 kg', se: '5', ca: '524 L',
    pr: price(37490, y, 2018, 1000)
  }
  specs[`Toyota|Camry|${y}|SL`] = {
    en: '2AR-FXE 2.5L Hybrid Atkinson', di: '2.5L', cy: '4',
    hp: '160 kW (214 hp) combined', tq: '213 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.3 sec', ts: '~210 km/h',
    fc: '4.5L', fh: '4.2L', fx: '4.8L', ft: '91 RON',
    wt: '1,645 kg', se: '5', ca: '524 L',
    pr: price(43990, y, 2018, 1000)
  }
}

// ── HILUX ─────────────────────────────────────────────────────────────────────

// LN50 / LN56 (1983–1987)  2L diesel 2.4L
for (let y = 1983; y <= 1987; y++) {
  specs[`Toyota|HiLux|${y}|Workmate`] = {
    en: '2L 2.4L diesel 4-cyl', di: '2.4L', cy: '4',
    hp: '59 kW (79 hp)', tq: '155 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~17.5 sec', qm: '~21.0 sec', ts: '~135 km/h',
    fc: '9.5L', fh: '7.5L', fx: '11.5L', ft: 'Diesel',
    wt: '1,180 kg', se: '3', ca: '~800 L (tray)',
    pr: price(9990, y, 1983, 500)
  }
  specs[`Toyota|HiLux|${y}|SR5`] = {
    en: '2L 2.4L diesel 4-cyl', di: '2.4L', cy: '4',
    hp: '59 kW (79 hp)', tq: '155 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~17.5 sec', qm: '~21.0 sec', ts: '~135 km/h',
    fc: '9.5L', fh: '7.5L', fx: '11.5L', ft: 'Diesel',
    wt: '1,195 kg', se: '3', ca: '~800 L (tray)',
    pr: price(12990, y, 1983, 500)
  }
}

// LN86 / LN106 (1988–1996)  3L diesel 2.8L
for (let y = 1988; y <= 1996; y++) {
  specs[`Toyota|HiLux|${y}|Workmate`] = {
    en: '3L 2.8L diesel 4-cyl', di: '2.8L', cy: '4',
    hp: '66 kW (89 hp)', tq: '167 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~17.0 sec', qm: '~20.5 sec', ts: '~140 km/h',
    fc: '10.0L', fh: '7.8L', fx: '12.0L', ft: 'Diesel',
    wt: '1,350 kg', se: '3', ca: '~850 L (tray)',
    pr: price(14990, y, 1988, 600)
  }
  specs[`Toyota|HiLux|${y}|SR5`] = {
    en: '3L 2.8L diesel 4-cyl', di: '2.8L', cy: '4',
    hp: '66 kW (89 hp)', tq: '167 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~17.0 sec', qm: '~20.5 sec', ts: '~140 km/h',
    fc: '10.0L', fh: '7.8L', fx: '12.0L', ft: 'Diesel',
    wt: '1,365 kg', se: '3', ca: '~850 L (tray)',
    pr: price(18990, y, 1988, 600)
  }
}

// RZN149 / VZN167 (1997–2004)  3RZ-FE petrol 2.7L (most common AU-spec)
for (let y = 1997; y <= 2004; y++) {
  specs[`Toyota|HiLux|${y}|Workmate`] = {
    en: '3RZ-FE 2.7L petrol 4-cyl', di: '2.7L', cy: '4',
    hp: '104 kW (139 hp)', tq: '218 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~160 km/h',
    fc: '11.5L', fh: '9.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,500 kg', se: '3', ca: '~900 L (tray)',
    pr: price(22990, y, 1997, 700)
  }
  specs[`Toyota|HiLux|${y}|SR`] = {
    en: '3RZ-FE 2.7L petrol 4-cyl', di: '2.7L', cy: '4',
    hp: '104 kW (139 hp)', tq: '218 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~160 km/h',
    fc: '11.5L', fh: '9.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,510 kg', se: '3', ca: '~900 L (tray)',
    pr: price(26490, y, 1997, 700)
  }
  specs[`Toyota|HiLux|${y}|SR5`] = {
    en: '3RZ-FE 2.7L petrol 4-cyl', di: '2.7L', cy: '4',
    hp: '104 kW (139 hp)', tq: '218 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~160 km/h',
    fc: '11.5L', fh: '9.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,525 kg', se: '5', ca: '~900 L (tray)',
    pr: price(30990, y, 1997, 700)
  }
}

// KUN16 / KUN26 (2005–2014)  1KD-FTV 3.0L D-4D turbo-diesel
for (let y = 2005; y <= 2014; y++) {
  specs[`Toyota|HiLux|${y}|Workmate`] = {
    en: '1KD-FTV 3.0L D-4D turbo-diesel', di: '3.0L', cy: '4',
    hp: '120 kW (161 hp)', tq: '343 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '10.0L', fh: '8.0L', fx: '12.0L', ft: 'Diesel',
    wt: '1,800 kg', se: '3', ca: '~950 L (tray)',
    pr: price(30990, y, 2005, 800)
  }
  specs[`Toyota|HiLux|${y}|SR`] = {
    en: '1KD-FTV 3.0L D-4D turbo-diesel', di: '3.0L', cy: '4',
    hp: '120 kW (161 hp)', tq: '343 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '10.0L', fh: '8.0L', fx: '12.0L', ft: 'Diesel',
    wt: '1,820 kg', se: '5', ca: '~950 L (tray)',
    pr: price(34490, y, 2005, 800)
  }
  specs[`Toyota|HiLux|${y}|SR5`] = {
    en: '1KD-FTV 3.0L D-4D turbo-diesel', di: '3.0L', cy: '4',
    hp: '120 kW (161 hp)', tq: '360 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '10.0L', fh: '8.0L', fx: '12.0L', ft: 'Diesel',
    wt: '1,840 kg', se: '5', ca: '~950 L (tray)',
    pr: price(39990, y, 2005, 800)
  }
}

// GUN125 / GUN126 / N80 (2015–2023)  1GD-FTV 2.8L GD turbo-diesel
for (let y = 2015; y <= 2023; y++) {
  specs[`Toyota|HiLux|${y}|Workmate`] = {
    en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4',
    hp: '130 kW (174 hp)', tq: '420 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '8.5L', fh: '7.0L', fx: '10.0L', ft: 'Diesel',
    wt: '1,900 kg', se: '3', ca: '~950 L (tray)',
    pr: price(38990, y, 2015, 1000)
  }
  specs[`Toyota|HiLux|${y}|SR`] = {
    en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4',
    hp: '130 kW (174 hp)', tq: '420 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '8.5L', fh: '7.0L', fx: '10.0L', ft: 'Diesel',
    wt: '1,920 kg', se: '5', ca: '~950 L (tray)',
    pr: price(44490, y, 2015, 1000)
  }
  specs[`Toyota|HiLux|${y}|SR5`] = {
    en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4',
    hp: '130 kW (174 hp)', tq: '420 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '8.5L', fh: '7.0L', fx: '10.0L', ft: 'Diesel',
    wt: '2,165 kg', se: '5', ca: '~950 L (tray)',
    pr: price(51990, y, 2015, 1200)
  }
  specs[`Toyota|HiLux|${y}|Rogue`] = {
    en: '1GD-FTV 2.8L GD turbo-diesel', di: '2.8L', cy: '4',
    hp: '150 kW (201 hp)', tq: '500 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~11.0 sec', qm: '~17.8 sec', ts: '~180 km/h',
    fc: '9.0L', fh: '7.5L', fx: '10.5L', ft: 'Diesel',
    wt: '2,200 kg', se: '5', ca: '~950 L (tray)',
    pr: price(61990, y, 2015, 1500)
  }
}

// ── OUTPUT ────────────────────────────────────────────────────────────────────

fs.writeFileSync(
  path.join(__dirname, 'src/data/supplement11.json'),
  JSON.stringify({ make: 'Toyota', specs }, null, 2),
  'utf8'
)
console.log(`supplement11.json: ${Object.keys(specs).length} Camry + HiLux specs written`)
