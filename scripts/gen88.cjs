'use strict';
const fs = require('fs');

const specs = {};
const M = 'Lotus';

// === ESPRIT S1 (1976-1978) ===
const es1 = {en:"Lotus 907 2.0L DOHC I4",di:"2.0L",cy:"4",hp:"101 kW (135 hp)",tq:"180 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.4 sec",ts:"~210 km/h",ft:"Petrol",wt:"880 kg",se:"2",fc:"12.5L",fh:"8.5L",fx:"11.0L"};
for (const yr of ["1976","1977","1978"]) {
  specs[`${M}|Esprit S1|${yr}|Standard`] = {...es1, pr:"~$25,000"};
}

// === ESPRIT S2 (1978-1981) ===
const es2 = {en:"Lotus 907 2.0L DOHC I4",di:"2.0L",cy:"4",hp:"101 kW (135 hp)",tq:"180 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.4 sec",ts:"~210 km/h",ft:"Petrol",wt:"900 kg",se:"2",fc:"12.5L",fh:"8.5L",fx:"11.0L"};
for (const yr of ["1978","1979","1980","1981"]) {
  specs[`${M}|Esprit S2|${yr}|Standard`] = {...es2, pr:"~$28,000"};
}

// === ESPRIT Turbo (1980-1987) ===
const esTurbo = {en:"2.2L DOHC I4 Turbo",di:"2.2L",cy:"4",hp:"160 kW (215 hp)",tq:"288 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.8 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,057 kg",se:"2",fc:"13.5L",fh:"9.0L",fx:"11.5L"};
for (const yr of ["1980","1981","1982","1983","1984","1985","1986","1987"]) {
  specs[`${M}|Esprit Turbo|${yr}|Standard`] = {...esTurbo, pr:"~$45,000"};
}

// === ESPRIT S3 (1981-1987) ===
const es3std = {en:"2.2L DOHC I4",di:"2.2L",cy:"4",hp:"112 kW (150 hp)",tq:"220 Nm",tx:"5-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~215 km/h",ft:"Petrol",wt:"940 kg",se:"2",fc:"12.0L",fh:"8.0L",fx:"10.5L"};
const es3hc = {...es3std, hp:"119 kW (160 hp)", tq:"230 Nm"};
for (const yr of ["1981","1982","1983","1984","1985","1986","1987"]) {
  specs[`${M}|Esprit S3|${yr}|Standard`] = {...es3std, pr:"~$35,000"};
  specs[`${M}|Esprit S3|${yr}|HC`] = {...es3hc, pr:"~$38,000"};
}

// === ESPRIT X180 (1988-1992) ===
const esx180 = {en:"2.2L DOHC I4 Turbo",di:"2.2L",cy:"4",hp:"160 kW (215 hp)",tq:"288 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.8 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,060 kg",se:"2",fc:"13.5L",fh:"9.0L",fx:"11.5L"};
const esx180se = {en:"2.2L DOHC I4 Turbo SE",di:"2.2L",cy:"4",hp:"195 kW (264 hp)",tq:"330 Nm",tx:"5-speed manual",dr:"RWD",z1:"~4.9 sec",ts:"~260 km/h",ft:"Petrol",wt:"1,060 kg",se:"2",fc:"14.0L",fh:"9.5L",fx:"12.0L"};
for (const yr of ["1988","1989","1990","1991","1992"]) {
  specs[`${M}|Esprit X180|${yr}|Standard`] = {...esx180, pr:"~$55,000"};
  if (parseInt(yr) >= 1989) {
    specs[`${M}|Esprit X180|${yr}|SE`] = {...esx180se, pr:"~$65,000"};
  }
}

// === ESPRIT S4 (1993-1996) ===
const es4 = {en:"2.2L DOHC I4 Turbo",di:"2.2L",cy:"4",hp:"172 kW (231 hp)",tq:"310 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.4 sec",ts:"~255 km/h",ft:"Petrol",wt:"1,070 kg",se:"2",fc:"13.5L",fh:"9.0L",fx:"11.5L"};
const es4s = {...es4, hp:"188 kW (252 hp)", tq:"330 Nm", z1:"~5.0 sec"};
for (const yr of ["1993","1994","1995","1996"]) {
  specs[`${M}|Esprit S4|${yr}|S4`] = {...es4, pr:"~$75,000"};
  if (parseInt(yr) >= 1994) {
    specs[`${M}|Esprit S4|${yr}|S4s`] = {...es4s, pr:"~$85,000"};
  }
}

// === ESPRIT V8 (1996-2004) ===
const esV8gt = {en:"3.5L twin-turbo V8",di:"3.5L",cy:"8",hp:"257 kW (344 hp)",tq:"400 Nm",tx:"5-speed manual",dr:"RWD",z1:"~4.5 sec",ts:"~280 km/h",ft:"Petrol",wt:"1,323 kg",se:"2",fc:"16.0L",fh:"11.0L",fx:"14.0L"};
const esV8gt3 = {...esV8gt, hp:"261 kW (350 hp)", tq:"410 Nm"};
const esV8sp350 = {...esV8gt3};
for (const yr of ["1996","1997","1998","1999","2000","2001","2002","2003","2004"]) {
  specs[`${M}|Esprit V8|${yr}|GT`] = {...esV8gt, pr:"~$95,000"};
  specs[`${M}|Esprit V8|${yr}|GT3`] = {...esV8gt3, pr:"~$108,000"};
  if (parseInt(yr) >= 2000) {
    specs[`${M}|Esprit V8|${yr}|Sport 350`] = {...esV8sp350, pr:"~$115,000"};
  }
}

// === ELISE S1 (1996-2001) ===
const elis1 = {en:"Rover K-series 1.8L DOHC I4",di:"1.8L",cy:"4",hp:"89 kW (120 hp)",tq:"165 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.7 sec",ts:"~198 km/h",ft:"Petrol",wt:"695 kg",se:"2",fc:"9.5L",fh:"6.5L",fx:"8.5L"};
const elis1sp = {...elis1, hp:"99 kW (133 hp)", tq:"175 Nm"};
for (const yr of ["1996","1997","1998","1999","2000","2001"]) {
  specs[`${M}|Elise S1|${yr}|Standard`] = {...elis1, pr:"~$60,000"};
  if (parseInt(yr) >= 1998) {
    specs[`${M}|Elise S1|${yr}|Sport`] = {...elis1sp, pr:"~$67,000"};
  }
}

// === ELISE S2 (2001-2011) ===
const elis2std = {en:"Rover 1.8L VVC I4",di:"1.8L",cy:"4",hp:"103 kW (138 hp)",tq:"180 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"726 kg",se:"2",fc:"9.0L",fh:"6.0L",fx:"8.0L"};
const elis2_111r = {en:"Toyota 1.8L DOHC I4",di:"1.8L",cy:"4",hp:"98 kW (132 hp)",tq:"175 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.8 sec",ts:"~196 km/h",ft:"Petrol",wt:"726 kg",se:"2",fc:"9.0L",fh:"6.0L",fx:"8.0L"};
const elis2sc = {en:"Toyota 1.8L Supercharged I4",di:"1.8L",cy:"4",hp:"136 kW (182 hp)",tq:"240 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.6 sec",ts:"~220 km/h",ft:"Petrol",wt:"762 kg",se:"2",fc:"10.0L",fh:"6.5L",fx:"8.5L"};
for (const yr of ["2001","2002","2003","2004"]) {
  specs[`${M}|Elise S2|${yr}|Standard`] = {...elis2std, pr:"~$65,000"};
}
for (const yr of ["2004","2005","2006","2007","2008","2009","2010","2011"]) {
  specs[`${M}|Elise S2|${yr}|111R`] = {...elis2_111r, pr:"~$68,000"};
  if (parseInt(yr) >= 2008) {
    specs[`${M}|Elise S2|${yr}|SC`] = {...elis2sc, pr:"~$82,000"};
  }
}

// === ELISE S3 (2011-2021) ===
const elis3std = {en:"Toyota 1.8L DOHC I4",di:"1.8L",cy:"4",hp:"97 kW (130 hp)",tq:"177 Nm",tx:"6-speed manual",dr:"RWD",z1:"~6.5 sec",ts:"~201 km/h",ft:"Petrol",wt:"876 kg",se:"2",fc:"9.5L",fh:"6.5L",fx:"8.5L"};
const elis3sp = {en:"Toyota 1.8L Supercharged I4",di:"1.8L",cy:"4",hp:"136 kW (182 hp)",tq:"240 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.6 sec",ts:"~220 km/h",ft:"Petrol",wt:"921 kg",se:"2",fc:"10.0L",fh:"6.5L",fx:"8.5L"};
const elis3cup = {en:"Toyota 1.8L Supercharged I4",di:"1.8L",cy:"4",hp:"138 kW (185 hp)",tq:"250 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.5 sec",ts:"~225 km/h",ft:"Petrol",wt:"896 kg",se:"2",fc:"10.0L",fh:"6.5L",fx:"8.5L"};
for (const yr of ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${M}|Elise S3|${yr}|Standard`] = {...elis3std, pr:"~$72,000"};
  specs[`${M}|Elise S3|${yr}|Sport 220`] = {...elis3sp, pr:"~$85,000"};
  specs[`${M}|Elise S3|${yr}|Cup 250`] = {...elis3cup, pr:"~$96,000"};
}

// === EXIGE S1 (2000-2002) ===
const exs1 = {en:"Rover 1.8L VVC I4",di:"1.8L",cy:"4",hp:"120 kW (160 hp)",tq:"185 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"760 kg",se:"2",fc:"10.0L",fh:"7.0L",fx:"9.0L"};
for (const yr of ["2000","2001","2002"]) {
  specs[`${M}|Exige S1|${yr}|Standard`] = {...exs1, pr:"~$70,000"};
}

// === EXIGE S2 (2004-2011) ===
const exs2std = {en:"Toyota 1.8L DOHC I4",di:"1.8L",cy:"4",hp:"98 kW (132 hp)",tq:"175 Nm",tx:"6-speed manual",dr:"RWD",z1:"~5.8 sec",ts:"~205 km/h",ft:"Petrol",wt:"875 kg",se:"2",fc:"9.5L",fh:"6.5L",fx:"8.5L"};
const exs2s = {en:"Toyota 1.6L Supercharged I4",di:"1.6L",cy:"4",hp:"143 kW (192 hp)",tq:"220 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.5 sec",ts:"~225 km/h",ft:"Petrol",wt:"895 kg",se:"2",fc:"10.5L",fh:"7.0L",fx:"9.0L"};
for (const yr of ["2004","2005","2006","2007","2008","2009","2010","2011"]) {
  specs[`${M}|Exige S2|${yr}|Standard`] = {...exs2std, pr:"~$75,000"};
  if (parseInt(yr) >= 2008) {
    specs[`${M}|Exige S2|${yr}|S`] = {...exs2s, pr:"~$92,000"};
  }
}

// === EXIGE S3 (2012-2021): Toyota 3.5L V6 Supercharged ===
const exs3s = {en:"Toyota 3.5L V6 Supercharged",di:"3.5L",cy:"6",hp:"258 kW (350 hp)",tq:"400 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.8 sec",ts:"~270 km/h",ft:"Petrol",wt:"1,054 kg",se:"2",fc:"13.5L",fh:"9.0L",fx:"11.5L"};
const exs3sp350 = {...exs3s, hp:"258 kW (350 hp)"};
const exs3sp380 = {...exs3s, hp:"283 kW (380 hp)", tq:"410 Nm", z1:"~3.7 sec"};
const exs3cup380 = {...exs3sp380, wt:"1,040 kg"};
const exs3cup430 = {en:"Toyota 3.5L V6 Supercharged",di:"3.5L",cy:"6",hp:"319 kW (430 hp)",tq:"440 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.5 sec",ts:"~280 km/h",ft:"Petrol",wt:"1,034 kg",se:"2",fc:"14.0L",fh:"9.5L",fx:"12.0L"};
for (const yr of ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${M}|Exige S3|${yr}|S`] = {...exs3s, pr:"~$95,000"};
  specs[`${M}|Exige S3|${yr}|Sport 350`] = {...exs3sp350, pr:"~$108,000"};
  if (parseInt(yr) >= 2016) {
    specs[`${M}|Exige S3|${yr}|Sport 380`] = {...exs3sp380, pr:"~$120,000"};
    specs[`${M}|Exige S3|${yr}|Cup 380`] = {...exs3cup380, pr:"~$125,000"};
    specs[`${M}|Exige S3|${yr}|Cup 430`] = {...exs3cup430, pr:"~$140,000"};
  }
}

// === EVORA (2009-2015): Toyota 3.5L V6 ===
const evora09 = {en:"Toyota 3.5L V6",di:"3.5L",cy:"6",hp:"205 kW (276 hp)",tq:"360 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.5 sec",ts:"~257 km/h",ft:"Petrol",wt:"1,382 kg",se:"4",fc:"12.5L",fh:"8.5L",fx:"11.0L"};
const evoraS = {en:"Toyota 3.5L V6 Supercharged",di:"3.5L",cy:"6",hp:"220 kW (295 hp)",tq:"400 Nm",tx:"6-speed manual",dr:"RWD",z1:"~5.1 sec",ts:"~265 km/h",ft:"Petrol",wt:"1,395 kg",se:"4",fc:"13.0L",fh:"8.5L",fx:"11.0L"};
const evoraS2 = {...evoraS, hp:"240 kW (321 hp)", tq:"410 Nm", z1:"~4.9 sec"};
for (const yr of ["2009","2010","2011","2012","2013"]) {
  specs[`${M}|Evora|${yr}|Standard`] = {...evora09, pr:"~$95,000"};
  if (parseInt(yr) >= 2011) {
    specs[`${M}|Evora|${yr}|S`] = {...evoraS, pr:"~$108,000"};
  }
}
for (const yr of ["2013","2014","2015"]) {
  specs[`${M}|Evora|${yr}|S2`] = {...evoraS2, pr:"~$115,000"};
}

// === EVORA 400 (2015-2021): 3.5L V6 Supercharged, 294kW ===
const ev400 = {en:"Toyota 3.5L V6 Supercharged",di:"3.5L",cy:"6",hp:"294 kW (400 hp)",tq:"450 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.1 sec",ts:"~300 km/h",ft:"Petrol",wt:"1,395 kg",se:"4",fc:"13.5L",fh:"9.0L",fx:"11.5L"};
const ev410sp = {...ev400, hp:"302 kW (410 hp)", tq:"455 Nm", z1:"~4.0 sec"};
const ev430gt = {en:"Toyota 3.5L V6 Supercharged",di:"3.5L",cy:"6",hp:"317 kW (430 hp)",tq:"460 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.8 sec",ts:"~302 km/h",ft:"Petrol",wt:"1,388 kg",se:"4",fc:"13.5L",fh:"9.0L",fx:"11.5L"};
for (const yr of ["2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${M}|Evora 400|${yr}|Standard`] = {...ev400, pr:"~$130,000"};
  if (parseInt(yr) >= 2017) {
    specs[`${M}|Evora 400|${yr}|Sport 410`] = {...ev410sp, pr:"~$145,000"};
  }
  if (parseInt(yr) >= 2018) {
    specs[`${M}|Evora 400|${yr}|GT430`] = {...ev430gt, pr:"~$165,000"};
  }
}

// === EMIRA (2021-2026): V6 Supercharged or AMG I4 Turbo, 265kW ===
const emiraV6fe = {en:"Toyota 3.5L V6 Supercharged",di:"3.5L",cy:"6",hp:"265 kW (355 hp)",tq:"420 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.3 sec",ts:"~290 km/h",ft:"Petrol",wt:"1,405 kg",se:"2",fc:"13.0L",fh:"8.5L",fx:"11.0L"};
const emiraV6 = {...emiraV6fe};
const emiraI4 = {en:"AMG 2.0L Turbo I4",di:"2.0L",cy:"4",hp:"265 kW (360 hp)",tq:"430 Nm",tx:"8-speed dual-clutch",dr:"RWD",z1:"~4.5 sec",ts:"~290 km/h",ft:"Petrol",wt:"1,405 kg",se:"2",fc:"11.0L",fh:"7.5L",fx:"9.5L"};
for (const yr of ["2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|Emira|${yr}|V6 First Edition`] = {...emiraV6fe, pr:"~$130,000"};
  specs[`${M}|Emira|${yr}|V6`] = {...emiraV6, pr:"~$120,000"};
  if (parseInt(yr) >= 2023) {
    specs[`${M}|Emira|${yr}|I4 AMG`] = {...emiraI4, pr:"~$125,000"};
  }
}

// === ELETRE (2023-2026): Electric SUV ===
const eletreStd = {en:"Dual electric motors AWD",di:"N/A",cy:"0",hp:"450 kW (603 hp)",tq:"710 Nm",tx:"Single-speed automatic",dr:"AWD",z1:"~4.5 sec",ts:"~250 km/h",fc:"600 km (WLTP)",ft:"Electric",wt:"2,241 kg",se:"5"};
const eletreS = {...eletreStd, hp:"450 kW (603 hp)"};
const eletreR = {en:"Dual electric motors AWD",di:"N/A",cy:"0",hp:"675 kW (905 hp)",tq:"985 Nm",tx:"Single-speed automatic",dr:"AWD",z1:"~2.95 sec",ts:"~250 km/h",fc:"500 km (WLTP)",ft:"Electric",wt:"2,241 kg",se:"5"};
for (const yr of ["2023","2024","2025","2026"]) {
  specs[`${M}|Eletre|${yr}|Standard`] = {...eletreStd, pr:"~$180,000"};
  specs[`${M}|Eletre|${yr}|S`] = {...eletreS, pr:"~$200,000"};
  specs[`${M}|Eletre|${yr}|R`] = {...eletreR, pr:"~$250,000"};
}

// === EMEYA (2024-2026): Electric sports sedan ===
const emeyaStd = {en:"Dual electric motors AWD",di:"N/A",cy:"0",hp:"450 kW (603 hp)",tq:"710 Nm",tx:"Single-speed automatic",dr:"AWD",z1:"~4.2 sec",ts:"~250 km/h",fc:"610 km (WLTP)",ft:"Electric",wt:"2,280 kg",se:"5"};
const emeyaS = {...emeyaStd};
const emeyaR = {en:"Dual electric motors AWD",di:"N/A",cy:"0",hp:"639 kW (857 hp)",tq:"985 Nm",tx:"Single-speed automatic",dr:"AWD",z1:"~2.78 sec",ts:"~256 km/h",fc:"560 km (WLTP)",ft:"Electric",wt:"2,280 kg",se:"5"};
for (const yr of ["2024","2025","2026"]) {
  specs[`${M}|Emeya|${yr}|Standard`] = {...emeyaStd, pr:"~$185,000"};
  specs[`${M}|Emeya|${yr}|S`] = {...emeyaS, pr:"~$210,000"};
  specs[`${M}|Emeya|${yr}|R`] = {...emeyaR, pr:"~$260,000"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement88.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement88.json written — ${count} entries`);
