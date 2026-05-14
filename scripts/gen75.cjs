// gen75.cjs — Daihatsu + Saab → supplement75.json
const fs = require('fs');
const makes = JSON.parse(fs.readFileSync('src/data/makes.json','utf8'));

function daihatsuSpec(model, year, trim) {
  const y = parseInt(year);
  switch (model) {
    case 'Charade': {
      if (trim === 'G10') return {en:'993cc inline-3',di:'993cc',cy:'3',hp:'41',tq:'65 Nm',tx:'4-speed manual',dr:'FWD',z1:'17.5',qm:'22.5',ts:'130 km/h',fc:'6.8',fh:'5.0',fx:'5.7',ft:'Petrol',wt:'620 kg',se:'4',ca:'155 L',pr:'A$5,500',pc:'A$1,000–4,500'};
      if (trim === 'CX' || trim === 'CS') return {en:'993cc inline-3',di:'993cc',cy:'3',hp:'41',tq:'65 Nm',tx:'5-speed manual',dr:'FWD',z1:'16.5',qm:'21.5',ts:'140 km/h',fc:'6.5',fh:'4.8',fx:'5.4',ft:'Petrol',wt:'650 kg',se:'4',ca:'155 L',pr:'A$8,500',pc:'A$1,000–5,000'};
      if (trim === 'CXL') return {en:'993cc inline-3',di:'993cc',cy:'3',hp:'54',tq:'77 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.5',qm:'20.5',ts:'150 km/h',fc:'6.8',fh:'5.0',fx:'5.7',ft:'Petrol',wt:'680 kg',se:'4',ca:'155 L',pr:'A$10,990',pc:'A$1,500–6,000'};
      if (trim === 'Turbo') return {en:'993cc Turbo inline-3',di:'993cc',cy:'3',hp:'68',tq:'105 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.5',qm:'17.6',ts:'173 km/h',fc:'7.5',fh:'5.5',fx:'6.2',ft:'Petrol',wt:'710 kg',se:'4',ca:'155 L',pr:'A$13,990',pc:'A$2,000–8,000'};
      if (trim === 'GTti') return {en:'1.3L 16v DOHC inline-4',di:'1296cc',cy:'4',hp:'91',tq:'110 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.5',qm:'17.2',ts:'175 km/h',fc:'7.8',fh:'5.6',fx:'6.4',ft:'Petrol',wt:'730 kg',se:'4',ca:'155 L',pr:'A$15,490',pc:'A$2,500–9,000'};
      return {en:'993cc inline-3',di:'993cc',cy:'3',hp:'41',tq:'65 Nm',tx:'5-speed manual',dr:'FWD',z1:'16.5',qm:'21.5',ts:'140 km/h',fc:'6.5',fh:'4.8',fx:'5.4',ft:'Petrol',wt:'650 kg',se:'4',ca:'155 L',pr:'A$9,000',pc:'A$1,000–5,000'};
    }
    case 'Sirion': {
      if (y <= 2004) {
        if (trim === 'S' || trim === 'SX') return {en:'1.0L EFI inline-3',di:'989cc',cy:'3',hp:'56',tq:'88 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.5',qm:'20.5',ts:'148 km/h',fc:'6.5',fh:'4.8',fx:'5.4',ft:'Petrol',wt:'720 kg',se:'5',ca:'186 L',pr:'A$13,990',pc:'A$2,000–7,000'};
        return {en:'1.0L EFI inline-3',di:'989cc',cy:'3',hp:'56',tq:'88 Nm',tx:'4-speed automatic',dr:'FWD',z1:'15.5',qm:'21.5',ts:'143 km/h',fc:'7.0',fh:'5.2',fx:'5.8',ft:'Petrol',wt:'740 kg',se:'5',ca:'186 L',pr:'A$14,990',pc:'A$2,000–8,000'};
      }
      if (trim === 'SX') return {en:'1.3L VVTi inline-4',di:'1298cc',cy:'4',hp:'87',tq:'120 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.5',qm:'18.5',ts:'168 km/h',fc:'7.2',fh:'5.2',fx:'6.0',ft:'Petrol',wt:'830 kg',se:'5',ca:'220 L',pr:'A$17,990',pc:'A$4,000–11,000'};
      if (trim === 'Sport') return {en:'1.5L DVVT inline-4',di:'1495cc',cy:'4',hp:'103',tq:'138 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.0',qm:'17.5',ts:'180 km/h',fc:'7.8',fh:'5.8',fx:'6.5',ft:'Petrol',wt:'860 kg',se:'5',ca:'220 L',pr:'A$20,490',pc:'A$5,000–13,000'};
      return {en:'1.0L EFI inline-3',di:'989cc',cy:'3',hp:'58',tq:'90 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.0',qm:'20.0',ts:'150 km/h',fc:'6.5',fh:'4.8',fx:'5.4',ft:'Petrol',wt:'720 kg',se:'5',ca:'186 L',pr:'A$13,990',pc:'A$2,000–7,000'};
    }
    case 'Terios': {
      if (y <= 2005) {
        if (trim === 'SX') return {en:'1.3L EFI inline-4',di:'1298cc',cy:'4',hp:'83',tq:'109 Nm',tx:'5-speed manual',dr:'4WD',z1:'13.5',qm:'19.5',ts:'152 km/h',fc:'8.8',fh:'6.5',fx:'7.4',ft:'Petrol',wt:'1020 kg',se:'5',ca:'175 L',pr:'A$21,990',pc:'A$4,000–11,000'};
        return {en:'1.3L EFI inline-4',di:'1298cc',cy:'4',hp:'83',tq:'109 Nm',tx:'4-speed automatic',dr:'4WD',z1:'14.0',qm:'20.0',ts:'148 km/h',fc:'9.5',fh:'7.0',fx:'8.0',ft:'Petrol',wt:'1040 kg',se:'5',ca:'175 L',pr:'A$23,490',pc:'A$4,500–12,000'};
      }
      if (trim === 'Sport') return {en:'1.5L DVVT inline-4',di:'1495cc',cy:'4',hp:'103',tq:'138 Nm',tx:'4-speed automatic',dr:'4WD',z1:'12.5',qm:'19.0',ts:'158 km/h',fc:'9.5',fh:'7.2',fx:'8.1',ft:'Petrol',wt:'1160 kg',se:'5',ca:'350 L',pr:'A$29,990',pc:'A$8,000–18,000'};
      return {en:'1.5L DVVT inline-4',di:'1495cc',cy:'4',hp:'103',tq:'138 Nm',tx:'5-speed manual',dr:'4WD',z1:'13.0',qm:'19.3',ts:'155 km/h',fc:'9.2',fh:'7.0',fx:'7.9',ft:'Petrol',wt:'1130 kg',se:'5',ca:'350 L',pr:'A$26,990',pc:'A$6,000–15,000'};
    }
    case 'Rocky':
      if (trim === 'SX') return {en:'1.6L EFI inline-4',di:'1590cc',cy:'4',hp:'95',tq:'133 Nm',tx:'5-speed manual',dr:'4WD',z1:'13.5',qm:'19.5',ts:'150 km/h',fc:'10.5',fh:'7.8',fx:'9.0',ft:'Petrol',wt:'1100 kg',se:'4',ca:'150 L',pr:'A$24,990',pc:'A$3,000–10,000'};
      return {en:'1.6L EFI inline-4',di:'1590cc',cy:'4',hp:'95',tq:'133 Nm',tx:'5-speed manual',dr:'4WD',z1:'14.0',qm:'20.0',ts:'148 km/h',fc:'11.0',fh:'8.0',fx:'9.2',ft:'Petrol',wt:'1070 kg',se:'4',ca:'150 L',pr:'A$22,990',pc:'A$2,500–9,000'};
    case 'Feroza':
      if (trim === 'SX') return {en:'1.6L DOHC inline-4',di:'1590cc',cy:'4',hp:'95',tq:'133 Nm',tx:'5-speed manual',dr:'4WD',z1:'12.5',qm:'18.8',ts:'160 km/h',fc:'10.0',fh:'7.5',fx:'8.5',ft:'Petrol',wt:'1050 kg',se:'4',ca:'140 L',pr:'A$26,490',pc:'A$3,000–10,000'};
      return {en:'1.6L DOHC inline-4',di:'1590cc',cy:'4',hp:'95',tq:'133 Nm',tx:'5-speed manual',dr:'4WD',z1:'13.0',qm:'19.2',ts:'157 km/h',fc:'10.5',fh:'7.8',fx:'8.9',ft:'Petrol',wt:'1020 kg',se:'4',ca:'140 L',pr:'A$23,990',pc:'A$2,500–9,000'};
    case 'Applause':
      if (trim === 'Xi') return {en:'1.6L DOHC inline-4',di:'1590cc',cy:'4',hp:'105',tq:'138 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.5',qm:'17.7',ts:'180 km/h',fc:'8.5',fh:'6.0',fx:'7.0',ft:'Petrol',wt:'950 kg',se:'4',ca:'380 L',pr:'A$20,990',pc:'A$1,500–6,000'};
      return {en:'1.6L EFI inline-4',di:'1590cc',cy:'4',hp:'95',tq:'133 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.5',qm:'18.5',ts:'172 km/h',fc:'8.8',fh:'6.2',fx:'7.2',ft:'Petrol',wt:'925 kg',se:'4',ca:'380 L',pr:'A$17,990',pc:'A$1,000–5,000'};
    case 'Copen': {
      if (y <= 2014) return {en:'660cc DOHC Turbo inline-3',di:'659cc',cy:'3',hp:'64',tq:'94 Nm',tx:'4-speed automatic',dr:'FWD',z1:'12.5',qm:'19.0',ts:'150 km/h',fc:'7.5',fh:'5.5',fx:'6.3',ft:'Petrol',wt:'720 kg',se:'2',ca:'92 L',pr:'A$24,990',pc:'A$8,000–18,000'};
      if (trim === 'GR Sport') return {en:'660cc DOHC Turbo inline-3',di:'659cc',cy:'3',hp:'64',tq:'94 Nm',tx:'6-speed manual',dr:'RWD',z1:'11.5',qm:'18.3',ts:'155 km/h',fc:'6.8',fh:'5.2',fx:'5.8',ft:'Petrol',wt:'760 kg',se:'2',ca:'92 L',pr:'A$32,990',pc:'A$15,000–24,000'};
      return {en:'660cc DOHC Turbo inline-3',di:'659cc',cy:'3',hp:'64',tq:'94 Nm',tx:'CVT',dr:'RWD',z1:'12.0',qm:'18.8',ts:'150 km/h',fc:'7.2',fh:'5.5',fx:'6.1',ft:'Petrol',wt:'750 kg',se:'2',ca:'92 L',pr:'A$28,990',pc:'A$12,000–21,000'};
    }
    case 'Move':
      if (trim === 'Custom') return {en:'660cc Turbo inline-3',di:'659cc',cy:'3',hp:'58',tq:'89 Nm',tx:'4-speed automatic',dr:'FWD',z1:'14.5',qm:'20.5',ts:'140 km/h',fc:'7.2',fh:'5.5',fx:'6.1',ft:'Petrol',wt:'780 kg',se:'4',ca:'210 L',pr:'A$15,990',pc:'A$1,500–6,000'};
      return {en:'660cc inline-3',di:'659cc',cy:'3',hp:'38',tq:'56 Nm',tx:'4-speed automatic',dr:'FWD',z1:'17.0',qm:'22.0',ts:'120 km/h',fc:'6.8',fh:'5.2',fx:'5.8',ft:'Petrol',wt:'730 kg',se:'4',ca:'210 L',pr:'A$13,990',pc:'A$1,000–5,000'};
    case 'YRV':
      if (trim === 'GT-ti') return {en:'1.3L DVVT Turbo inline-4',di:'1298cc',cy:'4',hp:'140',tq:'160 Nm',tx:'5-speed manual',dr:'AWD',z1:'8.5',qm:'16.5',ts:'195 km/h',fc:'8.5',fh:'6.0',fx:'7.0',ft:'Petrol',wt:'990 kg',se:'4',ca:'265 L',pr:'A$24,990',pc:'A$4,000–12,000'};
      return {en:'1.0L EFI inline-3',di:'989cc',cy:'3',hp:'58',tq:'89 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.5',qm:'20.5',ts:'148 km/h',fc:'6.8',fh:'5.0',fx:'5.7',ft:'Petrol',wt:'850 kg',se:'4',ca:'265 L',pr:'A$17,990',pc:'A$2,500–8,000'};
    case 'Mira':
      if (trim === 'Turbo') return {en:'660cc Turbo inline-3',di:'659cc',cy:'3',hp:'60',tq:'86 Nm',tx:'5-speed manual',dr:'FWD',z1:'13.5',qm:'19.5',ts:'152 km/h',fc:'7.0',fh:'5.2',fx:'5.9',ft:'Petrol',wt:'630 kg',se:'4',ca:'140 L',pr:'A$10,990',pc:'A$1,000–4,500'};
      return {en:'660cc inline-3',di:'659cc',cy:'3',hp:'38',tq:'54 Nm',tx:'4-speed manual',dr:'FWD',z1:'17.0',qm:'22.5',ts:'115 km/h',fc:'6.5',fh:'5.0',fx:'5.6',ft:'Petrol',wt:'570 kg',se:'4',ca:'140 L',pr:'A$7,990',pc:'A$500–3,000'};
    case 'Hi-Jet':
      return {en:'660cc EFI inline-3',di:'659cc',cy:'3',hp:'38',tq:'57 Nm',tx:'5-speed manual',dr:'RWD',z1:'18.5',qm:'23.0',ts:'110 km/h',fc:'7.5',fh:'6.0',fx:'6.6',ft:'Petrol',wt:'680 kg',se:'2',ca:'1000 L',pr:'A$14,990',pc:'A$3,000–12,000'};
    case 'Pyzar':
      return {en:'1.3L inline-4',di:'1298cc',cy:'4',hp:'87',tq:'120 Nm',tx:'5-speed manual',dr:'FWD',z1:'12.5',qm:'19.0',ts:'162 km/h',fc:'8.0',fh:'5.8',fx:'6.7',ft:'Petrol',wt:'960 kg',se:'5',ca:'400 L',pr:'A$19,990',pc:'A$1,500–6,000'};
    default:
      return {en:'1.3L inline-4',di:'1298cc',cy:'4',hp:'87',tq:'120 Nm',tx:'5-speed manual',dr:'FWD',z1:'12.5',qm:'19.0',ts:'162 km/h',fc:'7.8',fh:'5.8',fx:'6.6',ft:'Petrol',wt:'900 kg',se:'4',ca:'200 L',pr:'A$18,000',pc:'A$2,000–8,000'};
  }
}

function saabSpec(model, year, trim) {
  const y = parseInt(year);
  switch (model) {
    case '900': {
      if (y <= 1986) {
        if (trim === 'Turbo') return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'145',tq:'274 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.9',qm:'17.0',ts:'210 km/h',fc:'11.0',fh:'7.5',fx:'9.0',ft:'Petrol',wt:'1175 kg',se:'4',ca:'380 L',pr:'A$28,000',pc:'A$5,000–18,000'};
        if (trim === 'S') return {en:'2.0L inline-4',di:'1985cc',cy:'4',hp:'100',tq:'163 Nm',tx:'5-speed manual',dr:'FWD',z1:'12.0',qm:'18.8',ts:'175 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'1110 kg',se:'4',ca:'380 L',pr:'A$20,000',pc:'A$3,000–12,000'};
        return {en:'2.0L inline-4',di:'1985cc',cy:'4',hp:'100',tq:'163 Nm',tx:'4-speed manual',dr:'FWD',z1:'13.0',qm:'19.5',ts:'170 km/h',fc:'11.0',fh:'7.5',fx:'8.9',ft:'Petrol',wt:'1090 kg',se:'4',ca:'380 L',pr:'A$17,500',pc:'A$2,500–10,000'};
      }
      if (trim === 'Turbo') return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'175',tq:'274 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.5',qm:'15.7',ts:'218 km/h',fc:'11.5',fh:'8.0',fx:'9.4',ft:'Petrol',wt:'1195 kg',se:'4',ca:'380 L',pr:'A$38,000',pc:'A$6,000–20,000'};
      if (trim === 'SE') return {en:'2.0L inline-4',di:'1985cc',cy:'4',hp:'110',tq:'170 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.5',qm:'18.3',ts:'180 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'1150 kg',se:'4',ca:'380 L',pr:'A$30,000',pc:'A$4,500–16,000'};
      if (trim === 'Cabriolet') return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'185',tq:'280 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.8',qm:'16.0',ts:'215 km/h',fc:'12.0',fh:'8.5',fx:'10.0',ft:'Petrol',wt:'1340 kg',se:'4',ca:'195 L',pr:'A$52,000',pc:'A$8,000–25,000'};
      return {en:'2.0L inline-4',di:'1985cc',cy:'4',hp:'100',tq:'163 Nm',tx:'5-speed manual',dr:'FWD',z1:'12.5',qm:'19.0',ts:'175 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'1110 kg',se:'4',ca:'380 L',pr:'A$24,000',pc:'A$3,500–13,000'};
    }
    case '9000': {
      if (y <= 1989) {
        if (trim === 'Turbo') return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'175',tq:'274 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.8',qm:'16.0',ts:'220 km/h',fc:'11.5',fh:'8.0',fx:'9.5',ft:'Petrol',wt:'1380 kg',se:'5',ca:'455 L',pr:'A$42,000',pc:'A$5,000–16,000'};
        return {en:'2.0L inline-4',di:'1985cc',cy:'4',hp:'120',tq:'178 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.5',qm:'17.6',ts:'195 km/h',fc:'10.8',fh:'7.5',fx:'8.8',ft:'Petrol',wt:'1320 kg',se:'5',ca:'455 L',pr:'A$34,000',pc:'A$3,500–12,000'};
      }
      if (trim === 'Aero') return {en:'2.3L Turbo inline-4',di:'2290cc',cy:'4',hp:'225',tq:'305 Nm',tx:'5-speed manual',dr:'FWD',z1:'6.5',qm:'14.8',ts:'245 km/h',fc:'11.5',fh:'8.0',fx:'9.5',ft:'Petrol',wt:'1440 kg',se:'5',ca:'455 L',pr:'A$62,000',pc:'A$7,000–22,000'};
      if (trim === 'CDE') return {en:'2.3L inline-4',di:'2290cc',cy:'4',hp:'150',tq:'220 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.5',qm:'17.2',ts:'208 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'1380 kg',se:'5',ca:'455 L',pr:'A$48,000',pc:'A$5,000–16,000'};
      return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'175',tq:'280 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.0',qm:'16.2',ts:'218 km/h',fc:'11.0',fh:'7.5',fx:'9.0',ft:'Petrol',wt:'1360 kg',se:'5',ca:'455 L',pr:'A$44,000',pc:'A$4,000–15,000'};
    }
    case '900 NG': {
      if (trim === 'Aero') return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'185',tq:'280 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.2',qm:'15.5',ts:'225 km/h',fc:'11.5',fh:'8.0',fx:'9.4',ft:'Petrol',wt:'1290 kg',se:'4',ca:'350 L',pr:'A$55,000',pc:'A$6,000–18,000'};
      if (trim === 'SE') return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'150',tq:'240 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.5',qm:'16.5',ts:'210 km/h',fc:'11.0',fh:'7.5',fx:'9.0',ft:'Petrol',wt:'1270 kg',se:'4',ca:'350 L',pr:'A$46,000',pc:'A$5,000–15,000'};
      if (trim === 'Cabriolet') return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'185',tq:'280 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.5',qm:'15.8',ts:'222 km/h',fc:'12.0',fh:'8.5',fx:'10.0',ft:'Petrol',wt:'1410 kg',se:'4',ca:'195 L',pr:'A$66,000',pc:'A$8,000–22,000'};
      return {en:'2.0L inline-4',di:'1985cc',cy:'4',hp:'130',tq:'190 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.0',qm:'17.5',ts:'195 km/h',fc:'10.0',fh:'7.0',fx:'8.2',ft:'Petrol',wt:'1240 kg',se:'4',ca:'350 L',pr:'A$39,000',pc:'A$4,500–14,000'};
    }
    case '9-3': {
      if (y <= 2002) {
        if (trim === 'Viggen') return {en:'2.0L Hot Aero Turbo inline-4',di:'1985cc',cy:'4',hp:'230',tq:'350 Nm',tx:'5-speed manual',dr:'FWD',z1:'6.3',qm:'14.5',ts:'250 km/h',fc:'12.5',fh:'8.8',fx:'10.3',ft:'Petrol',wt:'1350 kg',se:'4',ca:'390 L',pr:'A$72,000',pc:'A$8,000–24,000'};
        if (trim === 'Aero') return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'200',tq:'300 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.2',qm:'15.5',ts:'235 km/h',fc:'12.0',fh:'8.2',fx:'9.8',ft:'Petrol',wt:'1310 kg',se:'4',ca:'390 L',pr:'A$62,000',pc:'A$6,000–18,000'};
        if (trim === 'SE') return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'154',tq:'240 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.5',qm:'16.5',ts:'215 km/h',fc:'11.5',fh:'7.8',fx:'9.3',ft:'Petrol',wt:'1280 kg',se:'4',ca:'390 L',pr:'A$49,000',pc:'A$4,500–14,000'};
        return {en:'2.0L Turbo inline-4',di:'1985cc',cy:'4',hp:'150',tq:'240 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.5',qm:'17.2',ts:'215 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'1260 kg',se:'4',ca:'390 L',pr:'A$43,000',pc:'A$3,500–12,000'};
      }
      if (trim === 'Aero') return {en:'2.8L V6 Turbo',di:'2792cc',cy:'6',hp:'280',tq:'400 Nm',tx:'6-speed manual',dr:'FWD',z1:'6.3',qm:'14.5',ts:'250 km/h',fc:'11.5',fh:'8.0',fx:'9.4',ft:'Petrol',wt:'1505 kg',se:'4',ca:'420 L',pr:'A$82,000',pc:'A$10,000–26,000'};
      if (trim === 'Vector') return {en:'2.0T turbo inline-4',di:'1998cc',cy:'4',hp:'210',tq:'300 Nm',tx:'6-speed manual',dr:'FWD',z1:'7.5',qm:'15.8',ts:'240 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'1460 kg',se:'4',ca:'420 L',pr:'A$66,000',pc:'A$8,000–20,000'};
      if (trim === 'Arc') return {en:'2.0T turbo inline-4',di:'1998cc',cy:'4',hp:'175',tq:'265 Nm',tx:'6-speed manual',dr:'FWD',z1:'8.5',qm:'16.5',ts:'225 km/h',fc:'9.8',fh:'6.8',fx:'8.0',ft:'Petrol',wt:'1420 kg',se:'4',ca:'420 L',pr:'A$56,000',pc:'A$6,500–17,000'};
      if (trim === 'Cabriolet') return {en:'2.0T turbo inline-4',di:'1998cc',cy:'4',hp:'210',tq:'300 Nm',tx:'6-speed manual',dr:'FWD',z1:'8.0',qm:'16.3',ts:'235 km/h',fc:'11.0',fh:'7.8',fx:'9.0',ft:'Petrol',wt:'1595 kg',se:'4',ca:'300 L',pr:'A$88,000',pc:'A$12,000–28,000'};
      return {en:'1.8T turbo inline-4',di:'1985cc',cy:'4',hp:'150',tq:'230 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.5',qm:'17.2',ts:'218 km/h',fc:'9.5',fh:'6.5',fx:'7.7',ft:'Petrol',wt:'1380 kg',se:'4',ca:'420 L',pr:'A$48,000',pc:'A$5,000–15,000'};
    }
    case '9-5': {
      if (trim === 'Aero') return {en:'2.3L Hot Aero Turbo inline-4',di:'2290cc',cy:'4',hp:'260',tq:'350 Nm',tx:'6-speed manual',dr:'FWD',z1:'6.5',qm:'14.8',ts:'250 km/h',fc:'11.5',fh:'8.0',fx:'9.4',ft:'Petrol',wt:'1590 kg',se:'5',ca:'425 L',pr:'A$92,000',pc:'A$10,000–26,000'};
      if (trim === 'Vector') return {en:'2.3T turbo inline-4',di:'2290cc',cy:'4',hp:'220',tq:'320 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.2',qm:'15.5',ts:'245 km/h',fc:'11.0',fh:'7.5',fx:'9.0',ft:'Petrol',wt:'1545 kg',se:'5',ca:'425 L',pr:'A$75,000',pc:'A$8,000–20,000'};
      if (trim === 'Arc') return {en:'2.0T turbo inline-4',di:'1998cc',cy:'4',hp:'175',tq:'265 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.0',qm:'17.0',ts:'225 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'1490 kg',se:'5',ca:'425 L',pr:'A$60,000',pc:'A$6,000–16,000'};
      return {en:'2.0T turbo inline-4',di:'1998cc',cy:'4',hp:'150',tq:'240 Nm',tx:'5-speed automatic',dr:'FWD',z1:'10.5',qm:'17.8',ts:'210 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'1460 kg',se:'5',ca:'425 L',pr:'A$52,000',pc:'A$5,000–14,000'};
    }
    case '9-7X':
      if (trim === 'Aero') return {en:'5.3L V8',di:'5328cc',cy:'8',hp:'295',tq:'440 Nm',tx:'4-speed automatic',dr:'AWD',z1:'7.5',qm:'15.8',ts:'195 km/h',fc:'16.5',fh:'11.5',fx:'13.7',ft:'Petrol',wt:'2100 kg',se:'5',ca:'840 L',pr:'A$78,000',pc:'A$8,000–20,000'};
      return {en:'4.2L inline-6',di:'4200cc',cy:'6',hp:'279',tq:'380 Nm',tx:'4-speed automatic',dr:'AWD',z1:'8.5',qm:'16.5',ts:'190 km/h',fc:'16.0',fh:'11.0',fx:'13.2',ft:'Petrol',wt:'2050 kg',se:'5',ca:'840 L',pr:'A$68,000',pc:'A$6,000–16,000'};
    case '9-3X':
      return {en:'2.0T turbo inline-4',di:'1998cc',cy:'4',hp:'220',tq:'300 Nm',tx:'6-speed automatic',dr:'XWD',z1:'7.8',qm:'16.0',ts:'235 km/h',fc:'10.5',fh:'7.5',fx:'8.7',ft:'Petrol',wt:'1680 kg',se:'5',ca:'387 L',pr:'A$72,000',pc:'A$10,000–22,000'};
    default:
      return {en:'2.0T turbo inline-4',di:'1985cc',cy:'4',hp:'175',tq:'265 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.0',qm:'17.0',ts:'225 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'1380 kg',se:'5',ca:'400 L',pr:'A$55,000',pc:'A$5,000–16,000'};
  }
}

const specs = {};
for (const [model, years] of Object.entries(makes['Daihatsu'] || {})) {
  for (const [year, trims] of Object.entries(years)) {
    for (const trim of trims) {
      specs[`Daihatsu|${model}|${year}|${trim}`] = daihatsuSpec(model, year, trim);
    }
  }
}
for (const [model, years] of Object.entries(makes['Saab'] || {})) {
  for (const [year, trims] of Object.entries(years)) {
    for (const trim of trims) {
      specs[`Saab|${model}|${year}|${trim}`] = saabSpec(model, year, trim);
    }
  }
}

fs.writeFileSync('src/data/supplement75.json', JSON.stringify({ specs }, null, 2));
console.log('supplement75.json written:', Object.keys(specs).length, 'entries');
