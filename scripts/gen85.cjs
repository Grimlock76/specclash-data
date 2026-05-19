'use strict';
const fs = require('fs');

const specs = {};
const M = 'Bentley';

// === T-SERIES (1965-1980): Bentley version of Silver Shadow ===
const tseriesEarly = {en:"6.75L V8",di:"6.75L",cy:"8",hp:"134 kW (180 hp)",tq:"390 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~10.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,980 kg",se:"5",fc:"18.0L",fh:"12.0L",fx:"15.5L"};
for (const yr of ["1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977"]) {
  specs[`${M}|T-Series|${yr}|Standard`] = {...tseriesEarly, pr:"~$18,000"};
}
// Late T-Series: 6.75L ~149kW (1977-1980)
const tseriesLate = {...tseriesEarly, hp:"149 kW (200 hp)", tq:"410 Nm"};
for (const yr of ["1977","1978","1979","1980"]) {
  specs[`${M}|T-Series|${yr}|Standard`] = {...tseriesLate, pr:"~$20,000"};
}

// === MULSANNE (1980-1992): 6.75L V8 ~134kW ===
const mulsanne80 = {en:"6.75L V8",di:"6.75L",cy:"8",hp:"134 kW (180 hp)",tq:"395 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~11.0 sec",ts:"~195 km/h",ft:"Petrol",wt:"2,040 kg",se:"5",fc:"18.0L",fh:"12.0L",fx:"15.5L"};
for (const yr of ["1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992"]) {
  specs[`${M}|Mulsanne|${yr}|Standard`] = {...mulsanne80, pr:"~$110,000"};
}

// === EIGHT (1984-1992): entry-level 6.75L V8 ~134kW ===
const eight84 = {en:"6.75L V8",di:"6.75L",cy:"8",hp:"134 kW (180 hp)",tq:"395 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~11.5 sec",ts:"~190 km/h",ft:"Petrol",wt:"1,960 kg",se:"5",fc:"18.0L",fh:"12.0L",fx:"15.5L"};
for (const yr of ["1984","1985","1986","1987","1988","1989","1990","1991","1992"]) {
  specs[`${M}|Eight|${yr}|Standard`] = {...eight84, pr:"~$90,000"};
}

// === TURBO R (1985-1991): 6.75L twin-turbo V8, ~224kW ===
const turbor85 = {en:"6.75L twin-turbo V8",di:"6.75L",cy:"8",hp:"224 kW (300 hp)",tq:"500 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~6.9 sec",ts:"~235 km/h",ft:"Petrol",wt:"2,180 kg",se:"5",fc:"18.5L",fh:"12.5L",fx:"16.0L"};
for (const yr of ["1985","1986","1987","1988","1989","1990","1991"]) {
  specs[`${M}|Turbo R|${yr}|Standard`] = {...turbor85, pr:"~$155,000"};
}
// === TURBO R (1992-1997): ~265kW ===
const turbor92 = {...turbor85, hp:"265 kW (355 hp)", tq:"560 Nm"};
for (const yr of ["1992","1993","1994","1995","1996","1997"]) {
  specs[`${M}|Turbo R|${yr}|Standard`] = {...turbor92, pr:"~$185,000"};
}

// === CONTINENTAL R (1991-2003): 6.75L twin-turbo V8, ~271kW, coupe ===
const contR = {en:"6.75L twin-turbo V8",di:"6.75L",cy:"8",hp:"271 kW (363 hp)",tq:"568 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~6.5 sec",ts:"~240 km/h",ft:"Petrol",wt:"2,300 kg",se:"4",fc:"19.0L",fh:"13.0L",fx:"16.0L"};
for (const yr of ["1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003"]) {
  specs[`${M}|Continental R|${yr}|Standard`] = {...contR, pr:"~$260,000"};
  if (parseInt(yr) >= 1995) {
    specs[`${M}|Continental R|${yr}|Mulliner`] = {...contR, pr:"~$290,000"};
  }
}

// === AZURE (1995-2003): 6.75L twin-turbo V8, ~297kW, convertible ===
const azure = {en:"6.75L twin-turbo V8",di:"6.75L",cy:"8",hp:"297 kW (400 hp)",tq:"610 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~6.0 sec",ts:"~245 km/h",ft:"Petrol",wt:"2,520 kg",se:"4",fc:"20.0L",fh:"13.5L",fx:"17.0L"};
for (const yr of ["1995","1996","1997","1998","1999","2000","2001","2002","2003"]) {
  specs[`${M}|Azure|${yr}|Standard`] = {...azure, pr:"~$360,000"};
}

// === ARNAGE Green Label (1998): BMW 4.4L twin-turbo V8, 239kW ===
specs[`${M}|Arnage|1998|Green Label`] = {en:"BMW 4.4L twin-turbo V8",di:"4.4L",cy:"8",hp:"239 kW (320 hp)",tq:"480 Nm",tx:"5-speed automatic",dr:"RWD",z1:"~6.9 sec",ts:"~240 km/h",ft:"Petrol",wt:"2,475 kg",se:"5",fc:"18.0L",fh:"12.0L",fx:"15.5L",pr:"~$320,000"};

// === ARNAGE Red Label (1999-2001): 6.75L twin-turbo V8, 298kW ===
const arnageRed = {en:"6.75L twin-turbo V8",di:"6.75L",cy:"8",hp:"298 kW (400 hp)",tq:"647 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~6.0 sec",ts:"~250 km/h",ft:"Petrol",wt:"2,475 kg",se:"5",fc:"19.0L",fh:"13.0L",fx:"16.0L"};
for (const yr of ["1999","2000","2001"]) {
  specs[`${M}|Arnage|${yr}|Red Label`] = {...arnageRed, pr:"~$340,000"};
}

// === ARNAGE R (2002-2009): 313kW ===
const arnageR = {...arnageRed, hp:"313 kW (420 hp)", tq:"647 Nm"};
// === ARNAGE T (2002-2009): 350kW ===
const arnageT = {...arnageRed, hp:"350 kW (470 hp)", tq:"694 Nm", z1:"~5.5 sec"};
for (const yr of ["2002","2003","2004","2005","2006","2007","2008","2009"]) {
  specs[`${M}|Arnage|${yr}|R`] = {...arnageR, pr:"~$380,000"};
  specs[`${M}|Arnage|${yr}|T`] = {...arnageT, pr:"~$430,000"};
}

// === CONTINENTAL GT (2003-2011): 6.0L twin-turbo W12, 411kW ===
const cgt03 = {en:"6.0L twin-turbo W12",di:"6.0L",cy:"12",hp:"411 kW (552 hp)",tq:"650 Nm",tx:"6-speed dual-clutch ZF",dr:"AWD",z1:"~4.8 sec",ts:"~318 km/h",ft:"Petrol",wt:"2,285 kg",se:"4",fc:"20.5L",fh:"13.5L",fx:"17.0L"};
const cgtSpeed03 = {...cgt03, hp:"463 kW (621 hp)", tq:"650 Nm", z1:"~4.5 sec"};
for (const yr of ["2003","2004","2005","2006","2007","2008","2009","2010","2011"]) {
  specs[`${M}|Continental GT|${yr}|W12`] = {...cgt03, pr:"~$340,000"};
  specs[`${M}|Continental GT|${yr}|Speed`] = {...cgtSpeed03, pr:"~$400,000"};
}

// === CONTINENTAL GTC (2006-2011): convertible W12 ===
const cgtc06 = {...cgt03, wt:"2,440 kg"};
const cgtcSpeed06 = {...cgtSpeed03, wt:"2,440 kg"};
for (const yr of ["2006","2007","2008","2009","2010","2011"]) {
  specs[`${M}|Continental GTC|${yr}|Standard`] = {...cgtc06, pr:"~$390,000"};
  specs[`${M}|Continental GTC|${yr}|Speed`] = {...cgtcSpeed06, pr:"~$450,000"};
}

// === CONTINENTAL FLYING SPUR (2005-2012): 6.0L W12, 4-door ===
const cfs05 = {...cgt03, wt:"2,480 kg", se:"5"};
const cfsSpeed = {...cgtSpeed03, wt:"2,480 kg", se:"5"};
for (const yr of ["2005","2006","2007","2008","2009","2010","2011","2012"]) {
  specs[`${M}|Continental Flying Spur|${yr}|Standard`] = {...cfs05, pr:"~$360,000"};
  specs[`${M}|Continental Flying Spur|${yr}|Speed`] = {...cfsSpeed, pr:"~$420,000"};
}

// === MULSANNE (2010-2012): 6.75L twin-turbo V8, 377kW ===
const mul10 = {en:"6.75L twin-turbo V8",di:"6.75L",cy:"8",hp:"377 kW (505 hp)",tq:"1020 Nm",tx:"8-speed automatic ZF",dr:"RWD",z1:"~5.1 sec",ts:"~296 km/h",ft:"Petrol",wt:"2,680 kg",se:"5",fc:"19.5L",fh:"13.0L",fx:"16.5L"};
for (const yr of ["2010","2011","2012"]) {
  specs[`${M}|Mulsanne|${yr}|Standard`] = {...mul10, pr:"~$550,000"};
}
// === MULSANNE (2013-2020): Speed 395kW ===
const mul13 = {...mul10};
const mulSpeed = {...mul10, hp:"395 kW (530 hp)", tq:"1100 Nm"};
for (const yr of ["2013","2014","2015","2016","2017","2018","2019","2020"]) {
  specs[`${M}|Mulsanne|${yr}|Standard`] = {...mul13, pr:"~$570,000"};
  specs[`${M}|Mulsanne|${yr}|Speed`] = {...mulSpeed, pr:"~$630,000"};
}

// === CONTINENTAL GT (2011-2017): W12 468kW or V8 373kW ===
const cgt11w12 = {en:"6.0L twin-turbo W12",di:"6.0L",cy:"12",hp:"468 kW (627 hp)",tq:"660 Nm",tx:"8-speed dual-clutch ZF",dr:"AWD",z1:"~4.4 sec",ts:"~333 km/h",ft:"Petrol",wt:"2,320 kg",se:"4",fc:"21.0L",fh:"13.5L",fx:"17.5L"};
const cgt11w12spd = {...cgt11w12, hp:"476 kW (638 hp)", tq:"660 Nm", z1:"~4.2 sec"};
const cgt11v8 = {en:"4.0L twin-turbo V8",di:"4.0L",cy:"8",hp:"373 kW (500 hp)",tq:"660 Nm",tx:"8-speed dual-clutch ZF",dr:"AWD",z1:"~4.5 sec",ts:"~300 km/h",ft:"Petrol",wt:"2,260 kg",se:"4",fc:"16.0L",fh:"10.5L",fx:"14.0L"};
const cgt11v8s = {...cgt11v8, hp:"395 kW (530 hp)", z1:"~4.4 sec"};
for (const yr of ["2011","2012","2013","2014","2015","2016","2017"]) {
  specs[`${M}|Continental GT|${yr}|W12`] = {...cgt11w12, pr:"~$370,000"};
  specs[`${M}|Continental GT|${yr}|W12 Speed`] = {...cgt11w12spd, pr:"~$430,000"};
  specs[`${M}|Continental GT|${yr}|V8`] = {...cgt11v8, pr:"~$340,000"};
  specs[`${M}|Continental GT|${yr}|V8 S`] = {...cgt11v8s, pr:"~$380,000"};
}

// === CONTINENTAL GTC (2011-2017): convertible, same engines ===
const cgtc11w12 = {...cgt11w12, wt:"2,430 kg"};
const cgtc11v8 = {...cgt11v8, wt:"2,400 kg"};
for (const yr of ["2011","2012","2013","2014","2015","2016","2017"]) {
  specs[`${M}|Continental GTC|${yr}|W12`] = {...cgtc11w12, pr:"~$420,000"};
  specs[`${M}|Continental GTC|${yr}|V8`] = {...cgtc11v8, pr:"~$390,000"};
}

// === FLYING SPUR (2013-2018): W12 421kW or V8 373kW ===
const fs13w12 = {en:"6.0L twin-turbo W12",di:"6.0L",cy:"12",hp:"421 kW (565 hp)",tq:"700 Nm",tx:"8-speed dual-clutch ZF",dr:"AWD",z1:"~4.6 sec",ts:"~322 km/h",ft:"Petrol",wt:"2,480 kg",se:"5",fc:"20.5L",fh:"13.0L",fx:"17.0L"};
const fs13v8 = {en:"4.0L twin-turbo V8",di:"4.0L",cy:"8",hp:"373 kW (500 hp)",tq:"660 Nm",tx:"8-speed dual-clutch ZF",dr:"AWD",z1:"~5.0 sec",ts:"~296 km/h",ft:"Petrol",wt:"2,430 kg",se:"5",fc:"16.0L",fh:"10.5L",fx:"14.0L"};
for (const yr of ["2013","2014","2015","2016","2017","2018"]) {
  specs[`${M}|Flying Spur|${yr}|W12`] = {...fs13w12, pr:"~$360,000"};
  specs[`${M}|Flying Spur|${yr}|V8`] = {...fs13v8, pr:"~$320,000"};
}

// === BENTAYGA W12 (2015-2021): 447kW ===
const btgW12 = {en:"6.0L twin-turbo W12",di:"6.0L",cy:"12",hp:"447 kW (600 hp)",tq:"900 Nm",tx:"8-speed automatic ZF",dr:"AWD",z1:"~4.0 sec",ts:"301 km/h",ft:"Petrol",wt:"2,440 kg",se:"5",fc:"21.5L",fh:"14.0L",fx:"18.0L"};
for (const yr of ["2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${M}|Bentayga|${yr}|W12`] = {...btgW12, pr:"~$380,000"};
}
// === BENTAYGA V8 (2018-2026): 404kW ===
const btgV8 = {en:"4.0L twin-turbo V8",di:"4.0L",cy:"8",hp:"404 kW (542 hp)",tq:"770 Nm",tx:"8-speed automatic ZF",dr:"AWD",z1:"~4.5 sec",ts:"290 km/h",ft:"Petrol",wt:"2,490 kg",se:"5",fc:"18.0L",fh:"11.5L",fx:"15.5L"};
for (const yr of ["2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|Bentayga|${yr}|V8`] = {...btgV8, pr:"~$310,000"};
}
// === BENTAYGA Hybrid (2020-2026): 3.0L V6 PHEV 335kW ===
const btgHyb = {en:"3.0L V6 PHEV",di:"3.0L",cy:"6",hp:"335 kW (449 hp)",tq:"700 Nm",tx:"8-speed automatic ZF",dr:"AWD",z1:"~5.2 sec",ts:"254 km/h",ft:"Petrol",wt:"2,630 kg",se:"5",fc:"3.5L",fh:"2.8L",fx:"4.5L"};
for (const yr of ["2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|Bentayga|${yr}|Hybrid`] = {...btgHyb, pr:"~$320,000"};
}

// === CONTINENTAL GT (2018-2026): W12 467kW or V8 404kW ===
const cgt18w12 = {en:"6.0L twin-turbo W12",di:"6.0L",cy:"12",hp:"467 kW (626 hp)",tq:"900 Nm",tx:"8-speed dual-clutch ZF",dr:"AWD",z1:"~3.6 sec",ts:"333 km/h",ft:"Petrol",wt:"2,244 kg",se:"4",fc:"20.5L",fh:"13.0L",fx:"17.0L"};
const cgt18w12spd = {...cgt18w12, hp:"478 kW (641 hp)", z1:"~3.5 sec"};
const cgt18v8 = {en:"4.0L twin-turbo V8",di:"4.0L",cy:"8",hp:"404 kW (542 hp)",tq:"770 Nm",tx:"8-speed dual-clutch ZF",dr:"AWD",z1:"~3.9 sec",ts:"318 km/h",ft:"Petrol",wt:"2,194 kg",se:"4",fc:"16.5L",fh:"10.5L",fx:"14.0L"};
for (const yr of ["2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|Continental GT|${yr}|W12`] = {...cgt18w12, pr:"~$420,000"};
  specs[`${M}|Continental GT|${yr}|Speed W12`] = {...cgt18w12spd, pr:"~$490,000"};
  specs[`${M}|Continental GT|${yr}|V8`] = {...cgt18v8, pr:"~$380,000"};
}

// === FLYING SPUR (2019-2026): W12, V8, V6 PHEV ===
const fs19w12 = {...cgt18w12, wt:"2,437 kg", se:"5"};
const fs19v8 = {...cgt18v8, wt:"2,387 kg", se:"5"};
const fs19hyb = {en:"3.0L V6 PHEV",di:"3.0L",cy:"6",hp:"335 kW (449 hp)",tq:"750 Nm",tx:"8-speed dual-clutch ZF",dr:"AWD",z1:"~4.2 sec",ts:"~280 km/h",ft:"Petrol",wt:"2,530 kg",se:"5",fc:"3.2L",fh:"2.5L",fx:"4.0L"};
for (const yr of ["2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|Flying Spur|${yr}|W12`] = {...fs19w12, pr:"~$430,000"};
  specs[`${M}|Flying Spur|${yr}|V8`] = {...fs19v8, pr:"~$380,000"};
  specs[`${M}|Flying Spur|${yr}|Hybrid`] = {...fs19hyb, pr:"~$350,000"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement85.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement85.json written — ${count} entries`);
