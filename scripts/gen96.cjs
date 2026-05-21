'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Plymouth (1928–2001)
// ============================================================
const PL = 'Plymouth';

// --- Fury ---
// 1956–58: 4.5L Poly V8 155kW
const fury_56 = {en:"Poly 318ci V8",di:"4.5L",cy:"8",hp:"155 kW (208 hp)",tq:"366 Nm",tx:"3-speed manual",dr:"RWD",z1:"~10.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,700 kg",se:"6",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
for (const yr of ["1956","1957","1958"]) {
  specs[`${PL}|Fury|${yr}|Standard`] = {...fury_56, pr:"~$3,200"};
}

// 1959–61: 5.2L→6.3L V8
const fury_59 = {en:"318ci Poly V8",di:"5.2L",cy:"8",hp:"168 kW (225 hp)",tq:"400 Nm",tx:"3-speed Torqueflite auto",dr:"RWD",z1:"~10 sec",ts:"~178 km/h",ft:"Petrol",wt:"1,720 kg",se:"6",fc:"18.5L",fh:"13.0L",fx:"23.0L"};
const fury_sf59 = {en:"383ci V8",di:"6.3L",cy:"8",hp:"246 kW (330 hp)",tq:"556 Nm",tx:"3-speed Torqueflite auto",dr:"RWD",z1:"~8.0 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,740 kg",se:"6",fc:"20.5L",fh:"14.5L",fx:"25.5L"};
for (const yr of ["1959","1960","1961"]) {
  specs[`${PL}|Fury|${yr}|Standard`] = {...fury_59, pr:"~$3,500"};
  specs[`${PL}|Fury|${yr}|Sport Fury`] = {...fury_sf59, pr:"~$4,200"};
}

// 1962–74: 5.2L→7.2L V8
const fury_62 = {en:"318ci Poly V8",di:"5.2L",cy:"8",hp:"168 kW (225 hp)",tq:"400 Nm",tx:"3-speed Torqueflite auto",dr:"RWD",z1:"~10 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,700 kg",se:"6",fc:"18.0L",fh:"12.5L",fx:"22.5L"};
const fury_383 = {en:"383ci B V8",di:"6.3L",cy:"8",hp:"246 kW (330 hp)",tq:"569 Nm",tx:"3-speed Torqueflite auto",dr:"RWD",z1:"~8.5 sec",ts:"~192 km/h",ft:"Petrol",wt:"1,720 kg",se:"6",fc:"20.0L",fh:"14.0L",fx:"25.0L"};
const fury_440 = {en:"440ci RB V8",di:"7.2L",cy:"8",hp:"268 kW (360 hp)",tq:"644 Nm",tx:"3-speed Torqueflite auto",dr:"RWD",z1:"~7.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,780 kg",se:"6",fc:"21.5L",fh:"15.5L",fx:"27.0L"};
for (const yr of ["1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974"]) {
  specs[`${PL}|Fury|${yr}|I`] = {...fury_62, pr:"~$3,800"};
  specs[`${PL}|Fury|${yr}|III`] = {...fury_383, pr:"~$4,500"};
  specs[`${PL}|Fury|${yr}|Sport Fury`] = {...fury_383, pr:"~$5,000"};
  if (parseInt(yr) >= 1968) {
    specs[`${PL}|Fury|${yr}|GT`] = {...fury_440, pr:"~$6,000"};
  }
}

// 1975–78
for (const yr of ["1975","1976","1977","1978"]) {
  specs[`${PL}|Fury|${yr}|Standard`] = {...fury_62, pr:"~$6,500"};
}

// --- Belvedere / Satellite / Road Runner ---
const belv_54 = {en:"230ci Flathead I6",di:"3.8L",cy:"6",hp:"71 kW (96 hp)",tq:"190 Nm",tx:"3-speed manual",dr:"RWD",z1:"~18 sec",ts:"~145 km/h",ft:"Petrol",wt:"1,460 kg",se:"6",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
const belv_v8 = {en:"318ci V8",di:"5.2L",cy:"8",hp:"168 kW (225 hp)",tq:"400 Nm",tx:"3-speed manual",dr:"RWD",z1:"~10 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,540 kg",se:"6",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
for (const yr of ["1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970"]) {
  specs[`${PL}|Belvedere|${yr}|Standard`] = {...belv_54, pr:"~$2,500"};
  if (parseInt(yr) >= 1956) {
    specs[`${PL}|Belvedere|${yr}|V8`] = {...belv_v8, pr:"~$3,200"};
  }
}
const sat_std = {en:"318ci B V8",di:"5.2L",cy:"8",hp:"168 kW (225 hp)",tq:"400 Nm",tx:"3-speed Torqueflite auto",dr:"RWD",z1:"~10 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,580 kg",se:"5",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
const sat_gtx = {en:"440ci Super Commando V8",di:"7.2L",cy:"8",hp:"279 kW (375 hp)",tq:"678 Nm",tx:"3-speed Torqueflite auto",dr:"RWD",z1:"~5.8 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,620 kg",se:"5",fc:"21.5L",fh:"15.5L",fx:"27.0L"};
const sat_rr = {en:"383ci Road Runner V8",di:"6.3L",cy:"8",hp:"227 kW (305 hp)",tq:"569 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.8 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,580 kg",se:"5",fc:"20.0L",fh:"14.0L",fx:"25.0L"};
const sat_hemi = {en:"426 Hemi V8",di:"7.0L",cy:"8",hp:"313 kW (425 hp)",tq:"678 Nm",tx:"4-speed manual",dr:"RWD",z1:"~5.5 sec",ts:"~225 km/h",ft:"Petrol",wt:"1,650 kg",se:"5",fc:"22.5L",fh:"16.0L",fx:"28.0L"};
for (const yr of ["1965","1966","1967","1968","1969","1970","1971","1972","1973","1974"]) {
  specs[`${PL}|Satellite|${yr}|Standard`] = {...sat_std, pr:"~$3,800"};
  specs[`${PL}|Satellite|${yr}|Sport Satellite`] = {...sat_std, pr:"~$4,200"};
  if (parseInt(yr) >= 1967 && parseInt(yr) <= 1971) {
    specs[`${PL}|Satellite|${yr}|GTX`] = {...sat_gtx, pr:"~$5,500"};
  }
  if (parseInt(yr) >= 1968 && parseInt(yr) <= 1975) {
    specs[`${PL}|Satellite|${yr}|Road Runner`] = {...sat_rr, pr:"~$4,500"};
    specs[`${PL}|Satellite|${yr}|Road Runner Hemi`] = {...sat_hemi, pr:"~$6,500"};
  }
}

// --- Barracuda ---
const bar_64 = {en:"170ci Slant-6 I6",di:"2.8L",cy:"6",hp:"71 kW (101 hp)",tq:"185 Nm",tx:"3-speed manual",dr:"RWD",z1:"~15 sec",ts:"~158 km/h",ft:"Petrol",wt:"1,200 kg",se:"4",fc:"12.0L",fh:"8.5L",fx:"15.0L"};
const bar_64v8 = {en:"318ci V8",di:"4.5L",cy:"8",hp:"155 kW (208 hp)",tq:"366 Nm",tx:"3-speed manual",dr:"RWD",z1:"~10.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,250 kg",se:"4",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
const bar_67 = {en:"318ci V8",di:"5.2L",cy:"8",hp:"168 kW (225 hp)",tq:"400 Nm",tx:"4-speed manual",dr:"RWD",z1:"~10 sec",ts:"~180 km/h",ft:"Petrol",wt:"1,370 kg",se:"4",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
const bar_fs = {en:"383ci Formula S V8",di:"6.3L",cy:"8",hp:"246 kW (330 hp)",tq:"569 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,400 kg",se:"4",fc:"20.0L",fh:"14.0L",fx:"25.0L"};
const bar_cuda69 = {en:"340ci 'Cuda V8",di:"5.6L",cy:"8",hp:"250 kW (335 hp)",tq:"474 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.0 sec",ts:"~205 km/h",ft:"Petrol",wt:"1,420 kg",se:"4",fc:"19.5L",fh:"14.0L",fx:"24.5L"};
const bar_70 = {en:"383ci B V8",di:"6.3L",cy:"8",hp:"246 kW (330 hp)",tq:"569 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.0 sec",ts:"~205 km/h",ft:"Petrol",wt:"1,523 kg",se:"4",fc:"20.0L",fh:"14.0L",fx:"25.0L"};
const bar_cuda70 = {en:"440ci 'Cuda V8",di:"7.2L",cy:"8",hp:"268 kW (375 hp)",tq:"644 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.2 sec",ts:"~215 km/h",ft:"Petrol",wt:"1,560 kg",se:"4",fc:"21.5L",fh:"15.5L",fx:"27.0L"};
const bar_hemi70 = {en:"426 Hemi V8",di:"7.0L",cy:"8",hp:"313 kW (425 hp)",tq:"678 Nm",tx:"4-speed manual",dr:"RWD",z1:"~5.8 sec",ts:"~230 km/h",ft:"Petrol",wt:"1,590 kg",se:"4",fc:"22.5L",fh:"16.0L",fx:"28.0L"};
const bar_aar = {en:"340ci six-pack AAR V8",di:"5.6L",cy:"8",hp:"250 kW (335 hp)",tq:"474 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,540 kg",se:"4",fc:"19.5L",fh:"14.0L",fx:"24.5L"};
for (const yr of ["1964","1965","1966"]) {
  specs[`${PL}|Barracuda|${yr}|Standard`] = {...bar_64, pr:"~$2,800"};
  specs[`${PL}|Barracuda|${yr}|V8`] = {...bar_64v8, pr:"~$3,200"};
}
for (const yr of ["1967","1968","1969"]) {
  specs[`${PL}|Barracuda|${yr}|Standard`] = {...bar_67, pr:"~$3,200"};
  specs[`${PL}|Barracuda|${yr}|Formula S`] = {...bar_fs, pr:"~$4,000"};
  if (yr === "1969") {
    specs[`${PL}|Barracuda|${yr}|'Cuda`] = {...bar_cuda69, pr:"~$4,800"};
  }
}
for (const yr of ["1970","1971","1972","1973","1974"]) {
  specs[`${PL}|Barracuda|${yr}|Standard`] = {...bar_70, pr:"~$3,800"};
  specs[`${PL}|Barracuda|${yr}|'Cuda`] = {...bar_cuda70, pr:"~$5,200"};
  specs[`${PL}|Barracuda|${yr}|'Cuda Hemi`] = {...bar_hemi70, pr:"~$7,000"};
  if (yr === "1970") {
    specs[`${PL}|Barracuda|${yr}|AAR 'Cuda`] = {...bar_aar, pr:"~$5,800"};
  }
}

// --- Valiant (1960–1976) ---
const val_60 = {en:"170ci Slant-6 I6",di:"2.8L",cy:"6",hp:"71 kW (96 hp)",tq:"190 Nm",tx:"3-speed manual",dr:"RWD",z1:"~16 sec",ts:"~152 km/h",ft:"Petrol",wt:"1,195 kg",se:"5",fc:"12.0L",fh:"8.5L",fx:"15.0L"};
const val_v8 = {en:"318ci V8",di:"5.2L",cy:"8",hp:"168 kW (225 hp)",tq:"400 Nm",tx:"3-speed manual",dr:"RWD",z1:"~10 sec",ts:"~178 km/h",ft:"Petrol",wt:"1,250 kg",se:"5",fc:"17.0L",fh:"12.0L",fx:"21.5L"};
const val_dust = {en:"318ci V8",di:"5.2L",cy:"8",hp:"168 kW (225 hp)",tq:"400 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~180 km/h",ft:"Petrol",wt:"1,200 kg",se:"5",fc:"17.0L",fh:"12.0L",fx:"21.5L"};
for (const yr of ["1960","1961","1962","1963","1964","1965","1966","1967","1968","1969"]) {
  specs[`${PL}|Valiant|${yr}|Standard`] = {...val_60, pr:"~$2,400"};
  specs[`${PL}|Valiant|${yr}|Signet`] = {...val_v8, pr:"~$3,000"};
}
for (const yr of ["1970","1971","1972","1973","1974","1975","1976"]) {
  specs[`${PL}|Valiant|${yr}|Standard`] = {...val_60, pr:"~$3,200"};
  specs[`${PL}|Valiant|${yr}|Duster`] = {...val_dust, pr:"~$3,800"};
}

// --- Superbird (1970) ---
specs[`${PL}|Superbird|1970|Standard`] = {en:"440ci Super Commando V8",di:"7.2L",cy:"8",hp:"279 kW (375 hp)",tq:"644 Nm",tx:"4-speed manual",dr:"RWD",z1:"~5.8 sec",ts:"~220 km/h",ft:"Petrol",wt:"1,657 kg",se:"5",fc:"21.5L",fh:"15.5L",fx:"27.0L",pr:"~$4,298"};
specs[`${PL}|Superbird|1970|Hemi`] = {en:"426 Hemi V8",di:"7.0L",cy:"8",hp:"324 kW (434 hp)",tq:"678 Nm",tx:"4-speed manual",dr:"RWD",z1:"~5.5 sec",ts:"~235 km/h",ft:"Petrol",wt:"1,680 kg",se:"5",fc:"22.5L",fh:"16.0L",fx:"28.0L",pr:"~$5,500"};

// --- Volare (1976–1980) ---
const vol_i6 = {en:"225ci Slant-6 I6",di:"3.7L",cy:"6",hp:"75 kW (100 hp)",tq:"205 Nm",tx:"3-speed manual",dr:"RWD",z1:"~14 sec",ts:"~158 km/h",ft:"Petrol",wt:"1,400 kg",se:"5",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
const vol_v8 = {en:"318ci V8",di:"5.2L",cy:"8",hp:"104 kW (140 hp)",tq:"305 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~12 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,430 kg",se:"5",fc:"16.5L",fh:"11.5L",fx:"20.5L"};
for (const yr of ["1976","1977","1978","1979","1980"]) {
  specs[`${PL}|Volare|${yr}|Standard`] = {...vol_i6, pr:"~$5,500"};
  specs[`${PL}|Volare|${yr}|Premier`] = {...vol_v8, pr:"~$6,500"};
  if (yr === "1977") {
    specs[`${PL}|Volare|${yr}|Road Runner`] = {...vol_v8, pr:"~$7,200"};
  }
}

// --- Gran Fury (1975–1989) ---
const gfury = {en:"318ci V8",di:"5.2L",cy:"8",hp:"104 kW (140 hp)",tq:"305 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~12 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,700 kg",se:"6",fc:"16.5L",fh:"11.5L",fx:"20.5L"};
const gfury_59 = {en:"360ci V8",di:"5.9L",cy:"8",hp:"119 kW (160 hp)",tq:"339 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~11 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,700 kg",se:"6",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
for (const yr of ["1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989"]) {
  specs[`${PL}|Gran Fury|${yr}|Standard`] = {...gfury, pr:"~$7,500"};
  specs[`${PL}|Gran Fury|${yr}|Salon`] = {...gfury_59, pr:"~$9,000"};
}

// --- Horizon / Reliant (1978–1990) ---
const hor_22 = {en:"2.2L Chrysler I4",di:"2.2L",cy:"4",hp:"67 kW (90 hp)",tq:"151 Nm",tx:"4-speed manual",dr:"FWD",z1:"~13 sec",ts:"~155 km/h",ft:"Petrol",wt:"1,050 kg",se:"5",ca:"350 L",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
for (const yr of ["1978","1979","1980","1981","1982","1983","1984","1985"]) {
  specs[`${PL}|Horizon|${yr}|Standard`] = {...hor_22, pr:"~$6,500"};
  specs[`${PL}|Horizon|${yr}|TC3`] = {...hor_22, pr:"~$7,500"};
}
for (const yr of ["1981","1982","1983","1984","1985","1986","1987","1988","1989","1990"]) {
  specs[`${PL}|Reliant|${yr}|E`] = {...hor_22, pr:"~$7,000"};
  specs[`${PL}|Reliant|${yr}|SE`] = {...hor_22, pr:"~$8,200"};
}

// --- Acclaim (1989–1995) ---
const acc_25 = {en:"2.5L Chrysler I4",di:"2.5L",cy:"4",hp:"89 kW (119 hp)",tq:"190 Nm",tx:"3-speed automatic",dr:"FWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,270 kg",se:"5",ca:"N/A",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
const acc_30 = {en:"3.0L Mitsubishi V6",di:"3.0L",cy:"6",hp:"104 kW (140 hp)",tq:"222 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,300 kg",se:"5",ca:"N/A",fc:"11.0L",fh:"8.0L",fx:"14.0L"};
for (const yr of ["1989","1990","1991","1992","1993","1994","1995"]) {
  specs[`${PL}|Acclaim|${yr}|Base`] = {...acc_25, pr:"~$14,000"};
  specs[`${PL}|Acclaim|${yr}|LE`] = {...acc_25, pr:"~$17,000"};
  specs[`${PL}|Acclaim|${yr}|LX`] = {...acc_30, pr:"~$20,000"};
}

// --- Prowler (1997–2002) ---
const prow = {en:"3.5L SOHC V6",di:"3.5L",cy:"6",hp:"186 kW (250 hp)",tq:"325 Nm",tx:"4-speed AutoStick auto",dr:"RWD",z1:"~6.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,360 kg",se:"2",ca:"N/A",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
for (const yr of ["1997","1999","2000","2001","2002"]) {
  specs[`${PL}|Prowler|${yr}|Standard`] = {...prow, pr:"~$49,000"};
}

// ============================================================
// De Soto (1928–1961)
// ============================================================
const DS = 'De Soto';

// --- Standard / Custom (1934–1951) ---
const des_std34 = {en:"228ci Flathead I6",di:"3.7L",cy:"6",hp:"59 kW (79 hp)",tq:"190 Nm",tx:"3-speed manual",dr:"RWD",z1:"~20 sec",ts:"~130 km/h",ft:"Petrol",wt:"1,500 kg",se:"5",fc:"16.0L",fh:"11.0L",fx:"20.0L"};
const des_std46 = {en:"236ci Flathead I6",di:"3.9L",cy:"6",hp:"75 kW (100 hp)",tq:"215 Nm",tx:"3-speed manual",dr:"RWD",z1:"~18 sec",ts:"~140 km/h",ft:"Petrol",wt:"1,550 kg",se:"5",fc:"16.0L",fh:"11.5L",fx:"20.0L"};
for (const yr of ["1934","1935","1936","1937","1938","1939","1940","1941","1942"]) {
  specs[`${DS}|Standard|${yr}|Standard`] = {...des_std34, pr:"~$1,200"};
  specs[`${DS}|Standard|${yr}|Custom`] = {...des_std34, pr:"~$1,500"};
}
for (const yr of ["1946","1947","1948","1949","1950","1951"]) {
  specs[`${DS}|Standard|${yr}|Standard`] = {...des_std46, pr:"~$1,900"};
  specs[`${DS}|Standard|${yr}|Custom`] = {...des_std46, pr:"~$2,200"};
}

// --- Firedome (1952–1959) ---
const fd_52 = {en:"276ci Hemi V8",di:"4.5L",cy:"8",hp:"102 kW (137 hp)",tq:"291 Nm",tx:"3-speed Fluid-Drive auto",dr:"RWD",z1:"~14 sec",ts:"~158 km/h",ft:"Petrol",wt:"1,750 kg",se:"5",fc:"19.0L",fh:"13.5L",fx:"24.0L"};
const fd_56 = {en:"330ci Hemi V8",di:"5.4L",cy:"8",hp:"154 kW (207 hp)",tq:"390 Nm",tx:"3-speed Powerflite auto",dr:"RWD",z1:"~12 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,750 kg",se:"5",fc:"20.0L",fh:"14.0L",fx:"25.0L"};
for (const yr of ["1952","1953","1954","1955"]) {
  specs[`${DS}|Firedome|${yr}|Standard`] = {...fd_52, pr:"~$2,800"};
  specs[`${DS}|Firedome|${yr}|Sportsman`] = {...fd_52, pr:"~$3,200"};
}
for (const yr of ["1956","1957","1958","1959"]) {
  specs[`${DS}|Firedome|${yr}|Standard`] = {...fd_56, pr:"~$3,400"};
  specs[`${DS}|Firedome|${yr}|Sportsman`] = {...fd_56, pr:"~$3,800"};
}

// --- Fireflite (1955–1959) ---
const ffl_55 = {en:"291ci Hemi V8",di:"4.8L",cy:"8",hp:"142 kW (190 hp)",tq:"339 Nm",tx:"3-speed Powerflite auto",dr:"RWD",z1:"~12.5 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,870 kg",se:"5",fc:"20.5L",fh:"14.5L",fx:"25.5L"};
const ffl_57 = {en:"341ci Hemi V8",di:"5.6L",cy:"8",hp:"172 kW (230 hp)",tq:"420 Nm",tx:"3-speed Torqueflite auto",dr:"RWD",z1:"~11.5 sec",ts:"~178 km/h",ft:"Petrol",wt:"1,870 kg",se:"5",fc:"21.0L",fh:"15.0L",fx:"26.0L"};
for (const yr of ["1955","1956"]) {
  specs[`${DS}|Fireflite|${yr}|Standard`] = {...ffl_55, pr:"~$4,000"};
  specs[`${DS}|Fireflite|${yr}|Sportsman`] = {...ffl_55, pr:"~$4,400"};
  if (yr === "1956") {
    specs[`${DS}|Fireflite|${yr}|Adventurer`] = {...ffl_55, hp:"201 kW (270 hp)", pr:"~$5,500"};
  }
}
for (const yr of ["1957","1958","1959"]) {
  specs[`${DS}|Fireflite|${yr}|Standard`] = {...ffl_57, pr:"~$4,500"};
  specs[`${DS}|Fireflite|${yr}|Sportsman`] = {...ffl_57, pr:"~$5,000"};
}

// --- Adventurer (1956–1960) ---
const adv_56 = {en:"341ci Hemi V8",di:"5.6L",cy:"8",hp:"201 kW (270 hp)",tq:"441 Nm",tx:"3-speed Powerflite auto",dr:"RWD",z1:"~11 sec",ts:"~182 km/h",ft:"Petrol",wt:"1,850 kg",se:"5",fc:"21.5L",fh:"15.5L",fx:"27.0L"};
const adv_59 = {en:"383ci RB V8",di:"6.3L",cy:"8",hp:"209 kW (280 hp)",tq:"488 Nm",tx:"3-speed Torqueflite auto",dr:"RWD",z1:"~10.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,900 kg",se:"5",fc:"22.0L",fh:"15.5L",fx:"27.5L"};
for (const yr of ["1956","1957","1958"]) {
  specs[`${DS}|Adventurer|${yr}|Hardtop`] = {...adv_56, pr:"~$5,000"};
}
for (const yr of ["1959","1960"]) {
  specs[`${DS}|Adventurer|${yr}|Hardtop`] = {...adv_59, pr:"~$5,500"};
  specs[`${DS}|Adventurer|${yr}|Convertible`] = {...adv_59, pr:"~$6,200"};
}

// ============================================================
// Studebaker (1934–1966)
// ============================================================
const ST = 'Studebaker';

// --- Champion (1939–1958) ---
const champ_39 = {en:"170ci flathead I6",di:"2.8L",cy:"6",hp:"42 kW (56 hp)",tq:"142 Nm",tx:"3-speed manual",dr:"RWD",z1:"~22 sec",ts:"~120 km/h",ft:"Petrol",wt:"1,200 kg",se:"5",fc:"11.5L",fh:"8.0L",fx:"14.5L"};
const champ_50 = {en:"170ci OHV I6",di:"2.8L",cy:"6",hp:"56 kW (75 hp)",tq:"163 Nm",tx:"3-speed manual",dr:"RWD",z1:"~19 sec",ts:"~130 km/h",ft:"Petrol",wt:"1,200 kg",se:"5",fc:"11.5L",fh:"8.2L",fx:"14.5L"};
for (const yr of ["1939","1940","1941","1942","1946","1947","1948","1949"]) {
  specs[`${ST}|Champion|${yr}|Standard`] = {...champ_39, pr:"~$1,100"};
  specs[`${ST}|Champion|${yr}|DeLuxe`] = {...champ_39, pr:"~$1,300"};
}
for (const yr of ["1950","1951","1952","1953","1954","1955","1956","1957","1958"]) {
  specs[`${ST}|Champion|${yr}|Standard`] = {...champ_50, pr:"~$1,600"};
  specs[`${ST}|Champion|${yr}|Regal`] = {...champ_50, pr:"~$1,900"};
}

// --- Commander (1940–1964) ---
const com_40 = {en:"226ci flathead I6",di:"3.7L",cy:"6",hp:"75 kW (101 hp)",tq:"210 Nm",tx:"3-speed manual",dr:"RWD",z1:"~18 sec",ts:"~132 km/h",ft:"Petrol",wt:"1,350 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
const com_51v8 = {en:"259ci OHV V8",di:"4.2L",cy:"8",hp:"104 kW (140 hp)",tq:"298 Nm",tx:"3-speed manual",dr:"RWD",z1:"~14 sec",ts:"~150 km/h",ft:"Petrol",wt:"1,360 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["1940","1941","1942","1946","1947","1948","1949","1950"]) {
  specs[`${ST}|Commander|${yr}|Standard`] = {...com_40, pr:"~$1,500"};
  specs[`${ST}|Commander|${yr}|Regal`] = {...com_40, pr:"~$1,800"};
}
for (const yr of ["1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964"]) {
  specs[`${ST}|Commander|${yr}|Standard`] = {...com_51v8, pr:"~$2,200"};
  specs[`${ST}|Commander|${yr}|Regal`] = {...com_51v8, pr:"~$2,600"};
  specs[`${ST}|Commander|${yr}|State`] = {...com_51v8, pr:"~$3,000"};
}

// --- Hawk (1956–1964) ---
specs[`${ST}|Hawk|1956|Flight Hawk`] = {en:"170ci OHV I6",di:"2.8L",cy:"6",hp:"66 kW (88 hp)",tq:"180 Nm",tx:"3-speed manual",dr:"RWD",z1:"~17 sec",ts:"~145 km/h",ft:"Petrol",wt:"1,270 kg",se:"4",fc:"11.5L",fh:"8.2L",fx:"14.5L",pr:"~$1,900"};
specs[`${ST}|Hawk|1956|Power Hawk`] = {en:"259ci OHV V8",di:"4.2L",cy:"8",hp:"114 kW (153 hp)",tq:"312 Nm",tx:"3-speed manual",dr:"RWD",z1:"~12.5 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,300 kg",se:"4",fc:"14.5L",fh:"10.5L",fx:"18.0L",pr:"~$2,200"};
specs[`${ST}|Hawk|1956|Sky Hawk`] = {en:"259ci OHV V8",di:"4.2L",cy:"8",hp:"114 kW (153 hp)",tq:"312 Nm",tx:"3-speed manual",dr:"RWD",z1:"~12.5 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,310 kg",se:"4",fc:"14.5L",fh:"10.5L",fx:"18.0L",pr:"~$2,400"};
specs[`${ST}|Hawk|1956|Golden Hawk`] = {en:"352ci supercharged V8",di:"5.8L",cy:"8",hp:"210 kW (281 hp)",tq:"488 Nm",tx:"3-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,400 kg",se:"4",fc:"18.0L",fh:"13.0L",fx:"22.5L",pr:"~$3,200"};
const silver_i6 = {en:"170ci OHV I6",di:"2.8L",cy:"6",hp:"66 kW (88 hp)",tq:"180 Nm",tx:"3-speed manual",dr:"RWD",z1:"~17 sec",ts:"~145 km/h",ft:"Petrol",wt:"1,270 kg",se:"4",fc:"11.5L",fh:"8.2L",fx:"14.5L"};
const silver_v8 = {en:"289ci OHV V8",di:"4.7L",cy:"8",hp:"114 kW (153 hp)",tq:"325 Nm",tx:"3-speed manual",dr:"RWD",z1:"~12.5 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,310 kg",se:"4",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["1957","1958","1959","1960","1961"]) {
  specs[`${ST}|Hawk|${yr}|6-cylinder`] = {...silver_i6, pr:"~$2,000"};
  specs[`${ST}|Hawk|${yr}|V8`] = {...silver_v8, pr:"~$2,400"};
}
const gt_hawk = {en:"289ci OHV V8",di:"4.7L",cy:"8",hp:"152 kW (204 hp)",tq:"366 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,320 kg",se:"4",fc:"14.5L",fh:"10.5L",fx:"18.5L"};
for (const yr of ["1962","1963","1964"]) {
  specs[`${ST}|Hawk|${yr}|Standard`] = {...gt_hawk, pr:"~$2,800"};
}

// --- Lark (1959–1966) ---
const lark_i6 = {en:"170ci OHV I6",di:"2.8L",cy:"6",hp:"66 kW (88 hp)",tq:"180 Nm",tx:"3-speed manual",dr:"RWD",z1:"~18 sec",ts:"~145 km/h",ft:"Petrol",wt:"1,250 kg",se:"5",fc:"11.5L",fh:"8.2L",fx:"14.5L"};
const lark_v8 = {en:"259ci OHV V8",di:"4.2L",cy:"8",hp:"104 kW (140 hp)",tq:"298 Nm",tx:"3-speed manual",dr:"RWD",z1:"~13 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,280 kg",se:"5",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
for (const yr of ["1959","1960","1961","1962","1963","1964","1965","1966"]) {
  specs[`${ST}|Lark|${yr}|Standard`] = {...lark_i6, pr:"~$2,000"};
  specs[`${ST}|Lark|${yr}|Regal`] = {...lark_v8, pr:"~$2,500"};
  if (parseInt(yr) >= 1961) {
    specs[`${ST}|Lark|${yr}|Daytona`] = {...lark_v8, hp:"119 kW (160 hp)", pr:"~$3,000"};
  }
}

// --- Avanti (1962–1966) ---
const avanti = {en:"289ci R2 supercharged V8",di:"4.7L",cy:"8",hp:"186 kW (250 hp)",tq:"407 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~201 km/h",ft:"Petrol",wt:"1,394 kg",se:"4",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
const avanti_r3 = {en:"289ci R3 supercharged V8",di:"4.7L",cy:"8",hp:"272 kW (365 hp)",tq:"488 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.5 sec",ts:"~215 km/h",ft:"Petrol",wt:"1,394 kg",se:"4",fc:"16.0L",fh:"11.5L",fx:"20.0L"};
for (const yr of ["1962","1963","1964","1965","1966"]) {
  specs[`${ST}|Avanti|${yr}|Standard`] = {...avanti, pr:"~$4,500"};
  specs[`${ST}|Avanti|${yr}|R2`] = {...avanti, pr:"~$5,200"};
  if (parseInt(yr) <= 1964) {
    specs[`${ST}|Avanti|${yr}|R3`] = {...avanti_r3, pr:"~$6,500"};
  }
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement96.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement96.json written — ${count} entries`);
