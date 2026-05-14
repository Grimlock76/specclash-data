// gen74.cjs — Fiat specs → supplement74.json
const fs = require('fs');
const makes = JSON.parse(fs.readFileSync('src/data/makes.json','utf8'));

function fiatSpec(model, year, trim) {
  const y = parseInt(year);

  switch (model) {
    case '500': {
      if (trim === 'Pop')
        return {en:'1.2L FIRE 8v inline-4',di:'1242cc',cy:'4',hp:'70',tq:'102 Nm',tx:'5-speed manual',dr:'FWD',z1:'13.5',qm:'19.2',ts:'160 km/h',fc:'7.5',fh:'5.3',fx:'6.2',ft:'Petrol',wt:'895 kg',se:'4',ca:'185 L',pr:'A$22,490',pc:'A$8,000–14,000'};
      if (trim === 'Sport')
        return {en:'1.4L 16v inline-4',di:'1368cc',cy:'4',hp:'100',tq:'131 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.9',qm:'17.8',ts:'182 km/h',fc:'8.3',fh:'5.5',fx:'6.6',ft:'Petrol',wt:'920 kg',se:'4',ca:'185 L',pr:'A$26,990',pc:'A$10,000–17,000'};
      if (trim === 'Lounge')
        return {en:'1.4L 16v inline-4',di:'1368cc',cy:'4',hp:'100',tq:'131 Nm',tx:'6-speed DCT',dr:'FWD',z1:'11.2',qm:'18.0',ts:'182 km/h',fc:'8.0',fh:'5.5',fx:'6.4',ft:'Petrol',wt:'930 kg',se:'4',ca:'185 L',pr:'A$28,990',pc:'A$12,000–19,000'};
      return {en:'1.2L inline-4',di:'1242cc',cy:'4',hp:'70',tq:'102 Nm',tx:'5-speed manual',dr:'FWD',z1:'13.5',qm:'19.2',ts:'160 km/h',fc:'7.5',fh:'5.3',fx:'6.2',ft:'Petrol',wt:'895 kg',se:'4',ca:'185 L',pr:'A$22,490',pc:'A$8,000–14,000'};
    }
    case 'Abarth 500': {
      if (trim === '500')
        return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'135',tq:'180 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.9',qm:'16.0',ts:'206 km/h',fc:'8.4',fh:'6.0',fx:'7.0',ft:'Petrol',wt:'980 kg',se:'4',ca:'185 L',pr:'A$34,990',pc:'A$18,000–28,000'};
      if (trim === '595')
        return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'160',tq:'230 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.3',qm:'15.5',ts:'218 km/h',fc:'8.5',fh:'6.2',fx:'7.1',ft:'Petrol',wt:'1010 kg',se:'4',ca:'185 L',pr:'A$38,990',pc:'A$21,000–32,000'};
      if (trim === '695')
        return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'180',tq:'250 Nm',tx:'5-speed manual',dr:'FWD',z1:'6.7',qm:'15.0',ts:'225 km/h',fc:'8.7',fh:'6.3',fx:'7.2',ft:'Petrol',wt:'1030 kg',se:'4',ca:'185 L',pr:'A$44,990',pc:'A$26,000–38,000'};
      return {en:'1.4L T-Jet inline-4',di:'1368cc',cy:'4',hp:'135',tq:'180 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.9',qm:'16.0',ts:'206 km/h',fc:'8.4',fh:'6.0',fx:'7.0',ft:'Petrol',wt:'980 kg',se:'4',ca:'185 L',pr:'A$34,990',pc:'A$18,000–28,000'};
    }
    case 'Punto':
    case 'Grande Punto':
    case 'Punto Evo': {
      if (trim === '1.2' || trim === 'base')
        return {en:'1.2L inline-4',di:'1242cc',cy:'4',hp:'60',tq:'102 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.5',qm:'20.0',ts:'155 km/h',fc:'7.8',fh:'5.2',fx:'6.2',ft:'Petrol',wt:'970 kg',se:'5',ca:'275 L',pr:'A$18,500',pc:'A$3,000–9,000'};
      if (trim === '1.4' || trim === '1.4 16v')
        return {en:'1.4L 16v inline-4',di:'1368cc',cy:'4',hp:'95',tq:'130 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.5',qm:'18.3',ts:'175 km/h',fc:'8.2',fh:'5.6',fx:'6.6',ft:'Petrol',wt:'1010 kg',se:'5',ca:'275 L',pr:'A$22,500',pc:'A$4,000–12,000'};
      if (trim === 'GT Turbo' || trim === '1.4 T-Jet')
        return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'120',tq:'206 Nm',tx:'6-speed manual',dr:'FWD',z1:'8.9',qm:'17.0',ts:'193 km/h',fc:'8.5',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'1040 kg',se:'5',ca:'275 L',pr:'A$26,900',pc:'A$5,000–14,000'};
      if (trim === '1.9 JTD' || trim === '1.3 Multijet')
        return {en:'1.3L JTD Multijet inline-4',di:'1248cc',cy:'4',hp:'75',tq:'190 Nm',tx:'5-speed manual',dr:'FWD',z1:'13.0',qm:'18.9',ts:'163 km/h',fc:'5.2',fh:'3.9',fx:'4.4',ft:'Diesel',wt:'1020 kg',se:'5',ca:'275 L',pr:'A$24,500',pc:'A$4,500–12,000'};
      return {en:'1.4L inline-4',di:'1368cc',cy:'4',hp:'95',tq:'130 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.5',qm:'18.3',ts:'175 km/h',fc:'8.2',fh:'5.6',fx:'6.6',ft:'Petrol',wt:'1010 kg',se:'5',ca:'275 L',pr:'A$22,500',pc:'A$4,000–12,000'};
    }
    case '500X': {
      if (trim === 'Pop') return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'140',tq:'230 Nm',tx:'6-speed manual',dr:'FWD',z1:'9.8',qm:'17.3',ts:'196 km/h',fc:'9.2',fh:'6.1',fx:'7.3',ft:'Petrol',wt:'1360 kg',se:'5',ca:'350 L',pr:'A$29,990',pc:'A$16,000–24,000'};
      if (trim === 'Lounge') return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'140',tq:'230 Nm',tx:'6-speed DCT',dr:'FWD',z1:'9.9',qm:'17.4',ts:'192 km/h',fc:'9.5',fh:'6.4',fx:'7.6',ft:'Petrol',wt:'1380 kg',se:'5',ca:'350 L',pr:'A$33,490',pc:'A$18,000–27,000'};
      if (trim === 'Cross') return {en:'2.4L inline-4',di:'2360cc',cy:'4',hp:'184',tq:'230 Nm',tx:'9-speed automatic',dr:'AWD',z1:'8.6',qm:'16.5',ts:'196 km/h',fc:'10.8',fh:'7.2',fx:'8.7',ft:'Petrol',wt:'1540 kg',se:'5',ca:'350 L',pr:'A$38,990',pc:'A$21,000–32,000'};
      return {en:'1.4L T-Jet inline-4',di:'1368cc',cy:'4',hp:'140',tq:'230 Nm',tx:'6-speed DCT',dr:'FWD',z1:'9.8',qm:'17.3',ts:'196 km/h',fc:'9.2',fh:'6.1',fx:'7.3',ft:'Petrol',wt:'1360 kg',se:'5',ca:'350 L',pr:'A$29,990',pc:'A$16,000–24,000'};
    }
    case '500L': {
      if (trim === 'Pop') return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'120',tq:'206 Nm',tx:'6-speed manual',dr:'FWD',z1:'10.4',qm:'17.5',ts:'183 km/h',fc:'8.8',fh:'5.9',fx:'7.0',ft:'Petrol',wt:'1380 kg',se:'5',ca:'400 L',pr:'A$24,990',pc:'A$11,000–18,000'};
      if (trim === 'Lounge') return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'120',tq:'206 Nm',tx:'6-speed DCT',dr:'FWD',z1:'10.6',qm:'17.6',ts:'183 km/h',fc:'9.0',fh:'6.2',fx:'7.2',ft:'Petrol',wt:'1400 kg',se:'5',ca:'400 L',pr:'A$28,490',pc:'A$13,000–21,000'};
      return {en:'1.4L T-Jet inline-4',di:'1368cc',cy:'4',hp:'120',tq:'206 Nm',tx:'6-speed manual',dr:'FWD',z1:'10.4',qm:'17.5',ts:'183 km/h',fc:'8.8',fh:'5.9',fx:'7.0',ft:'Petrol',wt:'1380 kg',se:'5',ca:'400 L',pr:'A$24,990',pc:'A$11,000–18,000'};
    }
    case 'Bravo': {
      if (y <= 2001) {
        if (trim === '1.4') return {en:'1.4L 12v inline-4',di:'1370cc',cy:'4',hp:'80',tq:'115 Nm',tx:'5-speed manual',dr:'FWD',z1:'12.5',qm:'18.8',ts:'172 km/h',fc:'8.0',fh:'5.4',fx:'6.4',ft:'Petrol',wt:'1100 kg',se:'5',ca:'286 L',pr:'A$22,000',pc:'A$2,500–7,000'};
        if (trim === '1.6 16v') return {en:'1.6L 16v inline-4',di:'1596cc',cy:'4',hp:'103',tq:'144 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.5',qm:'17.6',ts:'190 km/h',fc:'8.6',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'1130 kg',se:'5',ca:'286 L',pr:'A$25,500',pc:'A$3,000–9,000'};
        if (trim === '1.8 16v') return {en:'1.8L 16v inline-4',di:'1747cc',cy:'4',hp:'113',tq:'161 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.5',qm:'17.0',ts:'200 km/h',fc:'9.2',fh:'6.1',fx:'7.3',ft:'Petrol',wt:'1150 kg',se:'5',ca:'286 L',pr:'A$28,000',pc:'A$3,500–10,000'};
        if (trim === 'HGT 2.0') return {en:'2.0L 20v inline-5',di:'1998cc',cy:'5',hp:'147',tq:'191 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.9',qm:'16.0',ts:'214 km/h',fc:'10.2',fh:'6.5',fx:'8.0',ft:'Petrol',wt:'1200 kg',se:'5',ca:'286 L',pr:'A$32,000',pc:'A$5,000–14,000'};
      } else {
        if (trim === '1.4 T-Jet') return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'150',tq:'230 Nm',tx:'6-speed manual',dr:'FWD',z1:'8.5',qm:'16.6',ts:'208 km/h',fc:'8.7',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'1280 kg',se:'5',ca:'280 L',pr:'A$31,490',pc:'A$6,000–15,000'};
        if (trim === '1.6 Multijet') return {en:'1.6L Multijet diesel inline-4',di:'1598cc',cy:'4',hp:'120',tq:'320 Nm',tx:'6-speed manual',dr:'FWD',z1:'9.5',qm:'17.2',ts:'195 km/h',fc:'5.3',fh:'3.8',fx:'4.3',ft:'Diesel',wt:'1300 kg',se:'5',ca:'280 L',pr:'A$33,490',pc:'A$7,000–16,000'};
        return {en:'1.4L T-Jet inline-4',di:'1368cc',cy:'4',hp:'150',tq:'230 Nm',tx:'6-speed manual',dr:'FWD',z1:'8.5',qm:'16.6',ts:'208 km/h',fc:'8.7',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'1280 kg',se:'5',ca:'280 L',pr:'A$31,490',pc:'A$6,000–15,000'};
      }
      return {en:'1.6L inline-4',di:'1596cc',cy:'4',hp:'103',tq:'144 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.5',qm:'17.6',ts:'190 km/h',fc:'8.6',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'1130 kg',se:'5',ca:'286 L',pr:'A$25,500',pc:'A$3,000–9,000'};
    }
    case 'Tipo': {
      if (trim === 'Easy') return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'120',tq:'206 Nm',tx:'6-speed manual',dr:'FWD',z1:'10.0',qm:'17.4',ts:'196 km/h',fc:'8.4',fh:'5.6',fx:'6.7',ft:'Petrol',wt:'1280 kg',se:'5',ca:'440 L',pr:'A$24,990',pc:'A$12,000–19,000'};
      if (trim === 'Lounge') return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'120',tq:'206 Nm',tx:'6-speed DCT',dr:'FWD',z1:'10.2',qm:'17.5',ts:'196 km/h',fc:'8.6',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'1310 kg',se:'5',ca:'440 L',pr:'A$28,490',pc:'A$14,000–22,000'};
      if (trim === 'Sport') return {en:'1.4L T-Jet turbocharged inline-4',di:'1368cc',cy:'4',hp:'150',tq:'230 Nm',tx:'6-speed DCT',dr:'FWD',z1:'8.8',qm:'16.8',ts:'208 km/h',fc:'8.9',fh:'5.9',fx:'7.1',ft:'Petrol',wt:'1330 kg',se:'5',ca:'440 L',pr:'A$32,990',pc:'A$17,000–26,000'};
      return {en:'1.4L T-Jet inline-4',di:'1368cc',cy:'4',hp:'120',tq:'206 Nm',tx:'6-speed manual',dr:'FWD',z1:'10.0',qm:'17.4',ts:'196 km/h',fc:'8.4',fh:'5.6',fx:'6.7',ft:'Petrol',wt:'1280 kg',se:'5',ca:'440 L',pr:'A$24,990',pc:'A$12,000–19,000'};
    }
    case '124 Spider': {
      if (trim === 'Classica') return {en:'1.4L MultiAir turbocharged inline-4',di:'1368cc',cy:'4',hp:'140',tq:'240 Nm',tx:'6-speed manual',dr:'RWD',z1:'7.5',qm:'15.8',ts:'215 km/h',fc:'7.5',fh:'5.5',fx:'6.3',ft:'Petrol',wt:'1060 kg',se:'2',ca:'140 L',pr:'A$35,990',pc:'A$24,000–33,000'};
      if (trim === 'Lusso') return {en:'1.4L MultiAir turbocharged inline-4',di:'1368cc',cy:'4',hp:'140',tq:'240 Nm',tx:'6-speed automatic',dr:'RWD',z1:'7.8',qm:'16.0',ts:'213 km/h',fc:'7.8',fh:'5.8',fx:'6.6',ft:'Petrol',wt:'1080 kg',se:'2',ca:'140 L',pr:'A$40,490',pc:'A$27,000–37,000'};
      if (trim === 'Abarth') return {en:'1.4L MultiAir turbocharged inline-4',di:'1368cc',cy:'4',hp:'170',tq:'250 Nm',tx:'6-speed manual',dr:'RWD',z1:'6.8',qm:'15.2',ts:'232 km/h',fc:'7.8',fh:'5.8',fx:'6.6',ft:'Petrol',wt:'1060 kg',se:'2',ca:'140 L',pr:'A$46,990',pc:'A$31,000–42,000'};
      return {en:'1.4L MultiAir turbocharged inline-4',di:'1368cc',cy:'4',hp:'140',tq:'240 Nm',tx:'6-speed manual',dr:'RWD',z1:'7.5',qm:'15.8',ts:'215 km/h',fc:'7.5',fh:'5.5',fx:'6.3',ft:'Petrol',wt:'1060 kg',se:'2',ca:'140 L',pr:'A$35,990',pc:'A$24,000–33,000'};
    }
    case 'X1/9': {
      if (y <= 1982) return {en:'1.3L inline-4',di:'1290cc',cy:'4',hp:'75',tq:'97 Nm',tx:'4-speed manual',dr:'RWD (mid)',z1:'11.5',qm:'18.2',ts:'168 km/h',fc:'9.2',fh:'6.5',fx:'7.5',ft:'Petrol',wt:'895 kg',se:'2',ca:'115 L',pr:'A$9,500',pc:'A$8,000–20,000'};
      return {en:'1.5L inline-4',di:'1498cc',cy:'4',hp:'85',tq:'120 Nm',tx:'5-speed manual',dr:'RWD (mid)',z1:'10.5',qm:'17.6',ts:'175 km/h',fc:'9.5',fh:'6.8',fx:'7.8',ft:'Petrol',wt:'920 kg',se:'2',ca:'115 L',pr:'A$15,000',pc:'A$10,000–25,000'};
    }
    case 'Panda': {
      if (y <= 1995) {
        if (trim === '45') return {en:'903cc inline-4',di:'903cc',cy:'4',hp:'45',tq:'67 Nm',tx:'4-speed manual',dr:'FWD',z1:'18.0',qm:'22.5',ts:'130 km/h',fc:'7.5',fh:'5.2',fx:'6.1',ft:'Petrol',wt:'730 kg',se:'4',ca:'165 L',pr:'A$9,000',pc:'A$1,500–5,000'};
        if (trim === '4x4') return {en:'903cc inline-4',di:'903cc',cy:'4',hp:'45',tq:'67 Nm',tx:'5-speed manual',dr:'4WD',z1:'19.0',qm:'23.0',ts:'120 km/h',fc:'8.2',fh:'5.8',fx:'6.7',ft:'Petrol',wt:'830 kg',se:'4',ca:'165 L',pr:'A$12,500',pc:'A$2,000–7,000'};
      }
      if (y <= 2012) {
        if (trim === '1.2') return {en:'1.2L inline-4',di:'1242cc',cy:'4',hp:'60',tq:'102 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.5',qm:'20.5',ts:'155 km/h',fc:'7.5',fh:'5.1',fx:'6.0',ft:'Petrol',wt:'955 kg',se:'4',ca:'170 L',pr:'A$15,490',pc:'A$3,000–8,000'};
        if (trim === '100HP') return {en:'1.4L 16v inline-4',di:'1368cc',cy:'4',hp:'100',tq:'130 Nm',tx:'6-speed manual',dr:'FWD',z1:'10.2',qm:'17.6',ts:'183 km/h',fc:'8.4',fh:'5.6',fx:'6.7',ft:'Petrol',wt:'985 kg',se:'4',ca:'170 L',pr:'A$19,990',pc:'A$4,500–11,000'};
        return {en:'1.2L inline-4',di:'1242cc',cy:'4',hp:'60',tq:'102 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.5',qm:'20.5',ts:'155 km/h',fc:'7.5',fh:'5.1',fx:'6.0',ft:'Petrol',wt:'955 kg',se:'4',ca:'170 L',pr:'A$15,490',pc:'A$3,000–8,000'};
      }
      return {en:'1.2L inline-4',di:'1242cc',cy:'4',hp:'69',tq:'102 Nm',tx:'5-speed manual',dr:'FWD',z1:'13.8',qm:'19.8',ts:'162 km/h',fc:'6.4',fh:'4.8',fx:'5.4',ft:'Petrol',wt:'970 kg',se:'4',ca:'225 L',pr:'A$18,990',pc:'A$6,000–14,000'};
    }
    case 'Uno':
      if (trim === 'Turbo ie') return {en:'1.3L Turbo inline-4',di:'1301cc',cy:'4',hp:'105',tq:'152 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.7',qm:'15.8',ts:'205 km/h',fc:'9.0',fh:'6.2',fx:'7.3',ft:'Petrol',wt:'875 kg',se:'4',ca:'270 L',pr:'A$18,000',pc:'A$3,000–12,000'};
      if (trim === '70') return {en:'1.3L inline-4',di:'1301cc',cy:'4',hp:'70',tq:'102 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.9',qm:'18.5',ts:'170 km/h',fc:'7.8',fh:'5.4',fx:'6.3',ft:'Petrol',wt:'810 kg',se:'4',ca:'270 L',pr:'A$12,000',pc:'A$1,500–6,000'};
      if (trim === '55') return {en:'1.1L inline-4',di:'1049cc',cy:'4',hp:'55',tq:'87 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.5',qm:'20.2',ts:'155 km/h',fc:'7.4',fh:'5.2',fx:'6.1',ft:'Petrol',wt:'780 kg',se:'4',ca:'270 L',pr:'A$10,000',pc:'A$1,000–4,500'};
      return {en:'999cc inline-4',di:'999cc',cy:'4',hp:'45',tq:'72 Nm',tx:'4-speed manual',dr:'FWD',z1:'17.5',qm:'22.0',ts:'140 km/h',fc:'7.8',fh:'5.5',fx:'6.4',ft:'Petrol',wt:'750 kg',se:'4',ca:'270 L',pr:'A$8,500',pc:'A$800–3,500'};
    case 'Coupe':
      if (trim === '2.0 20v Turbo') return {en:'2.0L 20v Turbo inline-5',di:'1998cc',cy:'5',hp:'220',tq:'291 Nm',tx:'5-speed manual',dr:'FWD',z1:'6.0',qm:'14.3',ts:'245 km/h',fc:'11.2',fh:'7.5',fx:'9.0',ft:'Petrol',wt:'1340 kg',se:'2+2',ca:'220 L',pr:'A$55,000',pc:'A$8,000–20,000'};
      if (trim === '2.0 20v') return {en:'2.0L 20v inline-5',di:'1998cc',cy:'5',hp:'154',tq:'191 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.0',qm:'16.2',ts:'215 km/h',fc:'10.5',fh:'6.8',fx:'8.3',ft:'Petrol',wt:'1280 kg',se:'2+2',ca:'220 L',pr:'A$45,000',pc:'A$6,000–16,000'};
      return {en:'1.8L 16v inline-4',di:'1747cc',cy:'4',hp:'131',tq:'167 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.2',qm:'17.0',ts:'205 km/h',fc:'9.8',fh:'6.5',fx:'7.8',ft:'Petrol',wt:'1240 kg',se:'2+2',ca:'220 L',pr:'A$38,000',pc:'A$5,000–13,000'};
    case '850':
      if (trim === 'Sport Spider' || trim === 'Sport Coupe') return {en:'843cc inline-4',di:'843cc',cy:'4',hp:'52',tq:'63 Nm',tx:'4-speed manual',dr:'RWD (rear)',z1:'15.5',qm:'21.0',ts:'145 km/h',fc:'9.0',fh:'6.5',fx:'7.5',ft:'Petrol',wt:'715 kg',se:'2',ca:'85 L',pr:'A$4,200',pc:'A$8,000–22,000'};
      return {en:'843cc inline-4',di:'843cc',cy:'4',hp:'34',tq:'53 Nm',tx:'4-speed manual',dr:'RWD (rear)',z1:'20.0',qm:'24.0',ts:'120 km/h',fc:'9.5',fh:'6.8',fx:'7.9',ft:'Petrol',wt:'695 kg',se:'4',ca:'120 L',pr:'A$2,800',pc:'A$4,000–14,000'};
    case '124 Classic':
      if (trim === 'Sport Coupe' || trim === 'Sport Spider') return {en:'1.4L DOHC inline-4',di:'1438cc',cy:'4',hp:'90',tq:'118 Nm',tx:'5-speed manual',dr:'RWD',z1:'10.5',qm:'17.5',ts:'190 km/h',fc:'11.0',fh:'7.5',fx:'9.0',ft:'Petrol',wt:'920 kg',se:'2',ca:'90 L',pr:'A$5,200',pc:'A$12,000–35,000'};
      return {en:'1.2L OHV inline-4',di:'1197cc',cy:'4',hp:'65',tq:'90 Nm',tx:'4-speed manual',dr:'RWD',z1:'14.0',qm:'19.5',ts:'158 km/h',fc:'10.5',fh:'7.2',fx:'8.5',ft:'Petrol',wt:'855 kg',se:'4',ca:'160 L',pr:'A$3,400',pc:'A$4,000–15,000'};
    case '128':
      if (trim === '3P Coupe') return {en:'1.3L DOHC inline-4',di:'1290cc',cy:'4',hp:'75',tq:'100 Nm',tx:'4-speed manual',dr:'FWD',z1:'11.0',qm:'18.0',ts:'175 km/h',fc:'9.5',fh:'6.8',fx:'7.9',ft:'Petrol',wt:'790 kg',se:'2+2',ca:'150 L',pr:'A$5,500',pc:'A$5,000–18,000'};
      if (trim === '1300') return {en:'1.3L DOHC inline-4',di:'1290cc',cy:'4',hp:'67',tq:'97 Nm',tx:'4-speed manual',dr:'FWD',z1:'13.5',qm:'19.5',ts:'162 km/h',fc:'9.8',fh:'6.9',fx:'8.1',ft:'Petrol',wt:'810 kg',se:'4',ca:'260 L',pr:'A$4,200',pc:'A$2,000–8,000'};
      return {en:'1.1L DOHC inline-4',di:'1116cc',cy:'4',hp:'55',tq:'83 Nm',tx:'4-speed manual',dr:'FWD',z1:'16.5',qm:'21.5',ts:'143 km/h',fc:'9.8',fh:'6.8',fx:'8.1',ft:'Petrol',wt:'770 kg',se:'4',ca:'260 L',pr:'A$3,500',pc:'A$1,500–6,000'};
    case '131':
      if (trim === 'Abarth') return {en:'2.0L DOHC inline-4',di:'1995cc',cy:'4',hp:'137',tq:'179 Nm',tx:'5-speed manual',dr:'RWD',z1:'8.5',qm:'16.5',ts:'200 km/h',fc:'13.0',fh:'8.5',fx:'10.5',ft:'Petrol',wt:'1010 kg',se:'5',ca:'310 L',pr:'A$14,000',pc:'A$10,000–35,000'};
      if (trim === '1600') return {en:'1.6L DOHC inline-4',di:'1585cc',cy:'4',hp:'98',tq:'137 Nm',tx:'5-speed manual',dr:'RWD',z1:'11.0',qm:'17.8',ts:'175 km/h',fc:'10.5',fh:'7.2',fx:'8.6',ft:'Petrol',wt:'940 kg',se:'5',ca:'310 L',pr:'A$8,500',pc:'A$3,000–10,000'};
      return {en:'1.3L OHV inline-4',di:'1297cc',cy:'4',hp:'65',tq:'98 Nm',tx:'4-speed manual',dr:'RWD',z1:'14.0',qm:'20.0',ts:'160 km/h',fc:'10.0',fh:'7.0',fx:'8.2',ft:'Petrol',wt:'895 kg',se:'5',ca:'310 L',pr:'A$6,500',pc:'A$2,000–7,000'};
    case 'Tempra':
      if (trim === '2.0 16v') return {en:'2.0L 16v inline-4',di:'1995cc',cy:'4',hp:'147',tq:'182 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.0',qm:'16.2',ts:'210 km/h',fc:'10.5',fh:'6.8',fx:'8.3',ft:'Petrol',wt:'1170 kg',se:'5',ca:'520 L',pr:'A$32,000',pc:'A$3,000–8,000'};
      if (trim === '1.8') return {en:'1.8L inline-4',di:'1756cc',cy:'4',hp:'113',tq:'161 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.8',qm:'17.3',ts:'193 km/h',fc:'9.5',fh:'6.3',fx:'7.6',ft:'Petrol',wt:'1120 kg',se:'5',ca:'520 L',pr:'A$27,000',pc:'A$2,000–6,000'};
      return {en:'1.6L inline-4',di:'1596cc',cy:'4',hp:'88',tq:'128 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.5',qm:'18.5',ts:'172 km/h',fc:'9.0',fh:'6.0',fx:'7.2',ft:'Petrol',wt:'1090 kg',se:'5',ca:'520 L',pr:'A$23,000',pc:'A$1,500–5,000'};
    case 'Marea':
      if (trim === '2.4 JTD') return {en:'2.4L JTD diesel inline-5',di:'2387cc',cy:'5',hp:'130',tq:'305 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.2',qm:'17.0',ts:'198 km/h',fc:'6.2',fh:'4.5',fx:'5.1',ft:'Diesel',wt:'1290 kg',se:'5',ca:'480 L',pr:'A$38,000',pc:'A$3,000–9,000'};
      if (trim === '2.0 20v') return {en:'2.0L 20v inline-5',di:'1998cc',cy:'5',hp:'154',tq:'191 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.8',qm:'16.8',ts:'215 km/h',fc:'10.5',fh:'6.8',fx:'8.3',ft:'Petrol',wt:'1250 kg',se:'5',ca:'480 L',pr:'A$34,000',pc:'A$2,500–8,000'};
      return {en:'1.6L 16v inline-4',di:'1596cc',cy:'4',hp:'103',tq:'144 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.0',qm:'17.8',ts:'190 km/h',fc:'8.8',fh:'5.9',fx:'7.0',ft:'Petrol',wt:'1180 kg',se:'5',ca:'480 L',pr:'A$26,000',pc:'A$1,500–6,000'};
    case 'Croma':
      if (y <= 1996) {
        if (trim === '2.0 Turbo') return {en:'2.0L Turbo inline-4',di:'1995cc',cy:'4',hp:'150',tq:'235 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.8',qm:'16.0',ts:'220 km/h',fc:'11.5',fh:'7.8',fx:'9.3',ft:'Petrol',wt:'1240 kg',se:'5',ca:'460 L',pr:'A$38,000',pc:'A$2,000–7,000'};
        return {en:'2.0L ie inline-4',di:'1995cc',cy:'4',hp:'115',tq:'160 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.0',qm:'17.5',ts:'195 km/h',fc:'10.5',fh:'7.0',fx:'8.4',ft:'Petrol',wt:'1200 kg',se:'5',ca:'460 L',pr:'A$30,000',pc:'A$1,500–5,000'};
      }
      return {en:'1.8L inline-4',di:'1796cc',cy:'4',hp:'140',tq:'175 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.5',qm:'17.2',ts:'210 km/h',fc:'9.0',fh:'6.0',fx:'7.2',ft:'Petrol',wt:'1500 kg',se:'5',ca:'500 L',pr:'A$39,990',pc:'A$5,000–15,000'};
    case 'Barchetta':
      return {en:'1.8L 16v inline-4',di:'1747cc',cy:'4',hp:'130',tq:'164 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.9',qm:'16.8',ts:'200 km/h',fc:'9.5',fh:'6.5',fx:'7.7',ft:'Petrol',wt:'1060 kg',se:'2',ca:'143 L',pr:'A$33,000',pc:'A$5,000–16,000'};
    case 'Multipla':
      return {en:'1.6L Bipower CNG/petrol inline-4',di:'1596cc',cy:'4',hp:'103',tq:'144 Nm',tx:'5-speed manual',dr:'FWD',z1:'12.5',qm:'18.8',ts:'178 km/h',fc:'7.8',fh:'5.5',fx:'6.4',ft:'CNG/Petrol',wt:'1250 kg',se:'6',ca:'285 L',pr:'A$28,000',pc:'A$2,000–7,000'};
    case 'Doblo':
      if (trim === '1.9 Multijet') return {en:'1.9L Multijet diesel inline-4',di:'1910cc',cy:'4',hp:'105',tq:'280 Nm',tx:'5-speed manual',dr:'FWD',z1:'12.5',qm:'19.0',ts:'168 km/h',fc:'6.0',fh:'4.5',fx:'5.0',ft:'Diesel',wt:'1350 kg',se:'5',ca:'750 L',pr:'A$28,000',pc:'A$5,000–18,000'};
      return {en:'1.4L inline-4',di:'1368cc',cy:'4',hp:'95',tq:'127 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.0',qm:'20.0',ts:'161 km/h',fc:'8.5',fh:'6.0',fx:'7.0',ft:'Petrol',wt:'1280 kg',se:'5',ca:'750 L',pr:'A$24,000',pc:'A$4,000–15,000'};
    case 'Freemont':
      if (trim === 'AWD') return {en:'2.0L Multijet diesel inline-4',di:'1956cc',cy:'4',hp:'163',tq:'350 Nm',tx:'6-speed automatic',dr:'AWD',z1:'9.5',qm:'17.3',ts:'195 km/h',fc:'7.2',fh:'5.2',fx:'6.0',ft:'Diesel',wt:'1785 kg',se:'7',ca:'580 L',pr:'A$44,990',pc:'A$12,000–26,000'};
      return {en:'2.0L Multijet diesel inline-4',di:'1956cc',cy:'4',hp:'140',tq:'320 Nm',tx:'6-speed automatic',dr:'FWD',z1:'10.5',qm:'17.8',ts:'185 km/h',fc:'6.8',fh:'5.0',fx:'5.7',ft:'Diesel',wt:'1750 kg',se:'7',ca:'580 L',pr:'A$38,990',pc:'A$10,000–22,000'};
    case 'Stilo':
      if (trim === '2.4 Abarth') return {en:'2.4L 20v inline-5',di:'2387cc',cy:'5',hp:'170',tq:'226 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.1',qm:'15.5',ts:'225 km/h',fc:'11.5',fh:'7.5',fx:'9.1',ft:'Petrol',wt:'1350 kg',se:'5',ca:'295 L',pr:'A$45,000',pc:'A$5,000–15,000'};
      return {en:'1.6L 16v inline-4',di:'1596cc',cy:'4',hp:'103',tq:'145 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.0',qm:'17.9',ts:'188 km/h',fc:'8.5',fh:'5.8',fx:'6.8',ft:'Petrol',wt:'1235 kg',se:'5',ca:'295 L',pr:'A$27,000',pc:'A$3,000–9,000'};
    case 'Sedici':
      if (trim === '2.0 JTD') return {en:'2.0L JTD diesel inline-4',di:'1997cc',cy:'4',hp:'120',tq:'320 Nm',tx:'6-speed manual',dr:'AWD',z1:'11.5',qm:'18.5',ts:'175 km/h',fc:'7.2',fh:'5.5',fx:'6.1',ft:'Diesel',wt:'1425 kg',se:'5',ca:'270 L',pr:'A$28,990',pc:'A$5,000–14,000'};
      return {en:'1.6L inline-4',di:'1586cc',cy:'4',hp:'107',tq:'145 Nm',tx:'6-speed manual',dr:'AWD',z1:'12.5',qm:'18.9',ts:'175 km/h',fc:'8.4',fh:'6.2',fx:'7.0',ft:'Petrol',wt:'1350 kg',se:'5',ca:'270 L',pr:'A$24,990',pc:'A$4,000–12,000'};
    default:
      return {en:'inline-4',di:'1400cc',cy:'4',hp:'95',tq:'130 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.5',qm:'18.5',ts:'175 km/h',fc:'8.5',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'1100 kg',se:'5',ca:'300 L',pr:'A$24,000',pc:'A$4,000–12,000'};
  }
}

function peugeotSpec(model, year, trim) {
  const y = parseInt(year);
  switch (model) {
    case '205':
      if (trim === 'GTI') return {en:'1.9L inline-4',di:'1905cc',cy:'4',hp:'130',tq:'166 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.8',qm:'15.9',ts:'210 km/h',fc:'9.5',fh:'6.5',fx:'7.7',ft:'Petrol',wt:'865 kg',se:'4',ca:'245 L',pr:'A$26,000',pc:'A$5,000–22,000'};
      if (trim === 'GT') return {en:'1.6L inline-4',di:'1580cc',cy:'4',hp:'105',tq:'142 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.5',qm:'17.2',ts:'188 km/h',fc:'8.8',fh:'6.2',fx:'7.2',ft:'Petrol',wt:'830 kg',se:'4',ca:'245 L',pr:'A$21,000',pc:'A$3,000–14,000'};
      if (trim === 'Cabriolet') return {en:'1.9L inline-4',di:'1905cc',cy:'4',hp:'130',tq:'166 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.2',qm:'16.2',ts:'205 km/h',fc:'10.0',fh:'7.0',fx:'8.2',ft:'Petrol',wt:'910 kg',se:'2+2',ca:'180 L',pr:'A$29,000',pc:'A$5,000–20,000'};
      return {en:'1.1L inline-4',di:'1124cc',cy:'4',hp:'60',tq:'87 Nm',tx:'4-speed manual',dr:'FWD',z1:'15.5',qm:'21.0',ts:'155 km/h',fc:'7.5',fh:'5.2',fx:'6.1',ft:'Petrol',wt:'755 kg',se:'4',ca:'245 L',pr:'A$15,000',pc:'A$1,500–7,000'};
    case '206':
      if (trim === 'GTI') return {en:'2.0L 16v inline-4',di:'1997cc',cy:'4',hp:'136',tq:'190 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.6',qm:'16.7',ts:'208 km/h',fc:'9.2',fh:'6.2',fx:'7.4',ft:'Petrol',wt:'1050 kg',se:'4',ca:'245 L',pr:'A$32,000',pc:'A$4,000–13,000'};
      if (trim === 'CC') return {en:'2.0L 16v inline-4',di:'1997cc',cy:'4',hp:'136',tq:'190 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.8',qm:'16.9',ts:'208 km/h',fc:'9.5',fh:'6.5',fx:'7.7',ft:'Petrol',wt:'1100 kg',se:'2+2',ca:'148 L',pr:'A$36,000',pc:'A$4,500–14,000'};
      if (trim === 'XT') return {en:'1.6L inline-4',di:'1587cc',cy:'4',hp:'110',tq:'147 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.5',qm:'17.6',ts:'192 km/h',fc:'8.5',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'1000 kg',se:'4',ca:'245 L',pr:'A$24,000',pc:'A$3,000–10,000'};
      return {en:'1.1L inline-4',di:'1124cc',cy:'4',hp:'60',tq:'90 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.5',qm:'20.0',ts:'159 km/h',fc:'7.5',fh:'5.2',fx:'6.1',ft:'Petrol',wt:'965 kg',se:'4',ca:'245 L',pr:'A$19,000',pc:'A$2,500–8,000'};
    case '207':
      if (trim === 'GT') return {en:'1.6L THP turbocharged inline-4',di:'1598cc',cy:'4',hp:'150',tq:'240 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.2',qm:'16.4',ts:'213 km/h',fc:'8.8',fh:'5.9',fx:'7.0',ft:'Petrol',wt:'1155 kg',se:'4',ca:'270 L',pr:'A$32,000',pc:'A$4,000–13,000'};
      if (trim === 'CC') return {en:'1.6L THP turbocharged inline-4',di:'1598cc',cy:'4',hp:'150',tq:'240 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.5',qm:'16.6',ts:'210 km/h',fc:'9.2',fh:'6.5',fx:'7.5',ft:'Petrol',wt:'1230 kg',se:'2+2',ca:'185 L',pr:'A$36,000',pc:'A$4,500–14,000'};
      return {en:'1.4L VTi inline-4',di:'1360cc',cy:'4',hp:'90',tq:'130 Nm',tx:'5-speed manual',dr:'FWD',z1:'12.0',qm:'18.6',ts:'179 km/h',fc:'8.0',fh:'5.5',fx:'6.5',ft:'Petrol',wt:'1075 kg',se:'4',ca:'270 L',pr:'A$22,000',pc:'A$3,000–10,000'};
    case '208':
      if (trim === 'GT') return {en:'1.2L PureTech turbo inline-3',di:'1199cc',cy:'3',hp:'130',tq:'230 Nm',tx:'8-speed automatic',dr:'FWD',z1:'8.5',qm:'16.6',ts:'208 km/h',fc:'6.2',fh:'4.5',fx:'5.1',ft:'Petrol',wt:'1235 kg',se:'5',ca:'311 L',pr:'A$38,990',pc:'A$18,000–30,000'};
      if (trim === 'e-208') return {en:'Electric motor',di:'—',cy:'0',hp:'136',tq:'260 Nm',tx:'1-speed automatic',dr:'FWD',z1:'8.1',qm:'16.2',ts:'150 km/h',fc:'17.8 kWh/100km',fh:'15.1 kWh/100km',fx:'16.2 kWh/100km',ft:'Electric',wt:'1530 kg',se:'5',ca:'311 L',pr:'A$53,990',pc:'A$35,000–46,000'};
      if (trim === 'Allure') return {en:'1.2L PureTech turbo inline-3',di:'1199cc',cy:'3',hp:'100',tq:'205 Nm',tx:'6-speed manual',dr:'FWD',z1:'10.5',qm:'17.8',ts:'192 km/h',fc:'5.9',fh:'4.3',fx:'4.9',ft:'Petrol',wt:'1165 kg',se:'5',ca:'311 L',pr:'A$32,990',pc:'A$15,000–25,000'};
      return {en:'1.2L PureTech inline-3',di:'1199cc',cy:'3',hp:'75',tq:'118 Nm',tx:'5-speed manual',dr:'FWD',z1:'13.5',qm:'19.5',ts:'172 km/h',fc:'5.5',fh:'4.0',fx:'4.6',ft:'Petrol',wt:'1135 kg',se:'5',ca:'311 L',pr:'A$28,490',pc:'A$12,000–21,000'};
    case '306':
      if (trim === 'GTI 6') return {en:'2.0L 16v inline-4',di:'1997cc',cy:'4',hp:'167',tq:'200 Nm',tx:'6-speed manual',dr:'FWD',z1:'7.5',qm:'15.7',ts:'220 km/h',fc:'10.5',fh:'6.8',fx:'8.3',ft:'Petrol',wt:'1080 kg',se:'4',ca:'245 L',pr:'A$36,000',pc:'A$5,000–18,000'};
      if (trim === 'Cabriolet') return {en:'2.0L inline-4',di:'1997cc',cy:'4',hp:'135',tq:'175 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.0',qm:'17.0',ts:'200 km/h',fc:'10.0',fh:'7.0',fx:'8.2',ft:'Petrol',wt:'1180 kg',se:'2+2',ca:'190 L',pr:'A$39,000',pc:'A$5,000–16,000'};
      return {en:'1.8L inline-4',di:'1761cc',cy:'4',hp:'101',tq:'148 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.5',qm:'18.3',ts:'188 km/h',fc:'9.0',fh:'6.2',fx:'7.3',ft:'Petrol',wt:'1020 kg',se:'4',ca:'330 L',pr:'A$27,000',pc:'A$2,500–9,000'};
    case '307':
      if (trim === 'ST') return {en:'2.0L 16v inline-4',di:'1997cc',cy:'4',hp:'136',tq:'190 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.5',qm:'17.2',ts:'208 km/h',fc:'9.5',fh:'6.5',fx:'7.7',ft:'Petrol',wt:'1180 kg',se:'5',ca:'341 L',pr:'A$32,500',pc:'A$3,000–11,000'};
      if (trim === 'CC') return {en:'2.0L 16v inline-4',di:'1997cc',cy:'4',hp:'136',tq:'190 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.8',qm:'17.4',ts:'205 km/h',fc:'10.0',fh:'7.0',fx:'8.2',ft:'Petrol',wt:'1330 kg',se:'2+2',ca:'190 L',pr:'A$42,500',pc:'A$4,000–13,000'};
      return {en:'1.6L VTi inline-4',di:'1587cc',cy:'4',hp:'110',tq:'147 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.5',qm:'17.6',ts:'192 km/h',fc:'9.0',fh:'6.2',fx:'7.3',ft:'Petrol',wt:'1125 kg',se:'5',ca:'341 L',pr:'A$25,000',pc:'A$2,500–9,000'};
    case '308':
      if (y <= 2013) {
        if (trim === 'Sport') return {en:'2.0L 16v inline-4',di:'1997cc',cy:'4',hp:'150',tq:'200 Nm',tx:'6-speed automatic',dr:'FWD',z1:'9.0',qm:'17.0',ts:'210 km/h',fc:'9.8',fh:'6.5',fx:'7.8',ft:'Petrol',wt:'1285 kg',se:'5',ca:'385 L',pr:'A$34,000',pc:'A$5,000–14,000'};
        return {en:'1.6L VTi inline-4',di:'1598cc',cy:'4',hp:'120',tq:'160 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.5',qm:'17.7',ts:'196 km/h',fc:'8.5',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'1225 kg',se:'5',ca:'385 L',pr:'A$26,990',pc:'A$4,000–12,000'};
      }
      if (trim === 'GT') return {en:'1.6L THP turbo inline-4',di:'1598cc',cy:'4',hp:'205',tq:'285 Nm',tx:'6-speed manual',dr:'FWD',z1:'7.0',qm:'15.3',ts:'240 km/h',fc:'7.5',fh:'5.3',fx:'6.1',ft:'Petrol',wt:'1285 kg',se:'5',ca:'420 L',pr:'A$44,990',pc:'A$22,000–35,000'};
      if (trim === 'Allure') return {en:'1.2L PureTech turbo inline-3',di:'1199cc',cy:'3',hp:'130',tq:'230 Nm',tx:'8-speed automatic',dr:'FWD',z1:'9.5',qm:'17.2',ts:'208 km/h',fc:'6.0',fh:'4.4',fx:'5.0',ft:'Petrol',wt:'1225 kg',se:'5',ca:'420 L',pr:'A$38,990',pc:'A$18,000–29,000'};
      return {en:'1.2L PureTech turbo inline-3',di:'1199cc',cy:'3',hp:'110',tq:'205 Nm',tx:'6-speed manual',dr:'FWD',z1:'10.5',qm:'17.7',ts:'200 km/h',fc:'5.8',fh:'4.2',fx:'4.8',ft:'Petrol',wt:'1185 kg',se:'5',ca:'420 L',pr:'A$33,990',pc:'A$14,000–23,000'};
    case '405':
      if (trim === 'Mi16') return {en:'2.0L 16v inline-4',di:'1998cc',cy:'4',hp:'160',tq:'200 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.0',qm:'16.2',ts:'220 km/h',fc:'10.2',fh:'6.8',fx:'8.2',ft:'Petrol',wt:'1075 kg',se:'5',ca:'480 L',pr:'A$35,000',pc:'A$3,000–12,000'};
      if (trim === 'SR') return {en:'1.9L injection inline-4',di:'1905cc',cy:'4',hp:'105',tq:'155 Nm',tx:'5-speed manual',dr:'FWD',z1:'10.8',qm:'17.9',ts:'193 km/h',fc:'9.8',fh:'6.5',fx:'7.8',ft:'Petrol',wt:'1050 kg',se:'5',ca:'480 L',pr:'A$28,000',pc:'A$2,000–8,000'};
      return {en:'1.6L injection inline-4',di:'1580cc',cy:'4',hp:'92',tq:'135 Nm',tx:'5-speed manual',dr:'FWD',z1:'12.0',qm:'18.8',ts:'177 km/h',fc:'9.0',fh:'6.2',fx:'7.3',ft:'Petrol',wt:'1000 kg',se:'5',ca:'480 L',pr:'A$22,000',pc:'A$1,500–6,000'};
    case '406':
      if (trim === 'Coupe') return {en:'2.9L V6',di:'2946cc',cy:'6',hp:'207',tq:'267 Nm',tx:'5-speed manual',dr:'FWD',z1:'7.8',qm:'16.0',ts:'240 km/h',fc:'12.5',fh:'8.0',fx:'9.8',ft:'Petrol',wt:'1450 kg',se:'2+2',ca:'185 L',pr:'A$58,000',pc:'A$6,000–18,000'};
      if (trim === 'ST') return {en:'2.0L 16v inline-4',di:'1997cc',cy:'4',hp:'136',tq:'190 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.5',qm:'17.2',ts:'205 km/h',fc:'10.0',fh:'6.8',fx:'8.1',ft:'Petrol',wt:'1280 kg',se:'5',ca:'480 L',pr:'A$34,000',pc:'A$3,500–11,000'};
      return {en:'1.8L 16v inline-4',di:'1761cc',cy:'4',hp:'116',tq:'160 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.0',qm:'17.9',ts:'195 km/h',fc:'9.5',fh:'6.5',fx:'7.7',ft:'Petrol',wt:'1210 kg',se:'5',ca:'480 L',pr:'A$28,000',pc:'A$2,500–8,000'};
    case '407':
      if (trim === 'Coupe') return {en:'2.7L V6 HDi diesel biturbo',di:'2720cc',cy:'6',hp:'204',tq:'440 Nm',tx:'6-speed automatic',dr:'FWD',z1:'7.8',qm:'16.0',ts:'235 km/h',fc:'7.5',fh:'5.5',fx:'6.2',ft:'Diesel',wt:'1610 kg',se:'4',ca:'250 L',pr:'A$62,000',pc:'A$7,000–20,000'};
      if (trim === 'SR') return {en:'2.0L 16v inline-4',di:'1997cc',cy:'4',hp:'140',tq:'200 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.8',qm:'17.4',ts:'208 km/h',fc:'9.5',fh:'6.5',fx:'7.7',ft:'Petrol',wt:'1380 kg',se:'5',ca:'407 L',pr:'A$38,000',pc:'A$4,000–12,000'};
      return {en:'2.0L HDi diesel inline-4',di:'1997cc',cy:'4',hp:'136',tq:'340 Nm',tx:'6-speed automatic',dr:'FWD',z1:'10.2',qm:'17.8',ts:'200 km/h',fc:'5.8',fh:'4.2',fx:'4.8',ft:'Diesel',wt:'1430 kg',se:'5',ca:'407 L',pr:'A$36,000',pc:'A$3,500–10,000'};
    case '508':
      if (trim === 'GT') return {en:'1.6L THP turbo inline-4',di:'1598cc',cy:'4',hp:'225',tq:'300 Nm',tx:'8-speed automatic',dr:'FWD',z1:'7.5',qm:'15.8',ts:'243 km/h',fc:'7.8',fh:'5.5',fx:'6.4',ft:'Petrol',wt:'1450 kg',se:'5',ca:'487 L',pr:'A$58,990',pc:'A$28,000–42,000'};
      if (trim === 'Allure') return {en:'1.6L PureTech turbo inline-4',di:'1598cc',cy:'4',hp:'180',tq:'250 Nm',tx:'8-speed automatic',dr:'FWD',z1:'8.5',qm:'16.5',ts:'233 km/h',fc:'7.0',fh:'5.0',fx:'5.8',ft:'Petrol',wt:'1390 kg',se:'5',ca:'487 L',pr:'A$52,990',pc:'A$24,000–38,000'};
      return {en:'1.5L BlueHDi diesel inline-4',di:'1499cc',cy:'4',hp:'130',tq:'300 Nm',tx:'8-speed automatic',dr:'FWD',z1:'10.5',qm:'17.8',ts:'210 km/h',fc:'4.5',fh:'3.5',fx:'3.8',ft:'Diesel',wt:'1400 kg',se:'5',ca:'487 L',pr:'A$47,990',pc:'A$20,000–33,000'};
    case '505':
      if (trim === 'V6') return {en:'2.7L PRV V6',di:'2664cc',cy:'6',hp:'142',tq:'218 Nm',tx:'4-speed automatic',dr:'RWD',z1:'9.5',qm:'17.2',ts:'195 km/h',fc:'13.5',fh:'9.0',fx:'11.0',ft:'Petrol',wt:'1360 kg',se:'5',ca:'540 L',pr:'A$28,000',pc:'A$3,000–10,000'};
      return {en:'2.0L injection inline-4',di:'1971cc',cy:'4',hp:'110',tq:'157 Nm',tx:'5-speed manual',dr:'RWD',z1:'10.8',qm:'18.0',ts:'185 km/h',fc:'11.5',fh:'8.0',fx:'9.5',ft:'Petrol',wt:'1250 kg',se:'5',ca:'540 L',pr:'A$22,000',pc:'A$2,000–8,000'};
    case '504':
      if (trim === 'V6') return {en:'2.7L PRV V6',di:'2664cc',cy:'6',hp:'136',tq:'210 Nm',tx:'4-speed automatic',dr:'RWD',z1:'10.5',qm:'17.8',ts:'190 km/h',fc:'13.5',fh:'9.0',fx:'11.0',ft:'Petrol',wt:'1310 kg',se:'5',ca:'520 L',pr:'A$22,000',pc:'A$5,000–20,000'};
      if (trim === 'Cabriolet') return {en:'2.0L injection inline-4',di:'1971cc',cy:'4',hp:'106',tq:'155 Nm',tx:'4-speed manual',dr:'RWD',z1:'11.5',qm:'18.5',ts:'180 km/h',fc:'12.5',fh:'8.5',fx:'10.2',ft:'Petrol',wt:'1190 kg',se:'2+2',ca:'190 L',pr:'A$18,000',pc:'A$6,000–25,000'};
      return {en:'1.8L injection inline-4',di:'1796cc',cy:'4',hp:'97',tq:'143 Nm',tx:'4-speed manual',dr:'RWD',z1:'13.0',qm:'19.5',ts:'172 km/h',fc:'12.0',fh:'8.0',fx:'9.7',ft:'Petrol',wt:'1160 kg',se:'5',ca:'520 L',pr:'A$14,000',pc:'A$2,000–9,000'};
    case '2008':
      if (trim === 'e-2008') return {en:'Electric motor',di:'—',cy:'0',hp:'136',tq:'260 Nm',tx:'1-speed automatic',dr:'FWD',z1:'8.5',qm:'16.6',ts:'150 km/h',fc:'17.5 kWh/100km',fh:'15.0 kWh/100km',fx:'16.0 kWh/100km',ft:'Electric',wt:'1540 kg',se:'5',ca:'405 L',pr:'A$52,490',pc:'A$35,000–44,000'};
      if (trim === 'GT') return {en:'1.2L PureTech turbo inline-3',di:'1199cc',cy:'3',hp:'130',tq:'230 Nm',tx:'8-speed automatic',dr:'FWD',z1:'8.9',qm:'17.0',ts:'204 km/h',fc:'6.5',fh:'4.8',fx:'5.4',ft:'Petrol',wt:'1280 kg',se:'5',ca:'405 L',pr:'A$44,990',pc:'A$26,000–36,000'};
      return {en:'1.2L PureTech turbo inline-3',di:'1199cc',cy:'3',hp:'100',tq:'205 Nm',tx:'6-speed manual',dr:'FWD',z1:'11.5',qm:'18.3',ts:'185 km/h',fc:'6.0',fh:'4.4',fx:'5.0',ft:'Petrol',wt:'1220 kg',se:'5',ca:'405 L',pr:'A$36,990',pc:'A$20,000–29,000'};
    case '3008':
      if (trim === 'GT') return {en:'1.6L THP turbo inline-4',di:'1598cc',cy:'4',hp:'225',tq:'300 Nm',tx:'6-speed automatic',dr:'FWD',z1:'7.5',qm:'15.8',ts:'240 km/h',fc:'8.0',fh:'5.8',fx:'6.6',ft:'Petrol',wt:'1420 kg',se:'5',ca:'520 L',pr:'A$58,990',pc:'A$28,000–44,000'};
      if (trim === 'Allure') return {en:'1.6L THP turbo inline-4',di:'1598cc',cy:'4',hp:'165',tq:'240 Nm',tx:'6-speed automatic',dr:'FWD',z1:'9.2',qm:'17.0',ts:'210 km/h',fc:'8.0',fh:'5.8',fx:'6.6',ft:'Petrol',wt:'1350 kg',se:'5',ca:'520 L',pr:'A$48,990',pc:'A$22,000–36,000'};
      return {en:'1.6L VTi inline-4',di:'1598cc',cy:'4',hp:'120',tq:'160 Nm',tx:'6-speed automatic',dr:'FWD',z1:'12.0',qm:'18.8',ts:'188 km/h',fc:'8.5',fh:'6.2',fx:'7.1',ft:'Petrol',wt:'1310 kg',se:'5',ca:'520 L',pr:'A$38,990',pc:'A$14,000–25,000'};
    case '5008':
      if (trim === 'GT') return {en:'2.0L BlueHDi diesel inline-4',di:'1997cc',cy:'4',hp:'180',tq:'400 Nm',tx:'8-speed automatic',dr:'FWD',z1:'8.8',qm:'17.0',ts:'225 km/h',fc:'5.8',fh:'4.5',fx:'5.0',ft:'Diesel',wt:'1600 kg',se:'7',ca:'780 L',pr:'A$64,990',pc:'A$32,000–50,000'};
      if (trim === 'Allure') return {en:'1.6L PureTech turbo inline-4',di:'1598cc',cy:'4',hp:'180',tq:'250 Nm',tx:'8-speed automatic',dr:'FWD',z1:'9.5',qm:'17.2',ts:'220 km/h',fc:'7.5',fh:'5.5',fx:'6.2',ft:'Petrol',wt:'1530 kg',se:'7',ca:'780 L',pr:'A$56,990',pc:'A$26,000–42,000'};
      return {en:'1.6L VTi inline-4',di:'1598cc',cy:'4',hp:'120',tq:'160 Nm',tx:'6-speed automatic',dr:'FWD',z1:'13.0',qm:'19.5',ts:'190 km/h',fc:'8.8',fh:'6.2',fx:'7.2',ft:'Petrol',wt:'1470 kg',se:'7',ca:'780 L',pr:'A$44,990',pc:'A$16,000–28,000'};
    case 'RCZ':
      if (trim === 'R') return {en:'1.6L THP turbo inline-4',di:'1598cc',cy:'4',hp:'270',tq:'330 Nm',tx:'6-speed manual',dr:'FWD',z1:'6.0',qm:'14.5',ts:'250 km/h',fc:'8.5',fh:'5.8',fx:'6.8',ft:'Petrol',wt:'1340 kg',se:'2+2',ca:'272 L',pr:'A$62,990',pc:'A$28,000–42,000'};
      return {en:'1.6L THP turbo inline-4',di:'1598cc',cy:'4',hp:'200',tq:'275 Nm',tx:'6-speed manual',dr:'FWD',z1:'7.5',qm:'15.7',ts:'235 km/h',fc:'8.0',fh:'5.5',fx:'6.4',ft:'Petrol',wt:'1290 kg',se:'2+2',ca:'272 L',pr:'A$49,990',pc:'A$20,000–32,000'};
    case '106':
      if (trim === 'S16') return {en:'1.6L DOHC inline-4',di:'1587cc',cy:'4',hp:'118',tq:'150 Nm',tx:'5-speed manual',dr:'FWD',z1:'8.9',qm:'16.9',ts:'198 km/h',fc:'8.5',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'850 kg',se:'4',ca:'165 L',pr:'A$24,000',pc:'A$3,000–11,000'};
      if (trim === 'Rallye') return {en:'1.3L inline-4',di:'1294cc',cy:'4',hp:'100',tq:'125 Nm',tx:'5-speed manual',dr:'FWD',z1:'9.5',qm:'17.2',ts:'187 km/h',fc:'8.5',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'790 kg',se:'4',ca:'165 L',pr:'A$22,000',pc:'A$3,000–12,000'};
      return {en:'1.1L inline-4',di:'1124cc',cy:'4',hp:'60',tq:'87 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.5',qm:'20.5',ts:'157 km/h',fc:'7.5',fh:'5.2',fx:'6.1',ft:'Petrol',wt:'790 kg',se:'4',ca:'165 L',pr:'A$14,000',pc:'A$1,000–4,500'};
    case '107':
      return {en:'1.0L inline-3',di:'998cc',cy:'3',hp:'68',tq:'93 Nm',tx:'5-speed manual',dr:'FWD',z1:'14.2',qm:'20.0',ts:'162 km/h',fc:'6.0',fh:'4.3',fx:'5.0',ft:'Petrol',wt:'820 kg',se:'4',ca:'139 L',pr:'A$14,990',pc:'A$3,000–8,000'};
    case '4008':
      if (trim === 'Outdoor') return {en:'2.0L inline-4',di:'1998cc',cy:'4',hp:'150',tq:'199 Nm',tx:'CVT',dr:'AWD',z1:'10.5',qm:'17.8',ts:'190 km/h',fc:'8.8',fh:'7.0',fx:'7.7',ft:'Petrol',wt:'1530 kg',se:'5',ca:'413 L',pr:'A$36,990',pc:'A$10,000–20,000'};
      return {en:'2.0L inline-4',di:'1998cc',cy:'4',hp:'150',tq:'199 Nm',tx:'CVT',dr:'FWD',z1:'11.0',qm:'18.2',ts:'188 km/h',fc:'8.5',fh:'6.8',fx:'7.4',ft:'Petrol',wt:'1470 kg',se:'5',ca:'413 L',pr:'A$32,990',pc:'A$8,000–17,000'};
    case '4007':
      return {en:'2.4L inline-4',di:'2360cc',cy:'4',hp:'170',tq:'222 Nm',tx:'CVT',dr:'AWD',z1:'10.0',qm:'17.5',ts:'190 km/h',fc:'10.5',fh:'7.8',fx:'9.0',ft:'Petrol',wt:'1780 kg',se:'7',ca:'430 L',pr:'A$42,990',pc:'A$8,000–20,000'};
    default:
      return {en:'1.6L inline-4',di:'1598cc',cy:'4',hp:'112',tq:'152 Nm',tx:'5-speed manual',dr:'FWD',z1:'11.0',qm:'17.9',ts:'190 km/h',fc:'8.5',fh:'5.8',fx:'6.9',ft:'Petrol',wt:'1150 kg',se:'5',ca:'350 L',pr:'A$28,000',pc:'A$6,000–16,000'};
  }
}

const specs = {};
const fiat = makes['Fiat'] || {};
for (const [model, years] of Object.entries(fiat)) {
  for (const [year, trims] of Object.entries(years)) {
    for (const trim of trims) {
      const key = `Fiat|${model}|${year}|${trim}`;
      specs[key] = fiatSpec(model, year, trim);
    }
  }
}
const peugeot = makes['Peugeot'] || {};
for (const [model, years] of Object.entries(peugeot)) {
  for (const [year, trims] of Object.entries(years)) {
    for (const trim of trims) {
      const key = `Peugeot|${model}|${year}|${trim}`;
      specs[key] = peugeotSpec(model, year, trim);
    }
  }
}

fs.writeFileSync('src/data/supplement74.json', JSON.stringify({ specs }, null, 2));
console.log('supplement74.json written:', Object.keys(specs).length, 'entries');
