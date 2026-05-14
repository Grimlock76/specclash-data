#!/usr/bin/env node
// gen22.cjs — Mazda modern: 2, 3, 6, CX-3, CX-5, CX-8, CX-9, BT-50, MX-30
const fs = require('fs')
const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, start, inc = 500) { return `~$${fmt(base + (year - start) * inc)}` }

// ── MAZDA 2 ───────────────────────────────────────────────────────────────────
// DY (2007-2010): Neo 1.5L / Maxx 1.5L
for (let y = 2007; y <= 2010; y++) {
  specs[`Mazda|2|${y}|Neo`] = {
    en: 'ZY-VE 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '77 kW (103 hp)', tq: '135 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.8 sec', qm: '~17.8 sec', ts: '~175 km/h',
    fc: '6.5L', fh: '5.0L', fx: '8.5L', ft: '91 RON',
    wt: '1,025 kg', se: '5', ca: '250 L',
    pr: price(14990, y, 2007, 400)
  }
  specs[`Mazda|2|${y}|Maxx`] = {
    en: 'ZY-VE 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '77 kW (103 hp)', tq: '135 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.8 sec', qm: '~17.8 sec', ts: '~175 km/h',
    fc: '6.5L', fh: '5.0L', fx: '8.5L', ft: '91 RON',
    wt: '1,035 kg', se: '5', ca: '250 L',
    pr: price(17990, y, 2007, 500)
  }
}

// DE (2011-2014): Neo / Maxx / GT — 1.5L
for (let y = 2011; y <= 2014; y++) {
  specs[`Mazda|2|${y}|Neo`] = {
    en: 'ZY-VE 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '77 kW (103 hp)', tq: '136 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.8 sec', qm: '~17.8 sec', ts: '~175 km/h',
    fc: '6.3L', fh: '5.0L', fx: '8.2L', ft: '91 RON',
    wt: '1,030 kg', se: '5', ca: '250 L',
    pr: price(16490, y, 2011, 400)
  }
  specs[`Mazda|2|${y}|Maxx`] = {
    en: 'ZY-VE 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '77 kW (103 hp)', tq: '136 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.8 sec', qm: '~17.8 sec', ts: '~175 km/h',
    fc: '6.3L', fh: '5.0L', fx: '8.2L', ft: '91 RON',
    wt: '1,040 kg', se: '5', ca: '250 L',
    pr: price(19490, y, 2011, 500)
  }
  specs[`Mazda|2|${y}|GT`] = {
    en: 'ZY-VE 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '77 kW (103 hp)', tq: '136 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.8 sec', qm: '~17.8 sec', ts: '~175 km/h',
    fc: '6.3L', fh: '5.0L', fx: '8.2L', ft: '91 RON',
    wt: '1,045 kg', se: '5', ca: '250 L',
    pr: price(22490, y, 2011, 600)
  }
}

// DJ/DL (2015-2023): Neo / Maxx / GT / Genki — 1.5L SKYACTIV-G
for (let y = 2015; y <= 2023; y++) {
  specs[`Mazda|2|${y}|Neo`] = {
    en: 'P5-VPS SKYACTIV-G 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '140 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~180 km/h',
    fc: '5.8L', fh: '4.5L', fx: '7.5L', ft: '91 RON',
    wt: '1,075 kg', se: '5', ca: '250 L',
    pr: price(17990, y, 2015, 400)
  }
  specs[`Mazda|2|${y}|Maxx`] = {
    en: 'P5-VPS SKYACTIV-G 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '140 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~180 km/h',
    fc: '5.8L', fh: '4.5L', fx: '7.5L', ft: '91 RON',
    wt: '1,080 kg', se: '5', ca: '250 L',
    pr: price(20990, y, 2015, 500)
  }
  specs[`Mazda|2|${y}|GT`] = {
    en: 'P5-VPS SKYACTIV-G 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '140 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~180 km/h',
    fc: '5.8L', fh: '4.5L', fx: '7.5L', ft: '91 RON',
    wt: '1,085 kg', se: '5', ca: '250 L',
    pr: price(24490, y, 2015, 600)
  }
  specs[`Mazda|2|${y}|Genki`] = {
    en: 'P5-VPS SKYACTIV-G 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '140 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~178 km/h',
    fc: '6.0L', fh: '4.8L', fx: '7.8L', ft: '91 RON',
    wt: '1,110 kg', se: '5', ca: '250 L',
    pr: price(27490, y, 2015, 600)
  }
}

// ── MAZDA 3 ───────────────────────────────────────────────────────────────────
// BK (2003-2005) early: Neo 1.6L / Maxx 2.0L / SP23 2.3L
for (let y = 2003; y <= 2005; y++) {
  specs[`Mazda|3|${y}|Neo`] = {
    en: 'ZY-VE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '77 kW (103 hp)', tq: '148 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,170 kg', se: '5', ca: '280 L',
    pr: price(20490, y, 2003, 400)
  }
  specs[`Mazda|3|${y}|Maxx`] = {
    en: 'LF-DE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '108 kW (145 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~200 km/h',
    fc: '8.5L', fh: '6.0L', fx: '11.0L', ft: '95 RON',
    wt: '1,215 kg', se: '5', ca: '280 L',
    pr: price(24490, y, 2003, 500)
  }
  specs[`Mazda|3|${y}|SP23`] = {
    en: 'L3-VE 2.3L DOHC 16V', di: '2.3L', cy: '4',
    hp: '120 kW (161 hp)', tq: '206 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~207 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,260 kg', se: '5', ca: '280 L',
    pr: price(27990, y, 2003, 600)
  }
}

// BK (2006-2008) with MPS
for (let y = 2006; y <= 2008; y++) {
  specs[`Mazda|3|${y}|Neo`] = {
    en: 'ZY-VE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '77 kW (103 hp)', tq: '148 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,175 kg', se: '5', ca: '280 L',
    pr: price(21490, y, 2006, 400)
  }
  specs[`Mazda|3|${y}|Maxx`] = {
    en: 'LF-DE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '108 kW (145 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~200 km/h',
    fc: '8.5L', fh: '6.0L', fx: '11.0L', ft: '95 RON',
    wt: '1,220 kg', se: '5', ca: '280 L',
    pr: price(25490, y, 2006, 500)
  }
  specs[`Mazda|3|${y}|SP23`] = {
    en: 'L3-VE 2.3L DOHC 16V', di: '2.3L', cy: '4',
    hp: '120 kW (161 hp)', tq: '206 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~207 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,265 kg', se: '5', ca: '280 L',
    pr: price(28990, y, 2006, 600)
  }
  specs[`Mazda|3|${y}|MPS`] = {
    en: 'L3-VDT 2.3L DOHC 16V Turbo', di: '2.3L', cy: '4',
    hp: '190 kW (255 hp)', tq: '380 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~6.1 sec', qm: '~14.4 sec', ts: '~250 km/h (limited)',
    fc: '10.5L', fh: '7.5L', fx: '13.5L', ft: '98 RON',
    wt: '1,390 kg', se: '5', ca: '280 L',
    pr: price(36990, y, 2006, 700)
  }
}

// BL (2009-2013): Neo 2.0L / Maxx 2.0L / SP25 2.5L / MPS 2.3T
for (let y = 2009; y <= 2013; y++) {
  specs[`Mazda|3|${y}|Neo`] = {
    en: 'LF-VE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '108 kW (145 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~200 km/h',
    fc: '8.0L', fh: '5.8L', fx: '10.5L', ft: '95 RON',
    wt: '1,235 kg', se: '5', ca: '280 L',
    pr: price(22990, y, 2009, 400)
  }
  specs[`Mazda|3|${y}|Maxx`] = {
    en: 'LF-VE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '200 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~205 km/h',
    fc: '8.0L', fh: '5.8L', fx: '10.5L', ft: '95 RON',
    wt: '1,245 kg', se: '5', ca: '280 L',
    pr: price(26990, y, 2009, 500)
  }
  specs[`Mazda|3|${y}|SP25`] = {
    en: 'L5-VE 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '132 kW (177 hp)', tq: '226 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~210 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,290 kg', se: '5', ca: '280 L',
    pr: price(30990, y, 2009, 600)
  }
  specs[`Mazda|3|${y}|MPS`] = {
    en: 'L3-VDT 2.3L DOHC 16V Turbo', di: '2.3L', cy: '4',
    hp: '190 kW (255 hp)', tq: '380 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~6.1 sec', qm: '~14.4 sec', ts: '~250 km/h (limited)',
    fc: '10.5L', fh: '7.5L', fx: '13.5L', ft: '98 RON',
    wt: '1,395 kg', se: '5', ca: '280 L',
    pr: price(38990, y, 2009, 700)
  }
}

// BM/BN (2014-2018): Neo / Maxx / SP25 / Astina (SKYACTIV-G)
for (let y = 2014; y <= 2018; y++) {
  specs[`Mazda|3|${y}|Neo`] = {
    en: 'P3-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '200 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~205 km/h',
    fc: '6.9L', fh: '5.2L', fx: '9.1L', ft: '91 RON',
    wt: '1,305 kg', se: '5', ca: '280 L',
    pr: price(23490, y, 2014, 400)
  }
  specs[`Mazda|3|${y}|Maxx`] = {
    en: 'P3-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '200 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~205 km/h',
    fc: '6.9L', fh: '5.2L', fx: '9.1L', ft: '91 RON',
    wt: '1,315 kg', se: '5', ca: '280 L',
    pr: price(27490, y, 2014, 500)
  }
  specs[`Mazda|3|${y}|SP25`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '138 kW (185 hp)', tq: '250 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~212 km/h',
    fc: '7.4L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,360 kg', se: '5', ca: '280 L',
    pr: price(31990, y, 2014, 600)
  }
  specs[`Mazda|3|${y}|Astina`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '138 kW (185 hp)', tq: '250 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~212 km/h',
    fc: '7.4L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,370 kg', se: '5', ca: '280 L',
    pr: price(36990, y, 2014, 700)
  }
}

// BP (2019-2023): SKYACTIV-G / e-SKYACTIV
for (let y = 2019; y <= 2023; y++) {
  specs[`Mazda|3|${y}|G20 Pure`] = {
    en: 'PE-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '213 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~205 km/h',
    fc: '6.7L', fh: '5.1L', fx: '8.8L', ft: '91 RON',
    wt: '1,320 kg', se: '5', ca: '285 L',
    pr: price(27490, y, 2019, 400)
  }
  specs[`Mazda|3|${y}|G20 Evolve`] = {
    en: 'PE-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '213 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~205 km/h',
    fc: '6.7L', fh: '5.1L', fx: '8.8L', ft: '91 RON',
    wt: '1,330 kg', se: '5', ca: '285 L',
    pr: price(30990, y, 2019, 500)
  }
  specs[`Mazda|3|${y}|G25 GT`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '139 kW (186 hp)', tq: '252 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~7.8 sec', qm: '~15.5 sec', ts: '~215 km/h',
    fc: '7.3L', fh: '5.4L', fx: '9.7L', ft: '91 RON',
    wt: '1,380 kg', se: '5', ca: '285 L',
    pr: price(35990, y, 2019, 600)
  }
  specs[`Mazda|3|${y}|Astina`] = {
    en: 'PY-VPTS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '139 kW (186 hp)', tq: '252 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~210 km/h',
    fc: '7.8L', fh: '5.8L', fx: '10.3L', ft: '91 RON',
    wt: '1,490 kg', se: '5', ca: '285 L',
    pr: price(43490, y, 2019, 700)
  }
}

// ── MAZDA 6 ───────────────────────────────────────────────────────────────────
// GG (2002-2007): Classic 2.0L / Luxury 2.3L / V6 3.0L
for (let y = 2002; y <= 2007; y++) {
  specs[`Mazda|6|${y}|Classic`] = {
    en: 'LF-DE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '108 kW (145 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,380 kg', se: '5', ca: '490 L',
    pr: price(27990, y, 2002, 600)
  }
  specs[`Mazda|6|${y}|Luxury`] = {
    en: 'L3-VE 2.3L DOHC 16V', di: '2.3L', cy: '4',
    hp: '118 kW (158 hp)', tq: '210 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~207 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '95 RON',
    wt: '1,420 kg', se: '5', ca: '490 L',
    pr: price(33990, y, 2002, 700)
  }
  specs[`Mazda|6|${y}|V6`] = {
    en: 'AJ 3.0L V6 DOHC 24V', di: '3.0L', cy: '6',
    hp: '163 kW (219 hp)', tq: '285 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~220 km/h',
    fc: '11.5L', fh: '8.5L', fx: '14.5L', ft: '95 RON',
    wt: '1,530 kg', se: '5', ca: '490 L',
    pr: price(41990, y, 2002, 900)
  }
}

// GH (2008-2012): Classic 2.0L / Luxury 2.5L / Sports 2.5L
for (let y = 2008; y <= 2012; y++) {
  specs[`Mazda|6|${y}|Classic`] = {
    en: 'LF-VE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '108 kW (145 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '8.8L', fh: '6.3L', fx: '11.5L', ft: '95 RON',
    wt: '1,430 kg', se: '5', ca: '490 L',
    pr: price(29990, y, 2008, 600)
  }
  specs[`Mazda|6|${y}|Luxury`] = {
    en: 'L5-VE 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '125 kW (168 hp)', tq: '226 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~208 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,490 kg', se: '5', ca: '490 L',
    pr: price(36990, y, 2008, 700)
  }
  specs[`Mazda|6|${y}|Sports`] = {
    en: 'L5-VE 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '125 kW (168 hp)', tq: '226 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.0 sec', ts: '~210 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,480 kg', se: '5', ca: '490 L',
    pr: price(40990, y, 2008, 800)
  }
}

// GJ/GL (2013-2017): Sport / Touring / Atenza — SKYACTIV-G
for (let y = 2013; y <= 2017; y++) {
  specs[`Mazda|6|${y}|Sport`] = {
    en: 'PE-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '138 kW (185 hp)', tq: '250 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.0 sec', ts: '~210 km/h',
    fc: '7.8L', fh: '5.8L', fx: '10.3L', ft: '91 RON',
    wt: '1,490 kg', se: '5', ca: '490 L',
    pr: price(30990, y, 2013, 600)
  }
  specs[`Mazda|6|${y}|Touring`] = {
    en: 'PE-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '138 kW (185 hp)', tq: '250 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~208 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.5L', ft: '91 RON',
    wt: '1,520 kg', se: '5', ca: '490 L',
    pr: price(36990, y, 2013, 700)
  }
  specs[`Mazda|6|${y}|Atenza`] = {
    en: 'PE-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '138 kW (185 hp)', tq: '250 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~208 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.5L', ft: '91 RON',
    wt: '1,535 kg', se: '5', ca: '490 L',
    pr: price(42990, y, 2013, 800)
  }
}

// GL facelift (2018-2023): Sport / Touring / GT / Atenza
for (let y = 2018; y <= 2023; y++) {
  specs[`Mazda|6|${y}|Sport`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '139 kW (186 hp)', tq: '252 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.0 sec', ts: '~210 km/h',
    fc: '7.7L', fh: '5.7L', fx: '10.1L', ft: '91 RON',
    wt: '1,505 kg', se: '5', ca: '490 L',
    pr: price(33990, y, 2018, 600)
  }
  specs[`Mazda|6|${y}|Touring`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '139 kW (186 hp)', tq: '252 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~8.3 sec', qm: '~16.0 sec', ts: '~210 km/h',
    fc: '7.7L', fh: '5.7L', fx: '10.1L', ft: '91 RON',
    wt: '1,515 kg', se: '5', ca: '490 L',
    pr: price(38990, y, 2018, 700)
  }
  specs[`Mazda|6|${y}|GT`] = {
    en: 'PY-VPTS SKYACTIV-G 2.5T DOHC 16V Turbo', di: '2.5L', cy: '4',
    hp: '170 kW (228 hp)', tq: '420 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.0 sec', qm: '~15.0 sec', ts: '~215 km/h',
    fc: '9.0L', fh: '6.5L', fx: '12.0L', ft: '95 RON',
    wt: '1,660 kg', se: '5', ca: '490 L',
    pr: price(48990, y, 2018, 900)
  }
  specs[`Mazda|6|${y}|Atenza`] = {
    en: 'PY-VPTS SKYACTIV-G 2.5T DOHC 16V Turbo', di: '2.5L', cy: '4',
    hp: '170 kW (228 hp)', tq: '420 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.0 sec', qm: '~15.0 sec', ts: '~215 km/h',
    fc: '9.0L', fh: '6.5L', fx: '12.0L', ft: '95 RON',
    wt: '1,670 kg', se: '5', ca: '490 L',
    pr: price(55990, y, 2018, 1000)
  }
}

// ── MAZDA CX-3 ───────────────────────────────────────────────────────────────
// DK (2015-2021): SKYACTIV-G 2.0L
for (let y = 2015; y <= 2018; y++) {
  specs[`Mazda|CX-3|${y}|Maxx`] = {
    en: 'PE-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '197 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~198 km/h',
    fc: '6.8L', fh: '5.1L', fx: '9.0L', ft: '91 RON',
    wt: '1,305 kg', se: '5', ca: '264 L',
    pr: price(24990, y, 2015, 500)
  }
  specs[`Mazda|CX-3|${y}|sTouring`] = {
    en: 'PE-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '197 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~9.2 sec', qm: '~17.0 sec', ts: '~196 km/h',
    fc: '7.4L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,420 kg', se: '5', ca: '264 L',
    pr: price(29990, y, 2015, 600)
  }
  specs[`Mazda|CX-3|${y}|Akari`] = {
    en: 'PE-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '197 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~9.2 sec', qm: '~17.0 sec', ts: '~196 km/h',
    fc: '7.4L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,430 kg', se: '5', ca: '264 L',
    pr: price(35990, y, 2015, 700)
  }
}
for (let y = 2019; y <= 2021; y++) {
  specs[`Mazda|CX-3|${y}|Maxx`] = {
    en: 'PE-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '197 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~198 km/h',
    fc: '6.8L', fh: '5.1L', fx: '9.0L', ft: '91 RON',
    wt: '1,310 kg', se: '5', ca: '264 L',
    pr: price(26990, y, 2019, 400)
  }
  specs[`Mazda|CX-3|${y}|sTouring+`] = {
    en: 'PE-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '197 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~9.2 sec', qm: '~17.0 sec', ts: '~196 km/h',
    fc: '7.4L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,425 kg', se: '5', ca: '264 L',
    pr: price(31990, y, 2019, 500)
  }
  specs[`Mazda|CX-3|${y}|Akari`] = {
    en: 'PE-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '197 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~9.2 sec', qm: '~17.0 sec', ts: '~196 km/h',
    fc: '7.4L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,435 kg', se: '5', ca: '264 L',
    pr: price(37990, y, 2019, 600)
  }
}

// ── MAZDA CX-5 ───────────────────────────────────────────────────────────────
// KE (2012-2016): SKYACTIV-G 2.0L / 2.5L
for (let y = 2012; y <= 2016; y++) {
  specs[`Mazda|CX-5|${y}|Maxx`] = {
    en: 'PE-VPS SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '114 kW (153 hp)', tq: '197 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~193 km/h',
    fc: '7.0L', fh: '5.3L', fx: '9.3L', ft: '91 RON',
    wt: '1,435 kg', se: '5', ca: '403 L',
    pr: price(27990, y, 2012, 600)
  }
  specs[`Mazda|CX-5|${y}|Maxx Sport`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '138 kW (185 hp)', tq: '250 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~200 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.5L', ft: '91 RON',
    wt: '1,620 kg', se: '5', ca: '403 L',
    pr: price(35990, y, 2012, 800)
  }
  specs[`Mazda|CX-5|${y}|GT`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '138 kW (185 hp)', tq: '250 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~200 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.5L', ft: '91 RON',
    wt: '1,635 kg', se: '5', ca: '403 L',
    pr: price(41990, y, 2012, 900)
  }
}

// KF (2017-2023): SKYACTIV-G 2.5L / 2.5T Turbo
for (let y = 2017; y <= 2023; y++) {
  specs[`Mazda|CX-5|${y}|Maxx`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '139 kW (186 hp)', tq: '252 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~200 km/h',
    fc: '7.5L', fh: '5.6L', fx: '9.9L', ft: '91 RON',
    wt: '1,530 kg', se: '5', ca: '442 L',
    pr: price(31990, y, 2017, 600)
  }
  specs[`Mazda|CX-5|${y}|Touring`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '139 kW (186 hp)', tq: '252 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.7 sec', qm: '~16.5 sec', ts: '~198 km/h',
    fc: '7.8L', fh: '5.8L', fx: '10.3L', ft: '91 RON',
    wt: '1,640 kg', se: '5', ca: '442 L',
    pr: price(37990, y, 2017, 700)
  }
  specs[`Mazda|CX-5|${y}|GT`] = {
    en: 'PY-VPTS SKYACTIV-G 2.5T DOHC Turbo', di: '2.5L', cy: '4',
    hp: '170 kW (228 hp)', tq: '420 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.0 sec', qm: '~15.0 sec', ts: '~210 km/h',
    fc: '8.8L', fh: '6.5L', fx: '11.8L', ft: '95 RON',
    wt: '1,720 kg', se: '5', ca: '442 L',
    pr: price(44990, y, 2017, 800)
  }
  specs[`Mazda|CX-5|${y}|Akera`] = {
    en: 'PY-VPTS SKYACTIV-G 2.5T DOHC Turbo', di: '2.5L', cy: '4',
    hp: '170 kW (228 hp)', tq: '420 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.0 sec', qm: '~15.0 sec', ts: '~210 km/h',
    fc: '8.8L', fh: '6.5L', fx: '11.8L', ft: '95 RON',
    wt: '1,730 kg', se: '5', ca: '442 L',
    pr: price(51990, y, 2017, 900)
  }
}

// ── MAZDA CX-8 ───────────────────────────────────────────────────────────────
// KG (2018-2023): SKYACTIV-G 2.5L / SKYACTIV-D 2.2L diesel
for (let y = 2018; y <= 2020; y++) {
  specs[`Mazda|CX-8|${y}|Sport`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '139 kW (186 hp)', tq: '252 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~8.8 sec', qm: '~16.5 sec', ts: '~195 km/h',
    fc: '8.3L', fh: '6.3L', fx: '11.0L', ft: '91 RON',
    wt: '1,820 kg', se: '7', ca: '258 L',
    pr: price(40990, y, 2018, 700)
  }
  specs[`Mazda|CX-8|${y}|Touring`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '139 kW (186 hp)', tq: '252 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.8 sec', qm: '~16.5 sec', ts: '~195 km/h',
    fc: '8.8L', fh: '6.6L', fx: '11.8L', ft: '91 RON',
    wt: '1,925 kg', se: '7', ca: '258 L',
    pr: price(47990, y, 2018, 800)
  }
  specs[`Mazda|CX-8|${y}|Asaki`] = {
    en: 'SH-VPTS SKYACTIV-D 2.2L DOHC turbo diesel', di: '2.2L', cy: '4',
    hp: '140 kW (188 hp)', tq: '450 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~198 km/h',
    fc: '6.3L', fh: '5.1L', fx: '8.0L', ft: 'Diesel',
    wt: '1,970 kg', se: '7', ca: '258 L',
    pr: price(57990, y, 2018, 1000)
  }
}
for (let y = 2021; y <= 2023; y++) {
  specs[`Mazda|CX-8|${y}|Sport`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '139 kW (186 hp)', tq: '252 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~8.8 sec', qm: '~16.5 sec', ts: '~195 km/h',
    fc: '8.3L', fh: '6.3L', fx: '11.0L', ft: '91 RON',
    wt: '1,825 kg', se: '7', ca: '258 L',
    pr: price(43990, y, 2021, 600)
  }
  specs[`Mazda|CX-8|${y}|Touring`] = {
    en: 'PY-VPS SKYACTIV-G 2.5L DOHC 16V', di: '2.5L', cy: '4',
    hp: '139 kW (186 hp)', tq: '252 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.8 sec', qm: '~16.5 sec', ts: '~195 km/h',
    fc: '8.8L', fh: '6.6L', fx: '11.8L', ft: '91 RON',
    wt: '1,930 kg', se: '7', ca: '258 L',
    pr: price(49990, y, 2021, 700)
  }
  specs[`Mazda|CX-8|${y}|GT`] = {
    en: 'PY-VPTS SKYACTIV-G 2.5T DOHC Turbo', di: '2.5L', cy: '4',
    hp: '170 kW (228 hp)', tq: '420 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.5 sec', qm: '~15.3 sec', ts: '~205 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '95 RON',
    wt: '1,980 kg', se: '7', ca: '258 L',
    pr: price(56990, y, 2021, 800)
  }
  specs[`Mazda|CX-8|${y}|Asaki`] = {
    en: 'SH-VPTS SKYACTIV-D 2.2L DOHC turbo diesel', di: '2.2L', cy: '4',
    hp: '140 kW (188 hp)', tq: '450 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~198 km/h',
    fc: '6.3L', fh: '5.1L', fx: '8.0L', ft: 'Diesel',
    wt: '1,990 kg', se: '7', ca: '258 L',
    pr: price(62990, y, 2021, 900)
  }
}

// ── MAZDA CX-9 ───────────────────────────────────────────────────────────────
// TB1 (2007-2012): Classic / Luxury / Grand Touring — 3.7L V6
for (let y = 2007; y <= 2012; y++) {
  specs[`Mazda|CX-9|${y}|Classic`] = {
    en: 'CYCLONE 3.7L V6 DOHC 24V', di: '3.7L', cy: '6',
    hp: '201 kW (270 hp)', tq: '356 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '13.5L', fh: '9.5L', fx: '17.5L', ft: '95 RON',
    wt: '2,000 kg', se: '7', ca: '270 L',
    pr: price(40990, y, 2007, 800)
  }
  specs[`Mazda|CX-9|${y}|Luxury`] = {
    en: 'CYCLONE 3.7L V6 DOHC 24V', di: '3.7L', cy: '6',
    hp: '201 kW (270 hp)', tq: '356 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~198 km/h',
    fc: '14.0L', fh: '9.8L', fx: '18.0L', ft: '95 RON',
    wt: '2,090 kg', se: '7', ca: '270 L',
    pr: price(48990, y, 2007, 1000)
  }
  specs[`Mazda|CX-9|${y}|Grand Touring`] = {
    en: 'CYCLONE 3.7L V6 DOHC 24V', di: '3.7L', cy: '6',
    hp: '201 kW (270 hp)', tq: '356 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~198 km/h',
    fc: '14.0L', fh: '9.8L', fx: '18.0L', ft: '95 RON',
    wt: '2,100 kg', se: '7', ca: '270 L',
    pr: price(57990, y, 2007, 1200)
  }
}

// TB2 (2013-2016): Classic / Luxury / GT — 3.7L V6
for (let y = 2013; y <= 2016; y++) {
  specs[`Mazda|CX-9|${y}|Classic`] = {
    en: 'CYCLONE 3.7L V6 DOHC 24V', di: '3.7L', cy: '6',
    hp: '201 kW (270 hp)', tq: '356 Nm',
    tx: '6-speed auto', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '13.5L', fh: '9.5L', fx: '17.5L', ft: '95 RON',
    wt: '2,010 kg', se: '7', ca: '270 L',
    pr: price(45990, y, 2013, 800)
  }
  specs[`Mazda|CX-9|${y}|Luxury`] = {
    en: 'CYCLONE 3.7L V6 DOHC 24V', di: '3.7L', cy: '6',
    hp: '201 kW (270 hp)', tq: '356 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~198 km/h',
    fc: '14.0L', fh: '9.8L', fx: '18.0L', ft: '95 RON',
    wt: '2,095 kg', se: '7', ca: '270 L',
    pr: price(53990, y, 2013, 1000)
  }
  specs[`Mazda|CX-9|${y}|GT`] = {
    en: 'CYCLONE 3.7L V6 DOHC 24V', di: '3.7L', cy: '6',
    hp: '201 kW (270 hp)', tq: '356 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~198 km/h',
    fc: '14.0L', fh: '9.8L', fx: '18.0L', ft: '95 RON',
    wt: '2,105 kg', se: '7', ca: '270 L',
    pr: price(61990, y, 2013, 1200)
  }
}

// TC (2017-2023): SKYACTIV-G 2.5T Turbo
for (let y = 2017; y <= 2023; y++) {
  specs[`Mazda|CX-9|${y}|Sport`] = {
    en: 'PY-VPTS SKYACTIV-G 2.5T DOHC Turbo', di: '2.5L', cy: '4',
    hp: '170 kW (228 hp)', tq: '420 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '95 RON',
    wt: '1,940 kg', se: '7', ca: '230 L',
    pr: price(47990, y, 2017, 800)
  }
  specs[`Mazda|CX-9|${y}|Touring`] = {
    en: 'PY-VPTS SKYACTIV-G 2.5T DOHC Turbo', di: '2.5L', cy: '4',
    hp: '170 kW (228 hp)', tq: '420 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '95 RON',
    wt: '1,955 kg', se: '7', ca: '230 L',
    pr: price(54990, y, 2017, 900)
  }
  specs[`Mazda|CX-9|${y}|GT`] = {
    en: 'PY-VPTS SKYACTIV-G 2.5T DOHC Turbo', di: '2.5L', cy: '4',
    hp: '170 kW (228 hp)', tq: '420 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '95 RON',
    wt: '1,965 kg', se: '7', ca: '230 L',
    pr: price(60990, y, 2017, 1000)
  }
  specs[`Mazda|CX-9|${y}|Azami`] = {
    en: 'PY-VPTS SKYACTIV-G 2.5T DOHC Turbo', di: '2.5L', cy: '4',
    hp: '170 kW (228 hp)', tq: '420 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '95 RON',
    wt: '1,975 kg', se: '7', ca: '230 L',
    pr: price(67990, y, 2017, 1100)
  }
}

// ── MAZDA BT-50 ──────────────────────────────────────────────────────────────
// J97M (2006-2010): XT / XTR / GT — 3.0L diesel (Ranger-based)
for (let y = 2006; y <= 2010; y++) {
  specs[`Mazda|BT-50|${y}|XT`] = {
    en: 'WEAT 3.0L inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '115 kW (154 hp)', tq: '380 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.0L', ft: 'Diesel',
    wt: '1,760 kg', se: '5', ca: null,
    pr: price(27990, y, 2006, 700)
  }
  specs[`Mazda|BT-50|${y}|XTR`] = {
    en: 'WEAT 3.0L inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '115 kW (154 hp)', tq: '380 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.0L', ft: 'Diesel',
    wt: '1,775 kg', se: '5', ca: null,
    pr: price(32990, y, 2006, 800)
  }
  specs[`Mazda|BT-50|${y}|GT`] = {
    en: 'WEAT 3.0L inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '115 kW (154 hp)', tq: '380 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~12.5 sec', qm: '~19.0 sec', ts: '~163 km/h',
    fc: '11.0L', fh: '8.5L', fx: '13.5L', ft: 'Diesel',
    wt: '1,790 kg', se: '5', ca: null,
    pr: price(38990, y, 2006, 900)
  }
}

// UP (2011-2020): XT / XTR / GT — 3.2L diesel (Ranger-based)
for (let y = 2011; y <= 2020; y++) {
  specs[`Mazda|BT-50|${y}|XT`] = {
    en: 'P5AT 3.2L inline-5 turbo diesel', di: '3.2L', cy: '5',
    hp: '147 kW (197 hp)', tq: '470 Nm',
    tx: '6-speed manual', dr: '4WD',
    z1: '~11.0 sec', qm: '~17.5 sec', ts: '~170 km/h',
    fc: '9.8L', fh: '7.5L', fx: '12.5L', ft: 'Diesel',
    wt: '1,900 kg', se: '5', ca: null,
    pr: price(29990, y, 2011, 600)
  }
  specs[`Mazda|BT-50|${y}|XTR`] = {
    en: 'P5AT 3.2L inline-5 turbo diesel', di: '3.2L', cy: '5',
    hp: '147 kW (197 hp)', tq: '470 Nm',
    tx: '6-speed manual', dr: '4WD',
    z1: '~11.0 sec', qm: '~17.5 sec', ts: '~170 km/h',
    fc: '9.8L', fh: '7.5L', fx: '12.5L', ft: 'Diesel',
    wt: '1,920 kg', se: '5', ca: null,
    pr: price(36990, y, 2011, 700)
  }
  specs[`Mazda|BT-50|${y}|GT`] = {
    en: 'P5AT 3.2L inline-5 turbo diesel', di: '3.2L', cy: '5',
    hp: '147 kW (197 hp)', tq: '470 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~168 km/h',
    fc: '10.3L', fh: '7.8L', fx: '13.0L', ft: 'Diesel',
    wt: '1,940 kg', se: '5', ca: null,
    pr: price(43990, y, 2011, 800)
  }
}

// TF (2021-2023): XT / XTR / GT — 3.0L diesel (Isuzu-based)
for (let y = 2021; y <= 2023; y++) {
  specs[`Mazda|BT-50|${y}|XT`] = {
    en: '4JJ3-TCX 3.0L inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '140 kW (188 hp)', tq: '450 Nm',
    tx: '6-speed manual', dr: '4WD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~168 km/h',
    fc: '8.8L', fh: '6.8L', fx: '11.5L', ft: 'Diesel',
    wt: '1,930 kg', se: '5', ca: null,
    pr: price(36990, y, 2021, 800)
  }
  specs[`Mazda|BT-50|${y}|XTR`] = {
    en: '4JJ3-TCX 3.0L inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '140 kW (188 hp)', tq: '450 Nm',
    tx: '6-speed manual', dr: '4WD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~168 km/h',
    fc: '8.8L', fh: '6.8L', fx: '11.5L', ft: 'Diesel',
    wt: '1,945 kg', se: '5', ca: null,
    pr: price(44990, y, 2021, 900)
  }
  specs[`Mazda|BT-50|${y}|GT`] = {
    en: '4JJ3-TCX 3.0L inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '140 kW (188 hp)', tq: '450 Nm',
    tx: '6-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '9.2L', fh: '7.0L', fx: '12.0L', ft: 'Diesel',
    wt: '1,960 kg', se: '5', ca: null,
    pr: price(51990, y, 2021, 1000)
  }
}

// ── MAZDA MX-30 ──────────────────────────────────────────────────────────────
// DR (2021-2023): Pure EV / GT EV
for (let y = 2021; y <= 2023; y++) {
  specs[`Mazda|MX-30|${y}|Pure`] = {
    en: 'e-SKYACTIV 35.5 kWh EV', di: 'Electric', cy: 'Electric',
    hp: '107 kW (143 hp)', tq: '271 Nm',
    tx: 'Single-speed', dr: 'FWD',
    z1: '~9.7 sec', qm: '~17.0 sec', ts: '~140 km/h',
    fc: '18.5L eq', fh: '16.5L eq', fx: '21.0L eq', ft: 'Electric',
    wt: '1,695 kg', se: '4', ca: '341 L',
    pr: price(43990, y, 2021, 700)
  }
  specs[`Mazda|MX-30|${y}|GT`] = {
    en: 'e-SKYACTIV 35.5 kWh EV', di: 'Electric', cy: 'Electric',
    hp: '107 kW (143 hp)', tq: '271 Nm',
    tx: 'Single-speed', dr: 'FWD',
    z1: '~9.7 sec', qm: '~17.0 sec', ts: '~140 km/h',
    fc: '18.5L eq', fh: '16.5L eq', fx: '21.0L eq', ft: 'Electric',
    wt: '1,700 kg', se: '4', ca: '341 L',
    pr: price(50990, y, 2021, 800)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement22.json', JSON.stringify({ specs }, null, 2))
console.log('supplement22.json:', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => { const m = k.split('|')[1]; byModel[m] = (byModel[m] || 0) + 1 })
Object.entries(byModel).forEach(([m, c]) => console.log(' ', m + ':', c))
