'use strict';
// Full-dataset plausibility & consistency sweep over every spec entry.
// Usage: node scripts/validate-specs.cjs [--max-examples N]
const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'src', 'data');
const MAXEX = +(process.argv[process.argv.indexOf('--max-examples') + 1] || 8);

const num = v => {
  if (v === null || v === undefined) return null;
  if (typeof v === 'number') return v;
  const m = String(v).replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
};
const price = v => {
  if (!v) return null;
  const m = String(v).replace(/,/g, '').match(/\$\s*(\d+(\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
};

// Normalize both entry formats to a common shape. Since the 2026-07-03
// fix-fuel-conventions migration, ALL files use fc=city, fh=highway,
// fx=combined (pattern A).
function norm(spec) {
  if (spec.en !== undefined || spec.hp !== undefined) {
    return {
      fmt: 'old', ev: /electric/i.test(spec.ft || ''),
      kw: num(spec.hp), hpStr: typeof spec.hp === 'string' ? spec.hp : null,
      tq: num(spec.tq), wt: num(spec.wt), z1: num(spec.z1), qm: num(spec.qm),
      ts: num(spec.ts), pr: price(spec.pr),
      fuelCity: num(spec.fc), fuelHwy: num(spec.fh), fuelComb: num(spec.fx),
      rawFc: num(spec.fc), rawFh: num(spec.fh), rawFx: num(spec.fx),
    };
  }
  return {
    fmt: 'new', ev: /electric/i.test(spec.fuelType || ''),
    kw: num(spec.power), hpStr: null,
    tq: num(spec.torque), wt: num(spec.weight), z1: num(spec.acceleration),
    qm: num(spec.quarterMile), ts: num(spec.topSpeed), pr: price(spec.price),
    fuelCity: num(spec.fc), fuelHwy: num(spec.fh), fuelComb: num(spec.fx),
    rawFc: num(spec.fc), rawFh: num(spec.fh), rawFx: num(spec.fx),
  };
}

const files = fs.readdirSync(DATA)
  .filter(f => /^supplement\d+\.json$/.test(f))
  .sort((a, b) => +a.match(/\d+/)[0] - +b.match(/\d+/)[0]);
files.unshift('holden.json', 'ford.json');

const issues = new Map(); // check -> [examples]
const counts = new Map();
const flag = (check, key, file, detail) => {
  counts.set(check, (counts.get(check) || 0) + 1);
  if (!issues.has(check)) issues.set(check, []);
  const a = issues.get(check);
  if (a.length < MAXEX) a.push(`${key}  [${file}]  ${detail}`);
};

const seen = new Map(); // full key -> {file, kw}
let total = 0, evs = 0, orderOldOk = 0, orderOldBad = 0, orderNewOk = 0, orderNewBad = 0;

for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(DATA, f)));
  const specs = j.specs || j;
  for (const key of Object.keys(specs)) {
    total++;
    const parts = key.split('|');
    const year = +parts[parts.length - 2] || null;
    const s = norm(specs[key]);
    if (s.ev) evs++;

    // duplicate keys across files with materially different power
    const prev = seen.get(key);
    if (prev && s.kw && prev.kw && Math.abs(s.kw - prev.kw) / prev.kw > 0.1 &&
        !/supplement9\.json|holden\.json|ford\.json/.test(f)) {
      flag('dup-key-conflicting-power', key, f, `${prev.kw} kW in ${prev.file} vs ${s.kw} kW`);
    }
    seen.set(key, { file: f, kw: s.kw });

    // range plausibility
    if (s.kw !== null && (s.kw < 15 || s.kw > 1500)) flag('power-implausible', key, f, `${s.kw} kW`);
    if (s.tq !== null && (s.tq < 40 || s.tq > 2500)) flag('torque-implausible', key, f, `${s.tq} Nm`);
    if (s.wt !== null && (s.wt < 400 || s.wt > 4200)) flag('weight-implausible', key, f, `${s.wt} kg`);
    if (s.z1 !== null && (s.z1 < 2.0 || s.z1 > 35)) flag('z1-implausible', key, f, `${s.z1} s`);
    if (s.ts !== null && (s.ts < 60 || s.ts > 500)) flag('topspeed-implausible', key, f, `${s.ts} km/h`);
    if (!s.ev) for (const [n, v] of [['city', s.fuelCity], ['hwy', s.fuelHwy], ['comb', s.fuelComb]]) {
      if (v !== null && (v < 2 || v > 25)) flag('fuel-implausible', key, f, `${n}=${v} L/100km`);
    }
    if (s.pr !== null && (s.pr < 900 || s.pr > 3000000)) flag('price-implausible', key, f, `$${s.pr}`);
    if (s.pr !== null && year && year >= 2000 && s.pr < 9000) flag('price-low-modern', key, f, `$${s.pr} (${year})`);
    if (s.pr !== null && year && year < 1985 && s.pr > 120000) flag('price-high-classic', key, f, `$${s.pr} (${year})`);

    // old-format kW↔hp conversion consistency ("hp gross" = intentional SAE-gross label)
    if (s.hpStr && !/gross/i.test(s.hpStr)) {
      const m = s.hpStr.replace(/,/g, '').match(/(\d+(\.\d+)?)\s*kW.*?(\d+(\.\d+)?)\s*hp/i);
      if (m) {
        const kw = +m[1], hp = +m[3];
        if (Math.abs(kw * 1.34102 - hp) / hp > 0.04) flag('kw-hp-mismatch', key, f, `${kw} kW vs ${hp} hp (expect ${(kw * 1.341).toFixed(0)})`);
      }
    }

    // fuel ordering (hwy <= comb <= city); hybrids can legitimately deviate
    if (!s.ev && !/hybrid|phev|hev\b/i.test(key) && s.rawFc !== null && s.rawFh !== null && s.rawFx !== null) {
      const ok = s.fuelHwy <= s.fuelComb + 0.101 && s.fuelComb <= s.fuelCity + 0.101;
      if (s.fmt === 'old') { ok ? orderOldOk++ : orderOldBad++; }
      else { ok ? orderNewOk++ : orderNewBad++; }
      if (!ok) flag(`fuel-order-bad-${s.fmt}`, key, f, `fc=${s.rawFc} fh=${s.rawFh} fx=${s.rawFx}`);
    }

    // physics cross-checks
    if (s.kw && s.wt && s.z1) {
      const pwt = s.kw / (s.wt / 1000);
      if (pwt > 190 && s.z1 > 9) flag('fast-car-slow-z1', key, f, `${pwt.toFixed(0)} kW/t but ${s.z1}s`);
      if (pwt < 55 && s.z1 < 8.5) flag('slow-car-fast-z1', key, f, `${pwt.toFixed(0)} kW/t but ${s.z1}s`);
    }
    if (s.kw && s.ts) {
      if (s.kw < 65 && s.ts > 215) flag('low-power-high-topspeed', key, f, `${s.kw} kW, ${s.ts} km/h`);
      if (s.kw > 330 && s.ts < 170) flag('high-power-low-topspeed', key, f, `${s.kw} kW, ${s.ts} km/h`);
    }
    if (s.z1 && s.qm) {
      const gap = s.qm - s.z1;
      if (gap < 4 || gap > 15) flag('qm-z1-gap-odd', key, f, `z1=${s.z1}s qm=${s.qm}s (gap ${gap.toFixed(1)})`);
    }
  }
}

console.log(`scanned ${total} entries across ${files.length} files (${evs} EVs)`);
console.log(`fuel ordering (hwy<=comb<=city): old-format ${orderOldOk} ok / ${orderOldBad} bad; new-format ${orderNewOk} ok / ${orderNewBad} bad`);
console.log('');
const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
if (!sorted.length) console.log('no issues found');
for (const [check, n] of sorted) {
  console.log(`${check}: ${n}`);
  for (const ex of issues.get(check)) console.log(`   ${ex}`);
}
