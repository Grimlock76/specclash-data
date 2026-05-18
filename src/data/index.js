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
import supplement63 from './supplement63.json'
import supplement64 from './supplement64.json'
import supplement65 from './supplement65.json'
import supplement66 from './supplement66.json'
import supplement67 from './supplement67.json'
import supplement68 from './supplement68.json'
import supplement69 from './supplement69.json'
import supplement70 from './supplement70.json'
import supplement71 from './supplement71.json'
import supplement72 from './supplement72.json'
import supplement73 from './supplement73.json'
import supplement74 from './supplement74.json'
import supplement75 from './supplement75.json'
import supplement76 from './supplement76.json'
import supplement77 from './supplement77.json'
import supplement78 from './supplement78.json'
import supplement79 from './supplement79.json'
import supplement80 from './supplement80.json'
import supplement81 from './supplement81.json'
import supplement82 from './supplement82.json'
import supplement83 from './supplement83.json'

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
// supplement63: gap-fills — Kia EV9, Hyundai Ioniq 5 N, Honda CR-V e:HEV, VW ID.7, Mercedes EQE/EQS SUV
// supplement64: Jeep (Wrangler, Grand Cherokee, Cherokee, Compass, Renegade, Gladiator)
// supplement65: RAM (1500 Classic, 1500, 1500 TRX, 2500)
// supplement66: Alfa Romeo (Giulia, Stelvio, Tonale)
// supplement67: Jaguar (F-Pace, F-Type, E-Pace, I-Pace, XE, XF)
// supplement68: CUPRA (Formentor, Born) + Polestar (Polestar 2, 3, 4)
// supplement69: Skoda (Octavia, Superb, Karoq, Kodiaq, Enyaq, Fabia)
// supplement70: LDV (T60, MIFA 9) + Chery (Omoda 5, Tiggo 7/8 Pro) + Renault (Clio, Megane E-Tech, Koleos, Arkana)
// supplement71: Global non-AU market cars — Toyota Supra A80 JDM (1999-2002), Nissan 350Z (2003-2009),
//               Dodge Challenger/Charger/Viper, Chevrolet Corvette (C5-C8)/Camaro (Gen5-Gen6) + Lancia/Datsun base specs
// supplement72: Lancia — full model coverage (Delta, Stratos, Beta, Aprilia, Ardea, Aurelia, Appia, Flaminia, Flavia,
//               Fulvia, Beta Montecarlo, Gamma, Rally 037, Prisma, Thema, Y10, Dedra, Kappa, Zeta, Ypsilon, Lybra,
//               Thesis, Phedra, Musa, Delta II, Flavia II, Voyager, New Ypsilon, Trevi + pre-war alphabet series)
// supplement73: Datsun — full model coverage (510, 1000, 1200, Fairladies, Z-cars, 120Y, 180B, 200B, 280ZX,
//               Skyline, Laurel, Patrol, Cedric, Cherry, Silvia, 910/410 Bluebird, 620/720 Ute, Go/Go+/Redi-GO,
//               on-DO, mi-DO, Bluebird 310, Silvia CSP311, F10, Sunny)
// supplement74: Fiat + Peugeot
// supplement75: Daihatsu + Saab
// supplement76: Ferrari + Lamborghini
// supplement77: Maserati + Pontiac
// supplement78: Chrysler (incl. Valiant AU) + Citroën
// supplement79: Chevrolet classics — Bel Air, Corvair, Chevelle, Nova, El Camino
// supplement80: Chevrolet — Monte Carlo, Caprice, Corvette C1-C4, Camaro Gen1-Gen4 + 2024
// supplement81: Chevrolet — Impala, Malibu, S-10, Blazer K5
// supplement82: Chevrolet — Silverado, Colorado, Tahoe, Suburban, Avalanche, Trailblazer, Blazer modern, Equinox, Traverse, Cruze, Sonic, Spark, Trax, Volt, Bolt EV
// supplement83: Chevrolet gap-fills — Avalanche, Camaro, Caprice, Chevelle, Colorado, Corvette, Cruze, El Camino, Equinox, Impala, Malibu, Monte Carlo, S-10, Silverado, Sonic, Spark, Suburban, Tahoe, Trailblazer, Traverse, Trax (204 entries)
export const SPECS = Object.assign({}, supplement1.specs, supplement2.specs, supplement3.specs, supplement4.specs, supplement5.specs, supplement6.specs, supplement7.specs, supplement8.specs, holden.specs, ford.specs, supplement9.specs, supplement10.specs, supplement11.specs, supplement12.specs, supplement13.specs, supplement14.specs, supplement15.specs, supplement16.specs, supplement17.specs, supplement18.specs, supplement19.specs, supplement20.specs, supplement21.specs, supplement22.specs, supplement23.specs, supplement24.specs, supplement25.specs, supplement26.specs, supplement27.specs, supplement28.specs, supplement29.specs, supplement30.specs, supplement31.specs, supplement32.specs, supplement33.specs, supplement36.specs, supplement37.specs, supplement38.specs, supplement39.specs, supplement40.specs, supplement41.specs, supplement42.specs, supplement43.specs, supplement44.specs, supplement45.specs, supplement46.specs, supplement47.specs, supplement48.specs, supplement49.specs, supplement50.specs, supplement51.specs, supplement52.specs, supplement53.specs, supplement54.specs, supplement55.specs, supplement56.specs, supplement57.specs, supplement58.specs, supplement59.specs, supplement60.specs, supplement61.specs, supplement62.specs, supplement63.specs, supplement64.specs, supplement65.specs, supplement66.specs, supplement67.specs, supplement68.specs, supplement69.specs, supplement70.specs, supplement71.specs, supplement72.specs, supplement73.specs, supplement74.specs, supplement75.specs, supplement76.specs, supplement77.specs, supplement78.specs, supplement79.specs, supplement80.specs, supplement81.specs, supplement82.specs, supplement83.specs)

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

function estimateCurrentPrice(prStr, year) {
  if (!prStr || prStr === '—') return null
  const base = parseFloat(prStr.replace(/[^0-9]/g, ''))
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
  else if (age <= 20) factor = 0.33
  else factor = 0.21
  const mid = base * factor
  const round = v => v < 20000 ? Math.round(v / 500) * 500 : Math.round(v / 1000) * 1000
  const lo = round(mid * 0.84)
  const hi = round(mid * 1.30)
  if (lo < 500) return null
  const fmt = v => '$' + v.toLocaleString()
  return `~${fmt(lo)}–${fmt(hi)}`
}

export function lookup(make, model, year, trim) {
  const yr = parseInt(year)
  const withPC = spec => {
    if (!spec || yr >= 2024) return spec
    const pc = estimateCurrentPrice(spec.pr, year)
    return pc ? { ...spec, pc } : spec
  }
  const exact = `${make}|${model}|${year}|${trim}`
  if (SPECS[exact]) return withPC(normalizeSpec(SPECS[exact], make, model, trim))
  const noMake = `${model}|${year}|${trim}`
  if (SPECS[noMake]) return withPC(normalizeSpec(SPECS[noMake], make, model, trim))
  for (let delta = 1; delta <= 2; delta++) {
    for (const sign of [-1, 1]) {
      const tryYear = (yr + sign * delta).toString()
      const k1 = `${make}|${model}|${tryYear}|${trim}`
      if (SPECS[k1]) return withPC(normalizeSpec(SPECS[k1], make, model, trim))
      const k2 = `${model}|${tryYear}|${trim}`
      if (SPECS[k2]) return withPC(normalizeSpec(SPECS[k2], make, model, trim))
    }
  }
  return null
}
