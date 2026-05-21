'use strict';
const fs = require('fs');

const specs = {};
function add(make, model, year, trim, s) {
  specs[`${make}|${model}|${year}|${trim}`] = s;
}
function addYears(make, model, years, trim, s) {
  for (const yr of years) add(make, model, yr, trim, { ...s });
}

// ── Simca ──────────────────────────────────────────────────────────────────
// Simca Aronde 1951–1964 (French family saloon, RWD I4)
addYears('Simca','Aronde',[1952,1954,1956,1958,1961,1963],'1.2 Standard',
  {en:'1.2L I4',di:1221,cy:4,hp:45,tq:79,tx:'4-speed Manual',dr:'RWD',z1:24.0,ts:112,fc:9.2,fh:7.2,fx:10.8,ft:'Petrol',wt:870,se:5,ca:310,pr:2200});
addYears('Simca','Aronde',[1954,1957,1960,1963],'1.3 Montlhery',
  {en:'1.3L I4',di:1290,cy:4,hp:57,tq:89,tx:'4-speed Manual',dr:'RWD',z1:19.0,ts:135,fc:9.0,fh:7.0,fx:10.5,ft:'Petrol',wt:880,se:5,ca:310,pr:2800});
addYears('Simca','Aronde',[1954,1957,1960,1963],'1.3 Flash Special',
  {en:'1.3L I4',di:1290,cy:4,hp:60,tq:93,tx:'4-speed Manual',dr:'RWD',z1:17.5,ts:140,fc:9.5,fh:7.5,fx:11.0,ft:'Petrol',wt:885,se:5,ca:310,pr:3200});
addYears('Simca','Aronde',[1955,1958,1961],'1.3 Elysee Coupe',
  {en:'1.3L I4',di:1290,cy:4,hp:60,tq:93,tx:'4-speed Manual',dr:'RWD',z1:17.0,ts:142,fc:9.8,fh:7.8,fx:11.5,ft:'Petrol',wt:875,se:4,ca:260,pr:3600});

// Simca 1000 1961–1978 (rear-engine RWD)
addYears('Simca','Simca 1000',[1962,1965,1968,1971,1974,1977],'1.0 GL',
  {en:'1.0L I4',di:944,cy:4,hp:36,tq:64,tx:'4-speed Manual',dr:'RWD',z1:27.0,ts:105,fc:8.0,fh:6.5,fx:9.2,ft:'Petrol',wt:670,se:4,ca:310,pr:1800});
addYears('Simca','Simca 1000',[1962,1965,1968,1971,1974,1977],'1.0 GLS',
  {en:'1.0L I4',di:944,cy:4,hp:44,tq:68,tx:'4-speed Manual',dr:'RWD',z1:22.0,ts:120,fc:8.2,fh:6.8,fx:9.5,ft:'Petrol',wt:680,se:4,ca:310,pr:2200});
addYears('Simca','Simca 1000',[1966,1969,1972,1975,1977],'1.1 Special',
  {en:'1.1L I4',di:1118,cy:4,hp:52,tq:80,tx:'4-speed Manual',dr:'RWD',z1:19.5,ts:130,fc:8.5,fh:7.0,fx:10.0,ft:'Petrol',wt:690,se:4,ca:310,pr:2500});
addYears('Simca','Simca 1000',[1969,1971,1973,1975,1977],'Rallye 1',
  {en:'1.0L I4',di:944,cy:4,hp:52,tq:76,tx:'4-speed Manual',dr:'RWD',z1:14.5,ts:157,fc:10.5,fh:8.5,fx:12.5,ft:'Petrol',wt:700,se:4,ca:270,pr:3200});
addYears('Simca','Simca 1000',[1969,1971,1973,1975,1977],'Rallye 2',
  {en:'1.3L I4',di:1294,cy:4,hp:82,tq:104,tx:'4-speed Manual',dr:'RWD',z1:10.5,ts:175,fc:11.0,fh:9.0,fx:13.0,ft:'Petrol',wt:710,se:4,ca:270,pr:4200});
addYears('Simca','Simca 1000',[1970,1972,1974],'Rallye 3',
  {en:'1.3L I4',di:1294,cy:4,hp:103,tq:118,tx:'4-speed Manual',dr:'RWD',z1:9.5,ts:190,fc:12.0,fh:10.0,fx:14.0,ft:'Petrol',wt:730,se:4,ca:270,pr:5500});

// Simca 1100 1967–1982 (FWD hatchback)
addYears('Simca','Simca 1100',[1968,1971,1974,1977,1980],'1.1 GL',
  {en:'1.1L I4',di:1118,cy:4,hp:55,tq:84,tx:'4-speed Manual',dr:'FWD',z1:18.0,ts:130,fc:8.0,fh:6.5,fx:9.5,ft:'Petrol',wt:790,se:5,ca:340,pr:2500});
addYears('Simca','Simca 1100',[1968,1971,1974,1977,1980],'1.1 GLS',
  {en:'1.1L I4',di:1118,cy:4,hp:58,tq:87,tx:'4-speed Manual',dr:'FWD',z1:17.5,ts:135,fc:8.2,fh:6.8,fx:9.8,ft:'Petrol',wt:800,se:5,ca:340,pr:2900});
addYears('Simca','Simca 1100',[1970,1973,1976,1979,1982],'1.3 TI',
  {en:'1.3L I4',di:1294,cy:4,hp:76,tq:104,tx:'5-speed Manual',dr:'FWD',z1:13.5,ts:158,fc:9.0,fh:7.5,fx:10.5,ft:'Petrol',wt:820,se:5,ca:340,pr:3500});
addYears('Simca','Simca 1100',[1971,1974,1977,1980],'1.1 Break',
  {en:'1.1L I4',di:1118,cy:4,hp:55,tq:84,tx:'4-speed Manual',dr:'FWD',z1:18.5,ts:125,fc:8.5,fh:7.0,fx:10.0,ft:'Petrol',wt:840,se:5,ca:740,pr:3100});

// Simca 1200 S 1967–1971 (coupe)
addYears('Simca','Simca 1200 S',[1967,1969,1971],'1.2 Coupe',
  {en:'1.2L I4',di:1204,cy:4,hp:80,tq:103,tx:'4-speed Manual',dr:'FWD',z1:12.5,ts:165,fc:9.5,fh:8.0,fx:11.0,ft:'Petrol',wt:870,se:4,ca:280,pr:4800});

// Simca Horizon 1978–1986
addYears('Simca','Horizon',[1979,1981,1983,1985],'1.1 GL',
  {en:'1.1L I4',di:1118,cy:4,hp:55,tq:84,tx:'4-speed Manual',dr:'FWD',z1:17.0,ts:138,fc:8.5,fh:7.0,fx:10.0,ft:'Petrol',wt:840,se:5,ca:290,pr:6200});
addYears('Simca','Horizon',[1979,1981,1983,1985],'1.3 LS',
  {en:'1.3L I4',di:1294,cy:4,hp:68,tq:100,tx:'4-speed Manual',dr:'FWD',z1:14.0,ts:155,fc:9.0,fh:7.5,fx:10.5,ft:'Petrol',wt:860,se:5,ca:290,pr:7200});
addYears('Simca','Horizon',[1979,1981,1983,1985],'1.5 GLS',
  {en:'1.5L I4',di:1442,cy:4,hp:80,tq:112,tx:'5-speed Manual',dr:'FWD',z1:12.5,ts:165,fc:9.5,fh:8.0,fx:11.0,ft:'Petrol',wt:880,se:5,ca:290,pr:8500});

// ── Lada ───────────────────────────────────────────────────────────────────
// Lada 1200 / VAZ-2101 1970–1982 (Fiat 124 derivative)
addYears('Lada','1200',[1974,1976,1978,1980,1982],'1.2 Sedan',
  {en:'1.2L I4',di:1198,cy:4,hp:59,tq:87,tx:'4-speed Manual',dr:'RWD',z1:18.0,ts:132,fc:9.5,fh:7.5,fx:11.0,ft:'Petrol',wt:955,se:5,ca:320,pr:3200});
addYears('Lada','1200',[1974,1976,1978,1980,1982],'1.2 Kombi',
  {en:'1.2L I4',di:1198,cy:4,hp:59,tq:87,tx:'4-speed Manual',dr:'RWD',z1:18.5,ts:128,fc:10.0,fh:8.0,fx:11.5,ft:'Petrol',wt:1010,se:5,ca:580,pr:3600});

// Lada 1300 / VAZ-2103 1972–1984
addYears('Lada','1300',[1975,1977,1979,1981,1983],'1.3 Sedan',
  {en:'1.3L I4',di:1294,cy:4,hp:71,tq:104,tx:'4-speed Manual',dr:'RWD',z1:16.0,ts:145,fc:10.0,fh:8.0,fx:11.5,ft:'Petrol',wt:985,se:5,ca:320,pr:3800});
addYears('Lada','1300',[1975,1977,1979,1981,1983],'1.5 Sedan',
  {en:'1.5L I4',di:1452,cy:4,hp:78,tq:110,tx:'4-speed Manual',dr:'RWD',z1:14.5,ts:150,fc:10.5,fh:8.5,fx:12.0,ft:'Petrol',wt:1000,se:5,ca:320,pr:4200});

// Lada Niva / VAZ-2121 1977–2021 (iconic compact 4WD)
addYears('Lada','Niva',[1978,1980,1982,1985,1988,1991,1994,1997],'1.6 4WD',
  {en:'1.6L I4',di:1570,cy:4,hp:80,tq:125,tx:'4-speed Manual',dr:'4WD',z1:17.0,ts:130,fc:11.5,fh:9.0,fx:13.5,ft:'Petrol',wt:1150,se:4,ca:380,pr:8500});
addYears('Lada','Niva',[1995,1998,2001,2004,2007,2010,2013,2016,2019],'1.7i 4WD',
  {en:'1.7L I4',di:1690,cy:4,hp:84,tq:131,tx:'5-speed Manual',dr:'4WD',z1:17.0,ts:137,fc:11.0,fh:9.0,fx:13.0,ft:'Petrol',wt:1160,se:4,ca:380,pr:12000});
addYears('Lada','Niva',[1994,1997,2000,2003,2006,2009,2012,2015],'1.7i LWB',
  {en:'1.7L I4',di:1690,cy:4,hp:84,tq:131,tx:'5-speed Manual',dr:'4WD',z1:17.5,ts:132,fc:11.5,fh:9.5,fx:13.5,ft:'Petrol',wt:1220,se:5,ca:520,pr:13500});

// Lada Riva / VAZ-2105/2107 1979–2012
addYears('Lada','Riva',[1982,1985,1988,1991,1994,1997],'1.3 Sedan',
  {en:'1.3L I4',di:1294,cy:4,hp:64,tq:99,tx:'4-speed Manual',dr:'RWD',z1:18.0,ts:140,fc:10.0,fh:8.0,fx:11.5,ft:'Petrol',wt:1010,se:5,ca:320,pr:4800});
addYears('Lada','Riva',[1982,1985,1988,1991,1994,1997,2000],'1.5 Sedan',
  {en:'1.5L I4',di:1452,cy:4,hp:75,tq:107,tx:'4-speed Manual',dr:'RWD',z1:16.0,ts:148,fc:10.5,fh:8.5,fx:12.0,ft:'Petrol',wt:1040,se:5,ca:320,pr:5500});
addYears('Lada','Riva',[1985,1988,1991,1994,1997],'1.5 Estate',
  {en:'1.5L I4',di:1452,cy:4,hp:75,tq:107,tx:'4-speed Manual',dr:'RWD',z1:17.0,ts:143,fc:11.0,fh:9.0,fx:12.5,ft:'Petrol',wt:1100,se:5,ca:540,pr:6000});

// Lada Samara / VAZ-2108/2109 1984–2004 (FWD hatchback)
addYears('Lada','Samara',[1986,1989,1992,1995,1998],'1.1 3-door',
  {en:'1.1L I4',di:1099,cy:4,hp:54,tq:81,tx:'5-speed Manual',dr:'FWD',z1:19.0,ts:140,fc:9.0,fh:7.0,fx:10.5,ft:'Petrol',wt:890,se:5,ca:290,pr:6500});
addYears('Lada','Samara',[1986,1989,1992,1995,1998],'1.3 3-door',
  {en:'1.3L I4',di:1288,cy:4,hp:65,tq:95,tx:'5-speed Manual',dr:'FWD',z1:16.0,ts:148,fc:9.5,fh:7.5,fx:11.0,ft:'Petrol',wt:910,se:5,ca:290,pr:7200});
addYears('Lada','Samara',[1988,1991,1994,1997,2001],'1.3 5-door',
  {en:'1.3L I4',di:1288,cy:4,hp:65,tq:95,tx:'5-speed Manual',dr:'FWD',z1:16.5,ts:146,fc:9.5,fh:7.5,fx:11.0,ft:'Petrol',wt:930,se:5,ca:310,pr:7800});
addYears('Lada','Samara',[1990,1993,1996,1999,2002],'1.5 3-door',
  {en:'1.5L I4',di:1452,cy:4,hp:79,tq:113,tx:'5-speed Manual',dr:'FWD',z1:13.0,ts:158,fc:10.0,fh:8.0,fx:11.5,ft:'Petrol',wt:930,se:5,ca:290,pr:8500});

// ── NSU ────────────────────────────────────────────────────────────────────
// NSU Prinz 4 1961–1973 (rear-engine air-cooled)
addYears('NSU','Prinz 4',[1963,1966,1969,1972],'0.6 Standard',
  {en:'0.6L I2',di:598,cy:2,hp:30,tq:44,tx:'4-speed Manual',dr:'RWD',z1:26.0,ts:115,fc:7.5,fh:6.0,fx:8.5,ft:'Petrol',wt:530,se:4,ca:250,pr:1600});
addYears('NSU','Prinz 4',[1963,1966,1969,1972],'0.6 Sport',
  {en:'0.6L I2',di:598,cy:2,hp:36,tq:49,tx:'4-speed Manual',dr:'RWD',z1:22.0,ts:128,fc:7.8,fh:6.2,fx:9.0,ft:'Petrol',wt:535,se:4,ca:250,pr:2000});

// NSU 1000 / Typ 110 1964–1972
addYears('NSU','1000',[1965,1967,1969,1971],'1.0 Standard',
  {en:'1.0L I4',di:996,cy:4,hp:40,tq:67,tx:'4-speed Manual',dr:'RWD',z1:21.0,ts:120,fc:7.5,fh:6.0,fx:8.8,ft:'Petrol',wt:660,se:4,ca:280,pr:2200});
addYears('NSU','1000',[1965,1967,1969,1971],'1.0 L',
  {en:'1.0L I4',di:996,cy:4,hp:44,tq:70,tx:'4-speed Manual',dr:'RWD',z1:19.5,ts:125,fc:7.8,fh:6.2,fx:9.2,ft:'Petrol',wt:665,se:4,ca:280,pr:2500});

// NSU 1000 TT 1965–1972
addYears('NSU','1000 TT',[1966,1968,1970,1972],'1.0 Sport',
  {en:'1.0L I4',di:996,cy:4,hp:54,tq:79,tx:'4-speed Manual',dr:'RWD',z1:14.5,ts:150,fc:8.5,fh:7.0,fx:10.0,ft:'Petrol',wt:670,se:4,ca:250,pr:2800});

// NSU 1000 TTS 1967–1971
addYears('NSU','1000 TTS',[1967,1969,1971],'1.0 Touring Sport',
  {en:'1.0L I4',di:996,cy:4,hp:70,tq:90,tx:'4-speed Manual',dr:'RWD',z1:11.5,ts:170,fc:9.5,fh:8.0,fx:11.0,ft:'Petrol',wt:650,se:4,ca:250,pr:3800});

// NSU Wankel Spider 1964–1967 (first Wankel production car)
addYears('NSU','Wankel Spider',[1964,1965,1966,1967],'0.5 Wankel Roadster',
  {en:'0.5L Single-Rotor Wankel',di:497,cy:1,hp:50,tq:65,tx:'4-speed Manual',dr:'RWD',z1:14.0,ts:150,fc:10.0,fh:8.5,fx:12.0,ft:'Petrol',wt:610,se:2,ca:120,pr:5500});

// NSU Ro 80 1967–1977 (twin-rotor FWD, revolutionary design)
addYears('NSU','Ro 80',[1968,1970,1972,1974,1976],'1.0 Twin-Rotor',
  {en:'1.0L Twin-Rotor Wankel',di:995,cy:2,hp:115,tq:154,tx:'3-speed Semi-Auto',dr:'FWD',z1:13.5,ts:175,fc:14.0,fh:11.0,fx:16.5,ft:'Petrol',wt:1230,se:5,ca:410,pr:8500});
addYears('NSU','Ro 80',[1968,1970,1972,1974,1976],'1.0 Twin-Rotor Auto',
  {en:'1.0L Twin-Rotor Wankel',di:995,cy:2,hp:115,tq:154,tx:'3-speed Automatic',dr:'FWD',z1:14.0,ts:172,fc:14.5,fh:11.5,fx:17.0,ft:'Petrol',wt:1245,se:5,ca:410,pr:9200});

// ── Caterham ────────────────────────────────────────────────────────────────
// Caterham Seven 160 2014–2021 (0.66T kei engine, entry-level)
addYears('Caterham','Seven 160',[2014,2016,2018,2020],'0.66T Standard',
  {en:'0.66L Turbo I3',di:660,cy:3,hp:80,tq:107,tx:'5-speed Manual',dr:'RWD',z1:6.5,ts:164,fc:6.5,fh:5.8,fx:7.8,ft:'Petrol',wt:490,se:2,ca:0,pr:28000});
addYears('Caterham','Seven 160',[2014,2016,2018,2020],'0.66T R',
  {en:'0.66L Turbo I3',di:660,cy:3,hp:95,tq:115,tx:'5-speed Manual',dr:'RWD',z1:5.9,ts:174,fc:7.0,fh:6.2,fx:8.5,ft:'Petrol',wt:480,se:2,ca:0,pr:32000});

// Caterham Seven 270 2014–2022 (1.6 Honda engine)
addYears('Caterham','Seven 270',[2014,2016,2018,2020,2022],'1.6 Standard',
  {en:'1.6L I4',di:1596,cy:4,hp:135,tq:148,tx:'5-speed Manual',dr:'RWD',z1:4.8,ts:193,fc:7.5,fh:6.5,fx:9.0,ft:'Petrol',wt:510,se:2,ca:0,pr:35000});
addYears('Caterham','Seven 270',[2014,2016,2018,2020,2022],'1.6 R',
  {en:'1.6L I4',di:1596,cy:4,hp:135,tq:148,tx:'6-speed Manual',dr:'RWD',z1:4.6,ts:193,fc:7.8,fh:6.8,fx:9.2,ft:'Petrol',wt:505,se:2,ca:0,pr:38000});

// Caterham Seven 310 2016–2022
addYears('Caterham','Seven 310',[2016,2018,2020,2022],'1.6 Standard',
  {en:'1.6L I4',di:1596,cy:4,hp:155,tq:160,tx:'5-speed Manual',dr:'RWD',z1:4.4,ts:201,fc:8.0,fh:7.0,fx:9.5,ft:'Petrol',wt:545,se:2,ca:0,pr:42000});
addYears('Caterham','Seven 310',[2016,2018,2020,2022],'1.6 R',
  {en:'1.6L I4',di:1596,cy:4,hp:155,tq:160,tx:'6-speed Manual',dr:'RWD',z1:4.2,ts:201,fc:8.2,fh:7.2,fx:9.8,ft:'Petrol',wt:535,se:2,ca:0,pr:46000});

// Caterham Seven 360 2014–2022 (2.0 Ford Sigma)
addYears('Caterham','Seven 360',[2014,2016,2018,2020,2022],'2.0 Standard',
  {en:'2.0L I4',di:1999,cy:4,hp:180,tq:190,tx:'5-speed Manual',dr:'RWD',z1:4.1,ts:214,fc:8.5,fh:7.5,fx:10.0,ft:'Petrol',wt:570,se:2,ca:0,pr:45000});

// Caterham Seven 420 2013–2022 (2.0 Duratec)
addYears('Caterham','Seven 420',[2013,2015,2017,2019,2021],'2.0 Standard',
  {en:'2.0L I4',di:1999,cy:4,hp:210,tq:208,tx:'6-speed Manual',dr:'RWD',z1:3.8,ts:233,fc:9.0,fh:7.8,fx:10.5,ft:'Petrol',wt:590,se:2,ca:0,pr:55000});
addYears('Caterham','Seven 420',[2013,2015,2017,2019,2021],'2.0 R',
  {en:'2.0L I4',di:1999,cy:4,hp:210,tq:208,tx:'6-speed Saenz',dr:'RWD',z1:3.6,ts:233,fc:9.2,fh:8.0,fx:11.0,ft:'Petrol',wt:555,se:2,ca:0,pr:62000});

// Caterham Seven 485 2015–2022 (supercharged)
addYears('Caterham','Seven 485',[2015,2017,2019,2021],'2.0 Supercharged',
  {en:'2.0L Supercharged I4',di:1999,cy:4,hp:245,tq:265,tx:'6-speed Saenz',dr:'RWD',z1:3.2,ts:249,fc:10.5,fh:9.0,fx:12.5,ft:'Petrol',wt:615,se:2,ca:0,pr:72000});

// Caterham Seven 620 R 2013–2022 (310 hp monster)
addYears('Caterham','Seven 620 R',[2013,2015,2017,2019,2021],'2.0 Supercharged',
  {en:'2.0L Supercharged I4',di:1999,cy:4,hp:310,tq:305,tx:'6-speed Saenz',dr:'RWD',z1:2.8,ts:257,fc:12.0,fh:10.0,fx:14.0,ft:'Petrol',wt:620,se:2,ca:0,pr:85000});
addYears('Caterham','Seven 620 R',[2013,2015,2017,2019,2021],'2.0 Supercharged CSR',
  {en:'2.0L Supercharged I4',di:1999,cy:4,hp:310,tq:305,tx:'6-speed Saenz',dr:'RWD',z1:2.7,ts:257,fc:12.5,fh:10.5,fx:14.5,ft:'Petrol',wt:600,se:2,ca:0,pr:95000});

// ── Autobianchi ─────────────────────────────────────────────────────────────
// Autobianchi Bianchina 1957–1969 (Fiat 500-based convertible/sedan)
addYears('Autobianchi','Bianchina',[1960,1963,1966,1969],'0.5 Sedan',
  {en:'0.5L I2',di:479,cy:2,hp:14,tq:28,tx:'4-speed Manual',dr:'RWD',z1:35.0,ts:85,fc:6.0,fh:5.0,fx:7.0,ft:'Petrol',wt:490,se:4,ca:220,pr:1200});
addYears('Autobianchi','Bianchina',[1960,1963,1966,1969],'0.5 Transformabile',
  {en:'0.5L I2',di:479,cy:2,hp:14,tq:28,tx:'4-speed Manual',dr:'RWD',z1:35.0,ts:85,fc:6.0,fh:5.0,fx:7.0,ft:'Petrol',wt:480,se:4,ca:220,pr:1100});
addYears('Autobianchi','Bianchina',[1965,1968],'0.5 Cabriolet',
  {en:'0.5L I2',di:499,cy:2,hp:18,tq:33,tx:'4-speed Manual',dr:'RWD',z1:33.0,ts:88,fc:6.2,fh:5.2,fx:7.2,ft:'Petrol',wt:475,se:4,ca:200,pr:1400});

// Autobianchi Primula 1964–1970 (FWD precursor to Fiat 128)
addYears('Autobianchi','Primula',[1965,1967,1969],'1.1 Standard',
  {en:'1.1L I4',di:1073,cy:4,hp:51,tq:77,tx:'4-speed Manual',dr:'FWD',z1:17.0,ts:135,fc:8.0,fh:6.5,fx:9.5,ft:'Petrol',wt:780,se:4,ca:310,pr:2400});
addYears('Autobianchi','Primula',[1965,1967,1969],'1.1 S Coupe',
  {en:'1.1L I4',di:1073,cy:4,hp:58,tq:83,tx:'4-speed Manual',dr:'FWD',z1:14.5,ts:148,fc:8.5,fh:7.0,fx:10.0,ft:'Petrol',wt:790,se:4,ca:280,pr:3000});

// Autobianchi A111 1969–1972 (luxury Fiat 128 derivative)
addYears('Autobianchi','A111',[1970,1971,1972],'1.4 Standard',
  {en:'1.4L I4',di:1438,cy:4,hp:76,tq:103,tx:'4-speed Manual',dr:'FWD',z1:13.0,ts:155,fc:9.0,fh:7.5,fx:10.5,ft:'Petrol',wt:880,se:5,ca:290,pr:3500});

// Autobianchi A112 1969–1986 (iconic Italian city car / A-segment pioneer)
addYears('Autobianchi','A112',[1972,1975,1978,1981,1984],'0.9 Base',
  {en:'0.9L I4',di:903,cy:4,hp:44,tq:66,tx:'4-speed Manual',dr:'FWD',z1:18.0,ts:130,fc:7.5,fh:6.0,fx:9.0,ft:'Petrol',wt:620,se:4,ca:255,pr:1900});
addYears('Autobianchi','A112',[1972,1975,1978,1981,1984],'0.9 Elite',
  {en:'0.9L I4',di:903,cy:4,hp:49,tq:71,tx:'4-speed Manual',dr:'FWD',z1:16.5,ts:138,fc:7.8,fh:6.2,fx:9.2,ft:'Petrol',wt:625,se:4,ca:255,pr:2200});
addYears('Autobianchi','A112',[1972,1975,1978,1981,1984],'1.0 Abarth',
  {en:'1.0L I4',di:982,cy:4,hp:58,tq:82,tx:'4-speed Manual',dr:'FWD',z1:13.5,ts:155,fc:8.5,fh:7.0,fx:10.0,ft:'Petrol',wt:615,se:4,ca:255,pr:2800});
addYears('Autobianchi','A112',[1979,1982,1984],'1.1 Junior',
  {en:'1.1L I4',di:1049,cy:4,hp:49,tq:72,tx:'4-speed Manual',dr:'FWD',z1:16.0,ts:140,fc:7.8,fh:6.3,fx:9.2,ft:'Petrol',wt:630,se:4,ca:255,pr:2000});

// ── DAF ─────────────────────────────────────────────────────────────────────
// DAF 33 1967–1974 (smallest Variomatic CVT car)
addYears('DAF','33',[1968,1970,1972,1974],'0.75 Variomatic',
  {en:'0.75L I2',di:746,cy:2,hp:28,tq:48,tx:'Variomatic CVT',dr:'RWD',z1:30.0,ts:95,fc:7.5,fh:6.0,fx:8.8,ft:'Petrol',wt:570,se:4,ca:275,pr:1800});

// DAF 44 1966–1974
addYears('DAF','44',[1967,1969,1971,1973],'0.84 Variomatic',
  {en:'0.84L I2',di:844,cy:2,hp:32,tq:57,tx:'Variomatic CVT',dr:'RWD',z1:27.0,ts:105,fc:7.8,fh:6.2,fx:9.2,ft:'Petrol',wt:640,se:4,ca:280,pr:2200});
addYears('DAF','44',[1967,1969,1971,1973],'0.84 Estate',
  {en:'0.84L I2',di:844,cy:2,hp:32,tq:57,tx:'Variomatic CVT',dr:'RWD',z1:28.0,ts:100,fc:8.0,fh:6.5,fx:9.5,ft:'Petrol',wt:680,se:4,ca:580,pr:2500});

// DAF 55 1967–1975 (Renault engine, first CVT to win Le Mans class)
addYears('DAF','55',[1968,1970,1972,1974],'1.1 Standard',
  {en:'1.1L I4',di:1108,cy:4,hp:47,tq:81,tx:'Variomatic CVT',dr:'RWD',z1:22.0,ts:125,fc:8.5,fh:7.0,fx:10.0,ft:'Petrol',wt:770,se:4,ca:290,pr:2600});
addYears('DAF','55',[1968,1970,1972,1974],'1.1 Marathon',
  {en:'1.1L I4',di:1108,cy:4,hp:55,tq:88,tx:'Variomatic CVT',dr:'RWD',z1:18.5,ts:140,fc:9.0,fh:7.5,fx:10.5,ft:'Petrol',wt:780,se:4,ca:290,pr:3200});
addYears('DAF','55',[1969,1971,1973,1975],'1.1 Coupe',
  {en:'1.1L I4',di:1108,cy:4,hp:55,tq:88,tx:'Variomatic CVT',dr:'RWD',z1:18.0,ts:143,fc:9.0,fh:7.5,fx:10.5,ft:'Petrol',wt:760,se:4,ca:250,pr:3600});

// DAF 66 1972–1975 (Volvo partnership era)
addYears('DAF','66',[1972,1974],'1.1 Standard',
  {en:'1.1L I4',di:1108,cy:4,hp:47,tq:81,tx:'Variomatic CVT',dr:'RWD',z1:22.0,ts:125,fc:8.5,fh:7.0,fx:10.0,ft:'Petrol',wt:800,se:4,ca:290,pr:3000});
addYears('DAF','66',[1972,1974],'1.3 Marathon',
  {en:'1.3L I4',di:1289,cy:4,hp:57,tq:96,tx:'Variomatic CVT',dr:'RWD',z1:17.5,ts:140,fc:9.0,fh:7.5,fx:10.5,ft:'Petrol',wt:820,se:4,ca:290,pr:3600});

// ── Matra ───────────────────────────────────────────────────────────────────
// Matra M530 1967–1973 (Ford V4 mid-engine coupe)
addYears('Matra','M530',[1968,1970,1972],'1.7 V4',
  {en:'1.7L V4',di:1699,cy:4,hp:76,tq:120,tx:'4-speed Manual',dr:'RWD',z1:13.0,ts:175,fc:10.5,fh:8.5,fx:12.5,ft:'Petrol',wt:880,se:4,ca:230,pr:5200});
addYears('Matra','M530',[1968,1970,1972],'1.7 LX',
  {en:'1.7L V4',di:1699,cy:4,hp:76,tq:120,tx:'4-speed Manual',dr:'RWD',z1:12.8,ts:175,fc:10.5,fh:8.5,fx:12.5,ft:'Petrol',wt:870,se:4,ca:230,pr:5800});

// Matra Bagheera 1973–1980 (mid-engine 3-abreast seating)
addYears('Matra','Bagheera',[1974,1976,1978,1980],'1.3 Standard',
  {en:'1.3L I4',di:1294,cy:4,hp:84,tq:107,tx:'4-speed Manual',dr:'RWD',z1:11.5,ts:178,fc:10.0,fh:8.0,fx:12.0,ft:'Petrol',wt:900,se:3,ca:220,pr:5500});
addYears('Matra','Bagheera',[1974,1976,1978,1980],'1.4 S',
  {en:'1.4L I4',di:1442,cy:4,hp:96,tq:122,tx:'4-speed Manual',dr:'RWD',z1:10.0,ts:195,fc:10.5,fh:8.5,fx:12.5,ft:'Petrol',wt:910,se:3,ca:220,pr:6800});
addYears('Matra','Bagheera',[1977,1979],'1.6 X',
  {en:'1.6L I4',di:1592,cy:4,hp:110,tq:137,tx:'4-speed Manual',dr:'RWD',z1:9.0,ts:205,fc:11.0,fh:9.0,fx:13.0,ft:'Petrol',wt:930,se:3,ca:220,pr:8200});

// Matra Murena 1980–1983 (successor to Bagheera, twin-cam 2.2)
addYears('Matra','Murena',[1980,1982],'1.6 Standard',
  {en:'1.6L I4',di:1592,cy:4,hp:92,tq:125,tx:'5-speed Manual',dr:'RWD',z1:10.5,ts:195,fc:10.5,fh:8.5,fx:12.5,ft:'Petrol',wt:960,se:3,ca:220,pr:9500});
addYears('Matra','Murena',[1980,1982],'2.2 S',
  {en:'2.2L I4',di:2155,cy:4,hp:142,tq:180,tx:'5-speed Manual',dr:'RWD',z1:8.5,ts:220,fc:12.0,fh:9.5,fx:14.0,ft:'Petrol',wt:990,se:3,ca:220,pr:12500});

// Matra Rancho 1977–1984 (proto-SUV / adventure MPV)
addYears('Matra','Rancho',[1978,1980,1982,1984],'1.4 Standard',
  {en:'1.4L I4',di:1442,cy:4,hp:80,tq:112,tx:'4-speed Manual',dr:'FWD',z1:14.0,ts:155,fc:11.0,fh:9.0,fx:13.0,ft:'Petrol',wt:1085,se:5,ca:650,pr:7200});
addYears('Matra','Rancho',[1978,1980,1982,1984],'1.4 X',
  {en:'1.4L I4',di:1442,cy:4,hp:80,tq:112,tx:'4-speed Manual',dr:'FWD',z1:14.0,ts:155,fc:11.0,fh:9.0,fx:13.0,ft:'Petrol',wt:1095,se:7,ca:450,pr:8200});

fs.writeFileSync('src/data/supplement105.json', JSON.stringify({ specs }, null, 2));
const n = Object.keys(specs).length;
console.log(`supplement105.json written: ${n} entries`);
['Simca','Lada','NSU','Caterham','Autobianchi','DAF','Matra'].forEach(m => {
  const c = Object.keys(specs).filter(k => k.startsWith(m + '|')).length;
  if (c) console.log(`  ${m}: ${c}`);
});
