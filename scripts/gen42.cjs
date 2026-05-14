#!/usr/bin/env node
// gen42.cjs — Subaru
const fs = require('fs')
const out = { specs: {} }
const S = out.specs
const add = (k, v) => { S[k] = v }
const yr = (s, e) => Array.from({length: e-s+1}, (_,i) => s+i)

// ── Impreza (1993–2007) ───────────────────────────────────────────────────────
const impData = [
  [1993,1997,'1.6L','EJ16 1.6L SOHC Flat-4',1597,4,65,130,'5-speed manual','FWD',9.0,6.5,7.5,1050,5,'Sedan','~$18,990'],
  [1993,1997,'1.8L','EJ18 1.8L SOHC Flat-4',1820,4,84,153,'5-speed manual','FWD',9.0,6.5,7.5,1075,5,'Sedan','~$21,990'],
  [1993,1997,'WRX','EJ20G 2.0L Turbo Flat-4',1994,4,155,270,'5-speed manual','AWD',11.5,8.5,9.8,1245,5,'Sedan','~$34,990'],
  [1994,1997,'WRX STI Version I-IV','EJ20G 2.0L Turbo Flat-4 STI',1994,4,206,275,'5-speed manual','AWD',12.5,9.0,10.5,1240,5,'Sedan','~$48,990'],
  [1998,2000,'WRX','EJ20K 2.0L Turbo Flat-4',1994,4,160,290,'5-speed manual','AWD',11.5,8.5,9.8,1270,5,'Sedan','~$36,990'],
  [1998,2001,'WRX STI Version V-VI','EJ207 2.0L Turbo Flat-4',1994,4,206,343,'6-speed manual','AWD',13.0,9.5,11.0,1270,5,'Sedan','~$51,990'],
  [2001,2007,'WRX','EJ20 2.0L Turbo Flat-4',1994,4,160,300,'5-speed manual','AWD',11.5,8.5,9.8,1345,5,'Sedan','~$39,990'],
  [2001,2007,'WRX STI','EJ207 2.0L Turbo Flat-4 STI',1994,4,221,373,'6-speed manual','AWD',13.0,9.5,11.0,1430,5,'Sedan','~$56,990'],
  [2001,2007,'WRX STI Spec C','EJ207 2.0L Turbo Flat-4 STI',1994,4,221,373,'6-speed manual','AWD',13.0,9.5,11.0,1300,5,'Sedan','~$65,990'],
  [2001,2007,'RS','EJ20 2.0L Flat-4',1994,4,101,182,'5-speed manual','FWD',9.5,7.0,8.0,1195,5,'Hatch','~$24,990'],
  [2008,2013,'WRX','EJ255 2.5L Turbo Flat-4',2457,4,195,343,'5-speed manual','AWD',12.0,8.8,10.0,1425,5,'Sedan','~$41,990'],
  [2008,2013,'WRX Premium','EJ255 2.5L Turbo Flat-4',2457,4,195,343,'5-speed auto','AWD',12.0,8.8,10.0,1445,5,'Sedan','~$47,990'],
  [2008,2013,'WRX STI','EJ257 2.5L Turbo Flat-4 STI',2457,4,221,407,'6-speed manual','AWD',13.0,9.5,11.0,1500,5,'Sedan','~$56,990'],
  [2008,2013,'WRX STI spec.R','EJ257 2.5L Turbo Flat-4 STI',2457,4,221,407,'6-speed manual','AWD',13.0,9.5,11.0,1505,5,'Sedan','~$63,990'],
  [2008,2013,'2.0i','FB20 2.0L Flat-4',1995,4,110,196,'CVT Lineartronic','AWD',9.5,7.0,8.0,1380,5,'Hatch','~$24,990'],
]
for (const [ys,ye,trim,eng,disp,cyl,pw,tq,tx,dr,fc,fh,fx,wt,se,body,pr] of impData) {
  for (const y of yr(ys,ye)) {
    add(`Subaru|Impreza|${y}|${trim}`,{engine:eng,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,fuelType:pw>=155?'premium unleaded':'petrol',fc,fh,fx,seats:se,weight:wt,bodyStyle:body,price:pr})
  }
}

// ── WRX standalone (2014+) ───────────────────────────────────────────────────
const wrxData = [
  [2014,2021,'2.0i','FA20DIT 2.0L DIT Flat-4',1998,4,197,350,'6-speed manual',11.8,8.3,9.6,1478,5,'Sedan','~$39,990'],
  [2014,2021,'2.0i-S','FA20DIT 2.0L DIT Flat-4',1998,4,197,350,'6-speed manual',11.8,8.3,9.6,1495,5,'Sedan','~$45,990'],
  [2014,2021,'2.0i-L','FA20DIT 2.0L DIT Flat-4',1998,4,197,350,'CVT Lineartronic',11.8,8.3,9.6,1515,5,'Sedan','~$42,990'],
  [2022,2026,'WRX','FA24F 2.4L Turbo Flat-4',2387,4,202,350,'6-speed manual',10.9,7.5,8.8,1553,5,'Sedan','~$45,990'],
  [2022,2026,'WRX Premium','FA24F 2.4L Turbo Flat-4',2387,4,202,350,'CVT Lineartronic',10.9,7.5,8.8,1568,5,'Sedan','~$52,990'],
  [2022,2026,'WRX SportTech','FA24F 2.4L Turbo Flat-4',2387,4,202,350,'6-speed manual',10.9,7.5,8.8,1568,5,'Sedan','~$57,990'],
  [2022,2026,'WRX tS','FA24F 2.4L Turbo Flat-4',2387,4,202,350,'6-speed manual',10.9,7.5,8.8,1565,5,'Sedan','~$62,990'],
]
for (const [ys,ye,trim,eng,disp,cyl,pw,tq,tx,fc,fh,fx,wt,se,body,pr] of wrxData) {
  for (const y of yr(ys,ye)) {
    add(`Subaru|WRX|${y}|${trim}`,{engine:eng,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,fuelType:'premium unleaded',fc,fh,fx,seats:se,weight:wt,bodyStyle:body,price:pr})
  }
}

// ── WRX STI standalone (2014–2021) ───────────────────────────────────────────
const stiData = [
  [2014,2021,'WRX STI','EJ257 2.5L Turbo Flat-4 STI',2457,4,221,407,'6-speed manual',13.0,9.5,11.0,1510,5,'Sedan','~$51,990'],
  [2014,2021,'WRX STI Premium','EJ257 2.5L Turbo Flat-4 STI',2457,4,221,407,'6-speed manual',13.0,9.5,11.0,1525,5,'Sedan','~$58,990'],
  [2014,2021,'WRX STI spec.R','EJ257 2.5L Turbo Flat-4 STI',2457,4,221,407,'6-speed manual',13.0,9.5,11.0,1530,5,'Sedan','~$63,990'],
  [2014,2021,'WRX STI NBR Special','EJ257 2.5L Turbo Flat-4 STI (limited)',2457,4,221,407,'6-speed manual',13.0,9.5,11.0,1510,5,'Sedan','~$74,990'],
]
for (const [ys,ye,trim,eng,disp,cyl,pw,tq,tx,fc,fh,fx,wt,se,body,pr] of stiData) {
  for (const y of yr(ys,ye)) {
    add(`Subaru|WRX STI|${y}|${trim}`,{engine:eng,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,fuelType:'premium unleaded',fc,fh,fx,seats:se,weight:wt,bodyStyle:body,price:pr})
  }
}

// ── BRZ (2012+) ───────────────────────────────────────────────────────────────
const brzData = [
  [2012,2021,'BRZ','FA20D 2.0L Flat-4 DOHC',1998,4,147,205,'6-speed manual',9.5,6.9,7.9,1219,4,'Coupe','~$29,990'],
  [2012,2021,'BRZ Premium','FA20D 2.0L Flat-4 DOHC',1998,4,147,205,'6-speed automatic',9.5,6.9,7.9,1232,4,'Coupe','~$32,990'],
  [2012,2021,'BRZ tS','FA20D 2.0L Flat-4 DOHC',1998,4,147,205,'6-speed manual',9.5,6.9,7.9,1219,4,'Coupe','~$35,990'],
  [2012,2021,'BRZ 10th Anniversary','FA20D 2.0L Flat-4 DOHC',1998,4,147,205,'6-speed manual',9.5,6.9,7.9,1219,4,'Coupe','~$36,990'],
  [2022,2026,'BRZ','FA24 2.4L Flat-4 DOHC',2387,4,173,249,'6-speed manual',9.0,6.5,7.5,1270,4,'Coupe','~$34,990'],
  [2022,2026,'BRZ Premium','FA24 2.4L Flat-4 DOHC',2387,4,173,249,'6-speed automatic',9.0,6.5,7.5,1285,4,'Coupe','~$37,990'],
  [2022,2026,'BRZ tS','FA24 2.4L Flat-4 DOHC',2387,4,173,249,'6-speed manual',9.0,6.5,7.5,1275,4,'Coupe','~$41,990'],
]
for (const [ys,ye,trim,eng,disp,cyl,pw,tq,tx,fc,fh,fx,wt,se,body,pr] of brzData) {
  for (const y of yr(ys,ye)) {
    add(`Subaru|BRZ|${y}|${trim}`,{engine:eng,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,fuelType:'premium unleaded',fc,fh,fx,seats:se,weight:wt,bodyStyle:body,price:pr})
  }
}

// ── Outback (1996+) ───────────────────────────────────────────────────────────
const outData = [
  [1996,2003,'2.5i','EJ25 2.5L Flat-4',2457,4,115,211,'5-speed manual',11.0,8.0,9.2,1450,5,'Wagon','~$32,990'],
  [1996,2003,'3.0 H6','EZ30 3.0L Flat-6',2999,6,155,260,'4-speed auto',12.5,9.0,10.5,1570,5,'Wagon','~$44,990'],
  [2003,2009,'2.5i','EJ25 2.5L Flat-4 SOHC',2457,4,121,225,'5-speed manual',11.5,8.5,9.6,1510,5,'Wagon','~$34,990'],
  [2003,2009,'3.0R','EZ30R 3.0L Flat-6 DOHC',2999,6,177,297,'5-speed auto',13.0,9.5,11.0,1610,5,'Wagon','~$49,990'],
  [2003,2009,'2.5XT','EJ255 2.5L Turbo Flat-4',2457,4,175,324,'5-speed auto',12.5,9.0,10.5,1610,5,'Wagon','~$46,990'],
  [2009,2014,'2.5i','EJ25 2.5L Flat-4',2457,4,125,229,'6-speed manual',11.0,8.0,9.2,1555,5,'Wagon','~$36,990'],
  [2009,2014,'3.6R','EZ36D 3.6L Flat-6',3630,6,191,350,'5-speed auto',13.5,9.5,11.0,1640,5,'Wagon','~$54,990'],
  [2014,2020,'2.5i','FB25 2.5L Flat-4',2498,4,129,235,'CVT Lineartronic',10.5,7.5,8.7,1570,5,'Wagon','~$38,990'],
  [2014,2020,'2.5i Premium','FB25 2.5L Flat-4',2498,4,129,235,'CVT Lineartronic',10.5,7.5,8.7,1585,5,'Wagon','~$44,990'],
  [2014,2020,'3.6R','EZ36D 3.6L Flat-6',3630,6,191,350,'CVT Lineartronic',13.5,9.5,11.0,1645,5,'Wagon','~$54,990'],
  [2020,2026,'2.5i','FB25D 2.5L DI Flat-4',2498,4,138,245,'CVT Lineartronic',10.2,7.2,8.4,1605,5,'Wagon','~$40,990'],
  [2020,2026,'2.5i Premium','FB25D 2.5L DI Flat-4',2498,4,138,245,'CVT Lineartronic',10.2,7.2,8.4,1620,5,'Wagon','~$48,990'],
  [2020,2026,'2.4XT','FA24F 2.4L Turbo Flat-4',2387,4,194,376,'CVT Lineartronic',11.5,8.0,9.4,1674,5,'Wagon','~$57,990'],
  [2020,2026,'2.4XT Premium','FA24F 2.4L Turbo Flat-4',2387,4,194,376,'CVT Lineartronic',11.5,8.0,9.4,1690,5,'Wagon','~$64,990'],
  [2020,2026,'2.4XT Sport','FA24F 2.4L Turbo Flat-4',2387,4,194,376,'CVT Lineartronic',11.5,8.0,9.4,1680,5,'Wagon','~$61,990'],
]
for (const [ys,ye,trim,eng,disp,cyl,pw,tq,tx,fc,fh,fx,wt,se,body,pr] of outData) {
  for (const y of yr(ys,ye)) {
    add(`Subaru|Outback|${y}|${trim}`,{engine:eng,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,fuelType:pw>=175?'premium unleaded':'petrol',fc,fh,fx,seats:se,weight:wt,bodyStyle:body,price:pr})
  }
}

// ── Forester (1997+) ──────────────────────────────────────────────────────────
const forData = [
  [1997,2002,'2.0L','EJ20E 2.0L Flat-4',1994,4,97,175,'5-speed manual',10.5,7.5,8.7,1360,5,'SUV','~$26,990'],
  [1997,2002,'GT','EJ20G 2.0L Turbo Flat-4',1994,4,160,290,'5-speed manual',12.5,9.0,10.5,1470,5,'SUV','~$38,990'],
  [1997,2002,'GT-B','EJ20G 2.0L Turbo Flat-4',1994,4,160,290,'4-speed auto',12.5,9.0,10.5,1480,5,'SUV','~$41,990'],
  [2002,2008,'2.0X','EJ20 2.0L Flat-4',1994,4,101,186,'5-speed manual',10.5,7.5,8.7,1395,5,'SUV','~$29,990'],
  [2002,2008,'2.5X','EJ25 2.5L Flat-4',2457,4,121,225,'5-speed auto',11.0,8.0,9.2,1470,5,'SUV','~$33,990'],
  [2002,2008,'XT','EJ20T 2.0L Turbo Flat-4',1994,4,165,310,'5-speed auto',13.0,9.5,11.0,1555,5,'SUV','~$44,990'],
  [2008,2013,'2.5i','EJ25 2.5L Flat-4',2457,4,121,229,'5-speed manual',11.0,8.0,9.2,1520,5,'SUV','~$32,990'],
  [2008,2013,'2.5i-L','EJ25 2.5L Flat-4',2457,4,121,229,'4-speed auto',11.0,8.0,9.2,1540,5,'SUV','~$38,990'],
  [2008,2013,'XT','EJ20T 2.0L Turbo Flat-4',1994,4,170,320,'5-speed auto',13.0,9.5,11.0,1610,5,'SUV','~$46,990'],
  [2013,2018,'2.5i','FB25 2.5L Flat-4',2498,4,129,235,'CVT Lineartronic',10.5,7.5,8.7,1540,5,'SUV','~$33,990'],
  [2013,2018,'2.5i-L','FB25 2.5L Flat-4',2498,4,129,235,'CVT Lineartronic',10.5,7.5,8.7,1565,5,'SUV','~$40,990'],
  [2013,2018,'2.5i-S','FB25 2.5L Flat-4',2498,4,129,235,'CVT Lineartronic',10.5,7.5,8.7,1580,5,'SUV','~$46,990'],
  [2013,2018,'XT','FA20DIT 2.0L Turbo Flat-4',1998,4,177,350,'CVT Lineartronic',12.5,8.8,10.3,1620,5,'SUV','~$52,990'],
  [2018,2026,'2.5i','FB25D 2.5L DI Flat-4',2498,4,136,239,'CVT Lineartronic',10.0,7.0,8.2,1540,5,'SUV','~$36,990'],
  [2018,2026,'2.5i Premium','FB25D 2.5L DI Flat-4',2498,4,136,239,'CVT Lineartronic',10.0,7.0,8.2,1560,5,'SUV','~$44,990'],
  [2018,2026,'2.5i-S Sport','FB25D 2.5L DI Flat-4',2498,4,136,239,'CVT Lineartronic',10.0,7.0,8.2,1575,5,'SUV','~$52,990'],
]
for (const [ys,ye,trim,eng,disp,cyl,pw,tq,tx,fc,fh,fx,wt,se,body,pr] of forData) {
  for (const y of yr(ys,ye)) {
    add(`Subaru|Forester|${y}|${trim}`,{engine:eng,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,fuelType:pw>=160?'premium unleaded':'petrol',fc,fh,fx,seats:se,weight:wt,bodyStyle:body,price:pr})
  }
}

// ── Liberty (AU Legacy, 1989+) ────────────────────────────────────────────────
const libData = [
  [1989,1994,'2.0L','EJ20 2.0L Flat-4',1994,4,83,160,'5-speed manual',10.0,7.5,8.5,1210,5,'Sedan','~$22,990'],
  [1989,1994,'2.0 Turbo','EJ20T 2.0L Turbo Flat-4',1994,4,147,255,'5-speed manual',12.5,9.0,10.5,1310,5,'Sedan','~$33,990'],
  [1994,1999,'2.0','EJ20 2.0L Flat-4',1994,4,101,186,'5-speed manual',10.0,7.5,8.5,1250,5,'Sedan','~$24,990'],
  [1994,1999,'2.5','EJ25 2.5L Flat-4',2457,4,118,218,'4-speed auto',11.0,8.0,9.2,1380,5,'Sedan','~$32,990'],
  [1994,1999,'GT','EJ20T 2.0L Turbo Flat-4',1994,4,155,280,'5-speed manual',12.5,9.0,10.5,1370,5,'Sedan','~$38,990'],
  [1999,2003,'B4 RSK','EJ20T 2.0L Twin-Turbo Flat-4',1994,4,184,320,'5-speed manual',13.0,9.5,11.0,1440,5,'Sedan','~$49,990'],
  [2003,2009,'2.5i','EJ25 2.5L Flat-4',2457,4,121,225,'5-speed manual',11.0,8.0,9.2,1445,5,'Sedan','~$34,990'],
  [2003,2009,'3.0R','EZ30R 3.0L Flat-6',2999,6,177,297,'5-speed auto',13.0,9.5,11.0,1570,5,'Sedan','~$49,990'],
  [2003,2009,'GT','EJ20T 2.0L Turbo Flat-4',1994,4,175,324,'5-speed manual',12.5,9.0,10.5,1490,5,'Sedan','~$44,990'],
  [2009,2014,'2.5i','EJ25 2.5L Flat-4',2457,4,125,229,'CVT Lineartronic',11.0,8.0,9.2,1530,5,'Sedan','~$36,990'],
  [2009,2014,'3.6R','EZ36D 3.6L Flat-6',3630,6,191,350,'5-speed auto',13.5,9.5,11.0,1600,5,'Sedan','~$54,990'],
  [2014,2020,'2.5i','FB25 2.5L Flat-4',2498,4,129,235,'CVT Lineartronic',10.5,7.5,8.7,1540,5,'Sedan','~$38,990'],
  [2014,2020,'3.6R','EZ36D 3.6L Flat-6',3630,6,191,350,'CVT Lineartronic',13.5,9.5,11.0,1620,5,'Sedan','~$56,990'],
  [2020,2026,'2.5i','FB25D 2.5L DI Flat-4',2498,4,138,245,'CVT Lineartronic',10.2,7.2,8.4,1590,5,'Sedan','~$41,990'],
  [2020,2026,'2.5i Premium','FB25D 2.5L DI Flat-4',2498,4,138,245,'CVT Lineartronic',10.2,7.2,8.4,1610,5,'Sedan','~$49,990'],
]
for (const [ys,ye,trim,eng,disp,cyl,pw,tq,tx,fc,fh,fx,wt,se,body,pr] of libData) {
  for (const y of yr(ys,ye)) {
    add(`Subaru|Liberty|${y}|${trim}`,{engine:eng,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,fuelType:pw>=147?'premium unleaded':'petrol',fc,fh,fx,seats:se,weight:wt,bodyStyle:body,price:pr})
  }
}

// ── XV / Crosstrek (2012+) ────────────────────────────────────────────────────
for (const [ys,ye,trim,eng,disp,cyl,pw,tq,tx,fc,fh,fx,wt,pr] of [
  [2012,2017,'2.0i','FB20 2.0L Flat-4',1995,4,110,196,'5-speed manual',9.5,7.0,8.0,1330,'~$27,990'],
  [2012,2017,'2.0i-L','FB20 2.0L Flat-4',1995,4,110,196,'CVT Lineartronic',9.5,7.0,8.0,1355,'~$31,990'],
  [2017,2023,'2.0i','FB20 2.0L Flat-4',1995,4,110,196,'CVT Lineartronic',9.2,6.8,7.7,1470,'~$29,990'],
  [2017,2023,'2.0i Premium','FB20 2.0L Flat-4',1995,4,110,196,'CVT Lineartronic',9.2,6.8,7.7,1490,'~$35,990'],
  [2023,2026,'2.0i','FB20D 2.0L DI Flat-4',1995,4,115,200,'CVT Lineartronic',8.5,6.5,7.2,1475,'~$32,990'],
  [2023,2026,'2.0i-L','FB20D 2.0L DI Flat-4',1995,4,115,200,'CVT Lineartronic',8.5,6.5,7.2,1495,'~$38,990'],
  [2023,2026,'2.0i-S','FB20D 2.0L DI Flat-4',1995,4,115,200,'CVT Lineartronic',8.5,6.5,7.2,1510,'~$44,990'],
]) {
  for (const y of yr(ys,ye)) {
    add(`Subaru|XV|${y}|${trim}`,{engine:eng,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,fuelType:'petrol',fc,fh,fx,seats:5,weight:wt,bodyStyle:'SUV',price:pr})
  }
}

// ── Levorg (2015+) ────────────────────────────────────────────────────────────
for (const [ys,ye,trim,eng,disp,cyl,pw,tq,tx,fc,fh,fx,wt,pr] of [
  [2015,2021,'2.0 GT','FA20DIT 2.0L DIT Flat-4',1998,4,197,350,'CVT Lineartronic',11.0,8.0,9.2,1490,'~$44,990'],
  [2015,2021,'2.0 GT-S','FA20DIT 2.0L DIT Flat-4',1998,4,197,350,'CVT Lineartronic',11.0,8.0,9.2,1505,'~$51,990'],
  [2021,2026,'1.8GT','CB18DT 1.8L Turbo Flat-4',1795,4,129,300,'CVT Lineartronic',8.4,6.0,6.9,1540,'~$49,990'],
  [2021,2026,'1.8GT-H','CB18DT 1.8L Turbo Flat-4',1795,4,129,300,'CVT Lineartronic',8.4,6.0,6.9,1560,'~$56,990'],
]) {
  for (const y of yr(ys,ye)) {
    add(`Subaru|Levorg|${y}|${trim}`,{engine:eng,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,fuelType:'premium unleaded',fc,fh,fx,seats:5,weight:wt,bodyStyle:'Wagon',price:pr})
  }
}

// ── Tribeca (2005–2014) ───────────────────────────────────────────────────────
for (const [ys,ye,trim,eng,disp,cyl,pw,tq,tx,fc,fh,fx,wt,pr] of [
  [2005,2007,'7-Seater','EZ30D 3.0L Flat-6',2999,6,180,303,'5-speed auto',13.0,9.5,11.0,1840,'~$49,990'],
  [2007,2014,'3.6R','EZ36D 3.6L Flat-6',3630,6,191,350,'5-speed auto',13.5,9.5,11.0,1905,'~$54,990'],
]) {
  for (const y of yr(ys,ye)) {
    add(`Subaru|Tribeca|${y}|${trim}`,{engine:eng,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,fuelType:'petrol',fc,fh,fx,seats:7,weight:wt,bodyStyle:'SUV',price:pr})
  }
}

// ── Solterra EV (2022+) ───────────────────────────────────────────────────────
for (const y of yr(2022,2026)) {
  add(`Subaru|Solterra|${y}|AWD`,{engine:'Dual Electric Motor AWD',displacement:0,cylinders:0,power:160,torque:336,transmission:'Single-speed reduction gear',fuelType:'electric',fc:null,fh:null,fx:null,range:465,battery:'71.4 kWh',seats:5,weight:1930,bodyStyle:'SUV',price:`~$${Math.round(59990+(y-2022)*1200).toLocaleString()}`})
}

const total = Object.keys(S).length
console.log(`gen42 Subaru: ${total} entries`)
fs.writeFileSync('src/data/supplement42.json', JSON.stringify(out, null, 2))
console.log('Written supplement42.json')
