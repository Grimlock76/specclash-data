import makesData from './makes.json'
import holden from './holden.json'
import ford from './ford.json'
import supplement1 from './supplement1.json'
import supplement2 from './supplement2.json'
import supplement3 from './supplement3.json'
import supplement4 from './supplement4.json'
import supplement5 from './supplement5.json'
import supplement6 from './supplement6.json'
import supplement7 from './supplement7.json'
import supplement8 from './supplement8.json'
import supplement9 from './supplement9.json'
import supplement10 from './supplement10.json'
import supplement11 from './supplement11.json'
import supplement12 from './supplement12.json'
import supplement13 from './supplement13.json'
import supplement14 from './supplement14.json'
import supplement15 from './supplement15.json'
import supplement16 from './supplement16.json'
import supplement17 from './supplement17.json'
import supplement18 from './supplement18.json'
import supplement19 from './supplement19.json'
import supplement20 from './supplement20.json'
import supplement21 from './supplement21.json'
import supplement22 from './supplement22.json'
import supplement23 from './supplement23.json'
import supplement24 from './supplement24.json'
import supplement25 from './supplement25.json'
import supplement26 from './supplement26.json'
import supplement27 from './supplement27.json'
import supplement28 from './supplement28.json'
import supplement29 from './supplement29.json'
import supplement30 from './supplement30.json'
import supplement31 from './supplement31.json'
import supplement32 from './supplement32.json'
import supplement33 from './supplement33.json'
import supplement36 from './supplement36.json'
import supplement37 from './supplement37.json'
import supplement38 from './supplement38.json'
import supplement39 from './supplement39.json'
import supplement40 from './supplement40.json'
import supplement41 from './supplement41.json'
import supplement42 from './supplement42.json'
import supplement43 from './supplement43.json'
import supplement44 from './supplement44.json'
import supplement45 from './supplement45.json'
import supplement46 from './supplement46.json'
import supplement47 from './supplement47.json'
import supplement48 from './supplement48.json'
import supplement49 from './supplement49.json'
import supplement50 from './supplement50.json'
import supplement51 from './supplement51.json'
import supplement52 from './supplement52.json'
import supplement53 from './supplement53.json'
import supplement54 from './supplement54.json'
import supplement55 from './supplement55.json'
import supplement56 from './supplement56.json'
import supplement57 from './supplement57.json'
import supplement58 from './supplement58.json'
import supplement59 from './supplement59.json'
import supplement60 from './supplement60.json'
import supplement61 from './supplement61.json'
import supplement62 from './supplement62.json'

export const MAKES = makesData

// supplements 1-8 fill gaps; holden/ford are authoritative; supplement9 corrects errors in source data
// supplement20 overrides confirmed spec errors across supplements 10-19
// supplements 21-24: Mazda (classic + modern) and Nissan (classic + utility/SUV)
// supplement25: Mitsubishi classics (Sigma, Galant, Lancer, Starion, 3000GT, Colt)
// supplement26: Mitsubishi AU-market (Pajero, Magna, Verada, Triton, Outlander, ASX, Eclipse Cross, Mirage, L300/Express)
// supplement27: Mitsubishi global (Eclipse, FTO, GTO, Diamante, Delica, Space Star, i-MiEV, RVR, Carisma, Challenger)
// supplement28: 2024-2026 extensions (all active makes) + Nissan 400Z
// supplement29: Toyota missing models (Prius all gens, Prius C, Prius V, BZ4X, Crown crossover, Granvia)
// supplement30: Nissan missing models (Silvia S12-S15, 200SX, 180SX, 240Z, 280ZX, Stagea, Leaf, Kicks, Ariya, Juke F16)
// supplement31: Mitsubishi missing models (Pajero Sport, Lancer Ralliart/Sportback, Colt Z30, Grandis)
// supplement32: Hyundai (Excel, Getz, Accent, i20, i30, i30 N, Elantra, Sonata, i45, i40, Veloster, Coupe, Genesis Coupe, Terracan, ix35, Tucson, Santa Fe, Kona, Ioniq, Ioniq 5, Ioniq 6, Palisade, Staria)
// supplement33: Kia (Sportage, Sorento, Rio, Cerato, Carnival, Stinger, EV6, Seltos, Niro, Picanto, Soul, Optima, Telluride)
// supplement36: Volkswagen (Golf Mk4-8, Polo, Passat, Tiguan, Touareg, Amarok, T-Roc, Multivan, Beetle, Jetta, Scirocco, Arteon, ID.4)
// supplement37: BMW (1/2/3/5/7 Series, X1/X3/X5, Z4)
// supplement38: Mercedes-Benz
// supplement39: BMW missing models (4 Series, M2, M4, X2, X4, X6, X7, i3, i4, iX, iX3)
// supplement40: Volkswagen missing models (ID.3, ID.5)
// supplement41: All hybrid/PHEV models (Toyota Camry/Corolla/RAV4/Kluger, Mazda CX-60/CX-90/MX-30 R-EV,
//               Nissan Qashqai/X-Trail e-Power, Hyundai Tucson/Santa Fe/Sonata/Kona Hybrid,
//               Kia Sportage/Sorento Hybrid/PHEV, VW Golf GTE/Passat GTE, BMW 330e/530e/X5 45e)
// supplement42: Subaru (Impreza, WRX, Liberty, Forester, Outback, XV, Levorg, BRZ, Solterra, Tribeca)
// supplement43: Honda (Civic, Accord, CR-V, HR-V, Jazz, NSX, S2000, Integra, Prelude, Odyssey, Legend, ZR-V, e:Ny1)
// supplement44: Lexus (IS, ES, GS, LS, UX, NX, RX, GX, LX, LC, RC, CT, RZ)
// supplement45: Audi (A3/S3/RS3, A4/S4/RS4, A6/S6/RS6, TT/TTS/TT RS, R8, Q3/RS Q3, Q5/SQ5, Q7/SQ7, e-tron, Q8 e-tron/SQ8)
// supplement46: Porsche (911, 718/Boxster, Cayenne, Macan, Panamera, Taycan)
// supplement47: Audi additions (A1, A5/S5/RS5, A7/S7/RS7, A8/S8, Q2, e-tron GT/RS e-tron GT, RS Q8)
// supplement48: Mercedes-Benz additions (S-Class, B-Class, CLS, SLK/SLC, SL, G-Class, AMG GT, GLB, EQA/EQB/EQC/EQE/EQS, AMG performance)
// supplement49: gap-fills — Subaru Impreza (2014-2026 4th/5th gen), BMW 7 Series (2023-2026 G70), Mercedes-Benz E-Class (2024-2026 W214), Mercedes-Benz B-Class (2023-2024)
// supplement50: Audi completions — Q8 (petrol 2019-2026), Q4 e-tron (2022-2026), year gap-fills for A3/A4/A5/A6/A7/A8/Q3/Q5/Q7, S3 weight corrections
// supplement51: Audi additions — Q3 Sportback, Q5 Sportback, Q6 e-tron, S1, A4 allroad, A6 allroad, classics (80, 90, 100, Coupe, Quattro, Cabriolet, S2, RS2 Avant, A2, V8)
// supplement52: BMW additions — 6 Series, 8 Series, Z3, i5, i7, 2 Series Active Tourer
// supplement53: Audi S/RS standalone models — S3, RS3, S4, RS4, S5, RS5, S6, RS6, S7, RS7, S8, RS Q3, SQ5, SQ7, SQ8, RS Q8
// supplement54: Suzuki (Swift, Jimny, Vitara, Grand Vitara, Baleno, S-Cross, Ignis)
// supplement55: Land Rover (Defender, Discovery, Discovery Sport, Range Rover, Range Rover Sport, Range Rover Evoque, Range Rover Velar, Freelander)
// supplement56: Volvo (S60, S90, V40, V60, V90, XC40, XC60, XC90, C40 Recharge, EX30, EX90)
// supplement57: Tesla (Model 3, Model Y, Model S, Model X, Cybertruck)
// supplement58: Isuzu (D-MAX, MU-X)
// supplement59: MG (MG3, MG6, ZS, ZS EV, MG HS, MG4, Cyberster)
// supplement60: GWM (Haval H2, H6, H9, Jolion, GWM Ute, Tank 300, Tank 500)
// supplement61: BYD (Atto 3, Seal, Dolphin, Shark, Sealion 6, Sealion 7)
// supplement62: Genesis (G70, G80, G90, GV70, GV80)
export const SPECS = Object.assign({}, supplement1.specs, supplement2.specs, supplement3.specs, supplement4.specs, supplement5.specs, supplement6.specs, supplement7.specs, supplement8.specs, holden.specs, ford.specs, supplement9.specs, supplement10.specs, supplement11.specs, supplement12.specs, supplement13.specs, supplement14.specs, supplement15.specs, supplement16.specs, supplement17.specs, supplement18.specs, supplement19.specs, supplement20.specs, supplement21.specs, supplement22.specs, supplement23.specs, supplement24.specs, supplement25.specs, supplement26.specs, supplement27.specs, supplement28.specs, supplement29.specs, supplement30.specs, supplement31.specs, supplement32.specs, supplement33.specs, supplement36.specs, supplement37.specs, supplement38.specs, supplement39.specs, supplement40.specs, supplement41.specs, supplement42.specs, supplement43.specs, supplement44.specs, supplement45.specs, supplement46.specs, supplement47.specs, supplement48.specs, supplement49.specs, supplement50.specs, supplement51.specs, supplement52.specs, supplement53.specs, supplement54.specs, supplement55.specs, supplement56.specs, supplement57.specs, supplement58.specs, supplement59.specs, supplement60.specs, supplement61.specs, supplement62.specs)

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

export function lookup(make, model, year, trim) {
  const exact = `${make}|${model}|${year}|${trim}`
  if (SPECS[exact]) return normalizeSpec(SPECS[exact], make, model, trim)
  const noMake = `${model}|${year}|${trim}`
  if (SPECS[noMake]) return normalizeSpec(SPECS[noMake], make, model, trim)
  const yr = parseInt(year)
  for (let delta = 1; delta <= 2; delta++) {
    for (const sign of [-1, 1]) {
      const tryYear = (yr + sign * delta).toString()
      const k1 = `${make}|${model}|${tryYear}|${trim}`
      if (SPECS[k1]) return normalizeSpec(SPECS[k1], make, model, trim)
      const k2 = `${model}|${tryYear}|${trim}`
      if (SPECS[k2]) return normalizeSpec(SPECS[k2], make, model, trim)
    }
  }
  return null
}
