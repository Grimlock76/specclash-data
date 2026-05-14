// gen77.cjs — Maserati + Pontiac → supplement77.json
const fs = require('fs');
const makes = JSON.parse(fs.readFileSync('src/data/makes.json','utf8'));

function maseratiSpec(model, year, trim) {
  const y = parseInt(year);
  switch (model) {
    case 'Ghibli Classic':
      if (trim === '4.9 SS') return {en:'4.9L DOHC V8',di:'4930cc',cy:'8',hp:'330',tq:'441 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.0',qm:'14.2',ts:'285 km/h',fc:'21.0',fh:'14.5',fx:'17.5',ft:'Petrol',wt:'1350 kg',se:'2+2',ca:'200 L',pr:'A$28,000',pc:'A$350,000–900,000'};
      return {en:'4.7L DOHC V8',di:'4719cc',cy:'8',hp:'310',tq:'422 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.3',qm:'14.5',ts:'280 km/h',fc:'21.0',fh:'14.5',fx:'17.5',ft:'Petrol',wt:'1310 kg',se:'2+2',ca:'200 L',pr:'A$22,000',pc:'A$280,000–750,000'};
    case 'Bora':
      if (trim === '4.9') return {en:'4.9L DOHC V8',di:'4930cc',cy:'8',hp:'330',tq:'441 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.5',qm:'14.8',ts:'285 km/h',fc:'21.5',fh:'15.0',fx:'18.0',ft:'Petrol',wt:'1550 kg',se:'2+2',ca:'200 L',pr:'A$29,000',pc:'A$180,000–450,000'};
      return {en:'4.7L DOHC V8',di:'4719cc',cy:'8',hp:'310',tq:'422 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.8',qm:'15.0',ts:'280 km/h',fc:'21.0',fh:'14.5',fx:'17.5',ft:'Petrol',wt:'1520 kg',se:'2+2',ca:'200 L',pr:'A$25,000',pc:'A$150,000–380,000'};
    case 'Merak':
      if (trim === 'SS') return {en:'3.0L DOHC V6',di:'2965cc',cy:'6',hp:'220',tq:'265 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.8',qm:'15.2',ts:'248 km/h',fc:'18.5',fh:'13.0',fx:'15.5',ft:'Petrol',wt:'1260 kg',se:'2+2',ca:'130 L',pr:'A$18,000',pc:'A$80,000–220,000'};
      if (trim === '2000GT') return {en:'2.0L DOHC inline-4',di:'1999cc',cy:'4',hp:'172',tq:'210 Nm',tx:'5-speed manual',dr:'RWD',z1:'8.0',qm:'16.2',ts:'220 km/h',fc:'16.0',fh:'11.5',fx:'13.5',ft:'Petrol',wt:'1170 kg',se:'2+2',ca:'130 L',pr:'A$14,000',pc:'A$60,000–160,000'};
      return {en:'3.0L DOHC V6',di:'2965cc',cy:'6',hp:'190',tq:'240 Nm',tx:'5-speed manual',dr:'RWD',z1:'7.5',qm:'15.8',ts:'230 km/h',fc:'18.0',fh:'12.5',fx:'15.0',ft:'Petrol',wt:'1210 kg',se:'2+2',ca:'130 L',pr:'A$15,000',pc:'A$70,000–190,000'};
    case 'Khamsin':
      return {en:'4.9L DOHC V8',di:'4930cc',cy:'8',hp:'330',tq:'461 Nm',tx:'5-speed manual',dr:'RWD',z1:'7.0',qm:'15.3',ts:'265 km/h',fc:'21.0',fh:'14.5',fx:'17.5',ft:'Petrol',wt:'1750 kg',se:'2+2',ca:'200 L',pr:'A$55,000',pc:'A$120,000–300,000'};
    case 'Quattroporte III':
      if (trim === 'Royale') return {en:'4.9L DOHC V8',di:'4930cc',cy:'8',hp:'280',tq:'380 Nm',tx:'3-speed automatic',dr:'RWD',z1:'9.0',qm:'17.0',ts:'225 km/h',fc:'22.0',fh:'14.5',fx:'18.0',ft:'Petrol',wt:'1820 kg',se:'4',ca:'500 L',pr:'A$85,000',pc:'A$40,000–130,000'};
      return {en:'4.2L DOHC V8',di:'4136cc',cy:'8',hp:'255',tq:'340 Nm',tx:'5-speed manual',dr:'RWD',z1:'9.5',qm:'17.2',ts:'218 km/h',fc:'21.5',fh:'14.0',fx:'17.5',ft:'Petrol',wt:'1760 kg',se:'4',ca:'500 L',pr:'A$72,000',pc:'A$30,000–100,000'};
    case 'Biturbo':
      if (trim === '228' || trim === '2.24v') return {en:'2.8L twin-turbo V6',di:'2790cc',cy:'6',hp:'250',tq:'368 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.5',qm:'14.8',ts:'245 km/h',fc:'16.5',fh:'11.5',fx:'13.7',ft:'Petrol',wt:'1380 kg',se:'2+2',ca:'200 L',pr:'A$95,000',pc:'A$8,000–28,000'};
      if (trim === 'S' || trim === 'Si' || trim === 'Racing') return {en:'2.0L twin-turbo V6',di:'1996cc',cy:'6',hp:'185',tq:'265 Nm',tx:'5-speed manual',dr:'RWD',z1:'7.5',qm:'15.8',ts:'225 km/h',fc:'16.0',fh:'11.0',fx:'13.2',ft:'Petrol',wt:'1280 kg',se:'2+2',ca:'200 L',pr:'A$65,000',pc:'A$5,000–18,000'};
      return {en:'2.0L twin-turbo V6',di:'1996cc',cy:'6',hp:'180',tq:'250 Nm',tx:'5-speed manual',dr:'RWD',z1:'8.0',qm:'16.2',ts:'220 km/h',fc:'15.5',fh:'11.0',fx:'13.0',ft:'Petrol',wt:'1260 kg',se:'2+2',ca:'200 L',pr:'A$55,000',pc:'A$4,000–15,000'};
    case '3200GT':
      if (trim === 'Assetto Corsa') return {en:'3.2L twin-turbo V8',di:'3217cc',cy:'8',hp:'370',tq:'451 Nm',tx:'6-speed manual',dr:'RWD',z1:'5.1',qm:'13.4',ts:'285 km/h',fc:'16.0',fh:'11.0',fx:'13.2',ft:'Petrol',wt:'1580 kg',se:'2+2',ca:'205 L',pr:'A$235,000',pc:'A$35,000–90,000'};
      return {en:'3.2L twin-turbo V8',di:'3217cc',cy:'8',hp:'370',tq:'451 Nm',tx:'6-speed manual',dr:'RWD',z1:'5.2',qm:'13.5',ts:'285 km/h',fc:'16.0',fh:'11.0',fx:'13.2',ft:'Petrol',wt:'1580 kg',se:'2+2',ca:'205 L',pr:'A$205,000',pc:'A$28,000–75,000'};
    case 'Coupe':
      if (trim === 'GranSport') return {en:'4.2L V8',di:'4244cc',cy:'8',hp:'400',tq:'451 Nm',tx:'6-speed Cambiocorsa',dr:'RWD',z1:'5.0',qm:'13.2',ts:'295 km/h',fc:'17.0',fh:'11.5',fx:'14.0',ft:'Petrol',wt:'1780 kg',se:'2+2',ca:'205 L',pr:'A$285,000',pc:'A$35,000–90,000'};
      return {en:'4.2L V8',di:'4244cc',cy:'8',hp:'390',tq:'451 Nm',tx:'6-speed Cambiocorsa',dr:'RWD',z1:'5.1',qm:'13.4',ts:'290 km/h',fc:'17.0',fh:'11.5',fx:'14.0',ft:'Petrol',wt:'1780 kg',se:'2+2',ca:'205 L',pr:'A$252,000',pc:'A$30,000–80,000'};
    case 'Spyder':
      if (trim === 'GranSport') return {en:'4.2L V8',di:'4244cc',cy:'8',hp:'400',tq:'451 Nm',tx:'6-speed Cambiocorsa',dr:'RWD',z1:'5.0',qm:'13.2',ts:'292 km/h',fc:'17.5',fh:'12.0',fx:'14.5',ft:'Petrol',wt:'1870 kg',se:'2+2',ca:'110 L',pr:'A$295,000',pc:'A$38,000–95,000'};
      return {en:'4.2L V8',di:'4244cc',cy:'8',hp:'390',tq:'451 Nm',tx:'6-speed Cambiocorsa',dr:'RWD',z1:'5.3',qm:'13.6',ts:'285 km/h',fc:'17.5',fh:'12.0',fx:'14.5',ft:'Petrol',wt:'1870 kg',se:'2+2',ca:'110 L',pr:'A$265,000',pc:'A$32,000–82,000'};
    case 'Quattroporte V':
      if (trim === 'GTS') return {en:'4.7L V8',di:'4691cc',cy:'8',hp:'440',tq:'490 Nm',tx:'6-speed MC-Shift',dr:'RWD',z1:'5.1',qm:'13.4',ts:'285 km/h',fc:'17.0',fh:'11.5',fx:'14.0',ft:'Petrol',wt:'1930 kg',se:'4',ca:'480 L',pr:'A$295,000',pc:'A$60,000–140,000'};
      if (trim === 'Sport GT S') return {en:'4.2L V8',di:'4244cc',cy:'8',hp:'400',tq:'460 Nm',tx:'6-speed MC-Shift',dr:'RWD',z1:'5.2',qm:'13.5',ts:'275 km/h',fc:'17.0',fh:'11.5',fx:'14.0',ft:'Petrol',wt:'1930 kg',se:'4',ca:'480 L',pr:'A$265,000',pc:'A$50,000–120,000'};
      return {en:'4.2L V8',di:'4244cc',cy:'8',hp:'400',tq:'451 Nm',tx:'6-speed Duoselect',dr:'RWD',z1:'5.2',qm:'13.5',ts:'275 km/h',fc:'17.5',fh:'12.0',fx:'14.5',ft:'Petrol',wt:'1930 kg',se:'4',ca:'480 L',pr:'A$245,000',pc:'A$45,000–110,000'};
    case 'GranTurismo':
      if (y <= 2012) {
        if (trim === 'S' || trim === 'S Automatic') return {en:'4.7L V8',di:'4691cc',cy:'8',hp:'440',tq:'490 Nm',tx:'6-speed MC-Shift',dr:'RWD',z1:'4.9',qm:'13.2',ts:'295 km/h',fc:'16.5',fh:'11.5',fx:'13.7',ft:'Petrol',wt:'1880 kg',se:'2+2',ca:'260 L',pr:'A$285,000',pc:'A$85,000–165,000'};
        return {en:'4.2L V8',di:'4244cc',cy:'8',hp:'405',tq:'460 Nm',tx:'6-speed MC-Shift',dr:'RWD',z1:'5.2',qm:'13.5',ts:'285 km/h',fc:'17.0',fh:'11.5',fx:'14.0',ft:'Petrol',wt:'1880 kg',se:'2+2',ca:'260 L',pr:'A$245,000',pc:'A$75,000–145,000'};
      }
      if (trim === 'MC Stradale' || trim === 'Convertible') return {en:'4.7L V8',di:'4691cc',cy:'8',hp:'460',tq:'520 Nm',tx:'6-speed MC-Shift',dr:'RWD',z1:'4.7',qm:'13.0',ts:'303 km/h',fc:'16.5',fh:'11.5',fx:'13.7',ft:'Petrol',wt:trim==='Convertible'?'1980 kg':'1880 kg',se:'2+2',ca:'260 L',pr:'A$345,000',pc:'A$130,000–220,000'};
      return {en:'4.7L V8',di:'4691cc',cy:'8',hp:'460',tq:'520 Nm',tx:'6-speed MC-Shift',dr:'RWD',z1:'4.7',qm:'13.0',ts:'301 km/h',fc:'16.5',fh:'11.5',fx:'13.7',ft:'Petrol',wt:'1880 kg',se:'2+2',ca:'260 L',pr:'A$315,000',pc:'A$120,000–200,000'};
    case 'GranCabrio':
      if (trim === 'MC') return {en:'4.7L V8',di:'4691cc',cy:'8',hp:'460',tq:'520 Nm',tx:'6-speed MC-Shift',dr:'RWD',z1:'4.9',qm:'13.2',ts:'300 km/h',fc:'17.0',fh:'12.0',fx:'14.2',ft:'Petrol',wt:'2050 kg',se:'2+2',ca:'172 L',pr:'A$380,000',pc:'A$145,000–235,000'};
      return {en:'4.7L V8',di:'4691cc',cy:'8',hp:'440',tq:'490 Nm',tx:'6-speed MC-Shift',dr:'RWD',z1:'5.0',qm:'13.3',ts:'295 km/h',fc:'17.0',fh:'12.0',fx:'14.2',ft:'Petrol',wt:'2050 kg',se:'2+2',ca:'172 L',pr:'A$325,000',pc:'A$120,000–200,000'};
    case 'Ghibli':
      if (trim === 'Trofeo') return {en:'3.8L twin-turbo V8',di:'3799cc',cy:'8',hp:'580',tq:'730 Nm',tx:'8-speed automatic',dr:'RWD',z1:'4.3',qm:'12.4',ts:'325 km/h',fc:'13.0',fh:'9.5',fx:'10.9',ft:'Petrol',wt:'1985 kg',se:'4',ca:'500 L',pr:'A$295,000',pc:'A$220,000–320,000'};
      if (trim === 'SQ4' || trim === 'Modena') return {en:'3.0L twin-turbo V6',di:'2979cc',cy:'6',hp:'430',tq:'580 Nm',tx:'8-speed automatic',dr:'AWD',z1:'4.7',qm:'13.1',ts:'286 km/h',fc:'11.5',fh:'8.5',fx:'9.8',ft:'Petrol',wt:'2010 kg',se:'4',ca:'500 L',pr:'A$235,000',pc:'A$170,000–245,000'};
      if (trim === 'S') return {en:'3.0L twin-turbo V6',di:'2979cc',cy:'6',hp:'410',tq:'550 Nm',tx:'8-speed automatic',dr:'RWD',z1:'4.9',qm:'13.2',ts:'286 km/h',fc:'11.0',fh:'8.2',fx:'9.4',ft:'Petrol',wt:'1965 kg',se:'4',ca:'500 L',pr:'A$215,000',pc:'A$150,000–220,000'};
      return {en:'3.0L twin-turbo V6',di:'2979cc',cy:'6',hp:'350',tq:'500 Nm',tx:'8-speed automatic',dr:'RWD',z1:'5.5',qm:'13.8',ts:'267 km/h',fc:'8.5',fh:'6.5',fx:'7.2',ft:'Diesel',wt:'1925 kg',se:'4',ca:'500 L',pr:'A$185,000',pc:'A$120,000–175,000'};
    case 'Quattroporte':
      if (trim === 'Trofeo') return {en:'3.8L twin-turbo V8',di:'3799cc',cy:'8',hp:'580',tq:'730 Nm',tx:'8-speed automatic',dr:'RWD',z1:'4.5',qm:'12.7',ts:'326 km/h',fc:'13.5',fh:'10.0',fx:'11.5',ft:'Petrol',wt:'2108 kg',se:'4',ca:'530 L',pr:'A$375,000',pc:'A$275,000–420,000'};
      if (trim === 'GTS' || trim === 'SQ4') return {en:'3.8L twin-turbo V8',di:'3799cc',cy:'8',hp:'530',tq:'710 Nm',tx:'8-speed automatic',dr:'AWD',z1:'4.7',qm:'13.0',ts:'310 km/h',fc:'13.5',fh:'10.0',fx:'11.5',ft:'Petrol',wt:'2108 kg',se:'4',ca:'530 L',pr:'A$325,000',pc:'A$235,000–360,000'};
      if (trim === 'S') return {en:'3.0L twin-turbo V6',di:'2979cc',cy:'6',hp:'410',tq:'550 Nm',tx:'8-speed automatic',dr:'RWD',z1:'5.1',qm:'13.4',ts:'286 km/h',fc:'12.0',fh:'9.0',fx:'10.2',ft:'Petrol',wt:'2048 kg',se:'4',ca:'530 L',pr:'A$265,000',pc:'A$185,000–280,000'};
      return {en:'3.0L twin-turbo V6',di:'2979cc',cy:'6',hp:'330',tq:'500 Nm',tx:'8-speed automatic',dr:'RWD',z1:'5.8',qm:'14.1',ts:'263 km/h',fc:'8.8',fh:'6.5',fx:'7.4',ft:'Diesel',wt:'2000 kg',se:'4',ca:'530 L',pr:'A$235,000',pc:'A$150,000–220,000'};
    case 'Levante':
      if (trim === 'Trofeo') return {en:'3.8L twin-turbo V8',di:'3799cc',cy:'8',hp:'580',tq:'730 Nm',tx:'8-speed automatic',dr:'AWD',z1:'4.1',qm:'12.3',ts:'300 km/h',fc:'14.0',fh:'10.5',fx:'11.9',ft:'Petrol',wt:'2205 kg',se:'5',ca:'580 L',pr:'A$345,000',pc:'A$255,000–380,000'};
      if (trim === 'GTS' || trim === 'Modena') return {en:'3.0L twin-turbo V6',di:'2979cc',cy:'6',hp:'430',tq:'580 Nm',tx:'8-speed automatic',dr:'AWD',z1:'5.0',qm:'13.3',ts:'264 km/h',fc:'12.0',fh:'9.0',fx:'10.2',ft:'Petrol',wt:'2205 kg',se:'5',ca:'580 L',pr:'A$255,000',pc:'A$180,000–270,000'};
      return {en:'3.0L twin-turbo V6',di:'2979cc',cy:'6',hp:'350',tq:'500 Nm',tx:'8-speed automatic',dr:'AWD',z1:'5.8',qm:'14.1',ts:'255 km/h',fc:'9.0',fh:'6.8',fx:'7.6',ft:'Diesel',wt:'2215 kg',se:'5',ca:'580 L',pr:'A$215,000',pc:'A$135,000–195,000'};
    case 'Grecale':
      if (trim === 'Trofeo') return {en:'3.0L twin-turbo V6',di:'2979cc',cy:'6',hp:'530',tq:'620 Nm',tx:'8-speed automatic',dr:'AWD',z1:'3.8',qm:'12.0',ts:'285 km/h',fc:'13.0',fh:'9.5',fx:'11.0',ft:'Petrol',wt:'1998 kg',se:'5',ca:'535 L',pr:'A$265,000',pc:'A$215,000+'};
      if (trim === 'Folgore') return {en:'Electric motor (dual)',di:'—',cy:'0',hp:'557',tq:'800 Nm',tx:'1-speed automatic',dr:'AWD',z1:'4.1',qm:'12.3',ts:'220 km/h',fc:'18.5 kWh/100km',fh:'17.0 kWh/100km',fx:'18.0 kWh/100km',ft:'Electric',wt:'2266 kg',se:'5',ca:'490 L',pr:'A$185,000',pc:'A$155,000+'};
      if (trim === 'Modena') return {en:'2.0L MHEV inline-4',di:'1998cc',cy:'4',hp:'330',tq:'450 Nm',tx:'8-speed automatic',dr:'AWD',z1:'5.3',qm:'13.6',ts:'240 km/h',fc:'9.5',fh:'7.2',fx:'8.1',ft:'Petrol',wt:'1860 kg',se:'5',ca:'535 L',pr:'A$145,000',pc:'A$115,000+'};
      return {en:'2.0L MHEV inline-4',di:'1998cc',cy:'4',hp:'300',tq:'450 Nm',tx:'8-speed automatic',dr:'AWD',z1:'5.6',qm:'13.9',ts:'231 km/h',fc:'9.0',fh:'6.8',fx:'7.6',ft:'Petrol',wt:'1840 kg',se:'5',ca:'535 L',pr:'A$125,000',pc:'A$99,000+'};
    case 'MC20':
      if (trim === 'Cielo') return {en:'3.0L twin-turbo V6 Nettuno',di:'2992cc',cy:'6',hp:'630',tq:'730 Nm',tx:'8-speed dual clutch',dr:'RWD',z1:'2.9',qm:'10.9',ts:'325 km/h',fc:'12.5',fh:'9.5',fx:'10.7',ft:'Petrol',wt:'1500 kg',se:'2',ca:'100 L',pr:'A$365,000',pc:'A$310,000+'};
      return {en:'3.0L twin-turbo V6 Nettuno',di:'2992cc',cy:'6',hp:'630',tq:'730 Nm',tx:'8-speed dual clutch',dr:'RWD',z1:'2.9',qm:'10.9',ts:'325 km/h',fc:'12.5',fh:'9.5',fx:'10.7',ft:'Petrol',wt:'1470 kg',se:'2',ca:'100 L',pr:'A$335,000',pc:'A$285,000+'};
    default:
      return {en:'3.0L twin-turbo V6',di:'2979cc',cy:'6',hp:'410',tq:'550 Nm',tx:'8-speed automatic',dr:'RWD',z1:'5.0',qm:'13.3',ts:'285 km/h',fc:'11.5',fh:'8.5',fx:'9.8',ft:'Petrol',wt:'1850 kg',se:'4',ca:'400 L',pr:'A$220,000',pc:'A$120,000–200,000'};
  }
}

function pontiacSpec(model, year, trim) {
  const y = parseInt(year);
  switch (model) {
    case 'Firebird': {
      if (y <= 1969) {
        if (trim === '400') return {en:'6.6L V8',di:'6556cc',cy:'8',hp:'335',tq:'576 Nm',tx:'4-speed manual',dr:'RWD',z1:'6.2',qm:'14.5',ts:'210 km/h',fc:'20.0',fh:'13.5',fx:'16.5',ft:'Petrol',wt:'1565 kg',se:'4',ca:'220 L',pr:'A$3,900',pc:'A$35,000–90,000'};
        return {en:'3.8L inline-6',di:'3769cc',cy:'6',hp:'215',tq:'346 Nm',tx:'3-speed manual',dr:'RWD',z1:'10.5',qm:'17.8',ts:'170 km/h',fc:'16.0',fh:'11.0',fx:'13.2',ft:'Petrol',wt:'1450 kg',se:'4',ca:'220 L',pr:'A$2,800',pc:'A$20,000–55,000'};
      }
      if (y <= 1981) {
        if (trim === 'Trans Am') return {en:'6.6L V8',di:'6556cc',cy:'8',hp:'220',tq:'488 Nm',tx:'4-speed manual',dr:'RWD',z1:'6.8',qm:'15.2',ts:'200 km/h',fc:'20.0',fh:'13.5',fx:'16.5',ft:'Petrol',wt:'1625 kg',se:'4',ca:'220 L',pr:'A$6,800',pc:'A$20,000–60,000'};
        if (trim === 'Formula') return {en:'6.6L V8',di:'6556cc',cy:'8',hp:'200',tq:'461 Nm',tx:'4-speed manual',dr:'RWD',z1:'7.5',qm:'15.8',ts:'195 km/h',fc:'19.5',fh:'13.0',fx:'16.0',ft:'Petrol',wt:'1580 kg',se:'4',ca:'220 L',pr:'A$5,200',pc:'A$15,000–45,000'};
        if (trim === 'Esprit') return {en:'5.7L V8',di:'5735cc',cy:'8',hp:'180',tq:'380 Nm',tx:'3-speed automatic',dr:'RWD',z1:'8.5',qm:'16.5',ts:'185 km/h',fc:'18.5',fh:'12.5',fx:'15.2',ft:'Petrol',wt:'1520 kg',se:'4',ca:'220 L',pr:'A$4,500',pc:'A$12,000–35,000'};
        return {en:'3.8L V6',di:'3769cc',cy:'6',hp:'110',tq:'278 Nm',tx:'3-speed automatic',dr:'RWD',z1:'12.0',qm:'18.8',ts:'165 km/h',fc:'16.5',fh:'11.0',fx:'13.5',ft:'Petrol',wt:'1450 kg',se:'4',ca:'220 L',pr:'A$3,800',pc:'A$8,000–25,000'};
      }
      if (y <= 1992) {
        if (trim === 'Trans Am GTA') return {en:'5.7L TPI V8',di:'5735cc',cy:'8',hp:'245',tq:'454 Nm',tx:'4-speed automatic',dr:'RWD',z1:'5.9',qm:'14.3',ts:'225 km/h',fc:'17.5',fh:'12.0',fx:'14.5',ft:'Petrol',wt:'1554 kg',se:'4',ca:'220 L',pr:'A$24,000',pc:'A$12,000–38,000'};
        if (trim === 'Trans Am') return {en:'5.0L TPI V8',di:'4999cc',cy:'8',hp:'215',tq:'386 Nm',tx:'5-speed manual',dr:'RWD',z1:'7.0',qm:'15.3',ts:'200 km/h',fc:'16.5',fh:'11.0',fx:'13.5',ft:'Petrol',wt:'1474 kg',se:'4',ca:'220 L',pr:'A$19,500',pc:'A$8,000–28,000'};
        if (trim === 'Formula') return {en:'5.0L V8',di:'4999cc',cy:'8',hp:'210',tq:'380 Nm',tx:'5-speed manual',dr:'RWD',z1:'7.5',qm:'15.8',ts:'196 km/h',fc:'16.0',fh:'11.0',fx:'13.2',ft:'Petrol',wt:'1460 kg',se:'4',ca:'220 L',pr:'A$16,000',pc:'A$6,000–22,000'};
        return {en:'2.8L V6',di:'2838cc',cy:'6',hp:'135',tq:'217 Nm',tx:'5-speed manual',dr:'RWD',z1:'10.5',qm:'17.7',ts:'175 km/h',fc:'13.5',fh:'9.2',fx:'11.0',ft:'Petrol',wt:'1380 kg',se:'4',ca:'220 L',pr:'A$13,000',pc:'A$4,000–15,000'};
      }
      if (trim === 'Trans Am WS6') return {en:'5.7L LS1 V8',di:'5665cc',cy:'8',hp:'325',tq:'447 Nm',tx:'6-speed manual',dr:'RWD',z1:'5.0',qm:'13.3',ts:'249 km/h',fc:'15.0',fh:'10.5',fx:'12.5',ft:'Petrol',wt:'1519 kg',se:'4',ca:'220 L',pr:'A$42,000',pc:'A$15,000–45,000'};
      if (trim === 'Trans Am') return {en:'5.7L LS1 V8',di:'5665cc',cy:'8',hp:'305',tq:'440 Nm',tx:'6-speed manual',dr:'RWD',z1:'5.3',qm:'13.6',ts:'241 km/h',fc:'15.0',fh:'10.5',fx:'12.5',ft:'Petrol',wt:'1519 kg',se:'4',ca:'220 L',pr:'A$38,000',pc:'A$13,000–40,000'};
      if (trim === 'Formula') return {en:'5.7L LS1 V8',di:'5665cc',cy:'8',hp:'305',tq:'440 Nm',tx:'6-speed manual',dr:'RWD',z1:'5.3',qm:'13.6',ts:'241 km/h',fc:'15.0',fh:'10.5',fx:'12.5',ft:'Petrol',wt:'1519 kg',se:'4',ca:'220 L',pr:'A$35,000',pc:'A$12,000–38,000'};
      return {en:'3.8L V6',di:'3791cc',cy:'6',hp:'200',tq:'305 Nm',tx:'5-speed manual',dr:'RWD',z1:'8.5',qm:'16.5',ts:'200 km/h',fc:'12.5',fh:'8.5',fx:'10.2',ft:'Petrol',wt:'1460 kg',se:'4',ca:'220 L',pr:'A$28,000',pc:'A$8,000–25,000'};
    }
    case 'GTO': {
      if (y <= 1974) {
        if (trim === 'Judge' || trim === 'The Judge') return {en:'6.6L Ram Air IV V8',di:'6555cc',cy:'8',hp:'370',tq:'637 Nm',tx:'4-speed manual',dr:'RWD',z1:'5.8',qm:'14.1',ts:'205 km/h',fc:'20.5',fh:'14.0',fx:'17.0',ft:'Petrol',wt:'1645 kg',se:'4',ca:'290 L',pr:'A$3,800',pc:'A$65,000–180,000'};
        return {en:'6.6L V8',di:'6555cc',cy:'8',hp:'350',tq:'610 Nm',tx:'4-speed manual',dr:'RWD',z1:'6.0',qm:'14.3',ts:'200 km/h',fc:'20.0',fh:'13.5',fx:'16.5',ft:'Petrol',wt:'1600 kg',se:'4',ca:'290 L',pr:'A$3,200',pc:'A$45,000–140,000'};
      }
      if (y <= 2004) return {en:'5.7L LS1 V8',di:'5665cc',cy:'8',hp:'350',tq:'452 Nm',tx:'6-speed manual',dr:'RWD',z1:'5.3',qm:'13.7',ts:'250 km/h',fc:'14.5',fh:'10.0',fx:'11.9',ft:'Petrol',wt:'1650 kg',se:'4',ca:'385 L',pr:'A$55,000',pc:'A$18,000–42,000'};
      return {en:'6.0L LS2 V8',di:'5967cc',cy:'8',hp:'400',tq:'542 Nm',tx:'6-speed manual',dr:'RWD',z1:'4.9',qm:'13.2',ts:'260 km/h',fc:'14.0',fh:'9.5',fx:'11.4',ft:'Petrol',wt:'1650 kg',se:'4',ca:'385 L',pr:'A$58,000',pc:'A$20,000–48,000'};
    }
    case 'Grand Prix': {
      if (y <= 1987) return {en:'5.0L V8',di:'4999cc',cy:'8',hp:'165',tq:'353 Nm',tx:'4-speed automatic',dr:'RWD',z1:'9.5',qm:'17.2',ts:'185 km/h',fc:'17.0',fh:'11.5',fx:'13.9',ft:'Petrol',wt:'1610 kg',se:'4',ca:'450 L',pr:'A$8,500',pc:'A$4,000–14,000'};
      if (trim === 'GTP') return {en:'3.8L supercharged V6',di:'3791cc',cy:'6',hp:'240',tq:'373 Nm',tx:'4-speed automatic',dr:'FWD',z1:'6.7',qm:'15.1',ts:'225 km/h',fc:'13.0',fh:'9.0',fx:'10.7',ft:'Petrol',wt:'1610 kg',se:'4',ca:'450 L',pr:'A$38,000',pc:'A$3,000–12,000'};
      if (trim === 'GT') return {en:'3.8L V6',di:'3791cc',cy:'6',hp:'200',tq:'305 Nm',tx:'4-speed automatic',dr:'FWD',z1:'8.5',qm:'16.5',ts:'200 km/h',fc:'13.0',fh:'9.0',fx:'10.7',ft:'Petrol',wt:'1575 kg',se:'4',ca:'450 L',pr:'A$32,000',pc:'A$2,500–10,000'};
      return {en:'3.1L V6',di:'3136cc',cy:'6',hp:'160',tq:'257 Nm',tx:'4-speed automatic',dr:'FWD',z1:'10.5',qm:'17.7',ts:'182 km/h',fc:'12.0',fh:'8.2',fx:'9.8',ft:'Petrol',wt:'1530 kg',se:'4',ca:'450 L',pr:'A$26,000',pc:'A$2,000–8,000'};
    }
    case 'Bonneville': {
      if (y <= 1986) {
        return {en:'5.0L V8',di:'4999cc',cy:'8',hp:'155',tq:'339 Nm',tx:'4-speed automatic',dr:'RWD',z1:'11.0',qm:'18.0',ts:'180 km/h',fc:'18.0',fh:'12.0',fx:'14.7',ft:'Petrol',wt:'1760 kg',se:'5',ca:'520 L',pr:'A$9,500',pc:'A$3,000–10,000'};
      }
      if (trim === 'SSEi') return {en:'3.8L supercharged V6',di:'3791cc',cy:'6',hp:'240',tq:'373 Nm',tx:'4-speed automatic',dr:'FWD',z1:'7.0',qm:'15.3',ts:'220 km/h',fc:'13.5',fh:'9.2',fx:'11.0',ft:'Petrol',wt:'1690 kg',se:'5',ca:'500 L',pr:'A$42,000',pc:'A$2,500–9,000'};
      if (trim === 'GXP') return {en:'4.6L Northstar V8',di:'4565cc',cy:'8',hp:'275',tq:'407 Nm',tx:'4-speed automatic',dr:'FWD',z1:'7.0',qm:'15.3',ts:'218 km/h',fc:'14.5',fh:'10.0',fx:'12.0',ft:'Petrol',wt:'1760 kg',se:'5',ca:'500 L',pr:'A$46,000',pc:'A$3,500–12,000'};
      return {en:'3.8L V6',di:'3791cc',cy:'6',hp:'205',tq:'305 Nm',tx:'4-speed automatic',dr:'FWD',z1:'9.0',qm:'17.0',ts:'195 km/h',fc:'13.0',fh:'9.0',fx:'10.7',ft:'Petrol',wt:'1620 kg',se:'5',ca:'500 L',pr:'A$32,000',pc:'A$2,000–8,000'};
    }
    case 'Grand Am': {
      if (y <= 1980) return {en:'6.6L V8',di:'6555cc',cy:'8',hp:'200',tq:'434 Nm',tx:'4-speed automatic',dr:'RWD',z1:'9.5',qm:'17.2',ts:'185 km/h',fc:'18.5',fh:'12.5',fx:'15.2',ft:'Petrol',wt:'1590 kg',se:'4',ca:'430 L',pr:'A$5,800',pc:'A$3,000–10,000'};
      if (y <= 1998) {
        if (trim === 'GT') return {en:'3.4L V6',di:'3350cc',cy:'6',hp:'175',tq:'280 Nm',tx:'4-speed automatic',dr:'FWD',z1:'8.5',qm:'16.5',ts:'195 km/h',fc:'12.5',fh:'8.5',fx:'10.2',ft:'Petrol',wt:'1445 kg',se:'4',ca:'420 L',pr:'A$24,000',pc:'A$1,500–6,000'};
        return {en:'2.4L inline-4',di:'2392cc',cy:'4',hp:'150',tq:'214 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.5',qm:'17.7',ts:'178 km/h',fc:'11.5',fh:'7.8',fx:'9.3',ft:'Petrol',wt:'1390 kg',se:'4',ca:'420 L',pr:'A$18,500',pc:'A$1,000–5,000'};
      }
      if (trim === 'GT' || trim === 'GT1') return {en:'3.4L V6',di:'3350cc',cy:'6',hp:'175',tq:'280 Nm',tx:'4-speed automatic',dr:'FWD',z1:'8.5',qm:'16.5',ts:'195 km/h',fc:'12.5',fh:'8.5',fx:'10.2',ft:'Petrol',wt:'1445 kg',se:'4',ca:'420 L',pr:'A$24,000',pc:'A$1,500–6,000'};
      return {en:'2.2L inline-4',di:'2189cc',cy:'4',hp:'140',tq:'190 Nm',tx:'4-speed automatic',dr:'FWD',z1:'11.0',qm:'18.0',ts:'172 km/h',fc:'11.0',fh:'7.5',fx:'9.0',ft:'Petrol',wt:'1385 kg',se:'4',ca:'420 L',pr:'A$19,000',pc:'A$1,000–5,000'};
    }
    case 'Catalina':
      return {en:'6.6L V8',di:'6555cc',cy:'8',hp:'250',tq:'542 Nm',tx:'3-speed automatic',dr:'RWD',z1:'9.0',qm:'17.0',ts:'180 km/h',fc:'18.5',fh:'12.5',fx:'15.2',ft:'Petrol',wt:'1890 kg',se:'5',ca:'600 L',pr:'A$3,800',pc:'A$8,000–25,000'};
    case 'Ventura':
      return {en:'5.7L V8',di:'5735cc',cy:'8',hp:'175',tq:'380 Nm',tx:'3-speed manual',dr:'RWD',z1:'10.5',qm:'17.7',ts:'175 km/h',fc:'17.5',fh:'12.0',fx:'14.5',ft:'Petrol',wt:'1520 kg',se:'4',ca:'380 L',pr:'A$3,300',pc:'A$5,000–15,000'};
    case 'Phoenix':
      return {en:'2.5L inline-4',di:'2474cc',cy:'4',hp:'90',tq:'186 Nm',tx:'4-speed manual',dr:'FWD',z1:'14.0',qm:'20.0',ts:'158 km/h',fc:'11.0',fh:'7.5',fx:'9.0',ft:'Petrol',wt:'1135 kg',se:'4',ca:'375 L',pr:'A$8,500',pc:'A$1,000–4,500'};
    case 'Tempest':
      return {en:'3.7L inline-6',di:'3769cc',cy:'6',hp:'140',tq:'305 Nm',tx:'3-speed manual',dr:'RWD',z1:'13.0',qm:'19.5',ts:'162 km/h',fc:'15.5',fh:'10.5',fx:'12.7',ft:'Petrol',wt:'1360 kg',se:'4',ca:'380 L',pr:'A$2,500',pc:'A$8,000–22,000'};
    case 'LeMans':
      if (y >= 1970 && (trim === 'Sport' || trim === 'GT')) return {en:'5.7L V8',di:'5735cc',cy:'8',hp:'250',tq:'475 Nm',tx:'4-speed manual',dr:'RWD',z1:'8.5',qm:'16.5',ts:'195 km/h',fc:'18.0',fh:'12.0',fx:'14.7',ft:'Petrol',wt:'1650 kg',se:'4',ca:'430 L',pr:'A$4,200',pc:'A$5,000–16,000'};
      return {en:'4.1L inline-6',di:'4097cc',cy:'6',hp:'155',tq:'324 Nm',tx:'3-speed manual',dr:'RWD',z1:'12.0',qm:'18.8',ts:'165 km/h',fc:'16.0',fh:'11.0',fx:'13.2',ft:'Petrol',wt:'1580 kg',se:'4',ca:'430 L',pr:'A$3,400',pc:'A$4,000–12,000'};
    case 'Safari':
      return {en:'5.7L V8',di:'5735cc',cy:'8',hp:'185',tq:'380 Nm',tx:'4-speed automatic',dr:'RWD',z1:'11.5',qm:'18.3',ts:'165 km/h',fc:'19.0',fh:'13.0',fx:'15.7',ft:'Petrol',wt:'2100 kg',se:'6',ca:'2400 L',pr:'A$8,500',pc:'A$4,000–15,000'};
    case 'Aztek':
      return {en:'3.4L V6',di:'3350cc',cy:'6',hp:'185',tq:'285 Nm',tx:'4-speed automatic',dr:'AWD',z1:'9.5',qm:'17.2',ts:'185 km/h',fc:'13.5',fh:'9.5',fx:'11.2',ft:'Petrol',wt:'1735 kg',se:'5',ca:'875 L',pr:'A$32,000',pc:'A$2,000–8,000'};
    case 'Vibe':
      if (trim === 'GT') return {en:'1.8L VVTL-i inline-4',di:'1794cc',cy:'4',hp:'180',tq:'181 Nm',tx:'6-speed manual',dr:'FWD',z1:'7.5',qm:'15.8',ts:'205 km/h',fc:'9.5',fh:'6.5',fx:'7.7',ft:'Petrol',wt:'1275 kg',se:'5',ca:'585 L',pr:'A$26,000',pc:'A$3,000–9,000'};
      if (trim === 'AWD') return {en:'1.8L VVT-i inline-4',di:'1794cc',cy:'4',hp:'130',tq:'171 Nm',tx:'4-speed automatic',dr:'AWD',z1:'11.0',qm:'17.9',ts:'178 km/h',fc:'10.5',fh:'7.5',fx:'8.7',ft:'Petrol',wt:'1365 kg',se:'5',ca:'585 L',pr:'A$25,000',pc:'A$3,000–9,000'};
      return {en:'1.8L VVT-i inline-4',di:'1794cc',cy:'4',hp:'126',tq:'171 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.5',qm:'17.7',ts:'175 km/h',fc:'9.5',fh:'6.5',fx:'7.7',ft:'Petrol',wt:'1265 kg',se:'5',ca:'585 L',pr:'A$21,000',pc:'A$2,500–8,000'};
    case 'Solstice':
      if (trim === 'GXP') return {en:'2.0L Ecotec turbocharged inline-4',di:'1998cc',cy:'4',hp:'260',tq:'353 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.9',qm:'14.3',ts:'225 km/h',fc:'12.0',fh:'8.0',fx:'9.7',ft:'Petrol',wt:'1270 kg',se:'2',ca:'170 L',pr:'A$42,000',pc:'A$10,000–24,000'};
      return {en:'2.4L Ecotec inline-4',di:'2392cc',cy:'4',hp:'177',tq:'220 Nm',tx:'5-speed manual',dr:'RWD',z1:'7.8',qm:'16.0',ts:'196 km/h',fc:'11.0',fh:'7.5',fx:'9.0',ft:'Petrol',wt:'1235 kg',se:'2',ca:'170 L',pr:'A$34,000',pc:'A$7,000–18,000'};
    case 'Montana':
      return {en:'3.4L V6',di:'3350cc',cy:'6',hp:'185',tq:'285 Nm',tx:'4-speed automatic',dr:'FWD',z1:'10.5',qm:'17.7',ts:'180 km/h',fc:'13.5',fh:'9.5',fx:'11.2',ft:'Petrol',wt:'1760 kg',se:'7',ca:'3400 L',pr:'A$34,000',pc:'A$2,000–8,000'};
    case 'Sunbird':
    case 'Sunfire':
      return {en:'2.2L inline-4',di:'2189cc',cy:'4',hp:'115',tq:'190 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.5',qm:'18.3',ts:'172 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'1180 kg',se:'4',ca:'375 L',pr:'A$17,000',pc:'A$800–4,500'};
    default:
      return {en:'3.8L V6',di:'3791cc',cy:'6',hp:'200',tq:'305 Nm',tx:'4-speed automatic',dr:'RWD',z1:'9.0',qm:'17.0',ts:'190 km/h',fc:'14.5',fh:'10.0',fx:'12.0',ft:'Petrol',wt:'1550 kg',se:'5',ca:'450 L',pr:'A$25,000',pc:'A$2,000–8,000'};
  }
}

const specs = {};
for (const [model, years] of Object.entries(makes['Maserati'] || {})) {
  for (const [year, trims] of Object.entries(years)) {
    for (const trim of trims) {
      specs[`Maserati|${model}|${year}|${trim}`] = maseratiSpec(model, year, trim);
    }
  }
}
for (const [model, years] of Object.entries(makes['Pontiac'] || {})) {
  for (const [year, trims] of Object.entries(years)) {
    for (const trim of trims) {
      specs[`Pontiac|${model}|${year}|${trim}`] = pontiacSpec(model, year, trim);
    }
  }
}

fs.writeFileSync('src/data/supplement77.json', JSON.stringify({ specs }, null, 2));
console.log('supplement77.json written:', Object.keys(specs).length, 'entries');
