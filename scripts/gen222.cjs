'use strict';
// supplement222.json — Acura
const fs = require('fs'), path = require('path');

const specs = {};
function add(make, model, year, trim, d) { specs[`${make}|${model}|${year}|${trim}`] = d; }

// ── Legend (1986–1995) ────────────────────────────────────────────────────
const leg25 = { engine:'C25A1 2.5L V6 SOHC', fuelType:'petrol', displacement:2494, cylinders:6,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:118, torque:210, weight:1370, seats:5, cargo:340,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.5, topSpeed:190 };
for (const yr of [1986,1987,1988,1989,1990]) {
  add('Acura','Legend',yr,'L Sedan',   {...leg25, price:'~$20,000'});
  add('Acura','Legend',yr,'L Coupe',   {...leg25, weight:1340, price:'~$21,500'});
  add('Acura','Legend',yr,'LS Sedan',  {...leg25, price:'~$22,500'});
}
const leg32 = { engine:'C32A3 3.2L V6 SOHC VTEC', fuelType:'petrol', displacement:3206, cylinders:6,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:160, torque:278, weight:1530, seats:5, cargo:340,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:7.5, topSpeed:220 };
for (const yr of [1991,1992,1993,1994,1995]) {
  add('Acura','Legend',yr,'L Sedan',   {...leg32, price:'~$26,000'});
  add('Acura','Legend',yr,'LS Sedan',  {...leg32, price:'~$30,000'});
  add('Acura','Legend',yr,'GS Sedan',  {...leg32, power:164, price:'~$35,000'});
  add('Acura','Legend',yr,'L Coupe',   {...leg32, weight:1500, price:'~$28,000'});
  add('Acura','Legend',yr,'LS Coupe',  {...leg32, weight:1500, price:'~$32,000'});
}

// ── Integra DA/DB (1986–1993) ─────────────────────────────────────────────
const int16 = { engine:'ZC 1.6L DOHC I4', fuelType:'petrol', displacement:1590, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:78, torque:131, weight:990, seats:5, cargo:200,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.8, topSpeed:185 };
for (const yr of [1986,1987,1988,1989,1990,1991,1992,1993]) {
  add('Acura','Integra',yr,'RS',  {...int16, price:'~$11,000'});
  add('Acura','Integra',yr,'LS',  {...int16, price:'~$13,000'});
  add('Acura','Integra',yr,'GS',  {...int16, power:93, torque:143, price:'~$15,000'});
}
// ── Integra DC (1994–2001) ────────────────────────────────────────────────
const intB18b = { engine:'B18B1 1.8L SOHC I4', fuelType:'petrol', displacement:1797, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:96, torque:158, weight:1050, seats:5, cargo:200,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:9.5, topSpeed:185 };
const intGSR = { engine:'B18C1 1.8L DOHC VTEC I4', fuelType:'petrol', displacement:1797, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:132, torque:174, weight:1080, seats:5, cargo:200,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:7.5, topSpeed:210 };
const intTypeR = { engine:'B18C5 1.8L DOHC i-VTEC I4', fuelType:'petrol', displacement:1797, cylinders:4,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'FWD',
  power:147, torque:184, weight:1070, seats:5, cargo:200,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:6.8, topSpeed:225 };
for (const yr of [1994,1995,1996,1997,1998,1999,2000,2001]) {
  add('Acura','Integra',yr,'RS',     {...intB18b, price:'~$15,000'});
  add('Acura','Integra',yr,'LS',     {...intB18b, price:'~$17,000'});
  add('Acura','Integra',yr,'GS',     {...intB18b, price:'~$19,000'});
  add('Acura','Integra',yr,'GS-R',   {...intGSR,  price:'~$22,000'});
  if (yr >= 1997) add('Acura','Integra',yr,'Type R',{...intTypeR, price:'~$25,000'});
}

// ── RSX (2002–2006) ───────────────────────────────────────────────────────
const rsxBase = { engine:'K20A3 2.0L DOHC i-VTEC I4', fuelType:'petrol', displacement:1998, cylinders:4,
  aspiration:'NA', transmission:'5-speed auto', drivetrain:'FWD',
  power:116, torque:182, weight:1260, seats:4, cargo:286,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:8.5, topSpeed:200 };
const rsxTypeS = { engine:'K20Z1 2.0L DOHC i-VTEC I4', fuelType:'petrol', displacement:1998, cylinders:4,
  aspiration:'NA', transmission:'6-speed manual', drivetrain:'FWD',
  power:155, torque:195, weight:1285, seats:4, cargo:286,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:6.5, topSpeed:230 };
for (const yr of [2002,2003,2004,2005,2006]) {
  add('Acura','RSX',yr,'Base',   {...rsxBase, price:'~$22,000'});
  add('Acura','RSX',yr,'Type-S', {...rsxTypeS, price:'~$27,000'});
}

// ── NSX Gen 1 (1991–2005) ─────────────────────────────────────────────────
const nsx30 = { engine:'C30A 3.0L VTEC V6', fuelType:'petrol', displacement:2977, cylinders:6,
  aspiration:'NA', transmission:'5-speed manual', drivetrain:'RWD',
  power:206, torque:284, weight:1350, seats:2, cargo:150,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:5.7, topSpeed:270 };
const nsx32 = { engine:'C32B 3.2L VTEC V6', fuelType:'petrol', displacement:3179, cylinders:6,
  aspiration:'NA', transmission:'6-speed manual', drivetrain:'RWD',
  power:210, torque:298, weight:1355, seats:2, cargo:150,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:5.5, topSpeed:274 };
for (const yr of [1991,1992,1993,1994,1995,1996]) {
  add('Acura','NSX',yr,'NSX',       {...nsx30, price:'~$65,000'});
  add('Acura','NSX',yr,'NSX-T',     {...nsx30, weight:1380, price:'~$67,000'}); // targa
}
for (const yr of [1997,1998,1999,2000,2001,2002,2003,2004,2005]) {
  add('Acura','NSX',yr,'NSX',    {...nsx32, price:'~$90,000'});
  add('Acura','NSX',yr,'NSX-T',  {...nsx32, weight:1380, price:'~$92,000'});
  if (yr >= 2002) add('Acura','NSX',yr,'NSX-R', {...nsx32, weight:1270, acceleration:4.9, topSpeed:280, price:'~$120,000'});
}
// ── NSX Gen 2 (2017–2022) ─────────────────────────────────────────────────
const nsx2 = { engine:'3.5L V6 Twin-Turbo + 3 Electric Motors', fuelType:'petrol hybrid', displacement:3493, cylinders:6,
  aspiration:'IHI Twin-Turbo PHEV', transmission:'9-speed DCT', drivetrain:'AWD',
  power:427, torque:550, weight:1725, seats:2, cargo:110,
  fc:null, fh:null, fx:null, ft:'Petrol Hybrid', acceleration:3.1, topSpeed:307 };
for (const yr of [2017,2018,2019,2020,2021,2022]) {
  add('Acura','NSX',yr,'NSX',          {...nsx2, price:'~$200,000'});
  if (yr >= 2022) add('Acura','NSX',yr,'Type S', {...nsx2, power:448, torque:600, weight:1727, acceleration:2.9, price:'~$240,000'});
}

// ── TL (1996–2014) ────────────────────────────────────────────────────────
const tl32g1 = { engine:'C32A6 3.2L V6 SOHC VTEC', fuelType:'petrol', displacement:3206, cylinders:6,
  aspiration:'NA', transmission:'4-speed auto', drivetrain:'FWD',
  power:169, torque:284, weight:1520, seats:5, cargo:340,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:7.8, topSpeed:210 };
for (const yr of [1996,1997,1998]) {
  add('Acura','TL',yr,'2.5',  {...tl32g1, engine:'G25A4 2.5L I5 SOHC', displacement:2451, cylinders:5, power:125, torque:220, acceleration:9.5, price:'~$29,000'});
  add('Acura','TL',yr,'3.2',  {...tl32g1, price:'~$35,000'});
}
const tl32g2 = { engine:'J32A1 3.2L V6 SOHC VTEC', fuelType:'petrol', displacement:3210, cylinders:6,
  aspiration:'NA', transmission:'5-speed auto', drivetrain:'FWD',
  power:179, torque:289, weight:1573, seats:5, cargo:340,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:7.5, topSpeed:215 };
for (const yr of [1999,2000,2001,2002,2003]) {
  add('Acura','TL',yr,'3.2',      {...tl32g2, price:'~$35,000'});
  add('Acura','TL',yr,'3.2 S',    {...tl32g2, power:186, price:'~$38,000'});
}
const tl32g3 = { engine:'J32A3 3.2L V6 SOHC VTEC', fuelType:'petrol', displacement:3210, cylinders:6,
  aspiration:'NA', transmission:'5-speed auto', drivetrain:'FWD',
  power:191, torque:305, weight:1625, seats:5, cargo:340,
  fc:null, fh:null, fx:null, ft:'Petrol', acceleration:7.0, topSpeed:218 };
for (const yr of [2004,2005,2006,2007,2008]) {
  add('Acura','TL',yr,'TL',       {...tl32g3, price:'~$38,000'});
  add('Acura','TL',yr,'TL-S',     {...tl32g3, power:209, torque:316, drivetrain:'AWD', price:'~$45,000'});
}
const tl35 = { engine:'J35Z6 3.5L V6 SOHC VTEC', fuelType:'petrol', displacement:3471, cylinders:6,
  aspiration:'NA', transmission:'5-speed auto', drivetrain:'FWD',
  power:206, torque:337, weight:1655, seats:5, cargo:340,
  fc:12.8, fh:8.8, fx:10.5, ft:'Petrol', acceleration:6.5, topSpeed:220 };
for (const yr of [2009,2010,2011,2012,2013,2014]) {
  add('Acura','TL',yr,'TL',        {...tl35, price:'~$42,000'});
  add('Acura','TL',yr,'TL SH-AWD', {...tl35, power:220, drivetrain:'AWD', weight:1720, price:'~$49,000'});
  add('Acura','TL',yr,'TL V6 6MT', {...tl35, transmission:'6-speed manual', price:'~$43,000'});
}

// ── TLX (2015–2025) ───────────────────────────────────────────────────────
const tlx24 = { engine:'K24W7 2.4L I4 VTEC', fuelType:'petrol', displacement:2356, cylinders:4,
  aspiration:'NA', transmission:'8-speed DCT', drivetrain:'FWD',
  power:147, torque:245, weight:1590, seats:5, cargo:340,
  fc:10.5, fh:7.8, fx:8.9, ft:'Petrol', acceleration:7.5, topSpeed:205 };
const tlx35 = { engine:'J35Y5 3.5L V6 SOHC VTEC', fuelType:'petrol', displacement:3471, cylinders:6,
  aspiration:'NA', transmission:'9-speed ZF DCT', drivetrain:'AWD',
  power:206, torque:336, weight:1695, seats:5, cargo:340,
  fc:12.5, fh:9.0, fx:10.5, ft:'Petrol', acceleration:6.2, topSpeed:220 };
for (const yr of [2015,2016,2017,2018,2019,2020]) {
  add('Acura','TLX',yr,'2.4',         {...tlx24, price:'~$42,000'});
  add('Acura','TLX',yr,'V6 SH-AWD',  {...tlx35, price:'~$52,000'});
  add('Acura','TLX',yr,'V6 A-Spec',  {...tlx35, price:'~$56,000'});
}
// Gen 2 TLX (2021+)
const tlx20t = { engine:'K20C4 2.0T I4 DOHC VTEC Turbo', fuelType:'petrol', displacement:1996, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'10-speed auto', drivetrain:'AWD',
  power:209, torque:380, weight:1720, seats:5, cargo:340,
  fc:11.8, fh:8.5, fx:9.9, ft:'Petrol', acceleration:6.0, topSpeed:220 };
const tlxTypeS = { engine:'NSX 3.0T V6 Twin-Turbo', fuelType:'petrol', displacement:2997, cylinders:6,
  aspiration:'IHI Twin-Turbo', transmission:'10-speed auto', drivetrain:'AWD',
  power:298, torque:550, weight:1840, seats:5, cargo:340,
  fc:13.5, fh:9.8, fx:11.4, ft:'Petrol', acceleration:4.4, topSpeed:290 };
for (const yr of [2021,2022,2023,2024,2025]) {
  add('Acura','TLX',yr,'TLX',          {...tlx20t, price:'~$55,000'});
  add('Acura','TLX',yr,'A-Spec',       {...tlx20t, price:'~$62,000'});
  add('Acura','TLX',yr,'Advance',      {...tlx20t, price:'~$68,000'});
  add('Acura','TLX',yr,'Type S',       {...tlxTypeS, price:'~$80,000'});
  add('Acura','TLX',yr,'Type S PMC',   {...tlxTypeS, price:'~$88,000'});
}

// ── ILX (2013–2022) ───────────────────────────────────────────────────────
const ilx = { engine:'K24Z7 2.4L I4 VTEC', fuelType:'petrol', displacement:2356, cylinders:4,
  aspiration:'NA', transmission:'6-speed manual', drivetrain:'FWD',
  power:138, torque:215, weight:1375, seats:5, cargo:335,
  fc:10.5, fh:7.5, fx:8.7, ft:'Petrol', acceleration:8.2, topSpeed:210 };
for (const yr of [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]) {
  add('Acura','ILX',yr,'Premium', {...ilx, transmission:'8-speed DCT', price:'~$35,000'});
  add('Acura','ILX',yr,'A-Spec',  {...ilx, transmission:'8-speed DCT', price:'~$40,000'});
  if (yr <= 2014) add('Acura','ILX',yr,'2.4 6MT', {...ilx, price:'~$32,000'});
}

// ── RDX (2007–2025) ───────────────────────────────────────────────────────
// Gen 1 (2007–2012)
const rdx1 = { engine:'K23A1 2.3T I4 DOHC VTEC Turbo', fuelType:'petrol', displacement:2354, cylinders:4,
  aspiration:'Garrett Single-Turbo', transmission:'5-speed auto', drivetrain:'AWD',
  power:154, torque:316, weight:1735, seats:5, cargo:815,
  fc:12.5, fh:9.5, fx:10.7, ft:'Petrol', acceleration:7.2, topSpeed:205 };
for (const yr of [2007,2008,2009,2010,2011,2012]) {
  add('Acura','RDX',yr,'Base',       {...rdx1, price:'~$42,000'});
  add('Acura','RDX',yr,'Technology', {...rdx1, price:'~$47,000'});
}
// Gen 2 (2013–2018)
const rdx2 = { engine:'J35Y3 3.5L V6 SOHC VTEC', fuelType:'petrol', displacement:3471, cylinders:6,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'AWD',
  power:203, torque:337, weight:1779, seats:5, cargo:820,
  fc:13.0, fh:9.5, fx:11.0, ft:'Petrol', acceleration:6.8, topSpeed:215 };
for (const yr of [2013,2014,2015,2016,2017,2018]) {
  add('Acura','RDX',yr,'Base',        {...rdx2, price:'~$45,000'});
  add('Acura','RDX',yr,'Technology',  {...rdx2, price:'~$50,000'});
  add('Acura','RDX',yr,'Advance',     {...rdx2, price:'~$54,000'});
}
// Gen 3 (2019+)
const rdx3 = { engine:'K20C4 2.0T I4 DOHC VTEC Turbo', fuelType:'petrol', displacement:1996, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'10-speed auto', drivetrain:'AWD',
  power:185, torque:380, weight:1788, seats:5, cargo:820,
  fc:11.5, fh:8.2, fx:9.5, ft:'Petrol', acceleration:6.5, topSpeed:215 };
for (const yr of [2019,2020,2021,2022,2023,2024,2025]) {
  add('Acura','RDX',yr,'Standard',   {...rdx3, price:'~$52,000'});
  add('Acura','RDX',yr,'Technology', {...rdx3, price:'~$57,000'});
  add('Acura','RDX',yr,'A-Spec',     {...rdx3, price:'~$62,000'});
  add('Acura','RDX',yr,'Advance',    {...rdx3, price:'~$67,000'});
  add('Acura','RDX',yr,'PMC Edition',{...rdx3, price:'~$72,000'});
}

// ── MDX (2001–2025) ───────────────────────────────────────────────────────
// Gen 1 (2001–2006)
const mdx1 = { engine:'J35A1 3.5L V6 SOHC VTEC', fuelType:'petrol', displacement:3471, cylinders:6,
  aspiration:'NA', transmission:'5-speed auto', drivetrain:'AWD',
  power:188, torque:319, weight:1930, seats:7, cargo:680,
  fc:13.5, fh:9.5, fx:11.2, ft:'Petrol', acceleration:7.8, topSpeed:195 };
for (const yr of [2001,2002,2003,2004,2005,2006]) {
  add('Acura','MDX',yr,'Standard',   {...mdx1, price:'~$48,000'});
  add('Acura','MDX',yr,'Touring',    {...mdx1, price:'~$54,000'});
}
// Gen 2 (2007–2013)
const mdx2 = { engine:'J37A1 3.7L V6 SOHC VTEC', fuelType:'petrol', displacement:3664, cylinders:6,
  aspiration:'NA', transmission:'5-speed auto', drivetrain:'AWD',
  power:224, torque:356, weight:1973, seats:7, cargo:706,
  fc:13.8, fh:9.8, fx:11.5, ft:'Petrol', acceleration:7.0, topSpeed:200 };
for (const yr of [2007,2008,2009,2010,2011,2012,2013]) {
  add('Acura','MDX',yr,'Standard',   {...mdx2, price:'~$54,000'});
  add('Acura','MDX',yr,'Technology', {...mdx2, price:'~$60,000'});
  add('Acura','MDX',yr,'Advance',    {...mdx2, price:'~$66,000'});
}
// Gen 3 (2014–2021)
const mdx3 = { engine:'J35Y5 3.5L V6 SOHC VTEC', fuelType:'petrol', displacement:3471, cylinders:6,
  aspiration:'NA', transmission:'6-speed auto', drivetrain:'AWD',
  power:224, torque:356, weight:1990, seats:7, cargo:686,
  fc:13.5, fh:9.5, fx:11.2, ft:'Petrol', acceleration:7.2, topSpeed:200 };
const mdx3h = { engine:'3.0L V6 + 3 Electric Motors Sport Hybrid', fuelType:'petrol hybrid', displacement:2996, cylinders:6,
  aspiration:'NA', transmission:'7-speed DCT', drivetrain:'AWD',
  power:248, torque:512, weight:2130, seats:6, cargo:686,
  fc:8.5, fh:8.5, fx:8.5, ft:'Petrol Hybrid', acceleration:5.6, topSpeed:200 };
for (const yr of [2014,2015,2016,2017,2018,2019,2020,2021]) {
  add('Acura','MDX',yr,'Standard',      {...mdx3, price:'~$58,000'});
  add('Acura','MDX',yr,'Technology',    {...mdx3, price:'~$64,000'});
  add('Acura','MDX',yr,'Advance',       {...mdx3, price:'~$70,000'});
  if (yr >= 2017) add('Acura','MDX',yr,'Sport Hybrid', {...mdx3h, price:'~$75,000'});
}
// Gen 4 (2022+)
const mdx4 = { engine:'J35Y9 3.5L V6', fuelType:'petrol', displacement:3471, cylinders:6,
  aspiration:'NA', transmission:'10-speed auto', drivetrain:'AWD',
  power:224, torque:356, weight:2060, seats:7, cargo:686,
  fc:13.5, fh:9.5, fx:11.2, ft:'Petrol', acceleration:6.8, topSpeed:200 };
const mdxTypeS = { engine:'NSX 3.0T V6 Twin-Turbo', fuelType:'petrol', displacement:2997, cylinders:6,
  aspiration:'IHI Twin-Turbo', transmission:'10-speed auto', drivetrain:'AWD',
  power:298, torque:550, weight:2130, seats:7, cargo:686,
  fc:14.5, fh:10.5, fx:12.2, ft:'Petrol', acceleration:4.9, topSpeed:250 };
for (const yr of [2022,2023,2024,2025]) {
  add('Acura','MDX',yr,'Standard',     {...mdx4, price:'~$65,000'});
  add('Acura','MDX',yr,'Technology',   {...mdx4, price:'~$72,000'});
  add('Acura','MDX',yr,'A-Spec',       {...mdx4, price:'~$78,000'});
  add('Acura','MDX',yr,'Advance',      {...mdx4, price:'~$85,000'});
  add('Acura','MDX',yr,'Type S',       {...mdxTypeS, price:'~$95,000'});
}

// ── Integra (2023–2025) ───────────────────────────────────────────────────
const int23 = { engine:'K20C4 1.5T I4 DOHC VTEC Turbo', fuelType:'petrol', displacement:1498, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'CVT', drivetrain:'FWD',
  power:134, torque:260, weight:1430, seats:5, cargo:296,
  fc:10.0, fh:7.2, fx:8.4, ft:'Petrol', acceleration:7.4, topSpeed:210 };
const intTypeR23 = { engine:'K20C1 2.0T I4 DOHC VTEC Turbo', fuelType:'petrol', displacement:1996, cylinders:4,
  aspiration:'IHI Single-Turbo', transmission:'6-speed manual', drivetrain:'FWD',
  power:235, torque:420, weight:1445, seats:5, cargo:296,
  fc:11.5, fh:8.5, fx:9.7, ft:'Petrol', acceleration:5.1, topSpeed:270 };
for (const yr of [2023,2024,2025]) {
  add('Acura','Integra',yr,'Standard', {...int23, price:'~$42,000'});
  add('Acura','Integra',yr,'A-Spec',   {...int23, transmission:'6-speed manual', price:'~$46,000'});
  add('Acura','Integra',yr,'Type S',   {...intTypeR23, price:'~$58,000'});
}

const out = { specs };
fs.writeFileSync(path.join(__dirname,'..','src','data','supplement222.json'), JSON.stringify(out, null, 2));
console.log('supplement222.json —', Object.keys(specs).length, 'entries (Acura)');
