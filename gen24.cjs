#!/usr/bin/env node
// gen24.cjs — Nissan: Patrol, Navara, X-Trail, Pathfinder, Qashqai, Juke, Micra, Dualis
const fs = require('fs')
const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, start, inc = 500) { return `~$${fmt(base + (year - start) * inc)}` }

// ── NISSAN PATROL ─────────────────────────────────────────────────────────────
// Y60 (1987-1997): DX / GL / GX — TB42E 4.2L inline-6 petrol + RD28 diesel
for (let y = 1987; y <= 1997; y++) {
  specs[`Nissan|Patrol|${y}|DX`] = {
    en: 'TB42E 4.2L SOHC inline-6 EFI', di: '4.2L', cy: '6',
    hp: '110 kW (148 hp)', tq: '282 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~13.5 sec', qm: '~19.5 sec', ts: '~160 km/h',
    fc: '17.0L', fh: '13.0L', fx: '21.0L', ft: '91 RON',
    wt: '2,020 kg', se: '5', ca: null,
    pr: price(28990, y, 1987, 700)
  }
  specs[`Nissan|Patrol|${y}|GL`] = {
    en: 'TB42E 4.2L SOHC inline-6 EFI', di: '4.2L', cy: '6',
    hp: '110 kW (148 hp)', tq: '282 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~13.5 sec', qm: '~19.5 sec', ts: '~160 km/h',
    fc: '17.0L', fh: '13.0L', fx: '21.0L', ft: '91 RON',
    wt: '2,090 kg', se: '7', ca: null,
    pr: price(35990, y, 1987, 800)
  }
  specs[`Nissan|Patrol|${y}|GX`] = {
    en: 'RD28T 2.8L SOHC inline-6 turbo diesel', di: '2.8L', cy: '6',
    hp: '85 kW (114 hp)', tq: '250 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~16.0 sec', qm: '~22.0 sec', ts: '~150 km/h',
    fc: '13.5L', fh: '10.5L', fx: '17.0L', ft: 'Diesel',
    wt: '2,100 kg', se: '7', ca: null,
    pr: price(42990, y, 1987, 1000)
  }
}

// Y61 early (1998-2004): DX / ST — TB45E 4.5L / ZD30DDTi diesel
for (let y = 1998; y <= 2004; y++) {
  specs[`Nissan|Patrol|${y}|DX`] = {
    en: 'TB45E 4.5L SOHC inline-6 EFI', di: '4.5L', cy: '6',
    hp: '130 kW (174 hp)', tq: '333 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~167 km/h',
    fc: '17.5L', fh: '13.5L', fx: '22.0L', ft: '91 RON',
    wt: '2,200 kg', se: '7', ca: null,
    pr: price(40990, y, 1998, 800)
  }
  specs[`Nissan|Patrol|${y}|ST`] = {
    en: 'ZD30DDTi 3.0L DOHC inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '118 kW (158 hp)', tq: '380 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~158 km/h',
    fc: '12.5L', fh: '9.5L', fx: '16.0L', ft: 'Diesel',
    wt: '2,280 kg', se: '7', ca: null,
    pr: price(52990, y, 1998, 1000)
  }
}

// Y61 late (2005-2012): DX / ST / Ti
for (let y = 2005; y <= 2012; y++) {
  specs[`Nissan|Patrol|${y}|DX`] = {
    en: 'TB48DE 4.8L DOHC inline-6 EFI', di: '4.8L', cy: '6',
    hp: '175 kW (235 hp)', tq: '407 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~177 km/h',
    fc: '18.0L', fh: '13.5L', fx: '23.0L', ft: '91 RON',
    wt: '2,340 kg', se: '7', ca: null,
    pr: price(48990, y, 2005, 900)
  }
  specs[`Nissan|Patrol|${y}|ST`] = {
    en: 'ZD30DDTi 3.0L DOHC inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '118 kW (158 hp)', tq: '380 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~158 km/h',
    fc: '12.5L', fh: '9.5L', fx: '16.0L', ft: 'Diesel',
    wt: '2,380 kg', se: '7', ca: null,
    pr: price(57990, y, 2005, 1000)
  }
  specs[`Nissan|Patrol|${y}|Ti`] = {
    en: 'TB48DE 4.8L DOHC inline-6 EFI', di: '4.8L', cy: '6',
    hp: '175 kW (235 hp)', tq: '407 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~177 km/h',
    fc: '18.5L', fh: '14.0L', fx: '23.5L', ft: '91 RON',
    wt: '2,420 kg', se: '7', ca: null,
    pr: price(69990, y, 2005, 1200)
  }
}

// Y62 (2013-2023): ST / ST-L / Ti / Ti-L — VK56VD 5.6L V8
for (let y = 2013; y <= 2023; y++) {
  specs[`Nissan|Patrol|${y}|ST`] = {
    en: 'VK56VD 5.6L V8 DOHC 32V', di: '5.6L', cy: '8',
    hp: '298 kW (400 hp)', tq: '560 Nm',
    tx: '7-speed auto', dr: '4WD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '17.0L', fh: '12.5L', fx: '22.5L', ft: '95 RON',
    wt: '2,770 kg', se: '7', ca: '490 L',
    pr: price(65990, y, 2013, 1200)
  }
  specs[`Nissan|Patrol|${y}|ST-L`] = {
    en: 'VK56VD 5.6L V8 DOHC 32V', di: '5.6L', cy: '8',
    hp: '298 kW (400 hp)', tq: '560 Nm',
    tx: '7-speed auto', dr: '4WD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '17.0L', fh: '12.5L', fx: '22.5L', ft: '95 RON',
    wt: '2,790 kg', se: '7', ca: '490 L',
    pr: price(76990, y, 2013, 1500)
  }
  specs[`Nissan|Patrol|${y}|Ti`] = {
    en: 'VK56VD 5.6L V8 DOHC 32V', di: '5.6L', cy: '8',
    hp: '298 kW (400 hp)', tq: '560 Nm',
    tx: '7-speed auto', dr: '4WD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '17.0L', fh: '12.5L', fx: '22.5L', ft: '95 RON',
    wt: '2,820 kg', se: '7', ca: '490 L',
    pr: price(92990, y, 2013, 1800)
  }
  specs[`Nissan|Patrol|${y}|Ti-L`] = {
    en: 'VK56VD 5.6L V8 DOHC 32V', di: '5.6L', cy: '8',
    hp: '298 kW (400 hp)', tq: '560 Nm',
    tx: '7-speed auto', dr: '4WD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~200 km/h',
    fc: '17.0L', fh: '12.5L', fx: '22.5L', ft: '95 RON',
    wt: '2,840 kg', se: '7', ca: '490 L',
    pr: price(108990, y, 2013, 2000)
  }
}

// ── NISSAN NAVARA ─────────────────────────────────────────────────────────────
// D21 (1986-1997): DX / SE — TD27 2.7L diesel
for (let y = 1986; y <= 1997; y++) {
  specs[`Nissan|Navara|${y}|DX`] = {
    en: 'TD27 2.7L SOHC inline-4 diesel', di: '2.7L', cy: '4',
    hp: '59 kW (79 hp)', tq: '190 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~18.0 sec', qm: '~23.0 sec', ts: '~140 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.0L', ft: 'Diesel',
    wt: '1,390 kg', se: '2', ca: null,
    pr: price(18990, y, 1986, 500)
  }
  specs[`Nissan|Navara|${y}|SE`] = {
    en: 'Z24i 2.4L SOHC inline-4 EFI', di: '2.4L', cy: '4',
    hp: '74 kW (99 hp)', tq: '175 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~15.5 sec', qm: '~21.5 sec', ts: '~148 km/h',
    fc: '12.5L', fh: '9.5L', fx: '15.5L', ft: '91 RON',
    wt: '1,490 kg', se: '5', ca: null,
    pr: price(24990, y, 1986, 700)
  }
}

// D22 (1997-2005): DX / ST / ST-R — ZD30DDTi diesel
for (let y = 1997; y <= 2005; y++) {
  specs[`Nissan|Navara|${y}|DX`] = {
    en: 'ZD30DDTi 3.0L DOHC inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '100 kW (134 hp)', tq: '300 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.0 sec', qm: '~20.0 sec', ts: '~155 km/h',
    fc: '10.0L', fh: '7.5L', fx: '12.5L', ft: 'Diesel',
    wt: '1,560 kg', se: '2', ca: null,
    pr: price(24990, y, 1997, 600)
  }
  specs[`Nissan|Navara|${y}|ST`] = {
    en: 'ZD30DDTi 3.0L DOHC inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '100 kW (134 hp)', tq: '300 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~14.0 sec', qm: '~20.5 sec', ts: '~153 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.0L', ft: 'Diesel',
    wt: '1,680 kg', se: '5', ca: null,
    pr: price(31990, y, 1997, 700)
  }
  specs[`Nissan|Navara|${y}|ST-R`] = {
    en: 'ZD30DDTi 3.0L DOHC inline-4 turbo diesel', di: '3.0L', cy: '4',
    hp: '100 kW (134 hp)', tq: '300 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~14.0 sec', qm: '~20.5 sec', ts: '~153 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.0L', ft: 'Diesel',
    wt: '1,700 kg', se: '5', ca: null,
    pr: price(38990, y, 1997, 900)
  }
}

// D40 (2005-2015): ST / ST-X / LE — YD25DDTi diesel
for (let y = 2005; y <= 2015; y++) {
  specs[`Nissan|Navara|${y}|ST`] = {
    en: 'YD25DDTi 2.5L DOHC inline-4 turbo diesel', di: '2.5L', cy: '4',
    hp: '126 kW (169 hp)', tq: '403 Nm',
    tx: '6-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: 'Diesel',
    wt: '1,870 kg', se: '5', ca: null,
    pr: price(30990, y, 2005, 700)
  }
  specs[`Nissan|Navara|${y}|ST-X`] = {
    en: 'YD25DDTi 2.5L DOHC inline-4 turbo diesel', di: '2.5L', cy: '4',
    hp: '126 kW (169 hp)', tq: '403 Nm',
    tx: '6-speed manual', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: 'Diesel',
    wt: '1,900 kg', se: '5', ca: null,
    pr: price(38990, y, 2005, 900)
  }
  specs[`Nissan|Navara|${y}|LE`] = {
    en: 'YD25DDTi 2.5L DOHC inline-4 turbo diesel', di: '2.5L', cy: '4',
    hp: '126 kW (169 hp)', tq: '403 Nm',
    tx: '7-speed auto', dr: '4WD',
    z1: '~12.5 sec', qm: '~19.0 sec', ts: '~163 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: 'Diesel',
    wt: '1,940 kg', se: '5', ca: null,
    pr: price(46990, y, 2005, 1100)
  }
}

// D23/NP300 (2015-2023): ST / ST-X / PRO-4X — YS23DDTT diesel
for (let y = 2015; y <= 2023; y++) {
  specs[`Nissan|Navara|${y}|ST`] = {
    en: 'YD25DDTi 2.5L DOHC inline-4 turbo diesel', di: '2.5L', cy: '4',
    hp: '140 kW (188 hp)', tq: '450 Nm',
    tx: '6-speed manual', dr: '4WD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~168 km/h',
    fc: '8.6L', fh: '6.5L', fx: '11.3L', ft: 'Diesel',
    wt: '1,950 kg', se: '5', ca: null,
    pr: price(33990, y, 2015, 700)
  }
  specs[`Nissan|Navara|${y}|ST-X`] = {
    en: 'YD25DDTi 2.5L DOHC inline-4 turbo diesel', di: '2.5L', cy: '4',
    hp: '140 kW (188 hp)', tq: '450 Nm',
    tx: '6-speed manual', dr: '4WD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~168 km/h',
    fc: '8.6L', fh: '6.5L', fx: '11.3L', ft: 'Diesel',
    wt: '1,975 kg', se: '5', ca: null,
    pr: price(41990, y, 2015, 900)
  }
  specs[`Nissan|Navara|${y}|PRO-4X`] = {
    en: 'YD25DDTi 2.5L DOHC inline-4 turbo diesel', di: '2.5L', cy: '4',
    hp: '140 kW (188 hp)', tq: '450 Nm',
    tx: '7-speed auto', dr: '4WD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.8L', ft: 'Diesel',
    wt: '2,020 kg', se: '5', ca: null,
    pr: price(52990, y, 2015, 1200)
  }
}

// ── NISSAN X-TRAIL ─────────────────────────────────────────────────────────────
// T30 (2001-2007): ST / Ti / TS — QR25DE 2.5L
for (let y = 2001; y <= 2007; y++) {
  specs[`Nissan|X-Trail|${y}|ST`] = {
    en: 'QR25DE 2.5L DOHC inline-4 16V', di: '2.5L', cy: '4',
    hp: '124 kW (166 hp)', tq: '225 Nm',
    tx: '5-speed manual', dr: 'AWD',
    z1: '~10.0 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,500 kg', se: '5', ca: '450 L',
    pr: price(29990, y, 2001, 600)
  }
  specs[`Nissan|X-Trail|${y}|Ti`] = {
    en: 'QR25DE 2.5L DOHC inline-4 16V', di: '2.5L', cy: '4',
    hp: '124 kW (166 hp)', tq: '225 Nm',
    tx: '5-speed manual', dr: 'AWD',
    z1: '~10.0 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,530 kg', se: '5', ca: '450 L',
    pr: price(37990, y, 2001, 800)
  }
  specs[`Nissan|X-Trail|${y}|TS`] = {
    en: 'QR25DE 2.5L DOHC inline-4 16V', di: '2.5L', cy: '4',
    hp: '124 kW (166 hp)', tq: '225 Nm',
    tx: '5-speed manual', dr: 'AWD',
    z1: '~10.0 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,550 kg', se: '5', ca: '450 L',
    pr: price(44990, y, 2001, 1000)
  }
}

// T31 (2007-2013): ST / Ti / Ti-S — MR20DE 2.0L / QR25DE 2.5L
for (let y = 2007; y <= 2013; y++) {
  specs[`Nissan|X-Trail|${y}|ST`] = {
    en: 'MR20DE 2.0L DOHC inline-4 16V', di: '2.0L', cy: '4',
    hp: '103 kW (138 hp)', tq: '196 Nm',
    tx: '6-speed manual', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~178 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.8L', ft: '91 RON',
    wt: '1,590 kg', se: '5', ca: '455 L',
    pr: price(31990, y, 2007, 600)
  }
  specs[`Nissan|X-Trail|${y}|Ti`] = {
    en: 'QR25DE 2.5L DOHC inline-4 16V', di: '2.5L', cy: '4',
    hp: '124 kW (166 hp)', tq: '225 Nm',
    tx: '6-speed manual', dr: 'AWD',
    z1: '~10.0 sec', qm: '~17.0 sec', ts: '~188 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,650 kg', se: '5', ca: '455 L',
    pr: price(39990, y, 2007, 800)
  }
  specs[`Nissan|X-Trail|${y}|Ti-S`] = {
    en: 'QR25DE 2.5L DOHC inline-4 16V', di: '2.5L', cy: '4',
    hp: '124 kW (166 hp)', tq: '225 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.5L', ft: '91 RON',
    wt: '1,680 kg', se: '5', ca: '455 L',
    pr: price(47990, y, 2007, 1000)
  }
}

// T32 (2014-2023): ST / ST-L / Ti / Ti-L — MR20DD 2.0L
for (let y = 2014; y <= 2023; y++) {
  specs[`Nissan|X-Trail|${y}|ST`] = {
    en: 'MR20DD 2.0L DOHC inline-4 DIG', di: '2.0L', cy: '4',
    hp: '106 kW (142 hp)', tq: '200 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~178 km/h',
    fc: '7.5L', fh: '5.8L', fx: '9.8L', ft: '91 RON',
    wt: '1,540 kg', se: '7', ca: '388 L',
    pr: price(28990, y, 2014, 600)
  }
  specs[`Nissan|X-Trail|${y}|ST-L`] = {
    en: 'MR20DD 2.0L DOHC inline-4 DIG', di: '2.0L', cy: '4',
    hp: '106 kW (142 hp)', tq: '200 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~176 km/h',
    fc: '7.9L', fh: '6.0L', fx: '10.4L', ft: '91 RON',
    wt: '1,640 kg', se: '7', ca: '388 L',
    pr: price(34990, y, 2014, 700)
  }
  specs[`Nissan|X-Trail|${y}|Ti`] = {
    en: 'MR20DD 2.0L DOHC inline-4 DIG', di: '2.0L', cy: '4',
    hp: '106 kW (142 hp)', tq: '200 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~176 km/h',
    fc: '7.9L', fh: '6.0L', fx: '10.4L', ft: '91 RON',
    wt: '1,660 kg', se: '7', ca: '388 L',
    pr: price(42990, y, 2014, 800)
  }
  specs[`Nissan|X-Trail|${y}|Ti-L`] = {
    en: 'MR20DD 2.0L DOHC inline-4 DIG', di: '2.0L', cy: '4',
    hp: '106 kW (142 hp)', tq: '200 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~176 km/h',
    fc: '7.9L', fh: '6.0L', fx: '10.4L', ft: '91 RON',
    wt: '1,680 kg', se: '7', ca: '388 L',
    pr: price(50990, y, 2014, 1000)
  }
}

// ── NISSAN PATHFINDER ─────────────────────────────────────────────────────────
// WD21 (1986-1995): DX / ST — TD27 diesel / VG30E petrol
for (let y = 1986; y <= 1995; y++) {
  specs[`Nissan|Pathfinder|${y}|DX`] = {
    en: 'VG30E 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '109 kW (146 hp)', tq: '228 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~160 km/h',
    fc: '14.5L', fh: '11.0L', fx: '18.0L', ft: '91 RON',
    wt: '1,610 kg', se: '5', ca: null,
    pr: price(24990, y, 1986, 600)
  }
  specs[`Nissan|Pathfinder|${y}|ST`] = {
    en: 'VG30E 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '109 kW (146 hp)', tq: '228 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~160 km/h',
    fc: '14.5L', fh: '11.0L', fx: '18.0L', ft: '91 RON',
    wt: '1,660 kg', se: '7', ca: null,
    pr: price(30990, y, 1986, 800)
  }
}

// R50 (1995-2005): ST / Ti — VQ35DE 3.5L V6
for (let y = 1995; y <= 2005; y++) {
  specs[`Nissan|Pathfinder|${y}|ST`] = {
    en: 'VQ35DE 3.5L V6 DOHC 24V', di: '3.5L', cy: '6',
    hp: '175 kW (235 hp)', tq: '319 Nm',
    tx: '5-speed auto', dr: 'AWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~185 km/h',
    fc: '13.5L', fh: '10.0L', fx: '17.5L', ft: '95 RON',
    wt: '1,870 kg', se: '7', ca: '420 L',
    pr: price(42990, y, 1995, 900)
  }
  specs[`Nissan|Pathfinder|${y}|Ti`] = {
    en: 'VQ35DE 3.5L V6 DOHC 24V', di: '3.5L', cy: '6',
    hp: '175 kW (235 hp)', tq: '319 Nm',
    tx: '5-speed auto', dr: 'AWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~185 km/h',
    fc: '13.5L', fh: '10.0L', fx: '17.5L', ft: '95 RON',
    wt: '1,920 kg', se: '7', ca: '420 L',
    pr: price(54990, y, 1995, 1200)
  }
}

// R51 (2005-2013): ST / Ti — VQ40DE 4.0L V6
for (let y = 2005; y <= 2013; y++) {
  specs[`Nissan|Pathfinder|${y}|ST`] = {
    en: 'VQ40DE 4.0L V6 DOHC 24V', di: '4.0L', cy: '6',
    hp: '198 kW (265 hp)', tq: '385 Nm',
    tx: '5-speed auto', dr: 'AWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~188 km/h',
    fc: '13.0L', fh: '9.5L', fx: '17.0L', ft: '95 RON',
    wt: '2,000 kg', se: '7', ca: '460 L',
    pr: price(44990, y, 2005, 900)
  }
  specs[`Nissan|Pathfinder|${y}|Ti`] = {
    en: 'VQ40DE 4.0L V6 DOHC 24V', di: '4.0L', cy: '6',
    hp: '198 kW (265 hp)', tq: '385 Nm',
    tx: '5-speed auto', dr: 'AWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~188 km/h',
    fc: '13.0L', fh: '9.5L', fx: '17.0L', ft: '95 RON',
    wt: '2,040 kg', se: '7', ca: '460 L',
    pr: price(56990, y, 2005, 1200)
  }
}

// R52 (2013-2023): ST / Ti / Ti-L — VQ35DE 3.5L V6 hybrid
for (let y = 2013; y <= 2023; y++) {
  specs[`Nissan|Pathfinder|${y}|ST`] = {
    en: 'VQ35DE 3.5L V6 DOHC 24V', di: '3.5L', cy: '6',
    hp: '202 kW (271 hp)', tq: '340 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~195 km/h',
    fc: '12.0L', fh: '9.0L', fx: '16.0L', ft: '95 RON',
    wt: '2,070 kg', se: '7', ca: '453 L',
    pr: price(47990, y, 2013, 900)
  }
  specs[`Nissan|Pathfinder|${y}|Ti`] = {
    en: 'VQ35DE 3.5L V6 DOHC 24V', di: '3.5L', cy: '6',
    hp: '202 kW (271 hp)', tq: '340 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~195 km/h',
    fc: '12.0L', fh: '9.0L', fx: '16.0L', ft: '95 RON',
    wt: '2,110 kg', se: '7', ca: '453 L',
    pr: price(60990, y, 2013, 1100)
  }
  specs[`Nissan|Pathfinder|${y}|Ti-L`] = {
    en: 'VQ35DE 3.5L V6 DOHC 24V', di: '3.5L', cy: '6',
    hp: '202 kW (271 hp)', tq: '340 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~195 km/h',
    fc: '12.0L', fh: '9.0L', fx: '16.0L', ft: '95 RON',
    wt: '2,130 kg', se: '7', ca: '453 L',
    pr: price(72990, y, 2013, 1300)
  }
}

// ── NISSAN QASHQAI ────────────────────────────────────────────────────────────
// J10 (2007-2013): ST / Ti — MR20DE 2.0L
for (let y = 2007; y <= 2013; y++) {
  specs[`Nissan|Qashqai|${y}|ST`] = {
    en: 'MR20DE 2.0L DOHC inline-4 16V', di: '2.0L', cy: '4',
    hp: '103 kW (138 hp)', tq: '196 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~180 km/h',
    fc: '8.5L', fh: '6.5L', fx: '11.0L', ft: '91 RON',
    wt: '1,395 kg', se: '5', ca: '410 L',
    pr: price(23990, y, 2007, 500)
  }
  specs[`Nissan|Qashqai|${y}|Ti`] = {
    en: 'MR20DE 2.0L DOHC inline-4 16V', di: '2.0L', cy: '4',
    hp: '103 kW (138 hp)', tq: '196 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~178 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,505 kg', se: '5', ca: '410 L',
    pr: price(32990, y, 2007, 700)
  }
}

// J11 (2014-2021): ST / ST-L / Ti — HR16DE 1.6L or MR16DDT 1.6T
for (let y = 2014; y <= 2021; y++) {
  specs[`Nissan|Qashqai|${y}|ST`] = {
    en: 'HR16DE 1.6L DOHC inline-4 16V', di: '1.6L', cy: '4',
    hp: '86 kW (115 hp)', tq: '156 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~12.5 sec', qm: '~18.8 sec', ts: '~170 km/h',
    fc: '7.0L', fh: '5.3L', fx: '9.3L', ft: '91 RON',
    wt: '1,345 kg', se: '5', ca: '430 L',
    pr: price(24990, y, 2014, 500)
  }
  specs[`Nissan|Qashqai|${y}|ST-L`] = {
    en: 'MR16DDT 1.6L DOHC inline-4 Turbo', di: '1.6L', cy: '4',
    hp: '120 kW (161 hp)', tq: '240 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~195 km/h',
    fc: '7.5L', fh: '5.7L', fx: '10.0L', ft: '95 RON',
    wt: '1,415 kg', se: '5', ca: '430 L',
    pr: price(31990, y, 2014, 600)
  }
  specs[`Nissan|Qashqai|${y}|Ti`] = {
    en: 'MR16DDT 1.6L DOHC inline-4 Turbo', di: '1.6L', cy: '4',
    hp: '120 kW (161 hp)', tq: '240 Nm',
    tx: 'CVT', dr: 'AWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~190 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.8L', ft: '95 RON',
    wt: '1,520 kg', se: '5', ca: '430 L',
    pr: price(39990, y, 2014, 700)
  }
}

// J12 (2022-2023): ST / ST-L / Ti — MR20DD 2.0L VC-Turbo
for (let y = 2022; y <= 2023; y++) {
  specs[`Nissan|Qashqai|${y}|ST`] = {
    en: 'KR15DDT 1.3L DOHC inline-4 Turbo', di: '1.3L', cy: '4',
    hp: '103 kW (138 hp)', tq: '245 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~177 km/h',
    fc: '6.4L', fh: '5.0L', fx: '8.5L', ft: '95 RON',
    wt: '1,400 kg', se: '5', ca: '418 L',
    pr: price(34990, y, 2022, 800)
  }
  specs[`Nissan|Qashqai|${y}|ST-L`] = {
    en: 'KR15DDT 1.3L DOHC inline-4 Turbo', di: '1.3L', cy: '4',
    hp: '103 kW (138 hp)', tq: '245 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~177 km/h',
    fc: '6.4L', fh: '5.0L', fx: '8.5L', ft: '95 RON',
    wt: '1,420 kg', se: '5', ca: '418 L',
    pr: price(40990, y, 2022, 1000)
  }
  specs[`Nissan|Qashqai|${y}|Ti`] = {
    en: 'e-POWER 1.5L 3-cyl + electric motor', di: '1.5L', cy: '3',
    hp: '150 kW (201 hp)', tq: '330 Nm',
    tx: 'Single-speed', dr: 'FWD',
    z1: '~7.9 sec', qm: '~15.5 sec', ts: '~170 km/h',
    fc: '6.0L', fh: '5.0L', fx: '7.5L', ft: '91 RON',
    wt: '1,650 kg', se: '5', ca: '418 L',
    pr: price(48990, y, 2022, 1200)
  }
}

// ── NISSAN JUKE ───────────────────────────────────────────────────────────────
// F15 (2011-2019): ST / ST-S / Ti — MR16DDT 1.6L Turbo
for (let y = 2011; y <= 2019; y++) {
  specs[`Nissan|Juke|${y}|ST`] = {
    en: 'HR15DE 1.5L DOHC inline-4 16V', di: '1.5L', cy: '4',
    hp: '81 kW (109 hp)', tq: '146 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~168 km/h',
    fc: '7.5L', fh: '5.5L', fx: '10.0L', ft: '91 RON',
    wt: '1,220 kg', se: '5', ca: '251 L',
    pr: price(22990, y, 2011, 400)
  }
  specs[`Nissan|Juke|${y}|ST-S`] = {
    en: 'MR16DDT 1.6L DOHC inline-4 Turbo', di: '1.6L', cy: '4',
    hp: '140 kW (188 hp)', tq: '240 Nm',
    tx: '6-speed DCT', dr: 'FWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~200 km/h',
    fc: '8.5L', fh: '6.3L', fx: '11.5L', ft: '95 RON',
    wt: '1,320 kg', se: '5', ca: '251 L',
    pr: price(27990, y, 2011, 500)
  }
  specs[`Nissan|Juke|${y}|Ti`] = {
    en: 'MR16DDT 1.6L DOHC inline-4 Turbo', di: '1.6L', cy: '4',
    hp: '140 kW (188 hp)', tq: '240 Nm',
    tx: '6-speed DCT', dr: 'AWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~195 km/h',
    fc: '9.0L', fh: '6.8L', fx: '12.0L', ft: '95 RON',
    wt: '1,430 kg', se: '5', ca: '251 L',
    pr: price(32990, y, 2011, 600)
  }
}

// ── NISSAN MICRA ─────────────────────────────────────────────────────────────
// K12 (2003-2010): ST — CR12DE 1.2L
for (let y = 2003; y <= 2010; y++) {
  specs[`Nissan|Micra|${y}|ST`] = {
    en: 'CR12DE 1.2L DOHC inline-4 16V', di: '1.2L', cy: '4',
    hp: '48 kW (64 hp)', tq: '110 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~14.0 sec', qm: '~20.5 sec', ts: '~155 km/h',
    fc: '7.0L', fh: '5.0L', fx: '9.5L', ft: '91 RON',
    wt: '940 kg', se: '5', ca: '240 L',
    pr: price(13990, y, 2003, 300)
  }
}

// K13 (2010-2018): ST / ST-L — HR12DE 1.2L
for (let y = 2010; y <= 2018; y++) {
  specs[`Nissan|Micra|${y}|ST`] = {
    en: 'HR12DE 1.2L DOHC inline-4 16V', di: '1.2L', cy: '4',
    hp: '59 kW (79 hp)', tq: '114 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.5 sec', qm: '~19.0 sec', ts: '~162 km/h',
    fc: '5.8L', fh: '4.3L', fx: '7.9L', ft: '91 RON',
    wt: '1,010 kg', se: '5', ca: '265 L',
    pr: price(14990, y, 2010, 300)
  }
  specs[`Nissan|Micra|${y}|ST-L`] = {
    en: 'HR12DE 1.2L DOHC inline-4 16V', di: '1.2L', cy: '4',
    hp: '59 kW (79 hp)', tq: '114 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~160 km/h',
    fc: '6.2L', fh: '4.7L', fx: '8.4L', ft: '91 RON',
    wt: '1,030 kg', se: '5', ca: '265 L',
    pr: price(17990, y, 2010, 400)
  }
}

// ── NISSAN DUALIS ─────────────────────────────────────────────────────────────
// J10 (2007-2013): ST / ST+2 / Ti — MR20DE 2.0L
for (let y = 2007; y <= 2013; y++) {
  specs[`Nissan|Dualis|${y}|ST`] = {
    en: 'MR20DE 2.0L DOHC inline-4 16V', di: '2.0L', cy: '4',
    hp: '103 kW (138 hp)', tq: '196 Nm',
    tx: '6-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~180 km/h',
    fc: '8.3L', fh: '6.3L', fx: '10.8L', ft: '91 RON',
    wt: '1,475 kg', se: '5', ca: '400 L',
    pr: price(25990, y, 2007, 500)
  }
  specs[`Nissan|Dualis|${y}|ST+2`] = {
    en: 'MR20DE 2.0L DOHC inline-4 16V', di: '2.0L', cy: '4',
    hp: '103 kW (138 hp)', tq: '196 Nm',
    tx: '6-speed manual', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~178 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.8L', ft: '91 RON',
    wt: '1,575 kg', se: '7', ca: '380 L',
    pr: price(31990, y, 2007, 700)
  }
  specs[`Nissan|Dualis|${y}|Ti`] = {
    en: 'MR20DE 2.0L DOHC inline-4 16V', di: '2.0L', cy: '4',
    hp: '103 kW (138 hp)', tq: '196 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~177 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,605 kg', se: '7', ca: '380 L',
    pr: price(38990, y, 2007, 900)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement24.json', JSON.stringify({ specs }, null, 2))
console.log('supplement24.json:', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => { const m = k.split('|')[1]; byModel[m] = (byModel[m] || 0) + 1 })
Object.entries(byModel).forEach(([m, c]) => console.log(' ', m + ':', c))
