const fs = require('fs');
const makes = require('./src/data/makes.json');
const supp  = require('./src/data/supplement71.json');

// ══════════════════════════════════════════════════════════════════════════════
// FERRARI
// ══════════════════════════════════════════════════════════════════════════════
makes['Ferrari'] = {
  '166 MM':        { '1948':['Barchetta','Spider'],'1949':['Barchetta','Spider'],'1950':['Barchetta','Spider'],'1951':['Barchetta'],'1952':['Barchetta'],'1953':['Barchetta'] },
  '212 Inter':     { '1951':['Coupe','Cabriolet'],'1952':['Coupe','Cabriolet'],'1953':['Coupe','Cabriolet'] },
  '250 GT':        { '1953':['Berlinetta'],'1954':['Berlinetta','Cabriolet'],'1955':['Berlinetta','Cabriolet'],'1956':['Berlinetta','Cabriolet'],'1957':['Berlinetta','California Spider'],'1958':['Berlinetta','California Spider'],'1959':['Berlinetta','California Spider'],'1960':['Berlinetta','California Spider','2+2'],'1961':['Berlinetta','California Spider','2+2','GTO'],'1962':['Berlinetta','California Spider','2+2','GTO'],'1963':['Lusso','GTO'],'1964':['Lusso'] },
  '275 GTB/GTS':   { '1964':['GTB','GTS'],'1965':['GTB','GTS'],'1966':['GTB','GTS','GTB/4'],'1967':['GTB/4','GTS/4'],'1968':['GTB/4'] },
  '330 GT':        { '1964':['2+2'],'1965':['2+2'],'1966':['2+2'],'1967':['2+2'] },
  '365 GT':        { '1967':['2+2'],'1968':['2+2'],'1969':['2+2'],'1970':['2+2'],'1971':['2+2'] },
  '365 GTB/4':     { '1968':['Daytona'],'1969':['Daytona'],'1970':['Daytona','Daytona Spider'],'1971':['Daytona','Daytona Spider'],'1972':['Daytona','Daytona Spider'],'1973':['Daytona Spider'] },
  'Dino 246':      { '1969':['GT','GTS'],'1970':['GT','GTS'],'1971':['GT','GTS'],'1972':['GT','GTS'],'1973':['GT','GTS'],'1974':['GT','GTS'] },
  '308 GTB/GTS':   { '1975':['GTB'],'1976':['GTB','GTS'],'1977':['GTB','GTS'],'1978':['GTB','GTS'],'1979':['GTB','GTS'],'1980':['GTBi','GTSi'],'1981':['GTBi','GTSi'],'1982':['QV'],'1983':['QV'],'1984':['QV'],'1985':['QV'] },
  '328 GTB/GTS':   { '1985':['GTB','GTS'],'1986':['GTB','GTS'],'1987':['GTB','GTS'],'1988':['GTB','GTS'],'1989':['GTB','GTS'] },
  'Mondial':       { '1980':['Coupe'],'1981':['Coupe','Cabriolet'],'1982':['Coupe','Cabriolet'],'1983':['Coupe','Cabriolet'],'1984':['Coupe','Cabriolet','3.2'],'1985':['3.2','3.2 Cabriolet'],'1986':['3.2','3.2 Cabriolet'],'1987':['3.2','3.2 Cabriolet'],'1988':['3.2','3.2 Cabriolet'],'1989':['t','t Cabriolet'],'1990':['t','t Cabriolet'],'1991':['t','t Cabriolet'],'1992':['t','t Cabriolet'],'1993':['t','t Cabriolet'] },
  'Testarossa':    { '1984':['Coupe'],'1985':['Coupe'],'1986':['Coupe'],'1987':['Coupe'],'1988':['Coupe'],'1989':['Coupe'],'1990':['Coupe'],'1991':['Coupe','512 TR'],'1992':['512 TR'],'1993':['512 TR'],'1994':['512 TR','512 M'],'1995':['512 M'],'1996':['512 M'] },
  'F40':           { '1987':['Coupe'],'1988':['Coupe'],'1989':['Coupe'],'1990':['Coupe'],'1991':['Coupe'],'1992':['Coupe'] },
  'F50':           { '1995':['Coupe'],'1996':['Coupe'],'1997':['Coupe'] },
  '348':           { '1989':['tb','ts'],'1990':['tb','ts'],'1991':['tb','ts'],'1992':['tb','ts','Spider'],'1993':['tb','ts','Spider'],'1994':['tb','ts','Spider'],'1995':['tb','ts','Spider'] },
  'F355':          { '1994':['Berlinetta','GTS'],'1995':['Berlinetta','GTS','Spider'],'1996':['Berlinetta','GTS','Spider'],'1997':['Berlinetta','GTS','Spider'],'1998':['Berlinetta','GTS','Spider'],'1999':['Berlinetta','GTS','Spider'] },
  '456 GT':        { '1992':['GT'],'1993':['GT'],'1994':['GT','GTA'],'1995':['GT','GTA'],'1996':['GT','GTA'],'1997':['GT','GTA'],'1998':['GT','GTA'],'1999':['GT','GTA'],'2000':['GT','GTA'],'2001':['GT','GTA'],'2002':['GT','GTA'],'2003':['GT','GTA'] },
  '550 Maranello': { '1996':['Coupe'],'1997':['Coupe'],'1998':['Coupe','Barchetta'],'1999':['Coupe','Barchetta'],'2000':['Coupe','Barchetta'],'2001':['Coupe'] },
  '575 M Maranello':{ '2002':['Coupe','F1'],'2003':['Coupe','F1','Maranello Fiorano'],'2004':['Coupe','F1','Superamerica'],'2005':['Coupe','F1','Superamerica'],'2006':['Coupe','F1'] },
  '360':           { '1999':['Modena','Spider'],'2000':['Modena','Spider'],'2001':['Modena','Spider'],'2002':['Modena','Spider','Challenge Stradale'],'2003':['Modena','Spider','Challenge Stradale'],'2004':['Modena','Spider','Challenge Stradale'],'2005':['Modena','Spider','Challenge Stradale'] },
  'Enzo':          { '2002':['Coupe'],'2003':['Coupe'],'2004':['Coupe'] },
  '612 Scaglietti':{ '2004':['Coupe'],'2005':['Coupe'],'2006':['Coupe','One-to-One'],'2007':['Coupe','One-to-One'],'2008':['Coupe','One-to-One'],'2009':['Coupe','One-to-One'],'2010':['Coupe','One-to-One'],'2011':['Coupe'] },
  'F430':          { '2004':['Coupe','Spider'],'2005':['Coupe','Spider'],'2006':['Coupe','Spider','Scuderia'],'2007':['Coupe','Spider','Scuderia'],'2008':['Coupe','Spider','Scuderia','16M Spider'],'2009':['Scuderia','16M Spider'] },
  'California':    { '2008':['Coupe/Cabriolet'],'2009':['Coupe/Cabriolet'],'2010':['Coupe/Cabriolet'],'2011':['Coupe/Cabriolet'],'2012':['Coupe/Cabriolet'],'2013':['Coupe/Cabriolet'],'2014':['Coupe/Cabriolet','T'] },
  'California T':  { '2014':['Coupe/Cabriolet'],'2015':['Coupe/Cabriolet'],'2016':['Coupe/Cabriolet','Handling Speciale'],'2017':['Coupe/Cabriolet','Handling Speciale'] },
  'FF':            { '2011':['Coupe'],'2012':['Coupe'],'2013':['Coupe'],'2014':['Coupe'],'2015':['Coupe'],'2016':['Coupe'] },
  '458':           { '2009':['Italia'],'2010':['Italia','Spider'],'2011':['Italia','Spider'],'2012':['Italia','Spider'],'2013':['Italia','Spider','Speciale'],'2014':['Italia','Spider','Speciale','Speciale A'],'2015':['Speciale','Speciale A'] },
  'LaFerrari':     { '2013':['Coupe'],'2014':['Coupe'],'2015':['Coupe','Aperta'],'2016':['Coupe','Aperta'] },
  'GTC4Lusso':     { '2016':['V12','T V8'],'2017':['V12','T V8'],'2018':['V12','T V8'],'2019':['V12','T V8'],'2020':['V12','T V8'] },
  '488':           { '2015':['GTB','Spider'],'2016':['GTB','Spider'],'2017':['GTB','Spider','Pista'],'2018':['GTB','Spider','Pista','Pista Spider'],'2019':['GTB','Spider','Pista','Pista Spider'],'2020':['Pista','Pista Spider'] },
  'Portofino':     { '2017':['Coupe/Cabriolet'],'2018':['Coupe/Cabriolet'],'2019':['Coupe/Cabriolet'],'2020':['Coupe/Cabriolet','M'],'2021':['M'],'2022':['M'],'2023':['M'] },
  '812':           { '2017':['Superfast'],'2018':['Superfast'],'2019':['Superfast'],'2020':['Superfast','GTS'],'2021':['Superfast','GTS','Competizione','Competizione A'],'2022':['GTS','Competizione','Competizione A'] },
  'SF90 Stradale': { '2019':['Coupe','Spider'],'2020':['Coupe','Spider'],'2021':['Coupe','Spider','Assetto Fiorano'],'2022':['Coupe','Spider','Assetto Fiorano'],'2023':['Coupe','Spider','Assetto Fiorano'],'2024':['Coupe','Spider','Assetto Fiorano'] },
  'Roma':          { '2020':['Coupe'],'2021':['Coupe','Spider'],'2022':['Coupe','Spider'],'2023':['Coupe','Spider'],'2024':['Coupe','Spider'] },
  'F8':            { '2019':['Tributo','Spider'],'2020':['Tributo','Spider'],'2021':['Tributo','Spider'],'2022':['Tributo','Spider'] },
  '296 GTB':       { '2021':['Coupe','GTS'],'2022':['Coupe','GTS','Assetto Fiorano'],'2023':['Coupe','GTS','Assetto Fiorano'],'2024':['Coupe','GTS','Assetto Fiorano'] },
  'Purosangue':    { '2022':['V12'],'2023':['V12'],'2024':['V12'],'2025':['V12'] },
  '12Cilindri':    { '2024':['Coupe','Spider'],'2025':['Coupe','Spider'] },
};

// ══════════════════════════════════════════════════════════════════════════════
// LAMBORGHINI
// ══════════════════════════════════════════════════════════════════════════════
makes['Lamborghini'] = {
  '350 GT':    { '1964':['Standard'],'1965':['Standard'],'1966':['Standard'],'1967':['Standard'] },
  '400 GT':    { '1966':['2+2'],'1967':['2+2'],'1968':['2+2'] },
  'Miura':     { '1966':['P400'],'1967':['P400'],'1968':['P400','P400 S'],'1969':['P400 S'],'1970':['P400 S','P400 SV'],'1971':['P400 SV'],'1972':['P400 SV'],'1973':['P400 SV'] },
  'Espada':    { '1968':['Series I'],'1969':['Series I','Series II'],'1970':['Series II'],'1971':['Series II'],'1972':['Series II','Series III'],'1973':['Series III'],'1974':['Series III'],'1975':['Series III'],'1976':['Series III'],'1977':['Series III'],'1978':['Series III'] },
  'Jarama':    { '1970':['GT'],'1971':['GT'],'1972':['GT','GTS'],'1973':['GTS'],'1974':['GTS'],'1975':['GTS'],'1976':['GTS'] },
  'Urraco':    { '1972':['P250'],'1973':['P250'],'1974':['P250','P300'],'1975':['P250','P300'],'1976':['P300'],'1977':['P300'],'1978':['P300'],'1979':['P300'] },
  'Countach':  { '1974':['LP400'],'1975':['LP400'],'1976':['LP400'],'1977':['LP400','LP400 S'],'1978':['LP400 S'],'1979':['LP400 S','LP500 S'],'1980':['LP500 S'],'1981':['LP500 S'],'1982':['LP500 S','5000 S'],'1983':['5000 S','5000 QV'],'1984':['5000 QV'],'1985':['5000 QV'],'1986':['5000 QV'],'1987':['5000 QV'],'1988':['5000 QV','25th Anniversary'],'1989':['25th Anniversary'],'1990':['25th Anniversary'] },
  'Silhouette': { '1976':['Standard'],'1977':['Standard'] },
  'Jalpa':     { '1981':['3500'],'1982':['3500'],'1983':['3500'],'1984':['3500'],'1985':['3500'],'1986':['3500'],'1987':['3500'],'1988':['3500'] },
  'LM002':     { '1986':['Standard'],'1987':['Standard'],'1988':['Standard'],'1989':['Standard'],'1990':['Standard'],'1991':['Standard'],'1992':['Standard'],'1993':['Standard'] },
  'Diablo':    { '1990':['VT'],'1991':['VT'],'1992':['VT','SE30'],'1993':['VT','SE30'],'1994':['VT','SV'],'1995':['VT','SV','Roadster'],'1996':['VT','SV','Roadster'],'1997':['VT','SV','Roadster'],'1998':['VT','SV','Roadster','GT'],'1999':['VT','SV','Roadster','GT'],'2000':['VT 6.0','GT'],'2001':['VT 6.0'] },
  'Murciélago':{ '2001':['LP580'],'2002':['LP580'],'2003':['LP580','LP580 Roadster'],'2004':['LP580','LP580 Roadster'],'2005':['LP580','LP580 Roadster'],'2006':['LP640','LP640 Roadster'],'2007':['LP640','LP640 Roadster'],'2008':['LP640','LP640 Roadster','LP640-4 SuperVeloce'],'2009':['LP640','LP640 Roadster','LP670-4 SuperVeloce'],'2010':['LP670-4 SuperVeloce','LP650-4 Roadster'] },
  'Gallardo':  { '2003':['LP520-4'],'2004':['LP520-4','Spyder'],'2005':['LP520-4','Spyder','Superleggera'],'2006':['LP520-4','Spyder','Superleggera'],'2007':['LP560-4','Spyder','Superleggera'],'2008':['LP560-4','LP560-4 Spyder','Superleggera'],'2009':['LP560-4','LP560-4 Spyder','LP550-2'],'2010':['LP560-4','LP560-4 Spyder','LP550-2'],'2011':['LP560-4','LP560-4 Spyder','LP550-2','LP570-4 Squadra Corse'],'2012':['LP560-4','LP550-2','LP570-4 Squadra Corse'],'2013':['LP560-4 Final Edition','LP570-4 Squadra Corse'] },
  'Aventador': { '2011':['LP700-4'],'2012':['LP700-4','LP700-4 Roadster'],'2013':['LP700-4','LP700-4 Roadster','LP720-4 50th Anniversario'],'2014':['LP700-4','LP700-4 Roadster'],'2015':['LP700-4','LP700-4 Roadster','LP750-4 SuperVeloce'],'2016':['LP700-4','LP700-4 Roadster','LP750-4 SuperVeloce','S'],'2017':['S','S Roadster'],'2018':['S','S Roadster','SVJ'],'2019':['S','S Roadster','SVJ','SVJ Roadster'],'2020':['S','S Roadster','SVJ','SVJ Roadster'],'2021':['LP780-4 Ultimae','LP780-4 Ultimae Roadster'],'2022':['LP780-4 Ultimae','LP780-4 Ultimae Roadster'] },
  'Huracán':   { '2014':['LP610-4'],'2015':['LP610-4','LP610-4 Spyder','LP580-2'],'2016':['LP610-4','LP610-4 Spyder','LP580-2','LP580-2 Spyder','Performante'],'2017':['LP610-4','LP580-2','LP580-2 Spyder','Performante','Performante Spyder'],'2018':['Evo','Evo Spyder','Performante','Performante Spyder'],'2019':['Evo','Evo Spyder','LP580-2','LP580-2 Spyder'],'2020':['Evo','Evo Spyder','Evo RWD','STO'],'2021':['Evo','Evo Spyder','Evo RWD','STO','Sterrato'],'2022':['Evo','Evo Spyder','STO','Sterrato'],'2023':['Sterrato','Tecnica'],'2024':['Sterrato','Tecnica'] },
  'Urus':      { '2018':['Standard'],'2019':['Standard'],'2020':['Standard','Graphite Capsule'],'2021':['Standard','Graphite Capsule','Performante'],'2022':['Performante','S'],'2023':['S','SE'],'2024':['S','SE'],'2025':['S','SE'] },
  'Sián':      { '2019':['FKP 37'],'2020':['FKP 37','Roadster'] },
  'Countach LPI 800-4': { '2021':['Standard'],'2022':['Standard'] },
  'Revuelto':  { '2023':['LP1015-4'],'2024':['LP1015-4'],'2025':['LP1015-4'] },
  'Temerario': { '2024':['Standard'],'2025':['Standard'] },
};

// ══════════════════════════════════════════════════════════════════════════════
// FIAT
// ══════════════════════════════════════════════════════════════════════════════
makes['Fiat'] = {
  '500 Classic':   { '1957':['Standard'],'1958':['Standard'],'1959':['Standard','Sport'],'1960':['Standard','Sport'],'1961':['Standard','Sport'],'1962':['Standard','Sport'],'1963':['Standard','Sport'],'1964':['Standard','Sport'],'1965':['Standard','Sport'],'1966':['Standard','Sport'],'1967':['Standard','Sport'],'1968':['Standard','Sport'],'1969':['Standard','Sport'],'1970':['Standard','Sport'],'1971':['Standard','Sport'],'1972':['Standard','Sport'],'1973':['Standard','Sport'],'1974':['Standard','Sport'],'1975':['Standard','Sport'] },
  '600':           { '1955':['Standard'],'1956':['Standard','Multipla'],'1957':['Standard','Multipla'],'1958':['Standard','Multipla'],'1959':['Standard','Multipla'],'1960':['Standard','Multipla'],'1961':['Standard','Multipla'],'1962':['Standard','Multipla'],'1963':['Standard','Multipla'],'1964':['Standard'],'1965':['Standard'],'1966':['Standard'],'1967':['Standard'],'1968':['Standard'],'1969':['Standard'] },
  '124':           { '1966':['Berlina','Special','Coupe','Spider'],'1967':['Berlina','Special','Coupe','Spider'],'1968':['Berlina','Special','Coupe','Spider'],'1969':['Berlina','Special','Coupe','Spider'],'1970':['Berlina','Special','Coupe','Spider'],'1971':['Berlina','Special','Coupe','Spider'],'1972':['Berlina','Special','Coupe','Spider'],'1973':['Berlina','Special','Coupe','Spider'],'1974':['Berlina','Special','Coupe','Spider'] },
  '124 Spider':    { '1975':['1.8','2.0'],'1976':['1.8','2.0'],'1977':['1.8','2.0'],'1978':['1.8','2.0'],'1979':['2.0'],'1980':['2.0'],'1981':['2.0'],'1982':['2.0'],'1983':['2.0'],'1984':['2.0'],'1985':['2.0'] },
  '125':           { '1967':['Standard','Special'],'1968':['Standard','Special'],'1969':['Standard','Special'],'1970':['Standard','Special'],'1971':['Standard','Special'],'1972':['Standard','Special'] },
  '126':           { '1972':['Standard'],'1973':['Standard'],'1974':['Standard'],'1975':['Standard'],'1976':['Standard'],'1977':['Standard'],'1978':['Standard'],'1979':['Standard'],'1980':['Standard'],'1981':['Standard'],'1982':['Standard'],'1983':['Standard'],'1984':['Standard'],'1985':['Standard'],'1986':['Standard'],'1987':['Standard'],'1988':['Standard'],'1989':['Standard'],'1990':['Standard'],'1991':['Standard'],'1992':['Standard'],'1993':['Standard'] },
  '127':           { '1971':['Standard'],'1972':['Standard'],'1973':['Standard','Sport'],'1974':['Standard','Sport'],'1975':['Standard','Sport'],'1976':['Standard','Sport','C'],'1977':['Standard','Sport','C'],'1978':['Standard','Sport','C'],'1979':['Standard','Sport','C'],'1980':['Standard','Sport','C'],'1981':['Standard','Sport','C'],'1982':['Standard','C'],'1983':['Standard','C'] },
  '128':           { '1969':['Berlina','Rally'],'1970':['Berlina','Rally'],'1971':['Berlina','Rally','3P'],'1972':['Berlina','Rally','3P'],'1973':['Berlina','Rally','3P'],'1974':['Berlina','3P'],'1975':['Berlina','3P'],'1976':['Berlina','3P'],'1977':['Berlina','3P'],'1978':['Berlina'],'1979':['Berlina'],'1980':['Berlina'],'1981':['Berlina'],'1982':['Berlina'],'1983':['Berlina'],'1984':['Berlina'],'1985':['Berlina'] },
  '131 Mirafiori': { '1974':['Berlina'],'1975':['Berlina','Mirafiori'],'1976':['Berlina','Mirafiori','Supermirafiori'],'1977':['Berlina','Mirafiori','Supermirafiori'],'1978':['Berlina','Mirafiori','Supermirafiori','Abarth Rally'],'1979':['Mirafiori','Supermirafiori','Abarth Rally'],'1980':['Mirafiori','Supermirafiori'],'1981':['Mirafiori','Supermirafiori'],'1982':['Supermirafiori'],'1983':['Supermirafiori'],'1984':['Supermirafiori'] },
  '132':           { '1972':['Standard'],'1973':['Standard','1600'],'1974':['Standard','1600'],'1975':['Standard','1600','1800'],'1976':['Standard','1600','1800'],'1977':['1600','1800','2000'],'1978':['1600','1800','2000'],'1979':['1800','2000'],'1980':['2000'],'1981':['2000'] },
  'Ritmo':         { '1978':['60','65 CL','85 S'],'1979':['60','65 CL','85 S','105 TC'],'1980':['60','65 CL','85 S','105 TC'],'1981':['60','65 CL','85 S','105 TC','130 TC Abarth'],'1982':['65 CL','85 S','105 TC','130 TC Abarth'],'1983':['65 CL','85 S','105 TC','130 TC Abarth'],'1984':['65 CL','85 S','105 TC'],'1985':['65 CL','85 S','105 TC'],'1986':['65 CL','85 S'],'1987':['65 CL','85 S'],'1988':['85 S'] },
  'Panda':         { '1980':['30','45'],'1981':['30','45'],'1982':['30','45'],'1983':['30','45','Super'],'1984':['30','45','Super','4x4'],'1985':['30','45','Super','4x4'],'1986':['30','45','Super','4x4'],'1987':['30','45','Super','4x4'],'1988':['30','45','Super','4x4'],'1989':['30','45','Super','4x4'],'1990':['1000','1100','4x4'],'1991':['1000','1100','4x4'],'1992':['1000','1100','4x4'],'1993':['1000','1100','4x4'],'1994':['1000','1100','4x4'],'1995':['1000','1100','4x4'],'1996':['1000','1100','4x4'],'1997':['1000','1100','4x4'],'1998':['1000','1100','4x4'],'1999':['1000','1100','4x4'],'2000':['1000','1100','4x4'],'2001':['1000','1100','4x4'],'2002':['1000','1100','4x4'],'2003':['Panda','Panda 4x4'] },
  'Panda II':      { '2003':['1.1','1.2','1.3 Multijet','4x4'],'2004':['1.1','1.2','1.3 Multijet','4x4'],'2005':['1.1','1.2','1.3 Multijet','4x4'],'2006':['1.1','1.2','1.3 Multijet','4x4'],'2007':['1.2','1.3 Multijet','4x4'],'2008':['1.2','1.3 Multijet','4x4'],'2009':['1.2','1.3 Multijet','4x4'],'2010':['1.2','1.3 Multijet','4x4'],'2011':['1.2','1.3 Multijet','4x4'],'2012':['1.2','1.3 Multijet','4x4'] },
  'Panda III':     { '2012':['1.2','0.9 TwinAir','1.3 Multijet','4x4','Cross'],'2013':['1.2','0.9 TwinAir','1.3 Multijet','4x4','Cross'],'2014':['1.2','0.9 TwinAir','1.3 Multijet','4x4','Cross'],'2015':['1.2','0.9 TwinAir','1.3 Multijet','4x4','Cross'],'2016':['1.2','0.9 TwinAir','1.3 Multijet','4x4','Cross'],'2017':['1.2','0.9 TwinAir','1.3 Multijet','4x4','Cross'],'2018':['1.2','0.9 TwinAir','1.3 Multijet','4x4','Cross'],'2019':['1.2','0.9 TwinAir','1.3 Multijet','4x4','Cross'],'2020':['1.2','0.9 TwinAir','Mild Hybrid','4x4','Cross'],'2021':['1.2','Mild Hybrid','4x4','Cross'],'2022':['1.2','Mild Hybrid','4x4','Cross'],'2023':['1.2','Mild Hybrid','4x4','Cross'] },
  'Uno':           { '1983':['45','55','70 SX'],'1984':['45','55','70 SX','Turbo'],'1985':['45','55','70 SX','Turbo','Turbo i.e.'],'1986':['45','55','70 SX','Turbo i.e.'],'1987':['45','55','70 SX','Turbo i.e.'],'1988':['45','55','70 SX','Turbo i.e.'],'1989':['45','55','70 SX','Turbo i.e.'],'1990':['45','55','70 SX'],'1991':['45','55','70 SX'],'1992':['45','55','70 SX'],'1993':['45','55','70 SX'] },
  'Tipo I':        { '1987':['1.4','1.6','1.8','2.0 ie'],'1988':['1.4','1.6','1.8','2.0 ie'],'1989':['1.4','1.6','1.8','2.0 ie'],'1990':['1.4','1.6','1.8','2.0 ie','1.9 TD'],'1991':['1.4','1.6','1.8','2.0 ie','1.9 TD'],'1992':['1.4','1.6','1.8','2.0 ie','1.9 TD'],'1993':['1.4','1.6','1.8','2.0 ie','1.9 TD'],'1994':['1.4','1.6','1.8','2.0 ie'],'1995':['1.4','1.6','1.8'] },
  'Tempra':        { '1990':['1.4','1.6','1.8','2.0 ie'],'1991':['1.4','1.6','1.8','2.0 ie','SW'],'1992':['1.4','1.6','1.8','2.0 ie','SW'],'1993':['1.4','1.6','1.8','2.0 ie','SW'],'1994':['1.4','1.6','1.8','2.0 ie','SW'],'1995':['1.6','1.8','SW'],'1996':['1.6','1.8','SW'] },
  'Punto I':       { '1993':['55','60','75'],'1994':['55','60','75','GT Turbo'],'1995':['55','60','75','GT Turbo'],'1996':['55','60','75','GT Turbo'],'1997':['55','60','75','GT Turbo'],'1998':['55','60','75','Sporting'],'1999':['55','60','75','Sporting'] },
  'Punto II':      { '1999':['1.2','1.4','1.6','1.8 HGT','1.9 JTD'],'2000':['1.2','1.4','1.6','1.8 HGT','1.9 JTD'],'2001':['1.2','1.4','1.6','1.8 HGT','1.9 JTD'],'2002':['1.2','1.4','1.6','1.8 HGT','1.9 JTD'],'2003':['1.2','1.4','1.6','1.8 HGT','1.9 JTD'] },
  'Grande Punto':  { '2005':['1.2','1.4','1.4 Turbo','1.3 Multijet','1.9 Multijet'],'2006':['1.2','1.4','1.4 Turbo','1.3 Multijet','1.9 Multijet'],'2007':['1.2','1.4','1.4 Turbo','1.3 Multijet','1.9 Multijet','Abarth'],'2008':['1.2','1.4','1.4 Turbo','1.3 Multijet','1.9 Multijet','Abarth'],'2009':['1.2','1.4','1.4 Turbo','1.3 Multijet','Evo'],'2010':['1.2','1.4','1.4 Turbo','1.3 Multijet','Evo'],'2011':['1.2','1.4','1.4 Turbo','1.3 Multijet','Evo'],'2012':['1.2','1.4','1.4 Turbo','1.3 Multijet'],'2013':['1.2','1.4','1.4 Turbo','1.3 Multijet'],'2014':['1.2','1.4','1.3 Multijet'],'2015':['1.2','1.4','1.3 Multijet'],'2016':['1.2','1.4','1.3 Multijet'],'2017':['1.2','1.4','1.3 Multijet'],'2018':['1.2','1.4'] },
  'Barchetta':     { '1995':['1.8'],'1996':['1.8'],'1997':['1.8'],'1998':['1.8'],'1999':['1.8'],'2000':['1.8'],'2001':['1.8'],'2002':['1.8'],'2003':['1.8'],'2004':['1.8'],'2005':['1.8'] },
  'Bravo/Brava':   { '1995':['75','100','115 HLX'],'1996':['75','100','115 HLX','HF Turbo'],'1997':['75','100','115 HLX','HF Turbo'],'1998':['75','100','115 HLX','HF Turbo'],'1999':['75','100','115 HLX','HF Turbo'],'2000':['75','100','115 HLX'],'2001':['75','100'] },
  'Seicento':      { '1998':['S','SX','Sporting'],'1999':['S','SX','Sporting'],'2000':['S','SX','Sporting'],'2001':['S','SX','Sporting'],'2002':['S','SX','Sporting'],'2003':['S','SX','Sporting'],'2004':['S','SX','Sporting'],'2005':['S','SX','Sporting'],'2006':['S','SX','Sporting'],'2007':['S','SX','Sporting'],'2008':['S','Sporting'] },
  'Stilo':         { '2001':['1.2','1.6','1.8','2.4','1.9 JTD'],'2002':['1.2','1.6','1.8','2.4','1.9 JTD','Multi Wagon'],'2003':['1.2','1.6','1.8','2.4','1.9 JTD','Multi Wagon'],'2004':['1.2','1.6','1.8','2.4','1.9 JTD','Multi Wagon'],'2005':['1.4','1.6','1.8','1.9 JTD','Multi Wagon'],'2006':['1.4','1.6','1.9 JTD'],'2007':['1.4','1.6','1.9 JTD'] },
  'Bravo II':      { '2007':['1.4 T-Jet','1.6 Multijet','2.0 Multijet'],'2008':['1.4 T-Jet','1.6 Multijet','2.0 Multijet'],'2009':['1.4 T-Jet','1.6 Multijet','2.0 Multijet'],'2010':['1.4 T-Jet','1.6 Multijet'],'2011':['1.4 T-Jet','1.6 Multijet'],'2012':['1.4 T-Jet','1.6 Multijet'],'2013':['1.4 T-Jet','1.6 Multijet'],'2014':['1.4 T-Jet','1.6 Multijet'],'2015':['1.4 T-Jet'],'2016':['1.4 T-Jet'] },
  '500':           { '2007':['Pop','Lounge','Sport'],'2008':['Pop','Lounge','Sport','1.4 T-Jet'],'2009':['Pop','Lounge','Sport','1.4 T-Jet','Abarth'],'2010':['Pop','Lounge','Sport','1.4 T-Jet','Abarth'],'2011':['Pop','Lounge','Sport','Abarth','C (Cabrio)'],'2012':['Pop','Lounge','Sport','Abarth','C (Cabrio)'],'2013':['Pop','Lounge','Sport','Abarth','C (Cabrio)'],'2014':['Pop','Lounge','Sport','Abarth','C (Cabrio)'],'2015':['Pop','Lounge','Sport','Abarth','C (Cabrio)'],'2016':['Pop','Lounge','Sport','Abarth','C (Cabrio)','120th Anniversary'],'2017':['Pop','Lounge','Sport','Abarth','C (Cabrio)'],'2018':['Pop','Lounge','Sport','Abarth','C (Cabrio)'],'2019':['Pop','Lounge','Sport','Abarth','C (Cabrio)'],'2020':['Pop','Lounge','Sport','C (Cabrio)'],'2021':['Pop','Lounge','Sport','C (Cabrio)'],'2022':['Pop','Lounge','Sport','C (Cabrio)'],'2023':['Pop','Lounge','Sport','C (Cabrio)'] },
  '500L':          { '2012':['Pop','Trekking','Living'],'2013':['Pop','Trekking','Living'],'2014':['Pop','Trekking','Living'],'2015':['Pop','Trekking','Living'],'2016':['Pop','Trekking','Living','Cross'],'2017':['Pop','Trekking','Living','Cross'],'2018':['Pop','Cross'],'2019':['Pop','Cross'],'2020':['Pop','Cross'],'2021':['Pop','Cross'] },
  '500X':          { '2014':['Pop','Lounge','Cross','Cross Plus'],'2015':['Pop','Lounge','Cross','Cross Plus'],'2016':['Pop','Lounge','Cross','Cross Plus','S-Design'],'2017':['Pop','Lounge','Cross','S-Design'],'2018':['Pop','Lounge','Cross','S-Design'],'2019':['Pop','Lounge','Cross','S-Design'],'2020':['Pop','Lounge','Cross','S-Design'],'2021':['Pop','Cross','S-Design'],'2022':['Pop','Cross'],'2023':['Pop','Cross'],'2024':['Pop','Cross'] },
  'Croma':         { '1985':['CHT','i.e.','Turbo i.e.','2500 TD'],'1986':['CHT','i.e.','Turbo i.e.','2500 TD'],'1987':['CHT','i.e.','Turbo i.e.','2500 TD'],'1988':['CHT','i.e.','Turbo i.e.','2500 TD'],'1989':['CHT','i.e.','Turbo i.e.','2500 TD'],'1990':['i.e.','Turbo i.e.','2500 TD'],'1991':['i.e.','Turbo i.e.','2500 TD'],'1992':['i.e.','Turbo i.e.'],'1993':['i.e.','Turbo i.e.'],'1994':['i.e.','Turbo i.e.'],'1995':['i.e.','Turbo i.e.'],'1996':['i.e.'] },
  'Tipo II':       { '2015':['Easy','Lounge','S-Design'],'2016':['Easy','Lounge','S-Design','SW'],'2017':['Easy','Lounge','S-Design','SW'],'2018':['Easy','Lounge','S-Design','SW'],'2019':['Easy','Lounge','S-Design','SW'],'2020':['Easy','Lounge','S-Design','SW'],'2021':['Easy','Lounge','Cross','SW'],'2022':['Easy','Lounge','Cross','SW'],'2023':['Easy','Lounge','Cross','SW'] },
  'Freemont':      { '2011':['Popstar','Lounge','Trekking'],'2012':['Popstar','Lounge','Trekking','AWD'],'2013':['Popstar','Lounge','Trekking','AWD'],'2014':['Popstar','Lounge','Trekking','AWD'],'2015':['Popstar','Lounge','Trekking','AWD'],'2016':['Popstar','Lounge','AWD'] },
  '500e':          { '2020':['Action','Passion','La Prima','Icon'],'2021':['Action','Passion','La Prima','Icon','Cabrio'],'2022':['Action','Passion','La Prima','Icon','Cabrio'],'2023':['Action','Passion','La Prima','Icon','Cabrio'],'2024':['Action','Passion','La Prima','Icon','Cabrio'],'2025':['Action','Passion','La Prima','Icon','Cabrio'] },
  '600e':          { '2023':['Standard','La Prima'],'2024':['Standard','La Prima'],'2025':['Standard','La Prima'] },
};

// ══════════════════════════════════════════════════════════════════════════════
// MASERATI
// ══════════════════════════════════════════════════════════════════════════════
makes['Maserati'] = {
  'A6':            { '1947':['Berlinetta'],'1948':['Berlinetta'],'1949':['Berlinetta'],'1950':['Berlinetta'],'1951':['Berlinetta','CS'],'1952':['Berlinetta','CS'],'1953':['Berlinetta','CS'],'1954':['CS'],'1955':['CS'],'1956':['CS'] },
  '3500 GT':       { '1957':['GT','GTI'],'1958':['GT','GTI'],'1959':['GT','GTI'],'1960':['GT','GTI','Spyder'],'1961':['GT','GTI','Spyder'],'1962':['GT','GTI','Spyder'],'1963':['GT','GTI','Spyder'],'1964':['GT','GTI'] },
  'Mistral':       { '1963':['3500','3700','4000'],'1964':['3500','3700','4000','Spyder'],'1965':['3500','3700','4000','Spyder'],'1966':['3700','4000','Spyder'],'1967':['3700','4000','Spyder'],'1968':['4000','Spyder'],'1969':['4000','Spyder'],'1970':['Spyder'] },
  'Ghibli I':      { '1966':['4.7 GT'],'1967':['4.7 GT','4.9 SS'],'1968':['4.7 GT','4.9 SS'],'1969':['4.7 GT','4.9 SS','Spyder'],'1970':['4.9 SS','Spyder'],'1971':['4.9 SS','Spyder'],'1972':['4.9 SS','Spyder'],'1973':['4.9 SS'] },
  'Indy':          { '1969':['4.2'],'1970':['4.2','4.7'],'1971':['4.2','4.7'],'1972':['4.2','4.7','4.9'],'1973':['4.7','4.9'],'1974':['4.9'] },
  'Bora':          { '1971':['4.7'],'1972':['4.7'],'1973':['4.7','4.9'],'1974':['4.7','4.9'],'1975':['4.7','4.9'],'1976':['4.9'],'1977':['4.9'],'1978':['4.9'] },
  'Merak':         { '1972':['2000 GT'],'1973':['2000 GT'],'1974':['2000 GT','SS'],'1975':['SS'],'1976':['SS'],'1977':['SS'],'1978':['SS'],'1979':['SS'],'1980':['SS'],'1981':['SS'],'1982':['SS'],'1983':['SS'] },
  'Khamsin':       { '1974':['Standard'],'1975':['Standard'],'1976':['Standard'],'1977':['Standard'],'1978':['Standard'],'1979':['Standard'],'1980':['Standard'],'1981':['Standard'],'1982':['Standard'] },
  'Quattroporte I-III': { '1963':['V8'],'1966':['V8'],'1969':['V8'],'1974':['V8'],'1979':['V8'] },
  'Biturbo':       { '1981':['2.0'],'1982':['2.0'],'1983':['2.0','2.5'],'1984':['2.0','2.5','2.5 Spyder'],'1985':['2.0','2.5','2.5 Spyder'],'1986':['2.0','2.5','2.5 Spyder'],'1987':['2.0','2.5','2.5 Spyder'],'1988':['2.0','2.5','425i'],'1989':['2.0','2.5','425i'],'1990':['2.0','2.5','430','4v'],'1991':['2.0','2.5','430','4v'],'1992':['2.0','4v'],'1993':['2.0','4v'],'1994':['2.0','4v'] },
  'Ghibli II':     { '1992':['2.0 V6','2.8 V6'],'1993':['2.0 V6','2.8 V6'],'1994':['2.0 V6','2.8 V6'],'1995':['2.0 V6','2.8 V6','Cup'],'1996':['2.0 V6','2.8 V6','Cup'],'1997':['2.0 V6','2.8 V6','Cup'] },
  '3200 GT':       { '1998':['GT','GT Assetto Corsa'],'1999':['GT','GT Assetto Corsa'],'2000':['GT','GT Assetto Corsa'],'2001':['GT','GT Assetto Corsa'] },
  'Spyder':        { '2001':['Cambiocorsa','GT'],'2002':['Cambiocorsa','GT'],'2003':['Cambiocorsa','GT'],'2004':['Cambiocorsa','GT'],'2005':['Cambiocorsa','GT'],'2006':['Cambiocorsa','GT'],'2007':['Cambiocorsa','GT'] },
  'Coupe':         { '2001':['Cambiocorsa','GT'],'2002':['Cambiocorsa','GT'],'2003':['Cambiocorsa','GT'],'2004':['Cambiocorsa','GT'],'2005':['Cambiocorsa','GT'],'2006':['Cambiocorsa','GT'],'2007':['Cambiocorsa','GT'] },
  'Quattroporte V':{ '2003':['4.2 V8','4.2 Executive GT'],'2004':['4.2 V8','4.2 Executive GT'],'2005':['4.2 V8','4.2 Executive GT'],'2006':['4.2 V8','4.2 Sport GT'],'2007':['4.2 V8','4.2 Sport GT','Sport GTS'],'2008':['4.7 Sport GT','4.7 Sport GTS'],'2009':['4.7 Sport GTS'],'2010':['4.7 Sport GTS'],'2011':['4.7 Sport GTS'],'2012':['4.7 Sport GTS'] },
  'GranTurismo':   { '2007':['4.2'],'2008':['4.2','S'],'2009':['4.2','S','S Automatic'],'2010':['4.7','S Automatic','MC Stradale'],'2011':['4.7 Automatic','S Automatic','MC Stradale'],'2012':['4.7 Automatic','S Automatic','MC Stradale'],'2013':['Sport','MC Stradale'],'2014':['Sport','MC Stradale'],'2015':['Sport','MC Stradale'],'2016':['Sport'],'2017':['Sport'],'2018':['Sport'],'2019':['Sport'] },
  'GranCabrio':    { '2010':['4.7','S'],'2011':['4.7','S','MC'],'2012':['4.7','S','MC'],'2013':['Sport','MC'],'2014':['Sport','MC'],'2015':['Sport'],'2016':['Sport'],'2017':['Sport'],'2018':['Sport'],'2019':['Sport'] },
  'Quattroporte VI':{ '2013':['S Q4','GTS','GTS GranSport'],'2014':['S Q4','GTS','GTS GranSport','GranLusso'],'2015':['S Q4','GTS','GTS GranSport','GranLusso'],'2016':['S Q4','GTS GranSport','GranLusso'],'2017':['S Q4','GTS GranSport','GranLusso'],'2018':['S Q4','GTS GranSport','GranLusso'],'2019':['S Q4','GTS GranSport','GranLusso'],'2020':['S Q4','GTS GranSport','GranLusso'],'2021':['S Q4','GTS GranSport','GranLusso'],'2022':['S Q4','GTS GranSport','GranLusso'] },
  'Ghibli III':    { '2013':['S Q4','GranLusso','GranSport'],'2014':['S Q4','GranLusso','GranSport'],'2015':['S Q4','GranLusso','GranSport'],'2016':['S Q4','GranLusso','GranSport'],'2017':['S Q4','GranLusso','GranSport'],'2018':['S Q4','GranLusso','GranSport','Trofeo'],'2019':['S Q4','GranLusso','GranSport','Trofeo'],'2020':['S Q4','GranLusso','GranSport','Trofeo'],'2021':['S Q4','GranLusso','GranSport','Trofeo'],'2022':['GranSport','Trofeo'],'2023':['GranSport','Trofeo'] },
  'Levante':       { '2016':['S','GranLusso','GranSport'],'2017':['S','GranLusso','GranSport','Trofeo'],'2018':['S','GranLusso','GranSport','Trofeo'],'2019':['S','GranLusso','GranSport','Trofeo'],'2020':['GranLusso','GranSport','Trofeo'],'2021':['GranLusso','GranSport','Trofeo','Modena'],'2022':['GranLusso','GranSport','Trofeo','Modena'],'2023':['GranLusso','GranSport','Trofeo','Modena'],'2024':['GranLusso','GranSport','Trofeo','Modena'] },
  'MC20':          { '2020':['Coupe'],'2021':['Coupe','Cielo'],'2022':['Coupe','Cielo'],'2023':['Coupe','Cielo'],'2024':['Coupe','Cielo'],'2025':['Coupe','Cielo'] },
  'GranTurismo II':{ '2022':['Modena','Trofeo','Folgore'],'2023':['Modena','Trofeo','Folgore'],'2024':['Modena','Trofeo','Folgore'],'2025':['Modena','Trofeo','Folgore'] },
  'GranCabrio II': { '2023':['Modena','Trofeo','Folgore'],'2024':['Modena','Trofeo','Folgore'],'2025':['Modena','Trofeo','Folgore'] },
  'Grecale':       { '2022':['GT','Modena','Trofeo','Folgore'],'2023':['GT','Modena','Trofeo','Folgore'],'2024':['GT','Modena','Trofeo','Folgore'],'2025':['GT','Modena','Trofeo','Folgore'] },
};

// ══════════════════════════════════════════════════════════════════════════════
// ABARTH
// ══════════════════════════════════════════════════════════════════════════════
makes['Abarth'] = {
  '595':       { '2008':['Competizione'],'2009':['Competizione'],'2010':['Competizione','Turismo'],'2011':['Competizione','Turismo'],'2012':['Competizione','Turismo','Esseesse'],'2013':['Competizione','Turismo','Esseesse'],'2014':['Competizione','Turismo','Esseesse'],'2015':['Competizione','Turismo','Esseesse'],'2016':['Competizione','Turismo','Esseesse'],'2017':['Competizione','Turismo','Esseesse','C Competizione'],'2018':['Competizione','Turismo','Esseesse','C Competizione'],'2019':['Competizione','Turismo','Esseesse','C Competizione'],'2020':['Competizione','Turismo','C Competizione'],'2021':['Competizione','Turismo','C Competizione'],'2022':['Competizione','Turismo','C Competizione'],'2023':['Competizione','Turismo','C Competizione'] },
  '695':       { '2011':['Tributo Ferrari'],'2012':['Tributo Ferrari'],'2013':['Tributo Ferrari','Rivale'],'2014':['Rivale','Biposto'],'2015':['Rivale','Biposto'],'2016':['Rivale','Biposto','XSR115'],'2017':['Rivale','XSR115'],'2018':['Rivale','XSR115','Rivale Spider'],'2019':['Rivale','Rivale Spider'],'2020':['Rivale','Rivale Spider'],'2021':['Rivale'],'2022':['Rivale'],'2023':['Rivale'] },
  '124 Spider Abarth': { '2016':['Standard'],'2017':['Standard','Rally Tribute'],'2018':['Standard','Rally Tribute'],'2019':['Standard','Rally Tribute'],'2020':['Standard'],'2021':['Standard'],'2022':['Standard'] },
  '500e':      { '2023':['Turismo','Scorpionissima'],'2024':['Turismo','Scorpionissima','Cabrio'],'2025':['Turismo','Scorpionissima','Cabrio'] },
};

// ══════════════════════════════════════════════════════════════════════════════
// DE TOMASO
// ══════════════════════════════════════════════════════════════════════════════
makes['De Tomaso'] = {
  'Vallelunga':  { '1963':['Standard'],'1964':['Standard'],'1965':['Standard'],'1966':['Standard'],'1967':['Standard'] },
  'Mangusta':    { '1967':['Standard'],'1968':['Standard'],'1969':['Standard'],'1970':['Standard'],'1971':['Standard'] },
  'Pantera':     { '1971':['L'],'1972':['L'],'1973':['L','GTS'],'1974':['GTS'],'1975':['GTS'],'1976':['GTS'],'1977':['GTS'],'1978':['GTS'],'1979':['GTS'],'1980':['GTS'],'1981':['GTS'],'1982':['GTS'],'1983':['GTS','GT5'],'1984':['GT5','GT5-S'],'1985':['GT5-S'],'1986':['GT5-S'],'1987':['GT5-S'],'1988':['GT5-S'],'1989':['GT5-S'],'1990':['GT5-S','Si'],'1991':['Si'],'1992':['Si'],'1993':['Si'] },
  'Deauville':   { '1970':['Standard'],'1971':['Standard'],'1972':['Standard'],'1973':['Standard'],'1974':['Standard'],'1975':['Standard'],'1976':['Standard'],'1977':['Standard'],'1978':['Standard'],'1979':['Standard'],'1980':['Standard'],'1981':['Standard'],'1982':['Standard'],'1983':['Standard'],'1984':['Standard'],'1985':['Standard'] },
  'Longchamp':   { '1972':['Coupe'],'1973':['Coupe'],'1974':['Coupe','GTS'],'1975':['Coupe','GTS'],'1976':['Coupe','GTS'],'1977':['Coupe','GTS'],'1978':['Coupe','GTS'],'1979':['Coupe','GTS'],'1980':['Coupe','GTS'],'1981':['Coupe','GTS'],'1982':['Coupe','GTS'],'1983':['Coupe','GTS'],'1984':['GTS'],'1985':['GTS'],'1986':['GTS'],'1987':['GTS'],'1988':['GTS'],'1989':['GTS'] },
  'Guara':       { '1993':['Coupe','Spider'],'1994':['Coupe','Spider'],'1995':['Coupe','Spider'],'1996':['Coupe','Spider'],'1997':['Coupe','Spider'],'1998':['Coupe','Spider'],'1999':['Coupe','Spider'],'2000':['Coupe','Spider'],'2001':['Coupe','Spider'],'2002':['Coupe','Spider'],'2003':['Coupe','Spider'],'2004':['Coupe','Spider'] },
};

// ══════════════════════════════════════════════════════════════════════════════
// SPECS (representative entries)
// ══════════════════════════════════════════════════════════════════════════════
const newSpecs = {
  // Ferrari
  'Ferrari|250 GT|1961|GTO':          { en:'3.0L Colombo DOHC V12', di:'3.0L', cy:'12', hp:'220 kW (295 hp)', tq:'294 Nm', tx:'4-speed manual', dr:'RWD', z1:'~6.1 sec', qm:'~14.5 sec', ts:'~280 km/h', wt:'880 kg', se:'2', ca:'N/A', pr:'~£6,000 (1962)' },
  'Ferrari|275 GTB/GTS|1966|GTB/4':   { en:'3.3L Colombo DOHC V12', di:'3.3L', cy:'12', hp:'224 kW (300 hp)', tq:'314 Nm', tx:'5-speed manual', dr:'RWD', z1:'~6.7 sec', ts:'~260 km/h', wt:'1,080 kg', se:'2', ca:'N/A', pr:'~£10,000 (1967)' },
  'Ferrari|365 GTB/4|1970|Daytona':   { en:'4.4L Colombo DOHC V12', di:'4.4L', cy:'12', hp:'276 kW (370 hp)', tq:'431 Nm', tx:'5-speed manual', dr:'RWD', z1:'~5.4 sec', qm:'~13.3 sec', ts:'~280 km/h', wt:'1,285 kg', se:'2', ca:'N/A', pr:'~£14,500 (1970)' },
  'Ferrari|Dino 246|1972|GT':         { en:'2.4L DOHC V6', di:'2.4L', cy:'6', hp:'145 kW (195 hp)', tq:'226 Nm', tx:'5-speed manual', dr:'RWD', z1:'~7.1 sec', ts:'~237 km/h', wt:'1,080 kg', se:'2', ca:'N/A', pr:'~£5,000 (1972)' },
  'Ferrari|308 GTB/GTS|1982|QV':      { en:'3.0L DOHC V8 QV', di:'3.0L', cy:'8', hp:'170 kW (228 hp)', tq:'265 Nm', tx:'5-speed manual', dr:'RWD', z1:'~6.6 sec', ts:'~254 km/h', wt:'1,380 kg', se:'2', ca:'N/A', pr:'~£25,000 (1982)' },
  'Ferrari|328 GTB/GTS|1987|GTB':     { en:'3.2L DOHC V8', di:'3.2L', cy:'8', hp:'198 kW (270 hp)', tq:'304 Nm', tx:'5-speed manual', dr:'RWD', z1:'~5.5 sec', ts:'~263 km/h', wt:'1,365 kg', se:'2', ca:'N/A', pr:'~£30,000 (1987)' },
  'Ferrari|Testarossa|1987|Coupe':    { en:'4.9L DOHC flat-12', di:'4.9L', cy:'12', hp:'291 kW (390 hp)', tq:'490 Nm', tx:'5-speed manual', dr:'RWD', z1:'~5.8 sec', qm:'~13.9 sec', ts:'~290 km/h', wt:'1,506 kg', se:'2', ca:'N/A', pr:'~£60,000 (1987)' },
  'Ferrari|F40|1989|Coupe':           { en:'2.9L Biturbo DOHC V8', di:'2.9L', cy:'8', hp:'352 kW (478 hp)', tq:'578 Nm', tx:'5-speed manual', dr:'RWD', z1:'~3.9 sec', qm:'~12.1 sec', ts:'~324 km/h', wt:'1,100 kg', se:'2', ca:'N/A', pr:'~£193,000 (1989)' },
  'Ferrari|F50|1996|Coupe':           { en:'4.7L NA F1-derived V12', di:'4.7L', cy:'12', hp:'384 kW (520 hp)', tq:'471 Nm', tx:'6-speed manual', dr:'RWD', z1:'~3.7 sec', qm:'~11.9 sec', ts:'~325 km/h', wt:'1,230 kg', se:'2', ca:'N/A', pr:'~£375,000 (1996)' },
  'Ferrari|F355|1997|Berlinetta':     { en:'3.5L DOHC V8', di:'3.5L', cy:'8', hp:'276 kW (375 hp)', tq:'363 Nm', tx:'6-speed manual', dr:'RWD', z1:'~4.7 sec', ts:'~295 km/h', wt:'1,350 kg', se:'2', ca:'N/A', pr:'~£93,000 (1997)' },
  'Ferrari|360|2002|Modena':          { en:'3.6L DOHC V8', di:'3.6L', cy:'8', hp:'294 kW (400 hp)', tq:'373 Nm', tx:'6-speed F1', dr:'RWD', z1:'~4.5 sec', ts:'~295 km/h', wt:'1,390 kg', se:'2', ca:'N/A', pr:'~£102,000 (2002)' },
  'Ferrari|Enzo|2003|Coupe':          { en:'6.0L NA DOHC V12', di:'6.0L', cy:'12', hp:'485 kW (660 hp)', tq:'657 Nm', tx:'6-speed F1', dr:'RWD', z1:'~3.7 sec', qm:'~11.2 sec', ts:'~350 km/h', wt:'1,255 kg', se:'2', ca:'N/A', pr:'~£450,000 (2003)' },
  'Ferrari|F430|2006|Scuderia':       { en:'4.3L DOHC V8', di:'4.3L', cy:'8', hp:'375 kW (510 hp)', tq:'465 Nm', tx:'6-speed F1', dr:'RWD', z1:'~3.6 sec', ts:'~320 km/h', wt:'1,250 kg', se:'2', ca:'N/A', pr:'~£170,000 (2006)' },
  'Ferrari|458|2013|Speciale':        { en:'4.5L DOHC NA V8', di:'4.5L', cy:'8', hp:'445 kW (605 hp)', tq:'540 Nm', tx:'7-speed F1', dr:'RWD', z1:'~3.0 sec', ts:'~325 km/h', wt:'1,290 kg', se:'2', ca:'N/A', pr:'~£198,000 (2013)' },
  'Ferrari|LaFerrari|2014|Coupe':     { en:'6.3L V12 + KERS hybrid', di:'6.3L', cy:'12', hp:'708 kW (963 hp)', tq:'900 Nm', tx:'7-speed F1', dr:'RWD', z1:'~2.9 sec', qm:'~9.7 sec', ts:'~350 km/h', wt:'1,255 kg', se:'2', ca:'N/A', pr:'~£1,150,000 (2014)' },
  'Ferrari|488|2015|GTB':             { en:'3.9L Biturbo DOHC V8', di:'3.9L', cy:'8', hp:'492 kW (670 hp)', tq:'760 Nm', tx:'7-speed DCT', dr:'RWD', z1:'~3.0 sec', ts:'~330 km/h', wt:'1,370 kg', se:'2', ca:'N/A', pr:'~£183,000 (2015)' },
  'Ferrari|488|2018|Pista':           { en:'3.9L Biturbo DOHC V8', di:'3.9L', cy:'8', hp:'530 kW (720 hp)', tq:'770 Nm', tx:'7-speed DCT', dr:'RWD', z1:'~2.85 sec', ts:'~340 km/h', wt:'1,280 kg', se:'2', ca:'N/A', pr:'~£227,000 (2018)' },
  'Ferrari|812|2017|Superfast':       { en:'6.5L NA DOHC V12', di:'6.5L', cy:'12', hp:'590 kW (800 hp)', tq:'718 Nm', tx:'7-speed DCT', dr:'RWD', z1:'~2.9 sec', ts:'~340 km/h', wt:'1,525 kg', se:'2', ca:'N/A', pr:'~£241,000 (2017)' },
  'Ferrari|SF90 Stradale|2020|Coupe': { en:'4.0L Biturbo V8 + 3 motors PHEV', di:'4.0L', cy:'8', hp:'736 kW (1000 hp)', tq:'800 Nm', tx:'8-speed DCT', dr:'AWD', z1:'~2.5 sec', ts:'~340 km/h', wt:'1,570 kg', se:'2', ca:'N/A', pr:'~£380,000 (2020)' },
  'Ferrari|296 GTB|2022|Coupe':       { en:'3.0L Biturbo V6 + electric PHEV', di:'3.0L', cy:'6', hp:'610 kW (830 hp)', tq:'740 Nm', tx:'8-speed DCT', dr:'RWD', z1:'~2.9 sec', ts:'~330 km/h', wt:'1,470 kg', se:'2', ca:'N/A', pr:'~£242,000 (2022)' },
  'Ferrari|Purosangue|2023|V12':      { en:'6.5L NA DOHC V12', di:'6.5L', cy:'12', hp:'533 kW (725 hp)', tq:'716 Nm', tx:'8-speed DCT', dr:'AWD', z1:'~3.3 sec', ts:'~310 km/h', wt:'2,033 kg', se:'4', ca:'~473 L', pr:'~£313,000 (2023)' },

  // Lamborghini
  'Lamborghini|Miura|1970|P400 SV':   { en:'3.9L DOHC V12 transverse', di:'3.9L', cy:'12', hp:'276 kW (370 hp)', tq:'386 Nm', tx:'5-speed manual', dr:'RWD', z1:'~5.5 sec', ts:'~290 km/h', wt:'1,125 kg', se:'2', ca:'N/A', pr:'~£10,000 (1970)' },
  'Lamborghini|Countach|1985|5000 QV':{ en:'5.2L DOHC V12 QV', di:'5.2L', cy:'12', hp:'331 kW (455 hp)', tq:'500 Nm', tx:'5-speed manual', dr:'RWD', z1:'~4.7 sec', ts:'~295 km/h', wt:'1,490 kg', se:'2', ca:'N/A', pr:'~£65,000 (1985)' },
  'Lamborghini|Diablo|1995|SV':       { en:'5.7L DOHC V12', di:'5.7L', cy:'12', hp:'368 kW (510 hp)', tq:'580 Nm', tx:'5-speed manual', dr:'RWD', z1:'~4.1 sec', ts:'~325 km/h', wt:'1,460 kg', se:'2', ca:'N/A', pr:'~£110,000 (1995)' },
  'Lamborghini|Murciélago|2007|LP640':{ en:'6.5L DOHC V12', di:'6.5L', cy:'12', hp:'471 kW (640 hp)', tq:'660 Nm', tx:'6-speed manual', dr:'AWD', z1:'~3.4 sec', ts:'~330 km/h', wt:'1,665 kg', se:'2', ca:'N/A', pr:'~£185,000 (2007)' },
  'Lamborghini|Gallardo|2007|LP560-4':{ en:'5.2L DOHC V10', di:'5.2L', cy:'10', hp:'412 kW (560 hp)', tq:'540 Nm', tx:'6-speed e-gear', dr:'AWD', z1:'~3.7 sec', ts:'~325 km/h', wt:'1,422 kg', se:'2', ca:'N/A', pr:'~£130,000 (2007)' },
  'Lamborghini|Aventador|2011|LP700-4':{ en:'6.5L NA DOHC V12', di:'6.5L', cy:'12', hp:'515 kW (700 hp)', tq:'690 Nm', tx:'7-speed ISR', dr:'AWD', z1:'~2.9 sec', ts:'~350 km/h', wt:'1,575 kg', se:'2', ca:'N/A', pr:'~£240,000 (2011)' },
  'Lamborghini|Aventador|2021|LP780-4 Ultimae':{ en:'6.5L NA DOHC V12', di:'6.5L', cy:'12', hp:'574 kW (780 hp)', tq:'720 Nm', tx:'7-speed ISR', dr:'AWD', z1:'~2.8 sec', ts:'~355 km/h', wt:'1,590 kg', se:'2', ca:'N/A', pr:'~£330,000 (2021)' },
  'Lamborghini|Huracán|2014|LP610-4': { en:'5.2L NA DOHC V10', di:'5.2L', cy:'10', hp:'449 kW (610 hp)', tq:'560 Nm', tx:'7-speed DCT', dr:'AWD', z1:'~3.2 sec', ts:'~325 km/h', wt:'1,422 kg', se:'2', ca:'N/A', pr:'~£167,000 (2014)' },
  'Lamborghini|Huracán|2020|STO':     { en:'5.2L NA DOHC V10', di:'5.2L', cy:'10', hp:'470 kW (640 hp)', tq:'565 Nm', tx:'7-speed DCT', dr:'RWD', z1:'~3.0 sec', ts:'~310 km/h', wt:'1,339 kg', se:'2', ca:'N/A', pr:'~£229,000 (2020)' },
  'Lamborghini|Urus|2018|Standard':   { en:'4.0L Biturbo DOHC V8', di:'4.0L', cy:'8', hp:'478 kW (650 hp)', tq:'850 Nm', tx:'8-speed auto', dr:'AWD', z1:'~3.6 sec', ts:'~305 km/h', wt:'2,197 kg', se:'5', ca:'~616 L', pr:'~£165,000 (2018)' },
  'Lamborghini|Revuelto|2023|LP1015-4':{ en:'6.5L V12 + 3 electric motors PHEV', di:'6.5L', cy:'12', hp:'745 kW (1015 hp)', tq:'~730 Nm', tx:'8-speed DCT', dr:'AWD', z1:'~2.5 sec', ts:'~350 km/h', wt:'1,772 kg', se:'2', ca:'N/A', pr:'~£375,000 (2023)' },

  // Fiat
  'Fiat|500 Classic|1972|Standard':   { en:'0.5L air-cooled SOHC inline-2', di:'0.5L', cy:'2', hp:'13 kW (18 hp)', tq:'30 Nm', tx:'4-speed manual', dr:'RWD', z1:'~32.0 sec', ts:'~105 km/h', wt:'520 kg', se:'4', ca:'~145 L', pr:'~£700 (1972)' },
  'Fiat|500 Classic|1972|Sport':      { en:'0.6L air-cooled SOHC inline-2', di:'0.6L', cy:'2', hp:'16 kW (22 hp)', tq:'35 Nm', tx:'4-speed manual', dr:'RWD', z1:'~28.0 sec', ts:'~115 km/h', wt:'530 kg', se:'4', ca:'~145 L', pr:'~£850 (1972)' },
  'Fiat|124 Spider|1980|2.0':         { en:'2.0L DOHC inline-4', di:'2.0L', cy:'4', hp:'75 kW (102 hp)', tq:'162 Nm', tx:'5-speed manual', dr:'RWD', z1:'~9.4 sec', ts:'~180 km/h', wt:'1,060 kg', se:'2', ca:'~190 L', pr:'~£8,000 (1980)' },
  'Fiat|Uno|1985|Turbo i.e.':         { en:'1.3L Turbo SOHC inline-4', di:'1.3L', cy:'4', hp:'74 kW (100 hp)', tq:'140 Nm', tx:'5-speed manual', dr:'FWD', z1:'~8.0 sec', ts:'~195 km/h', wt:'890 kg', se:'5', ca:'~265 L', pr:'~£7,500 (1985)' },
  'Fiat|Punto I|1994|GT Turbo':       { en:'1.4L Turbo SOHC inline-4', di:'1.4L', cy:'4', hp:'88 kW (118 hp)', tq:'152 Nm', tx:'5-speed manual', dr:'FWD', z1:'~7.8 sec', ts:'~204 km/h', wt:'1,010 kg', se:'5', ca:'~270 L', pr:'~£12,000 (1994)' },
  'Fiat|Grande Punto|2007|Abarth':    { en:'1.4L MultiAir Turbo inline-4', di:'1.4L', cy:'4', hp:'114 kW (155 hp)', tq:'230 Nm', tx:'5-speed manual', dr:'FWD', z1:'~7.9 sec', ts:'~215 km/h', wt:'1,240 kg', se:'5', ca:'~285 L', pr:'~£15,500 (2007)' },
  'Fiat|500|2012|Abarth':             { en:'1.4L MultiAir Turbo inline-4', di:'1.4L', cy:'4', hp:'114 kW (155 hp)', tq:'230 Nm', tx:'5-speed manual', dr:'FWD', z1:'~7.9 sec', ts:'~218 km/h', wt:'1,085 kg', se:'4', ca:'~185 L', pr:'~£17,000 (2012)' },
  'Fiat|500X|2016|Cross':             { en:'1.4L MultiAir Turbo inline-4', di:'1.4L', cy:'4', hp:'110 kW (150 hp)', tq:'270 Nm', tx:'9-speed auto', dr:'FWD', z1:'~9.5 sec', ts:'~196 km/h', wt:'1,430 kg', se:'5', ca:'~375 L', pr:'~£22,000 (2016)' },
  'Fiat|500e|2021|Icon':              { en:'87 kW electric motor', di:'N/A', cy:'0', hp:'87 kW (118 hp)', tq:'220 Nm', tx:'Single-speed', dr:'FWD', z1:'~9.0 sec', ts:'~150 km/h', wt:'1,365 kg', se:'4', ca:'~185 L', pr:'~£27,000 (2021)' },
  'Fiat|Tipo II|2016|Lounge':         { en:'1.4L T-Jet Turbo inline-4', di:'1.4L', cy:'4', hp:'88 kW (120 hp)', tq:'215 Nm', tx:'6-speed manual', dr:'FWD', z1:'~10.2 sec', ts:'~193 km/h', wt:'1,330 kg', se:'5', ca:'~440 L', pr:'~£15,500 (2016)' },
  'Fiat|Tipo II|2016|SW':             { en:'1.4L T-Jet Turbo inline-4', di:'1.4L', cy:'4', hp:'88 kW (120 hp)', tq:'215 Nm', tx:'6-speed manual', dr:'FWD', z1:'~10.5 sec', ts:'~190 km/h', wt:'1,410 kg', se:'5', ca:'~550 L', pr:'~£17,000 (2016)' },
  'Fiat|Barchetta|1998|1.8':          { en:'1.8L DOHC 16v inline-4', di:'1.8L', cy:'4', hp:'96 kW (130 hp)', tq:'164 Nm', tx:'5-speed manual', dr:'FWD', z1:'~8.9 sec', ts:'~203 km/h', wt:'1,060 kg', se:'2', ca:'~185 L', pr:'~£14,000 (1998)' },

  // Maserati
  'Maserati|Ghibli I|1968|4.9 SS':    { en:'4.9L DOHC V8', di:'4.9L', cy:'8', hp:'254 kW (350 hp)', tq:'441 Nm', tx:'5-speed ZF manual', dr:'RWD', z1:'~6.8 sec', ts:'~275 km/h', wt:'1,420 kg', se:'2', ca:'N/A', pr:'~£10,000 (1968)' },
  'Maserati|Bora|1973|4.9':           { en:'4.9L DOHC V8', di:'4.9L', cy:'8', hp:'224 kW (300 hp)', tq:'441 Nm', tx:'5-speed ZF manual', dr:'RWD', z1:'~6.5 sec', ts:'~280 km/h', wt:'1,560 kg', se:'2', ca:'N/A', pr:'~£12,000 (1973)' },
  'Maserati|3200 GT|1999|GT':         { en:'3.2L Biturbo DOHC V8', di:'3.2L', cy:'8', hp:'228 kW (320 hp)', tq:'451 Nm', tx:'6-speed manual', dr:'RWD', z1:'~5.1 sec', ts:'~270 km/h', wt:'1,640 kg', se:'4', ca:'~430 L', pr:'~£50,000 (1999)' },
  'Maserati|GranTurismo|2009|S Automatic':{ en:'4.7L DOHC V8', di:'4.7L', cy:'8', hp:'338 kW (460 hp)', tq:'510 Nm', tx:'6-speed MC-Shift auto', dr:'RWD', z1:'~4.7 sec', ts:'~295 km/h', wt:'1,800 kg', se:'4', ca:'~260 L', pr:'~£90,000 (2009)' },
  'Maserati|Quattroporte VI|2015|GTS GranSport':{ en:'3.8L Biturbo DOHC V8', di:'3.8L', cy:'8', hp:'390 kW (530 hp)', tq:'710 Nm', tx:'8-speed ZF auto', dr:'RWD', z1:'~4.7 sec', ts:'~305 km/h', wt:'1,980 kg', se:'5', ca:'~530 L', pr:'~£95,000 (2015)' },
  'Maserati|Ghibli III|2016|S Q4':    { en:'3.0L Biturbo DOHC V6', di:'3.0L', cy:'6', hp:'243 kW (330 hp)', tq:'500 Nm', tx:'8-speed ZF auto', dr:'AWD', z1:'~5.0 sec', ts:'~267 km/h', wt:'1,960 kg', se:'5', ca:'~500 L', pr:'~£55,000 (2016)' },
  'Maserati|Ghibli III|2019|Trofeo':  { en:'3.8L Biturbo DOHC V8', di:'3.8L', cy:'8', hp:'390 kW (530 hp)', tq:'650 Nm', tx:'8-speed ZF auto', dr:'RWD', z1:'~4.3 sec', ts:'~326 km/h', wt:'1,940 kg', se:'5', ca:'~500 L', pr:'~£79,000 (2019)' },
  'Maserati|Levante|2017|Trofeo':     { en:'3.8L Biturbo DOHC V8', di:'3.8L', cy:'8', hp:'390 kW (530 hp)', tq:'730 Nm', tx:'8-speed ZF auto', dr:'AWD', z1:'~3.8 sec', ts:'~302 km/h', wt:'2,220 kg', se:'5', ca:'~580 L', pr:'~£99,000 (2017)' },
  'Maserati|MC20|2021|Coupe':         { en:'3.0L Biturbo DOHC V6 Nettuno', di:'3.0L', cy:'6', hp:'463 kW (630 hp)', tq:'730 Nm', tx:'8-speed DCT', dr:'RWD', z1:'~2.9 sec', ts:'~325 km/h', wt:'1,475 kg', se:'2', ca:'N/A', pr:'~£185,000 (2021)' },
  'Maserati|GranTurismo II|2023|Trofeo':{ en:'3.0L Biturbo DOHC V6 Nettuno', di:'3.0L', cy:'6', hp:'448 kW (550 hp)', tq:'650 Nm', tx:'8-speed auto', dr:'RWD', z1:'~3.5 sec', ts:'~320 km/h', wt:'1,850 kg', se:'4', ca:'~270 L', pr:'~£190,000 (2023)' },

  // Abarth
  'Abarth|595|2012|Competizione':     { en:'1.4L MultiAir Turbo inline-4', di:'1.4L', cy:'4', hp:'118 kW (160 hp)', tq:'230 Nm', tx:'5-speed manual', dr:'FWD', z1:'~7.9 sec', ts:'~218 km/h', wt:'1,090 kg', se:'4', ca:'~185 L', pr:'~£18,500 (2012)' },
  'Abarth|695|2014|Biposto':          { en:'1.4L MultiAir Turbo inline-4', di:'1.4L', cy:'4', hp:'137 kW (190 hp)', tq:'250 Nm', tx:'5-speed sequential', dr:'FWD', z1:'~5.9 sec', ts:'~230 km/h', wt:'940 kg', se:'2', ca:'~185 L', pr:'~£38,000 (2014)' },
  'Abarth|124 Spider Abarth|2017|Standard':{ en:'1.4L MultiAir Turbo inline-4', di:'1.4L', cy:'4', hp:'125 kW (170 hp)', tq:'250 Nm', tx:'6-speed manual', dr:'RWD', z1:'~6.8 sec', ts:'~232 km/h', wt:'1,060 kg', se:'2', ca:'~140 L', pr:'~£28,000 (2017)' },

  // De Tomaso
  'De Tomaso|Pantera|1973|GTS':       { en:'5.8L Ford V8', di:'5.8L', cy:'8', hp:'250 kW (340 hp)', tq:'434 Nm', tx:'5-speed manual', dr:'RWD', z1:'~5.4 sec', ts:'~260 km/h', wt:'1,297 kg', se:'2', ca:'N/A', pr:'~£8,000 (1973)' },
  'De Tomaso|Mangusta|1969|Standard': { en:'4.7L Ford V8', di:'4.7L', cy:'8', hp:'223 kW (306 hp)', tq:'400 Nm', tx:'5-speed ZF manual', dr:'RWD', z1:'~6.3 sec', ts:'~248 km/h', wt:'1,020 kg', se:'2', ca:'N/A', pr:'~£5,500 (1969)' },
};

Object.assign(supp.specs, newSpecs);

fs.writeFileSync('./src/data/makes.json', JSON.stringify(makes, null, 2));
fs.writeFileSync('./src/data/supplement71.json', JSON.stringify(supp, null, 2));

const newMakes = ['Ferrari','Lamborghini','Fiat','Maserati','Abarth','De Tomaso'];
newMakes.forEach(mk => {
  const count = Object.keys(makes[mk]).length;
  console.log(`${mk}: ${count} models`);
});
console.log('Total specs:', Object.keys(supp.specs).length);
