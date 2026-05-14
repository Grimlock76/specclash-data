#!/usr/bin/env node
// gen10.cjs — Toyota Corolla + Supra specs (supplement10.json)
const fs   = require('fs')
const path = require('path')

const specs = {}

function fmt(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
function price(base, year, startYear, inc = 500) {
  return `~$${fmt(base + (year - startYear) * inc)}`
}

// ── COROLLA ──────────────────────────────────────────────────────────────────

// AE82 / AE86 (1983–1987)  RWD era
for (let y = 1983; y <= 1987; y++) {
  specs[`Toyota|Corolla|${y}|CS`] = {
    en: '3A-U 1.5L 4-cyl', di: '1.5L', cy: '4',
    hp: '63 kW (85 hp)', tq: '120 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~13.5 sec', qm: '~19.0 sec', ts: '~152 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '960 kg', se: '5', ca: '290 L',
    pr: price(9990, y, 1983, 500)
  }
  specs[`Toyota|Corolla|${y}|SX`] = {
    en: '3A-U 1.5L 4-cyl', di: '1.5L', cy: '4',
    hp: '63 kW (85 hp)', tq: '120 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~13.5 sec', qm: '~19.0 sec', ts: '~152 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '960 kg', se: '5', ca: '290 L',
    pr: price(11990, y, 1983, 500)
  }
  specs[`Toyota|Corolla|${y}|Levin`] = {
    en: '4A-GE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '86 kW (115 hp)', tq: '133 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '185 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '940 kg', se: '4', ca: '290 L',
    pr: price(14900, y, 1983, 650)
  }
}

// AE92 (1989–1993)  first FWD Corolla in AU
for (let y = 1989; y <= 1993; y++) {
  specs[`Toyota|Corolla|${y}|CS`] = {
    en: '4A-FE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '72 kW (97 hp)', tq: '142 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '8.5L', fh: '6.2L', fx: '10.5L', ft: '91 RON',
    wt: '1,000 kg', se: '5', ca: '340 L',
    pr: price(13990, y, 1989, 500)
  }
  specs[`Toyota|Corolla|${y}|CSi`] = {
    en: '4A-FE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '72 kW (97 hp)', tq: '142 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '8.5L', fh: '6.2L', fx: '10.5L', ft: '91 RON',
    wt: '1,005 kg', se: '5', ca: '340 L',
    pr: price(15490, y, 1989, 500)
  }
  specs[`Toyota|Corolla|${y}|Seca`] = {
    en: '4A-FE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '72 kW (97 hp)', tq: '142 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '8.5L', fh: '6.2L', fx: '10.5L', ft: '91 RON',
    wt: '990 kg', se: '5', ca: '285 L',
    pr: price(15990, y, 1989, 500)
  }
}

// AE101 (1994–1998)
for (let y = 1994; y <= 1998; y++) {
  specs[`Toyota|Corolla|${y}|CS`] = {
    en: '4A-FE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '77 kW (103 hp)', tq: '142 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '1,050 kg', se: '5', ca: '350 L',
    pr: price(17490, y, 1994, 500)
  }
  specs[`Toyota|Corolla|${y}|CSi`] = {
    en: '4A-FE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '77 kW (103 hp)', tq: '142 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '1,060 kg', se: '5', ca: '350 L',
    pr: price(18990, y, 1994, 500)
  }
  // Seca gets 7A-FE 1.8L upgrade
  specs[`Toyota|Corolla|${y}|Seca`] = {
    en: '7A-FE 1.8L DOHC 16V', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp)', tq: '163 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '8.5L', fh: '6.2L', fx: '10.5L', ft: '91 RON',
    wt: '1,080 kg', se: '5', ca: '285 L',
    pr: price(21990, y, 1994, 500)
  }
}

// AE112 (1999–2001)  7A-FE across the board
for (let y = 1999; y <= 2001; y++) {
  specs[`Toyota|Corolla|${y}|CS`] = {
    en: '7A-FE 1.8L DOHC 16V', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp)', tq: '163 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~17.8 sec', ts: '~180 km/h',
    fc: '8.5L', fh: '6.2L', fx: '10.5L', ft: '91 RON',
    wt: '1,080 kg', se: '5', ca: '370 L',
    pr: price(20490, y, 1999, 500)
  }
  specs[`Toyota|Corolla|${y}|Conquest`] = {
    en: '7A-FE 1.8L DOHC 16V', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp)', tq: '163 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~17.8 sec', ts: '~180 km/h',
    fc: '8.5L', fh: '6.2L', fx: '10.5L', ft: '91 RON',
    wt: '1,085 kg', se: '5', ca: '370 L',
    pr: price(23490, y, 1999, 500)
  }
}

// ZZE122 (2002–2006)  1ZZ-FE / 2ZZ-GE Sportivo
for (let y = 2002; y <= 2006; y++) {
  specs[`Toyota|Corolla|${y}|Ascent`] = {
    en: '1ZZ-FE 1.8L VVT-i', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp)', tq: '170 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~192 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '1,175 kg', se: '5', ca: '375 L',
    pr: price(21990, y, 2002, 500)
  }
  specs[`Toyota|Corolla|${y}|Conquest`] = {
    en: '1ZZ-FE 1.8L VVT-i', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp)', tq: '170 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~192 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '1,175 kg', se: '5', ca: '375 L',
    pr: price(24490, y, 2002, 500)
  }
  specs[`Toyota|Corolla|${y}|Sportivo`] = {
    en: '2ZZ-GE 1.8L VVTL-i', di: '1.8L', cy: '4',
    hp: '141 kW (189 hp)', tq: '180 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.2 sec', ts: '~215 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '95 RON',
    wt: '1,175 kg', se: '5', ca: '285 L',
    pr: price(27990, y, 2002, 500)
  }
}

// ZRE152 (2007–2011)  2ZR-FE
for (let y = 2007; y <= 2011; y++) {
  specs[`Toyota|Corolla|${y}|Ascent`] = {
    en: '2ZR-FE 1.8L Dual VVT-i', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp)', tq: '175 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~190 km/h',
    fc: '7.5L', fh: '5.8L', fx: '9.5L', ft: '91 RON',
    wt: '1,250 kg', se: '5', ca: '270 L',
    pr: price(22990, y, 2007, 500)
  }
  specs[`Toyota|Corolla|${y}|Conquest`] = {
    en: '2ZR-FE 1.8L Dual VVT-i', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp)', tq: '175 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~190 km/h',
    fc: '7.5L', fh: '5.8L', fx: '9.5L', ft: '91 RON',
    wt: '1,255 kg', se: '5', ca: '270 L',
    pr: price(26490, y, 2007, 500)
  }
  specs[`Toyota|Corolla|${y}|Levin ZR`] = {
    en: '2ZR-FE 1.8L Dual VVT-i', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp)', tq: '175 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~190 km/h',
    fc: '7.5L', fh: '5.8L', fx: '9.5L', ft: '91 RON',
    wt: '1,265 kg', se: '5', ca: '270 L',
    pr: price(29990, y, 2007, 500)
  }
}

// ZRE182 (2012–2017)  103 kW 2ZR-FE
for (let y = 2012; y <= 2017; y++) {
  specs[`Toyota|Corolla|${y}|Ascent`] = {
    en: '2ZR-FE 1.8L Dual VVT-i', di: '1.8L', cy: '4',
    hp: '103 kW (138 hp)', tq: '175 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~195 km/h',
    fc: '7.3L', fh: '5.7L', fx: '9.0L', ft: '91 RON',
    wt: '1,260 kg', se: '5', ca: '270 L',
    pr: price(21990, y, 2012, 500)
  }
  specs[`Toyota|Corolla|${y}|SX`] = {
    en: '2ZR-FE 1.8L Dual VVT-i', di: '1.8L', cy: '4',
    hp: '103 kW (138 hp)', tq: '175 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~195 km/h',
    fc: '7.3L', fh: '5.7L', fx: '9.0L', ft: '91 RON',
    wt: '1,265 kg', se: '5', ca: '270 L',
    pr: price(25490, y, 2012, 500)
  }
  specs[`Toyota|Corolla|${y}|ZR`] = {
    en: '2ZR-FE 1.8L Dual VVT-i', di: '1.8L', cy: '4',
    hp: '103 kW (138 hp)', tq: '175 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~195 km/h',
    fc: '7.3L', fh: '5.7L', fx: '9.0L', ft: '91 RON',
    wt: '1,265 kg', se: '5', ca: '270 L',
    pr: price(29490, y, 2012, 500)
  }
}

// MZEA12 (2018–2023)  hybrid + GR Sport
for (let y = 2018; y <= 2023; y++) {
  specs[`Toyota|Corolla|${y}|Ascent Sport`] = {
    en: '2ZR-FBE 1.8L Hybrid Atkinson', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp) combined', tq: '142 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~11.2 sec', qm: '~18.5 sec', ts: '~180 km/h',
    fc: '4.2L', fh: '4.0L', fx: '4.4L', ft: '91 RON',
    wt: '1,370 kg', se: '5', ca: '217 L',
    pr: price(29990, y, 2018, 1000)
  }
  specs[`Toyota|Corolla|${y}|SX`] = {
    en: '2ZR-FBE 1.8L Hybrid Atkinson', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp) combined', tq: '142 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~11.2 sec', qm: '~18.5 sec', ts: '~180 km/h',
    fc: '4.2L', fh: '4.0L', fx: '4.4L', ft: '91 RON',
    wt: '1,375 kg', se: '5', ca: '217 L',
    pr: price(32990, y, 2018, 1000)
  }
  specs[`Toyota|Corolla|${y}|ZR`] = {
    en: '2ZR-FBE 1.8L Hybrid Atkinson', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp) combined', tq: '142 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~11.2 sec', qm: '~18.5 sec', ts: '~180 km/h',
    fc: '4.2L', fh: '4.0L', fx: '4.4L', ft: '91 RON',
    wt: '1,380 kg', se: '5', ca: '217 L',
    pr: price(35990, y, 2018, 1000)
  }
  if (y >= 2021) {
    // GR Sport: 2.0L non-hybrid M20A-FKS (non-hybrid variant)
    specs[`Toyota|Corolla|${y}|GR Sport`] = {
      en: 'M20A-FKS 2.0L Dynamic Force', di: '2.0L', cy: '4',
      hp: '125 kW (168 hp)', tq: '200 Nm',
      tx: 'CVT', dr: 'FWD',
      z1: '~8.1 sec', qm: '~16.5 sec', ts: '~200 km/h',
      fc: '7.0L', fh: '5.5L', fx: '8.5L', ft: '91 RON',
      wt: '1,330 kg', se: '5', ca: '217 L',
      pr: price(42990, y, 2021, 1000)
    }
  }
}

// ── SUPRA ─────────────────────────────────────────────────────────────────────

// A60 / MA61 (1983–1985)
for (let y = 1983; y <= 1985; y++) {
  specs[`Toyota|Supra|${y}|GL`] = {
    en: '5M-GE 3.0L DOHC inline-6', di: '3.0L', cy: '6',
    hp: '119 kW (160 hp)', tq: '255 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~210 km/h',
    fc: '13.5L', fh: '9.5L', fx: '16.0L', ft: '95 RON',
    wt: '1,395 kg', se: '4', ca: '260 L',
    pr: price(27990, y, 1983, 1000)
  }
}

// A70 / MA71 (1986–1992)  7M-GE (NA) + 7M-GTE (Turbo)
for (let y = 1986; y <= 1992; y++) {
  specs[`Toyota|Supra|${y}|SZ`] = {
    en: '7M-GE 3.0L DOHC inline-6', di: '3.0L', cy: '6',
    hp: '145 kW (194 hp)', tq: '270 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~225 km/h',
    fc: '13.5L', fh: '9.5L', fx: '16.0L', ft: '95 RON',
    wt: '1,500 kg', se: '4', ca: '260 L',
    pr: price(42000, y, 1986, 1500)
  }
  specs[`Toyota|Supra|${y}|RZ-S`] = {
    en: '7M-GTE 3.0L DOHC Turbo', di: '3.0L', cy: '6',
    hp: '173 kW (232 hp)', tq: '343 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~6.9 sec', qm: '~14.8 sec', ts: '250 km/h (limited)',
    fc: '15.0L', fh: '10.5L', fx: '18.0L', ft: '95 RON',
    wt: '1,540 kg', se: '4', ca: '260 L',
    pr: price(48000, y, 1986, 1500)
  }
}

// A80 / JZA80 (1993–1998)  2JZ-GE + 2JZ-GTE
for (let y = 1993; y <= 1998; y++) {
  specs[`Toyota|Supra|${y}|RZ`] = {
    en: '2JZ-GE 3.0L DOHC inline-6', di: '3.0L', cy: '6',
    hp: '171 kW (229 hp)', tq: '280 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~7.0 sec', qm: '~15.2 sec', ts: '~240 km/h',
    fc: '13.5L', fh: '9.5L', fx: '16.5L', ft: '95 RON',
    wt: '1,520 kg', se: '4', ca: '240 L',
    pr: price(65000, y, 1993, 2000)
  }
  specs[`Toyota|Supra|${y}|RZ Turbo`] = {
    en: '2JZ-GTE 3.0L DOHC Twin Turbo', di: '3.0L', cy: '6',
    hp: '206 kW (276 hp)', tq: '430 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '5.6 sec', qm: '14.0 sec', ts: '250 km/h (limited)',
    fc: '15.5L', fh: '11.0L', fx: '18.5L', ft: '98 RON',
    wt: '1,580 kg', se: '4', ca: '240 L',
    pr: price(82000, y, 1993, 2000)
  }
}

// GR Supra / A90 (2019–2023)
for (let y = 2019; y <= 2023; y++) {
  specs[`Toyota|Supra|${y}|GTS`] = {
    en: 'B58B30M1 3.0L inline-6 Turbo', di: '3.0L', cy: '6',
    hp: '250 kW (335 hp)', tq: '500 Nm',
    tx: '8-speed auto', dr: 'RWD',
    z1: '4.3 sec', qm: '12.4 sec', ts: '250 km/h (limited)',
    fc: '9.0L', fh: '7.0L', fx: '11.0L', ft: '98 RON',
    wt: '1,520 kg', se: '2', ca: '290 L',
    pr: price(93900, y, 2019, 1500)
  }
  if (y >= 2021) {
    specs[`Toyota|Supra|${y}|GTS 2.0`] = {
      en: 'B48B20M1 2.0L inline-4 Turbo', di: '2.0L', cy: '4',
      hp: '145 kW (194 hp)', tq: '400 Nm',
      tx: '8-speed auto', dr: 'RWD',
      z1: '6.2 sec', qm: '14.5 sec', ts: '250 km/h (limited)',
      fc: '6.8L', fh: '5.5L', fx: '8.5L', ft: '95 RON',
      wt: '1,370 kg', se: '2', ca: '290 L',
      pr: price(73900, y, 2021, 1000)
    }
  }
}

// ── OUTPUT ────────────────────────────────────────────────────────────────────

fs.writeFileSync(
  path.join(__dirname, 'src/data/supplement10.json'),
  JSON.stringify({ make: 'Toyota', specs }, null, 2),
  'utf8'
)
console.log(`supplement10.json: ${Object.keys(specs).length} Toyota specs written`)
