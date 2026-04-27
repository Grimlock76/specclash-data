#!/usr/bin/env node
// gen27.cjs — Mitsubishi global: Eclipse 1G-4G, Eclipse Spyder, FTO, Diamante, GTO, Delica, Space Star, i-MiEV, RVR, Carisma, Galant 8G, Challenger
const fs = require('fs')
const specs = {}

function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
function price(base, year, start, inc = 500) { return `~$${fmt(Math.round(base + (year - start) * inc))}` }

// ── ECLIPSE 1G D27A (1989–1994) ──────────────────────────────────────────────
for (let y = 1989; y <= 1994; y++) {
  specs[`Mitsubishi|Eclipse|${y}|GS`] = {
    en: '4G37 1.8L SOHC 16V', di: '1.8L', cy: '4',
    hp: '88 kW (118 hp)', tq: '156 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.3 sec', ts: '~185 km/h',
    fc: '9.0L', fh: '6.5L', fx: '12.0L', ft: '91 RON',
    wt: '1,140 kg', se: '4', ca: '300 L',
    pr: price(18990, y, 1989, 600)
  }
  specs[`Mitsubishi|Eclipse|${y}|GS Turbo`] = {
    en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
    hp: '135 kW (181 hp)', tq: '264 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.8 sec', ts: '~220 km/h',
    fc: '11.0L', fh: '8.0L', fx: '14.5L', ft: '95 RON',
    wt: '1,230 kg', se: '4', ca: '300 L',
    pr: price(24990, y, 1989, 800)
  }
  specs[`Mitsubishi|Eclipse|${y}|GSX`] = {
    en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
    hp: '140 kW (188 hp)', tq: '275 Nm',
    tx: '5-speed manual', dr: 'AWD',
    z1: '~6.8 sec', qm: '~15.0 sec', ts: '~230 km/h',
    fc: '12.0L', fh: '8.5L', fx: '15.5L', ft: '95 RON',
    wt: '1,380 kg', se: '4', ca: '300 L',
    pr: price(31990, y, 1989, 1000)
  }
}

// ── ECLIPSE 2G D32A/D33A (1994–1999) ─────────────────────────────────────────
for (let y = 1994; y <= 1999; y++) {
  specs[`Mitsubishi|Eclipse|${y}|RS`] = {
    en: '4G64 2.0L SOHC 16V', di: '2.0L', cy: '4',
    hp: '88 kW (118 hp)', tq: '166 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~178 km/h',
    fc: '9.0L', fh: '6.8L', fx: '12.0L', ft: '91 RON',
    wt: '1,210 kg', se: '4', ca: '290 L',
    pr: price(19990, y, 1994, 500)
  }
  specs[`Mitsubishi|Eclipse|${y}|GS`] = {
    en: '4G64 2.0L SOHC 16V', di: '2.0L', cy: '4',
    hp: '102 kW (137 hp)', tq: '173 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,240 kg', se: '4', ca: '290 L',
    pr: price(23990, y, 1994, 600)
  }
  specs[`Mitsubishi|Eclipse|${y}|GS-T`] = {
    en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
    hp: '152 kW (204 hp)', tq: '283 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~6.5 sec', qm: '~14.7 sec', ts: '~235 km/h',
    fc: '11.5L', fh: '8.5L', fx: '15.0L', ft: '98 RON',
    wt: '1,290 kg', se: '4', ca: '290 L',
    pr: price(29990, y, 1994, 800)
  }
  specs[`Mitsubishi|Eclipse|${y}|GSX`] = {
    en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
    hp: '152 kW (204 hp)', tq: '283 Nm',
    tx: '5-speed manual', dr: 'AWD',
    z1: '~6.2 sec', qm: '~14.3 sec', ts: '~240 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.5L', ft: '98 RON',
    wt: '1,430 kg', se: '4', ca: '290 L',
    pr: price(36990, y, 1994, 1000)
  }
}

// ── ECLIPSE 3G D52A/D53A (2000–2005) ─────────────────────────────────────────
for (let y = 2000; y <= 2005; y++) {
  specs[`Mitsubishi|Eclipse|${y}|GS`] = {
    en: '4G69 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '107 kW (143 hp)', tq: '201 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~188 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,350 kg', se: '4', ca: '280 L',
    pr: price(25990, y, 2000, 600)
  }
  specs[`Mitsubishi|Eclipse|${y}|GT`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '162 kW (217 hp)', tq: '274 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~7.5 sec', qm: '~15.8 sec', ts: '~225 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.5L', ft: '95 RON',
    wt: '1,445 kg', se: '4', ca: '280 L',
    pr: price(33990, y, 2000, 800)
  }
  specs[`Mitsubishi|Eclipse|${y}|GTS`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '162 kW (217 hp)', tq: '274 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.0 sec', qm: '~16.3 sec', ts: '~220 km/h',
    fc: '13.0L', fh: '9.5L', fx: '17.0L', ft: '95 RON',
    wt: '1,465 kg', se: '4', ca: '280 L',
    pr: price(37990, y, 2000, 900)
  }
}

// ── ECLIPSE 4G DK0T (2006–2012) ──────────────────────────────────────────────
for (let y = 2006; y <= 2012; y++) {
  specs[`Mitsubishi|Eclipse|${y}|GS`] = {
    en: '4G69 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '125 kW (168 hp)', tq: '220 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.8 sec', ts: '~195 km/h',
    fc: '9.5L', fh: '6.8L', fx: '13.0L', ft: '91 RON',
    wt: '1,417 kg', se: '4', ca: '210 L',
    pr: price(27990, y, 2006, 500)
  }
  specs[`Mitsubishi|Eclipse|${y}|GT`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '200 kW (268 hp)', tq: '339 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~6.5 sec', qm: '~14.8 sec', ts: '~235 km/h',
    fc: '13.5L', fh: '9.5L', fx: '18.0L', ft: '95 RON',
    wt: '1,508 kg', se: '4', ca: '210 L',
    pr: price(35990, y, 2006, 700)
  }
  specs[`Mitsubishi|Eclipse|${y}|GTS`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '206 kW (276 hp)', tq: '347 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~6.7 sec', qm: '~15.0 sec', ts: '~233 km/h',
    fc: '13.8L', fh: '9.8L', fx: '18.5L', ft: '95 RON',
    wt: '1,521 kg', se: '4', ca: '210 L',
    pr: price(39990, y, 2006, 800)
  }
  specs[`Mitsubishi|Eclipse|${y}|SE`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '200 kW (268 hp)', tq: '339 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~6.7 sec', qm: '~15.0 sec', ts: '~233 km/h',
    fc: '13.5L', fh: '9.5L', fx: '18.0L', ft: '95 RON',
    wt: '1,495 kg', se: '4', ca: '210 L',
    pr: price(33990, y, 2006, 600)
  }
}

// ── ECLIPSE SPYDER 2G (1995–1999) ────────────────────────────────────────────
for (let y = 1995; y <= 1999; y++) {
  specs[`Mitsubishi|Eclipse Spyder|${y}|GS`] = {
    en: '4G64 2.0L SOHC 16V', di: '2.0L', cy: '4',
    hp: '102 kW (137 hp)', tq: '173 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~183 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '91 RON',
    wt: '1,380 kg', se: '4', ca: '155 L',
    pr: price(29990, y, 1995, 700)
  }
  specs[`Mitsubishi|Eclipse Spyder|${y}|GS-T`] = {
    en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
    hp: '152 kW (204 hp)', tq: '283 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~7.0 sec', qm: '~15.3 sec', ts: '~230 km/h',
    fc: '12.0L', fh: '9.0L', fx: '15.5L', ft: '98 RON',
    wt: '1,450 kg', se: '4', ca: '155 L',
    pr: price(36990, y, 1995, 900)
  }
}

// ── ECLIPSE SPYDER 3G (2000–2005) ────────────────────────────────────────────
for (let y = 2000; y <= 2005; y++) {
  specs[`Mitsubishi|Eclipse Spyder|${y}|GS`] = {
    en: '4G69 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '107 kW (143 hp)', tq: '201 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~182 km/h',
    fc: '10.5L', fh: '7.8L', fx: '13.5L', ft: '91 RON',
    wt: '1,520 kg', se: '4', ca: '140 L',
    pr: price(34990, y, 2000, 700)
  }
  specs[`Mitsubishi|Eclipse Spyder|${y}|GT`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '162 kW (217 hp)', tq: '274 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~218 km/h',
    fc: '13.5L', fh: '10.0L', fx: '17.5L', ft: '95 RON',
    wt: '1,610 kg', se: '4', ca: '140 L',
    pr: price(42990, y, 2000, 900)
  }
}

// ── ECLIPSE SPYDER 4G (2006–2011) ────────────────────────────────────────────
for (let y = 2006; y <= 2011; y++) {
  specs[`Mitsubishi|Eclipse Spyder|${y}|GS`] = {
    en: '4G69 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '125 kW (168 hp)', tq: '220 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~188 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.5L', ft: '91 RON',
    wt: '1,546 kg', se: '4', ca: '155 L',
    pr: price(35990, y, 2006, 600)
  }
  specs[`Mitsubishi|Eclipse Spyder|${y}|GT`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '200 kW (268 hp)', tq: '339 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~7.0 sec', qm: '~15.5 sec', ts: '~228 km/h',
    fc: '14.5L', fh: '10.5L', fx: '19.0L', ft: '95 RON',
    wt: '1,645 kg', se: '4', ca: '155 L',
    pr: price(44990, y, 2006, 800)
  }
  specs[`Mitsubishi|Eclipse Spyder|${y}|GTS`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '206 kW (276 hp)', tq: '347 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~7.0 sec', qm: '~15.5 sec', ts: '~228 km/h',
    fc: '14.5L', fh: '10.5L', fx: '19.0L', ft: '95 RON',
    wt: '1,660 kg', se: '4', ca: '155 L',
    pr: price(49990, y, 2006, 900)
  }
  specs[`Mitsubishi|Eclipse Spyder|${y}|SE`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '200 kW (268 hp)', tq: '339 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~7.0 sec', qm: '~15.5 sec', ts: '~228 km/h',
    fc: '14.5L', fh: '10.5L', fx: '19.0L', ft: '95 RON',
    wt: '1,635 kg', se: '4', ca: '155 L',
    pr: price(42990, y, 2006, 700)
  }
}

// ── FTO E52A (1994–2000) ─────────────────────────────────────────────────────
for (let y = 1994; y <= 2000; y++) {
  specs[`Mitsubishi|FTO|${y}|GS`] = {
    en: '4G93 1.8L SOHC 16V', di: '1.8L', cy: '4',
    hp: '91 kW (122 hp)', tq: '153 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~190 km/h',
    fc: '8.5L', fh: '6.3L', fx: '11.0L', ft: '91 RON',
    wt: '1,090 kg', se: '4', ca: '210 L',
    pr: price(29990, y, 1994, 600)
  }
  specs[`Mitsubishi|FTO|${y}|GR`] = {
    en: '6A12 2.0L V6 DOHC 24V', di: '2.0L', cy: '6',
    hp: '128 kW (172 hp)', tq: '186 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~8.0 sec', qm: '~16.0 sec', ts: '~210 km/h',
    fc: '10.0L', fh: '7.5L', fx: '13.0L', ft: '95 RON',
    wt: '1,130 kg', se: '4', ca: '210 L',
    pr: price(35990, y, 1994, 800)
  }
  specs[`Mitsubishi|FTO|${y}|GPX`] = {
    en: '6A12 2.0L V6 DOHC 24V', di: '2.0L', cy: '6',
    hp: '128 kW (172 hp)', tq: '186 Nm',
    tx: 'INVECS-II auto', dr: 'FWD',
    z1: '~8.2 sec', qm: '~16.2 sec', ts: '~208 km/h',
    fc: '10.5L', fh: '8.0L', fx: '13.5L', ft: '95 RON',
    wt: '1,150 kg', se: '4', ca: '210 L',
    pr: price(38990, y, 1994, 900)
  }
  specs[`Mitsubishi|FTO|${y}|GPvR`] = {
    en: '6A12 2.0L V6 DOHC 24V MIVEC', di: '2.0L', cy: '6',
    hp: '147 kW (197 hp)', tq: '196 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~7.2 sec', qm: '~15.5 sec', ts: '~225 km/h',
    fc: '10.5L', fh: '7.8L', fx: '13.5L', ft: '98 RON',
    wt: '1,100 kg', se: '4', ca: '210 L',
    pr: price(44990, y, 1994, 1100)
  }
}

// ── DIAMANTE F11A (1990–1997) ─────────────────────────────────────────────────
for (let y = 1990; y <= 1997; y++) {
  specs[`Mitsubishi|Diamante|${y}|LS`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '142 kW (190 hp)', tq: '254 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~8.5 sec', qm: '~16.5 sec', ts: '~205 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.5L', ft: '95 RON',
    wt: '1,560 kg', se: '5', ca: '450 L',
    pr: price(39990, y, 1990, 800)
  }
  specs[`Mitsubishi|Diamante|${y}|Wagon`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '142 kW (190 hp)', tq: '254 Nm',
    tx: '4-speed auto', dr: 'AWD',
    z1: '~9.5 sec', qm: '~17.5 sec', ts: '~198 km/h',
    fc: '13.5L', fh: '10.0L', fx: '17.5L', ft: '95 RON',
    wt: '1,680 kg', se: '5', ca: '800 L',
    pr: price(44990, y, 1990, 900)
  }
}

// ── DIAMANTE F36A (1997–2004) ─────────────────────────────────────────────────
for (let y = 1997; y <= 2004; y++) {
  specs[`Mitsubishi|Diamante|${y}|ES`] = {
    en: '6G73 3.5L V6 SOHC 24V', di: '3.5L', cy: '6',
    hp: '160 kW (214 hp)', tq: '304 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~210 km/h',
    fc: '12.0L', fh: '8.8L', fx: '16.0L', ft: '95 RON',
    wt: '1,580 kg', se: '5', ca: '455 L',
    pr: price(44990, y, 1997, 800)
  }
  specs[`Mitsubishi|Diamante|${y}|LS`] = {
    en: '6G73 3.5L V6 SOHC 24V', di: '3.5L', cy: '6',
    hp: '160 kW (214 hp)', tq: '304 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~8.0 sec', qm: '~15.8 sec', ts: '~210 km/h',
    fc: '12.0L', fh: '8.8L', fx: '16.0L', ft: '95 RON',
    wt: '1,600 kg', se: '5', ca: '455 L',
    pr: price(52990, y, 1997, 1000)
  }
}

// ── GTO Z15A/Z16A (1990–1999) — JDM name for 3000GT ─────────────────────────
for (let y = 1990; y <= 1999; y++) {
  specs[`Mitsubishi|GTO|${y}|NA`] = {
    en: '6G72 3.0L V6 DOHC 24V', di: '3.0L', cy: '6',
    hp: '162 kW (217 hp)', tq: '270 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~7.8 sec', qm: '~15.8 sec', ts: '~235 km/h',
    fc: '13.0L', fh: '9.0L', fx: '17.0L', ft: '95 RON',
    wt: '1,570 kg', se: '2+2', ca: '200 L',
    pr: price(52990, y, 1990, 1000)
  }
  specs[`Mitsubishi|GTO|${y}|Twin Turbo`] = {
    en: '6G72TT 3.0L V6 DOHC twin turbo', di: '3.0L', cy: '6',
    hp: '210 kW (281 hp)', tq: '427 Nm',
    tx: '6-speed manual', dr: 'AWD',
    z1: '~5.9 sec', qm: '~14.1 sec', ts: '~250 km/h (limited)',
    fc: '14.5L', fh: '10.0L', fx: '19.5L', ft: '98 RON',
    wt: '1,756 kg', se: '2+2', ca: '200 L',
    pr: price(79990, y, 1990, 1500)
  }
  if (y >= 1993) {
    specs[`Mitsubishi|GTO|${y}|MR`] = {
      en: '6G72TT 3.0L V6 DOHC twin turbo', di: '3.0L', cy: '6',
      hp: '210 kW (281 hp)', tq: '412 Nm',
      tx: '6-speed manual', dr: 'RWD',
      z1: '~6.2 sec', qm: '~14.5 sec', ts: '~250 km/h (limited)',
      fc: '14.0L', fh: '9.8L', fx: '18.5L', ft: '98 RON',
      wt: '1,600 kg', se: '2+2', ca: '200 L',
      pr: price(68990, y, 1993, 1200)
    }
  }
}

// ── GALANT 8G (US, 1999–2003) ────────────────────────────────────────────────
for (let y = 1999; y <= 2003; y++) {
  specs[`Mitsubishi|Galant|${y}|DE`] = {
    en: '4G64 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '106 kW (142 hp)', tq: '196 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.5 sec', qm: '~17.5 sec', ts: '~178 km/h',
    fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '91 RON',
    wt: '1,410 kg', se: '5', ca: '440 L',
    pr: price(23490, y, 1999, 500)
  }
  specs[`Mitsubishi|Galant|${y}|ES`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '130 kW (174 hp)', tq: '254 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~9.0 sec', qm: '~16.5 sec', ts: '~195 km/h',
    fc: '11.5L', fh: '8.5L', fx: '15.0L', ft: '95 RON',
    wt: '1,470 kg', se: '5', ca: '440 L',
    pr: price(27490, y, 1999, 600)
  }
}

// ── GALANT 9G (US, 2004–2012) ────────────────────────────────────────────────
for (let y = 2004; y <= 2012; y++) {
  specs[`Mitsubishi|Galant|${y}|ES`] = {
    en: '4G69 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '117 kW (157 hp)', tq: '213 Nm',
    tx: '4-speed auto', dr: 'FWD',
    z1: '~10.0 sec', qm: '~17.5 sec', ts: '~183 km/h',
    fc: '9.5L', fh: '6.8L', fx: '12.8L', ft: '91 RON',
    wt: '1,480 kg', se: '5', ca: '437 L',
    pr: price(24990, y, 2004, 400)
  }
  specs[`Mitsubishi|Galant|${y}|GTS`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '193 kW (259 hp)', tq: '339 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~7.0 sec', qm: '~15.3 sec', ts: '~215 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.5L', ft: '95 RON',
    wt: '1,570 kg', se: '5', ca: '437 L',
    pr: price(31990, y, 2004, 600)
  }
  specs[`Mitsubishi|Galant|${y}|Ralliart`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '200 kW (268 hp)', tq: '347 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~6.8 sec', qm: '~15.0 sec', ts: '~220 km/h',
    fc: '13.0L', fh: '9.5L', fx: '17.0L', ft: '95 RON',
    wt: '1,590 kg', se: '5', ca: '437 L',
    pr: price(36990, y, 2004, 700)
  }
  specs[`Mitsubishi|Galant|${y}|SE`] = {
    en: '6G75 3.8L V6 SOHC MIVEC', di: '3.8L', cy: '6',
    hp: '193 kW (259 hp)', tq: '339 Nm',
    tx: '5-speed auto', dr: 'FWD',
    z1: '~7.0 sec', qm: '~15.3 sec', ts: '~215 km/h',
    fc: '12.5L', fh: '9.0L', fx: '16.5L', ft: '95 RON',
    wt: '1,550 kg', se: '5', ca: '437 L',
    pr: price(28990, y, 2004, 500)
  }
}

// ── DELICA Star Wagon (1986–1994) ─────────────────────────────────────────────
for (let y = 1986; y <= 1994; y++) {
  specs[`Mitsubishi|Delica|${y}|GL`] = {
    en: '4G63 2.0L SOHC 8V', di: '2.0L', cy: '4',
    hp: '65 kW (87 hp)', tq: '148 Nm',
    tx: '5-speed manual', dr: 'RWD',
    z1: '~14.5 sec', qm: '~21.0 sec', ts: '~145 km/h',
    fc: '11.5L', fh: '9.0L', fx: '14.5L', ft: '91 RON',
    wt: '1,580 kg', se: '8', ca: '—',
    pr: price(22990, y, 1986, 600)
  }
  specs[`Mitsubishi|Delica|${y}|GLX 4WD`] = {
    en: '4D56T 2.5L SOHC Turbo Diesel', di: '2.5L', cy: '4',
    hp: '80 kW (107 hp)', tq: '240 Nm',
    tx: '5-speed manual', dr: '4WD',
    z1: '~16.0 sec', qm: '~22.0 sec', ts: '~140 km/h',
    fc: '11.0L', fh: '8.5L', fx: '14.0L', ft: 'Diesel',
    wt: '1,750 kg', se: '8', ca: '—',
    pr: price(29990, y, 1986, 800)
  }
}

// ── DELICA Space Gear (1994–2007) ─────────────────────────────────────────────
for (let y = 1994; y <= 2007; y++) {
  specs[`Mitsubishi|Delica|${y}|GLX`] = {
    en: '4M40 2.8L SOHC Turbo Diesel', di: '2.8L', cy: '4',
    hp: '92 kW (123 hp)', tq: '294 Nm',
    tx: '4-speed auto', dr: 'AWD',
    z1: '~14.0 sec', qm: '~20.5 sec', ts: '~150 km/h',
    fc: '11.5L', fh: '9.0L', fx: '14.5L', ft: 'Diesel',
    wt: '1,970 kg', se: '8', ca: '—',
    pr: price(34990, y, 1994, 700)
  }
  specs[`Mitsubishi|Delica|${y}|GLX SE`] = {
    en: '6G72 3.0L V6 SOHC 24V', di: '3.0L', cy: '6',
    hp: '130 kW (174 hp)', tq: '240 Nm',
    tx: '4-speed auto', dr: 'AWD',
    z1: '~12.5 sec', qm: '~19.0 sec', ts: '~165 km/h',
    fc: '14.0L', fh: '11.0L', fx: '18.0L', ft: '95 RON',
    wt: '2,040 kg', se: '8', ca: '—',
    pr: price(42990, y, 1994, 900)
  }
}

// ── DELICA D:5 (2007–2019) ───────────────────────────────────────────────────
for (let y = 2007; y <= 2019; y++) {
  specs[`Mitsubishi|Delica|${y}|D Power`] = {
    en: '4N14 2.2L DOHC Turbo Diesel', di: '2.2L', cy: '4',
    hp: '110 kW (148 hp)', tq: '380 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~175 km/h',
    fc: '9.5L', fh: '7.5L', fx: '12.5L', ft: 'Diesel',
    wt: '2,130 kg', se: '8', ca: '—',
    pr: price(44990, y, 2007, 800)
  }
  specs[`Mitsubishi|Delica|${y}|G Power`] = {
    en: '4B12 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
    hp: '124 kW (166 hp)', tq: '220 Nm',
    tx: '6-speed auto', dr: 'AWD',
    z1: '~12.0 sec', qm: '~19.0 sec', ts: '~170 km/h',
    fc: '11.0L', fh: '8.5L', fx: '14.5L', ft: '91 RON',
    wt: '2,070 kg', se: '8', ca: '—',
    pr: price(39990, y, 2007, 700)
  }
}

// ── SPACE STAR MH (1998–2004) ─────────────────────────────────────────────────
for (let y = 1998; y <= 2004; y++) {
  specs[`Mitsubishi|Space Star|${y}|GLS`] = {
    en: '4G13 1.3L SOHC 12V', di: '1.3L', cy: '4',
    hp: '55 kW (74 hp)', tq: '108 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~13.5 sec', qm: '~20.5 sec', ts: '~158 km/h',
    fc: '7.5L', fh: '5.5L', fx: '10.0L', ft: '91 RON',
    wt: '1,010 kg', se: '5', ca: '285 L',
    pr: price(15990, y, 1998, 400)
  }
  specs[`Mitsubishi|Space Star|${y}|SE`] = {
    en: '4G18 1.6L SOHC 16V', di: '1.6L', cy: '4',
    hp: '76 kW (102 hp)', tq: '141 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.5 sec', qm: '~18.5 sec', ts: '~172 km/h',
    fc: '8.5L', fh: '6.3L', fx: '11.0L', ft: '91 RON',
    wt: '1,060 kg', se: '5', ca: '285 L',
    pr: price(19990, y, 1998, 500)
  }
}

// ── i-MiEV HA3W (2009–2019) ──────────────────────────────────────────────────
for (let y = 2009; y <= 2019; y++) {
  specs[`Mitsubishi|i-MiEV|${y}|M`] = {
    en: 'EM57 Electric motor', di: 'Electric', cy: '—',
    hp: '49 kW (66 hp)', tq: '180 Nm',
    tx: 'Single-speed', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~130 km/h',
    fc: '0L', fh: '—', fx: '—', ft: 'Electric (16 kWh)',
    wt: '1,100 kg', se: '4', ca: '227 L',
    pr: price(38490, y, 2009, -800)
  }
  specs[`Mitsubishi|i-MiEV|${y}|MiEV`] = {
    en: 'EM57 Electric motor', di: 'Electric', cy: '—',
    hp: '49 kW (66 hp)', tq: '180 Nm',
    tx: 'Single-speed', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~130 km/h',
    fc: '0L', fh: '—', fx: '—', ft: 'Electric (16 kWh)',
    wt: '1,110 kg', se: '4', ca: '227 L',
    pr: price(41990, y, 2009, -900)
  }
}

// ── RVR / Space Runner N11W (1991–1997) ──────────────────────────────────────
for (let y = 1991; y <= 1997; y++) {
  specs[`Mitsubishi|RVR|${y}|GLS`] = {
    en: '4G93 1.8L SOHC 16V', di: '1.8L', cy: '4',
    hp: '91 kW (122 hp)', tq: '153 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~178 km/h',
    fc: '9.0L', fh: '6.8L', fx: '11.5L', ft: '91 RON',
    wt: '1,190 kg', se: '5', ca: '480 L',
    pr: price(21990, y, 1991, 600)
  }
  specs[`Mitsubishi|RVR|${y}|Sports`] = {
    en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
    hp: '135 kW (181 hp)', tq: '264 Nm',
    tx: '5-speed manual', dr: 'AWD',
    z1: '~7.8 sec', qm: '~15.8 sec', ts: '~215 km/h',
    fc: '11.5L', fh: '8.5L', fx: '15.0L', ft: '95 RON',
    wt: '1,340 kg', se: '5', ca: '480 L',
    pr: price(28990, y, 1991, 800)
  }
}

// ── CARISMA DA1A/DA2A (1995–2004) ────────────────────────────────────────────
for (let y = 1995; y <= 2004; y++) {
  specs[`Mitsubishi|Carisma|${y}|GLS`] = {
    en: '4G92 1.6L SOHC 16V MIVEC', di: '1.6L', cy: '4',
    hp: '79 kW (106 hp)', tq: '147 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~11.0 sec', qm: '~18.0 sec', ts: '~178 km/h',
    fc: '8.5L', fh: '6.3L', fx: '11.0L', ft: '91 RON',
    wt: '1,100 kg', se: '5', ca: '410 L',
    pr: price(19990, y, 1995, 400)
  }
  specs[`Mitsubishi|Carisma|${y}|SE`] = {
    en: '4G93-GDI 1.8L DOHC 16V GDI', di: '1.8L', cy: '4',
    hp: '99 kW (133 hp)', tq: '174 Nm',
    tx: '5-speed manual', dr: 'FWD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~190 km/h',
    fc: '7.8L', fh: '5.8L', fx: '10.5L', ft: '95 RON',
    wt: '1,150 kg', se: '5', ca: '410 L',
    pr: price(24990, y, 1995, 500)
  }
}

// ── CHALLENGER KH/KL (1998–2016) ─────────────────────────────────────────────
for (let y = 1998; y <= 2006; y++) {
  specs[`Mitsubishi|Challenger|${y}|GLX`] = {
    en: '6G74 3.5L V6 SOHC 24V MIVEC', di: '3.5L', cy: '6',
    hp: '155 kW (208 hp)', tq: '304 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~10.0 sec', qm: '~17.3 sec', ts: '~180 km/h',
    fc: '14.5L', fh: '11.0L', fx: '18.5L', ft: '95 RON',
    wt: '1,870 kg', se: '7', ca: '1,300 L',
    pr: price(44990, y, 1998, 900)
  }
  specs[`Mitsubishi|Challenger|${y}|GLS`] = {
    en: '4M40 2.8L SOHC Turbo Diesel', di: '2.8L', cy: '4',
    hp: '92 kW (123 hp)', tq: '294 Nm',
    tx: '4-speed auto', dr: '4WD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~158 km/h',
    fc: '11.0L', fh: '8.5L', fx: '14.0L', ft: 'Diesel',
    wt: '1,960 kg', se: '7', ca: '1,300 L',
    pr: price(48990, y, 1998, 1000)
  }
}
for (let y = 2008; y <= 2016; y++) {
  specs[`Mitsubishi|Challenger|${y}|GLX`] = {
    en: '6B31 3.0L V6 SOHC 24V MIVEC', di: '3.0L', cy: '6',
    hp: '162 kW (217 hp)', tq: '285 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~182 km/h',
    fc: '12.5L', fh: '9.5L', fx: '16.5L', ft: '95 RON',
    wt: '2,000 kg', se: '7', ca: '1,300 L',
    pr: price(46990, y, 2008, 700)
  }
  specs[`Mitsubishi|Challenger|${y}|VR-X`] = {
    en: '6B31 3.0L V6 SOHC 24V MIVEC', di: '3.0L', cy: '6',
    hp: '162 kW (217 hp)', tq: '285 Nm',
    tx: '5-speed auto', dr: '4WD',
    z1: '~9.5 sec', qm: '~17.0 sec', ts: '~182 km/h',
    fc: '12.5L', fh: '9.5L', fx: '16.5L', ft: '95 RON',
    wt: '2,040 kg', se: '7', ca: '1,300 L',
    pr: price(54990, y, 2008, 900)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement27.json', JSON.stringify({ specs }, null, 2))
console.log('supplement27.json:', Object.keys(specs).length, 'entries')
const byModel = {}
Object.keys(specs).forEach(k => { const m = k.split('|')[1]; byModel[m] = (byModel[m] || 0) + 1 })
Object.entries(byModel).forEach(([m, c]) => console.log(' ', m + ':', c))
