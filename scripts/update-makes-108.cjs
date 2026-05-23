'use strict'
const fs = require('fs')
const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'))
const s108 = JSON.parse(fs.readFileSync('src/data/supplement108.json', 'utf8'))

for (const key of Object.keys(s108.specs)) {
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

for (const model of Object.keys(makes['Honda'])) {
  for (const year of Object.keys(makes['Honda'][model])) {
    const t = makes['Honda'][model][year]
    if (Array.isArray(t)) makes['Honda'][model][year] = [...new Set(t)].sort()
  }
}

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2))
console.log('makes.json updated with Honda supplement108')

const honda = makes['Honda']
let total = 0
Object.values(honda).forEach(modelYears => {
  Object.values(modelYears).forEach(t => {
    total += Array.isArray(t) ? t.length : 1
  })
})
console.log('Honda total trims now:', total)
