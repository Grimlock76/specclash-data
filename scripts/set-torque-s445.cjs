'use strict'
// 2026-11-10: replace estimated (~) torque with published system figures.
// Sources: CarExpert / CarsGuide / carsales / WhichCar / 4X4 Australia price-and-spec
// pages and manufacturer releases. `keep: true` = maker publishes no single
// combined figure, so the value stays an estimate (~) but a better one.
const fs = require('fs'), path = require('path')
const DATA = path.join(__dirname, '..', 'src', 'data')
const raw = {}, files = {}
const load = f => { if (!files[f]) { raw[f] = fs.readFileSync(path.join(DATA, f), 'utf8'); files[f] = JSON.parse(raw[f]) } return files[f] }
const makes = load('makes.json'), makeSupps = load('makeSupps.json')
const CORE = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `supplement${n}.json`).concat(['holden.json', 'ford.json', 'supplement9.json'])

// [make, model regex, trim regex, power kW (null = any), Nm, keep-as-estimate?]
const RULES = [
  ['Kia', /^Sportage$/, /HEV/, 169, 350],
  ['Kia', /^Sorento$/, /HEV|PHEV/, null, 350],
  ['Kia', /^Carnival$/, /HEV/, 180, 366],
  ['Kia', /^Niro$/, /HEV/, 104, 265],
  ['Kia', /^EV6$/, /^GT$/, 430, 740],
  ['Kia', /^EV6$/, /AWD/, 239, 605],
  ['Kia', /^EV9$/, /AWD/, null, 700],
  ['Kia', /^EV9$/, /^GT$/, 374, 740],
  ['Kia', /^EV5$/, /AWD/, 230, 480],
  ['Hyundai', /^Kona$/, /Hybrid/, 104, 265],
  ['Hyundai', /^Ioniq 5$/, /AWD/, 239, 605],
  ['Hyundai', /^Ioniq 6$/, /AWD/, 239, 605],
  ['Hyundai', /^Ioniq 5 N$/, /./, 448, 740],
  ['Hyundai', /^Ioniq 6$/, /^N$/, 448, 740],
  ['Hyundai', /^Staria$/, /Hybrid/, 180, 367],
  ['Genesis', /^G80$/, /Electrified/, 272, 700],
  ['Genesis', /^GV70$/, /Electrified/, 360, 700],
  ['GWM', /^Tank 300$/, /Hybrid/, 255, 648],
  ['MG', /^MG3$/, /Hybrid\+/, 155, 425],
  ['MG', /^ZS$/, /Hybrid\+/, 158, 465],
  ['Mitsubishi', /^Outlander$/, /PHEV/, 185, 450],
  ['Mini', /^Countryman$/, /SE ALL4/, 230, 494],
  ['McLaren', /^Artura$/, /./, 515, 720],
  ['Porsche', /^Cayenne$/, /Turbo Electric/, 630, 1500],
  ['Porsche', /^Taycan$/, /Turbo GT/, 580, 1340],
  ['Volvo', /^XC90$/, /T8 Recharge/, 340, 709],
  ['Volvo', /^EX40$/, /^Single Motor$/, 175, 420],
  ['Volkswagen', /^(Tiguan|Tayron)$/, /eHybrid/, 150, 350],
  ['Lexus', /^RZ$/, /RZ450e/, 230, 435],
  ['Alfa Romeo', /^Tonale$/, /^(Intensa|Veloce|Sport Speciale)$/, null, 240],
  // No single published system figure — better estimates, still "~"
  ['Tesla', /^Model 3$/, /Long Range AWD/, 366, 590, true],          // CarsGuide lists 590; Tesla publishes none
  ['Nissan', /^X-Trail$/, /e-POWER/, 157, 525, true],                // 330 front + 195 rear motors
  ['Volkswagen', /^ID\.[45]$/, /GTX/, 250, 680, true],               // 134 front + 545 rear motors
  ['Toyota', /^(Corolla|C-HR)$/, /Hybrid/, 103, 142, true],          // engine torque; Toyota quotes no system Nm
  ['Toyota', /^(Corolla Cross|C-HR)$/, /Hybrid/, 146, 190, true],
  ['Toyota', /^(Camry|RAV4)$/, /./, 160, 221, true],
  ['Toyota', /^RAV4$/, /./, 163, 221, true],
  ['Toyota', /^Kluger$/, /Hybrid/, 184, 242, true],
  ['Lexus', /^UX$/, /UX(250|300)h/, null, 188, true],
  ['Lexus', /^NX$/, /NX350h/, 179, 239, true],
  ['Lexus', /^NX$/, /NX450h\+/, 227, 227, true],
  ['Lexus', /^LBX$/, /./, 100, 185, true],
]

let real = 0, kept = 0
const touched = new Set(), log = []
for (const [make, models] of Object.entries(makes)) {
  const rules = RULES.filter(r => r[0] === make)
  if (!rules.length) continue
  const order = CORE.concat((makeSupps[make] || []).slice().sort((a, b) => a - b).map(n => `supplement${n}.json`))
  const where = {}
  for (const f of order) for (const k of Object.keys(load(f).specs)) where[k] = f
  for (const [model, years] of Object.entries(models)) for (const [year, trims] of Object.entries(years)) for (const trim of trims) {
    const k = `${make}|${model}|${year}|${trim}`
    if (!where[k]) continue                      // exact-year entries only
    const s = files[where[k]].specs[k]
    if (s.en !== undefined || !(s.est || []).includes('torque')) continue   // only touch our own estimates
    const rule = rules.find(r => r[1].test(model) && r[2].test(trim) && (r[3] === null || Math.abs(s.power - r[3]) < 1))
    if (!rule) continue
    s.torque = rule[4]
    if (rule[5]) kept++
    else { s.est = s.est.filter(f => f !== 'torque'); if (!s.est.length) delete s.est; real++ }
    touched.add(where[k]); log.push(`${year} ${make} ${model} ${trim} → ${rule[5] ? '~' : ''}${rule[4]} Nm`)
  }
}
for (const f of touched) {
  const indent = /^\{\r?\n(\s+)/.test(raw[f]) ? raw[f].match(/^\{\r?\n(\s+)/)[1].length : undefined
  fs.writeFileSync(path.join(DATA, f), JSON.stringify(files[f], null, indent) + (raw[f].endsWith('\n') ? '\n' : ''))
}
console.log(`published figures set: ${real} · estimates improved: ${kept} · files: ${touched.size}`)
if (process.argv.includes('-v')) console.log(log.join('\n'))
