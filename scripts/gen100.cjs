'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Bugatti
// ============================================================
const BU = 'Bugatti';

// --- Type 35 (1924–1931) ---
const t35 = {en:"1991cc SOHC I8 supercharged",di:"2.0L",cy:"8",hp:"75 kW (100 hp)",tq:"160 Nm",tx:"4-speed manual",dr:"RWD",z1:"~8 sec",ts:"~190 km/h",ft:"Petrol",wt:"750 kg",se:"1",fc:"20.0L",fh:"15.0L",fx:"28.0L"};
for (const yr of ["1924","1925","1926","1927","1928","1929","1930","1931"]) specs[`${BU}|Type 35|${yr}|Grand Prix`] = {...t35, pr:`~$400,000`};

// --- Type 41 Royale (1927–1933) ---
const t41 = {en:"12763cc SOHC I8",di:"12.8L",cy:"8",hp:"224 kW (300 hp)",tq:"780 Nm",tx:"3-speed manual",dr:"RWD",z1:"~10 sec",ts:"~200 km/h",ft:"Petrol",wt:"3175 kg",se:"4",fc:"50.0L",fh:"35.0L",fx:"70.0L"};
for (const yr of ["1927","1928","1929","1930","1931","1932","1933"]) specs[`${BU}|Type 41 Royale|${yr}|Berline`] = {...t41, pr:`~$15,000,000`};

// --- Type 57 (1934–1940) ---
const t57 = {en:"3257cc DOHC I8",di:"3.3L",cy:"8",hp:"112 kW (150 hp)",tq:"235 Nm",tx:"4-speed manual",dr:"RWD",z1:"~10 sec",ts:"~185 km/h",ft:"Petrol",wt:"1100 kg",se:"4",fc:"18.0L",fh:"13.0L",fx:"25.0L"};
const t57sc = {en:"3257cc DOHC I8 supercharged",di:"3.3L",cy:"8",hp:"186 kW (250 hp)",tq:"310 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~225 km/h",ft:"Petrol",wt:"1050 kg",se:"2",fc:"20.0L",fh:"14.0L",fx:"28.0L"};
for (const yr of ["1934","1935","1936","1937","1938","1939","1940"]) {
  specs[`${BU}|Type 57|${yr}|Galibier`] = {...t57, pr:`~$500,000`};
  specs[`${BU}|Type 57|${yr}|Atlantic SC`] = {...t57sc, pr:`~$5,000,000`};
}

// --- EB110 (1991–1995) ---
const eb110_gt = {en:"3499cc quad-turbocharged V12",di:"3.5L",cy:"12",hp:"412 kW (560 hp)",tq:"611 Nm",tx:"6-speed manual",dr:"AWD",z1:"~3.2 sec",ts:"~343 km/h",ft:"Petrol",wt:"1625 kg",se:"2",fc:"22.0L",fh:"15.0L",fx:"30.0L"};
const eb110_ss = {en:"3499cc quad-turbocharged V12",di:"3.5L",cy:"12",hp:"449 kW (611 hp)",tq:"650 Nm",tx:"6-speed manual",dr:"AWD",z1:"~3.0 sec",ts:"~351 km/h",ft:"Petrol",wt:"1570 kg",se:"2",fc:"23.0L",fh:"16.0L",fx:"32.0L"};
for (const yr of ["1991","1992","1993","1994","1995"]) {
  specs[`${BU}|EB110|${yr}|GT`] = {...eb110_gt, pr:`~$350,000`};
  specs[`${BU}|EB110|${yr}|Super Sport`] = {...eb110_ss, pr:`~$450,000`};
}

// --- Veyron 16.4 (2005–2015) ---
const vey_16 = {en:"7993cc quad-turbocharged W16",di:"8.0L",cy:"16",hp:"736 kW (1001 hp)",tq:"1250 Nm",tx:"7-speed DSG",dr:"AWD",z1:"~2.5 sec",ts:"~407 km/h",ft:"Petrol",wt:"1888 kg",se:"2",fc:"24.0L",fh:"14.0L",fx:"40.0L"};
const vey_ss = {en:"7993cc quad-turbocharged W16",di:"8.0L",cy:"16",hp:"882 kW (1200 hp)",tq:"1500 Nm",tx:"7-speed DSG",dr:"AWD",z1:"~2.5 sec",ts:"~431 km/h",ft:"Petrol",wt:"1838 kg",se:"2",fc:"26.0L",fh:"15.0L",fx:"42.0L"};
const vey_vitesse = {en:"7993cc quad-turbocharged W16",di:"8.0L",cy:"16",hp:"882 kW (1200 hp)",tq:"1500 Nm",tx:"7-speed DSG",dr:"AWD",z1:"~2.6 sec",ts:"~408 km/h",ft:"Petrol",wt:"1990 kg",se:"2",fc:"26.0L",fh:"15.0L",fx:"42.0L"};
for (const yr of ["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015"]) {
  specs[`${BU}|Veyron|${yr}|16.4`] = {...vey_16, pr:`~$1,700,000`};
  specs[`${BU}|Veyron|${yr}|Super Sport`] = {...vey_ss, pr:`~$2,600,000`};
  specs[`${BU}|Veyron|${yr}|Grand Sport Vitesse`] = {...vey_vitesse, pr:`~$2,600,000`};
}

// --- Chiron (2016–present) ---
const chi = {en:"7993cc quad-turbocharged W16",di:"8.0L",cy:"16",hp:"1103 kW (1500 hp)",tq:"1600 Nm",tx:"7-speed DSG",dr:"AWD",z1:"~2.4 sec",ts:"~420 km/h",ft:"Petrol",wt:"1996 kg",se:"2",fc:"22.7L",fh:"14.5L",fx:"35.5L"};
const chi_ss = {en:"7993cc quad-turbocharged W16",di:"8.0L",cy:"16",hp:"1177 kW (1600 hp)",tq:"1600 Nm",tx:"7-speed DSG",dr:"AWD",z1:"~2.3 sec",ts:"~440 km/h",ft:"Petrol",wt:"1978 kg",se:"2",fc:"23.0L",fh:"15.0L",fx:"37.0L"};
const chi_pur = {en:"7993cc quad-turbocharged W16",di:"8.0L",cy:"16",hp:"1103 kW (1500 hp)",tq:"1600 Nm",tx:"7-speed DSG",dr:"AWD",z1:"~2.3 sec",ts:"~350 km/h",ft:"Petrol",wt:"1978 kg",se:"2",fc:"22.7L",fh:"14.5L",fx:"35.5L"};
for (const yr of ["2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${BU}|Chiron|${yr}|Standard`] = {...chi, pr:`~$3,200,000`};
  specs[`${BU}|Chiron|${yr}|Super Sport 300+`] = {...chi_ss, pr:`~$3,900,000`};
  specs[`${BU}|Chiron|${yr}|Pur Sport`] = {...chi_pur, pr:`~$3,600,000`};
}

// --- Tourbillon (2026–) ---
const tourb = {en:"7993cc W16 hybrid",di:"8.0L",cy:"16",hp:"1103 kW (1500 hp)+electric",tq:"1800 Nm",tx:"8-speed DSG",dr:"AWD",z1:"~2.0 sec",ts:"~445 km/h",ft:"Hybrid",wt:"2150 kg",se:"2",fc:"18.0L",fh:"12.0L",fx:"25.0L"};
specs[`${BU}|Tourbillon|2026|Standard`] = {...tourb, pr:`~$4,600,000`};

// ============================================================
// Pagani
// ============================================================
const PA = 'Pagani';

// --- Zonda C12 (1999–2003) ---
const zonda_c12 = {en:"5987cc SOHC V12 (Mercedes AMG)",di:"6.0L",cy:"12",hp:"394 kW (535 hp)",tq:"671 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.7 sec",ts:"~320 km/h",ft:"Petrol",wt:"1180 kg",se:"2",fc:"20.0L",fh:"13.0L",fx:"28.0L"};
for (const yr of ["1999","2000","2001","2002","2003"]) specs[`${PA}|Zonda|${yr}|C12`] = {...zonda_c12, pr:`~$600,000`};

// --- Zonda S (2000–2005) ---
const zonda_s = {en:"7010cc SOHC V12 (Mercedes AMG)",di:"7.0L",cy:"12",hp:"441 kW (600 hp)",tq:"760 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.7 sec",ts:"~340 km/h",ft:"Petrol",wt:"1250 kg",se:"2",fc:"21.0L",fh:"14.0L",fx:"30.0L"};
for (const yr of ["2000","2001","2002","2003","2004","2005"]) specs[`${PA}|Zonda|${yr}|S`] = {...zonda_s, pr:`~$700,000`};

// --- Zonda F (2005–2009) ---
const zonda_f = {en:"7291cc SOHC V12 (Mercedes AMG)",di:"7.3L",cy:"12",hp:"530 kW (720 hp)",tq:"780 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.5 sec",ts:"~345 km/h",ft:"Petrol",wt:"1230 kg",se:"2",fc:"22.0L",fh:"15.0L",fx:"32.0L"};
const zonda_f_roadster = {en:"7291cc SOHC V12 (Mercedes AMG)",di:"7.3L",cy:"12",hp:"530 kW (720 hp)",tq:"780 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.6 sec",ts:"~340 km/h",ft:"Petrol",wt:"1350 kg",se:"2",fc:"22.5L",fh:"15.5L",fx:"33.0L"};
for (const yr of ["2005","2006","2007","2008","2009"]) {
  specs[`${PA}|Zonda|${yr}|F Coupe`] = {...zonda_f, pr:`~$1,400,000`};
  specs[`${PA}|Zonda|${yr}|F Roadster`] = {...zonda_f_roadster, pr:`~$1,600,000`};
}

// --- Zonda R (2009–2012) ---
const zonda_r = {en:"7291cc SOHC V12 (Mercedes AMG)",di:"7.3L",cy:"12",hp:"604 kW (820 hp)",tq:"850 Nm",tx:"6-speed sequential",dr:"RWD",z1:"~2.7 sec",ts:"~370 km/h",ft:"Petrol",wt:"1070 kg",se:"1",fc:"25.0L",fh:"18.0L",fx:"38.0L"};
for (const yr of ["2009","2010","2011","2012"]) specs[`${PA}|Zonda|${yr}|R`] = {...zonda_r, pr:`~$2,000,000`};

// --- Huayra (2011–present) ---
const huayra = {en:"5980cc twin-turbocharged V12 (Mercedes AMG)",di:"6.0L",cy:"12",hp:"552 kW (750 hp)",tq:"1000 Nm",tx:"7-speed AMT",dr:"RWD",z1:"~3.3 sec",ts:"~383 km/h",ft:"Petrol",wt:"1350 kg",se:"2",fc:"18.0L",fh:"12.0L",fx:"26.0L"};
const huayra_r = {en:"6000cc NA V12",di:"6.0L",cy:"12",hp:"625 kW (850 hp)",tq:"900 Nm",tx:"6-speed sequential",dr:"RWD",z1:"~2.9 sec",ts:"~330 km/h",ft:"Petrol",wt:"1050 kg",se:"1",fc:"25.0L",fh:"18.0L",fx:"38.0L"};
const huayra_bc = {en:"5980cc twin-turbocharged V12 (Mercedes AMG)",di:"6.0L",cy:"12",hp:"588 kW (800 hp)",tq:"1050 Nm",tx:"7-speed AMT",dr:"RWD",z1:"~2.8 sec",ts:"~380 km/h",ft:"Petrol",wt:"1218 kg",se:"2",fc:"20.0L",fh:"13.0L",fx:"28.0L"};
for (const yr of ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${PA}|Huayra|${yr}|Coupe`] = {...huayra, pr:`~$2,600,000`};
  specs[`${PA}|Huayra|${yr}|BC`] = {...huayra_bc, pr:`~$2,800,000`};
}
for (const yr of ["2021","2022","2023","2024","2025","2026"]) specs[`${PA}|Huayra|${yr}|R`] = {...huayra_r, pr:`~$3,400,000`};

// --- Utopia (2022–present) ---
const utopia = {en:"5980cc twin-turbocharged V12 (Mercedes AMG)",di:"6.0L",cy:"12",hp:"662 kW (900 hp)",tq:"1100 Nm",tx:"7-speed AMT",dr:"RWD",z1:"~2.9 sec",ts:"~400 km/h",ft:"Petrol",wt:"1280 kg",se:"2",fc:"19.0L",fh:"13.0L",fx:"27.0L"};
for (const yr of ["2022","2023","2024","2025","2026"]) specs[`${PA}|Utopia|${yr}|Standard`] = {...utopia, pr:`~$3,600,000`};

// ============================================================
// Koenigsegg
// ============================================================
const KO = 'Koenigsegg';

// --- CC8S (2002–2004) ---
const cc8s = {en:"4700cc supercharged V8",di:"4.7L",cy:"8",hp:"537 kW (730 hp)",tq:"750 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.5 sec",ts:"~395 km/h",ft:"Petrol",wt:"700 kg",se:"2",fc:"22.0L",fh:"15.0L",fx:"32.0L"};
for (const yr of ["2002","2003","2004"]) specs[`${KO}|CC8S|${yr}|Standard`] = {...cc8s, pr:`~$650,000`};

// --- CCR (2004–2006) ---
const ccr = {en:"4700cc supercharged V8",di:"4.7L",cy:"8",hp:"612 kW (817 hp)",tq:"920 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.2 sec",ts:"~387 km/h",ft:"Petrol/E85",wt:"655 kg",se:"2",fc:"22.0L",fh:"14.0L",fx:"32.0L"};
for (const yr of ["2004","2005","2006"]) specs[`${KO}|CCR|${yr}|Standard`] = {...ccr, pr:`~$800,000`};

// --- CCX (2006–2010) ---
const ccx = {en:"4700cc supercharged V8",di:"4.7L",cy:"8",hp:"712 kW (967 hp)",tq:"1060 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.2 sec",ts:"~395 km/h",ft:"Petrol/E85",wt:"1180 kg",se:"2",fc:"22.0L",fh:"14.0L",fx:"32.0L"};
const ccxr = {en:"4700cc supercharged V8",di:"4.7L",cy:"8",hp:"806 kW (1080 hp)",tq:"1100 Nm",tx:"6-speed manual",dr:"RWD",z1:"~2.9 sec",ts:"~408 km/h",ft:"E85/Petrol",wt:"1080 kg",se:"2",fc:"22.0L",fh:"14.0L",fx:"32.0L"};
for (const yr of ["2006","2007","2008","2009","2010"]) {
  specs[`${KO}|CCX|${yr}|Standard`] = {...ccx, pr:`~$900,000`};
  specs[`${KO}|CCX|${yr}|R Edition`] = {...ccxr, pr:`~$1,100,000`};
}

// --- Agera (2011–2018) ---
const agera = {en:"5000cc twin-turbocharged V8",di:"5.0L",cy:"8",hp:"760 kW (1034 hp)",tq:"1100 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~2.9 sec",ts:"~418 km/h",ft:"Petrol/E85",wt:"1435 kg",se:"2",fc:"20.0L",fh:"13.0L",fx:"30.0L"};
const agera_rs = {en:"5000cc twin-turbocharged V8",di:"5.0L",cy:"8",hp:"882 kW (1176 hp)",tq:"1280 Nm",tx:"7-speed dual-clutch",dr:"RWD",z1:"~2.8 sec",ts:"~458 km/h",ft:"Petrol/E85",wt:"1395 kg",se:"2",fc:"21.0L",fh:"14.0L",fx:"32.0L"};
for (const yr of ["2011","2012","2013","2014","2015","2016","2017","2018"]) {
  specs[`${KO}|Agera|${yr}|Standard`] = {...agera, pr:`~$1,500,000`};
  specs[`${KO}|Agera|${yr}|RS`] = {...agera_rs, pr:`~$2,100,000`};
}

// --- Jesko (2020–present) ---
const jesko = {en:"5000cc twin-turbocharged V8",di:"5.0L",cy:"8",hp:"1119 kW (1521 hp)",tq:"1500 Nm",tx:"9-speed Light Speed Transmission",dr:"RWD",z1:"~2.5 sec",ts:"~483 km/h",ft:"Petrol/E85",wt:"1420 kg",se:"2",fc:"20.0L",fh:"13.0L",fx:"30.0L"};
const jesko_abs = {en:"5000cc twin-turbocharged V8",di:"5.0L",cy:"8",hp:"1119 kW (1521 hp)",tq:"1500 Nm",tx:"9-speed Light Speed Transmission",dr:"RWD",z1:"~2.5 sec",ts:"~330 km/h",ft:"Petrol/E85",wt:"1420 kg",se:"2",fc:"20.0L",fh:"13.0L",fx:"30.0L"};
for (const yr of ["2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${KO}|Jesko|${yr}|Absolut`] = {...jesko, pr:`~$3,100,000`};
  specs[`${KO}|Jesko|${yr}|Attack`] = {...jesko_abs, pr:`~$3,000,000`};
}

// --- Gemera (2023–present) ---
const gemera = {en:"2.0L turbocharged I3 + 3 electric motors",di:"2.0L",cy:"3",hp:"1287 kW (1750 hp)",tq:"3500 Nm",tx:"9-speed dual-clutch",dr:"AWD",z1:"~1.9 sec",ts:"~400 km/h",ft:"Hybrid/E85",wt:"1850 kg",se:"4",fc:"8.0L",fh:"5.5L",fx:"12.0L"};
for (const yr of ["2023","2024","2025","2026"]) specs[`${KO}|Gemera|${yr}|Standard`] = {...gemera, pr:`~$3,000,000`};

// --- Regera (2016–2020) ---
const regera = {en:"5000cc twin-turbocharged V8 + 3 electric motors",di:"5.0L",cy:"8",hp:"1100 kW (1500 hp)",tq:"2000 Nm",tx:"Single-speed direct drive",dr:"RWD",z1:"~2.7 sec",ts:"~400 km/h",ft:"Hybrid",wt:"1628 kg",se:"2",fc:"17.0L",fh:"11.0L",fx:"25.0L"};
for (const yr of ["2016","2017","2018","2019","2020"]) specs[`${KO}|Regera|${yr}|Standard`] = {...regera, pr:`~$1,900,000`};

const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement100.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement100.json written — ${count} entries`);
