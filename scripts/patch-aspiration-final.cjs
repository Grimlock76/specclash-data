'use strict';
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');

// Targeted rules for the 63 remaining generic entries
const rules = [
  // PHEVs / Mild Hybrids with turbo engine
  [e => /twinpower.*electric|electric.*twinpower/i.test(e), 'IHI Single-Turbo PHEV'],
  [e => /mild hybrid/i.test(e), 'IHI Single-Turbo'],
  [e => /phev.*amg|amg.*phev|v8.*phev/i.test(e), 'IHI Twin-Turbo PHEV'],

  // supplement218 misses — Ferrari/Bentley/Rolls-Royce/Chevrolet
  [e => /f154cb/i.test(e), 'IHI Twin-Turbo'],
  [e => /n74b|v12 biturbo/i.test(e), 'BorgWarner Twin-Turbo'],
  [e => /w12 biturbo|w12.*tsi/i.test(e), 'IHI Twin-Turbo'],
  [e => /lt4.*supercharg|sc lt4|lt4.*v8.*sc/i.test(e), 'Eaton TVS2650 Supercharged'],

  // Chevrolet Trax / small Ecotec turbo
  [e => /luv ecotec|ecotec.*turbo/i.test(e), 'Garrett Single-Turbo'],

  // Fiat MultiAir / T-Jet
  [e => /multiair|t-jet|tjet/i.test(e), 'IHI Single-Turbo'],

  // VW BPY 2.0T FSI (old FSI, not TSI)
  [e => /bpy.*fsi|2\.0t fsi/i.test(e), 'IHI Single-Turbo'],

  // Mercedes diesel bare displacement strings ("2.9", "3.0", "1.9") — from supplement48
  // These are all Mercedes diesel (OM656, OM642, OM642 etc.)
  [(e, mk) => mk === 'Mercedes-Benz' && /^[0-9]\.[0-9]$/.test(e.trim()), 'BorgWarner VGT Diesel Turbo'],

  // Lexus LX500d — "3.3" bare string (V35A-FDS twin-turbo diesel)
  [(e, mk, mo) => mk === 'Lexus' && mo === 'LX' && /^3\.3$/.test(e.trim()), 'IHI Twin-Turbo Diesel'],

  // Porsche Cayenne diesel — "3.0" bare
  [(e, mk, mo) => mk === 'Porsche' && mo === 'Cayenne' && /^3\.0$/.test(e.trim()), 'BorgWarner VGT Diesel Turbo'],

  // Infiniti QX70 V9X diesel twin-turbo
  [e => /v9x/i.test(e), 'Garrett Twin-Turbo Diesel'],

  // Datsun/Nissan old diesels (SD33, LD28, LD22)
  [e => /sd33|ld28|ld22/i.test(e), 'Garrett Diesel Turbo'],
  [e => /3\.3l diesel inline|2\.8l diesel inline|2\.2l ld/i.test(e), 'Garrett Diesel Turbo'],
];

function applyRules(entry, make, model) {
  const e = entry.engine || entry.en || '';
  if (entry.aspiration !== 'Turbo' && entry.aspiration !== 'Supercharged') return false;
  for (const rule of rules) {
    const fn = rule[0];
    const val = rule[1];
    if (fn(e, make, model)) {
      entry.aspiration = val;
      return true;
    }
  }
  return false;
}

function walkAndPatch(obj, make, model) {
  if (!obj || typeof obj !== 'object') return 0;
  let count = 0;

  if (typeof obj.aspiration === 'string') {
    if (applyRules(obj, make, model)) count++;
    return count;
  }

  if (Array.isArray(obj)) {
    for (const item of obj) count += walkAndPatch(item, make, model);
    return count;
  }

  for (const [key, val] of Object.entries(obj)) {
    // For old-format nested objects, key components map to make/model
    const parts = key.split('|');
    const mk = parts[0] || make;
    const mo = parts[1] || model;
    count += walkAndPatch(val, mk, mo);
  }
  return count;
}

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json') && f !== 'config.json');
let totalFiles = 0, totalEntries = 0;

for (const file of files) {
  const fp = path.join(dataDir, file);
  let raw;
  try { raw = JSON.parse(fs.readFileSync(fp, 'utf8')); } catch (e) { continue; }

  const before = JSON.stringify(raw);
  const count = walkAndPatch(raw, '', '');

  if (count > 0) {
    fs.writeFileSync(fp, JSON.stringify(raw, null, 2));
    console.log(file + ': ' + count + ' entries updated');
    totalFiles++;
    totalEntries += count;
  }
}

console.log('\nDone: ' + totalEntries + ' entries across ' + totalFiles + ' files');
