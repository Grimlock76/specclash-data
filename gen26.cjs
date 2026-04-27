#!/usr/bin/env node
// gen26.cjs — Mitsubishi AU-market: Pajero, Magna, Verada, Triton, Outlander, ASX, Eclipse Cross, Mirage, L300/Express
const fs = require('fs')
const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, start, inc = 500) { return `~$${fmt(Math.round(base + (year - start) * inc))}` }

// ── PAJERO NA/NB/NC (1983–1990) ──────────────────────────────────────────────
for (let y = 1983; y <= 1987; y++) {
  specs[`Mitsubishi|Pajero|${y}|GL`] = {
    en: '4G52 2.0L SOHC 8V', di: '2.0L', cy: '4',
    hp: '65 kW (87 hp)', tq: '153 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~15.0 sec', qm: '~21.0 sec', ts: '~145 km/h',
    fc: '13.5L', fh: '10.0L', fx: '17.0L', ft: '91 RON',
    wt: '1,310 kg', se: '5', ca: '700 L',
    pr: price(16990, y, 1983, 600)
  }
  specs[`Mitsubishi|Pajero|${y}|GLX`] = {
    en: '4D56 2.3L SOHC Diesel', di: '2.3L', cy: '4',
    hp: '51 kW (68 hp)', tq: '137 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~17.0 sec', qm: '~23.0 sec', ts: '~135 km/h',
    fc: '11.0L', fh: '8.5L', fx: '14.0L', ft: 'Diesel',
    wt: '1,370 kg', se: '5', ca: '700 L',
    pr: price(18990, y, 1983, 700)
  }
}
for (let y = 1988; y <= 1990; y++) {
  specs[`Mitsubishi|Pajero|${y}|GL`] = {
    en: '6G72 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '107 kW (143 hp)', tq: '222 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '15.0L', fh: '11.0L', fx: '19.0L', ft: '91 RON',
    wt: '1,580 kg', se: '5', ca: '1,200 L',
    pr: price(28990, y, 1988, 900)
  }
  specs[`Mitsubishi|Pajero|${y}|GLS`] = {
    en: '4D56T 2.5L SOHC Turbo Diesel', di: '2.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '240 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~14.0 sec', qm: '~20.0 sec', ts: '~150 km/h',
    fc: '12.0L', fh: '9.0L', fx: '15.5L', ft: 'Diesel',
    wt: '1,700 kg', se: '7', ca: '1,200 L',
    pr: price(34990, y, 1988, 1000)
  }
}

// ── PAJERO NJ (1991–1993) ────────────────────────────────────────────────────
for (let y = 1991; y <= 1993; y++) {
  specs[`Mitsubishi|Pajero|${y}|GLX`] = {
    en: '4D56T 2.5L SOHC Turbo Diesel', di: '2.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '240 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~13.5 sec', qm: '~20.0 sec', ts: '~152 km/h',
    fc: '11.5L', fh: '8.5L', fx: '15.0L', ft: 'Diesel',
    wt: '1,820 kg', se: '7', ca: '1,250 L',
    pr: price(36990, y, 1991, 900)
  }
  specs[`Mitsubishi|Pajero|${y}|GLS`] = {
    en: '6G72 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '107 kW (143 hp)', tq: '222 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '16.0L', fh: '12.0L', fx: '20.0L', ft: '91 RON',
    wt: '1,920 kg', se: '7', ca: '1,250 L',
    pr: price(44990, y, 1991, 1200)
  }
}

// ── PAJERO NK (1994–1996) ────────────────────────────────────────────────────
for (let y = 1994; y <= 1996; y++) {
  specs[`Mitsubishi|Pajero|${y}|GLX`] = {
    en: '4M40 2.8L SOHC Turbo Diesel', di: '2.8L', cy: '4',
    hp: '92 kW (123 hp)', tq: '294 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~158 km/h',
    fc: '11.0L', fh: '8.0L', fx: '14.5L', ft: 'Diesel',
    wt: '1,900 kg', se: '7', ca: '1,250 L',
    pr: price(40990, y, 1994, 1000)
  }
  specs[`Mitsubishi|Pajero|${y}|GLS`] = {
    en: '6G72 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '107 kW (143 hp)', tq: '222 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '16.0L', fh: '12.0L', fx: '20.5L', ft: '91 RON',
    wt: '2,020 kg', se: '7', ca: '1,250 L',
    pr: price(46990, y, 1994, 1200)
  }
}

// ── PAJERO NL (1997–1999) ────────────────────────────────────────────────────
for (let y = 1997; y <= 1999; y++) {
  specs[`Mitsubishi|Pajero|${y}|GLX`] = {
    en: '4M40 2.8L SOHC Turbo Diesel', di: '2.8L', cy: '4',
    hp: '92 kW (123 hp)', tq: '294 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~158 km/h',
    fc: '11.0L', fh: '8.0L', fx: '14.5L', ft: 'Diesel',
    wt: '1,960 kg', se: '7', ca: '1,270 L',
    pr: price(44990, y, 1997, 1200)
  }
  specs[`Mitsubishi|Pajero|${y}|GLS`] = {
    en: '6G74 3.5L V6 SOHC 24V', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '16.5L', fh: '12.5L', fx: '21.0L', ft: '95 RON',
    wt: '2,130 kg', se: '7', ca: '1,270 L',
    pr: price(54990, y, 1997, 1400)
  }
  specs[`Mitsubishi|Pajero|${y}|VR-X`] = {
    en: '6G74 3.5L V6 SOHC 24V', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '16.5L', fh: '12.5L', fx: '21.0L', ft: '95 RON',
    wt: '2,175 kg', se: '7', ca: '1,270 L',
    pr: price(64990, y, 1997, 1500)
  }
}

// ── PAJERO NM (2000–2002) ────────────────────────────────────────────────────
for (let y = 2000; y <= 2002; y++) {
  specs[`Mitsubishi|Pajero|${y}|GLX`] = {
    en: '4M41 3.2L DOHC DI-D Diesel', di: '3.2L', cy: '4',
    hp: '121 kW (162 hp)', tq: '350 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.5 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.5L', ft: 'Diesel',
    wt: '2,060 kg', se: '7', ca: '1,300 L',
    pr: price(49990, y, 2000, 1200)
  }
  specs[`Mitsubishi|Pajero|${y}|GLS`] = {
    en: '6G74 3.5L V6 SOHC 24V', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '16.5L', fh: '12.5L', fx: '21.0L', ft: '95 RON',
    wt: '2,200 kg', se: '7', ca: '1,300 L',
    pr: price(59990, y, 2000, 1400)
  }
  specs[`Mitsubishi|Pajero|${y}|Exceed`] = {
    en: '6G74 3.5L V6 SOHC 24V', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '16.5L', fh: '12.5L', fx: '21.0L', ft: '95 RON',
    wt: '2,240 kg', se: '7', ca: '1,300 L',
    pr: price(69990, y, 2000, 1500)
  }
}

// ── PAJERO NP (2003–2006) ────────────────────────────────────────────────────
for (let y = 2003; y <= 2006; y++) {
  specs[`Mitsubishi|Pajero|${y}|GLX`] = {
    en: '4M41 3.2L DOHC DI-D Diesel', di: '3.2L', cy: '4',
    hp: '121 kW (162 hp)', tq: '350 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '10.2L', fh: '7.8L', fx: '13.2L', ft: 'Diesel',
    wt: '2,080 kg', se: '7', ca: '1,300 L',
    pr: price(52990, y, 2003, 1000)
  }
  specs[`Mitsubishi|Pajero|${y}|GLS`] = {
    en: '4M41 3.2L DOHC DI-D Diesel', di: '3.2L', cy: '4',
    hp: '121 kW (162 hp)', tq: '350 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.5 sec', qm: '~19.5 sec', ts: '~165 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.5L', ft: 'Diesel',
    wt: '2,140 kg', se: '7', ca: '1,300 L',
    pr: price(62990, y, 2003, 1200)
  }
  specs[`Mitsubishi|Pajero|${y}|Exceed`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '170 kW (228 hp)', tq: '329 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~10.0 sec', qm: '~17.0 sec', ts: '~190 km/h',
    fc: '16.0L', fh: '12.0L', fx: '20.5L', ft: '95 RON',
    wt: '2,260 kg', se: '7', ca: '1,300 L',
    pr: price(74990, y, 2003, 1500)
  }
}

// ── PAJERO NT (2006–2009) ────────────────────────────────────────────────────
for (let y = 2006; y <= 2009; y++) {
  specs[`Mitsubishi|Pajero|${y}|GLX`] = {
    en: '4M41 3.2L DOHC DI-D Diesel', di: '3.2L', cy: '4',
    hp: '140 kW (188 hp)', tq: '441 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '9.8L', fh: '7.5L', fx: '12.8L', ft: 'Diesel',
    wt: '2,140 kg', se: '7', ca: '1,423 L',
    pr: price(56990, y, 2006, 1000)
  }
  specs[`Mitsubishi|Pajero|${y}|GLS`] = {
    en: '4M41 3.2L DOHC DI-D Diesel', di: '3.2L', cy: '4',
    hp: '140 kW (188 hp)', tq: '441 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '10.0L', fh: '7.8L', fx: '13.0L', ft: 'Diesel',
    wt: '2,200 kg', se: '7', ca: '1,423 L',
    pr: price(66990, y, 2006, 1200)
  }
  specs[`Mitsubishi|Pajero|${y}|Exceed`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '170 kW (228 hp)', tq: '329 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~9.8 sec', qm: '~17.0 sec', ts: '~193 km/h',
    fc: '15.5L', fh: '11.5L', fx: '20.0L', ft: '95 RON',
    wt: '2,310 kg', se: '7', ca: '1,423 L',
    pr: price(78990, y, 2006, 1500)
  }
}

// ── PAJERO NW (2009–2013) ────────────────────────────────────────────────────
for (let y = 2009; y <= 2013; y++) {
  specs[`Mitsubishi|Pajero|${y}|GLX`] = {
    en: '4M41 3.2L DOHC DI-D Diesel', di: '3.2L', cy: '4',
    hp: '140 kW (188 hp)', tq: '441 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '9.8L', fh: '7.5L', fx: '12.8L', ft: 'Diesel',
    wt: '2,215 kg', se: '7', ca: '1,423 L',
    pr: price(58990, y, 2009, 900)
  }
  specs[`Mitsubishi|Pajero|${y}|GLS`] = {
    en: '4M41 3.2L DOHC DI-D Diesel', di: '3.2L', cy: '4',
    hp: '140 kW (188 hp)', tq: '441 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '9.8L', fh: '7.5L', fx: '12.8L', ft: 'Diesel',
    wt: '2,250 kg', se: '7', ca: '1,423 L',
    pr: price(68990, y, 2009, 1100)
  }
  specs[`Mitsubishi|Pajero|${y}|Exceed`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '170 kW (228 hp)', tq: '329 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~9.8 sec', qm: '~17.0 sec', ts: '~193 km/h',
    fc: '15.3L', fh: '11.3L', fx: '19.8L', ft: '95 RON',
    wt: '2,320 kg', se: '7', ca: '1,423 L',
    pr: price(80990, y, 2009, 1300)
  }
}

// ── PAJERO NX (2014–2021) ────────────────────────────────────────────────────
for (let y = 2014; y <= 2021; y++) {
  specs[`Mitsubishi|Pajero|${y}|GLX`] = {
    en: '4M41 3.2L DOHC DI-D Diesel', di: '3.2L', cy: '4',
    hp: '140 kW (188 hp)', tq: '441 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '9.5L', fh: '7.3L', fx: '12.5L', ft: 'Diesel',
    wt: '2,215 kg', se: '7', ca: '1,423 L',
    pr: price(60990, y, 2014, 800)
  }
  specs[`Mitsubishi|Pajero|${y}|GLS`] = {
    en: '4M41 3.2L DOHC DI-D Diesel', di: '3.2L', cy: '4',
    hp: '140 kW (188 hp)', tq: '441 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '9.5L', fh: '7.3L', fx: '12.5L', ft: 'Diesel',
    wt: '2,255 kg', se: '7', ca: '1,423 L',
    pr: price(70990, y, 2014, 1000)
  }
  specs[`Mitsubishi|Pajero|${y}|Exceed`] = {
    en: '4M41 3.2L DOHC DI-D Diesel', di: '3.2L', cy: '4',
    hp: '140 kW (188 hp)', tq: '441 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '9.5L', fh: '7.3L', fx: '12.5L', ft: 'Diesel',
    wt: '2,285 kg', se: '7', ca: '1,423 L',
    pr: price(81990, y, 2014, 1200)
  }
}

// ── MAGNA TR (1985–1987) ─────────────────────────────────────────────────────
for (let y = 1985; y <= 1987; y++) {
  specs[`Mitsubishi|Magna|${y}|SE`] = {
    en: '4G54 2.6L SOHC 8V', di: '2.6L', cy: '4',
    hp: '81 kW (109 hp)', tq: '196 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '10.5L', fh: '7.8L', fx: '13.5L', ft: '91 RON',
    wt: '1,200 kg', se: '5', ca: '450 L',
    pr: price(13990, y, 1985, 700)
  }
  specs[`Mitsubishi|Magna|${y}|Executive`] = {
    en: '4G54 2.6L SOHC 8V', di: '2.6L', cy: '4',
    hp: '81 kW (109 hp)', tq: '196 Nm',
    tx: '3-speed auto', dr: 'FWD',
    z1: '~12.5 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '11.5L', fh: '8.5L', fx: '14.5L', ft: '91 RON',
    wt: '1,230 kg', se: '5', ca: '450 L',
    pr: price(16990, y, 1985, 800)
  }
}

// ── MAGNA TS (1987–1991) ─────────────────────────────────────────────────────
for (let y = 1987; y <= 1991; y++) {
  specs[`Mitsubishi|Magna|${y}|SE`] = {
    en: '4G54 2.6L SOHC 8V', di: '2.6L', cy: '4',
    hp: '81 kW (109 hp)', tq: '196 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '10.5L', fh: '7.8L', fx: '13.5L', ft: '91 RON',
    wt: '1,210 kg', se: '5', ca: '450 L',
    pr: price(15990, y, 1987, 600)
  }
  specs[`Mitsubishi|Magna|${y}|Executive`] = {
    en: '4G54 2.6L SOHC 8V', di: '2.6L', cy: '4',
    hp: '81 kW (109 hp)', tq: '196 Nm',
    tx: '3-speed auto', dr: 'FWD',
    z1: '~12.5 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '11.5L', fh: '8.5L', fx: '14.5L', ft: '91 RON',
    wt: '1,240 kg', se: '5', ca: '450 L',
    pr: price(18990, y, 1987, 700)
  }
  specs[`Mitsubishi|Magna|${y}|V6`] = {
    en: '6G72 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '107 kW (143 hp)', tq: '222 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '13.0L', fh: '9.5L', fx: '16.5L', ft: '91 RON',
    wt: '1,280 kg', se: '5', ca: '450 L',
    pr: price(22990, y, 1987, 900)
  }
}

// ── MAGNA TF (1991–1996) ─────────────────────────────────────────────────────
for (let y = 1991; y <= 1996; y++) {
  specs[`Mitsubishi|Magna|${y}|Executive`] = {
    en: '4G54 2.6L SOHC 8V', di: '2.6L', cy: '4',
    hp: '81 kW (109 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '11.0L', fh: '8.0L', fx: '14.0L', ft: '91 RON',
    wt: '1,250 kg', se: '5', ca: '455 L',
    pr: price(22990, y, 1991, 700)
  }
  specs[`Mitsubishi|Magna|${y}|V6 Executive`] = {
    en: '6G72 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '107 kW (143 hp)', tq: '222 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '13.5L', fh: '10.0L', fx: '17.0L', ft: '91 RON',
    wt: '1,290 kg', se: '5', ca: '455 L',
    pr: price(29990, y, 1991, 900)
  }
  specs[`Mitsubishi|Magna|${y}|Wagon`] = {
    en: '4G54 2.6L SOHC 8V', di: '2.6L', cy: '4',
    hp: '81 kW (109 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~12.5 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '11.5L', fh: '8.5L', fx: '14.5L', ft: '91 RON',
    wt: '1,310 kg', se: '5', ca: '925 L',
    pr: price(25990, y, 1991, 800)
  }
  specs[`Mitsubishi|Magna|${y}|V6 Wagon`] = {
    en: '6G72 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '107 kW (143 hp)', tq: '222 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~182 km/h',
    fc: '14.0L', fh: '10.5L', fx: '17.5L', ft: '91 RON',
    wt: '1,350 kg', se: '5', ca: '925 L',
    pr: price(32990, y, 1991, 1000)
  }
}

// ── MAGNA TH (1996–1999) ─────────────────────────────────────────────────────
for (let y = 1996; y <= 1999; y++) {
  specs[`Mitsubishi|Magna|${y}|Executive`] = {
    en: '4G64 2.4L SOHC 16V', di: '2.4L', cy: '4',
    hp: '96 kW (129 hp)', tq: '185 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,395 kg', se: '5', ca: '460 L',
    pr: price(27990, y, 1996, 700)
  }
  specs[`Mitsubishi|Magna|${y}|Sports`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '130 kW (174 hp)', tq: '240 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~190 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.0L', ft: '95 RON',
    wt: '1,445 kg', se: '5', ca: '460 L',
    pr: price(33990, y, 1996, 900)
  }
  specs[`Mitsubishi|Magna|${y}|V6 Advance`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '130 kW (174 hp)', tq: '240 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~190 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.0L', ft: '95 RON',
    wt: '1,460 kg', se: '5', ca: '460 L',
    pr: price(37990, y, 1996, 1000)
  }
}

// ── MAGNA TJ (1999–2003) ─────────────────────────────────────────────────────
for (let y = 1999; y <= 2003; y++) {
  specs[`Mitsubishi|Magna|${y}|Executive`] = {
    en: '4G64 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '106 kW (142 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~178 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,455 kg', se: '5', ca: '465 L',
    pr: price(29990, y, 1999, 600)
  }
  specs[`Mitsubishi|Magna|${y}|Sports`] = {
    en: '6G74 3.5L V6 SOHC 24V MIVEC', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~198 km/h',
    fc: '12.0L', fh: '8.5L', fx: '15.5L', ft: '95 RON',
    wt: '1,510 kg', se: '5', ca: '465 L',
    pr: price(36990, y, 1999, 900)
  }
  specs[`Mitsubishi|Magna|${y}|Wagon`] = {
    en: '4G64 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '106 kW (142 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,510 kg', se: '5', ca: '960 L',
    pr: price(33990, y, 1999, 700)
  }
}

// ── MAGNA TL (2003–2005) ─────────────────────────────────────────────────────
for (let y = 2003; y <= 2005; y++) {
  specs[`Mitsubishi|Magna|${y}|ES`] = {
    en: '4G64 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '106 kW (142 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~178 km/h',
    fc: '9.3L', fh: '6.8L', fx: '12.3L', ft: '91 RON',
    wt: '1,470 kg', se: '5', ca: '471 L',
    pr: price(31990, y, 2003, 500)
  }
  specs[`Mitsubishi|Magna|${y}|Advance`] = {
    en: '6G74 3.5L V6 SOHC 24V MIVEC', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~198 km/h',
    fc: '11.8L', fh: '8.3L', fx: '15.3L', ft: '95 RON',
    wt: '1,525 kg', se: '5', ca: '471 L',
    pr: price(37990, y, 2003, 700)
  }
  specs[`Mitsubishi|Magna|${y}|Sports`] = {
    en: '6G74 3.5L V6 SOHC 24V MIVEC', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~198 km/h',
    fc: '11.8L', fh: '8.3L', fx: '15.3L', ft: '95 RON',
    wt: '1,535 kg', se: '5', ca: '471 L',
    pr: price(40990, y, 2003, 800)
  }
  specs[`Mitsubishi|Magna|${y}|Wagon`] = {
    en: '4G64 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '106 kW (142 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '9.8L', fh: '7.3L', fx: '12.8L', ft: '91 RON',
    wt: '1,530 kg', se: '5', ca: '985 L',
    pr: price(35990, y, 2003, 600)
  }
}

// ── VERADA TV (1991–1996) ────────────────────────────────────────────────────
for (let y = 1991; y <= 1996; y++) {
  specs[`Mitsubishi|Verada|${y}|V6 Executive`] = {
    en: '6G72 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '107 kW (143 hp)', tq: '222 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~182 km/h',
    fc: '13.5L', fh: '10.0L', fx: '17.0L', ft: '91 RON',
    wt: '1,310 kg', se: '5', ca: '455 L',
    pr: price(35990, y, 1991, 1000)
  }
  specs[`Mitsubishi|Verada|${y}|GXi`] = {
    en: '6G72 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '107 kW (143 hp)', tq: '222 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~182 km/h',
    fc: '13.5L', fh: '10.0L', fx: '17.0L', ft: '91 RON',
    wt: '1,320 kg', se: '5', ca: '455 L',
    pr: price(39990, y, 1991, 1100)
  }
}

// ── VERADA TH (1996–1999) ────────────────────────────────────────────────────
for (let y = 1996; y <= 1999; y++) {
  specs[`Mitsubishi|Verada|${y}|GXi`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '130 kW (174 hp)', tq: '240 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~190 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.0L', ft: '95 RON',
    wt: '1,480 kg', se: '5', ca: '460 L',
    pr: price(42990, y, 1996, 1100)
  }
  specs[`Mitsubishi|Verada|${y}|VR-X`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '130 kW (174 hp)', tq: '240 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~190 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.0L', ft: '95 RON',
    wt: '1,500 kg', se: '5', ca: '460 L',
    pr: price(48990, y, 1996, 1300)
  }
}

// ── VERADA TJ (1999–2003) ────────────────────────────────────────────────────
for (let y = 1999; y <= 2003; y++) {
  specs[`Mitsubishi|Verada|${y}|GXi`] = {
    en: '6G74 3.5L V6 SOHC 24V MIVEC', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~198 km/h',
    fc: '12.0L', fh: '8.5L', fx: '15.5L', ft: '95 RON',
    wt: '1,540 kg', se: '5', ca: '465 L',
    pr: price(46990, y, 1999, 1200)
  }
  specs[`Mitsubishi|Verada|${y}|VR-X`] = {
    en: '6G74 3.5L V6 SOHC 24V MIVEC', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~198 km/h',
    fc: '12.0L', fh: '8.5L', fx: '15.5L', ft: '95 RON',
    wt: '1,560 kg', se: '5', ca: '465 L',
    pr: price(53990, y, 1999, 1300)
  }
}

// ── VERADA TL (2003–2005) ────────────────────────────────────────────────────
for (let y = 2003; y <= 2005; y++) {
  specs[`Mitsubishi|Verada|${y}|Xi`] = {
    en: '6G74 3.5L V6 SOHC 24V MIVEC', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~198 km/h',
    fc: '11.8L', fh: '8.3L', fx: '15.3L', ft: '95 RON',
    wt: '1,555 kg', se: '5', ca: '471 L',
    pr: price(48990, y, 2003, 1000)
  }
  specs[`Mitsubishi|Verada|${y}|VR-X`] = {
    en: '6G74 3.5L V6 SOHC 24V MIVEC', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~198 km/h',
    fc: '11.8L', fh: '8.3L', fx: '15.3L', ft: '95 RON',
    wt: '1,570 kg', se: '5', ca: '471 L',
    pr: price(55990, y, 2003, 1200)
  }
}

// ── TRITON MK (1986–1996) ────────────────────────────────────────────────────
for (let y = 1986; y <= 1996; y++) {
  specs[`Mitsubishi|Triton|${y}|GL`] = {
    en: '4G54 2.6L SOHC 8V', di: '2.6L', cy: '4',
    hp: '78 kW (105 hp)', tq: '187 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~13.5 sec', qm: '~20.0 sec', ts: '~158 km/h',
    fc: '11.0L', fh: '8.5L', fx: '14.0L', ft: '91 RON',
    wt: '1,240 kg', se: '2', ca: '—',
    pr: price(14990, y, 1986, 500)
  }
  specs[`Mitsubishi|Triton|${y}|GLX`] = {
    en: '4D55T 2.3L SOHC Turbo Diesel', di: '2.3L', cy: '4',
    hp: '63 kW (85 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~15.0 sec', qm: '~21.5 sec', ts: '~148 km/h',
    fc: '10.0L', fh: '8.0L', fx: '12.5L', ft: 'Diesel',
    wt: '1,510 kg', se: '5', ca: '—',
    pr: price(18990, y, 1986, 600)
  }
  specs[`Mitsubishi|Triton|${y}|GLS`] = {
    en: '6G72 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '107 kW (143 hp)', tq: '222 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~168 km/h',
    fc: '14.5L', fh: '11.0L', fx: '18.5L', ft: '91 RON',
    wt: '1,580 kg', se: '5', ca: '—',
    pr: price(24990, y, 1986, 700)
  }
}

// ── TRITON ML (1996–2006) ────────────────────────────────────────────────────
for (let y = 1996; y <= 2006; y++) {
  specs[`Mitsubishi|Triton|${y}|GL`] = {
    en: '4G64 2.4L SOHC 16V', di: '2.4L', cy: '4',
    hp: '96 kW (129 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~160 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,380 kg', se: '2', ca: '—',
    pr: price(19990, y, 1996, 600)
  }
  specs[`Mitsubishi|Triton|${y}|GLX`] = {
    en: '4D56T 2.5L SOHC Turbo Diesel', di: '2.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '240 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~14.0 sec', qm: '~20.5 sec', ts: '~150 km/h',
    fc: '10.0L', fh: '7.8L', fx: '12.8L', ft: 'Diesel',
    wt: '1,700 kg', se: '5', ca: '—',
    pr: price(25990, y, 1996, 700)
  }
  specs[`Mitsubishi|Triton|${y}|GL-R`] = {
    en: '6G72 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '107 kW (143 hp)', tq: '222 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~12.5 sec', qm: '~19.0 sec', ts: '~165 km/h',
    fc: '14.0L', fh: '10.5L', fx: '18.0L', ft: '91 RON',
    wt: '1,780 kg', se: '5', ca: '—',
    pr: price(32990, y, 1996, 800)
  }
}

// ── TRITON MN (2006–2015) ────────────────────────────────────────────────────
for (let y = 2006; y <= 2015; y++) {
  specs[`Mitsubishi|Triton|${y}|GL`] = {
    en: '4G64 2.4L MIVEC SOHC 16V', di: '2.4L', cy: '4',
    hp: '100 kW (134 hp)', tq: '196 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~162 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,540 kg', se: '2', ca: '—',
    pr: price(22990, y, 2006, 600)
  }
  specs[`Mitsubishi|Triton|${y}|GLX-R`] = {
    en: '4D56 2.5L DOHC DI-D Diesel', di: '2.5L', cy: '4',
    hp: '100 kW (134 hp)', tq: '314 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~160 km/h',
    fc: '9.0L', fh: '7.0L', fx: '11.5L', ft: 'Diesel',
    wt: '1,810 kg', se: '5', ca: '—',
    pr: price(30990, y, 2006, 700)
  }
  specs[`Mitsubishi|Triton|${y}|GLS`] = {
    en: '4D56 2.5L DOHC DI-D Diesel', di: '2.5L', cy: '4',
    hp: '100 kW (134 hp)', tq: '314 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~13.5 sec', qm: '~20.0 sec', ts: '~158 km/h',
    fc: '9.5L', fh: '7.5L', fx: '12.0L', ft: 'Diesel',
    wt: '1,865 kg', se: '5', ca: '—',
    pr: price(36990, y, 2006, 800)
  }
}

// ── TRITON MQ (2015–2019) ────────────────────────────────────────────────────
for (let y = 2015; y <= 2019; y++) {
  specs[`Mitsubishi|Triton|${y}|GL`] = {
    en: '4N15 2.4L DOHC MIVEC Diesel', di: '2.4L', cy: '4',
    hp: '133 kW (178 hp)', tq: '430 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '7.7L', fh: '6.2L', fx: '9.8L', ft: 'Diesel',
    wt: '1,700 kg', se: '2', ca: '—',
    pr: price(24990, y, 2015, 700)
  }
  specs[`Mitsubishi|Triton|${y}|GLS`] = {
    en: '4N15 2.4L DOHC MIVEC Diesel', di: '2.4L', cy: '4',
    hp: '133 kW (178 hp)', tq: '430 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '8.0L', fh: '6.5L', fx: '10.2L', ft: 'Diesel',
    wt: '1,960 kg', se: '5', ca: '—',
    pr: price(36990, y, 2015, 900)
  }
  specs[`Mitsubishi|Triton|${y}|Exceed`] = {
    en: '4N15 2.4L DOHC MIVEC Diesel', di: '2.4L', cy: '4',
    hp: '133 kW (178 hp)', tq: '430 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '8.0L', fh: '6.5L', fx: '10.2L', ft: 'Diesel',
    wt: '1,990 kg', se: '5', ca: '—',
    pr: price(44990, y, 2015, 1100)
  }
}

// ── TRITON MR (2019–2024) ────────────────────────────────────────────────────
for (let y = 2019; y <= 2024; y++) {
  specs[`Mitsubishi|Triton|${y}|GL`] = {
    en: '4N15 2.4L DOHC MIVEC Diesel', di: '2.4L', cy: '4',
    hp: '133 kW (178 hp)', tq: '430 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '7.7L', fh: '6.2L', fx: '9.8L', ft: 'Diesel',
    wt: '1,735 kg', se: '2', ca: '—',
    pr: price(25490, y, 2019, 700)
  }
  specs[`Mitsubishi|Triton|${y}|GLS`] = {
    en: '4N15 2.4L DOHC MIVEC Diesel', di: '2.4L', cy: '4',
    hp: '133 kW (178 hp)', tq: '430 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '8.3L', fh: '6.7L', fx: '10.5L', ft: 'Diesel',
    wt: '1,990 kg', se: '5', ca: '—',
    pr: price(40490, y, 2019, 900)
  }
  specs[`Mitsubishi|Triton|${y}|GSR`] = {
    en: '4N15 2.4L DOHC MIVEC Diesel', di: '2.4L', cy: '4',
    hp: '133 kW (178 hp)', tq: '430 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '8.3L', fh: '6.7L', fx: '10.5L', ft: 'Diesel',
    wt: '2,010 kg', se: '5', ca: '—',
    pr: price(47490, y, 2019, 1100)
  }
  specs[`Mitsubishi|Triton|${y}|Exceed`] = {
    en: '4N15 2.4L DOHC MIVEC Diesel', di: '2.4L', cy: '4',
    hp: '133 kW (178 hp)', tq: '430 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~168 km/h',
    fc: '8.3L', fh: '6.7L', fx: '10.5L', ft: 'Diesel',
    wt: '2,040 kg', se: '5', ca: '—',
    pr: price(52490, y, 2019, 1300)
  }
}

// ── OUTLANDER ZE (2001–2006) ─────────────────────────────────────────────────
for (let y = 2001; y <= 2006; y++) {
  specs[`Mitsubishi|Outlander|${y}|LS`] = {
    en: '4G63 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '114 kW (153 hp)', tq: '220 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.8 sec', ts: '~180 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,490 kg', se: '5', ca: '800 L',
    pr: price(28990, y, 2001, 700)
  }
  specs[`Mitsubishi|Outlander|${y}|VR-X`] = {
    en: '4G63 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '114 kW (153 hp)', tq: '220 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,590 kg', se: '5', ca: '800 L',
    pr: price(35990, y, 2001, 900)
  }
}

// ── OUTLANDER ZG (2006–2012) ─────────────────────────────────────────────────
for (let y = 2006; y <= 2012; y++) {
  specs[`Mitsubishi|Outlander|${y}|ES`] = {
    en: '4B12 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '124 kW (166 hp)', tq: '220 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~183 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.8L', ft: '91 RON',
    wt: '1,560 kg', se: '7', ca: '850 L',
    pr: price(31990, y, 2006, 700)
  }
  specs[`Mitsubishi|Outlander|${y}|LS`] = {
    en: '4B12 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '124 kW (166 hp)', tq: '220 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '9.5L', fh: '7.3L', fx: '12.3L', ft: '91 RON',
    wt: '1,660 kg', se: '7', ca: '850 L',
    pr: price(37990, y, 2006, 800)
  }
  specs[`Mitsubishi|Outlander|${y}|VR-X`] = {
    en: '6B31 3.0L V6 SOHC 24V MIVEC', di: '3.0L', cy: '6',
    hp: '162 kW (217 hp)', tq: '285 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~195 km/h',
    fc: '11.5L', fh: '8.5L', fx: '15.0L', ft: '95 RON',
    wt: '1,760 kg', se: '7', ca: '850 L',
    pr: price(46990, y, 2006, 1100)
  }
}

// ── OUTLANDER ZJ (2012–2021) ─────────────────────────────────────────────────
for (let y = 2012; y <= 2021; y++) {
  specs[`Mitsubishi|Outlander|${y}|ES`] = {
    en: '4J11 2.0L DOHC 16V MIVEC', di: '2.0L', cy: '4',
    hp: '110 kW (148 hp)', tq: '190 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~178 km/h',
    fc: '7.8L', fh: '5.8L', fx: '10.5L', ft: '91 RON',
    wt: '1,545 kg', se: '7', ca: '805 L',
    pr: price(29990, y, 2012, 600)
  }
  specs[`Mitsubishi|Outlander|${y}|LS`] = {
    en: '4B12 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '124 kW (166 hp)', tq: '220 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~10.5 sec', qm: '~17.8 sec', ts: '~180 km/h',
    fc: '8.8L', fh: '6.5L', fx: '11.8L', ft: '91 RON',
    wt: '1,645 kg', se: '7', ca: '805 L',
    pr: price(36990, y, 2012, 700)
  }
  specs[`Mitsubishi|Outlander|${y}|Exceed`] = {
    en: '4B12 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '124 kW (166 hp)', tq: '220 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~10.5 sec', qm: '~17.8 sec', ts: '~180 km/h',
    fc: '8.8L', fh: '6.5L', fx: '11.8L', ft: '91 RON',
    wt: '1,675 kg', se: '7', ca: '805 L',
    pr: price(44990, y, 2012, 900)
  }
  if (y >= 2014) {
    specs[`Mitsubishi|Outlander|${y}|PHEV`] = {
      en: '4B11 2.0L DOHC + dual electric motors', di: '2.0L PHEV', cy: '4',
      hp: '150 kW (201 hp) combined', tq: '339 Nm combined',
      tx: 'Single-speed auto', dr: 'AWD',
      z1: '~11.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
      fc: '1.9L', fh: '—', fx: '—', ft: 'PHEV (95 RON)',
      wt: '1,840 kg', se: '5', ca: '463 L',
      pr: price(50990, y, 2014, 800)
    }
  }
}

// ── OUTLANDER ZL (2021–2024) ─────────────────────────────────────────────────
for (let y = 2021; y <= 2024; y++) {
  specs[`Mitsubishi|Outlander|${y}|ES`] = {
    en: '4B12 2.5L SOHC 16V', di: '2.5L', cy: '4',
    hp: '135 kW (181 hp)', tq: '245 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~185 km/h',
    fc: '9.0L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,730 kg', se: '7', ca: '892 L',
    pr: price(37990, y, 2021, 800)
  }
  specs[`Mitsubishi|Outlander|${y}|LS`] = {
    en: '4B12 2.5L SOHC 16V', di: '2.5L', cy: '4',
    hp: '135 kW (181 hp)', tq: '245 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~185 km/h',
    fc: '9.0L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,745 kg', se: '7', ca: '892 L',
    pr: price(44990, y, 2021, 900)
  }
  specs[`Mitsubishi|Outlander|${y}|Exceed`] = {
    en: '4B12 2.5L SOHC 16V', di: '2.5L', cy: '4',
    hp: '135 kW (181 hp)', tq: '245 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~185 km/h',
    fc: '9.0L', fh: '7.0L', fx: '11.5L', ft: '91 RON',
    wt: '1,770 kg', se: '7', ca: '892 L',
    pr: price(55990, y, 2021, 1100)
  }
  specs[`Mitsubishi|Outlander|${y}|PHEV`] = {
    en: '4B12 2.4L DOHC MIVEC + dual electric motors', di: '2.4L PHEV', cy: '4',
    hp: '179 kW (240 hp) combined', tq: '370 Nm combined',
    tx: 'Single-speed auto', dr: 'AWD',
    z1: '~8.7 sec', qm: '~16.8 sec', ts: '~170 km/h',
    fc: '1.8L', fh: '—', fx: '—', ft: 'PHEV (95 RON)',
    wt: '2,010 kg', se: '7', ca: '865 L',
    pr: price(62990, y, 2021, 1300)
  }
}

// ── ASX ZGA (2010–2016) ──────────────────────────────────────────────────────
for (let y = 2010; y <= 2016; y++) {
  specs[`Mitsubishi|ASX|${y}|ES`] = {
    en: '4B11 2.0L DOHC 16V MIVEC', di: '2.0L', cy: '4',
    hp: '110 kW (148 hp)', tq: '190 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.8 sec', ts: '~182 km/h',
    fc: '7.8L', fh: '5.8L', fx: '10.5L', ft: '91 RON',
    wt: '1,380 kg', se: '5', ca: '393 L',
    pr: price(24990, y, 2010, 500)
  }
  specs[`Mitsubishi|ASX|${y}|LS`] = {
    en: '4B11 2.0L DOHC 16V MIVEC', di: '2.0L', cy: '4',
    hp: '110 kW (148 hp)', tq: '190 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '8.5L', fh: '6.3L', fx: '11.3L', ft: '91 RON',
    wt: '1,460 kg', se: '5', ca: '393 L',
    pr: price(29990, y, 2010, 600)
  }
  specs[`Mitsubishi|ASX|${y}|Aspire`] = {
    en: '4B11 2.0L DOHC 16V MIVEC', di: '2.0L', cy: '4',
    hp: '110 kW (148 hp)', tq: '190 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '8.5L', fh: '6.3L', fx: '11.3L', ft: '91 RON',
    wt: '1,480 kg', se: '5', ca: '393 L',
    pr: price(34990, y, 2010, 700)
  }
}

// ── ASX XC facelift (2016–2022) ──────────────────────────────────────────────
for (let y = 2016; y <= 2022; y++) {
  specs[`Mitsubishi|ASX|${y}|ES`] = {
    en: '4B11 2.0L DOHC 16V MIVEC', di: '2.0L', cy: '4',
    hp: '110 kW (148 hp)', tq: '190 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.8 sec', ts: '~182 km/h',
    fc: '7.5L', fh: '5.6L', fx: '10.2L', ft: '91 RON',
    wt: '1,400 kg', se: '5', ca: '393 L',
    pr: price(27490, y, 2016, 500)
  }
  specs[`Mitsubishi|ASX|${y}|LS`] = {
    en: '4B11 2.0L DOHC 16V MIVEC', di: '2.0L', cy: '4',
    hp: '110 kW (148 hp)', tq: '190 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '8.3L', fh: '6.2L', fx: '11.0L', ft: '91 RON',
    wt: '1,480 kg', se: '5', ca: '393 L',
    pr: price(32490, y, 2016, 600)
  }
  specs[`Mitsubishi|ASX|${y}|Exceed`] = {
    en: '4B11 2.0L DOHC 16V MIVEC', di: '2.0L', cy: '4',
    hp: '110 kW (148 hp)', tq: '190 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '8.3L', fh: '6.2L', fx: '11.0L', ft: '91 RON',
    wt: '1,500 kg', se: '5', ca: '393 L',
    pr: price(37490, y, 2016, 700)
  }
}

// ── ASX MK2 (2022–2024) ──────────────────────────────────────────────────────
for (let y = 2022; y <= 2024; y++) {
  specs[`Mitsubishi|ASX|${y}|MK2 ES`] = {
    en: '3A91 1.3L DOHC Turbo', di: '1.3L', cy: '3',
    hp: '96 kW (129 hp)', tq: '205 Nm',
    tx: '6-speed EDC', dr: 'FWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~188 km/h',
    fc: '6.3L', fh: '5.0L', fx: '8.5L', ft: '95 RON',
    wt: '1,269 kg', se: '5', ca: '358 L',
    pr: price(30990, y, 2022, 600)
  }
  specs[`Mitsubishi|ASX|${y}|MK2 LS`] = {
    en: '3A91 1.3L DOHC Turbo', di: '1.3L', cy: '3',
    hp: '96 kW (129 hp)', tq: '205 Nm',
    tx: '6-speed EDC', dr: 'FWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~188 km/h',
    fc: '6.3L', fh: '5.0L', fx: '8.5L', ft: '95 RON',
    wt: '1,289 kg', se: '5', ca: '358 L',
    pr: price(34990, y, 2022, 700)
  }
}

// ── ECLIPSE CROSS YA0 (2017–2022) ────────────────────────────────────────────
for (let y = 2017; y <= 2022; y++) {
  specs[`Mitsubishi|Eclipse Cross|${y}|ES`] = {
    en: '4B40 1.5L DOHC MIVEC-T Turbo', di: '1.5L', cy: '4',
    hp: '110 kW (148 hp)', tq: '250 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '7.6L', fh: '5.7L', fx: '10.4L', ft: '95 RON',
    wt: '1,480 kg', se: '5', ca: '341 L',
    pr: price(27990, y, 2017, 600)
  }
  specs[`Mitsubishi|Eclipse Cross|${y}|LS`] = {
    en: '4B40 1.5L DOHC MIVEC-T Turbo', di: '1.5L', cy: '4',
    hp: '110 kW (148 hp)', tq: '250 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~182 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.8L', ft: '95 RON',
    wt: '1,570 kg', se: '5', ca: '341 L',
    pr: price(33990, y, 2017, 700)
  }
  specs[`Mitsubishi|Eclipse Cross|${y}|Exceed`] = {
    en: '4B40 1.5L DOHC MIVEC-T Turbo', di: '1.5L', cy: '4',
    hp: '110 kW (148 hp)', tq: '250 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~182 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.8L', ft: '95 RON',
    wt: '1,590 kg', se: '5', ca: '341 L',
    pr: price(39990, y, 2017, 900)
  }
}

// ── ECLIPSE CROSS YB0 PHEV (2022–2024) ───────────────────────────────────────
for (let y = 2022; y <= 2024; y++) {
  specs[`Mitsubishi|Eclipse Cross|${y}|PHEV ES`] = {
    en: '4B12 2.4L DOHC + dual electric motors', di: '2.4L PHEV', cy: '4',
    hp: '165 kW (221 hp) combined', tq: '332 Nm combined',
    tx: 'Single-speed auto', dr: 'AWD',
    z1: '~9.5 sec', qm: '~17.3 sec', ts: '~170 km/h',
    fc: '1.9L', fh: '—', fx: '—', ft: 'PHEV (95 RON)',
    wt: '1,810 kg', se: '5', ca: '267 L',
    pr: price(41990, y, 2022, 800)
  }
  specs[`Mitsubishi|Eclipse Cross|${y}|PHEV Exceed`] = {
    en: '4B12 2.4L DOHC + dual electric motors', di: '2.4L PHEV', cy: '4',
    hp: '165 kW (221 hp) combined', tq: '332 Nm combined',
    tx: 'Single-speed auto', dr: 'AWD',
    z1: '~9.5 sec', qm: '~17.3 sec', ts: '~170 km/h',
    fc: '1.9L', fh: '—', fx: '—', ft: 'PHEV (95 RON)',
    wt: '1,840 kg', se: '5', ca: '267 L',
    pr: price(49990, y, 2022, 1000)
  }
}

// ── MIRAGE LA (2012–2024) ────────────────────────────────────────────────────
for (let y = 2012; y <= 2024; y++) {
  specs[`Mitsubishi|Mirage|${y}|ES`] = {
    en: '3A90 1.2L DOHC 12V MIVEC', di: '1.2L', cy: '3',
    hp: '57 kW (76 hp)', tq: '100 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~13.5 sec', qm: '~20.0 sec', ts: '~157 km/h',
    fc: '5.2L', fh: '4.3L', fx: '6.8L', ft: '91 RON',
    wt: '895 kg', se: '5', ca: '235 L',
    pr: price(14990, y, 2012, 300)
  }
  specs[`Mitsubishi|Mirage|${y}|LS`] = {
    en: '3A90 1.2L DOHC 12V MIVEC', di: '1.2L', cy: '3',
    hp: '57 kW (76 hp)', tq: '100 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~13.5 sec', qm: '~20.0 sec', ts: '~157 km/h',
    fc: '5.2L', fh: '4.3L', fx: '6.8L', ft: '91 RON',
    wt: '910 kg', se: '5', ca: '235 L',
    pr: price(17990, y, 2012, 300)
  }
}

// ── L300 (1983–1990) ─────────────────────────────────────────────────────────
for (let y = 1983; y <= 1990; y++) {
  specs[`Mitsubishi|L300|${y}|GL`] = {
    en: '4G63 2.0L SOHC 8V', di: '2.0L', cy: '4',
    hp: '65 kW (87 hp)', tq: '148 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.0 sec', qm: '~20.5 sec', ts: '~140 km/h',
    fc: '11.0L', fh: '8.5L', fx: '14.0L', ft: '91 RON',
    wt: '1,380 kg', se: '8', ca: '—',
    pr: price(14990, y, 1983, 500)
  }
}

// ── EXPRESS (1990–2004) ──────────────────────────────────────────────────────
for (let y = 1990; y <= 2004; y++) {
  specs[`Mitsubishi|Express|${y}|GL`] = {
    en: '4G63 2.0L SOHC 8V', di: '2.0L', cy: '4',
    hp: '70 kW (94 hp)', tq: '155 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.5 sec', qm: '~21.0 sec', ts: '~145 km/h',
    fc: '11.0L', fh: '8.5L', fx: '14.0L', ft: '91 RON',
    wt: '1,410 kg', se: '12', ca: '—',
    pr: price(22990, y, 1990, 500)
  }
  specs[`Mitsubishi|Express|${y}|GLX`] = {
    en: '4D56 2.5L SOHC Turbo Diesel', di: '2.5L', cy: '4',
    hp: '63 kW (85 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~16.0 sec', qm: '~22.0 sec', ts: '~135 km/h',
    fc: '10.0L', fh: '8.0L', fx: '13.0L', ft: 'Diesel',
    wt: '1,510 kg', se: '12', ca: '—',
    pr: price(26990, y, 1990, 600)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement26.json', JSON.stringify({ specs }, null, 2))
console.log('supplement26.json:', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => { const m = k.split('|')[1]; byModel[m] = (byModel[m] || 0) + 1 })
Object.entries(byModel).forEach(([m, c]) => console.log(' ', m + ':', c))
