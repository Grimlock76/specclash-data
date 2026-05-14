// HSV Commodore (all eras), HSV Senator, HSV Grange, Statesman continuation
const specs = {};

// ── HSV VN era (1988-90) ──────────────────────────────────────────────────────
const vnGrpA = {en:"5.0L V8 (Group A)",di:"5.0L",cy:"8",hp:"173 kW (232 hp)",tq:"393 Nm",tx:"5-speed manual (dog-leg)",dr:"RWD",z1:"7.5 sec",qm:"15.5 sec",ts:"220 km/h",fc:"16.5L",fh:"10.5L",fx:"13.5L",ft:"98 RON",wt:"1,370 kg",se:"5",ca:"380 L",pr:"~$39,990"};
const vnWalk  = {en:"5.0L V8 Walkinshaw",di:"5.0L",cy:"8",hp:"195 kW (261 hp)",tq:"420 Nm",tx:"5-speed manual (dog-leg)",dr:"RWD",z1:"6.8 sec",qm:"14.8 sec",ts:"240 km/h",fc:"17.0L",fh:"11.0L",fx:"14.0L",ft:"98 RON",wt:"1,390 kg",se:"5",ca:"380 L",pr:"~$55,000"};
const vnGTS   = {en:"5.0L V8",di:"5.0L",cy:"8",hp:"182 kW (244 hp)",tq:"400 Nm",tx:"4-speed auto / 5-speed manual",dr:"RWD",z1:"7.2 sec",qm:"15.2 sec",ts:"220 km/h",fc:"17.0L",fh:"10.5L",fx:"13.5L",ft:"98 RON",wt:"1,390 kg",se:"5",ca:"380 L",pr:"~$48,990"};
specs["HSV Commodore|1988|VN Group A SS"] = {...vnGrpA};
specs["HSV Commodore|1988|VN Walkinshaw"] = {...vnWalk};
specs["HSV Commodore|1989|VN Group A SS"] = {...vnGrpA, pr:"~$41,990"};
specs["HSV Commodore|1989|VN Walkinshaw"] = {...vnWalk, pr:"~$57,000"};
specs["HSV Commodore|1989|VN GTS"]        = {...vnGTS};
specs["HSV Commodore|1990|VP SV90"]       = {...vnGTS, en:"5.0L V8 SV90",pr:"~$46,990"};
specs["HSV Commodore|1990|VP GTS"]        = {...vnGTS, hp:"190 kW (255 hp)",pr:"~$49,990"};

// ── HSV VP era (1991-93) ──────────────────────────────────────────────────────
const vpGTS   = {en:"5.0L V8",di:"5.0L",cy:"8",hp:"190 kW (255 hp)",tq:"415 Nm",tx:"5-speed manual / 4-speed auto",dr:"RWD",z1:"7.0 sec",qm:"15.0 sec",ts:"230 km/h",fc:"17.5L",fh:"11.0L",fx:"14.0L",ft:"98 RON",wt:"1,410 kg",se:"5",ca:"395 L"};
const vpManta = {...vpGTS, se:"4",ca:"N/A"};
const vpSen   = {...vpGTS, tx:"4-speed auto",wt:"1,430 kg"};
const vpMaloo = {...vpGTS, se:"2",ca:"N/A (ute tray)",wt:"1,400 kg"};
specs["HSV Commodore|1991|VP GTS"]    = {...vpGTS, pr:"~$51,990"};
specs["HSV Commodore|1991|VP Manta"]  = {...vpManta, pr:"~$54,990"};
specs["HSV Commodore|1992|VP GTS"]    = {...vpGTS, pr:"~$53,990"};
specs["HSV Commodore|1992|VP Senator"]= {...vpSen, pr:"~$56,990"};
specs["HSV Commodore|1992|VP Maloo"]  = {...vpMaloo, pr:"~$50,990"};

// ── HSV VR era (1993-95) ──────────────────────────────────────────────────────
const vrGTS  = {en:"5.0L Holden V8",di:"5.0L",cy:"8",hp:"195 kW (261 hp)",tq:"415 Nm",tx:"5-speed manual / 4-speed auto",dr:"RWD",z1:"6.8 sec",qm:"14.8 sec",ts:"235 km/h",fc:"17.0L",fh:"10.5L",fx:"13.5L",ft:"98 RON",wt:"1,430 kg",se:"5",ca:"425 L"};
const vrCS   = {...vrGTS, hp:"190 kW (255 hp)",tx:"5-speed manual",wt:"1,420 kg"};
const vrSen  = {...vrGTS, tx:"4-speed auto",wt:"1,450 kg"};
const vrMal  = {...vrGTS, se:"2",ca:"N/A (ute tray)",wt:"1,400 kg"};
for (const yr of ["1993","1994","1995"]) {
  const b = parseInt(yr)-1993;
  specs[`HSV Commodore|${yr}|VR GTS`]       = {...vrGTS, pr:`~$${57990+b*2000}`};
  specs[`HSV Commodore|${yr}|VR Senator`]   = {...vrSen, pr:`~$${62990+b*2000}`};
  specs[`HSV Commodore|${yr}|VR Clubsport`] = {...vrCS, pr:`~$${52990+b*2000}`};
  if (yr !== "1995") specs[`HSV Commodore|${yr}|VR Maloo`] = {...vrMal, pr:`~$${55990+b*2000}`};
}

// ── HSV VS era (1995-97) ──────────────────────────────────────────────────────
const vsGTS  = {...vrGTS, hp:"200 kW (268 hp)",tq:"420 Nm",wt:"1,440 kg"};
const vsCS   = {...vrCS, hp:"195 kW (261 hp)",wt:"1,425 kg"};
const vsSen  = {...vrSen, hp:"200 kW (268 hp)",wt:"1,460 kg"};
const vsMal  = {...vrMal, hp:"195 kW (261 hp)",wt:"1,405 kg"};
for (const yr of ["1995","1996","1997"]) {
  const b = parseInt(yr)-1995;
  specs[`HSV Commodore|${yr}|VS GTS`]       = {...vsGTS, pr:`~$${62990+b*2000}`};
  specs[`HSV Commodore|${yr}|VS Senator`]   = {...vsSen, pr:`~$${67990+b*2000}`};
  specs[`HSV Commodore|${yr}|VS Clubsport`] = {...vsCS, pr:`~$${56990+b*2000}`};
  specs[`HSV Commodore|${yr}|VS Maloo`]     = {...vsMal, pr:`~$${59990+b*2000}`};
}

// ── HSV VT era (1997-99) ──────────────────────────────────────────────────────
const vtGTS = {en:"Gen III LS1 V8",di:"5.7L",cy:"8",hp:"225 kW (302 hp)",tq:"461 Nm",tx:"6-speed manual / 4-speed auto",dr:"RWD",z1:"5.5 sec",qm:"13.9 sec",ts:"250 km/h (limited)",fc:"14.5L",fh:"8.8L",fx:"11.0L",ft:"98 RON",wt:"1,630 kg",se:"5",ca:"430 L"};
const vtCS  = {...vtGTS, wt:"1,610 kg"};
const vtSen = {...vtGTS, tx:"4-speed auto",wt:"1,650 kg"};
const vtMal = {...vtGTS, se:"2",ca:"N/A (ute tray)",wt:"1,590 kg"};
specs["HSV Commodore|1997|VT GTS"]      = {...vtGTS, pr:"~$72,990"};
specs["HSV Commodore|1998|VT GTS"]      = {...vtGTS, pr:"~$74,990"};
specs["HSV Commodore|1998|VT Senator"]  = {...vtSen, pr:"~$79,990"};
specs["HSV Commodore|1998|VT Clubsport"]= {...vtCS, pr:"~$65,990"};
specs["HSV Commodore|1998|VT Maloo"]    = {...vtMal, pr:"~$68,990"};
specs["HSV Commodore|1999|VT GTS"]      = {...vtGTS, pr:"~$76,990"};
specs["HSV Commodore|1999|VT Senator"]  = {...vtSen, pr:"~$81,990"};
specs["HSV Commodore|1999|VT Clubsport"]= {...vtCS, pr:"~$67,990"};
specs["HSV Commodore|1999|VT Maloo"]    = {...vtMal, pr:"~$70,990"};

// ── HSV VX era (2000-01) ─────────────────────────────────────────────────────
const vxGTS = {...vtGTS, hp:"235 kW (315 hp)",wt:"1,640 kg"};
const vxCS  = {...vtCS, hp:"235 kW (315 hp)",wt:"1,620 kg"};
const vxSen = {...vtSen, hp:"235 kW (315 hp)",wt:"1,660 kg"};
const vxMal = {...vtMal, hp:"235 kW (315 hp)",wt:"1,600 kg"};
specs["HSV Commodore|2000|VX GTS"]      = {...vxGTS, pr:"~$85,000"};
specs["HSV Commodore|2000|VX Senator"]  = {...vxSen, pr:"~$90,000"};
specs["HSV Commodore|2000|VX Clubsport"]= {...vxCS, pr:"~$72,000"};
specs["HSV Commodore|2000|VX Maloo"]    = {...vxMal, pr:"~$75,000"};
specs["HSV Commodore|2001|VX GTS"]      = {...vxGTS, pr:"~$87,000"};
specs["HSV Commodore|2001|VX Senator"]  = {...vxSen, pr:"~$92,000"};
specs["HSV Commodore|2001|VX Clubsport"]= {...vxCS, pr:"~$74,000"};
specs["HSV Commodore|2001|VX Maloo"]    = {...vxMal, pr:"~$77,000"};

// ── HSV VY era (2002-03) ─────────────────────────────────────────────────────
const vyGTS = {en:"LS1 V8",di:"5.7L",cy:"8",hp:"280 kW (375 hp)",tq:"530 Nm",tx:"6-speed manual / 4-speed auto",dr:"RWD",z1:"5.0 sec",qm:"13.3 sec",ts:"250 km/h (limited)",fc:"15.0L",fh:"9.0L",fx:"11.5L",ft:"98 RON",wt:"1,720 kg",se:"5",ca:"435 L"};
const vyCS  = {...vyGTS, hp:"260 kW (349 hp)",wt:"1,700 kg"};
const vySen = {...vyGTS, tx:"4-speed auto",wt:"1,740 kg"};
const vyMal = {...vyGTS, hp:"260 kW (349 hp)",se:"2",ca:"N/A (ute tray)",wt:"1,680 kg"};
const vyGTO = {en:"LS1 V8",di:"5.7L",cy:"8",hp:"280 kW (375 hp)",tq:"530 Nm",tx:"6-speed manual",dr:"RWD",z1:"5.0 sec",qm:"13.2 sec",ts:"250 km/h (limited)",fc:"15.0L",fh:"9.0L",fx:"11.5L",ft:"98 RON",wt:"1,640 kg",se:"4",ca:"N/A"};
for (const yr of ["2002","2003"]) {
  const b = parseInt(yr)-2002;
  specs[`HSV Commodore|${yr}|VY GTS`]              = {...vyGTS, pr:`~$${92000+b*2000}`};
  specs[`HSV Commodore|${yr}|VY Senator`]           = {...vySen, pr:`~$${97000+b*2000}`};
  specs[`HSV Commodore|${yr}|VY Clubsport`]         = {...vyCS, pr:`~$${76000+b*2000}`};
  specs[`HSV Commodore|${yr}|VY Maloo`]             = {...vyMal, pr:`~$${80000+b*2000}`};
  specs[`HSV Commodore|${yr}|VY Coupe GTO`]         = {...vyGTO, pr:`~$${96000+b*2000}`};
  if (yr==="2003") specs[`HSV Commodore|2003|VY Coupe GTO Convertible`] = {...vyGTO, wt:"1,720 kg",pr:"~$108,000"};
}

// ── HSV VZ era (2004-06) ─────────────────────────────────────────────────────
const vzGTS = {en:"LS2 V8",di:"6.0L",cy:"8",hp:"297 kW (398 hp)",tq:"550 Nm",tx:"6-speed manual / 4-speed auto",dr:"RWD",z1:"5.0 sec",qm:"13.2 sec",ts:"260 km/h",fc:"15.5L",fh:"9.4L",fx:"12.3L",ft:"98 RON",wt:"1,790 kg",se:"5",ca:"460 L"};
const vzCS  = {...vzGTS, hp:"280 kW (375 hp)",wt:"1,755 kg"};
const vzSen = {...vzGTS, tx:"4-speed auto",wt:"1,810 kg"};
const vzMal = {...vzGTS, hp:"280 kW (375 hp)",se:"2",ca:"N/A (ute tray)",wt:"1,740 kg"};
const vzGTO = {...vzGTS, hp:"297 kW (398 hp)",se:"4",ca:"N/A",wt:"1,700 kg"};
for (const yr of ["2004","2005","2006"]) {
  const b = parseInt(yr)-2004;
  specs[`HSV Commodore|${yr}|VZ GTS`]      = {...vzGTS, pr:`~$${99000+b*2000}`};
  specs[`HSV Commodore|${yr}|VZ Senator`]  = {...vzSen, pr:`~$${104000+b*2000}`};
  specs[`HSV Commodore|${yr}|VZ Clubsport`]= {...vzCS, pr:`~$${82000+b*2000}`};
  specs[`HSV Commodore|${yr}|VZ Maloo`]    = {...vzMal, pr:`~$${85000+b*2000}`};
  if (yr !== "2006") specs[`HSV Commodore|${yr}|VZ Coupe GTO`] = {...vzGTO, pr:`~$${105000+b*2000}`};
  if (yr === "2005") specs["HSV Commodore|2005|VZ Coupe GTO Convertible"] = {...vzGTO, wt:"1,780 kg",pr:"~$118,000"};
}

// ── HSV VE era gaps (some still missing) ─────────────────────────────────────
specs["HSV Commodore|2007|VE Senator"]  = {en:"LS2 V8",di:"6.0L",cy:"8",hp:"297 kW (398 hp)",tq:"550 Nm",tx:"6-speed auto",dr:"RWD",z1:"5.2 sec",qm:"13.5 sec",ts:"250 km/h (limited)",fc:"15.5L",fh:"9.4L",fx:"12.3L",ft:"98 RON",wt:"1,830 kg",se:"5",ca:"460 L",pr:"~$100,000"};
specs["HSV Commodore|2007|VE Clubsport R8"] = {en:"LS2 V8",di:"6.0L",cy:"8",hp:"297 kW (398 hp)",tq:"550 Nm",tx:"6-speed manual",dr:"RWD",z1:"5.0 sec",qm:"13.2 sec",ts:"260 km/h",fc:"15.5L",fh:"9.4L",fx:"12.3L",ft:"98 RON",wt:"1,760 kg",se:"5",ca:"460 L",pr:"~$79,990"};
specs["HSV Commodore|2007|VE Maloo R8"]    = {en:"LS2 V8",di:"6.0L",cy:"8",hp:"297 kW (398 hp)",tq:"550 Nm",tx:"6-speed manual",dr:"RWD",z1:"5.0 sec",qm:"13.2 sec",ts:"260 km/h",fc:"15.5L",fh:"9.4L",fx:"12.3L",ft:"98 RON",wt:"1,740 kg",se:"2",ca:"N/A (ute tray)",pr:"~$82,990"};
specs["HSV Commodore|2008|VE Senator"]  = {...specs["HSV Commodore|2007|VE Senator"], pr:"~$102,000"};
specs["HSV Commodore|2009|VE Senator"]  = {...specs["HSV Commodore|2007|VE Senator"], pr:"~$104,000"};
specs["HSV Commodore|2009|VE Maloo R8"] = {...specs["HSV Commodore|2007|VE Maloo R8"], en:"LS3 V8",di:"6.2L",hp:"317 kW (425 hp)",tq:"550 Nm",pr:"~$87,990"};
specs["HSV Commodore|2010|VE II Senator"]   = {...specs["HSV Commodore|2008|VE Senator"], hp:"325 kW (436 hp)",tq:"577 Nm",en:"LS3 V8",di:"6.2L",pr:"~$110,000"};
specs["HSV Commodore|2010|VE II Maloo R8"]  = {en:"LS3 V8",di:"6.2L",cy:"8",hp:"317 kW (425 hp)",tq:"550 Nm",tx:"6-speed manual / 6-speed auto",dr:"RWD",z1:"4.9 sec",qm:"13.0 sec",ts:"270 km/h",fc:"15.8L",fh:"9.3L",fx:"12.0L",ft:"98 RON",wt:"1,745 kg",se:"2",ca:"N/A (ute tray)",pr:"~$84,990"};
specs["HSV Commodore|2011|VE II Senator"]   = {...specs["HSV Commodore|2010|VE II Senator"], hp:"430 kW (577 hp)",tq:"740 Nm",en:"LSA Supercharged V8",tx:"6-speed auto",z1:"4.4 sec",qm:"12.3 sec",ts:"250 km/h (limited)",fc:"18.8L",fh:"11.5L",fx:"15.0L",wt:"1,850 kg",pr:"~$118,000"};
specs["HSV Commodore|2011|VE II Maloo R8"]  = {...specs["HSV Commodore|2010|VE II Maloo R8"], hp:"325 kW (436 hp)",tq:"577 Nm",pr:"~$87,990"};
specs["HSV Commodore|2012|VE II Senator"]   = {...specs["HSV Commodore|2011|VE II Senator"], pr:"~$120,000"};
specs["HSV Commodore|2012|VE II Maloo R8"]  = {...specs["HSV Commodore|2011|VE II Maloo R8"], pr:"~$89,990"};
specs["HSV Commodore|2015|VF II GTS GEN-F2 25th Anniversary"] = {en:"LSA Supercharged V8",di:"6.2L",cy:"8",hp:"430 kW (577 hp)",tq:"740 Nm",tx:"6-speed manual / 6-speed auto",dr:"RWD",z1:"4.4 sec",qm:"12.3 sec",ts:"250 km/h (limited)",fc:"18.8L",fh:"11.5L",fx:"15.0L",ft:"98 RON",wt:"1,881 kg",se:"5",ca:"460 L",pr:"~$105,990"};
specs["HSV Commodore|2016|VF II GTS GEN-F2 25th Anniversary"] = {...specs["HSV Commodore|2015|VF II GTS GEN-F2 25th Anniversary"], pr:"~$106,990"};
specs["HSV Commodore|2015|VF II GTSR"]       = {en:"LSA Supercharged V8",di:"6.2L",cy:"8",hp:"430 kW (577 hp)",tq:"740 Nm",tx:"6-speed manual",dr:"RWD",z1:"4.2 sec",qm:"12.1 sec",ts:"270 km/h",fc:"16.8L",fh:"9.8L",fx:"12.5L",ft:"98 RON",wt:"1,820 kg",se:"5",ca:"460 L",pr:"~$134,990"};
specs["HSV Commodore|2016|VF II GTSR"]       = {...specs["HSV Commodore|2015|VF II GTSR"], pr:"~$136,990"};
specs["HSV Commodore|2016|VF II GTSR Maloo"] = {en:"LSA Supercharged V8",di:"6.2L",cy:"8",hp:"430 kW (577 hp)",tq:"740 Nm",tx:"6-speed manual",dr:"RWD",z1:"4.2 sec",qm:"12.1 sec",ts:"270 km/h",fc:"16.8L",fh:"9.8L",fx:"12.5L",ft:"98 RON",wt:"1,800 kg",se:"2",ca:"N/A (ute tray)",pr:"~$142,990"};
specs["HSV Commodore|2017|VF II GTSR"]       = {...specs["HSV Commodore|2016|VF II GTSR"], pr:"~$138,990"};
specs["HSV Commodore|2017|VF II GTSR Maloo"] = {...specs["HSV Commodore|2016|VF II GTSR Maloo"], pr:"~$144,990"};
specs["HSV Commodore|2015|VF II Maloo R8"]   = {en:"LS3 V8",di:"6.2L",cy:"8",hp:"325 kW (436 hp)",tq:"577 Nm",tx:"6-speed manual",dr:"RWD",z1:"4.9 sec",qm:"13.0 sec",ts:"270 km/h",fc:"15.8L",fh:"9.3L",fx:"12.0L",ft:"98 RON",wt:"1,760 kg",se:"2",ca:"N/A (ute tray)",pr:"~$89,990"};
specs["HSV Commodore|2016|VF II Maloo R8"]   = {...specs["HSV Commodore|2015|VF II Maloo R8"], pr:"~$91,990"};
specs["HSV Commodore|2017|VF II Maloo R8"]   = {...specs["HSV Commodore|2015|VF II Maloo R8"], pr:"~$93,990"};
specs["HSV Commodore|2017|VF II Clubsport R8"] = {en:"LS3 V8",di:"6.2L",cy:"8",hp:"325 kW (436 hp)",tq:"577 Nm",tx:"6-speed manual / 6-speed auto",dr:"RWD",z1:"4.9 sec",qm:"13.0 sec",ts:"270 km/h",fc:"15.8L",fh:"9.3L",fx:"12.0L",ft:"98 RON",wt:"1,760 kg",se:"5",ca:"460 L",pr:"~$91,990"};

// ── HSV Senator (separate make in catalog) ────────────────────────────────────
const senBase = {en:"5.0L Holden V8",di:"5.0L",cy:"8",hp:"195 kW (261 hp)",tq:"415 Nm",tx:"4-speed auto",dr:"RWD",z1:"7.0 sec",qm:"15.0 sec",ts:"235 km/h",fc:"17.0L",fh:"10.5L",fx:"13.5L",ft:"98 RON",wt:"1,450 kg",se:"5",ca:"425 L"};
specs["HSV Senator|1993|VR Senator"] = {...senBase, pr:"~$62,990"};
specs["HSV Senator|1994|VR Senator"] = {...senBase, pr:"~$64,990"};
specs["HSV Senator|1995|VS Senator"] = {...senBase, hp:"200 kW (268 hp)",pr:"~$67,990"};
specs["HSV Senator|1996|VS Senator"] = {...senBase, hp:"200 kW (268 hp)",pr:"~$69,990"};
specs["HSV Senator|1997|VS Senator"] = {...senBase, hp:"200 kW (268 hp)",pr:"~$71,990"};
specs["HSV Senator|1998|VT Senator"] = {en:"Gen III LS1 V8",di:"5.7L",cy:"8",hp:"225 kW (302 hp)",tq:"461 Nm",tx:"4-speed auto",dr:"RWD",z1:"6.0 sec",qm:"14.2 sec",ts:"250 km/h (limited)",fc:"14.5L",fh:"8.8L",fx:"11.0L",ft:"98 RON",wt:"1,650 kg",se:"5",ca:"430 L",pr:"~$79,990"};
specs["HSV Senator|1999|VT Senator"] = {...specs["HSV Senator|1998|VT Senator"], pr:"~$81,990"};
specs["HSV Senator|2000|VX Senator"] = {...specs["HSV Senator|1998|VT Senator"], hp:"235 kW (315 hp)",pr:"~$90,000"};
specs["HSV Senator|2001|VX Senator"] = {...specs["HSV Senator|2000|VX Senator"], pr:"~$92,000"};
specs["HSV Senator|2002|VY Senator"] = {en:"LS1 V8",di:"5.7L",cy:"8",hp:"260 kW (349 hp)",tq:"520 Nm",tx:"4-speed auto",dr:"RWD",z1:"5.5 sec",qm:"13.8 sec",ts:"250 km/h (limited)",fc:"15.0L",fh:"9.0L",fx:"11.5L",ft:"98 RON",wt:"1,740 kg",se:"5",ca:"435 L",pr:"~$97,000"};
specs["HSV Senator|2003|VY Senator"] = {...specs["HSV Senator|2002|VY Senator"], pr:"~$99,000"};
specs["HSV Senator|2004|VZ Senator"] = {en:"LS2 V8",di:"6.0L",cy:"8",hp:"297 kW (398 hp)",tq:"550 Nm",tx:"6-speed auto",dr:"RWD",z1:"5.2 sec",qm:"13.5 sec",ts:"250 km/h (limited)",fc:"15.5L",fh:"9.4L",fx:"12.3L",ft:"98 RON",wt:"1,810 kg",se:"5",ca:"460 L",pr:"~$104,000"};
specs["HSV Senator|2005|VZ Senator"] = {...specs["HSV Senator|2004|VZ Senator"], pr:"~$106,000"};
specs["HSV Senator|2006|VZ Senator"] = {...specs["HSV Senator|2004|VZ Senator"], pr:"~$108,000"};
specs["HSV Senator|2007|VE Senator"] = {en:"LS2 V8",di:"6.0L",cy:"8",hp:"297 kW (398 hp)",tq:"550 Nm",tx:"6-speed auto",dr:"RWD",z1:"5.2 sec",qm:"13.5 sec",ts:"250 km/h (limited)",fc:"15.5L",fh:"9.4L",fx:"12.3L",ft:"98 RON",wt:"1,830 kg",se:"5",ca:"460 L",pr:"~$100,000"};
specs["HSV Senator|2008|VE Senator"] = {...specs["HSV Senator|2007|VE Senator"], hp:"317 kW (425 hp)",tq:"550 Nm",en:"LS3 V8",di:"6.2L",pr:"~$102,000"};
specs["HSV Senator|2009|VE Senator"] = {...specs["HSV Senator|2008|VE Senator"], pr:"~$104,000"};
specs["HSV Senator|2010|VE II Senator"] = {en:"LS3 V8",di:"6.2L",cy:"8",hp:"325 kW (436 hp)",tq:"577 Nm",tx:"6-speed auto",dr:"RWD",z1:"5.0 sec",qm:"13.3 sec",ts:"270 km/h",fc:"15.8L",fh:"9.3L",fx:"12.0L",ft:"98 RON",wt:"1,840 kg",se:"5",ca:"460 L",pr:"~$108,000"};
specs["HSV Senator|2011|VE II Senator"] = {...specs["HSV Senator|2010|VE II Senator"], en:"LSA Supercharged V8",hp:"430 kW (577 hp)",tq:"740 Nm",z1:"4.4 sec",qm:"12.3 sec",fc:"18.8L",fh:"11.5L",fx:"15.0L",pr:"~$118,000"};
specs["HSV Senator|2012|VE II Senator"] = {...specs["HSV Senator|2011|VE II Senator"], pr:"~$120,000"};

// ── HSV Grange ────────────────────────────────────────────────────────────────
const grBase = {en:"LSA Supercharged V8",di:"6.2L",cy:"8",hp:"430 kW (577 hp)",tq:"740 Nm",tx:"6-speed auto",dr:"RWD",z1:"4.4 sec",qm:"12.3 sec",ts:"250 km/h (limited)",fc:"18.8L",fh:"11.5L",fx:"15.0L",ft:"98 RON",wt:"1,900 kg",se:"5",ca:"530 L"};
specs["HSV Grange|2013|VF GEN-F"]   = {...grBase, pr:"~$125,990"};
specs["HSV Grange|2014|VF GEN-F"]   = {...grBase, pr:"~$127,990"};
specs["HSV Grange|2015|VF II GEN-F2"]= {...grBase, pr:"~$129,990"};
specs["HSV Grange|2016|VF II GEN-F2"]= {...grBase, pr:"~$131,990"};
specs["HSV Grange|2017|VF II GEN-F2"]= {...grBase, pr:"~$133,990"};

// ── Statesman continuation (VL-WM gaps) ──────────────────────────────────────
const vlStat = {en:"RB30E I6",di:"3.0L",cy:"6",hp:"109 kW (146 hp)",tq:"231 Nm",tx:"4-speed auto",dr:"RWD",z1:"11.0 sec",qm:"17.8 sec",ts:"185 km/h",fc:"13.0L",fh:"8.5L",fx:"10.5L",ft:"Petrol",wt:"1,430 kg",se:"5",ca:"390 L"};
specs["Statesman|1986|VL Statesman"] = {...vlStat, pr:"~$22,990"};
specs["Statesman|1986|VL Caprice"]   = {...vlStat, en:"RB30ET Turbo I6",hp:"157 kW (210 hp)",tq:"340 Nm",z1:"7.2 sec",qm:"15.2 sec",ts:"225 km/h",wt:"1,480 kg",pr:"~$29,990"};
specs["Statesman|1987|VL Statesman"] = {...vlStat, pr:"~$23,990"};
specs["Statesman|1987|VL Caprice"]   = {...specs["Statesman|1986|VL Caprice"], pr:"~$30,990"};
specs["Statesman|1988|VL Statesman"] = {...vlStat, pr:"~$24,990"};
specs["Statesman|1988|VL Caprice"]   = {...specs["Statesman|1986|VL Caprice"], pr:"~$31,990"};
specs["Statesman|1988|VN Statesman"] = {en:"3.8L V6 Buick",di:"3.8L",cy:"6",hp:"122 kW (164 hp)",tq:"298 Nm",tx:"4-speed auto",dr:"RWD",z1:"10.5 sec",qm:"17.5 sec",ts:"195 km/h",fc:"14.0L",fh:"9.0L",fx:"11.5L",ft:"Petrol",wt:"1,580 kg",se:"5",ca:"500 L",pr:"~$32,990"};
const vnStat = {...specs["Statesman|1988|VN Statesman"]};
specs["Statesman|1989|VN Statesman"] = {...vnStat, pr:"~$33,990"};
specs["Statesman|1989|VN Caprice"]   = {...vnStat, en:"5.0L V8",di:"5.0L",cy:"8",hp:"173 kW (232 hp)",tq:"393 Nm",z1:"8.5 sec",qm:"16.5 sec",ts:"210 km/h",fc:"17.0L",fh:"10.5L",fx:"13.5L",wt:"1,640 kg",pr:"~$39,990"};
specs["Statesman|1990|VN Statesman"] = {...vnStat, pr:"~$34,990"};
specs["Statesman|1990|VN Caprice"]   = {...specs["Statesman|1989|VN Caprice"], pr:"~$40,990"};
const vpStat38 = {en:"3.8L V6",di:"3.8L",cy:"6",hp:"130 kW (174 hp)",tq:"298 Nm",tx:"4-speed auto",dr:"RWD",z1:"10.0 sec",qm:"17.2 sec",ts:"200 km/h",fc:"13.5L",fh:"8.5L",fx:"10.8L",ft:"Petrol",wt:"1,590 kg",se:"5",ca:"510 L"};
const vpCap5L = {...vpStat38, en:"5.0L V8",di:"5.0L",cy:"8",hp:"173 kW (232 hp)",tq:"393 Nm",z1:"8.5 sec",qm:"16.5 sec",ts:"210 km/h",fc:"17.0L",fh:"10.5L",fx:"13.5L",wt:"1,650 kg"};
specs["Statesman|1991|VP Statesman"] = {...vpStat38, pr:"~$35,990"};
specs["Statesman|1991|VP Caprice"]   = {...vpCap5L, pr:"~$41,990"};
specs["Statesman|1992|VP Statesman"] = {...vpStat38, pr:"~$36,990"};
specs["Statesman|1992|VP Caprice"]   = {...vpCap5L, pr:"~$42,990"};
specs["Statesman|1993|VP Statesman"] = {...vpStat38, pr:"~$37,990"};
specs["Statesman|1993|VP Caprice"]   = {...vpCap5L, pr:"~$43,990"};
specs["Statesman|1993|VR Statesman"] = {...vpStat38, en:"3.8L V6",pr:"~$38,990"};
const vrCap5L = {...vpCap5L, en:"5.0L Holden V8",hp:"175 kW (235 hp)",tq:"393 Nm"};
specs["Statesman|1994|VR Statesman"] = {...vpStat38, en:"3.8L V6",pr:"~$39,990"};
specs["Statesman|1994|VR Caprice"]   = {...vrCap5L, pr:"~$46,990"};
specs["Statesman|1995|VR Statesman"] = {...vpStat38, en:"3.8L V6",pr:"~$40,990"};
specs["Statesman|1995|VR Caprice"]   = {...vrCap5L, pr:"~$47,990"};
specs["Statesman|1995|VS Statesman"] = {...vpStat38, en:"3.8L V6",pr:"~$41,990"};
specs["Statesman|1996|VS Statesman"] = {...vpStat38, en:"3.8L V6",pr:"~$42,990"};
specs["Statesman|1996|VS Caprice"]   = {...vrCap5L, hp:"179 kW (240 hp)",pr:"~$49,990"};
specs["Statesman|1997|VS Statesman"] = {...vpStat38, en:"3.8L V6",pr:"~$43,990"};
specs["Statesman|1997|VS Caprice"]   = {...vrCap5L, hp:"179 kW (240 hp)",pr:"~$50,990"};
const whStat = {en:"3.8L V6 (Series II)",di:"3.8L",cy:"6",hp:"152 kW (204 hp)",tq:"318 Nm",tx:"4-speed auto",dr:"RWD",z1:"9.0 sec",qm:"16.8 sec",ts:"210 km/h",fc:"13.0L",fh:"8.2L",fx:"10.2L",ft:"Petrol",wt:"1,730 kg",se:"5",ca:"530 L"};
const whCap   = {...whStat, en:"Gen III LS1 V8",di:"5.7L",cy:"8",hp:"225 kW (302 hp)",tq:"461 Nm",z1:"6.0 sec",qm:"14.2 sec",ts:"250 km/h (limited)",fc:"14.5L",fh:"8.8L",fx:"11.0L",wt:"1,790 kg"};
specs["Statesman|1997|WH Statesman"] = {...whStat, pr:"~$49,990"};
specs["Statesman|1998|WH Statesman"] = {...whStat, pr:"~$50,990"};
specs["Statesman|1998|WH Caprice"]   = {...whCap, pr:"~$61,990"};
specs["Statesman|1999|WH Statesman"] = {...whStat, pr:"~$51,990"};
specs["Statesman|1999|WH Caprice"]   = {...whCap, pr:"~$62,990"};
specs["Statesman|2000|WH Statesman"] = {...whStat, pr:"~$52,990"};
specs["Statesman|2000|WH Caprice"]   = {...whCap, pr:"~$63,990"};
const wkStat = {...whStat, en:"3.8L V6 (Series III)",hp:"175 kW (235 hp)",wt:"1,740 kg"};
const wkCap  = {...whCap, en:"Gen III LS1 V8",wt:"1,800 kg"};
specs["Statesman|2001|WK Statesman"] = {...wkStat, pr:"~$54,990"};
specs["Statesman|2001|WK Caprice"]   = {...wkCap, pr:"~$65,990"};
specs["Statesman|2002|WK Statesman"] = {...wkStat, pr:"~$55,990"};
specs["Statesman|2002|WK Caprice"]   = {...wkCap, pr:"~$66,990"};
specs["Statesman|2003|WK Statesman"] = {...wkStat, pr:"~$56,990"};
specs["Statesman|2003|WK Caprice"]   = {...wkCap, pr:"~$67,990"};
specs["Statesman|2003|WL Statesman"] = {...wkStat, en:"LY7 Alloytec V6",di:"3.6L",hp:"175 kW (235 hp)",tq:"320 Nm",pr:"~$57,990"};
const wlCap = {...wkCap, en:"Gen IV L76 V8",di:"6.0L",cy:"8",hp:"270 kW (362 hp)",tq:"530 Nm"};
specs["Statesman|2004|WL Statesman"] = {...wkStat, en:"LY7 Alloytec V6",di:"3.6L",hp:"175 kW (235 hp)",tq:"320 Nm",pr:"~$58,990"};
specs["Statesman|2004|WL Caprice"]   = {...wlCap, pr:"~$69,990"};
specs["Statesman|2005|WL Statesman"] = {...wkStat, en:"LY7 Alloytec V6",di:"3.6L",hp:"175 kW (235 hp)",tq:"320 Nm",pr:"~$59,990"};
specs["Statesman|2005|WL Caprice"]   = {...wlCap, pr:"~$70,990"};
specs["Statesman|2006|WL Statesman"] = {...wkStat, en:"LY7 Alloytec V6",di:"3.6L",hp:"175 kW (235 hp)",tq:"320 Nm",pr:"~$60,990"};
specs["Statesman|2006|WL Caprice"]   = {...wlCap, pr:"~$71,990"};
specs["Statesman|2006|WM Statesman"] = {en:"LY7 Alloytec V6",di:"3.6L",cy:"6",hp:"175 kW (235 hp)",tq:"320 Nm",tx:"5-speed auto",dr:"RWD",z1:"8.8 sec",qm:"16.8 sec",ts:"215 km/h",fc:"12.8L",fh:"7.8L",fx:"9.9L",ft:"Petrol",wt:"1,850 kg",se:"5",ca:"530 L",pr:"~$59,990"};
specs["Statesman|2008|WM Statesman"] = {...specs["Statesman|2007|WM Statesman"], pr:"~$61,990"};
specs["Statesman|2009|WM Statesman"] = {...specs["Statesman|2007|WM Statesman"], pr:"~$62,990"};
specs["Statesman|2009|WM Caprice"]   = {...specs["Statesman|2007|WM Caprice"], pr:"~$74,990"};
specs["Statesman|2010|WM Statesman"] = {...specs["Statesman|2007|WM Statesman"], pr:"~$63,990"};
specs["Statesman|2010|WM Caprice"]   = {...specs["Statesman|2007|WM Caprice"], pr:"~$75,990"};
specs["Statesman|2012|WN Caprice"]   = {...specs["Statesman|2011|WN Caprice"], pr:"~$71,990"};
specs["Statesman|2012|WN Caprice V"] = {...specs["Statesman|2015|WN Caprice V"], pr:"~$79,990"};
specs["Statesman|2013|WN Caprice"]   = {...specs["Statesman|2011|WN Caprice"], pr:"~$72,990"};
specs["Statesman|2013|WN Caprice V"] = {...specs["Statesman|2015|WN Caprice V"], pr:"~$80,990"};
specs["Statesman|2014|WN Caprice"]   = {...specs["Statesman|2011|WN Caprice"], pr:"~$73,990"};
specs["Statesman|2014|WN Caprice V"] = {...specs["Statesman|2015|WN Caprice V"], pr:"~$81,990"};
specs["Statesman|2016|WN Caprice"]   = {...specs["Statesman|2015|WN Caprice"], pr:"~$74,990"};
specs["Statesman|2016|WN Caprice V"] = {...specs["Statesman|2015|WN Caprice V"], pr:"~$82,990"};
specs["Statesman|2017|WN Caprice"]   = {...specs["Statesman|2015|WN Caprice"], pr:"~$75,990"};
specs["Statesman|2017|WN Caprice V"] = {...specs["Statesman|2015|WN Caprice V"], pr:"~$83,990"};

require('fs').writeFileSync('src/data/supplement3.json', JSON.stringify({make:'Holden',specs}, null, 2));
console.log('supplement3.json written:', Object.keys(specs).length, 'entries');
