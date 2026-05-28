'use strict'
const fs = require('fs')

// Rules applied in order — first match wins
// fn(engine, make, model) → new aspiration string
const RULES = [
  // ─── TRI-TURBO ──────────────────────────────────────────────────────────────
  [e => /n57s.*tri.?turbo|tri.?turbo.*n57s/i.test(e),              'BorgWarner Tri-Turbo'],

  // ─── SUPERCHARGED ───────────────────────────────────────────────────────────
  // LSA (Eaton TVS2300 — HSV GTS, W1, Commodore SS, Maloo, Cadillac CTS-V etc.)
  [e => /lsa supercharg|lsa.*v8.*supercharg|supercharg.*lsa|cadillac.*lsa supercharg/i.test(e), 'Eaton TVS2300 Supercharged'],
  // LS9 (Corvette C6 ZR1)
  [e => /ls9.*supercharg|supercharg.*ls9|ls9 6\.2/i.test(e),       'Eaton TVS2300 Supercharged'],
  // LT4 (Corvette Z06 C7, Camaro ZL1 1LE)
  [e => /lt4 supercharg|supercharg.*lt4/i.test(e),                  'Eaton TVS2650 Supercharged'],
  // Hellcat/Redeye/Jailbreak (IHI twin-screw)
  [e => /hellcat|redeye|jailbreak/i.test(e),                        'IHI Twin-Screw Supercharged'],
  // RAM TRX / RAM 1500 6.2L HEMI SC (non-Hellcat)
  [e => /6\.2l supercharg.*hemi|6\.2l.*hemi.*supercharg/i.test(e), 'Eaton TVS2650 Supercharged'],
  // Ford FPV BA-BF 5.4L (Lysholm twin-screw)
  [e => /5\.4l.*supercharg|supercharg.*5\.4/i.test(e),             'Lysholm Twin-Screw Supercharged'],
  // Ford Mustang Shelby 5.2L Predator / F-150 Raptor R
  [e => /5\.2l.*supercharg|predator.*supercharg/i.test(e),         'Eaton TVS2650 Supercharged'],
  // Eaton M90 — GM 3.8L V6 (Buick, Pontiac, Holden VN-VY)
  [e => /3\.8l.*supercharg|supercharg.*3\.8/i.test(e),             'Eaton M90 Supercharged'],
  // Ecotec SC — Holden VT-VY Commodore, Statesman
  [e => /ecotec sc|ecotec.*supercharg/i.test(e),                   'Eaton M90 Supercharged'],
  // Audi TFSI SC (S4/S5/Q7/A6/A7 3.0 TFSI)
  [e => /tfsi.*supercharg|supercharg.*tfsi/i.test(e),              'Eaton TVS Supercharged'],
  // Land Rover / Jaguar V8 P525 / 4.4L / 5.0L SC
  [e => /p525 supercharg|4\.4l.*supercharg|5\.0l.*supercharg|4\.2l.*supercharg/i.test(e), 'Eaton TVS Supercharged'],
  // Jaguar 3.0 SC V6 (F-Type, XE, XF, F-Pace)
  [e => /3\.0 sc|3\.0l sc|3\.0.*sc v6/i.test(e),                  'Eaton TVS Supercharged'],
  // Land Rover 3.0L P380 SC
  [e => /p380.*supercharg|3\.0l.*sc si6|3\.0l.*v6 sc/i.test(e),   'Eaton TVS Supercharged'],
  // Chrysler Crossfire SRT-6 3.2L Lysholm
  [e => /3\.2l sc v6/i.test(e),                                    'Lysholm Twin-Screw Supercharged'],
  // Aston Martin DB7 3.2L I6 SC
  [e => /3\.2l.*supercharg.*i6/i.test(e),                         'Eaton M90 Supercharged'],
  // Lancia Volumex
  [e => /volumex/i.test(e),                                        'Lancia Volumex Supercharged'],
  // Lotus Evora 400 / Emira / Exige S3 — Harrop Eaton TVS1900 on Toyota 3.5L V6
  [e => /3\.5l.*v6.*supercharg|toyota 3\.5l.*supercharg|supercharg.*3\.5/i.test(e), 'Harrop Eaton TVS1900 Supercharged'],
  // Lotus Elise/Exige S2 — Toyota 1.6/1.8L SC
  [(e, mk, mo) => /elise|exige/i.test(mo) && /toyota.*supercharg|supercharg.*toyota/i.test(e), 'Harrop Eaton Supercharged'],
  // Lotus Exige S1 1.8L SC fallback
  [e => /1\.8l supercharg|supercharg.*1\.8l/i.test(e),            'Harrop Eaton Supercharged'],
  // Mini R53 Eaton M45
  [e => /1\.6l.*supercharg.*dohc|eaton.*mini|mini.*supercharg/i.test(e), 'Eaton M45 Supercharged'],
  // Mercedes M271 EVO (SLK 200K)
  [e => /m271.*evo|sc m271/i.test(e),                             'Eaton M45 Supercharged'],
  // Bugatti vintage (Roots)
  [(e, mk) => mk === 'Bugatti' && /supercharg/i.test(e),          'Roots Supercharged'],
  // Koenigsegg CC8S/CCR/CCX Lysholm
  [(e, mk) => mk === 'Koenigsegg' && /supercharg/i.test(e),       'Lysholm Twin-Screw Supercharged'],
  // Studebaker Paxton / Avanti R2
  [e => /paxton|r2 supercharg|289ci.*supercharg/i.test(e),        'Paxton Centrifugal Supercharged'],
  // Caterham 485/620R Rotrex centrifugal
  [(e, mk) => mk === 'Caterham' && /supercharg/i.test(e),         'Rotrex Centrifugal Supercharged'],
  // AC Cobra SC Paxton
  [(e, mk) => mk === 'AC' && /supercharg/i.test(e),               'Paxton Centrifugal Supercharged'],
  // Volvo T8 PHEV (turbo + Roots SC combo)
  [e => /turbo.*supercharger.*t8|supercharger.*t8 phev/i.test(e), 'Turbo + Eaton Supercharged'],
  // Lancia Rally 037 Abarth
  [(e, mk, mo) => mk === 'Lancia' && mo === 'Rally 037',           'Abarth Volumex Supercharged'],

  // ─── TWIN-TURBO ─────────────────────────────────────────────────────────────
  // VW 1.4 TSI Twincharged (turbo + Eaton Roots SC) — reclassify
  [e => /twincharged/i.test(e),                                    'Turbo + Eaton Supercharged'],
  // BMW N54B30 (335i, 135i — twin BorgWarner)
  [e => /n54b30/i.test(e),                                         'BorgWarner Twin-Turbo'],
  // BMW N63B44 (550i, X5M, X6M — twin BorgWarner)
  [e => /n63b44/i.test(e),                                         'BorgWarner Twin-Turbo'],
  // BMW S55B30 (M3 F80, M4 F82 — Mitsubishi turbos)
  [e => /s55b30/i.test(e),                                         'Mitsubishi Twin-Turbo'],
  // BMW S58 (M3 G80, M4 G82 — BorgWarner)
  [e => /s58/i.test(e),                                            'BorgWarner Twin-Turbo'],
  // BMW S63 (M5, X5M, X6M — BorgWarner)
  [e => /s63b44/i.test(e),                                         'BorgWarner Twin-Turbo'],
  // BMW N74B66 (760Li — BorgWarner)
  [e => /n74b66/i.test(e),                                         'BorgWarner Twin-Turbo'],
  // Alpina B3/B58 biturbo
  [e => /b58.*biturbo|biturbo.*b58/i.test(e),                     'BorgWarner Twin-Turbo'],
  // BMW B48 Twin-Turbo
  [e => /b48a20t3/i.test(e),                                       'BorgWarner Twin-Turbo'],
  // General BMW biturbo/twin-turbo fallback
  [(e, mk) => mk === 'BMW' && /biturbo|twin.?turbo/i.test(e),     'BorgWarner Twin-Turbo'],
  // Mercedes AMG M157/M177 (C63/E63/GT — IHI)
  [e => /m177|m157/i.test(e),                                      'IHI Twin-Turbo'],
  // Mercedes 4.0T/4.0L V8 Biturbo AMG
  [(e, mk) => mk === 'Mercedes-Benz' && /biturbo|twin.?turbo/i.test(e), 'IHI Twin-Turbo'],
  // Audi 2.7 biturbo (old S4/RS4/A6)
  [e => /2\.7.*biturbo|biturbo.*2\.7/i.test(e),                   'BorgWarner K03 Twin-Turbo'],
  // Audi 2.9 TFSI biturbo (RS4 B9, RS5 B9, S4 B9)
  [e => /2\.9.*tfsi biturbo|2\.9.*biturbo/i.test(e),              'BorgWarner Twin-Turbo'],
  // Audi 4.0 V8 TFSI biturbo (RS6, RS7, S8, RS Q8)
  [e => /4\.0.*v8.*tfsi biturbo|4\.0.*biturbo|4\.0 tfsi.*biturbo/i.test(e), 'BorgWarner Twin-Turbo'],
  // Audi 5.0 V10 biturbo (RS6 C6)
  [e => /5\.0.*v10.*tfsi biturbo|v10.*biturbo/i.test(e),          'BorgWarner Twin-Turbo'],
  // Audi SQ7/SQ8 fallback
  [(e, mk) => mk === 'Audi' && /biturbo|twin.?turbo/i.test(e),    'BorgWarner Twin-Turbo'],
  // Porsche 911 Turbo (BorgWarner VTG)
  [(e, mk, mo) => mk === 'Porsche' && mo === '911' && /twin.?turbo/i.test(e), 'BorgWarner VTG Twin-Turbo'],
  // Porsche Cayenne/Panamera/Macan biturbo
  [(e, mk) => mk === 'Porsche' && /biturbo|twin.?turbo/i.test(e), 'BorgWarner Twin-Turbo'],
  // Ferrari F154CB (488 GTB/Spider/Pista)
  [e => /f154cb/i.test(e),                                         'IHI Twin-Turbo'],
  // Ferrari general biturbo/twin-turbo
  [(e, mk) => mk === 'Ferrari' && /biturbo|twin.?turbo/i.test(e), 'IHI Twin-Turbo'],
  // McLaren M840T (720S, GT, 750S, 765LT)
  [e => /m840t/i.test(e),                                          'BorgWarner Twin-Turbo'],
  // McLaren M630 (Artura)
  [e => /m630/i.test(e),                                           'BorgWarner Twin-Turbo'],
  // McLaren general
  [(e, mk) => mk === 'McLaren' && /twin.?turbo|biturbo/i.test(e), 'BorgWarner Twin-Turbo'],
  // Maserati Nettuno V6 (GranTurismo, MC20)
  [e => /nettuno/i.test(e),                                        'IHI Twin-Turbo'],
  // Maserati general (Ghibli, Levante, Quattroporte 3.0 V6)
  [(e, mk) => mk === 'Maserati' && /twin.?turbo|biturbo/i.test(e), 'IHI Twin-Turbo'],
  // Alfa Romeo 2.9 V6 BiTurbo QV (Ferrari-sourced)
  [(e, mk) => mk === 'Alfa Romeo' && /biturbo|twin.?turbo/i.test(e), 'IHI Twin-Turbo'],
  // Subaru EJ20T twin-turbo (Liberty GT-B)
  [e => /ej20t.*twin.?turbo|twin.?turbo.*ej20t/i.test(e),         'IHI Twin-Turbo'],
  // Kia Stinger / Genesis Lambda II G6DP 3.3T
  [e => /g6dp.*biturbo|3\.3t biturbo/i.test(e),                   'BorgWarner Twin-Turbo'],
  // Genesis 3.5T V6 / GV70 / GV80
  [(e, mk) => (mk === 'Genesis' || mk === 'Kia') && /twin turbo/i.test(e), 'BorgWarner Twin-Turbo'],
  // Nissan / Infiniti VR30DDTT
  [e => /vr30ddtt/i.test(e),                                       'BorgWarner Twin-Turbo'],
  // Toyota 1VD-FTV diesel twin-turbo (LandCruiser 200, LC70)
  [e => /1vd.?ftv/i.test(e),                                       'Toyota Twin-Turbo'],
  // Toyota / Lexus 3.3/3.4/3.5 V6 twin-turbo
  [(e, mk) => (mk === 'Toyota' || mk === 'Lexus') && /twin.?turbo/i.test(e), 'Toyota Twin-Turbo'],
  // Land Rover V8 P530 (BorgWarner — Range Rover, RR Sport)
  [(e, mk) => mk === 'Land Rover' && /p530.*twin turbo|twin turbo.*p530/i.test(e), 'BorgWarner Twin-Turbo'],
  // Land Rover general biturbo fallback
  [(e, mk) => mk === 'Land Rover' && /biturbo|twin.?turbo/i.test(e), 'ZF Twin-Turbo'],
  // Lamborghini Urus / Temerario
  [(e, mk) => mk === 'Lamborghini' && /twin.?turbo|biturbo/i.test(e), 'BorgWarner Twin-Turbo'],
  // Bentley V8 / W12 (BorgWarner)
  [(e, mk) => mk === 'Bentley' && /twin.?turbo|biturbo/i.test(e), 'BorgWarner Twin-Turbo'],
  // Aston Martin V8/V12 — AMG-sourced V8 uses IHI
  [(e, mk) => mk === 'Aston Martin' && /twin.?turbo/i.test(e),    'IHI Twin-Turbo'],
  // Rolls-Royce V12 biturbo
  [(e, mk) => mk === 'Rolls-Royce' && /biturbo|twin.?turbo/i.test(e), 'IHI Twin-Turbo'],
  // Volvo 2.0 Twin-Turbo (T5/T6)
  [(e, mk) => mk === 'Volvo' && /twin turbo/i.test(e) && !/supercharger/i.test(e), 'BorgWarner Twin-Turbo'],
  // GWM Tank 500 3.0T V6
  [(e, mk) => mk === 'GWM' && /twin turbo/i.test(e),              'BorgWarner Twin-Turbo'],
  // Lincoln Navigator EcoBoost
  [(e, mk) => mk === 'Lincoln' && /twin turbo/i.test(e),          'BorgWarner Twin-Turbo'],
  // Ford Bronco Raptor EcoBoost
  [e => /ecoboost twin.?turbo/i.test(e),                           'BorgWarner Twin-Turbo'],
  // Alpina B3 biturbo fallback
  [(e, mk) => mk === 'Alpina' && /biturbo|twin.?turbo/i.test(e),  'BorgWarner Twin-Turbo'],
]

function apply(engine, make, model) {
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
    const result = apply(eng, make, model)
    if (result && result !== v.aspiration) {
      v.aspiration = result
      byResult[result] = (byResult[result] || 0) + 1
      total++
      changed = true
    }
  }
  return changed
}

// Supplements
for (let i = 1; i <= 217; i++) {
  if (i === 34 || i === 35) continue
  const path = 'src/data/supplement' + i + '.json'
  try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'))
    if (patchSpecs(data)) { fs.writeFileSync(path, JSON.stringify(data, null, 2)); files++ }
  } catch(e) {}
}

// Holden & Ford
for (const file of ['src/data/holden.json', 'src/data/ford.json']) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'))
  if (patchSpecs(data)) { fs.writeFileSync(file, JSON.stringify(data, null, 2)); files++ }
}

console.log('Total updated: ' + total + ' entries across ' + files + ' files')
console.log('\nBreakdown:')
for (const [k, v] of Object.entries(byResult).sort((a,b) => b[1]-a[1])) {
  console.log('  ' + k + ': ' + v)
}
