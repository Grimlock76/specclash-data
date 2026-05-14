const fs = require('fs');

const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'));

const supplements = [38, 42, 43, 44, 45, 46, 47, 48].map(n => {
  const data = JSON.parse(fs.readFileSync(`src/data/supplement${n}.json`, 'utf8'));
  return data.specs;
});

let added = 0;
for (const specs of supplements) {
  for (const key of Object.keys(specs)) {
    const parts = key.split('|');
    if (parts.length !== 4) continue;
    const [make, model, year, trim] = parts;
    if (!make || !model || !year || !trim) continue;
    
    if (!makes[make]) makes[make] = {};
    if (!makes[make][model]) makes[make][model] = {};
    if (!makes[make][model][year]) makes[make][model][year] = [];
    
    if (!makes[make][model][year].includes(trim)) {
      makes[make][model][year].push(trim);
      added++;
    }
  }
}

// Count total trims
let total = 0;
for (const make of Object.values(makes))
  for (const model of Object.values(make))
    for (const trims of Object.values(model))
      total += trims.length;

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2));
console.log(`Added ${added} trims. Total: ${total}. Makes: ${Object.keys(makes).join(', ')}`);
