'use strict';
const fs = require('fs');

const specs = {};
const M = 'Triumph';

// ============================================================
// SPORTS CARS
// ============================================================

// TR2 (1953–1955)
const tr2 = {en:"1991cc Wet-liner I4",di:"2.0L",cy:"4",hp:"56 kW (75 hp)",tq:"132 Nm",tx:"4-speed manual",dr:"RWD",z1:"~12 sec",ts:"~170 km/h",ft:"Petrol",wt:"851 kg",se:"2",fc:"11.5L",fh:"8.5L",fx:"13.5L"};
for (const yr of ["1953","1954","1955"]) {
  specs[`${M}|TR2|${yr}|Standard`] = {...tr2, pr:"~$2,100"};
}

// TR3 (1955–1957)
const tr3 = {en:"1991cc Wet-liner I4",di:"2.0L",cy:"4",hp:"63 kW (85 hp)",tq:"136 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11.5 sec",ts:"~172 km/h",ft:"Petrol",wt:"860 kg",se:"2",fc:"11.5L",fh:"8.5L",fx:"13.5L"};
for (const yr of ["1955","1956","1957"]) {
  specs[`${M}|TR3|${yr}|Standard`] = {...tr3, pr:"~$2,400"};
}

// TR3A (1957–1962)
const tr3a = {en:"1991cc Wet-liner I4",di:"2.0L",cy:"4",hp:"70 kW (95 hp)",tq:"142 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"860 kg",se:"2",fc:"11.5L",fh:"8.5L",fx:"13.5L"};
for (const yr of ["1957","1958","1959","1960","1961","1962"]) {
  specs[`${M}|TR3A|${yr}|Standard`] = {...tr3a, pr:"~$2,600"};
}

// TR4 (1961–1965)
const tr4std = {en:"2138cc Wet-liner I4",di:"2.1L",cy:"4",hp:"78 kW (105 hp)",tq:"169 Nm",tx:"4-speed all-synchro manual",dr:"RWD",z1:"~10.5 sec",ts:"~180 km/h",ft:"Petrol",wt:"941 kg",se:"2",fc:"11.8L",fh:"8.8L",fx:"14.0L"};
for (const yr of ["1961","1962","1963","1964","1965"]) {
  specs[`${M}|TR4|${yr}|Standard`] = {...tr4std, pr:"~$2,800"};
  specs[`${M}|TR4|${yr}|Surrey`] = {...tr4std, pr:"~$3,000"};
}

// TR4A (1965–1967)
const tr4a = {...tr4std, en:"2138cc I4 IRS"};
for (const yr of ["1965","1966","1967"]) {
  specs[`${M}|TR4A|${yr}|Standard`] = {...tr4a, pr:"~$3,000"};
  specs[`${M}|TR4A|${yr}|Surrey`] = {...tr4a, pr:"~$3,200"};
}

// TR5 (1967–1968)
const tr5 = {en:"2498cc PI I6 fuel-injected",di:"2.5L",cy:"6",hp:"105 kW (143 hp)",tq:"220 Nm",tx:"4-speed manual",dr:"RWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"976 kg",se:"2",fc:"12.5L",fh:"9.0L",fx:"15.0L"};
for (const yr of ["1967","1968"]) {
  specs[`${M}|TR5|${yr}|Standard`] = {...tr5, pr:"~$3,400"};
}

// TR6 (1969–1976)
const tr6 = {en:"2498cc CP I6",di:"2.5L",cy:"6",hp:"94 kW (126 hp)",tq:"204 Nm",tx:"4-speed manual",dr:"RWD",z1:"~8.5 sec",ts:"~192 km/h",ft:"Petrol",wt:"1,015 kg",se:"2",fc:"12.0L",fh:"9.0L",fx:"14.5L"};
const tr6pi = {...tr6, hp:"105 kW (143 hp)", tq:"220 Nm", en:"2498cc PI I6 fuel-injected"};
for (const yr of ["1969","1970","1971","1972","1973","1974","1975","1976"]) {
  specs[`${M}|TR6|${yr}|Standard`] = {...tr6, pr:"~$5,500"};
}

// TR7 (1975–1981)
const tr7cpe = {en:"1998cc Slant I4",di:"2.0L",cy:"4",hp:"75 kW (100 hp)",tq:"163 Nm",tx:"5-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,030 kg",se:"2",fc:"10.5L",fh:"7.8L",fx:"13.0L"};
const tr7drop = {...tr7cpe, wt:"1,080 kg"};
for (const yr of ["1975","1976","1977","1978","1979","1980","1981"]) {
  specs[`${M}|TR7|${yr}|Coupe`] = {...tr7cpe, pr:"~$9,500"};
  if (parseInt(yr) >= 1979) {
    specs[`${M}|TR7|${yr}|Drophead`] = {...tr7drop, pr:"~$12,000"};
  }
}

// TR8 (1979–1981)
const tr8cpe = {en:"3528cc Rover V8",di:"3.5L",cy:"8",hp:"107 kW (144 hp)",tq:"272 Nm",tx:"5-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,138 kg",se:"2",fc:"14.0L",fh:"10.0L",fx:"17.0L"};
const tr8drop = {...tr8cpe, wt:"1,185 kg"};
for (const yr of ["1979","1980","1981"]) {
  specs[`${M}|TR8|${yr}|Coupe`] = {...tr8cpe, pr:"~$16,000"};
  specs[`${M}|TR8|${yr}|Drophead`] = {...tr8drop, pr:"~$17,500"};
}

// Spitfire Mk1 (1962–1964)
const spit1 = {en:"1147cc I4",di:"1.1L",cy:"4",hp:"48 kW (64 hp)",tq:"87 Nm",tx:"4-speed manual",dr:"RWD",z1:"~15 sec",ts:"~155 km/h",ft:"Petrol",wt:"686 kg",se:"2",fc:"9.0L",fh:"6.5L",fx:"11.0L"};
for (const yr of ["1962","1963","1964"]) {
  specs[`${M}|Spitfire Mk1|${yr}|Standard`] = {...spit1, pr:"~$1,800"};
}

// Spitfire Mk2 (1965–1967)
const spit2 = {...spit1, hp:"50 kW (67 hp)", tq:"90 Nm"};
for (const yr of ["1965","1966","1967"]) {
  specs[`${M}|Spitfire Mk2|${yr}|Standard`] = {...spit2, pr:"~$1,950"};
}

// Spitfire Mk3 (1967–1970)
const spit3 = {en:"1296cc I4",di:"1.3L",cy:"4",hp:"58 kW (78 hp)",tq:"110 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13.5 sec",ts:"~160 km/h",ft:"Petrol",wt:"711 kg",se:"2",fc:"9.5L",fh:"7.0L",fx:"11.5L"};
for (const yr of ["1967","1968","1969","1970"]) {
  specs[`${M}|Spitfire Mk3|${yr}|Standard`] = {...spit3, pr:"~$2,100"};
}

// Spitfire Mk4 (1970–1974)
const spit4 = {...spit3, hp:"47 kW (63 hp)", tq:"98 Nm"};
for (const yr of ["1970","1971","1972","1973","1974"]) {
  specs[`${M}|Spitfire Mk4|${yr}|Standard`] = {...spit4, pr:"~$2,300"};
}

// Spitfire 1500 (1974–1980)
const spit1500 = {en:"1493cc I4",di:"1.5L",cy:"4",hp:"53 kW (71 hp)",tq:"107 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13 sec",ts:"~162 km/h",ft:"Petrol",wt:"771 kg",se:"2",fc:"9.5L",fh:"7.0L",fx:"11.5L"};
for (const yr of ["1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${M}|Spitfire 1500|${yr}|Standard`] = {...spit1500, pr:"~$3,200"};
}

// GT6 Mk1 (1966–1968)
const gt6mk1 = {en:"1998cc OHV I6",di:"2.0L",cy:"6",hp:"75 kW (100 hp)",tq:"163 Nm",tx:"4-speed manual",dr:"RWD",z1:"~10 sec",ts:"~180 km/h",ft:"Petrol",wt:"828 kg",se:"2",fc:"10.5L",fh:"7.8L",fx:"13.0L"};
for (const yr of ["1966","1967","1968"]) {
  specs[`${M}|GT6 Mk1|${yr}|Standard`] = {...gt6mk1, pr:"~$2,500"};
}

// GT6 Mk2 (1968–1970)
const gt6mk2 = {...gt6mk1, en:"1998cc OHV I6 IRS"};
for (const yr of ["1968","1969","1970"]) {
  specs[`${M}|GT6 Mk2|${yr}|Standard`] = {...gt6mk2, pr:"~$2,700"};
}

// GT6 Mk3 (1970–1973)
const gt6mk3 = {...gt6mk2};
for (const yr of ["1970","1971","1972","1973"]) {
  specs[`${M}|GT6 Mk3|${yr}|Standard`] = {...gt6mk3, pr:"~$3,000"};
}

// Stag (1970–1977)
const stagM = {en:"2997cc OHC V8",di:"3.0L",cy:"8",hp:"97 kW (130 hp)",tq:"218 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~190 km/h",ft:"Petrol",wt:"1,210 kg",se:"4",fc:"13.5L",fh:"10.0L",fx:"16.5L"};
const stagA = {...stagM, tx:"3-speed automatic"};
for (const yr of ["1970","1971","1972","1973","1974","1975","1976","1977"]) {
  specs[`${M}|Stag|${yr}|Standard`] = {...stagM, pr:"~$5,000"};
  specs[`${M}|Stag|${yr}|Automatic`] = {...stagA, pr:"~$5,200"};
}

// ============================================================
// FAMILY CARS
// ============================================================

// Herald (1959–1971)
const herald948 = {en:"948cc OHV I4",di:"0.9L",cy:"4",hp:"28 kW (38 hp)",tq:"62 Nm",tx:"4-speed manual",dr:"RWD",z1:"~25 sec",ts:"~125 km/h",ft:"Petrol",wt:"700 kg",se:"4",fc:"9.0L",fh:"6.5L",fx:"11.0L"};
const herald1200 = {en:"1147cc OHV I4",di:"1.1L",cy:"4",hp:"36 kW (48 hp)",tq:"82 Nm",tx:"4-speed manual",dr:"RWD",z1:"~21 sec",ts:"~135 km/h",ft:"Petrol",wt:"710 kg",se:"4",fc:"9.0L",fh:"6.5L",fx:"11.0L"};
for (const yr of ["1959","1960","1961"]) {
  specs[`${M}|Herald|${yr}|948`] = {...herald948, pr:"~$1,500"};
}
for (const yr of ["1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971"]) {
  specs[`${M}|Herald|${yr}|1200`] = {...herald1200, pr:"~$1,700"};
}

// Vitesse (1962–1971)
const vitesse1600 = {en:"1596cc OHV I6",di:"1.6L",cy:"6",hp:"56 kW (75 hp)",tq:"117 Nm",tx:"4-speed manual",dr:"RWD",z1:"~12 sec",ts:"~160 km/h",ft:"Petrol",wt:"800 kg",se:"4",fc:"10.5L",fh:"7.8L",fx:"13.0L"};
const vitesse2l = {en:"1998cc OHV I6",di:"2.0L",cy:"6",hp:"75 kW (100 hp)",tq:"163 Nm",tx:"4-speed manual",dr:"RWD",z1:"~10 sec",ts:"~175 km/h",ft:"Petrol",wt:"820 kg",se:"4",fc:"11.0L",fh:"8.0L",fx:"13.5L"};
for (const yr of ["1962","1963","1964","1965","1966"]) {
  specs[`${M}|Vitesse|${yr}|1600`] = {...vitesse1600, pr:"~$2,000"};
}
for (const yr of ["1966","1967","1968","1969","1970","1971"]) {
  specs[`${M}|Vitesse|${yr}|2-Litre`] = {...vitesse2l, pr:"~$2,400"};
}

// 2000 (1963–1969)
const t2000 = {en:"1998cc OHC I4",di:"2.0L",cy:"4",hp:"74 kW (100 hp)",tq:"156 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,100 kg",se:"5",fc:"11.0L",fh:"8.0L",fx:"13.5L"};
for (const yr of ["1963","1964","1965","1966","1967","1968","1969"]) {
  specs[`${M}|2000|${yr}|Standard`] = {...t2000, pr:"~$2,500"};
}

// 2500 (1969–1977)
const t2500tc = {en:"2498cc PI I6 carb",di:"2.5L",cy:"6",hp:"89 kW (119 hp)",tq:"200 Nm",tx:"4-speed manual",dr:"RWD",z1:"~10 sec",ts:"~178 km/h",ft:"Petrol",wt:"1,120 kg",se:"5",fc:"12.0L",fh:"9.0L",fx:"14.5L"};
const t2500s = {en:"2498cc PI I6 fuel-injected",di:"2.5L",cy:"6",hp:"105 kW (140 hp)",tq:"220 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,130 kg",se:"5",fc:"12.5L",fh:"9.0L",fx:"15.0L"};
for (const yr of ["1969","1970","1971","1972","1973","1974","1975","1976","1977"]) {
  specs[`${M}|2500|${yr}|Standard`] = {...t2500tc, pr:"~$3,500"};
  specs[`${M}|2500|${yr}|TC`] = {...t2500tc, pr:"~$3,700"};
  specs[`${M}|2500|${yr}|S`] = {...t2500s, pr:"~$4,200"};
}

// Dolomite (1972–1980)
const dolo1300 = {en:"1296cc OHV I4",di:"1.3L",cy:"4",hp:"49 kW (65 hp)",tq:"98 Nm",tx:"4-speed manual",dr:"RWD",z1:"~14 sec",ts:"~148 km/h",ft:"Petrol",wt:"950 kg",se:"4",fc:"9.5L",fh:"7.0L",fx:"11.5L"};
const dolo1500 = {en:"1493cc OHV I4",di:"1.5L",cy:"4",hp:"56 kW (75 hp)",tq:"113 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13 sec",ts:"~155 km/h",ft:"Petrol",wt:"950 kg",se:"4",fc:"9.8L",fh:"7.2L",fx:"12.0L"};
const dolo1850 = {en:"1854cc OHC I4",di:"1.9L",cy:"4",hp:"69 kW (93 hp)",tq:"145 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11.5 sec",ts:"~162 km/h",ft:"Petrol",wt:"960 kg",se:"4",fc:"10.0L",fh:"7.5L",fx:"12.5L"};
const doloSprint = {en:"1998cc DOHC 16v I4",di:"2.0L",cy:"4",hp:"86 kW (115 hp)",tq:"170 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"970 kg",se:"4",fc:"10.5L",fh:"7.8L",fx:"13.0L"};
for (const yr of ["1976","1977","1978","1979","1980"]) {
  specs[`${M}|Dolomite|${yr}|1300`] = {...dolo1300, pr:"~$4,500"};
  specs[`${M}|Dolomite|${yr}|1500`] = {...dolo1500, pr:"~$5,000"};
}
for (const yr of ["1972","1973","1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${M}|Dolomite|${yr}|1850`] = {...dolo1850, pr:"~$5,500"};
}
for (const yr of ["1973","1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${M}|Dolomite|${yr}|Sprint`] = {...doloSprint, pr:"~$7,500"};
}

// Acclaim (1981–1984)
const acclaim = {en:"1335cc Honda I4",di:"1.3L",cy:"4",hp:"49 kW (66 hp)",tq:"100 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13.5 sec",ts:"~158 km/h",ft:"Petrol",wt:"895 kg",se:"5",ca:"N/A",fc:"8.5L",fh:"6.2L",fx:"10.5L"};
for (const yr of ["1981","1982","1983","1984"]) {
  specs[`${M}|Acclaim|${yr}|CL`] = {...acclaim, pr:"~$10,500"};
  specs[`${M}|Acclaim|${yr}|CD`] = {...acclaim, pr:"~$11,500"};
  specs[`${M}|Acclaim|${yr}|HLS`] = {...acclaim, pr:"~$13,000"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement91.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement91.json written — ${count} entries`);
