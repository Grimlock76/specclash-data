const fs = require('fs');
const specs = {};
function add(k,s){specs[k]=s;}

// ── Audi A1 (2011-2023) — premium supermini ──
[['2011','1.4 TFSI',1400,4,92,175,'7-speed S tronic','FWD',8.9,195,6.5,'petrol',1085,4,270,'$28,990'],
['2013','1.4 TFSI',1400,4,92,175,'7-speed S tronic','FWD',8.9,195,6.5,'petrol',1085,4,270,'$29,990'],
['2015','1.4 TFSI',1400,4,92,200,'7-speed S tronic','FWD',8.9,200,6.2,'petrol',1100,4,270,'$30,990'],
['2018','25 TFSI',1000,3,70,160,'7-speed S tronic','FWD',11.0,185,5.2,'petrol',1110,5,335,'$29,900'],
['2018','30 TFSI',1000,3,85,200,'7-speed S tronic','FWD',9.9,190,5.6,'petrol',1120,5,335,'$32,900'],
['2020','30 TFSI',1000,3,85,200,'7-speed S tronic','FWD',9.9,190,5.6,'petrol',1120,5,335,'$33,900'],
['2021','30 TFSI',1000,3,85,200,'7-speed S tronic','FWD',9.9,190,5.6,'petrol',1120,5,335,'$34,900'],
['2022','30 TFSI',1000,3,85,200,'7-speed S tronic','FWD',9.9,190,5.6,'petrol',1120,5,335,'$35,900'],
['2023','30 TFSI',1000,3,85,200,'7-speed S tronic','FWD',9.9,190,5.6,'petrol',1120,5,335,'$36,900']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Audi|a1|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} TFSI`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr}));

// ── Audi A5/S5/RS5 (2007-2026) ──
[['2007','2.0 TFSI',2000,4,165,280,'7-speed S tronic','FWD',7.3,230,8.5,'petrol',1495,4,480,'$68,000'],
['2008','3.2 FSI quattro',3200,6,195,330,'7-speed S tronic','AWD',6.3,250,11.5,'petrol',1595,4,480,'$85,000'],
['2009','S5',4200,8,260,440,'7-speed S tronic','AWD',5.1,250,12.5,'petrol',1750,4,480,'$110,000'],
['2010','2.0 TFSI quattro',2000,4,155,280,'7-speed S tronic','AWD',6.9,225,8.5,'petrol',1565,4,480,'$72,000'],
['2012','2.0 TFSI',2000,4,132,270,'7-speed S tronic','FWD',7.7,220,8.0,'petrol',1470,4,480,'$65,000'],
['2012','S5',3000,6,245,440,'7-speed S tronic','AWD',5.1,250,10.5,'petrol',1690,4,480,'$108,000'],
['2012','RS5',4200,8,331,430,'7-speed S tronic','AWD',4.5,250,13.5,'premium unleaded',1770,4,455,'$155,000'],
['2013','2.0 TDI',2000,4,130,380,'7-speed S tronic','FWD',8.2,218,5.0,'diesel',1550,4,480,'$67,000'],
['2015','2.0 TFSI',2000,4,140,320,'7-speed S tronic','FWD',7.2,225,7.5,'petrol',1495,4,480,'$70,000'],
['2017','2.0 TFSI',2000,4,140,320,'7-speed S tronic','FWD',7.2,225,7.5,'petrol',1520,4,480,'$72,000'],
['2017','45 TFSI quattro',2000,4,180,370,'7-speed S tronic','AWD',5.9,250,8.0,'petrol',1610,4,480,'$85,000'],
['2017','S5',3000,6,260,500,'8-speed tiptronic','AWD',4.7,250,10.0,'petrol',1720,4,480,'$115,000'],
['2018','RS5',2900,6,331,600,'8-speed tiptronic','AWD',3.9,280,11.0,'premium unleaded',1800,4,455,'$165,000'],
['2020','45 TFSI quattro',2000,4,180,370,'7-speed S tronic','AWD',5.9,250,8.0,'petrol',1610,4,480,'$87,000'],
['2020','S5',3000,6,260,500,'8-speed tiptronic','AWD',4.7,250,10.0,'petrol',1720,4,480,'$118,000'],
['2021','RS5',2900,6,331,600,'8-speed tiptronic','AWD',3.9,280,11.0,'premium unleaded',1800,4,455,'$168,000'],
['2022','45 TFSI quattro',2000,4,195,370,'7-speed S tronic','AWD',5.7,250,8.0,'petrol',1625,4,480,'$90,000'],
['2022','S5',3000,6,260,500,'8-speed tiptronic','AWD',4.7,250,10.0,'petrol',1720,4,480,'$120,000'],
['2022','RS5',2900,6,331,600,'8-speed tiptronic','AWD',3.9,280,11.0,'premium unleaded',1800,4,455,'$170,000'],
['2023','40 TFSI quattro',2000,4,140,320,'7-speed S tronic','AWD',6.9,225,7.5,'petrol',1580,4,480,'$82,000'],
['2023','S5',3000,6,260,500,'8-speed tiptronic','AWD',4.7,250,10.0,'petrol',1720,4,480,'$122,000'],
['2024','40 TFSI quattro',2000,4,150,320,'7-speed S tronic','AWD',6.9,225,7.5,'petrol',1580,4,480,'$84,000'],
['2025','40 TFSI quattro',2000,4,150,320,'7-speed S tronic','AWD',6.9,225,7.5,'petrol',1580,4,480,'$86,000'],
['2026','40 TFSI quattro',2000,4,150,320,'7-speed S tronic','AWD',6.9,225,7.5,'petrol',1580,4,480,'$88,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Audi|a5|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr}));

// ── Audi A7/S7/RS7 (2010-2026) ──
[['2010','3.0 TFSI quattro',3000,6,220,400,'7-speed S tronic','AWD',5.9,250,9.5,'petrol',1835,5,535,'$105,000'],
['2011','3.0 TFSI quattro',3000,6,220,400,'7-speed S tronic','AWD',5.9,250,9.5,'petrol',1835,5,535,'$108,000'],
['2012','3.0 TDI quattro',3000,6,180,500,'7-speed S tronic','AWD',5.9,250,7.0,'diesel',1895,5,535,'$105,000'],
['2012','S7',4000,8,309,550,'7-speed S tronic','AWD',4.7,250,11.5,'petrol',1965,5,535,'$165,000'],
['2013','3.0 TFSI quattro',3000,6,220,400,'7-speed S tronic','AWD',5.9,250,9.5,'petrol',1835,5,535,'$110,000'],
['2014','RS7',4000,8,412,700,'8-speed tiptronic','AWD',3.9,280,12.0,'premium unleaded',1995,5,535,'$220,000'],
['2015','3.0 TFSI quattro',3000,6,228,440,'8-speed tiptronic','AWD',5.3,250,9.5,'petrol',1870,5,535,'$112,000'],
['2018','55 TFSI quattro',3000,6,250,500,'8-speed tiptronic','AWD',5.1,250,10.0,'petrol',1910,5,535,'$120,000'],
['2018','S7',2900,6,324,600,'8-speed tiptronic','AWD',4.5,250,9.5,'petrol',1980,5,535,'$170,000'],
['2020','55 TFSI quattro',3000,6,250,500,'8-speed tiptronic','AWD',5.1,250,10.0,'petrol',1910,5,535,'$122,000'],
['2020','RS7',4000,8,441,800,'8-speed tiptronic','AWD',3.6,280,12.5,'premium unleaded',2090,5,535,'$240,000'],
['2021','55 TFSI quattro',3000,6,250,500,'8-speed tiptronic','AWD',5.1,250,10.0,'petrol',1910,5,535,'$124,000'],
['2022','55 TFSI quattro',3000,6,250,500,'8-speed tiptronic','AWD',5.1,250,10.0,'petrol',1910,5,535,'$126,000'],
['2022','RS7',4000,8,441,800,'8-speed tiptronic','AWD',3.6,280,12.5,'premium unleaded',2090,5,535,'$245,000'],
['2023','55 TFSI quattro',3000,6,250,500,'8-speed tiptronic','AWD',5.1,250,10.0,'petrol',1910,5,535,'$128,000'],
['2024','55 TFSI quattro',3000,6,250,500,'8-speed tiptronic','AWD',5.1,250,10.0,'petrol',1910,5,535,'$130,000'],
['2025','55 TFSI quattro',3000,6,250,500,'8-speed tiptronic','AWD',5.1,250,10.0,'petrol',1910,5,535,'$132,000'],
['2026','55 TFSI quattro',3000,6,250,500,'8-speed tiptronic','AWD',5.1,250,10.0,'petrol',1910,5,535,'$134,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Audi|a7|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr}));

// ── Audi A8/S8 (1994-2026) ──
[['1994','3.7 quattro',3700,8,176,330,'5-speed tiptronic','AWD',8.0,250,13.5,'petrol',1770,5,400,'$120,000'],
['1998','4.2 quattro',4172,8,221,410,'5-speed tiptronic','AWD',6.9,250,14.0,'petrol',1790,5,400,'$140,000'],
['2002','4.2 FSI quattro',4172,8,246,430,'6-speed tiptronic','AWD',6.3,250,13.5,'petrol',1830,5,400,'$155,000'],
['2004','4.2 TDI quattro',4134,8,202,650,'6-speed tiptronic','AWD',6.6,250,10.5,'diesel',1960,5,400,'$155,000'],
['2004','6.0 W12 quattro',5998,12,331,620,'6-speed tiptronic','AWD',5.7,250,18.5,'petrol',2115,5,400,'$310,000'],
['2006','4.2 FSI quattro',4172,8,246,430,'6-speed tiptronic','AWD',6.3,250,13.5,'petrol',1830,5,400,'$160,000'],
['2010','4.2 FSI quattro',4163,8,258,460,'8-speed tiptronic','AWD',5.9,250,13.0,'petrol',1880,5,400,'$168,000'],
['2010','6.3 W12 quattro',6299,12,368,750,'8-speed tiptronic','AWD',4.9,250,19.0,'petrol',2105,5,400,'$340,000'],
['2013','3.0 TDI quattro',2967,6,184,450,'8-speed tiptronic','AWD',6.5,250,7.0,'diesel',1895,5,400,'$155,000'],
['2013','4.0 TFSI quattro',3993,8,309,600,'8-speed tiptronic','AWD',4.3,250,12.5,'petrol',1965,5,400,'$200,000'],
['2013','S8',4000,8,382,700,'8-speed tiptronic','AWD',4.1,250,13.5,'petrol',2040,5,400,'$280,000'],
['2018','55 TFSI quattro',3000,6,250,500,'8-speed tiptronic','AWD',5.6,250,10.5,'petrol',1945,5,400,'$220,000'],
['2018','60 TFSI quattro',4000,8,338,700,'8-speed tiptronic','AWD',4.6,250,12.5,'petrol',2080,5,400,'$290,000'],
['2018','S8',4000,8,441,800,'8-speed tiptronic','AWD',3.8,250,12.0,'premium unleaded',2110,5,400,'$350,000'],
['2020','55 TFSI quattro',3000,6,250,500,'8-speed tiptronic','AWD',5.6,250,10.5,'petrol',1945,5,400,'$225,000'],
['2020','60 TFSI e quattro',3000,6,340,700,'8-speed tiptronic','AWD',4.5,250,3.4,'plug-in hybrid',2360,5,400,'$300,000'],
['2022','60 TFSI quattro',4000,8,338,700,'8-speed tiptronic','AWD',4.6,250,12.5,'petrol',2080,5,400,'$295,000'],
['2023','60 TFSI quattro',4000,8,338,700,'8-speed tiptronic','AWD',4.6,250,12.5,'petrol',2080,5,400,'$298,000'],
['2024','60 TFSI quattro',4000,8,338,700,'8-speed tiptronic','AWD',4.6,250,12.5,'petrol',2080,5,400,'$300,000'],
['2025','60 TFSI quattro',4000,8,338,700,'8-speed tiptronic','AWD',4.6,250,12.5,'petrol',2080,5,400,'$305,000'],
['2026','60 TFSI quattro',4000,8,338,700,'8-speed tiptronic','AWD',4.6,250,12.5,'petrol',2080,5,400,'$310,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Audi|a8|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr}));

// ── Audi Q2 (2016-2026) — subcompact SUV ──
[['2016','1.4 TFSI',1400,4,110,250,'7-speed S tronic','FWD',8.5,193,6.0,'petrol',1345,5,405,'$38,000'],
['2017','1.4 TFSI',1400,4,110,250,'7-speed S tronic','FWD',8.5,193,6.0,'petrol',1345,5,405,'$38,990'],
['2018','1.4 TFSI',1400,4,110,250,'7-speed S tronic','FWD',8.5,193,6.0,'petrol',1345,5,405,'$39,990'],
['2018','2.0 TDI quattro',2000,4,140,340,'6-speed S tronic','AWD',8.0,205,5.0,'diesel',1460,5,405,'$47,990'],
['2019','35 TFSI',1500,4,110,250,'7-speed S tronic','FWD',8.9,196,6.5,'petrol',1365,5,405,'$40,990'],
['2020','35 TFSI',1500,4,110,250,'7-speed S tronic','FWD',8.9,196,6.5,'petrol',1365,5,405,'$41,990'],
['2021','35 TFSI',1500,4,110,250,'7-speed S tronic','FWD',8.9,196,6.5,'petrol',1365,5,405,'$42,990'],
['2021','40 TFSI quattro',2000,4,140,320,'7-speed S tronic','AWD',7.3,214,7.5,'petrol',1480,5,405,'$52,990'],
['2022','35 TFSI',1500,4,110,250,'7-speed S tronic','FWD',8.9,196,6.5,'petrol',1365,5,405,'$43,990'],
['2023','35 TFSI',1500,4,110,250,'7-speed S tronic','FWD',8.9,196,6.5,'petrol',1365,5,405,'$44,990'],
['2024','35 TFSI',1500,4,110,250,'7-speed S tronic','FWD',8.9,196,6.5,'petrol',1365,5,405,'$45,990'],
['2025','35 TFSI',1500,4,110,250,'7-speed S tronic','FWD',8.9,196,6.5,'petrol',1365,5,405,'$46,990'],
['2026','35 TFSI',1500,4,110,250,'7-speed S tronic','FWD',8.9,196,6.5,'petrol',1365,5,405,'$47,990']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Audi|q2|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr}));

// ── Audi e-tron GT / RS e-tron GT (2021-2026) ──
['2021','2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Audi|e-tron gt|${yr}|e-tron GT`,{engine:'Dual Electric Motor RWD',battery:'93.4 kWh',fuelType:'electric',power:350,torque:640,transmission:'2-speed',acceleration:4.1,range:488,weight:2347,seats:4,cargo:405,price:'$170,000',drivetrain:'AWD'});
  add(`Audi|e-tron gt|${yr}|RS e-tron GT`,{engine:'Dual Electric Motor AWD',battery:'93.4 kWh',fuelType:'electric',power:475,torque:830,transmission:'2-speed',acceleration:3.3,range:472,weight:2347,seats:4,cargo:405,price:'$220,000',drivetrain:'AWD'});
});
['2024','2025','2026'].forEach(yr=>{
  add(`Audi|e-tron gt|${yr}|RS e-tron GT Performance`,{engine:'Tri Electric Motor AWD',battery:'105 kWh',fuelType:'electric',power:630,torque:1020,transmission:'2-speed',acceleration:2.5,range:598,weight:2545,seats:4,cargo:405,price:'$280,000',drivetrain:'AWD'});
});

// ── Audi RS Q8 (2020-2026) ──
['2020','2021','2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Audi|q8 e-tron|${yr}|RS Q8`,{engine:'4.0 TFSI quattro',displacement:3996,cylinders:8,power:441,torque:800,transmission:'8-speed tiptronic',acceleration:3.8,topSpeed:305,fc:12.0,fuelType:'premium unleaded',weight:2215,seats:5,cargo:605,price:'$245,000',drivetrain:'AWD'});
});

// ── Audi SQ5/SQ7/RS Q3 ──
// SQ5 (2013-2026)
[['2013','SQ5',3000,6,260,550,'8-speed tiptronic','AWD',5.1,250,10.5,'petrol',1930,5,520,'$95,000'],
['2018','SQ5',3000,6,260,500,'8-speed tiptronic','AWD',5.4,250,10.0,'petrol',1930,5,520,'$98,000'],
['2020','SQ5',3000,6,260,500,'8-speed tiptronic','AWD',5.4,250,10.0,'petrol',1930,5,520,'$102,000'],
['2022','SQ5',3000,6,260,500,'8-speed tiptronic','AWD',5.4,250,10.0,'petrol',1930,5,520,'$105,000'],
['2023','SQ5',3000,6,260,500,'8-speed tiptronic','AWD',5.4,250,10.0,'petrol',1930,5,520,'$108,000'],
['2024','SQ5',3000,6,260,500,'8-speed tiptronic','AWD',5.4,250,10.0,'petrol',1930,5,520,'$110,000'],
['2025','SQ5',3000,6,260,500,'8-speed tiptronic','AWD',5.4,250,10.0,'petrol',1930,5,520,'$112,000'],
['2026','SQ5',3000,6,260,500,'8-speed tiptronic','AWD',5.4,250,10.0,'petrol',1930,5,520,'$115,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Audi|q5|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr}));
// SQ7 (2016-2026)
[['2016','SQ7',4000,8,320,900,'8-speed tiptronic','AWD',4.8,250,9.5,'diesel',2265,7,770,'$175,000'],
['2020','SQ7',4000,8,320,900,'8-speed tiptronic','AWD',4.8,250,9.5,'diesel',2265,7,770,'$178,000'],
['2022','SQ7',4000,8,320,900,'8-speed tiptronic','AWD',4.8,250,9.5,'diesel',2265,7,770,'$180,000'],
['2023','SQ7',4000,8,320,900,'8-speed tiptronic','AWD',4.8,250,9.5,'diesel',2265,7,770,'$182,000'],
['2024','SQ7',4000,8,320,900,'8-speed tiptronic','AWD',4.8,250,9.5,'diesel',2265,7,770,'$185,000'],
['2025','SQ7',4000,8,320,900,'8-speed tiptronic','AWD',4.8,250,9.5,'diesel',2265,7,770,'$188,000'],
['2026','SQ7',4000,8,320,900,'8-speed tiptronic','AWD',4.8,250,9.5,'diesel',2265,7,770,'$190,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Audi|q7|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr}));
// RS Q3 (2011-2026)
[['2011','RS Q3',2500,5,228,420,'7-speed S tronic','AWD',4.8,250,10.0,'premium unleaded',1630,5,530,'$72,000'],
['2015','RS Q3',2500,5,228,420,'7-speed S tronic','AWD',4.8,250,10.0,'premium unleaded',1630,5,530,'$75,000'],
['2019','RS Q3',2500,5,294,480,'7-speed S tronic','AWD',4.5,250,10.5,'premium unleaded',1650,5,530,'$89,000'],
['2020','RS Q3',2500,5,294,480,'7-speed S tronic','AWD',4.5,250,10.5,'premium unleaded',1650,5,530,'$92,000'],
['2022','RS Q3',2500,5,294,480,'7-speed S tronic','AWD',4.5,250,10.5,'premium unleaded',1650,5,530,'$95,000'],
['2023','RS Q3',2500,5,294,480,'7-speed S tronic','AWD',4.5,250,10.5,'premium unleaded',1650,5,530,'$97,000'],
['2024','RS Q3',2500,5,294,480,'7-speed S tronic','AWD',4.5,250,10.5,'premium unleaded',1650,5,530,'$99,000'],
['2025','RS Q3',2500,5,294,480,'7-speed S tronic','AWD',4.5,250,10.5,'premium unleaded',1650,5,530,'$101,000'],
['2026','RS Q3',2500,5,294,480,'7-speed S tronic','AWD',4.5,250,10.5,'premium unleaded',1650,5,530,'$103,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Audi|q3|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr}));

fs.writeFileSync('src/data/supplement47.json', JSON.stringify({specs},null,2));
console.log('supplement47.json written — ' + Object.keys(specs).length + ' entries');
