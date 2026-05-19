'use strict';
const fs = require('fs');

const specs = {};
const M = 'Rolls-Royce';

// === SILVER CLOUD I (1955-1959) ===
const sc1base = {en:"4.9L F-head I6",di:"4.9L",cy:"6",hp:"112 kW (150 hp)",tq:"280 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~14.0 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,830 kg",se:"5",fc:"18.0L",fh:"12.5L",fx:"15.5L"};
for (const yr of ["1955","1956","1957","1958","1959"]) {
  specs[`${M}|Silver Cloud|${yr}|Standard`] = {...sc1base, pr:"~$20,000"};
  specs[`${M}|Silver Cloud|${yr}|Long Wheelbase`] = {...sc1base, wt:"1,900 kg", pr:"~$24,000"};
}

// === SILVER CLOUD II (1959-1962) ===
const sc2base = {en:"6.2L V8",di:"6.2L",cy:"8",hp:"134 kW (180 hp)",tq:"390 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~13.0 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,830 kg",se:"5",fc:"19.0L",fh:"13.0L",fx:"16.0L"};
for (const yr of ["1959","1960","1961","1962"]) {
  specs[`${M}|Silver Cloud II|${yr}|Standard`] = {...sc2base, pr:"~$22,000"};
  specs[`${M}|Silver Cloud II|${yr}|Long Wheelbase`] = {...sc2base, wt:"1,900 kg", pr:"~$26,000"};
}

// === SILVER CLOUD III (1963-1966) ===
const sc3base = {en:"6.2L V8",di:"6.2L",cy:"8",hp:"134 kW (180 hp)",tq:"390 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~13.0 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,840 kg",se:"5",fc:"19.0L",fh:"13.0L",fx:"16.0L"};
for (const yr of ["1963","1964","1965","1966"]) {
  specs[`${M}|Silver Cloud III|${yr}|Standard`] = {...sc3base, pr:"~$22,000"};
  specs[`${M}|Silver Cloud III|${yr}|Long Wheelbase`] = {...sc3base, wt:"1,910 kg", pr:"~$26,000"};
}

// === SILVER SHADOW (1965-1969) early: 6.2L V8 ===
const ssEarly = {en:"6.2L V8",di:"6.2L",cy:"8",hp:"134 kW (180 hp)",tq:"390 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~10.9 sec",ts:"~185 km/h",ft:"Petrol",wt:"2,000 kg",se:"5",fc:"18.5L",fh:"12.5L",fx:"16.0L"};
for (const yr of ["1965","1966","1967","1968","1969"]) {
  specs[`${M}|Silver Shadow|${yr}|Standard`] = {...ssEarly, pr:"~$50,000"};
  specs[`${M}|Silver Shadow|${yr}|Long Wheelbase`] = {...ssEarly, wt:"2,070 kg", pr:"~$58,000"};
}

// === SILVER SHADOW (1970-1976) later: 6.75L V8 ===
const ssLate = {en:"6.75L V8",di:"6.75L",cy:"8",hp:"149 kW (200 hp)",tq:"410 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~10.0 sec",ts:"~190 km/h",ft:"Petrol",wt:"2,000 kg",se:"5",fc:"18.0L",fh:"12.0L",fx:"15.5L"};
for (const yr of ["1970","1971","1972","1973","1974","1975","1976"]) {
  specs[`${M}|Silver Shadow|${yr}|Standard`] = {...ssLate, pr:"~$55,000"};
  specs[`${M}|Silver Shadow|${yr}|Long Wheelbase`] = {...ssLate, wt:"2,070 kg", pr:"~$63,000"};
}

// === SILVER SHADOW II (1977-1980) ===
const ss2 = {en:"6.75L V8",di:"6.75L",cy:"8",hp:"149 kW (200 hp)",tq:"410 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~10.0 sec",ts:"~190 km/h",ft:"Petrol",wt:"2,000 kg",se:"5",fc:"17.5L",fh:"12.0L",fx:"15.5L"};
for (const yr of ["1977","1978","1979","1980"]) {
  specs[`${M}|Silver Shadow II|${yr}|Standard`] = {...ss2, pr:"~$65,000"};
}

// === CORNICHE Coupe (1971-1980) ===
const corniBase = {en:"6.75L V8",di:"6.75L",cy:"8",hp:"149 kW (200 hp)",tq:"410 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~10.0 sec",ts:"~195 km/h",ft:"Petrol",wt:"2,100 kg",se:"4",fc:"18.0L",fh:"12.5L",fx:"16.0L"};
for (const yr of ["1971","1972","1973","1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${M}|Corniche|${yr}|Coupe`] = {...corniBase, pr:"~$70,000"};
}

// === CORNICHE Convertible (1971-1996) ===
const corniConv = {...corniBase, wt:"2,150 kg"};
for (const yr of ["1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996"]) {
  specs[`${M}|Corniche|${yr}|Convertible`] = {...corniConv, pr:"~$80,000"};
}

// === CAMARGUE (1975-1985) ===
const camargue = {en:"6.75L V8",di:"6.75L",cy:"8",hp:"149 kW (200 hp)",tq:"410 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~10.5 sec",ts:"~190 km/h",ft:"Petrol",wt:"2,187 kg",se:"4",fc:"18.5L",fh:"13.0L",fx:"16.5L"};
for (const yr of ["1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985"]) {
  specs[`${M}|Camargue|${yr}|Standard`] = {...camargue, pr:"~$90,000"};
}

// === SILVER SPIRIT (1980-1986): 6.75L V8 ~134kW carb ===
const sspirit80 = {en:"6.75L V8",di:"6.75L",cy:"8",hp:"134 kW (180 hp)",tq:"395 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~11.0 sec",ts:"~195 km/h",ft:"Petrol",wt:"2,075 kg",se:"5",fc:"18.0L",fh:"12.0L",fx:"15.5L"};
for (const yr of ["1980","1981","1982","1983","1984","1985","1986"]) {
  specs[`${M}|Silver Spirit|${yr}|Standard`] = {...sspirit80, pr:"~$120,000"};
}

// === SILVER SPIRIT (1987-1993): fuel injection ~150kW ===
const sspirit87 = {en:"6.75L V8 fuel injection",di:"6.75L",cy:"8",hp:"150 kW (201 hp)",tq:"405 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~10.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"2,075 kg",se:"5",fc:"17.5L",fh:"12.0L",fx:"15.5L"};
for (const yr of ["1987","1988","1989","1990","1991","1992","1993"]) {
  specs[`${M}|Silver Spirit|${yr}|Standard`] = {...sspirit87, pr:"~$145,000"};
}

// === SILVER SPIRIT (1994-1998): ~165kW ===
const sspirit94 = {en:"6.75L V8",di:"6.75L",cy:"8",hp:"165 kW (221 hp)",tq:"420 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~10.0 sec",ts:"~205 km/h",ft:"Petrol",wt:"2,075 kg",se:"5",fc:"17.0L",fh:"11.5L",fx:"15.0L"};
for (const yr of ["1994","1995","1996","1997","1998"]) {
  specs[`${M}|Silver Spirit|${yr}|Standard`] = {...sspirit94, pr:"~$165,000"};
}

// === SILVER SPUR (1980-1994): LWB Silver Spirit ===
const sspur80 = {...sspirit80, wt:"2,130 kg"};
const sspur87 = {...sspirit87, wt:"2,130 kg"};
const sspur94 = {...sspirit94, wt:"2,130 kg"};
for (const yr of ["1980","1981","1982","1983","1984","1985","1986"]) {
  specs[`${M}|Silver Spur|${yr}|Standard`] = {...sspur80, pr:"~$130,000"};
}
for (const yr of ["1987","1988","1989","1990","1991","1992","1993"]) {
  specs[`${M}|Silver Spur|${yr}|Standard`] = {...sspur87, pr:"~$155,000"};
}
for (const yr of ["1994"]) {
  specs[`${M}|Silver Spur|${yr}|Standard`] = {...sspur94, pr:"~$175,000"};
}

// === SILVER SERAPH (1998-2002) ===
const seraph = {en:"BMW 5.4L V12",di:"5.4L",cy:"12",hp:"242 kW (325 hp)",tq:"570 Nm",tx:"5-speed automatic",dr:"RWD",z1:"~6.6 sec",ts:"240 km/h",ft:"Petrol",wt:"2,390 kg",se:"5",fc:"17.0L",fh:"11.5L",fx:"15.0L"};
for (const yr of ["1998","1999","2000","2001","2002"]) {
  specs[`${M}|Silver Seraph|${yr}|Standard`] = {...seraph, pr:"~$450,000"};
}

// === PHANTOM (2003-2009): 6.75L V12, 338kW ===
const ph03 = {en:"6.75L V12",di:"6.75L",cy:"12",hp:"338 kW (453 hp)",tq:"720 Nm",tx:"6-speed automatic ZF",dr:"RWD",z1:"~5.7 sec",ts:"~240 km/h",ft:"Petrol",wt:"2,560 kg",se:"5",fc:"19.5L",fh:"13.5L",fx:"16.0L"};
for (const yr of ["2003","2004","2005","2006","2007","2008","2009"]) {
  specs[`${M}|Phantom|${yr}|Standard`] = {...ph03, pr:"~$900,000"};
  specs[`${M}|Phantom|${yr}|Extended Wheelbase`] = {...ph03, wt:"2,640 kg", pr:"~$1,100,000"};
}
// Phantom Coupe (2008-2016) and Drophead (2007-2016) will be in 2010-2016 loop
for (const yr of ["2008","2009"]) {
  specs[`${M}|Phantom|${yr}|Coupe`] = {...ph03, wt:"2,550 kg", se:"4", pr:"~$950,000"};
}
for (const yr of ["2007","2008","2009"]) {
  specs[`${M}|Phantom|${yr}|Drophead`] = {...ph03, wt:"2,600 kg", se:"4", pr:"~$1,000,000"};
}

// === PHANTOM (2010-2016): 6.75L V12, 400kW ===
const ph10 = {en:"6.75L V12",di:"6.75L",cy:"12",hp:"400 kW (537 hp)",tq:"780 Nm",tx:"6-speed automatic ZF",dr:"RWD",z1:"~5.6 sec",ts:"~240 km/h",ft:"Petrol",wt:"2,560 kg",se:"5",fc:"19.5L",fh:"13.5L",fx:"16.0L"};
for (const yr of ["2010","2011","2012","2013","2014","2015","2016"]) {
  specs[`${M}|Phantom|${yr}|Standard`] = {...ph10, pr:"~$1,000,000"};
  specs[`${M}|Phantom|${yr}|Extended Wheelbase`] = {...ph10, wt:"2,640 kg", pr:"~$1,200,000"};
  specs[`${M}|Phantom|${yr}|Coupe`] = {...ph10, wt:"2,550 kg", se:"4", pr:"~$1,050,000"};
  specs[`${M}|Phantom|${yr}|Drophead`] = {...ph10, wt:"2,600 kg", se:"4", pr:"~$1,100,000"};
}

// === PHANTOM VIII (2017-2026): 6.75L twin-turbo V12, 420kW ===
const ph8std = {en:"6.75L twin-turbo V12",di:"6.75L",cy:"12",hp:"420 kW (563 hp)",tq:"900 Nm",tx:"8-speed automatic ZF",dr:"RWD",z1:"~5.1 sec",ts:"250 km/h",ft:"Petrol",wt:"2,560 kg",se:"5",fc:"19.8L",fh:"13.5L",fx:"16.5L"};
const ph8bb = {...ph8std, hp:"441 kW (592 hp)", tq:"900 Nm"};
for (const yr of ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|Phantom VIII|${yr}|Standard`] = {...ph8std, pr:"~$850,000"};
  specs[`${M}|Phantom VIII|${yr}|Extended Wheelbase`] = {...ph8std, wt:"2,640 kg", pr:"~$1,050,000"};
  specs[`${M}|Phantom VIII|${yr}|Black Badge`] = {...ph8bb, pr:"~$1,100,000"};
}

// === GHOST (2009-2013): 6.6L twin-turbo V12, 420kW ===
const ghost09 = {en:"6.6L twin-turbo V12",di:"6.6L",cy:"12",hp:"420 kW (563 hp)",tq:"780 Nm",tx:"8-speed automatic ZF",dr:"RWD",z1:"~4.7 sec",ts:"250 km/h",ft:"Petrol",wt:"2,435 kg",se:"5",fc:"17.5L",fh:"11.5L",fx:"14.5L"};
for (const yr of ["2009","2010","2011","2012","2013"]) {
  specs[`${M}|Ghost|${yr}|Standard`] = {...ghost09, pr:"~$450,000"};
  specs[`${M}|Ghost|${yr}|Extended Wheelbase`] = {...ghost09, wt:"2,490 kg", pr:"~$520,000"};
}

// === GHOST (2014-2020): slight refresh ===
const ghost14 = {...ghost09};
for (const yr of ["2014","2015","2016","2017","2018","2019","2020"]) {
  specs[`${M}|Ghost|${yr}|Standard`] = {...ghost14, pr:"~$480,000"};
  specs[`${M}|Ghost|${yr}|Extended Wheelbase`] = {...ghost14, wt:"2,490 kg", pr:"~$550,000"};
}

// === GHOST (2020-2026): New Gen, 6.75L twin-turbo V12, 420kW ===
const ghost20 = {en:"6.75L twin-turbo V12",di:"6.75L",cy:"12",hp:"420 kW (563 hp)",tq:"900 Nm",tx:"8-speed automatic ZF",dr:"AWD",z1:"~4.8 sec",ts:"250 km/h",ft:"Petrol",wt:"2,490 kg",se:"5",fc:"17.5L",fh:"11.5L",fx:"14.5L"};
const ghost20bb = {...ghost20, hp:"441 kW (592 hp)"};
for (const yr of ["2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|Ghost (2nd Gen)|${yr}|Standard`] = {...ghost20, pr:"~$590,000"};
  specs[`${M}|Ghost (2nd Gen)|${yr}|Extended Wheelbase`] = {...ghost20, wt:"2,560 kg", pr:"~$650,000"};
  specs[`${M}|Ghost (2nd Gen)|${yr}|Black Badge`] = {...ghost20bb, pr:"~$680,000"};
}

// === WRAITH (2013-2023): 6.6L twin-turbo V12, 465kW ===
const wraith = {en:"6.6L twin-turbo V12",di:"6.6L",cy:"12",hp:"465 kW (624 hp)",tq:"800 Nm",tx:"8-speed automatic ZF",dr:"RWD",z1:"~4.4 sec",ts:"250 km/h",ft:"Petrol",wt:"1,945 kg",se:"4",fc:"18.5L",fh:"12.5L",fx:"15.5L"};
const wraithBB = {...wraith, hp:"491 kW (660 hp)"};
for (const yr of ["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023"]) {
  specs[`${M}|Wraith|${yr}|Standard`] = {...wraith, pr:"~$580,000"};
  specs[`${M}|Wraith|${yr}|Black Badge`] = {...wraithBB, pr:"~$620,000"};
}

// === DAWN (2015-2023): 6.6L twin-turbo V12, 420kW, convertible ===
const dawn = {en:"6.6L twin-turbo V12",di:"6.6L",cy:"12",hp:"420 kW (563 hp)",tq:"780 Nm",tx:"8-speed automatic ZF",dr:"RWD",z1:"~4.9 sec",ts:"250 km/h",ft:"Petrol",wt:"2,635 kg",se:"4",fc:"19.0L",fh:"13.0L",fx:"16.0L"};
const dawnBB = {...dawn, hp:"441 kW (592 hp)"};
for (const yr of ["2015","2016","2017","2018","2019","2020","2021","2022","2023"]) {
  specs[`${M}|Dawn|${yr}|Standard`] = {...dawn, pr:"~$620,000"};
  specs[`${M}|Dawn|${yr}|Black Badge`] = {...dawnBB, pr:"~$660,000"};
}

// === CULLINAN (2018-2026): 6.75L twin-turbo V12, 420kW, SUV ===
const cullinan = {en:"6.75L twin-turbo V12",di:"6.75L",cy:"12",hp:"420 kW (563 hp)",tq:"850 Nm",tx:"8-speed automatic ZF",dr:"AWD",z1:"~5.2 sec",ts:"250 km/h",ft:"Petrol",wt:"2,660 kg",se:"5",fc:"20.0L",fh:"14.0L",fx:"17.0L"};
const cullinanBB = {...cullinan, hp:"441 kW (592 hp)"};
for (const yr of ["2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|Cullinan|${yr}|Standard`] = {...cullinan, pr:"~$600,000"};
  specs[`${M}|Cullinan|${yr}|Black Badge`] = {...cullinanBB, pr:"~$700,000"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement84.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement84.json written — ${count} entries`);
