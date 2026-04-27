// Ford Falcon XK–XF, EA–EL, AU–FG X gaps; Falcon Ute; FPV GT
const specs = {};
const M = "Ford";

// ── FORD FALCON XK (1960-61) ──────────────────────────────────────────────────
const xkBase = {en:"2.4L I6 144ci",di:"2.4L",cy:"6",hp:"63 kW (85 hp)",tq:"176 Nm",tx:"3-speed manual / 2-speed Fordomatic",dr:"RWD",z1:"17.0 sec",qm:"21.0 sec",ts:"145 km/h",fc:"12.0L",fh:"8.0L",fx:"10.0L",ft:"Petrol",wt:"1,130 kg",se:"6",ca:"370 L"};
specs[`${M}|Falcon (XK)|1960|Standard`] = {...xkBase, pr:"~$1,595"};
specs[`${M}|Falcon (XK)|1960|Deluxe`]   = {...xkBase, wt:"1,145 kg",pr:"~$1,795"};
specs[`${M}|Falcon (XK)|1961|Standard`] = {...xkBase, pr:"~$1,645"};
specs[`${M}|Falcon (XK)|1961|Deluxe`]   = {...xkBase, wt:"1,145 kg",pr:"~$1,845"};

// ── FORD FALCON XL (1962-63) ──────────────────────────────────────────────────
const xlBase = {...xkBase, en:"2.8L I6 170ci",di:"2.8L",hp:"74 kW (99 hp)",tq:"198 Nm",ts:"155 km/h",wt:"1,140 kg"};
const xlFut  = {...xlBase, hp:"82 kW (110 hp)",tx:"3-speed manual",wt:"1,155 kg"};
specs[`${M}|Falcon (XL)|1962|Standard`] = {...xlBase, pr:"~$1,695"};
specs[`${M}|Falcon (XL)|1962|Deluxe`]   = {...xlBase, wt:"1,155 kg",pr:"~$1,895"};
specs[`${M}|Falcon (XL)|1962|Futura`]   = {...xlFut, pr:"~$2,095"};
specs[`${M}|Falcon (XL)|1963|Standard`] = {...xlBase, pr:"~$1,745"};
specs[`${M}|Falcon (XL)|1963|Deluxe`]   = {...xlBase, wt:"1,155 kg",pr:"~$1,945"};
specs[`${M}|Falcon (XL)|1963|Futura`]   = {...xlFut, pr:"~$2,145"};

// ── FORD FALCON XM (1964) ─────────────────────────────────────────────────────
const xm200 = {...xlBase, en:"3.3L I6 200ci",di:"3.3L",hp:"86 kW (115 hp)",tq:"224 Nm",ts:"160 km/h",wt:"1,155 kg"};
specs[`${M}|Falcon (XM)|1964|Standard`] = {...xm200, pr:"~$1,795"};
specs[`${M}|Falcon (XM)|1964|Deluxe`]   = {...xm200, wt:"1,165 kg",pr:"~$1,995"};
specs[`${M}|Falcon (XM)|1964|Futura`]   = {...xm200, hp:"90 kW (121 hp)",wt:"1,170 kg",pr:"~$2,195"};
specs[`${M}|Falcon (XM)|1964|Sprint`]   = {...xm200, hp:"104 kW (139 hp)",tx:"4-speed manual",z1:"11.5 sec",qm:"17.8 sec",ts:"175 km/h",wt:"1,175 kg",pr:"~$2,595"};

// ── FORD FALCON XP (1965-66) ──────────────────────────────────────────────────
const xp200 = {...xm200, ts:"162 km/h"};
for (const yr of ["1965","1966"]) {
  specs[`${M}|Falcon (XP)|${yr}|Standard`] = {...xp200, pr:`~$${1895+parseInt(yr)-1965*100}`};
  specs[`${M}|Falcon (XP)|${yr}|Deluxe`]   = {...xp200, wt:"1,165 kg",pr:`~$${2095+parseInt(yr)-1965*100}`};
  specs[`${M}|Falcon (XP)|${yr}|Futura`]   = {...xp200, hp:"90 kW (121 hp)",pr:`~$${2295+parseInt(yr)-1965*100}`};
  specs[`${M}|Falcon (XP)|${yr}|Sprint`]   = {...xp200, hp:"104 kW (139 hp)",tx:"4-speed manual",ts:"175 km/h",pr:`~$${2695+parseInt(yr)-1965*100}`};
}

// ── FORD FALCON XR (1966-68) ──────────────────────────────────────────────────
const xr200 = {en:"3.3L I6 200ci",di:"3.3L",cy:"6",hp:"86 kW (115 hp)",tq:"224 Nm",tx:"3-speed manual / 3-speed Cruise-O-Matic",dr:"RWD",z1:"14.0 sec",qm:"19.5 sec",ts:"162 km/h",fc:"13.5L",fh:"9.0L",fx:"11.0L",ft:"Petrol",wt:"1,220 kg",se:"6",ca:"430 L"};
const xrGT  = {en:"4.7L V8 289ci",di:"4.7L",cy:"8",hp:"149 kW (200 hp)",tq:"372 Nm",tx:"4-speed manual",dr:"RWD",z1:"8.5 sec",qm:"16.5 sec",ts:"195 km/h",fc:"18.0L",fh:"11.5L",fx:"14.5L",ft:"Petrol",wt:"1,340 kg",se:"6",ca:"430 L"};
for (const yr of ["1966","1967","1968"]) {
  specs[`${M}|Falcon (XR)|${yr}|Standard`] = {...xr200, pr:`~$${2095+parseInt(yr)-1966*150}`};
  specs[`${M}|Falcon (XR)|${yr}|500`]      = {...xr200, hp:"90 kW (121 hp)",wt:"1,230 kg",pr:`~$${2295+parseInt(yr)-1966*150}`};
  specs[`${M}|Falcon (XR)|${yr}|GT`]       = {...xrGT, pr:`~$${3095+parseInt(yr)-1966*150}`};
}

// ── FORD FALCON XT (1968-70) ──────────────────────────────────────────────────
const xt250 = {en:"4.1L I6 250ci",di:"4.1L",cy:"6",hp:"101 kW (135 hp)",tq:"278 Nm",tx:"3-speed manual / 3-speed Cruise-O-Matic",dr:"RWD",z1:"12.5 sec",qm:"18.5 sec",ts:"168 km/h",fc:"14.0L",fh:"9.0L",fx:"11.5L",ft:"Petrol",wt:"1,260 kg",se:"6",ca:"440 L"};
const xtGT  = {...xrGT, en:"4.9L V8 302ci",di:"4.9L",hp:"157 kW (210 hp)",tq:"400 Nm",z1:"7.8 sec",qm:"15.8 sec",ts:"200 km/h",wt:"1,380 kg"};
for (const yr of ["1968","1969","1970"]) {
  specs[`${M}|Falcon (XT)|${yr}|Standard`] = {...xt250, pr:`~$${2295+parseInt(yr)-1968*200}`};
  specs[`${M}|Falcon (XT)|${yr}|500`]      = {...xt250, hp:"108 kW (145 hp)",wt:"1,270 kg",pr:`~$${2495+parseInt(yr)-1968*200}`};
  specs[`${M}|Falcon (XT)|${yr}|GT`]       = {...xtGT, pr:`~$${3295+parseInt(yr)-1968*250}`};
}

// ── FORD FALCON XW (1969-70) ──────────────────────────────────────────────────
const xwBase = {...xt250, z1:"12.0 sec"};
const xwGT   = {...xtGT, en:"4.9L V8 302ci"};
const xwGTHO = {...xtGT, en:"4.9L V8 302ci Hi-Po",hp:"224 kW (300 hp)",tq:"475 Nm",z1:"6.5 sec",qm:"14.8 sec",ts:"220 km/h",wt:"1,380 kg"};
specs[`${M}|Falcon (XW)|1969|Standard`]    = {...xwBase, pr:"~$2,595"};
specs[`${M}|Falcon (XW)|1969|500`]         = {...xwBase, hp:"108 kW (145 hp)",pr:"~$2,795"};
specs[`${M}|Falcon (XW)|1969|GT`]          = {...xwGT, pr:"~$3,595"};
specs[`${M}|Falcon (XW)|1969|GTHO Phase I`]= {...xwGTHO, pr:"~$4,495"};
specs[`${M}|Falcon (XW)|1970|Standard`]    = {...xwBase, pr:"~$2,695"};
specs[`${M}|Falcon (XW)|1970|500`]         = {...xwBase, hp:"108 kW (145 hp)",pr:"~$2,895"};
specs[`${M}|Falcon (XW)|1970|GT`]          = {...xwGT, pr:"~$3,695"};
specs[`${M}|Falcon (XW)|1970|GTHO Phase II`]={...xwGTHO, hp:"246 kW (330 hp)",tq:"502 Nm",pr:"~$4,695"};

// ── FORD FALCON XY (1970-72) ──────────────────────────────────────────────────
const xyBase = {...xwBase, wt:"1,280 kg"};
const xyGT   = {...xwGT, wt:"1,400 kg"};
const xyP3   = {en:"5.8L V8 351 Cleveland",di:"5.8L",cy:"8",hp:"261 kW (350 hp)",tq:"537 Nm",tx:"4-speed manual (Toploader)",dr:"RWD",z1:"6.0 sec",qm:"13.9 sec",ts:"225 km/h",fc:"22.0L",fh:"14.0L",fx:"18.0L",ft:"Leaded",wt:"1,430 kg",se:"6",ca:"440 L"};
specs[`${M}|Falcon (XY)|1970|Standard`]      = {...xyBase, pr:"~$2,795"};
specs[`${M}|Falcon (XY)|1970|500`]           = {...xyBase, hp:"108 kW (145 hp)",pr:"~$2,995"};
specs[`${M}|Falcon (XY)|1970|GT`]            = {...xyGT, pr:"~$3,795"};
specs[`${M}|Falcon (XY)|1970|GTHO Phase III`]= {...xyP3, pr:"~$5,195"};
specs[`${M}|Falcon (XY)|1971|Standard`]      = {...xyBase, pr:"~$2,895"};
specs[`${M}|Falcon (XY)|1971|500`]           = {...xyBase, hp:"108 kW (145 hp)",pr:"~$3,095"};
specs[`${M}|Falcon (XY)|1971|GT`]            = {...xyGT, pr:"~$3,895"};
specs[`${M}|Falcon (XY)|1971|GTHO Phase III`]= {...xyP3, pr:"~$5,295"};
specs[`${M}|Falcon (XY)|1972|Standard`]      = {...xyBase, pr:"~$2,995"};
specs[`${M}|Falcon (XY)|1972|500`]           = {...xyBase, hp:"108 kW (145 hp)",pr:"~$3,195"};
specs[`${M}|Falcon (XY)|1972|GT`]            = {...xyGT, pr:"~$3,995"};
specs[`${M}|Falcon (XY)|1972|GTHO Phase IV`] = {...xyP3, hp:"246 kW (330 hp)",tq:"508 Nm",pr:"~$5,495"};

// ── FORD FALCON XA (1972-73) ──────────────────────────────────────────────────
const xa250 = {...xt250, wt:"1,295 kg",ca:"450 L"};
const xa302 = {en:"4.9L V8 302ci",di:"4.9L",cy:"8",hp:"157 kW (210 hp)",tq:"400 Nm",tx:"4-speed manual / 3-speed auto",dr:"RWD",z1:"8.0 sec",qm:"16.0 sec",ts:"200 km/h",fc:"18.0L",fh:"11.5L",fx:"14.5L",ft:"Petrol",wt:"1,380 kg",se:"6",ca:"450 L"};
const xa351 = {en:"5.8L V8 351 Cleveland",di:"5.8L",cy:"8",hp:"224 kW (300 hp)",tq:"488 Nm",tx:"4-speed manual",dr:"RWD",z1:"6.8 sec",qm:"15.0 sec",ts:"210 km/h",fc:"21.0L",fh:"13.5L",fx:"17.5L",ft:"Leaded",wt:"1,420 kg",se:"6",ca:"450 L"};
specs[`${M}|Falcon (XA)|1972|Standard`] = {...xa250, pr:"~$3,095"};
specs[`${M}|Falcon (XA)|1972|500`]      = {...xa250, hp:"108 kW (145 hp)",pr:"~$3,295"};
specs[`${M}|Falcon (XA)|1972|GT`]       = {...xa351, pr:"~$4,295"};
specs[`${M}|Falcon (XA)|1972|GS`]       = {...xa302, hp:"164 kW (220 hp)",pr:"~$3,795"};
specs[`${M}|Falcon (XA)|1972|RPO83`]    = {...xa351, hp:"261 kW (350 hp)",z1:"6.2 sec",qm:"14.4 sec",pr:"~$5,295"};
specs[`${M}|Falcon (XA)|1973|Standard`] = {...xa250, pr:"~$3,195"};
specs[`${M}|Falcon (XA)|1973|500`]      = {...xa250, hp:"108 kW (145 hp)",pr:"~$3,395"};
specs[`${M}|Falcon (XA)|1973|GT`]       = {...xa351, pr:"~$4,395"};
specs[`${M}|Falcon (XA)|1973|GS`]       = {...xa302, hp:"164 kW (220 hp)",pr:"~$3,895"};
specs[`${M}|Falcon (XA)|1973|RPO83`]    = {...xa351, hp:"261 kW (350 hp)",z1:"6.2 sec",qm:"14.4 sec",pr:"~$5,395"};

// ── FORD FALCON XB (1973-76) ──────────────────────────────────────────────────
const xb250 = {...xa250, wt:"1,310 kg"};
const xb302 = {...xa302, wt:"1,395 kg"};
const xb351 = {...xa351, wt:"1,430 kg"};
const xbCob = {...xb351, en:"5.8L V8 351 Cleveland",hp:"224 kW (300 hp)"};
for (const yr of ["1973","1974","1975","1976"]) {
  const b = parseInt(yr)-1973;
  specs[`${M}|Falcon (XB)|${yr}|Standard`] = {...xb250, pr:`~$${3295+b*300}`};
  specs[`${M}|Falcon (XB)|${yr}|500`]      = {...xb250, hp:"108 kW (145 hp)",pr:`~$${3495+b*300}`};
  specs[`${M}|Falcon (XB)|${yr}|GT`]       = {...xb351, pr:`~$${4595+b*300}`};
  specs[`${M}|Falcon (XB)|${yr}|GS`]       = {...xb302, hp:"164 kW (220 hp)",pr:`~$${3995+b*300}`};
  if (yr !== "1976") specs[`${M}|Falcon (XB)|${yr}|Cobra`] = {...xbCob, pr:`~$${5095+b*300}`};
}

// ── FORD FALCON XC (1976-79) ──────────────────────────────────────────────────
const xc250 = {...xb250, en:"4.1L I6 250ci",ts:"162 km/h",z1:"13.0 sec",wt:"1,320 kg",ca:"460 L"};
const xcCob = {...xbCob, hp:"194 kW (260 hp)"};
const xcFmt = {...xc250, hp:"108 kW (145 hp)",wt:"1,335 kg"};
for (const yr of ["1976","1977","1978","1979"]) {
  const b = parseInt(yr)-1976;
  specs[`${M}|Falcon (XC)|${yr}|Standard`] = {...xc250, pr:`~$${4595+b*400}`};
  specs[`${M}|Falcon (XC)|${yr}|500`]      = {...xc250, hp:"108 kW (145 hp)",pr:`~$${4795+b*400}`};
  specs[`${M}|Falcon (XC)|${yr}|Fairmont`] = {...xcFmt, pr:`~$${5295+b*400}`};
  if (yr !== "1979") specs[`${M}|Falcon (XC)|${yr}|Cobra`] = {...xcCob, pr:`~$${5995+b*400}`};
}

// ── FORD FALCON XD (1979-82) ──────────────────────────────────────────────────
const xd250 = {en:"4.1L I6 250ci EFI",di:"4.1L",cy:"6",hp:"108 kW (145 hp)",tq:"285 Nm",tx:"4-speed manual / 3-speed auto",dr:"RWD",z1:"12.0 sec",qm:"18.0 sec",ts:"170 km/h",fc:"13.5L",fh:"9.0L",fx:"11.0L",ft:"Petrol",wt:"1,350 kg",se:"5",ca:"450 L"};
const xd5L  = {en:"5.8L V8 351ci",di:"5.8L",cy:"8",hp:"194 kW (260 hp)",tq:"460 Nm",tx:"3-speed auto",dr:"RWD",z1:"8.5 sec",qm:"16.5 sec",ts:"195 km/h",fc:"20.0L",fh:"13.0L",fx:"16.0L",ft:"Petrol",wt:"1,480 kg",se:"5",ca:"450 L"};
for (const yr of ["1979","1980","1981","1982"]) {
  const b = parseInt(yr)-1979;
  specs[`${M}|Falcon (XD)|${yr}|Standard`]      = {...xd250, pr:`~$${5995+b*500}`};
  specs[`${M}|Falcon (XD)|${yr}|GL`]            = {...xd250, pr:`~$${6495+b*500}`};
  specs[`${M}|Falcon (XD)|${yr}|Fairmont`]      = {...xd250, hp:"114 kW (153 hp)",pr:`~$${7495+b*600}`};
  specs[`${M}|Falcon (XD)|${yr}|Fairmont Ghia`] = {...xd250, hp:"114 kW (153 hp)",wt:"1,380 kg",pr:`~$${9495+b*700}`};
  specs[`${M}|Falcon (XD)|${yr}|ESP`]           = {...xd5L, pr:`~$${11995+b*800}`};
}

// ── FORD FALCON XE (1982-84) ──────────────────────────────────────────────────
const xe41 = {en:"4.1L I6 EFI",di:"4.1L",cy:"6",hp:"114 kW (153 hp)",tq:"300 Nm",tx:"4-speed manual / 4-speed auto",dr:"RWD",z1:"11.5 sec",qm:"17.8 sec",ts:"172 km/h",fc:"13.0L",fh:"8.5L",fx:"10.5L",ft:"Petrol",wt:"1,360 kg",se:"5",ca:"450 L"};
const xe5L  = {...xd5L, tx:"4-speed auto",z1:"8.0 sec"};
for (const yr of ["1982","1983","1984"]) {
  const b = parseInt(yr)-1982;
  specs[`${M}|Falcon (XE)|${yr}|Standard`]      = {...xe41, pr:`~$${8495+b*600}`};
  specs[`${M}|Falcon (XE)|${yr}|GL`]            = {...xe41, pr:`~$${9295+b*600}`};
  specs[`${M}|Falcon (XE)|${yr}|Fairmont`]      = {...xe41, wt:"1,375 kg",pr:`~$${10995+b*700}`};
  specs[`${M}|Falcon (XE)|${yr}|Fairmont Ghia`] = {...xe41, wt:"1,390 kg",pr:`~$${13995+b*800}`};
  specs[`${M}|Falcon (XE)|${yr}|ESP`]           = {...xe5L, pr:`~$${15995+b*900}`};
  specs[`${M}|Falcon (XE)|${yr}|S-Pack`]        = {...xe41, hp:"120 kW (161 hp)",z1:"11.0 sec",pr:`~$${10995+b*700}`};
}

// ── FORD FALCON XF (1984-88) ──────────────────────────────────────────────────
const xf41 = {...xe41, ts:"175 km/h",z1:"11.0 sec",wt:"1,365 kg"};
const xf5L  = {...xe5L, wt:"1,490 kg"};
const xfLR  = {...xf41, se:"2",ca:"Tray/utility"};
for (const yr of ["1984","1985","1986","1987","1988"]) {
  const b = parseInt(yr)-1984;
  specs[`${M}|Falcon (XF)|${yr}|Standard`]      = {...xf41, pr:`~$${9995+b*700}`};
  specs[`${M}|Falcon (XF)|${yr}|GL`]            = {...xf41, pr:`~$${10995+b*700}`};
  specs[`${M}|Falcon (XF)|${yr}|Fairmont`]      = {...xf41, wt:"1,380 kg",pr:`~$${12995+b*800}`};
  specs[`${M}|Falcon (XF)|${yr}|Fairmont Ghia`] = {...xf41, wt:"1,395 kg",pr:`~$${16495+b*900}`};
  specs[`${M}|Falcon (XF)|${yr}|S-Pack`]        = {...xf41, hp:"120 kW (161 hp)",pr:`~$${12495+b*800}`};
  if (parseInt(yr) >= 1986) specs[`${M}|Falcon (XF)|${yr}|Longreach`] = {...xfLR, pr:`~$${11995+b*700}`};
}

// ── FORD FALCON EA (1988-90) ──────────────────────────────────────────────────
const ea40 = {en:"4.0L I6 EFI",di:"4.0L",cy:"6",hp:"125 kW (168 hp)",tq:"325 Nm",tx:"5-speed manual / 4-speed auto",dr:"RWD",z1:"10.5 sec",qm:"17.5 sec",ts:"180 km/h",fc:"13.0L",fh:"8.5L",fx:"10.5L",ft:"Petrol",wt:"1,480 kg",se:"5",ca:"515 L"};
for (const yr of ["1988","1989","1990"]) {
  const b = parseInt(yr)-1988;
  specs[`${M}|Falcon (EA)|${yr}|GL`]            = {...ea40, pr:`~$${16995+b*1000}`};
  specs[`${M}|Falcon (EA)|${yr}|Fairmont`]      = {...ea40, wt:"1,510 kg",pr:`~$${20995+b*1000}`};
  specs[`${M}|Falcon (EA)|${yr}|Fairmont Ghia`] = {...ea40, wt:"1,525 kg",pr:`~$${25995+b*1200}`};
  specs[`${M}|Falcon (EA)|${yr}|S`]             = {...ea40, hp:"132 kW (177 hp)",pr:`~$${18995+b*1000}`};
}

// ── FORD FALCON EB (1991-92) ──────────────────────────────────────────────────
const eb40 = {...ea40, hp:"132 kW (177 hp)",tq:"332 Nm",wt:"1,490 kg"};
const ebXR6 = {...eb40, hp:"155 kW (208 hp)",tq:"340 Nm",tx:"5-speed manual",z1:"9.0 sec",qm:"16.5 sec",ts:"200 km/h",wt:"1,500 kg"};
const ebXR8 = {en:"5.0L V8 EFI",di:"5.0L",cy:"8",hp:"175 kW (235 hp)",tq:"400 Nm",tx:"5-speed manual / 4-speed auto",dr:"RWD",z1:"7.5 sec",qm:"15.5 sec",ts:"215 km/h",fc:"16.5L",fh:"10.5L",fx:"13.0L",ft:"Petrol",wt:"1,550 kg",se:"5",ca:"515 L"};
for (const yr of ["1991","1992"]) {
  const b = parseInt(yr)-1991;
  specs[`${M}|Falcon (EB)|${yr}|GL`]            = {...eb40, pr:`~$${19995+b*1000}`};
  specs[`${M}|Falcon (EB)|${yr}|Fairmont`]      = {...eb40, wt:"1,510 kg",pr:`~$${23995+b*1000}`};
  specs[`${M}|Falcon (EB)|${yr}|Fairmont Ghia`] = {...eb40, wt:"1,525 kg",pr:`~$${29995+b*1200}`};
  specs[`${M}|Falcon (EB)|${yr}|XR6`]           = {...ebXR6, pr:`~$${22995+b*1000}`};
  specs[`${M}|Falcon (EB)|${yr}|XR8`]           = {...ebXR8, pr:`~$${27995+b*1200}`};
}

// ── FORD FALCON ED (1993-94) ──────────────────────────────────────────────────
const edXR6 = {...ebXR6, hp:"160 kW (215 hp)",wt:"1,505 kg"};
const edXR8 = {...ebXR8, hp:"180 kW (241 hp)"};
for (const yr of ["1993","1994"]) {
  const b = parseInt(yr)-1993;
  specs[`${M}|Falcon (ED)|${yr}|GL`]            = {...eb40, pr:`~$${21995+b*1000}`};
  specs[`${M}|Falcon (ED)|${yr}|Fairmont`]      = {...eb40, wt:"1,515 kg",pr:`~$${25995+b*1000}`};
  specs[`${M}|Falcon (ED)|${yr}|Fairmont Ghia`] = {...eb40, wt:"1,530 kg",pr:`~$${31995+b*1200}`};
  specs[`${M}|Falcon (ED)|${yr}|XR6`]           = {...edXR6, pr:`~$${24995+b*1000}`};
  specs[`${M}|Falcon (ED)|${yr}|XR8`]           = {...edXR8, pr:`~$${29995+b*1200}`};
}

// ── FORD FALCON EF (1994-96) ──────────────────────────────────────────────────
const ef40 = {...eb40, hp:"140 kW (188 hp)",tq:"335 Nm",wt:"1,500 kg"};
const efXR6 = {...edXR6, hp:"165 kW (221 hp)"};
const efXR8 = {...edXR8};
for (const yr of ["1994","1995","1996"]) {
  const b = parseInt(yr)-1994;
  specs[`${M}|Falcon (EF)|${yr}|GL`]            = {...ef40, pr:`~$${22995+b*800}`};
  specs[`${M}|Falcon (EF)|${yr}|Fairmont`]      = {...ef40, wt:"1,520 kg",pr:`~$${26995+b*800}`};
  specs[`${M}|Falcon (EF)|${yr}|Fairmont Ghia`] = {...ef40, wt:"1,535 kg",pr:`~$${32995+b*900}`};
  specs[`${M}|Falcon (EF)|${yr}|XR6`]           = {...efXR6, pr:`~$${25995+b*800}`};
  specs[`${M}|Falcon (EF)|${yr}|XR8`]           = {...efXR8, pr:`~$${30995+b*900}`};
}

// ── FORD FALCON EL (1996-98) ──────────────────────────────────────────────────
const el40 = {...ef40, hp:"145 kW (194 hp)",tq:"340 Nm"};
const elXR6 = {...efXR6, hp:"170 kW (228 hp)"};
const elXR8 = {...efXR8, hp:"185 kW (248 hp)"};
const elGT  = {en:"5.0L V8 GT",di:"5.0L",cy:"8",hp:"200 kW (268 hp)",tq:"420 Nm",tx:"5-speed manual",dr:"RWD",z1:"7.0 sec",qm:"15.2 sec",ts:"220 km/h",fc:"16.0L",fh:"10.5L",fx:"13.0L",ft:"Petrol",wt:"1,560 kg",se:"5",ca:"515 L"};
for (const yr of ["1996","1997","1998"]) {
  const b = parseInt(yr)-1996;
  specs[`${M}|Falcon (EL)|${yr}|GL`]            = {...el40, pr:`~$${24995+b*800}`};
  specs[`${M}|Falcon (EL)|${yr}|Fairmont`]      = {...el40, wt:"1,525 kg",pr:`~$${28995+b*900}`};
  specs[`${M}|Falcon (EL)|${yr}|Fairmont Ghia`] = {...el40, wt:"1,540 kg",pr:`~$${35995+b*1000}`};
  specs[`${M}|Falcon (EL)|${yr}|XR6`]           = {...elXR6, pr:`~$${27995+b*900}`};
  specs[`${M}|Falcon (EL)|${yr}|XR8`]           = {...elXR8, pr:`~$${32995+b*1000}`};
  specs[`${M}|Falcon (EL)|${yr}|GT`]            = {...elGT, pr:`~$${39995+b*1200}`};
}

// ── FORD FALCON AU (1998-2001) gaps ───────────────────────────────────────────
const au40 = {en:"Intech 4.0L I6",di:"4.0L",cy:"6",hp:"157 kW (210 hp)",tq:"348 Nm",tx:"5-speed manual / 4-speed auto",dr:"RWD",z1:"9.5 sec",qm:"17.0 sec",ts:"195 km/h",fc:"13.0L",fh:"8.5L",fx:"10.5L",ft:"Petrol",wt:"1,540 kg",se:"5",ca:"535 L"};
const auXR6 = {...au40, hp:"162 kW (217 hp)",tq:"353 Nm",z1:"9.0 sec",qm:"16.5 sec",ts:"200 km/h"};
const auXR8 = {en:"5.0L V8 EFI",di:"5.0L",cy:"8",hp:"185 kW (248 hp)",tq:"405 Nm",tx:"5-speed manual / 4-speed auto",dr:"RWD",z1:"7.8 sec",qm:"15.8 sec",ts:"215 km/h",fc:"16.5L",fh:"10.5L",fx:"13.0L",ft:"Petrol",wt:"1,600 kg",se:"5",ca:"535 L"};
const auT   = {...auXR6, en:"Intech 4.0L I6 Turbo",hp:"240 kW (322 hp)",tq:"450 Nm",z1:"6.5 sec",qm:"14.5 sec",ts:"240 km/h",fc:"16.5L",fh:"10.0L",fx:"13.0L",ft:"98 RON"};
for (const yr of ["1998","1999","2000","2001"]) {
  const b = parseInt(yr)-1998;
  specs[`${M}|Falcon (AU)|${yr}|Forte`]         = {...au40, hp:"152 kW (204 hp)",pr:`~$${25995+b*800}`};
  specs[`${M}|Falcon (AU)|${yr}|Futura`]         = {...au40, pr:`~$${27995+b*800}`};
  specs[`${M}|Falcon (AU)|${yr}|Fairmont`]       = {...au40, wt:"1,555 kg",pr:`~$${31995+b*900}`};
  specs[`${M}|Falcon (AU)|${yr}|Fairmont Ghia`]  = {...au40, wt:"1,570 kg",pr:`~$${38995+b*1000}`};
  specs[`${M}|Falcon (AU)|${yr}|XR6`]            = {...auXR6, pr:`~$${30995+b*900}`};
  specs[`${M}|Falcon (AU)|${yr}|XR8`]            = {...auXR8, pr:`~$${35995+b*1000}`};
  if (yr === "2001") specs[`${M}|Falcon (AU)|2001|XR6 Turbo`] = {...auT, pr:"~$42,990"};
}

// ── FORD FALCON BF gaps (2005-08) ─────────────────────────────────────────────
const bfXT  = {en:"Barra 190 I6",di:"4.0L",cy:"6",hp:"190 kW (255 hp)",tq:"380 Nm",tx:"5-speed manual / 4-speed auto",dr:"RWD",z1:"8.0 sec",qm:"16.0 sec",ts:"210 km/h",fc:"13.5L",fh:"8.5L",fx:"10.8L",ft:"91 RON",wt:"1,590 kg",se:"5",ca:"535 L"};
const bfFmt = {...bfXT, wt:"1,610 kg"};
const bfGhia= {...bfXT, wt:"1,625 kg"};
for (const yr of ["2005","2006","2007","2008"]) {
  const b = parseInt(yr)-2005;
  specs[`${M}|Falcon (BF)|${yr}|XT`]           = {...bfXT, pr:`~$${28990+b*800}`};
  specs[`${M}|Falcon (BF)|${yr}|Futura`]       = {...bfXT, hp:"195 kW (261 hp)",pr:`~$${31990+b*800}`};
  specs[`${M}|Falcon (BF)|${yr}|Fairmont`]     = {...bfFmt, pr:`~$${34990+b*900}`};
  specs[`${M}|Falcon (BF)|${yr}|Fairmont Ghia`]= {...bfGhia, pr:`~$${41990+b*1000}`};
}

// ── FORD FALCON FG X gaps (2011-16) ───────────────────────────────────────────
const fgxBase = {en:"Barra 195 I6",di:"4.0L",cy:"6",hp:"195 kW (261 hp)",tq:"391 Nm",tx:"6-speed manual / 6-speed auto",dr:"RWD",z1:"7.5 sec",qm:"15.6 sec",ts:"215 km/h",fc:"11.8L",fh:"7.6L",fx:"9.5L",ft:"91 RON",wt:"1,633 kg",se:"5",ca:"535 L"};
const fgxG6E  = {...fgxBase, hp:"195 kW (261 hp)",wt:"1,648 kg"};
specs[`${M}|Falcon (FG X)|2011|XT`]           = {...fgxBase, pr:"~$30,990"};
specs[`${M}|Falcon (FG X)|2012|XT`]           = {...fgxBase, pr:"~$31,490"};
specs[`${M}|Falcon (FG X)|2013|XT`]           = {...fgxBase, pr:"~$31,990"};
specs[`${M}|Falcon (FG X)|2014|XT`]           = {...fgxBase, pr:"~$32,490"};
specs[`${M}|Falcon (FG X)|2015|XT`]           = {...fgxBase, pr:"~$32,990"};
specs[`${M}|Falcon (FG X)|2016|XT`]           = {...fgxBase, pr:"~$33,490"};

// ── FORD FALCON UTE (AU-BF) ───────────────────────────────────────────────────
const auUteXL = {...au40, hp:"152 kW (204 hp)",se:"2",ca:"Tray",wt:"1,510 kg"};
const auUteXLS= {...au40, se:"2",ca:"Tray",wt:"1,520 kg"};
const auUteXR6= {...auXR6, se:"2",ca:"Tray",wt:"1,540 kg"};
const auUteXR8= {...auXR8, se:"2",ca:"Tray",wt:"1,580 kg"};
const auUteT  = {...auT, se:"2",ca:"Tray",wt:"1,560 kg"};
specs[`${M}|Falcon Ute (AU-BF)|1999|XL Ute`]         = {...auUteXL, pr:"~$22,990"};
specs[`${M}|Falcon Ute (AU-BF)|1999|XLS Ute`]        = {...auUteXLS, pr:"~$24,990"};
specs[`${M}|Falcon Ute (AU-BF)|1999|XR6 Ute`]        = {...auUteXR6, pr:"~$28,990"};
specs[`${M}|Falcon Ute (AU-BF)|1999|XR8 Ute`]        = {...auUteXR8, pr:"~$33,990"};
const baUteXL = {...bfXT, hp:"182 kW (244 hp)",se:"2",ca:"Tray",wt:"1,530 kg"};
const baUteT  = {en:"Barra 240T I6 Turbo",di:"4.0L",cy:"6",hp:"240 kW (322 hp)",tq:"450 Nm",tx:"5-speed manual / 4-speed auto",dr:"RWD",z1:"5.8 sec",qm:"14.1 sec",ts:"250 km/h (limited)",fc:"16.0L",fh:"9.5L",fx:"12.0L",ft:"91 RON",wt:"1,570 kg",se:"2",ca:"Tray"};
const baUteXR8= {en:"Boss 260 5.4L V8",di:"5.4L",cy:"8",hp:"260 kW (349 hp)",tq:"500 Nm",tx:"5-speed manual",dr:"RWD",z1:"5.8 sec",qm:"14.0 sec",ts:"250 km/h (limited)",fc:"16.5L",fh:"9.8L",fx:"12.5L",ft:"98 RON",wt:"1,600 kg",se:"2",ca:"Tray"};
for (const yr of ["2002","2003","2004"]) {
  const b = parseInt(yr)-2002;
  specs[`${M}|Falcon Ute (AU-BF)|${yr}|XL Ute`]         = {...baUteXL, pr:`~$${23490+b*800}`};
  specs[`${M}|Falcon Ute (AU-BF)|${yr}|XLS Ute`]        = {...baUteXL, hp:"182 kW (244 hp)",pr:`~$${25490+b*800}`};
  specs[`${M}|Falcon Ute (AU-BF)|${yr}|XR6 Ute`]        = {...baUteXL, hp:"182 kW (244 hp)",pr:`~$${29490+b*800}`};
  specs[`${M}|Falcon Ute (AU-BF)|${yr}|XR6 Turbo Ute`]  = {...baUteT, pr:`~$${35490+b*800}`};
  specs[`${M}|Falcon Ute (AU-BF)|${yr}|XR8 Ute`]        = {...baUteXR8, pr:`~$${37490+b*900}`};
}
const bfUteXL  = {...baUteXL, en:"Barra 190 I6",hp:"190 kW (255 hp)",wt:"1,535 kg"};
const bfUteT   = {...baUteT, en:"Barra 245T I6 Turbo",hp:"245 kW (328 hp)",tq:"480 Nm"};
const bfUteXR8 = {...baUteXR8, hp:"260 kW (349 hp)"};
for (const yr of ["2005","2006","2007","2008"]) {
  const b = parseInt(yr)-2005;
  specs[`${M}|Falcon Ute (AU-BF)|${yr}|XL Ute`]         = {...bfUteXL, pr:`~$${24490+b*800}`};
  specs[`${M}|Falcon Ute (AU-BF)|${yr}|XLS Ute`]        = {...bfUteXL, pr:`~$${26490+b*800}`};
  specs[`${M}|Falcon Ute (AU-BF)|${yr}|XR6 Ute`]        = {...bfUteXL, hp:"195 kW (261 hp)",pr:`~$${30490+b*800}`};
  specs[`${M}|Falcon Ute (AU-BF)|${yr}|XR6 Turbo Ute`]  = {...bfUteT, pr:`~$${36490+b*800}`};
  specs[`${M}|Falcon Ute (AU-BF)|${yr}|XR8 Ute`]        = {...bfUteXR8, pr:`~$${38490+b*900}`};
}

// ── FORD FALCON UTE (FG) ─────────────────────────────────────────────────────
const fgUteXR6 = {en:"Barra 195 I6",di:"4.0L",cy:"6",hp:"195 kW (261 hp)",tq:"391 Nm",tx:"6-speed manual / 6-speed auto",dr:"RWD",z1:"7.8 sec",qm:"15.8 sec",ts:"215 km/h",fc:"11.8L",fh:"7.6L",fx:"9.5L",ft:"91 RON",wt:"1,590 kg",se:"2",ca:"Tray"};
const fgUteT   = {en:"Barra 270T I6 Turbo",di:"4.0L",cy:"6",hp:"270 kW (362 hp)",tq:"533 Nm",tx:"6-speed manual / 6-speed auto",dr:"RWD",z1:"5.4 sec",qm:"13.6 sec",ts:"250 km/h (limited)",fc:"13.5L",fh:"8.5L",fx:"10.8L",ft:"98 RON",wt:"1,620 kg",se:"2",ca:"Tray"};
const fgUteXR8 = {en:"Boss 315 5.0L V8",di:"5.0L",cy:"8",hp:"315 kW (422 hp)",tq:"542 Nm",tx:"6-speed manual",dr:"RWD",z1:"5.2 sec",qm:"13.4 sec",ts:"250 km/h (limited)",fc:"15.5L",fh:"9.5L",fx:"12.0L",ft:"98 RON",wt:"1,650 kg",se:"2",ca:"Tray"};
for (const yr of ["2008","2009","2010","2011","2012","2013","2014"]) {
  const b = parseInt(yr)-2008;
  specs[`${M}|Falcon Ute (FG)|${yr}|XR6 Ute`]       = {...fgUteXR6, pr:`~$${30990+b*700}`};
  specs[`${M}|Falcon Ute (FG)|${yr}|XR6 Turbo Ute`]  = {...fgUteT, pr:`~$${37990+b*700}`};
  specs[`${M}|Falcon Ute (FG)|${yr}|XR8 Ute`]        = {...fgUteXR8, pr:`~$${40990+b*700}`};
}

// ── FPV GT (BA-BF) ────────────────────────────────────────────────────────────
const fpvBA = {en:"5.4L V8 Supercharged",di:"5.4L",cy:"8",hp:"290 kW (389 hp)",tq:"542 Nm",tx:"6-speed manual",dr:"RWD",z1:"5.0 sec",qm:"13.2 sec",ts:"250 km/h (limited)",fc:"16.8L",fh:"10.2L",fx:"13.0L",ft:"98 RON",wt:"1,760 kg",se:"5",ca:"535 L"};
const fpvGTP = {...fpvBA, hp:"315 kW (422 hp)",tq:"566 Nm"};
specs[`${M}|FPV GT (BA-BF)|2003|GT`]   = {...fpvBA, pr:"~$69,990"};
specs[`${M}|FPV GT (BA-BF)|2004|GT`]   = {...fpvBA, pr:"~$71,990"};
specs[`${M}|FPV GT (BA-BF)|2004|GT-P`] = {...fpvGTP, pr:"~$79,990"};
specs[`${M}|FPV GT (BA-BF)|2005|GT`]   = {...fpvBA, hp:"302 kW (405 hp)",pr:"~$73,990"};
specs[`${M}|FPV GT (BA-BF)|2005|GT-P`] = {...fpvGTP, pr:"~$81,990"};
specs[`${M}|FPV GT (BA-BF)|2006|GT`]   = {...fpvBA, hp:"302 kW (405 hp)",pr:"~$75,990"};
specs[`${M}|FPV GT (BA-BF)|2006|GT-P`] = {...fpvGTP, pr:"~$83,990"};
specs[`${M}|FPV GT (BA-BF)|2007|GT`]   = {...fpvBA, hp:"302 kW (405 hp)",pr:"~$77,990"};
specs[`${M}|FPV GT (BA-BF)|2007|GT-P`] = {...fpvGTP, pr:"~$85,990"};
specs[`${M}|FPV GT (BA-BF)|2008|GT-E`] = {...fpvGTP, hp:"335 kW (449 hp)",tq:"585 Nm",pr:"~$99,990"};

// ── FPV GT (FG) ───────────────────────────────────────────────────────────────
const fpvFG  = {en:"5.0L V8 Boss 335",di:"5.0L",cy:"8",hp:"335 kW (449 hp)",tq:"570 Nm",tx:"6-speed manual",dr:"RWD",z1:"4.9 sec",qm:"13.0 sec",ts:"250 km/h (limited)",fc:"15.8L",fh:"9.5L",fx:"12.5L",ft:"98 RON",wt:"1,765 kW",se:"5",ca:"535 L"};
const fpvGTP2= {...fpvFG, hp:"351 kW (471 hp)",tq:"600 Nm"};
const fpvGTE = {...fpvFG, hp:"362 kW (486 hp)",tq:"625 Nm"};
for (const yr of ["2008","2009","2010","2011","2012","2013","2014","2015"]) {
  const b = parseInt(yr)-2008;
  specs[`${M}|FPV GT (FG)|${yr}|GT`]   = {...fpvFG, wt:"1,765 kg",pr:`~$${84990+b*1000}`};
  specs[`${M}|FPV GT (FG)|${yr}|GT-P`] = {...fpvGTP2, wt:"1,770 kg",pr:`~$${92990+b*1000}`};
  specs[`${M}|FPV GT (FG)|${yr}|GT-E`] = {...fpvGTE, wt:"1,780 kg",pr:`~$${109990+b*1000}`};
}

require('fs').writeFileSync('src/data/supplement4.json', JSON.stringify({make:'Ford',specs}, null, 2));
console.log('supplement4.json written:', Object.keys(specs).length, 'entries');
