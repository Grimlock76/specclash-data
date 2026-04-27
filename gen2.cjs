// Holden Commodore VB-VZ, Statesman, Monaro early, Ute early, HSV early
const specs = {};

// ── VB (1978-80) ─────────────────────────────────────────────────────────────
const vb202 = {en:"3.3L I6 202",di:"3.3L",cy:"6",hp:"90 kW (121 hp)",tq:"224 Nm",tx:"3-speed manual / 3-speed auto",dr:"RWD",z1:"13.0 sec",qm:"18.5 sec",ts:"163 km/h",fc:"15.5L",fh:"10.0L",fx:"12.5L",ft:"Leaded",wt:"1,190 kg",se:"5",ca:"390 L"};
specs["Commodore (VB)|1978|VB SL"]      = {...vb202, pr:"~$5,795"};
specs["Commodore (VB)|1978|VB SL/E"]    = {...vb202, wt:"1,210 kg",pr:"~$6,495"};
specs["Commodore (VB)|1978|VB Executive"]= {...vb202, en:"4.2L V8 253",di:"4.2L",cy:"8",hp:"130 kW (174 hp)",tq:"340 Nm",tx:"3-speed auto",wt:"1,280 kg",pr:"~$7,495"};
specs["Commodore (VB)|1979|VB SL"]      = {...vb202, pr:"~$6,295"};
specs["Commodore (VB)|1979|VB SL/E"]    = {...vb202, wt:"1,210 kg",pr:"~$6,995"};
specs["Commodore (VB)|1979|VB Executive"]= {...vb202, en:"4.2L V8 253",di:"4.2L",cy:"8",hp:"130 kW (174 hp)",tq:"340 Nm",tx:"3-speed auto",wt:"1,280 kg",pr:"~$7,995"};
specs["Commodore (VB)|1980|VB SL"]      = {...vb202, pr:"~$6,795"};

// ── VC (1980-81) ─────────────────────────────────────────────────────────────
const vc202 = {...vb202, en:"3.3L I6 202",wt:"1,195 kg"};
specs["Commodore (VC)|1980|VC SL/E"]    = {...vc202, wt:"1,215 kg",pr:"~$7,495"};
specs["Commodore (VC)|1980|VC Executive"]= {...vc202, en:"4.2L V8 253",di:"4.2L",cy:"8",hp:"130 kW (174 hp)",tq:"340 Nm",tx:"3-speed auto",wt:"1,290 kg",pr:"~$8,295"};
specs["Commodore (VC)|1981|VC SL/E"]    = {...vc202, wt:"1,215 kg",pr:"~$7,995"};
specs["Commodore (VC)|1981|VC Executive"]= {...vc202, en:"4.2L V8 253",di:"4.2L",cy:"8",hp:"130 kW (174 hp)",tq:"340 Nm",tx:"3-speed auto",wt:"1,290 kg",pr:"~$8,795"};

// ── VH (1981-83) ─────────────────────────────────────────────────────────────
const vh202 = {en:"3.3L I6 202",di:"3.3L",cy:"6",hp:"90 kW (121 hp)",tq:"224 Nm",tx:"4-speed manual / 3-speed auto",dr:"RWD",z1:"12.8 sec",qm:"18.2 sec",ts:"165 km/h",fc:"15.0L",fh:"9.8L",fx:"12.2L",ft:"Leaded",wt:"1,210 kg",se:"5",ca:"395 L"};
const vh5L   = {...vh202, en:"5.0L V8 308",di:"5.0L",cy:"8",hp:"150 kW (201 hp)",tq:"380 Nm",tx:"4-speed manual / 3-speed auto",z1:"8.5 sec",qm:"16.2 sec",ts:"200 km/h",wt:"1,330 kg"};
for (const yr of ["1981","1982","1983"]) {
  specs[`Commodore (VH)|${yr}|VH SL/E`]    = {...vh202, wt:"1,225 kg",pr:`~$${8995+parseInt(yr)-1981*500}`};
  specs[`Commodore (VH)|${yr}|VH Berlina`]  = {...vh202, tx:"3-speed auto",wt:"1,230 kg",pr:`~$${10495+parseInt(yr)-1981*600}`};
  specs[`Commodore (VH)|${yr}|VH Executive`]= {...vh5L, tx:"3-speed auto",pr:`~$${13495+parseInt(yr)-1981*700}`};
}

// ── VK (1984-86) ─────────────────────────────────────────────────────────────
const vk202 = {en:"3.3L I6 202",di:"3.3L",cy:"6",hp:"90 kW (121 hp)",tq:"224 Nm",tx:"5-speed manual / 3-speed auto",dr:"RWD",z1:"12.5 sec",qm:"18.0 sec",ts:"168 km/h",fc:"14.5L",fh:"9.5L",fx:"12.0L",ft:"Leaded",wt:"1,230 kg",se:"5",ca:"400 L"};
const vk308  = {...vk202, en:"5.0L V8 308",di:"5.0L",cy:"8",hp:"150 kW (201 hp)",tq:"380 Nm",z1:"8.5 sec",qm:"16.2 sec",ts:"200 km/h",wt:"1,360 kg"};
for (const yr of ["1984","1985","1986"]) {
  const base = parseInt(yr)-1984;
  specs[`Commodore (VK)|${yr}|VK SL`]     = {...vk202, pr:`~$${9495+base*600}`};
  specs[`Commodore (VK)|${yr}|VK SL/E`]   = {...vk202, wt:"1,240 kg",pr:`~$${10995+base*600}`};
  specs[`Commodore (VK)|${yr}|VK Berlina`] = {...vk202, tx:"3-speed auto",wt:"1,245 kg",pr:`~$${12495+base*700}`};
  specs[`Commodore (VK)|${yr}|VK Calais`]  = {...vk308, tx:"3-speed auto",pr:`~$${17995+base*800}`};
}

// ── VL (1986-88) ─────────────────────────────────────────────────────────────
const vlRB30 = {en:"RB30E I6",di:"3.0L",cy:"6",hp:"109 kW (146 hp)",tq:"231 Nm",tx:"5-speed manual / 4-speed auto",dr:"RWD",z1:"10.5 sec",qm:"17.8 sec",ts:"185 km/h",fc:"13.0L",fh:"8.5L",fx:"10.5L",ft:"Petrol",wt:"1,300 kg",se:"5",ca:"390 L"};
for (const yr of ["1986","1987","1988"]) {
  const base = parseInt(yr)-1986;
  specs[`Commodore (VL)|${yr}|VL Executive`] = {...vlRB30, pr:`~$${13995+base*1000}`};
  specs[`Commodore (VL)|${yr}|VL Berlina`]   = {...vlRB30, tx:"4-speed auto",wt:"1,310 kg",pr:`~$${16495+base*1000}`};
  specs[`Commodore (VL)|${yr}|VL Calais`]    = {...vlRB30, tx:"4-speed auto",wt:"1,320 kg",pr:`~$${19995+base*1200}`};
}

// ── VN (1988-90) ─────────────────────────────────────────────────────────────
const vn38 = {en:"3.8L V6 Buick",di:"3.8L",cy:"6",hp:"122 kW (164 hp)",tq:"298 Nm",tx:"4-speed auto",dr:"RWD",z1:"10.0 sec",qm:"17.2 sec",ts:"195 km/h",fc:"14.0L",fh:"9.0L",fx:"11.2L",ft:"Petrol",wt:"1,360 kg",se:"5",ca:"380 L"};
for (const yr of ["1988","1989","1990"]) {
  const base = parseInt(yr)-1988;
  specs[`Commodore (VN)|${yr}|VN Executive`] = {...vn38, pr:`~$${15995+base*1000}`};
  specs[`Commodore (VN)|${yr}|VN Berlina`]   = {...vn38, pr:`~$${18995+base*1000}`};
  specs[`Commodore (VN)|${yr}|VN Calais`]    = {...vn38, wt:"1,380 kg",pr:`~$${23995+base*1200}`};
}

// ── VP (1991-93) ─────────────────────────────────────────────────────────────
const vp38 = {...vn38, en:"3.8L V6",hp:"130 kW (174 hp)",wt:"1,365 kg",ca:"395 L"};
for (const yr of ["1991","1992","1993"]) {
  const base = parseInt(yr)-1991;
  specs[`Commodore (VP)|${yr}|VP Executive`] = {...vp38, pr:`~$${17995+base*1000}`};
  specs[`Commodore (VP)|${yr}|VP Berlina`]   = {...vp38, pr:`~$${20995+base*1000}`};
  specs[`Commodore (VP)|${yr}|VP Calais`]    = {...vp38, wt:"1,385 kg",pr:`~$${26995+base*1200}`};
}

// ── VR (1993-95) ─────────────────────────────────────────────────────────────
const vr38 = {...vp38, en:"3.8L V6",wt:"1,370 kg",ca:"425 L"};
for (const yr of ["1993","1994","1995"]) {
  const base = parseInt(yr)-1993;
  specs[`Commodore (VR)|${yr}|VR Berlina`]  = {...vr38, pr:`~$${21995+base*1200}`};
  specs[`Commodore (VR)|${yr}|VR Calais`]   = {...vr38, wt:"1,385 kg",pr:`~$${27995+base*1400}`};
  specs[`Commodore (VR)|${yr}|VR S Pack`]   = {...vr38, hp:"136 kW (182 hp)",z1:"9.5 sec",pr:`~$${20995+base*1000}`};
}

// ── VS (1995-97) ─────────────────────────────────────────────────────────────
const vs38 = {...vr38, en:"3.8L V6",wt:"1,375 kg",ca:"430 L"};
for (const yr of ["1995","1996","1997"]) {
  const base = parseInt(yr)-1995;
  specs[`Commodore (VS)|${yr}|VS Berlina`]  = {...vs38, pr:`~$${23995+base*1200}`};
  specs[`Commodore (VS)|${yr}|VS Calais`]   = {...vs38, wt:"1,390 kg",pr:`~$${29995+base*1400}`};
  specs[`Commodore (VS)|${yr}|VS S Pack`]   = {...vs38, hp:"136 kW (182 hp)",z1:"9.5 sec",pr:`~$${22995+base*1000}`};
  specs[`Commodore (VS)|${yr}|VS Acclaim`]  = {...vs38, pr:`~$${19995+base*1000}`};
}

// ── VT (1997-99) ─────────────────────────────────────────────────────────────
const vt38 = {en:"3.8L V6 (Series II)",di:"3.8L",cy:"6",hp:"152 kW (204 hp)",tq:"318 Nm",tx:"4-speed auto",dr:"RWD",z1:"8.5 sec",qm:"16.2 sec",ts:"210 km/h",fc:"13.0L",fh:"8.2L",fx:"10.2L",ft:"Petrol",wt:"1,570 kg",se:"5",ca:"430 L"};
specs["Commodore (VT)|1997|VT S Pack"]      = {...vt38, hp:"136 kW (182 hp)",z1:"9.5 sec",ts:"200 km/h",wt:"1,550 kg",pr:"~$27,990"};
specs["Commodore (VT)|1998|VT S Pack"]      = {...vt38, hp:"136 kW (182 hp)",z1:"9.5 sec",ts:"200 km/h",wt:"1,550 kg",pr:"~$28,990"};
specs["Commodore (VT)|1998|VT T-Series"]    = {...vt38, pr:"~$28,990"};
specs["Commodore (VT)|1999|VT II Executive"]= {...vt38, pr:"~$26,990"};
specs["Commodore (VT)|1999|VT II Berlina"]  = {...vt38, pr:"~$30,990"};
specs["Commodore (VT)|1999|VT II Calais"]   = {...vt38, wt:"1,590 kg",pr:"~$36,990"};
specs["Commodore (VT)|1999|VT II Olympic Edition"] = {...vt38, pr:"~$29,990"};

// ── VX (2000-01) ─────────────────────────────────────────────────────────────
const vx38 = {...vt38, wt:"1,575 kg",ca:"430 L"};
specs["Commodore (VX)|2000|VX Berlina"]  = {...vx38, pr:"~$31,990"};
specs["Commodore (VX)|2000|VX S Pack"]   = {...vx38, hp:"136 kW (182 hp)",z1:"9.5 sec",pr:"~$29,490"};
specs["Commodore (VX)|2000|VX Acclaim"]  = {...vx38, pr:"~$27,990"};
specs["Commodore (VX)|2001|VX II Executive"] = {...vx38, pr:"~$27,490"};
specs["Commodore (VX)|2001|VX II Calais"]    = {...vx38, wt:"1,595 kg",pr:"~$37,990"};
specs["Commodore (VX)|2001|VX II S Pack"]    = {...vx38, hp:"136 kW (182 hp)",z1:"9.5 sec",pr:"~$29,990"};

// ── VY (2002-03) ─────────────────────────────────────────────────────────────
const vy38 = {...vx38, en:"3.8L V6 (Series III)",hp:"175 kW (235 hp)",tq:"320 Nm",z1:"8.0 sec",qm:"16.0 sec",ts:"220 km/h",fc:"12.0L",fh:"7.5L",fx:"9.5L",wt:"1,580 kg",ca:"435 L"};
specs["Commodore (VY)|2002|VY SV8"]  = {en:"Gen III LS1 V8",di:"5.7L",cy:"8",hp:"225 kW (302 hp)",tq:"461 Nm",tx:"6-speed manual / 4-speed auto",dr:"RWD",z1:"5.8 sec",qm:"14.0 sec",ts:"250 km/h (limited)",fc:"14.5L",fh:"8.8L",fx:"11.2L",ft:"Petrol",wt:"1,625 kg",se:"5",ca:"435 L",pr:"~$43,490"};
specs["Commodore (VY)|2002|VY S Pack"]   = {...vy38, hp:"136 kW (182 hp)",z1:"9.8 sec",pr:"~$30,990"};
specs["Commodore (VY)|2003|VY II Executive"] = {...vy38, pr:"~$28,490"};
specs["Commodore (VY)|2003|VY II Berlina"]   = {...vy38, pr:"~$33,490"};
specs["Commodore (VY)|2003|VY II Calais"]    = {...vy38, wt:"1,600 kg",pr:"~$40,490"};
specs["Commodore (VY)|2003|VY II SV6"]       = {...vy38, pr:"~$33,490"};

// ── VZ (2004-06) ─────────────────────────────────────────────────────────────
const vzV6 = {en:"LY7 Alloytec V6",di:"3.6L",cy:"6",hp:"175 kW (235 hp)",tq:"320 Nm",tx:"5-speed auto",dr:"RWD",z1:"8.0 sec",qm:"15.8 sec",ts:"220 km/h",fc:"12.0L",fh:"7.3L",fx:"9.4L",ft:"Petrol",wt:"1,625 kg",se:"5",ca:"435 L"};
specs["Commodore (VZ)|2004|VZ SV6"]    = {...vzV6, pr:"~$32,990"};
specs["Commodore (VZ)|2005|VZ SV6"]    = {...vzV6, pr:"~$33,990"};
specs["Commodore (VZ)|2005|VZ Storm"]  = {en:"LS2 V8",di:"6.0L",cy:"8",hp:"270 kW (362 hp)",tq:"530 Nm",tx:"6-speed manual / 4-speed auto",dr:"RWD",z1:"5.4 sec",qm:"13.6 sec",ts:"250 km/h (limited)",fc:"15.3L",fh:"9.2L",fx:"11.6L",ft:"Petrol",wt:"1,700 kg",se:"5",ca:"435 L",pr:"~$48,990"};
specs["Commodore (VZ)|2006|VZ SV6"]    = {...vzV6, pr:"~$34,490"};
specs["Commodore (VZ)|2006|VZ Adventra"]= {en:"LY7 Alloytec V6",di:"3.6L",cy:"6",hp:"175 kW (235 hp)",tq:"320 Nm",tx:"5-speed auto",dr:"AWD",z1:"9.5 sec",qm:"17.0 sec",ts:"200 km/h",fc:"14.0L",fh:"9.5L",fx:"11.5L",ft:"Petrol",wt:"1,850 kg",se:"5",ca:"405 L",pr:"~$44,990"};

// ── VE Calais/SV6/Sportwagons ─────────────────────────────────────────────────
const veV6 = {en:"LY7 Alloytec V6",di:"3.6L",cy:"6",hp:"175 kW (235 hp)",tq:"320 Nm",tx:"5-speed auto",dr:"RWD",z1:"8.5 sec",qm:"16.5 sec",ts:"210 km/h",fc:"12.8L",fh:"7.8L",fx:"9.9L",ft:"Petrol",wt:"1,630 kg",se:"5",ca:"496 L"};
const veCalais = {...veV6, en:"LY7 Alloytec V6",wt:"1,680 kg"};
const veSW_V6  = {...veV6, wt:"1,700 kg",ca:"850 L (seats up)"};
const veSW_SS  = {en:"L98 V8",di:"6.0L",cy:"8",hp:"270 kW (362 hp)",tq:"530 Nm",tx:"6-speed manual / 6-speed auto",dr:"RWD",z1:"5.4 sec",qm:"13.7 sec",ts:"250 km/h (limited)",fc:"15.3L",fh:"9.2L",fx:"11.6L",ft:"Petrol",wt:"1,750 kg",se:"5",ca:"850 L (seats up)"};
for (const yr of ["2006","2007","2008","2009"]) {
  specs[`Commodore (VE)|${yr}|VE Calais`]  = {...veCalais, pr:`~$${42990+parseInt(yr)-2006*1000}`};
  specs[`Commodore (VE)|${yr}|VE SV6`]     = {...veV6, pr:`~$${32990+parseInt(yr)-2006*800}`};
}
for (const yr of ["2007","2008","2009"]) {
  specs[`Commodore (VE)|${yr}|VE Sportwagon SV6`] = {...veSW_V6, pr:`~$${36990+parseInt(yr)-2007*1000}`};
  specs[`Commodore (VE)|${yr}|VE Sportwagon SS`]  = {...veSW_SS, pr:`~$${49990+parseInt(yr)-2007*1000}`};
}
const veIISW = {en:"LFX V6",di:"3.6L",cy:"6",hp:"195 kW (261 hp)",tq:"340 Nm",tx:"6-speed auto",dr:"RWD",z1:"7.5 sec",qm:"15.5 sec",ts:"235 km/h",fc:"12.5L",fh:"7.6L",fx:"9.8L",ft:"Petrol",wt:"1,710 kg",se:"5",ca:"850 L (seats up)"};
for (const yr of ["2010","2011","2012"]) {
  specs[`Commodore (VE)|${yr}|VE II Sportwagon`] = {...veIISW, pr:`~$${38990+parseInt(yr)-2010*1000}`};
}

// ── VF Sportwagons / Evoke / Equipe ───────────────────────────────────────────
const vfV6sw = {en:"LFX V6",di:"3.6L",cy:"6",hp:"210 kW (281 hp)",tq:"350 Nm",tx:"6-speed auto",dr:"RWD",z1:"6.5 sec",qm:"14.5 sec",ts:"240 km/h",fc:"12.7L",fh:"7.8L",fx:"10.0L",ft:"Petrol",wt:"1,710 kg",se:"5",ca:"850 L (seats up)"};
const vfSSsw = {en:"L77 V8",di:"6.0L",cy:"8",hp:"270 kW (362 hp)",tq:"530 Nm",tx:"6-speed manual / 6-speed auto",dr:"RWD",z1:"5.4 sec",qm:"13.7 sec",ts:"250 km/h (limited)",fc:"15.9L",fh:"9.5L",fx:"12.1L",ft:"Petrol",wt:"1,760 kg",se:"5",ca:"850 L (seats up)"};
const vfEvoke  = {en:"LFX V6",di:"3.6L",cy:"6",hp:"210 kW (281 hp)",tq:"350 Nm",tx:"6-speed auto",dr:"RWD",z1:"6.7 sec",qm:"14.5 sec",ts:"235 km/h",fc:"12.7L",fh:"7.8L",fx:"10.0L",ft:"Petrol",wt:"1,655 kg",se:"5",ca:"460 L"};
const vfEquipe = {...vfEvoke};
for (const yr of ["2013","2014"]) {
  specs[`Commodore (VF)|${yr}|VF Sportwagon SV6`] = {...vfV6sw, pr:`~$${40990+parseInt(yr)-2013*1000}`};
  specs[`Commodore (VF)|${yr}|VF Sportwagon SS`]  = {...vfSSsw, pr:`~$${51990+parseInt(yr)-2013*1000}`};
}
for (const yr of ["2015","2016","2017"]) {
  const b = parseInt(yr)-2015;
  specs[`Commodore (VF)|${yr}|VF II Evoke`]      = {...vfEvoke, pr:`~$${27990+b*500}`};
  specs[`Commodore (VF)|${yr}|VF II Equipe`]     = {...vfEquipe, pr:`~$${29990+b*500}`};
  specs[`Commodore (VF)|${yr}|VF II Sportwagon`] = {...vfV6sw, pr:`~$${42990+b*500}`};
}

// ── ZB Sportwagons ────────────────────────────────────────────────────────────
const zbV6sw = {en:"3.6L V6",di:"3.6L",cy:"6",hp:"235 kW (315 hp)",tq:"381 Nm",tx:"9-speed auto",dr:"AWD",z1:"7.0 sec",qm:"15.3 sec",ts:"235 km/h",fc:"11.0L",fh:"8.0L",fx:"9.5L",ft:"Petrol",wt:"1,740 kg",se:"5",ca:"1,503 L (seats down)"};
for (const yr of ["2018","2019"]) {
  specs[`Commodore (ZB)|${yr}|ZB LT Sportwagon`]       = {...zbV6sw, en:"1.5L Turbo I4",di:"1.5L",cy:"4",hp:"121 kW (162 hp)",tq:"240 Nm",wt:"1,600 kg",pr:`~$${29990+parseInt(yr)-2018*500}`};
  specs[`Commodore (ZB)|${yr}|ZB RS Sportwagon`]       = {...zbV6sw, en:"2.0L Turbo I4",di:"2.0L",cy:"4",hp:"191 kW (256 hp)",tq:"400 Nm",wt:"1,640 kg",pr:`~$${37990+parseInt(yr)-2018*500}`};
  specs[`Commodore (ZB)|${yr}|ZB Calais-V Sportwagon`] = {...zbV6sw, pr:`~$${57990+parseInt(yr)-2018*500}`};
}

// ── STATESMAN ─────────────────────────────────────────────────────────────────
const hjdv = {en:"4.2L V8 253",di:"4.2L",cy:"8",hp:"130 kW (174 hp)",tq:"340 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"11.0 sec",qm:"17.5 sec",ts:"185 km/h",fc:"18.0L",fh:"12.0L",fx:"15.0L",ft:"Leaded",wt:"1,530 kg",se:"5",ca:"N/A"};
const hxdv = {...hjdv, en:"5.0L V8 308",di:"5.0L",cy:"8",hp:"150 kW (201 hp)",tq:"380 Nm",z1:"9.5 sec",ts:"190 km/h",wt:"1,550 kg"};
const hzdv = {...hxdv};
const wbdv = {en:"5.0L V8 308",di:"5.0L",cy:"8",hp:"150 kW (201 hp)",tq:"380 Nm",tx:"3-speed Turbo-Hydramatic",dr:"RWD",z1:"9.5 sec",qm:"17.0 sec",ts:"190 km/h",fc:"18.0L",fh:"12.0L",fx:"15.0L",ft:"Leaded",wt:"1,600 kg",se:"5",ca:"N/A"};
specs["Statesman|1974|HJ Statesman De Ville"] = {...hjdv, pr:"~$7,295"};
specs["Statesman|1975|HJ Statesman De Ville"] = {...hjdv, pr:"~$7,995"};
specs["Statesman|1976|HX Statesman De Ville"] = {...hxdv, pr:"~$9,295"};
specs["Statesman|1977|HX Statesman De Ville"] = {...hxdv, pr:"~$9,995"};
specs["Statesman|1978|HZ Statesman De Ville"] = {...hzdv, pr:"~$11,495"};
specs["Statesman|1979|HZ Statesman De Ville"] = {...hzdv, pr:"~$12,495"};
specs["Statesman|1981|WB Statesman De Ville"] = {...wbdv, pr:"~$16,495"};
specs["Statesman|1982|WB Statesman De Ville"] = {...wbdv, pr:"~$17,995"};
specs["Statesman|1983|WB Statesman De Ville"] = {...wbdv, pr:"~$18,995"};
specs["Statesman|1984|VK Caprice"] = {en:"5.0L V8 308",di:"5.0L",cy:"8",hp:"150 kW (201 hp)",tq:"380 Nm",tx:"3-speed auto",dr:"RWD",z1:"9.0 sec",qm:"16.8 sec",ts:"195 km/h",fc:"17.5L",fh:"11.0L",fx:"14.0L",ft:"Leaded",wt:"1,450 kg",se:"5",ca:"400 L",pr:"~$21,995"};
specs["Statesman|1985|VK Caprice"] = {...specs["Statesman|1984|VK Caprice"], pr:"~$23,495"};

// ── MONARO early ─────────────────────────────────────────────────────────────
const mk186  = {en:"3.0L I6 186",di:"3.0L",cy:"6",hp:"87 kW (116 hp)",tq:"207 Nm",tx:"4-speed manual",dr:"RWD",z1:"12.0 sec",qm:"17.8 sec",ts:"175 km/h",fc:"14.0L",fh:"9.0L",fx:"11.5L",ft:"Leaded",se:"4",ca:"N/A"};
const mk307  = {en:"Chevrolet 307ci V8",di:"5.0L",cy:"8",hp:"157 kW (210 hp)",tq:"393 Nm",tx:"4-speed manual / 2-speed Powerglide",dr:"RWD",z1:"9.5 sec",qm:"16.5 sec",ts:"195 km/h",fc:"21.0L",fh:"13.0L",fx:"17.0L",ft:"Leaded",se:"4",ca:"N/A"};
const mk308  = {en:"308ci V8",di:"5.0L",cy:"8",hp:"149 kW (200 hp)",tq:"380 Nm",tx:"4-speed manual",dr:"RWD",z1:"8.2 sec",qm:"16.2 sec",ts:"200 km/h",fc:"20.0L",fh:"12.5L",fx:"16.0L",ft:"Leaded",se:"4",ca:"N/A"};
specs["Monaro|1968|HK GTS 307"]  = {...mk307, wt:"1,300 kg",pr:"~$3,200"};
specs["Monaro|1968|HK GTS 327"]  = {en:"Chevrolet 327ci V8",di:"5.4L",cy:"8",hp:"187 kW (250 hp)",tq:"435 Nm",tx:"4-speed manual (Muncie)",dr:"RWD",z1:"8.0 sec",qm:"15.8 sec",ts:"205 km/h",fc:"21.0L",fh:"13.0L",fx:"17.0L",ft:"Leaded",wt:"1,315 kg",se:"4",ca:"N/A",pr:"~$3,500"};
specs["Monaro|1969|HK GTS 307"]  = {...mk307, wt:"1,300 kg",pr:"~$3,295"};
specs["Monaro|1969|HK GTS 327"]  = {...specs["Monaro|1968|HK GTS 327"], pr:"~$3,595"};
specs["Monaro|1969|HT GTS 186"]  = {...mk186, wt:"1,255 kg",pr:"~$3,095"};
specs["Monaro|1969|HT GTS 308"]  = {...mk308, wt:"1,320 kg",pr:"~$3,595"};
specs["Monaro|1970|HT GTS 186"]  = {...mk186, wt:"1,255 kg",pr:"~$3,195"};
specs["Monaro|1970|HT GTS 308"]  = {...mk308, wt:"1,320 kg",pr:"~$3,695"};
specs["Monaro|1970|HG GTS 186"]  = {...mk186, wt:"1,258 kg",pr:"~$3,295"};
specs["Monaro|1970|HG GTS 308"]  = {...mk308, wt:"1,325 kg",pr:"~$3,795"};
specs["Monaro|1971|HQ GTS 308"]  = {...mk308, en:"308 V8",wt:"1,370 kg",pr:"~$3,995"};
specs["Monaro|1972|HQ GTS 308"]  = {...mk308, en:"308 V8",wt:"1,370 kg",pr:"~$4,095"};
specs["Monaro|1973|HQ GTS 308"]  = {...mk308, en:"308 V8",wt:"1,375 kg",pr:"~$4,295"};
specs["Monaro|1977|HZ GTS"]      = {en:"5.0L V8 308",di:"5.0L",cy:"8",hp:"150 kW (201 hp)",tq:"380 Nm",tx:"4-speed manual / 3-speed auto",dr:"RWD",z1:"8.8 sec",qm:"16.5 sec",ts:"195 km/h",fc:"18.5L",fh:"12.0L",fx:"15.0L",ft:"Leaded",wt:"1,380 kg",se:"4",ca:"N/A",pr:"~$9,495"};

// ── Commodore Ute early ───────────────────────────────────────────────────────
const vnUte38 = {en:"3.8L V6 Buick",di:"3.8L",cy:"6",hp:"122 kW (164 hp)",tq:"298 Nm",tx:"4-speed auto",dr:"RWD",z1:"10.5 sec",qm:"17.5 sec",ts:"185 km/h",fc:"15.0L",fh:"9.5L",fx:"12.5L",ft:"Petrol",wt:"1,380 kg",se:"2",ca:"N/A (ute tray)"};
const vn5L    = {...vnUte38, en:"5.0L V8",di:"5.0L",cy:"8",hp:"173 kW (232 hp)",tq:"393 Nm",z1:"8.5 sec",qm:"16.2 sec",ts:"200 km/h",fc:"18.0L",fh:"11.5L",fx:"14.5L"};
specs["Commodore Ute|1990|VN Ute SL"] = {...vnUte38, pr:"~$17,990"};
specs["Commodore Ute|1990|VN Ute SS"] = {...vn5L, pr:"~$24,990"};
specs["Commodore Ute|1991|VP Ute SL"] = {...vnUte38, en:"3.8L V6",hp:"130 kW (174 hp)",pr:"~$19,490"};
specs["Commodore Ute|1991|VP Ute SS"] = {...vn5L, en:"5.0L V8",hp:"173 kW (232 hp)",pr:"~$25,990"};
specs["Commodore Ute|1992|VP Ute SL"] = {...vnUte38, en:"3.8L V6",hp:"130 kW (174 hp)",pr:"~$20,490"};
specs["Commodore Ute|1992|VP Ute SS"] = {...vn5L, en:"5.0L V8",pr:"~$26,990"};
const vrUteS  = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"130 kW (174 hp)",tq:"298 Nm",tx:"4-speed auto / 5-speed manual",dr:"RWD",z1:"10.0 sec",qm:"17.2 sec",ts:"190 km/h",fc:"14.5L",fh:"9.2L",fx:"11.8L",ft:"Petrol",wt:"1,370 kg",se:"2",ca:"N/A (ute tray)"};
const vrUteSS = {...vrUteS, en:"5.0L Holden V8",di:"5.0L",cy:"8",hp:"175 kW (235 hp)",tq:"393 Nm",z1:"8.2 sec",qm:"16.0 sec",ts:"205 km/h",fc:"17.0L",fh:"10.5L",fx:"13.5L",wt:"1,430 kg"};
specs["Commodore Ute|1993|VP Ute SL"] = {...vrUteS, en:"3.8L V6",pr:"~$21,490"};
specs["Commodore Ute|1993|VP Ute SS"] = {...vrUteSS, pr:"~$27,990"};
specs["Commodore Ute|1993|VR Ute S"]  = {...vrUteS, pr:"~$21,990"};
specs["Commodore Ute|1994|VR Ute S"]  = {...vrUteS, pr:"~$22,990"};
specs["Commodore Ute|1994|VR Ute SS"] = {...vrUteSS, pr:"~$28,990"};
specs["Commodore Ute|1995|VR Ute S"]  = {...vrUteS, pr:"~$23,490"};
specs["Commodore Ute|1995|VR Ute SS"] = {...vrUteSS, pr:"~$29,490"};
specs["Commodore Ute|1995|VS Ute S"]  = {...vrUteS, pr:"~$23,990"};
specs["Commodore Ute|1996|VS Ute S"]  = {...vrUteS, pr:"~$24,490"};
specs["Commodore Ute|1996|VS Ute SS"] = {...vrUteSS, hp:"179 kW (240 hp)",pr:"~$30,490"};
specs["Commodore Ute|1997|VS Ute S"]  = {...vrUteS, pr:"~$25,490"};
specs["Commodore Ute|1997|VS Ute SS"] = {...vrUteSS, hp:"179 kW (240 hp)",pr:"~$31,490"};
const vuUteS  = {en:"3.8L V6 (Series III)",di:"3.8L",cy:"6",hp:"152 kW (204 hp)",tq:"318 Nm",tx:"4-speed auto / 5-speed manual",dr:"RWD",z1:"9.0 sec",qm:"16.8 sec",ts:"210 km/h",fc:"12.5L",fh:"8.0L",fx:"10.0L",ft:"Petrol",wt:"1,530 kg",se:"2",ca:"N/A (ute tray)"};
const vuUteSV6= {...vuUteS, en:"LY7 Alloytec V6",di:"3.6L",hp:"175 kW (235 hp)",tq:"320 Nm",z1:"8.5 sec",ts:"215 km/h",fc:"12.0L",fh:"7.3L",fx:"9.5L"};
const vuUteSS = {en:"Gen III LS1 V8",di:"5.7L",cy:"8",hp:"225 kW (302 hp)",tq:"461 Nm",tx:"6-speed manual / 4-speed auto",dr:"RWD",z1:"5.8 sec",qm:"14.0 sec",ts:"250 km/h (limited)",fc:"14.5L",fh:"8.8L",fx:"11.2L",ft:"Petrol",wt:"1,600 kg",se:"2",ca:"N/A (ute tray)"};
const vuUteTh = {...vuUteSS, en:"Gen III LS1 V8",hp:"225 kW (302 hp)"};
for (const yr of ["2000","2001"]) {
  specs[`Commodore Ute|${yr}|VU Ute S`]         = {...vuUteS, pr:`~$${24990+parseInt(yr)-2000*1000}`};
  specs[`Commodore Ute|${yr}|VU Ute SV6`]       = {...vuUteSV6, pr:`~$${27990+parseInt(yr)-2000*1000}`};
  specs[`Commodore Ute|${yr}|VU Ute SS`]        = {...vuUteSS, pr:`~$${37990+parseInt(yr)-2000*1000}`};
  specs[`Commodore Ute|${yr}|VU Ute SS Thunder`]= {...vuUteTh, pr:`~$${40990+parseInt(yr)-2000*1000}`};
}
for (const yr of ["2002","2003"]) {
  specs[`Commodore Ute|${yr}|VY Ute S`]         = {...vuUteS, pr:`~$${25990+parseInt(yr)-2002*1000}`};
  specs[`Commodore Ute|${yr}|VY Ute SV6`]       = {...vuUteSV6, pr:`~$${28990+parseInt(yr)-2002*1000}`};
  specs[`Commodore Ute|${yr}|VY Ute SS`]        = {...vuUteSS, pr:`~$${38990+parseInt(yr)-2002*1000}`};
  specs[`Commodore Ute|${yr}|VY Ute SS Thunder`]= {...vuUteTh, pr:`~$${41990+parseInt(yr)-2002*1000}`};
}
for (const yr of ["2004","2005","2006"]) {
  const b = parseInt(yr)-2004;
  specs[`Commodore Ute|${yr}|VZ Ute S`]         = {...vuUteS, pr:`~$${26990+b*1000}`};
  specs[`Commodore Ute|${yr}|VZ Ute SV6`]       = {...vuUteSV6, pr:`~$${29990+b*1000}`};
  specs[`Commodore Ute|${yr}|VZ Ute SS Thunder`]= {en:"Gen III LS2 V8",di:"6.0L",cy:"8",hp:"270 kW (362 hp)",tq:"530 Nm",tx:"6-speed manual",dr:"RWD",z1:"5.4 sec",qm:"13.8 sec",ts:"250 km/h (limited)",fc:"15.3L",fh:"9.2L",fx:"11.6L",ft:"Petrol",wt:"1,700 kg",se:"2",ca:"N/A (ute tray)",pr:`~$${43990+b*1000}`};
}
const veUteOm = {...vuUteS, en:"LY7 Alloytec V6",di:"3.6L",hp:"175 kW (235 hp)",tq:"320 Nm",z1:"8.5 sec",ts:"210 km/h",fc:"12.8L",fh:"7.8L",fx:"9.9L",wt:"1,640 kg"};
const veUteSS = {en:"L98 V8",di:"6.0L",cy:"8",hp:"270 kW (362 hp)",tq:"530 Nm",tx:"6-speed manual",dr:"RWD",z1:"5.0 sec",qm:"13.3 sec",ts:"250 km/h (limited)",fc:"15.7L",fh:"9.3L",fx:"12.0L",ft:"Petrol",wt:"1,710 kg",se:"2",ca:"N/A (ute tray)"};
const veUteTh = {...veUteSS};
for (const yr of ["2007","2008","2009"]) {
  const b = parseInt(yr)-2007;
  specs[`Commodore Ute|${yr}|VE Ute Omega`]     = {...veUteOm, pr:`~$${28990+b*1000}`};
  specs[`Commodore Ute|${yr}|VE Ute SS Thunder`]= {...veUteTh, pr:`~$${44990+b*1000}`};
}
const veIIUteOm = {...veUteOm, en:"LFX V6",di:"3.6L",hp:"195 kW (261 hp)",tq:"340 Nm",tx:"6-speed auto",wt:"1,645 kg"};
const veIIUteSS = {...veUteSS, en:"LS3 V8",di:"6.2L",cy:"8",hp:"317 kW (425 hp)",tq:"570 Nm",wt:"1,720 kg"};
const veIIUteTh = {...veIIUteSS};
const veIIUteSt = {...veIIUteSS};
for (const yr of ["2010","2011","2012"]) {
  const b = parseInt(yr)-2010;
  specs[`Commodore Ute|${yr}|VE II Ute Omega`]     = {...veIIUteOm, pr:`~$${30990+b*1000}`};
  specs[`Commodore Ute|${yr}|VE II Ute SS Thunder`] = {...veIIUteTh, pr:`~$${48990+b*1000}`};
  if (yr >= "2011") specs[`Commodore Ute|${yr}|VE II Ute SS STORM`] = {...veIIUteSt, pr:`~$${51990+b*1000}`};
}
specs["Commodore Ute|2013|VF Ute SV6"]       = {...veIIUteOm, en:"LFX V6",di:"3.6L",hp:"210 kW (281 hp)",tq:"350 Nm",pr:"~$33,990"};
specs["Commodore Ute|2013|VF Ute SS Thunder"] = {en:"LS3 V8",di:"6.2L",cy:"8",hp:"317 kW (425 hp)",tq:"570 Nm",tx:"6-speed manual / 6-speed auto",dr:"RWD",z1:"5.0 sec",qm:"13.3 sec",ts:"250 km/h (limited)",fc:"15.9L",fh:"9.5L",fx:"12.1L",ft:"Petrol",wt:"1,730 kg",se:"2",ca:"N/A (ute tray)",pr:"~$49,990"};
specs["Commodore Ute|2013|VF Ute SS STORM"]   = {...specs["Commodore Ute|2013|VF Ute SS Thunder"], pr:"~$52,990"};

require('fs').writeFileSync('src/data/supplement2.json', JSON.stringify({make:'Holden',specs}, null, 2));
console.log('supplement2.json written:', Object.keys(specs).length, 'entries');
