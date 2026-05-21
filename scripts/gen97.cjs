'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Hudson (1909–1957)
// ============================================================
const HU = 'Hudson';

// --- Super Six (1948–1952) ---
const ss6 = {en:"4.2L Flathead I6",di:"4.2L",cy:"6",hp:"93 kW (128 hp)",tq:"290 Nm",tx:"3-speed manual",dr:"RWD",z1:"~14 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,588 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["1948","1949","1950","1951","1952"]) {
  specs[`${HU}|Super Six|${yr}|Standard`] = {...ss6, pr:"~$2,500"};
  specs[`${HU}|Super Six|${yr}|Brougham`] = {...ss6, pr:"~$2,900"};
}

// --- Hornet (1951–1957) ---
const hornet_std = {en:"5.0L Flathead I6 Twin H-Power",di:"5.0L",cy:"6",hp:"112 kW (158 hp)",tq:"339 Nm",tx:"3-speed manual",dr:"RWD",z1:"~11 sec",ts:"~180 km/h",ft:"Petrol",wt:"1,655 kg",se:"5",fc:"15.5L",fh:"11.0L",fx:"19.5L"};
const hornet_spec = {en:"5.0L Flathead I6 Twin H-Power",di:"5.0L",cy:"6",hp:"112 kW (158 hp)",tq:"339 Nm",tx:"3-speed manual",dr:"RWD",z1:"~11.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,600 kg",se:"5",fc:"15.5L",fh:"11.0L",fx:"19.5L"};
for (const yr of ["1951","1952","1953","1954"]) {
  specs[`${HU}|Hornet|${yr}|Standard`] = {...hornet_std, pr:"~$3,200"};
  specs[`${HU}|Hornet|${yr}|Hollywood`] = {...hornet_std, pr:"~$3,600"};
  specs[`${HU}|Hornet|${yr}|Convertible`] = {...hornet_std, pr:"~$3,900"};
}
for (const yr of ["1954","1955"]) {
  specs[`${HU}|Hornet|${yr}|Special`] = {...hornet_spec, pr:"~$3,000"};
}
for (const yr of ["1955","1956","1957"]) {
  specs[`${HU}|Hornet|${yr}|Standard`] = {...hornet_std, pr:"~$3,200"};
  specs[`${HU}|Hornet|${yr}|Hornet Custom`] = {...hornet_std, pr:"~$3,700"};
}

// --- Jet (1953–1954) ---
const jet_33 = {en:"202ci L-head I6",di:"3.3L",cy:"6",hp:"78 kW (104 hp)",tq:"210 Nm",tx:"3-speed manual",dr:"RWD",z1:"~17 sec",ts:"~152 km/h",ft:"Petrol",wt:"1,400 kg",se:"5",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
for (const yr of ["1953","1954"]) {
  specs[`${HU}|Jet|${yr}|Standard`] = {...jet_33, pr:"~$2,100"};
  specs[`${HU}|Jet|${yr}|Super Jet`] = {...jet_33, pr:"~$2,400"};
}

// --- Italia (1954–1955) ---
specs[`${HU}|Italia|1954|Standard`] = {en:"202ci Jet I6",di:"3.3L",cy:"6",hp:"78 kW (104 hp)",tq:"210 Nm",tx:"3-speed manual",dr:"RWD",z1:"~16 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,180 kg",se:"2",fc:"13.0L",fh:"9.5L",fx:"16.5L",pr:"~$8,500"};
specs[`${HU}|Italia|1955|Standard`] = {en:"202ci Jet I6",di:"3.3L",cy:"6",hp:"78 kW (104 hp)",tq:"210 Nm",tx:"3-speed manual",dr:"RWD",z1:"~16 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,180 kg",se:"2",fc:"13.0L",fh:"9.5L",fx:"16.5L",pr:"~$8,500"};

// --- Commodore (1946–1952) ---
const com_six = {en:"5.0L Flathead I6",di:"5.0L",cy:"6",hp:"93 kW (125 hp)",tq:"305 Nm",tx:"3-speed manual",dr:"RWD",z1:"~15 sec",ts:"~160 km/h",ft:"Petrol",wt:"1,600 kg",se:"5",fc:"15.5L",fh:"11.0L",fx:"19.5L"};
const com_eight = {en:"254ci Flathead I8",di:"4.2L",cy:"8",hp:"97 kW (130 hp)",tq:"271 Nm",tx:"3-speed manual",dr:"RWD",z1:"~14 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,620 kg",se:"5",fc:"15.5L",fh:"11.0L",fx:"19.5L"};
for (const yr of ["1946","1947","1948","1949","1950","1951","1952"]) {
  specs[`${HU}|Commodore|${yr}|Six`] = {...com_six, pr:"~$2,700"};
  specs[`${HU}|Commodore|${yr}|Eight`] = {...com_eight, pr:"~$3,000"};
}

// ============================================================
// Nash (1917–1957)
// ============================================================
const NA = 'Nash';

// --- 600 / Statesman (1941–1957) ---
const nash600_41 = {en:"194ci flathead I6",di:"3.2L",cy:"6",hp:"56 kW (75 hp)",tq:"178 Nm",tx:"3-speed manual",dr:"RWD",z1:"~18 sec",ts:"~130 km/h",ft:"Petrol",wt:"1,400 kg",se:"5",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
const nash600_51 = {en:"234ci OHV I6",di:"3.8L",cy:"6",hp:"75 kW (100 hp)",tq:"210 Nm",tx:"3-speed manual",dr:"RWD",z1:"~16 sec",ts:"~140 km/h",ft:"Petrol",wt:"1,400 kg",se:"5",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
for (const yr of ["1941","1942","1946","1947","1948","1949","1950"]) {
  specs[`${NA}|Statesman|${yr}|Standard`] = {...nash600_41, pr:"~$1,400"};
  specs[`${NA}|Statesman|${yr}|Super`] = {...nash600_41, pr:"~$1,700"};
  specs[`${NA}|Statesman|${yr}|Custom`] = {...nash600_41, pr:"~$2,000"};
}
for (const yr of ["1951","1952","1953","1954","1955","1956","1957"]) {
  specs[`${NA}|Statesman|${yr}|Standard`] = {...nash600_51, pr:"~$1,900"};
  specs[`${NA}|Statesman|${yr}|Super`] = {...nash600_51, pr:"~$2,200"};
  specs[`${NA}|Statesman|${yr}|Custom`] = {...nash600_51, pr:"~$2,500"};
}

// --- Ambassador (1946–1957) ---
const nash_amb46 = {en:"235ci flathead I6",di:"3.9L",cy:"6",hp:"97 kW (130 hp)",tq:"271 Nm",tx:"3-speed manual",dr:"RWD",z1:"~15 sec",ts:"~152 km/h",ft:"Petrol",wt:"1,600 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
const nash_amb51 = {en:"252ci OHV I6",di:"4.1L",cy:"6",hp:"112 kW (150 hp)",tq:"298 Nm",tx:"3-speed manual",dr:"RWD",z1:"~13 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,610 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"18.5L"};
for (const yr of ["1946","1947","1948","1949","1950"]) {
  specs[`${NA}|Ambassador|${yr}|Standard`] = {...nash_amb46, pr:"~$2,000"};
  specs[`${NA}|Ambassador|${yr}|Custom`] = {...nash_amb46, pr:"~$2,400"};
}
for (const yr of ["1951","1952","1953","1954","1955","1956","1957"]) {
  specs[`${NA}|Ambassador|${yr}|Standard`] = {...nash_amb51, pr:"~$2,500"};
  specs[`${NA}|Ambassador|${yr}|Custom`] = {...nash_amb51, pr:"~$2,900"};
  specs[`${NA}|Ambassador|${yr}|Super`] = {...nash_amb51, pr:"~$3,200"};
}

// --- Rambler (1950–1957) ---
const ramb_i6 = {en:"172ci flathead I6",di:"2.8L",cy:"6",hp:"63 kW (85 hp)",tq:"183 Nm",tx:"3-speed manual",dr:"RWD",z1:"~19 sec",ts:"~130 km/h",ft:"Petrol",wt:"1,180 kg",se:"5",fc:"11.0L",fh:"8.0L",fx:"14.0L"};
for (const yr of ["1950","1951","1952","1953","1954","1955","1956","1957"]) {
  specs[`${NA}|Rambler|${yr}|Standard`] = {...ramb_i6, pr:"~$1,600"};
  specs[`${NA}|Rambler|${yr}|Custom`] = {...ramb_i6, pr:"~$1,900"};
}

// --- Nash-Healey (1951–1954) ---
const nh_road = {en:"252ci OHV I6",di:"3.8L",cy:"6",hp:"104 kW (140 hp)",tq:"271 Nm",tx:"3-speed/overdrive manual",dr:"RWD",z1:"~8.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,160 kg",se:"2",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
specs[`${NA}|Nash-Healey|1951|Roadster`] = {...nh_road, pr:"~$6,000"};
for (const yr of ["1952","1953","1954"]) {
  specs[`${NA}|Nash-Healey|${yr}|Le Mans`] = {...nh_road, pr:"~$6,500"};
}

// --- Metropolitan (1954–1962) ---
const metro = {en:"1200cc Austin A40 I4",di:"1.2L",cy:"4",hp:"37 kW (50 hp)",tq:"88 Nm",tx:"3-speed manual",dr:"RWD",z1:"~18 sec",ts:"~120 km/h",ft:"Petrol",wt:"780 kg",se:"2",fc:"8.0L",fh:"5.8L",fx:"10.0L"};
for (const yr of ["1954","1955","1956","1957","1958","1959","1960","1961","1962"]) {
  specs[`${NA}|Metropolitan|${yr}|Hardtop`] = {...metro, pr:"~$1,900"};
  specs[`${NA}|Metropolitan|${yr}|Convertible`] = {...metro, pr:"~$2,100"};
}

// ============================================================
// Packard (1900–1958)
// ============================================================
const PA = 'Packard';

// --- 120 (1935–1941) ---
const pk120 = {en:"282ci flathead I8",di:"4.6L",cy:"8",hp:"75 kW (100 hp)",tq:"237 Nm",tx:"3-speed manual",dr:"RWD",z1:"~18 sec",ts:"~135 km/h",ft:"Petrol",wt:"1,600 kg",se:"5",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
for (const yr of ["1935","1936","1937","1938","1939","1940","1941"]) {
  specs[`${PA}|120|${yr}|Standard`] = {...pk120, pr:"~$1,600"};
  specs[`${PA}|120|${yr}|Convertible`] = {...pk120, pr:"~$2,000"};
}

// --- Super Eight (1940–1950) ---
const pk_s8 = {en:"319ci flathead I8",di:"5.2L",cy:"8",hp:"104 kW (140 hp)",tq:"310 Nm",tx:"3-speed manual",dr:"RWD",z1:"~16 sec",ts:"~145 km/h",ft:"Petrol",wt:"1,950 kg",se:"5",fc:"19.5L",fh:"14.0L",fx:"24.5L"};
for (const yr of ["1940","1941","1942","1946","1947","1948","1949","1950"]) {
  specs[`${PA}|Super Eight|${yr}|Standard`] = {...pk_s8, pr:"~$2,800"};
  specs[`${PA}|Super Eight|${yr}|Convertible`] = {...pk_s8, pr:"~$3,400"};
  specs[`${PA}|Super Eight|${yr}|Limousine`] = {...pk_s8, wt:"2,100 kg", se:"7", pr:"~$4,200"};
}

// --- Custom Eight / 180 (1940–1950) ---
const pk_c8 = {en:"356ci flathead I8",di:"5.8L",cy:"8",hp:"130 kW (175 hp)",tq:"373 Nm",tx:"3-speed manual",dr:"RWD",z1:"~15 sec",ts:"~152 km/h",ft:"Petrol",wt:"2,100 kg",se:"5",fc:"21.0L",fh:"15.0L",fx:"26.0L"};
for (const yr of ["1940","1941","1942","1946","1947","1948","1949","1950"]) {
  specs[`${PA}|Custom Eight|${yr}|Standard`] = {...pk_c8, pr:"~$4,500"};
  specs[`${PA}|Custom Eight|${yr}|Convertible`] = {...pk_c8, pr:"~$5,500"};
  specs[`${PA}|Custom Eight|${yr}|Limousine`] = {...pk_c8, wt:"2,250 kg", se:"7", pr:"~$6,500"};
}

// --- Clipper (1941–1956) ---
const clip_41 = {en:"282ci Flathead I8",di:"4.6L",cy:"8",hp:"97 kW (130 hp)",tq:"271 Nm",tx:"3-speed manual",dr:"RWD",z1:"~17 sec",ts:"~138 km/h",ft:"Petrol",wt:"1,700 kg",se:"5",fc:"18.0L",fh:"12.5L",fx:"22.5L"};
const clip_48 = {en:"327ci Flathead I8",di:"5.4L",cy:"8",hp:"104 kW (140 hp)",tq:"310 Nm",tx:"3-speed manual",dr:"RWD",z1:"~16 sec",ts:"~145 km/h",ft:"Petrol",wt:"1,700 kg",se:"5",fc:"18.5L",fh:"13.0L",fx:"23.0L"};
specs[`${PA}|Clipper|1941|Standard`] = {...clip_41, pr:"~$2,000"};
specs[`${PA}|Clipper|1941|Deluxe`] = {...clip_41, pr:"~$2,300"};
for (const yr of ["1946","1947","1948","1949","1950","1951","1952","1953","1954","1955","1956"]) {
  specs[`${PA}|Clipper|${yr}|Standard`] = {...clip_48, pr:"~$2,500"};
  specs[`${PA}|Clipper|${yr}|Deluxe`] = {...clip_48, pr:"~$2,900"};
}

// --- Caribbean (1953–1956) ---
const carib_53 = {en:"327ci Flathead I8",di:"5.4L",cy:"8",hp:"133 kW (180 hp)",tq:"339 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~13 sec",ts:"~162 km/h",ft:"Petrol",wt:"2,150 kg",se:"4",fc:"20.5L",fh:"14.5L",fx:"25.5L"};
const carib_55 = {en:"352ci Packard V8",di:"5.8L",cy:"8",hp:"212 kW (284 hp)",tq:"542 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~9.5 sec",ts:"~180 km/h",ft:"Petrol",wt:"2,150 kg",se:"4",fc:"22.0L",fh:"15.5L",fx:"27.5L"};
for (const yr of ["1953","1954"]) {
  specs[`${PA}|Caribbean|${yr}|Convertible`] = {...carib_53, pr:"~$6,500"};
}
for (const yr of ["1955","1956"]) {
  specs[`${PA}|Caribbean|${yr}|Convertible`] = {...carib_55, pr:"~$8,000"};
}

// --- Patrician (1951–1956) ---
const patric_51 = {en:"327ci Flathead I8",di:"5.4L",cy:"8",hp:"133 kW (178 hp)",tq:"339 Nm",tx:"3-speed Ultramatic auto",dr:"RWD",z1:"~14 sec",ts:"~158 km/h",ft:"Petrol",wt:"2,015 kg",se:"5",fc:"20.5L",fh:"14.5L",fx:"25.5L"};
const patric_55 = {en:"352ci Packard V8",di:"5.8L",cy:"8",hp:"175 kW (235 hp)",tq:"488 Nm",tx:"3-speed Ultramatic auto",dr:"RWD",z1:"~11.5 sec",ts:"~172 km/h",ft:"Petrol",wt:"2,015 kg",se:"5",fc:"21.5L",fh:"15.5L",fx:"26.5L"};
for (const yr of ["1951","1952","1953","1954"]) {
  specs[`${PA}|Patrician|${yr}|Standard`] = {...patric_51, pr:"~$4,500"};
}
for (const yr of ["1955","1956"]) {
  specs[`${PA}|Patrician|${yr}|Standard`] = {...patric_55, pr:"~$5,500"};
}

// --- 400 / Executive (1955–1958) ---
const pk400 = {en:"352ci Packard V8",di:"5.8L",cy:"8",hp:"175 kW (235 hp)",tq:"488 Nm",tx:"3-speed Ultramatic auto",dr:"RWD",z1:"~11.5 sec",ts:"~170 km/h",ft:"Petrol",wt:"2,000 kg",se:"5",fc:"21.5L",fh:"15.5L",fx:"26.5L"};
const pk400_hawk = {en:"289ci Studebaker V8",di:"4.7L",cy:"8",hp:"175 kW (235 hp)",tq:"400 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~12 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,750 kg",se:"4",fc:"16.0L",fh:"11.5L",fx:"20.5L"};
for (const yr of ["1955","1956"]) {
  specs[`${PA}|400|${yr}|Standard`] = {...pk400, pr:"~$5,500"};
}
for (const yr of ["1957","1958"]) {
  specs[`${PA}|400|${yr}|Standard`] = {...pk400, pr:"~$5,800"};
  specs[`${PA}|400|${yr}|Hawk`] = {...pk400_hawk, pr:"~$4,800"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement97.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement97.json written — ${count} entries`);
