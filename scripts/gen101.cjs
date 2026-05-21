'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// TVR
// ============================================================
const TV = 'TVR';

// --- Grantura (1958–1967) ---
const gran_13 = {en:"1296cc Coventry Climax I4",di:"1.3L",cy:"4",hp:"56 kW (76 hp)",tq:"97 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"560 kg",se:"2",fc:"9.5L",fh:"7.0L",fx:"13.0L"};
for (const yr of ["1958","1959","1960","1961","1962","1963","1964","1965","1966","1967"]) specs[`${TV}|Grantura|${yr}|1.3`] = {...gran_13, pr:`~$2,500`};

// --- M Series (1972–1979) ---
const m_1600 = {en:"1599cc Ford I4",di:"1.6L",cy:"4",hp:"64 kW (87 hp)",tq:"128 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"820 kg",se:"2",fc:"9.8L",fh:"7.5L",fx:"12.5L"};
const m_3000 = {en:"2994cc Ford Essex V6",di:"3.0L",cy:"6",hp:"107 kW (145 hp)",tq:"235 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"900 kg",se:"2",fc:"11.5L",fh:"8.5L",fx:"15.0L"};
for (const yr of ["1972","1973","1974","1975","1976","1977","1978","1979"]) {
  specs[`${TV}|M Series|${yr}|1600M`] = {...m_1600, pr:`~$4,500`};
  specs[`${TV}|M Series|${yr}|3000M`] = {...m_3000, pr:`~$6,500`};
}

// --- Tasmin / 350i / 390SE (1980–1988) ---
const tasmin_v6 = {en:"2994cc Ford Essex V6",di:"3.0L",cy:"6",hp:"107 kW (145 hp)",tq:"235 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.0 sec",ts:"~205 km/h",ft:"Petrol",wt:"1010 kg",se:"2",fc:"12.0L",fh:"9.0L",fx:"15.5L"};
const tasmin_350 = {en:"3528cc Rover V8",di:"3.5L",cy:"8",hp:"142 kW (193 hp)",tq:"280 Nm",tx:"5-speed manual",dr:"RWD",z1:"~6.5 sec",ts:"~220 km/h",ft:"Petrol",wt:"1010 kg",se:"2",fc:"13.5L",fh:"10.0L",fx:"17.5L"};
const tasmin_390 = {en:"3905cc Rover V8",di:"3.9L",cy:"8",hp:"164 kW (223 hp)",tq:"325 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.7 sec",ts:"~235 km/h",ft:"Petrol",wt:"1050 kg",se:"2",fc:"14.0L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["1980","1981","1982","1983","1984","1985","1986","1987","1988"]) {
  specs[`${TV}|Tasmin|${yr}|V6`] = {...tasmin_v6, pr:`~$12,000`};
  specs[`${TV}|Tasmin|${yr}|350i`] = {...tasmin_350, pr:`~$18,000`};
  specs[`${TV}|Tasmin|${yr}|390SE`] = {...tasmin_390, pr:`~$24,000`};
}

// --- S Series (1986–1994) ---
const s2 = {en:"2933cc Rover V8",di:"2.9L",cy:"8",hp:"116 kW (158 hp)",tq:"232 Nm",tx:"5-speed manual",dr:"RWD",z1:"~7.0 sec",ts:"~210 km/h",ft:"Petrol",wt:"950 kg",se:"2",fc:"12.5L",fh:"9.5L",fx:"16.0L"};
const s3c = {en:"3905cc Rover V8",di:"3.9L",cy:"8",hp:"164 kW (223 hp)",tq:"325 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.8 sec",ts:"~230 km/h",ft:"Petrol",wt:"980 kg",se:"2",fc:"13.5L",fh:"10.0L",fx:"17.5L"};
for (const yr of ["1986","1987","1988","1989","1990","1991","1992","1993","1994"]) {
  specs[`${TV}|S Series|${yr}|S2`] = {...s2, pr:`~$22,000`};
  specs[`${TV}|S Series|${yr}|S3C`] = {...s3c, pr:`~$28,000`};
}

// --- Griffith (1991–2002) ---
const grif_40 = {en:"3947cc Rover V8",di:"4.0L",cy:"8",hp:"164 kW (224 hp)",tq:"325 Nm",tx:"5-speed manual",dr:"RWD",z1:"~4.9 sec",ts:"~240 km/h",ft:"Petrol",wt:"1060 kg",se:"2",fc:"14.0L",fh:"10.5L",fx:"18.5L"};
const grif_50 = {en:"4988cc Rover V8",di:"5.0L",cy:"8",hp:"224 kW (305 hp)",tq:"420 Nm",tx:"5-speed manual",dr:"RWD",z1:"~4.1 sec",ts:"~270 km/h",ft:"Petrol",wt:"1080 kg",se:"2",fc:"15.0L",fh:"11.0L",fx:"20.0L"};
for (const yr of ["1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002"]) {
  specs[`${TV}|Griffith|${yr}|4.0`] = {...grif_40, pr:`~$35,000`};
  specs[`${TV}|Griffith|${yr}|5.0`] = {...grif_50, pr:`~$48,000`};
}

// --- Chimaera (1992–2003) ---
const chim_40 = {en:"3947cc Rover V8",di:"4.0L",cy:"8",hp:"164 kW (224 hp)",tq:"325 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.2 sec",ts:"~235 km/h",ft:"Petrol",wt:"1100 kg",se:"2",fc:"13.5L",fh:"10.0L",fx:"17.5L"};
const chim_50 = {en:"4988cc Rover V8",di:"5.0L",cy:"8",hp:"224 kW (305 hp)",tq:"420 Nm",tx:"5-speed manual",dr:"RWD",z1:"~4.4 sec",ts:"~265 km/h",ft:"Petrol",wt:"1120 kg",se:"2",fc:"15.0L",fh:"11.0L",fx:"19.5L"};
for (const yr of ["1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003"]) {
  specs[`${TV}|Chimaera|${yr}|4.0`] = {...chim_40, pr:`~$32,000`};
  specs[`${TV}|Chimaera|${yr}|5.0`] = {...chim_50, pr:`~$42,000`};
}

// --- Cerbera (1994–2003) ---
const cerb_40 = {en:"3996cc TVR AJP6",di:"4.0L",cy:"6",hp:"194 kW (264 hp)",tq:"362 Nm",tx:"5-speed manual",dr:"RWD",z1:"~4.3 sec",ts:"~258 km/h",ft:"Petrol",wt:"1020 kg",se:"2",fc:"13.5L",fh:"10.0L",fx:"17.5L"};
const cerb_v8 = {en:"4185cc TVR V8",di:"4.2L",cy:"8",hp:"261 kW (355 hp)",tq:"450 Nm",tx:"5-speed manual",dr:"RWD",z1:"~3.9 sec",ts:"~290 km/h",ft:"Petrol",wt:"1050 kg",se:"2",fc:"14.5L",fh:"10.5L",fx:"19.0L"};
for (const yr of ["1994","1995","1996","1997","1998","1999","2000","2001","2002","2003"]) {
  specs[`${TV}|Cerbera|${yr}|4.0`] = {...cerb_40, pr:`~$42,000`};
  specs[`${TV}|Cerbera|${yr}|Speed Six`] = {...cerb_40, hp:"261 kW (355 hp)", di:"4.5L", pr:`~$52,000`};
  specs[`${TV}|Cerbera|${yr}|Speed Eight`] = {...cerb_v8, pr:`~$58,000`};
}

// --- Tuscan (1999–2006) ---
const tusc = {en:"3996cc TVR Speed Six",di:"4.0L",cy:"6",hp:"261 kW (355 hp)",tq:"462 Nm",tx:"5-speed manual",dr:"RWD",z1:"~3.7 sec",ts:"~280 km/h",ft:"Petrol",wt:"1080 kg",se:"2",fc:"14.0L",fh:"10.5L",fx:"18.5L"};
const tusc_s = {en:"3996cc TVR Speed Six",di:"4.0L",cy:"6",hp:"276 kW (375 hp)",tq:"480 Nm",tx:"5-speed manual",dr:"RWD",z1:"~3.5 sec",ts:"~290 km/h",ft:"Petrol",wt:"1060 kg",se:"2",fc:"14.5L",fh:"10.8L",fx:"19.0L"};
for (const yr of ["1999","2000","2001","2002","2003","2004","2005","2006"]) {
  specs[`${TV}|Tuscan|${yr}|Speed Six`] = {...tusc, pr:`~$55,000`};
  specs[`${TV}|Tuscan|${yr}|S`] = {...tusc_s, pr:`~$62,000`};
}

// --- Sagaris (2004–2006) ---
const sag = {en:"3996cc TVR Speed Six",di:"4.0L",cy:"6",hp:"291 kW (396 hp)",tq:"490 Nm",tx:"5-speed manual",dr:"RWD",z1:"~3.7 sec",ts:"~290 km/h",ft:"Petrol",wt:"1050 kg",se:"2",fc:"14.5L",fh:"10.5L",fx:"19.5L"};
for (const yr of ["2004","2005","2006"]) specs[`${TV}|Sagaris|${yr}|Standard`] = {...sag, pr:`~$70,000`};

// --- T350 (2002–2005) ---
const t350 = {en:"3996cc TVR Speed Six",di:"4.0L",cy:"6",hp:"246 kW (335 hp)",tq:"440 Nm",tx:"5-speed manual",dr:"RWD",z1:"~4.4 sec",ts:"~270 km/h",ft:"Petrol",wt:"1010 kg",se:"2",fc:"13.5L",fh:"10.0L",fx:"17.5L"};
for (const yr of ["2002","2003","2004","2005"]) specs[`${TV}|T350|${yr}|Standard`] = {...t350, pr:`~$45,000`};

// ============================================================
// Bristol
// ============================================================
const BR = 'Bristol';

// --- 400 series (1947–1961) ---
const b400 = {en:"1971cc BMW-derived I6",di:"2.0L",cy:"6",hp:"55 kW (75 hp)",tq:"137 Nm",tx:"4-speed manual",dr:"RWD",z1:"~17 sec",ts:"~150 km/h",ft:"Petrol",wt:"1040 kg",se:"2",fc:"11.0L",fh:"8.5L",fx:"14.5L"};
for (const yr of ["1947","1948","1949","1950"]) specs[`${BR}|400|${yr}|Saloon`] = {...b400, pr:`~$3,000`};

const b401 = {...b400, hp:"63 kW (85 hp)", ts:"~158 km/h"};
for (const yr of ["1949","1950","1951","1952","1953"]) specs[`${BR}|401|${yr}|Saloon`] = {...b401, pr:`~$3,500`};

const b403 = {en:"1971cc Bristol I6",di:"2.0L",cy:"6",hp:"66 kW (90 hp)",tq:"147 Nm",tx:"4-speed manual",dr:"RWD",z1:"~16 sec",ts:"~163 km/h",ft:"Petrol",wt:"1090 kg",se:"4",fc:"11.5L",fh:"9.0L",fx:"15.0L"};
for (const yr of ["1953","1954","1955"]) specs[`${BR}|403|${yr}|Saloon`] = {...b403, pr:`~$4,000`};

const b405 = {en:"1971cc Bristol I6",di:"2.0L",cy:"6",hp:"78 kW (105 hp)",tq:"160 Nm",tx:"4-speed manual",dr:"RWD",z1:"~14 sec",ts:"~170 km/h",ft:"Petrol",wt:"1180 kg",se:"4",fc:"12.0L",fh:"9.2L",fx:"15.5L"};
for (const yr of ["1954","1955","1956","1957","1958"]) specs[`${BR}|405|${yr}|Saloon`] = {...b405, pr:`~$5,000`};

// --- 407–412 (Chrysler V8 era, 1961–1982) ---
const b407 = {en:"5130cc Chrysler V8",di:"5.1L",cy:"8",hp:"186 kW (253 hp)",tq:"407 Nm",tx:"3-speed TorqueFlite auto",dr:"RWD",z1:"~9.5 sec",ts:"~190 km/h",ft:"Petrol",wt:"1600 kg",se:"4",fc:"16.0L",fh:"11.5L",fx:"21.0L"};
for (const yr of ["1961","1962","1963"]) specs[`${BR}|407|${yr}|Saloon`] = {...b407, pr:`~$8,500`};

const b411 = {en:"6277cc Chrysler V8",di:"6.3L",cy:"8",hp:"224 kW (305 hp)",tq:"542 Nm",tx:"3-speed TorqueFlite auto",dr:"RWD",z1:"~7.5 sec",ts:"~220 km/h",ft:"Petrol",wt:"1650 kg",se:"4",fc:"17.0L",fh:"12.0L",fx:"23.0L"};
for (const yr of ["1969","1970","1971","1972","1973","1974","1975","1976"]) specs[`${BR}|411|${yr}|Series 5`] = {...b411, pr:`~$18,000`};

const b412 = {en:"5900cc Chrysler V8",di:"5.9L",cy:"8",hp:"179 kW (243 hp)",tq:"475 Nm",tx:"3-speed TorqueFlite auto",dr:"RWD",z1:"~8.5 sec",ts:"~205 km/h",ft:"Petrol",wt:"1700 kg",se:"4",fc:"16.5L",fh:"11.5L",fx:"22.0L"};
for (const yr of ["1975","1976","1977","1978","1979","1980","1981","1982"]) specs[`${BR}|412|${yr}|Saloon`] = {...b412, pr:`~$28,000`};

// --- Beaufighter (1980–1993) ---
const beauf = {en:"5900cc Chrysler V8 turbocharged",di:"5.9L",cy:"8",hp:"246 kW (335 hp)",tq:"610 Nm",tx:"3-speed TorqueFlite auto",dr:"RWD",z1:"~5.9 sec",ts:"~240 km/h",ft:"Petrol",wt:"1750 kg",se:"4",fc:"18.0L",fh:"13.0L",fx:"25.0L"};
for (const yr of ["1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993"]) {
  specs[`${BR}|Beaufighter|${yr}|Saloon`] = {...beauf, pr:`~$55,000`};
}

// --- Blenheim (1993–2011) ---
const blen = {en:"5900cc Chrysler V8",di:"5.9L",cy:"8",hp:"224 kW (305 hp)",tq:"500 Nm",tx:"4-speed auto",dr:"RWD",z1:"~7.0 sec",ts:"~240 km/h",ft:"Petrol",wt:"1780 kg",se:"4",fc:"17.0L",fh:"12.0L",fx:"23.0L"};
for (const yr of ["1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"]) {
  specs[`${BR}|Blenheim|${yr}|Saloon`] = {...blen, pr:`~$220,000`};
}

// --- Fighter (2004–2011) ---
const fight = {en:"7994cc Dodge Viper V10",di:"8.0L",cy:"10",hp:"448 kW (610 hp)",tq:"813 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.8 sec",ts:"~360 km/h",ft:"Petrol",wt:"900 kg",se:"2",fc:"20.0L",fh:"14.0L",fx:"28.0L"};
for (const yr of ["2004","2005","2006","2007","2008","2009","2010","2011"]) {
  specs[`${BR}|Fighter|${yr}|Standard`] = {...fight, pr:`~$380,000`};
  specs[`${BR}|Fighter|${yr}|T`] = {...fight, hp:"514 kW (700 hp)", ts:"~400 km/h", pr:`~$480,000`};
}

// ============================================================
// Jensen
// ============================================================
const JE = 'Jensen';

// --- Interceptor (1966–1992) ---
const int_mk1 = {en:"6276cc Chrysler V8",di:"6.3L",cy:"8",hp:"224 kW (305 hp)",tq:"542 Nm",tx:"3-speed TorqueFlite auto",dr:"RWD",z1:"~7.3 sec",ts:"~220 km/h",ft:"Petrol",wt:"1660 kg",se:"4",fc:"17.0L",fh:"12.0L",fx:"23.0L"};
for (const yr of ["1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976"]) {
  specs[`${JE}|Interceptor|${yr}|Mk III`] = {...int_mk1, pr:`~$12,000`};
}
const int_sp = {en:"7212cc Chrysler V8",di:"7.2L",cy:"8",hp:"276 kW (375 hp)",tq:"610 Nm",tx:"3-speed TorqueFlite auto",dr:"RWD",z1:"~6.5 sec",ts:"~235 km/h",ft:"Petrol",wt:"1700 kg",se:"4",fc:"19.0L",fh:"13.5L",fx:"26.0L"};
for (const yr of ["1971","1972","1973"]) specs[`${JE}|Interceptor|${yr}|SP`] = {...int_sp, pr:`~$16,000`};
const int_r = {en:"5900cc Chrysler V8",di:"5.9L",cy:"8",hp:"224 kW (305 hp)",tq:"500 Nm",tx:"4-speed auto",dr:"RWD",z1:"~6.8 sec",ts:"~230 km/h",ft:"Petrol",wt:"1680 kg",se:"4",fc:"16.5L",fh:"11.5L",fx:"22.0L"};
for (const yr of ["1983","1984","1985","1986","1987","1988","1989","1990","1991","1992"]) {
  specs[`${JE}|Interceptor|${yr}|Series IV`] = {...int_r, pr:`~$45,000`};
}

// --- FF (1966–1971) ---
const ff = {en:"6276cc Chrysler V8",di:"6.3L",cy:"8",hp:"224 kW (305 hp)",tq:"542 Nm",tx:"3-speed TorqueFlite auto",dr:"AWD",z1:"~7.5 sec",ts:"~215 km/h",ft:"Petrol",wt:"1814 kg",se:"4",fc:"18.0L",fh:"13.0L",fx:"24.0L"};
for (const yr of ["1966","1967","1968","1969","1970","1971"]) specs[`${JE}|FF|${yr}|Standard`] = {...ff, pr:`~$15,000`};

// --- Jensen-Healey (1972–1976) ---
const jh = {en:"1973cc Lotus DOHC I4",di:"2.0L",cy:"4",hp:"100 kW (136 hp)",tq:"175 Nm",tx:"4-speed manual",dr:"RWD",z1:"~8.8 sec",ts:"~195 km/h",ft:"Petrol",wt:"1020 kg",se:"2",fc:"10.5L",fh:"8.0L",fx:"13.5L"};
for (const yr of ["1972","1973","1974","1975","1976"]) specs[`${JE}|Jensen-Healey|${yr}|Roadster`] = {...jh, pr:`~$5,500`};

// ============================================================
// AC
// ============================================================
const AC = 'AC';

// --- Ace (1953–1963) ---
const ace = {en:"1991cc AC I6",di:"2.0L",cy:"6",hp:"63 kW (85 hp)",tq:"156 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"700 kg",se:"2",fc:"10.5L",fh:"8.0L",fx:"14.0L"};
const ace_ford = {en:"2553cc Ford Zephyr I6",di:"2.6L",cy:"6",hp:"78 kW (106 hp)",tq:"190 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9.0 sec",ts:"~188 km/h",ft:"Petrol",wt:"700 kg",se:"2",fc:"11.0L",fh:"8.5L",fx:"14.5L"};
for (const yr of ["1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963"]) {
  specs[`${AC}|Ace|${yr}|AC Engine`] = {...ace, pr:`~$3,500`};
  specs[`${AC}|Ace|${yr}|Bristol Engine`] = {...ace, hp:"78 kW (105 hp)", pr:`~$4,200`};
}

// --- Cobra 289 (1962–1965) ---
const cob289 = {en:"4727cc Ford V8",di:"4.7L",cy:"8",hp:"164 kW (222 hp)",tq:"380 Nm",tx:"4-speed manual",dr:"RWD",z1:"~5.5 sec",ts:"~225 km/h",ft:"Petrol",wt:"890 kg",se:"2",fc:"14.5L",fh:"10.5L",fx:"19.5L"};
for (const yr of ["1962","1963","1964","1965"]) specs[`${AC}|Cobra|${yr}|289`] = {...cob289, pr:`~$8,500`};

// --- Cobra 427 (1965–1967) ---
const cob427 = {en:"6997cc Ford V8",di:"7.0L",cy:"8",hp:"313 kW (425 hp)",tq:"644 Nm",tx:"4-speed manual",dr:"RWD",z1:"~4.0 sec",ts:"~265 km/h",ft:"Petrol",wt:"1020 kg",se:"2",fc:"20.0L",fh:"14.0L",fx:"28.0L"};
const cob427sc = {en:"6997cc Ford V8 supercharged",di:"7.0L",cy:"8",hp:"388 kW (527 hp)",tq:"780 Nm",tx:"4-speed manual",dr:"RWD",z1:"~3.6 sec",ts:"~278 km/h",ft:"Petrol",wt:"1020 kg",se:"2",fc:"22.0L",fh:"15.0L",fx:"30.0L"};
for (const yr of ["1965","1966","1967"]) {
  specs[`${AC}|Cobra|${yr}|427`] = {...cob427, pr:`~$12,000`};
  specs[`${AC}|Cobra|${yr}|427 SC`] = {...cob427sc, pr:`~$18,000`};
}

// --- Cobra Mk IV (1983–present) ---
const cobmk4 = {en:"4942cc Ford V8",di:"4.9L",cy:"8",hp:"186 kW (253 hp)",tq:"400 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.2 sec",ts:"~225 km/h",ft:"Petrol",wt:"1050 kg",se:"2",fc:"14.0L",fh:"10.5L",fx:"18.5L"};
for (const yr of ["1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"]) {
  specs[`${AC}|Cobra|${yr}|Mk IV`] = {...cobmk4, pr:`~$45,000`};
}

// --- 428 (1967–1973) ---
const c428 = {en:"7014cc Ford V8",di:"7.0L",cy:"8",hp:"253 kW (345 hp)",tq:"610 Nm",tx:"3-speed Ford-O-Matic auto",dr:"RWD",z1:"~5.9 sec",ts:"~225 km/h",ft:"Petrol",wt:"1580 kg",se:"2",fc:"17.0L",fh:"12.0L",fx:"23.0L"};
for (const yr of ["1967","1968","1969","1970","1971","1972","1973"]) specs[`${AC}|428|${yr}|Coupe`] = {...c428, pr:`~$10,000`};

// --- 3000ME (1979–1984) ---
const me3000 = {en:"2994cc Ford Essex V6 mid-mounted",di:"3.0L",cy:"6",hp:"101 kW (138 hp)",tq:"230 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1035 kg",se:"2",fc:"11.5L",fh:"8.8L",fx:"15.0L"};
for (const yr of ["1979","1980","1981","1982","1983","1984"]) specs[`${AC}|3000ME|${yr}|Standard`] = {...me3000, pr:`~$18,000`};

// --- Ace (1993–2000) ---
const ace93 = {en:"4942cc Ford V8",di:"4.9L",cy:"8",hp:"186 kW (253 hp)",tq:"400 Nm",tx:"5-speed manual",dr:"RWD",z1:"~5.5 sec",ts:"~218 km/h",ft:"Petrol",wt:"1065 kg",se:"2",fc:"14.0L",fh:"10.5L",fx:"18.5L"};
for (const yr of ["1993","1994","1995","1996","1997","1998","1999","2000"]) specs[`${AC}|Ace|${yr}|V8`] = {...ace93, pr:`~$55,000`};

const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement101.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement101.json written — ${count} entries`);
