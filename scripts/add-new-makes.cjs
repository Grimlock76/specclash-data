const fs = require('fs');
const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'));

function yr(start, end, trims) {
  const out = {};
  for (let y = start; y <= end; y++) out[String(y)] = trims;
  return out;
}
function yrs(ranges) { // [[start,end,trims], ...]
  const out = {};
  for (const [s, e, t] of ranges) Object.assign(out, yr(s, e, t));
  return out;
}

// ── FIAT ─────────────────────────────────────────────────────────────────────
makes['Fiat'] = {
  '500': yr(2007, 2023, ['Pop', 'Sport', 'Lounge']),
  'Abarth 500': { ...yr(2008, 2015, ['500', '595']), ...yr(2016, 2023, ['595', '695']) },
  'Punto': { ...yr(1994, 1999, ['1.2', '1.4 16v', 'GT Turbo']), ...yr(2000, 2009, ['1.2', '1.4', '1.9 JTD']) },
  'Grande Punto': yr(2005, 2010, ['1.2', '1.4 T-Jet', '1.3 Multijet']),
  'Punto Evo': yr(2009, 2012, ['1.2', '1.4 T-Jet', '1.3 Multijet']),
  '500X': yr(2015, 2022, ['Pop', 'Lounge', 'Cross', 'Sport']),
  '500L': yr(2012, 2019, ['Pop', 'Lounge', 'Trekking']),
  'Bravo': { ...yr(1995, 2001, ['1.4', '1.6 16v', '1.8 16v', 'HGT 2.0']), ...yr(2007, 2014, ['1.4 T-Jet', '1.6 Multijet', '1.9 Multijet']) },
  'Tipo': yr(2015, 2023, ['Easy', 'Lounge', 'Sport', 'Cross']),
  '124 Spider': yr(2016, 2020, ['Classica', 'Lusso', 'Abarth']),
  'X1/9': { ...yr(1972, 1982, ['1.3']), ...yr(1982, 1989, ['1.5']) },
  'Panda': { ...yr(1980, 1995, ['45', '4x4']), ...yr(2003, 2012, ['1.2', '100HP', '4x4']), ...yr(2012, 2023, ['Lounge', 'Cross', '4x4']) },
  'Uno': yr(1983, 1995, ['45', '55', '70', 'Turbo ie']),
  'Tempra': yr(1990, 1996, ['1.4', '1.6', '1.8', '2.0 16v']),
  'Marea': yr(1996, 2002, ['1.6', '1.8', '2.0 20v', '2.4 JTD']),
  'Coupe': yr(1993, 2000, ['1.8 16v', '2.0 20v Turbo', '2.0 20v']),
  'Barchetta': yr(1995, 2005, ['1.8 16v']),
  'Croma': { ...yr(1985, 1996, ['ie', '2.0ie', '2.0 Turbo']), ...yr(2005, 2010, ['1.8', '2.2', '1.9 CDTI']) },
  'Multipla': yr(1998, 2010, ['1.6 Bipower', '1.9 JTD']),
  'Doblo': yr(2001, 2022, ['1.4', '1.6', '1.9 Multijet']),
  'Freemont': yr(2011, 2016, ['Pop', 'Lounge', 'AWD']),
  '850': { ...yr(1964, 1973, ['Berlina', 'Sport Coupe', 'Sport Spider']) },
  '124 Classic': yr(1966, 1975, ['1200', 'Sport Coupe', 'Sport Spider']),
  '128': yr(1969, 1985, ['1100', '1300', '3P Coupe']),
  '131': yr(1974, 1984, ['1300', '1600', 'Abarth']),
  'Stilo': yr(2001, 2008, ['1.4', '1.6', '2.4 Abarth']),
  'Sedici': yr(2006, 2014, ['1.6', '2.0 JTD', 'Sport']),
};

// ── PEUGEOT ──────────────────────────────────────────────────────────────────
makes['Peugeot'] = {
  '205': { ...yr(1983, 1997, ['XR', 'GT', 'GTI', 'Cabriolet']) },
  '206': yr(1998, 2010, ['XR', 'XT', 'GTI', 'CC', 'SW']),
  '207': yr(2006, 2012, ['X-Line', 'XT', 'GT', 'CC', 'SW']),
  '208': { ...yr(2012, 2019, ['Active', 'Allure', 'GT']), ...yr(2019, 2023, ['Active', 'Allure', 'GT', 'e-208']) },
  '306': yr(1993, 2002, ['XR', 'XT', 'GTI 6', 'Cabriolet']),
  '307': yr(2001, 2008, ['XR', 'XT', 'ST', 'CC', 'SW']),
  '308': { ...yr(2007, 2013, ['XSE', 'Touring', 'Sport']), ...yr(2013, 2023, ['Active', 'Allure', 'GT', 'SW']) },
  '405': yr(1987, 1997, ['GL', 'GR', 'SR', 'Mi16']),
  '406': yr(1995, 2004, ['XR', 'SR', 'ST', 'Coupe']),
  '407': yr(2004, 2011, ['XR', 'ST', 'SR', 'Coupe']),
  '508': { ...yr(2010, 2018, ['Active', 'Allure', 'GT', 'RXH']), ...yr(2018, 2023, ['Active', 'Allure', 'GT', 'SW']) },
  '505': yr(1979, 1993, ['GL', 'GR', 'SR', 'V6']),
  '504': yr(1968, 1983, ['GL', 'GR', 'Cabriolet', 'V6']),
  '2008': { ...yr(2013, 2019, ['Active', 'Allure', 'GT']), ...yr(2019, 2023, ['Active', 'Allure', 'GT', 'e-2008']) },
  '3008': { ...yr(2008, 2016, ['Active', 'Allure', 'XSE']), ...yr(2016, 2023, ['Active', 'Allure', 'GT']) },
  '5008': { ...yr(2009, 2017, ['Active', 'Allure', 'SR']), ...yr(2017, 2023, ['Active', 'Allure', 'GT']) },
  'RCZ': yr(2010, 2015, ['base', 'R']),
  '106': yr(1991, 2004, ['XN', 'XR', 'Rallye', 'S16']),
  '107': yr(2005, 2014, ['XN', 'Active', 'Sportium']),
  '4008': yr(2012, 2017, ['Active', 'Allure', 'Outdoor']),
  '4007': yr(2007, 2012, ['ST', 'SR', 'Executive']),
};

// ── DAIHATSU ─────────────────────────────────────────────────────────────────
makes['Daihatsu'] = {
  'Charade': {
    ...yr(1977, 1983, ['G10']),
    ...yr(1983, 1987, ['CX', 'CS']),
    ...yr(1987, 1993, ['CX', 'CXL', 'Turbo']),
    ...yr(1993, 2000, ['CX', 'CS', 'GTti']),
  },
  'Sirion': { ...yr(1998, 2005, ['base', 'S', 'SX']), ...yr(2005, 2013, ['SX', 'Sport']) },
  'Terios': { ...yr(1997, 2006, ['base', 'SX']), ...yr(2006, 2013, ['SX', 'Sport']) },
  'Rocky': yr(1984, 1999, ['base', 'SX']),
  'Feroza': yr(1988, 1997, ['DX', 'SX']),
  'Applause': yr(1989, 2000, ['base', 'Xi']),
  'Copen': { ...yr(2002, 2014, ['base']), ...yr(2014, 2023, ['Robe', 'Cero', 'GR Sport']) },
  'Move': yr(1995, 2006, ['base', 'Custom', 'SR']),
  'YRV': yr(2000, 2006, ['base', 'GT-ti']),
  'Mira': yr(1980, 2003, ['CX', 'CL', 'Turbo']),
  'Hi-Jet': yr(1963, 2023, ['Cargo', 'Truck']),
  'Pyzar': yr(1996, 2000, ['base', 'CX']),
};

// ── SAAB ─────────────────────────────────────────────────────────────────────
makes['Saab'] = {
  '900': {
    ...yr(1978, 1987, ['base', 'S', 'Turbo']),
    ...yr(1987, 1994, ['S', 'SE', 'Turbo', 'Cabriolet']),
  },
  '9000': { ...yr(1984, 1990, ['base', 'Turbo']), ...yr(1990, 1998, ['CS', 'CDE', 'Aero']) },
  '900 NG': { ...yr(1993, 1998, ['S', 'SE', 'Aero', 'Cabriolet']) },
  '9-3': {
    ...yr(1998, 2002, ['base', 'SE', 'Aero', 'Viggen']),
    ...yr(2002, 2011, ['Linear', 'Arc', 'Aero', 'Vector', 'Cabriolet']),
  },
  '9-5': {
    ...yr(1997, 2010, ['Linear', 'Arc', 'Aero', 'Vector']),
    ...yr(2010, 2011, ['Aero', 'Vector']),
  },
  '9-7X': yr(2005, 2009, ['Linear', 'Arc', 'Aero']),
  '9-3X': yr(2009, 2011, ['base', 'Aero']),
};

// ── FERRARI ──────────────────────────────────────────────────────────────────
makes['Ferrari'] = {
  '308 GTB': { ...yr(1975, 1980, ['Carb']), ...yr(1980, 1985, ['Injection']) },
  '308 GTS': { ...yr(1977, 1980, ['Carb']), ...yr(1980, 1985, ['Injection']) },
  '328 GTB': yr(1985, 1989, ['base']),
  '328 GTS': yr(1985, 1989, ['base']),
  '348': yr(1989, 1994, ['tb', 'ts', 'Spider']),
  'F355': yr(1994, 1999, ['Berlinetta', 'Spider', 'GTS']),
  '360 Modena': yr(1999, 2005, ['Coupe', 'Spider', 'Challenge Stradale']),
  'F430': yr(2004, 2009, ['Coupe', 'Spider', 'Scuderia']),
  '458 Italia': yr(2009, 2015, ['Italia', 'Spider', 'Speciale']),
  '488 GTB': yr(2015, 2020, ['GTB', 'Spider', 'Pista']),
  'F8 Tributo': yr(2019, 2023, ['Tributo', 'Spider']),
  'Testarossa': yr(1984, 1991, ['base']),
  '512 TR': yr(1991, 1994, ['base']),
  'F512 M': yr(1994, 1996, ['base']),
  'F40': yr(1987, 1992, ['base']),
  'F50': yr(1995, 1997, ['base']),
  'Enzo': yr(2002, 2004, ['base']),
  'LaFerrari': yr(2013, 2016, ['Coupe', 'Aperta']),
  'California': yr(2008, 2014, ['base', 'T']),
  'California T': yr(2012, 2017, ['base']),
  'Portofino': yr(2017, 2023, ['base', 'M']),
  '599 GTB': yr(2006, 2012, ['Fiorano', 'HGTE']),
  '612 Scaglietti': yr(2004, 2011, ['base', 'One to One']),
  'FF': yr(2011, 2016, ['base']),
  'GTC4Lusso': yr(2016, 2020, ['base', 'T']),
  '812 Superfast': yr(2017, 2023, ['Superfast', 'Competizione']),
  'SF90 Stradale': yr(2019, 2023, ['Stradale', 'Spider']),
  'Roma': yr(2019, 2023, ['base', 'Spider']),
  '550 Maranello': yr(1996, 2002, ['base']),
  '575M Maranello': yr(2002, 2006, ['base', 'Superamerica']),
  '456': yr(1992, 2003, ['GT', 'GTA', 'M GT']),
  'Dino 246': yr(1969, 1974, ['GT', 'GTS']),
  '365 GTB/4': yr(1968, 1973, ['Daytona']),
};

// ── LAMBORGHINI ───────────────────────────────────────────────────────────────
makes['Lamborghini'] = {
  'Miura': yr(1966, 1972, ['P400', 'P400 S', 'P400 SV']),
  'Espada': yr(1968, 1978, ['400 GT', 'Series II', 'Series III']),
  'Urraco': yr(1972, 1979, ['P250', 'P300']),
  'Countach': {
    ...yr(1974, 1982, ['LP400', 'LP400 S']),
    ...yr(1982, 1990, ['LP500 S', 'LP5000 QV', 'Anniversary']),
  },
  'Jalpa': yr(1981, 1988, ['3.5']),
  'Diablo': {
    ...yr(1990, 1993, ['base']),
    ...yr(1993, 1998, ['VT', 'SE30', 'Roadster']),
    ...yr(1998, 2001, ['SV', 'GT', '6.0', '6.0 SE']),
  },
  'Murcielago': {
    ...yr(2001, 2006, ['Coupe', 'Roadster']),
    ...yr(2006, 2010, ['LP640', 'LP640 Roadster', 'LP670-4 SV']),
  },
  'Gallardo': {
    ...yr(2003, 2008, ['Coupe', 'Spyder', 'SE']),
    ...yr(2008, 2013, ['LP550-2', 'LP560-4', 'LP570-4 Superleggera', 'Spyder']),
  },
  'Aventador': {
    ...yr(2011, 2016, ['LP700-4', 'LP700-4 Roadster']),
    ...yr(2016, 2022, ['LP740-4 S', 'SVJ', 'SVJ Roadster', 'Ultimae']),
  },
  'Huracan': {
    ...yr(2014, 2019, ['LP610-4', 'LP580-2', 'Performante', 'Spyder']),
    ...yr(2019, 2024, ['Evo', 'Evo Spyder', 'STO', 'Tecnica']),
  },
  'Urus': { ...yr(2018, 2022, ['base']), ...yr(2022, 2024, ['S', 'Performante']) },
  'LM002': yr(1986, 1993, ['base']),
  'Revuelto': yr(2023, 2024, ['base']),
};

// ── MASERATI ──────────────────────────────────────────────────────────────────
makes['Maserati'] = {
  'Ghibli Classic': yr(1966, 1973, ['4.7', '4.9 SS']),
  'Bora': yr(1971, 1978, ['4.7', '4.9']),
  'Merak': yr(1972, 1983, ['base', 'SS', '2000GT']),
  'Khamsin': yr(1974, 1982, ['base']),
  'Quattroporte III': yr(1976, 1990, ['base', 'Royale']),
  'Biturbo': { ...yr(1981, 1988, ['base', 'S', 'Si']), ...yr(1988, 1994, ['2.24v', '228', 'Racing']) },
  '3200GT': yr(1998, 2002, ['base', 'Assetto Corsa']),
  'Coupe': yr(2001, 2007, ['base', 'GranSport']),
  'Spyder': yr(2001, 2007, ['base', 'GT', 'GranSport']),
  'Quattroporte V': yr(2003, 2012, ['base', 'Executive GT', 'Sport GT S', 'GTS']),
  'GranTurismo': {
    ...yr(2007, 2012, ['base', 'S', 'S Automatic']),
    ...yr(2012, 2019, ['Sport', 'MC Stradale', 'Convertible']),
  },
  'GranCabrio': yr(2010, 2019, ['base', 'S', 'Sport', 'MC']),
  'Ghibli': { ...yr(2013, 2020, ['base', 'S', 'SQ4']), ...yr(2020, 2023, ['GT', 'Modena', 'Trofeo']) },
  'Quattroporte': { ...yr(2013, 2020, ['base', 'S', 'SQ4', 'GTS']), ...yr(2020, 2023, ['GT', 'Modena', 'Trofeo']) },
  'Levante': { ...yr(2016, 2020, ['base', 'S', 'GTS']), ...yr(2020, 2023, ['GT', 'Modena', 'Trofeo']) },
  'Grecale': yr(2022, 2024, ['GT', 'Modena', 'Trofeo', 'Folgore']),
  'MC20': yr(2020, 2024, ['Coupe', 'Cielo']),
};

// ── PONTIAC ───────────────────────────────────────────────────────────────────
makes['Pontiac'] = {
  'Firebird': {
    ...yr(1967, 1969, ['base', '400']),
    ...yr(1970, 1981, ['base', 'Esprit', 'Formula', 'Trans Am']),
    ...yr(1982, 1992, ['base', 'SE', 'Formula', 'Trans Am', 'Trans Am GTA']),
    ...yr(1993, 2002, ['base', 'Formula', 'Trans Am', 'Trans Am WS6']),
  },
  'GTO': {
    ...yr(1964, 1974, ['base', 'Judge', 'The Judge']),
    ...yr(2004, 2006, ['base']),
  },
  'Grand Prix': {
    ...yr(1969, 1987, ['base', 'SJ', 'Brougham']),
    ...yr(1988, 2003, ['base', 'SE', 'GTP', 'GT']),
  },
  'Bonneville': {
    ...yr(1957, 1986, ['base', 'Brougham']),
    ...yr(1987, 2005, ['SE', 'SSE', 'SSEi', 'GXP']),
  },
  'Grand Am': {
    ...yr(1973, 1980, ['base', 'LE']),
    ...yr(1985, 1998, ['SE', 'GT']),
    ...yr(1999, 2005, ['SE', 'SE1', 'GT', 'GT1']),
  },
  'Catalina': yr(1959, 1981, ['base', 'Brougham', 'Safari']),
  'Ventura': yr(1971, 1977, ['base', 'Sprint', 'SJ']),
  'Phoenix': yr(1977, 1984, ['base', 'SJ', 'LJ']),
  'Tempest': yr(1961, 1970, ['base', 'Custom', 'LeMans']),
  'LeMans': yr(1964, 1981, ['base', 'Sport', 'GT']),
  'Safari': yr(1955, 1989, ['base', 'Custom']),
  'Aztek': yr(2001, 2005, ['base', 'GT']),
  'Vibe': yr(2002, 2010, ['base', 'GT', 'AWD']),
  'Solstice': yr(2006, 2009, ['base', 'GXP']),
  'Montana': yr(1997, 2009, ['base', 'SV6', 'AWD']),
  'Sunbird': yr(1976, 1994, ['base', 'SE', 'GT']),
  'Sunfire': yr(1994, 2005, ['base', 'SE', 'GT']),
};

// ── CHRYSLER ──────────────────────────────────────────────────────────────────
makes['Chrysler'] = {
  'Valiant': {
    ...yr(1962, 1965, ['R-Series', 'S-Series']),
    ...yr(1965, 1967, ['AP6 base', 'AP6 Regal', 'V8 Commando']),
    ...yr(1966, 1969, ['VC base', 'VC Regal', 'VC Pacer']),
    ...yr(1969, 1971, ['VF base', 'VF Regal', 'Charger']),
    ...yr(1971, 1973, ['VH base', 'VH Regal', 'Charger']),
    ...yr(1973, 1975, ['VJ base', 'VJ Regal', 'Charger']),
    ...yr(1975, 1978, ['CL base', 'CL Ranger', 'CL Regal']),
    ...yr(1978, 1981, ['CM base', 'CM Ranger', 'CM Regal']),
  },
  '300C': {
    ...yr(2004, 2010, ['base', 'Touring', 'SRT8']),
    ...yr(2011, 2023, ['base', 'Touring', 'S', 'SRT8']),
  },
  'Grand Voyager': {
    ...yr(1987, 2001, ['base', 'LE', 'ES']),
    ...yr(2001, 2016, ['base', 'Limited', 'Grand Voyager']),
  },
  'PT Cruiser': yr(2000, 2010, ['base', 'Classic', 'GT', 'Touring']),
  'Crossfire': yr(2003, 2008, ['base', 'Roadster', 'SRT-6']),
  'Neon': yr(1994, 2005, ['base', 'Sport', 'R/T', 'SRT-4']),
  'Sebring': {
    ...yr(1994, 2006, ['base', 'LX', 'JXi', 'Limited']),
    ...yr(2007, 2010, ['base', 'Touring', 'Limited']),
  },
  '200': yr(2011, 2017, ['base', 'Touring', 'Limited', 'S', 'C']),
  'Pacifica': yr(2016, 2024, ['base', 'Touring', 'Limited', 'Pinnacle', 'Hybrid']),
  'Delta': yr(2008, 2014, ['base', 'Sport', 'Limited']),
};

// ── CITROËN ───────────────────────────────────────────────────────────────────
makes['Citroën'] = {
  '2CV': {
    ...yr(1948, 1970, ['A', 'AZ']),
    ...yr(1970, 1990, ['6', 'Special', 'Charleston', 'Dolly']),
  },
  'DS': yr(1955, 1975, ['19', '20', '21', '23', 'Pallas', 'Cabriolet']),
  'SM': yr(1970, 1975, ['base', 'Injection']),
  'CX': yr(1974, 1991, ['Athena', 'Pallas', 'GTi', 'Prestige', 'Turbo']),
  'BX': yr(1982, 1994, ['14', '16', '19', 'GTI', '4x4']),
  'ZX': yr(1991, 1997, ['Advantage', 'Avantage', 'Volcane', 'Aura']),
  'Xantia': yr(1993, 2001, ['base', 'SX', 'VSX', 'Activa', 'V6']),
  'Saxo': yr(1996, 2004, ['base', 'SX', 'VTR', 'VTS']),
  'XM': yr(1989, 2000, ['base', 'V6', 'Turbo CT', 'Y4']),
  'C3': {
    ...yr(2002, 2010, ['base', 'Exclusive', 'SX', 'Pluriel']),
    ...yr(2010, 2023, ['Attraction', 'Seduction', 'Exclusive', 'Shine']),
  },
  'C4': {
    ...yr(2004, 2011, ['base', 'Exclusive', 'VTR+', 'Coupe']),
    ...yr(2011, 2023, ['Attraction', 'Exclusive', 'Shine', 'e-C4']),
  },
  'C5': {
    ...yr(2001, 2008, ['Comfort', 'Exclusive', 'SX', 'V6']),
    ...yr(2008, 2017, ['Comfort', 'Exclusive', 'Tourer', 'GT']),
  },
  'C6': yr(2005, 2012, ['base', 'Exclusive', 'V6']),
  'C-Crosser': yr(2007, 2012, ['base', 'SX', 'Exclusive']),
  'Berlingo': {
    ...yr(1996, 2008, ['base', 'Multispace', 'XTR']),
    ...yr(2008, 2023, ['base', 'Multispace', 'XTR', 'Feel']),
  },
  'Picasso': yr(1999, 2016, ['base', 'SX', 'Exclusive', 'Dynamique']),
  'C4 Picasso': yr(2006, 2023, ['base', 'Exclusive', 'Intensive', 'Shine']),
  'Grand C4 Picasso': yr(2006, 2023, ['base', 'Exclusive', 'Intensive']),
  'DS3': yr(2009, 2019, ['DStyle', 'DSport', 'Performance', 'Cabrio']),
  'DS4': yr(2010, 2018, ['base', 'Sport', 'Chic']),
  'DS5': yr(2011, 2018, ['base', 'Sport', 'Hybrid4']),
  'Ami': yr(2020, 2024, ['base']),
};

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2));
console.log('Done. Total makes:', Object.keys(makes).length);
const total = Object.values(makes).reduce((a, models) =>
  a + Object.values(models).reduce((b, years) =>
    b + Object.values(years).reduce((c, trims) => c + trims.length, 0), 0), 0);
console.log('Total entries:', total);
