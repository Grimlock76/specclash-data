'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Cadillac
// ============================================================
const CA = 'Cadillac';

// --- Series 62 ---
// 1940–48: 5.7L V8 96kW
const s62_40 = {en:"346ci L-head V8",di:"5.7L",cy:"8",hp:"96 kW (130 hp)",tq:"339 Nm",tx:"3-speed manual",dr:"RWD",z1:"~16 sec",ts:"~155 km/h",ft:"Petrol",wt:"2,100 kg",se:"6",fc:"20.0L",fh:"14.0L",fx:"25.0L"};
for (const yr of ["1940","1941","1942","1946","1947","1948"]) {
  specs[`${CA}|Series 62|${yr}|Standard`] = {...s62_40, pr:"~$3,200"};
  specs[`${CA}|Series 62|${yr}|Convertible`] = {...s62_40, pr:"~$3,600"};
}

// 1949–55: 5.4L OHV V8 112kW
const s62_49 = {en:"331ci OHV V8",di:"5.4L",cy:"8",hp:"112 kW (150 hp)",tq:"352 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~14 sec",ts:"~162 km/h",ft:"Petrol",wt:"2,100 kg",se:"6",fc:"20.5L",fh:"14.5L",fx:"25.5L"};
for (const yr of ["1949","1950","1951","1952","1953","1954","1955"]) {
  specs[`${CA}|Series 62|${yr}|Standard`] = {...s62_49, pr:"~$4,000"};
  specs[`${CA}|Series 62|${yr}|Convertible`] = {...s62_49, pr:"~$4,500"};
}

// 1956–58: 6.0L V8 179kW. Eldorado trim 1957–58: 6.4L 224kW
const s62_56 = {en:"365ci V8",di:"6.0L",cy:"8",hp:"179 kW (240 hp)",tq:"488 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~12 sec",ts:"~170 km/h",ft:"Petrol",wt:"2,100 kg",se:"6",fc:"21.0L",fh:"15.0L",fx:"26.0L"};
const s62_57eld = {en:"390ci V8",di:"6.4L",cy:"8",hp:"224 kW (300 hp)",tq:"542 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~10.5 sec",ts:"~180 km/h",ft:"Petrol",wt:"2,100 kg",se:"6",fc:"22.0L",fh:"16.0L",fx:"27.0L"};
for (const yr of ["1956","1957","1958"]) {
  specs[`${CA}|Series 62|${yr}|Standard`] = {...s62_56, pr:"~$5,500"};
  specs[`${CA}|Series 62|${yr}|Convertible`] = {...s62_56, pr:"~$6,200"};
  if (yr !== "1956") {
    specs[`${CA}|Series 62|${yr}|Eldorado`] = {...s62_57eld, pr:"~$7,800"};
  }
}

// 1959–64: 6.4L V8 224kW
const s62_59 = {en:"390ci V8",di:"6.4L",cy:"8",hp:"224 kW (300 hp)",tq:"542 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~11 sec",ts:"~178 km/h",ft:"Petrol",wt:"2,100 kg",se:"6",fc:"22.0L",fh:"15.5L",fx:"27.0L"};
for (const yr of ["1959","1960","1961","1962","1963","1964"]) {
  specs[`${CA}|Series 62|${yr}|Standard`] = {...s62_59, pr:"~$6,500"};
  specs[`${CA}|Series 62|${yr}|Convertible`] = {...s62_59, pr:"~$7,200"};
}

// --- DeVille ---
// 1959–70: 6.4L→7.0L V8, 225–254kW
const dev_59 = {en:"390ci V8",di:"6.4L",cy:"8",hp:"225 kW (302 hp)",tq:"542 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~11 sec",ts:"~178 km/h",ft:"Petrol",wt:"2,200 kg",se:"6",fc:"22.5L",fh:"16.0L",fx:"28.0L"};
const dev_64 = {en:"429ci V8",di:"7.0L",cy:"8",hp:"254 kW (340 hp)",tq:"610 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~10.5 sec",ts:"~183 km/h",ft:"Petrol",wt:"2,200 kg",se:"6",fc:"23.0L",fh:"16.5L",fx:"28.5L"};
for (const yr of ["1959","1960","1961","1962","1963"]) {
  specs[`${CA}|DeVille|${yr}|2-door`] = {...dev_59, pr:"~$5,800"};
  specs[`${CA}|DeVille|${yr}|4-door`] = {...dev_59, pr:"~$6,000"};
}
for (const yr of ["1964","1965","1966","1967","1968","1969","1970"]) {
  specs[`${CA}|DeVille|${yr}|2-door`] = {...dev_64, pr:"~$7,000"};
  specs[`${CA}|DeVille|${yr}|4-door`] = {...dev_64, pr:"~$7,200"};
  specs[`${CA}|DeVille|${yr}|Convertible`] = {...dev_64, pr:"~$7,800"};
}

// 1971–93: 8.2L→7.0L→4.9L V8, 154–172kW
const dev_71 = {en:"472ci V8",di:"7.7L",cy:"8",hp:"172 kW (231 hp)",tq:"610 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"~11.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"2,050 kg",se:"6",fc:"22.0L",fh:"15.5L",fx:"27.0L"};
const dev_77 = {en:"425ci V8",di:"7.0L",cy:"8",hp:"154 kW (210 hp)",tq:"569 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"~12 sec",ts:"~170 km/h",ft:"Petrol",wt:"2,000 kg",se:"6",fc:"20.0L",fh:"14.5L",fx:"25.0L"};
const dev_85 = {en:"4.9L V8",di:"4.9L",cy:"8",hp:"158 kW (212 hp)",tq:"366 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"2,000 kg",se:"6",fc:"15.0L",fh:"11.0L",fx:"19.0L"};
for (const yr of ["1971","1972","1973","1974","1975","1976"]) {
  specs[`${CA}|DeVille|${yr}|Coupe`] = {...dev_71, pr:"~$7,500"};
  specs[`${CA}|DeVille|${yr}|Sedan`] = {...dev_71, pr:"~$7,800"};
}
for (const yr of ["1977","1978","1979","1980","1981","1982","1983","1984"]) {
  specs[`${CA}|DeVille|${yr}|Coupe`] = {...dev_77, pr:"~$12,000"};
  specs[`${CA}|DeVille|${yr}|Sedan`] = {...dev_77, pr:"~$12,500"};
}
for (const yr of ["1985","1986","1987","1988","1989","1990","1991","1992","1993"]) {
  specs[`${CA}|DeVille|${yr}|Coupe`] = {...dev_85, pr:"~$32,000"};
  specs[`${CA}|DeVille|${yr}|Sedan`] = {...dev_85, pr:"~$33,000"};
}

// 1994–99: 4.6L Northstar V8 186kW
const dev_94 = {en:"4.6L Northstar DOHC V8",di:"4.6L",cy:"8",hp:"186 kW (250 hp)",tq:"400 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~9.0 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,960 kg",se:"5",ca:"N/A",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
const dev_94c = {...dev_94, hp:"209 kW (280 hp)", z1:"~8.0 sec"};
for (const yr of ["1994","1995","1996","1997","1998","1999"]) {
  specs[`${CA}|DeVille|${yr}|Standard`] = {...dev_94, pr:"~$55,000"};
  specs[`${CA}|DeVille|${yr}|Concours`] = {...dev_94c, pr:"~$62,000"};
}

// 2000–05: 4.6L Northstar 224kW
const dev_00 = {en:"4.6L Northstar DOHC V8",di:"4.6L",cy:"8",hp:"224 kW (300 hp)",tq:"407 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~7.8 sec",ts:"~220 km/h",ft:"Petrol",wt:"1,970 kg",se:"5",ca:"N/A",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["2000","2001","2002","2003","2004","2005"]) {
  specs[`${CA}|DeVille|${yr}|DHS`] = {...dev_00, pr:"~$65,000"};
  specs[`${CA}|DeVille|${yr}|DTS`] = {...dev_00, pr:"~$70,000"};
}

// --- Eldorado ---
// 1953–58: 6.4L V8 standard
const eld_53 = {en:"331ci OHV V8",di:"5.4L",cy:"8",hp:"134 kW (180 hp)",tq:"366 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~13.5 sec",ts:"~162 km/h",ft:"Petrol",wt:"2,100 kg",se:"4",fc:"20.5L",fh:"14.5L",fx:"25.5L"};
const eld_56spec = {en:"365ci V8",di:"6.0L",cy:"8",hp:"198 kW (265 hp)",tq:"515 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~11.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"2,100 kg",se:"4",fc:"21.5L",fh:"15.5L",fx:"26.5L"};
const eld_57spec = {en:"390ci Eldorado V8",di:"6.4L",cy:"8",hp:"224 kW (300 hp)",tq:"542 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~11 sec",ts:"~180 km/h",ft:"Petrol",wt:"2,100 kg",se:"4",fc:"22.0L",fh:"16.0L",fx:"27.0L"};
for (const yr of ["1953","1954","1955"]) {
  specs[`${CA}|Eldorado|${yr}|Standard`] = {...eld_53, pr:"~$8,500"};
}
specs[`${CA}|Eldorado|1956|Standard`] = {...eld_56spec, pr:"~$7,500"};
for (const yr of ["1957","1958"]) {
  specs[`${CA}|Eldorado|${yr}|Standard`] = {...eld_57spec, pr:"~$8,000"};
}

// 1959–70: 6.4L→7.0L V8
const eld_59 = {en:"390ci V8",di:"6.4L",cy:"8",hp:"224 kW (300 hp)",tq:"542 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~11 sec",ts:"~178 km/h",ft:"Petrol",wt:"2,100 kg",se:"4",fc:"22.0L",fh:"15.5L",fx:"27.0L"};
const eld_64 = {en:"429ci V8",di:"7.0L",cy:"8",hp:"254 kW (340 hp)",tq:"610 Nm",tx:"3-speed Turbo-Hydramatic",dr:"FWD",z1:"~10.5 sec",ts:"~183 km/h",ft:"Petrol",wt:"2,100 kg",se:"4",fc:"23.0L",fh:"16.5L",fx:"28.5L"};
for (const yr of ["1959","1960","1961","1962","1963"]) {
  specs[`${CA}|Eldorado|${yr}|Standard`] = {...eld_59, pr:"~$8,500"};
}
for (const yr of ["1964","1965","1966","1967","1968","1969","1970"]) {
  specs[`${CA}|Eldorado|${yr}|Standard`] = {...eld_64, pr:"~$9,000"};
}

// 1971–78: FWD, 7.7L→7.0L V8
const eld_71 = {en:"472ci V8",di:"7.7L",cy:"8",hp:"172 kW (231 hp)",tq:"610 Nm",tx:"3-speed Turbo-Hydramatic",dr:"FWD",z1:"~11.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"2,150 kg",se:"4",fc:"22.0L",fh:"15.5L",fx:"27.0L"};
const eld_77 = {en:"425ci V8",di:"7.0L",cy:"8",hp:"154 kW (210 hp)",tq:"569 Nm",tx:"3-speed Turbo-Hydramatic",dr:"FWD",z1:"~12 sec",ts:"~170 km/h",ft:"Petrol",wt:"2,100 kg",se:"4",fc:"20.0L",fh:"14.5L",fx:"25.0L"};
for (const yr of ["1971","1972","1973","1974","1975","1976"]) {
  specs[`${CA}|Eldorado|${yr}|Standard`] = {...eld_71, pr:"~$12,000"};
}
for (const yr of ["1977","1978"]) {
  specs[`${CA}|Eldorado|${yr}|Standard`] = {...eld_77, pr:"~$14,000"};
}

// 1979–85: 5.7L→4.1L V8
const eld_79 = {en:"350ci V8",di:"5.7L",cy:"8",hp:"119 kW (160 hp)",tq:"339 Nm",tx:"3-speed automatic",dr:"FWD",z1:"~12 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,850 kg",se:"4",fc:"17.0L",fh:"12.0L",fx:"21.0L"};
const eld_82 = {en:"249ci HT4100 V8",di:"4.1L",cy:"8",hp:"93 kW (125 hp)",tq:"271 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~14 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,800 kg",se:"4",fc:"14.5L",fh:"10.5L",fx:"18.0L"};
for (const yr of ["1979","1980","1981"]) {
  specs[`${CA}|Eldorado|${yr}|Standard`] = {...eld_79, pr:"~$18,000"};
  specs[`${CA}|Eldorado|${yr}|Biarritz`] = {...eld_79, pr:"~$21,000"};
}
for (const yr of ["1982","1983","1984","1985"]) {
  specs[`${CA}|Eldorado|${yr}|Standard`] = {...eld_82, pr:"~$22,000"};
  specs[`${CA}|Eldorado|${yr}|Biarritz`] = {...eld_82, pr:"~$25,000"};
}

// 1986–2002: 4.6L Northstar
const eld_86 = {en:"4.5L DOHC V8",di:"4.5L",cy:"8",hp:"186 kW (249 hp)",tq:"373 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~8.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,750 kg",se:"4",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
const eld_93ns = {en:"4.6L Northstar DOHC V8",di:"4.6L",cy:"8",hp:"186 kW (250 hp)",tq:"400 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~8.0 sec",ts:"~215 km/h",ft:"Petrol",wt:"1,750 kg",se:"4",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
const eld_etc = {...eld_93ns, hp:"224 kW (300 hp)", z1:"~7.0 sec"};
for (const yr of ["1986","1987","1988","1989","1990","1991","1992"]) {
  specs[`${CA}|Eldorado|${yr}|Standard`] = {...eld_86, pr:"~$30,000"};
  specs[`${CA}|Eldorado|${yr}|ETC`] = {...eld_86, pr:"~$34,000"};
}
for (const yr of ["1993","1994","1995","1996","1997","1998","1999","2000","2001","2002"]) {
  specs[`${CA}|Eldorado|${yr}|Standard`] = {...eld_93ns, pr:"~$55,000"};
  specs[`${CA}|Eldorado|${yr}|ETC`] = {...eld_etc, pr:"~$62,000"};
}

// --- Fleetwood ---
// 1940–70
const fl_40 = {en:"346ci L-head V8",di:"5.7L",cy:"8",hp:"96 kW (130 hp)",tq:"339 Nm",tx:"3-speed manual",dr:"RWD",z1:"~16 sec",ts:"~155 km/h",ft:"Petrol",wt:"2,400 kg",se:"7",fc:"22.0L",fh:"15.5L",fx:"27.0L"};
const fl_57 = {en:"365ci V8",di:"6.0L",cy:"8",hp:"179 kW (240 hp)",tq:"488 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~13 sec",ts:"~170 km/h",ft:"Petrol",wt:"2,400 kg",se:"7",fc:"22.0L",fh:"16.0L",fx:"27.5L"};
const fl_65 = {en:"429ci V8",di:"7.0L",cy:"8",hp:"254 kW (340 hp)",tq:"610 Nm",tx:"4-speed Hydra-Matic auto",dr:"RWD",z1:"~11 sec",ts:"~175 km/h",ft:"Petrol",wt:"2,400 kg",se:"7",fc:"23.0L",fh:"16.5L",fx:"28.5L"};
for (const yr of ["1940","1941","1942","1946","1947","1948","1949","1950","1951","1952","1953","1954","1955","1956"]) {
  specs[`${CA}|Fleetwood|${yr}|Standard`] = {...fl_40, pr:"~$5,000"};
  specs[`${CA}|Fleetwood|${yr}|Limousine`] = {...fl_40, wt:"2,600 kg", se:"8", pr:"~$6,000"};
}
for (const yr of ["1957","1958","1959","1960","1961","1962","1963","1964","1965"]) {
  specs[`${CA}|Fleetwood|${yr}|Standard`] = {...fl_57, pr:"~$7,500"};
  specs[`${CA}|Fleetwood|${yr}|Limousine`] = {...fl_57, wt:"2,600 kg", se:"8", pr:"~$9,000"};
}
for (const yr of ["1966","1967","1968","1969","1970"]) {
  specs[`${CA}|Fleetwood|${yr}|Standard`] = {...fl_65, pr:"~$9,000"};
  specs[`${CA}|Fleetwood|${yr}|Brougham`] = {...fl_65, pr:"~$10,000"};
  specs[`${CA}|Fleetwood|${yr}|Limousine`] = {...fl_65, wt:"2,600 kg", se:"8", pr:"~$12,000"};
}

// 1971–96
const fl_71 = {en:"472ci V8",di:"7.7L",cy:"8",hp:"172 kW (231 hp)",tq:"610 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"~12 sec",ts:"~172 km/h",ft:"Petrol",wt:"2,400 kg",se:"6",fc:"22.5L",fh:"16.0L",fx:"27.5L"};
const fl_77 = {en:"425ci V8",di:"7.0L",cy:"8",hp:"154 kW (210 hp)",tq:"569 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"~12.5 sec",ts:"~170 km/h",ft:"Petrol",wt:"2,300 kg",se:"6",fc:"20.5L",fh:"14.5L",fx:"25.5L"};
const fl_85 = {en:"350ci V8",di:"5.7L",cy:"8",hp:"119 kW (160 hp)",tq:"339 Nm",tx:"4-speed automatic",dr:"RWD",z1:"~13 sec",ts:"~165 km/h",ft:"Petrol",wt:"2,200 kg",se:"6",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
for (const yr of ["1971","1972","1973","1974","1975","1976"]) {
  specs[`${CA}|Fleetwood|${yr}|Standard`] = {...fl_71, pr:"~$12,000"};
  specs[`${CA}|Fleetwood|${yr}|Brougham`] = {...fl_71, pr:"~$13,500"};
  specs[`${CA}|Fleetwood|${yr}|Limousine`] = {...fl_71, wt:"2,600 kg", se:"8", pr:"~$16,000"};
}
for (const yr of ["1977","1978","1979","1980","1981","1982","1983","1984"]) {
  specs[`${CA}|Fleetwood|${yr}|Standard`] = {...fl_77, pr:"~$16,000"};
  specs[`${CA}|Fleetwood|${yr}|Brougham`] = {...fl_77, pr:"~$18,000"};
  specs[`${CA}|Fleetwood|${yr}|Limousine`] = {...fl_77, wt:"2,600 kg", se:"8", pr:"~$22,000"};
}
for (const yr of ["1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996"]) {
  specs[`${CA}|Fleetwood|${yr}|Standard`] = {...fl_85, pr:"~$35,000"};
  specs[`${CA}|Fleetwood|${yr}|Brougham`] = {...fl_85, pr:"~$38,000"};
  specs[`${CA}|Fleetwood|${yr}|Limousine`] = {...fl_85, wt:"2,600 kg", se:"8", pr:"~$45,000"};
}

// --- Seville ---
const sev_75 = {en:"350ci V8",di:"5.7L",cy:"8",hp:"119 kW (160 hp)",tq:"339 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~11.5 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,769 kg",se:"5",ca:"430 L",fc:"16.5L",fh:"11.5L",fx:"20.5L"};
const sev_80d = {en:"350ci diesel V8",di:"5.7L",cy:"8",hp:"82 kW (110 hp)",tq:"298 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~15 sec",ts:"~158 km/h",ft:"Diesel",wt:"1,769 kg",se:"5",ca:"430 L",fc:"12.0L",fh:"8.5L",fx:"15.0L"};
const sev_80g = {en:"249ci HT4100 V8",di:"4.1L",cy:"8",hp:"93 kW (125 hp)",tq:"271 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~13 sec",ts:"~162 km/h",ft:"Petrol",wt:"1,769 kg",se:"5",ca:"430 L",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
const sev_86 = {en:"4.5L DOHC V8",di:"4.5L",cy:"8",hp:"149 kW (200 hp)",tq:"339 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~10 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,769 kg",se:"5",ca:"430 L",fc:"13.5L",fh:"9.5L",fx:"17.0L"};
const sev_86sts = {...sev_86, hp:"172 kW (230 hp)"};
const sev_92ns = {en:"4.6L Northstar DOHC V8",di:"4.6L",cy:"8",hp:"186 kW (250 hp)",tq:"400 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~8.5 sec",ts:"~215 km/h",ft:"Petrol",wt:"1,769 kg",se:"5",ca:"430 L",fc:"14.0L",fh:"10.0L",fx:"17.5L"};
const sev_sts = {...sev_92ns, hp:"224 kW (300 hp)", z1:"~7.5 sec"};
for (const yr of ["1975","1976","1977","1978","1979"]) {
  specs[`${CA}|Seville|${yr}|Standard`] = {...sev_75, pr:"~$18,000"};
}
for (const yr of ["1980","1981","1982","1983","1984","1985"]) {
  specs[`${CA}|Seville|${yr}|Standard`] = {...sev_80g, pr:"~$22,000"};
  specs[`${CA}|Seville|${yr}|Elegante`] = {...sev_80g, pr:"~$26,000"};
}
for (const yr of ["1986","1987","1988","1989","1990","1991"]) {
  specs[`${CA}|Seville|${yr}|Standard`] = {...sev_86, pr:"~$32,000"};
  specs[`${CA}|Seville|${yr}|STS`] = {...sev_86sts, pr:"~$37,000"};
}
for (const yr of ["1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004"]) {
  specs[`${CA}|Seville|${yr}|Standard`] = {...sev_92ns, pr:"~$60,000"};
  specs[`${CA}|Seville|${yr}|STS`] = {...sev_sts, pr:"~$70,000"};
}

// --- CTS ---
const cts_03_v6 = {en:"3.2L V6",di:"3.2L",cy:"6",hp:"167 kW (224 hp)",tq:"305 Nm",tx:"5-speed manual",dr:"RWD",z1:"~8.0 sec",ts:"~215 km/h",ft:"Petrol",wt:"1,620 kg",se:"5",ca:"360 L",fc:"12.5L",fh:"9.0L",fx:"16.0L"};
const cts_07_36 = {en:"3.6L LY7 DOHC V6",di:"3.6L",cy:"6",hp:"188 kW (252 hp)",tq:"340 Nm",tx:"6-speed automatic",dr:"RWD",z1:"~7.5 sec",ts:"~225 km/h",ft:"Petrol",wt:"1,630 kg",se:"5",ca:"360 L",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
const cts_v = {en:"6.2L LSA supercharged V8",di:"6.2L",cy:"8",hp:"415 kW (556 hp)",tq:"747 Nm",tx:"6-speed manual",dr:"RWD",z1:"~3.9 sec",ts:"~302 km/h",ft:"Petrol",wt:"1,850 kg",se:"5",ca:"360 L",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
const cts_14_20t = {en:"2.0L turbocharged I4",di:"2.0L",cy:"4",hp:"203 kW (272 hp)",tq:"353 Nm",tx:"8-speed automatic",dr:"RWD",z1:"~7.5 sec",ts:"~225 km/h",ft:"Petrol",wt:"1,700 kg",se:"5",ca:"352 L",fc:"10.5L",fh:"7.5L",fx:"13.5L"};
const cts_v3 = {en:"6.2L LT4 supercharged V8",di:"6.2L",cy:"8",hp:"415 kW (556 hp)",tq:"747 Nm",tx:"8-speed automatic",dr:"RWD",z1:"~3.7 sec",ts:"~315 km/h",ft:"Petrol",wt:"1,775 kg",se:"5",ca:"352 L",fc:"17.5L",fh:"12.5L",fx:"22.0L"};
for (const yr of ["2003","2004","2005","2006","2007"]) {
  specs[`${CA}|CTS|${yr}|Standard`] = {...cts_03_v6, pr:"~$45,000"};
  specs[`${CA}|CTS|${yr}|Sport`] = {...cts_07_36, pr:"~$52,000"};
}
for (const yr of ["2008","2009","2010","2011","2012","2013"]) {
  specs[`${CA}|CTS|${yr}|CTS-V Sedan`] = {...cts_v, pr:"~$85,000"};
  specs[`${CA}|CTS|${yr}|CTS-V Coupe`] = {...cts_v, pr:"~$90,000"};
  specs[`${CA}|CTS|${yr}|CTS-V Wagon`] = {...cts_v, pr:"~$95,000"};
}
for (const yr of ["2014","2015","2016","2017","2018","2019"]) {
  specs[`${CA}|CTS|${yr}|Standard`] = {...cts_14_20t, pr:"~$55,000"};
  specs[`${CA}|CTS|${yr}|Luxury`] = {...cts_14_20t, pr:"~$62,000"};
  specs[`${CA}|CTS|${yr}|Vsport`] = {...cts_14_20t, hp:"313 kW (420 hp)", pr:"~$75,000"};
  specs[`${CA}|CTS|${yr}|V`] = {...cts_v3, pr:"~$110,000"};
}

// --- ATS ---
const ats_20t = {en:"2.0L turbocharged I4",di:"2.0L",cy:"4",hp:"203 kW (272 hp)",tq:"353 Nm",tx:"6-speed automatic",dr:"RWD",z1:"~7.0 sec",ts:"~220 km/h",ft:"Petrol",wt:"1,491 kg",se:"5",ca:"340 L",fc:"10.5L",fh:"7.5L",fx:"13.5L"};
const ats_36 = {en:"3.6L V6",di:"3.6L",cy:"6",hp:"241 kW (323 hp)",tq:"383 Nm",tx:"8-speed automatic",dr:"RWD",z1:"~5.9 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,520 kg",se:"5",ca:"340 L",fc:"12.5L",fh:"9.0L",fx:"16.0L"};
const ats_v = {en:"3.6L twin-turbo V6",di:"3.6L",cy:"6",hp:"321 kW (430 hp)",tq:"583 Nm",tx:"6-speed manual",dr:"RWD",z1:"~4.4 sec",ts:"~282 km/h",ft:"Petrol",wt:"1,540 kg",se:"5",ca:"340 L",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
for (const yr of ["2013","2014","2015","2016","2017","2018","2019"]) {
  specs[`${CA}|ATS|${yr}|Luxury`] = {...ats_20t, pr:"~$48,000"};
  specs[`${CA}|ATS|${yr}|Performance`] = {...ats_36, pr:"~$60,000"};
  specs[`${CA}|ATS|${yr}|ATS-V`] = {...ats_v, pr:"~$85,000"};
}

// --- CT6 ---
const ct6_20t = {en:"2.0L turbocharged I4",di:"2.0L",cy:"4",hp:"183 kW (245 hp)",tq:"353 Nm",tx:"8-speed automatic",dr:"AWD",z1:"~8.0 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,837 kg",se:"5",ca:"N/A",fc:"11.0L",fh:"8.0L",fx:"14.0L"};
const ct6_30tt = {en:"3.0L twin-turbo V6",di:"3.0L",cy:"6",hp:"304 kW (410 hp)",tq:"550 Nm",tx:"10-speed automatic",dr:"AWD",z1:"~5.2 sec",ts:"~245 km/h",ft:"Petrol",wt:"1,890 kg",se:"5",ca:"N/A",fc:"13.5L",fh:"10.0L",fx:"17.0L"};
for (const yr of ["2016","2017","2018","2019","2020"]) {
  specs[`${CA}|CT6|${yr}|Standard`] = {...ct6_20t, pr:"~$75,000"};
  specs[`${CA}|CT6|${yr}|Luxury`] = {...ct6_20t, pr:"~$85,000"};
  specs[`${CA}|CT6|${yr}|Premium Luxury`] = {...ct6_20t, pr:"~$95,000"};
  specs[`${CA}|CT6|${yr}|V-Sport`] = {...ct6_30tt, pr:"~$115,000"};
}

// --- Escalade ---
const esc_99 = {en:"5.3L Vortec V8",di:"5.3L",cy:"8",hp:"228 kW (306 hp)",tq:"447 Nm",tx:"4-speed automatic",dr:"AWD",z1:"~10.5 sec",ts:"~180 km/h",ft:"Petrol",wt:"2,585 kg",se:"8",ca:"N/A",fc:"18.5L",fh:"13.0L",fx:"23.0L"};
const esc_07 = {en:"6.2L L92 V8",di:"6.2L",cy:"8",hp:"298 kW (400 hp)",tq:"569 Nm",tx:"6-speed automatic",dr:"AWD",z1:"~8.0 sec",ts:"~190 km/h",ft:"Petrol",wt:"2,630 kg",se:"8",ca:"N/A",fc:"18.0L",fh:"12.5L",fx:"22.5L"};
const esc_15 = {en:"6.2L EcoTec3 V8",di:"6.2L",cy:"8",hp:"313 kW (420 hp)",tq:"624 Nm",tx:"8-speed automatic",dr:"AWD",z1:"~7.5 sec",ts:"~195 km/h",ft:"Petrol",wt:"2,677 kg",se:"8",ca:"N/A",fc:"17.0L",fh:"12.0L",fx:"21.5L"};
const esc_21 = {en:"6.2L EcoTec3 V8",di:"6.2L",cy:"8",hp:"313 kW (420 hp)",tq:"624 Nm",tx:"10-speed automatic",dr:"AWD",z1:"~7.0 sec",ts:"~200 km/h",ft:"Petrol",wt:"2,729 kg",se:"8",ca:"N/A",fc:"17.0L",fh:"12.0L",fx:"21.5L"};
const esc_21d = {en:"3.0L Duramax diesel I6",di:"3.0L",cy:"6",hp:"230 kW (308 hp)",tq:"623 Nm",tx:"10-speed automatic",dr:"AWD",z1:"~8.0 sec",ts:"~190 km/h",ft:"Diesel",wt:"2,750 kg",se:"8",ca:"N/A",fc:"11.5L",fh:"8.5L",fx:"14.5L"};
for (const yr of ["1999","2000","2001","2002"]) {
  specs[`${CA}|Escalade|${yr}|Standard`] = {...esc_99, pr:"~$65,000"};
}
for (const yr of ["2003","2004","2005","2006"]) {
  specs[`${CA}|Escalade|${yr}|Standard`] = {...esc_99, pr:"~$72,000"};
  specs[`${CA}|Escalade|${yr}|ESV`] = {...esc_99, wt:"2,720 kg", pr:"~$78,000"};
}
for (const yr of ["2007","2008","2009","2010","2011","2012","2013","2014"]) {
  specs[`${CA}|Escalade|${yr}|Standard`] = {...esc_07, pr:"~$95,000"};
  specs[`${CA}|Escalade|${yr}|ESV`] = {...esc_07, wt:"2,760 kg", pr:"~$102,000"};
}
for (const yr of ["2015","2016","2017","2018","2019","2020"]) {
  specs[`${CA}|Escalade|${yr}|Standard`] = {...esc_15, pr:"~$110,000"};
  specs[`${CA}|Escalade|${yr}|ESV`] = {...esc_15, wt:"2,750 kg", pr:"~$118,000"};
  specs[`${CA}|Escalade|${yr}|Platinum`] = {...esc_15, pr:"~$130,000"};
}
for (const yr of ["2021","2022","2023","2024","2025","2026"]) {
  specs[`${CA}|Escalade|${yr}|Standard`] = {...esc_21, pr:"~$135,000"};
  specs[`${CA}|Escalade|${yr}|ESV`] = {...esc_21, wt:"2,800 kg", pr:"~$142,000"};
  specs[`${CA}|Escalade|${yr}|Sport`] = {...esc_21, pr:"~$145,000"};
  specs[`${CA}|Escalade|${yr}|Premium Luxury`] = {...esc_21d, pr:"~$155,000"};
}

// --- SRX / XT5 ---
const srx_36 = {en:"3.6L DOHC V6",di:"3.6L",cy:"6",hp:"188 kW (252 hp)",tq:"340 Nm",tx:"6-speed automatic",dr:"AWD",z1:"~9.0 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,930 kg",se:"5",ca:"N/A",fc:"13.0L",fh:"9.5L",fx:"16.5L"};
const xt5_36 = {en:"3.6L DOHC V6",di:"3.6L",cy:"6",hp:"228 kW (306 hp)",tq:"366 Nm",tx:"8-speed automatic",dr:"AWD",z1:"~7.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,930 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.0L",fx:"16.0L"};
for (const yr of ["2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"]) {
  specs[`${CA}|SRX|${yr}|Standard`] = {...srx_36, pr:"~$52,000"};
  specs[`${CA}|SRX|${yr}|Performance`] = {...srx_36, pr:"~$60,000"};
  specs[`${CA}|SRX|${yr}|Premium`] = {...srx_36, pr:"~$68,000"};
}
for (const yr of ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${CA}|XT5|${yr}|Standard`] = {...xt5_36, pr:"~$62,000"};
  specs[`${CA}|XT5|${yr}|Sport`] = {...xt5_36, pr:"~$70,000"};
  specs[`${CA}|XT5|${yr}|Premium`] = {...xt5_36, pr:"~$78,000"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement94.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement94.json written — ${count} entries`);
