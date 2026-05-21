'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Vauxhall (1903–2026)
// ============================================================
const VA = 'Vauxhall';

// --- Velox / Cresta (1948–1965) ---
const vel_48 = {en:"2275cc OHV I6",di:"2.3L",cy:"6",hp:"52 kW (70 hp)",tq:"154 Nm",tx:"3-speed manual",dr:"RWD",z1:"~22 sec",ts:"~128 km/h",ft:"Petrol",wt:"1,200 kg",se:"5",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
const vel_57 = {en:"2262cc OHV I6",di:"2.3L",cy:"6",hp:"63 kW (85 hp)",tq:"176 Nm",tx:"3-speed manual",dr:"RWD",z1:"~18 sec",ts:"~142 km/h",ft:"Petrol",wt:"1,215 kg",se:"5",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
const vel_60 = {en:"3294cc OHV I6",di:"3.3L",cy:"6",hp:"78 kW (105 hp)",tq:"215 Nm",tx:"3-speed manual",dr:"RWD",z1:"~15 sec",ts:"~152 km/h",ft:"Petrol",wt:"1,230 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["1948","1949","1950","1951","1952","1953","1954","1955","1956"]) {
  specs[`${VA}|Velox|${yr}|Velox`] = {...vel_48, pr:"~$1,800"};
  specs[`${VA}|Velox|${yr}|Cresta`] = {...vel_48, pr:"~$2,100"};
}
for (const yr of ["1957","1958","1959"]) {
  specs[`${VA}|Velox|${yr}|Velox`] = {...vel_57, pr:"~$2,200"};
  specs[`${VA}|Velox|${yr}|Cresta`] = {...vel_57, pr:"~$2,500"};
}
for (const yr of ["1960","1961","1962","1963","1964","1965"]) {
  specs[`${VA}|Velox|${yr}|Velox`] = {...vel_60, pr:"~$2,600"};
  specs[`${VA}|Velox|${yr}|Cresta`] = {...vel_60, pr:"~$3,000"};
}

// --- Victor (1957–1978) ---
const vic_57 = {en:"1508cc OHV I4",di:"1.5L",cy:"4",hp:"37 kW (50 hp)",tq:"105 Nm",tx:"3-speed manual",dr:"RWD",z1:"~22 sec",ts:"~125 km/h",ft:"Petrol",wt:"1,000 kg",se:"5",fc:"10.5L",fh:"7.5L",fx:"13.0L"};
const vic_64 = {en:"1594cc OHV I4",di:"1.6L",cy:"4",hp:"48 kW (65 hp)",tq:"122 Nm",tx:"4-speed manual",dr:"RWD",z1:"~18 sec",ts:"~138 km/h",ft:"Petrol",wt:"1,010 kg",se:"5",fc:"10.5L",fh:"7.8L",fx:"13.0L"};
const vic_vx = {en:"1594cc twin-carb OHV I4",di:"1.6L",cy:"4",hp:"63 kW (85 hp)",tq:"137 Nm",tx:"4-speed manual",dr:"RWD",z1:"~14 sec",ts:"~155 km/h",ft:"Petrol",wt:"1,020 kg",se:"5",fc:"11.0L",fh:"8.0L",fx:"13.5L"};
const vic_72 = {en:"2279cc OHC I4",di:"2.3L",cy:"4",hp:"74 kW (99 hp)",tq:"176 Nm",tx:"4-speed manual",dr:"RWD",z1:"~12 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,050 kg",se:"5",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
for (const yr of ["1957","1958","1959","1960","1961","1962","1963"]) {
  specs[`${VA}|Victor|${yr}|Standard`] = {...vic_57, pr:"~$1,500"};
  specs[`${VA}|Victor|${yr}|De Luxe`] = {...vic_57, pr:"~$1,800"};
}
for (const yr of ["1964","1965","1966","1967","1968"]) {
  specs[`${VA}|Victor|${yr}|Standard`] = {...vic_64, pr:"~$1,900"};
  specs[`${VA}|Victor|${yr}|De Luxe`] = {...vic_64, pr:"~$2,200"};
  specs[`${VA}|Victor|${yr}|VX4/90`] = {...vic_vx, pr:"~$2,600"};
}
for (const yr of ["1972","1973","1974","1975","1976","1977","1978"]) {
  specs[`${VA}|Victor|${yr}|Standard`] = {...vic_72, pr:"~$3,500"};
  specs[`${VA}|Victor|${yr}|De Luxe`] = {...vic_72, pr:"~$3,900"};
}

// --- Viva (1963–1979) ---
const viva_63 = {en:"1057cc OHV I4",di:"1.1L",cy:"4",hp:"29 kW (39 hp)",tq:"75 Nm",tx:"4-speed manual",dr:"RWD",z1:"~26 sec",ts:"~118 km/h",ft:"Petrol",wt:"870 kg",se:"4",fc:"8.5L",fh:"6.2L",fx:"10.5L"};
const viva_66 = {en:"1159cc OHV I4",di:"1.2L",cy:"4",hp:"37 kW (50 hp)",tq:"88 Nm",tx:"4-speed manual",dr:"RWD",z1:"~21 sec",ts:"~128 km/h",ft:"Petrol",wt:"882 kg",se:"4",fc:"8.5L",fh:"6.2L",fx:"10.5L"};
const viva_70 = {en:"1599cc OHV I4",di:"1.6L",cy:"4",hp:"56 kW (75 hp)",tq:"120 Nm",tx:"4-speed manual",dr:"RWD",z1:"~16 sec",ts:"~145 km/h",ft:"Petrol",wt:"920 kg",se:"4",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
const viva_gt = {en:"1975cc OHC I4",di:"2.0L",cy:"4",hp:"85 kW (114 hp)",tq:"171 Nm",tx:"4-speed manual",dr:"RWD",z1:"~10 sec",ts:"~175 km/h",ft:"Petrol",wt:"950 kg",se:"4",fc:"11.0L",fh:"8.0L",fx:"14.0L"};
for (const yr of ["1963","1964","1965"]) {
  specs[`${VA}|Viva|${yr}|Standard`] = {...viva_63, pr:"~$1,200"};
  specs[`${VA}|Viva|${yr}|DeLuxe`] = {...viva_63, pr:"~$1,450"};
}
for (const yr of ["1966","1967","1968","1969","1970"]) {
  specs[`${VA}|Viva|${yr}|Standard`] = {...viva_66, pr:"~$1,500"};
  specs[`${VA}|Viva|${yr}|DeLuxe`] = {...viva_66, pr:"~$1,750"};
}
for (const yr of ["1970","1971","1972","1973","1974","1975","1976","1977","1978","1979"]) {
  specs[`${VA}|Viva|${yr}|Standard`] = {...viva_70, pr:"~$2,500"};
  specs[`${VA}|Viva|${yr}|GT`] = {...viva_gt, pr:"~$3,500"};
}

// --- Cavalier (1975–1995) ---
const cav_75 = {en:"1599cc OHV I4",di:"1.6L",cy:"4",hp:"52 kW (70 hp)",tq:"117 Nm",tx:"4-speed manual",dr:"RWD",z1:"~16 sec",ts:"~148 km/h",ft:"Petrol",wt:"1,060 kg",se:"5",ca:"335 L",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
const cav_84 = {en:"1998cc OHC I4",di:"2.0L",cy:"4",hp:"85 kW (114 hp)",tq:"170 Nm",tx:"5-speed manual",dr:"FWD",z1:"~11 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,080 kg",se:"5",ca:"400 L",fc:"10.5L",fh:"7.8L",fx:"13.5L"};
const cav_sri = {en:"1998cc OHC I4",di:"2.0L",cy:"4",hp:"110 kW (148 hp)",tq:"190 Nm",tx:"5-speed manual",dr:"FWD",z1:"~9.0 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,080 kg",se:"5",ca:"400 L",fc:"11.0L",fh:"8.2L",fx:"14.0L"};
for (const yr of ["1975","1976","1977","1978","1979","1980","1981"]) {
  specs[`${VA}|Cavalier|${yr}|Standard`] = {...cav_75, pr:"~$3,500"};
  specs[`${VA}|Cavalier|${yr}|GL`] = {...cav_75, pr:"~$4,000"};
}
for (const yr of ["1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995"]) {
  specs[`${VA}|Cavalier|${yr}|Standard`] = {...cav_84, pr:"~$14,000"};
  specs[`${VA}|Cavalier|${yr}|GL`] = {...cav_84, pr:"~$15,500"};
  specs[`${VA}|Cavalier|${yr}|GLS`] = {...cav_84, pr:"~$17,000"};
  if (parseInt(yr) >= 1984) {
    specs[`${VA}|Cavalier|${yr}|SRi`] = {...cav_sri, pr:"~$20,000"};
  }
}

// --- Astra (1980–2022) ---
const ast_80 = {en:"1196cc OHV I4",di:"1.2L",cy:"4",hp:"41 kW (55 hp)",tq:"88 Nm",tx:"4-speed manual",dr:"RWD",z1:"~17 sec",ts:"~145 km/h",ft:"Petrol",wt:"1,100 kg",se:"5",ca:"380 L",fc:"8.5L",fh:"6.2L",fx:"10.5L"};
const ast_86 = {en:"1598cc OHC I4",di:"1.6L",cy:"4",hp:"63 kW (85 hp)",tq:"128 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,050 kg",se:"5",ca:"370 L",fc:"8.5L",fh:"6.5L",fx:"10.5L"};
const ast_gsi = {en:"1998cc DOHC 16v I4",di:"2.0L",cy:"4",hp:"110 kW (148 hp)",tq:"187 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,100 kg",se:"5",ca:"370 L",fc:"10.5L",fh:"7.8L",fx:"13.0L"};
const ast_opc = {en:"2.0L Turbo I4",di:"2.0L",cy:"4",hp:"141 kW (189 hp)",tq:"250 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.2 sec",ts:"~225 km/h",ft:"Petrol",wt:"1,200 kg",se:"5",ca:"330 L",fc:"10.5L",fh:"7.8L",fx:"13.5L"};
for (const yr of ["1980","1981","1982","1983","1984","1985"]) {
  specs[`${VA}|Astra|${yr}|Standard`] = {...ast_80, pr:"~$7,500"};
  specs[`${VA}|Astra|${yr}|GLS`] = {...ast_80, pr:"~$9,000"};
}
for (const yr of ["1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998"]) {
  specs[`${VA}|Astra|${yr}|Standard`] = {...ast_86, pr:"~$16,000"};
  specs[`${VA}|Astra|${yr}|GLS`] = {...ast_86, pr:"~$18,500"};
  if (parseInt(yr) >= 1988) {
    specs[`${VA}|Astra|${yr}|GSi`] = {...ast_gsi, pr:"~$24,000"};
  }
}
for (const yr of ["1999","2000","2001","2002","2003","2004"]) {
  specs[`${VA}|Astra|${yr}|Standard`] = {...ast_86, pr:"~$22,000"};
  specs[`${VA}|Astra|${yr}|GLS`] = {...ast_86, pr:"~$25,000"};
}
for (const yr of ["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015"]) {
  specs[`${VA}|Astra|${yr}|Standard`] = {...ast_86, pr:"~$25,000"};
  specs[`${VA}|Astra|${yr}|GLS`] = {...ast_86, pr:"~$28,000"};
  specs[`${VA}|Astra|${yr}|OPC`] = {...ast_opc, pr:"~$42,000"};
}
for (const yr of ["2016","2017","2018","2019","2020","2021","2022"]) {
  specs[`${VA}|Astra|${yr}|Standard`] = {...ast_86, pr:"~$28,000"};
  specs[`${VA}|Astra|${yr}|GLS`] = {...ast_86, pr:"~$32,000"};
  specs[`${VA}|Astra|${yr}|VXR`] = {...ast_opc, pr:"~$48,000"};
}

// --- Corsa (1982–2026) ---
const cor_82 = {en:"993cc OHV I4",di:"1.0L",cy:"4",hp:"33 kW (44 hp)",tq:"66 Nm",tx:"4-speed manual",dr:"RWD",z1:"~20 sec",ts:"~138 km/h",ft:"Petrol",wt:"1,040 kg",se:"4",ca:"285 L",fc:"7.5L",fh:"5.5L",fx:"9.5L"};
const cor_93 = {en:"1389cc OHC I4",di:"1.4L",cy:"4",hp:"52 kW (70 hp)",tq:"110 Nm",tx:"5-speed manual",dr:"FWD",z1:"~15 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,050 kg",se:"4",ca:"285 L",fc:"7.8L",fh:"5.8L",fx:"9.8L"};
const cor_opc = {en:"1598cc turbo I4",di:"1.6L",cy:"4",hp:"141 kW (189 hp)",tq:"230 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.2 sec",ts:"~230 km/h",ft:"Petrol",wt:"1,140 kg",se:"4",ca:"285 L",fc:"10.5L",fh:"7.8L",fx:"13.5L"};
for (const yr of ["1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992"]) {
  specs[`${VA}|Corsa|${yr}|Standard`] = {...cor_82, pr:"~$6,500"};
  specs[`${VA}|Corsa|${yr}|Design`] = {...cor_82, pr:"~$8,000"};
}
for (const yr of ["1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006"]) {
  specs[`${VA}|Corsa|${yr}|Standard`] = {...cor_93, pr:"~$16,000"};
  specs[`${VA}|Corsa|${yr}|Design`] = {...cor_93, pr:"~$18,500"};
  specs[`${VA}|Corsa|${yr}|SRi`] = {...cor_93, hp:"66 kW (89 hp)", pr:"~$20,000"};
}
for (const yr of ["2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${VA}|Corsa|${yr}|Standard`] = {...cor_93, pr:"~$22,000"};
  specs[`${VA}|Corsa|${yr}|Design`] = {...cor_93, pr:"~$25,000"};
  specs[`${VA}|Corsa|${yr}|SRi`] = {...cor_93, pr:"~$27,000"};
  specs[`${VA}|Corsa|${yr}|OPC`] = {...cor_opc, pr:"~$38,000"};
}

// --- Vectra (1988–2008) ---
const vec_88 = {en:"1796cc OHC I4",di:"1.8L",cy:"4",hp:"66 kW (89 hp)",tq:"135 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,375 kg",se:"5",ca:"430 L",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
const vec_gsi = {en:"2498cc DOHC V6",di:"2.5L",cy:"6",hp:"125 kW (168 hp)",tq:"220 Nm",tx:"5-speed manual",dr:"FWD",z1:"~9.5 sec",ts:"~215 km/h",ft:"Petrol",wt:"1,430 kg",se:"5",ca:"430 L",fc:"12.0L",fh:"8.5L",fx:"15.0L"};
const vec_opc = {en:"3.2L DOHC V6",di:"3.2L",cy:"6",hp:"177 kW (237 hp)",tq:"320 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.2 sec",ts:"~240 km/h",ft:"Petrol",wt:"1,470 kg",se:"5",ca:"430 L",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
for (const yr of ["1988","1989","1990","1991","1992","1993","1994","1995"]) {
  specs[`${VA}|Vectra|${yr}|Standard`] = {...vec_88, pr:"~$18,000"};
  specs[`${VA}|Vectra|${yr}|GL`] = {...vec_88, pr:"~$20,000"};
  specs[`${VA}|Vectra|${yr}|CD`] = {...vec_gsi, pr:"~$28,000"};
}
for (const yr of ["1996","1997","1998","1999","2000","2001","2002"]) {
  specs[`${VA}|Vectra|${yr}|Standard`] = {...vec_88, pr:"~$24,000"};
  specs[`${VA}|Vectra|${yr}|GL`] = {...vec_88, pr:"~$27,000"};
  specs[`${VA}|Vectra|${yr}|GSi`] = {...vec_gsi, pr:"~$35,000"};
}
for (const yr of ["2003","2004","2005","2006","2007","2008"]) {
  specs[`${VA}|Vectra|${yr}|Standard`] = {...vec_88, pr:"~$28,000"};
  specs[`${VA}|Vectra|${yr}|GL`] = {...vec_88, pr:"~$31,000"};
  specs[`${VA}|Vectra|${yr}|OPC`] = {...vec_opc, pr:"~$52,000"};
}

// --- Omega (1986–2003) ---
const om_86 = {en:"1998cc OHC I4",di:"2.0L",cy:"4",hp:"85 kW (114 hp)",tq:"170 Nm",tx:"5-speed manual",dr:"RWD",z1:"~11 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,500 kg",se:"5",ca:"445 L",fc:"10.5L",fh:"7.8L",fx:"13.5L"};
const om_v6 = {en:"2962cc DOHC V6",di:"3.0L",cy:"6",hp:"173 kW (232 hp)",tq:"280 Nm",tx:"5-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~235 km/h",ft:"Petrol",wt:"1,560 kg",se:"5",ca:"445 L",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
const om_lotus = {en:"3.6L DOHC I6 Lotus",di:"3.6L",cy:"6",hp:"280 kW (375 hp)",tq:"490 Nm",tx:"6-speed manual",dr:"RWD",z1:"~5.4 sec",ts:"~280 km/h",ft:"Petrol",wt:"1,600 kg",se:"5",ca:"445 L",fc:"15.5L",fh:"11.5L",fx:"19.5L"};
for (const yr of ["1986","1987","1988","1989","1990","1991","1992","1993","1994","1995"]) {
  specs[`${VA}|Omega|${yr}|Standard`] = {...om_86, pr:"~$25,000"};
  specs[`${VA}|Omega|${yr}|Elite`] = {...om_86, pr:"~$30,000"};
  specs[`${VA}|Omega|${yr}|MV6`] = {...om_v6, pr:"~$42,000"};
  if (parseInt(yr) >= 1990 && parseInt(yr) <= 1993) {
    specs[`${VA}|Omega|${yr}|Lotus`] = {...om_lotus, pr:"~$68,000"};
  }
}
for (const yr of ["1996","1997","1998","1999","2000","2001","2002","2003"]) {
  specs[`${VA}|Omega|${yr}|Standard`] = {...om_86, pr:"~$30,000"};
  specs[`${VA}|Omega|${yr}|Elite`] = {...om_86, pr:"~$35,000"};
  specs[`${VA}|Omega|${yr}|MV6`] = {...om_v6, pr:"~$48,000"};
}

// --- Monaro VXR (2005–2006) ---
const monaro_vxr = {en:"5.7L LS1 V8",di:"5.7L",cy:"8",hp:"294 kW (394 hp)",tq:"530 Nm",tx:"6-speed manual",dr:"RWD",z1:"~5.2 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,674 kg",se:"4",ca:"N/A",fc:"14.5L",fh:"10.5L",fx:"18.5L"};
specs[`${VA}|Monaro VXR|2005|Standard`] = {...monaro_vxr, pr:"~$52,000"};
specs[`${VA}|Monaro VXR|2006|Standard`] = {...monaro_vxr, pr:"~$52,000"};

// --- Insignia (2008–2022) ---
const ins_16t = {en:"1.6T SIDI I4",di:"1.6L",cy:"4",hp:"125 kW (168 hp)",tq:"230 Nm",tx:"6-speed manual",dr:"FWD",z1:"~10 sec",ts:"~205 km/h",ft:"Petrol",wt:"1,550 kg",se:"5",ca:"490 L",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
const ins_opc = {en:"2.8T V6 turbo",di:"2.8L",cy:"6",hp:"239 kW (321 hp)",tq:"435 Nm",tx:"6-speed automatic",dr:"AWD",z1:"~6.3 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,700 kg",se:"5",ca:"490 L",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
for (const yr of ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"]) {
  specs[`${VA}|Insignia|${yr}|Design`] = {...ins_16t, pr:"~$28,000"};
  specs[`${VA}|Insignia|${yr}|SRi`] = {...ins_16t, pr:"~$33,000"};
  specs[`${VA}|Insignia|${yr}|Elite`] = {...ins_16t, pr:"~$38,000"};
  if (parseInt(yr) <= 2017) {
    specs[`${VA}|Insignia|${yr}|OPC`] = {...ins_opc, pr:"~$62,000"};
  }
}

// --- Mokka (2012–2026) ---
const mok_14t = {en:"1.4T turbocharged I4",di:"1.4L",cy:"4",hp:"103 kW (138 hp)",tq:"200 Nm",tx:"6-speed automatic",dr:"FWD",z1:"~11 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,280 kg",se:"5",ca:"356 L",fc:"8.5L",fh:"6.2L",fx:"10.5L"};
const mok_12t = {en:"1.2T PureTech I3",di:"1.2L",cy:"3",hp:"96 kW (129 hp)",tq:"230 Nm",tx:"8-speed automatic",dr:"FWD",z1:"~11.5 sec",ts:"~190 km/h",ft:"Petrol",wt:"1,260 kg",se:"5",ca:"350 L",fc:"7.5L",fh:"5.8L",fx:"9.5L"};
for (const yr of ["2012","2013","2014","2015","2016","2017","2018","2019","2020"]) {
  specs[`${VA}|Mokka|${yr}|Standard`] = {...mok_14t, pr:"~$28,000"};
  specs[`${VA}|Mokka|${yr}|SRi`] = {...mok_14t, pr:"~$33,000"};
  specs[`${VA}|Mokka|${yr}|Elite`] = {...mok_14t, pr:"~$37,000"};
}
for (const yr of ["2021","2022","2023","2024","2025","2026"]) {
  specs[`${VA}|Mokka|${yr}|Standard`] = {...mok_12t, pr:"~$32,000"};
  specs[`${VA}|Mokka|${yr}|SRi`] = {...mok_12t, pr:"~$36,000"};
  specs[`${VA}|Mokka|${yr}|Elite`] = {...mok_12t, pr:"~$42,000"};
}

// ============================================================
// Morgan (1936–2026)
// ============================================================
const MO = 'Morgan';

// --- 4/4 (post-war, 1955–2018) ---
const m44_55 = {en:"1172cc Ford 100E I4",di:"1.2L",cy:"4",hp:"30 kW (40 hp)",tq:"70 Nm",tx:"3-speed manual",dr:"RWD",z1:"~18 sec",ts:"~115 km/h",ft:"Petrol",wt:"700 kg",se:"2",fc:"8.0L",fh:"5.8L",fx:"10.0L"};
const m44_84 = {en:"1597cc Ford CVH I4",di:"1.6L",cy:"4",hp:"60 kW (80 hp)",tq:"127 Nm",tx:"5-speed manual",dr:"RWD",z1:"~12 sec",ts:"~155 km/h",ft:"Petrol",wt:"700 kg",se:"2",fc:"9.0L",fh:"6.5L",fx:"11.5L"};
const m44_99 = {en:"1796cc Ford Zetec I4",di:"1.8L",cy:"4",hp:"81 kW (109 hp)",tq:"161 Nm",tx:"5-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~165 km/h",ft:"Petrol",wt:"700 kg",se:"2",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
const m44_12 = {en:"1596cc Ford Sigma I4",di:"1.6L",cy:"4",hp:"63 kW (85 hp)",tq:"150 Nm",tx:"5-speed manual",dr:"RWD",z1:"~9.0 sec",ts:"~168 km/h",ft:"Petrol",wt:"700 kg",se:"2",fc:"9.0L",fh:"6.5L",fx:"11.5L"};
for (const yr of ["1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983"]) {
  specs[`${MO}|4/4|${yr}|Standard`] = {...m44_55, pr:"~$55,000"};
}
for (const yr of ["1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998"]) {
  specs[`${MO}|4/4|${yr}|Standard`] = {...m44_84, pr:"~$58,000"};
  specs[`${MO}|4/4|${yr}|4-seater`] = {...m44_84, wt:"740 kg", se:"4", pr:"~$60,000"};
}
for (const yr of ["1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"]) {
  specs[`${MO}|4/4|${yr}|Standard`] = {...m44_99, pr:"~$62,000"};
  specs[`${MO}|4/4|${yr}|4-seater`] = {...m44_99, wt:"740 kg", se:"4", pr:"~$65,000"};
}
for (const yr of ["2012","2013","2014","2015","2016","2017","2018"]) {
  specs[`${MO}|4/4|${yr}|Standard`] = {...m44_12, pr:"~$65,000"};
  specs[`${MO}|4/4|${yr}|4-seater`] = {...m44_12, wt:"740 kg", se:"4", pr:"~$68,000"};
}

// --- Plus 4 (1950–2021) ---
const p4_50 = {en:"2088cc Triumph TR I4",di:"2.1L",cy:"4",hp:"67 kW (90 hp)",tq:"152 Nm",tx:"4-speed manual",dr:"RWD",z1:"~12 sec",ts:"~162 km/h",ft:"Petrol",wt:"820 kg",se:"2",fc:"10.5L",fh:"7.5L",fx:"13.0L"};
const p4_68 = {en:"1998cc Ford Kent I4",di:"2.0L",cy:"4",hp:"63 kW (84 hp)",tq:"142 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11.5 sec",ts:"~165 km/h",ft:"Petrol",wt:"820 kg",se:"2",fc:"10.5L",fh:"7.5L",fx:"13.0L"};
const p4_85 = {en:"1993cc Ford I4",di:"2.0L",cy:"4",hp:"82 kW (110 hp)",tq:"163 Nm",tx:"5-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"830 kg",se:"2",fc:"10.5L",fh:"7.5L",fx:"13.0L"};
const p4_00 = {en:"1998cc Ford Zetec I4",di:"2.0L",cy:"4",hp:"100 kW (134 hp)",tq:"190 Nm",tx:"5-speed manual",dr:"RWD",z1:"~7.0 sec",ts:"~185 km/h",ft:"Petrol",wt:"820 kg",se:"2",fc:"10.5L",fh:"7.5L",fx:"13.5L"};
for (const yr of ["1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967"]) {
  specs[`${MO}|Plus 4|${yr}|Standard`] = {...p4_50, pr:"~$62,000"};
}
for (const yr of ["1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984"]) {
  specs[`${MO}|Plus 4|${yr}|Standard`] = {...p4_68, pr:"~$62,000"};
}
for (const yr of ["1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999"]) {
  specs[`${MO}|Plus 4|${yr}|Standard`] = {...p4_85, pr:"~$65,000"};
  specs[`${MO}|Plus 4|${yr}|SuperSports`] = {...p4_85, hp:"97 kW (130 hp)", pr:"~$70,000"};
}
for (const yr of ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${MO}|Plus 4|${yr}|Standard`] = {...p4_00, pr:"~$70,000"};
  specs[`${MO}|Plus 4|${yr}|SuperSports`] = {...p4_00, hp:"118 kW (158 hp)", pr:"~$78,000"};
}

// --- Plus 8 (1968–2018) ---
const p8_68 = {en:"3528cc Rover V8",di:"3.5L",cy:"8",hp:"113 kW (152 hp)",tq:"269 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,050 kg",se:"2",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
const p8_76 = {en:"3528cc Rover V8 EFi",di:"3.5L",cy:"8",hp:"119 kW (160 hp)",tq:"275 Nm",tx:"5-speed manual",dr:"RWD",z1:"~6.0 sec",ts:"~205 km/h",ft:"Petrol",wt:"1,050 kg",se:"2",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
const p8_13bmw = {en:"3.7L BMW V8 N62",di:"3.7L",cy:"8",hp:"191 kW (256 hp)",tq:"350 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.5 sec",ts:"~228 km/h",ft:"Petrol",wt:"1,050 kg",se:"2",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
for (const yr of ["1968","1969","1970","1971","1972","1973","1974","1975"]) {
  specs[`${MO}|Plus 8|${yr}|Standard`] = {...p8_68, pr:"~$90,000"};
}
for (const yr of ["1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012"]) {
  specs[`${MO}|Plus 8|${yr}|Standard`] = {...p8_76, pr:"~$95,000"};
  specs[`${MO}|Plus 8|${yr}|GTR`] = {...p8_76, pr:"~$105,000"};
}
for (const yr of ["2013","2014","2015","2016","2017","2018"]) {
  specs[`${MO}|Plus 8|${yr}|Standard`] = {...p8_13bmw, pr:"~$130,000"};
  specs[`${MO}|Plus 8|${yr}|GTR`] = {...p8_13bmw, pr:"~$145,000"};
}

// --- Aero 8 (2000–2018) ---
const aero8 = {en:"4.4L BMW V8 N62",di:"4.4L",cy:"8",hp:"223 kW (299 hp)",tq:"440 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.5 sec",ts:"~240 km/h",ft:"Petrol",wt:"1,025 kg",se:"2",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
for (const yr of ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"]) {
  specs[`${MO}|Aero 8|${yr}|Standard`] = {...aero8, pr:"~$130,000"};
  specs[`${MO}|Aero 8|${yr}|SuperSports`] = {...aero8, hp:"250 kW (335 hp)", pr:"~$145,000"};
}

// --- Plus Six (2019–2026) ---
const p6 = {en:"3.0L BMW B58 inline-6 turbo",di:"3.0L",cy:"6",hp:"250 kW (335 hp)",tq:"500 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.2 sec",ts:"~266 km/h",ft:"Petrol",wt:"1,075 kg",se:"2",fc:"12.5L",fh:"9.0L",fx:"16.0L"};
for (const yr of ["2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${MO}|Plus Six|${yr}|Standard`] = {...p6, pr:"~$135,000"};
}

// --- 3 Wheeler (2011–2021) ---
const three_w = {en:"1977cc S&S V-twin",di:"2.0L",cy:"2",hp:"50 kW (67 hp)",tq:"132 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"500 kg",se:"2",fc:"8.5L",fh:"6.0L",fx:"11.0L"};
for (const yr of ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${MO}|3 Wheeler|${yr}|Standard`] = {...three_w, pr:"~$55,000"};
}

// --- Super 3 (2022–2026) ---
const s3 = {en:"1498cc Ford 3-cylinder turbo",di:"1.5L",cy:"3",hp:"88 kW (118 hp)",tq:"190 Nm",tx:"5-speed manual",dr:"RWD",z1:"~6.9 sec",ts:"~220 km/h",ft:"Petrol",wt:"635 kg",se:"2",fc:"8.5L",fh:"6.2L",fx:"11.0L"};
for (const yr of ["2022","2023","2024","2025","2026"]) {
  specs[`${MO}|Super 3|${yr}|Standard`] = {...s3, pr:"~$65,000"};
}

// ============================================================
// De Tomaso (1959–2004)
// ============================================================
const DT = 'De Tomaso';

// --- Vallelunga (1963–1967) ---
const val = {en:"1498cc Ford Cortina I4",di:"1.5L",cy:"4",hp:"77 kW (103 hp)",tq:"130 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9 sec",ts:"~195 km/h",ft:"Petrol",wt:"600 kg",se:"2",fc:"10.5L",fh:"7.5L",fx:"13.0L"};
for (const yr of ["1963","1964","1965","1966","1967"]) {
  specs[`${DT}|Vallelunga|${yr}|Standard`] = {...val, pr:"~$6,500"};
}

// --- Mangusta (1967–1971) ---
const mang = {en:"4727cc Ford Boss 302 V8",di:"4.7L",cy:"8",hp:"224 kW (300 hp)",tq:"407 Nm",tx:"5-speed ZF manual",dr:"RWD",z1:"~5.8 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,080 kg",se:"2",fc:"18.5L",fh:"13.0L",fx:"23.0L"};
for (const yr of ["1967","1968","1969","1970","1971"]) {
  specs[`${DT}|Mangusta|${yr}|Standard`] = {...mang, pr:"~$12,000"};
}

// --- Pantera (1971–1992) ---
const pan_l = {en:"351ci Cleveland V8",di:"5.8L",cy:"8",hp:"235 kW (315 hp)",tq:"488 Nm",tx:"5-speed ZF manual",dr:"RWD",z1:"~5.5 sec",ts:"~260 km/h",ft:"Petrol",wt:"1,305 kg",se:"2",fc:"18.5L",fh:"13.0L",fx:"23.0L"};
const pan_gts = {en:"351ci Cleveland V8",di:"5.8L",cy:"8",hp:"254 kW (340 hp)",tq:"515 Nm",tx:"5-speed ZF manual",dr:"RWD",z1:"~5.2 sec",ts:"~265 km/h",ft:"Petrol",wt:"1,320 kg",se:"2",fc:"19.0L",fh:"13.5L",fx:"24.0L"};
const pan_gt5 = {en:"351ci Cleveland V8",di:"5.8L",cy:"8",hp:"257 kW (344 hp)",tq:"515 Nm",tx:"5-speed ZF manual",dr:"RWD",z1:"~5.2 sec",ts:"~265 km/h",ft:"Petrol",wt:"1,350 kg",se:"2",fc:"19.0L",fh:"13.5L",fx:"24.0L"};
const pan_gt5s = {en:"302ci Ford HO V8",di:"5.0L",cy:"8",hp:"186 kW (249 hp)",tq:"380 Nm",tx:"5-speed ZF manual",dr:"RWD",z1:"~6.0 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,330 kg",se:"2",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
for (const yr of ["1971","1972","1973","1974"]) {
  specs[`${DT}|Pantera|${yr}|L`] = {...pan_l, pr:"~$15,000"};
}
for (const yr of ["1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${DT}|Pantera|${yr}|GTS`] = {...pan_gts, pr:"~$18,000"};
}
for (const yr of ["1980","1981","1982","1983","1984"]) {
  specs[`${DT}|Pantera|${yr}|GT5`] = {...pan_gt5, pr:"~$28,000"};
}
for (const yr of ["1985","1986","1987","1988","1989","1990","1991","1992"]) {
  specs[`${DT}|Pantera|${yr}|GT5-S`] = {...pan_gt5s, pr:"~$45,000"};
}

// --- Deauville (1971–1985) ---
const deau = {en:"351ci Cleveland V8",di:"5.8L",cy:"8",hp:"235 kW (315 hp)",tq:"488 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~8.5 sec",ts:"~220 km/h",ft:"Petrol",wt:"1,700 kg",se:"4",fc:"19.5L",fh:"13.5L",fx:"24.5L"};
for (const yr of ["1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985"]) {
  specs[`${DT}|Deauville|${yr}|Standard`] = {...deau, pr:"~$12,000"};
}

// --- Longchamp (1972–1989) ---
const lc_std = {en:"351ci Cleveland V8",di:"5.8L",cy:"8",hp:"235 kW (315 hp)",tq:"488 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~7.5 sec",ts:"~230 km/h",ft:"Petrol",wt:"1,570 kg",se:"4",fc:"19.0L",fh:"13.5L",fx:"24.0L"};
for (const yr of ["1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989"]) {
  specs[`${DT}|Longchamp|${yr}|Standard`] = {...lc_std, pr:"~$14,000"};
  specs[`${DT}|Longchamp|${yr}|Coupe`] = {...lc_std, pr:"~$15,000"};
  if (parseInt(yr) >= 1979) {
    specs[`${DT}|Longchamp|${yr}|Spyder`] = {...lc_std, pr:"~$17,000"};
  }
}

// --- Guara (1993–2004) ---
const gua = {en:"4.0L BMW M60 V8",di:"4.0L",cy:"8",hp:"210 kW (281 hp)",tq:"400 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.2 sec",ts:"~275 km/h",ft:"Petrol",wt:"1,100 kg",se:"2",fc:"14.5L",fh:"10.5L",fx:"18.5L"};
for (const yr of ["1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004"]) {
  specs[`${DT}|Guara|${yr}|Coupe`] = {...gua, pr:"~$85,000"};
  specs[`${DT}|Guara|${yr}|Barchetta`] = {...gua, pr:"~$90,000"};
}

// ============================================================
// Alpine (1955–2026)
// ============================================================
const AL = 'Alpine';

// --- A106 (1955–1960) ---
const a106 = {en:"747cc Renault I4",di:"0.7L",cy:"4",hp:"16 kW (21 hp)",tq:"40 Nm",tx:"4-speed manual",dr:"RWD",z1:"~23 sec",ts:"~105 km/h",ft:"Petrol",wt:"540 kg",se:"2",fc:"7.0L",fh:"5.0L",fx:"9.0L"};
for (const yr of ["1955","1956","1957","1958","1959","1960"]) {
  specs[`${AL}|A106|${yr}|Standard`] = {...a106, pr:"~$2,200"};
}

// --- A108 (1958–1965) ---
const a108 = {en:"845cc Renault R8 I4",di:"0.8L",cy:"4",hp:"22 kW (29 hp)",tq:"55 Nm",tx:"4-speed manual",dr:"RWD",z1:"~21 sec",ts:"~115 km/h",ft:"Petrol",wt:"520 kg",se:"2",fc:"7.5L",fh:"5.5L",fx:"9.5L"};
for (const yr of ["1958","1959","1960","1961","1962","1963","1964","1965"]) {
  specs[`${AL}|A108|${yr}|Standard`] = {...a108, pr:"~$2,400"};
  specs[`${AL}|A108|${yr}|Cabriolet`] = {...a108, pr:"~$2,700"};
}

// --- A110 Classic (1961–1977) ---
const a110_61 = {en:"1108cc Renault I4",di:"1.1L",cy:"4",hp:"42 kW (56 hp)",tq:"88 Nm",tx:"4-speed manual",dr:"RWD",z1:"~12 sec",ts:"~165 km/h",ft:"Petrol",wt:"620 kg",se:"2",fc:"8.5L",fh:"6.2L",fx:"10.5L"};
const a110_69 = {en:"1296cc Renault I4",di:"1.3L",cy:"4",hp:"72 kW (97 hp)",tq:"127 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.0 sec",ts:"~195 km/h",ft:"Petrol",wt:"620 kg",se:"2",fc:"8.5L",fh:"6.2L",fx:"10.5L"};
const a110_71 = {en:"1605cc Renault I4",di:"1.6L",cy:"4",hp:"102 kW (137 hp)",tq:"166 Nm",tx:"5-speed manual",dr:"RWD",z1:"~7.0 sec",ts:"~210 km/h",ft:"Petrol",wt:"620 kg",se:"2",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
for (const yr of ["1961","1962","1963","1964","1965"]) {
  specs[`${AL}|A110 Classic|${yr}|Berlinette 1100`] = {...a110_61, pr:"~$4,500"};
}
for (const yr of ["1966","1967","1968","1969","1970","1971","1972","1973"]) {
  specs[`${AL}|A110 Classic|${yr}|Berlinette 1300`] = {...a110_69, pr:"~$6,000"};
}
for (const yr of ["1971","1972","1973","1974","1975","1976","1977"]) {
  specs[`${AL}|A110 Classic|${yr}|Berlinette 1600S`] = {...a110_71, pr:"~$8,000"};
}

// --- A310 (1971–1985) ---
const a310_16 = {en:"1605cc Renault I4",di:"1.6L",cy:"4",hp:"72 kW (97 hp)",tq:"127 Nm",tx:"5-speed manual",dr:"RWD",z1:"~10 sec",ts:"~195 km/h",ft:"Petrol",wt:"970 kg",se:"2",fc:"10.5L",fh:"7.5L",fx:"13.0L"};
const a310_v6 = {en:"2664cc PRV V6",di:"2.7L",cy:"6",hp:"118 kW (158 hp)",tq:"235 Nm",tx:"5-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~220 km/h",ft:"Petrol",wt:"970 kg",se:"2",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
for (const yr of ["1971","1972","1973","1974","1975","1976"]) {
  specs[`${AL}|A310|${yr}|Standard`] = {...a310_16, pr:"~$8,000"};
}
for (const yr of ["1976","1977","1978","1979","1980","1981","1982","1983","1984","1985"]) {
  specs[`${AL}|A310|${yr}|V6`] = {...a310_v6, pr:"~$18,000"};
}

// --- GTA / A610 (1985–1995) ---
const gta_vgt = {en:"2849cc PRV V6 NA",di:"2.8L",cy:"6",hp:"118 kW (158 hp)",tq:"230 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.0 sec",ts:"~220 km/h",ft:"Petrol",wt:"1,100 kg",se:"2",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
const gta_turbo = {en:"2849cc PRV V6 turbo",di:"2.8L",cy:"6",hp:"149 kW (200 hp)",tq:"285 Nm",tx:"5-speed manual",dr:"RWD",z1:"~7.0 sec",ts:"~245 km/h",ft:"Petrol",wt:"1,100 kg",se:"2",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
const a610 = {en:"2975cc PRV V6 turbo",di:"3.0L",cy:"6",hp:"201 kW (270 hp)",tq:"350 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.9 sec",ts:"~270 km/h",ft:"Petrol",wt:"1,100 kg",se:"2",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
for (const yr of ["1985","1986","1987","1988","1989","1990"]) {
  specs[`${AL}|GTA|${yr}|V6 GT`] = {...gta_vgt, pr:"~$32,000"};
  specs[`${AL}|GTA|${yr}|V6 Turbo`] = {...gta_turbo, pr:"~$42,000"};
}
for (const yr of ["1991","1992","1993","1994","1995"]) {
  specs[`${AL}|GTA|${yr}|V6 Turbo`] = {...gta_turbo, pr:"~$45,000"};
  specs[`${AL}|GTA|${yr}|A610`] = {...a610, pr:"~$58,000"};
}

// --- A110 modern (2017–2026) ---
const a110_17 = {en:"1798cc turbocharged I4",di:"1.8L",cy:"4",hp:"185 kW (248 hp)",tq:"320 Nm",tx:"7-speed DCT",dr:"RWD",z1:"~4.5 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,098 kg",se:"2",ca:"N/A",fc:"7.5L",fh:"5.5L",fx:"9.5L"};
const a110_s = {en:"1798cc turbocharged I4",di:"1.8L",cy:"4",hp:"220 kW (295 hp)",tq:"320 Nm",tx:"7-speed DCT",dr:"RWD",z1:"~4.2 sec",ts:"~260 km/h",ft:"Petrol",wt:"1,113 kg",se:"2",ca:"N/A",fc:"7.5L",fh:"5.5L",fx:"9.5L"};
const a110_r = {en:"1798cc turbocharged I4 track",di:"1.8L",cy:"4",hp:"221 kW (296 hp)",tq:"320 Nm",tx:"7-speed DCT",dr:"RWD",z1:"~4.2 sec",ts:"~260 km/h",ft:"Petrol",wt:"1,082 kg",se:"2",ca:"N/A",fc:"7.5L",fh:"5.5L",fx:"9.5L"};
for (const yr of ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${AL}|A110|${yr}|Pure`] = {...a110_17, pr:"~$110,000"};
  specs[`${AL}|A110|${yr}|Légende`] = {...a110_17, pr:"~$118,000"};
  specs[`${AL}|A110|${yr}|GT`] = {...a110_17, pr:"~$122,000"};
  specs[`${AL}|A110|${yr}|S`] = {...a110_s, pr:"~$132,000"};
  specs[`${AL}|A110|${yr}|R`] = {...a110_r, pr:"~$145,000"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement98.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement98.json written — ${count} entries`);
