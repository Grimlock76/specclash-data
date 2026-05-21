'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// MG (classic)
// ============================================================
const MG = 'MG';

// --- MGA (1955–1962) ---
const mga_15 = {en:"1489cc OHV I4",di:"1.5L",cy:"4",hp:"56 kW (76 hp)",tq:"114 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13 sec",ts:"~169 km/h",ft:"Petrol",wt:"856 kg",se:"2",fc:"10.0L",fh:"7.5L",fx:"13.0L"};
const mga_twin = {en:"1588cc DOHC I4",di:"1.6L",cy:"4",hp:"75 kW (102 hp)",tq:"137 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~183 km/h",ft:"Petrol",wt:"920 kg",se:"2",fc:"10.5L",fh:"8.0L",fx:"14.0L"};
for (const yr of ["1955","1956","1957","1958","1959"]) specs[`${MG}|MGA|${yr}|1500`] = {...mga_15, pr:`~$2,000`};
for (const yr of ["1958","1959","1960","1961","1962"]) {
  specs[`${MG}|MGA|${yr}|1600`] = {...mga_15, hp:"59 kW (80 hp)", di:"1.6L", pr:`~$2,200`};
  specs[`${MG}|MGA|${yr}|Twin Cam`] = {...mga_twin, pr:`~$3,200`};
}

// --- MGB (1962–1980) ---
const mgb_18 = {en:"1798cc OHV I4",di:"1.8L",cy:"4",hp:"70 kW (95 hp)",tq:"151 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"920 kg",se:"2",fc:"10.5L",fh:"8.0L",fx:"13.5L"};
const mgb_v8 = {en:"3528cc Rover V8",di:"3.5L",cy:"8",hp:"107 kW (145 hp)",tq:"265 Nm",tx:"4-speed manual",dr:"RWD",z1:"~8.0 sec",ts:"~200 km/h",ft:"Petrol",wt:"960 kg",se:"2",fc:"13.0L",fh:"9.5L",fx:"17.0L"};
for (const yr of ["1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${MG}|MGB|${yr}|Roadster`] = {...mgb_18, pr:`~$3,500`};
  specs[`${MG}|MGB|${yr}|GT`] = {...mgb_18, wt:"980 kg", se:"2+2", pr:`~$3,800`};
}
for (const yr of ["1973","1974","1975","1976"]) specs[`${MG}|MGB|${yr}|GT V8`] = {...mgb_v8, pr:`~$5,500`};

// --- MGC (1967–1969) ---
const mgc = {en:"2912cc OHC I6",di:"2.9L",cy:"6",hp:"107 kW (145 hp)",tq:"238 Nm",tx:"4-speed manual",dr:"RWD",z1:"~10 sec",ts:"~193 km/h",ft:"Petrol",wt:"1020 kg",se:"2",fc:"12.0L",fh:"9.0L",fx:"15.5L"};
for (const yr of ["1967","1968","1969"]) {
  specs[`${MG}|MGC|${yr}|Roadster`] = {...mgc, pr:`~$4,200`};
  specs[`${MG}|MGC|${yr}|GT`] = {...mgc, wt:"1065 kg", pr:`~$4,500`};
}

// --- Midget (1961–1979) ---
const mid_948 = {en:"948cc OHV I4",di:"0.9L",cy:"4",hp:"33 kW (45 hp)",tq:"70 Nm",tx:"4-speed manual",dr:"RWD",z1:"~19 sec",ts:"~143 km/h",ft:"Petrol",wt:"635 kg",se:"2",fc:"8.0L",fh:"6.2L",fx:"10.5L"};
for (const yr of ["1961","1962","1963","1964","1965"]) specs[`${MG}|Midget|${yr}|Mk I`] = {...mid_948, pr:`~$1,200`};
const mid_1275 = {en:"1275cc OHV I4",di:"1.3L",cy:"4",hp:"49 kW (67 hp)",tq:"101 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13.5 sec",ts:"~160 km/h",ft:"Petrol",wt:"680 kg",se:"2",fc:"8.5L",fh:"6.5L",fx:"11.0L"};
for (const yr of ["1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979"]) specs[`${MG}|Midget|${yr}|Mk III`] = {...mid_1275, pr:`~$1,800`};

// --- Metro MG (1982–1990) ---
const met_mg = {en:"1275cc OHV I4 twin-carb",di:"1.3L",cy:"4",hp:"60 kW (82 hp)",tq:"118 Nm",tx:"5-speed manual",dr:"FWD",z1:"~11 sec",ts:"~170 km/h",ft:"Petrol",wt:"760 kg",se:"4",fc:"8.0L",fh:"6.0L",fx:"10.5L"};
const met_turbo = {en:"1275cc OHV I4 turbocharged",di:"1.3L",cy:"4",hp:"73 kW (100 hp)",tq:"165 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.8 sec",ts:"~185 km/h",ft:"Petrol",wt:"770 kg",se:"4",fc:"8.5L",fh:"6.5L",fx:"11.0L"};
for (const yr of ["1982","1983","1984","1985","1986","1987","1988","1989","1990"]) {
  specs[`${MG}|Metro|${yr}|MG`] = {...met_mg, pr:`~$6,000`};
  specs[`${MG}|Metro|${yr}|Turbo`] = {...met_turbo, pr:`~$8,500`};
}

// --- ZR / ZS / ZT (2001–2005) ---
const zr = {en:"1396cc OHC I4",di:"1.4L",cy:"4",hp:"66 kW (90 hp)",tq:"126 Nm",tx:"5-speed manual",dr:"FWD",z1:"~12 sec",ts:"~180 km/h",ft:"Petrol",wt:"1065 kg",se:"4",fc:"8.2L",fh:"6.2L",fx:"10.8L"};
const zr160 = {en:"1796cc OHC I4",di:"1.8L",cy:"4",hp:"118 kW (160 hp)",tq:"215 Nm",tx:"5-speed manual",dr:"FWD",z1:"~7.0 sec",ts:"~220 km/h",ft:"Petrol",wt:"1110 kg",se:"4",fc:"10.0L",fh:"7.5L",fx:"13.5L"};
const zt_25v6 = {en:"2497cc V6",di:"2.5L",cy:"6",hp:"127 kW (173 hp)",tq:"240 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.5 sec",ts:"~225 km/h",ft:"Petrol",wt:"1485 kg",se:"5",fc:"11.5L",fh:"8.5L",fx:"15.0L"};
const zt_260 = {en:"4601cc Ford V8",di:"4.6L",cy:"8",hp:"194 kW (264 hp)",tq:"420 Nm",tx:"5-speed auto",dr:"RWD",z1:"~6.2 sec",ts:"~245 km/h",ft:"Petrol",wt:"1590 kg",se:"5",fc:"14.0L",fh:"10.0L",fx:"19.0L"};
for (const yr of ["2001","2002","2003","2004","2005"]) {
  specs[`${MG}|ZR|${yr}|1.4`] = {...zr, pr:`~$15,000`};
  specs[`${MG}|ZR|${yr}|160`] = {...zr160, pr:`~$22,000`};
  specs[`${MG}|ZT|${yr}|2.5 V6`] = {...zt_25v6, pr:`~$28,000`};
  specs[`${MG}|ZT|${yr}|260`] = {...zt_260, pr:`~$38,000`};
}

// ============================================================
// Abarth
// ============================================================
const AB = 'Abarth';

// --- 500 / 595 / 695 (2008–present) ---
const aba_500 = {en:"1368cc turbocharged I4",di:"1.4L",cy:"4",hp:"99 kW (135 hp)",tq:"206 Nm",tx:"5-speed manual",dr:"FWD",z1:"~7.9 sec",ts:"~210 km/h",ft:"Petrol",wt:"1035 kg",se:"4",fc:"7.0L",fh:"5.2L",fx:"9.2L"};
const aba_595 = {en:"1368cc turbocharged I4",di:"1.4L",cy:"4",hp:"107 kW (145 hp)",tq:"210 Nm",tx:"5-speed manual",dr:"FWD",z1:"~7.5 sec",ts:"~218 km/h",ft:"Petrol",wt:"1035 kg",se:"4",fc:"7.2L",fh:"5.4L",fx:"9.5L"};
const aba_695 = {en:"1368cc turbocharged I4",di:"1.4L",cy:"4",hp:"118 kW (160 hp)",tq:"230 Nm",tx:"5-speed manual",dr:"FWD",z1:"~6.9 sec",ts:"~225 km/h",ft:"Petrol",wt:"1060 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.8L"};
const aba_695_bipost = {en:"1368cc turbocharged I4",di:"1.4L",cy:"4",hp:"132 kW (180 hp)",tq:"250 Nm",tx:"5-speed manual",dr:"FWD",z1:"~6.7 sec",ts:"~232 km/h",ft:"Petrol",wt:"1010 kg",se:"4",fc:"7.8L",fh:"6.0L",fx:"10.2L"};
for (const yr of ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${AB}|500|${yr}|135`] = {...aba_500, pr:`~$28,000`};
  specs[`${AB}|595|${yr}|145`] = {...aba_595, pr:`~$34,000`};
  specs[`${AB}|695|${yr}|160`] = {...aba_695, pr:`~$40,000`};
  specs[`${AB}|695|${yr}|Biposto`] = {...aba_695_bipost, pr:`~$48,000`};
}

// --- Punto Abarth (2007–2012) ---
const punto_ab = {en:"1368cc turbocharged I4",di:"1.4L",cy:"4",hp:"114 kW (155 hp)",tq:"230 Nm",tx:"5-speed manual",dr:"FWD",z1:"~7.5 sec",ts:"~218 km/h",ft:"Petrol",wt:"1155 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.8L"};
const esseesse = {en:"1368cc turbocharged I4",di:"1.4L",cy:"4",hp:"118 kW (160 hp)",tq:"230 Nm",tx:"5-speed manual",dr:"FWD",z1:"~7.2 sec",ts:"~225 km/h",ft:"Petrol",wt:"1120 kg",se:"4",fc:"7.8L",fh:"6.0L",fx:"10.2L"};
for (const yr of ["2007","2008","2009","2010","2011","2012"]) {
  specs[`${AB}|Punto|${yr}|155 HP`] = {...punto_ab, pr:`~$26,000`};
  specs[`${AB}|Punto|${yr}|esseesse`] = {...esseesse, pr:`~$31,000`};
}

// --- 124 Spider (2016–2020) ---
const aba_124 = {en:"1368cc turbocharged I4",di:"1.4L",cy:"4",hp:"99 kW (135 hp)",tq:"240 Nm",tx:"6-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~215 km/h",ft:"Petrol",wt:"1060 kg",se:"2",fc:"6.8L",fh:"5.0L",fx:"9.0L"};
const aba_124_rally = {en:"1368cc turbocharged I4",di:"1.4L",cy:"4",hp:"118 kW (160 hp)",tq:"250 Nm",tx:"6-speed manual",dr:"RWD",z1:"~6.8 sec",ts:"~232 km/h",ft:"Petrol",wt:"1020 kg",se:"2",fc:"7.2L",fh:"5.5L",fx:"9.5L"};
for (const yr of ["2016","2017","2018","2019","2020"]) {
  specs[`${AB}|124 Spider|${yr}|Standard`] = {...aba_124, pr:`~$38,000`};
  specs[`${AB}|124 Spider|${yr}|Rally Tribute`] = {...aba_124_rally, pr:`~$48,000`};
}

// ============================================================
// DS Automobiles
// ============================================================
const DS = 'DS';

// --- DS3 (2010–present) ---
const ds3_12 = {en:"1199cc turbocharged I3",di:"1.2L",cy:"3",hp:"96 kW (130 hp)",tq:"230 Nm",tx:"6-speed manual",dr:"FWD",z1:"~9.2 sec",ts:"~202 km/h",ft:"Petrol",wt:"1110 kg",se:"4",fc:"5.5L",fh:"4.0L",fx:"7.3L"};
const ds3_cross_e = {en:"Electric motor",di:"54 kWh",cy:"Electric",hp:"115 kW (156 hp)",tq:"260 Nm",tx:"Single-speed auto",dr:"FWD",z1:"~8.7 sec",ts:"~150 km/h",ft:"Electric",wt:"1590 kg",se:"4",fc:"400 km (WLTP)",fh:"—",fx:"—"};
for (const yr of ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"]) specs[`${DS}|DS3|${yr}|1.2 PureTech`] = {...ds3_12, pr:`~$28,000`};
for (const yr of ["2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${DS}|DS3|${yr}|1.2 PureTech`] = {...ds3_12, pr:`~$35,000`};
  specs[`${DS}|DS3|${yr}|E-Tense`] = {...ds3_cross_e, pr:`~$55,000`};
}

// --- DS4 (2011–present) ---
const ds4_15 = {en:"1499cc turbocharged I4",di:"1.5L",cy:"4",hp:"96 kW (130 hp)",tq:"230 Nm",tx:"8-speed auto",dr:"FWD",z1:"~9.8 sec",ts:"~205 km/h",ft:"Petrol",wt:"1365 kg",se:"5",fc:"6.2L",fh:"4.5L",fx:"8.2L"};
const ds4_phev = {en:"1598cc turbocharged I4 + electric",di:"1.6L",cy:"4",hp:"165 kW (225 hp)",tq:"360 Nm",tx:"8-speed auto",dr:"FWD",z1:"~7.7 sec",ts:"~235 km/h",ft:"Hybrid",wt:"1650 kg",se:"5",fc:"5.0L",fh:"3.8L",fx:"6.5L"};
for (const yr of ["2011","2012","2013","2014","2015","2016","2017","2018","2019"]) specs[`${DS}|DS4|${yr}|THP 165`] = {...ds4_15, hp:"121 kW (165 hp)", pr:`~$32,000`};
for (const yr of ["2021","2022","2023","2024","2025","2026"]) {
  specs[`${DS}|DS4|${yr}|PureTech 130`] = {...ds4_15, pr:`~$48,000`};
  specs[`${DS}|DS4|${yr}|E-Tense 225`] = {...ds4_phev, pr:`~$62,000`};
}

// --- DS5 (2011–2018) ---
const ds5_20 = {en:"1998cc turbocharged I4",di:"2.0L",cy:"4",hp:"121 kW (165 hp)",tq:"285 Nm",tx:"6-speed auto",dr:"FWD",z1:"~9.0 sec",ts:"~222 km/h",ft:"Petrol",wt:"1430 kg",se:"5",fc:"8.5L",fh:"6.2L",fx:"11.5L"};
for (const yr of ["2011","2012","2013","2014","2015","2016","2017","2018"]) specs[`${DS}|DS5|${yr}|THP 165`] = {...ds5_20, pr:`~$38,000`};

// --- DS7 Crossback (2017–present) ---
const ds7_18 = {en:"1598cc turbocharged I4",di:"1.6L",cy:"4",hp:"133 kW (180 hp)",tq:"250 Nm",tx:"8-speed auto",dr:"FWD",z1:"~8.7 sec",ts:"~225 km/h",ft:"Petrol",wt:"1520 kg",se:"5",fc:"7.5L",fh:"5.5L",fx:"10.0L"};
const ds7_e300 = {en:"1598cc turbocharged I4 + electric",di:"1.6L",cy:"4",hp:"221 kW (300 hp)",tq:"520 Nm",tx:"8-speed auto",dr:"AWD",z1:"~5.9 sec",ts:"~240 km/h",ft:"Hybrid",wt:"2050 kg",se:"5",fc:"6.0L",fh:"4.5L",fx:"8.0L"};
for (const yr of ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${DS}|DS7|${yr}|PureTech 180`] = {...ds7_18, pr:`~$52,000`};
  specs[`${DS}|DS7|${yr}|E-Tense 300`] = {...ds7_e300, pr:`~$70,000`};
}

// --- DS9 (2021–present) ---
const ds9_18 = {en:"1598cc turbocharged I4",di:"1.6L",cy:"4",hp:"133 kW (180 hp)",tq:"250 Nm",tx:"8-speed auto",dr:"FWD",z1:"~9.0 sec",ts:"~222 km/h",ft:"Petrol",wt:"1700 kg",se:"5",fc:"7.0L",fh:"5.2L",fx:"9.5L"};
const ds9_e360 = {en:"1598cc turbocharged I4 + electric",di:"1.6L",cy:"4",hp:"265 kW (360 hp)",tq:"520 Nm",tx:"8-speed auto",dr:"AWD",z1:"~5.6 sec",ts:"~250 km/h",ft:"Hybrid",wt:"2100 kg",se:"5",fc:"5.5L",fh:"4.0L",fx:"7.5L"};
for (const yr of ["2021","2022","2023","2024","2025","2026"]) {
  specs[`${DS}|DS9|${yr}|PureTech 180`] = {...ds9_18, pr:`~$68,000`};
  specs[`${DS}|DS9|${yr}|E-Tense 360`] = {...ds9_e360, pr:`~$88,000`};
}

// ============================================================
// Wiesmann
// ============================================================
const WI = 'Wiesmann';

// --- MF3 Roadster (2003–2014) ---
const mf3_32 = {en:"3246cc BMW S54 I6",di:"3.2L",cy:"6",hp:"252 kW (343 hp)",tq:"365 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.9 sec",ts:"~265 km/h",ft:"Petrol",wt:"1250 kg",se:"2",fc:"13.5L",fh:"9.8L",fx:"18.0L"};
const mf3_v8 = {en:"4000cc BMW V8",di:"4.0L",cy:"8",hp:"236 kW (321 hp)",tq:"400 Nm",tx:"6-speed manual",dr:"RWD",z1:"~5.0 sec",ts:"~260 km/h",ft:"Petrol",wt:"1290 kg",se:"2",fc:"14.0L",fh:"10.0L",fx:"18.5L"};
for (const yr of ["2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014"]) {
  specs[`${WI}|MF3|${yr}|S54 Roadster`] = {...mf3_32, pr:`~$80,000`};
  specs[`${WI}|MF3|${yr}|V8 Roadster`] = {...mf3_v8, pr:`~$90,000`};
}

// --- GT MF4 (2003–2014) ---
const mf4_v8 = {en:"4799cc BMW V8",di:"4.8L",cy:"8",hp:"270 kW (367 hp)",tq:"490 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.7 sec",ts:"~270 km/h",ft:"Petrol",wt:"1420 kg",se:"2",fc:"14.5L",fh:"10.5L",fx:"19.5L"};
const mf4s_v10 = {en:"5000cc BMW V10",di:"5.0L",cy:"10",hp:"373 kW (507 hp)",tq:"520 Nm",tx:"6-speed SMG",dr:"RWD",z1:"~3.9 sec",ts:"~295 km/h",ft:"Petrol",wt:"1380 kg",se:"2",fc:"17.0L",fh:"12.0L",fx:"23.0L"};
for (const yr of ["2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014"]) {
  specs[`${WI}|GT MF4|${yr}|V8`] = {...mf4_v8, pr:`~$95,000`};
  specs[`${WI}|GT MF4|${yr}|S V10`] = {...mf4s_v10, pr:`~$130,000`};
}

// --- MF5 (2009–2014) ---
const mf5 = {en:"5000cc BMW S85 V10",di:"5.0L",cy:"10",hp:"373 kW (507 hp)",tq:"520 Nm",tx:"7-speed SMG",dr:"RWD",z1:"~3.9 sec",ts:"~300 km/h",ft:"Petrol",wt:"1390 kg",se:"2",fc:"17.0L",fh:"12.0L",fx:"23.0L"};
for (const yr of ["2009","2010","2011","2012","2013","2014"]) specs[`${WI}|MF5|${yr}|V10`] = {...mf5, pr:`~$175,000`};

// --- Project Gecko (2023–present) ---
const gecko = {en:"3.0L turbocharged BMW I6 + electric",di:"3.0L",cy:"6",hp:"368 kW (500 hp)",tq:"750 Nm",tx:"8-speed auto",dr:"AWD",z1:"~3.5 sec",ts:"~300 km/h",ft:"Hybrid",wt:"1650 kg",se:"2",fc:"8.0L",fh:"6.0L",fx:"11.0L"};
for (const yr of ["2023","2024","2025","2026"]) specs[`${WI}|Gecko|${yr}|GT`] = {...gecko, pr:`~$280,000`};

const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement104.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement104.json written — ${count} entries`);
