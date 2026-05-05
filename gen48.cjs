const fs = require('fs');
const specs = {};
function add(k,s){specs[k]=s;}

// ── Mercedes-Benz S-Class (1990-2026) ──
[['1990','S 300',2960,6,132,260,'4-speed automatic','RWD',10.5,220,12.0,'petrol',1810,5,null,'$120,000'],
['1992','S 420',4196,8,213,400,'4-speed automatic','RWD',7.9,250,14.5,'petrol',2000,5,null,'$180,000'],
['1992','S 500',4973,8,240,470,'4-speed automatic','RWD',7.3,250,16.0,'petrol',2035,5,null,'$220,000'],
['1992','S 600',5987,12,290,570,'4-speed automatic','RWD',6.6,250,20.0,'premium unleaded',2250,5,null,'$350,000'],
['1999','S 320',3199,6,165,310,'5-speed automatic','RWD',9.0,240,13.0,'petrol',1865,5,510,'$155,000'],
['1999','S 430',4266,8,205,395,'5-speed automatic','RWD',7.1,250,14.5,'petrol',1935,5,510,'$200,000'],
['1999','S 500',4966,8,225,460,'5-speed automatic','RWD',6.6,250,16.0,'petrol',1990,5,510,'$250,000'],
['1999','S 600',5786,12,270,530,'5-speed automatic','RWD',6.3,250,20.0,'premium unleaded',2185,5,510,'$380,000'],
['2006','S 350',3498,6,200,350,'7-speed automatic','RWD',7.7,250,13.0,'petrol',1890,5,510,'$175,000'],
['2006','S 500',5461,8,285,530,'7-speed automatic','RWD',5.5,250,15.5,'petrol',2020,5,510,'$265,000'],
['2006','S 63 AMG',6208,8,386,630,'7-speed automatic','RWD',4.6,250,16.5,'premium unleaded',2090,5,510,'$380,000'],
['2006','S 65 AMG',5980,12,450,1000,'5-speed automatic','RWD',4.4,250,20.0,'premium unleaded',2250,5,510,'$600,000'],
['2010','S 350 CDI',2987,6,195,540,'7-speed automatic','RWD',7.2,250,8.0,'diesel',1890,5,510,'$185,000'],
['2010','S 500',5461,8,285,530,'7-speed automatic','RWD',5.4,250,15.0,'petrol',2020,5,510,'$275,000'],
['2013','S 400',3498,6,245,480,'7-speed automatic','RWD',6.2,250,11.5,'hybrid',2140,5,510,'$235,000'],
['2013','S 500',4663,8,335,700,'7-speed automatic','RWD',4.6,250,12.5,'petrol',2140,5,510,'$310,000'],
['2013','S 63 AMG',5461,8,430,900,'7-speed automatic','AWD',4.4,250,15.0,'premium unleaded',2155,5,510,'$450,000'],
['2013','S 65 AMG',5980,12,463,1000,'7-speed automatic','RWD',4.4,250,20.0,'premium unleaded',2295,5,510,'$700,000'],
['2017','S 400',3498,6,245,480,'9-speed automatic','RWD',5.5,250,10.5,'hybrid',2185,5,510,'$245,000'],
['2017','S 500',2996,6,335,700,'9-speed automatic','AWD',4.8,250,11.0,'petrol',2095,5,510,'$320,000'],
['2017','S 63 AMG',3982,8,450,900,'9-speed automatic','AWD',3.5,300,12.5,'premium unleaded',2270,5,510,'$490,000'],
['2020','S 400d',2925,6,243,600,'9-speed automatic','AWD',5.2,250,8.5,'diesel',2190,5,510,'$250,000'],
['2020','S 500',2999,6,320,520,'9-speed automatic','AWD',4.9,250,11.0,'hybrid',2265,5,510,'$330,000'],
['2020','S 63 AMG',3982,8,450,900,'9-speed automatic','AWD',3.4,300,13.0,'premium unleaded',2280,5,510,'$500,000'],
['2021','S 350d',2925,6,210,500,'9-speed automatic','AWD',6.4,250,8.5,'diesel',2175,5,510,'$225,000'],
['2021','S 500',2999,6,320,520,'9-speed automatic','AWD',4.9,250,11.0,'hybrid',2265,5,510,'$335,000'],
['2022','S 580',3982,8,350,700,'9-speed automatic','AWD',4.4,250,14.0,'petrol',2440,5,510,'$440,000'],
['2023','S 350d',2925,6,210,500,'9-speed automatic','AWD',6.4,250,8.5,'diesel',2175,5,510,'$230,000'],
['2023','S 500',2999,6,320,520,'9-speed automatic','AWD',4.9,250,11.0,'hybrid',2265,5,510,'$340,000'],
['2024','S 500',2999,6,320,520,'9-speed automatic','AWD',4.9,250,11.0,'hybrid',2265,5,510,'$345,000'],
['2025','S 500',2999,6,320,520,'9-speed automatic','AWD',4.9,250,11.0,'hybrid',2265,5,510,'$350,000'],
['2026','S 500',2999,6,320,520,'9-speed automatic','AWD',4.9,250,11.0,'hybrid',2265,5,510,'$355,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Mercedes-Benz|s-class|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr,drivetrain:dr}));

// ── Mercedes-Benz B-Class (2005-2022) ──
[['2005','B 170',1700,4,85,155,'CVT','FWD',11.0,180,8.5,'petrol',1275,5,544,'$32,000'],
['2007','B 200',2000,4,100,185,'CVT','FWD',9.6,195,8.0,'petrol',1310,5,544,'$36,000'],
['2009','B 180',2000,4,90,175,'CVT','FWD',10.5,190,7.8,'petrol',1305,5,544,'$34,000'],
['2012','B 200',1600,4,115,250,'7-speed DCT','FWD',8.1,210,6.8,'petrol',1420,5,486,'$38,000'],
['2013','B 180',1600,4,90,200,'7-speed DCT','FWD',9.9,200,6.0,'petrol',1400,5,486,'$35,000'],
['2015','B 200',1600,4,115,250,'7-speed DCT','FWD',8.1,210,6.8,'petrol',1420,5,486,'$38,990'],
['2016','B 180',1600,4,90,200,'7-speed DCT','FWD',9.9,200,6.0,'petrol',1400,5,486,'$36,990'],
['2018','B 180',1400,4,100,200,'7-speed DCT','FWD',9.7,200,6.5,'petrol',1430,5,438,'$38,990'],
['2018','B 200',1300,4,120,250,'7-speed DCT','FWD',8.0,205,6.2,'petrol',1440,5,438,'$42,990'],
['2019','B 180',1400,4,100,200,'7-speed DCT','FWD',9.7,200,6.5,'petrol',1430,5,438,'$40,990'],
['2020','B 180',1400,4,100,200,'7-speed DCT','FWD',9.7,200,6.5,'petrol',1430,5,438,'$42,990'],
['2021','B 180',1400,4,100,200,'7-speed DCT','FWD',9.7,200,6.5,'petrol',1430,5,438,'$44,990'],
['2022','B 200',1300,4,120,250,'7-speed DCT','FWD',8.0,205,6.2,'petrol',1440,5,438,'$48,990']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Mercedes-Benz|b-class|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr,drivetrain:'FWD'}));

// ── Mercedes-Benz CLS (2004-2026) ──
[['2004','CLS 350',3498,6,200,350,'7-speed automatic','RWD',6.7,250,12.0,'petrol',1685,4,565,'$120,000'],
['2006','CLS 500',4966,8,225,460,'7-speed automatic','RWD',5.4,250,14.5,'petrol',1795,4,565,'$155,000'],
['2006','CLS 55 AMG',5439,8,350,510,'5-speed automatic','RWD',4.7,250,14.0,'premium unleaded',1840,4,565,'$220,000'],
['2010','CLS 350',3498,6,200,350,'7-speed automatic','RWD',6.7,250,12.0,'petrol',1685,4,565,'$125,000'],
['2012','CLS 350',3498,6,225,400,'7-speed automatic','RWD',5.9,250,9.5,'petrol',1760,4,565,'$130,000'],
['2012','CLS 500',4663,8,300,600,'7-speed automatic','RWD',4.9,250,13.0,'petrol',1845,4,565,'$175,000'],
['2012','CLS 63 AMG',5461,8,386,700,'7-speed automatic','RWD',4.3,250,14.5,'premium unleaded',1870,4,565,'$260,000'],
['2015','CLS 400',2996,6,245,480,'9-speed automatic','RWD',5.3,250,10.0,'petrol',1770,4,565,'$145,000'],
['2018','CLS 350',2925,6,210,500,'9-speed automatic','AWD',5.3,250,8.5,'diesel',1825,4,565,'$140,000'],
['2018','CLS 450',2999,6,270,500,'9-speed automatic','AWD',4.9,250,9.0,'hybrid',1865,4,565,'$165,000'],
['2018','CLS 53 AMG',2999,6,320,520,'9-speed automatic','AWD',4.5,270,9.5,'petrol',1870,4,565,'$220,000'],
['2020','CLS 300d',1950,4,180,500,'9-speed automatic','AWD',6.3,250,6.5,'diesel',1770,4,565,'$125,000'],
['2021','CLS 450',2999,6,270,500,'9-speed automatic','AWD',4.9,250,9.0,'hybrid',1865,4,565,'$168,000'],
['2022','CLS 450',2999,6,270,500,'9-speed automatic','AWD',4.9,250,9.0,'hybrid',1865,4,565,'$170,000'],
['2023','CLS 450',2999,6,270,500,'9-speed automatic','AWD',4.9,250,9.0,'hybrid',1865,4,565,'$172,000'],
['2024','CLS 450',2999,6,270,500,'9-speed automatic','AWD',4.9,250,9.0,'hybrid',1865,4,565,'$174,000'],
['2025','CLS 450',2999,6,270,500,'9-speed automatic','AWD',4.9,250,9.0,'hybrid',1865,4,565,'$176,000'],
['2026','CLS 450',2999,6,270,500,'9-speed automatic','AWD',4.9,250,9.0,'hybrid',1865,4,565,'$178,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Mercedes-Benz|cls|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr,drivetrain:dr}));

// ── Mercedes-Benz SLK/SLC (1996-2020) — roadster ──
[['1996','SLK 200',1998,4,100,190,'5-speed automatic','RWD',9.0,215,9.5,'petrol',1300,2,145,'$75,000'],
['1998','SLK 230',2295,4,142,220,'5-speed automatic','RWD',7.3,230,10.0,'petrol',1325,2,145,'$85,000'],
['2000','SLK 320',3199,6,160,300,'5-speed automatic','RWD',6.7,240,11.5,'petrol',1380,2,145,'$95,000'],
['2001','SLK 32 AMG',3199,6,260,450,'5-speed automatic','RWD',5.1,250,14.0,'premium unleaded',1420,2,145,'$145,000'],
['2004','SLK 200',1796,4,120,200,'6-speed manual','RWD',8.2,220,9.0,'petrol',1340,2,145,'$78,000'],
['2004','SLK 350',3498,6,200,350,'6-speed manual','RWD',6.1,250,11.5,'petrol',1410,2,145,'$105,000'],
['2005','SLK 55 AMG',5439,8,265,510,'7-speed automatic','RWD',4.9,250,14.5,'premium unleaded',1490,2,145,'$180,000'],
['2008','SLK 200',1796,4,120,200,'6-speed manual','RWD',8.2,220,9.0,'petrol',1340,2,145,'$80,000'],
['2011','SLK 200',1796,4,135,270,'7-speed automatic','RWD',7.0,232,7.5,'petrol',1390,2,225,'$82,000'],
['2011','SLK 350',3498,6,225,370,'7-speed automatic','RWD',5.4,250,9.5,'petrol',1505,2,225,'$110,000'],
['2012','SLK 55 AMG',5461,8,310,540,'7-speed automatic','RWD',4.6,250,12.5,'premium unleaded',1570,2,225,'$185,000'],
['2015','SLK 200',1796,4,135,270,'7-speed automatic','RWD',7.0,232,7.5,'petrol',1390,2,225,'$84,000'],
['2015','SLK 350',3498,6,225,370,'7-speed automatic','RWD',5.4,250,9.5,'petrol',1505,2,225,'$112,000'],
['2016','SLC 180',1595,4,115,200,'9-speed automatic','RWD',7.8,228,7.0,'petrol',1420,2,225,'$72,000'],
['2016','SLC 300',1991,4,180,300,'9-speed automatic','RWD',5.8,250,8.0,'petrol',1450,2,225,'$92,000'],
['2016','SLC 43 AMG',2996,6,270,400,'9-speed automatic','RWD',4.7,250,9.0,'premium unleaded',1560,2,225,'$140,000'],
['2018','SLC 300',1991,4,180,300,'9-speed automatic','RWD',5.8,250,8.0,'petrol',1450,2,225,'$95,000'],
['2020','SLC 300',1991,4,180,300,'9-speed automatic','RWD',5.8,250,8.0,'petrol',1450,2,225,'$98,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Mercedes-Benz|slk|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr,drivetrain:'RWD'}));

// ── Mercedes-Benz SL (1990-2026) ──
[['1990','SL 300',2960,6,138,260,'4-speed automatic','RWD',9.8,235,13.0,'petrol',1720,2,null,'$195,000'],
['1990','SL 500',4973,8,240,470,'4-speed automatic','RWD',6.8,250,16.5,'petrol',1830,2,null,'$280,000'],
['1990','SL 600',5987,12,290,570,'4-speed automatic','RWD',6.0,250,20.0,'premium unleaded',2000,2,null,'$380,000'],
['2001','SL 500',4966,8,225,460,'5-speed automatic','RWD',6.3,250,16.0,'petrol',1835,2,null,'$285,000'],
['2001','SL 55 AMG',5439,8,350,700,'5-speed automatic','RWD',4.8,250,15.0,'premium unleaded',1895,2,null,'$390,000'],
['2006','SL 350',3498,6,200,350,'7-speed automatic','RWD',6.5,250,12.5,'petrol',1765,2,null,'$220,000'],
['2006','SL 500',4966,8,225,460,'7-speed automatic','RWD',5.9,250,15.5,'petrol',1835,2,null,'$290,000'],
['2006','SL 63 AMG',6208,8,386,630,'7-speed automatic','RWD',4.6,250,16.0,'premium unleaded',1870,2,null,'$400,000'],
['2009','SL 350',3498,6,200,350,'7-speed automatic','RWD',6.5,250,12.5,'petrol',1765,2,null,'$225,000'],
['2012','SL 350',3498,6,225,400,'7-speed automatic','RWD',5.9,250,9.5,'petrol',1810,2,null,'$235,000'],
['2012','SL 500',4663,8,300,600,'7-speed automatic','RWD',5.0,250,13.0,'petrol',1875,2,null,'$310,000'],
['2012','SL 63 AMG',5461,8,430,900,'7-speed automatic','RWD',4.3,250,14.0,'premium unleaded',1890,2,null,'$430,000'],
['2016','SL 400',2996,6,245,480,'9-speed automatic','RWD',4.9,250,10.5,'petrol',1795,2,null,'$240,000'],
['2016','SL 500',4663,8,300,600,'9-speed automatic','RWD',4.8,250,12.0,'petrol',1870,2,null,'$310,000'],
['2021','SL 55 AMG',3982,8,430,700,'9-speed automatic','AWD',3.7,300,13.0,'premium unleaded',1950,2,null,'$380,000'],
['2022','SL 43',1991,4,280,480,'9-speed automatic','RWD',4.9,275,9.0,'petrol',1870,2,null,'$210,000'],
['2022','SL 55 AMG',3982,8,430,700,'9-speed automatic','AWD',3.7,300,13.0,'premium unleaded',1950,2,null,'$385,000'],
['2022','SL 63 AMG',3982,8,470,900,'9-speed automatic','AWD',3.6,300,14.0,'premium unleaded',1985,2,null,'$430,000'],
['2023','SL 43',1991,4,280,480,'9-speed automatic','RWD',4.9,275,9.0,'petrol',1870,2,null,'$215,000'],
['2023','SL 55 AMG',3982,8,430,700,'9-speed automatic','AWD',3.7,300,13.0,'premium unleaded',1950,2,null,'$390,000'],
['2024','SL 43',1991,4,280,480,'9-speed automatic','RWD',4.9,275,9.0,'petrol',1870,2,null,'$220,000'],
['2025','SL 55 AMG',3982,8,430,700,'9-speed automatic','AWD',3.7,300,13.0,'premium unleaded',1950,2,null,'$395,000'],
['2026','SL 55 AMG',3982,8,430,700,'9-speed automatic','AWD',3.7,300,13.0,'premium unleaded',1950,2,null,'$400,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Mercedes-Benz|sl|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr,drivetrain:dr}));

// ── Mercedes-Benz G-Class (2000-2026) ──
[['2000','G 320',3199,6,158,300,'4-speed automatic','AWD',11.0,175,15.0,'petrol',2230,5,null,'$165,000'],
['2002','G 500',4966,8,215,450,'5-speed automatic','AWD',9.2,180,18.5,'petrol',2370,5,null,'$220,000'],
['2004','G 55 AMG',5439,8,295,570,'5-speed automatic','AWD',6.5,210,20.0,'premium unleaded',2440,5,null,'$320,000'],
['2007','G 500',4966,8,215,450,'5-speed automatic','AWD',9.2,180,18.5,'petrol',2370,5,null,'$225,000'],
['2008','G 55 AMG',5439,8,350,700,'5-speed automatic','AWD',5.7,210,20.0,'premium unleaded',2440,5,null,'$360,000'],
['2013','G 350d',2987,6,155,500,'7-speed automatic','AWD',11.5,180,11.0,'diesel',2360,5,null,'$195,000'],
['2013','G 500',5461,8,285,530,'7-speed automatic','AWD',6.1,210,17.5,'petrol',2385,5,null,'$270,000'],
['2013','G 63 AMG',5461,8,400,760,'7-speed automatic','AWD',5.4,230,20.0,'premium unleaded',2415,5,null,'$390,000'],
['2015','G 500',5461,8,285,530,'7-speed automatic','AWD',6.1,210,17.5,'petrol',2385,5,null,'$275,000'],
['2018','G 350d',2925,6,210,500,'9-speed automatic','AWD',9.0,210,10.5,'diesel',2340,5,null,'$215,000'],
['2018','G 500',3982,8,310,610,'9-speed automatic','AWD',5.6,220,16.0,'petrol',2390,5,null,'$285,000'],
['2018','G 63 AMG',3982,8,430,700,'9-speed automatic','AWD',4.5,240,20.0,'premium unleaded',2510,5,null,'$450,000'],
['2020','G 350d',2925,6,210,500,'9-speed automatic','AWD',9.0,210,10.5,'diesel',2340,5,null,'$220,000'],
['2020','G 500',3982,8,310,610,'9-speed automatic','AWD',5.6,220,16.0,'petrol',2390,5,null,'$290,000'],
['2020','G 63 AMG',3982,8,430,700,'9-speed automatic','AWD',4.5,240,20.0,'premium unleaded',2510,5,null,'$455,000'],
['2021','G 63 AMG',3982,8,430,700,'9-speed automatic','AWD',4.5,240,20.0,'premium unleaded',2510,5,null,'$460,000'],
['2022','G 500',3982,8,310,610,'9-speed automatic','AWD',5.6,220,16.0,'petrol',2390,5,null,'$295,000'],
['2022','G 63 AMG',3982,8,430,700,'9-speed automatic','AWD',4.5,240,20.0,'premium unleaded',2510,5,null,'$465,000'],
['2023','G 500',3982,8,310,610,'9-speed automatic','AWD',5.6,220,16.0,'petrol',2390,5,null,'$300,000'],
['2023','G 63 AMG',3982,8,430,700,'9-speed automatic','AWD',4.5,240,20.0,'premium unleaded',2510,5,null,'$470,000'],
['2024','G 580 EQ',null,0,432,883,'2-speed','AWD',4.7,180,null,'electric',3085,5,null,'$450,000'],
['2024','G 500',3982,8,310,610,'9-speed automatic','AWD',5.6,220,16.0,'petrol',2390,5,null,'$305,000'],
['2024','G 63 AMG',3982,8,430,700,'9-speed automatic','AWD',4.5,240,20.0,'premium unleaded',2510,5,null,'$475,000'],
['2025','G 500',3982,8,310,610,'9-speed automatic','AWD',5.6,220,16.0,'petrol',2390,5,null,'$310,000'],
['2025','G 63 AMG',3982,8,430,700,'9-speed automatic','AWD',4.5,240,20.0,'premium unleaded',2510,5,null,'$480,000'],
['2026','G 500',3982,8,310,610,'9-speed automatic','AWD',5.6,220,16.0,'petrol',2390,5,null,'$315,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>{const s={engine:ft==='electric'?'Electric':disp?(disp/1000).toFixed(1):'',cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fuelType:ft,weight:wt,seats,price:pr,drivetrain:'AWD'};if(disp)s.displacement=disp;if(fc)s.fc=fc;add(`Mercedes-Benz|g-class|${yr}|${tr}`,s);});
add('Mercedes-Benz|g-class|2024|G 580 EQ',{engine:'Quad Electric Motor',battery:'116 kWh',fuelType:'electric',power:432,torque:883,transmission:'2-speed',acceleration:4.7,range:473,weight:3085,seats:5,price:'$450,000',drivetrain:'AWD'});

// ── Mercedes-Benz AMG GT (2015-2026) ──
[['2015','AMG GT',3982,8,340,600,'7-speed DCT','RWD',4.0,304,11.5,'premium unleaded',1540,2,null,'$250,000'],
['2015','AMG GT S',3982,8,375,650,'7-speed DCT','RWD',3.8,310,11.5,'premium unleaded',1555,2,null,'$310,000'],
['2016','AMG GT',3982,8,340,600,'7-speed DCT','RWD',4.0,304,11.5,'premium unleaded',1540,2,null,'$255,000'],
['2016','AMG GT R',3982,8,430,700,'7-speed DCT','RWD',3.6,318,11.5,'premium unleaded',1555,2,null,'$390,000'],
['2018','AMG GT C',3982,8,410,680,'7-speed DCT','RWD',3.7,316,12.0,'premium unleaded',1560,2,null,'$360,000'],
['2018','AMG GT 63 S',3982,8,470,900,'9-speed automatic','AWD',3.2,315,13.0,'premium unleaded',2045,4,null,'$450,000'],
['2019','AMG GT Black Series',3982,8,522,800,'7-speed DCT','RWD',3.2,325,15.0,'premium unleaded',1530,2,null,'$800,000'],
['2020','AMG GT R Pro',3982,8,430,700,'7-speed DCT','RWD',3.6,318,11.5,'premium unleaded',1555,2,null,'$500,000'],
['2020','AMG GT 63 S',3982,8,470,900,'9-speed automatic','AWD',3.2,315,13.0,'premium unleaded',2045,4,null,'$455,000'],
['2021','AMG GT Black Series',3982,8,522,800,'7-speed DCT','RWD',3.2,325,15.0,'premium unleaded',1530,2,null,'$820,000'],
['2022','AMG GT 63 S E Performance',3982,8,620,1000,'9-speed automatic','AWD',2.9,316,3.2,'plug-in hybrid',2320,4,null,'$650,000'],
['2023','AMG GT 43',1991,4,320,480,'9-speed automatic','AWD',4.6,270,9.0,'petrol',1995,4,null,'$190,000'],
['2023','AMG GT 55',2999,6,350,500,'9-speed automatic','AWD',4.1,290,10.0,'petrol',2035,4,null,'$250,000'],
['2023','AMG GT 63',3982,8,430,800,'9-speed automatic','AWD',3.2,316,12.5,'premium unleaded',2085,4,null,'$370,000'],
['2024','AMG GT 43',1991,4,320,480,'9-speed automatic','AWD',4.6,270,9.0,'petrol',1995,4,null,'$195,000'],
['2024','AMG GT 63',3982,8,430,800,'9-speed automatic','AWD',3.2,316,12.5,'premium unleaded',2085,4,null,'$375,000'],
['2025','AMG GT 43',1991,4,320,480,'9-speed automatic','AWD',4.6,270,9.0,'petrol',1995,4,null,'$200,000'],
['2025','AMG GT 63',3982,8,430,800,'9-speed automatic','AWD',3.2,316,12.5,'premium unleaded',2085,4,null,'$380,000'],
['2026','AMG GT 63',3982,8,430,800,'9-speed automatic','AWD',3.2,316,12.5,'premium unleaded',2085,4,null,'$385,000']
].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Mercedes-Benz|amg gt|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)}`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,price:pr,drivetrain:dr}));

// ── Mercedes-Benz GLB (2019-2026) ──
['2019','2020','2021','2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Mercedes-Benz|glb|${yr}|GLB 200`,{engine:'1.3 M282',displacement:1332,cylinders:4,power:120,torque:250,transmission:'7-speed DCT',acceleration:9.0,topSpeed:200,fc:7.0,fuelType:'petrol',weight:1620,seats:7,cargo:570,price:'$58,900',drivetrain:'FWD'});
  add(`Mercedes-Benz|glb|${yr}|GLB 250 4MATIC`,{engine:'2.0 M260',displacement:1991,cylinders:4,power:165,torque:350,transmission:'8-speed DCT',acceleration:6.8,topSpeed:217,fc:8.0,fuelType:'petrol',weight:1715,seats:7,cargo:570,price:'$72,900',drivetrain:'AWD'});
  add(`Mercedes-Benz|glb|${yr}|AMG GLB 35`,{engine:'2.0 M260 AMG',displacement:1991,cylinders:4,power:225,torque:400,transmission:'8-speed DCT',acceleration:5.2,topSpeed:235,fc:9.0,fuelType:'petrol',weight:1785,seats:7,cargo:570,price:'$90,900',drivetrain:'AWD'});
});

// ── Mercedes-Benz EQA (2021-2026) ──
['2021','2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Mercedes-Benz|eqa|${yr}|EQA 250`,{engine:'Electric Motor',battery:'66.5 kWh',fuelType:'electric',power:140,torque:385,transmission:'Single-speed',acceleration:8.9,range:426,weight:2040,seats:5,cargo:340,price:'$76,900',drivetrain:'FWD'});
  add(`Mercedes-Benz|eqa|${yr}|EQA 350 4MATIC`,{engine:'Dual Electric Motor',battery:'66.5 kWh',fuelType:'electric',power:215,torque:520,transmission:'Single-speed',acceleration:6.0,range:362,weight:2125,seats:5,cargo:340,price:'$92,900',drivetrain:'AWD'});
});

// ── Mercedes-Benz EQB (2021-2026) ──
['2021','2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Mercedes-Benz|eqb|${yr}|EQB 250`,{engine:'Electric Motor',battery:'66.5 kWh',fuelType:'electric',power:140,torque:385,transmission:'Single-speed',acceleration:8.9,range:419,weight:2105,seats:7,cargo:495,price:'$82,900',drivetrain:'FWD'});
  add(`Mercedes-Benz|eqb|${yr}|EQB 350 4MATIC`,{engine:'Dual Electric Motor',battery:'66.5 kWh',fuelType:'electric',power:215,torque:520,transmission:'Single-speed',acceleration:6.2,range:388,weight:2210,seats:7,cargo:495,price:'$99,900',drivetrain:'AWD'});
});

// ── Mercedes-Benz EQC (2019-2024) ──
['2019','2020','2021','2022','2023','2024'].forEach(yr=>{
  add(`Mercedes-Benz|eqc|${yr}|EQC 400 4MATIC`,{engine:'Dual Electric Motor',battery:'80 kWh',fuelType:'electric',power:300,torque:760,transmission:'Single-speed',acceleration:5.1,range:412,weight:2495,seats:5,cargo:500,price:'$130,000',drivetrain:'AWD'});
});

// ── Mercedes-Benz EQE (2022-2026) ──
['2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Mercedes-Benz|eqe|${yr}|EQE 350`,{engine:'Electric Motor',battery:'90.6 kWh',fuelType:'electric',power:215,torque:565,transmission:'Single-speed',acceleration:6.4,range:654,weight:2520,seats:5,cargo:430,price:'$140,000',drivetrain:'RWD'});
  add(`Mercedes-Benz|eqe|${yr}|EQE 500 4MATIC`,{engine:'Dual Electric Motor',battery:'90.6 kWh',fuelType:'electric',power:300,torque:858,transmission:'Single-speed',acceleration:4.7,range:581,weight:2675,seats:5,cargo:430,price:'$170,000',drivetrain:'AWD'});
  add(`Mercedes-Benz|eqe|${yr}|AMG EQE 43`,{engine:'Dual Electric Motor',battery:'90.6 kWh',fuelType:'electric',power:350,torque:858,transmission:'Single-speed',acceleration:4.2,range:514,weight:2720,seats:5,cargo:430,price:'$200,000',drivetrain:'AWD'});
});

// ── Mercedes-Benz EQS (2021-2026) ──
['2021','2022','2023','2024','2025','2026'].forEach(yr=>{
  add(`Mercedes-Benz|eqs|${yr}|EQS 450`,{engine:'Electric Motor',battery:'107.8 kWh',fuelType:'electric',power:245,torque:568,transmission:'Single-speed',acceleration:6.2,range:784,weight:2480,seats:5,cargo:610,price:'$220,000',drivetrain:'RWD'});
  add(`Mercedes-Benz|eqs|${yr}|EQS 580 4MATIC`,{engine:'Dual Electric Motor',battery:'107.8 kWh',fuelType:'electric',power:385,torque:858,transmission:'Single-speed',acceleration:4.3,range:725,weight:2640,seats:5,cargo:610,price:'$280,000',drivetrain:'AWD'});
  add(`Mercedes-Benz|eqs|${yr}|AMG EQS 53`,{engine:'Dual Electric Motor',battery:'107.8 kWh',fuelType:'electric',power:484,torque:950,transmission:'Single-speed',acceleration:3.8,range:586,weight:2750,seats:5,cargo:610,price:'$380,000',drivetrain:'AWD'});
});

// ── Mercedes-Benz C 63 AMG / E 63 AMG / A 45 AMG (filling AMG gaps) ──
// C 63 AMG
[['2007','C 63 AMG',6208,8,336,600,'7-speed automatic','RWD',4.5,250,15.0,'premium unleaded',1670,5,475],['2008','C 63 AMG',6208,8,336,600,'7-speed automatic','RWD',4.5,250,15.0,'premium unleaded',1670,5,475],['2012','C 63 AMG',6208,8,336,600,'7-speed automatic','RWD',4.3,250,14.5,'premium unleaded',1670,5,475],['2013','C 63 AMG Edition 507',6208,8,375,620,'7-speed automatic','RWD',4.1,280,14.5,'premium unleaded',1670,5,475],['2015','C 63 AMG',3982,8,350,700,'7-speed DCT','RWD',4.0,250,12.5,'premium unleaded',1700,5,475],['2015','C 63 AMG S',3982,8,375,700,'7-speed DCT','RWD',3.9,290,12.5,'premium unleaded',1700,5,475],['2018','C 63 AMG',3982,8,350,700,'9-speed automatic','RWD',4.0,250,12.5,'premium unleaded',1700,5,475],['2019','C 63 AMG S',3982,8,375,700,'9-speed automatic','RWD',3.9,290,12.5,'premium unleaded',1700,5,475],['2022','C 63 AMG',1979,4,350,545,'9-speed automatic','AWD',3.4,280,3.0,'plug-in hybrid',1950,5,455],['2023','C 63 AMG',1979,4,350,545,'9-speed automatic','AWD',3.4,280,3.0,'plug-in hybrid',1950,5,455],['2024','C 63 AMG',1979,4,350,545,'9-speed automatic','AWD',3.4,280,3.0,'plug-in hybrid',1950,5,455],['2025','C 63 AMG',1979,4,350,545,'9-speed automatic','AWD',3.4,280,3.0,'plug-in hybrid',1950,5,455],['2026','C 63 AMG',1979,4,350,545,'9-speed automatic','AWD',3.4,280,3.0,'plug-in hybrid',1950,5,455]].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,seats,cargo])=>add(`Mercedes-Benz|c-class|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} AMG`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:fc===3.0?'plug-in hybrid':'premium unleaded',weight:1700,seats,cargo,price:'$160,000',drivetrain:dr}));
// E 63 AMG
[['2007','E 63 AMG',6208,8,386,630,'7-speed automatic','RWD',4.5,250,16.0,'premium unleaded',1785,5,540,'$200,000'],['2009','E 63 AMG',5461,8,386,630,'7-speed automatic','RWD',4.3,250,14.5,'premium unleaded',1785,5,540,'$200,000'],['2014','E 63 AMG S',5461,8,430,800,'7-speed automatic','AWD',3.6,300,14.5,'premium unleaded',1870,5,540,'$250,000'],['2017','E 63 AMG S',3982,8,450,850,'9-speed automatic','AWD',3.4,300,13.0,'premium unleaded',1885,5,540,'$260,000'],['2020','E 63 AMG S',3982,8,450,850,'9-speed automatic','AWD',3.4,300,13.0,'premium unleaded',1885,5,540,'$265,000'],['2021','E 63 AMG S',3982,8,450,850,'9-speed automatic','AWD',3.4,300,13.0,'premium unleaded',1885,5,540,'$270,000'],['2023','E 63 AMG',3982,8,450,850,'9-speed automatic','AWD',3.4,300,13.0,'premium unleaded',1885,5,540,'$275,000']].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Mercedes-Benz|e-class|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} AMG`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr,drivetrain:dr}));
// A 45 AMG / A 45 S AMG
[['2013','A 45 AMG',1991,4,265,450,'7-speed DCT','AWD',4.6,250,8.5,'premium unleaded',1395,5,341,'$60,000'],['2016','A 45 AMG',1991,4,280,475,'7-speed DCT','AWD',4.2,250,8.5,'premium unleaded',1395,5,341,'$65,000'],['2018','A 45 AMG',1991,4,280,475,'7-speed DCT','AWD',4.2,250,8.5,'premium unleaded',1395,5,341,'$68,000'],['2019','A 45 AMG S',1991,4,310,500,'8-speed DCT','AWD',3.9,270,9.0,'premium unleaded',1465,5,341,'$82,990'],['2020','A 45 AMG S',1991,4,310,500,'8-speed DCT','AWD',3.9,270,9.0,'premium unleaded',1465,5,341,'$85,900'],['2021','A 45 AMG S',1991,4,310,500,'8-speed DCT','AWD',3.9,270,9.0,'premium unleaded',1465,5,341,'$87,900'],['2022','A 45 AMG S',1991,4,310,500,'8-speed DCT','AWD',3.9,270,9.0,'premium unleaded',1465,5,341,'$89,900'],['2023','A 45 AMG S',1991,4,310,500,'8-speed DCT','AWD',3.9,270,9.0,'premium unleaded',1465,5,341,'$91,900'],['2024','A 45 AMG S',1991,4,310,500,'8-speed DCT','AWD',3.9,270,9.0,'premium unleaded',1465,5,341,'$93,900'],['2025','A 45 AMG S',1991,4,310,500,'8-speed DCT','AWD',3.9,270,9.0,'premium unleaded',1465,5,341,'$95,900'],['2026','A 45 AMG S',1991,4,310,500,'8-speed DCT','AWD',3.9,270,9.0,'premium unleaded',1465,5,341,'$97,900']].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Mercedes-Benz|a-class|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} AMG`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr,drivetrain:dr}));
// GLC 63 AMG
[['2016','GLC 63 AMG S',3982,8,375,700,'9-speed automatic','AWD',3.8,250,13.0,'premium unleaded',2100,5,580,'$150,000'],['2018','GLC 63 AMG',3982,8,350,700,'9-speed automatic','AWD',4.0,250,12.5,'premium unleaded',2100,5,580,'$145,000'],['2018','GLC 63 AMG S',3982,8,375,700,'9-speed automatic','AWD',3.8,265,13.0,'premium unleaded',2100,5,580,'$155,000'],['2020','GLC 63 AMG S',3982,8,375,700,'9-speed automatic','AWD',3.8,265,13.0,'premium unleaded',2100,5,580,'$158,000'],['2022','GLC 63 AMG',1979,4,350,545,'9-speed automatic','AWD',3.5,250,3.0,'plug-in hybrid',2280,5,600,'$175,000'],['2023','GLC 63 AMG',1979,4,350,545,'9-speed automatic','AWD',3.5,250,3.0,'plug-in hybrid',2280,5,600,'$178,000'],['2024','GLC 63 AMG',1979,4,350,545,'9-speed automatic','AWD',3.5,250,3.0,'plug-in hybrid',2280,5,600,'$180,000'],['2025','GLC 63 AMG',1979,4,350,545,'9-speed automatic','AWD',3.5,250,3.0,'plug-in hybrid',2280,5,600,'$182,000']].forEach(([yr,tr,disp,cyl,pw,tq,tx,dr,acc,ts,fc,ft,wt,seats,cargo,pr])=>add(`Mercedes-Benz|glc|${yr}|${tr}`,{engine:`${(disp/1000).toFixed(1)} AMG`,displacement:disp,cylinders:cyl,power:pw,torque:tq,transmission:tx,acceleration:acc,topSpeed:ts,fc,fuelType:ft,weight:wt,seats,cargo,price:pr,drivetrain:'AWD'}));

fs.writeFileSync('src/data/supplement48.json', JSON.stringify({specs},null,2));
console.log('supplement48.json written — ' + Object.keys(specs).length + ' entries');

