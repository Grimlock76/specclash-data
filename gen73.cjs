'use strict';
const fs = require('fs');
const makes = require('./src/data/makes.json');

const specs = {};

function sp(en,di,cy,hp,tq,tx,dr,z1,ts,wt,se,ca,pr,extra){
  const o = {en,di,cy,hp,tq,tx,dr,z1,ts,wt,se,ca,pr};
  if(extra) Object.assign(o,extra);
  return o;
}

function datsunSpec(model,year,trim){
  const y = parseInt(year);
  switch(model){
    // ── 510 Bluebird (1968-1973) ───────────────────────────────────────
    case '510':
      if(trim==='SSS')     return sp('1.6L DOHC inline-4 twin-carb (L16)','1.6L','4','78 kW (105 hp)','128 Nm','5-speed manual','RWD','~10.0 sec','~180 km/h','950 kg','5','340 L','~A$2,800');
      if(trim==='Wagon')   return sp('1.3L SOHC inline-4 (L13)','1.3L','4','47 kW (63 hp)','100 Nm','4-speed manual','RWD','~14.5 sec','~150 km/h','980 kg','5','550 L','~A$2,400');
      return sp('1.3L SOHC inline-4 (L13)','1.3L','4','47 kW (63 hp)','100 Nm','4-speed manual','RWD','~14.0 sec','~155 km/h','935 kg','5','340 L','~A$2,200');
    // ── 1000 (B10, 1966-1969) ─────────────────────────────────────────
    case '1000':
      return sp('988cc OHV inline-4 (A10)','1.0L','4','28 kW (37 hp)','65 Nm','4-speed manual','RWD','~22.0 sec','~115 km/h','680 kg','4','200 L','~A$1,400');
    // ── 1200 (B110, 1970-1975) ─────────────────────────────────────────
    case '1200':
      if(trim==='Coupe') return sp('1.2L OHC inline-4 (A12)','1.2L','4','54 kW (72 hp)','93 Nm','4-speed manual','RWD','~13.0 sec','~150 km/h','720 kg','4','200 L','~A$2,400');
      if(trim==='Van')   return sp('1.2L OHC inline-4 (A12)','1.2L','4','47 kW (63 hp)','88 Nm','4-speed manual','RWD','~15.0 sec','~140 km/h','760 kg','4','550 L','~A$2,200');
      if(trim==='Ute')   return sp('1.2L OHC inline-4 (A12)','1.2L','4','47 kW (63 hp)','88 Nm','4-speed manual','RWD','~14.5 sec','~140 km/h','720 kg','2','N/A','~A$2,000');
      return sp('1.2L OHC inline-4 (A12)','1.2L','4','47 kW (63 hp)','88 Nm','4-speed manual','RWD','~14.0 sec','~145 km/h','750 kg','4','290 L','~A$2,000');
    // ── Fairlady 1500 (SP310, 1961-1965) ──────────────────────────────
    case 'Fairlady 1500':
      return sp('1.5L SOHC inline-4 (R16)','1.5L','4','48 kW (64 hp)','102 Nm','4-speed manual','RWD','~15.0 sec','~148 km/h','780 kg','2','100 L','~A$2,000');
    // ── Fairlady 1600 (SP311, 1965-1969) ──────────────────────────────
    case 'Fairlady 1600':
      return sp('1.6L SOHC inline-4 (R16) twin-SU','1.6L','4','71 kW (95 hp)','130 Nm','5-speed manual','RWD','~11.5 sec','~168 km/h','820 kg','2','120 L','~A$2,800');
    // ── Fairlady 2000 (SR311, 1967-1970) ──────────────────────────────
    case 'Fairlady 2000':
      if(trim==='Competition') return sp('2.0L DOHC inline-4 (U20) race-prep','2.0L','4','110 kW (148 hp)','179 Nm','5-speed manual','RWD','~8.0 sec','~210 km/h','870 kg','2','80 L','~A$5,500');
      return sp('2.0L DOHC inline-4 (U20) twin-Solex','2.0L','4','96 kW (129 hp)','162 Nm','5-speed manual','RWD','~9.0 sec','~201 km/h','900 kg','2','120 L','~A$3,800');
    // ── 240Z (S30, 1970-1973) ──────────────────────────────────────────
    case '240Z':
      return sp('2.4L SOHC inline-6 (L24)','2.4L','6','110 kW (147 hp)','196 Nm','5-speed manual','RWD','~8.8 sec','~200 km/h','1,070 kg','2','260 L','~A$5,500',{qm:'~16.5 sec'});
    // ── 120Y (B210, 1973-1978) ─────────────────────────────────────────
    case '120Y':{
      if(trim==='GX'||trim==='GL-E') return sp('1.4L OHC inline-4 (A14)','1.4L','4','52 kW (70 hp)','103 Nm','5-speed manual','RWD','~13.5 sec','~150 km/h','810 kg','4','270 L','~A$3,500');
      if(trim==='Wagon') return sp('1.2L OHC inline-4 (A12)','1.2L','4','41 kW (55 hp)','85 Nm','4-speed manual','RWD','~16.5 sec','~135 km/h','850 kg','5','550 L','~A$3,200');
      const base = sp('1.2L OHC inline-4 (A12)','1.2L','4','41 kW (55 hp)','85 Nm','4-speed manual','RWD','~16.0 sec','~140 km/h','790 kg','4','270 L',trim==='GL'?'~A$3,100':'~A$2,800');
      return base;
    }
    // ── 180B (610/Violet, 1972-1977) ───────────────────────────────────
    case '180B':
      if(trim==='SSS') return sp('1.8L SOHC inline-4 twin-carb (L18)','1.8L','4','82 kW (110 hp)','154 Nm','5-speed manual','RWD','~11.0 sec','~170 km/h','1,000 kg','5','360 L','~A$4,000');
      return sp('1.8L SOHC inline-4 (L18)','1.8L','4','63 kW (84 hp)','133 Nm','4-speed manual','RWD','~13.0 sec','~158 km/h','980 kg','5','360 L','~A$3,200');
    // ── 260Z (S30, 1974-1975) ──────────────────────────────────────────
    case '260Z':
      return sp('2.6L SOHC inline-6 (L26)','2.6L','6','109 kW (146 hp)','203 Nm','4-speed manual','RWD','~8.9 sec','~200 km/h',trim==='2+2'?'1,135 kg':'1,085 kg',trim==='2+2'?'2+2':'2','260 L','~A$6,800');
    // ── 620 Ute (1972-1979) ────────────────────────────────────────────
    case '620 Ute':
      if(trim==='King Cab') return sp('1.8L SOHC inline-4 (L18)','1.8L','4','63 kW (84 hp)','133 Nm','5-speed manual','RWD','~14.5 sec','~148 km/h','1,100 kg','3','N/A','~A$4,200');
      return sp('1.6L SOHC inline-4 (L16)','1.6L','4','52 kW (70 hp)','116 Nm','4-speed manual','RWD','~15.0 sec','~145 km/h','1,050 kg','2','N/A','~A$3,500');
    // ── 280Z (S30, 1975-1978) ──────────────────────────────────────────
    case '280Z':
      return sp('2.8L SOHC inline-6 EFI (L28E)','2.8L','6','110 kW (147 hp)','227 Nm','5-speed manual','RWD','~9.0 sec','~200 km/h',trim==='2+2'?'1,190 kg':'1,140 kg',trim==='2+2'?'2+2':'2','260 L','~A$9,500');
    // ── 200B (810 Bluebird, 1977-1982) ─────────────────────────────────
    case '200B':
      if(trim==='SSS')  return sp('2.0L SOHC inline-4 twin-carb (L20B)','2.0L','4','82 kW (110 hp)','167 Nm','5-speed manual','RWD','~10.5 sec','~170 km/h','1,130 kg','5','360 L','~A$7,000');
      if(trim==='GL-E') return sp('2.0L SOHC inline-4 EFI (L20B)','2.0L','4','74 kW (99 hp)','155 Nm','5-speed auto','RWD','~12.5 sec','~163 km/h','1,150 kg','5','360 L','~A$7,500');
      return sp('2.0L SOHC inline-4 (L20B)','2.0L','4','74 kW (99 hp)','155 Nm','5-speed manual','RWD','~12.0 sec','~165 km/h',trim==='GL'?'1,120 kg':'1,110 kg','5','360 L',trim==='GL'?'~A$6,200':'~A$5,500');
    // ── Stanza (T11, 1977-1982) ────────────────────────────────────────
    case 'Stanza':
      return sp('1.6L SOHC inline-4 (L16)','1.6L','4','60 kW (80 hp)','119 Nm','5-speed manual','RWD','~12.5 sec','~160 km/h',trim==='GL'?'960 kg':'950 kg','5','340 L',trim==='GL'?'~A$5,200':'~A$4,500');
    // ── 280ZX (S130, 1979-1983) ────────────────────────────────────────
    case '280ZX':
      if(trim==='Turbo') return sp('2.8L Turbo SOHC inline-6 (L28ET)','2.8L','6','121 kW (163 hp)','280 Nm','5-speed manual','RWD','~8.0 sec','~215 km/h','1,230 kg','2','250 L','~A$16,000',{qm:'~15.5 sec'});
      if(trim==='Targa') return sp('2.8L SOHC inline-6 EFI (L28E)','2.8L','6','102 kW (137 hp)','220 Nm','5-speed manual','RWD','~9.5 sec','~196 km/h','1,185 kg','2','200 L','~A$13,000');
      return sp('2.8L SOHC inline-6 EFI (L28E)','2.8L','6','102 kW (137 hp)','220 Nm','5-speed manual','RWD','~9.5 sec','~196 km/h',trim==='2+2'?'1,220 kg':'1,165 kg',trim==='2+2'?'2+2':'2','250 L',trim==='2+2'?'~A$13,500':'~A$12,000');
    // ── 720 Ute (1979-1985) ────────────────────────────────────────────
    case '720 Ute':
      if(trim==='King Cab') return sp('2.0L SOHC inline-4 (Z20)','2.0L','4','67 kW (90 hp)','148 Nm','5-speed manual','RWD','~14.5 sec','~145 km/h','1,150 kg','3','N/A','~A$7,200');
      return sp('2.0L SOHC inline-4 (Z20)','2.0L','4','67 kW (90 hp)','148 Nm','5-speed manual','RWD','~14.0 sec','~148 km/h','1,100 kg','2','N/A','~A$6,500');
    // ── 710 Violet (1973-1977) ─────────────────────────────────────────
    case '710 Violet':
      if(trim==='SSS') return sp('1.8L SOHC inline-4 twin-carb (L18)','1.8L','4','82 kW (110 hp)','154 Nm','5-speed manual','RWD','~11.0 sec','~170 km/h','960 kg','5','330 L','~A$4,500');
      return sp('1.4L SOHC inline-4 (A14)','1.4L','4','52 kW (70 hp)','103 Nm',trim==='GL'?'5-speed manual':'4-speed manual','RWD','~13.5 sec','~150 km/h',trim==='GL'?'935 kg':'925 kg','5','330 L',trim==='GL'?'~A$3,700':'~A$3,200');
    // ── Skyline (C10/C110/C210, 1968-1981) ─────────────────────────────
    case 'Skyline':
      if(trim==='GT-R')      return sp('2.0L DOHC 24v inline-6 (S20)','2.0L','6','134 kW (180 hp)','181 Nm','5-speed manual','RWD','~8.0 sec','~200 km/h','1,020 kg','5','340 L','~A$8,500',{qm:'~15.2 sec'});
      if(trim==='GT Turbo')  return sp('2.0L Turbo SOHC inline-6 (L20ET)','2.0L','6','110 kW (147 hp)','225 Nm','5-speed manual','RWD','~8.5 sec','~195 km/h','1,120 kg','5','340 L','~A$9,000');
      if(trim==='2000GT-X')  return sp('2.0L SOHC inline-6 EFI (L20B)','2.0L','6','82 kW (110 hp)','167 Nm','5-speed manual','RWD','~10.5 sec','~178 km/h','1,075 kg','5','340 L','~A$6,000');
      if(trim==='2000GT')    return sp('2.0L SOHC inline-6 (L20A)','2.0L','6','78 kW (105 hp)','157 Nm','4-speed manual','RWD','~11.0 sec','~175 km/h','1,060 kg','5','340 L','~A$5,000');
      return sp('1.8L SOHC inline-4 (G18)','1.8L','4','63 kW (84 hp)','128 Nm','4-speed manual','RWD','~13.5 sec','~155 km/h','1,020 kg','5','340 L','~A$3,800');
    // ── Laurel (C30/C130, 1969-1981) ───────────────────────────────────
    case 'Laurel':
      if(trim==='SGL') return sp('2.0L SOHC inline-6 (L20B)','2.0L','6','78 kW (105 hp)','157 Nm','4-speed manual','RWD','~11.5 sec','~170 km/h','1,150 kg','5','380 L','~A$5,500');
      if(trim==='GL')  return sp('2.0L SOHC inline-6 (L20B)','2.0L','6','78 kW (105 hp)','157 Nm','5-speed manual','RWD','~11.5 sec','~170 km/h','1,140 kg','5','380 L','~A$5,000');
      return sp('1.8L SOHC inline-4 (L18)','1.8L','4','63 kW (84 hp)','133 Nm','4-speed manual','RWD','~13.5 sec','~155 km/h','1,110 kg','5','380 L','~A$4,200');
    // ── Patrol (160 Series, 1966-1982) ─────────────────────────────────
    case 'Patrol':
      if(trim==='SGL') return sp('3.3L diesel inline-6 (SD33)','3.3L','6','63 kW (85 hp)','217 Nm','4-speed manual','4WD','~20.0 sec','~115 km/h','1,900 kg',trim==='Wagon'?'7':'5','N/A','~A$7,500');
      return sp('3.0L OHV inline-6 (P30)','3.0L','6','72 kW (97 hp)','196 Nm','4-speed manual','4WD','~18.0 sec',trim==='Wagon'?'~120 km/h':'~125 km/h',trim==='Wagon'?'1,850 kg':'1,800 kg',trim==='Wagon'?'7':'5','N/A',trim==='Wagon'?'~A$6,500':'~A$5,800');
    // ── 410 Bluebird (P411, 1963-1967) ─────────────────────────────────
    case '410 Bluebird':
      if(trim==='SSS') return sp('1.5L DOHC inline-4 twin-carb (R1)','1.5L','4','71 kW (95 hp)','127 Nm','4-speed manual','RWD','~11.5 sec','~173 km/h','845 kg','4','290 L','~A$3,200');
      return sp('1.2L OHV inline-4 (E1)','1.2L','4','41 kW (55 hp)','85 Nm','4-speed manual','RWD','~16.0 sec','~140 km/h','820 kg','4','290 L','~A$2,000');
    // ── 521 Ute (1965-1972) ────────────────────────────────────────────
    case '521 Ute':
      return sp('1.3L OHV inline-4 (J13)','1.3L','4','40 kW (54 hp)','88 Nm','4-speed manual','RWD','~16.5 sec','~130 km/h','870 kg','2','N/A','~A$1,800');
    // ── Cherry (E10, 1970-1978) ────────────────────────────────────────
    case 'Cherry':
      return sp('1.0L OHC inline-4 (A10)','1.0L','4','35 kW (47 hp)','72 Nm','4-speed manual','FWD','~16.5 sec','~130 km/h',trim==='GL'?'740 kg':'730 kg','4','230 L',trim==='GL'?'~A$2,800':'~A$2,500');
    // ── Silvia (S10/S110, 1975-1983) ───────────────────────────────────
    case 'Silvia':
      if(trim==='Turbo') return sp('1.8L Turbo SOHC inline-4 (L18ET)','1.8L','4','84 kW (113 hp)','188 Nm','5-speed manual','RWD','~9.5 sec','~180 km/h','1,040 kg','4','220 L','~A$8,500');
      if(trim==='1800')  return sp('1.8L SOHC inline-4 twin-carb (L18)','1.8L','4','74 kW (99 hp)','145 Nm','5-speed manual','RWD','~11.5 sec','~170 km/h','1,020 kg','4','220 L','~A$6,000');
      return sp('1.8L SOHC inline-4 (L18)','1.8L','4','63 kW (84 hp)','133 Nm','5-speed manual','RWD','~13.0 sec','~158 km/h','1,020 kg','4','220 L','~A$5,000');
    // ── 910 Bluebird (1979-1983) ───────────────────────────────────────
    case '910 Bluebird':
      if(trim==='SSS')  return sp('1.8L SOHC inline-4 twin-carb (L18)','1.8L','4','82 kW (110 hp)','154 Nm','5-speed manual','RWD','~11.0 sec','~173 km/h','1,040 kg','5','360 L','~A$9,000');
      if(trim==='SGL')  return sp('2.0L SOHC inline-4 (Z20)','2.0L','4','67 kW (90 hp)','148 Nm','5-speed manual','RWD','~12.5 sec','~165 km/h','1,080 kg','5','360 L','~A$9,500');
      return sp('1.6L SOHC inline-4 (L16)','1.6L','4','60 kW (80 hp)','119 Nm','5-speed manual','RWD','~13.0 sec','~160 km/h',trim==='GL'?'1,010 kg':'1,000 kg','5','360 L',trim==='GL'?'~A$7,800':'~A$7,000');
    // ── Cedric (230/330, 1971-1983) ────────────────────────────────────
    case 'Cedric':
      if(trim==='Diesel') return sp('2.2L LD22 diesel inline-4','2.2L','4','44 kW (59 hp)','129 Nm','4-speed manual','RWD','~19.0 sec','~140 km/h','1,380 kg','5','400 L','~A$8,500');
      if(trim==='SGL')    return sp('2.8L SOHC inline-6 (L28)','2.8L','6','107 kW (143 hp)','222 Nm','5-speed manual','RWD','~10.5 sec','~180 km/h','1,380 kg','5','400 L','~A$9,500');
      if(trim==='GL')     return sp('2.0L SOHC inline-6 (L20B)','2.0L','6','74 kW (99 hp)','157 Nm','5-speed manual','RWD','~13.0 sec','~165 km/h','1,310 kg','5','400 L','~A$8,000');
      return sp('2.0L SOHC inline-6 (L20B)','2.0L','6','74 kW (99 hp)','157 Nm','4-speed manual','RWD','~13.0 sec','~163 km/h','1,300 kg','5','400 L','~A$6,500');
    // ── Go (India/global, 2013-2019) ───────────────────────────────────
    case 'Go':
      return sp('1.2L inline-3 (HR12DE)','1.2L','3','51 kW (68 hp)','104 Nm','5-speed manual','FWD','~12.0 sec','~155 km/h','793 kg','5','265 L','~₹3.5L');
    // ── Go+ (2013-2019) ────────────────────────────────────────────────
    case 'Go+':
      return sp('1.2L inline-3 (HR12DE)','1.2L','3','51 kW (68 hp)','104 Nm','5-speed manual','FWD','~12.5 sec','~150 km/h','912 kg','7','285 L','~₹4.2L');
    // ── Redi-GO (2016-2022) ────────────────────────────────────────────
    case 'Redi-GO':
      if(trim==='S') return sp('1.0L inline-3 (HR10) AMT','1.0L','3','50 kW (67 hp)','91 Nm','5-speed auto','FWD','~14.5 sec','~148 km/h','685 kg','5','222 L','~₹4.0L');
      if(trim==='T') return sp('1.0L inline-3 (HR10)','1.0L','3','50 kW (67 hp)','91 Nm','5-speed manual','FWD','~14.0 sec','~148 km/h','678 kg','5','222 L','~₹3.5L');
      return sp('0.8L inline-3 (H-series)','0.8L','3','35 kW (47 hp)','72 Nm','5-speed manual','FWD','~17.0 sec','~130 km/h','665 kg','5','222 L','~₹2.8L');
    // ── on-DO (Russia, 2014-2020) ──────────────────────────────────────
    case 'on-DO':
      if(trim==='Trust') return sp('1.6L SOHC inline-4 (VAZ 21126)','1.6L','4','61 kW (82 hp)','140 Nm','5-speed auto','FWD','~13.5 sec','~158 km/h','1,050 kg','5','530 L','~₽550,000');
      return sp('1.6L SOHC inline-4 (VAZ 21126)','1.6L','4','61 kW (82 hp)','140 Nm','5-speed manual','FWD','~13.0 sec','~160 km/h',trim==='Dream'?'1,025 kg':'1,020 kg','5','530 L',trim==='Dream'?'~₽500,000':'~₽450,000');
    // ── mi-DO (Russia, 2014-2020) ──────────────────────────────────────
    case 'mi-DO':
      if(trim==='Trust') return sp('1.6L SOHC inline-4 (VAZ 21126)','1.6L','4','61 kW (82 hp)','140 Nm','5-speed auto','FWD','~13.5 sec','~158 km/h','1,040 kg','5','330 L','~₽540,000');
      return sp('1.6L SOHC inline-4 (VAZ 21126)','1.6L','4','61 kW (82 hp)','140 Nm','5-speed manual','FWD','~13.0 sec','~158 km/h',trim==='Dream'?'1,020 kg':'1,010 kg','5','330 L',trim==='Dream'?'~₽490,000':'~₽445,000');
    // ── Bluebird 310 (1959-1963) ───────────────────────────────────────
    case 'Bluebird 310':
      return sp('988cc OHV inline-4 (D10)','1.0L','4','26 kW (35 hp)','68 Nm','4-speed manual','RWD','~22.0 sec','~115 km/h',trim==='Deluxe'?'775 kg':'770 kg','4','270 L',trim==='Deluxe'?'~A$1,700':'~A$1,500');
    // ── Silvia CSP311 (1965-1968) ──────────────────────────────────────
    case 'Silvia CSP311':
      return sp('1.6L DOHC inline-4 twin-SU (R16)','1.6L','4','78 kW (105 hp)','128 Nm','4-speed manual','RWD','~10.5 sec','~175 km/h','880 kg','2','200 L','~A$4,200');
    // ── F10 (1976-1978) ────────────────────────────────────────────────
    case 'F10':
      return sp('1.4L OHC inline-4 (A14)','1.4L','4','47 kW (63 hp)','98 Nm','4-speed manual','FWD','~14.5 sec','~145 km/h',trim==='GL'?'830 kg':'820 kg','4','230 L',trim==='GL'?'~A$3,800':'~A$3,500');
    // ── Sunny (B310, 1977-1982) ────────────────────────────────────────
    case 'Sunny':
      if(trim==='GX')    return sp('1.4L SOHC inline-4 twin-carb (A14)','1.4L','4','60 kW (80 hp)','113 Nm','5-speed manual','RWD','~12.0 sec','~162 km/h','845 kg','4','290 L','~A$5,200');
      if(trim==='Wagon') return sp('1.4L SOHC inline-4 (A14)','1.4L','4','52 kW (70 hp)','103 Nm','5-speed manual','RWD','~14.0 sec','~148 km/h','890 kg','5','550 L','~A$5,000');
      if(trim==='GL')    return sp('1.4L SOHC inline-4 (A14)','1.4L','4','52 kW (70 hp)','103 Nm','5-speed manual','RWD','~13.5 sec','~152 km/h','840 kg','4','290 L','~A$4,500');
      return sp('1.2L OHC inline-4 (A12)','1.2L','4','41 kW (55 hp)','85 Nm','4-speed manual','RWD','~16.0 sec','~140 km/h','820 kg','4','290 L','~A$4,000');
    default:
      return null;
  }
}

const datsun = makes['Datsun'];
for (const model of Object.keys(datsun)) {
  for (const year of Object.keys(datsun[model])) {
    for (const trim of datsun[model][year]) {
      const key = `Datsun|${model}|${year}|${trim}`;
      const s = datsunSpec(model, year, trim);
      if (s) specs[key] = s;
    }
  }
}

const out = { specs };
fs.writeFileSync('./src/data/supplement73.json', JSON.stringify(out, null, 2));
console.log('supplement73.json written:', Object.keys(specs).length, 'Datsun specs');
