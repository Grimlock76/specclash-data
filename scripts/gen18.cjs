#!/usr/bin/env node
// gen18.cjs — Starlet + Crown + Soarer + Vienta + HiLux Surf + Paseo + Corolla Cross + GR Corolla
const fs = require('fs')
const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, startYear, inc = 500) {
  return `~$${fmt(base + (year - startYear) * inc)}`
}

// ── STARLET ────────────────────────────────────────────────────────────────────

// KP60 (1978–1980) — 2K-C 1.0L OHV, one grade
for (let y = 1978; y <= 1980; y++) {
  specs[`Toyota|Starlet|${y}|S`] = {
    en: '2K-C 1.0L OHV 4V', di: '1.0L', cy: '4',
    hp: '33 kW (44 hp)', tq: '74 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~19.5 sec', qm: '~23.0 sec', ts: '~130 km/h',
    fc: '8.5L', fh: '6.5L', fx: '10.5L', ft: '91 RON',
    wt: '710 kg', se: '4', ca: '170 L',
    pr: price(4990, y, 1978, 350)
  }
}

// KP61 (1981–1984) — 3K 1.2L OHV
for (let y = 1981; y <= 1984; y++) {
  specs[`Toyota|Starlet|${y}|CS`] = {
    en: '3K 1.2L OHV 8V', di: '1.2L', cy: '4',
    hp: '38 kW (51 hp)', tq: '88 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~17.5 sec', qm: '~22.0 sec', ts: '~135 km/h',
    fc: '8.5L', fh: '6.2L', fx: '10.5L', ft: '91 RON',
    wt: '740 kg', se: '4', ca: '175 L',
    pr: price(6490, y, 1981, 400)
  }
  specs[`Toyota|Starlet|${y}|SR`] = {
    en: '3K-HU 1.2L OHV 8V (Weber)', di: '1.2L', cy: '4',
    hp: '47 kW (63 hp)', tq: '96 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~15.5 sec', qm: '~20.5 sec', ts: '~148 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '745 kg', se: '4', ca: '175 L',
    pr: price(7990, y, 1981, 400)
  }
}

// EP71 (1985–1989) — 2E 1.3L SOHC 12V
for (let y = 1985; y <= 1989; y++) {
  specs[`Toyota|Starlet|${y}|CS`] = {
    en: '2E 1.3L SOHC 12V', di: '1.3L', cy: '4',
    hp: '55 kW (74 hp)', tq: '108 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~13.5 sec', qm: '~19.5 sec', ts: '~152 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '780 kg', se: '4', ca: '175 L',
    pr: price(9490, y, 1985, 450)
  }
  specs[`Toyota|Starlet|${y}|XL`] = {
    en: '2E 1.3L SOHC 12V', di: '1.3L', cy: '4',
    hp: '55 kW (74 hp)', tq: '108 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~13.5 sec', qm: '~19.5 sec', ts: '~152 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '785 kg', se: '4', ca: '175 L',
    pr: price(10990, y, 1985, 450)
  }
}

// EP82 (1990–1995) — 4E-FE 1.3L DOHC EFI
for (let y = 1990; y <= 1995; y++) {
  specs[`Toyota|Starlet|${y}|CS`] = {
    en: '4E-FE 1.3L DOHC 16V EFI', di: '1.3L', cy: '4',
    hp: '75 kW (101 hp)', tq: '115 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.5 sec', qm: '~18.5 sec', ts: '~160 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.5L', ft: '91 RON',
    wt: '805 kg', se: '4', ca: '175 L',
    pr: price(12990, y, 1990, 450)
  }
  specs[`Toyota|Starlet|${y}|XL`] = {
    en: '4E-FE 1.3L DOHC 16V EFI', di: '1.3L', cy: '4',
    hp: '75 kW (101 hp)', tq: '115 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.5 sec', qm: '~18.5 sec', ts: '~160 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.5L', ft: '91 RON',
    wt: '810 kg', se: '4', ca: '175 L',
    pr: price(14990, y, 1990, 450)
  }
}

// ── CROWN ──────────────────────────────────────────────────────────────────────

// MS120 (1983–1987) — 1G-EU 2.0L SOHC EFI inline-6
for (let y = 1983; y <= 1987; y++) {
  specs[`Toyota|Crown|${y}|Super Saloon`] = {
    en: '1G-EU 2.0L SOHC 12V EFI', di: '2.0L', cy: '6',
    hp: '93 kW (125 hp)', tq: '163 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '12.0L', fh: '8.5L', fx: '14.5L', ft: '91 RON',
    wt: '1,440 kg', se: '5', ca: '450 L',
    pr: price(24990, y, 1983, 1200)
  }
  specs[`Toyota|Crown|${y}|Royal Saloon`] = {
    en: '1G-EU 2.0L SOHC 12V EFI', di: '2.0L', cy: '6',
    hp: '93 kW (125 hp)', tq: '163 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '12.0L', fh: '8.5L', fx: '14.5L', ft: '91 RON',
    wt: '1,475 kg', se: '5', ca: '450 L',
    pr: price(29990, y, 1983, 1400)
  }
}

// MS130 (1988–1991) — 1G-FE 2.0L DOHC EFI / 1JZ-GE 2.5L top
for (let y = 1988; y <= 1991; y++) {
  specs[`Toyota|Crown|${y}|Royal Saloon`] = {
    en: '1G-FE 2.0L DOHC 24V EFI', di: '2.0L', cy: '6',
    hp: '100 kW (134 hp)', tq: '177 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~178 km/h',
    fc: '12.0L', fh: '8.5L', fx: '14.5L', ft: '91 RON',
    wt: '1,500 kg', se: '5', ca: '450 L',
    pr: price(36990, y, 1988, 1600)
  }
  specs[`Toyota|Crown|${y}|Royal Saloon G`] = {
    en: '1JZ-GE 2.5L DOHC 24V EFI', di: '2.5L', cy: '6',
    hp: '125 kW (168 hp)', tq: '226 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~190 km/h',
    fc: '13.0L', fh: '9.0L', fx: '15.5L', ft: '91 RON',
    wt: '1,530 kg', se: '5', ca: '450 L',
    pr: price(44990, y, 1988, 1800)
  }
}

// ── SOARER ─────────────────────────────────────────────────────────────────────

// MZ10 (1981–1985) — 5M-GE 2.8L DOHC 12V inline-6
for (let y = 1981; y <= 1985; y++) {
  specs[`Toyota|Soarer|${y}|GT`] = {
    en: '5M-GE 2.8L DOHC 12V', di: '2.8L', cy: '6',
    hp: '130 kW (174 hp)', tq: '240 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~210 km/h',
    fc: '13.0L', fh: '9.5L', fx: '15.5L', ft: '95 RON',
    wt: '1,385 kg', se: '4', ca: '340 L',
    pr: price(24990, y, 1981, 1200)
  }
  specs[`Toyota|Soarer|${y}|GT Extra`] = {
    en: '5M-GE 2.8L DOHC 12V', di: '2.8L', cy: '6',
    hp: '130 kW (174 hp)', tq: '240 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~205 km/h',
    fc: '13.5L', fh: '10.0L', fx: '16.0L', ft: '95 RON',
    wt: '1,420 kg', se: '4', ca: '340 L',
    pr: price(28990, y, 1981, 1400)
  }
}

// MZ20 (1986–1991) — 7M-GE 3.0L DOHC 24V (GT) / 7M-GTE turbo (GT Turbo)
for (let y = 1986; y <= 1991; y++) {
  specs[`Toyota|Soarer|${y}|GT`] = {
    en: '7M-GE 3.0L DOHC 24V', di: '3.0L', cy: '6',
    hp: '150 kW (201 hp)', tq: '260 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~220 km/h',
    fc: '13.5L', fh: '10.0L', fx: '16.0L', ft: '95 RON',
    wt: '1,470 kg', se: '4', ca: '340 L',
    pr: price(32990, y, 1986, 1500)
  }
  specs[`Toyota|Soarer|${y}|GT Turbo`] = {
    en: '7M-GTE 3.0L DOHC 24V Turbo', di: '3.0L', cy: '6',
    hp: '175 kW (235 hp)', tq: '343 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~7.0 sec', qm: '~15.2 sec', ts: '~230 km/h',
    fc: '14.5L', fh: '10.5L', fx: '17.0L', ft: '98 RON',
    wt: '1,510 kg', se: '4', ca: '340 L',
    pr: price(39990, y, 1986, 1800)
  }
}

// ── VIENTA ─────────────────────────────────────────────────────────────────────

// XV10 V6 (1993–1996) — 3VZ-FE 3.0L V6 DOHC 24V, 140 kW
for (let y = 1993; y <= 1996; y++) {
  specs[`Toyota|Vienta|${y}|SE`] = {
    en: '3VZ-FE 3.0L V6 DOHC 24V', di: '3.0L', cy: '6',
    hp: '140 kW (188 hp)', tq: '267 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.2 sec', qm: '~17.0 sec', ts: '~210 km/h',
    fc: '11.5L', fh: '7.5L', fx: '14.0L', ft: '91 RON',
    wt: '1,410 kg', se: '5', ca: '410 L',
    pr: price(33990, y, 1993, 1200)
  }
  specs[`Toyota|Vienta|${y}|Grande`] = {
    en: '3VZ-FE 3.0L V6 DOHC 24V', di: '3.0L', cy: '6',
    hp: '140 kW (188 hp)', tq: '267 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.2 sec', qm: '~17.0 sec', ts: '~210 km/h',
    fc: '11.5L', fh: '7.5L', fx: '14.0L', ft: '91 RON',
    wt: '1,430 kg', se: '5', ca: '410 L',
    pr: price(38990, y, 1993, 1400)
  }
}

// XV20 V6 (1997–2002) — 1MZ-FE 3.0L V6 DOHC 24V, 147 kW
for (let y = 1997; y <= 2002; y++) {
  specs[`Toyota|Vienta|${y}|SE`] = {
    en: '1MZ-FE 3.0L V6 DOHC 24V', di: '3.0L', cy: '6',
    hp: '147 kW (197 hp)', tq: '275 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.8 sec', qm: '~16.5 sec', ts: '~215 km/h',
    fc: '11.0L', fh: '7.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,435 kg', se: '5', ca: '410 L',
    pr: price(37990, y, 1997, 1200)
  }
  specs[`Toyota|Vienta|${y}|Grande`] = {
    en: '1MZ-FE 3.0L V6 DOHC 24V', di: '3.0L', cy: '6',
    hp: '147 kW (197 hp)', tq: '275 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.8 sec', qm: '~16.5 sec', ts: '~215 km/h',
    fc: '11.0L', fh: '7.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,455 kg', se: '5', ca: '410 L',
    pr: price(43990, y, 1997, 1400)
  }
}

// ── HILUX SURF ─────────────────────────────────────────────────────────────────

// N60 (1984–1988) — 2L-T 2.4L turbo diesel / 22R 2.4L petrol
for (let y = 1984; y <= 1988; y++) {
  specs[`Toyota|HiLux Surf|${y}|DX`] = {
    en: '2L-T 2.4L OHC turbo diesel', di: '2.4L', cy: '4',
    hp: '63 kW (84 hp)', tq: '168 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~17.0 sec', qm: '~21.5 sec', ts: '~140 km/h',
    fc: '12.0L', fh: '9.0L', fx: '14.0L', ft: 'Diesel',
    wt: '1,590 kg', se: '5', ca: '600 L',
    pr: price(24990, y, 1984, 900)
  }
  specs[`Toyota|HiLux Surf|${y}|SR`] = {
    en: '22R 2.4L OHC 8V', di: '2.4L', cy: '4',
    hp: '83 kW (111 hp)', tq: '183 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~14.0 sec', qm: '~19.5 sec', ts: '~155 km/h',
    fc: '13.5L', fh: '10.0L', fx: '16.0L', ft: '91 RON',
    wt: '1,540 kg', se: '5', ca: '600 L',
    pr: price(27990, y, 1984, 900)
  }
}

// N130 (1989–1996) — 2L-TE diesel (GX) / 3VZ-E 3.0L V6 petrol (SR5)
for (let y = 1989; y <= 1996; y++) {
  specs[`Toyota|HiLux Surf|${y}|GX`] = {
    en: '2L-TE 2.4L turbo diesel intercooled', di: '2.4L', cy: '4',
    hp: '75 kW (101 hp)', tq: '210 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~15.5 sec', qm: '~20.5 sec', ts: '~148 km/h',
    fc: '11.5L', fh: '8.5L', fx: '13.5L', ft: 'Diesel',
    wt: '1,650 kg', se: '5', ca: '700 L',
    pr: price(29990, y, 1989, 800)
  }
  specs[`Toyota|HiLux Surf|${y}|SR5`] = {
    en: '3VZ-E 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '120 kW (161 hp)', tq: '235 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '13.5L', fh: '10.0L', fx: '15.5L', ft: '91 RON',
    wt: '1,700 kg', se: '5', ca: '700 L',
    pr: price(34990, y, 1989, 1000)
  }
}

// ── PASEO ──────────────────────────────────────────────────────────────────────

// EP77 (1991–1995) — 5E-FE 1.5L DOHC 16V
for (let y = 1991; y <= 1995; y++) {
  specs[`Toyota|Paseo|${y}|Paseo`] = {
    en: '5E-FE 1.5L DOHC 16V EFI', di: '1.5L', cy: '4',
    hp: '75 kW (101 hp)', tq: '133 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.8 sec', ts: '~180 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '965 kg', se: '4', ca: '210 L',
    pr: price(16990, y, 1991, 500)
  }
}

// EP91 (1996–1998) — 5E-FHE 1.5L DOHC 16V high-rev
for (let y = 1996; y <= 1998; y++) {
  specs[`Toyota|Paseo|${y}|Paseo`] = {
    en: '5E-FHE 1.5L DOHC 16V EFI', di: '1.5L', cy: '4',
    hp: '82 kW (110 hp)', tq: '135 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '950 kg', se: '4', ca: '210 L',
    pr: price(19990, y, 1996, 500)
  }
}

// ── COROLLA CROSS (2022–2023) ─────────────────────────────────────────────────
// M20A-FXS 2.0L petrol-electric hybrid, 145 kW system

for (let y = 2022; y <= 2023; y++) {
  specs[`Toyota|Corolla Cross|${y}|GX`] = {
    en: 'M20A-FXS 2.0L petrol-electric hybrid', di: '2.0L', cy: '4',
    hp: '145 kW (194 hp) combined', tq: '209 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~8.1 sec', qm: '~16.5 sec', ts: '~180 km/h',
    fc: '4.6L', fh: '4.1L', fx: '5.3L', ft: '91 RON',
    wt: '1,460 kg', se: '5', ca: '387 L',
    pr: price(36990, y, 2022, 1000)
  }
  specs[`Toyota|Corolla Cross|${y}|GXL`] = {
    en: 'M20A-FXS 2.0L petrol-electric hybrid', di: '2.0L', cy: '4',
    hp: '145 kW (194 hp) combined', tq: '209 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~8.1 sec', qm: '~16.5 sec', ts: '~180 km/h',
    fc: '4.6L', fh: '4.1L', fx: '5.3L', ft: '91 RON',
    wt: '1,470 kg', se: '5', ca: '387 L',
    pr: price(40990, y, 2022, 1000)
  }
  specs[`Toyota|Corolla Cross|${y}|ZR`] = {
    en: 'M20A-FXS 2.0L petrol-electric hybrid', di: '2.0L', cy: '4',
    hp: '145 kW (194 hp) combined', tq: '209 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~8.1 sec', qm: '~16.5 sec', ts: '~180 km/h',
    fc: '4.6L', fh: '4.1L', fx: '5.3L', ft: '91 RON',
    wt: '1,495 kg', se: '5', ca: '387 L',
    pr: price(44990, y, 2022, 1000)
  }
}

// ── GR COROLLA (2023) ─────────────────────────────────────────────────────────
// G16E-GTS 1.6L 3-cyl turbo, GR-FOUR AWD, 221 kW

specs[`Toyota|GR Corolla|2023|GR Corolla`] = {
  en: 'G16E-GTS 1.6L 3-cyl turbo', di: '1.6L', cy: '3',
  hp: '221 kW (296 hp)', tq: '370 Nm',
  tx: '6-speed iMT', dr: 'AWD (GR-FOUR)',
  z1: '5.4 sec', qm: '13.5 sec', ts: '230 km/h',
  fc: '9.0L', fh: '7.0L', fx: '11.0L', ft: '98 RON',
  wt: '1,480 kg', se: '5', ca: '217 L',
  pr: '~$62,990'
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement18.json', JSON.stringify({ specs }, null, 2))
console.log('supplement18.json:', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => { const m=k.split('|')[1]; byModel[m]=(byModel[m]||0)+1 })
Object.entries(byModel).forEach(([m,c]) => console.log(' ',m+':',c))
