#!/usr/bin/env node
const fs = require('fs')
const s20 = JSON.parse(fs.readFileSync('src/data/supplement20.json', 'utf8'))

// ── Fix 1: Outlander ZE (2001-2006) engine code 4G63→4G69 ────────────────
// 4G63 is 2.0L; ZE used the 4G69 2.4L MIVEC
const zeBase = {
  en: '4G69 2.4L SOHC 16V MIVEC', di: '2.4L', cy: '4',
  hp: '114 kW (153 hp)', tq: '220 Nm',
  tx: 'CVT', dr: 'FWD',
  z1: '~10.5 sec', qm: '~17.8 sec', ts: '~180 km/h',
  fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '91 RON',
  wt: '1,490 kg', se: '5', ca: '800 L'
}
const zeAWD = { ...zeBase, dr: 'AWD', wt: '1,590 kg' }
for (let y = 2001; y <= 2006; y++) {
  const pr1 = '~$' + (28990 + (y - 2001) * 700).toLocaleString()
  const pr2 = '~$' + (35990 + (y - 2001) * 900).toLocaleString()
  s20.specs[`Mitsubishi|Outlander|${y}|LS`] = { ...zeBase, pr: pr1 }
  s20.specs[`Mitsubishi|Outlander|${y}|VR-X`] = { ...zeAWD, pr: pr2 }
}

// ── Fix 2: Eclipse 1G GS — NA 1.8L should be 69 kW (92 hp), SOHC 8V ──────
const e1gGS = {
  en: '4G37 1.8L SOHC 8V', di: '1.8L', cy: '4',
  hp: '69 kW (92 hp)', tq: '143 Nm',
  tx: '5-speed manual', dr: 'FWD',
  z1: '~11.5 sec', qm: '~18.5 sec', ts: '~178 km/h',
  fc: '9.0L', fh: '6.5L', fx: '12.0L', ft: '91 RON',
  wt: '1,140 kg', se: '4', ca: '300 L'
}
const e1gGST = {
  en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
  hp: '145 kW (195 hp)', tq: '275 Nm',
  tx: '5-speed manual', dr: 'FWD',
  z1: '~7.0 sec', qm: '~15.3 sec', ts: '~225 km/h',
  fc: '11.0L', fh: '8.0L', fx: '14.5L', ft: '95 RON',
  wt: '1,230 kg', se: '4', ca: '300 L'
}
const e1gGSX = {
  en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
  hp: '145 kW (195 hp)', tq: '275 Nm',
  tx: '5-speed manual', dr: 'AWD',
  z1: '~6.8 sec', qm: '~15.0 sec', ts: '~230 km/h',
  fc: '12.0L', fh: '8.5L', fx: '15.5L', ft: '95 RON',
  wt: '1,380 kg', se: '4', ca: '300 L'
}
for (let y = 1989; y <= 1994; y++) {
  s20.specs[`Mitsubishi|Eclipse|${y}|GS`] = { ...e1gGS, pr: '~$' + (18990 + (y - 1989) * 600).toLocaleString() }
  s20.specs[`Mitsubishi|Eclipse|${y}|GS Turbo`] = { ...e1gGST, pr: '~$' + (24990 + (y - 1989) * 500).toLocaleString() }
  s20.specs[`Mitsubishi|Eclipse|${y}|GSX`] = { ...e1gGSX, pr: '~$' + (31990 + (y - 1989) * 500).toLocaleString() }
}

// ── Fix 3: Eclipse 2G RS/GS — wrong engine 4G64 (that is a 2.4L Galant unit)
// 2G Eclipse non-turbo used the Chrysler 420A 2.0L SOHC in US spec
// GS-T: 4G63T corrected to 157 kW (210 hp US spec)
const e2gRS = {
  en: '420A 2.0L SOHC 16V', di: '2.0L', cy: '4',
  hp: '100 kW (134 hp)', tq: '186 Nm',
  tx: '5-speed manual', dr: 'FWD',
  z1: '~10.5 sec', qm: '~17.5 sec', ts: '~185 km/h',
  fc: '9.5L', fh: '7.0L', fx: '12.5L', ft: '91 RON',
  wt: '1,210 kg', se: '4', ca: '290 L'
}
const e2gGS = { ...e2gRS, wt: '1,230 kg' }
const e2gGST = {
  en: '4G63T 2.0L DOHC 16V Turbo', di: '2.0L', cy: '4',
  hp: '157 kW (210 hp)', tq: '289 Nm',
  tx: '5-speed manual', dr: 'FWD',
  z1: '~6.3 sec', qm: '~14.5 sec', ts: '~238 km/h',
  fc: '11.5L', fh: '8.5L', fx: '15.0L', ft: '98 RON',
  wt: '1,290 kg', se: '4', ca: '290 L'
}
const e2gGSX = { ...e2gGST, dr: 'AWD', wt: '1,430 kg', z1: '~6.0 sec', qm: '~14.2 sec', ts: '~242 km/h' }
for (let y = 1994; y <= 1999; y++) {
  s20.specs[`Mitsubishi|Eclipse|${y}|RS`] = { ...e2gRS, pr: '~$' + (19990 + (y - 1994) * 500).toLocaleString() }
  s20.specs[`Mitsubishi|Eclipse|${y}|GS`] = { ...e2gGS, pr: '~$' + (23990 + (y - 1994) * 500).toLocaleString() }
  s20.specs[`Mitsubishi|Eclipse|${y}|GS-T`] = { ...e2gGST, pr: '~$' + (29990 + (y - 1994) * 500).toLocaleString() }
  s20.specs[`Mitsubishi|Eclipse|${y}|GSX`] = { ...e2gGSX, pr: '~$' + (36990 + (y - 1994) * 500).toLocaleString() }
}

// ── Fix 4: Mirage LA engine code 3A90→3A91 (3A90 is 1.0L; 3A91 is 1.2L) ──
for (let y = 2012; y <= 2024; y++) {
  s20.specs[`Mitsubishi|Mirage|${y}|ES`] = {
    en: '3A91 1.2L DOHC 12V MIVEC', di: '1.2L', cy: '3',
    hp: '57 kW (76 hp)', tq: '100 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~13.5 sec', qm: '~20.0 sec', ts: '~157 km/h',
    fc: '5.2L', fh: '4.3L', fx: '6.8L', ft: '91 RON',
    wt: '895 kg', se: '5', ca: '235 L',
    pr: '~$' + (14990 + (y - 2012) * 300).toLocaleString()
  }
  s20.specs[`Mitsubishi|Mirage|${y}|LS`] = {
    en: '3A91 1.2L DOHC 12V MIVEC', di: '1.2L', cy: '3',
    hp: '57 kW (76 hp)', tq: '100 Nm',
    tx: 'CVT', dr: 'FWD',
    z1: '~13.5 sec', qm: '~20.0 sec', ts: '~157 km/h',
    fc: '5.2L', fh: '4.3L', fx: '6.8L', ft: '91 RON',
    wt: '910 kg', se: '5', ca: '235 L',
    pr: '~$' + (17990 + (y - 2012) * 300).toLocaleString()
  }
}

// ── Fix 5: ASX MK2 — HR13DDT (Renault-sourced 1.3T), not 3A91 ─────────────
for (let y = 2022; y <= 2024; y++) {
  s20.specs[`Mitsubishi|ASX|${y}|MK2 ES`] = {
    en: 'HR13DDT 1.3L DOHC Turbo', di: '1.3L', cy: '3',
    hp: '96 kW (129 hp)', tq: '205 Nm',
    tx: '6-speed EDC', dr: 'FWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~188 km/h',
    fc: '6.3L', fh: '5.0L', fx: '8.5L', ft: '95 RON',
    wt: '1,269 kg', se: '5', ca: '358 L',
    pr: '~$' + (30990 + (y - 2022) * 600).toLocaleString()
  }
  s20.specs[`Mitsubishi|ASX|${y}|MK2 LS`] = {
    en: 'HR13DDT 1.3L DOHC Turbo', di: '1.3L', cy: '3',
    hp: '96 kW (129 hp)', tq: '205 Nm',
    tx: '6-speed EDC', dr: 'FWD',
    z1: '~10.5 sec', qm: '~18.0 sec', ts: '~188 km/h',
    fc: '6.3L', fh: '5.0L', fx: '8.5L', ft: '95 RON',
    wt: '1,289 kg', se: '5', ca: '358 L',
    pr: '~$' + (34990 + (y - 2022) * 700).toLocaleString()
  }
}

// ── Fix 6: i-MiEV pricing — AU launch was ~$48,800 in 2010, declining ──────
for (let y = 2009; y <= 2019; y++) {
  const base = Math.max(Math.round(48800 - (y - 2010) * 1200), 22000)
  s20.specs[`Mitsubishi|i-MiEV|${y}|M`] = {
    en: 'EM57 Electric motor', di: 'Electric', cy: '—',
    hp: '49 kW (66 hp)', tq: '180 Nm',
    tx: 'Single-speed', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~130 km/h',
    fc: '0L', fh: '—', fx: '—', ft: 'Electric (16 kWh)',
    wt: '1,100 kg', se: '4', ca: '227 L',
    pr: '~$' + base.toLocaleString()
  }
  s20.specs[`Mitsubishi|i-MiEV|${y}|MiEV`] = {
    en: 'EM57 Electric motor', di: 'Electric', cy: '—',
    hp: '49 kW (66 hp)', tq: '180 Nm',
    tx: 'Single-speed', dr: 'RWD',
    z1: '~13.0 sec', qm: '~19.5 sec', ts: '~130 km/h',
    fc: '0L', fh: '—', fx: '—', ft: 'Electric (16 kWh)',
    wt: '1,110 kg', se: '4', ca: '227 L',
    pr: '~$' + Math.max(base + 3500, 25000).toLocaleString()
  }
}

fs.writeFileSync('src/data/supplement20.json', JSON.stringify(s20, null, 2))
console.log('supplement20.json:', Object.keys(s20.specs).length, 'keys')

// Verify fixes
const toCheck = [
  'Mitsubishi|Outlander|2003|LS',
  'Mitsubishi|Eclipse|1991|GS',
  'Mitsubishi|Eclipse|1991|GS Turbo',
  'Mitsubishi|Eclipse|1996|RS',
  'Mitsubishi|Eclipse|1996|GS-T',
  'Mitsubishi|Mirage|2015|ES',
  'Mitsubishi|ASX|2023|MK2 ES',
  'Mitsubishi|i-MiEV|2010|M',
]
for (const k of toCheck) {
  const v = s20.specs[k]
  if (v) console.log(' OK:', k.split('|').slice(1).join('|'), '->', v.en, v.hp || '')
  else console.log(' MISSING:', k)
}
