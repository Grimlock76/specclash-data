'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Opel
// ============================================================
const OP = 'Opel';

// --- Kadett (1962–1991) ---
const kad_a = {en:"993cc OHV I4",di:"1.0L",cy:"4",hp:"29 kW (40 hp)",tq:"67 Nm",tx:"4-speed manual",dr:"RWD",z1:"~22 sec",ts:"~120 km/h",ft:"Petrol",wt:"680 kg",se:"4",fc:"7.5L",fh:"6.0L",fx:"9.5L"};
for (const yr of ["1962","1963","1964","1965"]) specs[`${OP}|Kadett|${yr}|Standard`] = {...kad_a, pr:`~$1,200`};

const kad_b_1100 = {en:"1078cc OHV I4",di:"1.1L",cy:"4",hp:"37 kW (50 hp)",tq:"82 Nm",tx:"4-speed manual",dr:"RWD",z1:"~18 sec",ts:"~130 km/h",ft:"Petrol",wt:"750 kg",se:"4",fc:"7.8L",fh:"6.2L",fx:"9.8L"};
const kad_b_1900 = {en:"1897cc OHV I4",di:"1.9L",cy:"4",hp:"66 kW (90 hp)",tq:"148 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13 sec",ts:"~165 km/h",ft:"Petrol",wt:"900 kg",se:"4",fc:"9.5L",fh:"7.5L",fx:"12.0L"};
for (const yr of ["1966","1967","1968","1969","1970","1971","1972","1973"]) {
  specs[`${OP}|Kadett|${yr}|1.1 Saloon`] = {...kad_b_1100, pr:`~$1,400`};
  specs[`${OP}|Kadett|${yr}|1.9 SR`] = {...kad_b_1900, pr:`~$2,000`};
}

const kad_c_1200 = {en:"1196cc OHV I4",di:"1.2L",cy:"4",hp:"40 kW (55 hp)",tq:"90 Nm",tx:"4-speed manual",dr:"RWD",z1:"~17 sec",ts:"~140 km/h",ft:"Petrol",wt:"810 kg",se:"4",fc:"8.0L",fh:"6.3L",fx:"10.0L"};
const kad_c_gt_e = {en:"1897cc OHV I4",di:"1.9L",cy:"4",hp:"81 kW (110 hp)",tq:"160 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11 sec",ts:"~185 km/h",ft:"Petrol",wt:"920 kg",se:"4",fc:"10.0L",fh:"8.0L",fx:"13.0L"};
for (const yr of ["1973","1974","1975","1976","1977","1978","1979"]) {
  specs[`${OP}|Kadett|${yr}|1.2 Saloon`] = {...kad_c_1200, pr:`~$2,500`};
  specs[`${OP}|Kadett|${yr}|GT/E`] = {...kad_c_gt_e, pr:`~$4,200`};
}

const kad_d_1300 = {en:"1297cc OHV I4",di:"1.3L",cy:"4",hp:"44 kW (60 hp)",tq:"98 Nm",tx:"4-speed manual",dr:"RWD",z1:"~16 sec",ts:"~148 km/h",ft:"Petrol",wt:"840 kg",se:"4",fc:"8.2L",fh:"6.5L",fx:"10.5L"};
const kad_d_gsi = {en:"1979cc CIH I4",di:"2.0L",cy:"4",hp:"81 kW (110 hp)",tq:"165 Nm",tx:"5-speed manual",dr:"RWD",z1:"~10 sec",ts:"~190 km/h",ft:"Petrol",wt:"960 kg",se:"4",fc:"10.5L",fh:"8.2L",fx:"13.5L"};
for (const yr of ["1979","1980","1981","1982","1983","1984"]) {
  specs[`${OP}|Kadett|${yr}|1.3 Saloon`] = {...kad_d_1300, pr:`~$4,500`};
  specs[`${OP}|Kadett|${yr}|2.0 GTE`] = {...kad_d_gsi, pr:`~$7,000`};
}

const kad_e_1400 = {en:"1389cc OHC I4",di:"1.4L",cy:"4",hp:"55 kW (75 hp)",tq:"113 Nm",tx:"5-speed manual",dr:"FWD",z1:"~14 sec",ts:"~165 km/h",ft:"Petrol",wt:"880 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.8L"};
const kad_e_gsi16 = {en:"1998cc DOHC I4 16v",di:"2.0L",cy:"4",hp:"110 kW (150 hp)",tq:"196 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.5 sec",ts:"~215 km/h",ft:"Petrol",wt:"1010 kg",se:"4",fc:"9.8L",fh:"7.5L",fx:"12.5L"};
for (const yr of ["1984","1985","1986","1987","1988","1989","1990","1991"]) {
  specs[`${OP}|Kadett|${yr}|1.4 GL`] = {...kad_e_1400, pr:`~$8,500`};
  specs[`${OP}|Kadett|${yr}|GSi 16V`] = {...kad_e_gsi16, pr:`~$16,000`};
}

// --- Manta (1970–1988) ---
const manta_a = {en:"1897cc CIH I4",di:"1.9L",cy:"4",hp:"59 kW (80 hp)",tq:"143 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13 sec",ts:"~170 km/h",ft:"Petrol",wt:"935 kg",se:"4",fc:"9.8L",fh:"7.8L",fx:"12.5L"};
const manta_a_gts = {en:"1897cc CIH I4",di:"1.9L",cy:"4",hp:"74 kW (100 hp)",tq:"160 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11 sec",ts:"~185 km/h",ft:"Petrol",wt:"960 kg",se:"4",fc:"10.5L",fh:"8.2L",fx:"13.5L"};
for (const yr of ["1970","1971","1972","1973","1974","1975"]) {
  specs[`${OP}|Manta|${yr}|1.9 Coupe`] = {...manta_a, pr:`~$3,200`};
  specs[`${OP}|Manta|${yr}|GTS`] = {...manta_a_gts, pr:`~$4,500`};
}

const manta_b_20 = {en:"1979cc CIH I4",di:"2.0L",cy:"4",hp:"74 kW (100 hp)",tq:"160 Nm",tx:"5-speed manual",dr:"RWD",z1:"~11.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1010 kg",se:"4",fc:"10.0L",fh:"7.8L",fx:"12.8L"};
const manta_b_gt_e = {en:"1979cc CIH I4",di:"2.0L",cy:"4",hp:"92 kW (125 hp)",tq:"176 Nm",tx:"5-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1040 kg",se:"4",fc:"11.0L",fh:"8.5L",fx:"14.0L"};
const manta_b_400 = {en:"2.4L turbocharged I4",di:"2.4L",cy:"4",hp:"206 kW (280 hp)",tq:"380 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.5 sec",ts:"~230 km/h",ft:"Petrol",wt:"1050 kg",se:"2",fc:"14.0L",fh:"10.0L",fx:"18.0L"};
for (const yr of ["1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988"]) {
  specs[`${OP}|Manta|${yr}|2.0 Coupe`] = {...manta_b_20, pr:`~$6,500`};
  specs[`${OP}|Manta|${yr}|GT/E`] = {...manta_b_gt_e, pr:`~$9,000`};
}
for (const yr of ["1981","1982","1983","1984","1985","1986","1987","1988"]) {
  specs[`${OP}|Manta|${yr}|400`] = {...manta_b_400, pr:`~$25,000`};
}

// --- GT (1968–1973) ---
const gt_19 = {en:"1897cc CIH I4",di:"1.9L",cy:"4",hp:"66 kW (90 hp)",tq:"148 Nm",tx:"4-speed manual",dr:"RWD",z1:"~12 sec",ts:"~185 km/h",ft:"Petrol",wt:"940 kg",se:"2",fc:"10.0L",fh:"7.8L",fx:"12.5L"};
for (const yr of ["1968","1969","1970","1971","1972","1973"]) specs[`${OP}|GT|${yr}|1.9`] = {...gt_19, pr:`~$3,500`};

// --- Ascona (1970–1988) ---
const ascona_a = {en:"1196cc OHV I4",di:"1.2L",cy:"4",hp:"40 kW (55 hp)",tq:"88 Nm",tx:"4-speed manual",dr:"RWD",z1:"~17 sec",ts:"~140 km/h",ft:"Petrol",wt:"880 kg",se:"4",fc:"8.5L",fh:"6.5L",fx:"11.0L"};
for (const yr of ["1970","1971","1972","1973","1974","1975"]) specs[`${OP}|Ascona|${yr}|1.2`] = {...ascona_a, pr:`~$2,800`};

const ascona_c = {en:"1598cc OHV I4",di:"1.6L",cy:"4",hp:"55 kW (75 hp)",tq:"122 Nm",tx:"5-speed manual",dr:"RWD",z1:"~14 sec",ts:"~165 km/h",ft:"Petrol",wt:"960 kg",se:"4",fc:"9.0L",fh:"7.0L",fx:"11.5L"};
const ascona_c_i2000 = {en:"1979cc CIH I4",di:"2.0L",cy:"4",hp:"85 kW (115 hp)",tq:"171 Nm",tx:"5-speed manual",dr:"RWD",z1:"~10.5 sec",ts:"~193 km/h",ft:"Petrol",wt:"1020 kg",se:"4",fc:"10.5L",fh:"8.0L",fx:"13.0L"};
for (const yr of ["1981","1982","1983","1984","1985","1986","1987","1988"]) {
  specs[`${OP}|Ascona|${yr}|1.6`] = {...ascona_c, pr:`~$7,500`};
  specs[`${OP}|Ascona|${yr}|i2000`] = {...ascona_c_i2000, pr:`~$11,000`};
}

// --- Rekord (1954–1986) ---
const rek_e = {en:"1979cc CIH I4",di:"2.0L",cy:"4",hp:"74 kW (100 hp)",tq:"160 Nm",tx:"5-speed manual",dr:"RWD",z1:"~12 sec",ts:"~180 km/h",ft:"Petrol",wt:"1120 kg",se:"5",fc:"10.5L",fh:"8.0L",fx:"13.5L"};
for (const yr of ["1978","1979","1980","1981","1982","1983","1984","1985","1986"]) {
  specs[`${OP}|Rekord|${yr}|2.0 E`] = {...rek_e, pr:`~$8,000`};
  specs[`${OP}|Rekord|${yr}|2.0 CD`] = {...rek_e, hp:"81 kW (110 hp)", pr:`~$9,500`};
}

// --- Senator (1978–1993) ---
const sen_a_30 = {en:"2968cc CIH I6",di:"3.0L",cy:"6",hp:"110 kW (150 hp)",tq:"235 Nm",tx:"5-speed manual",dr:"RWD",z1:"~10 sec",ts:"~200 km/h",ft:"Petrol",wt:"1380 kg",se:"5",fc:"13.0L",fh:"10.0L",fx:"16.5L"};
for (const yr of ["1978","1979","1980","1981","1982","1983","1984","1985","1986","1987"]) {
  specs[`${OP}|Senator|${yr}|3.0 E`] = {...sen_a_30, pr:`~$18,000`};
}
const sen_b_30 = {en:"2969cc DOHC I6",di:"3.0L",cy:"6",hp:"150 kW (204 hp)",tq:"270 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.5 sec",ts:"~235 km/h",ft:"Petrol",wt:"1420 kg",se:"5",fc:"12.5L",fh:"9.5L",fx:"16.0L"};
for (const yr of ["1987","1988","1989","1990","1991","1992","1993"]) {
  specs[`${OP}|Senator|${yr}|3.0i 24V`] = {...sen_b_30, pr:`~$35,000`};
}

// --- Omega (1986–2003) ---
const om_a_20 = {en:"1998cc DOHC I4",di:"2.0L",cy:"4",hp:"85 kW (116 hp)",tq:"170 Nm",tx:"5-speed manual",dr:"RWD",z1:"~11 sec",ts:"~192 km/h",ft:"Petrol",wt:"1175 kg",se:"5",fc:"10.5L",fh:"8.0L",fx:"13.5L"};
for (const yr of ["1986","1987","1988","1989","1990","1991","1992","1993","1994"]) {
  specs[`${OP}|Omega|${yr}|2.0`] = {...om_a_20, pr:`~$18,000`};
}
const om_b_25 = {en:"2498cc DOHC I6",di:"2.5L",cy:"6",hp:"125 kW (170 hp)",tq:"230 Nm",tx:"5-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~225 km/h",ft:"Petrol",wt:"1430 kg",se:"5",fc:"12.0L",fh:"9.0L",fx:"15.5L"};
const om_b_mv6 = {en:"2962cc DOHC V6",di:"3.0L",cy:"6",hp:"143 kW (195 hp)",tq:"270 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.0 sec",ts:"~240 km/h",ft:"Petrol",wt:"1490 kg",se:"5",fc:"13.0L",fh:"9.8L",fx:"16.5L"};
const om_b_500 = {en:"4988cc DOHC V8",di:"5.0L",cy:"8",hp:"265 kW (360 hp)",tq:"500 Nm",tx:"6-speed manual",dr:"RWD",z1:"~6.0 sec",ts:"~270 km/h",ft:"Petrol",wt:"1750 kg",se:"5",fc:"16.0L",fh:"11.0L",fx:"21.0L"};
for (const yr of ["1994","1995","1996","1997","1998","1999","2000","2001","2002","2003"]) {
  specs[`${OP}|Omega|${yr}|2.5 V6`] = {...om_b_25, pr:`~$35,000`};
  specs[`${OP}|Omega|${yr}|3.0 V6`] = {...om_b_mv6, pr:`~$45,000`};
  specs[`${OP}|Omega|${yr}|500`] = {...om_b_500, pr:`~$75,000`};
}

// --- Astra (1991–present) ---
const astra_f_14 = {en:"1389cc OHC I4",di:"1.4L",cy:"4",hp:"55 kW (75 hp)",tq:"113 Nm",tx:"5-speed manual",dr:"FWD",z1:"~14 sec",ts:"~165 km/h",ft:"Petrol",wt:"970 kg",se:"5",fc:"7.8L",fh:"6.0L",fx:"10.0L"};
const astra_f_gsi = {en:"1998cc DOHC I4 16v",di:"2.0L",cy:"4",hp:"110 kW (150 hp)",tq:"196 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.5 sec",ts:"~215 km/h",ft:"Petrol",wt:"1075 kg",se:"5",fc:"10.0L",fh:"7.5L",fx:"12.5L"};
for (const yr of ["1991","1992","1993","1994","1995","1996","1997","1998"]) {
  specs[`${OP}|Astra|${yr}|1.4`] = {...astra_f_14, pr:`~$12,000`};
  specs[`${OP}|Astra|${yr}|GSi 16V`] = {...astra_f_gsi, pr:`~$22,000`};
}
const astra_g_16 = {en:"1598cc OHC I4",di:"1.6L",cy:"4",hp:"73 kW (100 hp)",tq:"150 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13 sec",ts:"~180 km/h",ft:"Petrol",wt:"1175 kg",se:"5",fc:"8.2L",fh:"6.2L",fx:"10.5L"};
const astra_g_opc = {en:"2.0L turbocharged I4",di:"2.0L",cy:"4",hp:"147 kW (200 hp)",tq:"250 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.2 sec",ts:"~237 km/h",ft:"Petrol",wt:"1290 kg",se:"5",fc:"10.5L",fh:"7.8L",fx:"13.5L"};
for (const yr of ["1998","1999","2000","2001","2002","2003","2004"]) {
  specs[`${OP}|Astra|${yr}|1.6`] = {...astra_g_16, pr:`~$18,000`};
  specs[`${OP}|Astra|${yr}|OPC`] = {...astra_g_opc, pr:`~$32,000`};
}
const astra_h_18 = {en:"1796cc I4",di:"1.8L",cy:"4",hp:"103 kW (140 hp)",tq:"175 Nm",tx:"6-speed manual",dr:"FWD",z1:"~10 sec",ts:"~208 km/h",ft:"Petrol",wt:"1275 kg",se:"5",fc:"8.5L",fh:"6.3L",fx:"11.0L"};
const astra_h_opc = {en:"2.0L turbocharged I4",di:"2.0L",cy:"4",hp:"177 kW (241 hp)",tq:"320 Nm",tx:"6-speed manual",dr:"FWD",z1:"~6.8 sec",ts:"~250 km/h",ft:"Petrol",wt:"1365 kg",se:"5",fc:"10.8L",fh:"7.8L",fx:"14.0L"};
for (const yr of ["2004","2005","2006","2007","2008","2009"]) {
  specs[`${OP}|Astra|${yr}|1.8`] = {...astra_h_18, pr:`~$25,000`};
  specs[`${OP}|Astra|${yr}|OPC`] = {...astra_h_opc, pr:`~$42,000`};
}
const astra_j_14t = {en:"1398cc turbocharged I4",di:"1.4L",cy:"4",hp:"103 kW (140 hp)",tq:"200 Nm",tx:"6-speed manual",dr:"FWD",z1:"~10.5 sec",ts:"~205 km/h",ft:"Petrol",wt:"1300 kg",se:"5",fc:"7.2L",fh:"5.2L",fx:"9.5L"};
const astra_j_opc = {en:"2.0L turbocharged I4",di:"2.0L",cy:"4",hp:"206 kW (280 hp)",tq:"400 Nm",tx:"6-speed manual",dr:"FWD",z1:"~6.0 sec",ts:"~265 km/h",ft:"Petrol",wt:"1415 kg",se:"5",fc:"10.2L",fh:"7.2L",fx:"13.5L"};
for (const yr of ["2009","2010","2011","2012","2013","2014","2015"]) {
  specs[`${OP}|Astra|${yr}|1.4 Turbo`] = {...astra_j_14t, pr:`~$28,000`};
  specs[`${OP}|Astra|${yr}|OPC`] = {...astra_j_opc, pr:`~$48,000`};
}
const astra_k_14 = {en:"1399cc turbocharged I4",di:"1.4L",cy:"4",hp:"110 kW (150 hp)",tq:"240 Nm",tx:"6-speed manual",dr:"FWD",z1:"~9.8 sec",ts:"~210 km/h",ft:"Petrol",wt:"1270 kg",se:"5",fc:"6.8L",fh:"4.8L",fx:"9.0L"};
for (const yr of ["2015","2016","2017","2018","2019"]) {
  specs[`${OP}|Astra|${yr}|1.4 Turbo`] = {...astra_k_14, pr:`~$30,000`};
}

// --- Corsa (1982–present) ---
const corsa_a_12 = {en:"1196cc OHV I4",di:"1.2L",cy:"4",hp:"40 kW (55 hp)",tq:"88 Nm",tx:"4-speed manual",dr:"FWD",z1:"~17 sec",ts:"~145 km/h",ft:"Petrol",wt:"750 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.5L"};
const corsa_a_gsi = {en:"1598cc OHC I4",di:"1.6L",cy:"4",hp:"88 kW (120 hp)",tq:"150 Nm",tx:"5-speed manual",dr:"FWD",z1:"~9.0 sec",ts:"~200 km/h",ft:"Petrol",wt:"875 kg",se:"4",fc:"9.0L",fh:"6.8L",fx:"11.5L"};
for (const yr of ["1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993"]) {
  specs[`${OP}|Corsa|${yr}|1.2`] = {...corsa_a_12, pr:`~$7,500`};
  specs[`${OP}|Corsa|${yr}|GSi`] = {...corsa_a_gsi, pr:`~$14,000`};
}
const corsa_b_14 = {en:"1389cc OHC I4",di:"1.4L",cy:"4",hp:"55 kW (75 hp)",tq:"113 Nm",tx:"5-speed manual",dr:"FWD",z1:"~14 sec",ts:"~168 km/h",ft:"Petrol",wt:"885 kg",se:"4",fc:"7.8L",fh:"6.0L",fx:"10.0L"};
const corsa_b_gsi_16 = {en:"1598cc DOHC I4 16v",di:"1.6L",cy:"4",hp:"100 kW (136 hp)",tq:"150 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.5 sec",ts:"~208 km/h",ft:"Petrol",wt:"1005 kg",se:"4",fc:"9.2L",fh:"7.0L",fx:"11.8L"};
for (const yr of ["1993","1994","1995","1996","1997","1998","1999","2000"]) {
  specs[`${OP}|Corsa|${yr}|1.4`] = {...corsa_b_14, pr:`~$13,000`};
  specs[`${OP}|Corsa|${yr}|GSi 16V`] = {...corsa_b_gsi_16, pr:`~$19,000`};
}
const corsa_c_12 = {en:"1199cc I4",di:"1.2L",cy:"4",hp:"55 kW (75 hp)",tq:"110 Nm",tx:"5-speed manual",dr:"FWD",z1:"~14.5 sec",ts:"~168 km/h",ft:"Petrol",wt:"1010 kg",se:"4",fc:"7.5L",fh:"5.5L",fx:"9.8L"};
for (const yr of ["2000","2001","2002","2003","2004","2005","2006"]) specs[`${OP}|Corsa|${yr}|1.2`] = {...corsa_c_12, pr:`~$15,000`};
const corsa_d_12t = {en:"1229cc turbocharged I4",di:"1.2L",cy:"4",hp:"63 kW (85 hp)",tq:"150 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13 sec",ts:"~170 km/h",ft:"Petrol",wt:"1090 kg",se:"4",fc:"6.5L",fh:"4.8L",fx:"8.5L"};
const corsa_d_opc = {en:"1598cc turbocharged I4",di:"1.6L",cy:"4",hp:"141 kW (192 hp)",tq:"230 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.2 sec",ts:"~230 km/h",ft:"Petrol",wt:"1165 kg",se:"4",fc:"9.2L",fh:"6.8L",fx:"12.0L"};
for (const yr of ["2006","2007","2008","2009","2010","2011","2012","2013","2014"]) {
  specs[`${OP}|Corsa|${yr}|1.2`] = {...corsa_d_12t, pr:`~$17,000`};
  specs[`${OP}|Corsa|${yr}|OPC`] = {...corsa_d_opc, pr:`~$30,000`};
}
const corsa_e_10t = {en:"1000cc turbocharged I3",di:"1.0L",cy:"3",hp:"66 kW (90 hp)",tq:"170 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"1060 kg",se:"4",fc:"5.5L",fh:"4.0L",fx:"7.5L"};
for (const yr of ["2014","2015","2016","2017","2018","2019"]) specs[`${OP}|Corsa|${yr}|1.0 Turbo`] = {...corsa_e_10t, pr:`~$22,000`};
const corsa_f_12t = {en:"1199cc turbocharged I3",di:"1.2L",cy:"3",hp:"74 kW (100 hp)",tq:"205 Nm",tx:"6-speed manual",dr:"FWD",z1:"~12.5 sec",ts:"~183 km/h",ft:"Petrol",wt:"1163 kg",se:"4",fc:"5.8L",fh:"4.2L",fx:"7.8L"};
const corsa_f_ev = {en:"Electric motor",di:"50 kWh",cy:"Electric",hp:"100 kW (136 hp)",tq:"260 Nm",tx:"Single-speed auto",dr:"FWD",z1:"~8.1 sec",ts:"~150 km/h",ft:"Electric",wt:"1530 kg",se:"4",fc:"330 km (WLTP)",fh:"—",fx:"—"};
for (const yr of ["2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${OP}|Corsa|${yr}|1.2 Turbo`] = {...corsa_f_12t, pr:`~$26,000`};
  specs[`${OP}|Corsa|${yr}|Electric`] = {...corsa_f_ev, pr:`~$38,000`};
}

// --- Vectra (1988–2008) ---
const vec_a_20 = {en:"1998cc OHC I4",di:"2.0L",cy:"4",hp:"85 kW (116 hp)",tq:"170 Nm",tx:"5-speed manual",dr:"FWD",z1:"~11 sec",ts:"~192 km/h",ft:"Petrol",wt:"1175 kg",se:"5",fc:"9.5L",fh:"7.2L",fx:"12.5L"};
for (const yr of ["1988","1989","1990","1991","1992","1993","1994","1995"]) specs[`${OP}|Vectra|${yr}|2.0`] = {...vec_a_20, pr:`~$18,000`};
const vec_b_25v6 = {en:"2498cc DOHC V6",di:"2.5L",cy:"6",hp:"125 kW (170 hp)",tq:"227 Nm",tx:"5-speed manual",dr:"FWD",z1:"~9.0 sec",ts:"~228 km/h",ft:"Petrol",wt:"1375 kg",se:"5",fc:"11.5L",fh:"8.5L",fx:"15.0L"};
for (const yr of ["1995","1996","1997","1998","1999","2000","2001","2002"]) specs[`${OP}|Vectra|${yr}|2.5 V6`] = {...vec_b_25v6, pr:`~$32,000`};
const vec_c_18t = {en:"1796cc turbocharged I4",di:"1.8L",cy:"4",hp:"103 kW (140 hp)",tq:"210 Nm",tx:"6-speed manual",dr:"FWD",z1:"~10.2 sec",ts:"~210 km/h",ft:"Petrol",wt:"1395 kg",se:"5",fc:"9.0L",fh:"6.8L",fx:"12.0L"};
const vec_c_opc = {en:"2.8L turbocharged V6",di:"2.8L",cy:"6",hp:"206 kW (280 hp)",tq:"350 Nm",tx:"6-speed manual",dr:"FWD",z1:"~6.3 sec",ts:"~250 km/h",ft:"Petrol",wt:"1545 kg",se:"5",fc:"11.5L",fh:"8.2L",fx:"15.0L"};
for (const yr of ["2002","2003","2004","2005","2006","2007","2008"]) {
  specs[`${OP}|Vectra|${yr}|1.8`] = {...vec_c_18t, pr:`~$35,000`};
  specs[`${OP}|Vectra|${yr}|OPC`] = {...vec_c_opc, pr:`~$55,000`};
}

// --- Insignia (2008–present) ---
const ins_a_20t = {en:"1998cc turbocharged I4",di:"2.0L",cy:"4",hp:"162 kW (220 hp)",tq:"350 Nm",tx:"6-speed manual",dr:"FWD",z1:"~8.0 sec",ts:"~240 km/h",ft:"Petrol",wt:"1605 kg",se:"5",fc:"9.2L",fh:"6.5L",fx:"12.5L"};
const ins_a_opc = {en:"2.8L turbocharged V6",di:"2.8L",cy:"6",hp:"239 kW (325 hp)",tq:"435 Nm",tx:"6-speed auto",dr:"AWD",z1:"~5.9 sec",ts:"~250 km/h",ft:"Petrol",wt:"1895 kg",se:"5",fc:"12.5L",fh:"8.5L",fx:"16.5L"};
for (const yr of ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"]) {
  specs[`${OP}|Insignia|${yr}|2.0 Turbo`] = {...ins_a_20t, pr:`~$42,000`};
  specs[`${OP}|Insignia|${yr}|OPC`] = {...ins_a_opc, pr:`~$68,000`};
}
const ins_b_20t = {en:"1998cc turbocharged I4",di:"2.0L",cy:"4",hp:"147 kW (200 hp)",tq:"300 Nm",tx:"8-speed auto",dr:"FWD",z1:"~8.3 sec",ts:"~237 km/h",ft:"Petrol",wt:"1535 kg",se:"5",fc:"8.5L",fh:"6.0L",fx:"11.5L"};
for (const yr of ["2017","2018","2019","2020","2021","2022","2023"]) {
  specs[`${OP}|Insignia|${yr}|2.0 Turbo`] = {...ins_b_20t, pr:`~$48,000`};
}

// --- Mokka (2012–present) ---
const mok_a_14 = {en:"1398cc turbocharged I4",di:"1.4L",cy:"4",hp:"103 kW (140 hp)",tq:"200 Nm",tx:"6-speed manual",dr:"FWD",z1:"~10.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1365 kg",se:"5",fc:"7.8L",fh:"5.5L",fx:"10.5L"};
for (const yr of ["2012","2013","2014","2015","2016","2017","2018","2019"]) {
  specs[`${OP}|Mokka|${yr}|1.4 Turbo`] = {...mok_a_14, pr:`~$25,000`};
}
const mok_b_12t = {en:"1199cc turbocharged I3",di:"1.2L",cy:"3",hp:"96 kW (130 hp)",tq:"230 Nm",tx:"6-speed manual",dr:"FWD",z1:"~9.5 sec",ts:"~197 km/h",ft:"Petrol",wt:"1350 kg",se:"5",fc:"6.2L",fh:"4.5L",fx:"8.3L"};
const mok_b_ev = {en:"Electric motor",di:"50 kWh",cy:"Electric",hp:"100 kW (136 hp)",tq:"260 Nm",tx:"Single-speed auto",dr:"FWD",z1:"~9.0 sec",ts:"~150 km/h",ft:"Electric",wt:"1535 kg",se:"5",fc:"322 km (WLTP)",fh:"—",fx:"—"};
for (const yr of ["2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${OP}|Mokka|${yr}|1.2 Turbo`] = {...mok_b_12t, pr:`~$32,000`};
  specs[`${OP}|Mokka|${yr}|Electric`] = {...mok_b_ev, pr:`~$46,000`};
}

// ============================================================
// SEAT
// ============================================================
const SE = 'SEAT';

// --- 600 (1957–1973) ---
const s600 = {en:"633cc OHV I4",di:"0.6L",cy:"4",hp:"17 kW (23 hp)",tq:"42 Nm",tx:"4-speed manual",dr:"RWD",z1:"~35 sec",ts:"~105 km/h",ft:"Petrol",wt:"505 kg",se:"4",fc:"7.0L",fh:"5.5L",fx:"9.0L"};
for (const yr of ["1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973"]) {
  specs[`${SE}|600|${yr}|Standard`] = {...s600, pr:`~$900`};
}

// --- 124 (1968–1980) ---
const s124 = {en:"1438cc OHC I4",di:"1.4L",cy:"4",hp:"53 kW (72 hp)",tq:"106 Nm",tx:"4-speed manual",dr:"RWD",z1:"~16 sec",ts:"~155 km/h",ft:"Petrol",wt:"855 kg",se:"4",fc:"9.0L",fh:"7.0L",fx:"11.5L"};
for (const yr of ["1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${SE}|124|${yr}|Saloon`] = {...s124, pr:`~$2,500`};
  specs[`${SE}|124|${yr}|Sport Coupe`] = {...s124, hp:"57 kW (78 hp)", wt:"870 kg", pr:`~$3,200`};
}

// --- 127 (1972–1983) ---
const s127 = {en:"903cc OHV I4",di:"0.9L",cy:"4",hp:"26 kW (36 hp)",tq:"60 Nm",tx:"4-speed manual",dr:"FWD",z1:"~22 sec",ts:"~125 km/h",ft:"Petrol",wt:"670 kg",se:"4",fc:"7.2L",fh:"5.5L",fx:"9.5L"};
for (const yr of ["1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983"]) {
  specs[`${SE}|127|${yr}|Standard`] = {...s127, pr:`~$3,000`};
}

// --- Ibiza (1984–present) ---
const ibiza_1_12 = {en:"1193cc OHV I4",di:"1.2L",cy:"4",hp:"44 kW (60 hp)",tq:"86 Nm",tx:"4-speed manual",dr:"FWD",z1:"~17 sec",ts:"~150 km/h",ft:"Petrol",wt:"780 kg",se:"4",fc:"8.0L",fh:"6.0L",fx:"10.5L"};
const ibiza_1_13 = {en:"1272cc OHC I4",di:"1.3L",cy:"4",hp:"57 kW (77 hp)",tq:"103 Nm",tx:"5-speed manual",dr:"FWD",z1:"~14 sec",ts:"~165 km/h",ft:"Petrol",wt:"800 kg",se:"4",fc:"8.5L",fh:"6.5L",fx:"11.0L"};
for (const yr of ["1984","1985","1986","1987","1988","1989","1990","1991","1992","1993"]) {
  specs[`${SE}|Ibiza|${yr}|1.2`] = {...ibiza_1_12, pr:`~$7,000`};
  specs[`${SE}|Ibiza|${yr}|1.3`] = {...ibiza_1_13, pr:`~$8,500`};
}
const ibiza_2_10 = {en:"999cc OHV I4",di:"1.0L",cy:"4",hp:"37 kW (50 hp)",tq:"78 Nm",tx:"5-speed manual",dr:"FWD",z1:"~18 sec",ts:"~148 km/h",ft:"Petrol",wt:"840 kg",se:"4",fc:"7.8L",fh:"5.8L",fx:"10.2L"};
const ibiza_2_gti_16 = {en:"1984cc DOHC I4 16v",di:"2.0L",cy:"4",hp:"110 kW (150 hp)",tq:"181 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1050 kg",se:"4",fc:"10.0L",fh:"7.5L",fx:"13.0L"};
for (const yr of ["1993","1994","1995","1996","1997","1998","1999","2000","2001","2002"]) {
  specs[`${SE}|Ibiza|${yr}|1.0`] = {...ibiza_2_10, pr:`~$11,000`};
  specs[`${SE}|Ibiza|${yr}|GTi 16V`] = {...ibiza_2_gti_16, pr:`~$19,000`};
}
const ibiza_3_12 = {en:"1198cc I4",di:"1.2L",cy:"4",hp:"47 kW (64 hp)",tq:"106 Nm",tx:"5-speed manual",dr:"FWD",z1:"~15 sec",ts:"~162 km/h",ft:"Petrol",wt:"1075 kg",se:"4",fc:"7.0L",fh:"5.2L",fx:"9.2L"};
const ibiza_3_cupra = {en:"1798cc turbocharged I4",di:"1.8L",cy:"4",hp:"132 kW (180 hp)",tq:"235 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.8 sec",ts:"~225 km/h",ft:"Petrol",wt:"1270 kg",se:"4",fc:"9.5L",fh:"7.0L",fx:"12.5L"};
for (const yr of ["2002","2003","2004","2005","2006","2007","2008"]) {
  specs[`${SE}|Ibiza|${yr}|1.2`] = {...ibiza_3_12, pr:`~$14,000`};
  specs[`${SE}|Ibiza|${yr}|Cupra`] = {...ibiza_3_cupra, pr:`~$26,000`};
}
const ibiza_4_12t = {en:"1197cc turbocharged I4",di:"1.2L",cy:"4",hp:"66 kW (90 hp)",tq:"160 Nm",tx:"5-speed manual",dr:"FWD",z1:"~12 sec",ts:"~180 km/h",ft:"Petrol",wt:"1100 kg",se:"4",fc:"6.2L",fh:"4.5L",fx:"8.0L"};
const ibiza_4_cupra = {en:"1390cc turbocharged I4",di:"1.4L",cy:"4",hp:"132 kW (180 hp)",tq:"250 Nm",tx:"6-speed DSG",dr:"FWD",z1:"~7.0 sec",ts:"~229 km/h",ft:"Petrol",wt:"1225 kg",se:"4",fc:"7.5L",fh:"5.5L",fx:"9.8L"};
for (const yr of ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"]) {
  specs[`${SE}|Ibiza|${yr}|1.2 TSI`] = {...ibiza_4_12t, pr:`~$17,000`};
  specs[`${SE}|Ibiza|${yr}|Cupra`] = {...ibiza_4_cupra, pr:`~$30,000`};
}
const ibiza_5_10t = {en:"999cc turbocharged I3",di:"1.0L",cy:"3",hp:"70 kW (95 hp)",tq:"175 Nm",tx:"5-speed manual",dr:"FWD",z1:"~11.5 sec",ts:"~183 km/h",ft:"Petrol",wt:"1085 kg",se:"4",fc:"5.3L",fh:"3.8L",fx:"7.0L"};
for (const yr of ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SE}|Ibiza|${yr}|1.0 TSI`] = {...ibiza_5_10t, pr:`~$22,000`};
}

// --- Leon (1999–present) ---
const leon_1_18t = {en:"1781cc turbocharged I4",di:"1.8L",cy:"4",hp:"110 kW (150 hp)",tq:"210 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.8 sec",ts:"~215 km/h",ft:"Petrol",wt:"1200 kg",se:"5",fc:"9.0L",fh:"6.5L",fx:"12.0L"};
const leon_1_cupra = {en:"1781cc turbocharged I4",di:"1.8L",cy:"4",hp:"132 kW (180 hp)",tq:"235 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.6 sec",ts:"~228 km/h",ft:"Petrol",wt:"1225 kg",se:"5",fc:"9.5L",fh:"7.0L",fx:"12.5L"};
for (const yr of ["1999","2000","2001","2002","2003","2004","2005","2006"]) {
  specs[`${SE}|Leon|${yr}|1.8 20V`] = {...leon_1_18t, pr:`~$22,000`};
  specs[`${SE}|Leon|${yr}|Cupra`] = {...leon_1_cupra, pr:`~$30,000`};
}
const leon_2_20t = {en:"1984cc turbocharged I4",di:"2.0L",cy:"4",hp:"147 kW (200 hp)",tq:"280 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.2 sec",ts:"~235 km/h",ft:"Petrol",wt:"1350 kg",se:"5",fc:"9.5L",fh:"7.0L",fx:"12.5L"};
const leon_2_cupra_r = {en:"1984cc turbocharged I4",di:"2.0L",cy:"4",hp:"177 kW (240 hp)",tq:"300 Nm",tx:"6-speed manual",dr:"FWD",z1:"~6.8 sec",ts:"~250 km/h",ft:"Petrol",wt:"1370 kg",se:"5",fc:"10.2L",fh:"7.5L",fx:"13.5L"};
for (const yr of ["2005","2006","2007","2008","2009","2010","2011","2012"]) {
  specs[`${SE}|Leon|${yr}|2.0 TFSi`] = {...leon_2_20t, pr:`~$32,000`};
  specs[`${SE}|Leon|${yr}|Cupra R`] = {...leon_2_cupra_r, pr:`~$42,000`};
}
const leon_3_14t = {en:"1395cc turbocharged I4",di:"1.4L",cy:"4",hp:"92 kW (125 hp)",tq:"200 Nm",tx:"6-speed manual",dr:"FWD",z1:"~10.5 sec",ts:"~203 km/h",ft:"Petrol",wt:"1230 kg",se:"5",fc:"6.2L",fh:"4.5L",fx:"8.2L"};
const leon_3_cupra_280 = {en:"1984cc turbocharged I4",di:"2.0L",cy:"4",hp:"206 kW (280 hp)",tq:"350 Nm",tx:"6-speed DSG",dr:"FWD",z1:"~5.8 sec",ts:"~250 km/h",ft:"Petrol",wt:"1395 kg",se:"5",fc:"8.5L",fh:"6.2L",fx:"11.5L"};
for (const yr of ["2012","2013","2014","2015","2016","2017","2018","2019","2020"]) {
  specs[`${SE}|Leon|${yr}|1.4 TSI`] = {...leon_3_14t, pr:`~$28,000`};
  specs[`${SE}|Leon|${yr}|Cupra 280`] = {...leon_3_cupra_280, pr:`~$48,000`};
}
const leon_4_15t = {en:"1498cc turbocharged I4",di:"1.5L",cy:"4",hp:"110 kW (150 hp)",tq:"250 Nm",tx:"7-speed DSG",dr:"FWD",z1:"~9.0 sec",ts:"~213 km/h",ft:"Petrol",wt:"1345 kg",se:"5",fc:"6.0L",fh:"4.4L",fx:"7.8L"};
const leon_4_cupra = {en:"1984cc turbocharged I4",di:"2.0L",cy:"4",hp:"228 kW (310 hp)",tq:"400 Nm",tx:"7-speed DSG",dr:"FWD",z1:"~5.7 sec",ts:"~250 km/h",ft:"Petrol",wt:"1475 kg",se:"5",fc:"8.2L",fh:"6.0L",fx:"11.0L"};
for (const yr of ["2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SE}|Leon|${yr}|1.5 TSI`] = {...leon_4_15t, pr:`~$35,000`};
  specs[`${SE}|Leon|${yr}|Cupra`] = {...leon_4_cupra, pr:`~$58,000`};
}

// --- Arona (2017–present) ---
const arona_10t = {en:"999cc turbocharged I3",di:"1.0L",cy:"3",hp:"70 kW (95 hp)",tq:"175 Nm",tx:"6-speed manual",dr:"FWD",z1:"~11.5 sec",ts:"~182 km/h",ft:"Petrol",wt:"1165 kg",se:"5",fc:"5.5L",fh:"4.0L",fx:"7.2L"};
for (const yr of ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SE}|Arona|${yr}|1.0 TSI`] = {...arona_10t, pr:`~$28,000`};
}

// --- Ateca (2016–present) ---
const ateca_15t = {en:"1498cc turbocharged I4",di:"1.5L",cy:"4",hp:"110 kW (150 hp)",tq:"250 Nm",tx:"7-speed DSG",dr:"FWD",z1:"~9.5 sec",ts:"~207 km/h",ft:"Petrol",wt:"1425 kg",se:"5",fc:"6.5L",fh:"4.8L",fx:"8.5L"};
const ateca_cupra = {en:"1984cc turbocharged I4",di:"2.0L",cy:"4",hp:"221 kW (300 hp)",tq:"400 Nm",tx:"7-speed DSG",dr:"AWD",z1:"~5.2 sec",ts:"~247 km/h",ft:"Petrol",wt:"1700 kg",se:"5",fc:"8.8L",fh:"6.5L",fx:"11.8L"};
for (const yr of ["2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SE}|Ateca|${yr}|1.5 TSI`] = {...ateca_15t, pr:`~$38,000`};
  specs[`${SE}|Ateca|${yr}|Cupra`] = {...ateca_cupra, pr:`~$62,000`};
}

// --- Tarraco (2018–present) ---
const tarraco_20t = {en:"1984cc turbocharged I4",di:"2.0L",cy:"4",hp:"140 kW (190 hp)",tq:"320 Nm",tx:"7-speed DSG",dr:"AWD",z1:"~8.2 sec",ts:"~218 km/h",ft:"Petrol",wt:"1695 kg",se:"7",fc:"8.2L",fh:"6.2L",fx:"11.0L"};
for (const yr of ["2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SE}|Tarraco|${yr}|2.0 TSI`] = {...tarraco_20t, pr:`~$52,000`};
}

// --- Toledo (1991–2019) ---
const tol_1 = {en:"1781cc I4",di:"1.8L",cy:"4",hp:"66 kW (90 hp)",tq:"145 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13 sec",ts:"~178 km/h",ft:"Petrol",wt:"1060 kg",se:"5",fc:"8.5L",fh:"6.5L",fx:"11.0L"};
for (const yr of ["1991","1992","1993","1994","1995","1996","1997","1998","1999"]) specs[`${SE}|Toledo|${yr}|1.8`] = {...tol_1, pr:`~$16,000`};
const tol_4 = {en:"1197cc turbocharged I4",di:"1.2L",cy:"4",hp:"66 kW (90 hp)",tq:"160 Nm",tx:"7-speed DSG",dr:"FWD",z1:"~12 sec",ts:"~182 km/h",ft:"Petrol",wt:"1290 kg",se:"5",fc:"5.8L",fh:"4.2L",fx:"7.5L"};
for (const yr of ["2012","2013","2014","2015","2016","2017","2018","2019"]) specs[`${SE}|Toledo|${yr}|1.2 TSI`] = {...tol_4, pr:`~$22,000`};

// --- Alhambra (1996–2022) ---
const alh_20t = {en:"1984cc turbocharged I4",di:"2.0L",cy:"4",hp:"132 kW (180 hp)",tq:"280 Nm",tx:"6-speed DSG",dr:"FWD",z1:"~9.2 sec",ts:"~211 km/h",ft:"Petrol",wt:"1720 kg",se:"7",fc:"9.5L",fh:"7.0L",fx:"12.5L"};
for (const yr of ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"]) {
  specs[`${SE}|Alhambra|${yr}|2.0 TSI`] = {...alh_20t, pr:`~$48,000`};
}

const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement99.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement99.json written — ${count} entries`);
