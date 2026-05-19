'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Oldsmobile (1949–2004)
// ============================================================
const OL = 'Oldsmobile';

// 88 (1949–1961)
const olds88_49 = {en:"303ci Rocket V8",di:"5.0L",cy:"8",hp:"120 kW (160 hp)",tq:"339 Nm",tx:"3-speed manual",dr:"RWD",z1:"~12 sec",ts:"~155 km/h",ft:"Petrol",wt:"1,600 kg",se:"6",fc:"18.0L",fh:"13.0L",fx:"22.0L"};
const olds88_53 = {en:"324ci Rocket V8",di:"5.3L",cy:"8",hp:"134 kW (180 hp)",tq:"367 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~11.5 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,620 kg",se:"6",fc:"18.5L",fh:"13.5L",fx:"22.5L"};
const olds88_57 = {en:"371ci Rocket V8",di:"6.1L",cy:"8",hp:"186 kW (250 hp)",tq:"488 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~10.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,650 kg",se:"6",fc:"19.5L",fh:"14.0L",fx:"23.5L"};
for (const yr of ["1949","1950","1951","1952"]) {
  specs[`${OL}|88|${yr}|Standard`] = {...olds88_49, pr:"~$2,200"};
}
for (const yr of ["1953","1954","1955","1956"]) {
  specs[`${OL}|88|${yr}|Standard`] = {...olds88_53, pr:"~$2,400"};
  specs[`${OL}|88|${yr}|Super 88`] = {...olds88_53, hp:"142 kW (190 hp)", pr:"~$2,700"};
}
for (const yr of ["1957","1958","1959","1960","1961"]) {
  specs[`${OL}|88|${yr}|Standard`] = {...olds88_57, pr:"~$2,700"};
  specs[`${OL}|88|${yr}|Super 88`] = {...olds88_57, hp:"194 kW (260 hp)", pr:"~$3,000"};
}

// Delta 88 (1965–1999)
const delta88_65 = {en:"425ci Rocket V8",di:"7.0L",cy:"8",hp:"231 kW (310 hp)",tq:"610 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"~10 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,700 kg",se:"6",fc:"20.0L",fh:"14.5L",fx:"24.5L"};
const delta88_75 = {en:"350ci V8",di:"5.7L",cy:"8",hp:"119 kW (160 hp)",tq:"312 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"~11.5 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,740 kg",se:"6",fc:"17.5L",fh:"12.5L",fx:"21.5L"};
const delta88_85 = {en:"307ci V8",di:"5.0L",cy:"8",hp:"112 kW (150 hp)",tq:"285 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~12 sec",ts:"~158 km/h",ft:"Petrol",wt:"1,720 kg",se:"6",fc:"16.5L",fh:"11.5L",fx:"20.5L"};
for (const yr of ["1965","1966","1967","1968","1969","1970","1971","1972","1973","1974"]) {
  specs[`${OL}|Delta 88|${yr}|Standard`] = {...delta88_65, pr:"~$3,200"};
}
for (const yr of ["1975","1976","1977","1978","1979","1980","1981","1982","1983","1984"]) {
  specs[`${OL}|Delta 88|${yr}|Standard`] = {...delta88_75, pr:"~$6,500"};
  specs[`${OL}|Delta 88|${yr}|Royale`] = {...delta88_75, pr:"~$7,200"};
}
for (const yr of ["1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999"]) {
  specs[`${OL}|Delta 88|${yr}|Standard`] = {...delta88_85, pr:"~$18,000"};
  specs[`${OL}|Delta 88|${yr}|Royale`] = {...delta88_85, pr:"~$20,000"};
}

// 98 (1949–1996) — flagship
const olds98_49 = {en:"303ci Rocket V8",di:"5.0L",cy:"8",hp:"127 kW (170 hp)",tq:"352 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~12 sec",ts:"~155 km/h",ft:"Petrol",wt:"1,900 kg",se:"6",fc:"19.5L",fh:"14.0L",fx:"24.0L"};
const olds98_71 = {en:"455ci V8",di:"7.5L",cy:"8",hp:"179 kW (240 hp)",tq:"610 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"~11 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,950 kg",se:"6",fc:"21.5L",fh:"15.5L",fx:"26.0L"};
const olds98_85 = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"112 kW (150 hp)",tq:"270 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~11 sec",ts:"~172 km/h",ft:"Petrol",wt:"1,700 kg",se:"6",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
for (const yr of ["1949","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970"]) {
  specs[`${OL}|98|${yr}|Standard`] = {...olds98_49, pr:"~$3,000"};
}
for (const yr of ["1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984"]) {
  specs[`${OL}|98|${yr}|Standard`] = {...olds98_71, pr:"~$7,500"};
  specs[`${OL}|98|${yr}|Regency`] = {...olds98_71, pr:"~$8,500"};
}
for (const yr of ["1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996"]) {
  specs[`${OL}|98|${yr}|Standard`] = {...olds98_85, pr:"~$25,000"};
  specs[`${OL}|98|${yr}|Regency`] = {...olds98_85, pr:"~$28,000"};
}

// 442 (1964–1980)
const olds442_64 = {en:"330ci V8",di:"5.4L",cy:"8",hp:"190 kW (255 hp)",tq:"447 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,591 kg",se:"5",fc:"20.0L",fh:"14.0L",fx:"24.0L"};
const olds442_68 = {en:"400ci Rocket V8",di:"6.6L",cy:"8",hp:"261 kW (350 hp)",tq:"610 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,600 kg",se:"5",fc:"21.0L",fh:"15.0L",fx:"25.0L"};
const olds442_68w30 = {en:"400ci W-30 V8 high-output",di:"6.6L",cy:"8",hp:"279 kW (375 hp)",tq:"627 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.2 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,591 kg",se:"5",fc:"21.5L",fh:"15.5L",fx:"26.0L"};
const olds442_74 = {en:"455ci V8",di:"7.5L",cy:"8",hp:"157 kW (210 hp)",tq:"488 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~8.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,620 kg",se:"5",fc:"20.5L",fh:"14.5L",fx:"25.0L"};
for (const yr of ["1964","1965","1966","1967"]) {
  specs[`${OL}|442|${yr}|Standard`] = {...olds442_64, pr:"~$3,200"};
}
for (const yr of ["1968","1969","1970","1971","1972"]) {
  specs[`${OL}|442|${yr}|Standard`] = {...olds442_68, pr:"~$3,800"};
  specs[`${OL}|442|${yr}|W-30`] = {...olds442_68w30, pr:"~$4,500"};
}
for (const yr of ["1973","1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${OL}|442|${yr}|Standard`] = {...olds442_74, pr:"~$5,500"};
}

// Cutlass (1961–1999)
const cut_65 = {en:"330ci V8",di:"5.4L",cy:"8",hp:"164 kW (220 hp)",tq:"428 Nm",tx:"3-speed manual",dr:"RWD",z1:"~10.5 sec",ts:"~172 km/h",ft:"Petrol",wt:"1,450 kg",se:"5",fc:"17.5L",fh:"12.5L",fx:"21.5L"};
const cut_78 = {en:"260ci V8",di:"4.3L",cy:"8",hp:"96 kW (130 hp)",tq:"271 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~12 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,500 kg",se:"5",fc:"15.5L",fh:"11.0L",fx:"19.5L"};
const cut_85 = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"104 kW (140 hp)",tq:"251 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~11.5 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,460 kg",se:"5",fc:"13.5L",fh:"9.5L",fx:"16.5L"};
for (const yr of ["1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977"]) {
  specs[`${OL}|Cutlass|${yr}|Standard`] = {...cut_65, pr:"~$3,000"};
  if (parseInt(yr) >= 1966) {
    specs[`${OL}|Cutlass|${yr}|Supreme`] = {...cut_65, hp:"179 kW (240 hp)", pr:"~$3,500"};
  }
}
for (const yr of ["1978","1979","1980","1981","1982","1983","1984"]) {
  specs[`${OL}|Cutlass|${yr}|Standard`] = {...cut_78, pr:"~$7,500"};
  specs[`${OL}|Cutlass|${yr}|Supreme`] = {...cut_78, hp:"119 kW (160 hp)", pr:"~$8,500"};
}
for (const yr of ["1985","1986","1987","1988","1989","1990","1991"]) {
  specs[`${OL}|Cutlass|${yr}|Standard`] = {...cut_85, pr:"~$16,000"};
  specs[`${OL}|Cutlass|${yr}|Calais`] = {...cut_85, pr:"~$19,000"};
}
for (const yr of ["1992","1993","1994","1995","1996","1997","1998","1999"]) {
  specs[`${OL}|Cutlass|${yr}|Standard`] = {...cut_85, pr:"~$19,000"};
}

// Toronado (1966–1992)
const toro_66 = {en:"385ci V8",di:"6.3L",cy:"8",hp:"257 kW (345 hp)",tq:"610 Nm",tx:"3-speed Turbo-Hydramatic",dr:"FWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"2,076 kg",se:"5",fc:"20.5L",fh:"14.5L",fx:"25.0L"};
const toro_70 = {en:"455ci V8",di:"7.5L",cy:"8",hp:"269 kW (365 hp)",tq:"637 Nm",tx:"3-speed Turbo-Hydramatic",dr:"FWD",z1:"~8.2 sec",ts:"~205 km/h",ft:"Petrol",wt:"2,100 kg",se:"5",fc:"21.5L",fh:"15.5L",fx:"26.5L"};
const toro_75 = {en:"455ci V8",di:"7.5L",cy:"8",hp:"142 kW (190 hp)",tq:"488 Nm",tx:"3-speed automatic",dr:"FWD",z1:"~11 sec",ts:"~180 km/h",ft:"Petrol",wt:"2,100 kg",se:"5",fc:"20.5L",fh:"14.5L",fx:"25.0L"};
const toro_85 = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"104 kW (140 hp)",tq:"251 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~12.5 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,800 kg",se:"5",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
for (const yr of ["1966","1967","1968","1969"]) {
  specs[`${OL}|Toronado|${yr}|Standard`] = {...toro_66, pr:"~$5,000"};
}
for (const yr of ["1970","1971","1972","1973","1974"]) {
  specs[`${OL}|Toronado|${yr}|Standard`] = {...toro_70, pr:"~$6,000"};
  if (parseInt(yr) >= 1971) {
    specs[`${OL}|Toronado|${yr}|Brougham`] = {...toro_70, pr:"~$7,000"};
  }
}
for (const yr of ["1975","1976","1977","1978","1979","1980","1981","1982","1983","1984"]) {
  specs[`${OL}|Toronado|${yr}|Standard`] = {...toro_75, pr:"~$10,000"};
  specs[`${OL}|Toronado|${yr}|Brougham`] = {...toro_75, pr:"~$11,500"};
}
for (const yr of ["1985","1986","1987","1988","1989","1990","1991","1992"]) {
  specs[`${OL}|Toronado|${yr}|Standard`] = {...toro_85, pr:"~$22,000"};
  specs[`${OL}|Toronado|${yr}|Brougham`] = {...toro_85, pr:"~$25,000"};
}

// Aurora (1994–2003)
const aurora_v8 = {en:"4.0L L47 DOHC V8",di:"4.0L",cy:"8",hp:"186 kW (250 hp)",tq:"339 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~7.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,700 kg",se:"5",ca:"N/A",fc:"13.5L",fh:"9.5L",fx:"16.5L"};
const aurora_v6 = {en:"3.5L L27 V6",di:"3.5L",cy:"6",hp:"187 kW (251 hp)",tq:"339 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~7.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,690 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
for (const yr of ["1994","1995","1996","1997","1998"]) {
  specs[`${OL}|Aurora|${yr}|V8`] = {...aurora_v8, pr:"~$45,000"};
}
for (const yr of ["1998","1999","2000","2001","2002","2003"]) {
  specs[`${OL}|Aurora|${yr}|V6`] = {...aurora_v6, pr:"~$40,000"};
}

// Bravada (1991–2004)
const bravada = {en:"4.3L Vortec V6",di:"4.3L",cy:"6",hp:"142 kW (190 hp)",tq:"339 Nm",tx:"4-speed automatic",dr:"AWD",z1:"~10.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,814 kg",se:"5",ca:"N/A",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004"]) {
  specs[`${OL}|Bravada|${yr}|Standard`] = {...bravada, pr:"~$32,000"};
}

// Alero (1999–2004)
const alero_i4 = {en:"2.2L Ecotec I4",di:"2.2L",cy:"4",hp:"108 kW (145 hp)",tq:"200 Nm",tx:"5-speed manual",dr:"FWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,327 kg",se:"5",ca:"380 L",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
const alero_v6 = {en:"3.4L LG8 V6",di:"3.4L",cy:"6",hp:"127 kW (170 hp)",tq:"278 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~8.5 sec",ts:"~198 km/h",ft:"Petrol",wt:"1,350 kg",se:"5",ca:"380 L",fc:"11.0L",fh:"8.0L",fx:"14.0L"};
for (const yr of ["1999","2000","2001","2002","2003","2004"]) {
  specs[`${OL}|Alero|${yr}|GL`] = {...alero_i4, pr:"~$22,000"};
  specs[`${OL}|Alero|${yr}|GLS`] = {...alero_v6, pr:"~$26,000"};
  specs[`${OL}|Alero|${yr}|GX`] = {...alero_v6, hp:"135 kW (181 hp)", pr:"~$29,000"};
}

// Intrigue (1998–2002)
const intrigue = {en:"3.5L L82 DOHC V6",di:"3.5L",cy:"6",hp:"187 kW (251 hp)",tq:"325 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~7.8 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,503 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
for (const yr of ["1998","1999","2000","2001","2002"]) {
  specs[`${OL}|Intrigue|${yr}|GL`] = {...intrigue, pr:"~$28,000"};
  specs[`${OL}|Intrigue|${yr}|GLS`] = {...intrigue, pr:"~$31,000"};
  specs[`${OL}|Intrigue|${yr}|GX`] = {...intrigue, pr:"~$34,000"};
}

// ============================================================
// AMC — American Motors Corporation (1958–1987)
// ============================================================
const AMC = 'AMC';

// Rambler American (1958–1969)
const rambAm_i6 = {en:"3.2L OHV I6",di:"3.2L",cy:"6",hp:"71 kW (95 hp)",tq:"220 Nm",tx:"3-speed manual",dr:"RWD",z1:"~17 sec",ts:"~148 km/h",ft:"Petrol",wt:"1,100 kg",se:"5",fc:"11.5L",fh:"8.5L",fx:"14.5L"};
const rambAm_v8 = {en:"4.8L AMC V8",di:"4.8L",cy:"8",hp:"142 kW (190 hp)",tq:"339 Nm",tx:"3-speed manual",dr:"RWD",z1:"~11 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,150 kg",se:"5",fc:"15.5L",fh:"11.0L",fx:"19.5L"};
for (const yr of ["1958","1959","1960","1961","1962","1963","1964","1965"]) {
  specs[`${AMC}|Rambler American|${yr}|Standard`] = {...rambAm_i6, pr:"~$1,800"};
}
for (const yr of ["1966","1967","1968","1969"]) {
  specs[`${AMC}|Rambler American|${yr}|Standard`] = {...rambAm_i6, pr:"~$2,200"};
  specs[`${AMC}|Rambler American|${yr}|Rogue`] = {...rambAm_v8, pr:"~$2,800"};
}

// Rambler Classic (1961–1966)
const rambCl = {en:"3.2L OHV I6",di:"3.2L",cy:"6",hp:"78 kW (105 hp)",tq:"231 Nm",tx:"3-speed manual",dr:"RWD",z1:"~15 sec",ts:"~155 km/h",ft:"Petrol",wt:"1,360 kg",se:"5",fc:"12.0L",fh:"8.8L",fx:"15.0L"};
for (const yr of ["1961","1962","1963","1964","1965","1966"]) {
  specs[`${AMC}|Rambler Classic|${yr}|Standard`] = {...rambCl, pr:"~$2,200"};
  specs[`${AMC}|Rambler Classic|${yr}|660`] = {...rambCl, pr:"~$2,500"};
  specs[`${AMC}|Rambler Classic|${yr}|770`] = {...rambCl, hp:"93 kW (125 hp)", pr:"~$2,800"};
}

// AMX (1968–1974)
const amx_68 = {en:"5.6L 343ci V8",di:"5.6L",cy:"8",hp:"188 kW (252 hp)",tq:"434 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.8 sec",ts:"~190 km/h",ft:"Petrol",wt:"1,380 kg",se:"2",fc:"18.0L",fh:"13.0L",fx:"22.0L"};
const amx_70 = {en:"6.4L 390ci V8",di:"6.4L",cy:"8",hp:"230 kW (315 hp)",tq:"569 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,380 kg",se:"2",fc:"20.0L",fh:"14.0L",fx:"24.0L"};
for (const yr of ["1968","1969"]) {
  specs[`${AMC}|AMX|${yr}|Standard`] = {...amx_68, pr:"~$3,800"};
  specs[`${AMC}|AMX|${yr}|Go Package`] = {...amx_68, hp:"201 kW (270 hp)", pr:"~$4,200"};
}
for (const yr of ["1970","1971","1972","1973","1974"]) {
  specs[`${AMC}|AMX|${yr}|Standard`] = {...amx_70, pr:"~$4,500"};
  specs[`${AMC}|AMX|${yr}|Go Package`] = {...amx_70, hp:"243 kW (325 hp)", pr:"~$5,200"};
}

// Javelin (1968–1974)
const jav_i6 = {en:"3.8L OHV I6",di:"3.8L",cy:"6",hp:"89 kW (120 hp)",tq:"271 Nm",tx:"3-speed manual",dr:"RWD",z1:"~13 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,300 kg",se:"4",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
const jav_v8 = {en:"5.6L 343ci V8",di:"5.6L",cy:"8",hp:"188 kW (252 hp)",tq:"434 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.0 sec",ts:"~192 km/h",ft:"Petrol",wt:"1,330 kg",se:"4",fc:"18.5L",fh:"13.0L",fx:"22.5L"};
for (const yr of ["1968","1969","1970"]) {
  specs[`${AMC}|Javelin|${yr}|Standard`] = {...jav_i6, pr:"~$3,200"};
  specs[`${AMC}|Javelin|${yr}|SST`] = {...jav_v8, pr:"~$3,800"};
}
for (const yr of ["1971","1972","1973","1974"]) {
  specs[`${AMC}|Javelin|${yr}|Standard`] = {...jav_i6, pr:"~$3,500"};
  specs[`${AMC}|Javelin|${yr}|SST`] = {...jav_v8, pr:"~$4,200"};
  specs[`${AMC}|Javelin|${yr}|AMX`] = {...jav_v8, hp:"230 kW (315 hp)", pr:"~$5,000"};
}

// Gremlin (1970–1978)
const grem_i6 = {en:"3.2L OHV I6",di:"3.2L",cy:"6",hp:"71 kW (95 hp)",tq:"220 Nm",tx:"3-speed manual",dr:"RWD",z1:"~14 sec",ts:"~155 km/h",ft:"Petrol",wt:"1,060 kg",se:"4",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
const grem_i6L = {en:"4.2L OHV I6",di:"4.2L",cy:"6",hp:"81 kW (109 hp)",tq:"259 Nm",tx:"3-speed manual",dr:"RWD",z1:"~12 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,070 kg",se:"4",fc:"13.5L",fh:"9.8L",fx:"17.0L"};
for (const yr of ["1970","1971","1972","1973","1974","1975","1976","1977","1978"]) {
  specs[`${AMC}|Gremlin|${yr}|Standard`] = {...grem_i6, pr:"~$2,500"};
  specs[`${AMC}|Gremlin|${yr}|X`] = {...grem_i6L, pr:"~$3,000"};
}

// Hornet (1970–1977)
const horn_base = {en:"3.8L OHV I6",di:"3.8L",cy:"6",hp:"75 kW (100 hp)",tq:"251 Nm",tx:"3-speed manual",dr:"RWD",z1:"~13 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,220 kg",se:"5",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
const horn_sc360 = {en:"5.9L 360ci AMC V8",di:"5.9L",cy:"8",hp:"195 kW (265 hp)",tq:"488 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,280 kg",se:"5",fc:"18.5L",fh:"13.5L",fx:"23.0L"};
for (const yr of ["1970","1971","1972","1973","1974","1975","1976","1977"]) {
  specs[`${AMC}|Hornet|${yr}|Standard`] = {...horn_base, pr:"~$2,800"};
  specs[`${AMC}|Hornet|${yr}|Sportabout`] = {...horn_base, pr:"~$3,200"};
  if (parseInt(yr) <= 1973) {
    specs[`${AMC}|Hornet|${yr}|SC/360`] = {...horn_sc360, pr:"~$4,200"};
  }
}

// Matador (1971–1978)
const mat_base = {en:"3.8L OHV I6",di:"3.8L",cy:"6",hp:"89 kW (120 hp)",tq:"271 Nm",tx:"3-speed manual",dr:"RWD",z1:"~13 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,560 kg",se:"5",fc:"13.5L",fh:"9.8L",fx:"17.0L"};
const mat_v8 = {en:"5.9L 360ci AMC V8",di:"5.9L",cy:"8",hp:"164 kW (220 hp)",tq:"449 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~9.5 sec",ts:"~178 km/h",ft:"Petrol",wt:"1,590 kg",se:"5",fc:"18.0L",fh:"12.5L",fx:"22.0L"};
for (const yr of ["1971","1972","1973"]) {
  specs[`${AMC}|Matador|${yr}|Standard`] = {...mat_base, pr:"~$3,200"};
}
for (const yr of ["1974","1975","1976","1977","1978"]) {
  specs[`${AMC}|Matador|${yr}|Standard`] = {...mat_base, pr:"~$4,200"};
  specs[`${AMC}|Matador|${yr}|Coupe`] = {...mat_v8, pr:"~$5,000"};
}

// Pacer (1975–1980)
const pacer_i6 = {en:"3.8L OHV I6",di:"3.8L",cy:"6",hp:"81 kW (109 hp)",tq:"259 Nm",tx:"3-speed manual",dr:"RWD",z1:"~12 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,291 kg",se:"4",fc:"13.5L",fh:"9.8L",fx:"17.0L"};
const pacer_i6L = {en:"4.2L OHV I6",di:"4.2L",cy:"6",hp:"93 kW (125 hp)",tq:"271 Nm",tx:"3-speed manual",dr:"RWD",z1:"~11 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,291 kg",se:"4",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["1975","1976","1977","1978","1979","1980"]) {
  specs[`${AMC}|Pacer|${yr}|Standard`] = {...pacer_i6, pr:"~$3,500"};
  specs[`${AMC}|Pacer|${yr}|D/L`] = {...pacer_i6L, pr:"~$4,000"};
  specs[`${AMC}|Pacer|${yr}|X`] = {...pacer_i6L, pr:"~$4,500"};
}

// Concord (1977–1983)
const concord_i6 = {en:"4.2L OHV I6",di:"4.2L",cy:"6",hp:"83 kW (112 hp)",tq:"259 Nm",tx:"3-speed manual",dr:"RWD",z1:"~12 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,350 kg",se:"5",fc:"13.5L",fh:"9.8L",fx:"17.0L"};
const concord_v8 = {en:"5.0L 304ci AMC V8",di:"5.0L",cy:"8",hp:"112 kW (150 hp)",tq:"339 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,380 kg",se:"5",fc:"15.5L",fh:"11.0L",fx:"19.5L"};
for (const yr of ["1977","1978","1979","1980","1981","1982","1983"]) {
  specs[`${AMC}|Concord|${yr}|DL`] = {...concord_i6, pr:"~$5,000"};
  specs[`${AMC}|Concord|${yr}|Limited`] = {...concord_v8, pr:"~$6,500"};
}

// Eagle (1980–1987)
const eagle_i4 = {en:"2.5L Pontiac Iron Duke I4",di:"2.5L",cy:"4",hp:"67 kW (90 hp)",tq:"175 Nm",tx:"3-speed automatic",dr:"AWD",z1:"~14 sec",ts:"~155 km/h",ft:"Petrol",wt:"1,430 kg",se:"5",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
const eagle_i6 = {en:"4.2L OHV I6",di:"4.2L",cy:"6",hp:"93 kW (125 hp)",tq:"271 Nm",tx:"3-speed automatic",dr:"AWD",z1:"~11.5 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,460 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["1980","1981","1982","1983","1984","1985","1986","1987"]) {
  specs[`${AMC}|Eagle|${yr}|Base`] = {...eagle_i4, pr:"~$8,500"};
  specs[`${AMC}|Eagle|${yr}|Limited`] = {...eagle_i6, pr:"~$10,500"};
  specs[`${AMC}|Eagle|${yr}|SX/4`] = {...eagle_i6, pr:"~$9,500"};
}

// Spirit (1979–1983)
const spirit_i4 = {en:"2.0L OHC I4",di:"2.0L",cy:"4",hp:"65 kW (87 hp)",tq:"152 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13.5 sec",ts:"~158 km/h",ft:"Petrol",wt:"1,130 kg",se:"4",fc:"11.0L",fh:"8.0L",fx:"14.0L"};
const spirit_i6 = {en:"4.2L OHV I6",di:"4.2L",cy:"6",hp:"83 kW (112 hp)",tq:"259 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~11.5 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,170 kg",se:"4",fc:"13.5L",fh:"9.8L",fx:"17.0L"};
for (const yr of ["1979","1980","1981","1982","1983"]) {
  specs[`${AMC}|Spirit|${yr}|Standard`] = {...spirit_i4, pr:"~$4,500"};
  specs[`${AMC}|Spirit|${yr}|DL`] = {...spirit_i6, pr:"~$5,500"};
  specs[`${AMC}|Spirit|${yr}|Liftback`] = {...spirit_i4, pr:"~$5,000"};
}

// ============================================================
// Lincoln (1940–2023)
// ============================================================
const LN = 'Lincoln';

// Continental (1940–1948)
const cont_40 = {en:"4.8L V12",di:"4.8L",cy:"12",hp:"83 kW (112 hp)",tq:"271 Nm",tx:"3-speed manual",dr:"RWD",z1:"~16 sec",ts:"~148 km/h",ft:"Petrol",wt:"1,900 kg",se:"5",fc:"23.0L",fh:"16.0L",fx:"28.0L"};
for (const yr of ["1940","1941","1942","1946","1947","1948"]) {
  specs[`${LN}|Continental|${yr}|Standard`] = {...cont_40, pr:"~$2,800"};
}

// Continental (1961–1969)
const cont_61 = {en:"7.0L MEL V8",di:"7.0L",cy:"8",hp:"224 kW (300 hp)",tq:"576 Nm",tx:"3-speed Turbo-Drive automatic",dr:"RWD",z1:"~10.5 sec",ts:"~178 km/h",ft:"Petrol",wt:"2,200 kg",se:"5",fc:"22.0L",fh:"15.5L",fx:"27.0L"};
for (const yr of ["1961","1962","1963","1964","1965","1966","1967"]) {
  specs[`${LN}|Continental|${yr}|Standard`] = {...cont_61, pr:"~$6,500"};
  specs[`${LN}|Continental|${yr}|Convertible`] = {...cont_61, pr:"~$7,200"};
}
for (const yr of ["1968","1969"]) {
  specs[`${LN}|Continental|${yr}|Standard`] = {...cont_61, pr:"~$7,000"};
}

// Continental (1970–1979)
const cont_70 = {en:"460ci V8",di:"7.5L",cy:"8",hp:"202 kW (272 hp)",tq:"610 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~10 sec",ts:"~180 km/h",ft:"Petrol",wt:"2,300 kg",se:"5",fc:"23.5L",fh:"16.5L",fx:"29.0L"};
for (const yr of ["1970","1971","1972","1973","1974","1975","1976","1977","1978","1979"]) {
  specs[`${LN}|Continental|${yr}|Standard`] = {...cont_70, pr:"~$9,000"};
  specs[`${LN}|Continental|${yr}|Mark IV`] = {...cont_70, hp:"190 kW (255 hp)", pr:"~$11,000"};
}

// Continental (1980–2002)
const cont_80 = {en:"5.0L V8 HO",di:"5.0L",cy:"8",hp:"134 kW (180 hp)",tq:"339 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,900 kg",se:"5",fc:"16.0L",fh:"11.5L",fx:"20.0L"};
const cont_88 = {en:"3.8L Essex V6",di:"3.8L",cy:"6",hp:"112 kW (150 hp)",tq:"271 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~11 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,780 kg",se:"5",fc:"13.5L",fh:"9.8L",fx:"17.0L"};
for (const yr of ["1980","1981","1982","1983","1984","1985","1986","1987"]) {
  specs[`${LN}|Continental|${yr}|Standard`] = {...cont_80, pr:"~$20,000"};
  specs[`${LN}|Continental|${yr}|Signature`] = {...cont_80, pr:"~$23,000"};
}
for (const yr of ["1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002"]) {
  specs[`${LN}|Continental|${yr}|Standard`] = {...cont_88, pr:"~$42,000"};
  specs[`${LN}|Continental|${yr}|Executive`] = {...cont_88, pr:"~$46,000"};
  specs[`${LN}|Continental|${yr}|Signature`] = {...cont_88, pr:"~$48,000"};
}

// Continental (2017–2020)
const cont_17 = {en:"2.7L EcoBoost twin-turbo V6",di:"2.7L",cy:"6",hp:"298 kW (400 hp)",tq:"542 Nm",tx:"8-speed automatic",dr:"AWD",z1:"~5.5 sec",ts:"~220 km/h",ft:"Petrol",wt:"1,995 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
const cont_17_30 = {en:"3.0L twin-turbo V6",di:"3.0L",cy:"6",hp:"335 kW (450 hp)",tq:"596 Nm",tx:"8-speed automatic",dr:"AWD",z1:"~4.8 sec",ts:"~240 km/h",ft:"Petrol",wt:"2,020 kg",se:"5",ca:"N/A",fc:"13.5L",fh:"9.8L",fx:"16.5L"};
for (const yr of ["2017","2018","2019","2020"]) {
  specs[`${LN}|Continental|${yr}|Standard`] = {...cont_17, pr:"~$75,000"};
  specs[`${LN}|Continental|${yr}|Black Label`] = {...cont_17_30, pr:"~$95,000"};
}

// Town Car (1981–2011)
const tc_81 = {en:"5.0L V8",di:"5.0L",cy:"8",hp:"150 kW (200 hp)",tq:"366 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"2,041 kg",se:"6",fc:"16.0L",fh:"11.5L",fx:"20.0L"};
const tc_98 = {en:"4.6L SOHC V8",di:"4.6L",cy:"8",hp:"160 kW (215 hp)",tq:"373 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~10.5 sec",ts:"~178 km/h",ft:"Petrol",wt:"2,041 kg",se:"6",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
const tc_03 = {en:"4.6L 3-valve SOHC V8",di:"4.6L",cy:"8",hp:"175 kW (235 hp)",tq:"400 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"2,041 kg",se:"6",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997"]) {
  specs[`${LN}|Town Car|${yr}|Signature`] = {...tc_81, pr:"~$35,000"};
  specs[`${LN}|Town Car|${yr}|Cartier`] = {...tc_81, pr:"~$40,000"};
}
for (const yr of ["1998","1999","2000","2001","2002"]) {
  specs[`${LN}|Town Car|${yr}|Signature`] = {...tc_98, pr:"~$55,000"};
  specs[`${LN}|Town Car|${yr}|Cartier`] = {...tc_98, pr:"~$62,000"};
}
for (const yr of ["2003","2004","2005","2006","2007","2008","2009","2010","2011"]) {
  specs[`${LN}|Town Car|${yr}|Signature`] = {...tc_03, pr:"~$60,000"};
  specs[`${LN}|Town Car|${yr}|Cartier`] = {...tc_03, pr:"~$68,000"};
  specs[`${LN}|Town Car|${yr}|Executive`] = {...tc_03, pr:"~$75,000"};
}

// Mark VII (1984–1992)
const mk7 = {en:"5.0L HO V8",di:"5.0L",cy:"8",hp:"171 kW (230 hp)",tq:"381 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~7.8 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,590 kg",se:"4",ca:"N/A",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
for (const yr of ["1984","1985","1986","1987","1988","1989","1990","1991","1992"]) {
  specs[`${LN}|Mark VII|${yr}|LSC`] = {...mk7, pr:"~$28,000"};
}

// Mark VIII (1993–1998)
const mk8 = {en:"4.6L DOHC Intech V8",di:"4.6L",cy:"8",hp:"213 kW (290 hp)",tq:"380 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~7.2 sec",ts:"~220 km/h",ft:"Petrol",wt:"1,703 kg",se:"4",ca:"N/A",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
for (const yr of ["1993","1994","1995","1996","1997","1998"]) {
  specs[`${LN}|Mark VIII|${yr}|Standard`] = {...mk8, pr:"~$38,000"};
  specs[`${LN}|Mark VIII|${yr}|LSC`] = {...mk8, pr:"~$43,000"};
}

// LS (2000–2006)
const ls_v6 = {en:"3.0L DOHC AJ V6",di:"3.0L",cy:"6",hp:"151 kW (203 hp)",tq:"271 Nm",tx:"5-speed automatic",dr:"RWD",z1:"~8.8 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,667 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
const ls_v8 = {en:"3.9L DOHC AJ V8",di:"3.9L",cy:"8",hp:"195 kW (264 hp)",tq:"373 Nm",tx:"5-speed automatic",dr:"RWD",z1:"~7.5 sec",ts:"~230 km/h",ft:"Petrol",wt:"1,700 kg",se:"5",ca:"N/A",fc:"14.5L",fh:"10.5L",fx:"18.5L"};
const ls_sport = {...ls_v8, hp:"201 kW (270 hp)"};
for (const yr of ["2000","2001","2002","2003","2004","2005","2006"]) {
  specs[`${LN}|LS|${yr}|V6`] = {...ls_v6, pr:"~$50,000"};
  specs[`${LN}|LS|${yr}|V8`] = {...ls_v8, pr:"~$62,000"};
  specs[`${LN}|LS|${yr}|Sport`] = {...ls_sport, pr:"~$68,000"};
}

// Navigator (1998–2026)
const nav_54 = {en:"5.4L Triton V8",di:"5.4L",cy:"8",hp:"201 kW (270 hp)",tq:"461 Nm",tx:"4-speed automatic",dr:"AWD",z1:"~9.5 sec",ts:"~178 km/h",ft:"Petrol",wt:"2,600 kg",se:"8",ca:"N/A",fc:"18.5L",fh:"13.0L",fx:"22.5L"};
const nav_35 = {en:"3.5L EcoBoost V6",di:"3.5L",cy:"6",hp:"310 kW (416 hp)",tq:"691 Nm",tx:"10-speed automatic",dr:"AWD",z1:"~7.2 sec",ts:"~200 km/h",ft:"Petrol",wt:"2,700 kg",se:"8",ca:"N/A",fc:"16.5L",fh:"12.0L",fx:"21.0L"};
for (const yr of ["1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"]) {
  specs[`${LN}|Navigator|${yr}|Standard`] = {...nav_54, pr:"~$85,000"};
  specs[`${LN}|Navigator|${yr}|L`] = {...nav_54, wt:"2,750 kg", pr:"~$90,000"};
}
for (const yr of ["2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${LN}|Navigator|${yr}|Standard`] = {...nav_35, pr:"~$125,000"};
  specs[`${LN}|Navigator|${yr}|L`] = {...nav_35, wt:"2,800 kg", pr:"~$132,000"};
  specs[`${LN}|Navigator|${yr}|Black Label`] = {...nav_35, pr:"~$148,000"};
}

// MKZ (2006–2020)
const mkz_20t = {en:"2.0L EcoBoost Turbo I4",di:"2.0L",cy:"4",hp:"149 kW (200 hp)",tq:"305 Nm",tx:"6-speed automatic",dr:"FWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,600 kg",se:"5",ca:"N/A",fc:"10.5L",fh:"7.5L",fx:"13.5L"};
const mkz_37 = {en:"3.7L Cyclone V6",di:"3.7L",cy:"6",hp:"195 kW (264 hp)",tq:"361 Nm",tx:"6-speed automatic",dr:"AWD",z1:"~7.2 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,700 kg",se:"5",ca:"N/A",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
const mkz_hyb = {en:"2.0L Atkinson I4 Hybrid",di:"2.0L",cy:"4",hp:"141 kW (191 hp)",tq:"190 Nm",tx:"CVT",dr:"FWD",z1:"~9.0 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,740 kg",se:"5",ca:"N/A",fc:"5.9L",fh:"5.4L",fx:"6.4L"};
for (const yr of ["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"]) {
  specs[`${LN}|MKZ|${yr}|Standard`] = {...mkz_20t, pr:"~$48,000"};
  specs[`${LN}|MKZ|${yr}|Black Label`] = {...mkz_37, pr:"~$62,000"};
  if (parseInt(yr) >= 2013) {
    specs[`${LN}|MKZ|${yr}|Hybrid`] = {...mkz_hyb, pr:"~$52,000"};
  }
}

// MKX/Nautilus (2007–2026)
const mkx_27t = {en:"2.7L EcoBoost V6",di:"2.7L",cy:"6",hp:"242 kW (325 hp)",tq:"515 Nm",tx:"8-speed automatic",dr:"AWD",z1:"~6.8 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,954 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.0L",fx:"16.0L"};
const mkx_20t = {en:"2.0L EcoBoost Turbo I4",di:"2.0L",cy:"4",hp:"183 kW (245 hp)",tq:"373 Nm",tx:"8-speed automatic",dr:"AWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,954 kg",se:"5",ca:"N/A",fc:"10.5L",fh:"7.8L",fx:"13.5L"};
for (const yr of ["2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  const name = parseInt(yr) >= 2019 ? 'Nautilus' : 'MKX';
  specs[`${LN}|${name}|${yr}|Standard`] = {...mkx_20t, pr:"~$62,000"};
  specs[`${LN}|${name}|${yr}|Black Label`] = {...mkx_27t, pr:"~$78,000"};
}

// MKC/Corsair (2014–2026)
const mkc_20t = {en:"2.0L EcoBoost Turbo I4",di:"2.0L",cy:"4",hp:"183 kW (245 hp)",tq:"373 Nm",tx:"6-speed automatic",dr:"AWD",z1:"~8.2 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,746 kg",se:"5",ca:"N/A",fc:"10.5L",fh:"7.8L",fx:"13.5L"};
const mkc_23t = {en:"2.3L EcoBoost Turbo I4",di:"2.3L",cy:"4",hp:"198 kW (265 hp)",tq:"400 Nm",tx:"6-speed automatic",dr:"AWD",z1:"~7.2 sec",ts:"~215 km/h",ft:"Petrol",wt:"1,760 kg",se:"5",ca:"N/A",fc:"11.5L",fh:"8.5L",fx:"14.5L"};
for (const yr of ["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  const name = parseInt(yr) >= 2020 ? 'Corsair' : 'MKC';
  specs[`${LN}|${name}|${yr}|Standard`] = {...mkc_20t, pr:"~$48,000"};
  specs[`${LN}|${name}|${yr}|Reserve`] = {...mkc_23t, pr:"~$58,000"};
  specs[`${LN}|${name}|${yr}|Black Label`] = {...mkc_23t, pr:"~$65,000"};
}

// Aviator (2019–2026)
const avia_30 = {en:"3.0L twin-turbo V6",di:"3.0L",cy:"6",hp:"335 kW (450 hp)",tq:"596 Nm",tx:"10-speed automatic",dr:"AWD",z1:"~5.5 sec",ts:"~230 km/h",ft:"Petrol",wt:"2,220 kg",se:"7",ca:"N/A",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
const avia_phev = {en:"3.0L twin-turbo V6 + electric PHEV",di:"3.0L",cy:"6",hp:"372 kW (499 hp)",tq:"796 Nm",tx:"10-speed automatic",dr:"AWD",z1:"~5.0 sec",ts:"~230 km/h",fc:"45 km (EV)",ft:"Petrol/Electric",wt:"2,540 kg",se:"7",ca:"N/A"};
for (const yr of ["2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${LN}|Aviator|${yr}|Standard`] = {...avia_30, pr:"~$95,000"};
  specs[`${LN}|Aviator|${yr}|Grand Touring`] = {...avia_phev, pr:"~$115,000"};
  specs[`${LN}|Aviator|${yr}|Black Label`] = {...avia_30, pr:"~$110,000"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement93.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement93.json written — ${count} entries`);
