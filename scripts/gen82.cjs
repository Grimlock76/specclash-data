'use strict'
// gen82.cjs — Chevrolet modern trucks + compact cars + EVs
// Covers: Silverado, Colorado, Tahoe, Suburban, Avalanche, Trailblazer, Blazer,
//         Equinox, Traverse, Cruze, Sonic, Spark, Trax, Volt, Bolt EV
const fs = require('fs')
const specs = {}

function add(make, model, year, trim, s) {
  specs[`${make}|${model}|${year}|${trim}`] = s
}

// ───────────────────────────────────────────────────────────────
// SILVERADO (1999–2024)
// ───────────────────────────────────────────────────────────────
// Gen1 (1999–2006)
add('Chevrolet','Silverado',2000,'Base',{en:'4.3L V6 OHV Vortec',di:'4.3L',cy:'6',hp:'155 kW (208 hp)',tq:'339 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1900 kg',se:'3',pr:'$17,490',fc:'16.5',fh:'11.0',fx:'14.5'})
add('Chevrolet','Silverado',2000,'LS',{en:'4.8L V8 OHV Vortec',di:'4.8L',cy:'8',hp:'175 kW (255 hp)',tq:'373 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1960 kg',se:'3',pr:'$21,050',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Silverado',2000,'LT',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'190 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2000 kg',se:'3',pr:'$25,945',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Silverado',2000,'Z71',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'190 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2100 kg',se:'3',pr:'$27,995',fc:'18.5',fh:'12.5',fx:'16.0'})

add('Chevrolet','Silverado',2004,'Base',{en:'4.3L V6 OHV Vortec',di:'4.3L',cy:'6',hp:'155 kW (195 hp)',tq:'339 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1920 kg',se:'3',pr:'$19,615',fc:'16.5',fh:'11.0',fx:'14.5'})
add('Chevrolet','Silverado',2004,'LS',{en:'4.8L V8 OHV Vortec',di:'4.8L',cy:'8',hp:'175 kW (255 hp)',tq:'373 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1980 kg',se:'3',pr:'$23,555',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Silverado',2004,'LT',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'190 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2020 kg',se:'3',pr:'$28,500',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Silverado',2004,'Z71',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'190 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2120 kg',se:'3',pr:'$30,600',fc:'18.5',fh:'12.5',fx:'16.0'})

// Gen2 (2007–2013)
add('Chevrolet','Silverado',2008,'Base',{en:'4.3L V6 OHV',di:'4.3L',cy:'6',hp:'155 kW (195 hp)',tq:'339 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1940 kg',se:'3',pr:'$22,045',fc:'16.5',fh:'11.0',fx:'14.5'})
add('Chevrolet','Silverado',2008,'LS',{en:'4.8L V8 OHV',di:'4.8L',cy:'8',hp:'175 kW (255 hp)',tq:'373 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2010 kg',se:'3',pr:'$25,545',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Silverado',2008,'LT',{en:'5.3L V8 OHV',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2050 kg',se:'3',pr:'$29,900',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Silverado',2008,'LTZ',{en:'5.3L V8 OHV',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2070 kg',se:'3',pr:'$36,510',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Silverado',2008,'Z71',{en:'5.3L V8 OHV',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2180 kg',se:'3',pr:'$32,440',fc:'18.0',fh:'12.0',fx:'15.5'})

add('Chevrolet','Silverado',2012,'Base',{en:'4.3L V6 OHV',di:'4.3L',cy:'6',hp:'155 kW (195 hp)',tq:'339 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1940 kg',se:'3',pr:'$24,585',fc:'16.5',fh:'11.0',fx:'14.5'})
add('Chevrolet','Silverado',2012,'LS',{en:'4.8L V8 OHV',di:'4.8L',cy:'8',hp:'175 kW (255 hp)',tq:'373 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2010 kg',se:'3',pr:'$28,145',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Silverado',2012,'LT',{en:'5.3L V8 OHV',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2060 kg',se:'3',pr:'$32,900',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Silverado',2012,'LTZ',{en:'6.2L V8 OHV',di:'6.2L',cy:'8',hp:'313 kW (420 hp)',tq:'590 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2080 kg',se:'3',pr:'$40,545',fc:'18.0',fh:'12.0',fx:'15.5'})
add('Chevrolet','Silverado',2012,'Z71',{en:'5.3L V8 OHV',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2210 kg',se:'3',pr:'$35,625',fc:'18.0',fh:'12.0',fx:'15.5'})

// Gen3 (2014–2018)
add('Chevrolet','Silverado',2015,'Base',{en:'4.3L V6 EcoTec3',di:'4.3L',cy:'6',hp:'194 kW (285 hp)',tq:'407 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1950 kg',se:'3',pr:'$27,085',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Silverado',2015,'LS',{en:'4.3L V6 EcoTec3',di:'4.3L',cy:'6',hp:'194 kW (285 hp)',tq:'407 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1960 kg',se:'3',pr:'$30,295',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Silverado',2015,'LT',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2010 kg',se:'3',pr:'$34,565',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Silverado',2015,'LTZ',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2050 kg',se:'3',pr:'$42,395',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Silverado',2015,'High Country',{en:'6.2L V8 EcoTec3',di:'6.2L',cy:'8',hp:'313 kW (420 hp)',tq:'624 Nm',tx:'8-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2090 kg',se:'3',pr:'$50,365',fc:'15.0',fh:'10.0',fx:'13.0'})
add('Chevrolet','Silverado',2015,'Z71',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2150 kg',se:'3',pr:'$37,195',fc:'15.5',fh:'10.5',fx:'13.5'})

// Gen4 (2019–2024)
add('Chevrolet','Silverado',2020,'WT',{en:'4.3L V6 EcoTec3',di:'4.3L',cy:'6',hp:'194 kW (285 hp)',tq:'407 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1970 kg',se:'3',pr:'$28,600',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Silverado',2020,'Custom',{en:'2.7L I4 Turbocharged',di:'2.7L',cy:'4',hp:'195 kW (310 hp)',tq:'542 Nm',tx:'8-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1980 kg',se:'3',pr:'$33,300',fc:'13.5',fh:'9.0',fx:'12.0'})
add('Chevrolet','Silverado',2020,'LT',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'8-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2060 kg',se:'3',pr:'$36,800',fc:'14.0',fh:'9.5',fx:'12.5'})
add('Chevrolet','Silverado',2020,'RST',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'8-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2060 kg',se:'3',pr:'$39,300',fc:'14.0',fh:'9.5',fx:'12.5'})
add('Chevrolet','Silverado',2020,'LTZ',{en:'6.2L V8 EcoTec3',di:'6.2L',cy:'8',hp:'313 kW (420 hp)',tq:'624 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2100 kg',se:'3',pr:'$48,100',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Silverado',2020,'High Country',{en:'6.2L V8 EcoTec3',di:'6.2L',cy:'8',hp:'313 kW (420 hp)',tq:'624 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2110 kg',se:'3',pr:'$55,000',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Silverado',2020,'Trail Boss',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'8-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2130 kg',se:'3',pr:'$42,800',fc:'15.0',fh:'10.0',fx:'13.0'})
add('Chevrolet','Silverado',2020,'ZR2',{en:'6.2L V8 EcoTec3',di:'6.2L',cy:'8',hp:'313 kW (420 hp)',tq:'624 Nm',tx:'10-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2230 kg',se:'3',pr:'$63,300',fc:'16.0',fh:'11.0',fx:'14.0'})
add('Chevrolet','Silverado',2024,'WT',{en:'4.3L V6 EcoTec3',di:'4.3L',cy:'6',hp:'194 kW (285 hp)',tq:'407 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1970 kg',se:'3',pr:'$34,995',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Silverado',2024,'LTZ',{en:'6.2L V8 EcoTec3',di:'6.2L',cy:'8',hp:'313 kW (420 hp)',tq:'624 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2090 kg',se:'3',pr:'$53,100',fc:'14.5',fh:'9.5',fx:'12.5'})

// ───────────────────────────────────────────────────────────────
// COLORADO (2004–2024)
// ───────────────────────────────────────────────────────────────
// Gen1 (2004–2012)
add('Chevrolet','Colorado',2005,'Base',{en:'2.8L I4 OHV',di:'2.8L',cy:'4',hp:'115 kW (175 hp)',tq:'244 Nm',tx:'5-speed Manual',dr:'RWD',ft:'Petrol',wt:'1500 kg',se:'3',pr:'$16,525',fc:'13.5',fh:'9.0',fx:'11.5'})
add('Chevrolet','Colorado',2005,'LS',{en:'3.5L I5 OHV',di:'3.5L',cy:'5',hp:'160 kW (220 hp)',tq:'305 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1580 kg',se:'5',pr:'$20,950',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Colorado',2005,'LT',{en:'3.5L I5 OHV',di:'3.5L',cy:'5',hp:'160 kW (220 hp)',tq:'305 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'1700 kg',se:'5',pr:'$24,595',fc:'15.5',fh:'10.5',fx:'13.5'})
add('Chevrolet','Colorado',2005,'Z71',{en:'3.5L I5 OHV',di:'3.5L',cy:'5',hp:'160 kW (220 hp)',tq:'305 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'1730 kg',se:'5',pr:'$25,800',fc:'15.5',fh:'10.5',fx:'13.5'})
add('Chevrolet','Colorado',2009,'Base',{en:'2.9L I4 OHV',di:'2.9L',cy:'4',hp:'116 kW (185 hp)',tq:'256 Nm',tx:'5-speed Manual',dr:'RWD',ft:'Petrol',wt:'1530 kg',se:'3',pr:'$18,135',fc:'13.5',fh:'9.0',fx:'11.5'})
add('Chevrolet','Colorado',2009,'LS',{en:'3.7L I5 OHV',di:'3.7L',cy:'5',hp:'170 kW (242 hp)',tq:'325 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1610 kg',se:'5',pr:'$22,350',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Colorado',2009,'LT',{en:'3.7L I5 OHV',di:'3.7L',cy:'5',hp:'170 kW (242 hp)',tq:'325 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'1740 kg',se:'5',pr:'$26,210',fc:'15.5',fh:'10.5',fx:'13.5'})
add('Chevrolet','Colorado',2009,'Z71',{en:'3.7L I5 OHV',di:'3.7L',cy:'5',hp:'170 kW (242 hp)',tq:'325 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'1760 kg',se:'5',pr:'$27,515',fc:'15.5',fh:'10.5',fx:'13.5'})

// Gen2 (2015–2022)
add('Chevrolet','Colorado',2016,'WT',{en:'2.5L I4 DOHC Ecotec',di:'2.5L',cy:'4',hp:'134 kW (200 hp)',tq:'258 Nm',tx:'6-speed Manual',dr:'RWD',ft:'Petrol',wt:'1640 kg',se:'3',pr:'$20,100',fc:'11.0',fh:'7.5',fx:'9.5'})
add('Chevrolet','Colorado',2016,'LT',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (308 hp)',tq:'369 Nm',tx:'8-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1780 kg',se:'5',pr:'$27,200',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Colorado',2016,'Z71',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (308 hp)',tq:'369 Nm',tx:'8-speed Automatic',dr:'4WD',ft:'Petrol',wt:'1930 kg',se:'5',pr:'$31,900',fc:'14.0',fh:'9.5',fx:'12.5'})
add('Chevrolet','Colorado',2016,'ZR2',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (308 hp)',tq:'369 Nm',tx:'8-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2020 kg',se:'5',pr:'$40,995',fc:'15.0',fh:'10.0',fx:'13.0'})
add('Chevrolet','Colorado',2020,'WT',{en:'2.5L I4 DOHC Ecotec',di:'2.5L',cy:'4',hp:'134 kW (200 hp)',tq:'258 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1660 kg',se:'3',pr:'$21,300',fc:'11.0',fh:'7.5',fx:'9.5'})
add('Chevrolet','Colorado',2020,'LT',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (308 hp)',tq:'369 Nm',tx:'8-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1790 kg',se:'5',pr:'$28,900',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Colorado',2020,'Z71',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (308 hp)',tq:'369 Nm',tx:'8-speed Automatic',dr:'4WD',ft:'Petrol',wt:'1950 kg',se:'5',pr:'$34,295',fc:'14.0',fh:'9.5',fx:'12.5'})
add('Chevrolet','Colorado',2020,'ZR2',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (308 hp)',tq:'369 Nm',tx:'8-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2030 kg',se:'5',pr:'$43,295',fc:'15.0',fh:'10.0',fx:'13.0'})

// Gen3 (2023–2024)
add('Chevrolet','Colorado',2023,'LT',{en:'2.7L I4 Turbocharged',di:'2.7L',cy:'4',hp:'210 kW (310 hp)',tq:'542 Nm',tx:'8-speed Automatic',dr:'RWD',ft:'Petrol',wt:'1850 kg',se:'5',pr:'$29,100',fc:'12.5',fh:'8.5',fx:'11.0'})
add('Chevrolet','Colorado',2023,'Trail Boss',{en:'2.7L I4 Turbocharged',di:'2.7L',cy:'4',hp:'210 kW (310 hp)',tq:'542 Nm',tx:'8-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2000 kg',se:'5',pr:'$32,600',fc:'13.5',fh:'9.0',fx:'12.0'})
add('Chevrolet','Colorado',2023,'Z71',{en:'2.7L I4 Turbocharged',di:'2.7L',cy:'4',hp:'230 kW (310 hp)',tq:'542 Nm',tx:'8-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2020 kg',se:'5',pr:'$36,800',fc:'13.5',fh:'9.0',fx:'12.0'})
add('Chevrolet','Colorado',2023,'ZR2',{en:'2.7L I4 Turbocharged HD',di:'2.7L',cy:'4',hp:'230 kW (310 hp)',tq:'542 Nm',tx:'8-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2110 kg',se:'5',pr:'$47,300',fc:'14.0',fh:'9.5',fx:'12.5'})

// ───────────────────────────────────────────────────────────────
// TAHOE (1995–2024)
// ───────────────────────────────────────────────────────────────
add('Chevrolet','Tahoe',1996,'Base',{en:'5.7L V8 OHV Vortec',di:'5.7L',cy:'8',hp:'170 kW (255 hp)',tq:'407 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2130 kg',se:'5',pr:'$23,755',fc:'20.0',fh:'13.5',fx:'17.5'})
add('Chevrolet','Tahoe',1996,'LS',{en:'5.7L V8 OHV Vortec',di:'5.7L',cy:'8',hp:'170 kW (255 hp)',tq:'407 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2150 kg',se:'7',pr:'$26,995',fc:'20.0',fh:'13.5',fx:'17.5'})
add('Chevrolet','Tahoe',1996,'LT',{en:'5.7L V8 OHV Vortec',di:'5.7L',cy:'8',hp:'170 kW (255 hp)',tq:'407 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2180 kg',se:'7',pr:'$30,995',fc:'20.0',fh:'13.5',fx:'17.5'})

add('Chevrolet','Tahoe',2001,'Base',{en:'4.8L V8 OHV Vortec',di:'4.8L',cy:'8',hp:'175 kW (255 hp)',tq:'380 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2160 kg',se:'5',pr:'$29,710',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Tahoe',2001,'LS',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'206 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2200 kg',se:'7',pr:'$33,720',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Tahoe',2001,'LT',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'206 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2240 kg',se:'7',pr:'$38,720',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Tahoe',2001,'Z71',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'206 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2370 kg',se:'7',pr:'$39,995',fc:'18.5',fh:'12.5',fx:'16.5'})

add('Chevrolet','Tahoe',2008,'Base',{en:'4.8L V8 OHV',di:'4.8L',cy:'8',hp:'175 kW (255 hp)',tq:'380 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2300 kg',se:'7',pr:'$35,870',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Tahoe',2008,'LS',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2350 kg',se:'7',pr:'$39,560',fc:'16.5',fh:'11.0',fx:'14.5'})
add('Chevrolet','Tahoe',2008,'LT',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2380 kg',se:'7',pr:'$43,390',fc:'16.5',fh:'11.0',fx:'14.5'})
add('Chevrolet','Tahoe',2008,'LTZ',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2400 kg',se:'7',pr:'$48,780',fc:'16.5',fh:'11.0',fx:'14.5'})
add('Chevrolet','Tahoe',2008,'Z71',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2490 kg',se:'7',pr:'$46,845',fc:'17.5',fh:'12.0',fx:'15.5'})

add('Chevrolet','Tahoe',2015,'LS',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2370 kg',se:'7',pr:'$44,700',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Tahoe',2015,'LT',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2400 kg',se:'7',pr:'$51,595',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Tahoe',2015,'LTZ',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2440 kg',se:'7',pr:'$58,995',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Tahoe',2015,'Premier',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2460 kg',se:'7',pr:'$63,370',fc:'14.5',fh:'9.5',fx:'12.5'})

add('Chevrolet','Tahoe',2022,'LS',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2450 kg',se:'7',pr:'$51,000',fc:'14.0',fh:'9.5',fx:'12.0'})
add('Chevrolet','Tahoe',2022,'LT',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2480 kg',se:'7',pr:'$56,700',fc:'14.0',fh:'9.5',fx:'12.0'})
add('Chevrolet','Tahoe',2022,'LTZ',{en:'6.2L V8 EcoTec3',di:'6.2L',cy:'8',hp:'313 kW (420 hp)',tq:'624 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2510 kg',se:'7',pr:'$64,100',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Tahoe',2022,'Premier',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2500 kg',se:'7',pr:'$67,800',fc:'14.0',fh:'9.5',fx:'12.0'})
add('Chevrolet','Tahoe',2022,'High Country',{en:'6.2L V8 EcoTec3',di:'6.2L',cy:'8',hp:'313 kW (420 hp)',tq:'624 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2530 kg',se:'7',pr:'$72,700',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Tahoe',2022,'Z71',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'10-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2600 kg',se:'7',pr:'$58,800',fc:'15.5',fh:'10.5',fx:'13.5'})

// ───────────────────────────────────────────────────────────────
// SUBURBAN (1992–2024)
// ───────────────────────────────────────────────────────────────
add('Chevrolet','Suburban',1994,'Base',{en:'5.7L V8 OHV Vortec TBI',di:'5.7L',cy:'8',hp:'149 kW (210 hp)',tq:'393 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2400 kg',se:'9',pr:'$22,810',fc:'21.0',fh:'14.0',fx:'18.5'})
add('Chevrolet','Suburban',1994,'LS',{en:'5.7L V8 OHV Vortec TBI',di:'5.7L',cy:'8',hp:'149 kW (210 hp)',tq:'393 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2430 kg',se:'9',pr:'$26,800',fc:'21.0',fh:'14.0',fx:'18.5'})
add('Chevrolet','Suburban',1994,'LT',{en:'5.7L V8 OHV Vortec TBI',di:'5.7L',cy:'8',hp:'149 kW (210 hp)',tq:'393 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2460 kg',se:'9',pr:'$31,500',fc:'21.0',fh:'14.0',fx:'18.5'})

add('Chevrolet','Suburban',2001,'Base',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'206 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2500 kg',se:'9',pr:'$32,890',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Suburban',2001,'LS',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'206 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2540 kg',se:'9',pr:'$37,665',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Suburban',2001,'LT',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'206 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2570 kg',se:'9',pr:'$42,150',fc:'17.5',fh:'12.0',fx:'15.5'})

add('Chevrolet','Suburban',2007,'Base',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2620 kg',se:'9',pr:'$36,625',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Suburban',2007,'LS',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2660 kg',se:'9',pr:'$40,715',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Suburban',2007,'LT',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2700 kg',se:'9',pr:'$45,620',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Suburban',2007,'LTZ',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2730 kg',se:'9',pr:'$51,840',fc:'17.0',fh:'11.5',fx:'15.0'})

add('Chevrolet','Suburban',2015,'LS',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2720 kg',se:'9',pr:'$47,810',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Suburban',2015,'LT',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2760 kg',se:'9',pr:'$54,845',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Suburban',2015,'LTZ',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2790 kg',se:'9',pr:'$62,895',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Suburban',2015,'Premier',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2810 kg',se:'9',pr:'$67,020',fc:'14.5',fh:'9.5',fx:'12.5'})

add('Chevrolet','Suburban',2022,'LS',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2800 kg',se:'9',pr:'$54,200',fc:'14.0',fh:'9.5',fx:'12.0'})
add('Chevrolet','Suburban',2022,'LT',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2840 kg',se:'9',pr:'$60,700',fc:'14.0',fh:'9.5',fx:'12.0'})
add('Chevrolet','Suburban',2022,'LTZ',{en:'6.2L V8 EcoTec3',di:'6.2L',cy:'8',hp:'313 kW (420 hp)',tq:'624 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2880 kg',se:'9',pr:'$68,100',fc:'14.5',fh:'9.5',fx:'12.5'})
add('Chevrolet','Suburban',2022,'Premier',{en:'5.3L V8 EcoTec3',di:'5.3L',cy:'8',hp:'275 kW (355 hp)',tq:'519 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2860 kg',se:'9',pr:'$71,700',fc:'14.0',fh:'9.5',fx:'12.0'})
add('Chevrolet','Suburban',2022,'High Country',{en:'6.2L V8 EcoTec3',di:'6.2L',cy:'8',hp:'313 kW (420 hp)',tq:'624 Nm',tx:'10-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2900 kg',se:'9',pr:'$77,000',fc:'14.5',fh:'9.5',fx:'12.5'})

// ───────────────────────────────────────────────────────────────
// AVALANCHE (2001–2013)
// ───────────────────────────────────────────────────────────────
add('Chevrolet','Avalanche',2002,'Base',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'206 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2530 kg',se:'5',pr:'$35,980',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Avalanche',2002,'LS',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'206 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2560 kg',se:'5',pr:'$39,895',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Avalanche',2002,'LT',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'206 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2590 kg',se:'5',pr:'$43,350',fc:'17.5',fh:'12.0',fx:'15.5'})
add('Chevrolet','Avalanche',2002,'Z71',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'206 kW (285 hp)',tq:'441 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2620 kg',se:'5',pr:'$41,850',fc:'18.5',fh:'12.5',fx:'16.0'})
add('Chevrolet','Avalanche',2008,'LS',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'4-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2600 kg',se:'5',pr:'$35,470',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Avalanche',2008,'LT',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2640 kg',se:'5',pr:'$38,890',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Avalanche',2008,'LTZ',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2660 kg',se:'5',pr:'$44,820',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Avalanche',2012,'LS',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2610 kg',se:'5',pr:'$36,020',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Avalanche',2012,'LT',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2650 kg',se:'5',pr:'$39,890',fc:'17.0',fh:'11.5',fx:'15.0'})
add('Chevrolet','Avalanche',2012,'LTZ',{en:'5.3L V8 OHV AFM',di:'5.3L',cy:'8',hp:'216 kW (320 hp)',tq:'447 Nm',tx:'6-speed Automatic',dr:'RWD',ft:'Petrol',wt:'2670 kg',se:'5',pr:'$45,855',fc:'17.0',fh:'11.5',fx:'15.0'})

// ───────────────────────────────────────────────────────────────
// TRAILBLAZER — Classic (2002–2009) + Modern (2021–2024)
// ───────────────────────────────────────────────────────────────
// Classic
add('Chevrolet','Trailblazer',2003,'Base',{en:'4.2L I6 DOHC Vortec',di:'4.2L',cy:'6',hp:'168 kW (275 hp)',tq:'361 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2070 kg',se:'5',pr:'$28,105',fc:'16.0',fh:'11.0',fx:'14.0'})
add('Chevrolet','Trailblazer',2003,'LS',{en:'4.2L I6 DOHC Vortec',di:'4.2L',cy:'6',hp:'168 kW (275 hp)',tq:'361 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2090 kg',se:'5',pr:'$31,210',fc:'16.0',fh:'11.0',fx:'14.0'})
add('Chevrolet','Trailblazer',2003,'LT',{en:'4.2L I6 DOHC Vortec',di:'4.2L',cy:'6',hp:'168 kW (275 hp)',tq:'361 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2110 kg',se:'5',pr:'$35,250',fc:'16.0',fh:'11.0',fx:'14.0'})
add('Chevrolet','Trailblazer',2003,'LTZ',{en:'4.2L I6 DOHC Vortec',di:'4.2L',cy:'6',hp:'168 kW (275 hp)',tq:'361 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2130 kg',se:'5',pr:'$39,665',fc:'16.0',fh:'11.0',fx:'14.0'})
add('Chevrolet','Trailblazer',2006,'SS',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'224 kW (300 hp)',tq:'447 Nm',tx:'4-speed Automatic',dr:'AWD',ft:'Petrol',wt:'2270 kg',se:'5',pr:'$40,125',z1:'~6.8 sec',ts:'~205 km/h',fc:'18.0',fh:'12.0',fx:'15.5'})
add('Chevrolet','Trailblazer',2007,'Base',{en:'4.2L I6 DOHC Vortec',di:'4.2L',cy:'6',hp:'168 kW (275 hp)',tq:'361 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2090 kg',se:'5',pr:'$30,465',fc:'16.0',fh:'11.0',fx:'14.0'})
add('Chevrolet','Trailblazer',2007,'LS',{en:'4.2L I6 DOHC Vortec',di:'4.2L',cy:'6',hp:'168 kW (275 hp)',tq:'361 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2100 kg',se:'5',pr:'$33,470',fc:'16.0',fh:'11.0',fx:'14.0'})
add('Chevrolet','Trailblazer',2007,'LT',{en:'4.2L I6 DOHC Vortec',di:'4.2L',cy:'6',hp:'168 kW (275 hp)',tq:'361 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2120 kg',se:'5',pr:'$37,340',fc:'16.0',fh:'11.0',fx:'14.0'})
add('Chevrolet','Trailblazer',2007,'LTZ',{en:'4.2L I6 DOHC Vortec',di:'4.2L',cy:'6',hp:'168 kW (275 hp)',tq:'361 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2140 kg',se:'5',pr:'$41,910',fc:'16.0',fh:'11.0',fx:'14.0'})
add('Chevrolet','Trailblazer',2007,'SS',{en:'5.3L V8 OHV Vortec',di:'5.3L',cy:'8',hp:'224 kW (300 hp)',tq:'447 Nm',tx:'4-speed Automatic',dr:'AWD',ft:'Petrol',wt:'2280 kg',se:'5',pr:'$41,295',z1:'~6.8 sec',ts:'~205 km/h',fc:'18.0',fh:'12.0',fx:'15.5'})
add('Chevrolet','Trailblazer',2009,'Base',{en:'4.2L I6 DOHC Vortec',di:'4.2L',cy:'6',hp:'168 kW (275 hp)',tq:'361 Nm',tx:'4-speed Automatic',dr:'4WD',ft:'Petrol',wt:'2090 kg',se:'5',pr:'$29,955',fc:'16.0',fh:'11.0',fx:'14.0'})

// Modern Trailblazer (2021+)
add('Chevrolet','Trailblazer',2021,'L',{en:'1.2L I3 Turbocharged SIDI',di:'1.2L',cy:'3',hp:'97 kW (137 hp)',tq:'221 Nm',tx:'CVT',dr:'FWD',ft:'Petrol',wt:'1330 kg',se:'5',pr:'$19,995',z1:'~9.0 sec',ts:'~185 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})
add('Chevrolet','Trailblazer',2021,'LS',{en:'1.2L I3 Turbocharged SIDI',di:'1.2L',cy:'3',hp:'97 kW (137 hp)',tq:'221 Nm',tx:'CVT',dr:'FWD',ft:'Petrol',wt:'1340 kg',se:'5',pr:'$21,995',z1:'~9.0 sec',ts:'~185 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})
add('Chevrolet','Trailblazer',2021,'LT',{en:'1.3L I3 Turbocharged SIDI',di:'1.3L',cy:'3',hp:'118 kW (155 hp)',tq:'230 Nm',tx:'7-speed DCT',dr:'FWD',ft:'Petrol',wt:'1380 kg',se:'5',pr:'$24,995',z1:'~8.5 sec',ts:'~190 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})
add('Chevrolet','Trailblazer',2021,'ACTIV',{en:'1.3L I3 Turbocharged SIDI',di:'1.3L',cy:'3',hp:'118 kW (155 hp)',tq:'230 Nm',tx:'7-speed DCT',dr:'AWD',ft:'Petrol',wt:'1450 kg',se:'5',pr:'$27,995',z1:'~8.5 sec',ts:'~185 km/h',fc:'10.0',fh:'7.0',fx:'9.0'})
add('Chevrolet','Trailblazer',2021,'RS',{en:'1.3L I3 Turbocharged SIDI',di:'1.3L',cy:'3',hp:'118 kW (155 hp)',tq:'230 Nm',tx:'7-speed DCT',dr:'AWD',ft:'Petrol',wt:'1450 kg',se:'5',pr:'$28,195',z1:'~8.5 sec',ts:'~190 km/h',fc:'10.0',fh:'7.0',fx:'9.0'})
add('Chevrolet','Trailblazer',2021,'Premier',{en:'1.3L I3 Turbocharged SIDI',di:'1.3L',cy:'3',hp:'118 kW (155 hp)',tq:'230 Nm',tx:'7-speed DCT',dr:'AWD',ft:'Petrol',wt:'1460 kg',se:'5',pr:'$29,995',z1:'~8.5 sec',ts:'~190 km/h',fc:'10.0',fh:'7.0',fx:'9.0'})

// ───────────────────────────────────────────────────────────────
// BLAZER (modern, 2019–2024)
// ───────────────────────────────────────────────────────────────
add('Chevrolet','Blazer',2020,'LT',{en:'2.5L I4 SIDI',di:'2.5L',cy:'4',hp:'150 kW (228 hp)',tq:'253 Nm',tx:'9-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1750 kg',se:'5',pr:'$29,995',z1:'~8.5 sec',ts:'~195 km/h',fc:'11.0',fh:'7.5',fx:'9.5'})
add('Chevrolet','Blazer',2020,'RS',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'230 kW (308 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1930 kg',se:'5',pr:'$37,295',z1:'~6.5 sec',ts:'~215 km/h',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Blazer',2020,'Premier',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'230 kW (308 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1950 kg',se:'5',pr:'$42,295',z1:'~6.5 sec',ts:'~215 km/h',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Blazer',2023,'LT',{en:'2.0L I4 Turbocharged SIDI',di:'2.0L',cy:'4',hp:'189 kW (228 hp)',tq:'350 Nm',tx:'9-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1800 kg',se:'5',pr:'$33,800',z1:'~7.5 sec',ts:'~205 km/h',fc:'11.0',fh:'7.5',fx:'9.5'})
add('Chevrolet','Blazer',2023,'RS',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'230 kW (308 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1950 kg',se:'5',pr:'$39,900',z1:'~6.5 sec',ts:'~215 km/h',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Blazer',2023,'Premier',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'230 kW (308 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1960 kg',se:'5',pr:'$44,900',z1:'~6.5 sec',ts:'~215 km/h',fc:'13.0',fh:'8.5',fx:'11.5'})

// ───────────────────────────────────────────────────────────────
// EQUINOX (2005–2024)
// ───────────────────────────────────────────────────────────────
add('Chevrolet','Equinox',2006,'Base',{en:'2.4L I4 DOHC Ecotec',di:'2.4L',cy:'4',hp:'113 kW (185 hp)',tq:'222 Nm',tx:'5-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1600 kg',se:'5',pr:'$21,495',fc:'12.0',fh:'8.0',fx:'10.5'})
add('Chevrolet','Equinox',2006,'LS',{en:'2.4L I4 DOHC Ecotec',di:'2.4L',cy:'4',hp:'113 kW (185 hp)',tq:'222 Nm',tx:'5-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1610 kg',se:'5',pr:'$24,695',fc:'12.0',fh:'8.0',fx:'10.5'})
add('Chevrolet','Equinox',2006,'LT',{en:'3.4L V6 OHV',di:'3.4L',cy:'6',hp:'142 kW (185 hp)',tq:'275 Nm',tx:'5-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1750 kg',se:'5',pr:'$27,195',fc:'13.5',fh:'9.0',fx:'11.5'})

add('Chevrolet','Equinox',2011,'LS',{en:'2.4L I4 DOHC Ecotec',di:'2.4L',cy:'4',hp:'118 kW (182 hp)',tq:'222 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1660 kg',se:'5',pr:'$22,995',fc:'10.5',fh:'7.0',fx:'9.0'})
add('Chevrolet','Equinox',2011,'LT',{en:'2.4L I4 DOHC Ecotec',di:'2.4L',cy:'4',hp:'118 kW (182 hp)',tq:'222 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1680 kg',se:'5',pr:'$26,895',fc:'10.5',fh:'7.0',fx:'9.0'})
add('Chevrolet','Equinox',2011,'LTZ',{en:'3.0L V6 SIDI',di:'3.0L',cy:'6',hp:'185 kW (264 hp)',tq:'288 Nm',tx:'6-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1860 kg',se:'5',pr:'$33,475',fc:'12.0',fh:'8.0',fx:'10.5'})

add('Chevrolet','Equinox',2018,'L',{en:'1.5L I4 Turbocharged SIDI',di:'1.5L',cy:'4',hp:'130 kW (170 hp)',tq:'260 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1640 kg',se:'5',pr:'$23,580',fc:'9.5',fh:'6.5',fx:'8.5'})
add('Chevrolet','Equinox',2018,'LS',{en:'1.5L I4 Turbocharged SIDI',di:'1.5L',cy:'4',hp:'130 kW (170 hp)',tq:'260 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1650 kg',se:'5',pr:'$25,995',fc:'9.5',fh:'6.5',fx:'8.5'})
add('Chevrolet','Equinox',2018,'LT',{en:'1.5L I4 Turbocharged SIDI',di:'1.5L',cy:'4',hp:'130 kW (170 hp)',tq:'260 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1660 kg',se:'5',pr:'$28,045',fc:'9.5',fh:'6.5',fx:'8.5'})
add('Chevrolet','Equinox',2018,'Premier',{en:'2.0L I4 Turbocharged SIDI',di:'2.0L',cy:'4',hp:'189 kW (252 hp)',tq:'353 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1780 kg',se:'5',pr:'$35,530',fc:'11.0',fh:'7.5',fx:'9.5'})
add('Chevrolet','Equinox',2018,'RS',{en:'2.0L I4 Turbocharged SIDI',di:'2.0L',cy:'4',hp:'189 kW (252 hp)',tq:'353 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1780 kg',se:'5',pr:'$33,000',fc:'11.0',fh:'7.5',fx:'9.5'})
add('Chevrolet','Equinox',2022,'L',{en:'1.5L I4 Turbocharged SIDI',di:'1.5L',cy:'4',hp:'130 kW (170 hp)',tq:'260 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1640 kg',se:'5',pr:'$25,800',fc:'9.5',fh:'6.5',fx:'8.5'})
add('Chevrolet','Equinox',2022,'LT',{en:'1.5L I4 Turbocharged SIDI',di:'1.5L',cy:'4',hp:'130 kW (170 hp)',tq:'260 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1660 kg',se:'5',pr:'$30,800',fc:'9.5',fh:'6.5',fx:'8.5'})
add('Chevrolet','Equinox',2024,'RS',{en:'1.5L I4 Turbocharged SIDI',di:'1.5L',cy:'4',hp:'130 kW (170 hp)',tq:'260 Nm',tx:'6-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1740 kg',se:'5',pr:'$34,995',fc:'10.0',fh:'7.0',fx:'9.0'})
add('Chevrolet','Equinox',2024,'Premier',{en:'2.0L I4 Turbocharged SIDI',di:'2.0L',cy:'4',hp:'189 kW (252 hp)',tq:'353 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1790 kg',se:'5',pr:'$38,500',fc:'11.0',fh:'7.5',fx:'9.5'})

// ───────────────────────────────────────────────────────────────
// TRAVERSE (2009–2024)
// ───────────────────────────────────────────────────────────────
add('Chevrolet','Traverse',2010,'LS',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (281 hp)',tq:'349 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'2030 kg',se:'7',pr:'$30,765',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Traverse',2010,'LT',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (281 hp)',tq:'349 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'2060 kg',se:'7',pr:'$34,280',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Traverse',2010,'LTZ',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (281 hp)',tq:'349 Nm',tx:'6-speed Automatic',dr:'AWD',ft:'Petrol',wt:'2140 kg',se:'7',pr:'$40,500',fc:'14.0',fh:'9.0',fx:'12.0'})
add('Chevrolet','Traverse',2015,'LS',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (281 hp)',tq:'349 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'2040 kg',se:'7',pr:'$31,600',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Traverse',2015,'LT',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (281 hp)',tq:'349 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'2080 kg',se:'7',pr:'$35,600',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Traverse',2015,'LTZ',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (281 hp)',tq:'349 Nm',tx:'6-speed Automatic',dr:'AWD',ft:'Petrol',wt:'2160 kg',se:'7',pr:'$42,700',fc:'14.0',fh:'9.0',fx:'12.0'})
add('Chevrolet','Traverse',2015,'High Country',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (281 hp)',tq:'349 Nm',tx:'6-speed Automatic',dr:'AWD',ft:'Petrol',wt:'2190 kg',se:'7',pr:'$50,200',fc:'14.0',fh:'9.0',fx:'12.0'})

add('Chevrolet','Traverse',2019,'LS',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (310 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'FWD',ft:'Petrol',wt:'2040 kg',se:'7',pr:'$30,000',fc:'12.5',fh:'8.5',fx:'11.0'})
add('Chevrolet','Traverse',2019,'LT',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (310 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'FWD',ft:'Petrol',wt:'2060 kg',se:'7',pr:'$34,500',fc:'12.5',fh:'8.5',fx:'11.0'})
add('Chevrolet','Traverse',2019,'RS',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (310 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'2130 kg',se:'7',pr:'$38,200',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Traverse',2019,'Premier',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (310 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'2150 kg',se:'7',pr:'$44,200',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Traverse',2019,'High Country',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (310 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'2180 kg',se:'7',pr:'$52,600',fc:'13.0',fh:'8.5',fx:'11.5'})
add('Chevrolet','Traverse',2022,'LS',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (310 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'FWD',ft:'Petrol',wt:'2050 kg',se:'7',pr:'$31,500',fc:'12.5',fh:'8.5',fx:'11.0'})
add('Chevrolet','Traverse',2022,'LT',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (310 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'FWD',ft:'Petrol',wt:'2070 kg',se:'7',pr:'$35,500',fc:'12.5',fh:'8.5',fx:'11.0'})
add('Chevrolet','Traverse',2024,'Premier',{en:'3.6L V6 DI SIDI',di:'3.6L',cy:'6',hp:'224 kW (310 hp)',tq:'369 Nm',tx:'9-speed Automatic',dr:'AWD',ft:'Petrol',wt:'2170 kg',se:'7',pr:'$46,800',fc:'13.0',fh:'8.5',fx:'11.5'})

// ───────────────────────────────────────────────────────────────
// CRUZE (2009–2019)
// ───────────────────────────────────────────────────────────────
// Gen1 (2009–2015)
add('Chevrolet','Cruze',2011,'LS',{en:'1.8L I4 DOHC Ecotec',di:'1.8L',cy:'4',hp:'104 kW (138 hp)',tq:'177 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1350 kg',se:'5',pr:'$16,995',z1:'~10.0 sec',ts:'~190 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})
add('Chevrolet','Cruze',2011,'LT',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1370 kg',se:'5',pr:'$18,695',z1:'~9.5 sec',ts:'~195 km/h',fc:'8.5',fh:'5.5',fx:'7.5'})
add('Chevrolet','Cruze',2011,'LTZ',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1390 kg',se:'5',pr:'$22,695',z1:'~9.5 sec',ts:'~195 km/h',fc:'8.5',fh:'5.5',fx:'7.5'})
add('Chevrolet','Cruze',2011,'Eco',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Manual',dr:'FWD',ft:'Petrol',wt:'1320 kg',se:'5',pr:'$19,775',z1:'~9.5 sec',ts:'~195 km/h',fc:'7.5',fh:'5.0',fx:'6.8'})
add('Chevrolet','Cruze',2013,'LS',{en:'1.8L I4 DOHC Ecotec',di:'1.8L',cy:'4',hp:'104 kW (138 hp)',tq:'177 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1350 kg',se:'5',pr:'$17,495',z1:'~10.0 sec',ts:'~190 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})

// Gen2 (2016–2019)
add('Chevrolet','Cruze',2016,'L',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'110 kW (153 hp)',tq:'240 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1340 kg',se:'5',pr:'$16,975',z1:'~9.0 sec',ts:'~195 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})
add('Chevrolet','Cruze',2016,'LS',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'110 kW (153 hp)',tq:'240 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1350 kg',se:'5',pr:'$18,995',z1:'~9.0 sec',ts:'~195 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})
add('Chevrolet','Cruze',2016,'LT',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'110 kW (153 hp)',tq:'240 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1360 kg',se:'5',pr:'$21,695',z1:'~9.0 sec',ts:'~195 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})
add('Chevrolet','Cruze',2016,'Premier',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'110 kW (153 hp)',tq:'240 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1370 kg',se:'5',pr:'$24,940',z1:'~9.0 sec',ts:'~195 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})
add('Chevrolet','Cruze',2017,'LT Diesel',{en:'1.6L I4 Turbodiesel',di:'1.6L',cy:'4',hp:'100 kW (137 hp)',tq:'324 Nm',tx:'9-speed Automatic',dr:'FWD',ft:'Diesel',wt:'1440 kg',se:'5',pr:'$25,995',z1:'~9.5 sec',ts:'~190 km/h',fc:'6.5',fh:'4.5',fx:'5.8'})
add('Chevrolet','Cruze',2019,'L',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'110 kW (153 hp)',tq:'240 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1340 kg',se:'5',pr:'$17,795',z1:'~9.0 sec',ts:'~195 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})

// ───────────────────────────────────────────────────────────────
// SONIC (2012–2020)
// ───────────────────────────────────────────────────────────────
add('Chevrolet','Sonic',2013,'LS',{en:'1.8L I4 DOHC Ecotec',di:'1.8L',cy:'4',hp:'97 kW (138 hp)',tq:'166 Nm',tx:'5-speed Manual',dr:'FWD',ft:'Petrol',wt:'1180 kg',se:'5',pr:'$14,985',z1:'~10.5 sec',ts:'~185 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})
add('Chevrolet','Sonic',2013,'LT',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1200 kg',se:'5',pr:'$17,195',z1:'~9.5 sec',ts:'~190 km/h',fc:'8.5',fh:'5.5',fx:'7.5'})
add('Chevrolet','Sonic',2013,'LTZ',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Manual',dr:'FWD',ft:'Petrol',wt:'1200 kg',se:'5',pr:'$19,345',z1:'~9.0 sec',ts:'~195 km/h',fc:'8.5',fh:'5.5',fx:'7.5'})
add('Chevrolet','Sonic',2013,'RS',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Manual',dr:'FWD',ft:'Petrol',wt:'1190 kg',se:'5',pr:'$20,145',z1:'~9.0 sec',ts:'~195 km/h',fc:'8.5',fh:'5.5',fx:'7.5'})
add('Chevrolet','Sonic',2017,'LS',{en:'1.8L I4 DOHC Ecotec',di:'1.8L',cy:'4',hp:'97 kW (138 hp)',tq:'166 Nm',tx:'5-speed Manual',dr:'FWD',ft:'Petrol',wt:'1180 kg',se:'5',pr:'$15,145',z1:'~10.5 sec',ts:'~185 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})
add('Chevrolet','Sonic',2017,'LT',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1200 kg',se:'5',pr:'$17,995',z1:'~9.5 sec',ts:'~190 km/h',fc:'8.5',fh:'5.5',fx:'7.5'})
add('Chevrolet','Sonic',2017,'RS',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Manual',dr:'FWD',ft:'Petrol',wt:'1190 kg',se:'5',pr:'$20,345',z1:'~9.0 sec',ts:'~195 km/h',fc:'8.5',fh:'5.5',fx:'7.5'})
add('Chevrolet','Sonic',2017,'Premier',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1210 kg',se:'5',pr:'$21,345',z1:'~9.5 sec',ts:'~190 km/h',fc:'8.5',fh:'5.5',fx:'7.5'})
add('Chevrolet','Sonic',2020,'LS',{en:'1.4L I4 Turbocharged Ecotec',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1190 kg',se:'5',pr:'$16,520',z1:'~9.5 sec',ts:'~190 km/h',fc:'8.5',fh:'5.5',fx:'7.5'})

// ───────────────────────────────────────────────────────────────
// SPARK (2013–2022)
// ───────────────────────────────────────────────────────────────
add('Chevrolet','Spark',2014,'LS',{en:'1.2L I4 DOHC',di:'1.2L',cy:'4',hp:'57 kW (84 hp)',tq:'114 Nm',tx:'5-speed Manual',dr:'FWD',ft:'Petrol',wt:'1010 kg',se:'4',pr:'$12,985',z1:'~12.5 sec',ts:'~160 km/h',fc:'8.5',fh:'6.0',fx:'7.5'})
add('Chevrolet','Spark',2014,'LT',{en:'1.2L I4 DOHC',di:'1.2L',cy:'4',hp:'57 kW (84 hp)',tq:'114 Nm',tx:'CVT',dr:'FWD',ft:'Petrol',wt:'1020 kg',se:'4',pr:'$14,985',z1:'~13.0 sec',ts:'~155 km/h',fc:'8.5',fh:'6.0',fx:'7.5'})
add('Chevrolet','Spark',2014,'LTZ',{en:'1.2L I4 DOHC',di:'1.2L',cy:'4',hp:'57 kW (84 hp)',tq:'114 Nm',tx:'CVT',dr:'FWD',ft:'Petrol',wt:'1030 kg',se:'4',pr:'$16,985',z1:'~13.0 sec',ts:'~155 km/h',fc:'8.5',fh:'6.0',fx:'7.5'})

add('Chevrolet','Spark',2017,'LS',{en:'1.4L I4 DOHC Ecotec',di:'1.4L',cy:'4',hp:'65 kW (98 hp)',tq:'127 Nm',tx:'5-speed Manual',dr:'FWD',ft:'Petrol',wt:'1000 kg',se:'4',pr:'$13,000',z1:'~12.0 sec',ts:'~165 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})
add('Chevrolet','Spark',2017,'LT',{en:'1.4L I4 DOHC Ecotec',di:'1.4L',cy:'4',hp:'65 kW (98 hp)',tq:'127 Nm',tx:'CVT',dr:'FWD',ft:'Petrol',wt:'1010 kg',se:'4',pr:'$15,200',z1:'~12.5 sec',ts:'~162 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})
add('Chevrolet','Spark',2017,'ACTIV',{en:'1.4L I4 DOHC Ecotec',di:'1.4L',cy:'4',hp:'65 kW (98 hp)',tq:'127 Nm',tx:'CVT',dr:'FWD',ft:'Petrol',wt:'1020 kg',se:'4',pr:'$16,700',z1:'~12.5 sec',ts:'~162 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})
add('Chevrolet','Spark',2017,'Premier',{en:'1.4L I4 DOHC Ecotec',di:'1.4L',cy:'4',hp:'65 kW (98 hp)',tq:'127 Nm',tx:'CVT',dr:'FWD',ft:'Petrol',wt:'1020 kg',se:'4',pr:'$17,900',z1:'~12.5 sec',ts:'~162 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})
add('Chevrolet','Spark',2021,'LS',{en:'1.4L I4 DOHC Ecotec',di:'1.4L',cy:'4',hp:'65 kW (98 hp)',tq:'127 Nm',tx:'5-speed Manual',dr:'FWD',ft:'Petrol',wt:'1000 kg',se:'4',pr:'$13,400',z1:'~12.0 sec',ts:'~165 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})
add('Chevrolet','Spark',2021,'LT',{en:'1.4L I4 DOHC Ecotec',di:'1.4L',cy:'4',hp:'65 kW (98 hp)',tq:'127 Nm',tx:'CVT',dr:'FWD',ft:'Petrol',wt:'1010 kg',se:'4',pr:'$15,900',z1:'~12.5 sec',ts:'~162 km/h',fc:'8.0',fh:'5.5',fx:'7.0'})

// ───────────────────────────────────────────────────────────────
// TRAX (2013–2024)
// ───────────────────────────────────────────────────────────────
// Gen1 (2013–2022)
add('Chevrolet','Trax',2014,'LS',{en:'1.4L I4 Turbocharged Ecotec SIDI',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1300 kg',se:'5',pr:'$20,300',z1:'~9.5 sec',ts:'~185 km/h',fc:'9.5',fh:'6.5',fx:'8.5'})
add('Chevrolet','Trax',2014,'LT',{en:'1.4L I4 Turbocharged Ecotec SIDI',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1320 kg',se:'5',pr:'$23,300',z1:'~9.5 sec',ts:'~185 km/h',fc:'9.5',fh:'6.5',fx:'8.5'})
add('Chevrolet','Trax',2014,'LTZ',{en:'1.4L I4 Turbocharged Ecotec SIDI',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1400 kg',se:'5',pr:'$27,300',z1:'~10.0 sec',ts:'~180 km/h',fc:'10.5',fh:'7.0',fx:'9.0'})
add('Chevrolet','Trax',2018,'LS',{en:'1.4L I4 Turbocharged Ecotec SIDI',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1310 kg',se:'5',pr:'$21,300',z1:'~9.5 sec',ts:'~185 km/h',fc:'9.5',fh:'6.5',fx:'8.5'})
add('Chevrolet','Trax',2018,'LT',{en:'1.4L I4 Turbocharged Ecotec SIDI',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1330 kg',se:'5',pr:'$24,400',z1:'~9.5 sec',ts:'~185 km/h',fc:'9.5',fh:'6.5',fx:'8.5'})
add('Chevrolet','Trax',2018,'LTZ',{en:'1.4L I4 Turbocharged Ecotec SIDI',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1420 kg',se:'5',pr:'$28,400',z1:'~10.0 sec',ts:'~180 km/h',fc:'10.5',fh:'7.0',fx:'9.0'})
add('Chevrolet','Trax',2018,'Premier',{en:'1.4L I4 Turbocharged Ecotec SIDI',di:'1.4L',cy:'4',hp:'103 kW (138 hp)',tq:'200 Nm',tx:'6-speed Automatic',dr:'AWD',ft:'Petrol',wt:'1430 kg',se:'5',pr:'$30,800',z1:'~10.0 sec',ts:'~180 km/h',fc:'10.5',fh:'7.0',fx:'9.0'})

// Gen2 (2023–2024)
add('Chevrolet','Trax',2023,'LS',{en:'1.2L I3 Turbocharged Ecotec',di:'1.2L',cy:'3',hp:'97 kW (137 hp)',tq:'221 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1320 kg',se:'5',pr:'$19,995',z1:'~9.5 sec',ts:'~185 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})
add('Chevrolet','Trax',2023,'LT',{en:'1.2L I3 Turbocharged Ecotec',di:'1.2L',cy:'3',hp:'97 kW (137 hp)',tq:'221 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1340 kg',se:'5',pr:'$23,495',z1:'~9.5 sec',ts:'~185 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})
add('Chevrolet','Trax',2023,'RS',{en:'1.2L I3 Turbocharged Ecotec',di:'1.2L',cy:'3',hp:'97 kW (137 hp)',tq:'221 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1350 kg',se:'5',pr:'$25,495',z1:'~9.5 sec',ts:'~185 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})
add('Chevrolet','Trax',2023,'ACTIV',{en:'1.2L I3 Turbocharged Ecotec',di:'1.2L',cy:'3',hp:'97 kW (137 hp)',tq:'221 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1360 kg',se:'5',pr:'$27,495',z1:'~9.5 sec',ts:'~185 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})
add('Chevrolet','Trax',2023,'Premier',{en:'1.2L I3 Turbocharged Ecotec',di:'1.2L',cy:'3',hp:'97 kW (137 hp)',tq:'221 Nm',tx:'6-speed Automatic',dr:'FWD',ft:'Petrol',wt:'1370 kg',se:'5',pr:'$28,995',z1:'~9.5 sec',ts:'~185 km/h',fc:'9.0',fh:'6.0',fx:'8.0'})

// ───────────────────────────────────────────────────────────────
// VOLT (2011–2019)
// ───────────────────────────────────────────────────────────────
// Gen1 (2011–2015) — PHEV: 111kW electric + 1.4L range extender
add('Chevrolet','Volt',2012,'Base',{en:'1.4L I4 Ecotec + Electric PHEV',di:'1.4L',cy:'4',hp:'111 kW (149 hp)',tq:'273 Nm',tx:'Single-speed',dr:'FWD',ft:'Petrol',wt:'1715 kg',se:'4',pr:'$39,145',z1:'~8.8 sec',ts:'~160 km/h',fc:'4.4',fh:'—',fx:'—'})
add('Chevrolet','Volt',2012,'Premium',{en:'1.4L I4 Ecotec + Electric PHEV',di:'1.4L',cy:'4',hp:'111 kW (149 hp)',tq:'273 Nm',tx:'Single-speed',dr:'FWD',ft:'Petrol',wt:'1730 kg',se:'4',pr:'$44,145',z1:'~8.8 sec',ts:'~160 km/h',fc:'4.4',fh:'—',fx:'—'})
add('Chevrolet','Volt',2014,'Base',{en:'1.4L I4 Ecotec + Electric PHEV',di:'1.4L',cy:'4',hp:'111 kW (149 hp)',tq:'273 Nm',tx:'Single-speed',dr:'FWD',ft:'Petrol',wt:'1715 kg',se:'4',pr:'$34,995',z1:'~8.8 sec',ts:'~160 km/h',fc:'4.4',fh:'—',fx:'—'})
add('Chevrolet','Volt',2014,'Premium',{en:'1.4L I4 Ecotec + Electric PHEV',di:'1.4L',cy:'4',hp:'111 kW (149 hp)',tq:'273 Nm',tx:'Single-speed',dr:'FWD',ft:'Petrol',wt:'1730 kg',se:'4',pr:'$38,495',z1:'~8.8 sec',ts:'~160 km/h',fc:'4.4',fh:'—',fx:'—'})

// Gen2 (2016–2019) — improved range, 1.5L
add('Chevrolet','Volt',2017,'LT',{en:'1.5L I4 Ecotec + Electric PHEV',di:'1.5L',cy:'4',hp:'111 kW (149 hp)',tq:'273 Nm',tx:'Single-speed',dr:'FWD',ft:'Petrol',wt:'1607 kg',se:'4',pr:'$33,220',z1:'~8.4 sec',ts:'~160 km/h',fc:'4.0',fh:'—',fx:'—'})
add('Chevrolet','Volt',2017,'Premier',{en:'1.5L I4 Ecotec + Electric PHEV',di:'1.5L',cy:'4',hp:'111 kW (149 hp)',tq:'273 Nm',tx:'Single-speed',dr:'FWD',ft:'Petrol',wt:'1620 kg',se:'4',pr:'$37,570',z1:'~8.4 sec',ts:'~160 km/h',fc:'4.0',fh:'—',fx:'—'})
add('Chevrolet','Volt',2019,'LT',{en:'1.5L I4 Ecotec + Electric PHEV',di:'1.5L',cy:'4',hp:'111 kW (149 hp)',tq:'273 Nm',tx:'Single-speed',dr:'FWD',ft:'Petrol',wt:'1607 kg',se:'4',pr:'$33,520',z1:'~8.4 sec',ts:'~160 km/h',fc:'4.0',fh:'—',fx:'—'})
add('Chevrolet','Volt',2019,'Premier',{en:'1.5L I4 Ecotec + Electric PHEV',di:'1.5L',cy:'4',hp:'111 kW (149 hp)',tq:'273 Nm',tx:'Single-speed',dr:'FWD',ft:'Petrol',wt:'1620 kg',se:'4',pr:'$38,495',z1:'~8.4 sec',ts:'~160 km/h',fc:'4.0',fh:'—',fx:'—'})

// ───────────────────────────────────────────────────────────────
// BOLT EV (2017–2023)
// ───────────────────────────────────────────────────────────────
// Gen1 (2017–2021) — 60kWh, 150kW, ~380km WLTP
add('Chevrolet','Bolt EV',2018,'LT',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (201 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1625 kg',se:'5',pr:'$37,495',z1:'~6.5 sec',ts:'~150 km/h',fc:'60 kWh'})
add('Chevrolet','Bolt EV',2018,'Premier',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (201 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1648 kg',se:'5',pr:'$41,780',z1:'~6.5 sec',ts:'~150 km/h',fc:'60 kWh'})
add('Chevrolet','Bolt EV',2020,'LT',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (201 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1616 kg',se:'5',pr:'$36,620',z1:'~6.5 sec',ts:'~150 km/h',fc:'60 kWh'})
add('Chevrolet','Bolt EV',2020,'2LT',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (201 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1625 kg',se:'5',pr:'$38,500',z1:'~6.5 sec',ts:'~150 km/h',fc:'60 kWh'})
add('Chevrolet','Bolt EV',2020,'Premier',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (201 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1648 kg',se:'5',pr:'$41,400',z1:'~6.5 sec',ts:'~150 km/h',fc:'60 kWh'})

// Gen2 (2022–2023) — 65kWh, 150kW; EUV added
add('Chevrolet','Bolt EV',2022,'1LT',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (200 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1625 kg',se:'5',pr:'$26,500',z1:'~6.5 sec',ts:'~150 km/h',fc:'65 kWh'})
add('Chevrolet','Bolt EV',2022,'2LT',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (200 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1635 kg',se:'5',pr:'$28,195',z1:'~6.5 sec',ts:'~150 km/h',fc:'65 kWh'})
add('Chevrolet','Bolt EV',2022,'EUV LT',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (200 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1625 kg',se:'5',pr:'$27,200',z1:'~7.0 sec',ts:'~150 km/h',fc:'65 kWh'})
add('Chevrolet','Bolt EV',2022,'EUV Premier',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (200 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1648 kg',se:'5',pr:'$31,000',z1:'~7.0 sec',ts:'~150 km/h',fc:'65 kWh'})
add('Chevrolet','Bolt EV',2023,'1LT',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (200 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1625 kg',se:'5',pr:'$26,500',z1:'~6.5 sec',ts:'~150 km/h',fc:'65 kWh'})
add('Chevrolet','Bolt EV',2023,'EUV LT',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (200 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1625 kg',se:'5',pr:'$27,200',z1:'~7.0 sec',ts:'~150 km/h',fc:'65 kWh'})
add('Chevrolet','Bolt EV',2023,'EUV Premier',{en:'Single Motor Electric',di:'—',cy:'—',hp:'150 kW (200 hp)',tq:'360 Nm',tx:'Single-speed',dr:'FWD',ft:'Electric',wt:'1648 kg',se:'5',pr:'$31,000',z1:'~7.0 sec',ts:'~150 km/h',fc:'65 kWh'})

// ───────────────────────────────────────────────────────────────
const out = { specs }
fs.writeFileSync('src/data/supplement82.json', JSON.stringify(out, null, 2))
console.log('supplement82.json written —', Object.keys(specs).length, 'entries')
