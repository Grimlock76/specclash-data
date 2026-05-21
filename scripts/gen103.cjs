'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Sunbeam
// ============================================================
const SU = 'Sunbeam';

// --- Alpine (1959–1968) ---
const alp_s1 = {en:"1494cc OHV I4",di:"1.5L",cy:"4",hp:"56 kW (76 hp)",tq:"114 Nm",tx:"4-speed manual",dr:"RWD",z1:"~14 sec",ts:"~165 km/h",ft:"Petrol",wt:"900 kg",se:"2",fc:"9.5L",fh:"7.2L",fx:"12.5L"};
for (const yr of ["1959","1960","1961","1962","1963"]) specs[`${SU}|Alpine|${yr}|Series I-III`] = {...alp_s1, pr:`~$2,200`};
const alp_s4 = {en:"1592cc OHV I4",di:"1.6L",cy:"4",hp:"60 kW (82 hp)",tq:"122 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13.5 sec",ts:"~170 km/h",ft:"Petrol",wt:"920 kg",se:"2",fc:"9.8L",fh:"7.5L",fx:"12.8L"};
for (const yr of ["1963","1964","1965","1966","1967","1968"]) specs[`${SU}|Alpine|${yr}|Series IV-V`] = {...alp_s4, pr:`~$2,800`};

// --- Tiger (1964–1967) ---
const tiger = {en:"4261cc Ford V8",di:"4.3L",cy:"8",hp:"130 kW (177 hp)",tq:"339 Nm",tx:"4-speed manual",dr:"RWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1010 kg",se:"2",fc:"14.0L",fh:"10.0L",fx:"19.0L"};
const tiger2 = {en:"4727cc Ford V8",di:"4.7L",cy:"8",hp:"149 kW (202 hp)",tq:"380 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1020 kg",se:"2",fc:"15.0L",fh:"11.0L",fx:"20.0L"};
for (const yr of ["1964","1965","1966"]) specs[`${SU}|Tiger|${yr}|Mk I`] = {...tiger, pr:`~$3,500`};
specs[`${SU}|Tiger|1967|Mk II`] = {...tiger2, pr:`~$4,200`};

// --- Rapier (1955–1976) ---
const rap1 = {en:"1390cc OHV I4",di:"1.4L",cy:"4",hp:"45 kW (61 hp)",tq:"99 Nm",tx:"4-speed manual",dr:"RWD",z1:"~17 sec",ts:"~148 km/h",ft:"Petrol",wt:"990 kg",se:"4",fc:"9.5L",fh:"7.2L",fx:"12.5L"};
for (const yr of ["1955","1956","1957","1958","1959","1960","1961","1962","1963"]) specs[`${SU}|Rapier|${yr}|Series I-IV`] = {...rap1, pr:`~$1,800`};
const rap2 = {en:"1725cc OHV I4",di:"1.7L",cy:"4",hp:"67 kW (91 hp)",tq:"138 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13 sec",ts:"~170 km/h",ft:"Petrol",wt:"1065 kg",se:"4",fc:"10.0L",fh:"7.8L",fx:"13.0L"};
for (const yr of ["1967","1968","1969","1970","1971","1972","1973","1974","1975","1976"]) specs[`${SU}|Rapier|${yr}|H120`] = {...rap2, pr:`~$3,200`};

// --- Lotus (1957–1964, Imp-based race) ---
const lotus_imp = {en:"875cc Imp OHV I4",di:"0.9L",cy:"4",hp:"37 kW (51 hp)",tq:"68 Nm",tx:"4-speed manual",dr:"RWD",z1:"~18 sec",ts:"~140 km/h",ft:"Petrol",wt:"590 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.5L"};
for (const yr of ["1963","1964","1965","1966","1967","1968","1969","1970"]) specs[`${SU}|Lotus|${yr}|Sport`] = {...lotus_imp, pr:`~$900`};

// ============================================================
// Hillman
// ============================================================
const HI = 'Hillman';

// --- Minx (1932–1970) ---
const minx_50s = {en:"1265cc OHV I4",di:"1.3L",cy:"4",hp:"30 kW (41 hp)",tq:"85 Nm",tx:"3-speed manual",dr:"RWD",z1:"~25 sec",ts:"~115 km/h",ft:"Petrol",wt:"890 kg",se:"4",fc:"9.0L",fh:"7.0L",fx:"11.5L"};
for (const yr of ["1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960"]) specs[`${HI}|Minx|${yr}|Series I-IIIA`] = {...minx_50s, pr:`~$1,200`};
const minx_60s = {en:"1592cc OHV I4",di:"1.6L",cy:"4",hp:"45 kW (61 hp)",tq:"112 Nm",tx:"4-speed manual",dr:"RWD",z1:"~20 sec",ts:"~135 km/h",ft:"Petrol",wt:"940 kg",se:"4",fc:"9.5L",fh:"7.2L",fx:"12.5L"};
for (const yr of ["1961","1962","1963","1964","1965","1966","1967","1968","1969","1970"]) specs[`${HI}|Minx|${yr}|Series V-VI`] = {...minx_60s, pr:`~$1,500`};

// --- Imp (1963–1976) ---
const imp = {en:"875cc Coventry Climax OHC I4",di:"0.9L",cy:"4",hp:"29 kW (39 hp)",tq:"62 Nm",tx:"4-speed manual",dr:"RWD",z1:"~22 sec",ts:"~128 km/h",ft:"Petrol",wt:"600 kg",se:"4",fc:"6.8L",fh:"5.2L",fx:"8.8L"};
const imp_sport = {en:"875cc OHC I4 twin-carb",di:"0.9L",cy:"4",hp:"37 kW (51 hp)",tq:"70 Nm",tx:"4-speed manual",dr:"RWD",z1:"~17 sec",ts:"~148 km/h",ft:"Petrol",wt:"590 kg",se:"4",fc:"7.0L",fh:"5.5L",fx:"9.0L"};
for (const yr of ["1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976"]) {
  specs[`${HI}|Imp|${yr}|Standard`] = {...imp, pr:`~$900`};
  specs[`${HI}|Imp|${yr}|Sport`] = {...imp_sport, pr:`~$1,200`};
}

// --- Hunter (1966–1979) ---
const hunt_16 = {en:"1725cc OHV I4",di:"1.7L",cy:"4",hp:"53 kW (72 hp)",tq:"126 Nm",tx:"4-speed manual",dr:"RWD",z1:"~15 sec",ts:"~153 km/h",ft:"Petrol",wt:"990 kg",se:"4",fc:"10.0L",fh:"7.6L",fx:"13.0L"};
const hunt_gt = {en:"1725cc OHV I4 twin-carb",di:"1.7L",cy:"4",hp:"67 kW (91 hp)",tq:"140 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11 sec",ts:"~172 km/h",ft:"Petrol",wt:"1005 kg",se:"4",fc:"10.5L",fh:"8.0L",fx:"13.5L"};
for (const yr of ["1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979"]) {
  specs[`${HI}|Hunter|${yr}|1.7`] = {...hunt_16, pr:`~$1,800`};
  specs[`${HI}|Hunter|${yr}|GT`] = {...hunt_gt, pr:`~$2,500`};
}

// --- Avenger (1970–1981) ---
const aveng = {en:"1295cc OHV I4",di:"1.3L",cy:"4",hp:"41 kW (56 hp)",tq:"93 Nm",tx:"4-speed manual",dr:"RWD",z1:"~17 sec",ts:"~148 km/h",ft:"Petrol",wt:"855 kg",se:"4",fc:"9.0L",fh:"6.8L",fx:"11.8L"};
const aveng_gt = {en:"1598cc OHV I4 twin-carb",di:"1.6L",cy:"4",hp:"65 kW (88 hp)",tq:"126 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11.5 sec",ts:"~170 km/h",ft:"Petrol",wt:"890 kg",se:"4",fc:"10.0L",fh:"7.5L",fx:"13.0L"};
for (const yr of ["1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981"]) {
  specs[`${HI}|Avenger|${yr}|1.3`] = {...aveng, pr:`~$2,200`};
  specs[`${HI}|Avenger|${yr}|GT`] = {...aveng_gt, pr:`~$3,000`};
}

// ============================================================
// Morris
// ============================================================
const MO = 'Morris';

// --- Minor (1948–1971) ---
const minor_803 = {en:"803cc OHV I4",di:"0.8L",cy:"4",hp:"22 kW (30 hp)",tq:"52 Nm",tx:"4-speed manual",dr:"RWD",z1:"~32 sec",ts:"~105 km/h",ft:"Petrol",wt:"700 kg",se:"4",fc:"7.8L",fh:"6.0L",fx:"10.0L"};
for (const yr of ["1948","1949","1950","1951","1952","1953","1954","1955","1956"]) specs[`${MO}|Minor|${yr}|803cc`] = {...minor_803, pr:`~$800`};
const minor_948 = {en:"948cc OHV I4",di:"0.9L",cy:"4",hp:"26 kW (35 hp)",tq:"66 Nm",tx:"4-speed manual",dr:"RWD",z1:"~28 sec",ts:"~115 km/h",ft:"Petrol",wt:"700 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.8L"};
for (const yr of ["1956","1957","1958","1959","1960","1961","1962"]) specs[`${MO}|Minor|${yr}|948cc`] = {...minor_948, pr:`~$1,000`};
const minor_1098 = {en:"1098cc OHV I4",di:"1.1L",cy:"4",hp:"33 kW (45 hp)",tq:"81 Nm",tx:"4-speed manual",dr:"RWD",z1:"~24 sec",ts:"~125 km/h",ft:"Petrol",wt:"700 kg",se:"4",fc:"7.2L",fh:"5.5L",fx:"9.5L"};
for (const yr of ["1962","1963","1964","1965","1966","1967","1968","1969","1970","1971"]) specs[`${MO}|Minor|${yr}|1100`] = {...minor_1098, pr:`~$1,100`};

// --- Oxford (1954–1971) ---
const ox_1500 = {en:"1489cc OHV I4",di:"1.5L",cy:"4",hp:"38 kW (52 hp)",tq:"103 Nm",tx:"4-speed manual",dr:"RWD",z1:"~22 sec",ts:"~125 km/h",ft:"Petrol",wt:"960 kg",se:"4",fc:"9.5L",fh:"7.2L",fx:"12.5L"};
for (const yr of ["1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971"]) specs[`${MO}|Oxford|${yr}|Series II-VI`] = {...ox_1500, pr:`~$1,500`};

// --- Marina (1971–1980) ---
const mar_13 = {en:"1275cc OHV I4",di:"1.3L",cy:"4",hp:"41 kW (56 hp)",tq:"93 Nm",tx:"4-speed manual",dr:"RWD",z1:"~17 sec",ts:"~145 km/h",ft:"Petrol",wt:"900 kg",se:"4",fc:"9.0L",fh:"6.8L",fx:"11.5L"};
const mar_18_tc = {en:"1798cc OHV I4 twin-carb",di:"1.8L",cy:"4",hp:"63 kW (86 hp)",tq:"140 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11 sec",ts:"~165 km/h",ft:"Petrol",wt:"955 kg",se:"4",fc:"10.0L",fh:"7.5L",fx:"13.0L"};
for (const yr of ["1971","1972","1973","1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${MO}|Marina|${yr}|1.3`] = {...mar_13, pr:`~$2,500`};
  specs[`${MO}|Marina|${yr}|1.8 TC`] = {...mar_18_tc, pr:`~$3,200`};
}

// --- Ital (1980–1984) ---
const ital = {en:"1275cc OHV I4",di:"1.3L",cy:"4",hp:"41 kW (56 hp)",tq:"93 Nm",tx:"4-speed manual",dr:"RWD",z1:"~16 sec",ts:"~148 km/h",ft:"Petrol",wt:"905 kg",se:"4",fc:"9.0L",fh:"6.8L",fx:"11.5L"};
for (const yr of ["1980","1981","1982","1983","1984"]) specs[`${MO}|Ital|${yr}|1.3`] = {...ital, pr:`~$4,500`};

// ============================================================
// Austin
// ============================================================
const AU = 'Austin';

// --- A30/A35 (1951–1962) ---
const a30 = {en:"803cc OHV I4",di:"0.8L",cy:"4",hp:"22 kW (30 hp)",tq:"52 Nm",tx:"4-speed manual",dr:"RWD",z1:"~35 sec",ts:"~100 km/h",ft:"Petrol",wt:"640 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.8L"};
for (const yr of ["1951","1952","1953","1953","1954","1955","1956"]) specs[`${AU}|A30|${yr}|Saloon`] = {...a30, pr:`~$800`};
const a35 = {en:"948cc OHV I4",di:"0.9L",cy:"4",hp:"26 kW (35 hp)",tq:"66 Nm",tx:"4-speed manual",dr:"RWD",z1:"~28 sec",ts:"~113 km/h",ft:"Petrol",wt:"650 kg",se:"4",fc:"7.2L",fh:"5.5L",fx:"9.5L"};
for (const yr of ["1956","1957","1958","1959","1960","1961","1962"]) {
  specs[`${AU}|A35|${yr}|Saloon`] = {...a35, pr:`~$900`};
  specs[`${AU}|A35|${yr}|Van`] = {...a35, wt:"680 kg", pr:`~$800`};
}

// --- A40 (1958–1967) ---
const a40_farina = {en:"948cc OHV I4",di:"0.9L",cy:"4",hp:"26 kW (35 hp)",tq:"66 Nm",tx:"4-speed manual",dr:"RWD",z1:"~27 sec",ts:"~116 km/h",ft:"Petrol",wt:"730 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.8L"};
for (const yr of ["1958","1959","1960","1961","1962","1963","1964","1965","1966","1967"]) specs[`${AU}|A40|${yr}|Farina`] = {...a40_farina, pr:`~$1,100`};

// --- 1100/1300 (1963–1974) ---
const a1100 = {en:"1098cc OHC I4 (BMC A-Series)",di:"1.1L",cy:"4",hp:"37 kW (50 hp)",tq:"88 Nm",tx:"4-speed manual",dr:"FWD",z1:"~20 sec",ts:"~130 km/h",ft:"Petrol",wt:"790 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.8L"};
const a1300 = {en:"1275cc OHV I4",di:"1.3L",cy:"4",hp:"45 kW (61 hp)",tq:"99 Nm",tx:"4-speed manual",dr:"FWD",z1:"~17 sec",ts:"~145 km/h",ft:"Petrol",wt:"805 kg",se:"4",fc:"8.0L",fh:"6.2L",fx:"10.5L"};
for (const yr of ["1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974"]) {
  specs[`${AU}|1100|${yr}|Saloon`] = {...a1100, pr:`~$1,200`};
  specs[`${AU}|1300|${yr}|Saloon`] = {...a1300, pr:`~$1,400`};
}

// --- Maxi (1969–1981) ---
const maxi = {en:"1485cc OHC I4",di:"1.5L",cy:"4",hp:"48 kW (65 hp)",tq:"110 Nm",tx:"5-speed manual",dr:"FWD",z1:"~16 sec",ts:"~148 km/h",ft:"Petrol",wt:"990 kg",se:"5",fc:"9.0L",fh:"6.8L",fx:"11.8L"};
for (const yr of ["1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981"]) specs[`${AU}|Maxi|${yr}|1.5`] = {...maxi, pr:`~$2,200`};

// --- Allegro (1973–1982) ---
const alleg = {en:"1098cc OHV I4",di:"1.1L",cy:"4",hp:"37 kW (50 hp)",tq:"86 Nm",tx:"4-speed manual",dr:"FWD",z1:"~18 sec",ts:"~140 km/h",ft:"Petrol",wt:"830 kg",se:"4",fc:"8.5L",fh:"6.5L",fx:"11.0L"};
for (const yr of ["1973","1974","1975","1976","1977","1978","1979","1980","1981","1982"]) specs[`${AU}|Allegro|${yr}|1.1`] = {...alleg, pr:`~$3,000`};

// --- Metro (1980–1990) ---
const metro = {en:"998cc OHV I4",di:"1.0L",cy:"4",hp:"34 kW (46 hp)",tq:"70 Nm",tx:"4-speed manual",dr:"FWD",z1:"~17 sec",ts:"~140 km/h",ft:"Petrol",wt:"700 kg",se:"4",fc:"7.0L",fh:"5.3L",fx:"9.2L"};
const metro_turbo = {en:"1275cc OHV I4 turbocharged",di:"1.3L",cy:"4",hp:"73 kW (99 hp)",tq:"165 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.8 sec",ts:"~185 km/h",ft:"Petrol",wt:"760 kg",se:"4",fc:"8.5L",fh:"6.5L",fx:"11.0L"};
for (const yr of ["1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990"]) {
  specs[`${AU}|Metro|${yr}|1.0`] = {...metro, pr:`~$4,500`};
  specs[`${AU}|Metro|${yr}|Turbo`] = {...metro_turbo, pr:`~$7,500`};
}

// --- Maestro (1983–1994) ---
const maestro = {en:"1275cc OHV I4",di:"1.3L",cy:"4",hp:"45 kW (61 hp)",tq:"99 Nm",tx:"5-speed manual",dr:"FWD",z1:"~15 sec",ts:"~152 km/h",ft:"Petrol",wt:"900 kg",se:"5",fc:"8.5L",fh:"6.5L",fx:"11.0L"};
const maestro_mg = {en:"1993cc DOHC I4",di:"2.0L",cy:"4",hp:"96 kW (130 hp)",tq:"175 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.0 sec",ts:"~198 km/h",ft:"Petrol",wt:"955 kg",se:"5",fc:"9.5L",fh:"7.2L",fx:"12.5L"};
for (const yr of ["1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994"]) {
  specs[`${AU}|Maestro|${yr}|1.3`] = {...maestro, pr:`~$6,000`};
  specs[`${AU}|Maestro|${yr}|MG`] = {...maestro_mg, pr:`~$10,000`};
}

// --- Montego (1984–1994) ---
const montego = {en:"1598cc OHC I4",di:"1.6L",cy:"4",hp:"62 kW (84 hp)",tq:"130 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13 sec",ts:"~172 km/h",ft:"Petrol",wt:"1020 kg",se:"5",fc:"9.0L",fh:"6.8L",fx:"11.8L"};
const montego_mg = {en:"1993cc DOHC I4",di:"2.0L",cy:"4",hp:"96 kW (130 hp)",tq:"175 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1080 kg",se:"5",fc:"10.0L",fh:"7.5L",fx:"13.0L"};
for (const yr of ["1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994"]) {
  specs[`${AU}|Montego|${yr}|1.6`] = {...montego, pr:`~$7,500`};
  specs[`${AU}|Montego|${yr}|MG`] = {...montego_mg, pr:`~$12,000`};
}

// --- Ambassador (1982–1988) ---
const amb = {en:"1695cc OHC I4",di:"1.7L",cy:"4",hp:"59 kW (80 hp)",tq:"131 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13 sec",ts:"~166 km/h",ft:"Petrol",wt:"1120 kg",se:"5",fc:"9.5L",fh:"7.2L",fx:"12.5L"};
for (const yr of ["1982","1983","1984","1985","1986","1987","1988"]) specs[`${AU}|Ambassador|${yr}|1.7`] = {...amb, pr:`~$8,000`};

const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement103.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement103.json written — ${count} entries`);
