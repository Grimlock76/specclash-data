#!/usr/bin/env node
// gen17.cjs — Toyota 86 + GR86 + Yaris Cross + Cressida + Corona (supplement17.json)
const fs   = require('fs')

const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, startYear, inc = 500) {
  return `~$${fmt(base + (year - startYear) * inc)}`
}

// ── 86 (ZN6, 2012–2021) ──────────────────────────────────────────────────────
// Phase 1 (2012–2016): FA20D 147 kW / 205 Nm

for (let y = 2012; y <= 2016; y++) {
  specs[`Toyota|86|${y}|GTS`] = {
    en: 'FA20D 2.0L flat-4 D-4S', di: '2.0L', cy: '4',
    hp: '147 kW (197 hp)', tq: '205 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '7.6 sec', qm: '15.5 sec', ts: '226 km/h',
    fc: '9.0L', fh: '7.1L', fx: '11.9L', ft: '95 RON',
    wt: '1,213 kg', se: '4', ca: '243 L',
    pr: price(29990, y, 2012, 400)
  }
  specs[`Toyota|86|${y}|GTS Auto`] = {
    en: 'FA20D 2.0L flat-4 D-4S', di: '2.0L', cy: '4',
    hp: '147 kW (197 hp)', tq: '205 Nm',
    tx: '6-speed auto', dr: 'RWD',
    z1: '8.2 sec', qm: '16.1 sec', ts: '225 km/h',
    fc: '9.0L', fh: '7.0L', fx: '11.6L', ft: '95 RON',
    wt: '1,239 kg', se: '4', ca: '243 L',
    pr: price(31990, y, 2012, 400)
  }
}

// Phase 2 (2017–2021): FA20D 152 kW / 212 Nm (updated tune)
for (let y = 2017; y <= 2021; y++) {
  specs[`Toyota|86|${y}|GTS`] = {
    en: 'FA20D 2.0L flat-4 D-4S', di: '2.0L', cy: '4',
    hp: '152 kW (204 hp)', tq: '212 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '7.4 sec', qm: '15.3 sec', ts: '230 km/h',
    fc: '9.0L', fh: '7.1L', fx: '11.9L', ft: '95 RON',
    wt: '1,213 kg', se: '4', ca: '243 L',
    pr: price(32590, y, 2017, 400)
  }
  specs[`Toyota|86|${y}|GTS Auto`] = {
    en: 'FA20D 2.0L flat-4 D-4S', di: '2.0L', cy: '4',
    hp: '152 kW (204 hp)', tq: '212 Nm',
    tx: '6-speed auto', dr: 'RWD',
    z1: '7.9 sec', qm: '15.7 sec', ts: '229 km/h',
    fc: '9.0L', fh: '7.0L', fx: '11.6L', ft: '95 RON',
    wt: '1,239 kg', se: '4', ca: '243 L',
    pr: price(34090, y, 2017, 400)
  }
  if (y >= 2019) {
    specs[`Toyota|86|${y}|GR Sport`] = {
      en: 'FA20D 2.0L flat-4 D-4S', di: '2.0L', cy: '4',
      hp: '152 kW (204 hp)', tq: '212 Nm',
      tx: '6-speed manual', dr: 'RWD',
      z1: '7.4 sec', qm: '15.3 sec', ts: '230 km/h',
      fc: '9.0L', fh: '7.1L', fx: '11.9L', ft: '95 RON',
      wt: '1,220 kg', se: '4', ca: '243 L',
      pr: price(37590, y, 2019, 400)
    }
  }
}

// ── GR86 (ZN8, 2022–2023) ─────────────────────────────────────────────────────
// FA24D 2.4L flat-4 D-4S: 173 kW / 250 Nm

for (let y = 2022; y <= 2023; y++) {
  specs[`Toyota|GR86|${y}|GTS`] = {
    en: 'FA24D 2.4L flat-4 D-4S', di: '2.4L', cy: '4',
    hp: '173 kW (232 hp)', tq: '250 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '6.3 sec', qm: '14.6 sec', ts: '226 km/h',
    fc: '8.9L', fh: '7.1L', fx: '11.7L', ft: '95 RON',
    wt: '1,278 kg', se: '4', ca: '237 L',
    pr: price(40990, y, 2022, 1000)
  }
  specs[`Toyota|GR86|${y}|GTS Auto`] = {
    en: 'FA24D 2.4L flat-4 D-4S', di: '2.4L', cy: '4',
    hp: '173 kW (232 hp)', tq: '250 Nm',
    tx: '6-speed auto', dr: 'RWD',
    z1: '6.9 sec', qm: '15.0 sec', ts: '225 km/h',
    fc: '8.7L', fh: '6.9L', fx: '11.5L', ft: '95 RON',
    wt: '1,299 kg', se: '4', ca: '237 L',
    pr: price(42490, y, 2022, 1000)
  }
}

// ── YARIS CROSS (2021–2023) ───────────────────────────────────────────────────
// GX / GXL: M20A-FXS 1.5L hybrid FWD — 85 kW system
// ZR / GR Sport: same + rear e-motor AWD — 91 kW system

for (let y = 2021; y <= 2023; y++) {
  specs[`Toyota|Yaris Cross|${y}|GX`] = {
    en: 'M20A-FXS 1.5L petrol-electric hybrid', di: '1.5L', cy: '4',
    hp: '85 kW (114 hp) combined', tq: '120 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~11.2 sec', qm: '~18.8 sec', ts: '~170 km/h',
    fc: '4.2L', fh: '3.7L', fx: '5.2L', ft: '91 RON',
    wt: '1,175 kg', se: '5', ca: '270 L',
    pr: price(30990, y, 2021, 500)
  }
  specs[`Toyota|Yaris Cross|${y}|GXL`] = {
    en: 'M20A-FXS 1.5L petrol-electric hybrid', di: '1.5L', cy: '4',
    hp: '85 kW (114 hp) combined', tq: '120 Nm',
    tx: 'e-CVT', dr: 'FWD',
    z1: '~11.2 sec', qm: '~18.8 sec', ts: '~170 km/h',
    fc: '4.2L', fh: '3.7L', fx: '5.2L', ft: '91 RON',
    wt: '1,185 kg', se: '5', ca: '270 L',
    pr: price(33990, y, 2021, 500)
  }
  specs[`Toyota|Yaris Cross|${y}|ZR`] = {
    en: 'M20A-FXS 1.5L hybrid + rear e-motor', di: '1.5L', cy: '4',
    hp: '91 kW (122 hp) combined', tq: '185 Nm (rear motor)',
    tx: 'e-CVT', dr: 'AWD',
    z1: '~9.8 sec', qm: '~17.5 sec', ts: '~175 km/h',
    fc: '4.8L', fh: '4.1L', fx: '5.5L', ft: '91 RON',
    wt: '1,280 kg', se: '5', ca: '270 L',
    pr: price(38990, y, 2021, 500)
  }
  if (y >= 2022) {
    specs[`Toyota|Yaris Cross|${y}|GR Sport`] = {
      en: 'M20A-FXS 1.5L hybrid + rear e-motor', di: '1.5L', cy: '4',
      hp: '91 kW (122 hp) combined', tq: '185 Nm (rear motor)',
      tx: 'e-CVT', dr: 'AWD',
      z1: '~9.5 sec', qm: '~17.2 sec', ts: '~175 km/h',
      fc: '4.8L', fh: '4.1L', fx: '5.5L', ft: '91 RON',
      wt: '1,295 kg', se: '5', ca: '270 L',
      pr: price(43990, y, 2022, 500)
    }
  }
}

// ── CRESSIDA ───────────────────────────────────────────────────────────────────

// MX30 (1978–1980) — 18R-C 2.0L OHC 4-cyl carb
for (let y = 1978; y <= 1980; y++) {
  specs[`Toyota|Cressida|${y}|GL`] = {
    en: '18R-C 2.0L OHC 8V', di: '2.0L', cy: '4',
    hp: '67 kW (90 hp)', tq: '149 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~158 km/h',
    fc: '11.5L', fh: '8.0L', fx: '14.0L', ft: '91 RON',
    wt: '1,120 kg', se: '5', ca: '350 L',
    pr: price(11490, y, 1978, 650)
  }
}

// MX63 (1981–1984) — 22R 2.4L OHC 4-cyl carb
for (let y = 1981; y <= 1984; y++) {
  specs[`Toyota|Cressida|${y}|GL`] = {
    en: '22R 2.4L OHC 8V', di: '2.4L', cy: '4',
    hp: '72 kW (97 hp)', tq: '183 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~13.5 sec', qm: '~19.5 sec', ts: '~155 km/h',
    fc: '12.0L', fh: '8.5L', fx: '14.5L', ft: '91 RON',
    wt: '1,160 kg', se: '5', ca: '390 L',
    pr: price(14990, y, 1981, 800)
  }
  specs[`Toyota|Cressida|${y}|GX`] = {
    en: '22R 2.4L OHC 8V', di: '2.4L', cy: '4',
    hp: '72 kW (97 hp)', tq: '183 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~14.5 sec', qm: '~20.5 sec', ts: '~150 km/h',
    fc: '13.0L', fh: '9.0L', fx: '15.5L', ft: '91 RON',
    wt: '1,185 kg', se: '5', ca: '390 L',
    pr: price(17490, y, 1981, 900)
  }
}

// MX73 (1985–1988) — 1G-GE 2.0L inline-6 DOHC twin-cam (105 kW)
for (let y = 1985; y <= 1988; y++) {
  specs[`Toyota|Cressida|${y}|GX`] = {
    en: '1G-GE 2.0L inline-6 DOHC 24V', di: '2.0L', cy: '6',
    hp: '105 kW (141 hp)', tq: '177 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~188 km/h',
    fc: '11.0L', fh: '8.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,235 kg', se: '5', ca: '390 L',
    pr: price(23490, y, 1985, 1100)
  }
  specs[`Toyota|Cressida|${y}|GXL`] = {
    en: '1G-GE 2.0L inline-6 DOHC 24V', di: '2.0L', cy: '6',
    hp: '105 kW (141 hp)', tq: '177 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~182 km/h',
    fc: '12.0L', fh: '8.5L', fx: '14.5L', ft: '91 RON',
    wt: '1,260 kg', se: '5', ca: '390 L',
    pr: price(26490, y, 1985, 1100)
  }
}

// MX83 (1989–1992) — 1G-FE 2.0L inline-6 DOHC EFI (100 kW)
for (let y = 1989; y <= 1992; y++) {
  specs[`Toyota|Cressida|${y}|GX`] = {
    en: '1G-FE 2.0L inline-6 DOHC 24V EFI', di: '2.0L', cy: '6',
    hp: '100 kW (134 hp)', tq: '177 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~185 km/h',
    fc: '11.0L', fh: '7.5L', fx: '13.5L', ft: '91 RON',
    wt: '1,340 kg', se: '5', ca: '390 L',
    pr: price(30990, y, 1989, 1300)
  }
  specs[`Toyota|Cressida|${y}|GXL`] = {
    en: '1G-FE 2.0L inline-6 DOHC 24V EFI', di: '2.0L', cy: '6',
    hp: '100 kW (134 hp)', tq: '177 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~11.0 sec', qm: '~18.5 sec', ts: '~180 km/h',
    fc: '11.5L', fh: '8.0L', fx: '14.0L', ft: '91 RON',
    wt: '1,370 kg', se: '5', ca: '390 L',
    pr: price(33990, y, 1989, 1300)
  }
}

// ── CORONA (1975–1992) ────────────────────────────────────────────────────────

// RT80 (1975–1978) — 2T-C 1.6L or 18R-C 2.0L, RWD
for (let y = 1975; y <= 1978; y++) {
  specs[`Toyota|Corona|${y}|CS`] = {
    en: '2T-C 1.6L OHV', di: '1.6L', cy: '4',
    hp: '55 kW (74 hp)', tq: '119 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~16.0 sec', qm: '~21.5 sec', ts: '~143 km/h',
    fc: '10.5L', fh: '7.5L', fx: '12.5L', ft: '91 RON',
    wt: '1,005 kg', se: '5', ca: '330 L',
    pr: price(5990, y, 1975, 450)
  }
  specs[`Toyota|Corona|${y}|SL`] = {
    en: '18R-C 2.0L OHC 8V', di: '2.0L', cy: '4',
    hp: '72 kW (97 hp)', tq: '152 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~160 km/h',
    fc: '11.5L', fh: '8.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,055 kg', se: '5', ca: '330 L',
    pr: price(7490, y, 1975, 550)
  }
}

// ST130 (1979–1982) — 3T-U 1.8L OHC + Seca hatch from 1981, RWD
for (let y = 1979; y <= 1980; y++) {
  specs[`Toyota|Corona|${y}|SE`] = {
    en: '3T-U 1.8L OHC', di: '1.8L', cy: '4',
    hp: '65 kW (87 hp)', tq: '141 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.0 sec', qm: '~20.0 sec', ts: '~152 km/h',
    fc: '11.0L', fh: '7.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,030 kg', se: '5', ca: '340 L',
    pr: price(8490, y, 1979, 500)
  }
  specs[`Toyota|Corona|${y}|SL`] = {
    en: '3T-U 1.8L OHC', di: '1.8L', cy: '4',
    hp: '65 kW (87 hp)', tq: '141 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~15.0 sec', qm: '~21.0 sec', ts: '~148 km/h',
    fc: '12.0L', fh: '8.5L', fx: '14.0L', ft: '91 RON',
    wt: '1,060 kg', se: '5', ca: '340 L',
    pr: price(10490, y, 1979, 600)
  }
}

for (let y = 1981; y <= 1982; y++) {
  specs[`Toyota|Corona|${y}|SE`] = {
    en: '3T-U 1.8L OHC', di: '1.8L', cy: '4',
    hp: '65 kW (87 hp)', tq: '141 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.0 sec', qm: '~20.0 sec', ts: '~152 km/h',
    fc: '11.0L', fh: '7.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,030 kg', se: '5', ca: '340 L',
    pr: price(10990, y, 1981, 500)
  }
  specs[`Toyota|Corona|${y}|SL`] = {
    en: '3T-U 1.8L OHC', di: '1.8L', cy: '4',
    hp: '65 kW (87 hp)', tq: '141 Nm',
    tx: '4-speed auto', dr: 'RWD',
    z1: '~15.0 sec', qm: '~21.0 sec', ts: '~148 km/h',
    fc: '12.0L', fh: '8.5L', fx: '14.0L', ft: '91 RON',
    wt: '1,060 kg', se: '5', ca: '340 L',
    pr: price(12490, y, 1981, 550)
  }
  specs[`Toyota|Corona|${y}|Seca`] = {
    en: '3T-U 1.8L OHC', di: '1.8L', cy: '4',
    hp: '65 kW (87 hp)', tq: '141 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.0 sec', qm: '~20.0 sec', ts: '~152 km/h',
    fc: '11.0L', fh: '7.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,015 kg', se: '5', ca: '240 L',
    pr: price(10490, y, 1981, 500)
  }
}

// ST141 (1983–1986) — 3A-C 1.5L or 3S-FE 2.0L EFI, FWD from this gen
for (let y = 1983; y <= 1984; y++) {
  specs[`Toyota|Corona|${y}|CS`] = {
    en: '3A-C 1.5L OHC', di: '1.5L', cy: '4',
    hp: '58 kW (78 hp)', tq: '122 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~15.0 sec', qm: '~20.5 sec', ts: '~152 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '1,025 kg', se: '5', ca: '355 L',
    pr: price(11990, y, 1983, 600)
  }
  specs[`Toyota|Corona|${y}|SL`] = {
    en: '3S-FE 2.0L DOHC EFI', di: '2.0L', cy: '4',
    hp: '78 kW (105 hp)', tq: '167 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '9.5L', fh: '6.5L', fx: '11.5L', ft: '91 RON',
    wt: '1,075 kg', se: '5', ca: '355 L',
    pr: price(15490, y, 1983, 700)
  }
}

for (let y = 1985; y <= 1986; y++) {
  specs[`Toyota|Corona|${y}|CS`] = {
    en: '3A-C 1.5L OHC', di: '1.5L', cy: '4',
    hp: '58 kW (78 hp)', tq: '122 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~15.0 sec', qm: '~20.5 sec', ts: '~152 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '1,025 kg', se: '5', ca: '355 L',
    pr: price(13190, y, 1985, 650)
  }
  specs[`Toyota|Corona|${y}|SL`] = {
    en: '3S-FE 2.0L DOHC EFI', di: '2.0L', cy: '4',
    hp: '78 kW (105 hp)', tq: '167 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '9.5L', fh: '6.5L', fx: '11.5L', ft: '91 RON',
    wt: '1,075 kg', se: '5', ca: '355 L',
    pr: price(17190, y, 1985, 750)
  }
  specs[`Toyota|Corona|${y}|Seca`] = {
    en: '3S-FE 2.0L DOHC EFI', di: '2.0L', cy: '4',
    hp: '78 kW (105 hp)', tq: '167 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '9.5L', fh: '6.5L', fx: '11.5L', ft: '91 RON',
    wt: '1,055 kg', se: '5', ca: '255 L',
    pr: price(16490, y, 1985, 700)
  }
}

// ST180 (1987–1992) — 3E-E 1.5L EFI or 3S-FE 2.0L EFI, FWD
for (let y = 1987; y <= 1992; y++) {
  specs[`Toyota|Corona|${y}|CS`] = {
    en: '3E-E 1.5L SOHC EFI', di: '1.5L', cy: '4',
    hp: '65 kW (87 hp)', tq: '125 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~13.5 sec', qm: '~20.0 sec', ts: '~163 km/h',
    fc: '8.5L', fh: '6.0L', fx: '10.5L', ft: '91 RON',
    wt: '1,040 kg', se: '5', ca: '350 L',
    pr: price(16990, y, 1987, 700)
  }
  specs[`Toyota|Corona|${y}|SL`] = {
    en: '3S-FE 2.0L DOHC EFI', di: '2.0L', cy: '4',
    hp: '82 kW (110 hp)', tq: '171 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '1,090 kg', se: '5', ca: '350 L',
    pr: price(19990, y, 1987, 800)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement17.json', JSON.stringify({ specs }, null, 2))
console.log('supplement17.json: written', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => {
  const m = k.split('|')[1]
  byModel[m] = (byModel[m] || 0) + 1
})
Object.entries(byModel).forEach(([m, c]) => console.log(' ', m + ':', c))
