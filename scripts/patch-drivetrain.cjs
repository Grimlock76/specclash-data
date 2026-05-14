// patch-drivetrain.cjs — add explicit drivetrain fields to supplement44/46
const fs = require('fs');

function patch(file, rules) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  let patched = 0;
  for (const [key, spec] of Object.entries(data.specs)) {
    for (const [pattern, dr] of rules) {
      if (pattern.test(key)) {
        spec.drivetrain = dr;
        patched++;
        break;
      }
    }
  }
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log(`${file}: ${patched} entries patched`);
}

// Lexus drivetrain rules (checked in order, first match wins)
patch('src/data/supplement44.json', [
  [/\|LS 600h\|/,         'AWD'],
  [/\|LS 500h\|/,         'AWD'],
  [/\|UX 250h\|/,         'AWD'],
  [/\|UX 300e\|/,         'AWD'],
  [/\|NX /,               'AWD'],
  [/\|RX /,               'AWD'],
  [/\|GX /,               'AWD'],
  [/\|LX /,               'AWD'],
  [/\|RZ /,               'AWD'],
  [/\|es\|/,              'FWD'],
  [/\|ct\|/,              'FWD'],
  [/\|UX 200\|/,          'FWD'],
  [/\|is\|/,              'RWD'],
  [/\|gs\|/,              'RWD'],
  [/\|ls\|/,              'RWD'],
  [/\|lc\|/,              'RWD'],
  [/\|rc\|/,              'RWD'],
]);

// Porsche drivetrain rules
patch('src/data/supplement46.json', [
  // Taycan base (single motor) = RWD; 4/4S/Turbo/Cross = AWD
  [/taycan\|\d+\|Taycan$/,                      'RWD'],
  [/taycan\|\d+\|Taycan Sport Turismo$/,         'RWD'],
  [/taycan\|\d+\|Taycan (4|4S|Turbo|Cross)/,    'AWD'],
  // Panamera base = RWD; 4, 4S, Turbo, GTS, E-Hybrid variants = AWD
  [/panamera\|\d+\|Panamera$/,                  'RWD'],
  [/panamera\|\d+\|Panamera (4|4S|Turbo|GTS|S E-Hybrid|Turbo S|Turbo Sport)/,'AWD'],
  [/panamera\|\d+\|Panamera S$/,                'RWD'],
  // 911: Carrera 4, Carrera 4S, Turbo, Turbo S, GT2 RS = AWD; everything else = RWD
  [/\|911\|\d+\|(Carrera 4|Carrera 4S|\w*Turbo|GT2 RS)/, 'AWD'],
  [/\|911\|/,                                   'RWD'],
  // 718 and Boxster always RWD
  [/\|718\|/,                                   'RWD'],
  [/\|boxster\|/,                               'RWD'],
  // Cayenne always AWD
  [/\|cayenne\|/,                               'AWD'],
  // Macan always AWD
  [/\|macan\|/,                                 'AWD'],
]);

console.log('Done');
