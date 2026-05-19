'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// SsangYong (1993–2026)
// ============================================================
const SS = 'SsangYong';

// Musso (1993–2005)
const mussoP = {en:"2.3L DOHC I4 Petrol",di:"2.3L",cy:"4",hp:"100 kW (136 hp)",tq:"196 Nm",tx:"5-speed manual",dr:"4WD",z1:"~13 sec",ts:"~165 km/h",ft:"Petrol",wt:"1,900 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.0L",fx:"11.0L"};
const mussoD = {en:"2.9L OM602 Diesel I5",di:"2.9L",cy:"5",hp:"88 kW (120 hp)",tq:"230 Nm",tx:"5-speed manual",dr:"4WD",z1:"~13 sec",ts:"~160 km/h",ft:"Diesel",wt:"1,950 kg",se:"5",ca:"N/A",fc:"10.5L",fh:"8.0L",fx:"12.0L"};
for (const yr of ["1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005"]) {
  specs[`${SS}|Musso|${yr}|Standard`] = {...mussoP, pr:"~$38,000"};
  specs[`${SS}|Musso|${yr}|Sport 2.9D`] = {...mussoD, pr:"~$41,000"};
}

// Korando Classic (1997–2002)
const korandoC = {en:"2.3L DOHC I4 Petrol",di:"2.3L",cy:"4",hp:"100 kW (136 hp)",tq:"196 Nm",tx:"5-speed manual",dr:"4WD",z1:"~14 sec",ts:"~158 km/h",ft:"Petrol",wt:"1,700 kg",se:"5",ca:"N/A",fc:"12.0L",fh:"9.0L",fx:"11.5L"};
for (const yr of ["1997","1998","1999","2000","2001","2002"]) {
  specs[`${SS}|Korando|${yr}|Standard`] = {...korandoC, pr:"~$34,000"};
}

// Korando C200 (2010–2019)
const kor2p = {en:"2.0L G20D Petrol I4",di:"2.0L",cy:"4",hp:"110 kW (149 hp)",tq:"195 Nm",tx:"6-speed automatic",dr:"FWD",z1:"~11.5 sec",ts:"~178 km/h",ft:"Petrol",wt:"1,510 kg",se:"5",ca:"486 L",fc:"9.5L",fh:"6.8L",fx:"12.0L"};
const kor2d = {en:"2.0L e-XDi220 Diesel I4",di:"2.0L",cy:"4",hp:"114 kW (155 hp)",tq:"360 Nm",tx:"6-speed automatic",dr:"FWD",z1:"~10.8 sec",ts:"~182 km/h",ft:"Diesel",wt:"1,540 kg",se:"5",ca:"486 L",fc:"7.2L",fh:"5.5L",fx:"9.0L"};
for (const yr of ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"]) {
  specs[`${SS}|Korando|${yr}|SX`] = {...kor2p, pr:"~$28,990"};
  specs[`${SS}|Korando|${yr}|EX`] = {...kor2p, pr:"~$32,990"};
  specs[`${SS}|Korando|${yr}|SPR`] = {...kor2d, pr:"~$36,990"};
}

// Korando C300 (2019–2026)
const kor3p = {en:"1.5L GDI Turbo I4",di:"1.5L",cy:"4",hp:"120 kW (163 hp)",tq:"280 Nm",tx:"6-speed automatic",dr:"FWD",z1:"~10.2 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,605 kg",se:"5",ca:"551 L",fc:"8.5L",fh:"6.2L",fx:"11.0L"};
const kor3d = {en:"1.5L D15DTH Diesel I4",di:"1.5L",cy:"4",hp:"100 kW (136 hp)",tq:"340 Nm",tx:"7-speed dual-clutch",dr:"FWD",z1:"~11.5 sec",ts:"~172 km/h",ft:"Diesel",wt:"1,640 kg",se:"5",ca:"551 L",fc:"6.8L",fh:"5.0L",fx:"8.5L"};
for (const yr of ["2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SS}|Korando|${yr}|EX`] = {...kor3p, pr:"~$31,990"};
  specs[`${SS}|Korando|${yr}|Ultimate`] = {...kor3d, pr:"~$37,990"};
}

// Rexton Y200 (2002–2012)
const rex1d = {en:"2.7L XDi Diesel I5",di:"2.7L",cy:"5",hp:"137 kW (186 hp)",tq:"340 Nm",tx:"5-speed automatic",dr:"4WD",z1:"~12 sec",ts:"~175 km/h",ft:"Diesel",wt:"2,100 kg",se:"7",ca:"N/A",fc:"11.5L",fh:"8.5L",fx:"13.5L"};
const rex1p = {en:"3.2L G32D Petrol V6",di:"3.2L",cy:"6",hp:"162 kW (220 hp)",tq:"300 Nm",tx:"5-speed automatic",dr:"4WD",z1:"~11 sec",ts:"~178 km/h",ft:"Petrol",wt:"2,080 kg",se:"7",ca:"N/A",fc:"14.0L",fh:"10.5L",fx:"16.5L"};
for (const yr of ["2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012"]) {
  specs[`${SS}|Rexton|${yr}|Standard`] = {...rex1p, pr:"~$42,000"};
  specs[`${SS}|Rexton|${yr}|RX270 XDi`] = {...rex1d, pr:"~$44,000"};
}

// Rexton Y400 (2012–2017)
const rex2d = {en:"2.0L e-XDi220 Diesel I4",di:"2.0L",cy:"4",hp:"149 kW (202 hp)",tq:"400 Nm",tx:"7-speed automatic",dr:"4WD",z1:"~11 sec",ts:"~178 km/h",ft:"Diesel",wt:"2,150 kg",se:"7",ca:"N/A",fc:"9.5L",fh:"7.0L",fx:"11.5L"};
for (const yr of ["2012","2013","2014","2015","2016","2017"]) {
  specs[`${SS}|Rexton|${yr}|Standard`] = {...rex2d, pr:"~$46,000"};
}

// Rexton G4 Y450 (2017–2026)
const rex3d = {en:"2.2L e-XDi220 Diesel I4",di:"2.2L",cy:"4",hp:"178 kW (242 hp)",tq:"420 Nm",tx:"7-speed automatic",dr:"4WD",z1:"~10 sec",ts:"~185 km/h",ft:"Diesel",wt:"2,240 kg",se:"7",ca:"N/A",fc:"9.8L",fh:"7.2L",fx:"12.0L"};
for (const yr of ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SS}|Rexton|${yr}|EX`] = {...rex3d, pr:"~$52,990"};
  specs[`${SS}|Rexton|${yr}|Ultimate`] = {...rex3d, pr:"~$59,990"};
}

// Tivoli (2015–2026)
const tivP = {en:"1.6L GDI Petrol I4",di:"1.6L",cy:"4",hp:"97 kW (132 hp)",tq:"160 Nm",tx:"6-speed automatic",dr:"FWD",z1:"~10.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,290 kg",se:"5",ca:"423 L",fc:"8.0L",fh:"6.0L",fx:"10.0L"};
const tivD = {en:"1.6L e-XDi Diesel I4",di:"1.6L",cy:"4",hp:"85 kW (116 hp)",tq:"300 Nm",tx:"6-speed automatic",dr:"FWD",z1:"~12 sec",ts:"~168 km/h",ft:"Diesel",wt:"1,340 kg",se:"5",ca:"423 L",fc:"5.8L",fh:"4.5L",fx:"7.2L"};
for (const yr of ["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SS}|Tivoli|${yr}|EX`] = {...tivP, pr:"~$26,990"};
  specs[`${SS}|Tivoli|${yr}|Ultimate`] = {...tivD, pr:"~$31,990"};
}

// Actyon (2006–2011)
const actyon = {en:"2.0L Diesel I4",di:"2.0L",cy:"4",hp:"104 kW (141 hp)",tq:"310 Nm",tx:"5-speed automatic",dr:"4WD",z1:"~12 sec",ts:"~170 km/h",ft:"Diesel",wt:"1,700 kg",se:"5",ca:"N/A",fc:"9.8L",fh:"7.5L",fx:"12.0L"};
for (const yr of ["2006","2007","2008","2009","2010","2011"]) {
  specs[`${SS}|Actyon|${yr}|Standard`] = {...actyon, pr:"~$36,000"};
}

// Actyon Sports pickup (2006–2012)
const actyonS = {...actyon, wt:"1,750 kg", ca:"N/A"};
for (const yr of ["2006","2007","2008","2009","2010","2011","2012"]) {
  specs[`${SS}|Actyon Sports|${yr}|Standard`] = {...actyonS, pr:"~$34,000"};
}

// Musso pickup (2018–2026, new gen)
const mussoUte = {en:"2.2L e-XDi220 Diesel I4",di:"2.2L",cy:"4",hp:"133 kW (181 hp)",tq:"400 Nm",tx:"6-speed automatic",dr:"4WD",z1:"~11 sec",ts:"~178 km/h",ft:"Diesel",wt:"1,780 kg",se:"5",ca:"N/A",fc:"9.0L",fh:"7.0L",fx:"11.0L"};
for (const yr of ["2018","2019","2020","2021","2022","2023","2024","2025","2026"]) {
  specs[`${SS}|Musso|${yr}|EX`] = {...mussoUte, pr:"~$38,990"};
  specs[`${SS}|Musso|${yr}|Ultimate`] = {...mussoUte, pr:"~$44,990"};
}

// ============================================================
// Infiniti (2007–2021)
// ============================================================
const INF = 'Infiniti';

// G35 (2007 AU sales)
const g35v6 = {en:"3.5L VQ35DE V6",di:"3.5L",cy:"6",hp:"206 kW (276 hp)",tq:"353 Nm",tx:"5-speed automatic",dr:"RWD",z1:"~5.9 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,640 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.5L",fx:"15.0L"};
for (const yr of ["2007"]) {
  specs[`${INF}|G35|${yr}|Sedan`] = {...g35v6, pr:"~$65,000"};
  specs[`${INF}|G35|${yr}|Coupe`] = {...g35v6, wt:"1,600 kg", se:"4", pr:"~$68,000"};
}

// G37 (2007–2014)
const g37base = {en:"3.7L VQ37VHR V6",di:"3.7L",cy:"6",hp:"235 kW (320 hp)",tq:"363 Nm",tx:"7-speed automatic",dr:"RWD",z1:"~5.5 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,680 kg",se:"5",ca:"N/A",fc:"13.5L",fh:"10.0L",fx:"16.0L"};
const g37conv = {...g37base, wt:"1,720 kg", se:"4"};
const g37ipl = {...g37base, hp:"245 kW (330 hp)", tq:"373 Nm"};
for (const yr of ["2007","2008","2009","2010","2011","2012","2013","2014"]) {
  specs[`${INF}|G37|${yr}|Sedan`] = {...g37base, pr:"~$75,000"};
  specs[`${INF}|G37|${yr}|Coupe`] = {...g37base, wt:"1,640 kg", se:"4", pr:"~$80,000"};
  if (parseInt(yr) >= 2009) {
    specs[`${INF}|G37|${yr}|Convertible`] = {...g37conv, pr:"~$92,000"};
  }
  if (parseInt(yr) >= 2011) {
    specs[`${INF}|G37|${yr}|IPL`] = {...g37ipl, wt:"1,640 kg", se:"4", pr:"~$95,000"};
  }
}

// Q50 (2013–2021)
const q50_20t = {en:"2.0L TB Turbo I4",di:"2.0L",cy:"4",hp:"155 kW (211 hp)",tq:"350 Nm",tx:"7-speed automatic",dr:"RWD",z1:"~7.2 sec",ts:"~230 km/h",ft:"Petrol",wt:"1,590 kg",se:"5",ca:"N/A",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
const q50_30t = {en:"3.0L VR30DDTT twin-turbo V6",di:"3.0L",cy:"6",hp:"224 kW (304 hp)",tq:"400 Nm",tx:"7-speed automatic",dr:"RWD",z1:"~5.5 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,600 kg",se:"5",ca:"N/A",fc:"11.5L",fh:"8.5L",fx:"14.5L"};
const q50_rs400 = {en:"3.0L VR30DDTT twin-turbo V6 Red Sport",di:"3.0L",cy:"6",hp:"298 kW (400 hp)",tq:"475 Nm",tx:"7-speed automatic",dr:"RWD",z1:"~4.5 sec",ts:"~270 km/h",ft:"Petrol",wt:"1,610 kg",se:"5",ca:"N/A",fc:"12.5L",fh:"9.0L",fx:"15.5L"};
for (const yr of ["2013","2014","2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${INF}|Q50|${yr}|2.0t`] = {...q50_20t, pr:"~$50,000"};
  specs[`${INF}|Q50|${yr}|3.0t`] = {...q50_30t, pr:"~$62,000"};
  if (parseInt(yr) >= 2016) {
    specs[`${INF}|Q50|${yr}|Red Sport 400`] = {...q50_rs400, pr:"~$75,000"};
  }
}

// Q60 (2016–2021)
const q60_20t = {en:"2.0L TB Turbo I4",di:"2.0L",cy:"4",hp:"155 kW (211 hp)",tq:"350 Nm",tx:"7-speed automatic",dr:"RWD",z1:"~7.2 sec",ts:"~230 km/h",ft:"Petrol",wt:"1,640 kg",se:"4",ca:"N/A",fc:"9.8L",fh:"7.2L",fx:"12.5L"};
const q60_30t = {en:"3.0L VR30DDTT twin-turbo V6",di:"3.0L",cy:"6",hp:"224 kW (304 hp)",tq:"400 Nm",tx:"7-speed automatic",dr:"RWD",z1:"~5.3 sec",ts:"~250 km/h",ft:"Petrol",wt:"1,650 kg",se:"4",ca:"N/A",fc:"11.8L",fh:"8.8L",fx:"14.8L"};
const q60_rs400 = {en:"3.0L VR30DDTT twin-turbo V6 Red Sport",di:"3.0L",cy:"6",hp:"298 kW (400 hp)",tq:"475 Nm",tx:"7-speed automatic",dr:"RWD",z1:"~4.5 sec",ts:"~270 km/h",ft:"Petrol",wt:"1,660 kg",se:"4",ca:"N/A",fc:"12.8L",fh:"9.2L",fx:"15.8L"};
for (const yr of ["2016","2017","2018","2019","2020","2021"]) {
  specs[`${INF}|Q60|${yr}|2.0t`] = {...q60_20t, pr:"~$65,000"};
  specs[`${INF}|Q60|${yr}|3.0t`] = {...q60_30t, pr:"~$80,000"};
  specs[`${INF}|Q60|${yr}|Red Sport 400`] = {...q60_rs400, pr:"~$95,000"};
}

// QX50 (2008–2021)
const qx50early = {en:"3.7L VQ37VHR V6",di:"3.7L",cy:"6",hp:"235 kW (320 hp)",tq:"363 Nm",tx:"7-speed automatic",dr:"AWD",z1:"~7.0 sec",ts:"~225 km/h",ft:"Petrol",wt:"1,750 kg",se:"5",ca:"N/A",fc:"13.5L",fh:"10.0L",fx:"16.5L"};
const qx50new = {en:"2.0L VC-Turbo I4",di:"2.0L",cy:"4",hp:"186 kW (252 hp)",tq:"380 Nm",tx:"CVT",dr:"AWD",z1:"~7.5 sec",ts:"~210 km/h",ft:"Petrol",wt:"1,765 kg",se:"5",ca:"N/A",fc:"9.5L",fh:"7.0L",fx:"12.5L"};
for (const yr of ["2008","2009","2010","2011","2012","2013","2014"]) {
  specs[`${INF}|QX50|${yr}|Pure`] = {...qx50early, pr:"~$55,000"};
  specs[`${INF}|QX50|${yr}|Luxe`] = {...qx50early, pr:"~$62,000"};
}
for (const yr of ["2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${INF}|QX50|${yr}|Pure`] = {...qx50new, pr:"~$58,000"};
  specs[`${INF}|QX50|${yr}|Luxe`] = {...qx50new, pr:"~$66,000"};
  specs[`${INF}|QX50|${yr}|Sensory`] = {...qx50new, pr:"~$74,000"};
}

// QX60 (2013–2021)
const qx60v6 = {en:"3.5L VQ35DE V6",di:"3.5L",cy:"6",hp:"202 kW (274 hp)",tq:"336 Nm",tx:"CVT",dr:"AWD",z1:"~7.8 sec",ts:"~200 km/h",ft:"Petrol",wt:"2,048 kg",se:"7",ca:"N/A",fc:"12.5L",fh:"9.5L",fx:"15.0L"};
for (const yr of ["2013","2014","2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${INF}|QX60|${yr}|Pure`] = {...qx60v6, pr:"~$65,000"};
  specs[`${INF}|QX60|${yr}|Luxe`] = {...qx60v6, pr:"~$75,000"};
}

// QX70 (2013–2020)
const qx70v6 = {en:"3.7L VQ37VHR V6",di:"3.7L",cy:"6",hp:"235 kW (320 hp)",tq:"363 Nm",tx:"7-speed automatic",dr:"AWD",z1:"~6.8 sec",ts:"~230 km/h",ft:"Petrol",wt:"2,000 kg",se:"5",ca:"N/A",fc:"13.8L",fh:"10.5L",fx:"16.8L"};
const qx70d = {en:"3.0L V9X diesel V6",di:"3.0L",cy:"6",hp:"175 kW (238 hp)",tq:"550 Nm",tx:"7-speed automatic",dr:"AWD",z1:"~7.5 sec",ts:"~218 km/h",ft:"Diesel",wt:"2,020 kg",se:"5",ca:"N/A",fc:"9.8L",fh:"7.5L",fx:"12.5L"};
for (const yr of ["2013","2014","2015","2016","2017","2018","2019","2020"]) {
  specs[`${INF}|QX70|${yr}|Standard`] = {...qx70v6, pr:"~$80,000"};
  specs[`${INF}|QX70|${yr}|S Premium`] = {...qx70d, pr:"~$88,000"};
}

// QX80 (2010–2021)
const qx80v8 = {en:"5.6L VK56VD V8",di:"5.6L",cy:"8",hp:"298 kW (405 hp)",tq:"560 Nm",tx:"7-speed automatic",dr:"AWD",z1:"~6.5 sec",ts:"~220 km/h",ft:"Petrol",wt:"2,677 kg",se:"8",ca:"N/A",fc:"17.5L",fh:"13.0L",fx:"21.5L"};
for (const yr of ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]) {
  specs[`${INF}|QX80|${yr}|Standard`] = {...qx80v8, pr:"~$115,000"};
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement90.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement90.json written — ${count} entries`);
