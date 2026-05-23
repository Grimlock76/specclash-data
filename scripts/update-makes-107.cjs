'use strict'
const fs = require('fs')
const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'))
const s107 = JSON.parse(fs.readFileSync('src/data/supplement107.json', 'utf8'))

for (const key of Object.keys(s107.specs)) {
  const [make, model, year, trim] = key.split('|')
  if (!makes[make]) makes[make] = {}
  if (!makes[make][model]) makes[make][model] = {}
  if (!makes[make][model][year]) makes[make][model][year] = []
  const arr = makes[make][model][year]
  if (!Array.isArray(arr)) {
    makes[make][model][year] = [arr, trim]
  } else if (!arr.includes(trim)) {
    arr.push(trim)
  }
}

// Sort trim arrays for Porsche
for (const model of Object.keys(makes['Porsche'])) {
  for (const year of Object.keys(makes['Porsche'][model])) {
    const t = makes['Porsche'][model][year]
    if (Array.isArray(t)) makes['Porsche'][model][year] = [...new Set(t)].sort()
  }
}

const utf8NoBom = new (require('util').TextEncoder)()
fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2))
console.log('makes.json updated')

// Count new Porsche trims
const porsche = makes['Porsche']
let total = 0
Object.values(porsche).forEach(modelYears => {
  Object.values(modelYears).forEach(t => {
    total += Array.isArray(t) ? t.length : 1
  })
})
console.log('Porsche total trims now:', total)
