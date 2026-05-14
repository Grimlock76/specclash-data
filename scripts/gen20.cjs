#!/usr/bin/env node
// gen20.cjs — Spec corrections: Yaris Cross engine, Supra displacement/power,
//             GR Yaris torque, Camry 1MZ-FE power, Celica 2S-E displacement
const fs = require('fs')
const specs = {}

function readSup(n) {
  return JSON.parse(fs.readFileSync(`src/data/supplement${n}.json`, 'utf8')).specs
}

const s10 = readSup(10)
const s11 = readSup(11)
const s13 = readSup(13)
const s15 = readSup(15)
const s17 = readSup(17)

// ── 1. Yaris Cross: M20A-FXS → M15A-FXE (correct 1.5L hybrid engine code) ──
Object.keys(s17)
  .filter(k => k.startsWith('Toyota|Yaris Cross|'))
  .forEach(k => {
    specs[k] = { ...s17[k], en: s17[k].en.replace('M20A-FXS', 'M15A-FXE') }
  })

// ── 2. Supra 1983-85: 5M-GE 3.0L → 5M-GE 2.8L (5M-GE is 2759cc = 2.8L) ──
;['1983', '1984', '1985'].forEach(y => {
  const k = `Toyota|Supra|${y}|GL`
  specs[k] = { ...s10[k], en: '5M-GE 2.8L DOHC inline-6', di: '2.8L' }
})

// ── 3. Supra 2021-23 GTS: 250 kW → 285 kW (MY2021 B58 power upgrade) ──
;['2021', '2022', '2023'].forEach(y => {
  const k = `Toyota|Supra|${y}|GTS`
  specs[k] = { ...s10[k], hp: '285 kW (382 hp)', z1: '3.9 sec' }
})

// ── 4. GR Yaris torque: 370 Nm → 360 Nm (official AU spec; 400 Nm is 2024+) ──
;['2020', '2021', '2022', '2023'].forEach(y => {
  const k = `Toyota|Yaris|${y}|GR`
  specs[k] = { ...s15[k], tq: '360 Nm' }
})

// ── 5. Camry 1997-2001 Grande: 152 kW → 147 kW (XV20 1MZ-FE, matches Vienta) ──
;['1997', '1998', '1999', '2000', '2001'].forEach(y => {
  const k = `Toyota|Camry|${y}|Grande`
  specs[k] = { ...s11[k], hp: '147 kW (197 hp)' }
})

// ── 6. Camry 2002-2006 Grande: 152 kW → 155 kW (XV30 revised 1MZ-FE) ──
;['2002', '2003', '2004', '2005', '2006'].forEach(y => {
  const k = `Toyota|Camry|${y}|Grande`
  specs[k] = { ...s11[k], hp: '155 kW (208 hp)' }
})

// ── 7. Celica 1981-84: 2S-E 2.0L → 2S-E 1.8L (2S-E is 1832cc, not 2.0L) ──
Object.keys(s13)
  .filter(k => k.startsWith('Toyota|Celica|') &&
    ['1981', '1982', '1983', '1984'].some(y => k.includes(`|${y}|`)))
  .forEach(k => {
    specs[k] = { ...s13[k], en: '2S-E 1.8L SOHC EFI', di: '1.8L' }
  })

// ─────────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/data/supplement20.json', JSON.stringify({ specs }, null, 2))
console.log('supplement20.json:', Object.keys(specs).length, 'entries')
Object.entries(specs).forEach(([k, v]) =>
  console.log(' ', k.padEnd(40), v.en || '', v.hp || '', v.tq || '')
)
