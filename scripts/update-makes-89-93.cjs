'use strict';
const fs = require('fs');

const supplements = [89, 90, 91, 92, 93].map(n =>
  JSON.parse(fs.readFileSync(`src/data/supplement${n}.json`, 'utf8')).specs
);

const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'));

for (const specs of supplements) {
  for (const key of Object.keys(specs)) {
    const parts = key.split('|');
    if (parts.length !== 4) continue;
    const [make, model, year, trim] = parts;
    if (!makes[make]) makes[make] = {};
    if (!makes[make][model]) makes[make][model] = {};
    if (!makes[make][model][year]) makes[make][model][year] = [];
    if (!makes[make][model][year].includes(trim))
      makes[make][model][year].push(trim);
  }
}

for (const make of Object.keys(makes)) {
  for (const model of Object.keys(makes[make])) {
    const sorted = {};
    Object.keys(makes[make][model]).sort((a, b) => parseInt(a) - parseInt(b))
      .forEach(yr => { sorted[yr] = makes[make][model][yr]; });
    makes[make][model] = sorted;
  }
}

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2));
console.log('makes.json updated');
['Mini','SsangYong','Infiniti','Triumph','Austin-Healey','Rover','Oldsmobile','AMC','Lincoln'].forEach(m => {
  if (makes[m]) console.log(` ${m}: ${Object.keys(makes[m]).length} models`);
});
