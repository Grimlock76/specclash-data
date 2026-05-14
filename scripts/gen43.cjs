const fs = require('fs');
const specs = {};
function add(k,s){specs[k]=s;}

// Civic EG/EK (1991-2000)
[['1991','EG'],['1992','EG'],['1993','EG'],['1994','EK'],['1995','EK'],['1996','EK'],['1997','EK'],['1998','EK'],['1999','EK'],['2000','EK']].forEach(([yr,tr])=>add(`Honda|civic|${yr}|${tr}`,{engine:'1.5 SOHC VTEC',displacement:1500,cylinders:4,power:84,torque:127,transmission:'5-speed manual',acceleration:9.8,topSpeed:170,fc:7.4,fuelType:'petrol',weight:920,seats:5,price:'$16,000'}));
// Civic 7th gen (2001-2005)
['2001','2002','2003'].forEach(yr=>add(`Honda|civic|${yr}|VTi`,{engine:'1.7 SOHC VTEC',displacement:1700,cylinders:4,power:92,torque:145,transmission:'5-speed manual',acceleration:9.2,topSpeed:180,fc:7.8,fuelType:'petrol',weight:1130,seats:5,cargo:330,price:'$20,000'}));
['2004','2005'].forEach(yr=>add(`Honda|civic|${yr}|VTi-S`,{engine:'1.7 VTEC',displacement:1700,cylinders:4,power:97,torque:153,transmission:'5-speed manual',acceleration:8.9,topSpeed:185,fc:7.6,fuelType:'petrol',weight:1130,seats:5,cargo:330,price:'$22,990'}));
// Civic 8th gen (2006-2011)
['2006','2007','2008','2009'].forEach(yr=>add(`Honda|civic|${yr}|VTi`,{engine:'1.8 i-VTEC',displacement:1800,cylinders:4,power:103,torque:174,transmission:'5-speed manual',acceleration:9.0,topSpeed:185,fc:7.3,fuelType:'petrol',weight:1224,seats:5,cargo:430,price:'$22,990'}));
['2010','2011'].forEach(yr=>add(`Honda|civic|${yr}|VTi-S`,{engine:'1.8 i-VTEC',displacement:1800,cylinders:4,power:103,torque:174,transmission:'5-speed manual',acceleration:8.9,topSpeed:188,fc:7.3,fuelType:'petrol',weight:1224,seats:5,cargo:430,price:'$25,990'}));
// Civic 9th gen (2012-2016)
['2012','2013'].forEach(yr=>add(`Honda|civic|${yr}|VTi`,{engine:'1.8 i-VTEC',displacement:1800,cylinders:4,power:103,torque:174,transmission:'5-speed manual',acceleration:9.2,topSpeed:185,fc:7.4,fuelType:'petrol',weight:1267,seats:5,cargo:455,price:'$21,990'}));
['2014','2015'].forEach(yr=>add(`Honda|civic|${yr}|VTi-S`,{engine:'1.8 i-VTEC',displacement:1800,cylinders:4,power:103,torque:174,transmission:'CVT',acceleration:9.0,topSpeed:185,fc:7.4,fuelType:'petrol',weight:1275,seats:5,cargo:455,price:'$24,990'}));
add('Honda|civic|2016|VTi-L',{engine:'1.8 i-VTEC',displacement:1800,cylinders:4,power:103,torque:174,transmission:'CVT',acceleration:9.0,topSpeed:185,fc:7.4,fuelType:'petrol',weight:1280,seats:5,cargo:455,price:'$27,490'});
// Civic 10th gen (2017-2021)
add('Honda|civic|2017|VTi',{engine:'1.5 VTEC Turbo',displacement:1500,cylinders:4,power:127,torque:220,transmission:'CVT',acceleration:7.7,topSpeed:200,fc:6.4,fuelType:'petrol',weight:1303,seats:5,cargo:436,price:'$25,990'});
add('Honda|civic|2018|VTi-S',{engine:'1.5 VTEC Turbo',displacement:1500,cylinders:4,power:127,torque:220,transmission:'CVT',acceleration:7.7,topSpeed:200,fc:6.4,fuelType:'petrol',weight:1303,seats:5,cargo:436,price:'$28,490'});
['2019','2020','2021'].forEach(yr=>add(`Honda|civic|${yr}|VTi-LX`,{engine:'1.5 VTEC Turbo',displacement:1500,cylinders:4,power:127,torque:220,transmission:'CVT',acceleration:7.5,topSpeed:200,fc:6.4,fuelType:'petrol',weight:1324,seats:5,cargo:436,price:'$33,490'}));
// Civic 11th gen (2022-2026)
['2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Honda|civic|${yr}|VTi`,{engine:'2.0 i-VTEC',displacement:2000,cylinders:4,power:113,torque:187,transmission:'CVT',acceleration:9.0,topSpeed:185,fc:6.5,fuelType:'petrol',weight:1345,seats:5,cargo:436,price:'$30,900'});
  add(`Honda|civic|${yr}|VTi-LX`,{engine:'2.0 i-VTEC',displacement:2000,cylinders:4,power:113,torque:187,transmission:'CVT',acceleration:9.0,topSpeed:185,fc:6.5,fuelType:'petrol',weight:1350,seats:5,cargo:436,price:'$38,900'});
  add(`Honda|civic|${yr}|e:HEV RS`,{engine:'2.0 Hybrid',displacement:2000,cylinders:4,power:135,torque:315,transmission:'e-CVT',acceleration:7.9,topSpeed:190,fc:4.9,fuelType:'hybrid',weight:1455,seats:5,cargo:416,price:'$43,900'});
});
// Civic Type R
[['1997','Type R EK9',1600,118,160,6.7,'15.1s',225,8.7,'petrol',1050],['2001','Type R EP3',2000,147,198,6.4,'14.8s',230,9.0,'premium unleaded',1215],['2007','Type R FN2',2000,148,198,6.6,'14.9s',235,9.2,'premium unleaded',1263],['2015','Type R FK2',2000,228,400,5.7,'13.8s',270,8.5,'premium unleaded',1380],['2016','Type R FK2',2000,228,400,5.7,'13.8s',270,8.5,'premium unleaded',1380],['2017','Type R FK8',2000,228,400,5.8,'13.9s',272,9.5,'premium unleaded',1380],['2018','Type R FK8',2000,228,400,5.8,'13.9s',272,9.5,'premium unleaded',1380],['2019','Type R FK8',2000,228,400,5.8,'13.9s',272,9.5,'premium unleaded',1380],['2019','Type R FK8 Limited Edition',2000,228,400,5.8,'13.9s',272,9.5,'premium unleaded',1375],['2020','Type R FK8',2000,228,400,5.8,'13.9s',272,9.5,'premium unleaded',1380],['2021','Type R FK8',2000,228,400,5.8,'13.9s',272,9.5,'premium unleaded',1380],['2023','Type R FL5',2000,237,420,5.4,'13.6s',275,9.7,'premium unleaded',1432],['2024','Type R FL5',2000,237,420,5.4,'13.6s',275,9.7,'premium unleaded',1432],['2025','Type R FL5',2000,237,420,5.4,'13.6s',275,9.7,'premium unleaded',1432],['2026','Type R FL5',2000,237,420,5.4,'13.6s',275,9.7,'premium unleaded',1432]].forEach(([yr,tr,disp,pw,tq,acc,qm,ts,fc,ft,wt])=>add(`Honda|civic|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} VTEC`,displacement:disp,cylinders:4,power:pw,torque:tq,transmission:'6-speed manual',acceleration:acc,quarterMile:qm,topSpeed:ts,fc,fuelType:ft,weight:wt,seats:4,price:'$60,000'}));

// Accord (1993-2026)
[['1993','VTi',2200,147,206,8.2,210,9.2,'petrol',1320,null],['1998','VTi',2300,114,209,9.5,195,8.9,'petrol',1370,425],['2003','VTi',2400,122,218,9.5,195,9.0,'petrol',1398,437],['2005','VTi-L',2400,122,218,9.5,195,9.0,'petrol',1411,437],['2006','V6 Luxury',3000,176,285,7.3,220,11.2,'petrol',1535,432],['2008','VTi',2400,140,222,8.9,200,9.2,'petrol',1452,473],['2010','VTi-S',2400,140,222,8.9,200,9.2,'petrol',1455,473],['2013','VTi',2400,137,225,8.7,195,8.5,'petrol',1479,473],['2015','VTi-S',2400,137,225,8.7,195,8.5,'petrol',1479,473],['2016','VTi-L',2400,137,225,8.7,195,8.5,'petrol',1499,473],['2018','VTi',1500,140,220,8.3,200,6.8,'petrol',1519,473],['2020','VTi-LX',1500,140,220,8.3,200,6.8,'petrol',1519,473]].forEach(([yr,tr,disp,pw,tq,acc,ts,fc,ft,wt,cargo])=>add(`Honda|accord|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} i-VTEC`,displacement:disp,cylinders:disp>=3000?6:4,power:pw,torque:tq,transmission:'automatic',acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats:5,cargo,price:'$40,000'}));
['2023','2024','2025','2026'].forEach(yr=>{
  add(`Honda|accord|${yr}|e:HEV Sport`,{engine:'2.0 Hybrid e:HEV',displacement:2000,cylinders:4,power:158,torque:335,transmission:'e-CVT',acceleration:7.5,topSpeed:195,fc:5.0,fuelType:'hybrid',weight:1619,seats:5,cargo:519,price:'$48,900'});
  add(`Honda|accord|${yr}|e:HEV Touring`,{engine:'2.0 Hybrid e:HEV',displacement:2000,cylinders:4,power:158,torque:335,transmission:'e-CVT',acceleration:7.5,topSpeed:195,fc:5.0,fuelType:'hybrid',weight:1629,seats:5,cargo:519,price:'$56,900'});
});

// CR-V (1996-2026)
[['1996','4WD',2000,96,175,11.0,165,10.0,'petrol',1280,null],['1999','4WD',2000,96,175,11.0,165,10.0,'petrol',1280,null],['2002','Sport 4WD',2400,118,218,10.8,175,9.5,'petrol',1514,944],['2005','Sport 4WD',2400,118,218,10.8,175,9.5,'petrol',1514,944],['2007','Luxury 4WD',2400,122,218,10.5,180,9.8,'petrol',1580,982],['2010','Luxury 4WD',2400,122,218,10.5,180,9.8,'petrol',1580,982],['2012','Sport 4WD',2400,127,218,9.9,180,9.5,'petrol',1608,589],['2014','Luxury 4WD',2400,127,218,9.9,180,9.5,'petrol',1618,589],['2017','VTi',1500,140,240,9.2,185,7.8,'petrol',1621,589],['2018','VTi-S',1500,140,240,9.2,185,7.8,'petrol',1621,589],['2019','VTi-LX',1500,140,240,9.2,185,7.8,'petrol',1643,589],['2021','VTi-LX',1500,140,240,9.2,185,7.8,'petrol',1643,589]].forEach(([yr,tr,disp,pw,tq,acc,ts,fc,ft,wt,cargo])=>{const dr=tr.includes('4WD')||tr.includes('AWD')||['VTi','VTi-S','VTi-LX'].includes(tr)&&disp===1500?'AWD':'FWD';add(`Honda|cr-v|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} i-VTEC`,displacement:disp,cylinders:4,power:pw,torque:tq,transmission:'automatic',acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats:5,cargo,price:'$40,000'});});
['2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Honda|cr-v|${yr}|VTi`,{engine:'e:HEV 2.0 Hybrid',displacement:2000,cylinders:4,power:135,torque:315,transmission:'e-CVT',acceleration:8.0,topSpeed:180,fc:5.5,fuelType:'hybrid',weight:1726,seats:5,cargo:510,price:'$42,900'});
  add(`Honda|cr-v|${yr}|VTi-LX`,{engine:'e:HEV 2.0 Hybrid AWD',displacement:2000,cylinders:4,power:135,torque:315,transmission:'e-CVT',acceleration:8.5,topSpeed:180,fc:5.5,fuelType:'hybrid',weight:1830,seats:5,cargo:510,price:'$51,900'});
});

// HR-V (1999-2026)
[['1999','3-door',1600,77,139,12.5,160,7.9,'petrol',1090,4],['2001','5-door',1600,77,139,12.5,160,7.9,'petrol',1180,5],['2014','VTi',1800,104,172,10.2,185,7.4,'petrol',1245,5],['2015','VTi-S',1800,104,172,10.2,185,7.4,'petrol',1246,5],['2016','VTi-L',1800,104,172,10.2,185,7.4,'petrol',1248,5],['2019','VTi-LX',1800,104,172,10.2,185,7.4,'petrol',1257,5],['2021','VTi-LX',1800,104,172,10.2,185,7.4,'petrol',1257,5]].forEach(([yr,tr,disp,pw,tq,acc,ts,fc,ft,wt,seats])=>add(`Honda|hr-v|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} i-VTEC`,displacement:disp,cylinders:4,power:pw,torque:tq,transmission:'CVT',acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats:seats||5,cargo:437,price:'$30,000'}));
['2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Honda|hr-v|${yr}|VTi`,{engine:'1.5 e:HEV Hybrid',displacement:1500,cylinders:4,power:96,torque:253,transmission:'e-CVT',acceleration:9.4,topSpeed:175,fc:4.9,fuelType:'hybrid',weight:1414,seats:5,cargo:393,price:'$34,900'});
  add(`Honda|hr-v|${yr}|VTi-LX`,{engine:'1.5 e:HEV Hybrid',displacement:1500,cylinders:4,power:96,torque:253,transmission:'e-CVT',acceleration:9.4,topSpeed:175,fc:4.9,fuelType:'hybrid',weight:1424,seats:5,cargo:393,price:'$40,900'});
});

// Jazz (2002-2026)
[['2002','VTi',1300,63,119,12.5,160,7.0,'petrol',1020,342],['2004','VTi-S',1500,81,145,10.9,170,6.9,'petrol',1060,342],['2009','VTi',1500,88,145,10.5,175,6.7,'petrol',1096,354],['2010','VTi-S',1500,88,145,10.5,175,6.7,'petrol',1096,354],['2015','VTi',1500,88,145,10.3,175,6.7,'petrol',1094,354],['2016','VTi-S',1500,88,145,10.3,175,6.7,'petrol',1094,354],['2019','VTi-LX',1500,88,145,10.3,175,6.7,'petrol',1107,354]].forEach(([yr,tr,disp,pw,tq,acc,ts,fc,ft,wt,cargo])=>add(`Honda|jazz|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} i-VTEC`,displacement:disp,cylinders:4,power:pw,torque:tq,transmission:'CVT',acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats:5,cargo,price:'$25,000'}));
['2021','2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Honda|jazz|${yr}|e:HEV Vibe`,{engine:'1.5 Hybrid',displacement:1500,cylinders:4,power:72,torque:253,transmission:'e-CVT',acceleration:9.7,topSpeed:175,fc:4.3,fuelType:'hybrid',weight:1199,seats:5,cargo:298,price:'$31,900'});
  add(`Honda|jazz|${yr}|e:HEV Luxe`,{engine:'1.5 Hybrid',displacement:1500,cylinders:4,power:72,torque:253,transmission:'e-CVT',acceleration:9.7,topSpeed:175,fc:4.3,fuelType:'hybrid',weight:1204,seats:5,cargo:298,price:'$34,900'});
});

// NSX (1990-2022)
[['1990','NSX',3000,6,201,284,'5-speed manual','RWD',5.9,'14.0s',260,13.5,'premium unleaded',1350,2],['1993','NSX',3000,6,201,284,'5-speed manual','RWD',5.9,'14.0s',260,13.5,'premium unleaded',1350,2],['1997','NSX Type R',3200,6,206,304,'6-speed manual','RWD',5.5,'13.8s',270,14.0,'premium unleaded',1270,2],['1998','NSX',3200,6,206,304,'6-speed manual','RWD',5.5,'13.8s',270,14.0,'premium unleaded',1320,2],['2001','NSX',3200,6,206,304,'6-speed manual','RWD',5.5,'13.8s',270,14.0,'premium unleaded',1320,2],['2003','NSX',3200,6,206,304,'6-speed manual','RWD',5.5,'13.8s',270,14.0,'premium unleaded',1320,2],['2005','NSX',3200,6,206,304,'6-speed manual','RWD',5.5,'13.8s',270,14.0,'premium unleaded',1320,2],['2017','NSX',3500,6,427,550,'9-speed DCT','AWD',3.1,'11.5s',307,10.8,'premium unleaded',1725,2],['2019','NSX',3500,6,427,550,'9-speed DCT','AWD',3.1,'11.5s',307,10.8,'premium unleaded',1725,2],['2021','NSX Type S',3500,6,441,600,'9-speed DCT','AWD',2.9,'11.2s',308,11.0,'premium unleaded',1725,2],['2022','NSX Type S',3500,6,441,600,'9-speed DCT','AWD',2.9,'11.2s',308,11.0,'premium unleaded',1725,2]].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,qm,ts,fc,ft,wt,seats])=>add(`Honda|nsx|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} DOHC VTEC`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,quarterMile:qm,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,price:'$300,000'}));

// S2000 (1999-2009)
[['1999','S2000',2000,177,208,6.2,'14.6s',240],['2001','S2000',2000,177,208,6.2,'14.6s',240],['2004','S2000 AP2',2200,177,217,6.0,'14.4s',243],['2006','S2000 AP2',2200,177,217,6.0,'14.4s',243],['2008','S2000 AP2',2200,177,217,6.0,'14.4s',243],['2008','S2000 CR',2200,177,217,5.8,'14.2s',243],['2009','S2000 AP2',2200,177,217,6.0,'14.4s',243]].forEach(([yr,tr,disp,pw,tq,acc,qm,ts])=>add(`Honda|s2000|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} DOHC VTEC`,displacement:disp,cylinders:4,power:pw,torque:tq,transmission:'6-speed manual',acceleration:acc,quarterMile:qm,topSpeed:ts,fc:12.0,fuelType:'premium unleaded',weight:1255,seats:2,price:'$78,000'}));

// Integra (1993-2026)
[['1993','Type R DC2',1800,147,178,6.2,'14.4s',225,'premium unleaded',1100,4],['1996','Type R DC2',1800,147,178,6.2,'14.4s',225,'premium unleaded',1100,4],['1998','VTi-R DC2',1800,118,164,8.4,null,205,'petrol',1085,4],['2000','VTi-R DC2',1800,118,164,8.4,null,205,'petrol',1085,4],['2001','Type R DC5',2000,147,198,6.1,'14.3s',230,'premium unleaded',1130,4],['2003','Type R DC5',2000,147,198,6.1,'14.3s',230,'premium unleaded',1130,4],['2005','Type R DC5',2000,147,198,6.1,'14.3s',230,'premium unleaded',1130,4]].forEach(([yr,tr,disp,pw,tq,acc,qm,ts,ft,wt,seats])=>add(`Honda|integra|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} DOHC VTEC`,displacement:disp,cylinders:4,power:pw,torque:tq,transmission:'6-speed manual',acceleration:acc,quarterMile:qm,topSpeed:ts,fuelType:ft,weight:wt,seats,price:'$45,000'}));
['2023','2024','2025','2026'].forEach(yr=>{
  add(`Honda|integra|${yr}|Integra`,{engine:'1.5 VTEC Turbo',displacement:1500,cylinders:4,power:182,torque:260,transmission:'6-speed manual',acceleration:6.8,topSpeed:210,fc:7.7,fuelType:'petrol',weight:1344,seats:5,price:'$57,900'});
  add(`Honda|integra|${yr}|Type S A-Spec`,{engine:'2.0 VTEC Turbo K20C1',displacement:2000,cylinders:4,power:237,torque:420,transmission:'6-speed manual',acceleration:5.1,topSpeed:250,fc:9.5,fuelType:'premium unleaded',weight:1432,seats:5,price:'$80,900'});
});

// Prelude (1992-2001)
['1992','1993','1994','1995'].forEach(yr=>add(`Honda|prelude|${yr}|Si`,{engine:'2.2 DOHC VTEC H22A',displacement:2200,cylinders:4,power:147,torque:206,transmission:'5-speed manual',acceleration:7.5,topSpeed:210,fc:9.8,fuelType:'petrol',weight:1254,seats:4,price:'$37,000'}));
['1996','1997','1998','1999','2000','2001'].forEach(yr=>add(`Honda|prelude|${yr}|VTi`,{engine:'2.2 DOHC VTEC H22A',displacement:2200,cylinders:4,power:147,torque:206,transmission:'5-speed manual',acceleration:7.5,topSpeed:210,fc:9.8,fuelType:'petrol',weight:1270,seats:4,price:'$42,000'}));

// Odyssey (1994-2014)
[['1994','RA1',2200,103,186,11.5,170,10.5,'petrol',1640,7],['1997','RA3',2300,107,196,11.2,172,10.2,'petrol',1670,7],['1999','RA6',3500,183,315,9.2,185,12.5,'petrol',1820,7],['2002','RL1',3500,183,315,9.0,185,12.5,'petrol',1886,7],['2007','RB1',3500,183,315,9.0,185,12.5,'petrol',1970,8],['2009','RB3',3500,183,315,9.0,185,12.5,'petrol',1994,8],['2012','RC1',3500,197,334,8.5,190,12.5,'petrol',2050,8]].forEach(([yr,tr,disp,pw,tq,acc,ts,fc,ft,wt,seats])=>add(`Honda|odyssey|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} VTEC`,displacement:disp,cylinders:disp>=3000?6:4,power:pw,torque:tq,transmission:'automatic',acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,price:'$55,000'}));

// Legend (1990-2012)
['1990','1991','1992','1993','1994','1995','1996'].forEach(yr=>add(`Honda|legend|${yr}|Legend`,{engine:'3.2 SOHC VTEC C32A',displacement:3200,cylinders:6,power:165,torque:279,transmission:'4-speed automatic',acceleration:8.9,topSpeed:220,fc:12.5,fuelType:'petrol',weight:1700,seats:5,price:'$62,000'}));
['2006','2007','2008','2009','2010','2011','2012'].forEach(yr=>add(`Honda|legend|${yr}|Legend`,{engine:'3.5 SOHC VTEC J35A',displacement:3500,cylinders:6,power:217,torque:338,transmission:'5-speed automatic',acceleration:6.5,topSpeed:250,fc:13.5,fuelType:'premium unleaded',weight:1840,seats:5,price:'$95,000'}));

// ZR-V (2023-2026)
['2023','2024','2025','2026'].forEach(yr=>{
  add(`Honda|zr-v|${yr}|VTi-S e:HEV`,{engine:'2.0 Hybrid',displacement:2000,cylinders:4,power:135,torque:315,transmission:'e-CVT',acceleration:7.9,topSpeed:180,fc:5.0,fuelType:'hybrid',weight:1620,seats:5,cargo:393,price:'$45,900'});
  add(`Honda|zr-v|${yr}|VTi-LX e:HEV`,{engine:'2.0 Hybrid',displacement:2000,cylinders:4,power:135,torque:315,transmission:'e-CVT',acceleration:7.9,topSpeed:180,fc:5.0,fuelType:'hybrid',weight:1625,seats:5,cargo:393,price:'$52,900'});
});

// e:Ny1 EV (2024-2026)
['2024','2025','2026'].forEach(yr=>add(`Honda|e:ny1|${yr}|e:Ny1`,{engine:'Electric Motor',battery:'68.8 kWh',fuelType:'electric',power:150,torque:310,transmission:'Single-speed',acceleration:7.7,range:412,weight:1840,seats:5,cargo:346,price:'$61,900'}));

fs.writeFileSync('src/data/supplement43.json', JSON.stringify({specs},null,2));
console.log('supplement43.json written — ' + Object.keys(specs).length + ' entries');
