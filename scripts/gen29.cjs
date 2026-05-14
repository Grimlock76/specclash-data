#!/usr/bin/env node
// gen29.cjs — Toyota missing models: Prius, Prius C, Prius V, BZ4X, Crown crossover, Granvia
const fs = require('fs')
const specs = {}
function p(base, yr, start, inc) { return `~$${Math.round(base + (yr - start) * inc).toLocaleString()}` }
function pct(base, yr, start, pctPerYr = 0.025) { return `~$${Math.round(base * Math.pow(1 + pctPerYr, yr - start)).toLocaleString()}` }

// ── PRIUS NHW20 2nd gen (2004–2009) ──────────────────────────────────────────
// 1NZ-FXE 1.5L hybrid, system 73 kW; AU sold from 2004
for (let y = 2004; y <= 2009; y++) {
  specs[`Toyota|Prius|${y}|i`] = {
    en: '1NZ-FXE 1.5L Hybrid', di: '1.5L', cy: '4',
    hp: '73 kW (98 hp) combined', tq: '115 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~10.9 sec', qm: '~18.2 sec', ts: '~170 km/h',
    fc: '4.4L', fh: '3.6L', fx: '5.5L', ft: '91 RON',
    wt: '1,325 kg', se: '5', ca: '408 L',
    pr: p(36990, y, 2004, 600)
  }
}

// ── PRIUS ZVW30 3rd gen (2009–2015) ──────────────────────────────────────────
// 2ZR-FXE 1.8L hybrid, system 100 kW
for (let y = 2009; y <= 2015; y++) {
  specs[`Toyota|Prius|${y}|i`] = {
    en: '2ZR-FXE 1.8L Hybrid', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp) combined', tq: '142 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~10.4 sec', qm: '~17.8 sec', ts: '~180 km/h',
    fc: '3.9L', fh: '3.3L', fx: '4.8L', ft: '91 RON',
    wt: '1,380 kg', se: '5', ca: '445 L',
    pr: p(37990, y, 2009, 500)
  }
  specs[`Toyota|Prius|${y}|c`] = {
    en: '2ZR-FXE 1.8L Hybrid', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp) combined', tq: '142 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~10.4 sec', qm: '~17.8 sec', ts: '~180 km/h',
    fc: '3.9L', fh: '3.3L', fx: '4.8L', ft: '91 RON',
    wt: '1,395 kg', se: '5', ca: '445 L',
    pr: p(41490, y, 2009, 600)
  }
  specs[`Toyota|Prius|${y}|ZR`] = {
    en: '2ZR-FXE 1.8L Hybrid', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp) combined', tq: '142 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~10.4 sec', qm: '~17.8 sec', ts: '~180 km/h',
    fc: '3.9L', fh: '3.3L', fx: '4.8L', ft: '91 RON',
    wt: '1,415 kg', se: '5', ca: '445 L',
    pr: p(45490, y, 2009, 700)
  }
  if (y >= 2012) {
    specs[`Toyota|Prius|${y}|Plug-in`] = {
      en: '2ZR-FXE 1.8L Plug-in Hybrid', di: '1.8L', cy: '4',
      hp: '100 kW (134 hp) combined', tq: '142 Nm + electric',
      tx: 'E-CVT', dr: 'FWD',
      z1: '~9.5 sec', qm: '~17.3 sec', ts: '~180 km/h',
      fc: '2.1L', fh: '—', fx: '—', ft: 'PHEV (91 RON)',
      wt: '1,500 kg', se: '5', ca: '401 L',
      pr: p(52490, y, 2012, 700)
    }
  }
}

// ── PRIUS ZVW50 4th gen (2016–2022) ──────────────────────────────────────────
// 2ZR-FXE updated 1.8L hybrid, system 90 kW; also PHEV (Prime)
for (let y = 2016; y <= 2022; y++) {
  specs[`Toyota|Prius|${y}|i-Tech`] = {
    en: '2ZR-FXE 1.8L Hybrid', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp) combined', tq: '163 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~10.6 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '3.4L', fh: '2.9L', fx: '4.1L', ft: '91 RON',
    wt: '1,385 kg', se: '5', ca: '502 L',
    pr: p(36990, y, 2016, 500)
  }
  specs[`Toyota|Prius|${y}|ZR`] = {
    en: '2ZR-FXE 1.8L Hybrid', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp) combined', tq: '163 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~10.6 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '3.4L', fh: '2.9L', fx: '4.1L', ft: '91 RON',
    wt: '1,415 kg', se: '5', ca: '502 L',
    pr: p(42990, y, 2016, 600)
  }
  specs[`Toyota|Prius|${y}|Prime`] = {
    en: '2ZR-FXE 1.8L Plug-in Hybrid', di: '1.8L', cy: '4',
    hp: '90 kW (121 hp) combined', tq: '163 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~10.6 sec', qm: '~18.0 sec', ts: '~180 km/h',
    fc: '1.0L', fh: '—', fx: '—', ft: 'PHEV (91 RON)',
    wt: '1,545 kg', se: '4', ca: '217 L',
    pr: p(50990, y, 2016, 700)
  }
}

// ── PRIUS XW60 5th gen (2023–2026) ───────────────────────────────────────────
// M20A-FXS 2.0L hybrid, 144 kW combined
for (let y = 2023; y <= 2026; y++) {
  specs[`Toyota|Prius|${y}|GX`] = {
    en: 'M20A-FXS 2.0L Hybrid', di: '2.0L', cy: '4',
    hp: '144 kW (193 hp) combined', tq: '188 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.5 sec', ts: '~180 km/h',
    fc: '3.8L', fh: '3.3L', fx: '4.6L', ft: '91 RON',
    wt: '1,420 kg', se: '5', ca: '284 L',
    pr: pct(39990, y, 2023)
  }
  specs[`Toyota|Prius|${y}|GXL`] = {
    en: 'M20A-FXS 2.0L Hybrid', di: '2.0L', cy: '4',
    hp: '144 kW (193 hp) combined', tq: '188 Nm + electric',
    tx: 'E-CVT', dr: 'AWD',
    z1: '~7.3 sec', qm: '~15.3 sec', ts: '~180 km/h',
    fc: '4.2L', fh: '3.6L', fx: '5.1L', ft: '91 RON',
    wt: '1,500 kg', se: '5', ca: '284 L',
    pr: pct(46990, y, 2023)
  }
  specs[`Toyota|Prius|${y}|Prime`] = {
    en: 'M20A-FXS 2.0L Plug-in Hybrid', di: '2.0L', cy: '4',
    hp: '164 kW (220 hp) combined', tq: '188 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~6.7 sec', qm: '~15.0 sec', ts: '~185 km/h',
    fc: '1.0L', fh: '—', fx: '—', ft: 'PHEV (91 RON)',
    wt: '1,625 kg', se: '5', ca: '284 L',
    pr: pct(55990, y, 2023)
  }
}

// ── PRIUS C NHP10 (2012–2019) ─────────────────────────────────────────────────
// 1NZ-FXE 1.5L hybrid, system 74 kW — small urban hybrid hatch
for (let y = 2012; y <= 2019; y++) {
  specs[`Toyota|Prius C|${y}|Prius C`] = {
    en: '1NZ-FXE 1.5L Hybrid', di: '1.5L', cy: '4',
    hp: '74 kW (99 hp) combined', tq: '111 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
    fc: '3.9L', fh: '3.2L', fx: '4.9L', ft: '91 RON',
    wt: '1,050 kg', se: '5', ca: '217 L',
    pr: p(22990, y, 2012, 400)
  }
  if (y >= 2015) {
    specs[`Toyota|Prius C|${y}|Prius C Plus`] = {
      en: '1NZ-FXE 1.5L Hybrid', di: '1.5L', cy: '4',
      hp: '74 kW (99 hp) combined', tq: '111 Nm + electric',
      tx: 'E-CVT', dr: 'FWD',
      z1: '~11.0 sec', qm: '~18.5 sec', ts: '~165 km/h',
      fc: '3.9L', fh: '3.2L', fx: '4.9L', ft: '91 RON',
      wt: '1,065 kg', se: '5', ca: '217 L',
      pr: p(27490, y, 2015, 400)
    }
  }
}

// ── PRIUS V ZVW40 (2012–2017) ─────────────────────────────────────────────────
// 2ZR-FXE 1.8L hybrid, 100 kW; 7-seat wagon
for (let y = 2012; y <= 2017; y++) {
  specs[`Toyota|Prius V|${y}|i-Tech`] = {
    en: '2ZR-FXE 1.8L Hybrid', di: '1.8L', cy: '4',
    hp: '100 kW (134 hp) combined', tq: '142 Nm + electric',
    tx: 'E-CVT', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.5 sec', ts: '~180 km/h',
    fc: '4.4L', fh: '3.7L', fx: '5.5L', ft: '91 RON',
    wt: '1,625 kg', se: '7', ca: '906 L',
    pr: p(39990, y, 2012, 600)
  }
  if (y >= 2014) {
    specs[`Toyota|Prius V|${y}|ZR`] = {
      en: '2ZR-FXE 1.8L Hybrid', di: '1.8L', cy: '4',
      hp: '100 kW (134 hp) combined', tq: '142 Nm + electric',
      tx: 'E-CVT', dr: 'FWD',
      z1: '~11.0 sec', qm: '~18.5 sec', ts: '~180 km/h',
      fc: '4.4L', fh: '3.7L', fx: '5.5L', ft: '91 RON',
      wt: '1,650 kg', se: '7', ca: '906 L',
      pr: p(46990, y, 2014, 700)
    }
  }
}

// ── TOYOTA BZ4X (2022–2026) ───────────────────────────────────────────────────
// Full electric SUV; GX FWD 150 kW / GXL AWD 160 kW combined
for (let y = 2022; y <= 2026; y++) {
  specs[`Toyota|BZ4X|${y}|GX`] = {
    en: 'Electric motor (single)', di: 'Electric', cy: '—',
    hp: '150 kW (201 hp)', tq: '265 Nm',
    tx: 'Single-speed', dr: 'FWD',
    z1: '~6.9 sec', qm: '~15.2 sec', ts: '~160 km/h',
    fc: '0L', fh: '—', fx: '—', ft: 'Electric (71.4 kWh)',
    wt: '2,010 kg', se: '5', ca: '452 L',
    pr: pct(50990, y, 2022)
  }
  specs[`Toyota|BZ4X|${y}|GXL`] = {
    en: 'Dual electric motors (AWD)', di: 'Electric', cy: '—',
    hp: '160 kW (215 hp) combined', tq: '336 Nm combined',
    tx: 'Single-speed', dr: 'AWD',
    z1: '~6.5 sec', qm: '~14.8 sec', ts: '~160 km/h',
    fc: '0L', fh: '—', fx: '—', ft: 'Electric (72.8 kWh)',
    wt: '2,100 kg', se: '5', ca: '452 L',
    pr: pct(57990, y, 2022)
  }
}

// ── TOYOTA CROWN XS35 Crossover (2023–2026) ──────────────────────────────────
// Sold in AU as Crown Sport 2.4T hybrid or Crown 2.5L hybrid
for (let y = 2023; y <= 2026; y++) {
  specs[`Toyota|Crown|${y}|Hybrid`] = {
    en: 'A25A-FXS 2.5L Hybrid', di: '2.5L', cy: '4',
    hp: '184 kW (247 hp) combined', tq: '221 Nm + electric',
    tx: 'E-CVT', dr: 'AWD',
    z1: '~7.2 sec', qm: '~15.3 sec', ts: '~200 km/h',
    fc: '5.1L', fh: '4.4L', fx: '6.3L', ft: '91 RON',
    wt: '1,840 kg', se: '5', ca: '452 L',
    pr: pct(54990, y, 2023)
  }
  specs[`Toyota|Crown|${y}|Sport`] = {
    en: 'T24A-FTS 2.4L DOHC Turbo + Electric', di: '2.4L', cy: '4',
    hp: '197 kW (264 hp) combined', tq: '460 Nm combined',
    tx: '6-speed auto + electric', dr: 'AWD',
    z1: '~6.2 sec', qm: '~14.5 sec', ts: '~210 km/h',
    fc: '7.8L', fh: '6.5L', fx: '10.0L', ft: '95 RON',
    wt: '1,940 kg', se: '5', ca: '440 L',
    pr: pct(64990, y, 2023)
  }
}

// ── TOYOTA GRANVIA (2019–2026) ────────────────────────────────────────────────
// 1GD-FTV 2.8L DOHC Turbo Diesel, 150 kW, 400 Nm; premium people mover
for (let y = 2019; y <= 2026; y++) {
  specs[`Toyota|Granvia|${y}|Standard`] = {
    en: '1GD-FTV 2.8L DOHC Turbo Diesel', di: '2.8L', cy: '4',
    hp: '150 kW (201 hp)', tq: '400 Nm',
    tx: '6-speed auto', dr: 'RWD',
    z1: '~11.0 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '9.5L', fh: '7.5L', fx: '12.5L', ft: 'Diesel',
    wt: '2,570 kg', se: '8', ca: '—',
    pr: pct(59990, y, 2019)
  }
  specs[`Toyota|Granvia|${y}|VX`] = {
    en: '1GD-FTV 2.8L DOHC Turbo Diesel', di: '2.8L', cy: '4',
    hp: '150 kW (201 hp)', tq: '400 Nm',
    tx: '6-speed auto', dr: 'RWD',
    z1: '~11.0 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '9.5L', fh: '7.5L', fx: '12.5L', ft: 'Diesel',
    wt: '2,590 kg', se: '8', ca: '—',
    pr: pct(69990, y, 2019)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement29.json', JSON.stringify({ specs }, null, 2))
console.log('supplement29.json:', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => { const m = k.split('|')[1]; byModel[m] = (byModel[m]||0)+1 })
Object.entries(byModel).forEach(([m,c]) => console.log(' ', m+':', c))
