// Holden early series: HK, HT, HG, HQ, HJ, HX, HZ, Torana
const specs = {};

// ── HK ──────────────────────────────────────────────────────────────────────
const hk186 = {en:"3.0L I6 186",di:"3.0L",cy:"6",hp:"87 kW (116 hp)",tq:"207 Nm",tx:"3-speed manual",dr:"RWD",z1:"13.5 sec",qm:"19.0 sec",ts:"160 km/h",fc:"14.5L",fh:"9.5L",fx:"12.0L",ft:"Leaded",wt:"1,260 kg",se:"5",ca:"N/A",pr:"~$2,395"};
const hk186hi = {en:"3.0L I6 186 Hi-Comp",di:"3.0L",cy:"6",hp:"101 kW (135 hp)",tq:"220 Nm",tx:"4-speed manual (Saginaw)",dr:"RWD",z1:"11.0 sec",qm:"17.5 sec",ts:"180 km/h",fc:"14.5L",fh:"9.5L",fx:"12.0L",ft:"Leaded",wt:"1,275 kg",se:"5",ca:"N/A",pr:"~$2,895"};
specs["HK|1968|Belmont"]  = {...hk186, pr:"~$2,395"};
specs["HK|1968|Premier"]  = {...hk186, tx:"2-speed Powerglide",wt:"1,370 kg",pr:"~$3,095"};
specs["HK|1968|GTS 186"]  = {...hk186hi};
specs["HK|1968|Utility"]  = {...hk186, wt:"1,220 kg",se:"2",ca:"Utility tray",pr:"~$2,450"};
specs["HK|1969|Belmont"]  = {...hk186, pr:"~$2,450"};
specs["HK|1969|Premier"]  = {...hk186, tx:"2-speed Powerglide",wt:"1,370 kg",pr:"~$3,195"};
specs["HK|1969|GTS 186"]  = {...hk186hi, pr:"~$2,995"};
specs["HK|1969|Utility"]  = {...hk186, wt:"1,220 kg",se:"2",ca:"Utility tray",pr:"~$2,495"};

// ── HT ──────────────────────────────────────────────────────────────────────
const ht186 = {...hk186, en:"3.0L I6 186"};
const ht308 = {en:"5.0L V8 308",di:"5.0L",cy:"8",hp:"149 kW (200 hp)",tq:"380 Nm",tx:"4-speed manual / 3-speed Turbo-Hydramatic",dr:"RWD",z1:"8.0 sec",qm:"16.0 sec",ts:"200 km/h",fc:"19.0L",fh:"12.0L",fx:"15.5L",ft:"Leaded",wt:"1,380 kg",se:"5",ca:"N/A"};
specs["HT|1969|Belmont"]     = {...ht186, pr:"~$2,495"};
specs["HT|1969|Brougham"]    = {...ht186, tx:"2-speed Powerglide",wt:"1,380 kg",pr:"~$3,195"};
specs["HT|1969|Premier"]     = {...ht186, tx:"2-speed Powerglide",wt:"1,380 kg",pr:"~$3,295"};
specs["HT|1969|GTS 186"]     = {...hk186hi, pr:"~$3,095"};
specs["HT|1969|Monaro GTS"]  = {...hk186hi, wt:"1,255 kg",se:"4",pr:"~$3,295"};
specs["HT|1969|Utility"]     = {...ht186, wt:"1,210 kg",se:"2",ca:"Utility tray",pr:"~$2,550"};
specs["HT|1970|Belmont"]     = {...ht186, pr:"~$2,595"};
specs["HT|1970|Brougham"]    = {...ht186, tx:"2-speed Powerglide",wt:"1,380 kg",pr:"~$3,295"};
specs["HT|1970|Premier"]     = {...ht186, tx:"2-speed Powerglide",wt:"1,380 kg",pr:"~$3,395"};
specs["HT|1970|GTS 186"]     = {...hk186hi, pr:"~$3,095"};
specs["HT|1970|Monaro GTS"]  = {...hk186hi, wt:"1,255 kg",se:"4",pr:"~$3,295"};
specs["HT|1970|Utility"]     = {...ht186, wt:"1,210 kg",se:"2",ca:"Utility tray",pr:"~$2,595"};

// ── HG ──────────────────────────────────────────────────────────────────────
specs["HG|1970|Belmont"]       = {...ht186, pr:"~$2,695"};
specs["HG|1970|Brougham"]      = {...ht186, tx:"2-speed Powerglide",wt:"1,380 kg",pr:"~$3,395"};
specs["HG|1970|Monaro GTS"]    = {...hk186hi, wt:"1,255 kg",se:"4",pr:"~$3,395"};
specs["HG|1970|Utility"]       = {...ht186, wt:"1,215 kg",se:"2",ca:"Utility tray",pr:"~$2,650"};
specs["HG|1971|Belmont"]       = {...ht186, pr:"~$2,795"};
specs["HG|1971|Brougham"]      = {...ht186, tx:"2-speed Powerglide",wt:"1,385 kg",pr:"~$3,495"};
specs["HG|1971|Monaro GTS"]    = {...hk186hi, wt:"1,258 kg",se:"4",pr:"~$3,495"};
specs["HG|1971|Monaro GTS 350"]= {en:"Chevrolet 350ci V8",di:"5.7L",cy:"8",hp:"224 kW (300 hp)",tq:"475 Nm",tx:"4-speed manual (Muncie)",dr:"RWD",z1:"7.0 sec",qm:"14.8 sec",ts:"215 km/h",fc:"22.0L",fh:"13.0L",fx:"17.0L",ft:"Leaded",wt:"1,295 kg",se:"4",ca:"N/A",pr:"~$4,195"};
specs["HG|1971|Utility"]       = {...ht186, wt:"1,215 kg",se:"2",ca:"Utility tray",pr:"~$2,750"};

// ── HQ ──────────────────────────────────────────────────────────────────────
const hq202 = {en:"3.3L I6 202",di:"3.3L",cy:"6",hp:"90 kW (121 hp)",tq:"224 Nm",tx:"3-speed manual / 3-speed Turbo-Hydramatic",dr:"RWD",z1:"13.0 sec",qm:"18.5 sec",ts:"165 km/h",fc:"15.5L",fh:"10.0L",fx:"12.5L",ft:"Leaded",wt:"1,380 kg",se:"5",ca:"N/A"};
const hq308 = {...ht308, en:"5.0L V8 308",wt:"1,430 kg"};
const hqone = {...hq202, se:"2",ca:"Tray"};
for (const yr of ["1971","1972","1973"]) {
  specs[`HQ|${yr}|Belmont`]    = {...hq202, pr:`~$${3100+parseInt(yr)-1971*100}`};
  specs[`HQ|${yr}|Brougham`]   = {...hq202, tx:"3-speed Turbo-Hydramatic",hp:"130 kW (174 hp)",tq:"340 Nm",en:"4.2L V8 253",di:"4.2L",cy:"8",wt:"1,450 kg",pr:`~$${3895+parseInt(yr)-1971*150}`};
  specs[`HQ|${yr}|Monaro GTS`] = {...hq202, hp:"130 kW (174 hp)",tq:"340 Nm",en:"4.2L V8 253",di:"4.2L",cy:"8",tx:"4-speed manual / 3-speed Turbo-Hydramatic",wt:"1,390 kg",se:"4",z1:"9.0 sec",qm:"16.8 sec",ts:"190 km/h",pr:`~$${3795+parseInt(yr)-1971*150}`};
  specs[`HQ|${yr}|Utility`]    = {...hqone, pr:`~$${2995+parseInt(yr)-1971*100}`};
  specs[`HQ|${yr}|One Tonner`] = {...hqone, wt:"1,340 kg",pr:`~$${3195+parseInt(yr)-1971*100}`};
}
specs["HQ|1974|Belmont"]    = {...hq202, pr:"~$3,400"};
specs["HQ|1974|Brougham"]   = {...hq202, en:"4.2L V8 253",di:"4.2L",cy:"8",hp:"130 kW (174 hp)",tq:"340 Nm",tx:"3-speed Turbo-Hydramatic",wt:"1,450 kg",pr:"~$4,195"};
specs["HQ|1974|SS"]         = {...hq308, tx:"4-speed manual",z1:"8.2 sec",qm:"16.0 sec",ts:"195 km/h",wt:"1,420 kg",pr:"~$4,595"};
specs["HQ|1974|Utility"]    = {...hqone, pr:"~$3,295"};
specs["HQ|1974|One Tonner"] = {...hqone, wt:"1,340 kg",pr:"~$3,495"};

// ── HJ ──────────────────────────────────────────────────────────────────────
const hj202 = {...hq202, en:"3.3L I6 202"};
for (const yr of ["1974","1975","1976"]) {
  specs[`HJ|${yr}|Belmont`]    = {...hj202, pr:`~$${3500+parseInt(yr)-1974*300}`};
  specs[`HJ|${yr}|Brougham`]   = {...hj202, en:"4.2L V8 253",di:"4.2L",cy:"8",hp:"130 kW (174 hp)",tq:"340 Nm",tx:"3-speed Turbo-Hydramatic",wt:"1,450 kg",pr:`~$${4295+parseInt(yr)-1974*300}`};
  specs[`HJ|${yr}|Utility`]    = {...hj202, wt:"1,310 kg",se:"2",ca:"Utility tray",pr:`~$${3095+parseInt(yr)-1974*200}`};
  specs[`HJ|${yr}|One Tonner`] = {...hj202, wt:"1,360 kg",se:"2",ca:"Tray",pr:`~$${3295+parseInt(yr)-1974*200}`};
}

// ── HX ──────────────────────────────────────────────────────────────────────
const hx202 = {...hj202};
const hxSand = {...hx202, en:"4.2L V8 253",di:"4.2L",cy:"8",hp:"130 kW (174 hp)",tq:"340 Nm",tx:"3-speed Turbo-Hydramatic",wt:"1,390 kg",se:"2",ca:"Panel van"};
for (const yr of ["1976","1977"]) {
  specs[`HX|${yr}|Brougham`]    = {...hx202, en:"4.2L V8 253",di:"4.2L",cy:"8",hp:"130 kW (174 hp)",tq:"340 Nm",tx:"3-speed Turbo-Hydramatic",wt:"1,455 kg",pr:`~$${5295+parseInt(yr)-1976*400}`};
  specs[`HX|${yr}|Sandman`]     = {...hxSand, pr:`~$${4895+parseInt(yr)-1976*300}`};
  specs[`HX|${yr}|Utility`]     = {...hx202, wt:"1,320 kg",se:"2",ca:"Utility tray",pr:`~$${3695+parseInt(yr)-1976*350}`};
  specs[`HX|${yr}|One Tonner`]  = {...hx202, wt:"1,380 kg",se:"2",ca:"Tray",pr:`~$${3895+parseInt(yr)-1976*350}`};
}

// ── HZ ──────────────────────────────────────────────────────────────────────
const hz202 = {en:"3.3L I6 202",di:"3.3L",cy:"6",hp:"90 kW (121 hp)",tq:"224 Nm",tx:"3-speed manual / 3-speed Turbo-Hydramatic",dr:"RWD",z1:"13.2 sec",qm:"18.8 sec",ts:"163 km/h",fc:"15.8L",fh:"10.2L",fx:"12.8L",ft:"Leaded",wt:"1,400 kg",se:"5",ca:"N/A"};
specs["HZ|1977|Sandman"]    = {...hz202, en:"4.2L V8 253",di:"4.2L",cy:"8",hp:"130 kW (174 hp)",tq:"340 Nm",tx:"3-speed Turbo-Hydramatic",wt:"1,390 kg",se:"2",ca:"Panel van",pr:"~$5,495"};
specs["HZ|1977|Utility"]    = {...hz202, wt:"1,330 kg",se:"2",ca:"Utility tray",pr:"~$4,095"};
specs["HZ|1977|One Tonner"] = {...hz202, wt:"1,390 kg",se:"2",ca:"Tray",pr:"~$4,295"};
specs["HZ|1978|Sandman"]    = {...specs["HZ|1977|Sandman"], pr:"~$5,695"};
specs["HZ|1978|Utility"]    = {...hz202, wt:"1,330 kg",se:"2",ca:"Utility tray",pr:"~$4,295"};
specs["HZ|1978|One Tonner"] = {...hz202, wt:"1,390 kg",se:"2",ca:"Tray",pr:"~$4,495"};
specs["HZ|1979|Utility"]    = {...hz202, wt:"1,330 kg",se:"2",ca:"Utility tray",pr:"~$4,595"};
specs["HZ|1979|One Tonner"] = {...hz202, wt:"1,390 kg",se:"2",ca:"Tray",pr:"~$4,795"};
specs["HZ|1980|One Tonner"] = {...hz202, wt:"1,390 kg",se:"2",ca:"Tray",pr:"~$5,295"};

// ── TORANA ──────────────────────────────────────────────────────────────────
const torLJS = {en:"1.16L I4",di:"1.2L",cy:"4",hp:"38 kW (51 hp)",tq:"78 Nm",tx:"4-speed manual",dr:"RWD",z1:"19.0 sec",qm:"21.5 sec",ts:"130 km/h",fc:"9.5L",fh:"6.5L",fx:"8.0L",ft:"Petrol",wt:"790 kg",se:"4",ca:"N/A",pr:"~$1,695"};
const torLJSL = {...torLJS, en:"1.3L I4",di:"1.3L",hp:"45 kW (60 hp)",tq:"90 Nm",pr:"~$1,895"};
const torLJGTR = {en:"2.0L I6 XU-1",di:"2.0L",cy:"6",hp:"104 kW (140 hp)",tq:"231 Nm",tx:"4-speed manual (Muncie)",dr:"RWD",z1:"9.0 sec",qm:"16.5 sec",ts:"183 km/h",fc:"14.0L",fh:"9.5L",fx:"11.5L",ft:"Petrol",wt:"1,000 kg",se:"4",ca:"N/A",pr:"~$2,695"};
// LJ variants (1970-71) are slightly larger than LC
specs["Torana|1970|LJ S"]      = {...torLJS, en:"1.16L I4",pr:"~$1,795"};
specs["Torana|1970|LJ SL"]     = {...torLJSL, pr:"~$1,995"};
specs["Torana|1971|LJ S"]      = {...torLJS, pr:"~$1,895"};
specs["Torana|1971|LJ SL"]     = {...torLJSL, pr:"~$2,095"};
specs["Torana|1971|LJ GTR"]    = {...torLJGTR, pr:"~$2,795"};
specs["Torana|1972|LJ SL"]     = {...torLJSL, pr:"~$2,195"};
// LH variants (1972-74) — 2.85L I6
const torLH = {en:"2.85L I6",di:"2.85L",cy:"6",hp:"82 kW (110 hp)",tq:"195 Nm",tx:"3-speed manual / 3-speed Turbo-Hydramatic",dr:"RWD",z1:"12.5 sec",qm:"18.2 sec",ts:"168 km/h",fc:"13.0L",fh:"8.5L",fx:"11.0L",ft:"Petrol",wt:"1,050 kg",se:"4",ca:"N/A",pr:"~$2,895"};
const torLHSLR = {...torLH, en:"2.85L I6 SL/R",hp:"97 kW (130 hp)",tq:"220 Nm",tx:"4-speed manual",z1:"10.5 sec",qm:"17.5 sec",ts:"178 km/h"};
specs["Torana|1972|LH SL/R"]   = {...torLHSLR, pr:"~$3,195"};
specs["Torana|1973|LH SL/R"]   = {...torLHSLR, pr:"~$3,395"};
specs["Torana|1974|LH SL/R"]   = {...torLHSLR, pr:"~$3,595"};
// LX SL (1974-76) — new body, 2.85L
const torLXSL = {en:"2.85L I6",di:"2.85L",cy:"6",hp:"82 kW (110 hp)",tq:"195 Nm",tx:"3-speed manual / 3-speed Turbo-Hydramatic",dr:"RWD",z1:"12.8 sec",qm:"18.5 sec",ts:"165 km/h",fc:"13.0L",fh:"8.5L",fx:"11.0L",ft:"Petrol",wt:"1,080 kg",se:"4",ca:"N/A"};
const torLXSLR = {en:"5.0L V8 308",di:"5.0L",cy:"8",hp:"186 kW (249 hp)",tq:"420 Nm",tx:"4-speed manual",dr:"RWD",z1:"6.8 sec",qm:"15.0 sec",ts:"210 km/h",fc:"19.0L",fh:"12.0L",fx:"15.0L",ft:"Petrol",wt:"1,220 kg",se:"4",ca:"N/A"};
specs["Torana|1974|LX SL"]     = {...torLXSL, pr:"~$3,195"};
specs["Torana|1975|LX SL"]     = {...torLXSL, pr:"~$3,595"};
specs["Torana|1975|LX SL/R"]   = {...torLXSLR, hp:"149 kW (200 hp)",tq:"380 Nm",z1:"8.0 sec",qm:"15.8 sec",ts:"195 km/h",pr:"~$4,495"};
specs["Torana|1975|LX SL/R 5000"] = {...torLXSLR, pr:"~$5,295"};
specs["Torana|1976|LX SL"]     = {...torLXSL, pr:"~$3,895"};
specs["Torana|1976|LX SL/R 5000"] = {...torLXSLR, pr:"~$5,795"};

require('fs').writeFileSync('src/data/supplement1.json', JSON.stringify({make:'Holden',specs}, null, 2));
console.log('supplement1.json written:', Object.keys(specs).length, 'entries');
