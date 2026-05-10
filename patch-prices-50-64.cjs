const fs = require('fs');

const PRICES = {
  // ── s50: Audi Q8 ──
  'Audi|Q8|2019|55 TFSI quattro':   '~$133,900',
  'Audi|Q8|2019|50 TDI quattro':    '~$128,900',
  'Audi|Q8|2020|55 TFSI quattro':   '~$135,900',
  'Audi|Q8|2020|50 TDI quattro':    '~$130,900',
  'Audi|Q8|2020|SQ8':               '~$179,900',
  'Audi|Q8|2021|55 TFSI quattro':   '~$137,900',
  'Audi|Q8|2021|50 TDI quattro':    '~$132,900',
  'Audi|Q8|2021|SQ8':               '~$184,900',
  'Audi|Q8|2022|55 TFSI quattro':   '~$139,900',
  'Audi|Q8|2022|50 TDI quattro':    '~$134,900',
  'Audi|Q8|2022|SQ8':               '~$189,900',
  'Audi|Q8|2023|55 TFSI quattro':   '~$141,900',
  'Audi|Q8|2023|50 TDI quattro':    '~$136,900',
  'Audi|Q8|2023|SQ8':               '~$192,900',
  'Audi|Q8|2024|55 TFSI quattro':   '~$143,900',
  'Audi|Q8|2024|50 TDI quattro':    '~$138,900',
  'Audi|Q8|2024|SQ8':               '~$195,900',
  'Audi|Q8|2025|55 TFSI quattro':   '~$145,900',
  'Audi|Q8|2025|SQ8':               '~$198,900',
  'Audi|Q8|2026|55 TFSI quattro':   '~$147,900',
  'Audi|Q8|2026|SQ8':               '~$201,900',

  // ── s50: Audi Q4 e-tron ──
  'Audi|Q4 e-tron|2022|40':            '~$69,900',
  'Audi|Q4 e-tron|2022|50 quattro':    '~$80,900',
  'Audi|Q4 e-tron|2023|40':            '~$69,900',
  'Audi|Q4 e-tron|2023|50 quattro':    '~$80,900',
  'Audi|Q4 e-tron|2024|40':            '~$71,900',
  'Audi|Q4 e-tron|2024|50 quattro':    '~$82,900',
  'Audi|Q4 e-tron|2025|40':            '~$71,900',
  'Audi|Q4 e-tron|2025|50 quattro':    '~$82,900',
  'Audi|Q4 e-tron|2026|40':            '~$73,900',
  'Audi|Q4 e-tron|2026|50 quattro':    '~$84,900',

  // ── s50: Audi A3 (8P 2009-2011) ──
  'Audi|A3|2009|1.8 TFSI':   '~$34,990',
  'Audi|A3|2009|2.0 TFSI':   '~$39,990',
  'Audi|A3|2009|2.0 TDI':    '~$39,990',
  'Audi|A3|2010|1.8 TFSI':   '~$34,990',
  'Audi|A3|2010|2.0 TFSI':   '~$39,990',
  'Audi|A3|2010|2.0 TDI':    '~$39,990',
  'Audi|A3|2011|1.8 TFSI':   '~$34,990',
  'Audi|A3|2011|2.0 TFSI':   '~$39,990',
  'Audi|A3|2011|2.0 TDI':    '~$39,990',

  // ── s50: Audi A3 (8V 2018-2019) ──
  'Audi|A3|2018|35 TFSI':   '~$37,990',
  'Audi|A3|2019|35 TFSI':   '~$37,990',

  // ── s50: Audi A3 S3 gaps ──
  'Audi|A3|2013|S3':   '~$54,990',
  'Audi|A3|2015|S3':   '~$57,990',
  'Audi|A3|2017|S3':   '~$59,990',
  'Audi|A3|2018|S3':   '~$61,990',
  'Audi|A3|2019|S3':   '~$62,990',
  'Audi|A3|2020|S3':   '~$63,990',
  'Audi|A3|2022|S3':   '~$65,990',

  // ── s50: Audi A4 2010-2011 ──
  'Audi|A4|2010|2.0 TFSI':    '~$52,990',
  'Audi|A4|2010|2.0 TDI':     '~$54,990',
  'Audi|A4|2010|S4 quattro':  '~$82,990',
  'Audi|A4|2011|2.0 TFSI':    '~$52,990',
  'Audi|A4|2011|2.0 TDI':     '~$54,990',
  'Audi|A4|2011|S4 quattro':  '~$82,990',

  // ── s50: Audi A4 2013-2014 ──
  'Audi|A4|2013|1.8 TFSI':          '~$49,990',
  'Audi|A4|2013|2.0 TDI':           '~$53,990',
  'Audi|A4|2013|2.0 TFSI quattro':  '~$59,990',
  'Audi|A4|2014|1.8 TFSI':          '~$49,990',
  'Audi|A4|2014|2.0 TDI':           '~$53,990',
  'Audi|A4|2014|2.0 TFSI quattro':  '~$59,990',

  // ── s50: Audi A4 2018 ──
  'Audi|A4|2018|35 TFSI':          '~$53,900',
  'Audi|A4|2018|40 TFSI':          '~$62,900',
  'Audi|A4|2018|45 TFSI quattro':  '~$72,900',
  'Audi|A4|2018|S4':               '~$89,900',

  // ── s50: Audi A4 2020 ──
  'Audi|A4|2020|35 TFSI':          '~$55,900',
  'Audi|A4|2020|40 TFSI':          '~$64,900',
  'Audi|A4|2020|45 TFSI quattro':  '~$74,900',
  'Audi|A4|2020|RS4':              '~$139,900',

  // ── s50: Audi A5 2011 ──
  'Audi|A5|2011|2.0 TFSI':          '~$57,990',
  'Audi|A5|2011|2.0 TFSI quattro':  '~$64,990',
  'Audi|A5|2011|S5':                '~$82,990',

  // ── s50: Audi A5 2014 ──
  'Audi|A5|2014|2.0 TFSI':  '~$59,990',
  'Audi|A5|2014|2.0 TDI':   '~$61,990',
  'Audi|A5|2014|S5':        '~$84,990',

  // ── s50: Audi A5 2016 ──
  'Audi|A5|2016|2.0 TFSI':  '~$59,900',

  // ── s50: Audi A5 2019 ──
  'Audi|A5|2019|2.0 TFSI':          '~$61,900',
  'Audi|A5|2019|45 TFSI quattro':   '~$74,900',
  'Audi|A5|2019|S5':                '~$94,900',
  'Audi|A5|2019|RS5':               '~$129,900',

  // ── s50: Audi A6 2006 ──
  'Audi|A6|2006|2.4':          '~$65,990',
  'Audi|A6|2006|3.2 quattro':  '~$79,990',

  // ── s50: Audi A6 2009-2010 ──
  'Audi|A6|2009|3.0 TDI quattro':   '~$87,990',
  'Audi|A6|2009|3.0 TFSI quattro':  '~$95,990',
  'Audi|A6|2010|3.0 TDI quattro':   '~$87,990',
  'Audi|A6|2010|3.0 TFSI quattro':  '~$95,990',

  // ── s50: Audi A6 2011 ──
  'Audi|A6|2011|2.0 TFSI':          '~$67,990',
  'Audi|A6|2011|3.0 TDI quattro':   '~$89,990',

  // ── s50: Audi A6 2013-2014 ──
  'Audi|A6|2013|2.0 TFSI':         '~$69,990',
  'Audi|A6|2013|3.0 TDI quattro':  '~$91,990',
  'Audi|A6|2013|S6':               '~$119,990',
  'Audi|A6|2014|2.0 TFSI':         '~$69,990',
  'Audi|A6|2014|3.0 TDI quattro':  '~$91,990',
  'Audi|A6|2014|S6':               '~$119,990',

  // ── s50: Audi A6 2016-2017 ──
  'Audi|A6|2016|2.0 TFSI':          '~$72,900',
  'Audi|A6|2016|3.0 TFSI quattro':  '~$96,900',
  'Audi|A6|2016|RS6':               '~$169,900',
  'Audi|A6|2017|2.0 TFSI':          '~$72,900',
  'Audi|A6|2017|3.0 TFSI quattro':  '~$96,900',

  // ── s50: Audi A7 2016-2017 ──
  'Audi|A7|2016|3.0 TFSI quattro':  '~$109,900',
  'Audi|A7|2016|3.0 TDI quattro':   '~$104,900',
  'Audi|A7|2016|S7':                '~$134,900',
  'Audi|A7|2017|3.0 TFSI quattro':  '~$109,900',
  'Audi|A7|2017|3.0 TDI quattro':   '~$104,900',
  'Audi|A7|2017|S7':                '~$134,900',

  // ── s50: Audi A8 2007-2009 ──
  'Audi|A8|2007|4.2 FSI quattro':   '~$159,990',
  'Audi|A8|2007|6.0 W12 quattro':   '~$219,990',
  'Audi|A8|2008|4.2 FSI quattro':   '~$159,990',
  'Audi|A8|2008|6.0 W12 quattro':   '~$219,990',
  'Audi|A8|2009|4.2 FSI quattro':   '~$159,990',
  'Audi|A8|2009|6.0 W12 quattro':   '~$219,990',

  // ── s50: Audi A8 2011-2012 ──
  'Audi|A8|2011|4.2 FSI quattro':   '~$164,990',
  'Audi|A8|2011|6.3 W12 quattro':   '~$224,990',
  'Audi|A8|2012|4.2 FSI quattro':   '~$164,990',
  'Audi|A8|2012|6.3 W12 quattro':   '~$224,990',

  // ── s50: Audi A8 2014-2017 ──
  'Audi|A8|2014|3.0 TDI quattro':   '~$149,900',
  'Audi|A8|2014|4.0 TFSI quattro':  '~$194,900',
  'Audi|A8|2014|S8':                '~$224,900',
  'Audi|A8|2015|3.0 TDI quattro':   '~$149,900',
  'Audi|A8|2015|4.0 TFSI quattro':  '~$194,900',
  'Audi|A8|2015|S8':                '~$224,900',
  'Audi|A8|2016|3.0 TDI quattro':   '~$149,900',
  'Audi|A8|2016|4.0 TFSI quattro':  '~$194,900',
  'Audi|A8|2016|S8':                '~$224,900',
  'Audi|A8|2017|3.0 TDI quattro':   '~$149,900',
  'Audi|A8|2017|4.0 TFSI quattro':  '~$194,900',
  'Audi|A8|2017|S8':                '~$224,900',

  // ── s50: Audi Q3 ──
  'Audi|Q3|2013|2.0 TFSI quattro':  '~$42,990',
  'Audi|Q3|2017|2.0 TFSI quattro':  '~$45,990',

  // ── s50: Audi Q5 ──
  'Audi|Q5|2010|2.0 TFSI quattro':  '~$62,990',
  'Audi|Q5|2010|3.0 TDI quattro':   '~$69,990',
  'Audi|Q5|2011|2.0 TFSI quattro':  '~$62,990',
  'Audi|Q5|2011|3.0 TDI quattro':   '~$69,990',
  'Audi|Q5|2014|2.0 TFSI quattro':  '~$65,990',
  'Audi|Q5|2014|3.0 TDI quattro':   '~$72,990',
  'Audi|Q5|2014|SQ5':               '~$82,990',
  'Audi|Q5|2015|2.0 TFSI quattro':  '~$65,990',
  'Audi|Q5|2015|SQ5':               '~$82,990',
  'Audi|Q5|2019|45 TFSI quattro':   '~$74,900',
  'Audi|Q5|2019|SQ5':               '~$94,900',

  // ── s50: Audi Q7 ──
  'Audi|Q7|2007|3.0 TDI quattro':   '~$84,990',
  'Audi|Q7|2007|4.2 quattro':       '~$104,990',
  'Audi|Q7|2008|3.0 TDI quattro':   '~$84,990',
  'Audi|Q7|2008|4.2 quattro':       '~$104,990',
  'Audi|Q7|2009|3.0 TDI quattro':   '~$84,990',
  'Audi|Q7|2009|4.2 TDI quattro':   '~$114,990',
  'Audi|Q7|2011|3.0 TDI quattro':   '~$89,990',
  'Audi|Q7|2011|4.2 TDI quattro':   '~$119,990',
  'Audi|Q7|2012|3.0 TDI quattro':   '~$89,990',
  'Audi|Q7|2012|4.2 TDI quattro':   '~$119,990',
  'Audi|Q7|2013|3.0 TDI quattro':   '~$89,990',
  'Audi|Q7|2013|4.2 TDI quattro':   '~$119,990',
  'Audi|Q7|2014|3.0 TDI quattro':   '~$89,990',
  'Audi|Q7|2014|4.2 TDI quattro':   '~$119,990',
  'Audi|Q7|2015|3.0 TDI quattro':   '~$89,990',
  'Audi|Q7|2015|4.2 TDI quattro':   '~$119,990',
  'Audi|Q7|2017|3.0 TDI quattro':   '~$94,900',
  'Audi|Q7|2017|3.0 TFSI quattro':  '~$99,900',
  'Audi|Q7|2017|SQ7':               '~$139,900',
  'Audi|Q7|2018|3.0 TDI quattro':   '~$94,900',
  'Audi|Q7|2018|3.0 TFSI quattro':  '~$99,900',
  'Audi|Q7|2018|SQ7':               '~$139,900',

  // ── s51: Audi Q3 Sportback 2020-2023 ──
  'Audi|Q3 Sportback|2020|35 TFSI':          '~$60,900',
  'Audi|Q3 Sportback|2020|40 TFSI quattro':  '~$70,900',
  'Audi|Q3 Sportback|2020|RS Q3':            '~$90,900',
  'Audi|Q3 Sportback|2021|35 TFSI':          '~$60,900',
  'Audi|Q3 Sportback|2021|40 TFSI quattro':  '~$70,900',
  'Audi|Q3 Sportback|2021|RS Q3':            '~$90,900',
  'Audi|Q3 Sportback|2022|35 TFSI':          '~$60,900',
  'Audi|Q3 Sportback|2022|40 TFSI quattro':  '~$70,900',
  'Audi|Q3 Sportback|2022|RS Q3':            '~$90,900',
  'Audi|Q3 Sportback|2023|35 TFSI':          '~$60,900',
  'Audi|Q3 Sportback|2023|40 TFSI quattro':  '~$70,900',
  'Audi|Q3 Sportback|2023|RS Q3':            '~$90,900',

  // ── s51: Audi Q3 Sportback 2024-2026 ──
  'Audi|Q3 Sportback|2024|35 TFSI':          '~$63,900',
  'Audi|Q3 Sportback|2024|40 TFSI quattro':  '~$73,900',
  'Audi|Q3 Sportback|2024|RS Q3':            '~$93,900',
  'Audi|Q3 Sportback|2025|35 TFSI':          '~$63,900',
  'Audi|Q3 Sportback|2025|40 TFSI quattro':  '~$73,900',
  'Audi|Q3 Sportback|2025|RS Q3':            '~$93,900',
  'Audi|Q3 Sportback|2026|35 TFSI':          '~$63,900',
  'Audi|Q3 Sportback|2026|40 TFSI quattro':  '~$73,900',
  'Audi|Q3 Sportback|2026|RS Q3':            '~$93,900',

  // ── s51: Audi Q5 Sportback 2021-2023 ──
  'Audi|Q5 Sportback|2021|45 TFSI quattro':  '~$84,900',
  'Audi|Q5 Sportback|2021|SQ5':              '~$99,900',
  'Audi|Q5 Sportback|2022|45 TFSI quattro':  '~$84,900',
  'Audi|Q5 Sportback|2022|SQ5':              '~$99,900',
  'Audi|Q5 Sportback|2023|45 TFSI quattro':  '~$84,900',
  'Audi|Q5 Sportback|2023|SQ5':              '~$99,900',

  // ── s51: Audi Q5 Sportback 2024-2026 ──
  'Audi|Q5 Sportback|2024|45 TFSI quattro':  '~$87,900',
  'Audi|Q5 Sportback|2024|SQ5':              '~$102,900',
  'Audi|Q5 Sportback|2025|45 TFSI quattro':  '~$87,900',
  'Audi|Q5 Sportback|2025|SQ5':              '~$102,900',
  'Audi|Q5 Sportback|2026|45 TFSI quattro':  '~$87,900',
  'Audi|Q5 Sportback|2026|SQ5':              '~$102,900',

  // ── s51: Audi Q6 e-tron ──
  'Audi|Q6 e-tron|2024|55 quattro':  '~$107,900',
  'Audi|Q6 e-tron|2024|SQ6':         '~$129,900',
  'Audi|Q6 e-tron|2025|55 quattro':  '~$107,900',
  'Audi|Q6 e-tron|2025|SQ6':         '~$129,900',
  'Audi|Q6 e-tron|2026|55 quattro':  '~$107,900',
  'Audi|Q6 e-tron|2026|SQ6':         '~$129,900',

  // ── s51: Audi S1 ──
  'Audi|S1|2014|S1 Sportback':  '~$42,990',
  'Audi|S1|2015|S1 Sportback':  '~$42,990',
  'Audi|S1|2016|S1 Sportback':  '~$42,990',
  'Audi|S1|2017|S1 Sportback':  '~$44,990',
  'Audi|S1|2018|S1 Sportback':  '~$44,990',

  // ── s51: Audi A4 allroad ──
  'Audi|A4 allroad|2009|2.0 TFSI quattro':  '~$62,990',
  'Audi|A4 allroad|2009|2.0 TDI quattro':   '~$64,990',
  'Audi|A4 allroad|2012|2.0 TFSI quattro':  '~$62,990',
  'Audi|A4 allroad|2012|2.0 TDI quattro':   '~$64,990',
  'Audi|A4 allroad|2014|2.0 TFSI quattro':  '~$62,990',
  'Audi|A4 allroad|2014|2.0 TDI quattro':   '~$64,990',
  'Audi|A4 allroad|2016|45 TFSI quattro':   '~$77,900',
  'Audi|A4 allroad|2016|40 TDI quattro':    '~$79,900',
  'Audi|A4 allroad|2019|45 TFSI quattro':   '~$77,900',
  'Audi|A4 allroad|2019|40 TDI quattro':    '~$79,900',
  'Audi|A4 allroad|2022|45 TFSI quattro':   '~$82,900',
  'Audi|A4 allroad|2022|40 TDI quattro':    '~$84,900',
  'Audi|A4 allroad|2025|45 TFSI quattro':   '~$84,900',

  // ── s51: Audi A6 allroad ──
  'Audi|A6 allroad|2001|2.7T biturbo':      '~$84,990',
  'Audi|A6 allroad|2001|2.5 TDI':           '~$79,990',
  'Audi|A6 allroad|2003|2.7T biturbo':      '~$84,990',
  'Audi|A6 allroad|2003|2.5 TDI':           '~$79,990',
  'Audi|A6 allroad|2006|3.0 TFSI quattro':  '~$109,990',
  'Audi|A6 allroad|2006|3.0 TDI quattro':   '~$104,990',
  'Audi|A6 allroad|2009|3.0 TFSI quattro':  '~$109,990',
  'Audi|A6 allroad|2009|3.0 TDI quattro':   '~$104,990',
  'Audi|A6 allroad|2012|3.0 TFSI quattro':  '~$119,900',
  'Audi|A6 allroad|2012|3.0 TDI quattro':   '~$114,900',
  'Audi|A6 allroad|2015|3.0 TFSI quattro':  '~$119,900',
  'Audi|A6 allroad|2015|3.0 TDI quattro':   '~$114,900',
  'Audi|A6 allroad|2017|3.0 TFSI quattro':  '~$119,900',
  'Audi|A6 allroad|2017|3.0 TDI quattro':   '~$114,900',
  'Audi|A6 allroad|2019|55 TFSI quattro':   '~$129,900',
  'Audi|A6 allroad|2019|50 TDI quattro':    '~$124,900',
  'Audi|A6 allroad|2022|55 TFSI quattro':   '~$129,900',
  'Audi|A6 allroad|2022|50 TDI quattro':    '~$124,900',
  'Audi|A6 allroad|2025|55 TFSI quattro':   '~$134,900',
  'Audi|A6 allroad|2025|50 TDI quattro':    '~$129,900',

  // ── s51: Audi classics ──
  'Audi|80|1979|GL':          '~$9,490',
  'Audi|80|1982|GLS':         '~$11,990',
  'Audi|80|1984|GTE':         '~$18,990',
  'Audi|80|1986|GTE':         '~$20,990',
  'Audi|80|1987|80':          '~$22,990',
  'Audi|80|1989|80 E':        '~$24,990',
  'Audi|80|1991|80 quattro':  '~$28,990',
  'Audi|80|1993|80':          '~$29,990',
  'Audi|80|1994|80 V6':       '~$32,990',
  'Audi|90|1987|90E':         '~$25,990',
  'Audi|90|1989|90':          '~$27,990',
  'Audi|90|1990|90 quattro':  '~$30,990',
  'Audi|100|1983|100':           '~$17,490',
  'Audi|100|1985|100 CD':        '~$18,990',
  'Audi|100|1988|100':           '~$29,990',
  'Audi|100|1990|100 quattro':   '~$34,990',
  'Audi|100|1991|100':           '~$35,990',
  'Audi|100|1993|100 quattro':   '~$39,990',
  'Audi|Coupe|1988|Coupe GT':    '~$29,990',
  'Audi|Coupe|1990|Coupe':       '~$32,990',
  'Audi|Coupe|1992|S2 Coupe':    '~$69,990',
  'Audi|Coupe|1993|Coupe V6':    '~$39,990',
  'Audi|Quattro|1982|Quattro':   '~$49,990',
  'Audi|Quattro|1985|Quattro':   '~$54,990',
  'Audi|Quattro|1989|Quattro 20V': '~$79,990',
  'Audi|Cabriolet|1993|Cabriolet 2.3':  '~$49,990',
  'Audi|Cabriolet|1995|Cabriolet 2.6':  '~$54,990',
  'Audi|Cabriolet|1998|Cabriolet 2.8':  '~$62,990',
  'Audi|Cabriolet|2000|Cabriolet 2.8':  '~$64,990',
  'Audi|S2|1992|S2 Coupe':      '~$79,990',
  'Audi|S2|1994|S2 Avant':      '~$84,990',
  'Audi|RS2 Avant|1994|RS2 Avant':  '~$119,990',
  'Audi|RS2 Avant|1995|RS2 Avant':  '~$119,990',
  'Audi|A2|2000|1.4':       '~$27,990',
  'Audi|A2|2002|1.4':       '~$29,990',
  'Audi|A2|2004|1.4 TDI':   '~$29,990',
  'Audi|V8|1989|V8 quattro 3.6':  '~$89,990',
  'Audi|V8|1991|V8 quattro 4.2':  '~$94,990',
  'Audi|V8|1993|V8 quattro 4.2':  '~$99,990',

  // ── s52: BMW 6 Series ──
  'BMW|6 Series|2004|630i':   '~$124,990',
  'BMW|6 Series|2004|645Ci':  '~$179,990',
  'BMW|6 Series|2007|630i':   '~$129,990',
  'BMW|6 Series|2007|650i':   '~$169,990',
  'BMW|6 Series|2007|M6':     '~$274,990',
  'BMW|6 Series|2009|M6':     '~$279,990',
  'BMW|6 Series|2012|640i':   '~$154,990',
  'BMW|6 Series|2012|650i':   '~$184,990',
  'BMW|6 Series|2014|650i':   '~$189,990',
  'BMW|6 Series|2015|640i':   '~$159,990',
  'BMW|6 Series|2015|M6':     '~$289,990',
  'BMW|6 Series|2016|640i':   '~$164,990',
  'BMW|6 Series|2016|650i':   '~$194,990',
  'BMW|6 Series|2016|M6':     '~$294,990',

  // ── s52: BMW 8 Series ──
  'BMW|8 Series|2019|840i':           '~$204,990',
  'BMW|8 Series|2019|M850i xDrive':   '~$259,990',
  'BMW|8 Series|2021|840i':           '~$209,990',
  'BMW|8 Series|2021|M850i xDrive':   '~$264,990',
  'BMW|8 Series|2021|M8 Competition': '~$339,990',
  'BMW|8 Series|2023|840i':           '~$214,900',
  'BMW|8 Series|2023|M850i xDrive':   '~$269,900',
  'BMW|8 Series|2023|M8 Competition': '~$349,900',
  'BMW|8 Series|2025|840i':           '~$219,900',
  'BMW|8 Series|2025|M850i xDrive':   '~$274,900',
  'BMW|8 Series|2025|M8 Competition': '~$354,900',

  // ── s52: BMW Z3 ──
  'BMW|Z3|1996|Z3 1.9':      '~$49,990',
  'BMW|Z3|1998|Z3 1.9':      '~$51,990',
  'BMW|Z3|1998|Z3 2.8':      '~$64,990',
  'BMW|Z3|2000|Z3 2.2i':     '~$67,990',
  'BMW|Z3|2000|Z3 3.0i':     '~$79,990',
  'BMW|Z3|2000|M Roadster':  '~$124,990',
  'BMW|Z3|2002|Z3 2.2i':     '~$69,990',
  'BMW|Z3|2002|M Roadster':  '~$129,990',

  // ── s52: BMW i5 ──
  'BMW|i5|2023|eDrive40':    '~$134,900',
  'BMW|i5|2023|M60 xDrive':  '~$179,900',
  'BMW|i5|2024|eDrive40':    '~$134,900',
  'BMW|i5|2024|M60 xDrive':  '~$179,900',
  'BMW|i5|2025|eDrive40':    '~$139,900',
  'BMW|i5|2025|M60 xDrive':  '~$184,900',
  'BMW|i5|2026|eDrive40':    '~$139,900',
  'BMW|i5|2026|M60 xDrive':  '~$184,900',

  // ── s52: BMW i7 ──
  'BMW|i7|2022|eDrive50':    '~$219,900',
  'BMW|i7|2022|xDrive60':    '~$239,900',
  'BMW|i7|2023|eDrive50':    '~$219,900',
  'BMW|i7|2023|xDrive60':    '~$239,900',
  'BMW|i7|2023|M70 xDrive':  '~$359,900',
  'BMW|i7|2024|eDrive50':    '~$224,900',
  'BMW|i7|2024|xDrive60':    '~$244,900',
  'BMW|i7|2024|M70 xDrive':  '~$364,900',
  'BMW|i7|2025|eDrive50':    '~$224,900',
  'BMW|i7|2025|xDrive60':    '~$244,900',
  'BMW|i7|2025|M70 xDrive':  '~$364,900',
  'BMW|i7|2026|eDrive50':    '~$229,900',
  'BMW|i7|2026|xDrive60':    '~$249,900',
  'BMW|i7|2026|M70 xDrive':  '~$369,900',

  // ── s52: BMW 2 Series Active Tourer ──
  'BMW|2 Series Active Tourer|2015|218i':  '~$39,990',
  'BMW|2 Series Active Tourer|2015|220i':  '~$45,990',
  'BMW|2 Series Active Tourer|2017|218i':  '~$39,990',
  'BMW|2 Series Active Tourer|2017|220i':  '~$45,990',
  'BMW|2 Series Active Tourer|2019|218i':  '~$39,990',
  'BMW|2 Series Active Tourer|2019|220i':  '~$45,990',
  'BMW|2 Series Active Tourer|2021|218i':  '~$44,990',
  'BMW|2 Series Active Tourer|2021|220i':  '~$51,990',

  // ── s53: Audi S3/RS3 ──
  'Audi|S3|2013|S3':   '~$54,990',
  'Audi|S3|2017|S3':   '~$59,990',
  'Audi|S3|2020|S3':   '~$63,990',
  'Audi|S3|2024|S3':   '~$67,900',
  'Audi|RS3|2011|RS3': '~$74,990',
  'Audi|RS3|2017|RS3': '~$84,990',

  // ── s53: Audi S4 ──
  'Audi|S4|2001|S4':  '~$84,990',
  'Audi|S4|2007|S4':  '~$94,990',
  'Audi|S4|2010|S4':  '~$99,990',
  'Audi|S4|2016|S4':  '~$109,900',
  'Audi|S4|2018|S4':  '~$114,900',
  'Audi|S4|2022|S4':  '~$117,900',
  'Audi|S4|2024|S4':  '~$119,900',

  // ── s53: Audi RS4 ──
  'Audi|RS4|2004|RS4 Avant':  '~$139,990',
  'Audi|RS4|2012|RS4 Avant':  '~$144,990',
  'Audi|RS4|2019|RS4 Avant':  '~$149,900',

  // ── s53: Audi S5/RS5 ──
  'Audi|S5|2009|S5':  '~$89,990',
  'Audi|S5|2012|S5':  '~$92,990',
  'Audi|S5|2014|S5':  '~$94,990',
  'Audi|S5|2017|S5':  '~$97,900',
  'Audi|S5|2024|S5':  '~$109,900',
  'Audi|RS5|2012|RS5': '~$149,990',
  'Audi|RS5|2018|RS5': '~$154,900',

  // ── s53: Audi S6/RS6 ──
  'Audi|S6|2001|S6':  '~$109,990',
  'Audi|S6|2012|S6':  '~$119,990',
  'Audi|S6|2014|S6':  '~$124,990',
  'Audi|S6|2016|S6':  '~$129,900',
  'Audi|S6|2020|S6':  '~$139,900',
  'Audi|RS6|2007|RS6 Avant':  '~$169,990',
  'Audi|RS6|2015|RS6 Avant':  '~$179,990',
  'Audi|RS6|2019|RS6 Avant':  '~$189,900',

  // ── s53: Audi S7/RS7 ──
  'Audi|S7|2012|S7':  '~$134,990',
  'Audi|S7|2016|S7':  '~$139,990',
  'Audi|S7|2018|S7':  '~$144,900',
  'Audi|S7|2021|S7':  '~$149,900',
  'Audi|RS7|2014|RS7':  '~$189,990',
  'Audi|RS7|2020|RS7':  '~$199,900',

  // ── s53: Audi S8 ──
  'Audi|S8|2013|S8':  '~$199,990',
  'Audi|S8|2016|S8':  '~$204,990',
  'Audi|S8|2018|S8':  '~$209,900',
  'Audi|S8|2020|S8':  '~$219,900',

  // ── s53: Audi RS Q3 ──
  'Audi|RS Q3|2011|RS Q3':  '~$64,990',

  // ── s53: Audi SQ5 ──
  'Audi|SQ5|2013|SQ5':  '~$79,990',
  'Audi|SQ5|2017|SQ5':  '~$89,990',
  'Audi|SQ5|2019|SQ5':  '~$94,900',

  // ── s53: Audi SQ7 ──
  'Audi|SQ7|2016|SQ7':  '~$129,900',

  // ── s53: Audi SQ8 ──
  'Audi|SQ8|2020|SQ8':  '~$159,900',

  // ── s53: Audi RS Q8 ──
  'Audi|RS Q8|2020|RS Q8':  '~$199,900',

  // ── s54: Suzuki Swift ──
  'Suzuki|Swift|2007|GL':         '~$14,990',
  'Suzuki|Swift|2007|GLX':        '~$17,990',
  'Suzuki|Swift|2008|Sport':      '~$24,990',
  'Suzuki|Swift|2011|GL':         '~$15,990',
  'Suzuki|Swift|2011|GLX':        '~$18,990',
  'Suzuki|Swift|2013|Sport':      '~$25,990',
  'Suzuki|Swift|2015|GL':         '~$16,990',
  'Suzuki|Swift|2015|GLX':        '~$19,990',
  'Suzuki|Swift|2016|Sport':      '~$26,990',
  'Suzuki|Swift|2018|GLX Turbo':  '~$22,490',
  'Suzuki|Swift|2019|GL':         '~$18,490',
  'Suzuki|Swift|2019|GLX':        '~$21,490',
  'Suzuki|Swift|2019|Sport':      '~$27,490',
  'Suzuki|Swift|2022|GLX Turbo':  '~$24,990',
  'Suzuki|Swift|2022|Sport':      '~$29,990',
  'Suzuki|Swift|2023|GL':         '~$20,990',
  'Suzuki|Swift|2023|GLX':        '~$23,490',
  'Suzuki|Swift|2025|GL':         '~$21,990',
  'Suzuki|Swift|2025|GLX':        '~$24,490',
  'Suzuki|Swift|2025|Sport':      '~$31,490',

  // ── s54: Suzuki Jimny ──
  'Suzuki|Jimny|2003|JX':     '~$18,490',
  'Suzuki|Jimny|2003|JLX':    '~$21,490',
  'Suzuki|Jimny|2003|JLX-L':  '~$22,990',
  'Suzuki|Jimny|2007|JX':     '~$19,490',
  'Suzuki|Jimny|2007|JLX':    '~$22,490',
  'Suzuki|Jimny|2007|JLX-L':  '~$23,990',
  'Suzuki|Jimny|2012|JX':     '~$20,490',
  'Suzuki|Jimny|2012|JLX':    '~$23,490',
  'Suzuki|Jimny|2012|JLX-L':  '~$24,990',
  'Suzuki|Jimny|2016|JX':     '~$22,990',
  'Suzuki|Jimny|2016|JLX':    '~$25,990',
  'Suzuki|Jimny|2016|JLX-L':  '~$26,990',
  'Suzuki|Jimny|2020|Lite':   '~$22,990',
  'Suzuki|Jimny|2020|JLX':    '~$26,990',
  'Suzuki|Jimny|2020|JLX-L':  '~$28,490',
  'Suzuki|Jimny|2024|Lite':   '~$24,990',
  'Suzuki|Jimny|2024|JLX':    '~$28,990',
  'Suzuki|Jimny|2024|JLX-L':  '~$31,490',
  'Suzuki|Jimny|2024|5-door': '~$34,990',

  // ── s54: Suzuki Grand Vitara ──
  'Suzuki|Grand Vitara|2001|GLS':    '~$27,990',
  'Suzuki|Grand Vitara|2001|V6':     '~$34,990',
  'Suzuki|Grand Vitara|2004|GLS':    '~$30,990',
  'Suzuki|Grand Vitara|2004|V6':     '~$37,990',
  'Suzuki|Grand Vitara|2007|GL':     '~$25,990',
  'Suzuki|Grand Vitara|2007|GLS':    '~$33,990',
  'Suzuki|Grand Vitara|2007|Sport':  '~$37,990',
  'Suzuki|Grand Vitara|2012|GL':     '~$27,990',
  'Suzuki|Grand Vitara|2012|GLS':    '~$35,990',
  'Suzuki|Grand Vitara|2012|Sport':  '~$39,990',
  'Suzuki|Grand Vitara|2015|GL':     '~$28,990',
  'Suzuki|Grand Vitara|2015|GLS':    '~$36,990',
  'Suzuki|Grand Vitara|2015|Sport':  '~$40,990',
  'Suzuki|Grand Vitara|2024|GL':     '~$32,990',
  'Suzuki|Grand Vitara|2024|GLX':    '~$37,990',

  // ── s54: Suzuki Vitara ──
  'Suzuki|Vitara|2016|RT':          '~$22,990',
  'Suzuki|Vitara|2016|RT-S':        '~$27,990',
  'Suzuki|Vitara|2016|S Turbo':     '~$33,990',
  'Suzuki|Vitara|2020|GL':          '~$24,990',
  'Suzuki|Vitara|2020|GLX':         '~$29,990',
  'Suzuki|Vitara|2020|GLX Turbo':   '~$35,990',
  'Suzuki|Vitara|2024|GL':          '~$26,990',
  'Suzuki|Vitara|2024|GLX':         '~$31,990',
  'Suzuki|Vitara|2024|GLX Turbo':   '~$37,990',

  // ── s54: Suzuki Baleno ──
  'Suzuki|Baleno|2017|GL':   '~$16,490',
  'Suzuki|Baleno|2017|GLX':  '~$18,490',
  'Suzuki|Baleno|2021|GL':   '~$18,990',
  'Suzuki|Baleno|2021|GLX':  '~$21,490',

  // ── s54: Suzuki S-Cross ──
  'Suzuki|S-Cross|2014|GL':          '~$22,490',
  'Suzuki|S-Cross|2014|GLX':         '~$26,490',
  'Suzuki|S-Cross|2018|GL':          '~$24,490',
  'Suzuki|S-Cross|2018|GLX':         '~$27,490',
  'Suzuki|S-Cross|2018|GLX Turbo':   '~$32,490',
  'Suzuki|S-Cross|2023|GL':          '~$28,990',
  'Suzuki|S-Cross|2023|GLX':         '~$32,990',
  'Suzuki|S-Cross|2023|GLX Turbo':   '~$38,990',
  'Suzuki|S-Cross|2025|GL':          '~$30,990',
  'Suzuki|S-Cross|2025|GLX':         '~$34,990',
  'Suzuki|S-Cross|2025|GLX Turbo':   '~$40,990',

  // ── s54: Suzuki Ignis ──
  'Suzuki|Ignis|2018|GL':   '~$17,490',
  'Suzuki|Ignis|2018|GLX':  '~$19,490',
  'Suzuki|Ignis|2021|GL':   '~$18,990',
  'Suzuki|Ignis|2021|GLX':  '~$20,990',

  // ── s55: Land Rover Defender ──
  'Land Rover|Defender|2006|90':      '~$48,990',
  'Land Rover|Defender|2006|110':     '~$51,990',
  'Land Rover|Defender|2010|90':      '~$51,990',
  'Land Rover|Defender|2010|110':     '~$54,990',
  'Land Rover|Defender|2014|90':      '~$54,990',
  'Land Rover|Defender|2014|110':     '~$57,990',
  'Land Rover|Defender|2021|90 S':    '~$79,990',
  'Land Rover|Defender|2021|110 S':   '~$83,990',
  'Land Rover|Defender|2021|110 P400':'~$119,990',
  'Land Rover|Defender|2021|110 V8':  '~$169,990',
  'Land Rover|Defender|2025|90 S':    '~$84,990',
  'Land Rover|Defender|2025|110 S':   '~$89,990',
  'Land Rover|Defender|2025|110 P400':'~$124,990',
  'Land Rover|Defender|2025|110 V8':  '~$179,990',

  // ── s55: Land Rover Discovery ──
  'Land Rover|Discovery|2007|TDV6':  '~$62,990',
  'Land Rover|Discovery|2007|V8':    '~$74,990',
  'Land Rover|Discovery|2011|TDV6':  '~$67,990',
  'Land Rover|Discovery|2011|SDV8':  '~$87,990',
  'Land Rover|Discovery|2014|TDV6':  '~$69,990',
  'Land Rover|Discovery|2014|SDV8':  '~$89,990',
  'Land Rover|Discovery|2019|SE':    '~$79,990',
  'Land Rover|Discovery|2019|HSE':   '~$94,990',
  'Land Rover|Discovery|2024|SE':    '~$84,990',
  'Land Rover|Discovery|2024|HSE':   '~$99,990',

  // ── s55: Land Rover Discovery Sport ──
  'Land Rover|Discovery Sport|2016|SE':         '~$47,990',
  'Land Rover|Discovery Sport|2016|HSE':        '~$57,990',
  'Land Rover|Discovery Sport|2016|R-Dynamic':  '~$62,990',
  'Land Rover|Discovery Sport|2020|SE':         '~$52,990',
  'Land Rover|Discovery Sport|2020|HSE':        '~$62,990',
  'Land Rover|Discovery Sport|2020|R-Dynamic':  '~$67,990',
  'Land Rover|Discovery Sport|2024|SE':         '~$56,990',
  'Land Rover|Discovery Sport|2024|HSE':        '~$66,990',
  'Land Rover|Discovery Sport|2024|R-Dynamic':  '~$71,990',

  // ── s55: Land Rover Range Rover ──
  'Land Rover|Range Rover|2004|Vogue':          '~$129,990',
  'Land Rover|Range Rover|2004|Supercharged':   '~$169,990',
  'Land Rover|Range Rover|2008|Vogue':          '~$142,990',
  'Land Rover|Range Rover|2008|Supercharged':   '~$184,990',
  'Land Rover|Range Rover|2011|Vogue':          '~$164,990',
  'Land Rover|Range Rover|2011|Supercharged':   '~$194,990',
  'Land Rover|Range Rover|2014|Vogue':          '~$174,990',
  'Land Rover|Range Rover|2014|Autobiography':  '~$219,990',
  'Land Rover|Range Rover|2014|SVAutobiography':'~$289,990',
  'Land Rover|Range Rover|2018|Vogue':          '~$184,990',
  'Land Rover|Range Rover|2018|Autobiography':  '~$239,990',
  'Land Rover|Range Rover|2018|SVAutobiography':'~$319,990',
  'Land Rover|Range Rover|2021|Vogue':          '~$194,990',
  'Land Rover|Range Rover|2021|Autobiography':  '~$254,990',
  'Land Rover|Range Rover|2021|SVAutobiography':'~$349,990',
  'Land Rover|Range Rover|2023|SE':             '~$199,990',
  'Land Rover|Range Rover|2023|Autobiography':  '~$269,990',
  'Land Rover|Range Rover|2023|SV':             '~$399,990',
  'Land Rover|Range Rover|2025|SE':             '~$209,990',
  'Land Rover|Range Rover|2025|Autobiography':  '~$279,990',
  'Land Rover|Range Rover|2025|SV':             '~$419,990',

  // ── s55: Land Rover Range Rover Sport ──
  'Land Rover|Range Rover Sport|2006|TDV6':        '~$74,990',
  'Land Rover|Range Rover Sport|2006|Supercharged': '~$89,990',
  'Land Rover|Range Rover Sport|2010|TDV6':        '~$79,990',
  'Land Rover|Range Rover Sport|2010|Supercharged': '~$99,990',
  'Land Rover|Range Rover Sport|2014|SE':          '~$84,990',
  'Land Rover|Range Rover Sport|2014|HSE':         '~$99,990',
  'Land Rover|Range Rover Sport|2014|SVR':         '~$149,990',
  'Land Rover|Range Rover Sport|2018|SE':          '~$94,990',
  'Land Rover|Range Rover Sport|2018|HSE':         '~$109,990',
  'Land Rover|Range Rover Sport|2018|SVR':         '~$159,990',
  'Land Rover|Range Rover Sport|2021|SE':          '~$99,990',
  'Land Rover|Range Rover Sport|2021|HSE':         '~$114,990',
  'Land Rover|Range Rover Sport|2021|SVR':         '~$169,990',
  'Land Rover|Range Rover Sport|2023|S':           '~$109,990',
  'Land Rover|Range Rover Sport|2023|SE':          '~$119,990',
  'Land Rover|Range Rover Sport|2023|P530':        '~$199,990',
  'Land Rover|Range Rover Sport|2025|S':           '~$114,990',
  'Land Rover|Range Rover Sport|2025|SE':          '~$124,990',
  'Land Rover|Range Rover Sport|2025|P530':        '~$209,990',

  // ── s55: Land Rover Range Rover Evoque ──
  'Land Rover|Range Rover Evoque|2012|Pure':       '~$44,990',
  'Land Rover|Range Rover Evoque|2012|Prestige':   '~$52,990',
  'Land Rover|Range Rover Evoque|2012|Dynamic':    '~$62,990',
  'Land Rover|Range Rover Evoque|2016|Pure':       '~$46,990',
  'Land Rover|Range Rover Evoque|2016|Prestige':   '~$54,990',
  'Land Rover|Range Rover Evoque|2016|Dynamic':    '~$64,990',
  'Land Rover|Range Rover Evoque|2020|S':          '~$57,490',
  'Land Rover|Range Rover Evoque|2020|SE':         '~$67,490',
  'Land Rover|Range Rover Evoque|2020|R-Dynamic':  '~$72,490',
  'Land Rover|Range Rover Evoque|2024|S':          '~$62,490',
  'Land Rover|Range Rover Evoque|2024|SE':         '~$72,490',
  'Land Rover|Range Rover Evoque|2024|R-Dynamic':  '~$77,490',

  // ── s55: Land Rover Range Rover Velar ──
  'Land Rover|Range Rover Velar|2018|S':          '~$74,490',
  'Land Rover|Range Rover Velar|2018|SE':         '~$84,490',
  'Land Rover|Range Rover Velar|2018|R-Dynamic':  '~$94,490',
  'Land Rover|Range Rover Velar|2022|S':          '~$79,490',
  'Land Rover|Range Rover Velar|2022|SE':         '~$89,490',
  'Land Rover|Range Rover Velar|2022|R-Dynamic':  '~$99,490',
  'Land Rover|Range Rover Velar|2025|S':          '~$84,490',
  'Land Rover|Range Rover Velar|2025|SE':         '~$94,490',
  'Land Rover|Range Rover Velar|2025|R-Dynamic':  '~$104,490',

  // ── s55: Land Rover Freelander ──
  'Land Rover|Freelander|2007|SE':   '~$34,990',
  'Land Rover|Freelander|2007|HSE':  '~$42,990',
  'Land Rover|Freelander|2007|TD4':  '~$36,990',
  'Land Rover|Freelander|2012|SE':   '~$38,990',
  'Land Rover|Freelander|2012|HSE':  '~$46,990',
  'Land Rover|Freelander|2012|TD4':  '~$40,990',

  // ── s56: Volvo S60 ──
  'Volvo|S60|2002|2.4':          '~$42,990',
  'Volvo|S60|2002|T5':           '~$54,990',
  'Volvo|S60|2006|2.4':          '~$44,990',
  'Volvo|S60|2006|T5':           '~$56,990',
  'Volvo|S60|2009|2.4':          '~$46,990',
  'Volvo|S60|2011|T4':           '~$47,990',
  'Volvo|S60|2011|T5':           '~$54,990',
  'Volvo|S60|2011|T6':           '~$62,990',
  'Volvo|S60|2014|T6':           '~$64,990',
  'Volvo|S60|2015|T4':           '~$49,990',
  'Volvo|S60|2015|T5':           '~$56,990',
  'Volvo|S60|2018|T4':           '~$52,990',
  'Volvo|S60|2019|T5':           '~$59,990',
  'Volvo|S60|2019|T6':           '~$69,990',
  'Volvo|S60|2021|T5':           '~$62,990',
  'Volvo|S60|2021|T6':           '~$72,990',
  'Volvo|S60|2023|B4':           '~$67,990',
  'Volvo|S60|2023|B5':           '~$74,990',
  'Volvo|S60|2023|T8 Recharge':  '~$89,990',
  'Volvo|S60|2025|B4':           '~$69,990',
  'Volvo|S60|2025|B5':           '~$76,990',
  'Volvo|S60|2025|T8 Recharge':  '~$92,990',

  // ── s56: Volvo S90 ──
  'Volvo|S90|2017|T5':           '~$62,990',
  'Volvo|S90|2017|T6':           '~$72,990',
  'Volvo|S90|2017|T8 Recharge':  '~$87,990',
  'Volvo|S90|2020|T5':           '~$64,990',
  'Volvo|S90|2020|T6':           '~$74,990',
  'Volvo|S90|2021|B5':           '~$74,990',
  'Volvo|S90|2021|T8 Recharge':  '~$92,990',
  'Volvo|S90|2024|B5':           '~$79,990',
  'Volvo|S90|2024|T8 Recharge':  '~$97,990',

  // ── s56: Volvo V60 ──
  'Volvo|V60|2011|T4':           '~$49,990',
  'Volvo|V60|2011|T5':           '~$54,990',
  'Volvo|V60|2011|T6':           '~$64,990',
  'Volvo|V60|2014|T4':           '~$51,990',
  'Volvo|V60|2014|T6':           '~$67,990',
  'Volvo|V60|2015|T5':           '~$56,990',
  'Volvo|V60|2017|T4':           '~$53,990',
  'Volvo|V60|2019|T5':           '~$62,990',
  'Volvo|V60|2019|T6':           '~$72,990',
  'Volvo|V60|2022|B5':           '~$74,990',
  'Volvo|V60|2022|T8 Recharge':  '~$89,990',
  'Volvo|V60|2025|B5':           '~$76,990',
  'Volvo|V60|2025|T8 Recharge':  '~$92,990',

  // ── s56: Volvo V90 ──
  'Volvo|V90|2017|T5':           '~$69,990',
  'Volvo|V90|2017|T6':           '~$79,990',
  'Volvo|V90|2017|T8 Recharge':  '~$89,990',
  'Volvo|V90|2019|T5':           '~$71,990',
  'Volvo|V90|2019|T6':           '~$81,990',
  'Volvo|V90|2021|B5':           '~$79,990',
  'Volvo|V90|2021|T8 Recharge':  '~$94,990',
  'Volvo|V90|2024|B5':           '~$84,990',
  'Volvo|V90|2024|T8 Recharge':  '~$99,990',

  // ── s56: Volvo V40 ──
  'Volvo|V40|2013|T3':  '~$37,990',
  'Volvo|V40|2013|T4':  '~$42,990',
  'Volvo|V40|2013|T5':  '~$52,990',
  'Volvo|V40|2017|T3':  '~$39,990',
  'Volvo|V40|2017|T4':  '~$44,990',
  'Volvo|V40|2017|T5':  '~$54,990',

  // ── s56: Volvo XC40 ──
  'Volvo|XC40|2018|T4':          '~$47,990',
  'Volvo|XC40|2018|T5':          '~$54,990',
  'Volvo|XC40|2021|B3':          '~$49,990',
  'Volvo|XC40|2021|B5':          '~$56,990',
  'Volvo|XC40|2021|Recharge P8': '~$74,990',
  'Volvo|XC40|2024|B4':          '~$54,990',
  'Volvo|XC40|2024|Recharge':    '~$69,990',

  // ── s56: Volvo XC60 ──
  'Volvo|XC60|2009|T5':          '~$52,990',
  'Volvo|XC60|2009|T6':          '~$62,990',
  'Volvo|XC60|2013|T5':          '~$54,990',
  'Volvo|XC60|2013|T6':          '~$64,990',
  'Volvo|XC60|2018|T5':          '~$59,990',
  'Volvo|XC60|2018|T6':          '~$69,990',
  'Volvo|XC60|2018|T8 Recharge': '~$84,990',
  'Volvo|XC60|2020|T5':          '~$61,990',
  'Volvo|XC60|2020|T6':          '~$71,990',
  'Volvo|XC60|2022|B5':          '~$74,990',
  'Volvo|XC60|2022|T8 Recharge': '~$89,990',
  'Volvo|XC60|2025|B5':          '~$77,990',
  'Volvo|XC60|2025|T8 Recharge': '~$92,990',

  // ── s56: Volvo XC90 ──
  'Volvo|XC90|2003|T6':          '~$69,990',
  'Volvo|XC90|2003|2.5T':        '~$64,990',
  'Volvo|XC90|2006|2.5T':        '~$67,990',
  'Volvo|XC90|2008|T6':          '~$79,990',
  'Volvo|XC90|2008|V8':          '~$89,990',
  'Volvo|XC90|2012|T6':          '~$84,990',
  'Volvo|XC90|2012|V8':          '~$94,990',
  'Volvo|XC90|2016|T5':          '~$74,990',
  'Volvo|XC90|2016|T6':          '~$84,990',
  'Volvo|XC90|2016|T8 Recharge': '~$99,990',
  'Volvo|XC90|2019|T5':          '~$77,990',
  'Volvo|XC90|2019|T6':          '~$87,990',
  'Volvo|XC90|2020|B5':          '~$84,990',
  'Volvo|XC90|2020|T8 Recharge': '~$99,990',
  'Volvo|XC90|2024|B5':          '~$89,990',
  'Volvo|XC90|2024|T8 Recharge': '~$104,990',

  // ── s56: Volvo C40 / EX30 / EX90 ──
  'Volvo|C40 Recharge|2022|Single Motor':   '~$64,990',
  'Volvo|C40 Recharge|2022|Twin Motor':     '~$74,990',
  'Volvo|C40 Recharge|2024|Twin Motor':     '~$77,990',
  'Volvo|C40 Recharge|2025|Extended Range': '~$69,990',
  'Volvo|EX30|2024|Single Motor':           '~$44,990',
  'Volvo|EX30|2024|Twin Motor':             '~$54,990',
  'Volvo|EX30|2025|Extended Range':         '~$47,990',
  'Volvo|EX90|2025|Twin Motor':             '~$119,990',
  'Volvo|EX90|2025|Twin Motor Performance': '~$139,990',

  // ── s57: Tesla Model 3 ──
  'Tesla|Model 3|2017|Standard Range':      '~$51,700',
  'Tesla|Model 3|2017|Long Range':          '~$60,700',
  'Tesla|Model 3|2017|Performance':         '~$72,700',
  'Tesla|Model 3|2020|Standard Range':      '~$55,900',
  'Tesla|Model 3|2020|Long Range':          '~$65,900',
  'Tesla|Model 3|2021|Standard Range RWD':  '~$56,900',
  'Tesla|Model 3|2021|Long Range AWD':      '~$66,900',
  'Tesla|Model 3|2021|Performance':         '~$78,900',
  'Tesla|Model 3|2024|RWD':                 '~$59,900',
  'Tesla|Model 3|2024|Long Range AWD':      '~$69,900',
  'Tesla|Model 3|2024|Performance':         '~$84,900',

  // ── s57: Tesla Model Y ──
  'Tesla|Model Y|2020|Long Range AWD':  '~$74,900',
  'Tesla|Model Y|2020|Performance':     '~$84,900',
  'Tesla|Model Y|2022|Rear-Wheel Drive':'~$67,900',
  'Tesla|Model Y|2022|Long Range AWD':  '~$78,900',
  'Tesla|Model Y|2022|Performance':     '~$89,900',
  'Tesla|Model Y|2025|Rear-Wheel Drive':'~$65,900',
  'Tesla|Model Y|2025|Long Range AWD':  '~$76,900',
  'Tesla|Model Y|2025|Performance':     '~$87,900',

  // ── s57: Tesla Model S ──
  'Tesla|Model S|2013|Base':        '~$119,990',
  'Tesla|Model S|2013|Performance': '~$149,990',
  'Tesla|Model S|2016|75D':         '~$124,990',
  'Tesla|Model S|2016|P100D':       '~$214,990',
  'Tesla|Model S|2018|75D':         '~$129,990',
  'Tesla|Model S|2018|P100D':       '~$224,990',
  'Tesla|Model S|2020|Long Range':  '~$139,990',
  'Tesla|Model S|2020|Plaid':       '~$184,990',
  'Tesla|Model S|2024|Long Range':  '~$144,990',
  'Tesla|Model S|2024|Plaid':       '~$189,990',

  // ── s57: Tesla Model X ──
  'Tesla|Model X|2016|75D':         '~$134,990',
  'Tesla|Model X|2016|P100D':       '~$224,990',
  'Tesla|Model X|2018|75D':         '~$139,990',
  'Tesla|Model X|2018|P100D':       '~$229,990',
  'Tesla|Model X|2020|Long Range':  '~$149,990',
  'Tesla|Model X|2020|Plaid':       '~$199,990',
  'Tesla|Model X|2024|Long Range':  '~$154,990',
  'Tesla|Model X|2024|Plaid':       '~$209,990',

  // ── s57: Tesla Cybertruck ──
  'Tesla|Cybertruck|2024|RWD':        '~$99,990',
  'Tesla|Cybertruck|2024|AWD':        '~$119,990',
  'Tesla|Cybertruck|2024|Cyberbeast': '~$149,990',

  // ── s58: Isuzu D-MAX ──
  'Isuzu|D-MAX|2003|SX':        '~$28,990',
  'Isuzu|D-MAX|2003|LS':        '~$34,990',
  'Isuzu|D-MAX|2008|SX':        '~$31,990',
  'Isuzu|D-MAX|2008|LS':        '~$38,990',
  'Isuzu|D-MAX|2012|SX':        '~$33,990',
  'Isuzu|D-MAX|2012|LS':        '~$41,990',
  'Isuzu|D-MAX|2012|LS-U':      '~$44,990',
  'Isuzu|D-MAX|2016|SX':        '~$35,990',
  'Isuzu|D-MAX|2016|LS':        '~$43,990',
  'Isuzu|D-MAX|2016|LS-U':      '~$47,990',
  'Isuzu|D-MAX|2020|SX':        '~$37,990',
  'Isuzu|D-MAX|2020|LS':        '~$46,990',
  'Isuzu|D-MAX|2020|LS-U':      '~$51,990',
  'Isuzu|D-MAX|2020|X-Terrain': '~$55,990',
  'Isuzu|D-MAX|2024|SX':        '~$38,990',
  'Isuzu|D-MAX|2024|LS':        '~$49,990',
  'Isuzu|D-MAX|2024|LS-U':      '~$54,990',
  'Isuzu|D-MAX|2024|X-Terrain': '~$57,990',

  // ── s58: Isuzu MU-X ──
  'Isuzu|MU-X|2014|LS-M':      '~$39,990',
  'Isuzu|MU-X|2014|LS-T':      '~$44,990',
  'Isuzu|MU-X|2014|LS-U':      '~$49,990',
  'Isuzu|MU-X|2018|LS-M':      '~$42,990',
  'Isuzu|MU-X|2018|LS-T':      '~$47,990',
  'Isuzu|MU-X|2018|LS-U':      '~$52,990',
  'Isuzu|MU-X|2022|LS-M':      '~$46,990',
  'Isuzu|MU-X|2022|LS-T':      '~$51,990',
  'Isuzu|MU-X|2022|LS-U':      '~$56,990',
  'Isuzu|MU-X|2022|X-Terrain': '~$62,990',
  'Isuzu|MU-X|2025|LS-T':      '~$53,990',
  'Isuzu|MU-X|2025|LS-U':      '~$58,990',
  'Isuzu|MU-X|2025|X-Terrain': '~$64,990',

  // ── s59: MG MG3 ──
  'MG|MG3|2011|Core':    '~$14,990',
  'MG|MG3|2011|Excite':  '~$16,990',
  'MG|MG3|2016|Core':    '~$15,990',
  'MG|MG3|2016|Excite':  '~$17,990',
  'MG|MG3|2021|Core':    '~$16,990',
  'MG|MG3|2021|Excite':  '~$18,990',
  'MG|MG3|2024|Core':    '~$18,990',
  'MG|MG3|2024|Excite':  '~$21,490',

  // ── s59: MG MG6 ──
  'MG|MG6|2012|Standard':  '~$18,990',
  'MG|MG6|2012|Magnette':  '~$22,990',
  'MG|MG6|2016|Standard':  '~$19,990',
  'MG|MG6|2016|Magnette':  '~$23,990',

  // ── s59: MG ZS ──
  'MG|ZS|2018|Excite':   '~$19,990',
  'MG|ZS|2018|Essence':  '~$24,990',
  'MG|ZS|2022|Excite':   '~$22,990',
  'MG|ZS|2022|Essence':  '~$27,990',
  'MG|ZS|2025|Excite':   '~$23,990',
  'MG|ZS|2025|Essence':  '~$28,990',

  // ── s59: MG ZS EV ──
  'MG|ZS EV|2021|Standard Range':  '~$34,990',
  'MG|ZS EV|2021|Long Range':      '~$39,990',
  'MG|ZS EV|2024|Standard Range':  '~$36,990',
  'MG|ZS EV|2024|Long Range':      '~$41,990',

  // ── s59: MG HS ──
  'MG|MG HS|2020|Core':    '~$26,990',
  'MG|MG HS|2020|Excite':  '~$29,990',
  'MG|MG HS|2020|Essence': '~$34,990',
  'MG|MG HS|2023|Core':    '~$28,990',
  'MG|MG HS|2023|Excite':  '~$31,990',
  'MG|MG HS|2023|Essence': '~$36,990',
  'MG|MG HS|2023|PHEV':    '~$44,990',
  'MG|MG HS|2025|Excite':  '~$32,990',
  'MG|MG HS|2025|Essence': '~$37,990',
  'MG|MG HS|2025|PHEV':    '~$46,990',

  // ── s59: MG MG4 ──
  'MG|MG4|2023|Excite 51':   '~$34,990',
  'MG|MG4|2023|Excite 64':   '~$39,990',
  'MG|MG4|2023|Essence 64':  '~$44,990',
  'MG|MG4|2023|X-Power':     '~$54,990',
  'MG|MG4|2025|Excite 51':   '~$36,990',
  'MG|MG4|2025|Excite 64':   '~$41,990',
  'MG|MG4|2025|Essence 64':  '~$46,990',
  'MG|MG4|2025|X-Power':     '~$56,990',

  // ── s59: MG Cyberster ──
  'MG|Cyberster|2024|Trophy':  '~$69,990',
  'MG|Cyberster|2025|Trophy':  '~$69,990',

  // ── s60: GWM Haval H2 ──
  'GWM|Haval H2|2015|LUX':      '~$18,990',
  'GWM|Haval H2|2015|Premium':  '~$22,990',
  'GWM|Haval H2|2019|LUX':      '~$19,990',
  'GWM|Haval H2|2019|Premium':  '~$23,990',

  // ── s60: GWM Haval H6 ──
  'GWM|Haval H6|2015|LUX':        '~$22,990',
  'GWM|Haval H6|2015|Premium':    '~$26,990',
  'GWM|Haval H6|2019|LUX':        '~$24,990',
  'GWM|Haval H6|2019|Premium':    '~$28,990',
  'GWM|Haval H6|2022|LUX':        '~$28,990',
  'GWM|Haval H6|2022|Premium':    '~$33,990',
  'GWM|Haval H6|2022|Ultra':      '~$38,990',
  'GWM|Haval H6|2025|LUX':        '~$30,990',
  'GWM|Haval H6|2025|Premium':    '~$35,990',
  'GWM|Haval H6|2025|Ultra PHEV': '~$46,990',

  // ── s60: GWM Haval H9 ──
  'GWM|Haval H9|2015|LUX':      '~$39,990',
  'GWM|Haval H9|2015|Premium':  '~$44,990',
  'GWM|Haval H9|2020|LUX':      '~$41,990',
  'GWM|Haval H9|2020|Premium':  '~$46,990',
  'GWM|Haval H9|2023|LUX':      '~$44,990',
  'GWM|Haval H9|2023|Premium':  '~$49,990',
  'GWM|Haval H9|2025|LUX':      '~$46,990',
  'GWM|Haval H9|2025|Premium':  '~$51,990',

  // ── s60: GWM Haval Jolion ──
  'GWM|Haval Jolion|2021|LUX':      '~$26,990',
  'GWM|Haval Jolion|2021|Premium':  '~$31,990',
  'GWM|Haval Jolion|2021|Ultra':    '~$36,990',
  'GWM|Haval Jolion|2024|LUX':      '~$28,990',
  'GWM|Haval Jolion|2024|Premium':  '~$33,990',
  'GWM|Haval Jolion|2024|Ultra':    '~$38,990',

  // ── s60: GWM Ute ──
  'GWM|Ute|2021|Standard':   '~$30,990',
  'GWM|Ute|2021|Premium':    '~$35,990',
  'GWM|Ute|2021|Cannon-L':   '~$39,990',
  'GWM|Ute|2024|Standard':   '~$32,990',
  'GWM|Ute|2024|Premium':    '~$37,990',
  'GWM|Ute|2024|Cannon-L':   '~$41,990',

  // ── s60: GWM Tank 300 ──
  'GWM|Tank 300|2023|LUX':        '~$54,990',
  'GWM|Tank 300|2023|Ultra':      '~$64,990',
  'GWM|Tank 300|2025|LUX':        '~$56,990',
  'GWM|Tank 300|2025|Ultra PHEV': '~$69,990',

  // ── s60: GWM Tank 500 ──
  'GWM|Tank 500|2024|LUX':        '~$74,990',
  'GWM|Tank 500|2024|Ultra PHEV': '~$84,990',
  'GWM|Tank 500|2025|LUX':        '~$76,990',
  'GWM|Tank 500|2025|Ultra PHEV': '~$86,990',

  // ── s61: BYD Atto 3 ──
  'BYD|Atto 3|2022|Standard Range':  '~$44,990',
  'BYD|Atto 3|2022|Extended Range':  '~$49,990',
  'BYD|Atto 3|2024|Standard Range':  '~$43,990',
  'BYD|Atto 3|2024|Extended Range':  '~$47,990',

  // ── s61: BYD Seal ──
  'BYD|Seal|2023|Standard Range RWD':  '~$49,990',
  'BYD|Seal|2023|Long Range RWD':      '~$56,990',
  'BYD|Seal|2023|AWD Performance':     '~$66,990',
  'BYD|Seal|2025|Standard Range RWD':  '~$51,990',
  'BYD|Seal|2025|Long Range RWD':      '~$58,990',
  'BYD|Seal|2025|AWD Performance':     '~$68,990',

  // ── s61: BYD Dolphin ──
  'BYD|Dolphin|2023|Standard Range':  '~$34,990',
  'BYD|Dolphin|2023|Extended Range':  '~$40,990',
  'BYD|Dolphin|2025|Standard Range':  '~$35,990',
  'BYD|Dolphin|2025|Extended Range':  '~$41,990',

  // ── s61: BYD Shark ──
  'BYD|Shark|2025|Premium':  '~$69,990',
  'BYD|Shark|2026|Premium':  '~$69,990',

  // ── s61: BYD Sealion 6 ──
  'BYD|Sealion 6|2024|PHEV':      '~$44,990',
  'BYD|Sealion 6|2024|PHEV AWD':  '~$51,990',
  'BYD|Sealion 6|2025|PHEV':      '~$46,990',
  'BYD|Sealion 6|2025|PHEV AWD':  '~$53,990',

  // ── s61: BYD Sealion 7 ──
  'BYD|Sealion 7|2024|Standard Range':   '~$46,990',
  'BYD|Sealion 7|2024|Long Range AWD':   '~$54,990',
  'BYD|Sealion 7|2025|Standard Range':   '~$48,990',
  'BYD|Sealion 7|2025|Long Range AWD':   '~$56,990',

  // ── s62: Genesis G70 ──
  'Genesis|G70|2019|2.0T':        '~$56,900',
  'Genesis|G70|2019|3.3T Sport':  '~$69,900',
  'Genesis|G70|2022|2.0T':        '~$59,900',
  'Genesis|G70|2022|3.3T Sport':  '~$72,900',
  'Genesis|G70|2025|2.0T':        '~$62,900',
  'Genesis|G70|2025|3.3T Sport':  '~$76,900',

  // ── s62: Genesis G80 ──
  'Genesis|G80|2017|2.0T':        '~$66,900',
  'Genesis|G80|2017|3.3T Sport':  '~$79,900',
  'Genesis|G80|2017|5.0':         '~$89,900',
  'Genesis|G80|2019|2.0T':        '~$67,900',
  'Genesis|G80|2019|3.3T Sport':  '~$80,900',
  'Genesis|G80|2019|5.0':         '~$90,900',
  'Genesis|G80|2021|2.5T':        '~$79,900',
  'Genesis|G80|2021|3.5T':        '~$94,900',
  'Genesis|G80|2021|Electrified': '~$149,900',
  'Genesis|G80|2025|2.5T':        '~$84,900',
  'Genesis|G80|2025|3.5T':        '~$99,900',
  'Genesis|G80|2025|Electrified': '~$154,900',

  // ── s62: Genesis G90 ──
  'Genesis|G90|2017|3.3T':          '~$119,900',
  'Genesis|G90|2017|5.0':           '~$139,900',
  'Genesis|G90|2020|3.3T':          '~$124,900',
  'Genesis|G90|2020|5.0':           '~$144,900',
  'Genesis|G90|2023|3.5T':          '~$219,900',
  'Genesis|G90|2023|3.5T e-AWD':    '~$239,900',
  'Genesis|G90|2025|3.5T':          '~$224,900',
  'Genesis|G90|2025|3.5T e-AWD':    '~$244,900',

  // ── s62: Genesis GV70 ──
  'Genesis|GV70|2021|2.5T':        '~$64,900',
  'Genesis|GV70|2021|3.5T':        '~$79,900',
  'Genesis|GV70|2023|2.5T':        '~$67,900',
  'Genesis|GV70|2023|3.5T':        '~$82,900',
  'Genesis|GV70|2023|Electrified': '~$109,900',
  'Genesis|GV70|2025|2.5T':        '~$69,900',
  'Genesis|GV70|2025|Electrified': '~$114,900',

  // ── s62: Genesis GV80 ──
  'Genesis|GV80|2021|2.5T':        '~$74,900',
  'Genesis|GV80|2021|3.5T':        '~$89,900',
  'Genesis|GV80|2024|2.5T':        '~$79,900',
  'Genesis|GV80|2024|3.5T':        '~$94,900',
  'Genesis|GV80|2024|Electrified': '~$129,900',

  // ── s63: Gap fills ──
  'Kia|EV9|2024|Air Long Range':               '~$89,990',
  'Kia|EV9|2024|Earth Long Range':             '~$99,990',
  'Kia|EV9|2024|GT-Line':                      '~$109,990',
  'Hyundai|Ioniq 5 N|2024|N':                  '~$109,990',
  'Honda|CR-V|2024|VTi':                       '~$47,990',
  'Honda|CR-V|2024|VTi-L':                     '~$55,990',
  'Honda|CR-V|2024|VTi-LX':                    '~$61,990',
  'Volkswagen|ID.7|2024|Pro':                  '~$74,990',
  'Volkswagen|ID.7|2024|Pro S':                '~$84,990',
  'Mercedes-Benz|EQE SUV|2023|350':            '~$119,990',
  'Mercedes-Benz|EQE SUV|2023|500 4MATIC':     '~$139,990',
  'Mercedes-Benz|EQE SUV|2023|AMG EQE 43':     '~$179,990',
  'Mercedes-Benz|EQE SUV|2025|350':            '~$124,990',
  'Mercedes-Benz|EQE SUV|2025|500 4MATIC':     '~$144,990',
  'Mercedes-Benz|EQE SUV|2025|AMG EQE 43':     '~$184,990',
  'Mercedes-Benz|EQS SUV|2023|450':            '~$159,990',
  'Mercedes-Benz|EQS SUV|2023|580 4MATIC':     '~$189,990',
  'Mercedes-Benz|EQS SUV|2023|AMG EQS 53':     '~$249,990',
  'Mercedes-Benz|EQS SUV|2025|450':            '~$164,990',
  'Mercedes-Benz|EQS SUV|2025|580 4MATIC':     '~$194,990',
  'Mercedes-Benz|EQS SUV|2025|AMG EQS 53':     '~$254,990',

  // ── s64: Jeep Wrangler ──
  'Jeep|Wrangler|2007|Sport':      '~$38,990',
  'Jeep|Wrangler|2007|Sahara':     '~$43,990',
  'Jeep|Wrangler|2007|Rubicon':    '~$47,990',
  'Jeep|Wrangler|2012|Sport':      '~$41,990',
  'Jeep|Wrangler|2012|Sahara':     '~$47,990',
  'Jeep|Wrangler|2012|Rubicon':    '~$51,990',
  'Jeep|Wrangler|2018|Sport':      '~$44,990',
  'Jeep|Wrangler|2018|Sport S':    '~$49,990',
  'Jeep|Wrangler|2018|Sahara':     '~$54,990',
  'Jeep|Wrangler|2018|Rubicon':    '~$59,990',
  'Jeep|Wrangler|2022|Sport S':    '~$52,990',
  'Jeep|Wrangler|2022|Sahara':     '~$59,990',
  'Jeep|Wrangler|2022|Rubicon':    '~$64,990',
  'Jeep|Wrangler|2022|Rubicon 392':'~$109,990',
  'Jeep|Wrangler|2022|4xe':        '~$79,990',

  // ── s64: Jeep Grand Cherokee ──
  'Jeep|Grand Cherokee|2005|Laredo':    '~$46,990',
  'Jeep|Grand Cherokee|2005|Limited':   '~$56,990',
  'Jeep|Grand Cherokee|2005|Overland':  '~$69,990',
  'Jeep|Grand Cherokee|2011|Laredo':    '~$51,990',
  'Jeep|Grand Cherokee|2011|Limited':   '~$61,990',
  'Jeep|Grand Cherokee|2011|Overland':  '~$74,990',
  'Jeep|Grand Cherokee|2011|SRT8':      '~$89,990',
  'Jeep|Grand Cherokee|2016|Laredo':    '~$53,990',
  'Jeep|Grand Cherokee|2016|Limited':   '~$66,990',
  'Jeep|Grand Cherokee|2016|Summit':    '~$84,990',
  'Jeep|Grand Cherokee|2016|SRT':       '~$89,990',
  'Jeep|Grand Cherokee|2016|Trackhawk': '~$149,990',
  'Jeep|Grand Cherokee|2022|Laredo':    '~$59,990',
  'Jeep|Grand Cherokee|2022|Limited':   '~$74,990',
  'Jeep|Grand Cherokee|2022|Summit':    '~$94,990',
  'Jeep|Grand Cherokee|2022|4xe':       '~$84,990',

  // ── s64: Jeep Cherokee ──
  'Jeep|Cherokee|2008|Sport':      '~$32,990',
  'Jeep|Cherokee|2008|Limited':    '~$39,990',
  'Jeep|Cherokee|2014|Sport':      '~$29,990',
  'Jeep|Cherokee|2014|Limited':    '~$36,990',
  'Jeep|Cherokee|2014|Trailhawk':  '~$39,990',
  'Jeep|Cherokee|2019|Sport':      '~$31,990',
  'Jeep|Cherokee|2019|Limited':    '~$37,990',
  'Jeep|Cherokee|2019|Trailhawk':  '~$41,990',

  // ── s64: Jeep Compass ──
  'Jeep|Compass|2017|Sport':      '~$24,990',
  'Jeep|Compass|2017|Limited':    '~$30,990',
  'Jeep|Compass|2017|Trailhawk':  '~$35,990',
  'Jeep|Compass|2022|Sport':      '~$27,990',
  'Jeep|Compass|2022|Longitude':  '~$32,990',
  'Jeep|Compass|2022|Limited':    '~$36,990',
  'Jeep|Compass|2022|Trailhawk':  '~$39,990',
  'Jeep|Compass|2022|4xe':        '~$54,990',

  // ── s64: Jeep Renegade ──
  'Jeep|Renegade|2015|Sport':      '~$24,490',
  'Jeep|Renegade|2015|Limited':    '~$30,490',
  'Jeep|Renegade|2015|Trailhawk':  '~$35,490',
  'Jeep|Renegade|2020|Sport':      '~$26,490',
  'Jeep|Renegade|2020|Limited':    '~$32,490',
  'Jeep|Renegade|2020|Trailhawk':  '~$37,490',

  // ── s64: Jeep Gladiator ──
  'Jeep|Gladiator|2020|Sport S':   '~$62,990',
  'Jeep|Gladiator|2020|Overland':  '~$71,990',
  'Jeep|Gladiator|2020|Rubicon':   '~$79,990',
  'Jeep|Gladiator|2024|Sport S':   '~$64,990',
  'Jeep|Gladiator|2024|Rubicon':   '~$81,990',
};

let applied = 0, missing = [];

for (const n of [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]) {
  const path = `src/data/supplement${n}.json`;
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  let changed = false;
  for (const key of Object.keys(data.specs)) {
    if (data.specs[key].price) continue; // skip already priced
    if (PRICES[key]) { data.specs[key].price = PRICES[key]; applied++; changed = true; }
    else missing.push(key);
  }
  if (changed) fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
  console.log(`s${n}: ${Object.keys(data.specs).length} specs`);
}

console.log(`\nApplied: ${applied}`);
if (missing.length) { console.log(`Missing: ${missing.length}`); missing.forEach(k => console.log(' ', k)); }
else console.log('All keys have prices.');
