import makesData from './makes.json'
import makeSupps from './makeSupps.json'
import holden from './holden.json'
import ford from './ford.json'
import s1 from './supplement1.json'
import s2 from './supplement2.json'
import s3 from './supplement3.json'
import s4 from './supplement4.json'
import s5 from './supplement5.json'
import s6 from './supplement6.json'
import s7 from './supplement7.json'
import s8 from './supplement8.json'
import s9 from './supplement9.json'

export const MAKES = makesData

// Core specs always in memory at startup (Holden, Ford, HSV, FPV base data ~858 KB)
const cache = Object.assign({},
  s1.specs, s2.specs, s3.specs, s4.specs, s5.specs,
  s6.specs, s7.specs, s8.specs,
  holden.specs, ford.specs,
  s9.specs
)

// Lazy loaders for supplement10-106 (Vite code-splits these into separate chunks)
const SUPP_LOADERS = import.meta.glob('./supplement*.json')
const loadedNums = new Set()

// supplements needed per make (supplements 1-9 / holden / ford are in the core above)
const MAKE_SUPPS = makeSupps

async function ensureSupp(n) {
  if (loadedNums.has(n)) return
  loadedNums.add(n)
  const loader = SUPP_LOADERS[`./supplement${n}.json`]
  if (!loader) return
  const mod = await loader()
  Object.assign(cache, mod.default.specs)
}

// Exported so Slot can fire-and-forget preloads on make selection
export function preloadMake(make) {
  const nums = MAKE_SUPPS[make]
  if (nums) nums.forEach(n => ensureSupp(n))
}

async function primeCache(make) {
  const nums = MAKE_SUPPS[make]
  if (!nums) return
  await Promise.all(nums.map(ensureSupp))
}

// Models in new-format supplements that are RWD but don't advertise it in the engine string
const KNOWN_RWD = {
  BMW: ['2 series', '3 series', '4 series', '5 series', '7 series', 'z4', 'm2', 'm4'],
  Kia: ['stinger'],
  Nissan: ['silvia', '180sx', '200sx', '240z', '280zx'],
  Lexus: ['is', 'gs', 'ls', 'lc', 'rc'],
  Honda: ['nsx', 's2000'],
  Porsche: ['911', '718', 'boxster'],
}

// Convert new-format spec (engine/power/weight numbers) → old-format (en/hp/wt strings)
function normalizeSpec(spec, make = '', model = '', trim = '') {
  if (!spec || spec.en !== undefined) return spec
  const isEV = spec.fuelType === 'electric'
  const disp = spec.displacement ? (spec.displacement / 1000).toFixed(1) + 'L' : '—'
  const eng = (spec.engine || '').toUpperCase()
  const trimUp = trim.toUpperCase()
  const modelLow = model.toLowerCase()
  let dr = 'FWD'
  if (spec.drivetrain) {
    dr = spec.drivetrain
  } else if (/AWD|4WD|4MOTION|XDRIVE|QUATTRO|SYM-AWD|S-AWC|E-4ORCE|ATTESA/i.test(eng) ||
      /XDRIVE|AWD|4WD|4MOTION|QUATTRO|CARRERA 4|4 ELECTRIC|4S ELECTRIC/i.test(trimUp)) {
    dr = 'AWD'
  } else if (isEV || /RWD|REAR/i.test(eng)) {
    dr = 'RWD'
  } else {
    const rlist = KNOWN_RWD[make] || []
    if (rlist.some(m => modelLow === m)) dr = 'RWD'
  }
  const fmtL = v => (v === null || v === undefined) ? null : v + 'L'
  return {
    en: spec.engine || '—',
    di: isEV ? (spec.battery || '—') : disp,
    cy: isEV ? 'Electric' : (spec.cylinders ? String(spec.cylinders) : '—'),
    aspiration: isEV ? 'Electric' : (spec.aspiration || '—'),
    hp: spec.power ? spec.power + ' kW / ' + Math.round(spec.power * 1.34102) + ' hp' : '—',
    tq: spec.torque ? spec.torque + ' Nm' : '—',
    tx: spec.transmission || '—',
    dr,
    z1: spec.acceleration ? `~${spec.acceleration} sec` : '—',
    qm: spec.quarterMile || '—',
    ts: spec.topSpeed ? spec.topSpeed + ' km/h' : '—',
    fc: isEV ? (spec.range ? spec.range + ' km (WLTP)' : '—') : fmtL(spec.fc),
    fh: fmtL(spec.fh),
    fx: fmtL(spec.fx),
    ft: spec.fuelType ? spec.fuelType.charAt(0).toUpperCase() + spec.fuelType.slice(1) : '—',
    wt: spec.weight ? spec.weight + ' kg' : '—',
    se: spec.seats ? String(spec.seats) : '—',
    ca: spec.cargo ? spec.cargo + ' L' : '—',
    pr: spec.price || '—',
  }
}

// AU collectible performance cars hold value well above standard depreciation curves
const COLLECTIBLE_FACTOR = {
  HSV:           1.6,   // AU muscle, strong local demand
  Ferrari:       1.45,  // minimal depreciation, many models appreciate
  Lamborghini:   1.5,   // Huracan/Aventador hold extremely well
  Bugatti:       2.2,   // pure investment, always appreciates
  Pagani:        2.2,   // hand-built ultra-rarity, always appreciates
  Koenigsegg:    2.2,   // same
  McLaren:       1.15,  // F1/Senna appreciate; 720S/GT4 modest depreciation
  'Aston Martin':1.15,  // DB11/Vantage moderate; classic DB5 etc off scale
  'Rolls-Royce': 1.3,   // retains strongly esp. Phantom/Cullinan
  Bentley:       1.2,   // Continental/Mulsanne hold well
  Porsche:       1.25,  // 911 barely moves; 718/Macan some depreciation
  Lotus:         1.15,  // Exige/Evija hold reasonably
  Morgan:        1.2,   // hand-built, limited supply
  Wiesmann:      1.3,   // ultra-rare, appreciating
  Caterham:      1.2,   // track classics hold value
  TVR:           1.3,   // cult following, limited supply
}

// Current AUD conversion rates (May 2026)
const FX = { USD: 1.402, GBP: 1.863, EUR: 1.628, RUB: 0.0198, JPY: 0.0095, INR: 0.0145 }

function parsePriceAUD(prStr) {
  if (!prStr || prStr === '—' || prStr === '-' || prStr === 'N/A') return null
  const s = String(prStr)
  // Indian rupee lakh notation: ₹3.5L
  const inrLakh = s.match(/₹\s*([\d.]+)\s*L/i)
  if (inrLakh) return parseFloat(inrLakh[1]) * 100000 * FX.INR
  let rate = 1
  if (/£/.test(s)) rate = FX.GBP
  else if (/€/.test(s)) rate = FX.EUR
  else if (/₽/.test(s)) rate = FX.RUB
  else if (/₹/.test(s)) rate = FX.INR
  else if (/¥|Â¥/.test(s)) rate = FX.JPY
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
    if (model === 'Commodore Ute') {
      collectible = 2.1                     // VE/VF SS utes — strong collector demand
    } else if (yr2 >= 2016 && !isWagon) {
      collectible = 1.65                    // final VF II sedans — last-of-line premium
    } else if (yr2 === 2014) {
      collectible = 1.25                    // early VF — modest premium
    } else {
      collectible = 1.5                     // VE era, 2013 VF, 2015+ wagons/sedans
    }
  }
  // BMW M cars hold value far better than standard BMW (M2/M3/M4/M5/M8)
  if (make === 'BMW' && /\bm[2345]|m8\b/i.test(model + ' ' + trim)) {
    collectible = 1.45
  }
  // Porsche GT variants barely depreciate — GT3, GT3 RS, GT4, Cayman GT4
  if (make === 'Porsche' && /\bgt[34]\b|gt3 rs/i.test(model + ' ' + trim)) {
    collectible = 1.8
  }
  // McLaren 720S, Senna, P1 hold very strongly
  if (make === 'McLaren' && /720s|senna|\bp1\b/i.test(model + ' ' + trim)) {
    collectible = 1.5
  }
  const mid = base * factor * collectible
  const round = v => v < 20000 ? Math.round(v / 500) * 500 : Math.round(v / 1000) * 1000
  const lo = round(mid * 0.84)
  const hi = round(mid * 1.30)
  if (lo < 500) return null
  const fmt = v => '$' + v.toLocaleString()
  return `~${fmt(lo)}–${fmt(hi)}`
}

export async function lookup(make, model, year, trim) {
  await primeCache(make)
  const yr = parseInt(year)
  const withPC = spec => {
    if (!spec || yr >= 2024) return spec
    if (spec.pc) return spec
    const pc = estimateCurrentPrice(spec.pr, year, make, model, trim)
    return pc ? { ...spec, pc } : spec
  }
  const exact = `${make}|${model}|${year}|${trim}`
  if (cache[exact]) return withPC(normalizeSpec(cache[exact], make, model, trim))
  const noMake = `${model}|${year}|${trim}`
  if (cache[noMake]) return withPC(normalizeSpec(cache[noMake], make, model, trim))
  for (let delta = 1; delta <= 2; delta++) {
    for (const sign of [-1, 1]) {
      const tryYear = (yr + sign * delta).toString()
      const k1 = `${make}|${model}|${tryYear}|${trim}`
      if (cache[k1]) return withPC(normalizeSpec(cache[k1], make, model, trim))
      const k2 = `${model}|${tryYear}|${trim}`
      if (cache[k2]) return withPC(normalizeSpec(cache[k2], make, model, trim))
    }
  }
  return null
}
