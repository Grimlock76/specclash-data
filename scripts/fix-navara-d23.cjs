'use strict';
// Navara D23 (2015–2025) was stored with the old D40 YD25 engine. Carsales
// variant pages (2015/2018/2023 ST, ST-X, PRO-4X): YS23DDTT 2.3L twin-turbo
// diesel, 140 kW @ 3750 / 450 Nm @ 1500–2500, 3,500 kg braked, 80 L tank.
// 2023 4x4 manual dual-cab figures are exact (weight, fuel, price). Other
// years keep their existing figures, which are marked "~" estimates.
// PRO-4X only arrived with the 2021 facelift, so 2015–2020 PRO-4X is dropped.
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'src', 'data');
const load = f => { const p = path.join(DATA, f); const raw = fs.readFileSync(p, 'utf8'); return { p, raw, o: JSON.parse(raw) } };
const save = ({ p, raw, o }) => fs.writeFileSync(p, JSON.stringify(o, null, 2) + (raw.endsWith('\n') ? '\n' : ''));

const EXACT_2023 = {
  ST: { tx: '6-speed manual', fc: '8.5L', fh: '6.6L', fx: '7.3L', wt: '2,053 kg', pr: '$52,455', pl: '1,097 kg', gc: '220 mm' },
  'ST-X': { tx: '6-speed manual', fc: '8.5L', fh: null, fx: '7.3L', wt: '2,134 kg', pr: '$55,945', pl: '1,016 kg', gc: '224 mm' },
  'PRO-4X': { tx: '6-speed manual', fc: '8.6L', fh: '6.9L', fx: '7.5L', wt: '2,137 kg', pr: '$58,905', pl: '1,013 kg', gc: '220 mm' },
};
let n = 0;
for (const f of ['supplement24.json', 'supplement28.json', 'supplement213.json']) {
  const F = load(f);
  for (const key of Object.keys(F.o.specs)) {
    const m = key.match(/^Nissan\|Navara\|(\d{4})\|(.+)$/); if (!m) continue;
    const yr = +m[1], trim = m[2];
    if (yr < 2015 || yr > 2025 || !['ST', 'ST-X', 'PRO-4X'].includes(trim)) continue;
    if (trim === 'PRO-4X' && yr < 2021) { delete F.o.specs[key]; n++; continue; }
    const s = F.o.specs[key];
    if (s.en === undefined) { delete F.o.specs[key]; n++; continue; } // stray new-format dup (supplement213)
    Object.assign(s, {
      en: 'YS23DDTT 2.3L DOHC inline-4 twin-turbo diesel', di: '2.3L', cy: '4',
      hp: '140 kW (188 hp)', tq: '450 Nm', aspiration: 'Twin-Turbo', tw: '3,500 kg', tk: '80 L',
    });
    if (yr === 2023) Object.assign(s, Object.fromEntries(Object.entries(EXACT_2023[trim]).filter(([, v]) => v)), { dr: '4WD' });
    n++;
  }
  save(F);
}
const makes = load('makes.json');
for (let y = 2015; y <= 2020; y++) makes.o.Nissan.Navara[String(y)] = makes.o.Nissan.Navara[String(y)].filter(t => t !== 'PRO-4X');
fs.writeFileSync(makes.p, JSON.stringify(makes.o, null, 2) + '\n');
console.log('touched', n);
