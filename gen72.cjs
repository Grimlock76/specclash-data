'use strict';
const fs = require('fs');
const makes = require('./src/data/makes.json');
const s71   = require('./src/data/supplement71.json');

const existing = new Set(Object.keys(s71.specs));
const specs = {};

function sp(en,di,cy,hp,tq,tx,dr,z1,ts,wt,se,ca,pr,extra){
  const o = {en,di,cy,hp,tq,tx,dr,z1,ts,wt,se,ca,pr};
  if(extra) Object.assign(o,extra);
  return o;
}

// ── Templates keyed by "model|trim" (year passed where needed) ────────────
function lanciaSpec(model,year,trim){
  const y=parseInt(year);
  switch(model){
    // ── Delta (1979-1993) ──────────────────────────────────────────────
    case 'Delta':
      if(trim==='L')        return sp('1.3L SOHC inline-4','1.3L','4','49 kW (66 hp)','98 Nm','5-speed manual','FWD','~14.5 sec','~160 km/h','915 kg','5','280 L','~£4,500');
      if(trim==='LX')       return sp('1.5L SOHC inline-4','1.5L','4','57 kW (76 hp)','113 Nm','5-speed manual','FWD','~12.5 sec','~170 km/h','925 kg','5','280 L','~£5,200');
      if(trim==='HF')       return sp('1.5L DOHC inline-4','1.5L','4','78 kW (105 hp)','139 Nm','5-speed manual','FWD','~10.0 sec','~183 km/h','960 kg','5','280 L','~£6,500');
      if(trim==='HF Turbo') return sp('1.6L Turbo DOHC inline-4','1.6L','4','99 kW (132 hp)','206 Nm','5-speed manual','FWD','~8.5 sec','~200 km/h','980 kg','5','280 L','~£10,500');
      if(trim==='HF 4WD')   return sp('2.0L Turbo DOHC inline-4','2.0L','4','140 kW (188 hp)','310 Nm','5-speed manual','AWD','~6.5 sec','~210 km/h','1,070 kg','5','280 L','~£16,000');
      if(trim==='HF Integrale')     return sp('2.0L Turbo DOHC 8v inline-4','2.0L','4','147 kW (200 hp)','304 Nm','5-speed manual','AWD','~6.2 sec','~218 km/h','1,095 kg','5','280 L','~£18,500');
      if(trim==='HF Integrale 16v') return sp('2.0L Turbo DOHC 16v inline-4','2.0L','4','162 kW (220 hp)','330 Nm','5-speed manual','AWD','~5.8 sec','~225 km/h','1,100 kg','5','280 L','~£22,000');
      if(trim==='HF Integrale Evo') return sp('2.0L Turbo DOHC 16v inline-4','2.0L','4','213 kW (291 hp)','392 Nm','5-speed manual','AWD','~5.0 sec','~240 km/h','1,115 kg','5','280 L','~£35,000');
      break;
    // ── Stratos ────────────────────────────────────────────────────────
    case 'Stratos':
      if(trim==='HF') return sp('Ferrari Dino 2.4L DOHC 65° V6','2.4L','6','142 kW (190 hp)','226 Nm','5-speed manual','RWD','~6.5 sec','~232 km/h','980 kg','2','150 L','~£20,000',{qm:'~14.5 sec'});
      break;
    // ── Beta (1972-1984) ───────────────────────────────────────────────
    case 'Beta':{
      const old = y<=1974;
      if(trim==='Berlina') return old
        ? sp('1.6L DOHC inline-4','1.6L','4','74 kW (99 hp)','137 Nm','5-speed manual','FWD','~11.0 sec','~175 km/h','1,010 kg','5','300 L','~£2,800')
        : sp('2.0L DOHC inline-4','2.0L','4','88 kW (118 hp)','162 Nm','5-speed manual','FWD','~9.8 sec','~183 km/h','1,010 kg','5','300 L','~£4,500');
      if(trim==='Coupe') return old
        ? sp('1.6L DOHC inline-4','1.6L','4','74 kW (99 hp)','137 Nm','5-speed manual','FWD','~10.5 sec','~178 km/h','990 kg','4','250 L','~£3,200')
        : sp('2.0L DOHC inline-4','2.0L','4','95 kW (127 hp)','169 Nm','5-speed manual','FWD','~9.0 sec','~190 km/h','990 kg','4','250 L','~£5,200');
      if(trim==='Spider') return old
        ? sp('1.6L DOHC inline-4','1.6L','4','74 kW (99 hp)','137 Nm','5-speed manual','FWD','~10.5 sec','~180 km/h','880 kg','2','150 L','~£4,000')
        : sp('2.0L DOHC inline-4','2.0L','4','88 kW (118 hp)','162 Nm','5-speed manual','FWD','~9.5 sec','~188 km/h','880 kg','2','150 L','~£5,500');
      if(trim==='HPE') return old
        ? sp('1.6L DOHC inline-4','1.6L','4','74 kW (99 hp)','137 Nm','5-speed manual','FWD','~11.0 sec','~175 km/h','1,020 kg','4','350 L','~£3,500')
        : sp('2.0L DOHC inline-4','2.0L','4','88 kW (118 hp)','162 Nm','5-speed manual','FWD','~10.0 sec','~183 km/h','1,020 kg','4','350 L','~£5,000');
      break;
    }
    // ── Aprilia (1937-1950) ────────────────────────────────────────────
    case 'Aprilia':
      if(trim==='Standard')  return sp('1.4L SOHC narrow-V4','1.4L','4','42 kW (56 hp)','88 Nm','4-speed manual','RWD','~18.0 sec','~130 km/h','855 kg','4','250 L','~£750');
      if(trim==='Cabriolet') return sp('1.4L SOHC narrow-V4','1.4L','4','42 kW (56 hp)','88 Nm','4-speed manual','RWD','~18.5 sec','~125 km/h','900 kg','4','200 L','~£950');
      break;
    // ── Ardea (1939-1955) ──────────────────────────────────────────────
    case 'Ardea':
      return sp('903cc SOHC narrow-V4','0.9L','4','26 kW (35 hp)','58 Nm','5-speed manual','RWD','~25.0 sec','~105 km/h','730 kg','4','220 L','~£550');
    // ── Aurelia (1950-1958) ────────────────────────────────────────────
    case 'Aurelia':
      if(trim==='B10 Berlina')    return sp('1.8L SOHC V6','1.8L','6','44 kW (59 hp)','115 Nm','4-speed manual','RWD','~20.0 sec','~130 km/h','1,080 kg','5','330 L','~£1,500');
      if(trim==='B21 Berlina')    return sp('2.0L SOHC V6','2.0L','6','60 kW (80 hp)','156 Nm','4-speed manual','RWD','~15.0 sec','~155 km/h','1,080 kg','5','330 L','~£1,800');
      if(trim==='B20 GT')         return y<=1952
        ? sp('2.0L SOHC V6','2.0L','6','60 kW (80 hp)','156 Nm','4-speed manual','RWD','~14.0 sec','~165 km/h','1,100 kg','4','280 L','~£2,000')
        : sp('2.5L SOHC V6','2.5L','6','90 kW (120 hp)','177 Nm','4-speed manual','RWD','~11.5 sec','~185 km/h','1,100 kg','4','280 L','~£2,400');
      if(trim==='B24 Spider')      return sp('2.5L SOHC V6','2.5L','6','90 kW (120 hp)','177 Nm','4-speed manual','RWD','~12.0 sec','~180 km/h','1,090 kg','2','200 L','~£2,800');
      if(trim==='B24 Convertible') return sp('2.5L SOHC V6','2.5L','6','90 kW (120 hp)','177 Nm','4-speed manual','RWD','~12.5 sec','~175 km/h','1,130 kg','4','220 L','~£3,000');
      break;
    // ── Appia (1953-1963) ──────────────────────────────────────────────
    case 'Appia':
      if(trim==='Berlina') return sp('1.1L SOHC narrow-V4','1.1L','4','33 kW (44 hp)','72 Nm','4-speed manual','RWD','~23.0 sec','~115 km/h','815 kg','4','250 L','~£950');
      if(trim==='GT')      return sp('1.1L SOHC narrow-V4','1.1L','4','37 kW (50 hp)','75 Nm','4-speed manual','RWD','~20.0 sec','~125 km/h','830 kg','4','250 L','~£1,200');
      if(trim==='Zagato')  return sp('1.1L SOHC narrow-V4','1.1L','4','44 kW (59 hp)','80 Nm','4-speed manual','RWD','~18.0 sec','~140 km/h','750 kg','2','180 L','~£1,800');
      break;
    // ── Flaminia (1957-1970) ───────────────────────────────────────────
    case 'Flaminia':
      if(trim==='Berlina')    return sp('2.5L SOHC V6','2.5L','6','89 kW (119 hp)','186 Nm','4-speed manual','RWD','~14.0 sec','~165 km/h','1,330 kg','5','380 L','~£2,200');
      if(trim==='GT')         return sp('2.5L SOHC V6','2.5L','6','97 kW (129 hp)','196 Nm','4-speed manual','RWD','~12.5 sec','~180 km/h','1,290 kg','4','280 L','~£2,800');
      if(trim==='Sport')      return sp('2.5L SOHC V6 Zagato','2.5L','6','103 kW (138 hp)','200 Nm','4-speed manual','RWD','~11.5 sec','~195 km/h','1,180 kg','4','260 L','~£3,500');
      if(trim==='Convertible')return sp('2.5L SOHC V6','2.5L','6','97 kW (129 hp)','196 Nm','4-speed manual','RWD','~13.0 sec','~170 km/h','1,350 kg','4','200 L','~£3,200');
      break;
    // ── Flavia (1961-1974) ─────────────────────────────────────────────
    case 'Flavia':{
      const fl18 = y>=1966;
      if(trim==='Berlina') return fl18
        ? sp('1.8L SOHC flat-4','1.8L','4','70 kW (94 hp)','137 Nm','5-speed manual','FWD','~12.5 sec','~168 km/h','1,140 kg','4','340 L','~£2,200')
        : sp('1.5L SOHC flat-4','1.5L','4','60 kW (80 hp)','118 Nm','4-speed manual','FWD','~14.5 sec','~158 km/h','1,110 kg','4','340 L','~£1,400');
      if(trim==='Coupe') return fl18
        ? sp('1.8L SOHC flat-4','1.8L','4','74 kW (99 hp)','148 Nm','5-speed manual','FWD','~11.5 sec','~178 km/h','1,080 kg','4','270 L','~£2,600')
        : sp('1.5L SOHC flat-4','1.5L','4','63 kW (84 hp)','122 Nm','4-speed manual','FWD','~13.5 sec','~168 km/h','1,080 kg','4','270 L','~£1,700');
      if(trim==='Sport') return sp('1.5L SOHC flat-4 Zagato','1.5L','4','74 kW (99 hp)','140 Nm','5-speed manual','FWD','~12.0 sec','~180 km/h','960 kg','2','180 L','~£2,800');
      if(trim==='1800')  return sp('1.8L SOHC flat-4 twin-carb','1.8L','4','78 kW (104 hp)','152 Nm','5-speed manual','FWD','~11.0 sec','~182 km/h','1,110 kg','4','340 L','~£2,400');
      break;
    }
    // ── Fulvia (1963-1976) ─────────────────────────────────────────────
    case 'Fulvia':
      if(trim==='Berlina')          return sp('1.1L DOHC narrow-V4','1.1L','4','36 kW (48 hp)','75 Nm','4-speed manual','FWD','~17.5 sec','~140 km/h','830 kg','4','250 L','~£1,000');
      if(trim==='Coupe')            return y<=1966
        ? sp('1.2L DOHC narrow-V4','1.2L','4','56 kW (75 hp)','108 Nm','4-speed manual','FWD','~13.0 sec','~168 km/h','850 kg','4','240 L','~£1,400')
        : sp('1.3L DOHC narrow-V4','1.3L','4','63 kW (84 hp)','118 Nm','4-speed manual','FWD','~12.0 sec','~173 km/h','870 kg','4','240 L','~£1,600');
      if(trim==='HF')               return sp('1.6L DOHC narrow-V4','1.6L','4','96 kW (128 hp)','152 Nm','5-speed manual','FWD','~8.8 sec','~188 km/h','895 kg','4','240 L','~£2,400');
      if(trim==='Sport Zagato')     return sp('1.3L DOHC narrow-V4 Zagato','1.3L','4','74 kW (99 hp)','128 Nm','5-speed manual','FWD','~10.5 sec','~185 km/h','780 kg','2','200 L','~£2,200');
      if(trim==='Coupe 1.3S')       return sp('1.3L DOHC narrow-V4','1.3L','4','67 kW (90 hp)','120 Nm','4-speed manual','FWD','~11.5 sec','~175 km/h','870 kg','4','240 L','~£1,800');
      if(trim==='Coupe 1.6 HF Lusso')return sp('1.6L DOHC narrow-V4','1.6L','4','88 kW (118 hp)','142 Nm','5-speed manual','FWD','~9.5 sec','~183 km/h','890 kg','4','240 L','~£2,600');
      break;
    // ── Beta Montecarlo (1975-1981) ────────────────────────────────────
    case 'Beta Montecarlo':
      if(trim==='Standard')return sp('2.0L DOHC inline-4 mid-engine','2.0L','4','90 kW (121 hp)','165 Nm','5-speed manual','RWD','~8.8 sec','~200 km/h','975 kg','2','200 L','~£7,500',{qm:'~16.5 sec'});
      if(trim==='Turbo')   return sp('1.4L Turbo DOHC inline-4 mid-engine','1.4L','4','97 kW (130 hp)','172 Nm','5-speed manual','RWD','~7.5 sec','~220 km/h','960 kg','2','200 L','~£10,000',{qm:'~15.8 sec'});
      break;
    // ── Gamma (1976-1984) ──────────────────────────────────────────────
    case 'Gamma':
      if(trim==='Berlina') return sp('2.5L DOHC flat-4','2.5L','4','100 kW (134 hp)','196 Nm','5-speed manual','FWD','~10.5 sec','~185 km/h','1,360 kg','5','380 L','~£9,500');
      if(trim==='Coupe')   return sp('2.5L DOHC flat-4','2.5L','4','103 kW (138 hp)','196 Nm','5-speed manual','FWD','~9.8 sec','~190 km/h','1,310 kg','4','280 L','~£11,000');
      break;
    // ── Rally 037 (1982-1984) ──────────────────────────────────────────
    case 'Rally 037':
      if(trim==='Standard')  return sp('2.0L Supercharged DOHC inline-4','2.0L','4','186 kW (250 hp)','314 Nm','5-speed manual','RWD','~5.2 sec','~220 km/h','1,080 kg','2','180 L','~£25,000',{qm:'~13.5 sec'});
      if(trim==='Evolution') return sp('2.0L SC DOHC inline-4 Evolution','2.0L','4','205 kW (275 hp)','330 Nm','5-speed manual','RWD','~4.8 sec','~225 km/h','1,050 kg','2','180 L','~£40,000',{qm:'~13.0 sec'});
      break;
    // ── Prisma (1982-1989) ─────────────────────────────────────────────
    case 'Prisma':
      if(trim==='1300')       return sp('1.3L SOHC inline-4','1.3L','4','59 kW (79 hp)','108 Nm','5-speed manual','FWD','~13.0 sec','~163 km/h','1,010 kg','5','300 L','~£5,500');
      if(trim==='1500')       return sp('1.5L SOHC inline-4','1.5L','4','66 kW (89 hp)','121 Nm','5-speed manual','FWD','~11.5 sec','~170 km/h','1,030 kg','5','300 L','~£6,500');
      if(trim==='1600')       return sp('1.6L DOHC inline-4','1.6L','4','74 kW (99 hp)','137 Nm','5-speed manual','FWD','~10.5 sec','~175 km/h','1,060 kg','5','300 L','~£7,500');
      if(trim==='2000 Turbo') return sp('2.0L Turbo DOHC inline-4','2.0L','4','110 kW (148 hp)','235 Nm','5-speed manual','FWD','~7.8 sec','~210 km/h','1,170 kg','5','300 L','~£11,500');
      break;
    // ── Thema (1984-1994) ──────────────────────────────────────────────
    case 'Thema':
      if(trim==='2000')          return sp('2.0L DOHC inline-4','2.0L','4','100 kW (134 hp)','181 Nm','5-speed manual','FWD','~10.5 sec','~190 km/h','1,310 kg','5','380 L','~£12,000');
      if(trim==='2000 Turbo')    return sp('2.0L Turbo DOHC inline-4','2.0L','4','126 kW (170 hp)','255 Nm','5-speed manual','FWD','~8.0 sec','~210 km/h','1,360 kg','5','380 L','~£15,000');
      if(trim==='2000 Turbo 16v')return sp('2.0L Turbo DOHC 16v inline-4','2.0L','4','147 kW (200 hp)','300 Nm','5-speed manual','FWD','~6.5 sec','~230 km/h','1,360 kg','5','380 L','~£18,000');
      if(trim==='8.32')          return sp('Ferrari 3.0L DOHC 32v V8','3.0L','8','163 kW (218 hp)','265 Nm','5-speed auto','FWD','~6.8 sec','~240 km/h','1,430 kg','5','380 L','~£35,000');
      if(trim==='SW')            return sp('2.0L Turbo DOHC inline-4','2.0L','4','147 kW (200 hp)','300 Nm','5-speed manual','FWD','~7.0 sec','~225 km/h','1,420 kg','5','520 L','~£20,000');
      break;
    // ── Y10 (1985-1996) ────────────────────────────────────────────────
    case 'Y10':
      if(trim==='Fire') return sp('1.0L FIRE SOHC inline-4','1.0L','4','33 kW (44 hp)','74 Nm','5-speed manual','FWD','~17.0 sec','~140 km/h','700 kg','4','225 L','~£5,000');
      if(trim==='GT')   return sp('1.1L SOHC inline-4','1.1L','4','47 kW (63 hp)','92 Nm','5-speed manual','FWD','~14.0 sec','~152 km/h','720 kg','4','225 L','~£6,500');
      if(trim==='Turbo')return sp('1.0L Turbo SOHC inline-4','1.0L','4','56 kW (75 hp)','110 Nm','5-speed manual','FWD','~10.5 sec','~170 km/h','740 kg','4','225 L','~£8,500');
      if(trim==='LX')   return sp('1.1L SOHC inline-4','1.1L','4','44 kW (59 hp)','88 Nm','5-speed manual','FWD','~15.0 sec','~147 km/h','720 kg','4','225 L','~£7,000');
      if(trim==='4WD')  return sp('1.1L SOHC inline-4 AWD','1.1L','4','47 kW (63 hp)','92 Nm','5-speed manual','AWD','~15.0 sec','~148 km/h','830 kg','4','225 L','~£8,000');
      break;
    // ── Dedra (1989-1999) ──────────────────────────────────────────────
    case 'Dedra':
      if(trim==='1.6')        return sp('1.6L DOHC 16v inline-4','1.6L','4','73 kW (98 hp)','130 Nm','5-speed manual','FWD','~11.0 sec','~180 km/h','1,200 kg','5','510 L','~£10,000');
      if(trim==='2.0')        return sp('2.0L DOHC 16v inline-4','2.0L','4','90 kW (121 hp)','163 Nm','5-speed manual','FWD','~10.0 sec','~190 km/h','1,230 kg','5','510 L','~£12,000');
      if(trim==='2.0 Turbo')  return sp('2.0L Turbo DOHC inline-4','2.0L','4','136 kW (185 hp)','294 Nm','5-speed manual','FWD','~6.8 sec','~220 km/h','1,290 kg','5','510 L','~£16,000');
      if(trim==='Integrale')  return sp('2.0L Turbo DOHC 16v inline-4 AWD','2.0L','4','147 kW (200 hp)','314 Nm','5-speed manual','AWD','~6.0 sec','~230 km/h','1,350 kg','5','510 L','~£22,000');
      if(trim==='SW')         return sp('2.0L Turbo DOHC inline-4','2.0L','4','136 kW (185 hp)','294 Nm','5-speed manual','FWD','~7.0 sec','~218 km/h','1,340 kg','5','650 L','~£18,000');
      break;
    // ── Kappa (1994-2001) ──────────────────────────────────────────────
    case 'Kappa':
      if(trim==='2.0')   return sp('2.0L DOHC 16v inline-4','2.0L','4','107 kW (144 hp)','186 Nm','5-speed manual','FWD','~9.8 sec','~200 km/h','1,440 kg','5','510 L','~£17,000');
      if(trim==='2.4')   return sp('2.4L DOHC 20v inline-5','2.4L','5','125 kW (168 hp)','216 Nm','5-speed manual','FWD','~9.2 sec','~210 km/h','1,470 kg','5','510 L','~£20,000');
      if(trim==='2.4 SW')return sp('2.4L DOHC 20v inline-5','2.4L','5','125 kW (168 hp)','216 Nm','5-speed manual','FWD','~9.5 sec','~205 km/h','1,520 kg','5','650 L','~£22,000');
      if(trim==='Coupe') return sp('2.0L Turbo DOHC inline-5','2.0L','5','147 kW (197 hp)','275 Nm','5-speed manual','FWD','~7.2 sec','~240 km/h','1,480 kg','4','310 L','~£28,000');
      break;
    // ── Zeta (1994-2002) ───────────────────────────────────────────────
    case 'Zeta':
      if(trim==='2.0')        return sp('2.0L DOHC 16v inline-4','2.0L','4','100 kW (134 hp)','185 Nm','5-speed manual','FWD','~12.0 sec','~195 km/h','1,560 kg','7','700 L','~£16,000');
      if(trim==='2.0 Turbo')  return sp('2.0L Turbo DOHC inline-4','2.0L','4','147 kW (197 hp)','285 Nm','5-speed manual','FWD','~9.0 sec','~210 km/h','1,660 kg','7','700 L','~£20,000');
      if(trim==='2.1 TD')     return sp('2.1L TD SOHC inline-4 diesel','2.1L','4','71 kW (95 hp)','220 Nm','5-speed manual','FWD','~14.0 sec','~175 km/h','1,640 kg','7','700 L','~£17,000');
      break;
    // ── Ypsilon (1995-2023) ────────────────────────────────────────────
    case 'Ypsilon':{
      const gen = y>=2011 ? 3 : y>=2004 ? 2 : 1;
      if(trim==='1.1')          return sp('1.1L SOHC inline-4','1.1L','4','40 kW (54 hp)','76 Nm','5-speed manual','FWD','~15.5 sec','~148 km/h','855 kg','4','225 L','~£8,000');
      if(trim==='1.2'||trim==='1.2 Gold')  return gen===1
        ? sp('1.2L SOHC inline-4','1.2L','4','52 kW (70 hp)','98 Nm','5-speed manual','FWD','~13.5 sec','~158 km/h','880 kg','4','225 L','~£9,000')
        : sp('1.2L SOHC inline-4','1.2L','4','51 kW (69 hp)','102 Nm','5-speed manual','FWD','~14.0 sec','~158 km/h','1,045 kg','5','225 L','~£14,000');
      if(trim==='1.2 Platinum') return sp('1.2L SOHC inline-4','1.2L','4','51 kW (69 hp)','102 Nm','5-speed manual','FWD','~14.0 sec','~158 km/h','1,050 kg','5','225 L','~£15,000');
      if(trim==='GT')           return sp('1.2L SOHC inline-4 sport','1.2L','4','63 kW (84 hp)','110 Nm','5-speed manual','FWD','~11.5 sec','~168 km/h','890 kg','4','225 L','~£11,000');
      if(trim==='Gold')         return gen===1
        ? sp('1.2L SOHC inline-4','1.2L','4','52 kW (70 hp)','98 Nm','5-speed manual','FWD','~13.5 sec','~158 km/h','885 kg','4','225 L','~£10,000')
        : sp('1.4L SOHC inline-4','1.4L','4','70 kW (95 hp)','120 Nm','5-speed manual','FWD','~11.0 sec','~172 km/h','970 kg','5','225 L','~£12,500');
      if(trim==='Turbo')        return sp('1.2L Turbo SOHC inline-4','1.2L','4','74 kW (99 hp)','140 Nm','5-speed manual','FWD','~10.0 sec','~185 km/h','920 kg','4','225 L','~£12,000');
      if(trim==='1.4')          return sp('1.4L SOHC inline-4','1.4L','4','70 kW (95 hp)','120 Nm','5-speed manual','FWD','~11.0 sec','~172 km/h','960 kg','5','225 L','~£11,500');
      if(trim==='1.3 Multijet') return sp('1.3L JTD DOHC diesel inline-4','1.3L','4','55 kW (74 hp)','145 Nm','5-speed manual','FWD','~13.5 sec','~160 km/h','1,010 kg','5','225 L','~£12,500');
      if(trim==='0.9 TwinAir')  return sp('0.9L TwinAir Turbo inline-2','0.9L','2','63 kW (85 hp)','145 Nm','5-speed manual','FWD','~12.0 sec','~175 km/h','1,005 kg','5','225 L','~£16,000');
      break;
    }
    // ── Lybra (1999-2005) ──────────────────────────────────────────────
    case 'Lybra':
      if(trim==='1.6')    return sp('1.6L DOHC 16v inline-4','1.6L','4','76 kW (102 hp)','142 Nm','5-speed manual','FWD','~12.0 sec','~185 km/h','1,240 kg','5','510 L','~£12,000');
      if(trim==='1.8')    return sp('1.8L DOHC 16v inline-4','1.8L','4','95 kW (128 hp)','169 Nm','5-speed manual','FWD','~10.2 sec','~195 km/h','1,290 kg','5','510 L','~£14,000');
      if(trim==='2.0')    return sp('2.0L DOHC 16v inline-4','2.0L','4','107 kW (144 hp)','186 Nm','5-speed manual','FWD','~9.5 sec','~200 km/h','1,310 kg','5','510 L','~£16,000');
      if(trim==='SW')     return sp('2.0L DOHC 16v inline-4','2.0L','4','107 kW (144 hp)','186 Nm','5-speed manual','FWD','~9.5 sec','~198 km/h','1,380 kg','5','650 L','~£17,500');
      if(trim==='2.4 JTD')return sp('2.4L JTD DOHC diesel inline-5','2.4L','5','103 kW (138 hp)','305 Nm','5-speed manual','FWD','~10.8 sec','~196 km/h','1,430 kg','5','510 L','~£18,000');
      break;
    // ── Thesis (2001-2009) ─────────────────────────────────────────────
    case 'Thesis':
      if(trim==='2.0 Turbo')return sp('2.0L Turbo DOHC 20v inline-5','2.0L','5','136 kW (185 hp)','270 Nm','5-speed auto','FWD','~8.5 sec','~215 km/h','1,620 kg','5','530 L','~£30,000');
      if(trim==='2.4')      return sp('2.4L DOHC 20v inline-5','2.4L','5','125 kW (168 hp)','216 Nm','5-speed auto','FWD','~9.0 sec','~210 km/h','1,600 kg','5','530 L','~£27,000');
      if(trim==='3.0 V6')   return sp('3.0L DOHC 24v V6','3.0L','6','152 kW (204 hp)','270 Nm','5-speed auto','FWD','~8.0 sec','~230 km/h','1,680 kg','5','530 L','~£38,000');
      break;
    // ── Phedra (2002-2010) ─────────────────────────────────────────────
    case 'Phedra':
      if(trim==='2.0 16v') return sp('2.0L DOHC 16v inline-4','2.0L','4','103 kW (138 hp)','200 Nm','4-speed auto','FWD','~11.5 sec','~180 km/h','1,560 kg','7','700 L','~£22,000');
      if(trim==='2.0 JTD') return sp('2.0L JTD DOHC diesel inline-4','2.0L','4','80 kW (107 hp)','250 Nm','5-speed manual','FWD','~13.0 sec','~172 km/h','1,590 kg','7','700 L','~£21,000');
      if(trim==='2.2 JTD') return sp('2.2L JTD DOHC diesel inline-4','2.2L','4','100 kW (134 hp)','314 Nm','5-speed manual','FWD','~11.0 sec','~182 km/h','1,630 kg','7','700 L','~£24,000');
      break;
    // ── Musa (2004-2012) ───────────────────────────────────────────────
    case 'Musa':
      if(trim==='1.4'||trim==='Gold')   return sp('1.4L SOHC inline-4','1.4L','4','70 kW (95 hp)','120 Nm','5-speed manual','FWD','~11.5 sec','~168 km/h','1,150 kg','5','280 L','~£13,000');
      if(trim==='1.3 Multijet') return sp('1.3L JTD DOHC diesel inline-4','1.3L','4','55 kW (74 hp)','145 Nm','5-speed manual','FWD','~14.0 sec','~160 km/h','1,200 kg','5','280 L','~£14,500');
      if(trim==='1.9 Multijet') return sp('1.9L JTD DOHC diesel inline-4','1.9L','4','88 kW (118 hp)','280 Nm','6-speed manual','FWD','~10.5 sec','~180 km/h','1,260 kg','5','280 L','~£16,000');
      break;
    // ── Delta II (2008-2014) ───────────────────────────────────────────
    case 'Delta II':
      if(trim==='1.4 Turbo')   return sp('1.4L MultiAir Turbo inline-4','1.4L','4','103 kW (140 hp)','230 Nm','6-speed manual','FWD','~9.5 sec','~200 km/h','1,390 kg','5','280 L','~£18,000');
      if(trim==='1.6 Multijet') return sp('1.6L JTD diesel inline-4','1.6L','4','77 kW (105 hp)','280 Nm','6-speed manual','FWD','~11.5 sec','~185 km/h','1,420 kg','5','280 L','~£19,000');
      if(trim==='1.8 DI Turbo') return sp('1.8L DI Turbo DOHC inline-4','1.8L','4','154 kW (207 hp)','320 Nm','6-speed manual','FWD','~7.2 sec','~230 km/h','1,495 kg','5','280 L','~£26,000');
      if(trim==='2.0 Multijet') return sp('2.0L JTD diesel inline-4','2.0L','4','121 kW (165 hp)','380 Nm','6-speed auto','FWD','~9.5 sec','~210 km/h','1,480 kg','5','280 L','~£23,000');
      break;
    // ── Flavia II (2012-2014) ──────────────────────────────────────────
    case 'Flavia II':
      if(trim==='2.4')            return sp('Pentastar 2.4L SOHC inline-4','2.4L','4','127 kW (170 hp)','229 Nm','6-speed auto','FWD','~9.2 sec','~195 km/h','1,590 kg','4','380 L','~£22,000');
      if(trim==='2.4 Convertible')return sp('Pentastar 2.4L SOHC inline-4','2.4L','4','127 kW (170 hp)','229 Nm','6-speed auto','FWD','~9.5 sec','~190 km/h','1,670 kg','4','300 L','~£26,000');
      break;
    // ── Voyager (2011-2015) ────────────────────────────────────────────
    case 'Voyager':
      if(trim==='2.8 CRD')return sp('2.8L CRD diesel inline-4','2.8L','4','120 kW (163 hp)','360 Nm','6-speed auto','FWD','~11.5 sec','~182 km/h','2,080 kg','7','1,007 L','~£28,000');
      if(trim==='3.6 V6')  return sp('Pentastar 3.6L DOHC V6','3.6L','6','206 kW (276 hp)','344 Nm','6-speed auto','FWD','~8.2 sec','~200 km/h','2,020 kg','7','1,007 L','~£30,000');
      break;
    // ── New Ypsilon (2024-2025) ────────────────────────────────────────
    case 'New Ypsilon':
      if(trim==='Electric') return sp('Electric motor 115 kW','N/A','0','115 kW (154 hp)','260 Nm','Single-speed','FWD','~7.5 sec','~150 km/h','1,396 kg','5','220 L','~€30,000');
      return sp('1.2L Hybrid 100 inline-3','1.2L','3','74 kW (100 hp)','205 Nm','6-speed DTC','FWD','~9.8 sec','~183 km/h','1,240 kg','5','220 L',trim==='Cassina'?'~€25,000':trim==='LX'?'~€27,000':'~€22,000');
    // ── Trevi (1980-1984) ──────────────────────────────────────────────
    case 'Trevi':
      if(trim==='1300')return sp('1.3L DOHC inline-4','1.3L','4','59 kW (79 hp)','108 Nm','5-speed manual','FWD','~13.0 sec','~163 km/h','1,040 kg','4','310 L','~£5,500');
      if(trim==='1600')return sp('1.6L DOHC inline-4','1.6L','4','74 kW (99 hp)','137 Nm','5-speed manual','FWD','~10.5 sec','~178 km/h','1,050 kg','4','310 L','~£6,500');
      if(trim==='2000')return sp('2.0L DOHC inline-4','2.0L','4','96 kW (128 hp)','166 Nm','5-speed manual','FWD','~9.0 sec','~190 km/h','1,070 kg','4','310 L','~£8,000');
      if(trim==='VX')  return sp('2.0L Volumex SC DOHC inline-4','2.0L','4','107 kW (144 hp)','230 Nm','5-speed manual','FWD','~8.0 sec','~205 km/h','1,100 kg','4','310 L','~£11,000');
      break;
    // ── Pre-war alphabet series ────────────────────────────────────────
    case 'Alpha':
      return sp('2.5L side-valve inline-4','2.5L','4','18 kW (24 hp)','~80 Nm','3-speed manual','RWD','N/A','~80 km/h','~900 kg','4','N/A','~£400');
    case 'Beta (1909)':
      return sp('3.1L side-valve inline-4','3.1L','4','22 kW (30 hp)','~90 Nm','3-speed manual','RWD','N/A','~85 km/h','~1,000 kg','4','N/A','~£500');
    case 'Gamma (1910)':
      return sp('3.8L side-valve inline-4','3.8L','4','29 kW (39 hp)','~110 Nm','3-speed manual','RWD','N/A','~90 km/h','~1,100 kg','4','N/A','~£600');
    case 'Delta (1911)':
      return sp('4.1L side-valve inline-4','4.1L','4','35 kW (47 hp)','~130 Nm','4-speed manual','RWD','N/A','~95 km/h','~1,200 kg','4','N/A','~£700');
    case 'Epsilon':
      return sp('3.6L SOHC inline-4','3.6L','4','37 kW (50 hp)','~125 Nm','4-speed manual','RWD','N/A','~95 km/h','~1,150 kg','4','N/A','~£650');
    case 'Zeta (1912)':
      return sp('4.1L SOHC inline-4','4.1L','4','35 kW (47 hp)','~130 Nm','4-speed manual','RWD','N/A','~95 km/h','~1,200 kg','4','N/A','~£700');
    case 'Eta':
      return sp('2.6L SOHC inline-4','2.6L','4','29 kW (39 hp)','~100 Nm','4-speed manual','RWD','N/A','~88 km/h','~1,050 kg','4','N/A','~£550');
    case 'Theta':
      return sp('3.6L SOHC inline-4','3.6L','4','36 kW (48 hp)','~135 Nm','4-speed manual','RWD','N/A','~90 km/h',trim==='Berlina'?'~1,300 kg':'~1,200 kg','4','N/A','~£600');
    case 'Kappa (1919)':
    case 'Dikappa':
      return sp('4.9L SOHC V8','4.9L','8','60 kW (80 hp)','~210 Nm','4-speed manual','RWD','N/A','~105 km/h',trim==='Berlina'?'~1,600 kg':'~1,500 kg','4','N/A','~£950');
    case 'Trikappa':
      return sp('4.6L SOHC V8','4.6L','8','67 kW (90 hp)','~220 Nm','4-speed manual','RWD','N/A','~115 km/h',trim==='Berlina'?'~1,650 kg':'~1,550 kg','4','N/A','~£1,100');
    case 'Lambda':
      return sp('2.1L SOHC narrow-V4','2.1L','4','35 kW (47 hp)','~110 Nm','4-speed manual','RWD','N/A','~115 km/h',trim==='Cabriolet'?'~1,150 kg':'~1,100 kg','4','N/A','~£750');
    case 'Dilambda':
      return sp('4.0L SOHC narrow-V8','4.0L','8','75 kW (100 hp)','~220 Nm','4-speed manual','RWD','N/A','~130 km/h',trim==='Cabriolet'?'~1,800 kg':trim==='Torpedo'?'~1,650 kg':'~1,700 kg','5','N/A','~£1,400');
    case 'Artena':
      return sp('1.9L SOHC narrow-V4','1.9L','4','36 kW (48 hp)','~100 Nm','4-speed manual','RWD','N/A','~115 km/h',trim==='Torpedo'?'~1,150 kg':'~1,200 kg',trim==='Berlina'?'5':'4','~300 L','~£650');
    case 'Astura':
      return y>=1936
        ? sp('2.97L SOHC narrow-V8','3.0L','8','66 kW (88 hp)','~175 Nm','4-speed manual','RWD','N/A','~140 km/h',trim==='Sport'?'~1,450 kg':'~1,500 kg',trim==='Sport'?'2':'5','N/A','~£1,800')
        : sp('2.6L SOHC narrow-V8','2.6L','8','55 kW (74 hp)','~150 Nm','4-speed manual','RWD','N/A','~125 km/h',trim==='Cabriolet'?'~1,550 kg':'~1,500 kg',trim==='Cabriolet'?'4':'5','N/A','~£1,100');
    case 'Augusta':
      return sp('1.2L SOHC narrow-V4','1.2L','4','25 kW (33 hp)','~65 Nm','4-speed manual','RWD','N/A','~100 km/h',trim==='Cabriolet'?'~900 kg':'~870 kg','4','~250 L','~£450');
    default:
      return null;
  }
  return null;
}

// Iterate all Lancia entries in makes.json
const lancia = makes['Lancia'];
for (const model of Object.keys(lancia)) {
  for (const year of Object.keys(lancia[model])) {
    for (const trim of lancia[model][year]) {
      const key = `Lancia|${model}|${year}|${trim}`;
      if (existing.has(key)) continue;
      const s = lanciaSpec(model, year, trim);
      if (s) specs[key] = s;
    }
  }
}

const out = { specs };
fs.writeFileSync('./src/data/supplement72.json', JSON.stringify(out, null, 2));
console.log('supplement72.json written:', Object.keys(specs).length, 'Lancia specs');
