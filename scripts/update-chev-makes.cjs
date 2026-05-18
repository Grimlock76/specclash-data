// update-chev-makes.cjs — add every Chevrolet model/trim to makes.json
const fs = require('fs')
const makes = JSON.parse(fs.readFileSync('src/data/makes.json', 'utf8'))

if (!makes['Chevrolet']) makes['Chevrolet'] = {}
const chev = makes['Chevrolet']

function addModel(model, yearsObj) {
  if (!chev[model]) chev[model] = {}
  for (const [year, trims] of Object.entries(yearsObj)) {
    if (!chev[model][String(year)]) chev[model][String(year)] = trims
  }
}

// ── Corvette (extend C1-C4, 1953-1996) ───────────────────────────────────────
addModel('Corvette', {
  1953: ['Base'], 1954: ['Base'], 1955: ['Base'],
  1956: ['Base', 'Fuel Injection'], 1957: ['Base', 'Fuel Injection'],
  1958: ['Base', 'Fuel Injection'], 1959: ['Base', 'Fuel Injection'],
  1960: ['Base', 'Fuel Injection'], 1961: ['Base', 'Fuel Injection'],
  1962: ['Base', 'Fuel Injection'],
  1963: ['Sting Ray', 'Sting Ray Z06'], 1964: ['Sting Ray', 'Sting Ray Z06'],
  1965: ['Sting Ray', 'Sting Ray Z06'], 1966: ['Sting Ray'],
  1967: ['Sting Ray', 'Sting Ray L88'],
  1968: ['Base', 'LT'], 1969: ['Base', 'LT'], 1970: ['Base', 'LT'],
  1971: ['Base', 'LT'], 1972: ['Base', 'LT'], 1973: ['Base', 'LT'],
  1974: ['Base', 'LT'], 1975: ['Base'], 1976: ['Base'], 1977: ['Base'],
  1978: ['Base', 'Pace Car'], 1979: ['Base'], 1980: ['Base'], 1981: ['Base'],
  1982: ['Base', 'Collector Edition'],
  1984: ['Base'], 1985: ['Base'],
  1986: ['Base', 'Z51'], 1987: ['Base', 'Z51'], 1988: ['Base', 'Z51'],
  1989: ['Base', 'Z51'], 1990: ['Base', 'Z51'],
  1991: ['Base', 'ZR-1'], 1992: ['Base', 'ZR-1'],
  1993: ['Base', '40th Anniversary', 'ZR-1'],
  1994: ['Base', 'ZR-1'], 1995: ['Base', 'ZR-1'],
  1996: ['Base', 'Grand Sport', 'Collector Edition'],
})

// ── Camaro (extend Gen1-4: 1967-2002, add 2024) ──────────────────────────────
addModel('Camaro', {
  1967: ['Base', 'SS 350', 'SS 396', 'Z28'],
  1968: ['Base', 'SS 350', 'SS 396', 'Z28'],
  1969: ['Base', 'SS 350', 'SS 396', 'Z28', 'ZL1'],
  1970: ['Base', 'SS', 'Z28'], 1971: ['Base', 'SS', 'Z28'],
  1972: ['Base', 'SS', 'Z28'],
  1973: ['Base', 'LT', 'Z28'], 1974: ['Base', 'LT', 'Z28'],
  1975: ['Base', 'LT', 'Z28'], 1976: ['Base', 'LT', 'Z28'],
  1977: ['Base', 'LT', 'Z28'],
  1978: ['Base', 'Berlinetta', 'Z28'], 1979: ['Base', 'Berlinetta', 'Z28'],
  1980: ['Base', 'Berlinetta', 'Z28'], 1981: ['Base', 'Berlinetta', 'Z28'],
  1982: ['Base', 'Berlinetta', 'Z28'], 1983: ['Base', 'Berlinetta', 'Z28'],
  1984: ['Base', 'Berlinetta', 'Z28'],
  1985: ['Base', 'Berlinetta', 'Z28', 'IROC-Z'],
  1986: ['Base', 'Z28', 'IROC-Z'],
  1987: ['Base', 'RS', 'Z28', 'IROC-Z'],
  1988: ['Base', 'RS', 'Z28', 'IROC-Z'],
  1989: ['Base', 'RS', 'Z28', 'IROC-Z'],
  1990: ['Base', 'RS', 'Z28'], 1991: ['Base', 'RS', 'Z28'],
  1992: ['Base', 'RS', 'Z28', 'Heritage Edition'],
  1993: ['Base', 'Z28'], 1994: ['Base', 'Z28'], 1995: ['Base', 'Z28'],
  1996: ['Base', 'RS', 'Z28', 'SS'],
  1997: ['Base', 'RS', 'Z28', 'SS'], 1998: ['Base', 'RS', 'Z28', 'SS'],
  1999: ['Base', 'RS', 'Z28', 'SS'], 2000: ['Base', 'RS', 'Z28', 'SS'],
  2001: ['Base', 'RS', 'Z28', 'SS'], 2002: ['Base', 'RS', 'Z28', 'SS'],
  2024: ['LT', 'SS', 'ZL1'],
})

// ── Impala (1958-1985, 1994-1996, 2000-2020) ─────────────────────────────────
addModel('Impala', {
  1958: ['Base', 'SS'], 1959: ['Base', 'SS'], 1960: ['Base', 'SS'],
  1961: ['Base', 'SS', 'SS 409'], 1962: ['Base', 'SS', 'SS 409'],
  1963: ['Base', 'SS', 'SS 409'], 1964: ['Base', 'SS', 'SS 409'],
  1965: ['Base', 'SS', 'SS 396'], 1966: ['Base', 'SS', 'SS 396'],
  1967: ['Base', 'SS', 'SS 427'],
  1968: ['Base', 'SS', 'SS 396', 'SS 427'],
  1969: ['Base', 'SS', 'SS 396', 'SS 427'],
  1970: ['Base', 'SS', 'SS 396', 'SS 427'],
  1971: ['Base', 'Custom'], 1972: ['Base', 'Custom'],
  1973: ['Base', 'Custom'], 1974: ['Base', 'Custom'],
  1975: ['Base', 'Custom'], 1976: ['Base', 'Custom'],
  1977: ['Base'], 1978: ['Base'], 1979: ['Base'],
  1980: ['Base'], 1981: ['Base'], 1982: ['Base'],
  1983: ['Base'], 1984: ['Base'], 1985: ['Base'],
  1994: ['SS'], 1995: ['SS'], 1996: ['SS'],
  2000: ['Base', 'LS'], 2001: ['Base', 'LS'], 2002: ['Base', 'LS'],
  2003: ['Base', 'LS'], 2004: ['Base', 'LS'], 2005: ['Base', 'LS'],
  2006: ['Base', 'LT', 'LTZ', 'SS'], 2007: ['Base', 'LT', 'LTZ', 'SS'],
  2008: ['Base', 'LT', 'LTZ', 'SS'], 2009: ['Base', 'LT', 'LTZ', 'SS'],
  2010: ['Base', 'LT', 'LTZ'], 2011: ['Base', 'LT', 'LTZ'],
  2012: ['Base', 'LT', 'LTZ'], 2013: ['Base', 'LT', 'LTZ'],
  2014: ['LS', 'LT', 'LTZ', 'Premier'],
  2015: ['LS', 'LT', 'LTZ', 'Premier'],
  2016: ['LS', 'LT', 'LTZ', 'Premier'],
  2017: ['LS', 'LT', 'LTZ', 'Premier'],
  2018: ['LS', 'LT', 'LTZ', 'Premier'],
  2019: ['LS', 'LT', 'Premier'], 2020: ['LS', 'LT', 'Premier'],
})

// ── Bel Air (1953-1975) ───────────────────────────────────────────────────────
addModel('Bel Air', {
  1953: ['Base'], 1954: ['Base'],
  1955: ['Base', 'V8'], 1956: ['Base', 'V8'], 1957: ['Base', 'V8', 'Fuel Injection'],
  1958: ['Base'], 1959: ['Base'], 1960: ['Base'],
  1961: ['Base'], 1962: ['Base'], 1963: ['Base'],
  1964: ['Base'], 1965: ['Base'], 1966: ['Base'],
  1967: ['Base'], 1968: ['Base'], 1969: ['Base'],
  1970: ['Base'], 1971: ['Base'], 1972: ['Base'],
  1973: ['Base'], 1974: ['Base'], 1975: ['Base'],
})

// ── Chevelle (1964-1977) ──────────────────────────────────────────────────────
addModel('Chevelle', {
  1964: ['Base', 'Malibu', 'Malibu SS'],
  1965: ['Base', 'Malibu', 'Malibu SS'],
  1966: ['Base', 'Malibu', 'Malibu SS', 'SS 396'],
  1967: ['Base', 'Malibu', 'Malibu SS', 'SS 396'],
  1968: ['Base', 'Malibu', 'SS 396'],
  1969: ['Base', 'Malibu', 'SS 396', 'COPO 427'],
  1970: ['Base', 'Malibu', 'SS 396', 'SS 454', 'LS6'],
  1971: ['Base', 'Malibu', 'SS 454', 'Heavy Chevy'],
  1972: ['Base', 'Malibu', 'SS 454', 'Heavy Chevy'],
  1973: ['Base', 'Malibu', 'Malibu Classic', 'Laguna'],
  1974: ['Base', 'Malibu', 'Malibu Classic', 'Laguna'],
  1975: ['Base', 'Malibu', 'Malibu Classic', 'Laguna S-3'],
  1976: ['Base', 'Malibu', 'Malibu Classic', 'Laguna'],
  1977: ['Base', 'Malibu', 'Malibu Classic'],
})

// ── Nova (1962-1979, 1985-1988) ───────────────────────────────────────────────
addModel('Nova', {
  1962: ['Base', 'SS'], 1963: ['Base', 'SS'],
  1964: ['Base', 'SS'], 1965: ['Base', 'SS'],
  1966: ['Base', 'SS', 'SS 396'], 1967: ['Base', 'SS', 'SS 396'],
  1968: ['Base', 'SS', 'SS 396'], 1969: ['Base', 'SS', 'SS 396'],
  1970: ['Base', 'SS', 'SS 396'],
  1971: ['Base', 'SS'], 1972: ['Base', 'SS'],
  1973: ['Base', 'LN', 'SS'], 1974: ['Base', 'LN', 'SS'],
  1975: ['Base', 'LN'], 1976: ['Base', 'LN', 'Concours'],
  1977: ['Base', 'Concours'], 1978: ['Base', 'Custom'],
  1979: ['Base', 'Custom'],
  1985: ['Base'], 1986: ['Base'], 1987: ['Base'], 1988: ['Base'],
})

// ── Monte Carlo (1970-1988, 1995-2007) ───────────────────────────────────────
addModel('Monte Carlo', {
  1970: ['Base', 'SS'], 1971: ['Base', 'SS'], 1972: ['Base', 'SS'],
  1973: ['Base', 'Landau'], 1974: ['Base', 'Landau'],
  1975: ['Base', 'Landau'], 1976: ['Base', 'Landau'], 1977: ['Base', 'Landau'],
  1978: ['Base', 'Landau', 'T-Top'], 1979: ['Base', 'Landau', 'T-Top'],
  1980: ['Base', 'Turbo', 'T-Top'],
  1981: ['Base', 'CL', 'SS'], 1982: ['Base', 'CL', 'SS'],
  1983: ['Base', 'CL', 'SS'], 1984: ['Base', 'CL', 'SS'],
  1985: ['Base', 'CL', 'SS', 'LS'],
  1986: ['Base', 'CL', 'SS', 'LS'], 1987: ['Base', 'CL', 'SS', 'LS'],
  1988: ['Base', 'CL', 'SS', 'LS'],
  1995: ['Base', 'LS', 'Z34'], 1996: ['Base', 'LS', 'Z34'],
  1997: ['Base', 'LS', 'Z34'], 1998: ['Base', 'LS', 'Z34'],
  1999: ['Base', 'LS', 'Z34'],
  2000: ['Base', 'LS', 'SS'], 2001: ['Base', 'LS', 'SS'],
  2002: ['Base', 'LS', 'SS'], 2003: ['Base', 'LS', 'SS'],
  2004: ['Base', 'LT', 'SS', 'Supercharged SS'],
  2005: ['Base', 'LT', 'SS', 'Supercharged SS'],
  2006: ['Base', 'LT', 'SS', 'Supercharged SS'],
  2007: ['Base', 'LT', 'SS', 'Supercharged SS'],
})

// ── Malibu (1964-1983, 1997-2024) ────────────────────────────────────────────
addModel('Malibu', {
  1964: ['Base', 'SS'], 1965: ['Base', 'SS'],
  1966: ['Base', 'SS'], 1967: ['Base', 'SS'],
  1968: ['Base', 'SS'], 1969: ['Base', 'SS', 'SS 396'],
  1970: ['Base', 'SS', 'SS 396'],
  1971: ['Base', 'SS'], 1972: ['Base', 'SS'],
  1973: ['Base', 'Classic'], 1974: ['Base', 'Classic'],
  1975: ['Base', 'Classic'], 1976: ['Base', 'Classic'],
  1977: ['Base', 'Classic'], 1978: ['Base', 'Classic'],
  1979: ['Base', 'Classic'], 1980: ['Base', 'Classic'],
  1981: ['Base', 'Classic'], 1982: ['Base', 'Classic'],
  1983: ['Base', 'Classic'],
  1997: ['Base', 'LS'], 1998: ['Base', 'LS'], 1999: ['Base', 'LS'],
  2000: ['Base', 'LS'], 2001: ['Base', 'LS'], 2002: ['Base', 'LS'],
  2003: ['Base', 'LS'],
  2004: ['Base', 'LT', 'Maxx LS', 'Maxx LT'],
  2005: ['Base', 'LT', 'Maxx LS', 'Maxx LT'],
  2006: ['Base', 'LT', 'Maxx LS', 'Maxx LT'],
  2007: ['Base', 'LT', 'Maxx LS', 'Maxx LT'],
  2008: ['LS', 'LT', 'LTZ'], 2009: ['LS', 'LT', 'LTZ'],
  2010: ['LS', 'LT', 'LTZ'], 2011: ['LS', 'LT', 'LTZ'],
  2012: ['LS', 'LT', 'LTZ'], 2013: ['LS', 'LT', 'LTZ'],
  2014: ['LS', 'LT', 'LTZ'], 2015: ['LS', 'LT', 'LTZ'],
  2016: ['L', 'LS', 'LT', 'Premier'], 2017: ['L', 'LS', 'LT', 'Premier'],
  2018: ['L', 'LS', 'LT', 'RS', 'Premier'],
  2019: ['L', 'LS', 'LT', 'RS', 'Premier'],
  2020: ['L', 'LS', 'LT', 'RS', 'Premier'],
  2021: ['L', 'LS', 'LT', 'RS', 'Premier'],
  2022: ['L', 'LS', 'LT', 'RS', 'Premier'],
  2023: ['L', 'LS', 'LT', 'RS', 'Premier'],
  2024: ['L', 'LS', 'LT', 'RS', 'Premier'],
})

// ── El Camino (1959-1960, 1964-1987) ─────────────────────────────────────────
addModel('El Camino', {
  1959: ['Base'], 1960: ['Base'],
  1964: ['Base', 'Custom', 'SS'],
  1965: ['Base', 'Custom', 'SS'],
  1966: ['Base', 'Custom', 'SS'],
  1967: ['Base', 'Custom', 'SS'],
  1968: ['Base', 'Custom', 'SS 396'],
  1969: ['Base', 'Custom', 'SS 396'],
  1970: ['Base', 'Custom', 'SS 396', 'SS 454'],
  1971: ['Base', 'Custom', 'SS 454', 'Heavy Chevy'],
  1972: ['Base', 'Custom', 'SS 454', 'Heavy Chevy'],
  1973: ['Base', 'Classic', 'SS'],
  1974: ['Base', 'Classic', 'SS'],
  1975: ['Base', 'Classic', 'SS'],
  1976: ['Base', 'Classic', 'SS'],
  1977: ['Base', 'Classic', 'SS'],
  1978: ['Base', 'Classic', 'SS', 'Royal Knight'],
  1979: ['Base', 'Classic', 'SS', 'Royal Knight'],
  1980: ['Base', 'Royal Knight', 'SS'],
  1981: ['Base', 'Royal Knight', 'SS'],
  1982: ['Base', 'Royal Knight', 'SS'],
  1983: ['Base', 'Royal Knight', 'SS'],
  1984: ['Base', 'Royal Knight', 'SS'],
  1985: ['Base', 'SS'], 1986: ['Base', 'SS'], 1987: ['Base', 'SS'],
})

// ── Caprice (1965-1996) ───────────────────────────────────────────────────────
addModel('Caprice', {
  1965: ['Base', 'Custom'], 1966: ['Base', 'Custom'],
  1967: ['Base', 'Custom'], 1968: ['Base', 'Custom'], 1969: ['Base', 'Custom'],
  1970: ['Base', 'Classic'], 1971: ['Base', 'Classic'],
  1972: ['Base', 'Classic'], 1973: ['Base', 'Classic'],
  1974: ['Base', 'Classic'], 1975: ['Base', 'Classic'],
  1976: ['Base', 'Classic'], 1977: ['Base', 'Classic'],
  1978: ['Base', 'Classic'], 1979: ['Base', 'Classic'],
  1980: ['Base', 'Classic'], 1981: ['Base', 'Classic'],
  1982: ['Base', 'Classic'], 1983: ['Base', 'Classic'],
  1984: ['Base', 'Classic'],
  1985: ['Base', 'Classic', 'Brougham'],
  1986: ['Base', 'Classic', 'Brougham'],
  1987: ['Base', 'Classic', 'Brougham'],
  1988: ['Base', 'Classic', 'Brougham'],
  1989: ['Base', 'Classic', 'Brougham'],
  1990: ['Base', 'Classic', 'Brougham'],
  1991: ['Base', 'Classic', 'Brougham'],
  1992: ['Base', 'Classic', 'Brougham'],
  1993: ['Base', 'Classic', 'Brougham'],
  1994: ['Base', 'Classic', 'Brougham'],
  1995: ['Base', 'Classic', 'Brougham'],
  1996: ['Base', 'Classic'],
})

// ── Corvair (1960-1969) ───────────────────────────────────────────────────────
addModel('Corvair', {
  1960: ['Base', 'Monza'], 1961: ['Base', 'Monza'],
  1962: ['Base', 'Monza', 'Spyder'],
  1963: ['Base', 'Monza', 'Spyder'],
  1964: ['Base', 'Monza', 'Spyder'],
  1965: ['500', 'Monza', 'Corsa'],
  1966: ['500', 'Monza', 'Corsa'],
  1967: ['500', 'Monza'], 1968: ['500', 'Monza'], 1969: ['500', 'Monza'],
})

// ── Silverado (1999-2024) ─────────────────────────────────────────────────────
addModel('Silverado', {
  1999: ['Base', 'LS', 'LT', 'Z71'],
  2000: ['Base', 'LS', 'LT', 'Z71'],
  2001: ['Base', 'LS', 'LT', 'Z71'],
  2002: ['Base', 'LS', 'LT', 'Z71'],
  2003: ['Base', 'LS', 'LT', 'Z71'],
  2004: ['Base', 'LS', 'LT', 'Z71'],
  2005: ['Base', 'LS', 'LT', 'Z71'],
  2006: ['Base', 'LS', 'LT', 'Z71'],
  2007: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2008: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2009: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2010: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2011: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2012: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2013: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2014: ['Base', 'LS', 'LT', 'LTZ', 'High Country', 'Z71'],
  2015: ['Base', 'LS', 'LT', 'LTZ', 'High Country', 'Z71'],
  2016: ['Base', 'LS', 'LT', 'LTZ', 'High Country', 'Z71'],
  2017: ['Base', 'LS', 'LT', 'LTZ', 'High Country', 'Z71'],
  2018: ['Base', 'LS', 'LT', 'LTZ', 'High Country', 'Z71'],
  2019: ['WT', 'Custom', 'LT', 'RST', 'LTZ', 'High Country', 'Trail Boss', 'ZR2'],
  2020: ['WT', 'Custom', 'LT', 'RST', 'LTZ', 'High Country', 'Trail Boss', 'ZR2'],
  2021: ['WT', 'Custom', 'LT', 'RST', 'LTZ', 'High Country', 'Trail Boss', 'ZR2'],
  2022: ['WT', 'Custom', 'LT', 'RST', 'LTZ', 'High Country', 'Trail Boss', 'ZR2'],
  2023: ['WT', 'Custom', 'LT', 'RST', 'LTZ', 'High Country', 'Trail Boss', 'ZR2'],
  2024: ['WT', 'Custom', 'LT', 'RST', 'LTZ', 'High Country', 'Trail Boss', 'ZR2'],
})

// ── Colorado (2004-2024) ──────────────────────────────────────────────────────
addModel('Colorado', {
  2004: ['Base', 'LS', 'LT', 'Z71'],
  2005: ['Base', 'LS', 'LT', 'Z71'],
  2006: ['Base', 'LS', 'LT', 'Z71'],
  2007: ['Base', 'LS', 'LT', 'Z71'],
  2008: ['Base', 'LS', 'LT', 'Z71'],
  2009: ['Base', 'LS', 'LT', 'Z71'],
  2010: ['Base', 'LS', 'LT', 'Z71'],
  2011: ['Base', 'LS', 'LT', 'Z71'],
  2012: ['Base', 'LS', 'LT', 'Z71'],
  2015: ['WT', 'LT', 'Z71', 'ZR2'],
  2016: ['WT', 'LT', 'Z71', 'ZR2'],
  2017: ['WT', 'LT', 'Z71', 'ZR2'],
  2018: ['WT', 'LT', 'Z71', 'ZR2'],
  2019: ['WT', 'LT', 'Z71', 'ZR2'],
  2020: ['WT', 'LT', 'Z71', 'ZR2'],
  2021: ['WT', 'LT', 'Z71', 'ZR2'],
  2022: ['WT', 'LT', 'Z71', 'ZR2'],
  2023: ['LT', 'Trail Boss', 'Z71', 'ZR2'],
  2024: ['LT', 'Trail Boss', 'Z71', 'ZR2'],
})

// ── Blazer K5 (1969-1994) ─────────────────────────────────────────────────────
addModel('Blazer K5', {
  1969: ['Base'], 1970: ['Base'], 1971: ['Base'], 1972: ['Base'],
  1973: ['Base', 'Cheyenne'], 1974: ['Base', 'Cheyenne'],
  1975: ['Base', 'Cheyenne'], 1976: ['Base', 'Cheyenne'],
  1977: ['Base', 'Cheyenne'],
  1978: ['Base', 'Silverado'], 1979: ['Base', 'Silverado'],
  1980: ['Base', 'Silverado'], 1981: ['Base', 'Silverado'],
  1982: ['Base', 'Silverado'], 1983: ['Base', 'Silverado'],
  1984: ['Base', 'Silverado'], 1985: ['Base', 'Silverado'],
  1986: ['Base', 'Silverado'], 1987: ['Base', 'Silverado'],
  1988: ['Base', 'Silverado'], 1989: ['Base', 'Silverado'],
  1990: ['Base', 'Silverado'], 1991: ['Base', 'Silverado'],
  1992: ['Base', 'Silverado'], 1993: ['Base', 'Silverado'],
  1994: ['Base', 'Silverado'],
})

// ── Blazer (2019-2024) ────────────────────────────────────────────────────────
addModel('Blazer', {
  2019: ['LT', 'RS', 'Premier'],
  2020: ['LT', 'RS', 'Premier'],
  2021: ['LT', 'RS', 'Premier'],
  2022: ['LT', 'RS', 'Premier'],
  2023: ['LT', 'RS', 'Premier'],
  2024: ['LT', 'RS', 'Premier'],
})

// ── S-10 (1982-2004) ──────────────────────────────────────────────────────────
addModel('S-10', {
  1982: ['Base', 'S'],
  1983: ['Base', 'S', 'Tahoe'], 1984: ['Base', 'S', 'Tahoe'],
  1985: ['Base', 'S', 'Tahoe'], 1986: ['Base', 'S', 'Tahoe'],
  1987: ['Base', 'S', 'Tahoe'], 1988: ['Base', 'S', 'Tahoe'],
  1989: ['Base', 'S', 'Tahoe'], 1990: ['Base', 'Tahoe'],
  1991: ['Base', 'Tahoe'], 1992: ['Base', 'Tahoe'],
  1993: ['Base', 'Tahoe'],
  1994: ['Base', 'LS', 'Tahoe'],
  1995: ['Base', 'LS', 'ZR2'], 1996: ['Base', 'LS', 'ZR2'],
  1997: ['Base', 'LS', 'ZR2'], 1998: ['Base', 'LS', 'ZR2', 'Xtreme'],
  1999: ['Base', 'LS', 'ZR2', 'Xtreme'],
  2000: ['Base', 'LS', 'ZR2', 'Xtreme'],
  2001: ['Base', 'LS', 'ZR2', 'Xtreme'],
  2002: ['Base', 'LS', 'ZR2', 'Xtreme'],
  2003: ['Base', 'LS', 'ZR2', 'Xtreme'],
  2004: ['Base', 'LS', 'ZR2', 'Xtreme'],
})

// ── Tahoe (1995-2024) ─────────────────────────────────────────────────────────
addModel('Tahoe', {
  1995: ['Base', 'LS', 'LT'], 1996: ['Base', 'LS', 'LT'],
  1997: ['Base', 'LS', 'LT'], 1998: ['Base', 'LS', 'LT'],
  1999: ['Base', 'LS', 'LT'],
  2000: ['Base', 'LS', 'LT', 'Z71'],
  2001: ['Base', 'LS', 'LT', 'Z71'],
  2002: ['Base', 'LS', 'LT', 'Z71'],
  2003: ['Base', 'LS', 'LT', 'Z71'],
  2004: ['Base', 'LS', 'LT', 'Z71'],
  2005: ['Base', 'LS', 'LT', 'Z71'],
  2006: ['Base', 'LS', 'LT', 'Z71'],
  2007: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2008: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2009: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2010: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2011: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2012: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2013: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2014: ['Base', 'LS', 'LT', 'LTZ', 'Z71'],
  2015: ['LS', 'LT', 'LTZ', 'Premier'],
  2016: ['LS', 'LT', 'LTZ', 'Premier'],
  2017: ['LS', 'LT', 'LTZ', 'Premier'],
  2018: ['LS', 'LT', 'LTZ', 'Premier'],
  2019: ['LS', 'LT', 'LTZ', 'Premier'],
  2020: ['LS', 'LT', 'LTZ', 'Premier'],
  2021: ['LS', 'LT', 'LTZ', 'Premier', 'High Country', 'Z71'],
  2022: ['LS', 'LT', 'LTZ', 'Premier', 'High Country', 'Z71'],
  2023: ['LS', 'LT', 'LTZ', 'Premier', 'High Country', 'Z71'],
  2024: ['LS', 'LT', 'LTZ', 'Premier', 'High Country', 'Z71'],
})

// ── Suburban (1992-2024) ──────────────────────────────────────────────────────
addModel('Suburban', {
  1992: ['Base', 'LS', 'LT'], 1993: ['Base', 'LS', 'LT'],
  1994: ['Base', 'LS', 'LT'], 1995: ['Base', 'LS', 'LT'],
  1996: ['Base', 'LS', 'LT'], 1997: ['Base', 'LS', 'LT'],
  1998: ['Base', 'LS', 'LT'], 1999: ['Base', 'LS', 'LT'],
  2000: ['Base', 'LS', 'LT'], 2001: ['Base', 'LS', 'LT'],
  2002: ['Base', 'LS', 'LT'], 2003: ['Base', 'LS', 'LT'],
  2004: ['Base', 'LS', 'LT'], 2005: ['Base', 'LS', 'LT'],
  2006: ['Base', 'LS', 'LT'],
  2007: ['Base', 'LS', 'LT', 'LTZ'],
  2008: ['Base', 'LS', 'LT', 'LTZ'],
  2009: ['Base', 'LS', 'LT', 'LTZ'],
  2010: ['Base', 'LS', 'LT', 'LTZ'],
  2011: ['Base', 'LS', 'LT', 'LTZ'],
  2012: ['Base', 'LS', 'LT', 'LTZ'],
  2013: ['Base', 'LS', 'LT', 'LTZ'],
  2014: ['Base', 'LS', 'LT', 'LTZ'],
  2015: ['LS', 'LT', 'LTZ', 'Premier'],
  2016: ['LS', 'LT', 'LTZ', 'Premier'],
  2017: ['LS', 'LT', 'LTZ', 'Premier'],
  2018: ['LS', 'LT', 'LTZ', 'Premier'],
  2019: ['LS', 'LT', 'LTZ', 'Premier'],
  2020: ['LS', 'LT', 'LTZ', 'Premier'],
  2021: ['LS', 'LT', 'LTZ', 'Premier', 'High Country'],
  2022: ['LS', 'LT', 'LTZ', 'Premier', 'High Country'],
  2023: ['LS', 'LT', 'LTZ', 'Premier', 'High Country'],
  2024: ['LS', 'LT', 'LTZ', 'Premier', 'High Country'],
})

// ── Trailblazer (2002-2009, 2021-2024) ───────────────────────────────────────
addModel('Trailblazer', {
  2002: ['Base', 'LS', 'LT'],
  2003: ['Base', 'LS', 'LT', 'LTZ'],
  2004: ['Base', 'LS', 'LT', 'LTZ'],
  2005: ['Base', 'LS', 'LT', 'LTZ', 'SS'],
  2006: ['Base', 'LS', 'LT', 'LTZ', 'SS'],
  2007: ['Base', 'LS', 'LT', 'LTZ', 'SS'],
  2008: ['Base', 'LS', 'LT', 'LTZ', 'SS'],
  2009: ['Base', 'LS', 'LT', 'LTZ', 'SS'],
  2021: ['L', 'LS', 'LT', 'ACTIV', 'RS', 'Premier'],
  2022: ['L', 'LS', 'LT', 'ACTIV', 'RS', 'Premier'],
  2023: ['L', 'LS', 'LT', 'ACTIV', 'RS', 'Premier'],
  2024: ['L', 'LS', 'LT', 'ACTIV', 'RS', 'Premier'],
})

// ── Avalanche (2001-2013) ─────────────────────────────────────────────────────
addModel('Avalanche', {
  2001: ['Base', 'LS', 'LT', 'Z71'],
  2002: ['Base', 'LS', 'LT', 'Z71'],
  2003: ['Base', 'LS', 'LT', 'Z71'],
  2004: ['Base', 'LS', 'LT', 'Z71'],
  2005: ['Base', 'LS', 'LT', 'Z71'],
  2006: ['Base', 'LS', 'LT', 'Z71'],
  2007: ['LS', 'LT', 'LTZ'],
  2008: ['LS', 'LT', 'LTZ'],
  2009: ['LS', 'LT', 'LTZ'],
  2010: ['LS', 'LT', 'LTZ'],
  2011: ['LS', 'LT', 'LTZ'],
  2012: ['LS', 'LT', 'LTZ'],
  2013: ['LS', 'LT', 'LTZ'],
})

// ── Equinox (2005-2024) ───────────────────────────────────────────────────────
addModel('Equinox', {
  2005: ['Base', 'LS', 'LT'],
  2006: ['Base', 'LS', 'LT'],
  2007: ['Base', 'LS', 'LT'],
  2008: ['Base', 'LS', 'LT'],
  2009: ['Base', 'LS', 'LT'],
  2010: ['LS', 'LT', 'LTZ'], 2011: ['LS', 'LT', 'LTZ'],
  2012: ['LS', 'LT', 'LTZ'], 2013: ['LS', 'LT', 'LTZ'],
  2014: ['LS', 'LT', 'LTZ'], 2015: ['LS', 'LT', 'LTZ'],
  2016: ['LS', 'LT', 'LTZ'], 2017: ['LS', 'LT', 'LTZ'],
  2018: ['L', 'LS', 'LT', 'Premier'],
  2019: ['L', 'LS', 'LT', 'Premier'],
  2020: ['L', 'LS', 'LT', 'RS', 'Premier'],
  2021: ['L', 'LS', 'LT', 'RS', 'Premier'],
  2022: ['L', 'LS', 'LT', 'RS', 'Premier'],
  2023: ['L', 'LS', 'LT', 'RS', 'Premier'],
  2024: ['L', 'LS', 'LT', 'RS', 'Premier'],
})

// ── Traverse (2009-2024) ──────────────────────────────────────────────────────
addModel('Traverse', {
  2009: ['LS', 'LT', 'LTZ'], 2010: ['LS', 'LT', 'LTZ'],
  2011: ['LS', 'LT', 'LTZ'], 2012: ['LS', 'LT', 'LTZ'],
  2013: ['LS', 'LT', 'LTZ', 'High Country'],
  2014: ['LS', 'LT', 'LTZ', 'High Country'],
  2015: ['LS', 'LT', 'LTZ', 'High Country'],
  2016: ['LS', 'LT', 'LTZ', 'High Country'],
  2017: ['LS', 'LT', 'LTZ', 'High Country'],
  2018: ['LS', 'LT', 'RS', 'Premier', 'High Country'],
  2019: ['LS', 'LT', 'RS', 'Premier', 'High Country'],
  2020: ['LS', 'LT', 'RS', 'Premier', 'High Country'],
  2021: ['LS', 'LT', 'RS', 'Premier', 'High Country'],
  2022: ['LS', 'LT', 'RS', 'Premier'],
  2023: ['LS', 'LT', 'RS', 'Premier'],
  2024: ['LS', 'LT', 'RS', 'Premier'],
})

// ── Cruze (2009-2019) ─────────────────────────────────────────────────────────
addModel('Cruze', {
  2009: ['LS', 'LT', 'LTZ'], 2010: ['LS', 'LT', 'LTZ'],
  2011: ['LS', 'LT', 'LTZ', 'Eco'],
  2012: ['LS', 'LT', 'LTZ', 'Eco'],
  2013: ['LS', 'LT', 'LTZ', 'Eco'],
  2014: ['LS', 'LT', 'LTZ', 'Eco'],
  2015: ['LS', 'LT', 'LTZ', 'Eco'],
  2016: ['L', 'LS', 'LT', 'Premier', 'LT Diesel'],
  2017: ['L', 'LS', 'LT', 'Premier', 'LT Diesel'],
  2018: ['L', 'LS', 'LT', 'Premier', 'LT Diesel'],
  2019: ['L', 'LS', 'LT', 'Premier'],
})

// ── Sonic (2012-2020) ─────────────────────────────────────────────────────────
addModel('Sonic', {
  2012: ['LS', 'LT', 'LTZ', 'RS'],
  2013: ['LS', 'LT', 'LTZ', 'RS'],
  2014: ['LS', 'LT', 'LTZ', 'RS'],
  2015: ['LS', 'LT', 'LTZ', 'RS'],
  2016: ['LS', 'LT', 'LTZ', 'RS'],
  2017: ['LS', 'LT', 'RS', 'Premier'],
  2018: ['LS', 'LT', 'RS', 'Premier'],
  2019: ['LS', 'LT', 'RS', 'Premier'],
  2020: ['LS', 'LT', 'RS', 'Premier'],
})

// ── Spark (2013-2022) ─────────────────────────────────────────────────────────
addModel('Spark', {
  2013: ['LS', 'LT', 'LTZ'],
  2014: ['LS', 'LT', 'LTZ'],
  2015: ['LS', 'LT', 'LTZ'],
  2016: ['LS', 'LT', 'ACTIV', 'Premier'],
  2017: ['LS', 'LT', 'ACTIV', 'Premier'],
  2018: ['LS', 'LT', 'ACTIV', 'Premier'],
  2019: ['LS', 'LT', 'ACTIV', 'Premier'],
  2020: ['LS', 'LT', 'ACTIV', 'Premier'],
  2021: ['LS', 'LT', 'ACTIV', 'Premier'],
  2022: ['LS', 'LT', 'ACTIV', 'Premier'],
})

// ── Trax (2013-2024) ──────────────────────────────────────────────────────────
addModel('Trax', {
  2013: ['LS', 'LT', 'LTZ'],
  2014: ['LS', 'LT', 'LTZ'],
  2015: ['LS', 'LT', 'LTZ', 'Premier'],
  2016: ['LS', 'LT', 'LTZ', 'Premier'],
  2017: ['LS', 'LT', 'LTZ', 'Premier'],
  2018: ['LS', 'LT', 'LTZ', 'Premier'],
  2019: ['LS', 'LT', 'LTZ', 'Premier'],
  2020: ['LS', 'LT', 'LTZ', 'Premier'],
  2021: ['LS', 'LT', 'LTZ', 'Premier'],
  2022: ['LS', 'LT', 'LTZ', 'Premier'],
  2023: ['LS', 'LT', 'RS', 'ACTIV', 'Premier'],
  2024: ['LS', 'LT', 'RS', 'ACTIV', 'Premier'],
})

// ── Volt (2011-2019) ──────────────────────────────────────────────────────────
addModel('Volt', {
  2011: ['Base', 'Premium'], 2012: ['Base', 'Premium'],
  2013: ['Base', 'Premium'], 2014: ['Base', 'Premium'],
  2015: ['Base', 'Premium'],
  2016: ['LT', 'Premier'], 2017: ['LT', 'Premier'],
  2018: ['LT', 'Premier'], 2019: ['LT', 'Premier'],
})

// ── Bolt EV (2017-2023) ───────────────────────────────────────────────────────
addModel('Bolt EV', {
  2017: ['LT', 'Premier'], 2018: ['LT', 'Premier'], 2019: ['LT', 'Premier'],
  2020: ['LT', '2LT', 'Premier'],
  2021: ['LT', '2LT', 'Premier'],
  2022: ['1LT', '2LT', 'EUV LT', 'EUV Premier'],
  2023: ['1LT', '2LT', 'EUV LT', 'EUV Premier'],
})

// Sort all models and years
makes['Chevrolet'] = Object.fromEntries(
  Object.entries(makes['Chevrolet']).sort(([a],[b])=>a.localeCompare(b)).map(([model, years])=>[
    model,
    Object.fromEntries(Object.entries(years).sort(([a],[b])=>parseInt(a)-parseInt(b)))
  ])
)

fs.writeFileSync('src/data/makes.json', JSON.stringify(makes, null, 2))

// Count new total
let total = 0
for (const mk of Object.values(makes)) for (const mo of Object.values(mk)) for (const yr of Object.values(mo)) total += yr.length
console.log('makes.json updated — total entries:', total)
const chevModels = Object.keys(makes['Chevrolet'])
let chevTotal = 0
for (const mo of Object.values(makes['Chevrolet'])) for (const yr of Object.values(mo)) chevTotal += yr.length
console.log('Chevrolet models:', chevModels.length, 'entries:', chevTotal)
