const fs = require('fs');

const PRICES = {
  // ── RAM (s65) ──
  'RAM|1500 Classic|2019|Express':       '~$89,950',
  'RAM|1500 Classic|2019|Warlock':       '~$97,950',
  'RAM|1500 Classic|2019|Laramie Sport': '~$107,950',
  'RAM|1500|2019|Express':               '~$99,950',
  'RAM|1500|2019|Warlock':               '~$109,950',
  'RAM|1500|2019|Laramie':               '~$119,950',
  'RAM|1500|2019|Limited':               '~$134,950',
  'RAM|1500|2022|Express':               '~$104,950',
  'RAM|1500|2022|Warlock':               '~$114,950',
  'RAM|1500|2022|Laramie':               '~$124,950',
  'RAM|1500|2022|Limited':               '~$139,950',
  'RAM|1500|2024|Express':               '~$109,950',
  'RAM|1500|2024|Warlock':               '~$119,950',
  'RAM|1500|2024|Laramie':               '~$129,950',
  'RAM|1500|2024|Limited':               '~$144,950',
  'RAM|1500 TRX|2022|TRX':              '~$169,950',
  'RAM|1500 TRX|2024|TRX':              '~$179,950',
  'RAM|2500|2021|Laramie':               '~$149,950',
  'RAM|2500|2021|Longhorn':              '~$169,950',
  'RAM|2500|2024|Laramie':               '~$154,950',
  'RAM|2500|2024|Longhorn':              '~$174,950',

  // ── Alfa Romeo (s66) ──
  'Alfa Romeo|Giulia|2017|Ti':                '~$66,900',
  'Alfa Romeo|Giulia|2017|Veloce':            '~$79,900',
  'Alfa Romeo|Giulia|2017|Quadrifoglio':      '~$119,900',
  'Alfa Romeo|Giulia|2022|Ti':                '~$74,900',
  'Alfa Romeo|Giulia|2022|Veloce':            '~$84,900',
  'Alfa Romeo|Giulia|2022|Quadrifoglio':      '~$134,900',
  'Alfa Romeo|Giulia|2024|Ti':                '~$79,900',
  'Alfa Romeo|Giulia|2024|Veloce':            '~$89,900',
  'Alfa Romeo|Giulia|2024|Quadrifoglio':      '~$139,900',
  'Alfa Romeo|Stelvio|2017|Ti':               '~$72,900',
  'Alfa Romeo|Stelvio|2017|Veloce':           '~$84,900',
  'Alfa Romeo|Stelvio|2017|Quadrifoglio':     '~$124,900',
  'Alfa Romeo|Stelvio|2022|Ti':               '~$79,900',
  'Alfa Romeo|Stelvio|2022|Veloce':           '~$89,900',
  'Alfa Romeo|Stelvio|2022|Quadrifoglio':     '~$139,900',
  'Alfa Romeo|Stelvio|2024|Ti':               '~$84,900',
  'Alfa Romeo|Stelvio|2024|Veloce':           '~$94,900',
  'Alfa Romeo|Stelvio|2024|Quadrifoglio':     '~$144,900',
  'Alfa Romeo|Tonale|2023|Sprint':            '~$55,900',
  'Alfa Romeo|Tonale|2023|Veloce PHEV':       '~$72,900',
  'Alfa Romeo|Tonale|2025|Sprint':            '~$57,900',
  'Alfa Romeo|Tonale|2025|Veloce PHEV':       '~$74,900',

  // ── Jaguar F-Pace (s67) ──
  'Jaguar|F-Pace|2016|Prestige':             '~$62,980',
  'Jaguar|F-Pace|2016|R-Sport':              '~$71,980',
  'Jaguar|F-Pace|2016|Portfolio':            '~$87,980',
  'Jaguar|F-Pace|2016|SVR':                  '~$139,980',
  'Jaguar|F-Pace|2018|R-Sport':              '~$73,980',
  'Jaguar|F-Pace|2018|Portfolio':            '~$89,980',
  'Jaguar|F-Pace|2021|Prestige':             '~$77,490',
  'Jaguar|F-Pace|2021|R-Dynamic S':          '~$87,490',
  'Jaguar|F-Pace|2021|R-Dynamic SE':         '~$99,490',
  'Jaguar|F-Pace|2021|SVR':                  '~$151,490',
  'Jaguar|F-Pace|2024|Prestige':             '~$82,490',
  'Jaguar|F-Pace|2024|R-Dynamic S':          '~$92,490',
  'Jaguar|F-Pace|2024|R-Dynamic SE':         '~$104,490',
  'Jaguar|F-Pace|2024|SVR':                  '~$161,490',

  // ── Jaguar F-Type (s67) ──
  'Jaguar|F-Type|2013|V6 S':                 '~$89,450',
  'Jaguar|F-Type|2013|V8 R':                 '~$122,450',
  'Jaguar|F-Type|2017|V6 S':                 '~$93,450',
  'Jaguar|F-Type|2017|V8 R':                 '~$129,450',
  'Jaguar|F-Type|2020|P300':                 '~$102,990',
  'Jaguar|F-Type|2020|R':                    '~$161,990',
  'Jaguar|F-Type|2024|P300':                 '~$109,990',
  'Jaguar|F-Type|2024|R':                    '~$171,990',

  // ── Jaguar E-Pace (s67) ──
  'Jaguar|E-Pace|2017|P200':                 '~$47,980',
  'Jaguar|E-Pace|2017|P300':                 '~$62,980',
  'Jaguar|E-Pace|2021|P200':                 '~$52,490',
  'Jaguar|E-Pace|2021|P300':                 '~$67,490',
  'Jaguar|E-Pace|2024|P200':                 '~$56,490',
  'Jaguar|E-Pace|2024|P300':                 '~$71,490',

  // ── Jaguar I-Pace (s67) ──
  'Jaguar|I-Pace|2018|EV400 SE':             '~$119,450',
  'Jaguar|I-Pace|2021|EV400 SE':             '~$131,490',
  'Jaguar|I-Pace|2024|EV400 SE':             '~$137,490',

  // ── Jaguar XE (s67) ──
  'Jaguar|XE|2015|20d':                      '~$49,980',
  'Jaguar|XE|2015|P250':                     '~$54,980',
  'Jaguar|XE|2015|S':                        '~$64,980',
  'Jaguar|XE|2018|20d':                      '~$51,990',
  'Jaguar|XE|2018|P250':                     '~$57,990',
  'Jaguar|XE|2018|S':                        '~$69,990',

  // ── Jaguar XF (s67) ──
  'Jaguar|XF|2016|20d':                      '~$62,980',
  'Jaguar|XF|2016|P250':                     '~$64,980',
  'Jaguar|XF|2016|P300':                     '~$71,980',
  'Jaguar|XF|2016|S':                        '~$84,980',
  'Jaguar|XF|2019|20d':                      '~$67,990',
  'Jaguar|XF|2019|P250':                     '~$69,990',
  'Jaguar|XF|2019|P300':                     '~$76,990',
  'Jaguar|XF|2019|S':                        '~$89,990',

  // ── CUPRA (s68) ──
  'CUPRA|Formentor|2021|V1':                 '~$44,990',
  'CUPRA|Formentor|2021|VZ':                 '~$54,990',
  'CUPRA|Formentor|2021|VZ5':                '~$64,990',
  'CUPRA|Formentor|2024|V1':                 '~$47,490',
  'CUPRA|Formentor|2024|VZ':                 '~$57,490',
  'CUPRA|Formentor|2024|VZ5':                '~$67,990',
  'CUPRA|Born|2023|V1':                      '~$47,990',
  'CUPRA|Born|2023|VZ':                      '~$54,990',
  'CUPRA|Born|2025|V1':                      '~$49,990',
  'CUPRA|Born|2025|VZ':                      '~$56,990',

  // ── Polestar (s68) ──
  'Polestar|Polestar 2|2021|Long Range Single Motor': '~$59,990',
  'Polestar|Polestar 2|2021|Long Range Dual Motor':   '~$68,990',
  'Polestar|Polestar 2|2024|Long Range Single Motor': '~$64,990',
  'Polestar|Polestar 2|2024|Long Range Dual Motor':   '~$74,990',
  'Polestar|Polestar 3|2024|Long Range Dual Motor':   '~$112,990',
  'Polestar|Polestar 3|2024|Performance Pack':        '~$123,990',
  'Polestar|Polestar 4|2024|Long Range Single Motor': '~$74,990',
  'Polestar|Polestar 4|2024|Long Range Dual Motor':   '~$82,990',

  // ── Skoda Octavia (s69) ──
  'Skoda|Octavia|2014|Style':                '~$29,990',
  'Skoda|Octavia|2014|RS':                   '~$37,990',
  'Skoda|Octavia|2018|Style':                '~$32,990',
  'Skoda|Octavia|2018|RS':                   '~$39,990',
  'Skoda|Octavia|2021|Style':                '~$38,990',
  'Skoda|Octavia|2021|RS':                   '~$45,990',
  'Skoda|Octavia|2024|Style':                '~$41,990',
  'Skoda|Octavia|2024|RS':                   '~$48,990',

  // ── Skoda Superb (s69) ──
  'Skoda|Superb|2016|Style':                 '~$39,990',
  'Skoda|Superb|2016|Sportline':             '~$47,990',
  'Skoda|Superb|2020|Style':                 '~$44,990',
  'Skoda|Superb|2020|Sportline':             '~$52,990',
  'Skoda|Superb|2024|Style':                 '~$49,990',
  'Skoda|Superb|2024|Sportline':             '~$57,990',

  // ── Skoda Karoq (s69) ──
  'Skoda|Karoq|2018|Style':                  '~$32,990',
  'Skoda|Karoq|2018|Sportline':              '~$39,990',
  'Skoda|Karoq|2022|Style':                  '~$37,990',
  'Skoda|Karoq|2022|Sportline':              '~$44,990',
  'Skoda|Karoq|2024|Style':                  '~$38,990',
  'Skoda|Karoq|2024|Sportline':              '~$45,990',

  // ── Skoda Kodiaq (s69) ──
  'Skoda|Kodiaq|2017|Style':                 '~$38,990',
  'Skoda|Kodiaq|2017|Sportline':             '~$46,990',
  'Skoda|Kodiaq|2021|Style':                 '~$44,990',
  'Skoda|Kodiaq|2021|Sportline':             '~$52,990',

  // ── Skoda Enyaq (s69) ──
  'Skoda|Enyaq|2022|60':                     '~$59,990',
  'Skoda|Enyaq|2022|85':                     '~$69,990',
  'Skoda|Enyaq|2022|RS':                     '~$79,990',
  'Skoda|Enyaq|2024|60':                     '~$61,990',
  'Skoda|Enyaq|2024|85':                     '~$71,990',
  'Skoda|Enyaq|2024|RS':                     '~$81,990',

  // ── Skoda Fabia (s69) ──
  'Skoda|Fabia|2022|Style':                  '~$28,990',
  'Skoda|Fabia|2022|Monte Carlo':            '~$32,990',
  'Skoda|Fabia|2024|Style':                  '~$29,990',
  'Skoda|Fabia|2024|Monte Carlo':            '~$33,990',

  // ── LDV (s70) ──
  'LDV|T60|2018|S':                          '~$29,990',
  'LDV|T60|2018|Luxe':                       '~$34,990',
  'LDV|T60|2022|S':                          '~$32,990',
  'LDV|T60|2022|Luxe':                       '~$37,990',
  'LDV|T60|2024|S':                          '~$33,990',
  'LDV|T60|2024|Luxe':                       '~$38,990',
  'LDV|MIFA 9|2023|EV':                      '~$79,990',
  'LDV|MIFA 9|2025|EV':                      '~$79,990',

  // ── Chery (s70) ──
  'Chery|Omoda 5|2023|Turbo':               '~$25,990',
  'Chery|Omoda 5|2025|Turbo':               '~$26,990',
  'Chery|Tiggo 7 Pro|2023|Turbo':           '~$29,990',
  'Chery|Tiggo 7 Pro|2025|Turbo':           '~$31,990',
  'Chery|Tiggo 8 Pro|2023|Turbo':           '~$34,990',
  'Chery|Tiggo 8 Pro|2025|Turbo':           '~$36,990',

  // ── Renault (s70) ──
  'Renault|Clio|2020|Intens':               '~$29,990',
  'Renault|Clio|2020|RS Line':              '~$32,990',
  'Renault|Clio|2024|Intens':               '~$32,990',
  'Renault|Clio|2024|RS Line':              '~$35,990',
  'Renault|Megane E-Tech|2022|EV60':        '~$59,990',
  'Renault|Megane E-Tech|2024|EV60':        '~$59,990',
  'Renault|Koleos|2019|Life':               '~$34,990',
  'Renault|Koleos|2019|Intens':             '~$41,990',
  'Renault|Koleos|2023|Life':               '~$38,990',
  'Renault|Koleos|2023|Intens':             '~$45,990',
  'Renault|Koleos|2025|Life':               '~$39,990',
  'Renault|Koleos|2025|Intens':             '~$46,990',
  'Renault|Arkana|2023|RS Line E-Tech':     '~$44,990',
  'Renault|Arkana|2025|RS Line E-Tech':     '~$46,990',
};

let applied = 0, missing = [];

for (const n of [65, 66, 67, 68, 69, 70]) {
  const path = `src/data/supplement${n}.json`;
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  let changed = false;
  for (const key of Object.keys(data.specs)) {
    if (PRICES[key]) {
      data.specs[key].price = PRICES[key];
      applied++;
      changed = true;
    } else {
      missing.push(key);
    }
  }
  if (changed) fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
  console.log(`s${n}: ${Object.keys(data.specs).length} specs`);
}

console.log(`\nApplied: ${applied}`);
if (missing.length) {
  console.log(`Missing prices for ${missing.length} keys:`);
  missing.forEach(k => console.log(' ', k));
} else {
  console.log('All keys have prices.');
}
