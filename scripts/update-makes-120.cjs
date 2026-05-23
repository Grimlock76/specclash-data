'use strict'
const fs = require('fs')
const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'))
const s120 = JSON.parse(fs.readFileSync('src/data/supplement120.json', 'utf8'))

const affected = new Set()
for (const key of Object.keys(s120.specs)) {
  const [make, model, year, trim] = key.split('|')
  affected.add(make)
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

for (const make of affected) {
  for (const model of Object.keys(makes[make])) {
    for (const year of Object.keys(makes[make][model])) {
      const t = makes[make][model][year]
      if (Array.isArray(t)) makes[make][model][year] = [...new Set(t)].sort()
    }
  }
}

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2))
console.log('makes.json updated with supplement120')
for (const make of [...affected].sort()) {
  let total = 0
  Object.values(makes[make]).forEach(modelYears => {
    Object.values(modelYears).forEach(t => { total += Array.isArray(t) ? t.length : 1 })
  })
  console.log(`  ${make}: ${total} trims`)
}
