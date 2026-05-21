'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Dacia
// ============================================================
const DA = 'Dacia';

// --- 1300 (1969–2004) ---
const d1300 = {en:"1289cc OHV I4",di:"1.3L",cy:"4",hp:"37 kW (50 hp)",tq:"89 Nm",tx:"4-speed manual",dr:"RWD",z1:"~20 sec",ts:"~130 km/h",ft:"Petrol",wt:"870 kg",se:"4",fc:"8.5L",fh:"6.5L",fx:"11.0L"};
for (const yr of ["1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004"]) {
  specs[`${DA}|1300|${yr}|Saloon`] = {...d1300, pr:`~$2,000`};
}

// --- Logan (2004–present) ---
const log1_14 = {en:"1390cc I4",di:"1.4L",cy:"4",hp:"55 kW (75 hp)",tq:"112 Nm",tx:"5-speed manual",dr:"FWD",z1:"~14 sec",ts:"~165 km/h",ft:"Petrol",wt:"1010 kg",se:"5",fc:"7.8L",fh:"5.8L",fx:"10.0L"};
for (const yr of ["2004","2005","2006","2007","2008","2009","2010","2011","2012"]) {
  specs[`${DA}|Logan|${yr}|1.4`] = {...log1_14, pr:`~$8,000`};
}
const log2_09 = {en:"898cc turbocharged I3",di:"0.9L",cy:"3",hp:"66 kW (90 hp)",tq:"135 Nm",tx:"5-speed manual",dr:"FWD",z1:"~12 sec",ts:"~172 km/h",ft:"Petrol",wt:"1065 kg",se:"5",fc:"5.8L",fh:"4.2L",fx:"7.6L"};
for (const yr of ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${DA}|Logan|${yr}|0.9 TCe`] = {...log2_09, pr:`~$10,000`};
}
const log3_10 = {en:"999cc turbocharged I3",di:"1.0L",cy:"3",hp:"67 kW (90 hp)",tq:"160 Nm",tx:"5-speed manual",dr:"FWD",z1:"~11.5 sec",ts:"~178 km/h",ft:"Petrol",wt:"1075 kg",se:"5",fc:"5.5L",fh:"4.0L",fx:"7.2L"};
for (const yr of ["2021","2022","2023","2024","2025","2026"]) specs[`${DA}|Logan|${yr}|1.0 TCe`] = {...log3_10, pr:`~$12,000`};

// --- Sandero (2008–present) ---
const san1_12 = {en:"1149cc I4",di:"1.2L",cy:"4",hp:"55 kW (75 hp)",tq:"107 Nm",tx:"5-speed manual",dr:"FWD",z1:"~14 sec",ts:"~162 km/h",ft:"Petrol",wt:"980 kg",se:"5",fc:"6.8L",fh:"5.0L",fx:"9.0L"};
for (const yr of ["2008","2009","2010","2011","2012"]) specs[`${DA}|Sandero|${yr}|1.2`] = {...san1_12, pr:`~$9,000`};
const san2_09 = {en:"898cc turbocharged I3",di:"0.9L",cy:"3",hp:"66 kW (90 hp)",tq:"135 Nm",tx:"5-speed manual",dr:"FWD",z1:"~12.5 sec",ts:"~170 km/h",ft:"Petrol",wt:"1015 kg",se:"5",fc:"5.6L",fh:"4.0L",fx:"7.4L"};
const san2_step = {en:"898cc turbocharged I3",di:"0.9L",cy:"3",hp:"66 kW (90 hp)",tq:"135 Nm",tx:"5-speed manual",dr:"FWD",z1:"~12.5 sec",ts:"~170 km/h",ft:"Petrol",wt:"1085 kg",se:"5",fc:"6.0L",fh:"4.3L",fx:"7.8L"};
for (const yr of ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${DA}|Sandero|${yr}|0.9 TCe`] = {...san2_09, pr:`~$11,000`};
  specs[`${DA}|Sandero|${yr}|Stepway`] = {...san2_step, pr:`~$13,000`};
}
const san3_10 = {en:"999cc turbocharged I3",di:"1.0L",cy:"3",hp:"67 kW (90 hp)",tq:"160 Nm",tx:"5-speed manual",dr:"FWD",z1:"~11.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"1040 kg",se:"5",fc:"5.5L",fh:"4.0L",fx:"7.2L"};
for (const yr of ["2021","2022","2023","2024","2025","2026"]) specs[`${DA}|Sandero|${yr}|1.0 TCe`] = {...san3_10, pr:`~$14,000`};

// --- Duster (2010–present) ---
const dus1_16 = {en:"1598cc I4",di:"1.6L",cy:"4",hp:"77 kW (105 hp)",tq:"148 Nm",tx:"5-speed manual",dr:"FWD",z1:"~12 sec",ts:"~175 km/h",ft:"Petrol",wt:"1235 kg",se:"5",fc:"8.2L",fh:"6.0L",fx:"11.0L"};
const dus1_awd = {en:"1598cc I4",di:"1.6L",cy:"4",hp:"77 kW (105 hp)",tq:"148 Nm",tx:"6-speed manual",dr:"AWD",z1:"~12.5 sec",ts:"~172 km/h",ft:"Petrol",wt:"1335 kg",se:"5",fc:"8.8L",fh:"6.4L",fx:"11.8L"};
for (const yr of ["2010","2011","2012","2013","2014","2015","2016","2017"]) {
  specs[`${DA}|Duster|${yr}|1.6 FWD`] = {...dus1_16, pr:`~$15,000`};
  specs[`${DA}|Duster|${yr}|1.6 AWD`] = {...dus1_awd, pr:`~$18,000`};
}
const dus2_10t = {en:"999cc turbocharged I3",di:"1.0L",cy:"3",hp:"74 kW (100 hp)",tq:"160 Nm",tx:"6-speed manual",dr:"FWD",z1:"~12 sec",ts:"~178 km/h",ft:"Petrol",wt:"1265 kg",se:"5",fc:"6.0L",fh:"4.5L",fx:"8.0L"};
for (const yr of ["2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${DA}|Duster|${yr}|1.0 TCe`] = {...dus2_10t, pr:`~$20,000`};
}

// --- Spring (2021–present) ---
const spring = {en:"Electric motor",di:"26.8 kWh",cy:"Electric",hp:"33 kW (45 hp)",tq:"125 Nm",tx:"Single-speed auto",dr:"FWD",z1:"~19.1 sec",ts:"~125 km/h",ft:"Electric",wt:"970 kg",se:"4",fc:"225 km (WLTP)",fh:"—",fx:"—"};
const spring_ext = {en:"Electric motor",di:"48 kWh",cy:"Electric",hp:"48 kW (65 hp)",tq:"113 Nm",tx:"Single-speed auto",dr:"FWD",z1:"~13.7 sec",ts:"~150 km/h",ft:"Electric",wt:"1050 kg",se:"4",fc:"395 km (WLTP)",fh:"—",fx:"—"};
for (const yr of ["2021","2022","2023","2024","2025","2026"]) {
  specs[`${DA}|Spring|${yr}|Standard`] = {...spring, pr:`~$18,000`};
  specs[`${DA}|Spring|${yr}|Extended Range`] = {...spring_ext, pr:`~$22,000`};
}

// --- Jogger (2022–present) ---
const jog_10 = {en:"999cc turbocharged I3",di:"1.0L",cy:"3",hp:"67 kW (90 hp)",tq:"160 Nm",tx:"6-speed manual",dr:"FWD",z1:"~11.8 sec",ts:"~175 km/h",ft:"Petrol",wt:"1320 kg",se:"7",fc:"6.0L",fh:"4.5L",fx:"8.0L"};
for (const yr of ["2022","2023","2024","2025","2026"]) specs[`${DA}|Jogger|${yr}|1.0 TCe`] = {...jog_10, pr:`~$18,000`};

// ============================================================
// Smart
// ============================================================
const SM = 'Smart';

// --- Fortwo (1998–present) ---
const fw1_06 = {en:"599cc turbocharged I3",di:"0.6L",cy:"3",hp:"45 kW (61 hp)",tq:"70 Nm",tx:"6-speed automated manual",dr:"RWD",z1:"~15 sec",ts:"~135 km/h",ft:"Petrol",wt:"730 kg",se:"2",fc:"5.5L",fh:"4.5L",fx:"7.0L"};
for (const yr of ["1998","1999","2000","2001","2002","2003","2004","2005","2006","2007"]) specs[`${SM}|Fortwo|${yr}|0.6 Turbo`] = {...fw1_06, pr:`~$14,000`};

const fw2_10 = {en:"999cc turbocharged I3",di:"1.0L",cy:"3",hp:"52 kW (71 hp)",tq:"92 Nm",tx:"5-speed automated manual",dr:"RWD",z1:"~14.5 sec",ts:"~140 km/h",ft:"Petrol",wt:"750 kg",se:"2",fc:"5.2L",fh:"4.2L",fx:"6.8L"};
const fw2_brabus = {en:"999cc turbocharged I3 (Brabus)",di:"1.0L",cy:"3",hp:"72 kW (98 hp)",tq:"147 Nm",tx:"5-speed automated manual",dr:"RWD",z1:"~10.9 sec",ts:"~155 km/h",ft:"Petrol",wt:"790 kg",se:"2",fc:"6.0L",fh:"4.8L",fx:"7.8L"};
for (const yr of ["2007","2008","2009","2010","2011","2012","2013","2014"]) {
  specs[`${SM}|Fortwo|${yr}|1.0`] = {...fw2_10, pr:`~$17,000`};
  specs[`${SM}|Fortwo|${yr}|Brabus`] = {...fw2_brabus, pr:`~$24,000`};
}

const fw3_10t = {en:"898cc turbocharged I3",di:"0.9L",cy:"3",hp:"66 kW (90 hp)",tq:"135 Nm",tx:"6-speed dual-clutch",dr:"RWD",z1:"~10.5 sec",ts:"~155 km/h",ft:"Petrol",wt:"965 kg",se:"2",fc:"5.0L",fh:"3.8L",fx:"6.6L"};
const fw3_ev = {en:"Electric motor",di:"17.6 kWh",cy:"Electric",hp:"60 kW (82 hp)",tq:"160 Nm",tx:"Single-speed auto",dr:"RWD",z1:"~11.5 sec",ts:"~130 km/h",ft:"Electric",wt:"1085 kg",se:"2",fc:"159 km (WLTP)",fh:"—",fx:"—"};
for (const yr of ["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SM}|Fortwo|${yr}|0.9 Turbo`] = {...fw3_10t, pr:`~$22,000`};
  specs[`${SM}|Fortwo|${yr}|Electric`] = {...fw3_ev, pr:`~$32,000`};
}

// --- Roadster (2003–2006) ---
const road = {en:"698cc turbocharged I3",di:"0.7L",cy:"3",hp:"60 kW (82 hp)",tq:"110 Nm",tx:"6-speed automated manual",dr:"RWD",z1:"~10.9 sec",ts:"~180 km/h",ft:"Petrol",wt:"790 kg",se:"2",fc:"6.5L",fh:"5.0L",fx:"8.5L"};
const road_b = {en:"698cc turbocharged I3 (Brabus)",di:"0.7L",cy:"3",hp:"74 kW (101 hp)",tq:"140 Nm",tx:"6-speed automated manual",dr:"RWD",z1:"~10.2 sec",ts:"~190 km/h",ft:"Petrol",wt:"790 kg",se:"2",fc:"7.0L",fh:"5.3L",fx:"9.0L"};
for (const yr of ["2003","2004","2005","2006"]) {
  specs[`${SM}|Roadster|${yr}|Standard`] = {...road, pr:`~$24,000`};
  specs[`${SM}|Roadster|${yr}|Brabus`] = {...road_b, pr:`~$30,000`};
}

// --- Forfour (2004–2006, 2014–present) ---
const ff1 = {en:"1332cc I4",di:"1.3L",cy:"4",hp:"65 kW (88 hp)",tq:"118 Nm",tx:"6-speed automated manual",dr:"RWD",z1:"~12.5 sec",ts:"~162 km/h",ft:"Petrol",wt:"930 kg",se:"4",fc:"6.8L",fh:"5.2L",fx:"9.0L"};
for (const yr of ["2004","2005","2006"]) specs[`${SM}|Forfour|${yr}|1.3`] = {...ff1, pr:`~$18,000`};

const ff2_09t = {en:"898cc turbocharged I3",di:"0.9L",cy:"3",hp:"66 kW (90 hp)",tq:"135 Nm",tx:"6-speed dual-clutch",dr:"RWD",z1:"~11.5 sec",ts:"~160 km/h",ft:"Petrol",wt:"1085 kg",se:"4",fc:"5.5L",fh:"4.0L",fx:"7.2L"};
const ff2_ev = {en:"Electric motor",di:"22.0 kWh",cy:"Electric",hp:"60 kW (82 hp)",tq:"160 Nm",tx:"Single-speed auto",dr:"RWD",z1:"~12.7 sec",ts:"~130 km/h",ft:"Electric",wt:"1198 kg",se:"4",fc:"155 km (WLTP)",fh:"—",fx:"—"};
for (const yr of ["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SM}|Forfour|${yr}|0.9 Turbo`] = {...ff2_09t, pr:`~$24,000`};
  specs[`${SM}|Forfour|${yr}|Electric`] = {...ff2_ev, pr:`~$34,000`};
}

// ============================================================
// Alpina (BMW-based)
// ============================================================
const AL = 'Alpina';

// --- B3 (E36/E46/E90/F30/G20) ---
const b3_e36 = {en:"2990cc turbocharged I6",di:"3.0L",cy:"6",hp:"206 kW (280 hp)",tq:"400 Nm",tx:"6-speed manual",dr:"RWD",z1:"~5.7 sec",ts:"~275 km/h",ft:"Petrol",wt:"1475 kg",se:"4",fc:"11.5L",fh:"8.5L",fx:"15.5L"};
for (const yr of ["1994","1995","1996","1997","1998"]) specs[`${AL}|B3|${yr}|E36 Biturbo`] = {...b3_e36, pr:`~$65,000`};

const b3_e46 = {en:"2979cc turbocharged I6",di:"3.0L",cy:"6",hp:"246 kW (334 hp)",tq:"490 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.9 sec",ts:"~295 km/h",ft:"Petrol",wt:"1550 kg",se:"4",fc:"12.0L",fh:"9.0L",fx:"16.0L"};
for (const yr of ["1999","2000","2001","2002","2003","2004","2005","2006"]) specs[`${AL}|B3|${yr}|E46 Biturbo`] = {...b3_e46, pr:`~$90,000`};

const b3_e90 = {en:"2979cc turbocharged I6",di:"3.0L",cy:"6",hp:"272 kW (370 hp)",tq:"520 Nm",tx:"7-speed switch-tronic",dr:"RWD",z1:"~4.6 sec",ts:"~300 km/h",ft:"Petrol",wt:"1620 kg",se:"4",fc:"11.5L",fh:"8.2L",fx:"15.5L"};
for (const yr of ["2007","2008","2009","2010","2011","2012","2013"]) specs[`${AL}|B3|${yr}|E90 Biturbo`] = {...b3_e90, pr:`~$115,000`};

const b3_f30 = {en:"2979cc turbocharged I6",di:"3.0L",cy:"6",hp:"302 kW (411 hp)",tq:"600 Nm",tx:"8-speed auto",dr:"AWD",z1:"~3.8 sec",ts:"~315 km/h",ft:"Petrol",wt:"1680 kg",se:"4",fc:"10.5L",fh:"7.8L",fx:"14.0L"};
for (const yr of ["2013","2014","2015","2016","2017","2018","2019","2020"]) specs[`${AL}|B3|${yr}|F30 Biturbo`] = {...b3_f30, pr:`~$145,000`};

const b3_g20 = {en:"2998cc turbocharged I6",di:"3.0L",cy:"6",hp:"338 kW (460 hp)",tq:"700 Nm",tx:"8-speed auto",dr:"AWD",z1:"~3.4 sec",ts:"~320 km/h",ft:"Petrol",wt:"1760 kg",se:"4",fc:"10.8L",fh:"8.0L",fx:"14.5L"};
for (const yr of ["2020","2021","2022","2023","2024","2025","2026"]) specs[`${AL}|B3|${yr}|G20 Biturbo`] = {...b3_g20, pr:`~$175,000`};

// --- B5 ---
const b5_e60 = {en:"4398cc turbocharged V8",di:"4.4L",cy:"8",hp:"388 kW (528 hp)",tq:"730 Nm",tx:"6-speed switch-tronic",dr:"RWD",z1:"~4.5 sec",ts:"~330 km/h",ft:"Petrol",wt:"1910 kg",se:"4",fc:"14.5L",fh:"10.5L",fx:"19.5L"};
for (const yr of ["2004","2005","2006","2007","2008","2009","2010"]) specs[`${AL}|B5|${yr}|E60 Biturbo`] = {...b5_e60, pr:`~$160,000`};

const b5_f10 = {en:"4395cc turbocharged V8",di:"4.4L",cy:"8",hp:"412 kW (560 hp)",tq:"800 Nm",tx:"8-speed auto",dr:"AWD",z1:"~4.2 sec",ts:"~330 km/h",ft:"Petrol",wt:"2025 kg",se:"4",fc:"13.5L",fh:"9.8L",fx:"18.5L"};
for (const yr of ["2011","2012","2013","2014","2015","2016","2017"]) specs[`${AL}|B5|${yr}|F10 Biturbo`] = {...b5_f10, pr:`~$220,000`};

const b5_g30 = {en:"4395cc turbocharged V8",di:"4.4L",cy:"8",hp:"451 kW (614 hp)",tq:"800 Nm",tx:"8-speed auto",dr:"AWD",z1:"~3.5 sec",ts:"~330 km/h",ft:"Petrol",wt:"2100 kg",se:"4",fc:"12.5L",fh:"9.0L",fx:"17.0L"};
for (const yr of ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) specs[`${AL}|B5|${yr}|G30 Biturbo`] = {...b5_g30, pr:`~$250,000`};

// --- B7 ---
const b7_e65 = {en:"4398cc turbocharged V8",di:"4.4L",cy:"8",hp:"373 kW (507 hp)",tq:"700 Nm",tx:"6-speed switch-tronic",dr:"RWD",z1:"~4.8 sec",ts:"~330 km/h",ft:"Petrol",wt:"2100 kg",se:"4",fc:"15.0L",fh:"11.0L",fx:"20.0L"};
for (const yr of ["2005","2006","2007","2008","2009","2010","2011","2012"]) specs[`${AL}|B7|${yr}|E65 Biturbo`] = {...b7_e65, pr:`~$180,000`};

const b7_g11 = {en:"4395cc turbocharged V8",di:"4.4L",cy:"8",hp:"451 kW (614 hp)",tq:"800 Nm",tx:"8-speed auto",dr:"AWD",z1:"~3.6 sec",ts:"~330 km/h",ft:"Petrol",wt:"2185 kg",se:"4",fc:"12.8L",fh:"9.2L",fx:"17.5L"};
for (const yr of ["2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) specs[`${AL}|B7|${yr}|G11 Biturbo`] = {...b7_g11, pr:`~$310,000`};

// --- XB7 ---
const xb7 = {en:"4395cc turbocharged V8",di:"4.4L",cy:"8",hp:"451 kW (621 hp)",tq:"800 Nm",tx:"8-speed auto",dr:"AWD",z1:"~3.8 sec",ts:"~290 km/h",ft:"Petrol",wt:"2625 kg",se:"7",fc:"13.5L",fh:"9.5L",fx:"18.5L"};
for (const yr of ["2020","2021","2022","2023","2024","2025","2026"]) specs[`${AL}|XB7|${yr}|Biturbo`] = {...xb7, pr:`~$230,000`};

// --- B8 ---
const b8 = {en:"4395cc turbocharged V8",di:"4.4L",cy:"8",hp:"451 kW (614 hp)",tq:"800 Nm",tx:"8-speed auto",dr:"AWD",z1:"~3.4 sec",ts:"~330 km/h",ft:"Petrol",wt:"1970 kg",se:"4",fc:"12.5L",fh:"9.0L",fx:"17.0L"};
for (const yr of ["2020","2021","2022","2023","2024","2025","2026"]) specs[`${AL}|B8|${yr}|Biturbo`] = {...b8, pr:`~$260,000`};

const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement102.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement102.json written — ${count} entries`);
