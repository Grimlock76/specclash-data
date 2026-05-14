#!/usr/bin/env node
// gen25.cjs — Mitsubishi classics: Sigma, Galant, Lancer, Starion, 3000GT, Colt
const fs = require('fs')
const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, start, inc = 500) { return `~$${fmt(base + (year - start) * inc)}` }

// ── MITSUBISHI SIGMA ─────────────────────────────────────────────────────────
// TS (1977-1979): GL 1.6L / GXL 2.0L — RWD
for (let y = 1977; y <= 1979; y++) {
  specs[`Mitsubishi|Sigma|${y}|GL`] = {
    en: 'Astron 1.6L SOHC 8V', di: '1.6L', cy: '4',
    hp: '50 kW (67 hp)', tq: '112 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~14.0 sec', qm: '~20.5 sec', ts: '~155 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.0L', ft: '91 RON',
    wt: '970 kg', se: '5', ca: '400 L',
    pr: price(7490, y, 1977, 400)
  }
}

// SJ (1980-1983): SE 2.0L / GXL 2.6L — RWD
for (let y = 1980; y <= 1983; y++) {
  specs[`Mitsubishi|Sigma|${y}|SE`] = {
    en: 'Astron 2.0L SOHC 8V', di: '2.0L', cy: '4',
    hp: '63 kW (85 hp)', tq: '148 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~162 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.0L', ft: '91 RON',
    wt: '1,010 kg', se: '5', ca: '400 L',
    pr: price(9490, y, 1980, 500)
  }
  specs[`Mitsubishi|Sigma|${y}|GXL`] = {
    en: '4G54 Astron 2.6L SOHC 8V', di: '2.6L', cy: '4',
    hp: '80 kW (107 hp)', tq: '195 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~172 km/h',
    fc: '12.0L', fh: '9.0L', fx: '15.0L', ft: '91 RON',
    wt: '1,090 kg', se: '5', ca: '400 L',
    pr: price(12490, y, 1980, 600)
  }
}

// ── MITSUBISHI GALANT ─────────────────────────────────────────────────────────
// HJ (1977-1979): GLS 2.0L — RWD sedan
for (let y = 1977; y <= 1979; y++) {
  specs[`Mitsubishi|Galant|${y}|GLS`] = {
    en: 'Astron 2.0L SOHC 8V', di: '2.0L', cy: '4',
    hp: '63 kW (85 hp)', tq: '148 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~162 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.0L', ft: '91 RON',
    wt: '1,040 kg', se: '5', ca: '430 L',
    pr: price(8990, y, 1977, 500)
  }
}

// GK (1980-1984): GL / GLS — 2.0L RWD/FWD transition
for (let y = 1980; y <= 1984; y++) {
  specs[`Mitsubishi|Galant|${y}|GL`] = {
    en: 'Astron 2.0L SOHC 8V EFI', di: '2.0L', cy: '4',
    hp: '70 kW (94 hp)', tq: '155 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~168 km/h',
    fc: '10.0L', fh: '7.5L', fx: '12.5L', ft: '91 RON',
    wt: '1,080 kg', se: '5', ca: '430 L',
    pr: price(11490, y, 1980, 600)
  }
  specs[`Mitsubishi|Galant|${y}|GLS`] = {
    en: 'Astron 2.0L SOHC 8V EFI', di: '2.0L', cy: '4',
    hp: '74 kW (99 hp)', tq: '158 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~172 km/h',
    fc: '10.0L', fh: '7.5L', fx: '12.5L', ft: '91 RON',
    wt: '1,100 kg', se: '5', ca: '430 L',
    pr: price(14490, y, 1980, 700)
  }
}

// GE/GH (1985-1993): GL / GLX — 2.0L/2.4L FWD
for (let y = 1985; y <= 1993; y++) {
  specs[`Mitsubishi|Galant|${y}|GL`] = {
    en: '4G63 2.0L SOHC 8V EFI', di: '2.0L', cy: '4',
    hp: '79 kW (106 hp)', tq: '161 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~175 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '91 RON',
    wt: '1,160 kg', se: '5', ca: '440 L',
    pr: price(15990, y, 1985, 700)
  }
  specs[`Mitsubishi|Galant|${y}|GLX`] = {
    en: '4G64 2.4L SOHC 16V EFI', di: '2.4L', cy: '4',
    hp: '96 kW (129 hp)', tq: '183 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '10.0L', fh: '7.5L', fx: '12.5L', ft: '91 RON',
    wt: '1,240 kg', se: '5', ca: '440 L',
    pr: price(20990, y, 1985, 900)
  }
}

// ── MITSUBISHI LANCER ─────────────────────────────────────────────────────────
// LA (1974-1977): GL 1.2L RWD
for (let y = 1974; y <= 1977; y++) {
  specs[`Mitsubishi|Lancer|${y}|GL`] = {
    en: '4G11 1.2L SOHC 8V', di: '1.2L', cy: '4',
    hp: '44 kW (59 hp)', tq: '88 Nm',
    tx: '4-speed manual', dr: 'RWD',
    z1: '~15.0 sec', qm: '~21.5 sec', ts: '~145 km/h',
    fc: '8.0L', fh: '6.0L', fx: '10.0L', ft: '91 RON',
    wt: '810 kg', se: '5', ca: '350 L',
    pr: price(3990, y, 1974, 300)
  }
}

// LB/LC (1978-1984): GL 1.4L / GSR 1.6L — RWD
for (let y = 1978; y <= 1984; y++) {
  specs[`Mitsubishi|Lancer|${y}|GL`] = {
    en: '4G12 1.4L SOHC 8V', di: '1.4L', cy: '4',
    hp: '52 kW (70 hp)', tq: '102 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~13.5 sec', qm: '~20.0 sec', ts: '~152 km/h',
    fc: '8.5L', fh: '6.3L', fx: '11.0L', ft: '91 RON',
    wt: '840 kg', se: '5', ca: '350 L',
    pr: price(5490, y, 1978, 350)
  }
  specs[`Mitsubishi|Lancer|${y}|GSR`] = {
    en: '4G32 1.6L SOHC 8V', di: '1.6L', cy: '4',
    hp: '62 kW (83 hp)', tq: '118 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '91 RON',
    wt: '870 kg', se: '5', ca: '350 L',
    pr: price(7490, y, 1978, 450)
  }
}

// CB/CC (1985-1991): GLi 1.5L — FWD
for (let y = 1985; y <= 1991; y++) {
  specs[`Mitsubishi|Lancer|${y}|GLi`] = {
    en: '4G15 1.5L SOHC 12V', di: '1.5L', cy: '4',
    hp: '68 kW (91 hp)', tq: '128 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '950 kg', se: '5', ca: '300 L',
    pr: price(12490, y, 1985, 500)
  }
}

// CE early (1992-1995): GLi / VRX — FWD
for (let y = 1992; y <= 1995; y++) {
  specs[`Mitsubishi|Lancer|${y}|GLi`] = {
    en: '4G15 1.5L SOHC 12V MIVEC', di: '1.5L', cy: '4',
    hp: '72 kW (97 hp)', tq: '128 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~168 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,015 kg', se: '5', ca: '295 L',
    pr: price(17490, y, 1992, 500)
  }
  specs[`Mitsubishi|Lancer|${y}|VRX`] = {
    en: '4G93-GDI 1.8L DOHC 16V GDI', di: '1.8L', cy: '4',
    hp: '99 kW (133 hp)', tq: '174 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '8.0L', fh: '5.8L', fx: '10.5L', ft: '95 RON',
    wt: '1,060 kg', se: '5', ca: '295 L',
    pr: price(23490, y, 1992, 700)
  }
}

// CE late (1996-2002): GLi / VRX / Evolution IV-VII
for (let y = 1996; y <= 2002; y++) {
  specs[`Mitsubishi|Lancer|${y}|GLi`] = {
    en: '4G15 1.5L SOHC 12V MIVEC', di: '1.5L', cy: '4',
    hp: '72 kW (97 hp)', tq: '128 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~168 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,020 kg', se: '5', ca: '295 L',
    pr: price(19490, y, 1996, 400)
  }
  specs[`Mitsubishi|Lancer|${y}|VRX`] = {
    en: '4G93-GDI 1.8L DOHC 16V GDI', di: '1.8L', cy: '4',
    hp: '99 kW (133 hp)', tq: '174 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~185 km/h',
    fc: '8.0L', fh: '5.8L', fx: '10.5L', ft: '95 RON',
    wt: '1,065 kg', se: '5', ca: '295 L',
    pr: price(25490, y, 1996, 600)
  }
  const evoHp = y <= 1997 ? '195 kW (261 hp)' : y <= 2000 ? '199 kW (267 hp)' : '202 kW (271 hp)'
  specs[`Mitsubishi|Lancer|${y}|Evolution`] = {
    en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
    hp: evoHp, tq: '355 Nm',
    tx: '5-speed manual', dr: 'AWD',
    z1: '~5.0 sec', qm: '~13.3 sec', ts: '~250 km/h (limited)',
    fc: '12.0L', fh: '8.5L', fx: '16.0L', ft: '98 RON',
    wt: '1,360 kg', se: '5', ca: '270 L',
    pr: price(52990, y, 1996, 1500)
  }
}

// CH (2003-2007): LS / VRX / Evolution VIII-IX
for (let y = 2003; y <= 2007; y++) {
  specs[`Mitsubishi|Lancer|${y}|LS`] = {
    en: '4G15-MIVEC 1.5L SOHC 16V', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '143 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~17.8 sec', ts: '~172 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '1,100 kg', se: '5', ca: '280 L',
    pr: price(22490, y, 2003, 500)
  }
  specs[`Mitsubishi|Lancer|${y}|VRX`] = {
    en: '4G63 2.0L DOHC 16V MIVEC', di: '2.0L', cy: '4',
    hp: '110 kW (148 hp)', tq: '194 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~192 km/h',
    fc: '9.0L', fh: '6.5L', fx: '11.5L', ft: '95 RON',
    wt: '1,160 kg', se: '5', ca: '280 L',
    pr: price(29490, y, 2003, 700)
  }
  const evoHp = y <= 2005 ? '210 kW (281 hp)' : '217 kW (291 hp)'
  const evoTq = y <= 2005 ? '395 Nm' : '407 Nm'
  specs[`Mitsubishi|Lancer|${y}|Evolution`] = {
    en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
    hp: evoHp, tq: evoTq,
    tx: y <= 2005 ? '5-speed manual' : '6-speed manual',
    dr: 'AWD',
    z1: '~4.8 sec', qm: '~13.0 sec', ts: '~250 km/h (limited)',
    fc: '12.5L', fh: '9.0L', fx: '16.5L', ft: '98 RON',
    wt: '1,410 kg', se: '5', ca: '270 L',
    pr: price(59990, y, 2003, 1500)
  }
}

// CJ (2007-2017): ES 1.5L / VRX 2.0L
for (let y = 2007; y <= 2017; y++) {
  specs[`Mitsubishi|Lancer|${y}|ES`] = {
    en: '4A91 1.5L SOHC 16V MIVEC', di: '1.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '143 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.0 sec', ts: '~170 km/h',
    fc: '7.0L', fh: '5.2L', fx: '9.3L', ft: '91 RON',
    wt: '1,230 kg', se: '5', ca: '260 L',
    pr: price(24490, y, 2007, 400)
  }
  specs[`Mitsubishi|Lancer|${y}|VRX`] = {
    en: '4B11 2.0L SOHC 16V MIVEC', di: '2.0L', cy: '4',
    hp: '110 kW (148 hp)', tq: '196 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~192 km/h',
    fc: '8.3L', fh: '6.0L', fx: '11.0L', ft: '91 RON',
    wt: '1,295 kg', se: '5', ca: '260 L',
    pr: price(31490, y, 2007, 600)
  }
}

// CJ Evolution X (2008-2015)
for (let y = 2008; y <= 2015; y++) {
  specs[`Mitsubishi|Lancer|${y}|Evolution X`] = {
    en: '4B11T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
    hp: '217 kW (291 hp)', tq: '343 Nm',
    tx: '6-speed SST', dr: 'AWD',
    z1: '~4.5 sec', qm: '~12.9 sec', ts: '~250 km/h (limited)',
    fc: '11.5L', fh: '8.5L', fx: '15.0L', ft: '98 RON',
    wt: '1,570 kg', se: '5', ca: '248 L',
    pr: price(59990, y, 2008, 1000)
  }
}

// ── MITSUBISHI STARION ────────────────────────────────────────────────────────
// 1982-1986: GSR — G63B 2.0L SOHC Turbo
for (let y = 1982; y <= 1986; y++) {
  specs[`Mitsubishi|Starion|${y}|GSR`] = {
    en: 'G63B 2.0L SOHC 8V Turbo', di: '2.0L', cy: '4',
    hp: '105 kW (141 hp)', tq: '237 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~210 km/h',
    fc: '12.0L', fh: '8.5L', fx: '15.5L', ft: '95 RON',
    wt: '1,280 kg', se: '2+2', ca: '180 L',
    pr: price(22990, y, 1982, 700)
  }
}

// 1987-1989: GSR / ESi-R widebody
for (let y = 1987; y <= 1989; y++) {
  specs[`Mitsubishi|Starion|${y}|GSR`] = {
    en: 'G63B 2.0L SOHC 8V Turbo', di: '2.0L', cy: '4',
    hp: '118 kW (158 hp)', tq: '265 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~7.5 sec', qm: '~15.3 sec', ts: '~215 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.0L', ft: '95 RON',
    wt: '1,300 kg', se: '2+2', ca: '180 L',
    pr: price(30990, y, 1987, 1000)
  }
  specs[`Mitsubishi|Starion|${y}|ESi-R`] = {
    en: 'G63B 2.0L SOHC 8V Turbo', di: '2.0L', cy: '4',
    hp: '130 kW (174 hp)', tq: '284 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~7.0 sec', qm: '~14.8 sec', ts: '~225 km/h',
    fc: '13.0L', fh: '9.5L', fx: '17.0L', ft: '95 RON',
    wt: '1,340 kg', se: '2+2', ca: '180 L',
    pr: price(38990, y, 1987, 1200)
  }
}

// ── MITSUBISHI 3000GT ─────────────────────────────────────────────────────────
// Z16A/Z16B (1991-2001): SL NA / VR-4 twin turbo AWD
for (let y = 1991; y <= 2001; y++) {
  specs[`Mitsubishi|3000GT|${y}|SL`] = {
    en: '6G72 3.0L V6 DOHC 24V', di: '3.0L', cy: '6',
    hp: '162 kW (217 hp)', tq: '270 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~235 km/h',
    fc: '13.0L', fh: '9.0L', fx: '17.0L', ft: '95 RON',
    wt: '1,560 kg', se: '2+2', ca: '200 L',
    pr: price(55990, y, 1991, 1200)
  }
  specs[`Mitsubishi|3000GT|${y}|VR-4`] = {
    en: '6G72TT 3.0L V6 DOHC twin turbo', di: '3.0L', cy: '6',
    hp: '210 kW (281 hp)', tq: '427 Nm',
    tx: '6-speed manual', dr: 'AWD',
    z1: '~5.9 sec', qm: '~14.1 sec', ts: '~250 km/h (limited)',
    fc: '14.5L', fh: '10.0L', fx: '19.5L', ft: '98 RON',
    wt: '1,756 kg', se: '2+2', ca: '200 L',
    pr: price(82990, y, 1991, 2000)
  }
}

// ── MITSUBISHI COLT ───────────────────────────────────────────────────────────
// RA (1978-1983): GL 1.2L/1.4L FWD
for (let y = 1978; y <= 1983; y++) {
  specs[`Mitsubishi|Colt|${y}|GL`] = {
    en: '4G11 1.2L SOHC 8V', di: '1.2L', cy: '4',
    hp: '44 kW (59 hp)', tq: '90 Nm',
    tx: '4-speed manual', dr: 'FWD',
    z1: '~14.0 sec', qm: '~20.5 sec', ts: '~145 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '760 kg', se: '5', ca: '230 L',
    pr: price(5990, y, 1978, 300)
  }
}

// RB/RC (1984-1992): GL / GLS — 1.3L/1.5L
for (let y = 1984; y <= 1992; y++) {
  specs[`Mitsubishi|Colt|${y}|GL`] = {
    en: '4G13 1.3L SOHC 12V', di: '1.3L', cy: '4',
    hp: '50 kW (67 hp)', tq: '105 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~155 km/h',
    fc: '7.0L', fh: '5.2L', fx: '9.3L', ft: '91 RON',
    wt: '790 kg', se: '5', ca: '225 L',
    pr: price(8490, y, 1984, 350)
  }
  specs[`Mitsubishi|Colt|${y}|GLS`] = {
    en: '4G15 1.5L SOHC 12V', di: '1.5L', cy: '4',
    hp: '62 kW (83 hp)', tq: '120 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~12.0 sec', qm: '~18.5 sec', ts: '~162 km/h',
    fc: '7.5L', fh: '5.5L', fx: '9.8L', ft: '91 RON',
    wt: '810 kg', se: '5', ca: '225 L',
    pr: price(10990, y, 1984, 450)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement25.json', JSON.stringify({ specs }, null, 2))
console.log('supplement25.json:', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => { const m = k.split('|')[1]; byModel[m] = (byModel[m] || 0) + 1 })
Object.entries(byModel).forEach(([m, c]) => console.log(' ', m + ':', c))
