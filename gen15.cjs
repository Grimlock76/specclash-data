#!/usr/bin/env node
// gen15.cjs — Toyota Yaris/Echo + Kluger + Aurion (supplement15.json)
const fs   = require('fs')
const path = require('path')

const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, startYear, inc = 500) {
  return `~$${fmt(base + (year - startYear) * inc)}`
}

// ── ECHO (NCP10/NCP12)  1999–2005  1NZ-FE 1.5L ───────────────────────────────
for (let y = 1999; y <= 2005; y++) {
  specs[`Toyota|Echo|${y}|CE`] = {
    en: '1NZ-FE 1.5L VVT-i', di: '1.5L', cy: '4',
    hp: '78 kW (105 hp)', tq: '141 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~170 km/h',
    fc: '7.0L', fh: '5.5L', fx: '8.5L', ft: '91 RON',
    wt: '870 kg', se: '5', ca: '290 L',
    pr: price(14990, y, 1999, 300)
  }
  specs[`Toyota|Echo|${y}|Sport`] = {
    en: '1NZ-FE 1.5L VVT-i', di: '1.5L', cy: '4',
    hp: '78 kW (105 hp)', tq: '141 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~170 km/h',
    fc: '7.0L', fh: '5.5L', fx: '8.5L', ft: '91 RON',
    wt: '875 kg', se: '5', ca: '290 L',
    pr: price(17490, y, 1999, 300)
  }
}

// ── YARIS NCP90 (2005–2011)  1NZ-FE 1.5L ────────────────────────────────────
for (let y = 2005; y <= 2011; y++) {
  specs[`Toyota|Yaris|${y}|YR`] = {
    en: '1NZ-FE 1.5L VVT-i', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '143 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '7.0L', fh: '5.5L', fx: '8.5L', ft: '91 RON',
    wt: '905 kg', se: '5', ca: '286 L',
    pr: price(17490, y, 2005, 300)
  }
  specs[`Toyota|Yaris|${y}|YRS`] = {
    en: '1NZ-FE 1.5L VVT-i', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '143 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '7.0L', fh: '5.5L', fx: '8.5L', ft: '91 RON',
    wt: '910 kg', se: '5', ca: '286 L',
    pr: price(20490, y, 2005, 300)
  }
}

// ── YARIS NCP130 / NHP130 (2011–2019)  1NZ-FE 1.5L ──────────────────────────
for (let y = 2011; y <= 2019; y++) {
  specs[`Toyota|Yaris|${y}|Ascent`] = {
    en: '1NZ-FE 1.5L VVT-i', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '143 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '6.8L', fh: '5.3L', fx: '8.5L', ft: '91 RON',
    wt: '1,000 kg', se: '5', ca: '286 L',
    pr: price(16990, y, 2011, 300)
  }
  specs[`Toyota|Yaris|${y}|SX`] = {
    en: '1NZ-FE 1.5L VVT-i', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '143 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '6.8L', fh: '5.3L', fx: '8.5L', ft: '91 RON',
    wt: '1,005 kg', se: '5', ca: '286 L',
    pr: price(19490, y, 2011, 300)
  }
  specs[`Toyota|Yaris|${y}|ZR`] = {
    en: '1NZ-FE 1.5L VVT-i', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '143 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '6.8L', fh: '5.3L', fx: '8.5L', ft: '91 RON',
    wt: '1,010 kg', se: '5', ca: '286 L',
    pr: price(22490, y, 2011, 300)
  }
}

// ── YARIS MXPH10 / KSP210 (2020–2023)  1.5L Hybrid ──────────────────────────
for (let y = 2020; y <= 2023; y++) {
  specs[`Toyota|Yaris|${y}|Ascent`] = {
    en: 'M15A-FXE 1.5L Hybrid Atkinson', di: '1.5L', cy: '3',
    hp: '85 kW (114 hp) combined', tq: '141 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~175 km/h',
    fc: '3.8L', fh: '3.5L', fx: '4.1L', ft: '91 RON',
    wt: '1,130 kg', se: '5', ca: '270 L',
    pr: price(22990, y, 2020, 500)
  }
  specs[`Toyota|Yaris|${y}|SX`] = {
    en: 'M15A-FXE 1.5L Hybrid Atkinson', di: '1.5L', cy: '3',
    hp: '85 kW (114 hp) combined', tq: '141 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~175 km/h',
    fc: '3.8L', fh: '3.5L', fx: '4.1L', ft: '91 RON',
    wt: '1,135 kg', se: '5', ca: '270 L',
    pr: price(25990, y, 2020, 500)
  }
  // GR Yaris: G16E-GTS 1.6L 3-cyl turbo AWD
  specs[`Toyota|Yaris|${y}|GR`] = {
    en: 'G16E-GTS 1.6L 3-cyl turbo', di: '1.6L', cy: '3',
    hp: '192 kW (257 hp)', tq: '370 Nm',
    tx: '6-speed manual', dr: 'AWD',
    z1: '5.5 sec', qm: '13.8 sec', ts: '230 km/h (limited)',
    fc: '9.0L', fh: '7.0L', fx: '11.0L', ft: '98 RON',
    wt: '1,280 kg', se: '4', ca: '170 L',
    pr: price(45990, y, 2020, 2000)
  }
}

// ── KLUGER ────────────────────────────────────────────────────────────────────

// XU20 (2003–2007)  3MZ-FE V6 3.3L  FWD/AWD
for (let y = 2003; y <= 2007; y++) {
  specs[`Toyota|Kluger|${y}|CV`] = {
    en: '3MZ-FE 3.3L V6 DOHC', di: '3.3L', cy: '6',
    hp: '159 kW (213 hp)', tq: '305 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.2 sec', ts: '~195 km/h',
    fc: '12.5L', fh: '9.5L', fx: '15.0L', ft: '95 RON',
    wt: '1,750 kg', se: '7', ca: '830 L',
    pr: price(42990, y, 2003, 800)
  }
  specs[`Toyota|Kluger|${y}|Grande`] = {
    en: '3MZ-FE 3.3L V6 DOHC', di: '3.3L', cy: '6',
    hp: '159 kW (213 hp)', tq: '305 Nm',
    tx: '5-speed auto', dr: 'AWD',
    z1: '~9.8 sec', qm: '~17.5 sec', ts: '~192 km/h',
    fc: '13.0L', fh: '10.0L', fx: '15.5L', ft: '95 RON',
    wt: '1,820 kg', se: '7', ca: '830 L',
    pr: price(50990, y, 2003, 800)
  }
}

// XU40 (2007–2013)  2GR-FE V6 3.5L
for (let y = 2007; y <= 2013; y++) {
  specs[`Toyota|Kluger|${y}|CV`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '340 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~210 km/h',
    fc: '12.0L', fh: '9.0L', fx: '14.5L', ft: '95 RON',
    wt: '1,900 kg', se: '7', ca: '860 L',
    pr: price(44990, y, 2007, 800)
  }
  specs[`Toyota|Kluger|${y}|CVX`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '340 Nm',
    tx: '5-speed auto', dr: 'AWD',
    z1: '~8.8 sec', qm: '~16.8 sec', ts: '~207 km/h',
    fc: '12.5L', fh: '9.5L', fx: '15.0L', ft: '95 RON',
    wt: '1,980 kg', se: '7', ca: '860 L',
    pr: price(50990, y, 2007, 800)
  }
  specs[`Toyota|Kluger|${y}|Grande`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '340 Nm',
    tx: '5-speed auto', dr: 'AWD',
    z1: '~8.8 sec', qm: '~16.8 sec', ts: '~207 km/h',
    fc: '12.5L', fh: '9.5L', fx: '15.0L', ft: '95 RON',
    wt: '1,995 kg', se: '7', ca: '860 L',
    pr: price(57990, y, 2007, 800)
  }
}

// XU50 (2014–2020)  2GR-FE V6 3.5L
for (let y = 2014; y <= 2020; y++) {
  specs[`Toyota|Kluger|${y}|GX`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '340 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~210 km/h',
    fc: '11.5L', fh: '8.8L', fx: '14.0L', ft: '95 RON',
    wt: '1,960 kg', se: '7', ca: '595 L',
    pr: price(45990, y, 2014, 800)
  }
  specs[`Toyota|Kluger|${y}|GXL`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '340 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.8 sec', qm: '~16.8 sec', ts: '~207 km/h',
    fc: '12.0L', fh: '9.2L', fx: '14.5L', ft: '95 RON',
    wt: '2,040 kg', se: '7', ca: '595 L',
    pr: price(52990, y, 2014, 800)
  }
  specs[`Toyota|Kluger|${y}|Grande`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '340 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.8 sec', qm: '~16.8 sec', ts: '~207 km/h',
    fc: '12.0L', fh: '9.2L', fx: '14.5L', ft: '95 RON',
    wt: '2,060 kg', se: '7', ca: '595 L',
    pr: price(59990, y, 2014, 800)
  }
}

// XU80 (2021–2023)  2.5L Hybrid AWD
for (let y = 2021; y <= 2023; y++) {
  specs[`Toyota|Kluger|${y}|GX`] = {
    en: 'A25A-FXS 2.5L Hybrid Atkinson', di: '2.5L', cy: '4',
    hp: '179 kW (240 hp) combined', tq: '221 Nm',
    tx: 'e-CVT', dr: 'AWD',
    z1: '~8.0 sec', qm: '~16.2 sec', ts: '~180 km/h',
    fc: '6.0L', fh: '5.5L', fx: '6.5L', ft: '91 RON',
    wt: '2,020 kg', se: '7', ca: '595 L',
    pr: price(54990, y, 2021, 1500)
  }
  specs[`Toyota|Kluger|${y}|GXL`] = {
    en: 'A25A-FXS 2.5L Hybrid Atkinson', di: '2.5L', cy: '4',
    hp: '179 kW (240 hp) combined', tq: '221 Nm',
    tx: 'e-CVT', dr: 'AWD',
    z1: '~8.0 sec', qm: '~16.2 sec', ts: '~180 km/h',
    fc: '6.0L', fh: '5.5L', fx: '6.5L', ft: '91 RON',
    wt: '2,040 kg', se: '7', ca: '595 L',
    pr: price(59990, y, 2021, 1500)
  }
  specs[`Toyota|Kluger|${y}|Grande`] = {
    en: 'A25A-FXS 2.5L Hybrid Atkinson', di: '2.5L', cy: '4',
    hp: '179 kW (240 hp) combined', tq: '221 Nm',
    tx: 'e-CVT', dr: 'AWD',
    z1: '~8.0 sec', qm: '~16.2 sec', ts: '~180 km/h',
    fc: '6.0L', fh: '5.5L', fx: '6.5L', ft: '91 RON',
    wt: '2,060 kg', se: '7', ca: '595 L',
    pr: price(66990, y, 2021, 1500)
  }
}

// ── AURION (AU-specific V6 sedan)  GSV40 / GSV50 ────────────────────────────

// GSV40 (2006–2012)  2GR-FE V6 3.5L
for (let y = 2006; y <= 2012; y++) {
  specs[`Toyota|Aurion|${y}|AT-X`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '337 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~225 km/h',
    fc: '11.0L', fh: '8.5L', fx: '13.5L', ft: '95 RON',
    wt: '1,580 kg', se: '5', ca: '505 L',
    pr: price(33990, y, 2006, 600)
  }
  specs[`Toyota|Aurion|${y}|Prodigy`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '337 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~225 km/h',
    fc: '11.0L', fh: '8.5L', fx: '13.5L', ft: '95 RON',
    wt: '1,590 kg', se: '5', ca: '505 L',
    pr: price(38990, y, 2006, 600)
  }
  specs[`Toyota|Aurion|${y}|Sportivo`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '337 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~7.3 sec', qm: '~15.3 sec', ts: '~230 km/h',
    fc: '11.5L', fh: '9.0L', fx: '14.0L', ft: '95 RON',
    wt: '1,585 kg', se: '5', ca: '505 L',
    pr: price(43990, y, 2006, 600)
  }
}

// GSV50 (2012–2017)  2GR-FE V6 3.5L  last AU-built Toyota
for (let y = 2012; y <= 2017; y++) {
  specs[`Toyota|Aurion|${y}|AT-X`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '337 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~225 km/h',
    fc: '10.7L', fh: '8.2L', fx: '13.2L', ft: '95 RON',
    wt: '1,575 kg', se: '5', ca: '524 L',
    pr: price(35990, y, 2012, 500)
  }
  specs[`Toyota|Aurion|${y}|Prodigy`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '337 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~225 km/h',
    fc: '10.7L', fh: '8.2L', fx: '13.2L', ft: '95 RON',
    wt: '1,585 kg', se: '5', ca: '524 L',
    pr: price(40990, y, 2012, 500)
  }
  specs[`Toyota|Aurion|${y}|Sportivo`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '337 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~7.3 sec', qm: '~15.3 sec', ts: '~230 km/h',
    fc: '11.0L', fh: '8.5L', fx: '13.5L', ft: '95 RON',
    wt: '1,580 kg', se: '5', ca: '524 L',
    pr: price(45990, y, 2012, 500)
  }
}

// ── OUTPUT ────────────────────────────────────────────────────────────────────

fs.writeFileSync(
  path.join(__dirname, 'src/data/supplement15.json'),
  JSON.stringify({ make: 'Toyota', specs }, null, 2),
  'utf8'
)
console.log(`supplement15.json: ${Object.keys(specs).length} Echo + Yaris + Kluger + Aurion specs written`)
