#!/usr/bin/env node
const fs = require('fs')
const s39 = JSON.parse(fs.readFileSync('src/data/supplement39.json', 'utf8'))
const s40 = JSON.parse(fs.readFileSync('src/data/supplement40.json', 'utf8'))
const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'))

for (const supp of [s39, s40]) {
  for (const key of Object.keys(supp.specs)) {
    const parts = key.split('|')
    const make = parts[0], model = parts[1], year = parts[2]
    const trim = parts.slice(3).join('|')
    if (!makes[make]) makes[make] = {}
    if (!makes[make][model]) makes[make][model] = {}
    if (!makes[make][model][year]) makes[make][model][year] = []
    if (!makes[make][model][year].includes(trim)) makes[make][model][year].push(trim)
  }
}

// Sort years within each model
for (const make of Object.keys(makes)) {
  for (const model of Object.keys(makes[make])) {
    const sorted = {}
    for (const y of Object.keys(makes[make][model]).sort((a, b) => +a - +b)) {
      sorted[y] = makes[make][model][y]
    }
    makes[make][model] = sorted
  }
}

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2))

// Report
const newModels = {}
for (const supp of [s39, s40]) {
  for (const key of Object.keys(supp.specs)) {
    const [make, model] = key.split('|')
    const k = `${make}|${model}`
    newModels[k] = (newModels[k] || 0) + 1
  }
}
console.log('New entries by model:')
for (const [k, c] of Object.entries(newModels)) console.log(' ', k, ':', c)
console.log('BMW models now:', Object.keys(makes['BMW']).join(', '))
console.log('VW models now:', Object.keys(makes['Volkswagen']).join(', '))
