#!/usr/bin/env node
// gen21.cjs — Mazda classics: 323, 626, RX-7, RX-8, MX-5, MX-6
const fs = require('fs')
const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, start, inc = 500) { return `~$${fmt(base + (year - start) * inc)}` }

// ── MAZDA 323 ─────────────────────────────────────────────────────────────────
// FB (1981-1985) RWD: Standard 1.3L / DX 1.5L
for (let y = 1981; y <= 1985; y++) {
  specs[`Mazda|323|${y}|Standard`] = {
    en: 'E3 1.3L OHV 8V', di: '1.3L', cy: '4',
    hp: '47 kW (63 hp)', tq: '96 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~14.5 sec', qm: '~21.0 sec', ts: '~140 km/h',
    fc: '8.5L', fh: '6.5L', fx: '10.5L', ft: '91 RON',
    wt: '790 kg', se: '5', ca: '340 L',
    pr: price(8490, y, 1981, 400)
  }
  specs[`Mazda|323|${y}|DX`] = {
    en: 'E5 1.5L OHV 8V', di: '1.5L', cy: '4',
    hp: '55 kW (74 hp)', tq: '112 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~12.5 sec', qm: '~19.5 sec', ts: '~152 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.0L', ft: '91 RON',
    wt: '810 kg', se: '5', ca: '340 L',
    pr: price(10490, y, 1981, 450)
  }
}

// BF (1986-1988) FWD: SE 1.6L / GTX 1.6L Turbo
for (let y = 1986; y <= 1988; y++) {
  specs[`Mazda|323|${y}|SE`] = {
    en: 'B6 1.6L SOHC 12V', di: '1.6L', cy: '4',
    hp: '66 kW (89 hp)', tq: '130 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~168 km/h',
    fc: '8.5L', fh: '6.5L', fx: '10.5L', ft: '91 RON',
    wt: '870 kg', se: '5', ca: '310 L',
    pr: price(13490, y, 1986, 500)
  }
  specs[`Mazda|323|${y}|GTX`] = {
    en: 'B6T 1.6L SOHC 12V Turbo', di: '1.6L', cy: '4',
    hp: '96 kW (129 hp)', tq: '190 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~195 km/h',
    fc: '10.0L', fh: '7.5L', fx: '12.5L', ft: '95 RON',
    wt: '940 kg', se: '5', ca: '310 L',
    pr: price(17990, y, 1986, 600)
  }
}

// BG (1989-1993) FWD: E 1.3L / Astina 1.8L DOHC
for (let y = 1989; y <= 1993; y++) {
  specs[`Mazda|323|${y}|E`] = {
    en: 'B3 1.3L SOHC 8V', di: '1.3L', cy: '4',
    hp: '44 kW (59 hp)', tq: '108 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~14.0 sec', qm: '~21.0 sec', ts: '~150 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '895 kg', se: '5', ca: '295 L',
    pr: price(12990, y, 1989, 400)
  }
  specs[`Mazda|323|${y}|Astina`] = {
    en: 'BP 1.8L DOHC 16V', di: '1.8L', cy: '4',
    hp: '88 kW (118 hp)', tq: '155 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '91 RON',
    wt: '960 kg', se: '5', ca: '295 L',
    pr: price(18490, y, 1989, 500)
  }
}

// BH/BJ (1994-2003) FWD: LXi 1.6L / Astina 2.0L
for (let y = 1994; y <= 1997; y++) {
  specs[`Mazda|323|${y}|LXi`] = {
    en: 'ZM-DE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '72 kW (97 hp)', tq: '150 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.5L', ft: '91 RON',
    wt: '1,000 kg', se: '5', ca: '305 L',
    pr: price(18490, y, 1994, 500)
  }
  specs[`Mazda|323|${y}|Astina`] = {
    en: 'BP 1.8L DOHC 16V', di: '1.8L', cy: '4',
    hp: '88 kW (118 hp)', tq: '158 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '91 RON',
    wt: '1,020 kg', se: '5', ca: '305 L',
    pr: price(22490, y, 1994, 600)
  }
}
for (let y = 1998; y <= 2003; y++) {
  specs[`Mazda|323|${y}|LXi`] = {
    en: 'ZM-DE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '72 kW (97 hp)', tq: '150 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '7.8L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '1,010 kg', se: '5', ca: '305 L',
    pr: price(20490, y, 1998, 500)
  }
  specs[`Mazda|323|${y}|Astina`] = {
    en: 'FS-ZE 2.0L DOHC 16V VVT', di: '2.0L', cy: '4',
    hp: '103 kW (138 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~200 km/h',
    fc: '8.5L', fh: '6.5L', fx: '11.0L', ft: '95 RON',
    wt: '1,075 kg', se: '5', ca: '305 L',
    pr: price(24990, y, 1998, 600)
  }
  specs[`Mazda|323|${y}|SP20`] = {
    en: 'FS-ZE 2.0L DOHC 16V VVT', di: '2.0L', cy: '4',
    hp: '103 kW (138 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~8.8 sec', qm: '~16.3 sec', ts: '~202 km/h',
    fc: '8.5L', fh: '6.5L', fx: '11.0L', ft: '95 RON',
    wt: '1,080 kg', se: '5', ca: '305 L',
    pr: price(27490, y, 1998, 600)
  }
}

// ── MAZDA 626 ─────────────────────────────────────────────────────────────────
// CB (1980-1982) RWD: GX 2.0L carb
for (let y = 1980; y <= 1982; y++) {
  specs[`Mazda|626|${y}|GX`] = {
    en: 'LA 2.0L SOHC 8V', di: '2.0L', cy: '4',
    hp: '63 kW (85 hp)', tq: '148 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~162 km/h',
    fc: '10.5L', fh: '8.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,030 kg', se: '5', ca: '400 L',
    pr: price(11490, y, 1980, 400)
  }
}

// GC (1983-1987) FWD: GX 2.0L / LX 2.0L EFI
for (let y = 1983; y <= 1987; y++) {
  specs[`Mazda|626|${y}|GX`] = {
    en: 'FE 2.0L SOHC 12V', di: '2.0L', cy: '4',
    hp: '74 kW (99 hp)', tq: '152 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~170 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '91 RON',
    wt: '1,050 kg', se: '5', ca: '430 L',
    pr: price(13990, y, 1983, 500)
  }
  specs[`Mazda|626|${y}|LX`] = {
    en: 'FE 2.0L SOHC 12V EFI', di: '2.0L', cy: '4',
    hp: '79 kW (106 hp)', tq: '156 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '91 RON',
    wt: '1,070 kg', se: '5', ca: '430 L',
    pr: price(16490, y, 1983, 600)
  }
}

// GD (1988-1991) FWD: GLX 2.0L DOHC / LX 2.0L SOHC
for (let y = 1988; y <= 1991; y++) {
  specs[`Mazda|626|${y}|GLX`] = {
    en: 'FE3E 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '96 kW (129 hp)', tq: '165 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~195 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '95 RON',
    wt: '1,150 kg', se: '5', ca: '430 L',
    pr: price(22490, y, 1988, 700)
  }
  specs[`Mazda|626|${y}|LX`] = {
    en: 'FE 2.0L SOHC 12V', di: '2.0L', cy: '4',
    hp: '79 kW (106 hp)', tq: '156 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~178 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '91 RON',
    wt: '1,100 kg', se: '5', ca: '430 L',
    pr: price(18490, y, 1988, 600)
  }
}

// GE (1992-1997) FWD: Classic 2.0L DOHC / Luxury / V6 2.5L
for (let y = 1992; y <= 1997; y++) {
  specs[`Mazda|626|${y}|Classic`] = {
    en: 'FE3E 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '96 kW (129 hp)', tq: '173 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~195 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '91 RON',
    wt: '1,200 kg', se: '5', ca: '430 L',
    pr: price(23990, y, 1992, 700)
  }
  specs[`Mazda|626|${y}|Luxury`] = {
    en: 'FE3E 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '96 kW (129 hp)', tq: '173 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~190 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.0L', ft: '91 RON',
    wt: '1,230 kg', se: '5', ca: '430 L',
    pr: price(27490, y, 1992, 800)
  }
  specs[`Mazda|626|${y}|V6`] = {
    en: 'KL-ZE 2.5L V6 DOHC 24V', di: '2.5L', cy: '6',
    hp: '126 kW (169 hp)', tq: '214 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.0 sec', qm: '~16.0 sec', ts: '~210 km/h',
    fc: '11.5L', fh: '8.5L', fx: '14.5L', ft: '95 RON',
    wt: '1,290 kg', se: '5', ca: '430 L',
    pr: price(33990, y, 1992, 1000)
  }
}

// GF (1998-2002) FWD: Classic 2.0L / Luxury / V6 2.5L
for (let y = 1998; y <= 2002; y++) {
  specs[`Mazda|626|${y}|Classic`] = {
    en: 'FS-DE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '100 kW (134 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~198 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '91 RON',
    wt: '1,225 kg', se: '5', ca: '430 L',
    pr: price(27490, y, 1998, 700)
  }
  specs[`Mazda|626|${y}|Luxury`] = {
    en: 'FS-DE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '100 kW (134 hp)', tq: '185 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~193 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.0L', ft: '91 RON',
    wt: '1,255 kg', se: '5', ca: '430 L',
    pr: price(31490, y, 1998, 800)
  }
  specs[`Mazda|626|${y}|V6`] = {
    en: 'KL-DE 2.5L V6 DOHC 24V', di: '2.5L', cy: '6',
    hp: '126 kW (169 hp)', tq: '214 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.0 sec', qm: '~16.0 sec', ts: '~212 km/h',
    fc: '11.5L', fh: '8.5L', fx: '14.5L', ft: '95 RON',
    wt: '1,320 kg', se: '5', ca: '430 L',
    pr: price(37990, y, 1998, 1000)
  }
}

// ── MAZDA RX-7 ────────────────────────────────────────────────────────────────
// SA22 (1979-1983): 12A twin rotor
for (let y = 1979; y <= 1983; y++) {
  specs[`Mazda|RX-7|${y}|GS`] = {
    en: '12A 1.1L twin-rotor', di: '1.1L', cy: 'Rotary',
    hp: '66 kW (89 hp)', tq: '133 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '12.0L', fh: '9.0L', fx: '15.0L', ft: '95 RON',
    wt: '1,010 kg', se: '2+2', ca: '185 L',
    pr: price(17990, y, 1979, 700)
  }
}

// SA22 Series 3/4 (1984-1985): slightly updated
for (let y = 1984; y <= 1985; y++) {
  specs[`Mazda|RX-7|${y}|GS`] = {
    en: '12A 1.1L twin-rotor', di: '1.1L', cy: 'Rotary',
    hp: '70 kW (94 hp)', tq: '135 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~190 km/h',
    fc: '12.0L', fh: '9.0L', fx: '15.0L', ft: '95 RON',
    wt: '1,020 kg', se: '2+2', ca: '185 L',
    pr: price(22990, y, 1984, 800)
  }
  specs[`Mazda|RX-7|${y}|SE`] = {
    en: '12A 1.1L twin-rotor', di: '1.1L', cy: 'Rotary',
    hp: '70 kW (94 hp)', tq: '135 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~192 km/h',
    fc: '12.0L', fh: '9.0L', fx: '15.0L', ft: '95 RON',
    wt: '1,025 kg', se: '2+2', ca: '185 L',
    pr: price(26990, y, 1984, 900)
  }
}

// FC (1986-1991): 13B NA / Turbo II
for (let y = 1986; y <= 1991; y++) {
  specs[`Mazda|RX-7|${y}|1.3`] = {
    en: '13B 1.3L twin-rotor DOHC', di: '1.3L', cy: 'Rotary',
    hp: '100 kW (134 hp)', tq: '175 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~215 km/h',
    fc: '13.0L', fh: '9.5L', fx: '16.0L', ft: '95 RON',
    wt: '1,220 kg', se: '2+2', ca: '200 L',
    pr: price(32990, y, 1986, 1200)
  }
  specs[`Mazda|RX-7|${y}|Turbo II`] = {
    en: '13B-T 1.3L twin-rotor Turbo', di: '1.3L', cy: 'Rotary',
    hp: '134 kW (180 hp)', tq: '265 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~7.0 sec', qm: '~15.2 sec', ts: '~230 km/h',
    fc: '14.0L', fh: '10.0L', fx: '17.5L', ft: '95 RON',
    wt: '1,250 kg', se: '2+2', ca: '200 L',
    pr: price(40990, y, 1986, 1500)
  }
}

// FD (1992-2002): 13B-REW twin turbo
for (let y = 1992; y <= 2002; y++) {
  specs[`Mazda|RX-7|${y}|SP`] = {
    en: '13B-REW 1.3L twin-rotor twin turbo', di: '1.3L', cy: 'Rotary',
    hp: '176 kW (236 hp)', tq: '294 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~5.3 sec', qm: '~13.5 sec', ts: '~250 km/h (limited)',
    fc: '14.0L', fh: '10.5L', fx: '17.5L', ft: '98 RON',
    wt: '1,260 kg', se: '2', ca: '217 L',
    pr: price(54990, y, 1992, 1200)
  }
  specs[`Mazda|RX-7|${y}|RZ`] = {
    en: '13B-REW 1.3L twin-rotor twin turbo', di: '1.3L', cy: 'Rotary',
    hp: '176 kW (236 hp)', tq: '294 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~5.1 sec', qm: '~13.3 sec', ts: '~255 km/h (limited)',
    fc: '14.0L', fh: '10.5L', fx: '17.5L', ft: '98 RON',
    wt: '1,230 kg', se: '2', ca: '217 L',
    pr: price(62990, y, 1992, 1400)
  }
}

// ── MAZDA RX-8 ────────────────────────────────────────────────────────────────
// Series 1 (2003-2008): Luxury / Sports
for (let y = 2003; y <= 2008; y++) {
  specs[`Mazda|RX-8|${y}|Luxury`] = {
    en: '13B-MSP 1.3L RENESIS twin-rotor', di: '1.3L', cy: 'Rotary',
    hp: '141 kW (192 hp)', tq: '211 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~7.2 sec', qm: '~15.2 sec', ts: '~230 km/h',
    fc: '13.0L', fh: '9.5L', fx: '16.5L', ft: '98 RON',
    wt: '1,310 kg', se: '4', ca: '290 L',
    pr: price(49990, y, 2003, 1000)
  }
  specs[`Mazda|RX-8|${y}|Sports`] = {
    en: '13B-MSP 1.3L RENESIS twin-rotor', di: '1.3L', cy: 'Rotary',
    hp: '141 kW (192 hp)', tq: '211 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~7.0 sec', qm: '~15.0 sec', ts: '~232 km/h',
    fc: '13.0L', fh: '9.5L', fx: '16.5L', ft: '98 RON',
    wt: '1,305 kg', se: '4', ca: '290 L',
    pr: price(54990, y, 2003, 1200)
  }
}

// Series 2 (2009-2012): Sports / R3
for (let y = 2009; y <= 2012; y++) {
  specs[`Mazda|RX-8|${y}|Sports`] = {
    en: '13B-MSP 1.3L RENESIS twin-rotor', di: '1.3L', cy: 'Rotary',
    hp: '141 kW (192 hp)', tq: '211 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~7.0 sec', qm: '~15.0 sec', ts: '~232 km/h',
    fc: '13.0L', fh: '9.5L', fx: '16.5L', ft: '98 RON',
    wt: '1,310 kg', se: '4', ca: '290 L',
    pr: price(56990, y, 2009, 1000)
  }
  specs[`Mazda|RX-8|${y}|R3`] = {
    en: '13B-MSP 1.3L RENESIS twin-rotor', di: '1.3L', cy: 'Rotary',
    hp: '141 kW (192 hp)', tq: '211 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~6.8 sec', qm: '~14.8 sec', ts: '~234 km/h',
    fc: '13.0L', fh: '9.5L', fx: '16.5L', ft: '98 RON',
    wt: '1,300 kg', se: '4', ca: '290 L',
    pr: price(64990, y, 2009, 1200)
  }
}

// ── MAZDA MX-5 ────────────────────────────────────────────────────────────────
// NA 1.6L (1989-1993)
for (let y = 1989; y <= 1993; y++) {
  specs[`Mazda|MX-5|${y}|Classic`] = {
    en: 'B6-ZE 1.6L DOHC 16V', di: '1.6L', cy: '4',
    hp: '88 kW (118 hp)', tq: '136 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.7 sec', qm: '~16.5 sec', ts: '~195 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '95 RON',
    wt: '960 kg', se: '2', ca: '144 L',
    pr: price(35990, y, 1989, 700)
  }
}

// NA 1.8L (1994-1997)
for (let y = 1994; y <= 1997; y++) {
  specs[`Mazda|MX-5|${y}|Classic`] = {
    en: 'BP-ZE 1.8L DOHC 16V', di: '1.8L', cy: '4',
    hp: '96 kW (129 hp)', tq: '150 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~198 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '95 RON',
    wt: '1,020 kg', se: '2', ca: '144 L',
    pr: price(39990, y, 1994, 800)
  }
  specs[`Mazda|MX-5|${y}|SE`] = {
    en: 'BP-ZE 1.8L DOHC 16V', di: '1.8L', cy: '4',
    hp: '96 kW (129 hp)', tq: '150 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.5 sec', qm: '~16.3 sec', ts: '~198 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '95 RON',
    wt: '1,025 kg', se: '2', ca: '144 L',
    pr: price(44990, y, 1994, 900)
  }
}

// NB 1.8L (1998-2005)
for (let y = 1998; y <= 2005; y++) {
  specs[`Mazda|MX-5|${y}|Classic`] = {
    en: 'BP-Z3 1.8L DOHC 16V VVT', di: '1.8L', cy: '4',
    hp: '103 kW (138 hp)', tq: '165 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~8.3 sec', qm: '~16.0 sec', ts: '~200 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,065 kg', se: '2', ca: '150 L',
    pr: price(42990, y, 1998, 700)
  }
  specs[`Mazda|MX-5|${y}|SE`] = {
    en: 'BP-Z3 1.8L DOHC 16V VVT', di: '1.8L', cy: '4',
    hp: '103 kW (138 hp)', tq: '165 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~8.3 sec', qm: '~16.0 sec', ts: '~200 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,070 kg', se: '2', ca: '150 L',
    pr: price(48990, y, 1998, 800)
  }
}

// NC 2.0L (2006-2014)
for (let y = 2006; y <= 2014; y++) {
  specs[`Mazda|MX-5|${y}|Classic`] = {
    en: 'LF-VD 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '118 kW (158 hp)', tq: '187 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~7.9 sec', qm: '~15.5 sec', ts: '~210 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,100 kg', se: '2', ca: '150 L',
    pr: price(44990, y, 2006, 800)
  }
  specs[`Mazda|MX-5|${y}|GT`] = {
    en: 'LF-VD 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '118 kW (158 hp)', tq: '187 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~7.9 sec', qm: '~15.5 sec', ts: '~210 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,105 kg', se: '2', ca: '150 L',
    pr: price(52990, y, 2006, 1000)
  }
}

// ND SKYACTIV-G 1.5L soft top (2015-2023)
for (let y = 2015; y <= 2023; y++) {
  specs[`Mazda|MX-5|${y}|MX-5`] = {
    en: 'P5-VP SKYACTIV-G 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '96 kW (129 hp)', tq: '150 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~8.3 sec', qm: '~16.0 sec', ts: '~200 km/h',
    fc: '7.0L', fh: '5.5L', fx: '9.0L', ft: '95 RON',
    wt: '990 kg', se: '2', ca: '130 L',
    pr: price(34990, y, 2015, 700)
  }
  specs[`Mazda|MX-5|${y}|GT`] = {
    en: 'P5-VP SKYACTIV-G 1.5L DOHC 16V', di: '1.5L', cy: '4',
    hp: '96 kW (129 hp)', tq: '150 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~8.3 sec', qm: '~16.0 sec', ts: '~200 km/h',
    fc: '7.0L', fh: '5.5L', fx: '9.0L', ft: '95 RON',
    wt: '995 kg', se: '2', ca: '130 L',
    pr: price(41990, y, 2015, 800)
  }
}

// ND RF 2.0L (2016-2023)
for (let y = 2016; y <= 2023; y++) {
  specs[`Mazda|MX-5|${y}|RF GT`] = {
    en: 'PE-VPR SKYACTIV-G 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '118 kW (158 hp)', tq: '205 Nm',
    tx: '6-speed manual', dr: 'RWD',
    z1: '~7.3 sec', qm: '~15.0 sec', ts: '~214 km/h',
    fc: '7.7L', fh: '5.8L', fx: '10.0L', ft: '95 RON',
    wt: '1,055 kg', se: '2', ca: '127 L',
    pr: price(53990, y, 2016, 1000)
  }
}

// ── MAZDA MX-6 ────────────────────────────────────────────────────────────────
// GD (1987-1991) FWD: Classic 2.0L DOHC
for (let y = 1987; y <= 1991; y++) {
  specs[`Mazda|MX-6|${y}|Classic`] = {
    en: 'FE3E 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '96 kW (129 hp)', tq: '165 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~195 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '95 RON',
    wt: '1,150 kg', se: '4', ca: '360 L',
    pr: price(26990, y, 1987, 900)
  }
}

// GE (1992-1997) FWD: Classic 2.0L / V6 2.5L
for (let y = 1992; y <= 1997; y++) {
  specs[`Mazda|MX-6|${y}|Classic`] = {
    en: 'FS-DE 2.0L DOHC 16V', di: '2.0L', cy: '4',
    hp: '100 kW (134 hp)', tq: '185 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~197 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '91 RON',
    wt: '1,200 kg', se: '4', ca: '360 L',
    pr: price(28990, y, 1992, 800)
  }
  specs[`Mazda|MX-6|${y}|V6`] = {
    en: 'KL-ZE 2.5L V6 DOHC 24V', di: '2.5L', cy: '6',
    hp: '119 kW (160 hp)', tq: '214 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.0 sec', ts: '~210 km/h',
    fc: '11.5L', fh: '8.5L', fx: '14.5L', ft: '95 RON',
    wt: '1,285 kg', se: '4', ca: '360 L',
    pr: price(36990, y, 1992, 1000)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement21.json', JSON.stringify({ specs }, null, 2))
console.log('supplement21.json:', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => { const m = k.split('|')[1]; byModel[m] = (byModel[m] || 0) + 1 })
Object.entries(byModel).forEach(([m, c]) => console.log(' ', m + ':', c))
