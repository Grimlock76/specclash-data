const fs = require('fs');
const makes = require('./src/data/makes.json');
const supp  = require('./src/data/supplement71.json');

const l = makes['Lancia'];

// ── Fix Delta I: HF Turbo (1983-86) and HF 4WD (1986-87) ─────────────────
['1983','1984','1985','1986'].forEach(y => {
  if (!l['Delta'][y].includes('HF Turbo')) l['Delta'][y].push('HF Turbo');
});
['1986','1987'].forEach(y => {
  if (!l['Delta'][y].includes('HF 4WD')) l['Delta'][y].push('HF 4WD');
});

// ── Fix Fulvia: add 1.3S and 1.6 HF Lusso coupe variants ─────────────────
['1967','1968','1969','1970'].forEach(y => {
  if (l['Fulvia'][y] && !l['Fulvia'][y].includes('Coupe 1.3S'))
    l['Fulvia'][y].push('Coupe 1.3S');
});
['1970','1971','1972','1973','1974','1975','1976'].forEach(y => {
  if (l['Fulvia'][y] && !l['Fulvia'][y].includes('Coupe 1.6 HF Lusso'))
    l['Fulvia'][y].push('Coupe 1.6 HF Lusso');
});

// ── Trevi (1980-1984) ─────────────────────────────────────────────────────
l['Trevi'] = {
  '1980':['1300','1600'],
  '1981':['1300','1600','2000'],
  '1982':['1600','2000','VX'],
  '1983':['1600','2000','VX'],
  '1984':['2000','VX']
};

// ── Very early alphabet series ────────────────────────────────────────────
l['Alpha'] = {
  '1907':['Torpedo'],'1908':['Torpedo','Berlina'],
  '1909':['Torpedo','Berlina'],'1910':['Torpedo','Berlina']
};
// Disambiguate: Beta (1909) conflicts with Beta (1972)
l['Beta (1909)'] = {
  '1909':['Torpedo'],'1910':['Torpedo'],'1911':['Torpedo']
};
l['Gamma (1910)'] = {
  '1910':['Torpedo'],'1911':['Torpedo']
};
l['Delta (1911)'] = {
  '1911':['Torpedo'],'1912':['Torpedo']
};
l['Epsilon'] = {
  '1912':['Torpedo'],'1913':['Torpedo']
};
l['Zeta (1912)'] = {
  '1912':['Torpedo']
};
l['Eta'] = {
  '1913':['Torpedo'],'1914':['Torpedo']
};
l['Theta'] = {
  '1913':['Torpedo','Berlina'],'1914':['Torpedo','Berlina'],
  '1915':['Torpedo','Berlina'],'1916':['Torpedo','Berlina'],
  '1917':['Torpedo','Berlina'],'1918':['Torpedo','Berlina']
};
l['Kappa (1919)'] = {
  '1919':['Torpedo','Berlina'],'1920':['Torpedo','Berlina'],
  '1921':['Torpedo','Berlina'],'1922':['Torpedo','Berlina']
};
l['Dikappa'] = {
  '1921':['Torpedo','Berlina'],'1922':['Torpedo','Berlina']
};
l['Trikappa'] = {
  '1922':['Torpedo','Berlina'],'1923':['Torpedo','Berlina'],
  '1924':['Torpedo','Berlina'],'1925':['Torpedo','Berlina']
};

// ── Lambda (1922-1931) ────────────────────────────────────────────────────
l['Lambda'] = {
  '1922':['Torpedo','Berlina'],'1923':['Torpedo','Berlina'],
  '1924':['Torpedo','Berlina','Cabriolet'],'1925':['Torpedo','Berlina','Cabriolet'],
  '1926':['Torpedo','Berlina','Cabriolet'],'1927':['Torpedo','Berlina','Cabriolet'],
  '1928':['Torpedo','Berlina','Cabriolet'],'1929':['Torpedo','Berlina','Cabriolet'],
  '1930':['Torpedo','Berlina','Cabriolet'],'1931':['Torpedo','Berlina','Cabriolet']
};

// ── Dilambda (1928-1932) ──────────────────────────────────────────────────
l['Dilambda'] = {
  '1928':['Berlina','Cabriolet'],'1929':['Berlina','Cabriolet','Torpedo'],
  '1930':['Berlina','Cabriolet','Torpedo'],'1931':['Berlina','Cabriolet','Torpedo'],
  '1932':['Berlina','Cabriolet']
};

// ── Artena (1931-1936) ────────────────────────────────────────────────────
l['Artena'] = {
  '1931':['Berlina','Torpedo'],'1932':['Berlina','Torpedo'],
  '1933':['Berlina','Torpedo'],'1934':['Berlina'],
  '1935':['Berlina'],'1936':['Berlina']
};

// ── Astura (1931-1939) ────────────────────────────────────────────────────
l['Astura'] = {
  '1931':['Berlina','Cabriolet'],'1932':['Berlina','Cabriolet'],
  '1933':['Berlina','Cabriolet'],'1934':['Berlina','Cabriolet','Sport'],
  '1935':['Berlina','Cabriolet','Sport'],'1936':['Berlina','Cabriolet','Sport'],
  '1937':['Berlina','Cabriolet','Sport'],'1938':['Berlina','Cabriolet'],
  '1939':['Berlina','Cabriolet']
};

// ── Augusta (1933-1936) ───────────────────────────────────────────────────
l['Augusta'] = {
  '1933':['Berlina','Cabriolet'],'1934':['Berlina','Cabriolet'],
  '1935':['Berlina','Cabriolet'],'1936':['Berlina','Cabriolet']
};

// ── Specs ─────────────────────────────────────────────────────────────────
const newSpecs = {
  // Delta fixes
  'Lancia|Delta|1984|HF Turbo': { en:'1.6L Turbo DOHC inline-4', di:'1.6L', cy:'4', hp:'99 kW (132 hp)', tq:'206 Nm', tx:'5-speed manual', dr:'FWD', z1:'~8.5 sec', ts:'~200 km/h', wt:'980 kg', se:'5', ca:'~280 L', pr:'~£10,500' },
  'Lancia|Delta|1987|HF 4WD':   { en:'2.0L Turbo DOHC inline-4 4WD', di:'2.0L', cy:'4', hp:'140 kW (185 hp)', tq:'310 Nm', tx:'5-speed manual', dr:'AWD', z1:'~6.5 sec', ts:'~210 km/h', wt:'1,070 kg', se:'5', ca:'~280 L', pr:'~£16,000' },

  // Fulvia extra
  'Lancia|Fulvia|1968|Coupe 1.3S':         { en:'1.3L DOHC narrow-V4', di:'1.3L', cy:'4', hp:'67 kW (90 hp)', tq:'120 Nm', tx:'4-speed manual', dr:'FWD', z1:'~11.5 sec', ts:'~175 km/h', wt:'870 kg', se:'4', ca:'~240 L', pr:'~£1,800' },
  'Lancia|Fulvia|1972|Coupe 1.6 HF Lusso': { en:'1.6L DOHC narrow-V4', di:'1.6L', cy:'4', hp:'96 kW (128 hp)', tq:'152 Nm', tx:'5-speed manual', dr:'FWD', z1:'~8.8 sec', ts:'~188 km/h', wt:'895 kg', se:'4', ca:'~240 L', pr:'~£2,600' },

  // Trevi
  'Lancia|Trevi|1982|1600': { en:'1.6L DOHC inline-4', di:'1.6L', cy:'4', hp:'74 kW (99 hp)', tq:'137 Nm', tx:'5-speed manual', dr:'FWD', z1:'~10.5 sec', ts:'~178 km/h', wt:'1,050 kg', se:'4', ca:'~310 L', pr:'~£6,500' },
  'Lancia|Trevi|1982|2000': { en:'2.0L DOHC inline-4', di:'2.0L', cy:'4', hp:'96 kW (128 hp)', tq:'166 Nm', tx:'5-speed manual', dr:'FWD', z1:'~9.0 sec', ts:'~190 km/h', wt:'1,070 kg', se:'4', ca:'~310 L', pr:'~£8,000' },
  'Lancia|Trevi|1983|VX':   { en:'2.0L Volumex Supercharged DOHC inline-4', di:'2.0L', cy:'4', hp:'107 kW (144 hp)', tq:'230 Nm', tx:'5-speed manual', dr:'FWD', z1:'~8.0 sec', ts:'~205 km/h', wt:'1,100 kg', se:'4', ca:'~310 L', pr:'~£11,000' },

  // Alpha
  'Lancia|Alpha|1908|Torpedo': { en:'2.5L inline-4', di:'2.5L', cy:'4', hp:'18 kW (24 hp)', tq:'~80 Nm', tx:'3-speed manual', dr:'RWD', z1:'N/A', ts:'~80 km/h', wt:'~900 kg', se:'4', ca:'N/A', pr:'~£400' },

  // Theta
  'Lancia|Theta|1915|Torpedo': { en:'3.6L SOHC inline-4', di:'3.6L', cy:'4', hp:'35 kW (47 hp)', tq:'~130 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~90 km/h', wt:'~1,200 kg', se:'4', ca:'N/A', pr:'~£600' },
  'Lancia|Theta|1915|Berlina': { en:'3.6L SOHC inline-4', di:'3.6L', cy:'4', hp:'35 kW (47 hp)', tq:'~130 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~85 km/h', wt:'~1,300 kg', se:'4', ca:'N/A', pr:'~£700' },

  // Kappa (1919)
  'Lancia|Kappa (1919)|1920|Torpedo': { en:'4.9L SOHC V8', di:'4.9L', cy:'8', hp:'60 kW (80 hp)', tq:'~210 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~105 km/h', wt:'~1,500 kg', se:'4', ca:'N/A', pr:'~£900' },
  'Lancia|Kappa (1919)|1920|Berlina': { en:'4.9L SOHC V8', di:'4.9L', cy:'8', hp:'60 kW (80 hp)', tq:'~210 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~100 km/h', wt:'~1,600 kg', se:'4', ca:'N/A', pr:'~£1,000' },

  // Trikappa
  'Lancia|Trikappa|1923|Torpedo': { en:'4.6L SOHC V8', di:'4.6L', cy:'8', hp:'67 kW (90 hp)', tq:'~220 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~115 km/h', wt:'~1,550 kg', se:'4', ca:'N/A', pr:'~£1,100' },
  'Lancia|Trikappa|1923|Berlina': { en:'4.6L SOHC V8', di:'4.6L', cy:'8', hp:'67 kW (90 hp)', tq:'~220 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~110 km/h', wt:'~1,650 kg', se:'4', ca:'N/A', pr:'~£1,200' },

  // Lambda
  'Lancia|Lambda|1924|Torpedo':   { en:'2.1L SOHC narrow-V4', di:'2.1L', cy:'4', hp:'35 kW (47 hp)', tq:'~110 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~115 km/h', wt:'~1,100 kg', se:'4', ca:'N/A', pr:'~£700' },
  'Lancia|Lambda|1924|Berlina':   { en:'2.1L SOHC narrow-V4', di:'2.1L', cy:'4', hp:'35 kW (47 hp)', tq:'~110 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~110 km/h', wt:'~1,200 kg', se:'4', ca:'N/A', pr:'~£800' },
  'Lancia|Lambda|1928|Cabriolet': { en:'2.4L SOHC narrow-V4', di:'2.4L', cy:'4', hp:'44 kW (59 hp)', tq:'~125 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~120 km/h', wt:'~1,200 kg', se:'4', ca:'N/A', pr:'~£900' },

  // Dilambda
  'Lancia|Dilambda|1930|Berlina':   { en:'4.0L SOHC narrow-V8', di:'4.0L', cy:'8', hp:'75 kW (100 hp)', tq:'~220 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~130 km/h', wt:'~1,700 kg', se:'5', ca:'N/A', pr:'~£1,400' },
  'Lancia|Dilambda|1930|Cabriolet': { en:'4.0L SOHC narrow-V8', di:'4.0L', cy:'8', hp:'75 kW (100 hp)', tq:'~220 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~125 km/h', wt:'~1,800 kg', se:'4', ca:'N/A', pr:'~£1,600' },

  // Artena
  'Lancia|Artena|1932|Berlina': { en:'1.9L SOHC narrow-V4', di:'1.9L', cy:'4', hp:'36 kW (48 hp)', tq:'~100 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~115 km/h', wt:'~1,200 kg', se:'5', ca:'~300 L', pr:'~£650' },
  'Lancia|Artena|1932|Torpedo': { en:'1.9L SOHC narrow-V4', di:'1.9L', cy:'4', hp:'36 kW (48 hp)', tq:'~100 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~110 km/h', wt:'~1,150 kg', se:'4', ca:'N/A', pr:'~£700' },

  // Astura
  'Lancia|Astura|1933|Berlina':   { en:'2.6L SOHC narrow-V8', di:'2.6L', cy:'8', hp:'55 kW (74 hp)', tq:'~150 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~125 km/h', wt:'~1,500 kg', se:'5', ca:'N/A', pr:'~£1,000' },
  'Lancia|Astura|1933|Cabriolet': { en:'2.6L SOHC narrow-V8', di:'2.6L', cy:'8', hp:'55 kW (74 hp)', tq:'~150 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~120 km/h', wt:'~1,550 kg', se:'4', ca:'N/A', pr:'~£1,200' },
  'Lancia|Astura|1936|Sport':     { en:'2.97L SOHC narrow-V8', di:'3.0L', cy:'8', hp:'66 kW (88 hp)', tq:'~175 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~140 km/h', wt:'~1,450 kg', se:'2', ca:'N/A', pr:'~£1,800' },

  // Augusta
  'Lancia|Augusta|1934|Berlina':   { en:'1.2L SOHC narrow-V4', di:'1.2L', cy:'4', hp:'25 kW (33 hp)', tq:'~65 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~100 km/h', wt:'~870 kg', se:'4', ca:'~250 L', pr:'~£450' },
  'Lancia|Augusta|1934|Cabriolet': { en:'1.2L SOHC narrow-V4', di:'1.2L', cy:'4', hp:'25 kW (33 hp)', tq:'~65 Nm', tx:'4-speed manual', dr:'RWD', z1:'N/A', ts:'~98 km/h', wt:'~900 kg', se:'4', ca:'N/A', pr:'~£550' },
};

Object.assign(supp.specs, newSpecs);

fs.writeFileSync('./src/data/makes.json', JSON.stringify(makes, null, 2));
fs.writeFileSync('./src/data/supplement71.json', JSON.stringify(supp, null, 2));

const lanciaModels = Object.keys(makes['Lancia']);
console.log('Lancia models:', lanciaModels.length, '-', lanciaModels.join(', '));
console.log('Total specs:', Object.keys(supp.specs).length, '(added', Object.keys(newSpecs).length, ')');
