'use strict'
const fs = require('fs')

// ─── PASS 2: fix stragglers + diesel/petrol turbo brands ────────────────────
// Rules applied in order — first match wins
// fn(engine, make, model) → new aspiration string, or null to skip
const RULES = [

  // ─── SUPERCHARGED FIXES ──────────────────────────────────────────────────
  // HSV/Holden "6.2L V8 SC LSA" — SC abbreviation missed first pass
  [e => /sc lsa|6\.2.*sc.*lsa|lsa.*sc|v8 sc lsa/i.test(e),                 'Eaton TVS2300 Supercharged'],
  // Jaguar 5.0 SC V8 (F-Type R, F-Pace SVR, XE Project 8)
  [e => /5\.0.*sc.*v8|5\.0 sc v8|v8 sc aj133|5\.0l.*v8.*sc/i.test(e),      'Eaton TVS Supercharged'],
  // Jaguar 3.0L V6 Supercharged (F-Type, XE, XF, F-Pace base SC)
  [e => /3\.0l v6 supercharg|3\.0.*v6.*supercharg/i.test(e),                'Eaton TVS Supercharged'],
  // Lotus 3.5L V6 SC Toyota 2GR-FE (Evora 400, Exige S3 V6)
  [e => /3\.5l.*v6.*sc|sc.*2gr-fe|2gr-fe.*sc|3\.5.*sc.*toyota/i.test(e),   'Harrop Eaton TVS1900 Supercharged'],
  // Corvette LT4 (C7 Z06/ZR1 equiv), LT5 (C7 ZR1)
  [e => /lt4.*supercharg|lt4.*6\.2|6\.2.*lt4/i.test(e),                    'Eaton TVS2650 Supercharged'],
  [e => /lt5.*supercharg|lt5.*6\.2|6\.2.*lt5|supercharg.*lt5/i.test(e),    'Eaton TVS2650 Supercharged'],
  // Statesman WN Caprice V stubs (LSA, no engine string — make/model match)
  [(e, mk, mo) => mk === 'Statesman' && /caprice v/i.test(mo),              'Eaton TVS2300 Supercharged'],
  // Dodge Challenger Supercharged missed (Hellcat rule catches, but fallback)
  [(e, mk, mo) => mk === 'Dodge' && /challenger|charger/i.test(mo) && /supercharg/i.test(e), 'IHI Twin-Screw Supercharged'],
  // RAM 1500 Supercharged (TRX — Eaton TVS2650)
  [(e, mk) => mk === 'RAM' && /supercharg/i.test(e),                        'Eaton TVS2650 Supercharged'],
  // Jaguar F-Type V6 SC fallback
  [(e, mk, mo) => mk === 'Jaguar' && /supercharg|sc v/i.test(e),            'Eaton TVS Supercharged'],
  // Land Rover Supercharged fallback (missed entries)
  [(e, mk) => mk === 'Land Rover' && /supercharg/i.test(e),                 'Eaton TVS Supercharged'],
  // Chevrolet Monte Carlo SC fallback
  [(e, mk, mo) => mk === 'Chevrolet' && mo === 'Monte Carlo' && /supercharg/i.test(e), 'Eaton M90 Supercharged'],
  // Chevrolet Corvette SC fallback
  [(e, mk, mo) => mk === 'Chevrolet' && mo === 'Corvette' && /supercharg/i.test(e), 'Eaton TVS2650 Supercharged'],
  // Chevrolet Camaro SC fallback
  [(e, mk, mo) => mk === 'Chevrolet' && mo === 'Camaro' && /supercharg/i.test(e), 'Eaton TVS2300 Supercharged'],
  // Studebaker Hawk SC fallback
  [(e, mk, mo) => mk === 'Studebaker' && mo === 'Hawk' && /supercharg/i.test(e), 'Paxton Centrifugal Supercharged'],

  // ─── TWIN-TURBO FIXES (regex used space instead of .?) ───────────────────
  // Infiniti Q50 / Q60 3.0T VR30DDTT (no VR30DDTT in engine string)
  [(e, mk) => mk === 'Infiniti' && /twin.?turbo/i.test(e),                  'BorgWarner Twin-Turbo'],
  // Genesis / Kia Twin-Turbo fix (hyphen vs space)
  [(e, mk) => (mk === 'Genesis' || mk === 'Kia') && /twin.?turbo|biturbo/i.test(e), 'BorgWarner Twin-Turbo'],
  // Volvo 3.0L I6 Twin Turbo (B6294T — XC90 V8-era, old S60/V70 T6)
  [(e, mk) => mk === 'Volvo' && /twin.?turbo/i.test(e) && !/supercharger/i.test(e), 'BorgWarner Twin-Turbo'],
  // Nissan Navara / Nissan Z Twin-Turbo fallback
  [(e, mk, mo) => mk === 'Nissan' && /twin.?turbo/i.test(e),                'BorgWarner Twin-Turbo'],
  // Volkswagen / Skoda / SEAT biturbo (TDI twin-turbo)
  [(e, mk) => ['Volkswagen','Skoda','SEAT','CUPRA','Audi'].includes(mk) && /twin.?turbo/i.test(e), 'BorgWarner Twin-Turbo'],
  // Toyota twin-turbo fallback (LandCruiser diesel)
  [(e, mk) => mk === 'Toyota' && /twin.?turbo/i.test(e),                    'Toyota Twin-Turbo'],
  // Bentley twin-turbo fallback
  [(e, mk) => mk === 'Bentley' && /twin.?turbo/i.test(e),                   'BorgWarner Twin-Turbo'],
  // Porsche 911/Panamera/Cayenne turbo fallback
  [(e, mk) => mk === 'Porsche' && /twin.?turbo|biturbo/i.test(e),           'BorgWarner Twin-Turbo'],
  // Mercedes-Benz twin-turbo fallback
  [(e, mk) => mk === 'Mercedes-Benz' && /twin.?turbo|biturbo/i.test(e),     'IHI Twin-Turbo'],
  // BMW twin-turbo fallback
  [(e, mk) => mk === 'BMW' && /twin.?turbo|biturbo/i.test(e),               'BorgWarner Twin-Turbo'],
  // Alpina (BMW-based) twin-turbo
  [(e, mk) => mk === 'Alpina' && /twin.?turbo|biturbo/i.test(e),            'BorgWarner Twin-Turbo'],

  // ─── DIESEL TURBOS ───────────────────────────────────────────────────────
  // Toyota diesel VGT (1KD-FTV, 1GD-FTV, 2GD-FTV — HiLux, Prado, HiAce, Fortuner)
  [(e, mk) => mk === 'Toyota' && /diesel|1kd|1gd|2gd|d-4d|turbo diesel/i.test(e), 'Toyota VGT Diesel Turbo'],
  // Isuzu diesel (D-Max, MU-X — 4JJ1, 4HK1)
  [(e, mk) => mk === 'Isuzu' && /diesel|4jj|4hk|turbo/i.test(e),           'Isuzu IHI VGT Diesel Turbo'],
  // Mitsubishi diesel (Triton, Pajero — 4N15, 4M41)
  [(e, mk) => mk === 'Mitsubishi' && /diesel|4n15|4m41|turbo diesel/i.test(e), 'MHI VGT Diesel Turbo'],
  // Nissan diesel (Navara, Patrol, X-Trail — YD25, ZD30, V9X)
  [(e, mk) => mk === 'Nissan' && /diesel|yd25|zd30|v9x|turbo diesel/i.test(e), 'Garrett VGT Diesel Turbo'],
  // Mazda diesel (BT-50, CX-5/8/9 — SH-VPTS, SkyActiv-D)
  [(e, mk) => mk === 'Mazda' && /diesel|skyactiv-d|sh-vpts|mzr-cd/i.test(e), 'Denso VGT Diesel Turbo'],
  // Ford diesel (Ranger, Everest, Transit — Duratorq TDCi, Lion V6 diesel)
  [(e, mk) => mk === 'Ford' && /diesel|tdci|duratorq|lion v6 d|puma diesel/i.test(e), 'BorgWarner VGT Diesel Turbo'],
  // VW diesel TDI (Amarok, Transporter, Multivan, Tiguan — BorgWarner VTG)
  [(e, mk) => ['Volkswagen','Skoda','SEAT','CUPRA','Audi','Porsche'].includes(mk) && /tdi|diesel/i.test(e), 'BorgWarner VGT Diesel Turbo'],
  // BMW diesel (3/5/7 Series, X3/5/7 — BorgWarner)
  [(e, mk) => mk === 'BMW' && /diesel|\btd\b|xd|d50ol|b47|b57|m57|n47|n57/i.test(e), 'BorgWarner VGT Diesel Turbo'],
  // Mercedes diesel (Sprinter, Vito, GLE diesel — BorgWarner)
  [(e, mk) => mk === 'Mercedes-Benz' && /diesel|cdi|bluetec/i.test(e),      'BorgWarner VGT Diesel Turbo'],
  // Land Rover diesel (Discovery, Defender, Freelander — BorgWarner/Garrett)
  [(e, mk) => mk === 'Land Rover' && /diesel|tdv6|tdv8|sd4|td4|td6/i.test(e), 'BorgWarner VGT Diesel Turbo'],
  // Jaguar diesel (F-Pace, XE, XF diesel)
  [(e, mk) => mk === 'Jaguar' && /diesel|ingenium d|td6/i.test(e),          'Garrett VGT Diesel Turbo'],
  // SsangYong diesel (Musso, Rexton, Korando — Bosch/MHI)
  [(e, mk) => mk === 'SsangYong' && /diesel|d20|g20|xdi|ddi/i.test(e),     'Bosch VGT Diesel Turbo'],
  // GWM/Haval diesel
  [(e, mk) => mk === 'GWM' && /diesel/i.test(e),                            'BorgWarner VGT Diesel Turbo'],
  // LDV diesel
  [(e, mk) => mk === 'LDV' && /diesel|vm motori/i.test(e),                  'BorgWarner VGT Diesel Turbo'],
  // Renault diesel (Koleos, Megane, Clio diesel)
  [(e, mk) => mk === 'Renault' && /diesel|dci/i.test(e),                    'BorgWarner VGT Diesel Turbo'],
  // Peugeot/Citroën diesel (HDi, BlueHDi)
  [(e, mk) => ['Peugeot','Citroën','DS'].includes(mk) && /diesel|hdi|bluedhdi/i.test(e), 'BorgWarner VGT Diesel Turbo'],
  // RAM diesel (2500, 3500 Cummins)
  [(e, mk) => mk === 'RAM' && /diesel|cummins/i.test(e),                    'Holset VGT Diesel Turbo'],
  // INEOS Grenadier diesel (BMW B57 diesel)
  [(e, mk) => mk === 'INEOS' && /diesel|b57/i.test(e),                      'BorgWarner VGT Diesel Turbo'],

  // ─── PETROL SINGLE-TURBO BRANDS ──────────────────────────────────────────
  // VW/Audi/Skoda/SEAT 1.0-2.0 TSI/TFSI (EA111/EA211/EA888 — IHI or BorgWarner)
  [(e, mk) => ['Volkswagen','Skoda','SEAT','CUPRA'].includes(mk) && /tsi|tfsi|gti|turbo/i.test(e), 'IHI Single-Turbo'],
  // Audi petrol single-turbo (non-biturbo)
  [(e, mk) => mk === 'Audi' && /tfsi|tsi|turbo/i.test(e),                  'IHI Single-Turbo'],
  // BMW petrol single-turbo (B46/B48/N20 — BorgWarner)
  [(e, mk) => mk === 'BMW' && /turbo/i.test(e),                             'BorgWarner Single-Turbo'],
  // Alpina single-turbo
  [(e, mk) => mk === 'Alpina' && /turbo/i.test(e),                          'BorgWarner Single-Turbo'],
  // Mini petrol turbo (Prince/B38/B46 — BorgWarner or IHI)
  [(e, mk) => mk === 'Mini' && /turbo/i.test(e),                            'BorgWarner Single-Turbo'],
  // Mercedes petrol single-turbo (M260/M270/M274 — IHI or BorgWarner)
  [(e, mk) => mk === 'Mercedes-Benz' && /turbo/i.test(e),                   'IHI Single-Turbo'],
  // Subaru turbo (EJ20/EJ25/FA20 — IHI VF series)
  [(e, mk) => mk === 'Subaru' && /turbo/i.test(e),                          'IHI Single-Turbo'],
  // Nissan petrol turbo (RB series, CA18DET — Garrett; GT-R RB26 — Garrett)
  [(e, mk) => mk === 'Nissan' && /rb26|rb20|rb25|ca18det|sr20det/i.test(e), 'Garrett Single-Turbo'],
  [(e, mk) => mk === 'Nissan' && /turbo/i.test(e),                          'IHI Single-Turbo'],
  // Mitsubishi petrol turbo (4G63T, 4B11T — MHI TD05)
  [(e, mk) => mk === 'Mitsubishi' && /4g63|4b11|turbo/i.test(e),           'MHI Single-Turbo'],
  // Mazda turbo (SKYACTIV-G Turbo, MPS 2.3T — MHI or IHI)
  [(e, mk) => mk === 'Mazda' && /turbo/i.test(e),                           'MHI Single-Turbo'],
  // Hyundai/Kia petrol turbo (Theta II T/GDi, Kappa T — BorgWarner or MHI)
  [(e, mk) => ['Hyundai','Kia'].includes(mk) && /turbo/i.test(e),           'BorgWarner Single-Turbo'],
  // Genesis petrol single-turbo (2.0T Theta II)
  [(e, mk) => mk === 'Genesis' && /turbo/i.test(e),                         'BorgWarner Single-Turbo'],
  // Honda turbo (K20C1/L15B7 — IHI)
  [(e, mk) => mk === 'Honda' && /turbo/i.test(e),                           'IHI Single-Turbo'],
  // Ford petrol turbo (EcoBoost — BorgWarner IHI)
  [(e, mk) => mk === 'Ford' && /ecoboost|turbo/i.test(e),                   'BorgWarner Single-Turbo'],
  // Toyota petrol turbo (8AR-FTS, G16E-GTS — IHI or Denso)
  [(e, mk) => mk === 'Toyota' && /turbo/i.test(e),                          'IHI Single-Turbo'],
  // Volvo petrol turbo (B4/B5/B6 — BorgWarner)
  [(e, mk) => mk === 'Volvo' && /turbo/i.test(e),                           'BorgWarner Single-Turbo'],
  // Alfa Romeo petrol turbo (non-biturbo — IHI)
  [(e, mk) => mk === 'Alfa Romeo' && /turbo/i.test(e),                      'IHI Single-Turbo'],
  // Fiat/Abarth petrol turbo (1.4 MultiAir T-Jet — IHI)
  [(e, mk) => ['Fiat','Abarth'].includes(mk) && /turbo/i.test(e),           'IHI Single-Turbo'],
  // Lancia turbo (mostly old IHI/KKK units)
  [(e, mk) => mk === 'Lancia' && /turbo/i.test(e),                          'IHI Single-Turbo'],
  // Peugeot/Citroën/DS petrol turbo (THP/PureTech — IHI or BorgWarner)
  [(e, mk) => ['Peugeot','Citroën','DS'].includes(mk) && /turbo/i.test(e), 'IHI Single-Turbo'],
  // Renault petrol turbo (TCe — BorgWarner or IHI)
  [(e, mk) => mk === 'Renault' && /turbo/i.test(e),                        'IHI Single-Turbo'],
  // Alpine turbo (A110, A610 — IHI/Renault)
  [(e, mk) => mk === 'Alpine' && /turbo/i.test(e),                          'IHI Single-Turbo'],
  // Dacia turbo
  [(e, mk) => mk === 'Dacia' && /turbo/i.test(e),                           'IHI Single-Turbo'],
  // Saab turbo (B202/B234 — Garrett)
  [(e, mk) => mk === 'Saab' && /turbo/i.test(e),                            'Garrett Single-Turbo'],
  // Rover/MG/Austin petrol turbo
  [(e, mk) => ['Rover','MG Metro'].includes(mk) && /turbo/i.test(e),        'Garrett Single-Turbo'],
  // Vauxhall/Opel petrol turbo (Z20LET/A16LET — BorgWarner or IHI)
  [(e, mk) => ['Vauxhall','Opel'].includes(mk) && /turbo/i.test(e),         'BorgWarner Single-Turbo'],
  // Lotus turbo (Esprit V8 — Garrett)
  [(e, mk) => mk === 'Lotus' && /turbo/i.test(e),                           'Garrett Single-Turbo'],
  // Bugatti quad-turbo (Veyron W16 — KKK; Chiron W16 — BorgWarner)
  [(e, mk) => mk === 'Bugatti' && /w16.*chiron|chiron/i.test(e),            'BorgWarner Quad-Turbo'],
  [(e, mk) => mk === 'Bugatti' && /w16.*veyron|veyron|eb110|type/i.test(e),'BorgWarner Quad-Turbo'],
  [(e, mk) => mk === 'Bugatti' && /turbo/i.test(e),                         'BorgWarner Quad-Turbo'],
  // Pagani V12 twin-turbo (Huayra — AMG M158)
  [(e, mk) => mk === 'Pagani' && /turbo/i.test(e),                          'IHI Twin-Turbo'],
  // Koenigsegg turbo (Agera/Jesko — Koenigsegg in-house/custom)
  [(e, mk) => mk === 'Koenigsegg' && /turbo/i.test(e),                      'Koenigsegg Twin-Turbo'],
  // Suzuki turbo (K6A, R06A — IHI)
  [(e, mk) => mk === 'Suzuki' && /turbo/i.test(e),                          'IHI Single-Turbo'],
  // Smart turbo (M160/M281 — IHI or BorgWarner)
  [(e, mk) => mk === 'Smart' && /turbo/i.test(e),                           'IHI Single-Turbo'],
  // Jeep turbo (2.0L GME T4, 1.3L GSE T4 — BorgWarner or IHI)
  [(e, mk) => mk === 'Jeep' && /turbo/i.test(e),                            'BorgWarner Single-Turbo'],
  // Chrysler petrol turbo
  [(e, mk) => mk === 'Chrysler' && /turbo/i.test(e),                        'IHI Single-Turbo'],
  // Chevrolet/Buick/Cadillac petrol turbo (LTG/A20NFT — IHI or BorgWarner)
  [(e, mk) => ['Chevrolet','Buick','Cadillac'].includes(mk) && /turbo/i.test(e), 'BorgWarner Single-Turbo'],
  // Dodge petrol turbo
  [(e, mk) => mk === 'Dodge' && /turbo/i.test(e),                           'BorgWarner Single-Turbo'],
  // Lincoln/Ford turbo fallback
  [(e, mk) => mk === 'Lincoln' && /turbo/i.test(e),                         'BorgWarner Single-Turbo'],
  // Daihatsu turbo (small JDM — IHI)
  [(e, mk) => mk === 'Daihatsu' && /turbo/i.test(e),                        'IHI Single-Turbo'],
  // Jaguar petrol turbo (Ingenium 4-cyl — Garrett)
  [(e, mk) => mk === 'Jaguar' && /turbo/i.test(e),                          'Garrett Single-Turbo'],
  // Land Rover petrol turbo (P300 Ingenium — Garrett)
  [(e, mk) => mk === 'Land Rover' && /turbo/i.test(e),                      'Garrett Single-Turbo'],
  // GWM/Haval petrol turbo (4B15A/4C20B — BorgWarner)
  [(e, mk) => mk === 'GWM' && /turbo/i.test(e),                             'BorgWarner Single-Turbo'],
  // MG petrol turbo (15S4G/20S4G — BorgWarner)
  [(e, mk) => mk === 'MG' && /turbo/i.test(e),                              'BorgWarner Single-Turbo'],
  // INEOS petrol turbo (BMW B58 petrol)
  [(e, mk) => mk === 'INEOS' && /turbo/i.test(e),                           'BorgWarner Single-Turbo'],
  // Chery/Omoda/Jaecoo/Changan turbo
  [(e, mk) => ['Chery','Omoda','Jaecoo','Changan'].includes(mk) && /turbo/i.test(e), 'BorgWarner Single-Turbo'],
  // Morgan petrol turbo (B58 — BorgWarner)
  [(e, mk) => mk === 'Morgan' && /turbo/i.test(e),                          'BorgWarner Single-Turbo'],
  // Caterham small turbo (660cc Daihatsu — IHI)
  [(e, mk) => mk === 'Caterham' && /turbo/i.test(e),                        'IHI Single-Turbo'],
  // Reliant turbo
  [(e, mk) => mk === 'Reliant' && /turbo/i.test(e),                         'IHI Single-Turbo'],
  // SsangYong petrol turbo (e-XGi — BorgWarner)
  [(e, mk) => mk === 'SsangYong' && /turbo/i.test(e),                       'BorgWarner Single-Turbo'],
  // Wiesmann turbo (BMW-based — BorgWarner)
  [(e, mk) => mk === 'Wiesmann' && /turbo/i.test(e),                        'BorgWarner Single-Turbo'],
  // FPV turbo (Ford Barra inline-6 — Garrett)
  [(e, mk) => mk === 'FPV' && /turbo/i.test(e),                             'Garrett Single-Turbo'],
  // Ford/Holden Falcon/Commodore petrol turbo (Barra — Garrett; Buick V6 — BorgWarner)
  [(e, mk, mo) => (mk === 'Ford' || (mk === 'Commodore (VL)' || mo?.includes('Falcon'))) && /turbo/i.test(e), 'Garrett Single-Turbo'],
  // Holden Statesman VL turbo (Nissan RB30ET — Garrett)
  [(e, mk) => mk === 'Statesman' && /turbo/i.test(e),                       'Garrett Single-Turbo'],
  // Holden VL Commodore turbo (RB30ET — Garrett)
  [(e, mk, mo) => (mk === 'Commodore (VL)' || /vl/i.test(mo || '')) && /turbo|rb30/i.test(e), 'Garrett Single-Turbo'],
  // Catch-all: any remaining Turbo with "turbo" in engine string
  [e => /turbo/i.test(e),                                                   'Single-Turbo'],
]

function apply(engine, make, model, currentAsp) {
  // Only update generic values — don't overwrite already-specific ones
  const generic = ['Turbo', 'Supercharged', 'Twin-Turbo', 'Tri-Turbo']
  if (!generic.includes(currentAsp)) return null
  if (!engine) return null
  for (const [fn, asp] of RULES) {
    if (fn(engine, make, model)) return asp
  }
  return null
}

let total = 0, files = 0
const byResult = {}

function patchSpecs(data) {
  let changed = false
  for (const [k, v] of Object.entries(data.specs)) {
    const parts = k.split('|')
    const make  = parts[0]
    const model = parts[1]
    const eng   = v.engine || v.en || ''
    const result = apply(eng, make, model, v.aspiration)
    if (result && result !== v.aspiration) {
      v.aspiration = result
      byResult[result] = (byResult[result] || 0) + 1
      total++
      changed = true
    }
  }
  return changed
}

for (let i = 1; i <= 217; i++) {
  if (i === 34 || i === 35) continue
  const path = 'src/data/supplement' + i + '.json'
  try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'))
    if (patchSpecs(data)) { fs.writeFileSync(path, JSON.stringify(data, null, 2)); files++ }
  } catch(e) {}
}
for (const file of ['src/data/holden.json', 'src/data/ford.json']) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'))
  if (patchSpecs(data)) { fs.writeFileSync(file, JSON.stringify(data, null, 2)); files++ }
}

console.log('Total updated: ' + total + ' across ' + files + ' files\n')
console.log('Breakdown:')
for (const [k, v] of Object.entries(byResult).sort((a,b) => b[1]-a[1])) {
  console.log('  ' + k + ': ' + v)
}
