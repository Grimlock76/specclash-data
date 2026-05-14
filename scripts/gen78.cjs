// gen78.cjs — Chrysler + Citroën (full coverage)
const fs = require('fs')
const path = require('path')

function chryslerSpec(model, year, trim) {
  const y = Number(year)

  // ── 200 ─────────────────────────────────────────────────────────────────────
  if (model === '200') {
    const base = { en:'2.4L I4', di:2360, cy:4, hp:184, tq:245, tx:'9-speed auto', dr:'FWD', z1:9.0, qm:16.8, ts:200, fc:11, fh:17, fx:14, ft:'Petrol', wt:1561, se:5, ca:380 }
    const v6  = { en:'3.6L V6', di:3604, cy:6, hp:295, tq:363, tx:'9-speed auto', dr:'FWD', z1:7.5, qm:15.8, ts:220, fc:10, fh:16, fx:13, ft:'Petrol', wt:1656, se:5, ca:380 }
    const v6e = { en:'2.4L I4', di:2360, cy:4, hp:184, tq:245, tx:'9-speed auto', dr:'AWD', z1:9.3, qm:17.0, ts:195, fc:10, fh:16, fx:13, ft:'Petrol', wt:1696, se:5, ca:380 }
    if (y >= 2011 && y <= 2014) {
      const pr = 22000 + (y - 2011) * 500
      if (trim === 'base')    return { ...base, hp:173, tq:229, tx:'6-speed auto', z1:9.8, qm:17.2, ts:195, pr, pc:5000 }
      if (trim === 'Touring') return { ...base, hp:173, tq:229, tx:'6-speed auto', z1:9.5, qm:17.0, ts:197, pr:24000+(y-2011)*500, pc:6000 }
      if (trim === 'Limited') return { ...v6, hp:283, tq:353, tx:'6-speed auto', z1:7.8, qm:16.0, ts:215, pr:29000+(y-2011)*600, pc:7000 }
      if (trim === 'S')       return { ...v6, hp:283, tq:353, tx:'6-speed auto', z1:7.8, qm:16.0, ts:215, pr:27000+(y-2011)*500, pc:7000 }
      if (trim === 'C')       return { ...v6, hp:283, tq:353, tx:'6-speed auto', z1:7.6, qm:15.9, ts:218, pr:32000+(y-2011)*600, pc:8000 }
    }
    if (y >= 2015 && y <= 2017) {
      const pr = 24000 + (y - 2015) * 600
      if (trim === 'base')    return { ...base, pr, pc:9000 }
      if (trim === 'Touring') return { ...base, pr:26000+(y-2015)*600, pc:10000 }
      if (trim === 'Limited') return { ...v6, pr:32000+(y-2015)*700, pc:12000 }
      if (trim === 'S')       return { ...v6e, pr:29000+(y-2015)*600, pc:11000 }
      if (trim === 'C')       return { ...v6, pr:36000+(y-2015)*700, pc:14000 }
    }
  }

  // ── Valiant (Australian) ─────────────────────────────────────────────────────
  if (model === 'Valiant') {
    // R/S series 1962-1964
    if (y >= 1962 && y <= 1964) {
      if (trim === 'R-Series' || trim === 'S-Series') return { en:'2.8L I6', di:2785, cy:6, hp:101, tq:217, tx:'3-speed auto', dr:'RWD', z1:14.5, qm:19.5, ts:165, fc:13, fh:18, fx:15, ft:'Petrol', wt:1200, se:6, ca:380, pr:2200, pc:8000 }
    }
    // AP6 1965-1967
    if (y >= 1965 && y <= 1967) {
      if (trim === 'AP6 base')  return { en:'3.7L I6', di:3687, cy:6, hp:133, tq:271, tx:'3-speed manual', dr:'RWD', z1:13.0, qm:18.5, ts:172, fc:13, fh:17, fx:15, ft:'Petrol', wt:1250, se:6, ca:380, pr:2500, pc:9000 }
      if (trim === 'AP6 Regal') return { en:'3.7L I6', di:3687, cy:6, hp:133, tq:271, tx:'3-speed auto',   dr:'RWD', z1:13.2, qm:18.6, ts:170, fc:13, fh:17, fx:15, ft:'Petrol', wt:1270, se:6, ca:380, pr:2800, pc:10000 }
      if (trim === 'V8 Commando') return { en:'4.5L V8', di:4474, cy:8, hp:189, tq:380, tx:'3-speed auto', dr:'RWD', z1:9.5, qm:16.8, ts:190, fc:12, fh:16, fx:13, ft:'Petrol', wt:1340, se:6, ca:380, pr:3500, pc:15000 }
    }
    // VC 1966-1969
    if (y >= 1966 && y <= 1969 && trim.startsWith('VC')) {
      if (trim === 'VC base')  return { en:'3.7L I6', di:3687, cy:6, hp:133, tq:271, tx:'3-speed manual', dr:'RWD', z1:13.0, qm:18.4, ts:173, fc:13, fh:17, fx:15, ft:'Petrol', wt:1255, se:6, ca:380, pr:2600+(y-1966)*100, pc:10000 }
      if (trim === 'VC Regal') return { en:'3.7L I6', di:3687, cy:6, hp:133, tq:271, tx:'3-speed auto',   dr:'RWD', z1:13.2, qm:18.5, ts:172, fc:13, fh:17, fx:15, ft:'Petrol', wt:1275, se:6, ca:380, pr:2900+(y-1966)*100, pc:11000 }
      if (trim === 'VC Pacer') return { en:'4.3L V8', di:4343, cy:8, hp:183, tq:366, tx:'3-speed auto',   dr:'RWD', z1:10.0, qm:17.0, ts:188, fc:12, fh:16, fx:13, ft:'Petrol', wt:1325, se:6, ca:380, pr:3200+(y-1966)*100, pc:13000 }
    }
    // VF 1969-1970
    if ((y === 1969 || y === 1970) && trim.startsWith('VF')) {
      if (trim === 'VF base')  return { en:'3.7L I6', di:3687, cy:6, hp:138, tq:278, tx:'3-speed manual', dr:'RWD', z1:12.5, qm:18.2, ts:175, fc:13, fh:17, fx:15, ft:'Petrol', wt:1265, se:6, ca:380, pr:2800, pc:12000 }
      if (trim === 'VF Regal') return { en:'3.7L I6', di:3687, cy:6, hp:138, tq:278, tx:'3-speed auto',   dr:'RWD', z1:12.7, qm:18.3, ts:174, fc:13, fh:17, fx:15, ft:'Petrol', wt:1285, se:6, ca:380, pr:3100, pc:13000 }
      if (trim === 'Charger')  return { en:'4.3L V8', di:4343, cy:8, hp:218, tq:407, tx:'3-speed auto',   dr:'RWD', z1:8.5, qm:16.3, ts:200, fc:11, fh:15, fx:12, ft:'Petrol', wt:1370, se:5, ca:350, pr:4200, pc:25000 }
    }
    if ((y === 1969 || y === 1970) && trim === 'Charger') {
      return { en:'4.3L V8', di:4343, cy:8, hp:218, tq:407, tx:'3-speed auto', dr:'RWD', z1:8.5, qm:16.3, ts:200, fc:11, fh:15, fx:12, ft:'Petrol', wt:1370, se:5, ca:350, pr:4200, pc:25000 }
    }
    // VH 1971-1973
    if ((y === 1971 || y === 1972) && (trim === 'VH base' || trim === 'VH Regal' || trim === 'Charger')) {
      if (trim === 'VH base')  return { en:'3.7L I6', di:3687, cy:6, hp:138, tq:278, tx:'3-speed manual', dr:'RWD', z1:12.5, qm:18.0, ts:176, fc:13, fh:17, fx:15, ft:'Petrol', wt:1275, se:6, ca:380, pr:3000, pc:12000 }
      if (trim === 'VH Regal') return { en:'3.7L I6', di:3687, cy:6, hp:138, tq:278, tx:'3-speed auto',   dr:'RWD', z1:12.7, qm:18.2, ts:175, fc:13, fh:17, fx:15, ft:'Petrol', wt:1295, se:6, ca:380, pr:3300, pc:13000 }
      if (trim === 'Charger')  return { en:'4.3L V8', di:4343, cy:8, hp:218, tq:407, tx:'3-speed auto',   dr:'RWD', z1:8.3, qm:16.0, ts:202, fc:11, fh:15, fx:12, ft:'Petrol', wt:1355, se:5, ca:350, pr:4500, pc:28000 }
    }
    // VJ 1973-1975
    if ((y === 1973 || y === 1974) && (trim === 'VJ base' || trim === 'VJ Regal' || trim === 'Charger')) {
      if (trim === 'VJ base')  return { en:'3.7L I6', di:3687, cy:6, hp:138, tq:278, tx:'3-speed manual', dr:'RWD', z1:12.5, qm:18.0, ts:176, fc:13, fh:17, fx:15, ft:'Petrol', wt:1285, se:6, ca:380, pr:3500, pc:11000 }
      if (trim === 'VJ Regal') return { en:'3.7L I6', di:3687, cy:6, hp:138, tq:278, tx:'3-speed auto',   dr:'RWD', z1:12.7, qm:18.2, ts:175, fc:13, fh:17, fx:15, ft:'Petrol', wt:1305, se:6, ca:380, pr:3800, pc:12000 }
      if (trim === 'Charger')  return { en:'4.3L V8', di:4343, cy:8, hp:200, tq:380, tx:'3-speed auto',   dr:'RWD', z1:8.8, qm:16.2, ts:198, fc:11, fh:15, fx:12, ft:'Petrol', wt:1360, se:5, ca:350, pr:5000, pc:24000 }
    }
    // CL 1975-1978
    if (y >= 1975 && y <= 1978 && (trim === 'CL base' || trim === 'CL Ranger' || trim === 'CL Regal')) {
      if (trim === 'CL base')   return { en:'3.7L I6', di:3687, cy:6, hp:122, tq:258, tx:'3-speed manual', dr:'RWD', z1:13.5, qm:18.5, ts:170, fc:13, fh:17, fx:15, ft:'Petrol', wt:1295, se:6, ca:380, pr:4200+(y-1975)*200, pc:8000 }
      if (trim === 'CL Ranger') return { en:'3.7L I6', di:3687, cy:6, hp:122, tq:258, tx:'3-speed auto',   dr:'RWD', z1:13.8, qm:18.7, ts:168, fc:13, fh:17, fx:15, ft:'Petrol', wt:1315, se:6, ca:380, pr:4600+(y-1975)*200, pc:9000 }
      if (trim === 'CL Regal')  return { en:'5.2L V8', di:5212, cy:8, hp:185, tq:380, tx:'3-speed auto',   dr:'RWD', z1:10.0, qm:17.0, ts:185, fc:11, fh:15, fx:12, ft:'Petrol', wt:1410, se:6, ca:380, pr:5800+(y-1975)*200, pc:12000 }
    }
    // CM 1978-1981
    if (y >= 1978 && y <= 1981 && (trim === 'CM base' || trim === 'CM Ranger' || trim === 'CM Regal')) {
      if (trim === 'CM base')   return { en:'3.7L I6', di:3687, cy:6, hp:122, tq:258, tx:'3-speed manual', dr:'RWD', z1:13.5, qm:18.5, ts:170, fc:13, fh:17, fx:15, ft:'Petrol', wt:1305, se:6, ca:380, pr:5200+(y-1978)*300, pc:7000 }
      if (trim === 'CM Ranger') return { en:'3.7L I6', di:3687, cy:6, hp:122, tq:258, tx:'3-speed auto',   dr:'RWD', z1:13.8, qm:18.7, ts:168, fc:13, fh:17, fx:15, ft:'Petrol', wt:1325, se:6, ca:380, pr:5800+(y-1978)*300, pc:8000 }
      if (trim === 'CM Regal')  return { en:'5.2L V8', di:5212, cy:8, hp:185, tq:380, tx:'3-speed auto',   dr:'RWD', z1:10.2, qm:17.2, ts:183, fc:11, fh:15, fx:12, ft:'Petrol', wt:1420, se:6, ca:380, pr:7500+(y-1978)*300, pc:10000 }
    }
  }

  // ── 300C ────────────────────────────────────────────────────────────────────
  if (model === '300C') {
    if (y >= 2004 && y <= 2010) {
      if (trim === 'base')    return { en:'2.7L V6', di:2736, cy:6, hp:190, tq:258, tx:'5-speed auto', dr:'RWD', z1:9.5, qm:17.0, ts:200, fc:11, fh:17, fx:13, ft:'Petrol', wt:1800, se:5, ca:460, pr:29000+(y-2004)*500, pc:8000 }
      if (trim === 'Touring') return { en:'3.5L V6', di:3518, cy:6, hp:250, tq:339, tx:'5-speed auto', dr:'RWD', z1:8.2, qm:16.2, ts:210, fc:11, fh:16, fx:13, ft:'Petrol', wt:1814, se:5, ca:460, pr:34000+(y-2004)*500, pc:10000 }
      if (trim === 'SRT8')    return { en:'6.1L V8', di:6059, cy:8, hp:425, tq:577, tx:'5-speed auto', dr:'RWD', z1:5.0, qm:13.5, ts:265, fc:9, fh:13, fx:11, ft:'Petrol', wt:1960, se:5, ca:460, pr:44000+(y-2004)*500, pc:18000 }
      if (trim === 'S')       return { en:'5.7L V8', di:5654, cy:8, hp:340, tq:529, tx:'5-speed auto', dr:'RWD', z1:6.5, qm:14.8, ts:235, fc:10, fh:15, fx:12, ft:'Petrol', wt:1899, se:5, ca:460, pr:38000+(y-2004)*500, pc:12000 }
    }
    if (y >= 2011 && y <= 2014) {
      if (trim === 'base')    return { en:'3.6L V6', di:3604, cy:6, hp:292, tq:353, tx:'8-speed auto', dr:'RWD', z1:7.5, qm:15.8, ts:225, fc:11, fh:17, fx:14, ft:'Petrol', wt:1837, se:5, ca:460, pr:31000+(y-2011)*500, pc:11000 }
      if (trim === 'Touring') return { en:'3.6L V6', di:3604, cy:6, hp:292, tq:353, tx:'8-speed auto', dr:'RWD', z1:7.2, qm:15.5, ts:228, fc:11, fh:17, fx:14, ft:'Petrol', wt:1837, se:5, ca:460, pr:33000+(y-2011)*500, pc:12000 }
      if (trim === 'SRT8')    return { en:'6.4L V8', di:6417, cy:8, hp:470, tq:637, tx:'5-speed auto', dr:'RWD', z1:4.5, qm:12.9, ts:280, fc:9, fh:14, fx:11, ft:'Petrol', wt:1995, se:5, ca:460, pr:52000+(y-2011)*600, pc:22000 }
      if (trim === 'S')       return { en:'5.7L V8', di:5654, cy:8, hp:363, tq:529, tx:'8-speed auto', dr:'RWD', z1:5.8, qm:14.2, ts:248, fc:10, fh:16, fx:12, ft:'Petrol', wt:1930, se:5, ca:460, pr:43000+(y-2011)*500, pc:15000 }
    }
    if (y >= 2015 && y <= 2023) {
      const pc = 18000 + (y - 2015) * 1000
      if (trim === 'base')    return { en:'3.6L V6', di:3604, cy:6, hp:292, tq:353, tx:'8-speed auto', dr:'RWD', z1:7.0, qm:15.3, ts:228, fc:11, fh:17, fx:14, ft:'Petrol', wt:1837, se:5, ca:460, pr:33000+(y-2015)*500, pc }
      if (trim === 'Touring') return { en:'3.6L V6', di:3604, cy:6, hp:292, tq:353, tx:'8-speed auto', dr:'RWD', z1:7.0, qm:15.3, ts:228, fc:11, fh:17, fx:14, ft:'Petrol', wt:1837, se:5, ca:460, pr:35000+(y-2015)*500, pc:pc+2000 }
      if (trim === 'SRT8')    return { en:'6.4L V8', di:6417, cy:8, hp:485, tq:637, tx:'8-speed auto', dr:'RWD', z1:4.3, qm:12.5, ts:280, fc:9, fh:14, fx:11, ft:'Petrol', wt:2004, se:5, ca:460, pr:56000+(y-2015)*600, pc:pc+14000 }
      if (trim === 'S')       return { en:'5.7L V8', di:5654, cy:8, hp:363, tq:529, tx:'8-speed auto', dr:'RWD', z1:5.8, qm:14.0, ts:250, fc:10, fh:16, fx:12, ft:'Petrol', wt:1930, se:5, ca:460, pr:44000+(y-2015)*500, pc:pc+7000 }
    }
  }

  // ── Grand Voyager ────────────────────────────────────────────────────────────
  if (model === 'Grand Voyager') {
    if (y >= 1987 && y <= 1990) {
      const base = { en:'3.0L V6', di:2972, cy:6, hp:141, tq:224, tx:'3-speed auto', dr:'FWD', z1:12.0, qm:18.0, ts:175, fc:11, fh:16, fx:13, ft:'Petrol', wt:1820, se:7, ca:3900 }
      if (trim === 'base' || trim === 'Grand Voyager') return { ...base, pr:22000+(y-1987)*500, pc:3000 }
      if (trim === 'LE')      return { ...base, pr:25000+(y-1987)*500, pc:3500 }
      if (trim === 'ES')      return { ...base, en:'3.3L V6', di:3301, hp:150, tq:271, pr:28000+(y-1987)*500, pc:4000 }
      if (trim === 'Limited') return { ...base, en:'3.3L V6', di:3301, hp:150, tq:271, pr:30000+(y-1987)*500, pc:4500 }
    }
    if (y >= 1991 && y <= 1995) {
      const base = { en:'3.3L V6', di:3301, cy:6, hp:150, tq:271, tx:'4-speed auto', dr:'FWD', z1:11.5, qm:17.8, ts:180, fc:11, fh:16, fx:13, ft:'Petrol', wt:1905, se:7, ca:3900 }
      if (trim === 'base' || trim === 'Grand Voyager') return { ...base, pr:24000+(y-1991)*500, pc:3500 }
      if (trim === 'LE')      return { ...base, pr:27000+(y-1991)*500, pc:4000 }
      if (trim === 'ES')      return { ...base, en:'3.8L V6', di:3778, hp:162, tq:298, pr:30000+(y-1991)*500, pc:4500 }
      if (trim === 'Limited') return { ...base, en:'3.8L V6', di:3778, hp:162, tq:298, pr:32000+(y-1991)*500, pc:5000 }
    }
    if (y >= 1996 && y <= 2000) {
      const base = { en:'3.3L V6', di:3301, cy:6, hp:158, tq:284, tx:'4-speed auto', dr:'FWD', z1:11.0, qm:17.6, ts:182, fc:11, fh:16, fx:13, ft:'Petrol', wt:1950, se:7, ca:3900 }
      if (trim === 'base' || trim === 'Grand Voyager') return { ...base, pr:26000+(y-1996)*500, pc:4000 }
      if (trim === 'LE')      return { ...base, pr:29000+(y-1996)*500, pc:4500 }
      if (trim === 'ES')      return { ...base, en:'3.8L V6', di:3778, hp:166, tq:305, pr:33000+(y-1996)*500, pc:5500 }
      if (trim === 'Limited') return { ...base, en:'3.8L V6', di:3778, hp:166, tq:305, pr:36000+(y-1996)*500, pc:6000 }
    }
    if (y >= 2001 && y <= 2007) {
      const base = { en:'3.3L V6', di:3301, cy:6, hp:174, tq:298, tx:'4-speed auto', dr:'FWD', z1:10.5, qm:17.4, ts:185, fc:11, fh:16, fx:13, ft:'Petrol', wt:2000, se:7, ca:3900 }
      if (trim === 'base' || trim === 'Grand Voyager') return { ...base, pr:28000+(y-2001)*500, pc:5000 }
      if (trim === 'LE')      return { ...base, pr:31000+(y-2001)*500, pc:6000 }
      if (trim === 'ES')      return { ...base, en:'3.8L V6', di:3778, hp:215, tq:325, tx:'6-speed auto', pr:35000+(y-2001)*500, pc:7000 }
      if (trim === 'Limited') return { ...base, en:'3.8L V6', di:3778, hp:215, tq:325, tx:'6-speed auto', pr:38000+(y-2001)*500, pc:8000 }
    }
    if (y >= 2008 && y <= 2016) {
      const base = { en:'4.0L V6', di:3952, cy:6, hp:253, tq:352, tx:'6-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:190, fc:11, fh:17, fx:13, ft:'Petrol', wt:2082, se:7, ca:3900 }
      if (trim === 'base' || trim === 'Grand Voyager') return { ...base, pr:32000+(y-2008)*500, pc:6000+(y-2008)*500 }
      if (trim === 'LE')      return { ...base, pr:35000+(y-2008)*500, pc:7000+(y-2008)*500 }
      if (trim === 'ES')      return { ...base, pr:38000+(y-2008)*500, pc:8000+(y-2008)*500 }
      if (trim === 'Limited') return { ...base, pr:42000+(y-2008)*600, pc:9000+(y-2008)*500 }
    }
  }

  // ── PT Cruiser ───────────────────────────────────────────────────────────────
  if (model === 'PT Cruiser') {
    if (y >= 2000 && y <= 2005) {
      if (trim === 'base' || trim === 'Classic') return { en:'2.4L I4', di:2429, cy:4, hp:150, tq:220, tx:'4-speed auto', dr:'FWD', z1:10.5, qm:17.8, ts:180, fc:11, fh:16, fx:13, ft:'Petrol', wt:1383, se:5, ca:1150, pr:16000+(y-2000)*400, pc:3000 }
      if (trim === 'Touring') return { en:'2.4L I4', di:2429, cy:4, hp:150, tq:220, tx:'4-speed auto', dr:'FWD', z1:10.5, qm:17.8, ts:180, fc:11, fh:16, fx:13, ft:'Petrol', wt:1400, se:5, ca:1150, pr:18000+(y-2000)*400, pc:3500 }
      if (trim === 'GT')      return { en:'2.4L Turbo I4', di:2429, cy:4, hp:220, tq:339, tx:'5-speed manual', dr:'FWD', z1:7.5, qm:15.9, ts:210, fc:10, fh:14, fx:12, ft:'Petrol', wt:1428, se:5, ca:1150, pr:22000+(y-2000)*400, pc:5000 }
    }
    if (y >= 2006 && y <= 2010) {
      if (trim === 'base' || trim === 'Classic') return { en:'2.4L I4', di:2429, cy:4, hp:150, tq:220, tx:'4-speed auto', dr:'FWD', z1:10.5, qm:17.8, ts:180, fc:11, fh:16, fx:13, ft:'Petrol', wt:1397, se:5, ca:1150, pr:17000+(y-2006)*200, pc:2500+(y-2006)*200 }
      if (trim === 'Touring') return { en:'2.4L I4', di:2429, cy:4, hp:150, tq:220, tx:'4-speed auto', dr:'FWD', z1:10.3, qm:17.6, ts:182, fc:11, fh:16, fx:13, ft:'Petrol', wt:1397, se:5, ca:1150, pr:19000+(y-2006)*200, pc:3000+(y-2006)*200 }
      if (trim === 'GT')      return { en:'2.4L Turbo I4', di:2429, cy:4, hp:220, tq:339, tx:'5-speed manual', dr:'FWD', z1:7.5, qm:15.9, ts:210, fc:10, fh:14, fx:12, ft:'Petrol', wt:1428, se:5, ca:1150, pr:23000+(y-2006)*200, pc:4000+(y-2006)*200 }
    }
  }

  // ── Crossfire ────────────────────────────────────────────────────────────────
  if (model === 'Crossfire') {
    if (y >= 2003 && y <= 2008) {
      if (trim === 'base')    return { en:'3.2L V6', di:3199, cy:6, hp:215, tq:310, tx:'5-speed auto', dr:'RWD', z1:7.2, qm:15.6, ts:235, fc:11, fh:17, fx:13, ft:'Petrol', wt:1497, se:2, ca:170, pr:33000+(y-2003)*400, pc:7000 }
      if (trim === 'Roadster') return { en:'3.2L V6', di:3199, cy:6, hp:215, tq:310, tx:'5-speed auto', dr:'RWD', z1:7.2, qm:15.6, ts:235, fc:11, fh:17, fx:13, ft:'Petrol', wt:1510, se:2, ca:100, pr:36000+(y-2003)*400, pc:8000 }
      if (trim === 'SRT-6')   return { en:'3.2L SC V6', di:3199, cy:6, hp:330, tq:450, tx:'6-speed manual', dr:'RWD', z1:5.2, qm:13.8, ts:255, fc:10, fh:15, fx:12, ft:'Petrol', wt:1559, se:2, ca:170, pr:45000+(y-2003)*500, pc:14000 }
    }
  }

  // ── Neon ─────────────────────────────────────────────────────────────────────
  if (model === 'Neon') {
    if (y >= 1994 && y <= 1999) {
      if (trim === 'base')  return { en:'2.0L I4', di:1996, cy:4, hp:132, tq:190, tx:'3-speed auto', dr:'FWD', z1:10.0, qm:17.2, ts:185, fc:12, fh:18, fx:14, ft:'Petrol', wt:1155, se:5, ca:370, pr:13000+(y-1994)*300, pc:3000 }
      if (trim === 'Sport') return { en:'2.0L I4', di:1996, cy:4, hp:150, tq:190, tx:'5-speed manual', dr:'FWD', z1:9.2, qm:16.8, ts:195, fc:12, fh:17, fx:14, ft:'Petrol', wt:1175, se:5, ca:370, pr:15000+(y-1994)*300, pc:3500 }
      if (trim === 'R/T')   return { en:'2.0L I4', di:1996, cy:4, hp:150, tq:190, tx:'5-speed manual', dr:'FWD', z1:9.0, qm:16.6, ts:198, fc:12, fh:17, fx:14, ft:'Petrol', wt:1195, se:5, ca:370, pr:17000+(y-1994)*300, pc:4000 }
      if (trim === 'SRT-4') return { en:'2.0L I4', di:1996, cy:4, hp:150, tq:190, tx:'5-speed manual', dr:'FWD', z1:9.0, qm:16.6, ts:198, fc:12, fh:17, fx:14, ft:'Petrol', wt:1195, se:5, ca:370, pr:17000+(y-1994)*300, pc:4000 }
    }
    if (y >= 2000 && y <= 2005) {
      if (trim === 'base')  return { en:'2.0L I4', di:1996, cy:4, hp:132, tq:190, tx:'4-speed auto', dr:'FWD', z1:10.2, qm:17.3, ts:183, fc:12, fh:18, fx:14, ft:'Petrol', wt:1238, se:5, ca:370, pr:14000+(y-2000)*300, pc:3000 }
      if (trim === 'Sport') return { en:'2.0L I4', di:1996, cy:4, hp:132, tq:190, tx:'5-speed manual', dr:'FWD', z1:9.5, qm:17.0, ts:190, fc:12, fh:17, fx:14, ft:'Petrol', wt:1251, se:5, ca:370, pr:16000+(y-2000)*300, pc:3500 }
      if (trim === 'R/T')   return { en:'2.0L I4', di:1996, cy:4, hp:150, tq:190, tx:'5-speed manual', dr:'FWD', z1:9.0, qm:16.6, ts:195, fc:12, fh:17, fx:14, ft:'Petrol', wt:1261, se:5, ca:370, pr:18000+(y-2000)*300, pc:4000 }
      if (trim === 'SRT-4') return { en:'2.4L Turbo I4', di:2429, cy:4, hp:230, tq:339, tx:'5-speed manual', dr:'FWD', z1:5.8, qm:14.2, ts:240, fc:10, fh:14, fx:12, ft:'Petrol', wt:1338, se:5, ca:370, pr:23000+(y-2000)*400, pc:8000 }
    }
  }

  // ── Sebring ──────────────────────────────────────────────────────────────────
  if (model === 'Sebring') {
    if (y >= 1994 && y <= 2000) {
      if (trim === 'base' || trim === 'LX') return { en:'2.0L I4', di:1996, cy:4, hp:140, tq:190, tx:'4-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:185, fc:11, fh:17, fx:13, ft:'Petrol', wt:1360, se:5, ca:430, pr:18000+(y-1994)*400, pc:4000 }
      if (trim === 'JXi')     return { en:'2.5L V6', di:2497, cy:6, hp:163, tq:222, tx:'4-speed auto', dr:'FWD', z1:9.5, qm:16.9, ts:195, fc:11, fh:16, fx:13, ft:'Petrol', wt:1400, se:4, ca:350, pr:23000+(y-1994)*400, pc:5000 }
      if (trim === 'Limited') return { en:'2.5L V6', di:2497, cy:6, hp:163, tq:222, tx:'4-speed auto', dr:'FWD', z1:9.3, qm:16.7, ts:198, fc:11, fh:16, fx:13, ft:'Petrol', wt:1415, se:5, ca:430, pr:25000+(y-1994)*400, pc:5500 }
      if (trim === 'Touring') return { en:'2.0L I4', di:1996, cy:4, hp:140, tq:190, tx:'4-speed auto', dr:'FWD', z1:10.3, qm:17.3, ts:188, fc:11, fh:17, fx:13, ft:'Petrol', wt:1370, se:5, ca:430, pr:20000+(y-1994)*400, pc:4500 }
    }
    if (y >= 2001 && y <= 2006) {
      if (trim === 'base' || trim === 'LX') return { en:'2.4L I4', di:2429, cy:4, hp:150, tq:220, tx:'4-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:185, fc:11, fh:16, fx:13, ft:'Petrol', wt:1452, se:5, ca:450, pr:21000+(y-2001)*400, pc:4000 }
      if (trim === 'JXi')     return { en:'2.7L V6', di:2736, cy:6, hp:200, tq:258, tx:'4-speed auto', dr:'FWD', z1:9.0, qm:16.8, ts:205, fc:10, fh:15, fx:12, ft:'Petrol', wt:1490, se:4, ca:350, pr:26000+(y-2001)*400, pc:5000 }
      if (trim === 'Limited') return { en:'2.7L V6', di:2736, cy:6, hp:200, tq:258, tx:'4-speed auto', dr:'FWD', z1:9.0, qm:16.8, ts:205, fc:10, fh:15, fx:12, ft:'Petrol', wt:1498, se:5, ca:450, pr:27000+(y-2001)*400, pc:5500 }
      if (trim === 'Touring') return { en:'2.4L I4', di:2429, cy:4, hp:150, tq:220, tx:'4-speed auto', dr:'FWD', z1:10.3, qm:17.3, ts:188, fc:11, fh:16, fx:13, ft:'Petrol', wt:1460, se:5, ca:450, pr:23000+(y-2001)*400, pc:4500 }
    }
    if (y >= 2007 && y <= 2010) {
      if (trim === 'base' || trim === 'LX') return { en:'2.4L I4', di:2360, cy:4, hp:173, tq:229, tx:'4-speed auto', dr:'FWD', z1:9.8, qm:17.2, ts:193, fc:11, fh:17, fx:13, ft:'Petrol', wt:1565, se:5, ca:360, pr:22000+(y-2007)*400, pc:5000 }
      if (trim === 'JXi')     return { en:'3.5L V6', di:3518, cy:6, hp:235, tq:320, tx:'6-speed auto', dr:'FWD', z1:8.0, qm:16.2, ts:215, fc:10, fh:15, fx:12, ft:'Petrol', wt:1625, se:4, ca:330, pr:28000+(y-2007)*400, pc:6500 }
      if (trim === 'Limited') return { en:'2.7L V6', di:2736, cy:6, hp:189, tq:258, tx:'6-speed auto', dr:'FWD', z1:8.8, qm:16.5, ts:210, fc:10, fh:16, fx:13, ft:'Petrol', wt:1610, se:5, ca:360, pr:26000+(y-2007)*400, pc:6000 }
      if (trim === 'Touring') return { en:'2.4L I4', di:2360, cy:4, hp:173, tq:229, tx:'4-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:196, fc:11, fh:17, fx:13, ft:'Petrol', wt:1575, se:5, ca:360, pr:24000+(y-2007)*400, pc:5500 }
    }
  }

  // ── Pacifica ─────────────────────────────────────────────────────────────────
  if (model === 'Pacifica') {
    if (y >= 2016 && y <= 2024) {
      const pc = 20000 + (y - 2016) * 1200
      if (trim === 'base')     return { en:'3.6L V6', di:3604, cy:6, hp:287, tq:353, tx:'9-speed auto', dr:'FWD', z1:8.0, qm:16.2, ts:208, fc:11, fh:17, fx:14, ft:'Petrol', wt:1995, se:7, ca:3000, pr:33000+(y-2016)*800, pc }
      if (trim === 'Touring')  return { en:'3.6L V6', di:3604, cy:6, hp:287, tq:353, tx:'9-speed auto', dr:'FWD', z1:7.8, qm:16.0, ts:210, fc:11, fh:17, fx:14, ft:'Petrol', wt:1995, se:7, ca:3000, pr:36000+(y-2016)*800, pc:pc+2000 }
      if (trim === 'Limited')  return { en:'3.6L V6', di:3604, cy:6, hp:287, tq:353, tx:'9-speed auto', dr:'AWD', z1:8.0, qm:16.2, ts:207, fc:10, fh:15, fx:12, ft:'Petrol', wt:2086, se:7, ca:3000, pr:42000+(y-2016)*800, pc:pc+5000 }
      if (trim === 'Pinnacle') return { en:'3.6L V6', di:3604, cy:6, hp:287, tq:353, tx:'9-speed auto', dr:'AWD', z1:8.0, qm:16.2, ts:207, fc:10, fh:15, fx:12, ft:'Petrol', wt:2090, se:7, ca:3000, pr:52000+(y-2016)*800, pc:pc+10000 }
      if (trim === 'Hybrid')   return { en:'3.6L V6 PHEV', di:3604, cy:6, hp:260, tq:441, tx:'e-CVT', dr:'FWD', z1:7.2, qm:15.5, ts:195, fc:7, fh:7, fx:7, ft:'Hybrid', wt:2222, se:7, ca:3000, pr:44000+(y-2016)*800, pc:pc+8000 }
    }
  }

  // ── Delta ─────────────────────────────────────────────────────────────────────
  if (model === 'Delta') {
    if (y >= 2008 && y <= 2014) {
      if (trim === 'base')    return { en:'1.4L Turbo I4', di:1368, cy:4, hp:120, tq:200, tx:'6-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:190, fc:12, fh:18, fx:14, ft:'Petrol', wt:1310, se:5, ca:280, pr:25000+(y-2008)*400, pc:4000 }
      if (trim === 'Sport')   return { en:'1.6L Turbo I4', di:1598, cy:4, hp:180, tq:240, tx:'6-speed auto', dr:'FWD', z1:8.5, qm:16.5, ts:215, fc:11, fh:16, fx:13, ft:'Petrol', wt:1355, se:5, ca:280, pr:29000+(y-2008)*400, pc:5000 }
      if (trim === 'Limited') return { en:'1.4L Turbo I4', di:1368, cy:4, hp:140, tq:220, tx:'6-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:200, fc:12, fh:17, fx:14, ft:'Petrol', wt:1330, se:5, ca:280, pr:28000+(y-2008)*400, pc:4500 }
    }
  }

  return null
}

function citroenSpec(model, year, trim) {
  const y = Number(year)

  // ── 2CV ──────────────────────────────────────────────────────────────────────
  if (model === '2CV') {
    const base = { en:'0.4L Flat-2', di:375, cy:2, hp:9, tq:22, tx:'4-speed manual', dr:'FWD', z1:35.0, qm:28.0, ts:85, fc:18, fh:25, fx:21, ft:'Petrol', wt:540, se:4, ca:122 }
    if (y >= 1948 && y <= 1960) {
      if (trim === 'A')   return { ...base, pr:500+(y-1948)*30, pc:15000 }
      if (trim === 'AZ')  return { ...base, en:'0.4L Flat-2', di:425, hp:12, ts:90, pr:600+(y-1948)*30, pc:14000 }
    }
    if (y >= 1961 && y <= 1974) {
      const mid = { ...base, en:'0.6L Flat-2', di:602, hp:18, tq:39, ts:108 }
      if (trim === 'A' || trim === 'AZ') return { ...mid, pr:700+(y-1961)*40, pc:10000 }
      if (trim === '6')          return { ...mid, pr:900+(y-1961)*40, pc:12000 }
      if (trim === 'Special')    return { ...mid, pr:950+(y-1961)*40, pc:11000 }
      if (trim === 'Charleston') return { ...mid, pr:1200+(y-1961)*50, pc:14000+(1974-y)*300 }
      if (trim === 'Dolly')      return { ...mid, pr:1100+(y-1961)*50, pc:13000+(1974-y)*300 }
    }
    if (y >= 1975 && y <= 1990) {
      const late = { ...base, en:'0.65L Flat-2', di:652, cy:2, hp:29, tq:44, ts:120 }
      if (trim === '6')          return { ...late, pr:4000+(y-1975)*200, pc:8000+(90-y)*200 }
      if (trim === 'Special')    return { ...late, pr:4200+(y-1975)*200, pc:9000+(90-y)*200 }
      if (trim === 'Charleston') return { ...late, pr:5500+(y-1975)*200, pc:12000+(90-y)*300 }
      if (trim === 'Dolly')      return { ...late, pr:5000+(y-1975)*200, pc:11000+(90-y)*300 }
      if (trim === 'A' || trim === 'AZ') return { ...late, pr:4000+(y-1975)*200, pc:7000 }
    }
  }

  // ── DS (classic) ─────────────────────────────────────────────────────────────
  if (model === 'DS') {
    const base = { en:'1.9L I4', di:1911, cy:4, hp:75, tq:145, tx:'4-speed manual', dr:'FWD', z1:16.0, qm:21.0, ts:155, fc:11, fh:16, fx:13, ft:'Petrol', wt:1200, se:6, ca:450 }
    if (y >= 1955 && y <= 1975) {
      if (trim === '19')  return { ...base, pr:1500+(y-1955)*80, pc:35000+(75-y)*500 }
      if (trim === '20')  return { ...base, en:'2.0L I4', di:1985, hp:83, ts:160, pr:1800+(y-1955)*80, pc:30000+(75-y)*500 }
      if (trim === '21')  return { ...base, en:'2.1L I4', di:2175, hp:100, ts:175, pr:2200+(y-1955)*80, pc:25000+(75-y)*500 }
      if (trim === '23')  return { ...base, en:'2.3L I4', di:2347, hp:130, ts:188, pr:3000+(y-1955)*100, pc:28000+(75-y)*600 }
      if (trim === 'Pallas')     return { ...base, en:'2.0L I4', di:1985, hp:90, ts:162, pr:2500+(y-1955)*90, pc:32000+(75-y)*600 }
      if (trim === 'Cabriolet')  return { ...base, en:'2.0L I4', di:1985, hp:90, ts:160, wt:1250, se:4, pr:4000+(y-1955)*120, pc:55000+(75-y)*800 }
    }
  }

  // ── SM ───────────────────────────────────────────────────────────────────────
  if (model === 'SM') {
    if (y >= 1970 && y <= 1975) {
      if (trim === 'base')     return { en:'2.7L V6', di:2670, cy:6, hp:170, tq:232, tx:'5-speed manual', dr:'FWD', z1:9.0, qm:16.8, ts:225, fc:12, fh:16, fx:14, ft:'Petrol', wt:1450, se:4, ca:310, pr:5500+(y-1970)*200, pc:30000+(75-y)*400 }
      if (trim === 'Injection') return { en:'2.7L V6 Inj', di:2670, cy:6, hp:178, tq:240, tx:'5-speed manual', dr:'FWD', z1:8.7, qm:16.5, ts:230, fc:12, fh:16, fx:13, ft:'Petrol', wt:1460, se:4, ca:310, pr:6200+(y-1970)*200, pc:32000+(75-y)*400 }
    }
  }

  // ── CX ───────────────────────────────────────────────────────────────────────
  if (model === 'CX') {
    if (y >= 1974 && y <= 1991) {
      if (trim === 'Athena')   return { en:'2.0L I4', di:1985, cy:4, hp:102, tq:156, tx:'5-speed manual', dr:'FWD', z1:12.5, qm:18.5, ts:178, fc:11, fh:17, fx:13, ft:'Petrol', wt:1240, se:5, ca:470, pr:6000+(y-1974)*300, pc:6000+(91-y)*200 }
      if (trim === 'Pallas')   return { en:'2.0L I4', di:1985, cy:4, hp:102, tq:156, tx:'5-speed manual', dr:'FWD', z1:12.5, qm:18.5, ts:178, fc:11, fh:17, fx:13, ft:'Petrol', wt:1260, se:5, ca:470, pr:8000+(y-1974)*350, pc:8000+(91-y)*200 }
      if (trim === 'GTi')      return { en:'2.4L I4', di:2347, cy:4, hp:128, tq:188, tx:'5-speed manual', dr:'FWD', z1:10.5, qm:17.5, ts:195, fc:11, fh:16, fx:13, ft:'Petrol', wt:1330, se:5, ca:470, pr:12000+(y-1974)*400, pc:12000+(91-y)*300 }
      if (trim === 'Prestige') return { en:'2.5L I6', di:2473, cy:6, hp:168, tq:235, tx:'3-speed auto', dr:'FWD', z1:10.0, qm:17.2, ts:200, fc:12, fh:16, fx:14, ft:'Petrol', wt:1390, se:5, ca:470, pr:15000+(y-1974)*450, pc:14000+(91-y)*300 }
      if (trim === 'Turbo')    return { en:'2.5L Turbo I4', di:2473, cy:4, hp:170, tq:295, tx:'5-speed manual', dr:'FWD', z1:9.5, qm:17.0, ts:205, fc:11, fh:15, fx:13, ft:'Petrol', wt:1395, se:5, ca:470, pr:18000+(y-1974)*500, pc:18000+(91-y)*400 }
    }
  }

  // ── BX ───────────────────────────────────────────────────────────────────────
  if (model === 'BX') {
    if (y >= 1982 && y <= 1994) {
      if (trim === '14')  return { en:'1.4L I4', di:1360, cy:4, hp:60, tq:100, tx:'5-speed manual', dr:'FWD', z1:15.5, qm:20.5, ts:155, fc:13, fh:19, fx:15, ft:'Petrol', wt:875, se:5, ca:475, pr:7000+(y-1982)*300, pc:3000+(94-y)*100 }
      if (trim === '16')  return { en:'1.6L I4', di:1580, cy:4, hp:90, tq:130, tx:'5-speed manual', dr:'FWD', z1:12.5, qm:18.5, ts:175, fc:12, fh:18, fx:14, ft:'Petrol', wt:930, se:5, ca:475, pr:8500+(y-1982)*300, pc:3500+(94-y)*100 }
      if (trim === '19')  return { en:'1.9L I4', di:1905, cy:4, hp:102, tq:155, tx:'5-speed manual', dr:'FWD', z1:11.0, qm:17.8, ts:182, fc:11, fh:17, fx:13, ft:'Petrol', wt:980, se:5, ca:475, pr:10000+(y-1982)*350, pc:4000+(94-y)*100 }
      if (trim === 'GTI') return { en:'1.9L I4', di:1905, cy:4, hp:122, tq:172, tx:'5-speed manual', dr:'FWD', z1:9.5, qm:17.0, ts:195, fc:11, fh:16, fx:13, ft:'Petrol', wt:1000, se:5, ca:475, pr:14000+(y-1982)*400, pc:5000+(94-y)*150 }
      if (trim === '4x4') return { en:'1.9L I4', di:1905, cy:4, hp:102, tq:155, tx:'5-speed manual', dr:'AWD', z1:12.0, qm:18.2, ts:175, fc:12, fh:17, fx:14, ft:'Petrol', wt:1150, se:5, ca:475, pr:16000+(y-1982)*400, pc:5000+(94-y)*150 }
    }
  }

  // ── ZX ───────────────────────────────────────────────────────────────────────
  if (model === 'ZX') {
    if (y >= 1991 && y <= 1997) {
      if (trim === 'Advantage' || trim === 'Avantage') return { en:'1.4L I4', di:1360, cy:4, hp:75, tq:117, tx:'5-speed manual', dr:'FWD', z1:14.5, qm:19.5, ts:163, fc:13, fh:18, fx:15, ft:'Petrol', wt:1005, se:5, ca:380, pr:10000+(y-1991)*300, pc:2000+(97-y)*100 }
      if (trim === 'Volcane')  return { en:'1.8L I4', di:1761, cy:4, hp:107, tq:153, tx:'5-speed manual', dr:'FWD', z1:11.0, qm:17.8, ts:188, fc:11, fh:17, fx:13, ft:'Petrol', wt:1080, se:5, ca:380, pr:15000+(y-1991)*400, pc:3000+(97-y)*150 }
      if (trim === 'Aura')     return { en:'2.0L I4', di:1998, cy:4, hp:132, tq:178, tx:'5-speed manual', dr:'FWD', z1:9.5, qm:17.0, ts:200, fc:11, fh:16, fx:13, ft:'Petrol', wt:1110, se:5, ca:380, pr:18000+(y-1991)*400, pc:3500+(97-y)*150 }
    }
  }

  // ── Xantia ───────────────────────────────────────────────────────────────────
  if (model === 'Xantia') {
    if (y >= 1993 && y <= 2001) {
      if (trim === 'base') return { en:'1.8L I4', di:1761, cy:4, hp:101, tq:150, tx:'5-speed manual', dr:'FWD', z1:12.0, qm:18.2, ts:180, fc:11, fh:17, fx:13, ft:'Petrol', wt:1240, se:5, ca:430, pr:18000+(y-1993)*400, pc:3000+(2001-y)*100 }
      if (trim === 'SX')   return { en:'1.8L I4', di:1761, cy:4, hp:101, tq:150, tx:'5-speed manual', dr:'FWD', z1:11.8, qm:18.0, ts:182, fc:11, fh:17, fx:13, ft:'Petrol', wt:1255, se:5, ca:430, pr:21000+(y-1993)*400, pc:3500+(2001-y)*100 }
      if (trim === 'VSX')  return { en:'2.0L I4', di:1998, cy:4, hp:132, tq:178, tx:'5-speed manual', dr:'FWD', z1:10.0, qm:17.2, ts:198, fc:11, fh:16, fx:13, ft:'Petrol', wt:1295, se:5, ca:430, pr:25000+(y-1993)*500, pc:4500+(2001-y)*150 }
      if (trim === 'Activa') return { en:'2.0L I4', di:1998, cy:4, hp:150, tq:198, tx:'5-speed manual', dr:'FWD', z1:9.2, qm:16.8, ts:208, fc:11, fh:16, fx:13, ft:'Petrol', wt:1360, se:5, ca:430, pr:30000+(y-1993)*500, pc:6000+(2001-y)*150 }
      if (trim === 'V6')   return { en:'3.0L V6', di:2946, cy:6, hp:190, tq:270, tx:'4-speed auto', dr:'FWD', z1:8.5, qm:16.5, ts:218, fc:12, fh:17, fx:14, ft:'Petrol', wt:1465, se:5, ca:430, pr:36000+(y-1993)*600, pc:7000+(2001-y)*200 }
    }
  }

  // ── Saxo ─────────────────────────────────────────────────────────────────────
  if (model === 'Saxo') {
    if (y >= 1996 && y <= 2004) {
      if (trim === 'base') return { en:'1.1L I4', di:1124, cy:4, hp:55, tq:89, tx:'5-speed manual', dr:'FWD', z1:17.0, qm:22.0, ts:152, fc:14, fh:19, fx:16, ft:'Petrol', wt:840, se:5, ca:165, pr:10000+(y-1996)*300, pc:2000+(2004-y)*100 }
      if (trim === 'SX')   return { en:'1.4L I4', di:1360, cy:4, hp:75, tq:117, tx:'5-speed manual', dr:'FWD', z1:13.5, qm:19.0, ts:168, fc:13, fh:18, fx:15, ft:'Petrol', wt:875, se:5, ca:165, pr:13000+(y-1996)*300, pc:3000+(2004-y)*100 }
      if (trim === 'VTR')  return { en:'1.6L I4', di:1587, cy:4, hp:98, tq:140, tx:'5-speed manual', dr:'FWD', z1:10.5, qm:17.5, ts:190, fc:12, fh:17, fx:14, ft:'Petrol', wt:935, se:4, ca:165, pr:16000+(y-1996)*350, pc:4000+(2004-y)*150 }
      if (trim === 'VTS')  return { en:'1.6L 16v I4', di:1587, cy:4, hp:120, tq:150, tx:'5-speed manual', dr:'FWD', z1:8.8, qm:16.5, ts:203, fc:11, fh:16, fx:13, ft:'Petrol', wt:970, se:4, ca:165, pr:19000+(y-1996)*350, pc:5000+(2004-y)*200 }
    }
  }

  // ── XM ───────────────────────────────────────────────────────────────────────
  if (model === 'XM') {
    if (y >= 1989 && y <= 2000) {
      if (trim === 'base')     return { en:'2.0L I4', di:1998, cy:4, hp:132, tq:178, tx:'5-speed manual', dr:'FWD', z1:11.0, qm:17.8, ts:192, fc:11, fh:16, fx:13, ft:'Petrol', wt:1430, se:5, ca:460, pr:24000+(y-1989)*500, pc:4000+(2000-y)*150 }
      if (trim === 'V6')       return { en:'3.0L V6', di:2975, cy:6, hp:200, tq:270, tx:'4-speed auto', dr:'FWD', z1:9.0, qm:16.8, ts:220, fc:12, fh:17, fx:14, ft:'Petrol', wt:1560, se:5, ca:460, pr:38000+(y-1989)*600, pc:6000+(2000-y)*200 }
      if (trim === 'Turbo CT') return { en:'2.1L Turbo Diesel I4', di:2088, cy:4, hp:147, tq:330, tx:'5-speed manual', dr:'FWD', z1:10.5, qm:17.5, ts:202, fc:10, fh:14, fx:12, ft:'Diesel', wt:1495, se:5, ca:460, pr:32000+(y-1989)*500, pc:5000+(2000-y)*150 }
      if (trim === 'Y4')       return { en:'3.0L V6', di:2975, cy:6, hp:190, tq:260, tx:'4-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:215, fc:12, fh:16, fx:14, ft:'Petrol', wt:1545, se:5, ca:460, pr:35000+(y-1989)*600, pc:5500+(2000-y)*200 }
    }
  }

  // ── C3 ───────────────────────────────────────────────────────────────────────
  if (model === 'C3') {
    const trims2002 = { base:'1.4i', Exclusive:'1.6i', SX:'1.4i', Pluriel:'1.6i', Attraction:'1.4 HDi', Seduction:'1.6i', Shine:'1.4i' }
    if (y >= 2002 && y <= 2009) {
      if (trim === 'base' || trim === 'Attraction')  return { en:'1.4L I4', di:1360, cy:4, hp:75, tq:117, tx:'5-speed manual', dr:'FWD', z1:15.0, qm:20.0, ts:163, fc:14, fh:19, fx:16, ft:'Petrol', wt:1030, se:5, ca:305, pr:14000+(y-2002)*300, pc:3000+(2009-y)*100 }
      if (trim === 'SX' || trim === 'Exclusive' || trim === 'Seduction') return { en:'1.6L I4', di:1587, cy:4, hp:110, tq:147, tx:'5-speed manual', dr:'FWD', z1:10.5, qm:17.5, ts:188, fc:13, fh:17, fx:15, ft:'Petrol', wt:1085, se:5, ca:305, pr:17000+(y-2002)*300, pc:4000+(2009-y)*100 }
      if (trim === 'Pluriel')    return { en:'1.6L I4', di:1587, cy:4, hp:110, tq:147, tx:'5-speed manual', dr:'FWD', z1:11.0, qm:17.8, ts:185, fc:13, fh:17, fx:15, ft:'Petrol', wt:1115, se:4, ca:160, pr:20000+(y-2002)*300, pc:4500+(2009-y)*100 }
      if (trim === 'Shine')      return { en:'1.4L I4', di:1360, cy:4, hp:75, tq:117, tx:'5-speed manual', dr:'FWD', z1:15.0, qm:20.0, ts:163, fc:14, fh:19, fx:16, ft:'Petrol', wt:1030, se:5, ca:305, pr:15000+(y-2002)*300, pc:3000+(2009-y)*100 }
    }
    if (y >= 2010 && y <= 2016) {
      if (trim === 'base' || trim === 'Attraction' || trim === 'SX') return { en:'1.2L I3', di:1199, cy:3, hp:82, tq:118, tx:'5-speed manual', dr:'FWD', z1:13.5, qm:19.0, ts:172, fc:14, fh:19, fx:16, ft:'Petrol', wt:1065, se:5, ca:300, pr:15000+(y-2010)*300, pc:5000+(2016-y)*200 }
      if (trim === 'Exclusive' || trim === 'Seduction') return { en:'1.6L I4', di:1587, cy:4, hp:120, tq:160, tx:'5-speed manual', dr:'FWD', z1:10.0, qm:17.0, ts:195, fc:13, fh:18, fx:15, ft:'Petrol', wt:1105, se:5, ca:300, pr:18000+(y-2010)*300, pc:6000+(2016-y)*200 }
      if (trim === 'Pluriel')    return { en:'1.4L I4', di:1360, cy:4, hp:75, tq:117, tx:'5-speed manual', dr:'FWD', z1:15.0, qm:20.0, ts:163, fc:14, fh:19, fx:16, ft:'Petrol', wt:1050, se:4, ca:160, pr:17000+(y-2010)*300, pc:5000+(2016-y)*200 }
      if (trim === 'Shine')      return { en:'1.6L I4', di:1587, cy:4, hp:120, tq:160, tx:'5-speed manual', dr:'FWD', z1:10.0, qm:17.0, ts:195, fc:13, fh:18, fx:15, ft:'Petrol', wt:1105, se:5, ca:300, pr:19000+(y-2010)*300, pc:6000+(2016-y)*200 }
    }
    if (y >= 2017 && y <= 2023) {
      if (trim === 'base' || trim === 'Attraction') return { en:'1.2L I3', di:1199, cy:3, hp:82, tq:118, tx:'5-speed manual', dr:'FWD', z1:13.0, qm:18.8, ts:172, fc:14, fh:19, fx:16, ft:'Petrol', wt:1041, se:5, ca:300, pr:16500+(y-2017)*400, pc:10000+(2023-y)*300 }
      if (trim === 'SX' || trim === 'Seduction') return { en:'1.2L Turbo I3', di:1199, cy:3, hp:110, tq:205, tx:'6-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:193, fc:13, fh:18, fx:15, ft:'Petrol', wt:1085, se:5, ca:300, pr:19000+(y-2017)*400, pc:11000+(2023-y)*300 }
      if (trim === 'Exclusive')  return { en:'1.2L Turbo I3', di:1199, cy:3, hp:110, tq:205, tx:'6-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:193, fc:13, fh:18, fx:15, ft:'Petrol', wt:1085, se:5, ca:300, pr:21000+(y-2017)*400, pc:12000+(2023-y)*300 }
      if (trim === 'Shine')      return { en:'1.2L Turbo I3', di:1199, cy:3, hp:130, tq:230, tx:'8-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:205, fc:13, fh:18, fx:15, ft:'Petrol', wt:1100, se:5, ca:300, pr:23000+(y-2017)*400, pc:13000+(2023-y)*300 }
      if (trim === 'Pluriel')    return { en:'1.2L I3', di:1199, cy:3, hp:82, tq:118, tx:'5-speed manual', dr:'FWD', z1:13.0, qm:18.8, ts:172, fc:14, fh:19, fx:16, ft:'Petrol', wt:1060, se:4, ca:160, pr:17000+(y-2017)*400, pc:10000+(2023-y)*300 }
    }
  }

  // ── C4 ───────────────────────────────────────────────────────────────────────
  if (model === 'C4') {
    if (y >= 2004 && y <= 2010) {
      if (trim === 'base' || trim === 'Attraction') return { en:'1.6L I4', di:1587, cy:4, hp:110, tq:147, tx:'5-speed manual', dr:'FWD', z1:11.0, qm:17.8, ts:190, fc:12, fh:17, fx:14, ft:'Petrol', wt:1220, se:5, ca:408, pr:18000+(y-2004)*400, pc:4000+(2010-y)*100 }
      if (trim === 'Exclusive' || trim === 'Shine') return { en:'2.0L I4', di:1997, cy:4, hp:143, tq:200, tx:'5-speed manual', dr:'FWD', z1:9.5, qm:17.0, ts:205, fc:11, fh:16, fx:13, ft:'Petrol', wt:1295, se:5, ca:408, pr:22000+(y-2004)*400, pc:5000+(2010-y)*100 }
      if (trim === 'VTR+')     return { en:'2.0L 16v I4', di:1997, cy:4, hp:180, tq:220, tx:'6-speed manual', dr:'FWD', z1:7.5, qm:15.9, ts:220, fc:11, fh:16, fx:13, ft:'Petrol', wt:1335, se:5, ca:408, pr:28000+(y-2004)*500, pc:7000+(2010-y)*200 }
      if (trim === 'Coupe')    return { en:'2.0L 16v I4', di:1997, cy:4, hp:180, tq:220, tx:'6-speed manual', dr:'FWD', z1:7.5, qm:15.9, ts:220, fc:11, fh:16, fx:13, ft:'Petrol', wt:1340, se:4, ca:330, pr:30000+(y-2004)*500, pc:7500+(2010-y)*200 }
    }
    if (y >= 2011 && y <= 2018) {
      if (trim === 'base' || trim === 'Attraction') return { en:'1.6L I4', di:1587, cy:4, hp:120, tq:160, tx:'5-speed manual', dr:'FWD', z1:10.5, qm:17.5, ts:195, fc:12, fh:17, fx:14, ft:'Petrol', wt:1265, se:5, ca:408, pr:20000+(y-2011)*400, pc:7000+(2018-y)*300 }
      if (trim === 'Exclusive' || trim === 'Shine') return { en:'1.6L Turbo I4', di:1598, cy:4, hp:155, tq:240, tx:'6-speed manual', dr:'FWD', z1:8.5, qm:16.5, ts:215, fc:11, fh:16, fx:13, ft:'Petrol', wt:1310, se:5, ca:408, pr:25000+(y-2011)*400, pc:9000+(2018-y)*300 }
      if (trim === 'VTR+')     return { en:'1.6L Turbo I4', di:1598, cy:4, hp:155, tq:240, tx:'6-speed manual', dr:'FWD', z1:8.5, qm:16.5, ts:215, fc:11, fh:16, fx:13, ft:'Petrol', wt:1310, se:5, ca:408, pr:23000+(y-2011)*400, pc:8000+(2018-y)*300 }
      if (trim === 'Coupe')    return { en:'1.6L Turbo I4', di:1598, cy:4, hp:155, tq:240, tx:'6-speed manual', dr:'FWD', z1:8.5, qm:16.5, ts:215, fc:11, fh:16, fx:13, ft:'Petrol', wt:1315, se:4, ca:330, pr:26000+(y-2011)*400, pc:9000+(2018-y)*300 }
    }
    if (y >= 2011 && y <= 2020 && trim === 'e-C4') {
      // e-C4 launched 2021; map earlier entries to equivalent petrol base spec
      return { en:'1.6L Turbo I4', di:1598, cy:4, hp:155, tq:240, tx:'6-speed auto', dr:'FWD', z1:8.5, qm:16.5, ts:215, fc:11, fh:16, fx:13, ft:'Petrol', wt:1310, se:5, ca:380, pr:24000+(y-2011)*400, pc:8000 }
    }
    if (y >= 2019 && y <= 2020) {
      if (trim === 'base' || trim === 'Attraction') return { en:'1.2L Turbo I3', di:1199, cy:3, hp:100, tq:205, tx:'6-speed auto', dr:'FWD', z1:10.8, qm:17.7, ts:190, fc:13, fh:18, fx:15, ft:'Petrol', wt:1265, se:5, ca:408, pr:22000+(y-2019)*600, pc:13000 }
      if (trim === 'Exclusive' || trim === 'Shine') return { en:'1.2L Turbo I3', di:1199, cy:3, hp:130, tq:230, tx:'6-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:205, fc:13, fh:18, fx:15, ft:'Petrol', wt:1290, se:5, ca:408, pr:27000+(y-2019)*600, pc:15000 }
      if (trim === 'VTR+')     return { en:'1.2L Turbo I3', di:1199, cy:3, hp:130, tq:230, tx:'6-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:205, fc:13, fh:18, fx:15, ft:'Petrol', wt:1290, se:5, ca:408, pr:25000+(y-2019)*600, pc:14000 }
      if (trim === 'Coupe')    return { en:'1.2L Turbo I3', di:1199, cy:3, hp:130, tq:230, tx:'6-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:205, fc:13, fh:18, fx:15, ft:'Petrol', wt:1295, se:4, ca:330, pr:28000+(y-2019)*600, pc:15500 }
    }
    if (y >= 2021 && y <= 2023) {
      if (trim === 'base' || trim === 'Attraction') return { en:'1.2L Turbo I3', di:1199, cy:3, hp:100, tq:205, tx:'6-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:190, fc:13, fh:18, fx:15, ft:'Petrol', wt:1270, se:5, ca:380, pr:24000+(y-2021)*600, pc:20000+(2023-y)*400 }
      if (trim === 'Exclusive' || trim === 'Shine') return { en:'1.2L Turbo I3', di:1199, cy:3, hp:130, tq:230, tx:'8-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:205, fc:13, fh:18, fx:15, ft:'Petrol', wt:1290, se:5, ca:380, pr:28000+(y-2021)*600, pc:22000+(2023-y)*400 }
      if (trim === 'VTR+')     return { en:'1.2L Turbo I3', di:1199, cy:3, hp:130, tq:230, tx:'8-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:205, fc:13, fh:18, fx:15, ft:'Petrol', wt:1290, se:5, ca:380, pr:26000+(y-2021)*600, pc:21000+(2023-y)*400 }
      if (trim === 'e-C4')     return { en:'Electric', di:0, cy:0, hp:136, tq:260, tx:'1-speed auto', dr:'FWD', z1:9.7, qm:17.2, ts:150, fc:0, fh:0, fx:0, ft:'Electric', wt:1527, se:5, ca:380, pr:36000+(y-2021)*600, pc:29000+(2023-y)*400 }
      if (trim === 'Coupe')    return { en:'1.2L Turbo I3', di:1199, cy:3, hp:130, tq:230, tx:'8-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:205, fc:13, fh:18, fx:15, ft:'Petrol', wt:1295, se:4, ca:330, pr:30000+(y-2021)*600, pc:23000+(2023-y)*400 }
    }
  }

  // ── C5 ───────────────────────────────────────────────────────────────────────
  if (model === 'C5') {
    if (y >= 2001 && y <= 2007) {
      if (trim === 'Comfort' || trim === 'SX') return { en:'2.0L I4', di:1997, cy:4, hp:136, tq:190, tx:'4-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:205, fc:11, fh:16, fx:13, ft:'Petrol', wt:1395, se:5, ca:467, pr:28000+(y-2001)*500, pc:5000+(2007-y)*200 }
      if (trim === 'Exclusive' || trim === 'Tourer') return { en:'2.0L I4', di:1997, cy:4, hp:136, tq:190, tx:'4-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:205, fc:11, fh:16, fx:13, ft:'Petrol', wt:1415, se:5, ca:467, pr:32000+(y-2001)*500, pc:6000+(2007-y)*200 }
      if (trim === 'V6')    return { en:'3.0L V6', di:2946, cy:6, hp:207, tq:285, tx:'4-speed auto', dr:'FWD', z1:8.5, qm:16.5, ts:225, fc:10, fh:15, fx:12, ft:'Petrol', wt:1510, se:5, ca:467, pr:40000+(y-2001)*600, pc:7000+(2007-y)*200 }
      if (trim === 'GT')    return { en:'2.0L Turbo I4', di:1997, cy:4, hp:177, tq:300, tx:'4-speed auto', dr:'FWD', z1:9.0, qm:16.8, ts:215, fc:11, fh:15, fx:13, ft:'Petrol', wt:1440, se:5, ca:467, pr:35000+(y-2001)*500, pc:7000+(2007-y)*200 }
    }
    if (y >= 2008 && y <= 2017) {
      if (trim === 'Comfort' || trim === 'SX') return { en:'1.6L I4', di:1587, cy:4, hp:120, tq:160, tx:'4-speed auto', dr:'FWD', z1:11.0, qm:17.8, ts:195, fc:11, fh:17, fx:14, ft:'Petrol', wt:1465, se:5, ca:439, pr:29000+(y-2008)*500, pc:8000+(2017-y)*300 }
      if (trim === 'Exclusive' || trim === 'Tourer') return { en:'2.0L I4', di:1997, cy:4, hp:145, tq:200, tx:'6-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:210, fc:11, fh:16, fx:13, ft:'Petrol', wt:1520, se:5, ca:439, pr:34000+(y-2008)*500, pc:9000+(2017-y)*300 }
      if (trim === 'V6')    return { en:'3.0L V6', di:2946, cy:6, hp:215, tq:290, tx:'6-speed auto', dr:'FWD', z1:8.0, qm:16.2, ts:228, fc:11, fh:15, fx:13, ft:'Petrol', wt:1590, se:5, ca:439, pr:42000+(y-2008)*600, pc:10000+(2017-y)*400 }
      if (trim === 'GT')    return { en:'1.6L Turbo I4', di:1598, cy:4, hp:200, tq:285, tx:'6-speed auto', dr:'FWD', z1:8.0, qm:16.2, ts:225, fc:10, fh:15, fx:12, ft:'Petrol', wt:1540, se:5, ca:439, pr:38000+(y-2008)*600, pc:10000+(2017-y)*400 }
    }
  }

  // ── C6 ───────────────────────────────────────────────────────────────────────
  if (model === 'C6') {
    if (y >= 2005 && y <= 2012) {
      if (trim === 'base')      return { en:'2.7L Diesel V6', di:2720, cy:6, hp:204, tq:450, tx:'6-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:218, fc:9, fh:13, fx:11, ft:'Diesel', wt:1740, se:5, ca:468, pr:48000+(y-2005)*800, pc:10000+(2012-y)*400 }
      if (trim === 'Exclusive') return { en:'3.0L Diesel V6', di:2993, cy:6, hp:241, tq:520, tx:'6-speed auto', dr:'FWD', z1:8.5, qm:16.5, ts:235, fc:9, fh:13, fx:11, ft:'Diesel', wt:1800, se:5, ca:468, pr:58000+(y-2005)*900, pc:12000+(2012-y)*500 }
      if (trim === 'V6')        return { en:'3.0L V6', di:2946, cy:6, hp:215, tq:290, tx:'6-speed auto', dr:'FWD', z1:8.5, qm:16.5, ts:228, fc:11, fh:15, fx:13, ft:'Petrol', wt:1780, se:5, ca:468, pr:55000+(y-2005)*900, pc:11000+(2012-y)*500 }
    }
  }

  // ── C-Crosser ────────────────────────────────────────────────────────────────
  if (model === 'C-Crosser') {
    if (y >= 2007 && y <= 2012) {
      if (trim === 'base' || trim === 'SX') return { en:'2.4L I4', di:2360, cy:4, hp:170, tq:226, tx:'6-speed auto', dr:'AWD', z1:10.5, qm:17.5, ts:190, fc:11, fh:15, fx:13, ft:'Petrol', wt:1680, se:7, ca:465, pr:32000+(y-2007)*500, pc:6000+(2012-y)*200 }
      if (trim === 'Exclusive') return { en:'2.2L Diesel I4', di:2179, cy:4, hp:156, tq:380, tx:'6-speed manual', dr:'AWD', z1:11.0, qm:17.8, ts:185, fc:15, fh:21, fx:17, ft:'Diesel', wt:1750, se:7, ca:465, pr:36000+(y-2007)*500, pc:7000+(2012-y)*200 }
    }
  }

  // ── Berlingo ─────────────────────────────────────────────────────────────────
  if (model === 'Berlingo') {
    if (y >= 1996 && y <= 2008) {
      if (trim === 'base' || trim === 'Multispace') return { en:'1.4L I4', di:1360, cy:4, hp:75, tq:117, tx:'5-speed manual', dr:'FWD', z1:16.0, qm:21.0, ts:152, fc:13, fh:18, fx:15, ft:'Petrol', wt:1140, se:5, ca:660, pr:16000+(y-1996)*300, pc:3000+(2008-y)*100 }
      if (trim === 'XTR')       return { en:'1.6L I4', di:1587, cy:4, hp:110, tq:145, tx:'5-speed manual', dr:'FWD', z1:12.0, qm:18.0, ts:175, fc:12, fh:17, fx:14, ft:'Petrol', wt:1200, se:5, ca:660, pr:19000+(y-1996)*300, pc:4000+(2008-y)*100 }
      if (trim === 'Feel')      return { en:'1.4L I4', di:1360, cy:4, hp:75, tq:117, tx:'5-speed manual', dr:'FWD', z1:16.0, qm:21.0, ts:152, fc:13, fh:18, fx:15, ft:'Petrol', wt:1150, se:5, ca:660, pr:17000+(y-1996)*300, pc:3000+(2008-y)*100 }
    }
    if (y >= 2009 && y <= 2018) {
      if (trim === 'base' || trim === 'Multispace') return { en:'1.6L I4', di:1587, cy:4, hp:98, tq:142, tx:'5-speed manual', dr:'FWD', z1:13.5, qm:19.0, ts:175, fc:12, fh:17, fx:14, ft:'Petrol', wt:1255, se:5, ca:660, pr:19000+(y-2009)*300, pc:6000+(2018-y)*200 }
      if (trim === 'XTR')       return { en:'1.6L I4', di:1587, cy:4, hp:120, tq:160, tx:'5-speed manual', dr:'FWD', z1:11.0, qm:17.8, ts:185, fc:11, fh:17, fx:14, ft:'Petrol', wt:1295, se:5, ca:660, pr:22000+(y-2009)*300, pc:7000+(2018-y)*200 }
      if (trim === 'Feel')      return { en:'1.6L I4', di:1587, cy:4, hp:98, tq:142, tx:'5-speed manual', dr:'FWD', z1:13.5, qm:19.0, ts:175, fc:12, fh:17, fx:14, ft:'Petrol', wt:1265, se:5, ca:660, pr:20000+(y-2009)*300, pc:6500+(2018-y)*200 }
    }
    if (y >= 2019 && y <= 2023) {
      if (trim === 'base' || trim === 'Multispace') return { en:'1.2L Turbo I3', di:1199, cy:3, hp:110, tq:205, tx:'6-speed manual', dr:'FWD', z1:11.5, qm:18.0, ts:182, fc:13, fh:18, fx:15, ft:'Petrol', wt:1335, se:5, ca:750, pr:24000+(y-2019)*500, pc:17000+(2023-y)*400 }
      if (trim === 'XTR')       return { en:'1.5L Diesel I4', di:1499, cy:4, hp:100, tq:250, tx:'5-speed manual', dr:'FWD', z1:12.5, qm:18.5, ts:178, fc:17, fh:24, fx:20, ft:'Diesel', wt:1395, se:5, ca:750, pr:26000+(y-2019)*500, pc:18000+(2023-y)*400 }
      if (trim === 'Feel')      return { en:'1.2L Turbo I3', di:1199, cy:3, hp:110, tq:205, tx:'6-speed manual', dr:'FWD', z1:11.5, qm:18.0, ts:182, fc:13, fh:18, fx:15, ft:'Petrol', wt:1345, se:5, ca:750, pr:25000+(y-2019)*500, pc:17500+(2023-y)*400 }
    }
  }

  // ── Picasso (C3 Picasso) ─────────────────────────────────────────────────────
  if (model === 'Picasso') {
    if (y >= 1999 && y <= 2004) {
      if (trim === 'base' || trim === 'SX') return { en:'1.8L I4', di:1749, cy:4, hp:115, tq:166, tx:'5-speed manual', dr:'FWD', z1:11.5, qm:18.2, ts:182, fc:12, fh:17, fx:14, ft:'Petrol', wt:1225, se:7, ca:2126, pr:22000+(y-1999)*400, pc:4000+(2004-y)*100 }
      if (trim === 'Exclusive' || trim === 'Dynamique') return { en:'2.0L I4', di:1997, cy:4, hp:136, tq:190, tx:'5-speed manual', dr:'FWD', z1:10.0, qm:17.2, ts:195, fc:11, fh:16, fx:13, ft:'Petrol', wt:1295, se:7, ca:2126, pr:27000+(y-1999)*400, pc:5000+(2004-y)*100 }
    }
    if (y >= 2005 && y <= 2016) {
      if (trim === 'base' || trim === 'SX') return { en:'1.6L I4', di:1587, cy:4, hp:120, tq:160, tx:'5-speed manual', dr:'FWD', z1:11.0, qm:17.8, ts:190, fc:12, fh:17, fx:14, ft:'Petrol', wt:1295, se:7, ca:2126, pr:25000+(y-2005)*400, pc:5500+(2016-y)*200 }
      if (trim === 'Exclusive' || trim === 'Dynamique') return { en:'1.6L Turbo I4', di:1598, cy:4, hp:165, tq:240, tx:'6-speed auto', dr:'FWD', z1:8.8, qm:16.5, ts:210, fc:11, fh:16, fx:13, ft:'Petrol', wt:1420, se:7, ca:2126, pr:30000+(y-2005)*400, pc:7000+(2016-y)*200 }
    }
  }

  // ── C4 Picasso ───────────────────────────────────────────────────────────────
  if (model === 'C4 Picasso') {
    if (y >= 2006 && y <= 2013) {
      if (trim === 'base')      return { en:'1.6L I4', di:1587, cy:4, hp:120, tq:160, tx:'5-speed manual', dr:'FWD', z1:11.5, qm:18.0, ts:188, fc:12, fh:17, fx:14, ft:'Petrol', wt:1485, se:7, ca:2094, pr:28000+(y-2006)*500, pc:6000+(2013-y)*200 }
      if (trim === 'Exclusive') return { en:'2.0L I4', di:1997, cy:4, hp:143, tq:200, tx:'6-speed auto', dr:'FWD', z1:10.0, qm:17.2, ts:200, fc:11, fh:16, fx:13, ft:'Petrol', wt:1560, se:7, ca:2094, pr:33000+(y-2006)*500, pc:7000+(2013-y)*200 }
      if (trim === 'Intensive')  return { en:'1.6L Turbo I4', di:1598, cy:4, hp:165, tq:240, tx:'6-speed auto', dr:'FWD', z1:9.0, qm:16.8, ts:210, fc:11, fh:15, fx:13, ft:'Petrol', wt:1550, se:7, ca:2094, pr:36000+(y-2006)*500, pc:8000+(2013-y)*200 }
      if (trim === 'Shine')     return { en:'2.0L I4', di:1997, cy:4, hp:143, tq:200, tx:'6-speed auto', dr:'FWD', z1:10.0, qm:17.2, ts:200, fc:11, fh:16, fx:13, ft:'Petrol', wt:1565, se:7, ca:2094, pr:35000+(y-2006)*500, pc:8000+(2013-y)*200 }
    }
    if (y >= 2014 && y <= 2023) {
      if (trim === 'base')      return { en:'1.2L Turbo I3', di:1199, cy:3, hp:130, tq:230, tx:'6-speed auto', dr:'FWD', z1:10.0, qm:17.2, ts:198, fc:13, fh:18, fx:15, ft:'Petrol', wt:1460, se:7, ca:2094, pr:33000+(y-2014)*500, pc:12000+(2023-y)*400 }
      if (trim === 'Exclusive') return { en:'1.6L Turbo I4', di:1598, cy:4, hp:165, tq:240, tx:'6-speed auto', dr:'FWD', z1:8.5, qm:16.5, ts:215, fc:11, fh:15, fx:13, ft:'Petrol', wt:1530, se:7, ca:2094, pr:38000+(y-2014)*500, pc:15000+(2023-y)*400 }
      if (trim === 'Intensive')  return { en:'2.0L BlueHDi Diesel I4', di:1997, cy:4, hp:150, tq:370, tx:'6-speed auto', dr:'FWD', z1:9.5, qm:17.0, ts:210, fc:9, fh:13, fx:11, ft:'Diesel', wt:1600, se:7, ca:2094, pr:40000+(y-2014)*500, pc:16000+(2023-y)*400 }
      if (trim === 'Shine')     return { en:'1.6L Turbo I4', di:1598, cy:4, hp:165, tq:240, tx:'6-speed auto', dr:'FWD', z1:8.5, qm:16.5, ts:215, fc:11, fh:15, fx:13, ft:'Petrol', wt:1535, se:7, ca:2094, pr:42000+(y-2014)*500, pc:18000+(2023-y)*400 }
    }
  }

  // ── Grand C4 Picasso ─────────────────────────────────────────────────────────
  if (model === 'Grand C4 Picasso') {
    if (y >= 2006 && y <= 2013) {
      if (trim === 'base')      return { en:'1.6L I4', di:1587, cy:4, hp:120, tq:160, tx:'5-speed manual', dr:'FWD', z1:12.0, qm:18.2, ts:185, fc:12, fh:17, fx:14, ft:'Petrol', wt:1620, se:7, ca:2181, pr:32000+(y-2006)*500, pc:7000+(2013-y)*200 }
      if (trim === 'Exclusive') return { en:'2.0L I4', di:1997, cy:4, hp:143, tq:200, tx:'6-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:198, fc:11, fh:16, fx:13, ft:'Petrol', wt:1690, se:7, ca:2181, pr:37000+(y-2006)*500, pc:8000+(2013-y)*200 }
      if (trim === 'Intensive')  return { en:'2.0L Diesel I4', di:1997, cy:4, hp:138, tq:320, tx:'6-speed auto', dr:'FWD', z1:11.0, qm:17.8, ts:192, fc:10, fh:15, fx:12, ft:'Diesel', wt:1735, se:7, ca:2181, pr:39000+(y-2006)*500, pc:8500+(2013-y)*200 }
    }
    if (y >= 2014 && y <= 2023) {
      if (trim === 'base')      return { en:'1.2L Turbo I3', di:1199, cy:3, hp:130, tq:230, tx:'6-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:195, fc:13, fh:18, fx:15, ft:'Petrol', wt:1580, se:7, ca:2181, pr:36000+(y-2014)*500, pc:14000+(2023-y)*400 }
      if (trim === 'Exclusive') return { en:'1.6L Turbo I4', di:1598, cy:4, hp:165, tq:240, tx:'6-speed auto', dr:'FWD', z1:8.8, qm:16.5, ts:210, fc:11, fh:16, fx:13, ft:'Petrol', wt:1640, se:7, ca:2181, pr:41000+(y-2014)*500, pc:17000+(2023-y)*400 }
      if (trim === 'Intensive')  return { en:'2.0L BlueHDi Diesel I4', di:1997, cy:4, hp:150, tq:370, tx:'6-speed auto', dr:'FWD', z1:9.8, qm:17.2, ts:205, fc:9, fh:13, fx:11, ft:'Diesel', wt:1700, se:7, ca:2181, pr:44000+(y-2014)*500, pc:18000+(2023-y)*400 }
    }
  }

  // ── DS3 ──────────────────────────────────────────────────────────────────────
  if (model === 'DS3') {
    if (y >= 2009 && y <= 2019) {
      if (trim === 'DStyle')      return { en:'1.2L Turbo I3', di:1199, cy:3, hp:110, tq:205, tx:'5-speed manual', dr:'FWD', z1:10.5, qm:17.5, ts:193, fc:13, fh:18, fx:15, ft:'Petrol', wt:1095, se:4, ca:285, pr:19000+(y-2009)*400, pc:8000+(2019-y)*300 }
      if (trim === 'DSport')      return { en:'1.6L Turbo I4', di:1587, cy:4, hp:150, tq:240, tx:'5-speed manual', dr:'FWD', z1:8.5, qm:16.5, ts:218, fc:11, fh:16, fx:13, ft:'Petrol', wt:1185, se:4, ca:285, pr:24000+(y-2009)*400, pc:10000+(2019-y)*300 }
      if (trim === 'Performance') return { en:'1.6L Turbo I4', di:1598, cy:4, hp:207, tq:275, tx:'6-speed manual', dr:'FWD', z1:6.8, qm:15.2, ts:228, fc:10, fh:15, fx:12, ft:'Petrol', wt:1205, se:4, ca:285, pr:32000+(y-2009)*500, pc:14000+(2019-y)*400 }
      if (trim === 'Cabrio')      return { en:'1.6L Turbo I4', di:1587, cy:4, hp:150, tq:240, tx:'5-speed manual', dr:'FWD', z1:8.8, qm:16.7, ts:215, fc:11, fh:16, fx:13, ft:'Petrol', wt:1235, se:4, ca:195, pr:28000+(y-2009)*400, pc:11000+(2019-y)*300 }
    }
  }

  // ── DS4 ──────────────────────────────────────────────────────────────────────
  if (model === 'DS4') {
    if (y >= 2010 && y <= 2018) {
      if (trim === 'base')  return { en:'1.6L Turbo I4', di:1598, cy:4, hp:120, tq:230, tx:'6-speed auto', dr:'FWD', z1:10.5, qm:17.5, ts:195, fc:12, fh:17, fx:14, ft:'Petrol', wt:1360, se:5, ca:385, pr:26000+(y-2010)*400, pc:8000+(2018-y)*300 }
      if (trim === 'Sport') return { en:'1.6L Turbo I4', di:1598, cy:4, hp:200, tq:285, tx:'6-speed auto', dr:'FWD', z1:8.0, qm:16.2, ts:225, fc:11, fh:15, fx:13, ft:'Petrol', wt:1410, se:5, ca:385, pr:33000+(y-2010)*400, pc:11000+(2018-y)*300 }
      if (trim === 'Chic')  return { en:'2.0L Diesel I4', di:1997, cy:4, hp:160, tq:370, tx:'6-speed auto', dr:'FWD', z1:9.0, qm:16.8, ts:210, fc:9, fh:13, fx:11, ft:'Diesel', wt:1450, se:5, ca:385, pr:30000+(y-2010)*400, pc:9000+(2018-y)*300 }
    }
  }

  // ── DS5 ──────────────────────────────────────────────────────────────────────
  if (model === 'DS5') {
    if (y >= 2011 && y <= 2018) {
      if (trim === 'base')  return { en:'1.6L Turbo I4', di:1598, cy:4, hp:150, tq:240, tx:'6-speed auto', dr:'FWD', z1:9.0, qm:16.8, ts:210, fc:11, fh:16, fx:13, ft:'Petrol', wt:1480, se:5, ca:425, pr:32000+(y-2011)*400, pc:9000+(2018-y)*300 }
      if (trim === 'Sport') return { en:'1.6L Turbo I4', di:1598, cy:4, hp:200, tq:285, tx:'6-speed auto', dr:'FWD', z1:7.8, qm:16.0, ts:225, fc:10, fh:15, fx:12, ft:'Petrol', wt:1525, se:5, ca:425, pr:40000+(y-2011)*400, pc:13000+(2018-y)*300 }
      if (trim === 'Hybrid4') return { en:'2.0L Diesel + Electric', di:1997, cy:4, hp:200, tq:500, tx:'6-speed auto', dr:'AWD', z1:8.5, qm:16.5, ts:218, fc:7, fh:9, fx:8, ft:'Hybrid', wt:1700, se:5, ca:425, pr:48000+(y-2011)*500, pc:15000+(2018-y)*400 }
    }
  }

  // ── Ami ──────────────────────────────────────────────────────────────────────
  if (model === 'Ami') {
    if (y >= 2020 && y <= 2024) {
      if (trim === 'base') return { en:'Electric', di:0, cy:0, hp:6, tq:41, tx:'1-speed auto', dr:'RWD', z1:null, qm:null, ts:45, fc:0, fh:0, fx:0, ft:'Electric', wt:485, se:2, ca:63, pr:7000+(y-2020)*200, pc:6000+(y-2020)*200 }
    }
  }

  return null
}

const makes = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/makes.json'), 'utf8'))
const specs = {}

let count = 0
for (const [make, models] of Object.entries(makes)) {
  if (make !== 'Chrysler' && make !== 'Citroën') continue
  for (const [model, years] of Object.entries(models)) {
    for (const [year, trims] of Object.entries(years)) {
      for (const trim of trims) {
        const fn = make === 'Chrysler' ? chryslerSpec : citroenSpec
        const s = fn(model, year, trim)
        if (s) {
          specs[`${make}|${model}|${year}|${trim}`] = s
          count++
        }
      }
    }
  }
}

const out = { specs }
fs.writeFileSync(path.join(__dirname, '../src/data/supplement78.json'), JSON.stringify(out, null, 2))
console.log(`supplement78.json written: ${count} entries`)
