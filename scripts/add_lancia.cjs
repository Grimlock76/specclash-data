const fs = require('fs');
const makes = require('./src/data/makes.json');
const supp  = require('./src/data/supplement71.json');

const l = makes['Lancia'];

// ── Fix existing: add Berlina to Beta ─────────────────────────────────────
Object.keys(l['Beta']).forEach(y => {
  if (!l['Beta'][y].includes('Berlina')) l['Beta'][y].unshift('Berlina');
});

// ── Pre-war classics ──────────────────────────────────────────────────────
l['Aprilia'] = {
  '1937':['Standard','Cabriolet'],'1938':['Standard','Cabriolet'],'1939':['Standard','Cabriolet'],
  '1940':['Standard','Cabriolet'],'1941':['Standard','Cabriolet'],'1942':['Standard','Cabriolet'],
  '1945':['Standard','Cabriolet'],'1946':['Standard','Cabriolet'],'1947':['Standard','Cabriolet'],
  '1948':['Standard','Cabriolet'],'1949':['Standard','Cabriolet'],'1950':['Standard','Cabriolet']
};

l['Ardea'] = {
  '1939':['Standard'],'1940':['Standard'],'1941':['Standard'],'1942':['Standard'],
  '1945':['Standard'],'1946':['Standard'],'1947':['Standard'],'1948':['Standard'],
  '1949':['Standard'],'1950':['Standard'],'1951':['Standard'],'1952':['Standard'],
  '1953':['Standard'],'1954':['Standard'],'1955':['Standard']
};

// ── Post-war classics ─────────────────────────────────────────────────────
l['Aurelia'] = {
  '1950':['B10 Berlina','B20 GT'],
  '1951':['B10 Berlina','B20 GT'],
  '1952':['B10 Berlina','B20 GT'],
  '1953':['B20 GT','B21 Berlina'],
  '1954':['B20 GT','B21 Berlina','B24 Spider'],
  '1955':['B20 GT','B24 Spider'],
  '1956':['B20 GT','B24 Spider','B24 Convertible'],
  '1957':['B20 GT','B24 Spider','B24 Convertible'],
  '1958':['B20 GT','B24 Convertible']
};

l['Appia'] = {
  '1953':['Berlina'],'1954':['Berlina'],'1955':['Berlina','GT'],
  '1956':['Berlina','GT'],'1957':['Berlina','GT','Zagato'],
  '1958':['Berlina','GT','Zagato'],'1959':['Berlina','GT','Zagato'],
  '1960':['Berlina','GT','Zagato'],'1961':['Berlina','GT','Zagato'],
  '1962':['Berlina','GT','Zagato'],'1963':['Berlina','GT','Zagato']
};

l['Flaminia'] = {
  '1957':['Berlina'],'1958':['Berlina','GT'],'1959':['Berlina','GT'],
  '1960':['Berlina','GT','Sport'],'1961':['Berlina','GT','Sport','Convertible'],
  '1962':['Berlina','GT','Sport','Convertible'],'1963':['Berlina','GT','Sport','Convertible'],
  '1964':['Berlina','GT','Convertible'],'1965':['Berlina','GT','Convertible'],
  '1966':['Berlina','GT'],'1967':['Berlina','GT'],'1968':['Berlina','GT'],
  '1969':['Berlina'],'1970':['Berlina']
};

l['Flavia'] = {
  '1961':['Berlina'],'1962':['Berlina','Coupe'],
  '1963':['Berlina','Coupe','Sport'],'1964':['Berlina','Coupe','Sport'],
  '1965':['Berlina','Coupe','Sport'],'1966':['Berlina','Coupe','Sport','1800'],
  '1967':['Berlina','Coupe','1800'],'1968':['Berlina','Coupe','1800'],
  '1969':['Berlina','Coupe','1800'],'1970':['Berlina','Coupe','1800'],
  '1971':['Berlina','Coupe','1800'],'1972':['Berlina','Coupe','1800'],
  '1973':['Berlina','Coupe'],'1974':['Berlina','Coupe']
};

l['Fulvia'] = {
  '1963':['Berlina'],'1964':['Berlina','Coupe'],
  '1965':['Berlina','Coupe','Sport Zagato'],'1966':['Berlina','Coupe','HF','Sport Zagato'],
  '1967':['Berlina','Coupe','HF','Sport Zagato'],'1968':['Berlina','Coupe','HF','Sport Zagato'],
  '1969':['Berlina','Coupe','HF','Sport Zagato'],'1970':['Berlina','Coupe','HF','Sport Zagato'],
  '1971':['Berlina','Coupe','HF','Sport Zagato'],'1972':['Berlina','Coupe','HF'],
  '1973':['Coupe','HF'],'1974':['Coupe','HF'],'1975':['Coupe','HF'],'1976':['Coupe','HF']
};

// ── 1970s–80s ─────────────────────────────────────────────────────────────
l['Beta Montecarlo'] = {
  '1975':['Standard'],'1976':['Standard'],'1977':['Standard'],
  '1978':['Standard'],'1979':['Standard'],
  '1981':['Standard','Turbo']
};

l['Gamma'] = {
  '1976':['Berlina','Coupe'],'1977':['Berlina','Coupe'],'1978':['Berlina','Coupe'],
  '1979':['Berlina','Coupe'],'1980':['Berlina','Coupe'],'1981':['Berlina','Coupe'],
  '1982':['Berlina','Coupe'],'1983':['Berlina','Coupe'],'1984':['Berlina','Coupe']
};

l['Rally 037'] = {
  '1982':['Standard','Evolution'],'1983':['Standard','Evolution'],'1984':['Evolution']
};

l['Prisma'] = {
  '1982':['1300','1500'],'1983':['1300','1500','1600'],
  '1984':['1300','1500','1600'],'1985':['1500','1600','2000 Turbo'],
  '1986':['1500','1600','2000 Turbo'],'1987':['1500','1600','2000 Turbo'],
  '1988':['1600','2000 Turbo'],'1989':['1600','2000 Turbo']
};

l['Thema'] = {
  '1984':['2000','2000 Turbo'],'1985':['2000','2000 Turbo'],
  '1986':['2000','2000 Turbo'],'1987':['2000','2000 Turbo','2000 Turbo 16v'],
  '1988':['2000 Turbo','2000 Turbo 16v','8.32'],
  '1989':['2000 Turbo','2000 Turbo 16v','8.32'],
  '1990':['2000 Turbo 16v','8.32','SW'],'1991':['2000 Turbo 16v','8.32','SW'],
  '1992':['2000 Turbo 16v','SW'],'1993':['2000 Turbo 16v','SW'],'1994':['SW']
};

l['Y10'] = {
  '1985':['Fire','GT'],'1986':['Fire','GT','Turbo'],
  '1987':['Fire','GT','Turbo','LX'],'1988':['Fire','GT','Turbo','LX','4WD'],
  '1989':['Fire','GT','Turbo','LX','4WD'],'1990':['Fire','GT','Turbo','LX','4WD'],
  '1991':['Fire','GT','Turbo','LX'],'1992':['Fire','GT','LX'],
  '1993':['Fire','GT','LX'],'1994':['Fire','GT','LX'],
  '1995':['Fire','LX'],'1996':['Fire','LX']
};

// ── 1990s ─────────────────────────────────────────────────────────────────
l['Dedra'] = {
  '1989':['1.6','2.0'],'1990':['1.6','2.0','2.0 Turbo'],
  '1991':['1.6','2.0','2.0 Turbo','Integrale'],
  '1992':['1.6','2.0','2.0 Turbo','Integrale'],
  '1993':['1.6','2.0','2.0 Turbo','Integrale','SW'],
  '1994':['1.6','2.0','2.0 Turbo','SW'],'1995':['1.6','2.0','2.0 Turbo','SW'],
  '1996':['1.6','2.0','SW'],'1997':['1.6','2.0','SW'],
  '1998':['1.6','2.0','SW'],'1999':['1.6','2.0','SW']
};

l['Kappa'] = {
  '1994':['2.0','2.4'],'1995':['2.0','2.4','SW'],
  '1996':['2.0','2.4','2.4 SW','Coupe'],'1997':['2.0','2.4','2.4 SW','Coupe'],
  '1998':['2.0','2.4','2.4 SW','Coupe'],'1999':['2.0','2.4','2.4 SW','Coupe'],
  '2000':['2.0','2.4 SW','Coupe'],'2001':['2.4 SW','Coupe']
};

l['Zeta'] = {
  '1994':['2.0'],'1995':['2.0','2.0 Turbo'],
  '1996':['2.0','2.0 Turbo','2.1 TD'],'1997':['2.0','2.0 Turbo','2.1 TD'],
  '1998':['2.0','2.0 Turbo','2.1 TD'],'1999':['2.0','2.0 Turbo','2.1 TD'],
  '2000':['2.0','2.0 Turbo','2.1 TD'],'2001':['2.0','2.1 TD'],'2002':['2.0','2.1 TD']
};

l['Ypsilon'] = {
  // Gen 1 (Y, 1995-2003)
  '1995':['1.1','1.2'],'1996':['1.1','1.2','GT'],
  '1997':['1.1','1.2','GT','Turbo'],'1998':['1.1','1.2','GT','Turbo'],
  '1999':['1.1','1.2','GT','Turbo'],'2000':['1.1','1.2','GT'],
  '2001':['1.1','1.2','Gold'],'2002':['1.1','1.2','Gold'],'2003':['1.1','1.2','Gold'],
  // Gen 2 (2003-2011)
  '2004':['1.2','1.4','Gold','1.3 Multijet'],
  '2005':['1.2','1.4','Gold','1.3 Multijet'],
  '2006':['1.2','1.4','Gold','1.3 Multijet'],
  '2007':['1.2','1.4','Gold','1.3 Multijet'],
  '2008':['1.2','1.4','Gold','1.3 Multijet'],
  '2009':['1.2','1.4','Gold','1.3 Multijet'],
  '2010':['1.2','1.4','Gold','1.3 Multijet'],
  // Gen 3 (2011-2023)
  '2011':['1.2 Gold','1.2 Platinum','0.9 TwinAir','1.3 Multijet'],
  '2012':['1.2 Gold','1.2 Platinum','0.9 TwinAir','1.3 Multijet'],
  '2013':['1.2 Gold','1.2 Platinum','0.9 TwinAir','1.3 Multijet'],
  '2014':['1.2 Gold','1.2 Platinum','0.9 TwinAir','1.3 Multijet'],
  '2015':['1.2 Gold','1.2 Platinum','0.9 TwinAir','1.3 Multijet'],
  '2016':['1.2 Gold','1.2 Platinum','0.9 TwinAir'],
  '2017':['1.2 Gold','1.2 Platinum'],
  '2018':['1.2 Gold','1.2 Platinum'],
  '2019':['1.2 Gold','1.2 Platinum'],
  '2020':['1.2 Gold','1.2 Platinum'],
  '2021':['1.2 Gold','1.2 Platinum'],
  '2022':['1.2 Gold','1.2 Platinum'],
  '2023':['1.2 Gold','1.2 Platinum']
};

// ── 2000s ─────────────────────────────────────────────────────────────────
l['Lybra'] = {
  '1999':['1.6','1.8','2.0'],
  '2000':['1.6','1.8','2.0','SW','2.4 JTD'],
  '2001':['1.6','1.8','2.0','SW','2.4 JTD'],
  '2002':['1.6','1.8','2.0','SW','2.4 JTD'],
  '2003':['1.8','2.0','SW','2.4 JTD'],
  '2004':['1.8','SW','2.4 JTD'],
  '2005':['1.8','SW','2.4 JTD']
};

l['Thesis'] = {
  '2001':['2.0 Turbo','2.4'],
  '2002':['2.0 Turbo','2.4','3.0 V6'],
  '2003':['2.0 Turbo','2.4','3.0 V6'],
  '2004':['2.0 Turbo','2.4','3.0 V6'],
  '2005':['2.0 Turbo','2.4','3.0 V6'],
  '2006':['2.0 Turbo','2.4'],
  '2007':['2.0 Turbo','2.4'],
  '2008':['2.0 Turbo'],
  '2009':['2.0 Turbo']
};

l['Phedra'] = {
  '2002':['2.0 16v','2.0 JTD'],'2003':['2.0 16v','2.0 JTD','2.2 JTD'],
  '2004':['2.0 16v','2.0 JTD','2.2 JTD'],'2005':['2.0 16v','2.0 JTD','2.2 JTD'],
  '2006':['2.0 16v','2.0 JTD','2.2 JTD'],'2007':['2.0 JTD','2.2 JTD'],
  '2008':['2.0 JTD','2.2 JTD'],'2009':['2.0 JTD'],'2010':['2.0 JTD']
};

l['Musa'] = {
  '2004':['1.4','1.3 Multijet'],'2005':['1.4','1.3 Multijet','Gold'],
  '2006':['1.4','1.3 Multijet','Gold'],'2007':['1.4','1.3 Multijet','Gold'],
  '2008':['1.4','1.3 Multijet','Gold','1.9 Multijet'],
  '2009':['1.4','1.3 Multijet','Gold','1.9 Multijet'],
  '2010':['1.4','1.3 Multijet','Gold'],'2011':['1.4','1.3 Multijet','Gold'],
  '2012':['1.4','1.3 Multijet']
};

// ── 2008–present ──────────────────────────────────────────────────────────
l['Delta II'] = {
  '2008':['1.4 Turbo','1.6 Multijet'],
  '2009':['1.4 Turbo','1.6 Multijet','1.8 DI Turbo'],
  '2010':['1.4 Turbo','1.6 Multijet','1.8 DI Turbo','2.0 Multijet'],
  '2011':['1.4 Turbo','1.6 Multijet','1.8 DI Turbo','2.0 Multijet'],
  '2012':['1.4 Turbo','1.6 Multijet','1.8 DI Turbo','2.0 Multijet'],
  '2013':['1.4 Turbo','1.6 Multijet','2.0 Multijet'],
  '2014':['1.4 Turbo','1.6 Multijet']
};

l['Flavia II'] = {
  '2012':['2.4','2.4 Convertible'],
  '2013':['2.4','2.4 Convertible'],
  '2014':['2.4','2.4 Convertible']
};

l['Voyager'] = {
  '2011':['2.8 CRD','3.6 V6'],'2012':['2.8 CRD','3.6 V6'],
  '2013':['2.8 CRD','3.6 V6'],'2014':['2.8 CRD','3.6 V6'],'2015':['2.8 CRD','3.6 V6']
};

l['New Ypsilon'] = {
  '2024':['Edizione','Cassina','LX','Electric'],
  '2025':['Edizione','Cassina','LX','Electric']
};

// ── Specs ──────────────────────────────────────────────────────────────────
const newSpecs = {
  // Beta Berlina
  'Lancia|Beta|1975|Berlina': { en:'1.6L DOHC inline-4', di:'1.6L', cy:'4', hp:'74 kW (100 hp)', tq:'137 Nm', tx:'5-speed manual', dr:'FWD', z1:'~10.5 sec', ts:'~175 km/h', wt:'990 kg', se:'4', ca:'~300 L', pr:'~£3,200' },

  // Aprilia
  'Lancia|Aprilia|1941|Standard':   { en:'1.4L SOHC V4', di:'1.4L', cy:'4', hp:'42 kW (56 hp)', tq:'88 Nm', tx:'4-speed manual', dr:'RWD', z1:'~18.0 sec', ts:'~130 km/h', wt:'855 kg', se:'4', ca:'~250 L', pr:'~£700' },
  'Lancia|Aprilia|1941|Cabriolet':  { en:'1.4L SOHC V4', di:'1.4L', cy:'4', hp:'42 kW (56 hp)', tq:'88 Nm', tx:'4-speed manual', dr:'RWD', z1:'~18.5 sec', ts:'~125 km/h', wt:'890 kg', se:'4', ca:'~200 L', pr:'~£850' },

  // Ardea
  'Lancia|Ardea|1945|Standard': { en:'0.9L SOHC V4', di:'0.9L', cy:'4', hp:'26 kW (35 hp)', tq:'58 Nm', tx:'5-speed manual', dr:'RWD', z1:'~25.0 sec', ts:'~105 km/h', wt:'730 kg', se:'4', ca:'~220 L', pr:'~£550' },

  // Aurelia
  'Lancia|Aurelia|1952|B10 Berlina': { en:'1.8L SOHC V6', di:'1.8L', cy:'6', hp:'44 kW (59 hp)', tq:'115 Nm', tx:'4-speed manual', dr:'RWD', z1:'~20.0 sec', ts:'~130 km/h', wt:'1,080 kg', se:'4', ca:'~330 L', pr:'~£1,500' },
  'Lancia|Aurelia|1954|B20 GT':      { en:'2.5L SOHC V6', di:'2.5L', cy:'6', hp:'90 kW (120 hp)', tq:'177 Nm', tx:'4-speed manual', dr:'RWD', z1:'~11.5 sec', ts:'~185 km/h', wt:'1,100 kg', se:'4', ca:'~280 L', pr:'~£2,400' },
  'Lancia|Aurelia|1955|B24 Spider':  { en:'2.5L SOHC V6', di:'2.5L', cy:'6', hp:'90 kW (120 hp)', tq:'177 Nm', tx:'4-speed manual', dr:'RWD', z1:'~12.0 sec', ts:'~180 km/h', wt:'1,090 kg', se:'2', ca:'~200 L', pr:'~£2,800' },

  // Appia
  'Lancia|Appia|1957|Berlina': { en:'1.1L SOHC V4', di:'1.1L', cy:'4', hp:'36 kW (48 hp)', tq:'74 Nm', tx:'4-speed manual', dr:'RWD', z1:'~22.0 sec', ts:'~115 km/h', wt:'815 kg', se:'4', ca:'~250 L', pr:'~£1,000' },
  'Lancia|Appia|1957|GT':      { en:'1.1L SOHC V4', di:'1.1L', cy:'4', hp:'40 kW (54 hp)', tq:'78 Nm', tx:'4-speed manual', dr:'RWD', z1:'~20.0 sec', ts:'~125 km/h', wt:'840 kg', se:'4', ca:'~250 L', pr:'~£1,200' },
  'Lancia|Appia|1957|Zagato':  { en:'1.1L SOHC V4', di:'1.1L', cy:'4', hp:'44 kW (59 hp)', tq:'80 Nm', tx:'4-speed manual', dr:'RWD', z1:'~18.0 sec', ts:'~140 km/h', wt:'750 kg', se:'2', ca:'~180 L', pr:'~£1,800' },

  // Flaminia
  'Lancia|Flaminia|1960|Berlina':    { en:'2.5L SOHC V6', di:'2.5L', cy:'6', hp:'88 kW (118 hp)', tq:'186 Nm', tx:'4-speed manual', dr:'RWD', z1:'~14.0 sec', ts:'~165 km/h', wt:'1,330 kg', se:'5', ca:'~380 L', pr:'~£2,200' },
  'Lancia|Flaminia|1960|GT':         { en:'2.5L SOHC V6', di:'2.5L', cy:'6', hp:'96 kW (128 hp)', tq:'196 Nm', tx:'4-speed manual', dr:'RWD', z1:'~12.5 sec', ts:'~178 km/h', wt:'1,290 kg', se:'4', ca:'~280 L', pr:'~£2,800' },
  'Lancia|Flaminia|1960|Sport':      { en:'2.5L SOHC V6 Zagato', di:'2.5L', cy:'6', hp:'103 kW (138 hp)', tq:'200 Nm', tx:'4-speed manual', dr:'RWD', z1:'~11.5 sec', ts:'~190 km/h', wt:'1,180 kg', se:'4', ca:'~260 L', pr:'~£3,500' },
  'Lancia|Flaminia|1961|Convertible':{ en:'2.5L SOHC V6', di:'2.5L', cy:'6', hp:'96 kW (128 hp)', tq:'196 Nm', tx:'4-speed manual', dr:'RWD', z1:'~13.0 sec', ts:'~170 km/h', wt:'1,350 kg', se:'4', ca:'~200 L', pr:'~£3,200' },

  // Flavia
  'Lancia|Flavia|1964|Berlina': { en:'1.5L SOHC flat-4', di:'1.5L', cy:'4', hp:'60 kW (80 hp)', tq:'120 Nm', tx:'4-speed manual', dr:'FWD', z1:'~14.5 sec', ts:'~158 km/h', wt:'1,110 kg', se:'4', ca:'~340 L', pr:'~£1,400' },
  'Lancia|Flavia|1964|Coupe':   { en:'1.5L SOHC flat-4', di:'1.5L', cy:'4', hp:'63 kW (85 hp)', tq:'124 Nm', tx:'4-speed manual', dr:'FWD', z1:'~13.5 sec', ts:'~168 km/h', wt:'1,080 kg', se:'4', ca:'~270 L', pr:'~£1,700' },
  'Lancia|Flavia|1966|1800':    { en:'1.8L SOHC flat-4', di:'1.8L', cy:'4', hp:'74 kW (100 hp)', tq:'148 Nm', tx:'5-speed manual', dr:'FWD', z1:'~12.0 sec', ts:'~175 km/h', wt:'1,140 kg', se:'4', ca:'~340 L', pr:'~£2,000' },

  // Fulvia
  'Lancia|Fulvia|1968|Coupe':       { en:'1.3L DOHC narrow-V4', di:'1.3L', cy:'4', hp:'63 kW (85 hp)', tq:'118 Nm', tx:'4-speed manual', dr:'FWD', z1:'~12.0 sec', ts:'~173 km/h', wt:'870 kg', se:'4', ca:'~240 L', pr:'~£1,600' },
  'Lancia|Fulvia|1969|HF':          { en:'1.6L DOHC narrow-V4', di:'1.6L', cy:'4', hp:'96 kW (128 hp)', tq:'152 Nm', tx:'5-speed manual', dr:'FWD', z1:'~8.8 sec', ts:'~188 km/h', wt:'895 kg', se:'4', ca:'~240 L', pr:'~£2,400' },
  'Lancia|Fulvia|1969|Sport Zagato':{ en:'1.3L DOHC narrow-V4', di:'1.3L', cy:'4', hp:'74 kW (100 hp)', tq:'128 Nm', tx:'5-speed manual', dr:'FWD', z1:'~10.5 sec', ts:'~185 km/h', wt:'780 kg', se:'2', ca:'~200 L', pr:'~£2,200' },

  // Beta Montecarlo
  'Lancia|Beta Montecarlo|1977|Standard': { en:'2.0L DOHC inline-4 mid-engine', di:'2.0L', cy:'4', hp:'90 kW (120 hp)', tq:'165 Nm', tx:'5-speed manual', dr:'RWD', z1:'~8.8 sec', qm:'~16.5 sec', ts:'~200 km/h', wt:'975 kg', se:'2', ca:'~200 L', pr:'~£7,500' },
  'Lancia|Beta Montecarlo|1981|Turbo':    { en:'1.4L Turbo DOHC inline-4 mid-engine', di:'1.4L', cy:'4', hp:'97 kW (130 hp)', tq:'172 Nm', tx:'5-speed manual', dr:'RWD', z1:'~7.5 sec', qm:'~15.8 sec', ts:'~220 km/h', wt:'960 kg', se:'2', ca:'~200 L', pr:'~£10,000' },

  // Gamma
  'Lancia|Gamma|1979|Berlina': { en:'2.5L DOHC flat-4', di:'2.5L', cy:'4', hp:'100 kW (134 hp)', tq:'196 Nm', tx:'5-speed manual', dr:'FWD', z1:'~10.5 sec', ts:'~185 km/h', wt:'1,360 kg', se:'5', ca:'~380 L', pr:'~£9,500' },
  'Lancia|Gamma|1979|Coupe':   { en:'2.5L DOHC flat-4', di:'2.5L', cy:'4', hp:'103 kW (138 hp)', tq:'196 Nm', tx:'5-speed manual', dr:'FWD', z1:'~9.8 sec', ts:'~190 km/h', wt:'1,310 kg', se:'4', ca:'~280 L', pr:'~£11,000' },

  // Rally 037
  'Lancia|Rally 037|1983|Standard':  { en:'2.0L Supercharged DOHC inline-4', di:'2.0L', cy:'4', hp:'186 kW (250 hp)', tq:'314 Nm', tx:'5-speed manual', dr:'RWD', z1:'~5.2 sec', qm:'~13.5 sec', ts:'~220 km/h', wt:'1,080 kg', se:'2', ca:'~180 L', pr:'~£25,000' },
  'Lancia|Rally 037|1983|Evolution':  { en:'2.0L Supercharged DOHC inline-4 Evo', di:'2.0L', cy:'4', hp:'205 kW (275 hp)', tq:'330 Nm', tx:'5-speed manual', dr:'RWD', z1:'~4.8 sec', qm:'~13.0 sec', ts:'~225 km/h', wt:'1,050 kg', se:'2', ca:'~180 L', pr:'~£40,000' },

  // Prisma
  'Lancia|Prisma|1985|1600':        { en:'1.6L DOHC inline-4', di:'1.6L', cy:'4', hp:'74 kW (100 hp)', tq:'137 Nm', tx:'5-speed manual', dr:'FWD', z1:'~10.5 sec', ts:'~175 km/h', wt:'1,060 kg', se:'5', ca:'~300 L', pr:'~£7,500' },
  'Lancia|Prisma|1985|2000 Turbo':  { en:'2.0L Turbo DOHC inline-4', di:'2.0L', cy:'4', hp:'110 kW (148 hp)', tq:'235 Nm', tx:'5-speed manual', dr:'FWD', z1:'~7.8 sec', ts:'~210 km/h', wt:'1,170 kg', se:'5', ca:'~300 L', pr:'~£11,500' },

  // Thema
  'Lancia|Thema|1987|2000 Turbo 16v': { en:'2.0L Turbo DOHC 16v inline-4', di:'2.0L', cy:'4', hp:'147 kW (200 hp)', tq:'300 Nm', tx:'5-speed manual', dr:'FWD', z1:'~6.5 sec', ts:'~230 km/h', wt:'1,360 kg', se:'5', ca:'~380 L', pr:'~£18,000' },
  'Lancia|Thema|1988|8.32':           { en:'Ferrari 3.0L DOHC 32v V8', di:'3.0L', cy:'8', hp:'163 kW (218 hp)', tq:'265 Nm', tx:'5-speed auto', dr:'FWD', z1:'~6.8 sec', ts:'~240 km/h', wt:'1,430 kg', se:'5', ca:'~380 L', pr:'~£35,000' },
  'Lancia|Thema|1990|SW':             { en:'2.0L Turbo DOHC inline-4', di:'2.0L', cy:'4', hp:'147 kW (200 hp)', tq:'300 Nm', tx:'5-speed manual', dr:'FWD', z1:'~7.0 sec', ts:'~225 km/h', wt:'1,420 kg', se:'5', ca:'~520 L', pr:'~£20,000' },

  // Y10
  'Lancia|Y10|1987|Fire':   { en:'FIRE 1.0L SOHC inline-4', di:'1.0L', cy:'4', hp:'33 kW (44 hp)', tq:'75 Nm', tx:'5-speed manual', dr:'FWD', z1:'~17.0 sec', ts:'~140 km/h', wt:'700 kg', se:'4', ca:'~225 L', pr:'~£5,000' },
  'Lancia|Y10|1987|GT':     { en:'1.1L SOHC inline-4', di:'1.1L', cy:'4', hp:'47 kW (63 hp)', tq:'92 Nm', tx:'5-speed manual', dr:'FWD', z1:'~14.0 sec', ts:'~152 km/h', wt:'720 kg', se:'4', ca:'~225 L', pr:'~£6,500' },
  'Lancia|Y10|1988|Turbo':  { en:'1.0L Turbo SOHC inline-4', di:'1.0L', cy:'4', hp:'56 kW (75 hp)', tq:'110 Nm', tx:'5-speed manual', dr:'FWD', z1:'~10.5 sec', ts:'~170 km/h', wt:'740 kg', se:'4', ca:'~225 L', pr:'~£8,500' },
  'Lancia|Y10|1988|4WD':    { en:'1.1L SOHC inline-4 AWD', di:'1.1L', cy:'4', hp:'47 kW (63 hp)', tq:'92 Nm', tx:'5-speed manual', dr:'AWD', z1:'~15.0 sec', ts:'~148 km/h', wt:'830 kg', se:'4', ca:'~225 L', pr:'~£8,000' },

  // Dedra
  'Lancia|Dedra|1991|2.0 Turbo':  { en:'2.0L Turbo DOHC inline-4', di:'2.0L', cy:'4', hp:'136 kW (185 hp)', tq:'294 Nm', tx:'5-speed manual', dr:'FWD', z1:'~6.8 sec', ts:'~220 km/h', wt:'1,290 kg', se:'5', ca:'~510 L', pr:'~£16,000' },
  'Lancia|Dedra|1991|Integrale':  { en:'2.0L Turbo DOHC 16v inline-4 AWD', di:'2.0L', cy:'4', hp:'147 kW (200 hp)', tq:'314 Nm', tx:'5-speed manual', dr:'AWD', z1:'~6.0 sec', ts:'~230 km/h', wt:'1,350 kg', se:'5', ca:'~510 L', pr:'~£22,000' },
  'Lancia|Dedra|1993|SW':         { en:'2.0L Turbo DOHC inline-4', di:'2.0L', cy:'4', hp:'136 kW (185 hp)', tq:'294 Nm', tx:'5-speed manual', dr:'FWD', z1:'~7.0 sec', ts:'~218 km/h', wt:'1,340 kg', se:'5', ca:'~650 L', pr:'~£18,000' },

  // Kappa
  'Lancia|Kappa|1997|2.0':    { en:'2.0L DOHC 16v inline-4', di:'2.0L', cy:'4', hp:'107 kW (144 hp)', tq:'186 Nm', tx:'5-speed manual', dr:'FWD', z1:'~9.8 sec', ts:'~200 km/h', wt:'1,440 kg', se:'5', ca:'~510 L', pr:'~£17,000' },
  'Lancia|Kappa|1997|Coupe':  { en:'2.0L Turbo DOHC inline-5', di:'2.0L', cy:'5', hp:'147 kW (197 hp)', tq:'275 Nm', tx:'5-speed manual', dr:'FWD', z1:'~7.2 sec', ts:'~240 km/h', wt:'1,480 kg', se:'4', ca:'~310 L', pr:'~£28,000' },

  // Zeta
  'Lancia|Zeta|1997|2.0 Turbo': { en:'2.0L Turbo DOHC inline-4', di:'2.0L', cy:'4', hp:'147 kW (197 hp)', tq:'285 Nm', tx:'5-speed manual', dr:'FWD', z1:'~9.0 sec', ts:'~210 km/h', wt:'1,660 kg', se:'8', ca:'~700 L', pr:'~£20,000' },

  // Ypsilon Gen 1
  'Lancia|Ypsilon|1999|1.2':  { en:'1.2L SOHC inline-4', di:'1.2L', cy:'4', hp:'60 kW (80 hp)', tq:'102 Nm', tx:'5-speed manual', dr:'FWD', z1:'~12.5 sec', ts:'~163 km/h', wt:'895 kg', se:'4', ca:'~225 L', pr:'~£9,000' },
  'Lancia|Ypsilon|1997|Turbo':{ en:'1.2L Turbo SOHC inline-4', di:'1.2L', cy:'4', hp:'74 kW (100 hp)', tq:'140 Nm', tx:'5-speed manual', dr:'FWD', z1:'~10.0 sec', ts:'~185 km/h', wt:'920 kg', se:'4', ca:'~225 L', pr:'~£12,000' },

  // Ypsilon Gen 2
  'Lancia|Ypsilon|2006|1.4':         { en:'1.4L SOHC inline-4', di:'1.4L', cy:'4', hp:'70 kW (95 hp)', tq:'120 Nm', tx:'5-speed manual', dr:'FWD', z1:'~11.0 sec', ts:'~172 km/h', wt:'960 kg', se:'4', ca:'~225 L', pr:'~£11,500' },
  'Lancia|Ypsilon|2006|1.3 Multijet':{ en:'1.3L JTD DOHC inline-4 diesel', di:'1.3L', cy:'4', hp:'55 kW (74 hp)', tq:'145 Nm', tx:'5-speed manual', dr:'FWD', z1:'~13.5 sec', ts:'~160 km/h', wt:'990 kg', se:'4', ca:'~225 L', pr:'~£12,500' },

  // Ypsilon Gen 3
  'Lancia|Ypsilon|2015|1.2 Gold':     { en:'1.2L SOHC inline-4', di:'1.2L', cy:'4', hp:'51 kW (69 hp)', tq:'102 Nm', tx:'5-speed manual', dr:'FWD', z1:'~14.0 sec', ts:'~158 km/h', wt:'1,045 kg', se:'5', ca:'~225 L', pr:'~£14,000' },
  'Lancia|Ypsilon|2013|0.9 TwinAir':  { en:'0.9L TwinAir Turbo inline-2', di:'0.9L', cy:'2', hp:'63 kW (85 hp)', tq:'145 Nm', tx:'5-speed manual', dr:'FWD', z1:'~12.0 sec', ts:'~175 km/h', wt:'1,005 kg', se:'5', ca:'~225 L', pr:'~£16,000' },

  // Lybra
  'Lancia|Lybra|2001|1.8':     { en:'1.8L DOHC 16v inline-4', di:'1.8L', cy:'4', hp:'95 kW (128 hp)', tq:'169 Nm', tx:'5-speed manual', dr:'FWD', z1:'~10.2 sec', ts:'~195 km/h', wt:'1,290 kg', se:'5', ca:'~510 L', pr:'~£14,000' },
  'Lancia|Lybra|2001|SW':      { en:'2.4L JTD DOHC inline-5 diesel', di:'2.4L', cy:'5', hp:'103 kW (138 hp)', tq:'305 Nm', tx:'5-speed manual', dr:'FWD', z1:'~10.8 sec', ts:'~196 km/h', wt:'1,430 kg', se:'5', ca:'~650 L', pr:'~£18,000' },

  // Thesis
  'Lancia|Thesis|2003|2.0 Turbo': { en:'2.0L Turbo DOHC 20v inline-5', di:'2.0L', cy:'5', hp:'136 kW (185 hp)', tq:'270 Nm', tx:'5-speed auto', dr:'FWD', z1:'~8.5 sec', ts:'~215 km/h', wt:'1,620 kg', se:'5', ca:'~530 L', pr:'~£30,000' },
  'Lancia|Thesis|2003|3.0 V6':    { en:'3.0L DOHC 24v V6', di:'3.0L', cy:'6', hp:'152 kW (204 hp)', tq:'270 Nm', tx:'5-speed auto', dr:'FWD', z1:'~8.0 sec', ts:'~230 km/h', wt:'1,680 kg', se:'5', ca:'~530 L', pr:'~£38,000' },

  // Musa
  'Lancia|Musa|2006|1.4':          { en:'1.4L SOHC inline-4', di:'1.4L', cy:'4', hp:'70 kW (95 hp)', tq:'120 Nm', tx:'5-speed manual', dr:'FWD', z1:'~11.5 sec', ts:'~168 km/h', wt:'1,150 kg', se:'5', ca:'~280 L', pr:'~£13,000' },
  'Lancia|Musa|2008|1.9 Multijet': { en:'1.9L JTD DOHC diesel inline-4', di:'1.9L', cy:'4', hp:'88 kW (118 hp)', tq:'280 Nm', tx:'6-speed manual', dr:'FWD', z1:'~10.5 sec', ts:'~180 km/h', wt:'1,260 kg', se:'5', ca:'~280 L', pr:'~£16,000' },

  // Phedra
  'Lancia|Phedra|2004|2.0 16v':  { en:'2.0L DOHC 16v inline-4', di:'2.0L', cy:'4', hp:'103 kW (138 hp)', tq:'200 Nm', tx:'4-speed auto', dr:'FWD', z1:'~11.5 sec', ts:'~180 km/h', wt:'1,560 kg', se:'7', ca:'~700 L', pr:'~£22,000' },
  'Lancia|Phedra|2004|2.2 JTD':  { en:'2.2L JTD DOHC diesel inline-4', di:'2.2L', cy:'4', hp:'100 kW (136 hp)', tq:'314 Nm', tx:'5-speed manual', dr:'FWD', z1:'~11.0 sec', ts:'~182 km/h', wt:'1,630 kg', se:'7', ca:'~700 L', pr:'~£24,000' },

  // Delta II
  'Lancia|Delta II|2010|1.4 Turbo':   { en:'1.4L MultiAir Turbo inline-4', di:'1.4L', cy:'4', hp:'103 kW (140 hp)', tq:'230 Nm', tx:'6-speed manual', dr:'FWD', z1:'~9.5 sec', ts:'~200 km/h', wt:'1,390 kg', se:'5', ca:'~280 L', pr:'~£18,000' },
  'Lancia|Delta II|2010|1.8 DI Turbo':{ en:'1.8L DI Turbo DOHC inline-4', di:'1.8L', cy:'4', hp:'154 kW (207 hp)', tq:'320 Nm', tx:'6-speed manual', dr:'FWD', z1:'~7.2 sec', ts:'~230 km/h', wt:'1,495 kg', se:'5', ca:'~280 L', pr:'~£26,000' },

  // Flavia II
  'Lancia|Flavia II|2013|2.4':           { en:'Pentastar 2.4L SOHC inline-4', di:'2.4L', cy:'4', hp:'127 kW (170 hp)', tq:'229 Nm', tx:'6-speed auto', dr:'FWD', z1:'~9.2 sec', ts:'~195 km/h', wt:'1,590 kg', se:'4', ca:'~380 L', pr:'~£22,000' },
  'Lancia|Flavia II|2013|2.4 Convertible':{ en:'Pentastar 2.4L SOHC inline-4', di:'2.4L', cy:'4', hp:'127 kW (170 hp)', tq:'229 Nm', tx:'6-speed auto', dr:'FWD', z1:'~9.5 sec', ts:'~190 km/h', wt:'1,670 kg', se:'4', ca:'~300 L', pr:'~£26,000' },

  // Voyager
  'Lancia|Voyager|2012|3.6 V6':  { en:'Pentastar 3.6L DOHC V6', di:'3.6L', cy:'6', hp:'206 kW (276 hp)', tq:'344 Nm', tx:'6-speed auto', dr:'FWD', z1:'~8.2 sec', ts:'~200 km/h', wt:'2,020 kg', se:'7', ca:'~1,007 L', pr:'~£30,000' },
  'Lancia|Voyager|2012|2.8 CRD': { en:'2.8L CRD DOHC diesel inline-4', di:'2.8L', cy:'4', hp:'120 kW (163 hp)', tq:'360 Nm', tx:'6-speed auto', dr:'FWD', z1:'~11.5 sec', ts:'~182 km/h', wt:'2,080 kg', se:'7', ca:'~1,007 L', pr:'~£28,000' },

  // New Ypsilon
  'Lancia|New Ypsilon|2024|Electric': { en:'Electric motor 115 kW', di:'N/A', cy:'0', hp:'115 kW (154 hp)', tq:'260 Nm', tx:'Single-speed', dr:'FWD', z1:'~7.5 sec', ts:'~150 km/h', wt:'1,396 kg', se:'5', ca:'~220 L', pr:'~€30,000' },
  'Lancia|New Ypsilon|2024|Hybrid':   { en:'1.2L Hybrid + electric', di:'1.2L', cy:'3', hp:'74 kW (100 hp)', tq:'205 Nm', tx:'6-speed DTC', dr:'FWD', z1:'~9.8 sec', ts:'~183 km/h', wt:'1,240 kg', se:'5', ca:'~220 L', pr:'~€24,000' },
};

Object.assign(supp.specs, newSpecs);

fs.writeFileSync('./src/data/makes.json', JSON.stringify(makes, null, 2));
fs.writeFileSync('./src/data/supplement71.json', JSON.stringify(supp, null, 2));

console.log('Lancia models:', Object.keys(makes['Lancia']).length, '-', Object.keys(makes['Lancia']).join(', '));
console.log('Total specs:', Object.keys(supp.specs).length, '(added', Object.keys(newSpecs).length, ')');
