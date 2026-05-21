'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Buick (1936–2023)
// ============================================================
const BU = 'Buick';

// --- Special / Skylark (1954–1972) ---
const bk_spec_54 = {en:"V8 OHV",di:"3.5L",cy:"8",hp:"119 kW (160 hp)",tq:"305 Nm",tx:"3-speed manual",dr:"RWD",z1:"~12 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,430 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
const bk_spec_68 = {en:"350ci V8",di:"5.7L",cy:"8",hp:"164 kW (220 hp)",tq:"449 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~10.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,480 kg",se:"5",fc:"16.0L",fh:"11.5L",fx:"20.0L"};
const bk_gs_65 = {en:"400ci Gran Sport V8",di:"6.6L",cy:"8",hp:"268 kW (360 hp)",tq:"610 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.0 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,600 kg",se:"5",fc:"19.5L",fh:"14.0L",fx:"24.0L"};
const bk_gs_70 = {en:"455ci Gran Sport V8",di:"7.5L",cy:"8",hp:"268 kW (360 hp)",tq:"678 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.8 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,600 kg",se:"5",fc:"20.5L",fh:"14.5L",fx:"25.5L"};
for (const yr of ["1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964"]) {
  specs[`${BU}|Special|${yr}|Standard`] = {...bk_spec_54, pr:"~$2,800"};
  specs[`${BU}|Special|${yr}|Skylark`] = {...bk_spec_54, pr:"~$3,300"};
}
for (const yr of ["1965","1966","1967","1968","1969","1970","1971","1972"]) {
  specs[`${BU}|Special|${yr}|Standard`] = {...bk_spec_68, pr:"~$3,800"};
  specs[`${BU}|Special|${yr}|Skylark`] = {...bk_spec_68, pr:"~$4,200"};
  specs[`${BU}|Special|${yr}|GS`] = {...bk_gs_65, pr:"~$5,500"};
}
for (const yr of ["1970","1971","1972"]) {
  specs[`${BU}|Special|${yr}|GS Stage 1`] = {...bk_gs_70, pr:"~$6,500"};
}

// --- Riviera (1963–1999) ---
const riv_63 = {en:"401ci Nailhead V8",di:"6.6L",cy:"8",hp:"209 kW (280 hp)",tq:"569 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~9.0 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,870 kg",se:"5",fc:"19.5L",fh:"14.0L",fx:"24.0L"};
const riv_gs_63 = {...riv_63, hp:"224 kW (300 hp)", tq:"610 Nm"};
const riv_70 = {en:"455ci V8",di:"7.5L",cy:"8",hp:"254 kW (340 hp)",tq:"678 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,950 kg",se:"5",fc:"20.5L",fh:"14.5L",fx:"25.5L"};
const riv_79 = {en:"350ci V8",di:"5.7L",cy:"8",hp:"104 kW (140 hp)",tq:"305 Nm",tx:"3-speed automatic",dr:"FWD",z1:"~13 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,870 kg",se:"5",fc:"16.5L",fh:"12.0L",fx:"20.5L"};
const riv_86 = {en:"3.8L turbo V6",di:"3.8L",cy:"6",hp:"152 kW (204 hp)",tq:"339 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~9.5 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,870 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
const riv_95 = {en:"3.8L supercharged V6",di:"3.8L",cy:"6",hp:"194 kW (260 hp)",tq:"373 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~7.8 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,870 kg",se:"5",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
for (const yr of ["1963","1964","1965","1966","1967","1968","1969"]) {
  specs[`${BU}|Riviera|${yr}|Standard`] = {...riv_63, pr:"~$5,500"};
  specs[`${BU}|Riviera|${yr}|Gran Sport`] = {...riv_gs_63, pr:"~$6,200"};
}
for (const yr of ["1970","1971","1972","1973"]) {
  specs[`${BU}|Riviera|${yr}|Standard`] = {...riv_70, pr:"~$8,500"};
  specs[`${BU}|Riviera|${yr}|Gran Sport`] = {...riv_70, pr:"~$9,500"};
}
for (const yr of ["1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985"]) {
  specs[`${BU}|Riviera|${yr}|Standard`] = {...riv_79, pr:"~$12,000"};
}
for (const yr of ["1986","1987","1988","1989","1990","1991","1992","1993"]) {
  specs[`${BU}|Riviera|${yr}|Standard`] = {...riv_86, pr:"~$25,000"};
}
for (const yr of ["1994","1995","1996","1997","1998","1999"]) {
  specs[`${BU}|Riviera|${yr}|Standard`] = {...riv_95, pr:"~$42,000"};
}

// --- Electra / LeSabre (1959–2000) ---
const bk_el_59 = {en:"364ci Nailhead V8",di:"6.0L",cy:"8",hp:"209 kW (280 hp)",tq:"542 Nm",tx:"3-speed Dynaflow auto",dr:"RWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,950 kg",se:"6",fc:"20.5L",fh:"14.5L",fx:"25.5L"};
const bk_el_67 = {en:"430ci V8",di:"7.0L",cy:"8",hp:"231 kW (310 hp)",tq:"610 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"~10.5 sec",ts:"~178 km/h",ft:"Petrol",wt:"2,000 kg",se:"6",fc:"21.5L",fh:"15.5L",fx:"26.5L"};
const bk_el_75 = {en:"455ci V8",di:"7.5L",cy:"8",hp:"142 kW (190 hp)",tq:"542 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"~12 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,900 kg",se:"6",fc:"20.0L",fh:"14.5L",fx:"25.0L"};
const bk_el_85 = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"112 kW (150 hp)",tq:"271 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~11 sec",ts:"~172 km/h",ft:"Petrol",wt:"1,600 kg",se:"6",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
const bk_el_00 = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"152 kW (205 hp)",tq:"325 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,600 kg",se:"6",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
for (const yr of ["1959","1960","1961","1962","1963","1964","1965","1966"]) {
  specs[`${BU}|LeSabre|${yr}|Standard`] = {...bk_el_59, pr:"~$3,800"};
  specs[`${BU}|Electra|${yr}|Standard`] = {...bk_el_59, pr:"~$4,500"};
  specs[`${BU}|Electra|${yr}|Limited`] = {...bk_el_59, pr:"~$5,200"};
}
for (const yr of ["1967","1968","1969","1970","1971","1972","1973","1974"]) {
  specs[`${BU}|LeSabre|${yr}|Standard`] = {...bk_el_67, pr:"~$5,000"};
  specs[`${BU}|Electra|${yr}|Standard`] = {...bk_el_67, pr:"~$6,000"};
  specs[`${BU}|Electra|${yr}|Limited`] = {...bk_el_67, pr:"~$6,800"};
}
for (const yr of ["1975","1976","1977","1978","1979","1980","1981","1982","1983","1984"]) {
  specs[`${BU}|LeSabre|${yr}|Standard`] = {...bk_el_75, pr:"~$9,000"};
  specs[`${BU}|Electra|${yr}|Standard`] = {...bk_el_75, pr:"~$10,500"};
  specs[`${BU}|Electra|${yr}|Park Avenue`] = {...bk_el_75, pr:"~$12,000"};
}
for (const yr of ["1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000"]) {
  specs[`${BU}|LeSabre|${yr}|Standard`] = {...bk_el_85, pr:"~$22,000"};
  specs[`${BU}|LeSabre|${yr}|Limited`] = {...bk_el_00, pr:"~$28,000"};
  specs[`${BU}|Electra|${yr}|Park Avenue`] = {...bk_el_85, pr:"~$32,000"};
}

// --- Century (1973–2005) ---
const cen_73 = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"104 kW (140 hp)",tq:"251 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~12 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,550 kg",se:"5",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
const cen_82 = {en:"3.1L V6",di:"3.1L",cy:"6",hp:"104 kW (140 hp)",tq:"244 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~11.5 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,500 kg",se:"5",ca:"380 L",fc:"11.5L",fh:"8.5L",fx:"14.5L"};
for (const yr of ["1973","1974","1975","1976","1977","1978","1979","1980","1981"]) {
  specs[`${BU}|Century|${yr}|Standard`] = {...cen_73, pr:"~$5,000"};
  specs[`${BU}|Century|${yr}|Custom`] = {...cen_73, pr:"~$5,500"};
  specs[`${BU}|Century|${yr}|Limited`] = {...cen_73, pr:"~$6,200"};
}
for (const yr of ["1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005"]) {
  specs[`${BU}|Century|${yr}|Standard`] = {...cen_82, pr:"~$18,000"};
  specs[`${BU}|Century|${yr}|Custom`] = {...cen_82, pr:"~$20,000"};
  specs[`${BU}|Century|${yr}|Limited`] = {...cen_82, pr:"~$22,000"};
}

// --- Regal ---
const reg_73 = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"104 kW (140 hp)",tq:"251 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~12 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,500 kg",se:"5",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
const reg_ttype = {en:"3.8L turbo V6",di:"3.8L",cy:"6",hp:"152 kW (204 hp)",tq:"339 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,500 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
const reg_gn = {en:"3.8L turbo V6",di:"3.8L",cy:"6",hp:"197 kW (265 hp)",tq:"461 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~6.5 sec",ts:"~215 km/h",ft:"Petrol",wt:"1,570 kg",se:"5",fc:"15.0L",fh:"11.0L",fx:"19.0L"};
const reg_gnx = {en:"3.8L turbo V6 (stage II)",di:"3.8L",cy:"6",hp:"245 kW (328 hp)",tq:"569 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~4.7 sec",ts:"~245 km/h",ft:"Petrol",wt:"1,590 kg",se:"5",fc:"16.0L",fh:"11.5L",fx:"20.0L"};
const reg_97 = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"152 kW (204 hp)",tq:"305 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~9.5 sec",ts:"~190 km/h",ft:"Petrol",wt:"1,500 kg",se:"5",ca:"380 L",fc:"12.5L",fh:"9.0L",fx:"16.0L"};
const reg_11 = {en:"2.0L Ecotec turbo I4",di:"2.0L",cy:"4",hp:"191 kW (256 hp)",tq:"353 Nm",tx:"6-speed automatic",dr:"FWD",z1:"~7.0 sec",ts:"~220 km/h",ft:"Petrol",wt:"1,570 kg",se:"5",ca:"380 L",fc:"10.5L",fh:"7.5L",fx:"13.5L"};
for (const yr of ["1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983"]) {
  specs[`${BU}|Regal|${yr}|Standard`] = {...reg_73, pr:"~$5,500"};
}
for (const yr of ["1984","1985","1986","1987"]) {
  specs[`${BU}|Regal|${yr}|Standard`] = {...reg_73, pr:"~$14,000"};
  specs[`${BU}|Regal|${yr}|T-Type`] = {...reg_ttype, pr:"~$18,000"};
  specs[`${BU}|Regal|${yr}|Grand National`] = {...reg_gn, pr:"~$22,000"};
  if (yr === "1987") {
    specs[`${BU}|Regal|${yr}|GNX`] = {...reg_gnx, pr:"~$30,000"};
  }
}
for (const yr of ["1988","1989","1990","1991","1992","1993","1994","1995","1996"]) {
  specs[`${BU}|Regal|${yr}|Standard`] = {...reg_73, pr:"~$16,000"};
}
for (const yr of ["1997","1998","1999","2000","2001","2002","2003","2004"]) {
  specs[`${BU}|Regal|${yr}|LS`] = {...reg_97, pr:"~$28,000"};
  specs[`${BU}|Regal|${yr}|GS`] = {...reg_97, hp:"194 kW (260 hp)", pr:"~$34,000"};
}
for (const yr of ["2011","2012","2013","2014","2015","2016","2017"]) {
  specs[`${BU}|Regal|${yr}|Standard`] = {...reg_11, pr:"~$38,000"};
  specs[`${BU}|Regal|${yr}|GS`] = {...reg_11, pr:"~$48,000"};
}

// --- Park Avenue (1991–2005) ---
const pa_std = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"152 kW (204 hp)",tq:"305 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~9.5 sec",ts:"~188 km/h",ft:"Petrol",wt:"1,630 kg",se:"5",ca:"N/A",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
const pa_ultra = {en:"3.8L supercharged V6",di:"3.8L",cy:"6",hp:"194 kW (260 hp)",tq:"373 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~8.0 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,640 kg",se:"5",ca:"N/A",fc:"13.5L",fh:"9.8L",fx:"17.0L"};
for (const yr of ["1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005"]) {
  specs[`${BU}|Park Avenue|${yr}|Standard`] = {...pa_std, pr:"~$38,000"};
  specs[`${BU}|Park Avenue|${yr}|Ultra`] = {...pa_ultra, pr:"~$48,000"};
}

// --- Enclave (2008–2026) ---
const enc_36 = {en:"3.6L DOHC V6",di:"3.6L",cy:"6",hp:"228 kW (306 hp)",tq:"366 Nm",tx:"6-speed automatic",dr:"AWD",z1:"~8.5 sec",ts:"~195 km/h",ft:"Petrol",wt:"2,100 kg",se:"7",ca:"N/A",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
for (const yr of ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  const pr = parseInt(yr) >= 2018 ? "~$72,000" : "~$55,000";
  specs[`${BU}|Enclave|${yr}|CX`] = {...enc_36, pr};
  specs[`${BU}|Enclave|${yr}|CXL`] = {...enc_36, pr:"~$62,000"};
  specs[`${BU}|Enclave|${yr}|Premium`] = {...enc_36, pr:"~$72,000"};
  specs[`${BU}|Enclave|${yr}|Avenir`] = {...enc_36, pr:"~$82,000"};
}

// --- Envision (2016–2026) ---
const env_20t = {en:"2.0L turbo I4",di:"2.0L",cy:"4",hp:"170 kW (228 hp)",tq:"353 Nm",tx:"6-speed automatic",dr:"AWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,750 kg",se:"5",ca:"N/A",fc:"10.5L",fh:"7.5L",fx:"13.5L"};
for (const yr of ["2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${BU}|Envision|${yr}|Standard`] = {...env_20t, pr:"~$42,000"};
  specs[`${BU}|Envision|${yr}|Essence`] = {...env_20t, pr:"~$48,000"};
  specs[`${BU}|Envision|${yr}|Premium`] = {...env_20t, pr:"~$55,000"};
  specs[`${BU}|Envision|${yr}|Avenir`] = {...env_20t, pr:"~$62,000"};
}

// --- Encore (2012–2026) ---
const encore_14t = {en:"1.4L turbocharged I4",di:"1.4L",cy:"4",hp:"103 kW (138 hp)",tq:"200 Nm",tx:"6-speed automatic",dr:"FWD",z1:"~11 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,342 kg",se:"5",ca:"532 L",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
for (const yr of ["2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${BU}|Encore|${yr}|Convenience`] = {...encore_14t, pr:"~$28,000"};
  specs[`${BU}|Encore|${yr}|Leather`] = {...encore_14t, pr:"~$32,000"};
  specs[`${BU}|Encore|${yr}|Sport Touring`] = {...encore_14t, pr:"~$36,000"};
}

// ============================================================
// Mercury (1939–2011)
// ============================================================
const ME = 'Mercury';

// --- Series (1939–1950) ---
const merc_39 = {en:"239ci Flathead V8",di:"3.9L",cy:"8",hp:"67 kW (95 hp)",tq:"231 Nm",tx:"3-speed manual",dr:"RWD",z1:"~18 sec",ts:"~145 km/h",ft:"Petrol",wt:"1,420 kg",se:"5",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
for (const yr of ["1939","1940","1941","1942","1946","1947","1948","1949","1950"]) {
  specs[`${ME}|Series|${yr}|Standard`] = {...merc_39, pr:"~$1,500"};
  specs[`${ME}|Series|${yr}|Convertible`] = {...merc_39, pr:"~$1,800"};
}

// --- Monterey (1950–1974) ---
const mont_50 = {en:"255ci Flathead V8",di:"4.2L",cy:"8",hp:"100 kW (134 hp)",tq:"291 Nm",tx:"3-speed manual",dr:"RWD",z1:"~16 sec",ts:"~155 km/h",ft:"Petrol",wt:"1,650 kg",se:"5",fc:"18.5L",fh:"13.0L",fx:"23.0L"};
const mont_57 = {en:"312ci MEL V8",di:"5.1L",cy:"8",hp:"149 kW (200 hp)",tq:"391 Nm",tx:"3-speed Merc-O-Matic auto",dr:"RWD",z1:"~13 sec",ts:"~170 km/h",ft:"Petrol",wt:"1,800 kg",se:"5",fc:"19.5L",fh:"14.0L",fx:"24.0L"};
const mont_65 = {en:"390ci FE V8",di:"6.4L",cy:"8",hp:"194 kW (260 hp)",tq:"542 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~11 sec",ts:"~178 km/h",ft:"Petrol",wt:"1,900 kg",se:"6",fc:"21.0L",fh:"15.0L",fx:"26.0L"};
for (const yr of ["1950","1951","1952","1953","1954","1955","1956"]) {
  specs[`${ME}|Monterey|${yr}|Standard`] = {...mont_50, pr:"~$2,200"};
  specs[`${ME}|Monterey|${yr}|Convertible`] = {...mont_50, pr:"~$2,700"};
}
for (const yr of ["1957","1958","1959","1960","1961","1962","1963","1964"]) {
  specs[`${ME}|Monterey|${yr}|Standard`] = {...mont_57, pr:"~$3,000"};
  specs[`${ME}|Monterey|${yr}|Convertible`] = {...mont_57, pr:"~$3,500"};
  if (parseInt(yr) >= 1961 && parseInt(yr) <= 1964) {
    specs[`${ME}|Monterey|${yr}|S-55`] = {...mont_57, hp:"224 kW (300 hp)", pr:"~$4,200"};
  }
}
for (const yr of ["1965","1966","1967","1968","1969","1970","1971","1972","1973","1974"]) {
  specs[`${ME}|Monterey|${yr}|Standard`] = {...mont_65, pr:"~$4,500"};
}

// --- Cougar (1967–1997) ---
const cou_67 = {en:"302ci V8",di:"4.9L",cy:"8",hp:"149 kW (200 hp)",tq:"366 Nm",tx:"4-speed manual",dr:"RWD",z1:"~9.5 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,430 kg",se:"4",fc:"17.0L",fh:"12.0L",fx:"21.0L"};
const cou_67_xr7 = {...cou_67, hp:"164 kW (220 hp)"};
const cou_67_gt = {en:"390ci GT V8",di:"6.4L",cy:"8",hp:"246 kW (330 hp)",tq:"576 Nm",tx:"4-speed manual",dr:"RWD",z1:"~7.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,450 kg",se:"4",fc:"19.5L",fh:"14.0L",fx:"24.5L"};
const cou_67_elim = {en:"428ci Cobra Jet V8",di:"7.0L",cy:"8",hp:"280 kW (375 hp)",tq:"644 Nm",tx:"4-speed manual",dr:"RWD",z1:"~6.5 sec",ts:"~215 km/h",ft:"Petrol",wt:"1,480 kg",se:"4",fc:"21.0L",fh:"15.0L",fx:"26.0L"};
const cou_71 = {en:"400ci V8",di:"6.6L",cy:"8",hp:"149 kW (200 hp)",tq:"488 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,600 kg",se:"4",fc:"19.0L",fh:"13.5L",fx:"23.5L"};
const cou_80 = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"93 kW (125 hp)",tq:"271 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~13 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,400 kg",se:"4",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
const cou_88 = {en:"5.0L HO V8",di:"5.0L",cy:"8",hp:"171 kW (230 hp)",tq:"381 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~8.5 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,400 kg",se:"4",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
for (const yr of ["1967","1968"]) {
  specs[`${ME}|Cougar|${yr}|Standard`] = {...cou_67, pr:"~$3,200"};
  specs[`${ME}|Cougar|${yr}|XR-7`] = {...cou_67_xr7, pr:"~$3,700"};
  specs[`${ME}|Cougar|${yr}|GT`] = {...cou_67_gt, pr:"~$4,200"};
}
for (const yr of ["1969","1970"]) {
  specs[`${ME}|Cougar|${yr}|Standard`] = {...cou_67, pr:"~$3,500"};
  specs[`${ME}|Cougar|${yr}|XR-7`] = {...cou_67_xr7, pr:"~$4,000"};
  specs[`${ME}|Cougar|${yr}|Eliminator`] = {...cou_67_elim, pr:"~$5,200"};
}
for (const yr of ["1971","1972","1973","1974","1975","1976","1977","1978","1979"]) {
  specs[`${ME}|Cougar|${yr}|Standard`] = {...cou_71, pr:"~$5,500"};
  specs[`${ME}|Cougar|${yr}|XR-7`] = {...cou_71, pr:"~$6,500"};
}
for (const yr of ["1980","1981","1982","1983","1984","1985","1986","1987"]) {
  specs[`${ME}|Cougar|${yr}|Standard`] = {...cou_80, pr:"~$10,000"};
  specs[`${ME}|Cougar|${yr}|XR-7`] = {...cou_80, pr:"~$12,000"};
}
for (const yr of ["1988","1989","1990","1991","1992","1993","1994","1995","1996","1997"]) {
  specs[`${ME}|Cougar|${yr}|Standard`] = {...cou_88, pr:"~$18,000"};
  specs[`${ME}|Cougar|${yr}|XR-7`] = {...cou_88, pr:"~$21,000"};
}

// --- Grand Marquis (1975–2011) ---
const gm_50 = {en:"302ci V8",di:"5.0L",cy:"8",hp:"104 kW (140 hp)",tq:"339 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~12 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,823 kg",se:"6",fc:"16.5L",fh:"11.5L",fx:"20.5L"};
const gm_91 = {en:"4.6L SOHC V8",di:"4.6L",cy:"8",hp:"160 kW (215 hp)",tq:"373 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~10.5 sec",ts:"~180 km/h",ft:"Petrol",wt:"1,823 kg",se:"6",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
for (const yr of ["1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990"]) {
  specs[`${ME}|Grand Marquis|${yr}|Standard`] = {...gm_50, pr:"~$8,500"};
  specs[`${ME}|Grand Marquis|${yr}|LS`] = {...gm_50, pr:"~$10,000"};
}
for (const yr of ["1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"]) {
  specs[`${ME}|Grand Marquis|${yr}|Standard`] = {...gm_91, pr:"~$30,000"};
  specs[`${ME}|Grand Marquis|${yr}|LS`] = {...gm_91, pr:"~$34,000"};
  specs[`${ME}|Grand Marquis|${yr}|Ultimate`] = {...gm_91, pr:"~$38,000"};
}

// --- Marquis (1969–1986) ---
const marq_69 = {en:"429ci V8",di:"7.0L",cy:"8",hp:"224 kW (300 hp)",tq:"610 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"2,000 kg",se:"6",fc:"21.5L",fh:"15.5L",fx:"26.5L"};
const marq_75 = {en:"302ci V8",di:"5.0L",cy:"8",hp:"104 kW (140 hp)",tq:"339 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~12 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,950 kg",se:"6",fc:"16.5L",fh:"11.5L",fx:"20.5L"};
for (const yr of ["1969","1970","1971","1972","1973","1974"]) {
  specs[`${ME}|Marquis|${yr}|Standard`] = {...marq_69, pr:"~$5,000"};
  specs[`${ME}|Marquis|${yr}|Brougham`] = {...marq_69, pr:"~$6,000"};
}
for (const yr of ["1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986"]) {
  specs[`${ME}|Marquis|${yr}|Standard`] = {...marq_75, pr:"~$8,500"};
  specs[`${ME}|Marquis|${yr}|Brougham`] = {...marq_75, pr:"~$10,000"};
}

// --- Capri (1970–1977 import, 1979–86) ---
const cap_16 = {en:"1.6L Kent I4",di:"1.6L",cy:"4",hp:"54 kW (73 hp)",tq:"118 Nm",tx:"4-speed manual",dr:"RWD",z1:"~14 sec",ts:"~155 km/h",ft:"Petrol",wt:"970 kg",se:"4",fc:"9.5L",fh:"7.0L",fx:"11.5L"};
const cap_v6 = {en:"2.8L Cologne V6",di:"2.8L",cy:"6",hp:"93 kW (125 hp)",tq:"206 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,020 kg",se:"4",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
for (const yr of ["1970","1971","1972","1973","1974","1975","1976","1977"]) {
  specs[`${ME}|Capri|${yr}|Standard`] = {...cap_16, pr:"~$2,800"};
  specs[`${ME}|Capri|${yr}|V6`] = {...cap_v6, pr:"~$3,500"};
}
for (const yr of ["1979","1980","1981","1982","1983","1984","1985","1986"]) {
  specs[`${ME}|Capri|${yr}|Standard`] = {...cap_16, pr:"~$7,500"};
  specs[`${ME}|Capri|${yr}|V6`] = {...cap_v6, pr:"~$9,500"};
}

// --- Villager (1993–2002) ---
const vil = {en:"3.0L Vulcan V6",di:"3.0L",cy:"6",hp:"112 kW (151 hp)",tq:"224 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~11 sec",ts:"~178 km/h",ft:"Petrol",wt:"1,875 kg",se:"7",ca:"N/A",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
for (const yr of ["1993","1994","1995","1996","1997","1998","1999","2000","2001","2002"]) {
  specs[`${ME}|Villager|${yr}|Standard`] = {...vil, pr:"~$24,000"};
  specs[`${ME}|Villager|${yr}|GS`] = {...vil, pr:"~$27,000"};
  specs[`${ME}|Villager|${yr}|LS`] = {...vil, pr:"~$30,000"};
  specs[`${ME}|Villager|${yr}|Estate`] = {...vil, pr:"~$32,000"};
}

// --- Sable (1986–2005) ---
const sab_30 = {en:"3.0L Vulcan V6",di:"3.0L",cy:"6",hp:"110 kW (148 hp)",tq:"230 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~10.5 sec",ts:"~182 km/h",ft:"Petrol",wt:"1,453 kg",se:"5",ca:"N/A",fc:"11.5L",fh:"8.5L",fx:"14.5L"};
const sab_38 = {en:"3.8L Essex V6",di:"3.8L",cy:"6",hp:"141 kW (189 hp)",tq:"298 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~9.0 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,453 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
for (const yr of ["1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005"]) {
  specs[`${ME}|Sable|${yr}|GS`] = {...sab_30, pr:"~$22,000"};
  specs[`${ME}|Sable|${yr}|LS`] = {...sab_38, pr:"~$27,000"};
}

// --- Mystique (1995–2000) ---
const myst_20 = {en:"2.0L Zetec DOHC I4",di:"2.0L",cy:"4",hp:"93 kW (125 hp)",tq:"175 Nm",tx:"5-speed manual",dr:"FWD",z1:"~10 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,280 kg",se:"5",ca:"N/A",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
const myst_25 = {en:"2.5L Duratec DOHC V6",di:"2.5L",cy:"6",hp:"125 kW (168 hp)",tq:"224 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,310 kg",se:"5",ca:"N/A",fc:"11.5L",fh:"8.5L",fx:"14.0L"};
for (const yr of ["1995","1996","1997","1998","1999","2000"]) {
  specs[`${ME}|Mystique|${yr}|GS`] = {...myst_20, pr:"~$20,000"};
  specs[`${ME}|Mystique|${yr}|LS`] = {...myst_25, pr:"~$25,000"};
}

// --- Milan (2006–2010) ---
const mil_23 = {en:"2.3L Duratec I4",di:"2.3L",cy:"4",hp:"118 kW (158 hp)",tq:"203 Nm",tx:"5-speed manual",dr:"FWD",z1:"~10 sec",ts:"~190 km/h",ft:"Petrol",wt:"1,505 kg",se:"5",ca:"N/A",fc:"10.0L",fh:"7.5L",fx:"12.5L"};
const mil_30 = {en:"3.0L Duratec V6",di:"3.0L",cy:"6",hp:"149 kW (200 hp)",tq:"271 Nm",tx:"6-speed automatic",dr:"FWD",z1:"~8.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,550 kg",se:"5",ca:"N/A",fc:"12.0L",fh:"8.8L",fx:"15.0L"};
const mil_hyb = {en:"2.5L Atkinson I4 Hybrid",di:"2.5L",cy:"4",hp:"99 kW (133 hp)",tq:"136 Nm",tx:"CVT",dr:"FWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,620 kg",se:"5",ca:"N/A",fc:"5.9L",fh:"5.4L",fx:"6.4L"};
for (const yr of ["2006","2007","2008","2009","2010"]) {
  specs[`${ME}|Milan|${yr}|Base`] = {...mil_23, pr:"~$22,000"};
  specs[`${ME}|Milan|${yr}|Premier`] = {...mil_30, pr:"~$28,000"};
  specs[`${ME}|Milan|${yr}|Hybrid`] = {...mil_hyb, pr:"~$30,000"};
}

// --- Montego (2005–2007) ---
const montego = {en:"3.0L Duratec V6",di:"3.0L",cy:"6",hp:"149 kW (200 hp)",tq:"271 Nm",tx:"6-speed automatic",dr:"AWD",z1:"~9.5 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,710 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.0L",fx:"16.0L"};
for (const yr of ["2005","2006","2007"]) {
  specs[`${ME}|Montego|${yr}|Luxury`] = {...montego, pr:"~$28,000"};
  specs[`${ME}|Montego|${yr}|Premier`] = {...montego, pr:"~$33,000"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement95.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement95.json written — ${count} entries`);
