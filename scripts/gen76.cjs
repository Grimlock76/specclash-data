// gen76.cjs — Ferrari + Lamborghini → supplement76.json
const fs = require('fs');
const makes = JSON.parse(fs.readFileSync('src/data/makes.json','utf8'));

function ferrariSpec(model, year, trim) {
  switch (model) {
    case '308 GTB':
      if (trim === 'Carb') return {en:'3.0L DOHC 32v V8',di:'2926cc',cy:'8',hp:'255',tq:'270 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.5',qm:'14.8',ts:'248 km/h',fc:'17.5',fh:'12.0',fx:'14.5',ft:'Petrol',wt:'1090 kg',se:'2',ca:'100 L',pr:'A$55,000',pc:'A$85,000–180,000'};
      return {en:'3.0L DOHC 32v V8',di:'2926cc',cy:'8',hp:'214',tq:'240 Nm',tx:'5-speed manual',dr:'RWD',z1:'7.0',qm:'15.3',ts:'238 km/h',fc:'16.5',fh:'11.5',fx:'13.7',ft:'Petrol',wt:'1110 kg',se:'2',ca:'100 L',pr:'A$52,000',pc:'A$75,000–160,000'};
    case '308 GTS':
      if (trim === 'Carb') return {en:'3.0L DOHC 32v V8',di:'2926cc',cy:'8',hp:'255',tq:'270 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.6',qm:'14.9',ts:'243 km/h',fc:'18.0',fh:'12.5',fx:'15.0',ft:'Petrol',wt:'1120 kg',se:'2',ca:'100 L',pr:'A$57,000',pc:'A$85,000–185,000'};
      return {en:'3.0L DOHC 32v V8',di:'2926cc',cy:'8',hp:'214',tq:'240 Nm',tx:'5-speed manual',dr:'RWD',z1:'7.2',qm:'15.5',ts:'235 km/h',fc:'17.0',fh:'12.0',fx:'14.2',ft:'Petrol',wt:'1140 kg',se:'2',ca:'100 L',pr:'A$54,000',pc:'A$78,000–165,000'};
    case '328 GTB':
    case '328 GTS':
      return {en:'3.2L DOHC 32v V8',di:'3185cc',cy:'8',hp:'270',tq:'304 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.9',qm:'14.3',ts:'265 km/h',fc:'18.0',fh:'12.5',fx:'15.0',ft:'Petrol',wt:model==='328 GTB'?'1263 kg':'1280 kg',se:'2',ca:'100 L',pr:'A$96,000',pc:'A$130,000–280,000'};
    case '348':
      if (trim === 'Spider') return {en:'3.4L DOHC 32v V8',di:'3405cc',cy:'8',hp:'312',tq:'323 Nm',tx:'6-speed manual',dr:'RWD',z1:'5.8',qm:'14.1',ts:'275 km/h',fc:'18.5',fh:'13.0',fx:'15.5',ft:'Petrol',wt:'1410 kg',se:'2',ca:'100 L',pr:'A$175,000',pc:'A$95,000–210,000'};
      return {en:'3.4L DOHC 32v V8',di:'3405cc',cy:'8',hp:'300',tq:'315 Nm',tx:'6-speed manual',dr:'RWD',z1:'5.9',qm:'14.2',ts:'270 km/h',fc:'18.5',fh:'13.0',fx:'15.5',ft:'Petrol',wt:'1380 kg',se:'2',ca:'100 L',pr:'A$160,000',pc:'A$85,000–200,000'};
    case 'F355':
      if (trim === 'Berlinetta') return {en:'3.5L DOHC 40v V8',di:'3496cc',cy:'8',hp:'381',tq:'363 Nm',tx:'6-speed manual',dr:'RWD',z1:'4.7',qm:'13.1',ts:'295 km/h',fc:'18.5',fh:'13.5',fx:'15.7',ft:'Petrol',wt:'1350 kg',se:'2',ca:'100 L',pr:'A$230,000',pc:'A$110,000–250,000'};
      if (trim === 'Spider') return {en:'3.5L DOHC 40v V8',di:'3496cc',cy:'8',hp:'381',tq:'363 Nm',tx:'6-speed manual',dr:'RWD',z1:'4.8',qm:'13.2',ts:'290 km/h',fc:'19.0',fh:'14.0',fx:'16.0',ft:'Petrol',wt:'1400 kg',se:'2',ca:'100 L',pr:'A$255,000',pc:'A$125,000–275,000'};
      return {en:'3.5L DOHC 40v V8',di:'3496cc',cy:'8',hp:'381',tq:'363 Nm',tx:'6-speed manual',dr:'RWD',z1:'4.8',qm:'13.2',ts:'292 km/h',fc:'18.8',fh:'13.8',fx:'15.9',ft:'Petrol',wt:'1370 kg',se:'2',ca:'100 L',pr:'A$245,000',pc:'A$115,000–260,000'};
    case '360 Modena':
      if (trim === 'Challenge Stradale') return {en:'3.6L DOHC 40v V8',di:'3586cc',cy:'8',hp:'425',tq:'385 Nm',tx:'6-speed F1 paddle',dr:'RWD',z1:'4.0',qm:'12.1',ts:'300 km/h',fc:'19.0',fh:'13.5',fx:'16.0',ft:'Petrol',wt:'1255 kg',se:'2',ca:'100 L',pr:'A$385,000',pc:'A$250,000–450,000'};
      if (trim === 'Spider') return {en:'3.6L DOHC 40v V8',di:'3586cc',cy:'8',hp:'400',tq:'373 Nm',tx:'6-speed F1 paddle',dr:'RWD',z1:'4.5',qm:'12.6',ts:'295 km/h',fc:'19.0',fh:'13.5',fx:'16.0',ft:'Petrol',wt:'1450 kg',se:'2',ca:'100 L',pr:'A$340,000',pc:'A$190,000–360,000'};
      return {en:'3.6L DOHC 40v V8',di:'3586cc',cy:'8',hp:'400',tq:'373 Nm',tx:'6-speed F1 paddle',dr:'RWD',z1:'4.5',qm:'12.6',ts:'295 km/h',fc:'19.0',fh:'13.5',fx:'16.0',ft:'Petrol',wt:'1390 kg',se:'2',ca:'100 L',pr:'A$310,000',pc:'A$175,000–330,000'};
    case 'F430':
      if (trim === 'Scuderia') return {en:'4.3L DOHC 32v V8',di:'4308cc',cy:'8',hp:'510',tq:'465 Nm',tx:'6-speed F1 paddle',dr:'RWD',z1:'3.6',qm:'11.6',ts:'320 km/h',fc:'18.5',fh:'13.5',fx:'15.6',ft:'Petrol',wt:'1350 kg',se:'2',ca:'100 L',pr:'A$495,000',pc:'A$350,000–600,000'};
      if (trim === 'Spider') return {en:'4.3L DOHC 32v V8',di:'4308cc',cy:'8',hp:'483',tq:'465 Nm',tx:'6-speed F1 paddle',dr:'RWD',z1:'4.0',qm:'12.2',ts:'310 km/h',fc:'18.5',fh:'13.5',fx:'15.6',ft:'Petrol',wt:'1600 kg',se:'2',ca:'100 L',pr:'A$450,000',pc:'A$290,000–510,000'};
      return {en:'4.3L DOHC 32v V8',di:'4308cc',cy:'8',hp:'483',tq:'465 Nm',tx:'6-speed F1 paddle',dr:'RWD',z1:'4.0',qm:'12.2',ts:'315 km/h',fc:'18.0',fh:'13.0',fx:'15.2',ft:'Petrol',wt:'1450 kg',se:'2',ca:'100 L',pr:'A$410,000',pc:'A$270,000–480,000'};
    case '458 Italia':
      if (trim === 'Speciale') return {en:'4.5L DOHC 32v V8',di:'4497cc',cy:'8',hp:'605',tq:'540 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.0',qm:'10.9',ts:'325 km/h',fc:'15.5',fh:'11.5',fx:'13.0',ft:'Petrol',wt:'1395 kg',se:'2',ca:'230 L',pr:'A$695,000',pc:'A$500,000–850,000'};
      if (trim === 'Spider') return {en:'4.5L DOHC 32v V8',di:'4497cc',cy:'8',hp:'562',tq:'540 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.4',qm:'11.2',ts:'320 km/h',fc:'15.5',fh:'11.5',fx:'13.0',ft:'Petrol',wt:'1600 kg',se:'2',ca:'230 L',pr:'A$595,000',pc:'A$380,000–680,000'};
      return {en:'4.5L DOHC 32v V8',di:'4497cc',cy:'8',hp:'562',tq:'540 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.4',qm:'11.2',ts:'325 km/h',fc:'15.5',fh:'11.5',fx:'13.0',ft:'Petrol',wt:'1380 kg',se:'2',ca:'230 L',pr:'A$535,000',pc:'A$345,000–590,000'};
    case '488 GTB':
      if (trim === 'Pista') return {en:'3.9L twin-turbo V8',di:'3902cc',cy:'8',hp:'720',tq:'770 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'2.85',qm:'10.7',ts:'340 km/h',fc:'14.5',fh:'11.0',fx:'12.5',ft:'Petrol',wt:'1385 kg',se:'2',ca:'230 L',pr:'A$875,000',pc:'A$700,000–1,100,000'};
      if (trim === 'Spider') return {en:'3.9L twin-turbo V8',di:'3902cc',cy:'8',hp:'660',tq:'760 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.0',qm:'11.0',ts:'330 km/h',fc:'14.8',fh:'11.2',fx:'12.7',ft:'Petrol',wt:'1585 kg',se:'2',ca:'230 L',pr:'A$665,000',pc:'A$480,000–780,000'};
      return {en:'3.9L twin-turbo V8',di:'3902cc',cy:'8',hp:'660',tq:'760 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.0',qm:'11.0',ts:'330 km/h',fc:'14.5',fh:'11.0',fx:'12.5',ft:'Petrol',wt:'1475 kg',se:'2',ca:'230 L',pr:'A$595,000',pc:'A$420,000–700,000'};
    case 'F8 Tributo':
      if (trim === 'Spider') return {en:'3.9L twin-turbo V8',di:'3902cc',cy:'8',hp:'720',tq:'770 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'2.9',qm:'10.8',ts:'340 km/h',fc:'13.5',fh:'10.5',fx:'11.7',ft:'Petrol',wt:'1575 kg',se:'2',ca:'230 L',pr:'A$765,000',pc:'A$590,000–950,000'};
      return {en:'3.9L twin-turbo V8',di:'3902cc',cy:'8',hp:'720',tq:'770 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'2.9',qm:'10.8',ts:'340 km/h',fc:'13.0',fh:'10.0',fx:'11.2',ft:'Petrol',wt:'1435 kg',se:'2',ca:'230 L',pr:'A$695,000',pc:'A$530,000–870,000'};
    case 'Testarossa':
      return {en:'4.9L DOHC 48v flat-12',di:'4943cc',cy:'12',hp:'390',tq:'490 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.8',qm:'14.1',ts:'290 km/h',fc:'20.5',fh:'14.5',fx:'17.2',ft:'Petrol',wt:'1506 kg',se:'2',ca:'100 L',pr:'A$215,000',pc:'A$120,000–350,000'};
    case '512 TR':
      return {en:'4.9L DOHC 48v flat-12',di:'4943cc',cy:'12',hp:'428',tq:'500 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.2',qm:'13.5',ts:'314 km/h',fc:'21.0',fh:'15.0',fx:'17.8',ft:'Petrol',wt:'1496 kg',se:'2',ca:'100 L',pr:'A$345,000',pc:'A$200,000–500,000'};
    case 'F512 M':
      return {en:'4.9L DOHC 48v flat-12',di:'4943cc',cy:'12',hp:'440',tq:'510 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.0',qm:'13.2',ts:'315 km/h',fc:'21.5',fh:'15.5',fx:'18.2',ft:'Petrol',wt:'1496 kg',se:'2',ca:'100 L',pr:'A$480,000',pc:'A$350,000–750,000'};
    case 'F40':
      return {en:'2.9L twin-turbo V8',di:'2936cc',cy:'8',hp:'478',tq:'577 Nm',tx:'5-speed manual',dr:'RWD',z1:'3.8',qm:'12.0',ts:'324 km/h',fc:'20.0',fh:'14.5',fx:'17.0',ft:'Petrol',wt:'1100 kg',se:'2',ca:'50 L',pr:'A$410,000',pc:'A$2,000,000–4,500,000'};
    case 'F50':
      return {en:'4.7L V12 NA',di:'4698cc',cy:'12',hp:'513',tq:'470 Nm',tx:'6-speed manual',dr:'RWD',z1:'3.7',qm:'11.9',ts:'325 km/h',fc:'20.5',fh:'14.5',fx:'17.2',ft:'Petrol',wt:'1230 kg',se:'2',ca:'50 L',pr:'A$1,100,000',pc:'A$4,000,000–8,000,000'};
    case 'Enzo':
      return {en:'6.0L V12 NA',di:'5998cc',cy:'12',hp:'660',tq:'657 Nm',tx:'6-speed semi-auto',dr:'RWD',z1:'3.65',qm:'11.7',ts:'355 km/h',fc:'22.0',fh:'15.0',fx:'18.0',ft:'Petrol',wt:'1365 kg',se:'2',ca:'50 L',pr:'A$1,400,000',pc:'A$4,500,000–9,000,000'};
    case 'LaFerrari':
      if (trim === 'Aperta') return {en:'6.3L V12 + KERS hybrid',di:'6262cc',cy:'12',hp:'963',tq:'900 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'2.9',qm:'10.8',ts:'350 km/h',fc:'12.0',fh:'9.5',fx:'10.5',ft:'Petrol/Hybrid',wt:'1270 kg',se:'2',ca:'50 L',pr:'A$3,200,000',pc:'A$6,000,000+'};
      return {en:'6.3L V12 + KERS hybrid',di:'6262cc',cy:'12',hp:'963',tq:'900 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'2.9',qm:'10.8',ts:'350 km/h',fc:'12.0',fh:'9.5',fx:'10.5',ft:'Petrol/Hybrid',wt:'1255 kg',se:'2',ca:'50 L',pr:'A$2,800,000',pc:'A$5,500,000+'};
    case 'California':
    case 'California T':
      return {en:'3.9L twin-turbo V8',di:'3902cc',cy:'8',hp:'552',tq:'755 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.6',qm:'11.7',ts:'316 km/h',fc:'10.8',fh:'8.5',fx:'9.4',ft:'Petrol',wt:'1735 kg',se:'2+2',ca:'240 L',pr:'A$425,000',pc:'A$280,000–480,000'};
    case 'Portofino':
      if (trim === 'M') return {en:'3.9L twin-turbo V8',di:'3902cc',cy:'8',hp:'620',tq:'760 Nm',tx:'8-speed dual clutch',dr:'RWD',z1:'3.45',qm:'11.3',ts:'320 km/h',fc:'11.5',fh:'9.0',fx:'10.0',ft:'Petrol',wt:'1785 kg',se:'2+2',ca:'210 L',pr:'A$545,000',pc:'A$430,000–640,000'};
      return {en:'3.9L twin-turbo V8',di:'3902cc',cy:'8',hp:'600',tq:'760 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.5',qm:'11.4',ts:'320 km/h',fc:'11.0',fh:'8.5',fx:'9.5',ft:'Petrol',wt:'1755 kg',se:'2+2',ca:'210 L',pr:'A$495,000',pc:'A$380,000–590,000'};
    case '599 GTB':
      if (trim === 'HGTE') return {en:'6.0L V12 NA',di:'5999cc',cy:'12',hp:'620',tq:'608 Nm',tx:'6-speed F1 paddle',dr:'RWD',z1:'3.7',qm:'11.9',ts:'330 km/h',fc:'20.5',fh:'14.5',fx:'17.2',ft:'Petrol',wt:'1690 kg',se:'2+2',ca:'320 L',pr:'A$695,000',pc:'A$280,000–520,000'};
      return {en:'6.0L V12 NA',di:'5999cc',cy:'12',hp:'620',tq:'608 Nm',tx:'6-speed F1 paddle',dr:'RWD',z1:'3.7',qm:'11.9',ts:'330 km/h',fc:'20.5',fh:'14.5',fx:'17.2',ft:'Petrol',wt:'1690 kg',se:'2+2',ca:'320 L',pr:'A$640,000',pc:'A$260,000–490,000'};
    case '612 Scaglietti':
      return {en:'5.7L V12 NA',di:'5748cc',cy:'12',hp:'540',tq:'589 Nm',tx:'6-speed F1 paddle',dr:'RWD',z1:'4.2',qm:'12.3',ts:'320 km/h',fc:'20.0',fh:'13.5',fx:'16.5',ft:'Petrol',wt:'1840 kg',se:'2+2',ca:'240 L',pr:'A$560,000',pc:'A$140,000–320,000'};
    case 'FF':
      return {en:'6.3L V12 NA',di:'6262cc',cy:'12',hp:'660',tq:'683 Nm',tx:'7-speed dual clutch',dr:'4WD',z1:'3.7',qm:'11.9',ts:'335 km/h',fc:'15.0',fh:'11.0',fx:'12.7',ft:'Petrol',wt:'1880 kg',se:'4',ca:'450 L',pr:'A$680,000',pc:'A$250,000–470,000'};
    case 'GTC4Lusso':
      if (trim === 'T') return {en:'3.9L twin-turbo V8',di:'3902cc',cy:'8',hp:'610',tq:'760 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.5',qm:'11.4',ts:'320 km/h',fc:'13.5',fh:'10.5',fx:'11.7',ft:'Petrol',wt:'1790 kg',se:'4',ca:'450 L',pr:'A$625,000',pc:'A$280,000–490,000'};
      return {en:'6.3L V12 NA',di:'6262cc',cy:'12',hp:'690',tq:'697 Nm',tx:'7-speed dual clutch',dr:'4WD',z1:'3.4',qm:'11.2',ts:'335 km/h',fc:'15.5',fh:'11.5',fx:'13.2',ft:'Petrol',wt:'1920 kg',se:'4',ca:'450 L',pr:'A$730,000',pc:'A$310,000–540,000'};
    case '812 Superfast':
      if (trim === 'Competizione') return {en:'6.5L V12 NA',di:'6496cc',cy:'12',hp:'830',tq:'692 Nm',tx:'8-speed dual clutch',dr:'RWD',z1:'2.85',qm:'10.7',ts:'340 km/h',fc:'16.0',fh:'12.0',fx:'13.7',ft:'Petrol',wt:'1525 kg',se:'2',ca:'320 L',pr:'A$1,150,000',pc:'A$900,000+'};
      return {en:'6.5L V12 NA',di:'6496cc',cy:'12',hp:'800',tq:'718 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'2.9',qm:'10.8',ts:'340 km/h',fc:'15.5',fh:'11.5',fx:'13.2',ft:'Petrol',wt:'1630 kg',se:'2',ca:'320 L',pr:'A$875,000',pc:'A$690,000–1,050,000'};
    case 'SF90 Stradale':
      if (trim === 'Spider') return {en:'4.0L twin-turbo V8 + 3 electric motors',di:'3990cc',cy:'8',hp:'1000',tq:'800 Nm',tx:'8-speed dual clutch',dr:'AWD',z1:'2.5',qm:'10.2',ts:'340 km/h',fc:'5.7 L/100km equiv',fh:'4.5',fx:'5.0',ft:'Petrol/Plugin Hybrid',wt:'1670 kg',se:'2',ca:'92 L',pr:'A$1,395,000',pc:'A$1,050,000+'};
      return {en:'4.0L twin-turbo V8 + 3 electric motors',di:'3990cc',cy:'8',hp:'1000',tq:'800 Nm',tx:'8-speed dual clutch',dr:'AWD',z1:'2.5',qm:'10.2',ts:'340 km/h',fc:'5.7 L/100km equiv',fh:'4.5',fx:'5.0',ft:'Petrol/Plugin Hybrid',wt:'1570 kg',se:'2',ca:'92 L',pr:'A$1,250,000',pc:'A$960,000+'};
    case 'Roma':
      return {en:'3.9L twin-turbo V8',di:'3902cc',cy:'8',hp:'620',tq:'760 Nm',tx:'8-speed dual clutch',dr:'RWD',z1:'3.4',qm:'11.2',ts:'320 km/h',fc:'11.5',fh:'9.0',fx:'10.0',ft:'Petrol',wt:'1570 kg',se:'2+2',ca:'272 L',pr:'A$750,000',pc:'A$580,000–900,000'};
    case '550 Maranello':
      return {en:'5.5L V12 NA',di:'5474cc',cy:'12',hp:'485',tq:'569 Nm',tx:'6-speed manual',dr:'RWD',z1:'4.4',qm:'12.5',ts:'320 km/h',fc:'20.0',fh:'13.5',fx:'16.5',ft:'Petrol',wt:'1690 kg',se:'2',ca:'185 L',pr:'A$395,000',pc:'A$120,000–280,000'};
    case '575M Maranello':
      if (trim === 'Superamerica') return {en:'5.7L V12 NA',di:'5748cc',cy:'12',hp:'540',tq:'588 Nm',tx:'6-speed F1 paddle',dr:'RWD',z1:'4.2',qm:'12.3',ts:'320 km/h',fc:'20.5',fh:'14.0',fx:'17.0',ft:'Petrol',wt:'1770 kg',se:'2',ca:'185 L',pr:'A$680,000',pc:'A$250,000–550,000'};
      return {en:'5.7L V12 NA',di:'5748cc',cy:'12',hp:'515',tq:'588 Nm',tx:'6-speed manual',dr:'RWD',z1:'4.2',qm:'12.3',ts:'325 km/h',fc:'20.5',fh:'13.5',fx:'16.7',ft:'Petrol',wt:'1730 kg',se:'2',ca:'185 L',pr:'A$485,000',pc:'A$145,000–320,000'};
    case '456':
      return {en:'5.5L V12 NA',di:'5474cc',cy:'12',hp:'442',tq:'550 Nm',tx:'6-speed manual',dr:'RWD',z1:'5.2',qm:'13.5',ts:'302 km/h',fc:'20.5',fh:'14.0',fx:'17.0',ft:'Petrol',wt:'1690 kg',se:'4',ca:'240 L',pr:'A$340,000',pc:'A$90,000–220,000'};
    case 'Dino 246':
      if (trim === 'GTS') return {en:'2.4L DOHC V6',di:'2418cc',cy:'6',hp:'195',tq:'225 Nm',tx:'5-speed manual',dr:'RWD',z1:'7.1',qm:'15.3',ts:'235 km/h',fc:'16.0',fh:'11.0',fx:'13.2',ft:'Petrol',wt:'1035 kg',se:'2',ca:'100 L',pr:'A$18,000',pc:'A$200,000–600,000'};
      return {en:'2.4L DOHC V6',di:'2418cc',cy:'6',hp:'195',tq:'225 Nm',tx:'5-speed manual',dr:'RWD',z1:'7.1',qm:'15.3',ts:'235 km/h',fc:'15.5',fh:'10.5',fx:'12.7',ft:'Petrol',wt:'1000 kg',se:'2',ca:'100 L',pr:'A$17,000',pc:'A$190,000–560,000'};
    case '365 GTB/4':
      return {en:'4.4L DOHC V12',di:'4390cc',cy:'12',hp:'352',tq:'431 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.4',qm:'13.7',ts:'280 km/h',fc:'22.0',fh:'15.5',fx:'18.5',ft:'Petrol',wt:'1280 kg',se:'2',ca:'100 L',pr:'A$23,000',pc:'A$700,000–2,000,000'};
    default:
      return {en:'V8',di:'3500cc',cy:'8',hp:'400',tq:'400 Nm',tx:'6-speed manual',dr:'RWD',z1:'4.5',qm:'12.5',ts:'300 km/h',fc:'17.0',fh:'12.0',fx:'14.2',ft:'Petrol',wt:'1400 kg',se:'2',ca:'150 L',pr:'A$350,000',pc:'A$200,000–450,000'};
  }
}

function lamborghiniSpec(model, year, trim) {
  switch (model) {
    case 'Miura':
      if (trim === 'P400 SV') return {en:'3.9L DOHC transverse V12',di:'3929cc',cy:'12',hp:'385',tq:'400 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.5',qm:'13.6',ts:'290 km/h',fc:'22.0',fh:'15.0',fx:'18.2',ft:'Petrol',wt:'1245 kg',se:'2',ca:'60 L',pr:'A$22,000',pc:'A$2,500,000+'};
      if (trim === 'P400 S') return {en:'3.9L DOHC transverse V12',di:'3929cc',cy:'12',hp:'370',tq:'393 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.8',qm:'13.9',ts:'285 km/h',fc:'21.5',fh:'15.0',fx:'18.0',ft:'Petrol',wt:'1225 kg',se:'2',ca:'60 L',pr:'A$19,000',pc:'A$2,000,000+'};
      return {en:'3.9L DOHC transverse V12',di:'3929cc',cy:'12',hp:'350',tq:'386 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.5',qm:'14.8',ts:'280 km/h',fc:'20.5',fh:'14.5',fx:'17.2',ft:'Petrol',wt:'1125 kg',se:'2',ca:'60 L',pr:'A$16,000',pc:'A$1,800,000+'};
    case 'Espada':
      return {en:'3.9L DOHC V12',di:'3929cc',cy:'12',hp:'325',tq:'392 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.5',qm:'14.8',ts:'250 km/h',fc:'20.5',fh:'14.5',fx:'17.2',ft:'Petrol',wt:'1725 kg',se:'4',ca:'200 L',pr:'A$18,000',pc:'A$200,000–600,000'};
    case 'Urraco':
      if (trim === 'P300') return {en:'2.98L DOHC V8',di:'2996cc',cy:'8',hp:'265',tq:'275 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.8',qm:'15.2',ts:'260 km/h',fc:'18.5',fh:'13.0',fx:'15.5',ft:'Petrol',wt:'1300 kg',se:'2+2',ca:'100 L',pr:'A$22,000',pc:'A$120,000–280,000'};
      return {en:'2.5L DOHC V8',di:'2463cc',cy:'8',hp:'220',tq:'235 Nm',tx:'5-speed manual',dr:'RWD',z1:'8.0',qm:'16.2',ts:'240 km/h',fc:'18.0',fh:'12.5',fx:'15.0',ft:'Petrol',wt:'1250 kg',se:'2+2',ca:'100 L',pr:'A$18,000',pc:'A$100,000–250,000'};
    case 'Countach':
      if (trim === 'Anniversary') return {en:'5.2L DOHC 48v V12',di:'5167cc',cy:'12',hp:'455',tq:'500 Nm',tx:'5-speed manual',dr:'RWD',z1:'4.7',qm:'13.1',ts:'290 km/h',fc:'24.0',fh:'17.0',fx:'20.0',ft:'Petrol',wt:'1490 kg',se:'2',ca:'75 L',pr:'A$290,000',pc:'A$700,000–2,000,000'};
      if (trim === 'LP5000 QV' || trim === 'LP500 S') return {en:'4.7L DOHC V12',di:'4754cc',cy:'12',hp:'375',tq:'430 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.1',qm:'13.4',ts:'285 km/h',fc:'22.0',fh:'15.5',fx:'18.5',ft:'Petrol',wt:'1448 kg',se:'2',ca:'75 L',pr:'A$120,000',pc:'A$500,000–1,500,000'};
      if (trim === 'LP400 S') return {en:'3.9L DOHC V12',di:'3929cc',cy:'12',hp:'353',tq:'400 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.6',qm:'13.8',ts:'289 km/h',fc:'22.0',fh:'15.0',fx:'18.2',ft:'Petrol',wt:'1385 kg',se:'2',ca:'75 L',pr:'A$55,000',pc:'A$400,000–1,200,000'};
      return {en:'3.9L DOHC V12',di:'3929cc',cy:'12',hp:'375',tq:'361 Nm',tx:'5-speed manual',dr:'RWD',z1:'5.6',qm:'13.8',ts:'300 km/h',fc:'22.5',fh:'15.5',fx:'18.7',ft:'Petrol',wt:'1065 kg',se:'2',ca:'75 L',pr:'A$44,000',pc:'A$300,000–900,000'};
    case 'Jalpa':
      return {en:'3.5L DOHC V8',di:'3485cc',cy:'8',hp:'255',tq:'294 Nm',tx:'5-speed manual',dr:'RWD',z1:'6.5',qm:'14.8',ts:'248 km/h',fc:'19.0',fh:'13.5',fx:'16.0',ft:'Petrol',wt:'1450 kg',se:'2',ca:'80 L',pr:'A$95,000',pc:'A$80,000–200,000'};
    case 'Diablo':
      if (trim === 'GT') return {en:'6.0L DOHC 48v V12',di:'5992cc',cy:'12',hp:'575',tq:'630 Nm',tx:'5-speed manual',dr:'RWD',z1:'3.9',qm:'12.0',ts:'338 km/h',fc:'24.0',fh:'17.0',fx:'20.0',ft:'Petrol',wt:'1400 kg',se:'2',ca:'100 L',pr:'A$650,000',pc:'A$650,000–1,500,000'};
      if (trim === '6.0 SE' || trim === '6.0') return {en:'6.0L DOHC 48v V12',di:'5992cc',cy:'12',hp:'550',tq:'620 Nm',tx:'5-speed manual',dr:'AWD',z1:'4.0',qm:'12.2',ts:'330 km/h',fc:'24.0',fh:'17.0',fx:'20.0',ft:'Petrol',wt:'1625 kg',se:'2',ca:'100 L',pr:'A$580,000',pc:'A$450,000–1,000,000'};
      if (trim === 'SV') return {en:'5.7L DOHC V12',di:'5707cc',cy:'12',hp:'530',tq:'580 Nm',tx:'5-speed manual',dr:'RWD',z1:'4.1',qm:'12.4',ts:'330 km/h',fc:'23.0',fh:'16.5',fx:'19.5',ft:'Petrol',wt:'1460 kg',se:'2',ca:'100 L',pr:'A$420,000',pc:'A$320,000–750,000'};
      if (trim === 'SE30') return {en:'5.7L DOHC V12',di:'5707cc',cy:'12',hp:'525',tq:'580 Nm',tx:'5-speed manual',dr:'RWD',z1:'4.0',qm:'12.2',ts:'328 km/h',fc:'23.0',fh:'16.5',fx:'19.5',ft:'Petrol',wt:'1460 kg',se:'2',ca:'100 L',pr:'A$350,000',pc:'A$300,000–700,000'};
      if (trim === 'VT') return {en:'5.7L DOHC V12',di:'5707cc',cy:'12',hp:'492',tq:'580 Nm',tx:'5-speed manual',dr:'AWD',z1:'4.5',qm:'12.7',ts:'325 km/h',fc:'23.5',fh:'16.5',fx:'19.8',ft:'Petrol',wt:'1576 kg',se:'2',ca:'100 L',pr:'A$295,000',pc:'A$200,000–550,000'};
      return {en:'5.7L DOHC V12',di:'5707cc',cy:'12',hp:'492',tq:'580 Nm',tx:'5-speed manual',dr:'RWD',z1:'4.5',qm:'12.7',ts:'325 km/h',fc:'22.5',fh:'15.5',fx:'18.7',ft:'Petrol',wt:'1576 kg',se:'2',ca:'100 L',pr:'A$255,000',pc:'A$190,000–500,000'};
    case 'Murcielago':
      if (trim === 'LP670-4 SV') return {en:'6.5L DOHC 48v V12',di:'6496cc',cy:'12',hp:'670',tq:'660 Nm',tx:'6-speed semi-auto',dr:'AWD',z1:'3.2',qm:'11.2',ts:'342 km/h',fc:'26.0',fh:'18.0',fx:'21.5',ft:'Petrol',wt:'1565 kg',se:'2',ca:'100 L',pr:'A$840,000',pc:'A$700,000–1,500,000'};
      if (trim === 'LP640') return {en:'6.5L DOHC 48v V12',di:'6496cc',cy:'12',hp:'640',tq:'660 Nm',tx:'6-speed manual',dr:'AWD',z1:'3.4',qm:'11.4',ts:'340 km/h',fc:'26.0',fh:'18.0',fx:'21.5',ft:'Petrol',wt:'1665 kg',se:'2',ca:'100 L',pr:'A$680,000',pc:'A$450,000–950,000'};
      if (trim === 'LP640 Roadster') return {en:'6.5L DOHC 48v V12',di:'6496cc',cy:'12',hp:'640',tq:'660 Nm',tx:'6-speed manual',dr:'AWD',z1:'3.4',qm:'11.4',ts:'335 km/h',fc:'26.5',fh:'18.5',fx:'22.0',ft:'Petrol',wt:'1800 kg',se:'2',ca:'100 L',pr:'A$720,000',pc:'A$480,000–1,000,000'};
      if (trim === 'Roadster') return {en:'6.2L DOHC V12',di:'6192cc',cy:'12',hp:'580',tq:'650 Nm',tx:'6-speed manual',dr:'AWD',z1:'3.7',qm:'11.9',ts:'336 km/h',fc:'25.5',fh:'17.5',fx:'21.0',ft:'Petrol',wt:'1800 kg',se:'2',ca:'100 L',pr:'A$520,000',pc:'A$340,000–750,000'};
      return {en:'6.2L DOHC V12',di:'6192cc',cy:'12',hp:'580',tq:'650 Nm',tx:'6-speed manual',dr:'AWD',z1:'3.8',qm:'12.0',ts:'336 km/h',fc:'25.0',fh:'17.0',fx:'20.5',ft:'Petrol',wt:'1665 kg',se:'2',ca:'100 L',pr:'A$480,000',pc:'A$310,000–700,000'};
    case 'Gallardo':
      if (trim === 'LP570-4 Superleggera') return {en:'5.2L DOHC 40v V10',di:'5204cc',cy:'10',hp:'570',tq:'540 Nm',tx:'6-speed e-gear',dr:'AWD',z1:'3.4',qm:'11.4',ts:'325 km/h',fc:'16.5',fh:'12.0',fx:'13.9',ft:'Petrol',wt:'1340 kg',se:'2',ca:'100 L',pr:'A$475,000',pc:'A$280,000–520,000'};
      if (trim === 'LP560-4') return {en:'5.2L DOHC 40v V10',di:'5204cc',cy:'10',hp:'560',tq:'540 Nm',tx:'6-speed e-gear',dr:'AWD',z1:'3.7',qm:'11.9',ts:'325 km/h',fc:'16.5',fh:'12.0',fx:'13.9',ft:'Petrol',wt:'1410 kg',se:'2',ca:'100 L',pr:'A$425,000',pc:'A$240,000–470,000'};
      if (trim === 'LP550-2') return {en:'5.2L DOHC 40v V10',di:'5204cc',cy:'10',hp:'550',tq:'540 Nm',tx:'6-speed e-gear',dr:'RWD',z1:'3.9',qm:'12.1',ts:'320 km/h',fc:'16.5',fh:'12.0',fx:'13.9',ft:'Petrol',wt:'1380 kg',se:'2',ca:'100 L',pr:'A$390,000',pc:'A$220,000–440,000'};
      if (trim === 'Spyder') return {en:'5.0L DOHC 40v V10',di:'4961cc',cy:'10',hp:'500',tq:'510 Nm',tx:'6-speed e-gear',dr:'AWD',z1:'4.0',qm:'12.2',ts:'314 km/h',fc:'17.0',fh:'12.5',fx:'14.3',ft:'Petrol',wt:'1600 kg',se:'2',ca:'100 L',pr:'A$380,000',pc:'A$200,000–420,000'};
      return {en:'5.0L DOHC 40v V10',di:'4961cc',cy:'10',hp:'500',tq:'510 Nm',tx:'6-speed e-gear',dr:'AWD',z1:'4.0',qm:'12.2',ts:'309 km/h',fc:'17.0',fh:'12.5',fx:'14.3',ft:'Petrol',wt:'1430 kg',se:'2',ca:'100 L',pr:'A$340,000',pc:'A$180,000–390,000'};
    case 'Aventador':
      if (trim === 'SVJ' || trim === 'SVJ Roadster') return {en:'6.5L NA 60v V12',di:'6498cc',cy:'12',hp:'770',tq:'720 Nm',tx:'7-speed ISR semi-auto',dr:'AWD',z1:'2.8',qm:'10.7',ts:'350 km/h',fc:'20.0',fh:'14.5',fx:'17.0',ft:'Petrol',wt:trim==='SVJ'?'1525 kg':'1625 kg',se:'2',ca:'150 L',pr:'A$1,050,000',pc:'A$900,000+'};
      if (trim === 'LP740-4 S') return {en:'6.5L NA 60v V12',di:'6498cc',cy:'12',hp:'740',tq:'690 Nm',tx:'7-speed ISR semi-auto',dr:'AWD',z1:'2.9',qm:'10.8',ts:'350 km/h',fc:'20.0',fh:'14.5',fx:'17.0',ft:'Petrol',wt:'1575 kg',se:'2',ca:'150 L',pr:'A$780,000',pc:'A$620,000–900,000'};
      if (trim === 'Ultimae') return {en:'6.5L NA 60v V12',di:'6498cc',cy:'12',hp:'780',tq:'720 Nm',tx:'7-speed ISR semi-auto',dr:'AWD',z1:'2.8',qm:'10.7',ts:'355 km/h',fc:'20.0',fh:'14.5',fx:'17.0',ft:'Petrol',wt:'1550 kg',se:'2',ca:'150 L',pr:'A$1,200,000',pc:'A$1,000,000+'};
      if (trim === 'LP700-4 Roadster') return {en:'6.5L NA 60v V12',di:'6498cc',cy:'12',hp:'700',tq:'690 Nm',tx:'7-speed ISR semi-auto',dr:'AWD',z1:'3.0',qm:'11.0',ts:'350 km/h',fc:'20.5',fh:'14.5',fx:'17.3',ft:'Petrol',wt:'1750 kg',se:'2',ca:'150 L',pr:'A$620,000',pc:'A$460,000–750,000'};
      return {en:'6.5L NA 60v V12',di:'6498cc',cy:'12',hp:'700',tq:'690 Nm',tx:'7-speed ISR semi-auto',dr:'AWD',z1:'2.9',qm:'10.8',ts:'350 km/h',fc:'20.5',fh:'14.5',fx:'17.3',ft:'Petrol',wt:'1575 kg',se:'2',ca:'150 L',pr:'A$560,000',pc:'A$420,000–700,000'};
    case 'Huracan':
      if (trim === 'STO') return {en:'5.2L DOHC 40v V10 NA',di:'5204cc',cy:'10',hp:'640',tq:'565 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.0',qm:'11.0',ts:'310 km/h',fc:'15.5',fh:'11.5',fx:'13.1',ft:'Petrol',wt:'1339 kg',se:'2',ca:'50 L',pr:'A$695,000',pc:'A$580,000+'};
      if (trim === 'Performante') return {en:'5.2L DOHC 40v V10 NA',di:'5204cc',cy:'10',hp:'640',tq:'600 Nm',tx:'7-speed dual clutch',dr:'AWD',z1:'2.9',qm:'10.8',ts:'325 km/h',fc:'15.5',fh:'11.5',fx:'13.1',ft:'Petrol',wt:'1382 kg',se:'2',ca:'100 L',pr:'A$580,000',pc:'A$480,000–700,000'};
      if (trim === 'Evo' || trim === 'Evo Spyder') return {en:'5.2L DOHC 40v V10 NA',di:'5204cc',cy:'10',hp:'630',tq:'600 Nm',tx:'7-speed dual clutch',dr:'AWD',z1:'2.9',qm:'10.8',ts:'325 km/h',fc:'15.5',fh:'11.5',fx:'13.1',ft:'Petrol',wt:trim==='Evo'?'1422 kg':'1542 kg',se:'2',ca:'100 L',pr:'A$545,000',pc:'A$430,000–650,000'};
      if (trim === 'LP580-2') return {en:'5.2L DOHC 40v V10 NA',di:'5204cc',cy:'10',hp:'580',tq:'540 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.4',qm:'11.3',ts:'320 km/h',fc:'15.5',fh:'11.5',fx:'13.1',ft:'Petrol',wt:'1389 kg',se:'2',ca:'100 L',pr:'A$450,000',pc:'A$360,000–540,000'};
      if (trim === 'Tecnica') return {en:'5.2L DOHC 40v V10 NA',di:'5204cc',cy:'10',hp:'640',tq:'565 Nm',tx:'7-speed dual clutch',dr:'RWD',z1:'3.2',qm:'11.1',ts:'325 km/h',fc:'15.5',fh:'11.5',fx:'13.1',ft:'Petrol',wt:'1379 kg',se:'2',ca:'100 L',pr:'A$650,000',pc:'A$540,000+'};
      if (trim === 'Spyder') return {en:'5.2L DOHC 40v V10 NA',di:'5204cc',cy:'10',hp:'610',tq:'560 Nm',tx:'7-speed dual clutch',dr:'AWD',z1:'3.4',qm:'11.3',ts:'324 km/h',fc:'15.5',fh:'11.5',fx:'13.1',ft:'Petrol',wt:'1542 kg',se:'2',ca:'100 L',pr:'A$520,000',pc:'A$400,000–600,000'};
      return {en:'5.2L DOHC 40v V10 NA',di:'5204cc',cy:'10',hp:'610',tq:'560 Nm',tx:'7-speed dual clutch',dr:'AWD',z1:'3.2',qm:'11.1',ts:'325 km/h',fc:'15.5',fh:'11.5',fx:'13.1',ft:'Petrol',wt:'1422 kg',se:'2',ca:'100 L',pr:'A$475,000',pc:'A$370,000–560,000'};
    case 'Urus':
      if (trim === 'Performante') return {en:'4.0L twin-turbo V8',di:'3996cc',cy:'8',hp:'666',tq:'850 Nm',tx:'8-speed automatic',dr:'AWD',z1:'3.3',qm:'11.2',ts:'306 km/h',fc:'14.5',fh:'11.5',fx:'12.7',ft:'Petrol',wt:'2150 kg',se:'5',ca:'616 L',pr:'A$595,000',pc:'A$490,000+'};
      if (trim === 'S') return {en:'4.0L twin-turbo V8',di:'3996cc',cy:'8',hp:'666',tq:'850 Nm',tx:'8-speed automatic',dr:'AWD',z1:'3.5',qm:'11.4',ts:'305 km/h',fc:'14.5',fh:'11.5',fx:'12.7',ft:'Petrol',wt:'2197 kg',se:'5',ca:'616 L',pr:'A$565,000',pc:'A$460,000+'};
      return {en:'4.0L twin-turbo V8',di:'3996cc',cy:'8',hp:'650',tq:'850 Nm',tx:'8-speed automatic',dr:'AWD',z1:'3.6',qm:'11.5',ts:'305 km/h',fc:'14.5',fh:'11.5',fx:'12.7',ft:'Petrol',wt:'2200 kg',se:'5',ca:'616 L',pr:'A$525,000',pc:'A$415,000+'};
    case 'LM002':
      return {en:'5.2L DOHC V12',di:'5167cc',cy:'12',hp:'444',tq:'500 Nm',tx:'5-speed manual',dr:'4WD',z1:'7.7',qm:'16.0',ts:'210 km/h',fc:'27.0',fh:'19.0',fx:'22.5',ft:'Petrol',wt:'2700 kg',se:'5',ca:'600 L',pr:'A$290,000',pc:'A$280,000–700,000'};
    case 'Revuelto':
      return {en:'6.5L V12 + 3 electric motors hybrid',di:'6496cc',cy:'12',hp:'1015',tq:'730 Nm',tx:'8-speed dual clutch',dr:'AWD',z1:'2.5',qm:'10.2',ts:'350 km/h',fc:'11.0 equiv',fh:'9.0',fx:'10.0',ft:'Petrol/Plugin Hybrid',wt:'1772 kg',se:'2',ca:'150 L',pr:'A$1,350,000',pc:'A$1,100,000+'};
    default:
      return {en:'V12',di:'5200cc',cy:'12',hp:'550',tq:'560 Nm',tx:'6-speed manual',dr:'AWD',z1:'4.0',qm:'12.2',ts:'320 km/h',fc:'22.0',fh:'15.5',fx:'18.5',ft:'Petrol',wt:'1500 kg',se:'2',ca:'100 L',pr:'A$450,000',pc:'A$350,000+'};
  }
}

const specs = {};
for (const [model, years] of Object.entries(makes['Ferrari'] || {})) {
  for (const [year, trims] of Object.entries(years)) {
    for (const trim of trims) {
      specs[`Ferrari|${model}|${year}|${trim}`] = ferrariSpec(model, year, trim);
    }
  }
}
for (const [model, years] of Object.entries(makes['Lamborghini'] || {})) {
  for (const [year, trims] of Object.entries(years)) {
    for (const trim of trims) {
      specs[`Lamborghini|${model}|${year}|${trim}`] = lamborghiniSpec(model, year, trim);
    }
  }
}

fs.writeFileSync('src/data/supplement76.json', JSON.stringify({ specs }, null, 2));
console.log('supplement76.json written:', Object.keys(specs).length, 'entries');
