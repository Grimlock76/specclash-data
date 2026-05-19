'use strict';
const fs = require('fs');

const specs = {};
const M = 'Aston Martin';

// === DB4 (1958-1963) ===
const db4std = {en:"3.7L twin-cam I6",di:"3.7L",cy:"6",hp:"191 kW (256 hp)",tq:"325 Nm",tx:"4-speed manual",dr:"RWD",z1:"~8.5 sec",ts:"~225 km/h",ft:"Petrol",wt:"1,225 kg",se:"4",fc:"18.0L",fh:"12.0L",fx:"15.0L"};
const db4gt = {...db4std, hp:"211 kW (283 hp)", tq:"340 Nm", z1:"~7.5 sec"};
for (const yr of ["1958","1959","1960","1961","1962","1963"]) {
  specs[`${M}|DB4|${yr}|Standard`] = {...db4std, pr:"~$12,000"};
  if (parseInt(yr) >= 1962) {
    specs[`${M}|DB4|${yr}|GT`] = {...db4gt, pr:"~$16,000"};
  }
}

// === DB5 (1963-1965) ===
const db5std = {en:"3.9L twin-cam I6",di:"3.9L",cy:"6",hp:"213 kW (286 hp)",tq:"383 Nm",tx:"5-speed ZF manual",dr:"RWD",z1:"~7.1 sec",ts:"~232 km/h",ft:"Petrol",wt:"1,476 kg",se:"4",fc:"16.5L",fh:"11.0L",fx:"14.0L"};
const db5vant = {...db5std, hp:"231 kW (310 hp)", tq:"400 Nm", z1:"~6.8 sec"};
for (const yr of ["1963","1964","1965"]) {
  specs[`${M}|DB5|${yr}|Standard`] = {...db5std, pr:"~$15,000"};
  specs[`${M}|DB5|${yr}|Vantage`] = {...db5vant, pr:"~$18,000"};
}

// === DB6 (1965-1971) ===
const db6std = {en:"3.9L twin-cam I6",di:"3.9L",cy:"6",hp:"213 kW (286 hp)",tq:"383 Nm",tx:"5-speed ZF manual",dr:"RWD",z1:"~7.5 sec",ts:"~242 km/h",ft:"Petrol",wt:"1,497 kg",se:"4",fc:"16.5L",fh:"11.0L",fx:"14.0L"};
const db6vant = {...db6std, hp:"239 kW (321 hp)", tq:"400 Nm", z1:"~7.0 sec"};
const db6vol = {...db6std, wt:"1,600 kg"}; // convertible heavier
for (const yr of ["1965","1966","1967","1968","1969","1970","1971"]) {
  specs[`${M}|DB6|${yr}|Standard`] = {...db6std, pr:"~$16,000"};
  specs[`${M}|DB6|${yr}|Vantage`] = {...db6vant, pr:"~$19,000"};
  if (parseInt(yr) >= 1966 && parseInt(yr) <= 1969) {
    specs[`${M}|DB6|${yr}|Volante`] = {...db6vol, pr:"~$22,000"};
  }
}

// === DB7 (1994-1999): 3.2L supercharged I6 ===
const db7std = {en:"3.2L supercharged I6",di:"3.2L",cy:"6",hp:"246 kW (330 hp)",tq:"490 Nm",tx:"6-speed manual",dr:"RWD",z1:"~5.7 sec",ts:"~266 km/h",ft:"Petrol",wt:"1,760 kg",se:"4",fc:"14.5L",fh:"9.5L",fx:"12.5L"};
for (const yr of ["1994","1995","1996","1997","1998","1999"]) {
  specs[`${M}|DB7|${yr}|Standard`] = {...db7std, pr:"~$180,000"};
  if (parseInt(yr) >= 1996) {
    specs[`${M}|DB7|${yr}|Volante`] = {...db7std, wt:"1,820 kg", pr:"~$200,000"};
  }
}

// === DB7 Vantage (1999-2003): 5.9L V12 ===
const db7vant = {en:"5.9L DOHC V12",di:"5.9L",cy:"12",hp:"313 kW (420 hp)",tq:"540 Nm",tx:"6-speed manual",dr:"RWD",z1:"~5.0 sec",ts:"~295 km/h",ft:"Petrol",wt:"1,875 kg",se:"4",fc:"19.0L",fh:"12.5L",fx:"16.0L"};
for (const yr of ["1999","2000","2001","2002","2003"]) {
  specs[`${M}|DB7 Vantage|${yr}|Vantage`] = {...db7vant, pr:"~$240,000"};
  specs[`${M}|DB7 Vantage|${yr}|Vantage Volante`] = {...db7vant, wt:"1,950 kg", pr:"~$265,000"};
}

// === DB9 (2004-2012): 5.9L DOHC V12, 352kW ===
const db9_04 = {en:"5.9L DOHC V12",di:"5.9L",cy:"12",hp:"352 kW (472 hp)",tq:"570 Nm",tx:"6-speed Touchtronic auto",dr:"RWD",z1:"~4.9 sec",ts:"~300 km/h",ft:"Petrol",wt:"1,710 kg",se:"4",fc:"18.0L",fh:"12.0L",fx:"15.5L"};
for (const yr of ["2004","2005","2006","2007","2008","2009","2010","2011","2012"]) {
  specs[`${M}|DB9|${yr}|Standard`] = {...db9_04, pr:"~$290,000"};
  specs[`${M}|DB9|${yr}|Volante`] = {...db9_04, wt:"1,785 kg", pr:"~$315,000"};
}

// === DB9 (2012-2016): refreshed 388kW ===
const db9_12 = {en:"5.9L DOHC V12",di:"5.9L",cy:"12",hp:"388 kW (520 hp)",tq:"620 Nm",tx:"6-speed Touchtronic auto",dr:"RWD",z1:"~4.6 sec",ts:"~306 km/h",ft:"Petrol",wt:"1,785 kg",se:"4",fc:"18.0L",fh:"12.0L",fx:"15.5L"};
for (const yr of ["2012","2013","2014","2015","2016"]) {
  specs[`${M}|DB9|${yr}|Standard`] = {...db9_12, pr:"~$310,000"};
  specs[`${M}|DB9|${yr}|Volante`] = {...db9_12, wt:"1,850 kg", pr:"~$335,000"};
  specs[`${M}|DB9|${yr}|Carbon Edition`] = {...db9_12, pr:"~$330,000"};
}

// === DB11 (2016-2022): 5.2L twin-turbo V12, 447kW or V8 AMG 375kW ===
const db11v12 = {en:"5.2L twin-turbo V12",di:"5.2L",cy:"12",hp:"447 kW (600 hp)",tq:"700 Nm",tx:"8-speed ZF auto",dr:"RWD",z1:"~3.9 sec",ts:"~322 km/h",ft:"Petrol",wt:"1,760 kg",se:"4",fc:"15.5L",fh:"10.0L",fx:"13.0L"};
const db11amr = {...db11v12, hp:"447 kW (600 hp)", tq:"700 Nm"};
const db11v8 = {en:"4.0L AMG twin-turbo V8",di:"4.0L",cy:"8",hp:"375 kW (503 hp)",tq:"675 Nm",tx:"8-speed ZF auto",dr:"RWD",z1:"~4.0 sec",ts:"~301 km/h",ft:"Petrol",wt:"1,750 kg",se:"4",fc:"13.5L",fh:"8.5L",fx:"11.5L"};
for (const yr of ["2016","2017","2018","2019","2020","2021","2022"]) {
  specs[`${M}|DB11|${yr}|V12`] = {...db11v12, pr:"~$380,000"};
  specs[`${M}|DB11|${yr}|V12 AMR`] = {...db11amr, pr:"~$420,000"};
  if (parseInt(yr) >= 2017) {
    specs[`${M}|DB11|${yr}|V8`] = {...db11v8, pr:"~$305,000"};
  }
}

// === DB12 (2023-2026): 4.0L twin-turbo V8, 510kW ===
const db12std = {en:"4.0L AMG twin-turbo V8",di:"4.0L",cy:"8",hp:"510 kW (680 hp)",tq:"800 Nm",tx:"8-speed ZF auto",dr:"RWD",z1:"~3.5 sec",ts:"~325 km/h",ft:"Petrol",wt:"1,750 kg",se:"4",fc:"13.5L",fh:"9.0L",fx:"12.0L"};
for (const yr of ["2023","2024","2025","2026"]) {
  specs[`${M}|DB12|${yr}|Standard`] = {...db12std, pr:"~$360,000"};
  specs[`${M}|DB12|${yr}|Volante`] = {...db12std, wt:"1,810 kg", pr:"~$395,000"};
}

// === VANTAGE V8 (2005-2008): 4.3L V8 ===
const vant43 = {en:"4.3L DOHC V8",di:"4.3L",cy:"8",hp:"283 kW (380 hp)",tq:"410 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.8 sec",ts:"~280 km/h",ft:"Petrol",wt:"1,630 kg",se:"2",fc:"15.5L",fh:"10.5L",fx:"13.5L"};
for (const yr of ["2005","2006","2007","2008"]) {
  specs[`${M}|Vantage V8|${yr}|V8`] = {...vant43, pr:"~$155,000"};
}

// === VANTAGE V8 (2008-2012): 4.7L V8 ===
const vant47 = {en:"4.7L DOHC V8",di:"4.7L",cy:"8",hp:"313 kW (420 hp)",tq:"470 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.7 sec",ts:"~290 km/h",ft:"Petrol",wt:"1,630 kg",se:"2",fc:"16.0L",fh:"10.5L",fx:"14.0L"};
const vant47s = {...vant47, hp:"321 kW (430 hp)", tq:"490 Nm", z1:"~4.5 sec"};
for (const yr of ["2008","2009","2010","2011","2012"]) {
  specs[`${M}|Vantage V8|${yr}|V8`] = {...vant47, pr:"~$175,000"};
  if (parseInt(yr) >= 2011) {
    specs[`${M}|Vantage V8|${yr}|S`] = {...vant47s, pr:"~$195,000"};
  }
}

// === VANTAGE V12 (2009-2012): 6.0L V12, 380kW ===
const vant12_09 = {en:"6.0L DOHC V12",di:"6.0L",cy:"12",hp:"380 kW (510 hp)",tq:"570 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.0 sec",ts:"~305 km/h",ft:"Petrol",wt:"1,680 kg",se:"2",fc:"20.0L",fh:"13.0L",fx:"17.0L"};
for (const yr of ["2009","2010","2011","2012"]) {
  specs[`${M}|Vantage V12|${yr}|V12`] = {...vant12_09, pr:"~$260,000"};
}
// === VANTAGE V12 S (2013-2018): 430kW ===
const vant12s = {en:"6.0L DOHC V12",di:"6.0L",cy:"12",hp:"430 kW (573 hp)",tq:"620 Nm",tx:"7-speed sequential",dr:"RWD",z1:"~3.7 sec",ts:"~330 km/h",ft:"Petrol",wt:"1,680 kg",se:"2",fc:"20.0L",fh:"13.0L",fx:"17.0L"};
for (const yr of ["2013","2014","2015","2016","2017","2018"]) {
  specs[`${M}|Vantage V12|${yr}|V12 S`] = {...vant12s, pr:"~$295,000"};
}

// === VANTAGE (2018-2026): 4.0L AMG twin-turbo V8, 375kW ===
const vant18 = {en:"4.0L AMG twin-turbo V8",di:"4.0L",cy:"8",hp:"375 kW (503 hp)",tq:"685 Nm",tx:"8-speed ZF auto",dr:"RWD",z1:"~3.6 sec",ts:"~314 km/h",ft:"Petrol",wt:"1,595 kg",se:"2",fc:"13.5L",fh:"8.5L",fx:"11.5L"};
const vant18amr = {...vant18};
const vant18f1 = {...vant18, hp:"430 kW (576 hp)", tq:"685 Nm", z1:"~3.5 sec"};
for (const yr of ["2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|Vantage|${yr}|Standard`] = {...vant18, pr:"~$295,000"};
  specs[`${M}|Vantage|${yr}|AMR`] = {...vant18amr, pr:"~$320,000"};
  if (parseInt(yr) >= 2020) {
    specs[`${M}|Vantage|${yr}|F1 Edition`] = {...vant18f1, pr:"~$345,000"};
  }
}

// === VANQUISH (2001-2007): 5.9L/6.0L V12 ===
const vanq01 = {en:"5.9L DOHC V12",di:"5.9L",cy:"12",hp:"352 kW (472 hp)",tq:"542 Nm",tx:"6-speed sequential auto",dr:"RWD",z1:"~4.8 sec",ts:"~306 km/h",ft:"Petrol",wt:"1,875 kg",se:"4",fc:"19.5L",fh:"13.0L",fx:"16.5L"};
const vanq04s = {...vanq01, hp:"339 kW (455 hp)", tq:"550 Nm"};
const vanq04vol = {...vanq01, wt:"1,950 kg"};
for (const yr of ["2001","2002","2003","2004","2005","2006","2007"]) {
  specs[`${M}|Vanquish|${yr}|Standard`] = {...vanq01, pr:"~$380,000"};
  if (parseInt(yr) >= 2004) {
    specs[`${M}|Vanquish|${yr}|S`] = {...vanq04s, pr:"~$410,000"};
    specs[`${M}|Vanquish|${yr}|Volante`] = {...vanq04vol, pr:"~$420,000"};
  }
}

// === VANQUISH (2012-2018): 5.9L V12, 421kW ===
const vanq12 = {en:"5.9L DOHC V12",di:"5.9L",cy:"12",hp:"421 kW (565 hp)",tq:"620 Nm",tx:"6-speed Touchtronic auto",dr:"RWD",z1:"~4.0 sec",ts:"~323 km/h",ft:"Petrol",wt:"1,665 kg",se:"4",fc:"18.5L",fh:"12.0L",fx:"15.5L"};
const vanq13s = {...vanq12, hp:"441 kW (592 hp)", tq:"630 Nm", z1:"~3.8 sec"};
for (const yr of ["2012","2013","2014","2015","2016","2017","2018"]) {
  specs[`${M}|Vanquish|${yr}|Standard`] = {...vanq12, pr:"~$370,000"};
  specs[`${M}|Vanquish|${yr}|Volante`] = {...vanq12, wt:"1,720 kg", pr:"~$400,000"};
  if (parseInt(yr) >= 2013) {
    specs[`${M}|Vanquish|${yr}|S`] = {...vanq13s, pr:"~$420,000"};
  }
}

// === DBS (2007-2012): 5.9L V12, 381kW ===
const dbs07 = {en:"5.9L DOHC V12",di:"5.9L",cy:"12",hp:"381 kW (510 hp)",tq:"570 Nm",tx:"6-speed Touchtronic auto",dr:"RWD",z1:"~4.3 sec",ts:"~307 km/h",ft:"Petrol",wt:"1,905 kg",se:"4",fc:"19.5L",fh:"13.0L",fx:"16.5L"};
for (const yr of ["2007","2008","2009","2010","2011","2012"]) {
  specs[`${M}|DBS|${yr}|Standard`] = {...dbs07, pr:"~$340,000"};
}

// === DBS Superleggera (2018-2022): 5.2L twin-turbo V12, 529kW ===
const dbs18 = {en:"5.2L twin-turbo V12",di:"5.2L",cy:"12",hp:"529 kW (715 hp)",tq:"900 Nm",tx:"8-speed ZF auto",dr:"RWD",z1:"~3.4 sec",ts:"~340 km/h",ft:"Petrol",wt:"1,693 kg",se:"4",fc:"15.0L",fh:"9.5L",fx:"12.5L"};
for (const yr of ["2018","2019","2020","2021","2022"]) {
  specs[`${M}|DBS Superleggera|${yr}|Standard`] = {...dbs18, pr:"~$470,000"};
  specs[`${M}|DBS Superleggera|${yr}|Volante`] = {...dbs18, wt:"1,780 kg", pr:"~$510,000"};
  if (parseInt(yr) >= 2019) {
    specs[`${M}|DBS Superleggera|${yr}|Concorde Edition`] = {...dbs18, pr:"~$520,000"};
  }
}

// === DBS 770 Ultimate (2022-2024): 5.2L twin-turbo V12, 566kW ===
const dbs770 = {en:"5.2L twin-turbo V12",di:"5.2L",cy:"12",hp:"566 kW (770 hp)",tq:"900 Nm",tx:"8-speed ZF auto",dr:"RWD",z1:"~3.2 sec",ts:"~340 km/h",ft:"Petrol",wt:"1,693 kg",se:"4",fc:"15.0L",fh:"9.5L",fx:"12.5L"};
for (const yr of ["2022","2023","2024"]) {
  specs[`${M}|DBS 770 Ultimate|${yr}|Standard`] = {...dbs770, pr:"~$580,000"};
  specs[`${M}|DBS 770 Ultimate|${yr}|Volante`] = {...dbs770, wt:"1,760 kg", pr:"~$620,000"};
}

// === RAPIDE (2010-2012): 5.9L V12, 352kW, 4-door ===
const rap10 = {en:"5.9L DOHC V12",di:"5.9L",cy:"12",hp:"352 kW (470 hp)",tq:"570 Nm",tx:"6-speed Touchtronic auto",dr:"RWD",z1:"~5.2 sec",ts:"~290 km/h",ft:"Petrol",wt:"1,990 kg",se:"5",fc:"19.5L",fh:"13.0L",fx:"16.5L"};
for (const yr of ["2010","2011","2012"]) {
  specs[`${M}|Rapide|${yr}|Standard`] = {...rap10, pr:"~$280,000"};
}

// === RAPIDE S (2013-2020): 5.9L V12, 421kW ===
const raps13 = {en:"5.9L DOHC V12",di:"5.9L",cy:"12",hp:"421 kW (565 hp)",tq:"620 Nm",tx:"8-speed Touchtronic auto",dr:"RWD",z1:"~4.2 sec",ts:"~327 km/h",ft:"Petrol",wt:"1,990 kg",se:"5",fc:"19.0L",fh:"12.5L",fx:"16.0L"};
const raps18amr = {...raps13};
for (const yr of ["2013","2014","2015","2016","2017","2018","2019","2020"]) {
  specs[`${M}|Rapide S|${yr}|Standard`] = {...raps13, pr:"~$295,000"};
  if (parseInt(yr) >= 2018) {
    specs[`${M}|Rapide S|${yr}|AMR`] = {...raps18amr, pr:"~$320,000"};
  }
}

// === DBX (2020-2026): 4.0L AMG twin-turbo V8, 405kW, AWD ===
const dbx20 = {en:"4.0L AMG twin-turbo V8",di:"4.0L",cy:"8",hp:"405 kW (550 hp)",tq:"700 Nm",tx:"9-speed automatic",dr:"AWD",z1:"~4.5 sec",ts:"~291 km/h",ft:"Petrol",wt:"2,245 kg",se:"5",fc:"14.5L",fh:"9.5L",fx:"12.5L"};
const dbx707 = {...dbx20, hp:"520 kW (707 hp)", tq:"900 Nm", z1:"~3.3 sec", ts:"~310 km/h"};
for (const yr of ["2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|DBX|${yr}|Standard`] = {...dbx20, pr:"~$380,000"};
  if (parseInt(yr) >= 2022) {
    specs[`${M}|DBX|${yr}|707`] = {...dbx707, pr:"~$440,000"};
  }
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement86.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement86.json written — ${count} entries`);
