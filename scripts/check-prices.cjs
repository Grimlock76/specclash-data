// Price audit script — checks estimated current prices across all makes
'use strict'
const fs = require('fs')
const path = require('path')

const FX = { USD: 1.402, GBP: 1.863, EUR: 1.628, RUB: 0.0198, JPY: 0.0095, INR: 0.0145 }
const COLLECTIBLE_FACTOR = {
  HSV:           1.6,
  Ferrari:       1.45,
  Lamborghini:   1.5,
  Bugatti:       2.2,
  Pagani:        2.2,
  Koenigsegg:    2.2,
  McLaren:       1.15,
  'Aston Martin':1.15,
  'Rolls-Royce': 1.3,
  Bentley:       1.2,
  Porsche:       1.25,
  Lotus:         1.15,
  Morgan:        1.2,
  Wiesmann:      1.3,
  Caterham:      1.2,
  TVR:           1.3,
}

function parsePriceAUD(prStr) {
  if (!prStr || prStr === '—' || prStr === '-') return null
  const s = String(prStr)
  const inrLakh = s.match(/₹\s*([\d.]+)\s*L/i)
  if (inrLakh) return parseFloat(inrLakh[1]) * 100000 * FX.INR
  let rate = 1
  if (/£/.test(s)) rate = FX.GBP
  else if (/€/.test(s)) rate = FX.EUR
  else if (/₽/.test(s)) rate = FX.RUB
  else if (/₹/.test(s)) rate = FX.INR
  else if (/[¥￥]/.test(s)) rate = FX.JPY
  else if (/USD/i.test(s)) rate = FX.USD
  const num = parseFloat(s.replace(/[^0-9.]/g, ''))
  if (!num) return null
  return num * rate
}

function estimateCurrentPrice(prStr, year, make = '', model = '', trim = '') {
  if (!prStr || prStr === '—') return null
  const base = parsePriceAUD(prStr)
  if (!base || base < 1000) return null
  const age = 2026 - parseInt(year)
  if (age < 1 || age > 35) return null
  let factor
  if (age <= 1) factor = 0.85
  else if (age <= 2) factor = 0.77
  else if (age <= 3) factor = 0.70
  else if (age <= 5) factor = 0.63
  else if (age <= 8) factor = 0.57
  else if (age <= 12) factor = 0.55
  else if (age <= 14) factor = 0.45
  else if (age <= 20) factor = 0.33
  else factor = 0.21
  let collectible = COLLECTIBLE_FACTOR[make] || 1.0
  if (make === 'Holden' && /\bss\b/i.test(trim)) {
    const yr2 = parseInt(year)
    const isWagon = /sportwagon/i.test(trim)
    if (model === 'Commodore Ute') collectible = 2.1
    else if (yr2 >= 2016 && !isWagon) collectible = 1.65
    else if (yr2 === 2014) collectible = 1.25
    else collectible = 1.5
  }
  if (make === 'BMW' && /\bm[2345]|m8\b/i.test(model + ' ' + trim)) collectible = 1.45
  if (make === 'Porsche' && /\bgt[34]\b|gt3 rs/i.test(model + ' ' + trim)) collectible = 1.8
  if (make === 'McLaren' && /720s|senna|\bp1\b/i.test(model + ' ' + trim)) collectible = 1.5
  const mid = base * factor * collectible
  const round = v => v < 20000 ? Math.round(v / 500) * 500 : Math.round(v / 1000) * 1000
  const lo = round(mid * 0.84)
  const hi = round(mid * 1.30)
  if (lo < 500) return null
  const fmt = v => '$' + v.toLocaleString()
  return `~${fmt(lo)}–${fmt(hi)}`
}

// Load all supplement files
const dataDir = path.join(__dirname, '../src/data')
const files = fs.readdirSync(dataDir).filter(f => f.match(/^(supplement\d+|holden|ford)\.json$/))

let allSpecs = {}
for (const f of files) {
  const raw = JSON.parse(fs.readFileSync(path.join(dataDir, f)))
  const specs = raw.specs || raw
  Object.assign(allSpecs, specs)
}

// For new-format entries (have 'price' not 'pr'), extract price
function getPrice(spec) {
  return spec.pr || spec.price || null
}

// Analyse by make
const makeStats = {}
const issues = []

for (const [key, spec] of Object.entries(allSpecs)) {
  const parts = key.split('|')
  const make = parts.length === 3 ? 'Holden' : parts[0]
  const model = parts.length === 3 ? parts[0] : parts[1]
  const year = parts.length === 3 ? parts[1] : parts[2]
  const trim = parts.length === 3 ? parts[2] : parts[3]

  const prRaw = getPrice(spec)
  if (!makeStats[make]) makeStats[make] = { total: 0, hasPr: 0, hasEstimate: 0, noPrice: 0, tooOld: 0 }
  makeStats[make].total++

  if (!prRaw || prRaw === '—') {
    makeStats[make].noPrice++
    continue
  }
  makeStats[make].hasPr++

  const age = 2026 - parseInt(year)
  if (age > 35 || age < 1) { makeStats[make].tooOld++; continue }  // outside estimable range by design

  const est = estimateCurrentPrice(prRaw, year, make, model, trim)
  if (est) {
    makeStats[make].hasEstimate++
  } else {
    // Has a price string but estimate returned null — likely bad parse
    issues.push({ key, prRaw, make, year })
  }
}

console.log('\n=== PRICE COVERAGE BY MAKE ===\n')
const makes = Object.keys(makeStats).sort()
for (const make of makes) {
  const s = makeStats[make]
  const covPct = s.total > 0 ? Math.round((s.hasPr / s.total) * 100) : 0
  const estPct = s.hasPr > 0 ? Math.round((s.hasEstimate / s.hasPr) * 100) : 0
  const bar = s.noPrice === s.total ? 'NO PRICES' : `${covPct}% have price | ${estPct}% get estimate`
  console.log(`${make.padEnd(20)} ${String(s.total).padStart(4)} entries  ${bar}${s.tooOld ? '  (' + s.tooOld + ' too old >35yr)' : ''}`)
}

if (issues.length > 0) {
  console.log('\n=== PARSE FAILURES (have price string but estimate returned null) ===\n')
  issues.slice(0, 30).forEach(i => console.log(`  ${i.key}  raw="${i.prRaw}"`))
  if (issues.length > 30) console.log(`  ... and ${issues.length - 30} more`)
}

// Spot-check some specific cars
console.log('\n=== SPOT CHECKS ===\n')
const checks = [
  // Holden SS
  ['Holden','Commodore','2017','SS V Redline',     '~$55,990',  '$45k-60k'],
  ['Holden','Commodore','2013','SS V',              '~$49,990',  '$22k-35k'],
  ['Holden','Commodore Ute','2016','SS V',          '~$55,290',  '$60k-80k'],
  // HSV
  ['HSV','GTS','2016','Gen-F2 GTS',                '~$87,990',  '$60k-90k'],
  // Mainstream
  ['Toyota','Supra','2023','GTS',                   '~$77,900',  '$50k-70k'],
  ['Toyota','86','2019','GTS',                      '~$33,990',  '$20k-30k'],
  ['BMW','3 Series','2020','330i',                  '~$79,900',  '$40k-55k'],
  ['BMW','M3','2022','Competition',                  '~$139,900', '$95k-120k'],
  // Porsche
  ['Porsche','911','2020','Carrera S',              '~$287,200', '$170k-220k'],
  ['Porsche','911','2022','GT3',                    '~$397,000', '$350k-500k'],
  // Exotics
  ['Ferrari','488','2019','488 Pista',              '~$750,000', '$600k-850k'],
  ['Ferrari','F8','2021','Tributo',                 '~$530,000', '$450k-600k'],
  ['Lamborghini','Huracan','2022','Evo',            '~$440,000', '$380k-500k'],
  ['McLaren','720S','2019','Performance',           '~$480,000', '$350k-480k'],
  // Ultra-rare (appreciate)
  ['Bugatti','Chiron','2022','Super Sport',         '~$3,500,000','$4M-6M'],
  ['Pagani','Huayra','2021','Roadster BC',          '~$3,000,000','$3M-5M'],
  // Currency conversions
  ['Chevrolet','Corvette','2022','Stingray',        'USD 89990',  '$75k-100k'],
  ['Jaguar','F-Type','2021','R',                    '£102,000',  '$100k-150k'],
  ['BMW','M5','2021','Competition',                  '€126,200',  '$110k-160k'],
  ['Rolls-Royce','Ghost','2022','Ghost',            '£280,000',  '$400k-550k'],
  ['Bentley','Continental GT','2022','Speed',       '£220,000',  '$300k-420k'],
  // Edge cases
  ['Holden','Commodore','1991','VP SS 5.0',        '~$28,990',  '$10k-20k'],  // age=35
  ['Holden','Commodore','1990','VP SS',            '~$25,000',  'NO ESTIMATE'],// age=36
]
checks.forEach(([make,model,year,trim,pr,expected]) => {
  const est = estimateCurrentPrice(pr, year, make, model, trim)
  const result = est || 'NO ESTIMATE'
  console.log(`${make} ${model} ${year} ${trim}`)
  console.log(`  New: ${pr}`)
  console.log(`  Est: ${result}   (expected ~${expected})`)
})
