'use strict';
const fs = require('fs');

const specs = {};
const M = 'Mini';

// ============================================================
// CLASSIC MINI (BMC/BL/Rover era 1959–2000)
// ============================================================

// Mini (1959–1967) — Original 848cc
const mini848 = {en:"BMC A-series 848cc I4",di:"0.8L",cy:"4",hp:"25 kW (34 hp)",tq:"60 Nm",tx:"4-speed manual",dr:"FWD",z1:"~27 sec",ts:"~115 km/h",ft:"Petrol",wt:"617 kg",se:"4",fc:"7.8L",fh:"6.0L",fx:"9.5L"};
for (const yr of ["1959","1960","1961","1962","1963","1964","1965","1966","1967"]) {
  specs[`${M}|Mini|${yr}|Standard`] = {...mini848, pr:"~$1,495"};
}

// Mini 1000 (1969–1980) — 998cc
const mini1000base = {en:"BMC A-series 998cc I4",di:"1.0L",cy:"4",hp:"33 kW (45 hp)",tq:"69 Nm",tx:"4-speed manual",dr:"FWD",z1:"~18 sec",ts:"~130 km/h",ft:"Petrol",wt:"635 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.0L"};
for (const yr of ["1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${M}|Mini 1000|${yr}|Standard`] = {...mini1000base, pr:"~$1,995"};
  specs[`${M}|Mini 1000|${yr}|Special`] = {...mini1000base, pr:"~$2,195"};
}

// Mini Clubman (1969–1980)
const clubman998 = {en:"BMC A-series 998cc I4",di:"1.0L",cy:"4",hp:"33 kW (45 hp)",tq:"69 Nm",tx:"4-speed manual",dr:"FWD",z1:"~18 sec",ts:"~130 km/h",ft:"Petrol",wt:"660 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.0L"};
const clubman1098 = {en:"BMC A-series 1098cc I4",di:"1.1L",cy:"4",hp:"39 kW (53 hp)",tq:"84 Nm",tx:"4-speed manual",dr:"FWD",z1:"~16 sec",ts:"~137 km/h",ft:"Petrol",wt:"670 kg",se:"4",fc:"7.8L",fh:"6.0L",fx:"9.5L"};
for (const yr of ["1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${M}|Mini Clubman|${yr}|Saloon`] = {...clubman998, pr:"~$2,195"};
  specs[`${M}|Mini Clubman|${yr}|Estate`] = {...clubman998, wt:"690 kg", pr:"~$2,395"};
  specs[`${M}|Mini Clubman|${yr}|1100 Special`] = {...clubman1098, pr:"~$2,495"};
}

// Mini Cooper (1961–1971)
const cooperMk1 = {en:"BMC A-series 997cc I4",di:"1.0L",cy:"4",hp:"37 kW (50 hp)",tq:"72 Nm",tx:"4-speed manual",dr:"FWD",z1:"~14 sec",ts:"~145 km/h",ft:"Petrol",wt:"617 kg",se:"4",fc:"8.0L",fh:"6.2L",fx:"9.8L"};
for (const yr of ["1961","1962","1963","1964","1965","1966","1967"]) {
  specs[`${M}|Mini Cooper|${yr}|Mk1`] = {...cooperMk1, pr:"~$1,895"};
}
const cooperMk2 = {en:"BMC A-series 998cc I4",di:"1.0L",cy:"4",hp:"38 kW (51 hp)",tq:"74 Nm",tx:"4-speed manual",dr:"FWD",z1:"~14 sec",ts:"~145 km/h",ft:"Petrol",wt:"617 kg",se:"4",fc:"8.0L",fh:"6.2L",fx:"9.8L"};
for (const yr of ["1967","1968","1969"]) {
  specs[`${M}|Mini Cooper|${yr}|Mk2`] = {...cooperMk2, pr:"~$1,950"};
}
const cooperMk3 = {en:"BMC A-series 998cc I4",di:"1.0L",cy:"4",hp:"40 kW (53 hp)",tq:"76 Nm",tx:"4-speed manual",dr:"FWD",z1:"~13 sec",ts:"~148 km/h",ft:"Petrol",wt:"620 kg",se:"4",fc:"8.0L",fh:"6.2L",fx:"9.8L"};
for (const yr of ["1969","1970","1971"]) {
  specs[`${M}|Mini Cooper|${yr}|Mk3`] = {...cooperMk3, pr:"~$2,050"};
}

// Mini Cooper S (1963–1971)
const coopS970 = {en:"BMC A-series 970cc I4",di:"1.0L",cy:"4",hp:"55 kW (74 hp)",tq:"95 Nm",tx:"4-speed manual",dr:"FWD",z1:"~12 sec",ts:"~155 km/h",ft:"Petrol",wt:"617 kg",se:"4",fc:"8.5L",fh:"6.5L",fx:"10.0L"};
specs[`${M}|Mini Cooper S|1964|970S`] = {...coopS970, pr:"~$2,195"};
const coopS1071 = {en:"BMC A-series 1071cc I4",di:"1.1L",cy:"4",hp:"58 kW (78 hp)",tq:"100 Nm",tx:"4-speed manual",dr:"FWD",z1:"~11 sec",ts:"~160 km/h",ft:"Petrol",wt:"617 kg",se:"4",fc:"8.5L",fh:"6.5L",fx:"10.0L"};
for (const yr of ["1963","1964"]) {
  specs[`${M}|Mini Cooper S|${yr}|1071S`] = {...coopS1071, pr:"~$2,250"};
}
const coopS1275mk1 = {en:"BMC A-series 1275cc I4",di:"1.3L",cy:"4",hp:"65 kW (87 hp)",tq:"108 Nm",tx:"4-speed manual",dr:"FWD",z1:"~10.5 sec",ts:"~165 km/h",ft:"Petrol",wt:"631 kg",se:"4",fc:"8.8L",fh:"6.8L",fx:"10.5L"};
for (const yr of ["1964","1965","1966","1967"]) {
  specs[`${M}|Mini Cooper S|${yr}|1275S Mk1`] = {...coopS1275mk1, pr:"~$2,395"};
}
const coopS1275mk2 = {...coopS1275mk1};
for (const yr of ["1967","1968","1969"]) {
  specs[`${M}|Mini Cooper S|${yr}|1275S Mk2`] = {...coopS1275mk2, pr:"~$2,495"};
}
const coopS1275mk3 = {...coopS1275mk1};
for (const yr of ["1969","1970","1971"]) {
  specs[`${M}|Mini Cooper S|${yr}|1275S Mk3`] = {...coopS1275mk3, pr:"~$2,595"};
}

// Mini 1275 GT (1969–1980)
const mini1275gt = {en:"BMC A-series 1275cc I4",di:"1.3L",cy:"4",hp:"47 kW (63 hp)",tq:"92 Nm",tx:"4-speed manual",dr:"FWD",z1:"~12.5 sec",ts:"~152 km/h",ft:"Petrol",wt:"660 kg",se:"4",fc:"8.2L",fh:"6.2L",fx:"9.8L"};
for (const yr of ["1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980"]) {
  specs[`${M}|Mini 1275 GT|${yr}|Standard`] = {...mini1275gt, pr:"~$2,495"};
}

// Mini Rover era (1984–2000)
const miniCity = {en:"Rover A-series 998cc I4",di:"1.0L",cy:"4",hp:"30 kW (41 hp)",tq:"67 Nm",tx:"4-speed manual",dr:"FWD",z1:"~18 sec",ts:"~125 km/h",ft:"Petrol",wt:"630 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.0L"};
const miniMayfair = {en:"Rover A-series 998cc I4",di:"1.0L",cy:"4",hp:"33 kW (44 hp)",tq:"70 Nm",tx:"4-speed manual",dr:"FWD",z1:"~17 sec",ts:"~130 km/h",ft:"Petrol",wt:"635 kg",se:"4",fc:"7.5L",fh:"5.8L",fx:"9.0L"};
const miniCooper90 = {en:"Rover A-series 1275cc I4",di:"1.3L",cy:"4",hp:"55 kW (73 hp)",tq:"98 Nm",tx:"4-speed manual",dr:"FWD",z1:"~10.8 sec",ts:"~160 km/h",ft:"Petrol",wt:"660 kg",se:"4",fc:"8.0L",fh:"6.0L",fx:"9.5L"};
for (const yr of ["1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000"]) {
  specs[`${M}|Mini|${yr}|City`] = {...miniCity, pr:"~$12,000"};
  specs[`${M}|Mini|${yr}|Mayfair`] = {...miniMayfair, pr:"~$14,500"};
  if (parseInt(yr) >= 1990) {
    specs[`${M}|Mini|${yr}|Cooper`] = {...miniCooper90, pr:"~$18,000"};
  }
}

// ============================================================
// BMW MINI R50/R53 (2001–2006)
// ============================================================
const r50one = {en:"1.6L SOHC I4",di:"1.6L",cy:"4",hp:"66 kW (90 hp)",tq:"140 Nm",tx:"5-speed manual",dr:"FWD",z1:"~12.2 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,090 kg",se:"4",ca:"150 L",fc:"7.4L",fh:"5.5L",fx:"9.2L"};
const r50coop = {en:"1.6L SOHC I4",di:"1.6L",cy:"4",hp:"85 kW (115 hp)",tq:"150 Nm",tx:"5-speed manual",dr:"FWD",z1:"~9.2 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,100 kg",se:"4",ca:"150 L",fc:"7.6L",fh:"5.5L",fx:"9.2L"};
const r53coopers = {en:"1.6L Supercharged DOHC I4",di:"1.6L",cy:"4",hp:"120 kW (163 hp)",tq:"220 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.4 sec",ts:"~218 km/h",ft:"Petrol",wt:"1,140 kg",se:"4",ca:"150 L",fc:"8.5L",fh:"6.0L",fx:"10.2L"};
const r50cooperd = {en:"1.4L DV4 diesel I4",di:"1.4L",cy:"4",hp:"55 kW (75 hp)",tq:"180 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13.5 sec",ts:"~168 km/h",ft:"Diesel",wt:"1,110 kg",se:"4",ca:"150 L",fc:"4.8L",fh:"4.1L",fx:"5.9L"};
for (const yr of ["2001","2002","2003","2004","2005","2006"]) {
  specs[`${M}|Hatch|${yr}|One`] = {...r50one, pr:"~$28,990"};
  specs[`${M}|Hatch|${yr}|Cooper`] = {...r50coop, pr:"~$33,990"};
  specs[`${M}|Hatch|${yr}|Cooper S`] = {...r53coopers, pr:"~$41,990"};
  if (parseInt(yr) >= 2003) {
    specs[`${M}|Hatch|${yr}|Cooper D`] = {...r50cooperd, pr:"~$35,990"};
  }
}

// R52 Convertible (2004–2008)
const r52one = {...r50one, wt:"1,150 kg"};
const r52coop = {...r50coop, wt:"1,160 kg"};
const r52coopers = {...r53coopers, wt:"1,200 kg"};
for (const yr of ["2004","2005","2006","2007","2008"]) {
  specs[`${M}|Convertible|${yr}|One`] = {...r52one, pr:"~$35,990"};
  specs[`${M}|Convertible|${yr}|Cooper`] = {...r52coop, pr:"~$39,990"};
  specs[`${M}|Convertible|${yr}|Cooper S`] = {...r52coopers, pr:"~$48,990"};
}

// ============================================================
// BMW MINI R56 Hatch (2007–2013)
// ============================================================
const r56one = {en:"1.4L N12 I4",di:"1.4L",cy:"4",hp:"70 kW (95 hp)",tq:"130 Nm",tx:"6-speed manual",dr:"FWD",z1:"~11.8 sec",ts:"~178 km/h",ft:"Petrol",wt:"1,090 kg",se:"4",ca:"160 L",fc:"6.8L",fh:"4.9L",fx:"8.5L"};
const r56coop = {en:"1.6L N16 I4",di:"1.6L",cy:"4",hp:"88 kW (120 hp)",tq:"160 Nm",tx:"6-speed manual",dr:"FWD",z1:"~9.1 sec",ts:"~198 km/h",ft:"Petrol",wt:"1,100 kg",se:"4",ca:"160 L",fc:"7.1L",fh:"5.1L",fx:"8.9L"};
const r56coopers = {en:"1.6L N14 Turbo I4",di:"1.6L",cy:"4",hp:"128 kW (175 hp)",tq:"240 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.2 sec",ts:"~225 km/h",ft:"Petrol",wt:"1,150 kg",se:"4",ca:"160 L",fc:"8.0L",fh:"5.8L",fx:"9.8L"};
const r56cooperd = {en:"1.6L N47 Diesel I4",di:"1.6L",cy:"4",hp:"66 kW (90 hp)",tq:"180 Nm",tx:"6-speed manual",dr:"FWD",z1:"~12.8 sec",ts:"~175 km/h",ft:"Diesel",wt:"1,130 kg",se:"4",ca:"160 L",fc:"4.9L",fh:"4.1L",fx:"6.0L"};
const r56jcw = {en:"1.6L N14 Turbo I4 JCW",di:"1.6L",cy:"4",hp:"155 kW (211 hp)",tq:"260 Nm",tx:"6-speed manual",dr:"FWD",z1:"~6.5 sec",ts:"~235 km/h",ft:"Petrol",wt:"1,165 kg",se:"4",ca:"160 L",fc:"8.5L",fh:"6.0L",fx:"10.2L"};
for (const yr of ["2007","2008","2009","2010","2011","2012","2013"]) {
  specs[`${M}|Hatch|${yr}|One`] = {...r56one, pr:"~$25,990"};
  specs[`${M}|Hatch|${yr}|Cooper`] = {...r56coop, pr:"~$30,990"};
  specs[`${M}|Hatch|${yr}|Cooper S`] = {...r56coopers, pr:"~$38,990"};
  specs[`${M}|Hatch|${yr}|Cooper D`] = {...r56cooperd, pr:"~$33,990"};
  if (parseInt(yr) >= 2008) {
    specs[`${M}|Hatch|${yr}|JCW`] = {...r56jcw, pr:"~$48,990"};
  }
}

// R57 Convertible (2009–2015)
const r57coop = {...r56coop, wt:"1,160 kg"};
const r57coopers = {...r56coopers, wt:"1,210 kg"};
const r57jcw = {...r56jcw, wt:"1,225 kg"};
for (const yr of ["2009","2010","2011","2012","2013","2014","2015"]) {
  specs[`${M}|Convertible|${yr}|Cooper`] = {...r57coop, pr:"~$37,990"};
  specs[`${M}|Convertible|${yr}|Cooper S`] = {...r57coopers, pr:"~$45,990"};
  specs[`${M}|Convertible|${yr}|JCW`] = {...r57jcw, pr:"~$55,990"};
}

// R55 Clubman (2007–2014)
const r55coop = {...r56coop, wt:"1,160 kg", ca:"260 L"};
const r55coopers = {...r56coopers, wt:"1,200 kg", ca:"260 L"};
const r55cooperd = {...r56cooperd, wt:"1,175 kg", ca:"260 L"};
const r55jcw = {...r56jcw, wt:"1,215 kg", ca:"260 L"};
for (const yr of ["2007","2008","2009","2010","2011","2012","2013","2014"]) {
  specs[`${M}|Clubman|${yr}|Cooper`] = {...r55coop, pr:"~$33,990"};
  specs[`${M}|Clubman|${yr}|Cooper S`] = {...r55coopers, pr:"~$41,990"};
  specs[`${M}|Clubman|${yr}|Cooper D`] = {...r55cooperd, pr:"~$36,990"};
  if (parseInt(yr) >= 2008) {
    specs[`${M}|Clubman|${yr}|JCW`] = {...r55jcw, pr:"~$51,990"};
  }
}

// ============================================================
// BMW MINI F56 Hatch (2014–2026)
// ============================================================
const f56one = {en:"1.2L TwinPower Turbo I3",di:"1.2L",cy:"3",hp:"55 kW (75 hp)",tq:"150 Nm",tx:"6-speed manual",dr:"FWD",z1:"~13.8 sec",ts:"~174 km/h",ft:"Petrol",wt:"1,040 kg",se:"4",ca:"211 L",fc:"5.5L",fh:"4.0L",fx:"6.9L"};
const f56coop = {en:"1.5L TwinPower Turbo I3",di:"1.5L",cy:"3",hp:"100 kW (136 hp)",tq:"220 Nm",tx:"6-speed manual",dr:"FWD",z1:"~7.9 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,090 kg",se:"4",ca:"211 L",fc:"6.2L",fh:"4.8L",fx:"8.3L"};
const f56coopers = {en:"2.0L TwinPower Turbo I4",di:"2.0L",cy:"4",hp:"141 kW (192 hp)",tq:"280 Nm",tx:"6-speed manual",dr:"FWD",z1:"~6.9 sec",ts:"~233 km/h",ft:"Petrol",wt:"1,145 kg",se:"4",ca:"211 L",fc:"7.0L",fh:"5.1L",fx:"9.1L"};
const f56cooperd = {en:"1.5L TwinPower Turbo Diesel I3",di:"1.5L",cy:"3",hp:"85 kW (116 hp)",tq:"270 Nm",tx:"6-speed manual",dr:"FWD",z1:"~10.4 sec",ts:"~196 km/h",ft:"Diesel",wt:"1,120 kg",se:"4",ca:"211 L",fc:"4.3L",fh:"3.5L",fx:"5.5L"};
const f56jcw = {en:"2.0L TwinPower Turbo I4 JCW",di:"2.0L",cy:"4",hp:"170 kW (231 hp)",tq:"320 Nm",tx:"6-speed manual",dr:"FWD",z1:"~6.3 sec",ts:"~246 km/h",ft:"Petrol",wt:"1,175 kg",se:"4",ca:"211 L",fc:"7.5L",fh:"5.5L",fx:"9.5L"};
for (const yr of ["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${M}|Hatch|${yr}|One`] = {...f56one, pr:"~$24,990"};
  specs[`${M}|Hatch|${yr}|Cooper`] = {...f56coop, pr:"~$30,990"};
  specs[`${M}|Hatch|${yr}|Cooper S`] = {...f56coopers, pr:"~$38,990"};
  specs[`${M}|Hatch|${yr}|Cooper D`] = {...f56cooperd, pr:"~$32,990"};
  specs[`${M}|Hatch|${yr}|JCW`] = {...f56jcw, pr:"~$48,990"};
}

// F57 Convertible (2016–2025)
const f57coop = {...f56coop, wt:"1,170 kg"};
const f57coopers = {...f56coopers, wt:"1,225 kg"};
const f57jcw = {...f56jcw, wt:"1,255 kg"};
for (const yr of ["2016","2017","2018","2019","2020","2021","2022","2023","2024","2025"]) {
  specs[`${M}|Convertible|${yr}|Cooper`] = {...f57coop, pr:"~$38,990"};
  specs[`${M}|Convertible|${yr}|Cooper S`] = {...f57coopers, pr:"~$46,990"};
  specs[`${M}|Convertible|${yr}|JCW`] = {...f57jcw, pr:"~$56,990"};
}

// F54 Clubman (2015–2024)
const f54coop = {...f56coop, wt:"1,245 kg", ca:"360 L"};
const f54coopers = {...f56coopers, wt:"1,295 kg", ca:"360 L"};
const f54cooperd = {...f56cooperd, wt:"1,285 kg", ca:"360 L"};
const f54jcw = {...f56jcw, wt:"1,335 kg", ca:"360 L"};
const f54all4 = {...f56coopers, tx:"8-speed automatic", dr:"AWD", wt:"1,380 kg", ca:"360 L"};
for (const yr of ["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"]) {
  specs[`${M}|Clubman|${yr}|Cooper`] = {...f54coop, pr:"~$36,990"};
  specs[`${M}|Clubman|${yr}|Cooper S`] = {...f54coopers, pr:"~$44,990"};
  specs[`${M}|Clubman|${yr}|Cooper D`] = {...f54cooperd, pr:"~$39,990"};
  specs[`${M}|Clubman|${yr}|JCW`] = {...f54jcw, pr:"~$54,990"};
  specs[`${M}|Clubman|${yr}|Cooper S ALL4`] = {...f54all4, pr:"~$48,990"};
}

// F60 Countryman (2017–2024)
const f60coop = {en:"1.5L TwinPower Turbo I3",di:"1.5L",cy:"3",hp:"100 kW (136 hp)",tq:"220 Nm",tx:"7-speed dual-clutch",dr:"FWD",z1:"~9.5 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,415 kg",se:"5",ca:"450 L",fc:"6.4L",fh:"4.7L",fx:"8.0L"};
const f60coopers = {en:"2.0L TwinPower Turbo I4",di:"2.0L",cy:"4",hp:"141 kW (192 hp)",tq:"280 Nm",tx:"8-speed automatic",dr:"FWD",z1:"~7.4 sec",ts:"~218 km/h",ft:"Petrol",wt:"1,440 kg",se:"5",ca:"450 L",fc:"7.0L",fh:"5.0L",fx:"9.0L"};
const f60coopersall4 = {...f60coopers, dr:"AWD", wt:"1,515 kg"};
const f60jcwall4 = {en:"2.0L TwinPower Turbo I4 JCW",di:"2.0L",cy:"4",hp:"170 kW (231 hp)",tq:"350 Nm",tx:"8-speed automatic",dr:"AWD",z1:"~6.3 sec",ts:"~240 km/h",ft:"Petrol",wt:"1,545 kg",se:"5",ca:"450 L",fc:"7.5L",fh:"5.5L",fx:"9.5L"};
const f60coopse = {en:"Electric motor + 1.5L I3 Petrol PHEV",di:"N/A",cy:"3",hp:"135 kW (183 hp)",tq:"385 Nm",tx:"6-speed automatic",dr:"AWD",z1:"~6.8 sec",ts:"~195 km/h",fc:"40 km (EV)",ft:"Petrol/Electric",wt:"1,660 kg",se:"5",ca:"405 L"};
for (const yr of ["2017","2018","2019","2020","2021","2022","2023","2024"]) {
  specs[`${M}|Countryman|${yr}|Cooper`] = {...f60coop, pr:"~$38,990"};
  specs[`${M}|Countryman|${yr}|Cooper S`] = {...f60coopers, pr:"~$46,990"};
  specs[`${M}|Countryman|${yr}|Cooper S ALL4`] = {...f60coopersall4, pr:"~$50,990"};
  specs[`${M}|Countryman|${yr}|JCW ALL4`] = {...f60jcwall4, pr:"~$58,990"};
  if (parseInt(yr) >= 2020) {
    specs[`${M}|Countryman|${yr}|Cooper SE`] = {...f60coopse, pr:"~$54,990"};
  }
}

// Mini Electric / Cooper SE (2020–2026)
const miniElec = {en:"Single electric motor",di:"N/A",cy:"0",hp:"135 kW (181 hp)",tq:"270 Nm",tx:"Single-speed automatic",dr:"FWD",z1:"~7.3 sec",ts:"~150 km/h",fc:"270 km (WLTP)",ft:"Electric",wt:"1,365 kg",se:"4",ca:"211 L"};
for (const yr of ["2020","2021","2022","2023"]) {
  specs[`${M}|Electric|${yr}|Level 1`] = {...miniElec, pr:"~$40,990"};
  specs[`${M}|Electric|${yr}|Level 2`] = {...miniElec, pr:"~$44,990"};
  specs[`${M}|Electric|${yr}|Level 3`] = {...miniElec, pr:"~$48,990"};
}

// New Gen F66 Hatch (2024–2026)
const f66coopE = {en:"Single electric motor",di:"N/A",cy:"0",hp:"160 kW (215 hp)",tq:"290 Nm",tx:"Single-speed automatic",dr:"FWD",z1:"~7.3 sec",ts:"~160 km/h",fc:"400 km (WLTP)",ft:"Electric",wt:"1,380 kg",se:"4",ca:"200 L"};
const f66coopSE = {...f66coopE, hp:"160 kW (215 hp)"};
const f66coopSPetrol = {en:"2.0L TwinPower Turbo I4",di:"2.0L",cy:"4",hp:"150 kW (204 hp)",tq:"300 Nm",tx:"7-speed dual-clutch",dr:"FWD",z1:"~7.2 sec",ts:"~230 km/h",ft:"Petrol",wt:"1,320 kg",se:"4",ca:"200 L",fc:"7.0L",fh:"5.0L",fx:"9.0L"};
for (const yr of ["2024","2025","2026"]) {
  specs[`${M}|Hatch|${yr}|E Electric`] = {...f66coopE, pr:"~$45,990"};
  specs[`${M}|Hatch|${yr}|SE Electric`] = {...f66coopSE, pr:"~$49,990"};
  specs[`${M}|Hatch|${yr}|S Petrol`] = {...f66coopSPetrol, pr:"~$42,990"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement89.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement89.json written — ${count} entries`);
