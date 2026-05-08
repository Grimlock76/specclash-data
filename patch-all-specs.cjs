#!/usr/bin/env node
// patch-all-specs.cjs
// Fills missing spec fields across all new-format supplements (s36-s49)

const fs = require('fs')
const path = require('path')
const DATA = path.join(__dirname, 'src/data')

// ── Body style (mirrors bodyType.js) ─────────────────────────────────────────
function getBodyStyle(model, trim) {
  const m = model.toLowerCase()
  const t = (trim || '').toLowerCase()
  if (/sportwagon|wagon|\bshooting brake\b|\balltrack\b|\bavant\b/.test(t)) return 'Wagon'
  if (/sportback/.test(t)) return 'Hatch'
  if (/\bute\b|\butility\b|kingswood ute/.test(t)) return 'Ute'
  if (/sandman|one tonner/.test(t)) return 'Van'
  if (/\bseca\b/.test(t)) return 'Hatch'
  if (/commuter/.test(t)) return 'Van'
  if (/\bute\b/.test(m)) return 'Ute'
  if (/hilux surf/.test(m)) return 'SUV'
  if (/ranger|f-150|hilux/.test(m)) return 'Ute'
  if (/territory|everest|escape|puma|landcruiser|prado|rav4|kluger|c-hr|fj cruiser|fortuner|yaris cross|corolla cross/.test(m)) return 'SUV'
  if (/monaro|mustang|supra|celica|mr2|soarer|paseo/.test(m) || m === '86' || m === 'gr86') return 'Coupe'
  if (/torana|focus|yaris|echo|starlet|gr corolla|prius c/.test(m)) return 'Hatch'
  if (/hiace|tarago|granvia/.test(m)) return 'Van'
  if (/\bbz4x\b|\bcrown\b/.test(m)) return 'SUV'
  if (/\bprius v\b/.test(m)) return 'Wagon'
  if (/rx-7|rx-8|mx-5|mx-6/.test(m)) return 'Coupe'
  if (/cx-3|cx-5|cx-8|cx-9|cx-60|cx-90|mx-30/.test(m)) return 'SUV'
  if (/\bbt-50\b/.test(m)) return 'Ute'
  if (/\b323\b/.test(m)) return 'Hatch'
  if (m === '2' || m === '3') return 'Hatch'
  if (/\b300zx\b|\b370z\b|\b400z\b|\bsilvia\b|\b180sx\b|\b200sx\b|\b240z\b|\b280zx\b/.test(m)) return 'Coupe'
  if (/\bgt-r\b/.test(m)) return 'Coupe'
  if (/patrol|x-trail|pathfinder|qashqai|juke|dualis|\bkicks\b|\bariya\b/.test(m)) return 'SUV'
  if (/navara/.test(m)) return 'Ute'
  if (/\bmicra\b|\bpulsar\b|\bleaf\b/.test(m)) return 'Hatch'
  if (/\bstagea\b/.test(m)) return 'Wagon'
  if (/\bveloster\b|\btiburon\b|\bgenesis coupe\b/.test(m) || m === 'coupe') return 'Coupe'
  if (/\btucson\b|\bsanta fe\b|\bix35\b|\bkona\b|\bioniq 5\b|\bpalisade\b|\bterracan\b/.test(m)) return 'SUV'
  if (/\bstaria\b/.test(m)) return 'Van'
  if (/\bioniq 6\b|\bsonata\b|\belantra\b|\bi45\b|\bi40\b/.test(m)) return 'Sedan'
  if (/\bexcel\b|\bgetz\b|\baccent\b|\bi20\b|\bi30\b|\bioniq\b/.test(m)) return 'Hatch'
  if (/\bstinger\b/.test(m)) return 'Sedan'
  if (/\bsportage\b|\bsorento\b|\bseltos\b|\btelluride\b|\bniro\b|\bev6\b|\bev9\b/.test(m)) return 'SUV'
  if (/\bcarnival\b/.test(m)) return 'Van'
  if (/\brio\b|\bcerato\b|\bpicanto\b|\bsoul\b/.test(m)) return 'Hatch'
  if (/\boptima\b|\bcadenza\b/.test(m)) return 'Sedan'
  if (/\bx2\b|\bx4\b|\bx6\b|\bx7\b|\bix\b|\bix3\b|\bix1\b|\bx1\b|\bx3\b|\bx5\b/.test(m)) return 'SUV'
  if (/\b2 series active tourer\b|\b2 series gran tourer\b/.test(m)) return 'Hatch'
  if (/\bz3\b|\bz4\b|\b2 series\b|\b4 series\b|\b6 series\b|\b8 series\b|\bm2\b|\bm4\b|\bm8\b/.test(m)) return 'Coupe'
  if (/\b1 series\b|\bi3\b/.test(m)) return 'Hatch'
  if (/\b3 series\b|\b5 series\b|\b6 series gran coupe\b|\b7 series\b|\bi4\b|\bi5\b|\bi7\b/.test(m)) return 'Sedan'
  if (/\bscirocco\b/.test(m)) return 'Coupe'
  if (/\btiguan\b|\btouareg\b|\bt-roc\b|\bid\.4\b|\bid\.5\b/.test(m)) return 'SUV'
  if (/\bamarok\b/.test(m)) return 'Ute'
  if (/\bmultivan\b|\btransporter\b|\bcaravelle\b/.test(m)) return 'Van'
  if (/\bgolf wagon\b/.test(m)) return 'Wagon'
  if (/\bjetta\b|\bpassat\b|\barteon\b|\bid\.7\b/.test(m)) return 'Sedan'
  if (/\bgolf\b|\bpolo\b|\bbeetle\b|\bid\.3\b/.test(m)) return 'Hatch'
  if (/\bstarion\b|\b3000gt\b|\bgto\b|\beclipse spyder\b|\bfto\b/.test(m)) return 'Coupe'
  if (/\beclipse\b/.test(m)) return 'Coupe'
  if (/\bpajero\b|\boutlander\b|\basx\b|\beclipse cross\b|\bchallenger\b|\brvr\b|\bpajero sport\b/.test(m)) return 'SUV'
  if (/\btriton\b/.test(m)) return 'Ute'
  if (/\bcolt\b|\bmirage\b|\bspace star\b|\bcarisma\b|\bi-miev\b/.test(m)) return 'Hatch'
  if (/\bl300\b|\bexpress\b|\bdelica\b|\bgrandis\b/.test(m)) return 'Van'
  if (/\bbrz\b/.test(m)) return 'Coupe'
  if (/\btribeca\b|\bforester\b|\bxv\b|\bcrosstrek\b|\boutback\b|\bsolterra\b/.test(m)) return 'SUV'
  if (/\blevorg\b/.test(m)) return 'Wagon'
  if (/\bwrx\b|\bliberty\b|\bimpreza\b/.test(m)) return 'Sedan'
  if (/\bnsx\b|\bs2000\b|\bprelude\b/.test(m)) return 'Coupe'
  if (/\bcr-v\b|\bhr-v\b|\bzr-v\b|\be:ny1\b/.test(m)) return 'SUV'
  if (/\bodyssey\b/.test(m)) return 'Van'
  if (/\bcivic\b|\bjazz\b/.test(m)) return 'Hatch'
  if (/\baccord\b|\blegend\b|\bintegra\b/.test(m)) return 'Sedan'
  if (/\blc\b|\brc\b/.test(m)) return 'Coupe'
  if (/\bux\b|\bnx\b|\brx\b|\bgx\b|\blx\b|\brz\b/.test(m)) return 'SUV'
  if (/\bct\b/.test(m)) return 'Hatch'
  if (/\bis\b|\bes\b|\bgs\b|\bls\b/.test(m)) return 'Sedan'
  if (/\bcabriolet\b|\bquattro\b|\bs2\b|\btt\b|\br8\b|\ba5\b|\bs5\b|\brs5\b/.test(m)) return 'Coupe'
  if (/e-tron gt/.test(m)) return 'Sedan'
  if (/allroad|\bavant\b|\brs4\b|\brs6\b/.test(m)) return 'Wagon'
  if (/\bq2\b|\bq3\b|\bq4\b|\bq5\b|\bq6\b|\bq7\b|\bq8\b|\be-tron\b|\bsq5\b|\bsq7\b|\bsq8\b|\brs q3\b|\brs q8\b/.test(m)) return 'SUV'
  if (/\ba1\b|\ba2\b|\ba3\b|\bs1\b|\bs3\b|\brs3\b/.test(m)) return 'Hatch'
  if (/\ba4\b|\ba6\b|\ba7\b|\ba8\b|\b80\b|\b90\b|\b100\b|\bv8\b|\brs2\b|\bs4\b|\bs6\b|\bs7\b|\brs7\b|\bs8\b/.test(m)) return 'Sedan'
  if (/\b911\b|\b718\b|\bboxster\b|\bcayman\b/.test(m)) return 'Coupe'
  if (/\bcayenne\b|\bmacan\b/.test(m)) return 'SUV'
  if (/\bpanamera\b|\btaycan\b/.test(m)) return 'Sedan'
  if (/\bjimny\b|\bvitara\b|\bs-cross\b|\bgrand vitara\b/.test(m)) return 'SUV'
  if (/\bswift\b|\bbaleno\b|\bignis\b/.test(m)) return 'Hatch'
  if (/\bdefender\b|\bdiscovery\b|\brange rover\b|\bfreelander\b/.test(m)) return 'SUV'
  if (/\bxc40\b|\bxc60\b|\bxc90\b|\bc40\b|\bex30\b|\bex90\b/.test(m)) return 'SUV'
  if (/\bv40\b|\bv60\b|\bv90\b/.test(m)) return 'Wagon'
  if (/\bs60\b|\bs90\b/.test(m)) return 'Sedan'
  if (/\bmodel y\b|\bmodel x\b|\bcybertruck\b/.test(m)) return 'SUV'
  if (/\bmodel 3\b|\bmodel s\b/.test(m)) return 'Sedan'
  if (/\bd-max\b/.test(m)) return 'Ute'
  if (/\bmu-x\b/.test(m)) return 'SUV'
  if (/\bzs ev\b|\bzs\b|\bmg hs\b/.test(m)) return 'SUV'
  if (/\bmg3\b|\bmg4\b|\bmg6\b/.test(m)) return 'Hatch'
  if (/\bcyberster\b/.test(m)) return 'Coupe'
  if (/\bhaval\b|\btank\b/.test(m)) return 'SUV'
  if (/\bute\b/.test(m)) return 'Ute'
  if (/\batto 3\b|\bsealion\b/.test(m)) return 'SUV'
  if (/\bseal\b/.test(m)) return 'Sedan'
  if (/\bdolphin\b/.test(m)) return 'Hatch'
  if (/\bshark\b/.test(m)) return 'Ute'
  if (/\bgv70\b|\bgv80\b/.test(m)) return 'SUV'
  if (/\bg70\b|\bg80\b|\bg90\b/.test(m)) return 'Sedan'
  if (/\bg-class\b|\bglc\b|\bgle\b|\bgls\b|\bgla\b|\bglb\b|\beqa\b|\beqb\b|\beqc\b|\beqe suv\b|\beqs suv\b/.test(m)) return 'SUV'
  if (/\bamg gt\b|\bcla\b|\bslk\b|\bslc\b|\bsl\b/.test(m)) return 'Coupe'
  if (/\ba-class\b|\bb-class\b/.test(m)) return 'Hatch'
  if (/\bc-class\b|\be-class\b|\bs-class\b|\bcls\b|\beqe\b|\beqs\b/.test(m)) return 'Sedan'
  return 'Sedan'
}

// ── Fuel consumption ratios (fc = combined reference) ────────────────────────
function fuelRatios(fuelType) {
  if (!fuelType || /electric/i.test(fuelType)) return null
  if (/diesel/i.test(fuelType)) return { fh: 0.77, fx: 1.32 }
  if (/hybrid|phev/i.test(fuelType)) return { fh: 0.82, fx: 1.22 }
  return { fh: 0.74, fx: 1.41 } // petrol
}

// ── Acceleration estimate (W/kg empirical, calibrated from BMW 730i/740i/750i)
function estimateAccel(power, weight, transmission, fuelType) {
  if (!power || !weight) return null
  const pwr = (power * 1000) / weight
  let a = 199.2 / Math.pow(pwr, 0.767)
  const tx = (transmission || '').toLowerCase()
  if (/cvt/i.test(tx)) a *= 1.28
  else if (/4.speed auto|4-speed auto/i.test(tx)) a *= 1.18
  else if (/5.speed auto|5-speed auto/i.test(tx)) a *= 1.10
  else if (/6.speed auto|6-speed auto/i.test(tx)) a *= 1.05
  else if (/9.speed|10.speed|pdk|s.tronic|dct|dual.clutch/i.test(tx)) a *= 0.92
  else if (/8.speed/i.test(tx)) a *= 0.97
  if (/electric/i.test(fuelType)) a *= 0.72
  return Math.round(Math.min(20, Math.max(2.5, a)) * 10) / 10
}

// ── Top speed estimate ────────────────────────────────────────────────────────
function estimateTopSpeed(make, model, power, fuelType, trim) {
  if (!power) return null
  if (/electric/i.test(fuelType)) return 200
  const t = (trim || '').toUpperCase()
  const m = model.toLowerCase()
  const isPerf = /\bAMG\b|\bRS\b|\bM\d\b|\bGTS\b|\bGTR\b|\bSTI\b|\bTYPE R\b/.test(t)
  if (make === 'Porsche') {
    if (/gt3|gt2|rs|gt4/i.test(t)) return 320
    if (/turbo s/i.test(t)) return 330
    if (/turbo(?! s)/i.test(t) && power >= 350) return 320
    if (/911/.test(m)) return power >= 350 ? 310 : power >= 270 ? 295 : 275
    if (/718|boxster/.test(m)) return power >= 290 ? 295 : 275
    if (/cayenne|macan/.test(m)) return 270
    if (/panamera|taycan/.test(m)) return 310
    return 270
  }
  if (make === 'BMW') {
    if (isPerf && power >= 400) return 290
    if (isPerf && power >= 300) return 280
    if (power >= 240) return 250
    if (power >= 150) return 245
    if (power >= 100) return 220
    return 195
  }
  if (make === 'Mercedes-Benz') {
    if (power >= 450) return 300
    if (power >= 350) return 290
    if (power >= 250) return 270
    if (power >= 180) return 250
    if (power >= 130) return 240
    if (power >= 90) return 220
    return 190
  }
  if (make === 'Audi') {
    if (/\bR8\b/i.test(m)) return 330
    if (isPerf && power >= 350) return 290
    if (isPerf && power >= 250) return 280
    if (power >= 250) return 250
    if (power >= 150) return 245
    if (power >= 100) return 220
    return 195
  }
  if (make === 'Honda') {
    if (/nsx/.test(m)) return 308
    if (/s2000/.test(m)) return 240
    if (/type r/i.test(t)) return 272
    if (power >= 200) return 250
    if (power >= 140) return 230
    if (power >= 100) return 210
    return 190
  }
  if (make === 'Lexus') {
    if (/lc/.test(m)) return 270
    if (/\bF\b/.test(t) && power >= 300) return 275
    if (power >= 300) return 265
    if (power >= 200) return 250
    if (power >= 130) return 225
    return 200
  }
  if (make === 'Subaru') {
    if (/wrx sti/i.test(m)) return 255
    if (/wrx/i.test(m)) return 245
    if (/levorg/.test(m)) return 245
    if (/brz/.test(m)) return 226
    if (/solterra/.test(m)) return 160
    if (/liberty/.test(m)) return power >= 180 ? 235 : 210
    if (/forester|outback|xv|tribeca/.test(m)) return 195
    return 185
  }
  // Generic
  if (isPerf && power >= 300) return 275
  if (power >= 300) return 260
  if (power >= 200) return 250
  if (power >= 140) return 235
  if (power >= 100) return 215
  return 190
}

// ── Quarter mile from acceleration ───────────────────────────────────────────
function qmFromAccel(accel) {
  if (!accel) return null
  return `~${(Math.round((accel + 8.3) * 10) / 10).toFixed(1)} sec`
}

// ── Cargo lookup by make/model/year ──────────────────────────────────────────
const CARGO = {
  'Mercedes-Benz': {
    'A-Class':  y => y < 2005 ? 310 : y < 2013 ? 435 : y < 2019 ? 341 : 370,
    'C-Class':  y => y < 2015 ? 455 : 480,
    'E-Class':  y => y < 2016 ? 450 : 540,
    'GLA':      y => y < 2020 ? 421 : 454,
    'GLC':      y => y < 2022 ? 580 : 575,
    'GLE':      ()=> 630,
    'GLS':      ()=> 680,
    'CLA':      y => y < 2019 ? 470 : 460,
    'S-Class':  ()=> 510,
    'B-Class':  ()=> 488,
    'CLS':      ()=> 520,
    'SLK':      ()=> 275,
    'SL':       ()=> 348,
    'G-Class':  ()=> 682,
    'AMG GT':   ()=> 350,
    'GLB':      ()=> 570,
    'EQA':      ()=> 340,
    'EQB':      ()=> 495,
    'EQC':      ()=> 500,
    'EQE':      ()=> 430,
    'EQS':      ()=> 610,
  },
  'Subaru': {
    'Impreza':  ()=> 255,
    'WRX':      ()=> 340,
    'WRX STI':  ()=> 340,
    'BRZ':      ()=> 237,
    'Forester': ()=> 520,
    'Outback':  ()=> 512,
    'Liberty':  ()=> 430,
    'XV':       ()=> 340,
    'Levorg':   ()=> 522,
    'Tribeca':  ()=> 231,
    'Solterra': ()=> 441,
  },
  'Honda': {
    'Civic':    ()=> 265,
    'Accord':   ()=> 473,
    'CR-V':     y => y < 2017 ? 497 : 589,
    'HR-V':     y => y < 2022 ? 393 : 319,
    'Jazz':     ()=> 298,
    'NSX':      ()=> 110,
    'S2000':    ()=> 153,
    'Integra':  ()=> 278,
    'Prelude':  ()=> 280,
    'Odyssey':  ()=> 230,
    'Legend':   ()=> 470,
    'ZR-V':     ()=> 380,
    'e:NY1':    ()=> 346,
  },
  'Lexus': {
    'IS': ()=> 450, 'ES': ()=> 473, 'GS': ()=> 530, 'LS': ()=> 510,
    'UX': ()=> 320, 'NX': ()=> 475, 'RX': ()=> 580, 'GX': ()=> 329,
    'LX': ()=> 200, 'LC': ()=> 172, 'RC': ()=> 368, 'CT': ()=> 375,
    'RZ': ()=> 522,
  },
  'Audi': {
    'A1': ()=> 335, 'A2': ()=> 280, 'A3': ()=> 380, 'A4': ()=> 460, 'A5': ()=> 480,
    'A6': ()=> 530, 'A7': ()=> 535, 'A8': ()=> 530, 'S1': ()=> 335, 'S2': ()=> 350,
    'TT': ()=> 305, 'R8': ()=> 112,
    'Q2': ()=> 405, 'Q3': ()=> 530, 'Q3 Sportback': ()=> 430, 'Q4 e-tron': ()=> 520,
    'Q5': ()=> 620, 'Q5 Sportback': ()=> 510, 'Q6 e-tron': ()=> 526,
    'Q7': ()=> 770, 'Q8': ()=> 605, 'Q8 e-tron': ()=> 569,
    'e-tron': ()=> 660, 'e-tron GT': ()=> 405,
    'A4 allroad': ()=> 495, 'A6 allroad': ()=> 565,
    'RS2 Avant': ()=> 460, 'Cabriolet': ()=> 260, 'Quattro': ()=> 350,
    '80': ()=> 350, '90': ()=> 350, '100': ()=> 450, 'V8': ()=> 540, 'Coupe': ()=> 280,
    'S3': ()=> 380, 'RS3': ()=> 380,
    'S4': ()=> 480, 'RS4': ()=> 490,
    'S5': ()=> 455, 'RS5': ()=> 455,
    'S6': ()=> 530, 'RS6': ()=> 565,
    'S7': ()=> 535, 'RS7': ()=> 535,
    'S8': ()=> 510,
    'RS Q3': ()=> 530, 'SQ5': ()=> 550, 'SQ7': ()=> 770,
    'SQ8': ()=> 605, 'RS Q8': ()=> 605,
  },
  'Porsche': {
    '718': ()=> 125, '911': ()=> 132, 'Boxster': ()=> 130,
    'Cayenne': ()=> 770, 'Macan': ()=> 461,
    'Panamera': ()=> 495, 'Taycan': ()=> 407,
  },
  'Volkswagen': {
    'Golf': ()=> 380, 'Golf Wagon': ()=> 605, 'Polo': ()=> 351,
    'Passat': ()=> 586, 'Tiguan': ()=> 615, 'Touareg': ()=> 810,
    'Amarok': ()=> 1090, 'T-Roc': ()=> 445, 'Multivan': ()=> 469,
    'Beetle': ()=> 310, 'Jetta': ()=> 510, 'Scirocco': ()=> 312,
    'Arteon': ()=> 563, 'ID.3': ()=> 385, 'ID.4': ()=> 543, 'ID.5': ()=> 549,
  },
  'BMW': {
    '1 Series': ()=> 370, '2 Series': ()=> 390, '3 Series': ()=> 480,
    '4 Series': ()=> 440, '5 Series': ()=> 530, '7 Series': ()=> 515,
    'X1': ()=> 505, 'X2': ()=> 470, 'X3': ()=> 550, 'X4': ()=> 525,
    'X5': ()=> 650, 'X6': ()=> 580, 'X7': ()=> 750,
    'Z3': ()=> 210, 'Z4': ()=> 281, 'M2': ()=> 390, 'M4': ()=> 440,
    '6 Series': ()=> 420, '8 Series': ()=> 420, 'M8': ()=> 420,
    'i3': ()=> 260, 'i4': ()=> 470, 'i5': ()=> 490, 'i7': ()=> 500,
    'iX': ()=> 500, 'iX3': ()=> 510,
    '2 Series Active Tourer': ()=> 468, '2 Series Gran Tourer': ()=> 560,
  },
  'Toyota': {
    'Corolla': ()=> 270, 'Camry': ()=> 513, 'RAV4': ()=> 580,
    'Kluger': ()=> 487, 'HiLux': ()=> 1090, 'Prado': ()=> 921,
    'LandCruiser': ()=> 909, 'LandCruiser 70': ()=> 1090,
    'Yaris': ()=> 270, 'C-HR': ()=> 377, 'Prius': ()=> 502,
    'Supra': ()=> 290, '86': ()=> 197, 'GR86': ()=> 197,
    'Aurion': ()=> 510, 'BZ4X': ()=> 452, 'GR Corolla': ()=> 270,
  },
  'Mazda': {
    '2': ()=> 270, '3': ()=> 340, '6': ()=> 480,
    'CX-3': ()=> 350, 'CX-5': ()=> 522, 'CX-8': ()=> 258,
    'CX-9': ()=> 230, 'CX-60': ()=> 570, 'CX-90': ()=> 258,
    'MX-5': ()=> 130, 'MX-30': ()=> 350, 'BT-50': ()=> 1090,
    'RX-8': ()=> 290,
  },
  'Nissan': {
    'Patrol': ()=> 620, 'X-Trail': ()=> 585, 'Navara': ()=> 1090,
    'Qashqai': ()=> 430, 'Juke': ()=> 354, 'GT-R': ()=> 315,
    '370Z': ()=> 155, 'Leaf': ()=> 420, 'Ariya': ()=> 468,
    'Dualis': ()=> 400, 'Murano': ()=> 934,
  },
  'Hyundai': {
    'i30': ()=> 381, 'i30 N': ()=> 381, 'Tucson': ()=> 620,
    'Santa Fe': ()=> 703, 'Kona': ()=> 361, 'Ioniq 5': ()=> 527,
    'Ioniq 6': ()=> 401, 'Elantra': ()=> 458, 'Sonata': ()=> 510,
    'Palisade': ()=> 509, 'Staria': ()=> 651,
  },
  'Kia': {
    'Sportage': ()=> 587, 'Sorento': ()=> 721, 'Rio': ()=> 325,
    'Cerato': ()=> 454, 'Stinger': ()=> 406, 'EV6': ()=> 490,
    'Seltos': ()=> 433, 'Niro': ()=> 451, 'Carnival': ()=> 627,
  },
  'Mitsubishi': {
    'Outlander': ()=> 450, 'ASX': ()=> 393, 'Eclipse Cross': ()=> 448,
    'Pajero': ()=> 899, 'Triton': ()=> 1090, 'Lancer': ()=> 370,
  },
  'Suzuki': {
    'Swift': ()=> 204, 'Jimny': ()=> 85, 'Vitara': ()=> 375,
    'Grand Vitara': ()=> 450, 'Baleno': ()=> 268, 'S-Cross': ()=> 430, 'Ignis': ()=> 267,
  },
  'Land Rover': {
    'Defender': y => y >= 2020 ? 400 : 68,
    'Discovery': y => y >= 2017 ? 1231 : y >= 2010 ? 1069 : 1001,
    'Discovery Sport': ()=> 981,
    'Range Rover': y => y >= 2022 ? 818 : y >= 2013 ? 909 : 550,
    'Range Rover Sport': y => y >= 2022 ? 780 : y >= 2013 ? 784 : 710,
    'Range Rover Evoque': y => y >= 2019 ? 591 : 575,
    'Range Rover Velar': ()=> 673,
    'Freelander': ()=> 755,
  },
  'Volvo': {
    'S60': ()=> 442, 'S90': ()=> 500,
    'V40': ()=> 335, 'V60': ()=> 529, 'V90': ()=> 560,
    'XC40': ()=> 460, 'XC60': ()=> 505, 'XC90': ()=> 314,
    'C40 Recharge': ()=> 419, 'EX30': ()=> 318, 'EX90': ()=> 310,
  },
  'Tesla': {
    'Model 3': ()=> 594, 'Model Y': ()=> 1926,
    'Model S': ()=> 744, 'Model X': ()=> 2830,
    'Cybertruck': ()=> 1130,
  },
  'Isuzu': {
    'D-MAX': ()=> 1090,
    'MU-X': ()=> 621,
  },
  'MG': {
    'MG3': ()=> 285, 'MG4': ()=> 363, 'MG6': ()=> 380,
    'ZS': ()=> 448, 'ZS EV': ()=> 448, 'MG HS': ()=> 507,
    'Cyberster': ()=> 170,
  },
  'GWM': {
    'Haval H2': ()=> 390, 'Haval H6': ()=> 565, 'Haval H9': ()=> 1065,
    'Haval Jolion': ()=> 412,
    'Ute': ()=> 1090,
    'Tank 300': ()=> 550, 'Tank 500': ()=> 765,
  },
  'BYD': {
    'Atto 3': ()=> 440, 'Seal': ()=> 402, 'Dolphin': ()=> 345,
    'Shark': ()=> 1090, 'Sealion 6': ()=> 578, 'Sealion 7': ()=> 520,
  },
  'Genesis': {
    'G70': ()=> 290, 'G80': ()=> 430, 'G90': ()=> 449,
    'GV70': ()=> 690, 'GV80': ()=> 719,
  },
  'Kia': {
    'EV9': ()=> 333,
  },
  'Hyundai': {
    'Ioniq 5 N': ()=> 527,
  },
  'Mercedes-Benz': {
    'EQE SUV': ()=> 520, 'EQS SUV': ()=> 645,
  },
  'Volkswagen': {
    'ID.7': ()=> 532,
  },
}

// ── Main patch loop ───────────────────────────────────────────────────────────
const SUPPLEMENTS = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]

let totalFields = 0

for (const n of SUPPLEMENTS) {
  const file = path.join(DATA, `supplement${n}.json`)
  const data = JSON.parse(fs.readFileSync(file, 'utf8'))
  let added = 0

  for (const [key, spec] of Object.entries(data.specs)) {
    const [make, model, yearStr, trim] = key.split('|')
    const year = parseInt(yearStr)
    const isEV = /electric/i.test(spec.fuelType || '')

    // ── bodyStyle ────────────────────────────────────────────────────────────
    if (!spec.bodyStyle) {
      spec.bodyStyle = getBodyStyle(model, trim)
      added++
    }

    // ── fh / fx (skip EVs — range ≠ L/100km) ────────────────────────────────
    if (spec.fc != null && spec.fh == null && !isEV) {
      const r = fuelRatios(spec.fuelType)
      if (r) {
        spec.fh = Math.round(spec.fc * r.fh * 10) / 10
        spec.fx = Math.round(spec.fc * r.fx * 10) / 10
        added += 2
      }
    }

    // ── acceleration ─────────────────────────────────────────────────────────
    if (spec.acceleration == null && spec.power && spec.weight) {
      const a = estimateAccel(spec.power, spec.weight, spec.transmission, spec.fuelType)
      if (a) { spec.acceleration = a; added++ }
    }

    // ── topSpeed ─────────────────────────────────────────────────────────────
    if (spec.topSpeed == null && spec.power && !isEV) {
      const ts = estimateTopSpeed(make, model, spec.power, spec.fuelType, trim)
      if (ts) { spec.topSpeed = ts; added++ }
    }
    // EVs limited to 200 unless already set
    if (spec.topSpeed == null && isEV) { spec.topSpeed = 200; added++ }

    // ── cargo ────────────────────────────────────────────────────────────────
    if (spec.cargo == null) {
      const makeCargo = CARGO[make]
      if (makeCargo && makeCargo[model]) {
        spec.cargo = makeCargo[model](year)
        added++
      }
    }

    // ── quarterMile (from acceleration) ──────────────────────────────────────
    if (!spec.quarterMile && spec.acceleration && !isEV) {
      const qm = qmFromAccel(spec.acceleration)
      if (qm) { spec.quarterMile = qm; added++ }
    }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2))
  console.log(`s${n}: +${added} fields`)
  totalFields += added
}

console.log(`\nTotal fields added: ${totalFields}`)
