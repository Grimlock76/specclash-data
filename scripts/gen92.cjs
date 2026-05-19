'use strict';
const fs = require('fs');

const specs = {};

// ============================================================
// Austin-Healey
// ============================================================
const AH = 'Austin-Healey';

// 100/4 BN1 (1953–1955)
const bn1 = {en:"2660cc Austin A90 I4",di:"2.7L",cy:"4",hp:"67 kW (90 hp)",tq:"179 Nm",tx:"3-speed + overdrive manual",dr:"RWD",z1:"~11 sec",ts:"~174 km/h",ft:"Petrol",wt:"915 kg",se:"2",fc:"12.5L",fh:"9.0L",fx:"15.0L"};
for (const yr of ["1953","1954","1955"]) {
  specs[`${AH}|100/4 BN1|${yr}|Standard`] = {...bn1, pr:"~$2,400"};
}

// 100/4 BN2 (1955–1956)
const bn2 = {en:"2660cc Austin A90 I4",di:"2.7L",cy:"4",hp:"67 kW (90 hp)",tq:"179 Nm",tx:"4-speed manual",dr:"RWD",z1:"~10.8 sec",ts:"~175 km/h",ft:"Petrol",wt:"915 kg",se:"2",fc:"12.5L",fh:"9.0L",fx:"15.0L"};
const bn2m = {...bn2, hp:"82 kW (110 hp)", tq:"190 Nm", en:"2660cc Austin A90 I4 Le Mans"};
for (const yr of ["1955","1956"]) {
  specs[`${AH}|100/4 BN2|${yr}|Standard`] = {...bn2, pr:"~$2,600"};
  specs[`${AH}|100/4 BN2|${yr}|100M`] = {...bn2m, pr:"~$3,000"};
}

// 100 Six BN4/BN6 (1956–1959)
const bn4 = {en:"2639cc BMC C-series I6",di:"2.6L",cy:"6",hp:"67 kW (90 hp)",tq:"180 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"980 kg",se:"4",fc:"13.0L",fh:"9.5L",fx:"15.5L"};
const bn6 = {...bn4, wt:"950 kg", se:"2"};
for (const yr of ["1956","1957","1958","1959"]) {
  specs[`${AH}|100 Six|${yr}|Standard`] = {...bn4, pr:"~$2,900"};
  specs[`${AH}|100 Six|${yr}|BN6`] = {...bn6, pr:"~$3,000"};
}

// 3000 MkI (1959–1961)
const mk1bn7 = {en:"2912cc BMC C-series I6",di:"2.9L",cy:"6",hp:"93 kW (124 hp)",tq:"217 Nm",tx:"4-speed manual",dr:"RWD",z1:"~11 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,081 kg",se:"2",fc:"13.5L",fh:"10.0L",fx:"16.5L"};
const mk1bt7 = {...mk1bn7, se:"4", wt:"1,100 kg"};
for (const yr of ["1959","1960","1961"]) {
  specs[`${AH}|3000 MkI|${yr}|BN7`] = {...mk1bn7, pr:"~$3,500"};
  specs[`${AH}|3000 MkI|${yr}|BT7`] = {...mk1bt7, pr:"~$3,600"};
}

// 3000 MkII (1961–1962)
const mk2 = {en:"2912cc BMC C-series I6",di:"2.9L",cy:"6",hp:"104 kW (140 hp)",tq:"220 Nm",tx:"4-speed manual",dr:"RWD",z1:"~10.5 sec",ts:"~188 km/h",ft:"Petrol",wt:"1,081 kg",se:"2",fc:"13.8L",fh:"10.2L",fx:"16.8L"};
const mk2bj7 = {...mk2, se:"4", wt:"1,100 kg"};
for (const yr of ["1961","1962"]) {
  specs[`${AH}|3000 MkII|${yr}|BN7`] = {...mk2, pr:"~$3,800"};
  specs[`${AH}|3000 MkII|${yr}|BT7`] = {...mk2, se:"4", wt:"1,100 kg", pr:"~$3,900"};
  specs[`${AH}|3000 MkII|${yr}|BJ7`] = {...mk2bj7, pr:"~$4,000"};
}

// 3000 MkIII (1963–1967)
const mk3p1 = {en:"2912cc BMC C-series I6",di:"2.9L",cy:"6",hp:"104 kW (148 hp)",tq:"234 Nm",tx:"4-speed manual",dr:"RWD",z1:"~10 sec",ts:"~192 km/h",ft:"Petrol",wt:"1,144 kg",se:"4",fc:"13.8L",fh:"10.2L",fx:"16.8L"};
for (const yr of ["1963","1964"]) {
  specs[`${AH}|3000 MkIII|${yr}|BJ8 Phase 1`] = {...mk3p1, pr:"~$4,500"};
}
for (const yr of ["1964","1965","1966","1967"]) {
  specs[`${AH}|3000 MkIII|${yr}|BJ8 Phase 2`] = {...mk3p1, pr:"~$5,000"};
}

// Sprite MkI (1958–1961) — Frogeye
const spriteMk1 = {en:"948cc BMC A-series I4",di:"0.9L",cy:"4",hp:"33 kW (43 hp)",tq:"65 Nm",tx:"4-speed manual",dr:"RWD",z1:"~18 sec",ts:"~137 km/h",ft:"Petrol",wt:"630 kg",se:"2",fc:"9.5L",fh:"6.8L",fx:"11.5L"};
for (const yr of ["1958","1959","1960","1961"]) {
  specs[`${AH}|Sprite MkI|${yr}|Standard`] = {...spriteMk1, pr:"~$1,500"};
}

// Sprite MkII (1961–1964)
const spriteMk2 = {...spriteMk1, hp:"37 kW (50 hp)", tq:"70 Nm"};
for (const yr of ["1961","1962","1963","1964"]) {
  specs[`${AH}|Sprite MkII|${yr}|Standard`] = {...spriteMk2, pr:"~$1,700"};
}

// Sprite MkIII (1964–1966)
const spriteMk3 = {en:"1098cc BMC A-series I4",di:"1.1L",cy:"4",hp:"41 kW (55 hp)",tq:"88 Nm",tx:"4-speed manual",dr:"RWD",z1:"~15.5 sec",ts:"~148 km/h",ft:"Petrol",wt:"660 kg",se:"2",fc:"9.5L",fh:"7.0L",fx:"11.5L"};
for (const yr of ["1964","1965","1966"]) {
  specs[`${AH}|Sprite MkIII|${yr}|Standard`] = {...spriteMk3, pr:"~$1,850"};
}

// Sprite MkIV (1966–1971)
const spriteMk4 = {en:"1275cc BMC A-series I4",di:"1.3L",cy:"4",hp:"48 kW (65 hp)",tq:"100 Nm",tx:"4-speed manual",dr:"RWD",z1:"~14 sec",ts:"~155 km/h",ft:"Petrol",wt:"680 kg",se:"2",fc:"9.5L",fh:"7.0L",fx:"11.5L"};
for (const yr of ["1966","1967","1968","1969","1970","1971"]) {
  specs[`${AH}|Sprite MkIV|${yr}|Standard`] = {...spriteMk4, pr:"~$2,000"};
}

// ============================================================
// Rover
// ============================================================
const RV = 'Rover';

// P5 3-litre (1958–1967)
const p5sal = {en:"2995cc IOE I6",di:"3.0L",cy:"6",hp:"85 kW (115 hp)",tq:"220 Nm",tx:"4-speed manual",dr:"RWD",z1:"~13 sec",ts:"~169 km/h",ft:"Petrol",wt:"1,574 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"17.5L"};
const p5aut = {...p5sal, tx:"3-speed automatic"};
for (const yr of ["1958","1959","1960","1961","1962","1963","1964","1965","1966","1967"]) {
  specs[`${RV}|P5 3-litre|${yr}|Saloon`] = {...p5sal, pr:"~$4,500"};
  specs[`${RV}|P5 3-litre|${yr}|Coupé`] = {...p5aut, pr:"~$4,800"};
}

// P5B 3.5 (1967–1973)
const p5b = {en:"3528cc Rover V8",di:"3.5L",cy:"8",hp:"112 kW (152 hp)",tq:"269 Nm",tx:"3-speed Borg-Warner automatic",dr:"RWD",z1:"~9.5 sec",ts:"~183 km/h",ft:"Petrol",wt:"1,623 kg",se:"5",fc:"15.5L",fh:"11.5L",fx:"18.5L"};
for (const yr of ["1967","1968","1969","1970","1971","1972","1973"]) {
  specs[`${RV}|P5B 3.5|${yr}|Saloon`] = {...p5b, pr:"~$6,000"};
  specs[`${RV}|P5B 3.5|${yr}|Coupé`] = {...p5b, pr:"~$6,400"};
}

// P6 2000 (1963–1970)
const p6_2000 = {en:"1978cc OHC I4",di:"2.0L",cy:"4",hp:"74 kW (100 hp)",tq:"163 Nm",tx:"4-speed manual",dr:"RWD",z1:"~12 sec",ts:"~169 km/h",ft:"Petrol",wt:"1,243 kg",se:"5",fc:"11.5L",fh:"8.5L",fx:"14.0L"};
const p6_2000tc = {...p6_2000, hp:"85 kW (115 hp)", tq:"176 Nm", en:"1978cc OHC I4 TC"};
const p6_2000auto = {...p6_2000, tx:"3-speed automatic"};
for (const yr of ["1963","1964","1965","1966","1967","1968","1969","1970"]) {
  specs[`${RV}|P6 2000|${yr}|2000`] = {...p6_2000, pr:"~$3,800"};
  specs[`${RV}|P6 2000|${yr}|2000TC`] = {...p6_2000tc, pr:"~$4,200"};
  specs[`${RV}|P6 2000|${yr}|2000 Automatic`] = {...p6_2000auto, pr:"~$4,000"};
}

// P6 3500 (1968–1977)
const p6_3500 = {en:"3528cc Rover V8",di:"3.5L",cy:"8",hp:"112 kW (152 hp)",tq:"270 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~8.5 sec",ts:"~192 km/h",ft:"Petrol",wt:"1,310 kg",se:"5",fc:"14.5L",fh:"10.5L",fx:"17.5L"};
const p6_3500s = {...p6_3500, tx:"4-speed manual"};
const p6_3500auto = {...p6_3500};
for (const yr of ["1968","1969","1970","1971","1972","1973","1974","1975","1976","1977"]) {
  specs[`${RV}|P6 3500|${yr}|3500`] = {...p6_3500auto, pr:"~$5,500"};
  if (parseInt(yr) >= 1970) {
    specs[`${RV}|P6 3500|${yr}|3500S`] = {...p6_3500s, pr:"~$5,800"};
  }
  specs[`${RV}|P6 3500|${yr}|3500 Auto`] = {...p6_3500auto, pr:"~$5,500"};
}

// SD1 2300/2600 (1976–1986)
const sd1_2300 = {en:"2350cc OHC I6",di:"2.4L",cy:"6",hp:"86 kW (115 hp)",tq:"181 Nm",tx:"5-speed manual",dr:"RWD",z1:"~11.5 sec",ts:"~175 km/h",ft:"Petrol",wt:"1,316 kg",se:"5",ca:"400 L",fc:"11.5L",fh:"8.5L",fx:"14.0L"};
const sd1_2600 = {en:"2597cc OHC I6",di:"2.6L",cy:"6",hp:"100 kW (134 hp)",tq:"210 Nm",tx:"5-speed manual",dr:"RWD",z1:"~10 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,316 kg",se:"5",ca:"400 L",fc:"12.0L",fh:"9.0L",fx:"14.5L"};
for (const yr of ["1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986"]) {
  specs[`${RV}|SD1|${yr}|2300`] = {...sd1_2300, pr:"~$18,000"};
  specs[`${RV}|SD1|${yr}|2600`] = {...sd1_2600, pr:"~$21,000"};
}

// SD1 3500/Vitesse (1976–1986)
const sd1_3500 = {en:"3528cc Rover V8",di:"3.5L",cy:"8",hp:"113 kW (152 hp)",tq:"275 Nm",tx:"3-speed automatic",dr:"RWD",z1:"~9.2 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,394 kg",se:"5",ca:"400 L",fc:"14.5L",fh:"10.5L",fx:"17.5L"};
const sd1_3500s = {...sd1_3500, tx:"5-speed manual"};
const sd1_vit = {en:"3528cc Rover V8 EFi",di:"3.5L",cy:"8",hp:"145 kW (193 hp)",tq:"305 Nm",tx:"5-speed manual",dr:"RWD",z1:"~7.1 sec",ts:"~220 km/h",ft:"Petrol",wt:"1,394 kg",se:"5",ca:"400 L",fc:"15.0L",fh:"11.0L",fx:"18.0L"};
for (const yr of ["1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986"]) {
  specs[`${RV}|SD1|${yr}|3500`] = {...sd1_3500, pr:"~$25,000"};
  specs[`${RV}|SD1|${yr}|3500S`] = {...sd1_3500s, pr:"~$26,000"};
  if (parseInt(yr) >= 1982) {
    specs[`${RV}|SD1|${yr}|Vitesse`] = {...sd1_vit, pr:"~$32,000"};
  }
}

// 800 (820/825/827) (1986–1999)
const r800_820i = {en:"2.0L M16 DOHC I4",di:"2.0L",cy:"4",hp:"75 kW (102 hp)",tq:"165 Nm",tx:"5-speed manual",dr:"FWD",z1:"~11 sec",ts:"~185 km/h",ft:"Petrol",wt:"1,273 kg",se:"5",ca:"430 L",fc:"9.5L",fh:"7.0L",fx:"12.0L"};
const r800_820t = {en:"2.0L M16T DOHC Turbo I4",di:"2.0L",cy:"4",hp:"91 kW (122 hp)",tq:"190 Nm",tx:"5-speed manual",dr:"FWD",z1:"~9.8 sec",ts:"~195 km/h",ft:"Petrol",wt:"1,290 kg",se:"5",ca:"430 L",fc:"10.0L",fh:"7.2L",fx:"12.5L"};
const r800_825i = {en:"2.5L Honda V6",di:"2.5L",cy:"6",hp:"110 kW (147 hp)",tq:"215 Nm",tx:"5-speed manual",dr:"FWD",z1:"~9.2 sec",ts:"~200 km/h",ft:"Petrol",wt:"1,320 kg",se:"5",ca:"430 L",fc:"11.5L",fh:"8.5L",fx:"14.0L"};
const r800_827i = {en:"2.7L Honda V6",di:"2.7L",cy:"6",hp:"118 kW (158 hp)",tq:"234 Nm",tx:"4-speed automatic",dr:"FWD",z1:"~8.8 sec",ts:"~205 km/h",ft:"Petrol",wt:"1,340 kg",se:"5",ca:"430 L",fc:"12.0L",fh:"8.8L",fx:"14.5L"};
for (const yr of ["1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999"]) {
  specs[`${RV}|800|${yr}|820i`] = {...r800_820i, pr:"~$28,000"};
  specs[`${RV}|800|${yr}|820Si`] = {...r800_820t, pr:"~$31,000"};
  specs[`${RV}|800|${yr}|825i`] = {...r800_825i, pr:"~$38,000"};
  specs[`${RV}|800|${yr}|827i`] = {...r800_827i, pr:"~$45,000"};
}

// 400/45 (1990–2005)
const r400_414 = {en:"1.4L K-series I4",di:"1.4L",cy:"4",hp:"62 kW (84 hp)",tq:"126 Nm",tx:"5-speed manual",dr:"FWD",z1:"~13.5 sec",ts:"~168 km/h",ft:"Petrol",wt:"1,050 kg",se:"5",ca:"380 L",fc:"7.8L",fh:"5.8L",fx:"9.5L"};
const r400_416 = {en:"1.6L K-series I4",di:"1.6L",cy:"4",hp:"76 kW (102 hp)",tq:"150 Nm",tx:"5-speed manual",dr:"FWD",z1:"~11.5 sec",ts:"~180 km/h",ft:"Petrol",wt:"1,060 kg",se:"5",ca:"380 L",fc:"8.2L",fh:"6.0L",fx:"10.0L"};
const r400_420 = {en:"2.0L T-series I4",di:"2.0L",cy:"4",hp:"96 kW (129 hp)",tq:"185 Nm",tx:"5-speed manual",dr:"FWD",z1:"~9.8 sec",ts:"~196 km/h",ft:"Petrol",wt:"1,100 kg",se:"5",ca:"380 L",fc:"9.0L",fh:"6.8L",fx:"11.0L"};
for (const yr of ["1990","1991","1992","1993","1994","1995","1996","1997","1998"]) {
  specs[`${RV}|400|${yr}|414Si`] = {...r400_414, pr:"~$22,000"};
  specs[`${RV}|400|${yr}|416Si`] = {...r400_416, pr:"~$25,000"};
  specs[`${RV}|400|${yr}|420Si`] = {...r400_420, pr:"~$30,000"};
}
for (const yr of ["1999","2000","2001","2002","2003","2004","2005"]) {
  specs[`${RV}|45|${yr}|414Si`] = {...r400_414, pr:"~$20,000"};
  specs[`${RV}|45|${yr}|416Si`] = {...r400_416, pr:"~$23,000"};
  specs[`${RV}|45|${yr}|420Si`] = {...r400_420, pr:"~$28,000"};
}

// 75 (1999–2005)
const r75_18 = {en:"1.8L K-series I4",di:"1.8L",cy:"4",hp:"88 kW (118 hp)",tq:"165 Nm",tx:"5-speed manual",dr:"FWD",z1:"~11 sec",ts:"~190 km/h",ft:"Petrol",wt:"1,395 kg",se:"5",ca:"400 L",fc:"9.0L",fh:"6.8L",fx:"11.5L"};
const r75_20t = {en:"2.0L T-series Turbo I4",di:"2.0L",cy:"4",hp:"112 kW (150 hp)",tq:"245 Nm",tx:"5-speed manual",dr:"FWD",z1:"~9.5 sec",ts:"~208 km/h",ft:"Petrol",wt:"1,410 kg",se:"5",ca:"400 L",fc:"10.0L",fh:"7.5L",fx:"12.5L"};
const r75_25v6 = {en:"2.5L KV6 V6",di:"2.5L",cy:"6",hp:"135 kW (181 hp)",tq:"240 Nm",tx:"5-speed manual",dr:"FWD",z1:"~8.2 sec",ts:"~220 km/h",ft:"Petrol",wt:"1,445 kg",se:"5",ca:"400 L",fc:"11.5L",fh:"8.5L",fx:"14.0L"};
const r75_cdt = {en:"2.0L CDTi Common Rail Diesel I4",di:"2.0L",cy:"4",hp:"100 kW (134 hp)",tq:"330 Nm",tx:"5-speed manual",dr:"FWD",z1:"~10.5 sec",ts:"~195 km/h",ft:"Diesel",wt:"1,430 kg",se:"5",ca:"400 L",fc:"6.8L",fh:"5.0L",fx:"8.5L"};
for (const yr of ["1999","2000","2001","2002","2003","2004","2005"]) {
  specs[`${RV}|75|${yr}|Classic`] = {...r75_18, pr:"~$45,000"};
  specs[`${RV}|75|${yr}|Connoisseur`] = {...r75_20t, pr:"~$55,000"};
  specs[`${RV}|75|${yr}|Contemporary`] = {...r75_25v6, pr:"~$65,000"};
  specs[`${RV}|75|${yr}|CDTi`] = {...r75_cdt, pr:"~$52,000"};
  if (parseInt(yr) >= 2001) {
    specs[`${RV}|75|${yr}|Tourer`] = {...r75_25v6, ca:"500 L", pr:"~$68,000"};
  }
}

// Output
const count = Object.keys(specs).length;
fs.writeFileSync('src/data/supplement92.json', JSON.stringify({ specs }, null, 2));
console.log(`supplement92.json written — ${count} entries`);
