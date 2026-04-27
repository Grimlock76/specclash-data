// gen5.cjs — Fill remaining 147 gaps: Territory, Ranger, Everest, Escape, Focus, F-150, Puma, Falcon BF/FGX, HSV Commodore
const specs = {};
const F = 'Ford';

// ── FORD TERRITORY ────────────────────────────────────────────────────────────
// SX era (2004-2005): 4.0L Barra I6, 182kW, 380Nm, 4sp auto AWD 7-seats
const tSX = {en:"4.0L Barra I6",di:"4.0L",cy:"6",hp:"182 kW (244 hp)",tq:"380 Nm",tx:"4sp auto",dr:"AWD",z1:"10.5 sec",qm:"17.8 sec",ts:"185 km/h",fc:"14.5L",fh:"9.5L",fx:"11.5L",ft:"91 RON",wt:"2,010 kg",se:"7",ca:"560 L"};
specs[`${F}|Territory|2004|TS`]   = {...tSX, pr:"~$42,990"};
specs[`${F}|Territory|2004|Ghia`] = {...tSX, wt:"2,030 kg", pr:"~$47,990"};
specs[`${F}|Territory|2005|TS`]   = {...tSX, pr:"~$43,490"};
specs[`${F}|Territory|2005|Ghia`] = {...tSX, wt:"2,030 kg", pr:"~$48,490"};

// SY era (2007): updated Barra 190kW, 6sp auto
const tSY = {en:"4.0L Barra I6",di:"4.0L",cy:"6",hp:"190 kW (255 hp)",tq:"383 Nm",tx:"6sp auto",dr:"AWD",z1:"9.8 sec",qm:"17.2 sec",ts:"195 km/h",fc:"13.5L",fh:"9.0L",fx:"11.0L",ft:"91 RON",wt:"2,030 kg",se:"7",ca:"560 L"};
specs[`${F}|Territory|2007|SY TS`]   = {...tSY, pr:"~$44,990"};
specs[`${F}|Territory|2007|SY Ghia`] = {...tSY, wt:"2,050 kg", pr:"~$49,990"};
specs[`${F}|Territory|2007|SY SR`]   = {...tSY, z1:"9.5 sec", qm:"16.8 sec", pr:"~$52,990"};

// SY Mk2 (2009): minor refresh
specs[`${F}|Territory|2009|SY Mk2 TX`]   = {...tSY, pr:"~$39,990"};
specs[`${F}|Territory|2009|SY Mk2 TS`]   = {...tSY, pr:"~$44,990"};
specs[`${F}|Territory|2009|SY Mk2 Ghia`] = {...tSY, wt:"2,050 kg", pr:"~$49,990"};
specs[`${F}|Territory|2009|SY Mk2 SR`]   = {...tSY, z1:"9.5 sec", qm:"16.8 sec", pr:"~$52,990"};

// SZ era (2011-2013): 2.7L TDCi diesel V6 for TX/TS; Turbo/SR/Titanium already in data
const tSZd = {en:"2.7L TDCi Diesel V6",di:"2.7L",cy:"6",hp:"140 kW (188 hp)",tq:"440 Nm",tx:"6sp auto",dr:"AWD",z1:"11.0 sec",qm:"17.8 sec",ts:"185 km/h",fc:"9.0L",fh:"6.5L",fx:"7.5L",ft:"Diesel",wt:"2,100 kg",se:"7",ca:"560 L"};
specs[`${F}|Territory|2011|SZ TX`] = {...tSZd, pr:"~$37,990"};
specs[`${F}|Territory|2011|SZ TS`] = {...tSZd, pr:"~$43,990"};
specs[`${F}|Territory|2013|SZ TX`] = {...tSZd, pr:"~$37,990"};
specs[`${F}|Territory|2013|SZ TS`] = {...tSZd, pr:"~$43,990"};

// SZ Mk2 (2015-2016): 2.0L EcoBoost Turbo; SR already in data
const tSZe = {en:"2.0L EcoBoost Turbo I4",di:"2.0L",cy:"4",hp:"149 kW (200 hp)",tq:"300 Nm",tx:"6sp auto",dr:"AWD",z1:"10.0 sec",qm:"17.5 sec",ts:"185 km/h",fc:"9.5L",fh:"7.0L",fx:"8.0L",ft:"95 RON",wt:"1,990 kg",se:"7",ca:"560 L"};
specs[`${F}|Territory|2015|SZ Mk2 TX`]       = {...tSZe, pr:"~$35,990"};
specs[`${F}|Territory|2015|SZ Mk2 TS`]       = {...tSZe, pr:"~$40,990"};
specs[`${F}|Territory|2015|SZ Mk2 Titanium`] = {...tSZe, wt:"2,005 kg", pr:"~$46,990"};
specs[`${F}|Territory|2016|SZ Mk2 TX`]       = {...tSZe, pr:"~$35,990"};
specs[`${F}|Territory|2016|SZ Mk2 TS`]       = {...tSZe, pr:"~$40,990"};
specs[`${F}|Territory|2016|SZ Mk2 Titanium`] = {...tSZe, wt:"2,005 kg", pr:"~$46,990"};

// ── FORD RANGER ──────────────────────────────────────────────────────────────
// PJ era (2006-2009): 2.5L WLAT diesel I4 (XL) or 3.0L WEAT diesel I4 (XLT/Wildtrak)
const rPJxl  = {en:"2.5L WLAT Diesel I4",di:"2.5L",cy:"4",hp:"80 kW (107 hp)",tq:"265 Nm",tx:"5sp manual",dr:"4WD",z1:"14.5 sec",qm:"19.5 sec",ts:"155 km/h",fc:"10.5L",fh:"7.5L",fx:"8.8L",ft:"Diesel",wt:"1,630 kg",se:"5",ca:"Tray"};
const rPJwt  = {en:"3.0L WEAT Diesel I4",di:"3.0L",cy:"4",hp:"115 kW (154 hp)",tq:"330 Nm",tx:"5sp manual / 5sp auto",dr:"4WD",z1:"11.5 sec",qm:"18.0 sec",ts:"168 km/h",fc:"11.5L",fh:"8.0L",fx:"9.5L",ft:"Diesel",wt:"1,700 kg",se:"5",ca:"Tray"};
specs[`${F}|Ranger|2006|PJ XL`]       = {...rPJxl, pr:"~$26,990"};
specs[`${F}|Ranger|2006|PJ XLT`]      = {...rPJwt, pr:"~$32,990"};
specs[`${F}|Ranger|2006|PJ Wildtrak`] = {...rPJwt, z1:"11.0 sec", pr:"~$37,990"};
specs[`${F}|Ranger|2009|PK XL`]       = {...rPJxl, pr:"~$28,990"};
specs[`${F}|Ranger|2009|PK XLT`]      = {...rPJwt, pr:"~$34,990"};
specs[`${F}|Ranger|2009|PK Wildtrak`] = {...rPJwt, z1:"11.0 sec", pr:"~$39,990"};

// PX era (2011-2015): 2.2L Duratorq I4 (XLS) or 3.2L Duratorq I5 (XLT/FX4)
// XL 2011 and Wildtrak 2011 already in data
const rPXsm = {en:"2.2L Duratorq Diesel I4",di:"2.2L",cy:"4",hp:"110 kW (148 hp)",tq:"375 Nm",tx:"6sp man/auto",dr:"4WD",z1:"13.5 sec",qm:"19.0 sec",ts:"165 km/h",fc:"9.2L",fh:"6.9L",fx:"7.9L",ft:"Diesel",wt:"1,965 kg",se:"5",ca:"Tray"};
const rPXlg = {en:"3.2L Duratorq Diesel I5",di:"3.2L",cy:"5",hp:"147 kW (197 hp)",tq:"470 Nm",tx:"6sp auto",dr:"4WD",z1:"11.0 sec",qm:"17.8 sec",ts:"175 km/h",fc:"10.1L",fh:"8.0L",fx:"8.9L",ft:"Diesel",wt:"2,025 kg",se:"5",ca:"Tray"};
specs[`${F}|Ranger|2011|PX XLT`]      = {...rPXlg, pr:"~$43,990"};
specs[`${F}|Ranger|2011|PX XLS`]      = {...rPXsm, pr:"~$36,990"};
specs[`${F}|Ranger|2013|PX XLS`]      = {...rPXsm, pr:"~$37,990"};
specs[`${F}|Ranger|2013|PX FX4`]      = {...rPXlg, pr:"~$47,990"};
specs[`${F}|Ranger|2015|PX XLS`]      = {...rPXsm, pr:"~$38,990"};
specs[`${F}|Ranger|2015|PX FX4`]      = {...rPXlg, pr:"~$48,990"};

// PX Mk2 (2016): minor update
specs[`${F}|Ranger|2016|PX Mk2 XLS`] = {...rPXsm, hp:"118 kW (158 hp)", pr:"~$39,990"};
specs[`${F}|Ranger|2016|PX Mk2 FX4`] = {...rPXlg, pr:"~$49,990"};

// P703 FX4 Max (2022-2024): 2.0L bi-turbo diesel with FX4 off-road pack
const rP703 = {en:"2.0L Bi-Turbo Diesel I4",di:"2.0L",cy:"4",hp:"154 kW (207 hp)",tq:"500 Nm",tx:"10sp auto",dr:"4WD",z1:"10.0 sec",qm:"17.2 sec",ts:"170 km/h",fc:"8.7L",fh:"7.0L",fx:"7.7L",ft:"Diesel",wt:"2,170 kg",se:"5",ca:"Tray"};
specs[`${F}|Ranger|2022|P703 FX4 Max`] = {...rP703, pr:"~$62,990"};
specs[`${F}|Ranger|2023|P703 FX4 Max`] = {...rP703, pr:"~$63,990"};
specs[`${F}|Ranger|2024|P703 FX4 Max`] = {...rP703, pr:"~$64,990"};

// ── FORD EVEREST ──────────────────────────────────────────────────────────────
// UA (2015-2018): 3.2L Duratorq diesel; Titanium already in data
const eUA32 = {en:"3.2L Duratorq Diesel I5",di:"3.2L",cy:"5",hp:"147 kW (197 hp)",tq:"470 Nm",tx:"6sp auto",dr:"4WD",z1:"10.5 sec",qm:"17.8 sec",ts:"180 km/h",fc:"9.5L",fh:"7.8L",fx:"8.5L",ft:"Diesel",wt:"2,245 kg",se:"7",ca:"810 L"};
specs[`${F}|Everest|2015|UA Ambiente`] = {...eUA32, pr:"~$49,990"};
specs[`${F}|Everest|2017|UA Ambiente`] = {...eUA32, pr:"~$50,990"};
specs[`${F}|Everest|2017|UA Sport`]    = {...eUA32, z1:"10.0 sec", pr:"~$58,990"};

// UA Series 2 (2019-2021): 2.0L bi-turbo diesel; Trend/Titanium already in data for most years
const eUA20 = {en:"2.0L Bi-Turbo Diesel I4",di:"2.0L",cy:"4",hp:"154 kW (207 hp)",tq:"500 Nm",tx:"10sp auto",dr:"4WD",z1:"10.5 sec",qm:"17.5 sec",ts:"180 km/h",fc:"9.0L",fh:"7.5L",fx:"8.0L",ft:"Diesel",wt:"2,265 kg",se:"7",ca:"810 L"};
specs[`${F}|Everest|2019|UA Ambiente`] = {...eUA20, pr:"~$51,990"};
specs[`${F}|Everest|2019|UA Sport`]    = {...eUA20, pr:"~$59,990"};
specs[`${F}|Everest|2021|UA Ambiente`] = {...eUA20, pr:"~$53,990"};
specs[`${F}|Everest|2021|UA Trend`]    = {...eUA20, pr:"~$57,990"};
specs[`${F}|Everest|2021|UA Sport`]    = {...eUA20, pr:"~$62,990"};

// UB (2022+): new gen, 2.0L diesel base/mid; Sport(V6)/Titanium already in data
const eUB20 = {en:"2.0L Bi-Turbo Diesel I4",di:"2.0L",cy:"4",hp:"154 kW (207 hp)",tq:"500 Nm",tx:"10sp auto",dr:"4WD",z1:"10.8 sec",qm:"17.8 sec",ts:"178 km/h",fc:"9.0L",fh:"7.2L",fx:"7.9L",ft:"Diesel",wt:"2,300 kg",se:"7",ca:"810 L"};
specs[`${F}|Everest|2022|UB Ambiente`] = {...eUB20, pr:"~$57,990"};
specs[`${F}|Everest|2022|UB Trend`]    = {...eUB20, pr:"~$62,990"};
specs[`${F}|Everest|2023|UB Ambiente`] = {...eUB20, pr:"~$58,990"};
specs[`${F}|Everest|2023|UB Trend`]    = {...eUB20, pr:"~$63,990"};
specs[`${F}|Everest|2024|UB Ambiente`] = {...eUB20, pr:"~$59,990"};
specs[`${F}|Everest|2024|UB Trend`]    = {...eUB20, pr:"~$64,990"};

// ── FORD ESCAPE ───────────────────────────────────────────────────────────────
// ZA (2001-2003): 2.3L Duratec I4 (Ambiente/Freestyle) or 3.0L Duratec V6 (XLT)
const eZAi4  = {en:"2.3L Duratec I4",di:"2.3L",cy:"4",hp:"103 kW (138 hp)",tq:"199 Nm",tx:"5sp manual",dr:"FWD",z1:"11.5 sec",qm:"18.5 sec",ts:"183 km/h",fc:"11.5L",fh:"7.8L",fx:"9.3L",ft:"91 RON",wt:"1,555 kg",se:"5",ca:"793 L"};
const eZAawd = {...eZAi4, tx:"4sp auto", dr:"AWD", wt:"1,610 kg"};
const eZAv6  = {en:"3.0L Duratec V6",di:"3.0L",cy:"6",hp:"149 kW (200 hp)",tq:"271 Nm",tx:"4sp auto",dr:"AWD",z1:"10.2 sec",qm:"17.5 sec",ts:"193 km/h",fc:"12.5L",fh:"8.5L",fx:"10.2L",ft:"91 RON",wt:"1,655 kg",se:"5",ca:"793 L"};
specs[`${F}|Escape|2001|ZA Ambiente`]  = {...eZAi4,  pr:"~$27,990"};
specs[`${F}|Escape|2001|ZA Freestyle`] = {...eZAawd, pr:"~$31,990"};
specs[`${F}|Escape|2003|ZA Ambiente`]  = {...eZAi4,  pr:"~$28,490"};
specs[`${F}|Escape|2003|ZA Freestyle`] = {...eZAawd, pr:"~$32,490"};
specs[`${F}|Escape|2003|ZA XLT`]       = {...eZAv6,  pr:"~$37,490"};

// ZC (2004): Facelift of ZA
specs[`${F}|Escape|2004|ZC Ambiente`]  = {...eZAi4,  pr:"~$28,990"};
specs[`${F}|Escape|2004|ZC Freestyle`] = {...eZAawd, pr:"~$33,990"};

// ZD (2008): Major refresh, revised 2.3L I4 + 3.0L V6
const eZDi4  = {en:"2.3L Duratec I4",di:"2.3L",cy:"4",hp:"119 kW (160 hp)",tq:"213 Nm",tx:"5sp auto",dr:"FWD",z1:"11.0 sec",qm:"18.0 sec",ts:"188 km/h",fc:"11.0L",fh:"7.5L",fx:"9.0L",ft:"91 RON",wt:"1,575 kg",se:"5",ca:"793 L"};
const eZDv6  = {en:"3.0L Duratec V6",di:"3.0L",cy:"6",hp:"149 kW (200 hp)",tq:"271 Nm",tx:"4sp auto",dr:"AWD",z1:"10.0 sec",qm:"17.2 sec",ts:"193 km/h",fc:"12.5L",fh:"8.5L",fx:"10.2L",ft:"91 RON",wt:"1,660 kg",se:"5",ca:"793 L"};
specs[`${F}|Escape|2008|ZD Ambiente`]  = {...eZDi4, pr:"~$28,990"};
specs[`${F}|Escape|2008|ZD Freestyle`] = {...eZDi4, dr:"AWD", wt:"1,630 kg", pr:"~$32,990"};
specs[`${F}|Escape|2008|ZD XLT`]       = {...eZDv6, pr:"~$38,990"};

// ZF (2012-2014): EcoBoost era; Trend already in data
const eZFe16 = {en:"1.6L EcoBoost Turbo I4",di:"1.6L",cy:"4",hp:"134 kW (180 hp)",tq:"240 Nm",tx:"6sp PowerShift",dr:"FWD",z1:"10.5 sec",qm:"17.5 sec",ts:"195 km/h",fc:"8.5L",fh:"6.0L",fx:"7.0L",ft:"95 RON",wt:"1,558 kg",se:"5",ca:"793 L"};
const eZFe20 = {en:"2.0L EcoBoost Turbo I4",di:"2.0L",cy:"4",hp:"179 kW (240 hp)",tq:"345 Nm",tx:"6sp auto",dr:"AWD",z1:"8.5 sec",qm:"16.5 sec",ts:"205 km/h",fc:"10.5L",fh:"7.5L",fx:"8.7L",ft:"95 RON",wt:"1,636 kg",se:"5",ca:"793 L"};
specs[`${F}|Escape|2012|ZF Ambiente`]  = {...eZFe16, pr:"~$27,990"};
specs[`${F}|Escape|2012|ZF Titanium`]  = {...eZFe20, pr:"~$36,990"};
specs[`${F}|Escape|2014|ZF Ambiente`]  = {...eZFe16, pr:"~$28,990"};
specs[`${F}|Escape|2014|ZF Titanium`]  = {...eZFe20, pr:"~$37,990"};

// ZG (2018-2020): Refreshed EcoBoost; 1.5L FWD base, 2.0L AWD upper
const eZGe15 = {en:"1.5L EcoBoost Turbo I4",di:"1.5L",cy:"4",hp:"134 kW (180 hp)",tq:"240 Nm",tx:"6sp auto",dr:"FWD",z1:"10.5 sec",qm:"17.5 sec",ts:"195 km/h",fc:"8.5L",fh:"6.0L",fx:"7.0L",ft:"95 RON",wt:"1,560 kg",se:"5",ca:"793 L"};
const eZGe20 = {en:"2.0L EcoBoost Turbo I4",di:"2.0L",cy:"4",hp:"179 kW (240 hp)",tq:"345 Nm",tx:"8sp auto",dr:"AWD",z1:"8.3 sec",qm:"16.3 sec",ts:"205 km/h",fc:"9.8L",fh:"7.0L",fx:"8.1L",ft:"95 RON",wt:"1,647 kg",se:"5",ca:"793 L"};
specs[`${F}|Escape|2018|ZG Ambiente`]  = {...eZGe15, pr:"~$29,990"};
specs[`${F}|Escape|2018|ZG Trend`]     = {...eZGe15, dr:"AWD", wt:"1,600 kg", pr:"~$33,490"};
specs[`${F}|Escape|2018|ZG ST-Line`]   = {...eZGe20, pr:"~$37,990"};
specs[`${F}|Escape|2018|ZG Titanium`]  = {...eZGe20, pr:"~$39,990"};
specs[`${F}|Escape|2020|ZG Ambiente`]  = {...eZGe15, pr:"~$30,990"};
specs[`${F}|Escape|2020|ZG Trend`]     = {...eZGe15, dr:"AWD", wt:"1,600 kg", pr:"~$34,490"};
specs[`${F}|Escape|2020|ZG ST-Line`]   = {...eZGe20, pr:"~$38,990"};
specs[`${F}|Escape|2020|ZG Titanium`]  = {...eZGe20, pr:"~$40,990"};

// ZH (2021-2023): Hybrid; Titanium 2021 already in data
const eZHhev = {en:"2.5L Atkinson FHEV Hybrid I4",di:"2.5L",cy:"4",hp:"165 kW (221 hp)",tq:"209 Nm",tx:"CVT",dr:"FWD",z1:"9.0 sec",qm:"16.8 sec",ts:"185 km/h",fc:"6.1L",fh:"5.7L",fx:"5.9L",ft:"Hybrid",wt:"1,720 kg",se:"5",ca:"793 L"};
specs[`${F}|Escape|2021|ZH Ambiente`]  = {...eZHhev, pr:"~$34,990"};
specs[`${F}|Escape|2021|ZH Trend`]     = {...eZHhev, pr:"~$38,990"};
specs[`${F}|Escape|2021|ZH ST-Line`]   = {...eZHhev, pr:"~$41,990"};
specs[`${F}|Escape|2023|ZH Ambiente`]  = {...eZHhev, pr:"~$36,990"};
specs[`${F}|Escape|2023|ZH Trend`]     = {...eZHhev, pr:"~$40,990"};
specs[`${F}|Escape|2023|ZH ST-Line`]   = {...eZHhev, pr:"~$43,990"};

// ── FORD FOCUS ────────────────────────────────────────────────────────────────
// LR (2002-2005): 2.0L Zetec I4
const fLR = {en:"2.0L Zetec I4",di:"2.0L",cy:"4",hp:"96 kW (129 hp)",tq:"175 Nm",tx:"5sp manual",dr:"FWD",z1:"11.8 sec",qm:"18.5 sec",ts:"185 km/h",fc:"9.5L",fh:"6.5L",fx:"7.8L",ft:"91 RON",wt:"1,200 kg",se:"5",ca:"335 L"};
specs[`${F}|Focus|2002|LR CL`]    = {...fLR, pr:"~$21,990"};
specs[`${F}|Focus|2002|LR Zetec`] = {...fLR, pr:"~$24,490"};
specs[`${F}|Focus|2002|LR Ghia`]  = {...fLR, tx:"4sp auto", wt:"1,225 kg", pr:"~$27,490"};
specs[`${F}|Focus|2003|LR CL`]    = {...fLR, pr:"~$22,490"};
specs[`${F}|Focus|2003|LR Zetec`] = {...fLR, pr:"~$24,990"};
specs[`${F}|Focus|2003|LR Ghia`]  = {...fLR, tx:"4sp auto", wt:"1,225 kg", pr:"~$27,990"};

// LS (2005-2007): Facelift, upgraded 2.0L Duratec
const fLS = {...fLR, en:"2.0L Duratec I4", hp:"107 kW (143 hp)", tq:"185 Nm"};
specs[`${F}|Focus|2005|LS CL`]    = {...fLR, pr:"~$22,990"};
specs[`${F}|Focus|2005|LS Zetec`] = {...fLS, pr:"~$25,490"};
specs[`${F}|Focus|2005|LS Ghia`]  = {...fLS, tx:"4sp auto", wt:"1,225 kg", pr:"~$28,490"};

// LT (2007-2009): 2.0L Duratec or 2.0L TDCi diesel; CL already in data
const fLTpet = {...fLS, z1:"11.0 sec", qm:"18.0 sec"};
const fLTdsl = {en:"2.0L TDCi Diesel I4",di:"2.0L",cy:"4",hp:"100 kW (134 hp)",tq:"320 Nm",tx:"6sp manual",dr:"FWD",z1:"11.5 sec",qm:"18.2 sec",ts:"185 km/h",fc:"7.0L",fh:"5.0L",fx:"5.8L",ft:"Diesel",wt:"1,280 kg",se:"5",ca:"335 L"};
specs[`${F}|Focus|2007|LT Zetec`] = {...fLTpet, pr:"~$26,490"};
specs[`${F}|Focus|2007|LT TDCi`]  = {...fLTdsl, pr:"~$28,990"};

// LV (2009-2011): 2.0L Duratec update; XR5 Turbo same engine as LW XR5
const fLV    = {...fLTpet};
const fLVxr5 = {en:"2.5L I5 Turbo (Volvo)",di:"2.5L",cy:"5",hp:"166 kW (223 hp)",tq:"340 Nm",tx:"6sp manual",dr:"FWD",z1:"6.8 sec",qm:"15.0 sec",ts:"235 km/h",fc:"11.5L",fh:"7.8L",fx:"9.3L",ft:"98 RON",wt:"1,406 kg",se:"5",ca:"335 L"};
specs[`${F}|Focus|2009|LV CL`]        = {...fLV, pr:"~$23,490"};
specs[`${F}|Focus|2009|LV Zetec`]     = {...fLV, pr:"~$25,990"};
specs[`${F}|Focus|2009|LV XR5 Turbo`] = {...fLVxr5, pr:"~$34,990"};

// LW (2011-2015): New gen Mk3; XR5/Trend/ST already in data
const fLWbase = {en:"2.0L Ti-VCT I4",di:"2.0L",cy:"4",hp:"118 kW (158 hp)",tq:"202 Nm",tx:"6sp PowerShift",dr:"FWD",z1:"10.5 sec",qm:"17.5 sec",ts:"192 km/h",fc:"9.0L",fh:"5.5L",fx:"7.0L",ft:"91 RON",wt:"1,310 kg",se:"5",ca:"385 L"};
const fLWtit  = {en:"1.6L EcoBoost Turbo I4",di:"1.6L",cy:"4",hp:"134 kW (180 hp)",tq:"240 Nm",tx:"6sp PowerShift",dr:"FWD",z1:"8.9 sec",qm:"16.8 sec",ts:"210 km/h",fc:"8.5L",fh:"5.8L",fx:"6.9L",ft:"95 RON",wt:"1,320 kg",se:"5",ca:"385 L"};
specs[`${F}|Focus|2011|LW Ambiente`]  = {...fLWbase, pr:"~$24,990"};
specs[`${F}|Focus|2011|LW Titanium`]  = {...fLWtit, pr:"~$31,990"};
specs[`${F}|Focus|2013|LW Ambiente`]  = {...fLWbase, pr:"~$25,490"};
specs[`${F}|Focus|2013|LW Titanium`]  = {...fLWtit, pr:"~$32,490"};

// LZ (2015-2018): Facelift; ST already in data
const fLZbase = {en:"1.5L EcoBoost Turbo I4",di:"1.5L",cy:"4",hp:"110 kW (148 hp)",tq:"210 Nm",tx:"6sp auto",dr:"FWD",z1:"10.2 sec",qm:"17.5 sec",ts:"195 km/h",fc:"8.0L",fh:"5.5L",fx:"6.5L",ft:"95 RON",wt:"1,285 kg",se:"5",ca:"385 L"};
const fLZtit  = {en:"1.5L EcoBoost Turbo I4",di:"1.5L",cy:"4",hp:"134 kW (180 hp)",tq:"240 Nm",tx:"6sp auto",dr:"FWD",z1:"9.3 sec",qm:"16.8 sec",ts:"205 km/h",fc:"8.0L",fh:"5.8L",fx:"6.7L",ft:"95 RON",wt:"1,295 kg",se:"5",ca:"385 L"};
specs[`${F}|Focus|2015|LZ Ambiente`]  = {...fLZbase, pr:"~$23,990"};
specs[`${F}|Focus|2015|LZ Trend`]     = {...fLZbase, pr:"~$26,990"};
specs[`${F}|Focus|2015|LZ Titanium`]  = {...fLZtit, pr:"~$30,990"};
specs[`${F}|Focus|2017|LZ Ambiente`]  = {...fLZbase, pr:"~$24,490"};
specs[`${F}|Focus|2017|LZ Trend`]     = {...fLZbase, pr:"~$27,490"};
specs[`${F}|Focus|2017|LZ Titanium`]  = {...fLZtit, pr:"~$31,490"};
specs[`${F}|Focus|2018|LZ Ambiente`]  = {...fLZbase, pr:"~$24,490"};
specs[`${F}|Focus|2018|LZ Trend`]     = {...fLZbase, pr:"~$27,490"};
specs[`${F}|Focus|2018|LZ Titanium`]  = {...fLZtit, pr:"~$31,490"};

// ── FORD F-150 ────────────────────────────────────────────────────────────────
// XLT: 5.0L Coyote V8 | Lariat: 5.0L V8 with more features | Raptor (2018-2019): 3.5L EB
const f150xlt = {en:"5.0L Coyote V8",di:"5.0L",cy:"8",hp:"294 kW (394 hp)",tq:"542 Nm",tx:"10sp auto",dr:"4WD",z1:"6.5 sec",qm:"14.8 sec",ts:"175 km/h",fc:"17.0L",fh:"12.0L",fx:"14.3L",ft:"95 RON",wt:"2,040 kg",se:"5",ca:"Tray"};
const f150lar = {...f150xlt, hp:"298 kW (400 hp)"};
const f150rap = {en:"3.5L EcoBoost Bi-Turbo V6",di:"3.5L",cy:"6",hp:"336 kW (450 hp)",tq:"691 Nm",tx:"10sp auto",dr:"4WD",z1:"5.8 sec",qm:"14.2 sec",ts:"180 km/h",fc:"17.0L",fh:"11.5L",fx:"14.0L",ft:"95 RON",wt:"2,508 kg",se:"5",ca:"Tray"};
for (const yr of ['2018','2019']) {
  const b = parseInt(yr) - 2018;
  specs[`${F}|F-150|${yr}|XLT`]    = {...f150xlt, pr:`~$${55990 + b * 1000}`};
  specs[`${F}|F-150|${yr}|Lariat`] = {...f150lar,  pr:`~$${65990 + b * 1000}`};
  specs[`${F}|F-150|${yr}|Raptor`] = {...f150rap,  pr:`~$${99990 + b * 2000}`};
}
for (const yr of ['2020','2021','2022','2023','2024']) {
  const b = parseInt(yr) - 2020;
  specs[`${F}|F-150|${yr}|XLT`]    = {...f150xlt, pr:`~$${60990 + b * 1500}`};
  specs[`${F}|F-150|${yr}|Lariat`] = {...f150lar,  pr:`~$${72990 + b * 1500}`};
}

// ── FORD PUMA ─────────────────────────────────────────────────────────────────
// ST-Line X (2020-2022): 1.0L EcoBoost mHEV 114kW (higher output vs ST-Line)
const pSLX  = {en:"1.0L EcoBoost mHEV I3",di:"1.0L",cy:"3",hp:"114 kW (153 hp)",tq:"210 Nm",tx:"7sp DCT",dr:"FWD",z1:"9.0 sec",qm:"16.8 sec",ts:"198 km/h",fc:"7.1L",fh:"4.8L",fx:"5.7L",ft:"95 RON",wt:"1,297 kg",se:"5",ca:"456 L"};
specs[`${F}|Puma|2020|ST-Line X`]  = {...pSLX, pr:"~$37,990"};
specs[`${F}|Puma|2021|ST-Line X`]  = {...pSLX, pr:"~$38,490"};
specs[`${F}|Puma|2022|ST-Line X`]  = {...pSLX, pr:"~$38,990"};
// 2023-2024 refresh: ST-Line (mHEV 92kW), ST-Line X (mHEV 114kW), ST (1.5L I3 147kW)
const pSL23 = {en:"1.0L EcoBoost mHEV I3",di:"1.0L",cy:"3",hp:"92 kW (123 hp)",tq:"170 Nm",tx:"7sp DCT",dr:"FWD",z1:"9.7 sec",qm:"17.2 sec",ts:"190 km/h",fc:"6.8L",fh:"4.6L",fx:"5.5L",ft:"95 RON",wt:"1,284 kg",se:"5",ca:"456 L"};
const pST24 = {en:"1.5L EcoBoost Turbo I3",di:"1.5L",cy:"3",hp:"147 kW (197 hp)",tq:"320 Nm",tx:"6sp manual",dr:"FWD",z1:"6.7 sec",qm:"15.0 sec",ts:"222 km/h",fc:"8.8L",fh:"6.2L",fx:"7.2L",ft:"95 RON",wt:"1,380 kg",se:"5",ca:"456 L"};
specs[`${F}|Puma|2023|ST-Line`]    = {...pSL23, pr:"~$35,990"};
specs[`${F}|Puma|2023|ST-Line X`]  = {...pSLX, pr:"~$39,990"};
specs[`${F}|Puma|2024|ST-Line`]    = {...pSL23, pr:"~$36,990"};
specs[`${F}|Puma|2024|ST-Line X`]  = {...pSLX, pr:"~$40,990"};
specs[`${F}|Puma|2024|ST`]         = {...pST24, pr:"~$50,990"};

// ── FORD FALCON (BF) 2008 ────────────────────────────────────────────────────
specs[`${F}|Falcon (BF)|2008|XR6`]       = {en:"4.0L Barra 195 I6",di:"4.0L",cy:"6",hp:"195 kW (261 hp)",tq:"383 Nm",tx:"6sp ZF auto",dr:"RWD",z1:"7.2 sec",qm:"15.2 sec",ts:"235 km/h",fc:"12.0L",fh:"8.5L",fx:"10.0L",ft:"91 RON",wt:"1,680 kg",se:"5",ca:"465 L",pr:"~$38,990"};
specs[`${F}|Falcon (BF)|2008|XR6 Turbo`] = {en:"4.0L Barra 245T Turbo I6",di:"4.0L",cy:"6",hp:"290 kW (389 hp)",tq:"533 Nm",tx:"6sp ZF auto",dr:"RWD",z1:"5.4 sec",qm:"13.5 sec",ts:"250 km/h",fc:"13.5L",fh:"9.0L",fx:"11.0L",ft:"98 RON",wt:"1,720 kg",se:"5",ca:"465 L",pr:"~$48,990"};
specs[`${F}|Falcon (BF)|2008|XR8`]       = {en:"5.4L Boss 290 V8",di:"5.4L",cy:"8",hp:"290 kW (389 hp)",tq:"505 Nm",tx:"6sp ZF auto",dr:"RWD",z1:"5.4 sec",qm:"13.5 sec",ts:"250 km/h",fc:"16.0L",fh:"10.5L",fx:"13.0L",ft:"98 RON",wt:"1,730 kg",se:"5",ca:"465 L",pr:"~$48,990"};

// ── FORD FALCON (FG X) 2011 ────────────────────────────────────────────────────
const fgxI6  = {en:"4.0L Barra I6",di:"4.0L",cy:"6",hp:"195 kW (261 hp)",tq:"383 Nm",tx:"6sp ZF auto",dr:"RWD",z1:"7.0 sec",qm:"15.0 sec",ts:"238 km/h",fc:"12.0L",fh:"8.0L",fx:"9.8L",ft:"91 RON",wt:"1,630 kg",se:"5",ca:"465 L"};
const fgxT   = {en:"4.0L Barra Turbo I6",di:"4.0L",cy:"6",hp:"270 kW (362 hp)",tq:"533 Nm",tx:"6sp ZF auto",dr:"RWD",z1:"5.5 sec",qm:"13.6 sec",ts:"250 km/h",fc:"13.0L",fh:"8.8L",fx:"10.8L",ft:"98 RON",wt:"1,680 kg",se:"5",ca:"465 L"};
const fgxV8  = {en:"5.4L Boss 315 V8",di:"5.4L",cy:"8",hp:"315 kW (422 hp)",tq:"542 Nm",tx:"6sp ZF auto",dr:"RWD",z1:"5.0 sec",qm:"13.2 sec",ts:"250 km/h",fc:"15.0L",fh:"10.0L",fx:"12.3L",ft:"98 RON",wt:"1,720 kg",se:"5",ca:"465 L"};
specs[`${F}|Falcon (FG X)|2011|G6`]        = {...fgxI6, pr:"~$38,990"};
specs[`${F}|Falcon (FG X)|2011|G6E`]       = {...fgxT,  pr:"~$43,990"};
specs[`${F}|Falcon (FG X)|2011|XR6`]       = {...fgxI6, pr:"~$38,990"};
specs[`${F}|Falcon (FG X)|2011|XR6 Turbo`] = {...fgxT,  pr:"~$47,990"};
specs[`${F}|Falcon (FG X)|2011|XR8`]       = {...fgxV8, pr:"~$52,990"};

// ── HOLDEN HSV COMMODORE ─────────────────────────────────────────────────────
// VE Clubsport/Maloo base (no R8 package, same LS2 engine as R8 variants)
const veLS2 = {en:"LS2 V8",di:"6.0L",cy:"8",hp:"297 kW (398 hp)",tq:"550 Nm",tx:"6-speed manual",dr:"RWD",z1:"5.0 sec",qm:"13.2 sec",ts:"260 km/h",fc:"15.5L",fh:"9.4L",fx:"12.3L",ft:"98 RON",wt:"1,760 kg",se:"5",ca:"460 L"};
specs["HSV Commodore|2007|VE Clubsport"] = {...veLS2, pr:"~$68,990"};
specs["HSV Commodore|2007|VE Maloo"]     = {...veLS2, wt:"1,780 kg", se:"2", ca:"Tray", pr:"~$64,990"};
// VF GEN-F (2013-2014): GTS = LS3 NA; Maloo R8 LSA / Clubsport R8 LSA = supercharged LSA
const vfLS3 = {en:"LS3 V8",di:"6.2L",cy:"8",hp:"317 kW (425 hp)",tq:"570 Nm",tx:"6-speed manual / 6-speed auto",dr:"RWD",z1:"4.9 sec",qm:"13.0 sec",ts:"250 km/h",fc:"16.5L",fh:"10.5L",fx:"13.2L",ft:"98 RON",wt:"1,810 kg",se:"5",ca:"460 L"};
const vfLSA = {en:"LSA Supercharged V8",di:"6.2L",cy:"8",hp:"430 kW (577 hp)",tq:"740 Nm",tx:"6-speed manual",dr:"RWD",z1:"4.2 sec",qm:"12.2 sec",ts:"260 km/h",fc:"18.0L",fh:"11.5L",fx:"14.5L",ft:"98 RON",wt:"1,850 kg",se:"5",ca:"460 L"};
specs["HSV Commodore|2013|VF GTS GEN-F LS3"]   = {...vfLS3, pr:"~$74,990"};
specs["HSV Commodore|2013|VF Clubsport R8 LSA"] = {...vfLSA, pr:"~$89,990"};
specs["HSV Commodore|2013|VF Maloo R8 LSA"]     = {...vfLSA, wt:"1,870 kg", se:"2", ca:"Tray", pr:"~$85,990"};
specs["HSV Commodore|2014|VF GTS GEN-F LS3"]   = {...vfLS3, pr:"~$75,990"};
specs["HSV Commodore|2014|VF Clubsport R8 LSA"] = {...vfLSA, pr:"~$90,990"};
specs["HSV Commodore|2014|VF Maloo R8 LSA"]     = {...vfLSA, wt:"1,870 kg", se:"2", ca:"Tray", pr:"~$86,990"};

require('fs').writeFileSync('src/data/supplement5.json', JSON.stringify({make:'Ford',specs}, null, 2));
console.log('supplement5.json written:', Object.keys(specs).length, 'entries');
