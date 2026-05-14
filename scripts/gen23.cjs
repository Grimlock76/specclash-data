#!/usr/bin/env node
// gen23.cjs — Nissan classics: Skyline, 300ZX, 370Z, GT-R, Pulsar, Maxima
const fs = require('fs')
const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, start, inc = 500) { return `~$${fmt(base + (year - start) * inc)}` }

// ── NISSAN SKYLINE ────────────────────────────────────────────────────────────
// R32 (1989-1993): GTS / GTS-T / GT-R
for (let y = 1989; y <= 1993; y++) {
  specs[`Nissan|Skyline|${y}|GTS`] = {
    en: 'RB20DE 2.0L DOHC inline-6', di: '2.0L', cy: '6',
    hp: '102 kW (137 hp)', tq: '176 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~210 km/h',
    fc: '10.5L', fh: '7.5L', fx: '13.5L', ft: '95 RON',
    wt: '1,270 kg', se: '5', ca: '380 L',
    pr: price(38990, y, 1989, 1200)
  }
  specs[`Nissan|Skyline|${y}|GTS-T`] = {
    en: 'RB20DET 2.0L DOHC inline-6 Turbo', di: '2.0L', cy: '6',
    hp: '147 kW (197 hp)', tq: '255 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~7.0 sec', qm: '~15.3 sec', ts: '~230 km/h',
    fc: '12.0L', fh: '8.5L', fx: '15.5L', ft: '95 RON',
    wt: '1,320 kg', se: '5', ca: '380 L',
    pr: price(48990, y, 1989, 1500)
  }
  specs[`Nissan|Skyline|${y}|GT-R`] = {
    en: 'RB26DETT 2.6L DOHC inline-6 twin turbo', di: '2.6L', cy: '6',
    hp: '206 kW (276 hp)', tq: '353 Nm',
    tx: '5-speed manual', dr: 'AWD',
    z1: '~5.4 sec', qm: '~13.8 sec', ts: '~250 km/h (limited)',
    fc: '13.5L', fh: '9.5L', fx: '17.5L', ft: '98 RON',
    wt: '1,560 kg', se: '4', ca: '315 L',
    pr: price(75990, y, 1989, 2000)
  }
}

// R33 (1994-1998): GTS / GTS-T / GT-R
for (let y = 1994; y <= 1998; y++) {
  specs[`Nissan|Skyline|${y}|GTS`] = {
    en: 'RB25DE 2.5L DOHC inline-6', di: '2.5L', cy: '6',
    hp: '143 kW (192 hp)', tq: '226 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~220 km/h',
    fc: '11.0L', fh: '8.0L', fx: '14.0L', ft: '95 RON',
    wt: '1,380 kg', se: '5', ca: '390 L',
    pr: price(52990, y, 1994, 1500)
  }
  specs[`Nissan|Skyline|${y}|GTS-T`] = {
    en: 'RB25DET 2.5L DOHC inline-6 Turbo', di: '2.5L', cy: '6',
    hp: '187 kW (251 hp)', tq: '320 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~6.2 sec', qm: '~14.5 sec', ts: '~245 km/h',
    fc: '13.0L', fh: '9.0L', fx: '17.0L', ft: '98 RON',
    wt: '1,430 kg', se: '5', ca: '390 L',
    pr: price(64990, y, 1994, 2000)
  }
  specs[`Nissan|Skyline|${y}|GT-R`] = {
    en: 'RB26DETT 2.6L DOHC inline-6 twin turbo', di: '2.6L', cy: '6',
    hp: '206 kW (276 hp)', tq: '353 Nm',
    tx: '5-speed manual', dr: 'AWD',
    z1: '~5.1 sec', qm: '~13.4 sec', ts: '~250 km/h (limited)',
    fc: '13.5L', fh: '9.5L', fx: '17.5L', ft: '98 RON',
    wt: '1,680 kg', se: '4', ca: '315 L',
    pr: price(90990, y, 1994, 2500)
  }
}

// R34 (1999-2002): GT-T / GT-R
for (let y = 1999; y <= 2002; y++) {
  specs[`Nissan|Skyline|${y}|GT-T`] = {
    en: 'RB25DET NEO 2.5L DOHC inline-6 Turbo', di: '2.5L', cy: '6',
    hp: '206 kW (276 hp)', tq: '363 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~5.8 sec', qm: '~14.1 sec', ts: '~250 km/h (limited)',
    fc: '13.0L', fh: '9.0L', fx: '17.0L', ft: '98 RON',
    wt: '1,450 kg', se: '5', ca: '390 L',
    pr: price(75990, y, 1999, 2500)
  }
  specs[`Nissan|Skyline|${y}|GT-R`] = {
    en: 'RB26DETT 2.6L DOHC inline-6 twin turbo', di: '2.6L', cy: '6',
    hp: '206 kW (276 hp)', tq: '353 Nm',
    tx: '6-speed manual', dr: 'AWD',
    z1: '~4.8 sec', qm: '~13.0 sec', ts: '~250 km/h (limited)',
    fc: '14.0L', fh: '9.8L', fx: '18.0L', ft: '98 RON',
    wt: '1,560 kg', se: '4', ca: '300 L',
    pr: price(110990, y, 1999, 3000)
  }
}

// V35 (2003-2006): 350GT — VQ35DE 3.5L V6
for (let y = 2003; y <= 2006; y++) {
  specs[`Nissan|Skyline|${y}|350GT`] = {
    en: 'VQ35DE 3.5L V6 DOHC 24V', di: '3.5L', cy: '6',
    hp: '232 kW (311 hp)', tq: '343 Nm',
    tx: '5-speed auto', dr: 'RWD',
    z1: '~6.0 sec', qm: '~14.3 sec', ts: '~250 km/h (limited)',
    fc: '12.5L', fh: '8.8L', fx: '16.5L', ft: '95 RON',
    wt: '1,540 kg', se: '5', ca: '410 L',
    pr: price(68990, y, 2003, 2000)
  }
}

// V36 (2007-2014): 370GT — VQ37VHR 3.7L V6
for (let y = 2007; y <= 2014; y++) {
  specs[`Nissan|Skyline|${y}|370GT`] = {
    en: 'VQ37VHR 3.7L V6 DOHC 24V VVEL', di: '3.7L', cy: '6',
    hp: '245 kW (328 hp)', tq: '363 Nm',
    tx: '7-speed auto', dr: 'RWD',
    z1: '~5.8 sec', qm: '~14.0 sec', ts: '~250 km/h (limited)',
    fc: '11.5L', fh: '8.0L', fx: '15.0L', ft: '95 RON',
    wt: '1,680 kg', se: '5', ca: '410 L',
    pr: price(72990, y, 2007, 2000)
  }
}

// ── NISSAN 300ZX ─────────────────────────────────────────────────────────────
// Z31 (1984-1989): VG30E 3.0L V6 NA
for (let y = 1984; y <= 1989; y++) {
  specs[`Nissan|300ZX|${y}|Base`] = {
    en: 'VG30E 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '112 kW (150 hp)', tq: '235 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~210 km/h',
    fc: '12.0L', fh: '8.5L', fx: '15.5L', ft: '95 RON',
    wt: '1,340 kg', se: '2+2', ca: '190 L',
    pr: price(29990, y, 1984, 800)
  }
  specs[`Nissan|300ZX|${y}|2+2`] = {
    en: 'VG30E 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '112 kW (150 hp)', tq: '235 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~208 km/h',
    fc: '12.0L', fh: '8.5L', fx: '15.5L', ft: '95 RON',
    wt: '1,390 kg', se: '4', ca: '260 L',
    pr: price(33990, y, 1984, 900)
  }
}

// Z32 (1990-1996): NA / Turbo
for (let y = 1990; y <= 1996; y++) {
  specs[`Nissan|300ZX|${y}|NA`] = {
    en: 'VG30DE 3.0L V6 DOHC 24V', di: '3.0L', cy: '6',
    hp: '166 kW (222 hp)', tq: '268 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~7.0 sec', qm: '~15.2 sec', ts: '~235 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.0L', ft: '95 RON',
    wt: '1,450 kg', se: '2+2', ca: '190 L',
    pr: price(52990, y, 1990, 1500)
  }
  specs[`Nissan|300ZX|${y}|Turbo`] = {
    en: 'VG30DETT 3.0L V6 DOHC twin turbo', di: '3.0L', cy: '6',
    hp: '224 kW (300 hp)', tq: '373 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~5.5 sec', qm: '~13.9 sec', ts: '~250 km/h (limited)',
    fc: '14.0L', fh: '10.0L', fx: '18.0L', ft: '98 RON',
    wt: '1,540 kg', se: '2+2', ca: '190 L',
    pr: price(72990, y, 1990, 2000)
  }
}

// ── NISSAN 370Z ──────────────────────────────────────────────────────────────
// Z34 (2009-2021): ST / NISMO — VQ37VHR 3.7L V6
for (let y = 2009; y <= 2021; y++) {
  specs[`Nissan|370Z|${y}|ST`] = {
    en: 'VQ37VHR 3.7L V6 DOHC 24V VVEL', di: '3.7L', cy: '6',
    hp: '245 kW (328 hp)', tq: '363 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~5.2 sec', qm: '~13.5 sec', ts: '~250 km/h (limited)',
    fc: '11.5L', fh: '8.0L', fx: '15.5L', ft: '95 RON',
    wt: '1,496 kg', se: '2', ca: '155 L',
    pr: price(54990, y, 2009, 700)
  }
  specs[`Nissan|370Z|${y}|NISMO`] = {
    en: 'VQ37VHR 3.7L V6 DOHC 24V VVEL', di: '3.7L', cy: '6',
    hp: '253 kW (339 hp)', tq: '374 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~5.0 sec', qm: '~13.3 sec', ts: '~250 km/h (limited)',
    fc: '11.5L', fh: '8.0L', fx: '15.5L', ft: '95 RON',
    wt: '1,479 kg', se: '2', ca: '155 L',
    pr: price(74990, y, 2009, 900)
  }
}

// ── NISSAN GT-R (R35) ────────────────────────────────────────────────────────
// 2008-2023: Premium / Track Edition — VR38DETT 3.8L V6 twin turbo
// Power increased over the years
for (let y = 2008; y <= 2014; y++) {
  const hp = y <= 2010 ? '357 kW (479 hp)' : '404 kW (542 hp)'
  const tq = y <= 2010 ? '588 Nm' : '628 Nm'
  const z1 = y <= 2010 ? '~3.5 sec' : '~2.9 sec'
  specs[`Nissan|GT-R|${y}|Premium`] = {
    en: 'VR38DETT 3.8L V6 DOHC twin turbo', di: '3.8L', cy: '6',
    hp, tq,
    tx: '6-speed DCT', dr: 'AWD',
    z1, qm: '~11.8 sec', ts: '~315 km/h',
    fc: '12.5L', fh: '8.5L', fx: '17.0L', ft: '98 RON',
    wt: '1,740 kg', se: '4', ca: '310 L',
    pr: price(170990, y, 2008, 5000)
  }
  specs[`Nissan|GT-R|${y}|Track Edition`] = {
    en: 'VR38DETT 3.8L V6 DOHC twin turbo', di: '3.8L', cy: '6',
    hp, tq,
    tx: '6-speed DCT', dr: 'AWD',
    z1, qm: '~11.7 sec', ts: '~315 km/h',
    fc: '12.5L', fh: '8.5L', fx: '17.0L', ft: '98 RON',
    wt: '1,720 kg', se: '4', ca: '310 L',
    pr: price(195990, y, 2008, 5000)
  }
}
for (let y = 2015; y <= 2023; y++) {
  specs[`Nissan|GT-R|${y}|Premium`] = {
    en: 'VR38DETT 3.8L V6 DOHC twin turbo', di: '3.8L', cy: '6',
    hp: '419 kW (562 hp)', tq: '637 Nm',
    tx: '6-speed DCT', dr: 'AWD',
    z1: '~2.7 sec', qm: '~10.9 sec', ts: '~315 km/h',
    fc: '11.8L', fh: '8.0L', fx: '16.5L', ft: '98 RON',
    wt: '1,752 kg', se: '4', ca: '310 L',
    pr: price(190990, y, 2015, 5000)
  }
  specs[`Nissan|GT-R|${y}|Track Edition`] = {
    en: 'VR38DETT 3.8L V6 DOHC twin turbo', di: '3.8L', cy: '6',
    hp: '419 kW (562 hp)', tq: '637 Nm',
    tx: '6-speed DCT', dr: 'AWD',
    z1: '~2.7 sec', qm: '~10.9 sec', ts: '~315 km/h',
    fc: '11.8L', fh: '8.0L', fx: '16.5L', ft: '98 RON',
    wt: '1,736 kg', se: '4', ca: '310 L',
    pr: price(215990, y, 2015, 5000)
  }
}

// ── NISSAN PULSAR ─────────────────────────────────────────────────────────────
// N12 (1982-1986): CS 1.3L / TS 1.5L
for (let y = 1982; y <= 1986; y++) {
  specs[`Nissan|Pulsar|${y}|CS`] = {
    en: 'E13 1.3L OHC 8V', di: '1.3L', cy: '4',
    hp: '48 kW (64 hp)', tq: '102 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~152 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.5L', ft: '91 RON',
    wt: '815 kg', se: '5', ca: '280 L',
    pr: price(8490, y, 1982, 400)
  }
  specs[`Nissan|Pulsar|${y}|TS`] = {
    en: 'E15E 1.5L OHC 8V EFI', di: '1.5L', cy: '4',
    hp: '62 kW (83 hp)', tq: '122 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~162 km/h',
    fc: '8.0L', fh: '5.8L', fx: '10.5L', ft: '91 RON',
    wt: '835 kg', se: '5', ca: '280 L',
    pr: price(10990, y, 1982, 500)
  }
}

// N13 (1987-1991): Q 1.6L / Ti 1.8L / SSS 1.8T
for (let y = 1987; y <= 1991; y++) {
  specs[`Nissan|Pulsar|${y}|Q`] = {
    en: 'CA16DE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '77 kW (103 hp)', tq: '135 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~175 km/h',
    fc: '8.0L', fh: '5.8L', fx: '10.5L', ft: '91 RON',
    wt: '960 kg', se: '5', ca: '295 L',
    pr: price(12990, y, 1987, 500)
  }
  specs[`Nissan|Pulsar|${y}|Ti`] = {
    en: 'CA18DE 1.8L DOHC 16V', di: '1.8L', cy: '4',
    hp: '92 kW (123 hp)', tq: '161 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '8.5L', fh: '6.0L', fx: '11.0L', ft: '91 RON',
    wt: '985 kg', se: '5', ca: '295 L',
    pr: price(16490, y, 1987, 600)
  }
  specs[`Nissan|Pulsar|${y}|SSS`] = {
    en: 'CA18DET 1.8L DOHC 16V Turbo', di: '1.8L', cy: '4',
    hp: '118 kW (158 hp)', tq: '220 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~205 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '95 RON',
    wt: '1,020 kg', se: '5', ca: '295 L',
    pr: price(22490, y, 1987, 800)
  }
}

// N14 (1991-1995): LX 1.6L / Q 1.6L / SSS 2.0T
for (let y = 1991; y <= 1995; y++) {
  specs[`Nissan|Pulsar|${y}|LX`] = {
    en: 'GA16DE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '76 kW (102 hp)', tq: '141 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '8.0L', fh: '5.8L', fx: '10.5L', ft: '91 RON',
    wt: '975 kg', se: '5', ca: '290 L',
    pr: price(14990, y, 1991, 500)
  }
  specs[`Nissan|Pulsar|${y}|Q`] = {
    en: 'GA16DE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '76 kW (102 hp)', tq: '141 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '8.0L', fh: '5.8L', fx: '10.5L', ft: '91 RON',
    wt: '980 kg', se: '5', ca: '290 L',
    pr: price(17490, y, 1991, 600)
  }
  specs[`Nissan|Pulsar|${y}|SSS`] = {
    en: 'SR20DE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '100 kW (134 hp)', tq: '174 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~195 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '91 RON',
    wt: '1,040 kg', se: '5', ca: '290 L',
    pr: price(22990, y, 1991, 700)
  }
}

// N15 (1995-2000): Q 1.6L / Ti 1.8L / SSS 2.0L
for (let y = 1995; y <= 2000; y++) {
  specs[`Nissan|Pulsar|${y}|Q`] = {
    en: 'GA16DE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '76 kW (102 hp)', tq: '141 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '7.8L', fh: '5.6L', fx: '10.2L', ft: '91 RON',
    wt: '1,010 kg', se: '5', ca: '285 L',
    pr: price(17490, y, 1995, 500)
  }
  specs[`Nissan|Pulsar|${y}|Ti`] = {
    en: 'SR18DE 1.8L DOHC 16V', di: '1.8L', cy: '4',
    hp: '84 kW (113 hp)', tq: '160 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~182 km/h',
    fc: '8.5L', fh: '6.0L', fx: '11.0L', ft: '91 RON',
    wt: '1,035 kg', se: '5', ca: '285 L',
    pr: price(20990, y, 1995, 600)
  }
  specs[`Nissan|Pulsar|${y}|SSS`] = {
    en: 'SR20DE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '100 kW (134 hp)', tq: '174 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~195 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '91 RON',
    wt: '1,060 kg', se: '5', ca: '285 L',
    pr: price(24990, y, 1995, 700)
  }
}

// ── NISSAN MAXIMA ─────────────────────────────────────────────────────────────
// Q (S11/S12 1985-1988): VG20ET 2.0L V6 Turbo / VG30E 3.0L V6
for (let y = 1985; y <= 1988; y++) {
  specs[`Nissan|Maxima|${y}|GL`] = {
    en: 'VG20ET 2.0L V6 SOHC Turbo', di: '2.0L', cy: '6',
    hp: '118 kW (158 hp)', tq: '235 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~200 km/h',
    fc: '11.0L', fh: '8.0L', fx: '14.0L', ft: '95 RON',
    wt: '1,190 kg', se: '5', ca: '400 L',
    pr: price(19990, y, 1985, 600)
  }
  specs[`Nissan|Maxima|${y}|GX`] = {
    en: 'VG30E 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '109 kW (146 hp)', tq: '228 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~193 km/h',
    fc: '12.0L', fh: '9.0L', fx: '15.0L', ft: '91 RON',
    wt: '1,240 kg', se: '5', ca: '400 L',
    pr: price(24990, y, 1985, 800)
  }
}

// J30 (1989-1994): GL / TRX — VG30E 3.0L V6
for (let y = 1989; y <= 1994; y++) {
  specs[`Nissan|Maxima|${y}|GL`] = {
    en: 'VG30E 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '109 kW (146 hp)', tq: '236 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~200 km/h',
    fc: '11.5L', fh: '8.5L', fx: '14.5L', ft: '91 RON',
    wt: '1,385 kg', se: '5', ca: '400 L',
    pr: price(26990, y, 1989, 700)
  }
  specs[`Nissan|Maxima|${y}|TRX`] = {
    en: 'VG30E 3.0L V6 SOHC 12V', di: '3.0L', cy: '6',
    hp: '109 kW (146 hp)', tq: '236 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~195 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.0L', ft: '91 RON',
    wt: '1,420 kg', se: '5', ca: '400 L',
    pr: price(32990, y, 1989, 900)
  }
}

// A32 (1994-2000): ST / Ti — VQ30DE 3.0L V6
for (let y = 1994; y <= 2000; y++) {
  specs[`Nissan|Maxima|${y}|ST`] = {
    en: 'VQ30DE 3.0L V6 DOHC 24V', di: '3.0L', cy: '6',
    hp: '162 kW (217 hp)', tq: '276 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~215 km/h',
    fc: '11.5L', fh: '8.5L', fx: '14.5L', ft: '95 RON',
    wt: '1,490 kg', se: '5', ca: '400 L',
    pr: price(35990, y, 1994, 800)
  }
  specs[`Nissan|Maxima|${y}|Ti`] = {
    en: 'VQ30DE 3.0L V6 DOHC 24V', di: '3.0L', cy: '6',
    hp: '162 kW (217 hp)', tq: '276 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~215 km/h',
    fc: '11.5L', fh: '8.5L', fx: '14.5L', ft: '95 RON',
    wt: '1,510 kg', se: '5', ca: '400 L',
    pr: price(43990, y, 1994, 1000)
  }
}

// A33 (2000-2003): Ti — VQ20DE 2.0L V6
for (let y = 2000; y <= 2003; y++) {
  specs[`Nissan|Maxima|${y}|Ti`] = {
    en: 'VQ20DE 2.0L V6 DOHC 24V', di: '2.0L', cy: '6',
    hp: '110 kW (148 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~198 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '95 RON',
    wt: '1,440 kg', se: '5', ca: '400 L',
    pr: price(42990, y, 2000, 700)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement23.json', JSON.stringify({ specs }, null, 2))
console.log('supplement23.json:', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => { const m = k.split('|')[1]; byModel[m] = (byModel[m] || 0) + 1 })
Object.entries(byModel).forEach(([m, c]) => console.log(' ', m + ':', c))
