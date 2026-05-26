import makesData from './makes.json'
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
const MAKE_SUPPS = {
  'Ford':          [28,118,121,127,128,130,132,135,142,146,150,151,176,177,178,179,183,188],
  'FPV':           [112],
  'Toyota':        [10,11,12,13,14,15,16,17,18,19,20,28,29,41,71,117,118,119,120,121,124,125,126,128,135,145,146,148,170,176,177,181,183,185,186],
  'Mazda':         [21,22,28,41,118,120,127,131,146,176,182],
  'Nissan':        [23,24,28,30,41,71,118,125,126,152,175,176],
  'Mitsubishi':    [20,25,26,27,28,31,118,119,145,149,178,180,182],
  'Hyundai':       [32,41,63,116,119,122,123,125,127,137,178,184,187],
  'Kia':           [33,41,63,116,120,121,122,123,127,131,138,179,184,187],
  'Volkswagen':    [36,40,41,63,117,119,122,123,125,132,134,142,147,152,165,172,176,183,186],
  'BMW':           [37,39,41,49,52,117,119,121,122,123,124,125,126,131,133,135,136,146,149,154,156,157,158,164,170,176,177,178,181,182,184,186],
  'Ora':           [137],
  'Mercedes-Benz': [38,48,49,63,117,121,123,124,133,134,147,148,168,169,171,174,175,181,182,183],
  'Subaru':        [42,49,118,119,124,145,147,177,179,183],
  'Honda':         [43,63,108,118,120,122,125,175,177,180,183,188],
  'Lexus':         [44,109,120,123,125,149,156,168,170,171,174,175,177,181,184],
  'Audi':          [45,47,50,51,53,120,121,124,125,142,143,144,146,147,148,150,153,154,169,170,171,173,178,184],
  'Porsche':       [46,107,121,123,126,136,144,146,147,153,154,155,157,159,169,171,173,174,175,178,179,181,182,185],
  'Suzuki':        [54,131,139,140,177],
  'Land Rover':    [55,119,126,136,138,140,147,154,161,178,180,181],
  'INEOS':         [136],
  'Volvo':         [56,113,121,124,137,140,143,172,173,177,183],
  'Tesla':         [57,111,138,143,182,183],
  'Isuzu':         [58,111,139,143,184,188],
  'MG':            [59,104,115,132,140,178,184],
  'GWM':           [60,111,122,130,140,143,173,184],
  'BYD':           [61,115,122,129,137,173],
  'Genesis':       [62,110,121,129,138,139,140,177,178,184,188],
  'Jeep':          [64,113,122,128,129,139,140,141,143,152],
  'RAM':           [65,110,115,128,143],
  'Alfa Romeo':    [66,111,131,141],
  'Jaguar':        [67,112,138,141,143,161],
  'CUPRA':         [68,110,120,141,150,177],
  'Polestar':      [68,110,115,141,170,183],
  'Skoda':         [69,111,120,125,129,142,143,149,160,165,170,172,173],
  'Chery':         [70,114,130,133,178],
  'Omoda':         [163],
  'Jaecoo':        [163],
  'Changan':       [163],
  'Zeekr':         [114],
  'VinFast':       [114],
  'XPENG':         [167],
  'LDV':           [70,112,142],
  'Renault':       [70,110,119,132,142,143,148,154,173],
  'Chevrolet':     [71,79,80,81,82,83,139,142,143,147,178,182],
  'Dodge':         [71,113,184],
  'Lancia':        [71,72],
  'Datsun':        [71,73],
  'Fiat':          [74,134,166],
  'Peugeot':       [74,122,130,131,149,160,162,170,172,177],
  'Daihatsu':      [75],
  'Saab':          [75],
  'Ferrari':       [76,129,137,155,158],
  'Lamborghini':   [76,129,137,153,159,173,182],
  'Maserati':      [77,113,152,153,167],
  'Pontiac':       [77],
  'Chrysler':      [78],
  'Citroën':       [78,135],
  'Rolls-Royce':   [84,153],
  'Bentley':       [85,153,155,172,174],
  'Aston Martin':  [86,115,178,184],
  'McLaren':       [87,112,153,159],
  'Lotus':         [88,114,178,184],
  'Mini':          [89,116,150,154,168,170],
  'SsangYong':     [90,115],
  'Infiniti':      [90,113],
  'Triumph':       [91],
  'Austin-Healey': [92],
  'Rover':         [92],
  'Oldsmobile':    [93],
  'AMC':           [93],
  'Lincoln':       [93],
  'Cadillac':      [94,130],
  'Leapmotor':     [130],
  'Buick':         [95],
  'Mercury':       [95],
  'Plymouth':      [96],
  'De Soto':       [96],
  'Studebaker':    [96],
  'Hudson':        [97],
  'Nash':          [97],
  'Packard':       [97],
  'Vauxhall':      [98],
  'Morgan':        [98],
  'De Tomaso':     [98],
  'Alpine':        [98,114],
  'Opel':          [99],
  'SEAT':          [99],
  'Bugatti':       [100,155],
  'Pagani':        [100],
  'Koenigsegg':    [100],
  'TVR':           [101],
  'Bristol':       [101],
  'Jensen':        [101],
  'AC':            [101],
  'Alpina':        [102],
  'Dacia':         [102,114],
  'Smart':         [102,144,166],
  'Austin':        [103],
  'Hillman':       [103],
  'Morris':        [103],
  'Sunbeam':       [103],
  'Abarth':        [104,112,137,166],
  'DS':            [104,112,137],
  'Wiesmann':      [104],
  'Autobianchi':   [105],
  'Caterham':      [105],
  'DAF':           [105],
  'Lada':          [105],
  'Matra':         [105],
  'NSU':           [105],
  'Simca':         [105],
  'Riley':         [106],
  'Wolseley':      [106],
  'Singer':        [106],
  'Standard':      [106],
  'Reliant':       [106],
  'Panhard':       [106],
  'Innocenti':     [106],
  'Ginetta':       [106],
  'Marcos':        [106],
  'Facel Vega':    [106],
}

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
