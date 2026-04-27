#!/usr/bin/env node
// gen19.cjs — Early Corolla (1975-82) + Camry (1983-86) + LandCruiser (1970-79)
//             + HiLux (1975-82) + HiAce H100 (1995-2004)
const fs = require('fs')
const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, startYear, inc = 500) {
  return `~$${fmt(base + (year - startYear) * inc)}`
}

// ── COROLLA (1975–1982) ───────────────────────────────────────────────────────

// KE30/KE55 (1975–1980) — 3K-B 1.2L (CS) / 4K-C 1.3L (SX), RWD
for (let y = 1975; y <= 1980; y++) {
  specs[`Toyota|Corolla|${y}|CS`] = {
    en: '3K-B 1.2L OHV 8V', di: '1.2L', cy: '4',
    hp: '38 kW (51 hp)', tq: '82 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~18.5 sec', qm: '~22.5 sec', ts: '~130 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '830 kg', se: '5', ca: '290 L',
    pr: price(3990, y, 1975, 350)
  }
  specs[`Toyota|Corolla|${y}|SX`] = {
    en: '4K-C 1.3L OHV 8V', di: '1.3L', cy: '4',
    hp: '48 kW (64 hp)', tq: '96 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~16.0 sec', qm: '~21.0 sec', ts: '~142 km/h',
    fc: '9.5L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '845 kg', se: '5', ca: '290 L',
    pr: price(4990, y, 1975, 400)
  }
}

// KE70 (1981–1982) — 4K-C 1.3L (CS) / 3A-U 1.5L (SX), RWD
for (let y = 1981; y <= 1982; y++) {
  specs[`Toyota|Corolla|${y}|CS`] = {
    en: '4K-C 1.3L OHV 8V', di: '1.3L', cy: '4',
    hp: '48 kW (64 hp)', tq: '96 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~16.0 sec', qm: '~21.0 sec', ts: '~142 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '870 kg', se: '5', ca: '290 L',
    pr: price(8490, y, 1981, 450)
  }
  specs[`Toyota|Corolla|${y}|SX`] = {
    en: '3A-U 1.5L OHC 8V', di: '1.5L', cy: '4',
    hp: '63 kW (85 hp)', tq: '120 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~13.5 sec', qm: '~19.5 sec', ts: '~155 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '880 kg', se: '5', ca: '290 L',
    pr: price(10490, y, 1981, 500)
  }
}

// ── CAMRY (1983–1986, SV11) ───────────────────────────────────────────────────

// SV11 first-gen Camry: 2S-C 1.8L carb (CS) / 2S-E 1.8L EFI (GL)
for (let y = 1983; y <= 1986; y++) {
  specs[`Toyota|Camry|${y}|CS`] = {
    en: '2S-C 1.8L SOHC 8V', di: '1.8L', cy: '4',
    hp: '71 kW (95 hp)', tq: '143 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~162 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '1,040 kg', se: '5', ca: '380 L',
    pr: price(12990, y, 1983, 700)
  }
  specs[`Toyota|Camry|${y}|GL`] = {
    en: '2S-E 1.8L SOHC 8V EFI', di: '1.8L', cy: '4',
    hp: '78 kW (105 hp)', tq: '152 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~172 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '1,055 kg', se: '5', ca: '380 L',
    pr: price(15490, y, 1983, 800)
  }
}

// ── LANDCRUISER (1970–1979, FJ40/FJ55 F-engine era) ──────────────────────────

// F 3.9L inline-6 OHV (carb): ~90 kW — Standard and DX
for (let y = 1970; y <= 1975; y++) {
  specs[`Toyota|LandCruiser|${y}|Standard`] = {
    en: 'F 3.9L inline-6 OHV', di: '3.9L', cy: '6',
    hp: '88 kW (118 hp)', tq: '255 Nm',
    tx: '4-speed manual', dr: '4WD',
    z1: '~20.0 sec', qm: '~24.0 sec', ts: '~125 km/h',
    fc: '18.0L', fh: '14.0L', fx: '22.0L', ft: '91 RON',
    wt: '1,680 kg', se: '5', ca: null,
    pr: price(5490, y, 1970, 350)
  }
  specs[`Toyota|LandCruiser|${y}|DX`] = {
    en: 'F 3.9L inline-6 OHV', di: '3.9L', cy: '6',
    hp: '88 kW (118 hp)', tq: '255 Nm',
    tx: '4-speed manual', dr: '4WD',
    z1: '~20.0 sec', qm: '~24.0 sec', ts: '~125 km/h',
    fc: '18.0L', fh: '14.0L', fx: '22.0L', ft: '91 RON',
    wt: '1,730 kg', se: '5', ca: null,
    pr: price(6490, y, 1970, 400)
  }
}

for (let y = 1976; y <= 1979; y++) {
  specs[`Toyota|LandCruiser|${y}|Standard`] = {
    en: 'F 3.9L inline-6 OHV', di: '3.9L', cy: '6',
    hp: '88 kW (118 hp)', tq: '255 Nm',
    tx: '4-speed manual', dr: '4WD',
    z1: '~20.0 sec', qm: '~24.0 sec', ts: '~125 km/h',
    fc: '18.0L', fh: '14.0L', fx: '22.0L', ft: '91 RON',
    wt: '1,690 kg', se: '5', ca: null,
    pr: price(7490, y, 1976, 500)
  }
  specs[`Toyota|LandCruiser|${y}|DX`] = {
    en: 'F 3.9L inline-6 OHV', di: '3.9L', cy: '6',
    hp: '88 kW (118 hp)', tq: '255 Nm',
    tx: '4-speed manual', dr: '4WD',
    z1: '~20.0 sec', qm: '~24.0 sec', ts: '~125 km/h',
    fc: '18.0L', fh: '14.0L', fx: '22.0L', ft: '91 RON',
    wt: '1,740 kg', se: '5', ca: null,
    pr: price(8990, y, 1976, 600)
  }
}

// ── HILUX (1975–1982, RN25/RN30 era) ─────────────────────────────────────────

// 18R-C 2.0L OHC 8V petrol — Workmate (basic single cab) / SR5 (sport)
for (let y = 1975; y <= 1978; y++) {
  specs[`Toyota|HiLux|${y}|Workmate`] = {
    en: '18R-C 2.0L OHC 8V', di: '2.0L', cy: '4',
    hp: '74 kW (99 hp)', tq: '148 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~15.0 sec', qm: '~20.5 sec', ts: '~147 km/h',
    fc: '11.5L', fh: '8.5L', fx: '13.5L', ft: '91 RON',
    wt: '1,025 kg', se: '3', ca: null,
    pr: price(5490, y, 1975, 400)
  }
  specs[`Toyota|HiLux|${y}|SR5`] = {
    en: '18R-C 2.0L OHC 8V', di: '2.0L', cy: '4',
    hp: '74 kW (99 hp)', tq: '148 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~15.0 sec', qm: '~20.5 sec', ts: '~147 km/h',
    fc: '11.5L', fh: '8.5L', fx: '13.5L', ft: '91 RON',
    wt: '1,045 kg', se: '3', ca: null,
    pr: price(6990, y, 1975, 450)
  }
}

for (let y = 1979; y <= 1982; y++) {
  specs[`Toyota|HiLux|${y}|Workmate`] = {
    en: '18R-C 2.0L OHC 8V', di: '2.0L', cy: '4',
    hp: '74 kW (99 hp)', tq: '148 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.5 sec', qm: '~20.0 sec', ts: '~150 km/h',
    fc: '11.0L', fh: '8.0L', fx: '13.0L', ft: '91 RON',
    wt: '1,050 kg', se: '3', ca: null,
    pr: price(8490, y, 1979, 500)
  }
  specs[`Toyota|HiLux|${y}|SR5`] = {
    en: '18R-C 2.0L OHC 8V', di: '2.0L', cy: '4',
    hp: '74 kW (99 hp)', tq: '148 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.5 sec', qm: '~20.0 sec', ts: '~150 km/h',
    fc: '11.0L', fh: '8.0L', fx: '13.0L', ft: '91 RON',
    wt: '1,070 kg', se: '3', ca: null,
    pr: price(10490, y, 1979, 550)
  }
}

// ── HIACE H100 (1995–2004) ────────────────────────────────────────────────────

// 2L-TE 2.4L turbo diesel intercooled: Standard, LWB, Commuter
for (let y = 1995; y <= 2004; y++) {
  const diesel = y >= 2000
    ? { en: '2L-TE 2.4L OHC turbo diesel (updated)', hp: '70 kW (94 hp)', tq: '200 Nm' }
    : { en: '2L-TE 2.4L OHC turbo diesel', hp: '63 kW (85 hp)', tq: '170 Nm' }

  specs[`Toyota|HiAce|${y}|Standard`] = {
    en: diesel.en, di: '2.4L', cy: '4',
    hp: diesel.hp, tq: diesel.tq,
    tx: '5-speed manual', dr: 'RWD',
    z1: '~17.0 sec', qm: '~22.0 sec', ts: '~140 km/h',
    fc: '11.5L', fh: '9.0L', fx: '14.0L', ft: 'Diesel',
    wt: '1,800 kg', se: '3', ca: '~5,800 L (van)',
    pr: price(29990, y, 1995, 600)
  }
  specs[`Toyota|HiAce|${y}|LWB`] = {
    en: diesel.en, di: '2.4L', cy: '4',
    hp: diesel.hp, tq: diesel.tq,
    tx: '5-speed manual', dr: 'RWD',
    z1: '~17.5 sec', qm: '~22.5 sec', ts: '~138 km/h',
    fc: '12.0L', fh: '9.5L', fx: '14.5L', ft: 'Diesel',
    wt: '1,875 kg', se: '3', ca: '~7,200 L (van)',
    pr: price(33990, y, 1995, 700)
  }
  specs[`Toyota|HiAce|${y}|Commuter`] = {
    en: diesel.en, di: '2.4L', cy: '4',
    hp: diesel.hp, tq: diesel.tq,
    tx: '5-speed manual', dr: 'RWD',
    z1: '~18.5 sec', qm: '~23.5 sec', ts: '~132 km/h',
    fc: '13.0L', fh: '10.0L', fx: '15.5L', ft: 'Diesel',
    wt: '2,300 kg', se: '14', ca: '~2,000 L',
    pr: price(42990, y, 1995, 800)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement19.json', JSON.stringify({ specs }, null, 2))
console.log('supplement19.json:', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => { const m=k.split('|')[1]; byModel[m]=(byModel[m]||0)+1 })
Object.entries(byModel).forEach(([m,c]) => console.log(' ',m+':',c))
