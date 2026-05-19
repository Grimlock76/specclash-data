'use strict';
const fs = require('fs');

const specs = {};
const M = 'McLaren';

// === F1 (1992-1998): 6.1L BMW V12, 461kW ===
const f1 = {en:"6.1L BMW S70/2 V12",di:"6.1L",cy:"12",hp:"461 kW (618 hp)",tq:"650 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.2 sec",ts:"~391 km/h",ft:"Petrol",wt:"1,138 kg",se:"3",fc:"19.0L",fh:"12.5L",fx:"16.0L"};
for (const yr of ["1992","1993","1994","1995","1996","1997","1998"]) {
  specs[`${M}|F1|${yr}|Standard`] = {...f1, pr:"~$1,500,000"};
}

// === MP4-12C (2011-2014): 3.8L twin-turbo V8, 460kW ===
const mp412c = {en:"3.8L twin-turbo V8 M838T",di:"3.8L",cy:"8",hp:"460 kW (616 hp)",tq:"600 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~3.1 sec",ts:"~330 km/h",ft:"Petrol",wt:"1,301 kg",se:"2",fc:"14.0L",fh:"9.5L",fx:"12.0L"};
for (const yr of ["2011","2012","2013","2014"]) {
  specs[`${M}|MP4-12C|${yr}|Standard`] = {...mp412c, pr:"~$280,000"};
  if (parseInt(yr) >= 2012) {
    specs[`${M}|MP4-12C|${yr}|Spider`] = {...mp412c, wt:"1,326 kg", pr:"~$315,000"};
  }
}

// === P1 (2013-2015): hybrid 674kW ===
const p1 = {en:"3.8L twin-turbo V8 + electric KERS",di:"3.8L",cy:"8",hp:"674 kW (903 hp)",tq:"900 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~2.8 sec",ts:"~350 km/h",ft:"Petrol",wt:"1,547 kg",se:"2"};
for (const yr of ["2013","2014","2015"]) {
  specs[`${M}|P1|${yr}|Standard`] = {...p1, pr:"~$1,600,000"};
}

// === 650S (2014-2017): 3.8L twin-turbo V8, 478kW ===
const s650 = {en:"3.8L twin-turbo V8 M838T",di:"3.8L",cy:"8",hp:"478 kW (641 hp)",tq:"678 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~3.0 sec",ts:"~333 km/h",ft:"Petrol",wt:"1,330 kg",se:"2",fc:"14.5L",fh:"9.5L",fx:"12.5L"};
for (const yr of ["2014","2015","2016","2017"]) {
  specs[`${M}|650S|${yr}|Coupe`] = {...s650, pr:"~$370,000"};
  specs[`${M}|650S|${yr}|Spider`] = {...s650, wt:"1,359 kg", pr:"~$405,000"};
}

// === 675LT (2015-2016): 3.8L twin-turbo V8, 496kW ===
const lt675 = {en:"3.8L twin-turbo V8 M838TL",di:"3.8L",cy:"8",hp:"496 kW (666 hp)",tq:"700 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~2.9 sec",ts:"~330 km/h",ft:"Petrol",wt:"1,230 kg",se:"2",fc:"14.5L",fh:"9.5L",fx:"12.5L"};
for (const yr of ["2015","2016"]) {
  specs[`${M}|675LT|${yr}|Coupe`] = {...lt675, pr:"~$490,000"};
  specs[`${M}|675LT|${yr}|Spider`] = {...lt675, wt:"1,258 kg", pr:"~$530,000"};
}

// === 540C (2015-2020): 3.8L twin-turbo V8, 397kW ===
const s540 = {en:"3.8L twin-turbo V8 M838T",di:"3.8L",cy:"8",hp:"397 kW (533 hp)",tq:"540 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~3.5 sec",ts:"~320 km/h",ft:"Petrol",wt:"1,311 kg",se:"2",fc:"13.5L",fh:"9.0L",fx:"11.5L"};
for (const yr of ["2015","2016","2017","2018","2019","2020"]) {
  specs[`${M}|540C|${yr}|Standard`] = {...s540, pr:"~$210,000"};
}

// === 570S (2015-2020): 3.8L twin-turbo V8, 419kW ===
const s570 = {en:"3.8L twin-turbo V8 M838T",di:"3.8L",cy:"8",hp:"419 kW (562 hp)",tq:"600 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~3.2 sec",ts:"~328 km/h",ft:"Petrol",wt:"1,313 kg",se:"2",fc:"14.0L",fh:"9.5L",fx:"12.0L"};
for (const yr of ["2015","2016","2017","2018","2019","2020"]) {
  specs[`${M}|570S|${yr}|Coupe`] = {...s570, pr:"~$260,000"};
  specs[`${M}|570S|${yr}|Spider`] = {...s570, wt:"1,345 kg", pr:"~$295,000"};
}

// === 570GT (2016-2020): grand touring ===
const s570gt = {en:"3.8L twin-turbo V8 M838T",di:"3.8L",cy:"8",hp:"419 kW (562 hp)",tq:"600 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~3.4 sec",ts:"~326 km/h",ft:"Petrol",wt:"1,350 kg",se:"2",fc:"14.0L",fh:"9.5L",fx:"12.0L"};
for (const yr of ["2016","2017","2018","2019","2020"]) {
  specs[`${M}|570GT|${yr}|Standard`] = {...s570gt, pr:"~$280,000"};
}

// === 600LT (2018-2020): 3.8L twin-turbo V8, 441kW ===
const lt600 = {en:"3.8L twin-turbo V8 M838TL",di:"3.8L",cy:"8",hp:"441 kW (592 hp)",tq:"620 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~2.9 sec",ts:"~328 km/h",ft:"Petrol",wt:"1,247 kg",se:"2",fc:"14.0L",fh:"9.5L",fx:"12.0L"};
for (const yr of ["2018","2019","2020"]) {
  specs[`${M}|600LT|${yr}|Coupe`] = {...lt600, pr:"~$400,000"};
  specs[`${M}|600LT|${yr}|Spider`] = {...lt600, wt:"1,297 kg", pr:"~$435,000"};
}

// === 720S (2017-2022): 4.0L twin-turbo V8 M840T, 530kW ===
const s720 = {en:"4.0L twin-turbo V8 M840T",di:"4.0L",cy:"8",hp:"530 kW (710 hp)",tq:"770 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~2.9 sec",ts:"~341 km/h",ft:"Petrol",wt:"1,283 kg",se:"2",fc:"15.0L",fh:"10.0L",fx:"12.5L"};
for (const yr of ["2017","2018","2019","2020","2021","2022"]) {
  specs[`${M}|720S|${yr}|Performance`] = {...s720, pr:"~$430,000"};
  specs[`${M}|720S|${yr}|Spider`] = {...s720, wt:"1,332 kg", pr:"~$465,000"};
}

// === SENNA (2018-2019): 4.0L twin-turbo V8, 596kW ===
const senna = {en:"4.0L twin-turbo V8 M840TR",di:"4.0L",cy:"8",hp:"596 kW (789 hp)",tq:"800 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~2.8 sec",ts:"~340 km/h",ft:"Petrol",wt:"1,198 kg",se:"2"};
const sennaGTR = {...senna, hp:"625 kW (838 hp)", wt:"1,198 kg"};
for (const yr of ["2018","2019"]) {
  specs[`${M}|Senna|${yr}|Standard`] = {...senna, pr:"~$1,600,000"};
  specs[`${M}|Senna|${yr}|GTR`] = {...sennaGTR, pr:"~$2,000,000"};
}

// === GT (2019-2023): 4.0L twin-turbo V8, 456kW, grand touring ===
const gt19 = {en:"4.0L twin-turbo V8 M840T",di:"4.0L",cy:"8",hp:"456 kW (612 hp)",tq:"630 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~3.2 sec",ts:"~326 km/h",ft:"Petrol",wt:"1,466 kg",se:"2",fc:"14.5L",fh:"9.5L",fx:"12.5L"};
for (const yr of ["2019","2020","2021","2022","2023"]) {
  specs[`${M}|GT|${yr}|Standard`] = {...gt19, pr:"~$320,000"};
}

// === 765LT (2020-2022): 4.0L twin-turbo V8, 563kW ===
const lt765 = {en:"4.0L twin-turbo V8 M840TL",di:"4.0L",cy:"8",hp:"563 kW (755 hp)",tq:"800 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~2.8 sec",ts:"~330 km/h",ft:"Petrol",wt:"1,229 kg",se:"2"};
for (const yr of ["2020","2021","2022"]) {
  specs[`${M}|765LT|${yr}|Coupe`] = {...lt765, pr:"~$620,000"};
  specs[`${M}|765LT|${yr}|Spider`] = {...lt765, wt:"1,279 kg", pr:"~$670,000"};
}

// === ARTURA (2022-2026): 3.0L twin-turbo V6 + electric PHEV, 500kW ===
const artura = {en:"3.0L twin-turbo V6 + electric PHEV",di:"3.0L",cy:"6",hp:"500 kW (671 hp)",tq:"720 Nm",tx:"8-speed dual-clutch",dr:"RWD",z1:"~3.0 sec",ts:"~330 km/h",ft:"Petrol",wt:"1,498 kg",se:"2",fc:"9.5L",fh:"6.5L",fx:"8.5L"};
const arturaPerf = {...artura, hp:"515 kW (691 hp)", tq:"740 Nm", z1:"~2.9 sec"};
for (const yr of ["2022","2023","2024","2025","2026"]) {
  specs[`${M}|Artura|${yr}|Standard`] = {...artura, pr:"~$390,000"};
  specs[`${M}|Artura|${yr}|Performance`] = {...arturaPerf, pr:"~$420,000"};
}

// === 750S (2023-2026): 4.0L twin-turbo V8 M840TE, 552kW ===
const s750 = {en:"4.0L twin-turbo V8 M840TE",di:"4.0L",cy:"8",hp:"552 kW (740 hp)",tq:"800 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~2.8 sec",ts:"~332 km/h",ft:"Petrol",wt:"1,277 kg",se:"2",fc:"15.0L",fh:"10.0L",fx:"13.0L"};
for (const yr of ["2023","2024","2025","2026"]) {
  specs[`${M}|750S|${yr}|Coupe`] = {...s750, pr:"~$530,000"};
  specs[`${M}|750S|${yr}|Spider`] = {...s750, wt:"1,327 kg", pr:"~$570,000"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement87.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement87.json written — ${count} entries`);
