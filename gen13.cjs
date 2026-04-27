#!/usr/bin/env node
// gen13.cjs — Toyota Celica + RAV4 specs (supplement13.json)
const fs   = require('fs')
const path = require('path')

const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, startYear, inc = 500) {
  return `~$${fmt(base + (year - startYear) * inc)}`
}

// ── CELICA ────────────────────────────────────────────────────────────────────

// A60 / ST162 (1981–1985)  3T-E / 2S-E  RWD era
for (let y = 1981; y <= 1985; y++) {
  specs[`Toyota|Celica|${y}|SX`] = {
    en: '2S-E 2.0L SOHC EFI', di: '2.0L', cy: '4',
    hp: '82 kW (110 hp)', tq: '165 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,080 kg', se: '4', ca: '295 L',
    pr: price(16990, y, 1981, 700)
  }
  specs[`Toyota|Celica|${y}|GT`] = {
    en: '2S-E 2.0L SOHC EFI', di: '2.0L', cy: '4',
    hp: '82 kW (110 hp)', tq: '165 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,095 kg', se: '4', ca: '295 L',
    pr: price(19990, y, 1981, 700)
  }
}

// A70 / ST162/ST182 (1985–1993)  3S-FE FWD + 3S-GTE GT-Four AWD
for (let y = 1985; y <= 1993; y++) {
  specs[`Toyota|Celica|${y}|SX`] = {
    en: '3S-FE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '97 kW (130 hp)', tq: '176 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~195 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '1,100 kg', se: '4', ca: '285 L',
    pr: price(22990, y, 1985, 700)
  }
  specs[`Toyota|Celica|${y}|GT`] = {
    en: '3S-FE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '97 kW (130 hp)', tq: '176 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~195 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '1,115 kg', se: '4', ca: '285 L',
    pr: price(25990, y, 1985, 700)
  }
  // GT-Four AWD Turbo from 1988
  if (y >= 1988) {
    specs[`Toyota|Celica|${y}|GT-Four`] = {
      en: '3S-GTE 2.0L DOHC Turbo', di: '2.0L', cy: '4',
      hp: '147 kW (197 hp)', tq: '255 Nm',
      tx: '5-speed manual', dr: 'AWD',
      z1: '~6.2 sec', qm: '~14.5 sec', ts: '~230 km/h',
      fc: '11.0L', fh: '8.5L', fx: '13.5L', ft: '95 RON',
      wt: '1,340 kg', se: '4', ca: '285 L',
      pr: price(39990, y, 1988, 1000)
    }
  }
}

// A80 / ST202/ST205 (1993–1999)  3S-GE DOHC + no AWD turbo in AU
for (let y = 1993; y <= 1999; y++) {
  specs[`Toyota|Celica|${y}|SX`] = {
    en: '3S-FE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '97 kW (130 hp)', tq: '180 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.8 sec', ts: '~190 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '1,125 kg', se: '4', ca: '295 L',
    pr: price(26990, y, 1993, 700)
  }
  specs[`Toyota|Celica|${y}|GT`] = {
    en: '3S-GE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '118 kW (158 hp)', tq: '186 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~215 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '95 RON',
    wt: '1,145 kg', se: '4', ca: '295 L',
    pr: price(31990, y, 1993, 700)
  }
}

// T230 / ZZT230/ZZT231 (1999–2005)  1ZZ-FE + 2ZZ-GE
for (let y = 1999; y <= 2005; y++) {
  specs[`Toyota|Celica|${y}|SX`] = {
    en: '1ZZ-FE 1.8L VVT-i', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp)', tq: '165 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~200 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '1,110 kg', se: '4', ca: '205 L',
    pr: price(28990, y, 1999, 500)
  }
  specs[`Toyota|Celica|${y}|ZR`] = {
    en: '2ZZ-GE 1.8L VVTL-i', di: '1.8L', cy: '4',
    hp: '141 kW (189 hp)', tq: '180 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~7.8 sec', qm: '~15.8 sec', ts: '~220 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '95 RON',
    wt: '1,125 kg', se: '4', ca: '205 L',
    pr: price(35990, y, 1999, 500)
  }
}

// ── RAV4 ──────────────────────────────────────────────────────────────────────

// XA10 (1994–2000)  3S-FE 2.0L  first compact SUV
for (let y = 1994; y <= 2000; y++) {
  specs[`Toyota|RAV4|${y}|Base`] = {
    en: '3S-FE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '97 kW (130 hp)', tq: '176 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '10.0L', fh: '7.5L', fx: '12.0L', ft: '91 RON',
    wt: '1,200 kg', se: '5', ca: '735 L',
    pr: price(26990, y, 1994, 600)
  }
  specs[`Toyota|RAV4|${y}|Cruiser`] = {
    en: '3S-FE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '97 kW (130 hp)', tq: '176 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~12.5 sec', qm: '~18.8 sec', ts: '~162 km/h',
    fc: '10.5L', fh: '8.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,230 kg', se: '5', ca: '735 L',
    pr: price(30990, y, 1994, 600)
  }
}

// XA20 (2000–2005)  ACA20 / ACA21  2AZ-FE 2.4L
for (let y = 2000; y <= 2005; y++) {
  specs[`Toyota|RAV4|${y}|CV`] = {
    en: '2AZ-FE 2.4L VVT-i', di: '2.4L', cy: '4',
    hp: '120 kW (161 hp)', tq: '218 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~175 km/h',
    fc: '10.0L', fh: '7.5L', fx: '12.0L', ft: '91 RON',
    wt: '1,450 kg', se: '5', ca: '740 L',
    pr: price(31990, y, 2000, 600)
  }
  specs[`Toyota|RAV4|${y}|Cruiser`] = {
    en: '2AZ-FE 2.4L VVT-i', di: '2.4L', cy: '4',
    hp: '120 kW (161 hp)', tq: '218 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~10.8 sec', qm: '~17.8 sec', ts: '~172 km/h',
    fc: '10.5L', fh: '8.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,480 kg', se: '5', ca: '740 L',
    pr: price(35990, y, 2000, 600)
  }
}

// XA30 (2006–2012)  ACA38 / ACA36  2AZ-FE 2.4L + 2GR-FE V6
for (let y = 2006; y <= 2012; y++) {
  specs[`Toyota|RAV4|${y}|CV`] = {
    en: '2AZ-FE 2.4L Dual VVT-i', di: '2.4L', cy: '4',
    hp: '120 kW (161 hp)', tq: '218 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~180 km/h',
    fc: '10.5L', fh: '8.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,595 kg', se: '5', ca: '740 L',
    pr: price(33990, y, 2006, 700)
  }
  specs[`Toyota|RAV4|${y}|CV 4WD`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '333 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~8.0 sec', qm: '~16.0 sec', ts: '~200 km/h',
    fc: '12.5L', fh: '9.5L', fx: '15.0L', ft: '95 RON',
    wt: '1,780 kg', se: '5', ca: '740 L',
    pr: price(42990, y, 2006, 700)
  }
  specs[`Toyota|RAV4|${y}|Cruiser`] = {
    en: '2GR-FE 3.5L V6 DOHC', di: '3.5L', cy: '6',
    hp: '200 kW (268 hp)', tq: '333 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~8.0 sec', qm: '~16.0 sec', ts: '~200 km/h',
    fc: '12.5L', fh: '9.5L', fx: '15.0L', ft: '95 RON',
    wt: '1,800 kg', se: '5', ca: '740 L',
    pr: price(47990, y, 2006, 700)
  }
}

// XA40 (2012–2018)  ALA49 / ASA44  2AR-FE 2.5L
for (let y = 2012; y <= 2018; y++) {
  specs[`Toyota|RAV4|${y}|GX`] = {
    en: '2AR-FE 2.5L Dual VVT-i', di: '2.5L', cy: '4',
    hp: '133 kW (178 hp)', tq: '233 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '8.9L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '1,710 kg', se: '5', ca: '547 L',
    pr: price(32990, y, 2012, 700)
  }
  specs[`Toyota|RAV4|${y}|GXL`] = {
    en: '2AR-FE 2.5L Dual VVT-i', di: '2.5L', cy: '4',
    hp: '133 kW (178 hp)', tq: '233 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '8.9L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '1,720 kg', se: '5', ca: '547 L',
    pr: price(36990, y, 2012, 700)
  }
  specs[`Toyota|RAV4|${y}|Cruiser`] = {
    en: '2AR-FE 2.5L Dual VVT-i', di: '2.5L', cy: '4',
    hp: '133 kW (178 hp)', tq: '233 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '8.9L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '1,740 kg', se: '5', ca: '547 L',
    pr: price(41990, y, 2012, 700)
  }
}

// XA50 (2018–2023)  AXAH54 / AXAH52  2.5L Hybrid system
for (let y = 2018; y <= 2023; y++) {
  specs[`Toyota|RAV4|${y}|GX`] = {
    en: 'A25A-FXS 2.5L Hybrid Atkinson', di: '2.5L', cy: '4',
    hp: '163 kW (219 hp) combined', tq: '221 Nm',
    tx: 'e-CVT', dr: 'AWD',
    z1: '~8.1 sec', qm: '~16.2 sec', ts: '~180 km/h',
    fc: '5.2L', fh: '4.8L', fx: '5.6L', ft: '91 RON',
    wt: '1,905 kg', se: '5', ca: '580 L',
    pr: price(39990, y, 2018, 1000)
  }
  specs[`Toyota|RAV4|${y}|GXL`] = {
    en: 'A25A-FXS 2.5L Hybrid Atkinson', di: '2.5L', cy: '4',
    hp: '163 kW (219 hp) combined', tq: '221 Nm',
    tx: 'e-CVT', dr: 'AWD',
    z1: '~8.1 sec', qm: '~16.2 sec', ts: '~180 km/h',
    fc: '5.2L', fh: '4.8L', fx: '5.6L', ft: '91 RON',
    wt: '1,920 kg', se: '5', ca: '580 L',
    pr: price(43990, y, 2018, 1000)
  }
  specs[`Toyota|RAV4|${y}|Cruiser`] = {
    en: 'A25A-FXS 2.5L Hybrid Atkinson', di: '2.5L', cy: '4',
    hp: '163 kW (219 hp) combined', tq: '221 Nm',
    tx: 'e-CVT', dr: 'AWD',
    z1: '~8.1 sec', qm: '~16.2 sec', ts: '~180 km/h',
    fc: '5.2L', fh: '4.8L', fx: '5.6L', ft: '91 RON',
    wt: '1,940 kg', se: '5', ca: '580 L',
    pr: price(49990, y, 2018, 1000)
  }
  specs[`Toyota|RAV4|${y}|Edge`] = {
    en: 'A25A-FXS 2.5L Hybrid Atkinson', di: '2.5L', cy: '4',
    hp: '163 kW (219 hp) combined', tq: '221 Nm',
    tx: 'e-CVT', dr: 'AWD',
    z1: '~8.1 sec', qm: '~16.2 sec', ts: '~180 km/h',
    fc: '5.2L', fh: '4.8L', fx: '5.6L', ft: '91 RON',
    wt: '1,950 kg', se: '5', ca: '580 L',
    pr: price(54990, y, 2018, 1200)
  }
}

// ── OUTPUT ────────────────────────────────────────────────────────────────────

fs.writeFileSync(
  path.join(__dirname, 'src/data/supplement13.json'),
  JSON.stringify({ make: 'Toyota', specs }, null, 2),
  'utf8'
)
console.log(`supplement13.json: ${Object.keys(specs).length} Celica + RAV4 specs written`)
