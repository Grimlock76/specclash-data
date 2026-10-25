'use strict';
// Builds src/data/trimInfo.json — the "Trim details" panel content.
//
// Every rule is scoped by make + model (+ year range) so a trim name only gets
// facts that are true for THAT car: "GR" on a GR Yaris is a 1.6 turbo triple,
// "GR Sport" on an 86 isn't. First matching rule wins, so specific rules go
// before generic ones.
//
//   R(id, { makes, models, years: [from, to], match, exclude }, title, base, summary, highlights)
//   models / match / exclude are case-insensitive regexes; models must match the
//   whole model name. Engine/output claims only where we're sure of them —
//   leave a bullet out rather than guess (same rule as the spec data).
const fs = require('fs'), path = require('path');
const rules = [];
const R = (id, scope, title, base, summary, highlights) =>
  rules.push({ id, ...scope, title, base, summary, highlights });

// ───────────────────────── Holden (Commodore) ─────────────────────────
const COMMODORE = ['Commodore'];
R('ss-v-redline', { makes: ['Holden'], models: COMMODORE, years: [2013, 2017], match: ['SS ?V Redline'] },
  'SS V Redline', 'SS V', 'Track-focused top SS of the VF era.', [
    'V8: 6.0L (VF) or 6.2L LS3, 304 kW / 570 Nm (VF II)',
    'FE3 sports suspension tune',
    'Brembo four-piston calipers front and rear',
    'Forged alloy wheels',
    'Launch control on manual cars',
  ]);
R('ss-black', { makes: ['Holden'], models: COMMODORE, years: [2014, 2017], match: ['SS Black'] },
  'SS Black Edition', 'SS', 'Appearance pack over the SS. Same V8, blacked-out look.', [
    'Gloss black wheels and exterior trim',
    'Black badging and accents',
    'Same V8 drivetrain as the SS of its series',
  ]);
R('sv6-black', { makes: ['Holden'], models: COMMODORE, years: [2014, 2017], match: ['SV6 Black'] },
  'SV6 Black Edition', 'SV6', 'Appearance pack over the SV6.', [
    'Gloss black wheels and exterior trim',
    'Black badging and accents',
    '3.6L SIDI V6, same as the standard SV6',
  ]);
R('ss-thunder', { makes: ['Holden'], models: COMMODORE, match: ['SS Thunder'] },
  'SS Thunder', 'SS Ute', 'Value-packed special edition of the SS Ute.', [
    'Extra equipment over the standard SS Ute',
    'Unique wheels and Thunder badging',
    'Same V8 drivetrain as the SS of its series',
  ]);
R('storm', { makes: ['Holden'], models: COMMODORE, match: ['Storm'] },
  'Storm Edition', 'SV6 / SS', 'Run-out special edition with extra kit at a sharp price.', [
    'Added equipment over the grade it is based on',
    'Unique wheels and Storm badging',
    'Same drivetrain as the SV6 / SS it is based on',
  ]);
R('zb-calais-v', { makes: ['Holden'], models: COMMODORE, years: [2018, 2020], match: ['ZB Calais-V'] },
  'ZB Calais-V', 'ZB Calais', 'Top luxury ZB, built in Germany on the Opel Insignia.', [
    '3.6L V6, 235 kW / 381 Nm',
    '9-speed automatic, all-wheel drive',
    'Leather trim, heated front seats',
    'Head-up display and BOSE audio',
  ]);
R('zb-calais', { makes: ['Holden'], models: COMMODORE, years: [2018, 2020], match: ['ZB Calais'] },
  'ZB Calais', 'ZB RS', 'Luxury-leaning ZB grade.', [
    '2.0L turbo petrol four, 191 kW / 350 Nm, front-wheel drive',
    '9-speed automatic',
    'Leather-appointed seats',
  ]);
R('calais-v', { makes: ['Holden'], models: COMMODORE, years: [2006, 2017], match: ['Calais V'] },
  'Calais V', 'Calais', 'Flagship Commodore of the VE/VF era.', [
    '3.6L V6 standard, V8 optional (6.2L LS3 on VF II)',
    'Leather trim and extra luxury kit over the Calais',
    'Head-up display (VF)',
  ]);
R('calais', { makes: ['Holden'], models: COMMODORE, years: [2006, 2017], match: ['Calais'] },
  'Calais', 'Berlina / Evoke', 'Luxury Commodore grade.', [
    '3.6L V6 standard',
    'Leather-appointed seats',
    'More comfort and convenience kit than the volume grades',
  ]);
R('ss-v', { makes: ['Holden'], models: COMMODORE, years: [2006, 2017], match: ['SS ?V\\b'], exclude: ['^VZ'] },
  'SS V', 'SS', 'Better-equipped SS. Same V8 hardware.', [
    'Same V8 drivetrain as the SS of its series',
    'Leather trim and extra equipment',
  ]);
R('ss-ve-vf', { makes: ['Holden'], models: COMMODORE, years: [2006, 2017], match: ['\\bSS\\b'], exclude: ['^VZ'] },
  'SS', 'SV6', 'The V8 Commodore of the VE/VF era.', [
    'V8: 6.0L (VE/VF), 6.2L LS3 304 kW / 570 Nm (VF II)',
    '6-speed manual or 6-speed automatic',
    'Sports suspension tune',
    'SS bodykit and badging',
  ]);
R('sv6', { makes: ['Holden'], models: COMMODORE, years: [2004, 2017], match: ['\\bSV6\\b'] },
  'SV6', 'Omega / Evoke', 'Sporty V6 Commodore.', [
    '3.6L V6: Alloytec (VZ/VE), direct-injection SIDI (VE II/VF)',
    'Sports suspension tune',
    'Sports bodykit and alloy wheels',
  ]);
R('berlina', { makes: ['Holden'], models: COMMODORE, years: [2006, 2012], match: ['Berlina'], exclude: ['^VZ'] },
  'Berlina', 'Omega', 'Comfort grade above the Omega.', [
    'Same V6 drivetrains as the Omega',
    'Extra comfort and convenience equipment',
  ]);
R('equipe', { makes: ['Holden'], models: COMMODORE, years: [2013, 2017], match: ['Equipe'] },
  'Equipe', 'Evoke', 'Value-added VF grade above the Evoke.', [
    'Extra equipment over the Evoke',
    'Same drivetrains as the Evoke',
  ]);
R('omega-evoke', { makes: ['Holden'], models: COMMODORE, years: [2006, 2017], match: ['Omega', 'Evoke'] },
  'Omega / Evoke', 'Base', 'Entry Commodore.', [
    '3.0L or 3.6L V6 depending on series',
    'Automatic transmission',
  ]);

// ───────────────────────── HSV / FPV ─────────────────────────
R('hsv-gtsr', { makes: ['HSV'], models: ['GTSR'], years: [2015, 2017], match: ['GTSR'] },
  'HSV GTSR', 'GTS', 'Limited-run hero above the GTS.', [
    '6.2L supercharged LSA V8, 435 kW / 740 Nm',
    'GTSR bodykit, wheels and badging',
  ]);
R('hsv-gts-genf', { makes: ['HSV'], models: ['GTS'], years: [2013, 2017], match: ['GTS'], exclude: ['LS3'] },
  'HSV GTS (Gen-F)', 'Clubsport R8', 'HSV\'s supercharged flagship.', [
    '6.2L supercharged LSA V8, 430 kW / 740 Nm',
    'Tremec TR6060 6-speed manual or 6L90E 6-speed auto',
    'Magnetic Ride Control with Touring, Sport and Track modes',
    'AP Racing forged six-piston front calipers',
    'Torque vectoring, launch control (manual) and head-up display',
  ]);
R('hsv-clubsport-r8', { makes: ['HSV'], models: ['Clubsport'], years: [2007, 2017], match: ['Clubsport R8'], exclude: ['LSA'] },
  'HSV Clubsport R8', 'Clubsport', 'Better-equipped Clubsport, E-Series to Gen-F2.', [
    '6.0L LS2 (early E-Series) or 6.2L LS3 V8',
    'HSV suspension and steering tune',
    'Brembo brakes',
    'HSV bodykit and interior',
  ]);
R('hsv-clubsport', { makes: ['HSV'], models: ['Clubsport'], years: [1993, 2007], match: ['Clubsport'] },
  'HSV Clubsport', 'Commodore SS', 'HSV\'s core performance sedan.', [
    'HSV V8: 5.0L (VR to early VT), 5.7L LS1 (VT II to VY), 6.0L LS2 (VZ/VE)',
    'HSV suspension and steering tune',
    'HSV bodykit, wheels and badging',
  ]);
R('fpv-gt-e', { makes: ['FPV'], models: ['GT'], years: [2006, 2015], match: ['GT-E'] },
  'FPV GT-E', 'GT', 'The luxury-focused FPV GT.', [
    'V8: 5.4L Boss (BF 290 kW, FG 315 kW), 5.0L supercharged (FG MkII 335 kW)',
    '6-speed manual or 6-speed automatic',
    'Leather trim and luxury equipment',
    'Brembo brakes',
  ]);
R('fpv-gt', { makes: ['FPV'], models: ['GT'], years: [2003, 2015], match: ['\\bGT\\b'] },
  'FPV GT', 'Falcon XR8', 'FPV\'s V8 Falcon.', [
    'V8: 5.4L Boss 290 (BA/BF, 290 kW), Boss 315 (FG, 315 kW), 5.0L supercharged (FG MkII, 335 kW; GT F 351 kW)',
    'FPV suspension and steering tune',
    'Brembo brakes',
    'FPV bodykit and badging',
  ]);

// ───────────────────────── Ford ─────────────────────────
const FALCON_OLD = ['Falcon \\((EB|ED|EF|EL|AU)\\)'];
const FALCON_BA_BF = ['Falcon \\((BA|BF)\\)'];
const FALCON_FG = ['Falcon \\(FG\\)', 'Falcon Ute \\(FG\\)'];
R('xr8-windsor', { makes: ['Ford'], models: [...FALCON_OLD, 'Falcon Ute \\(AU-BF\\)'], years: [1991, 2001], match: ['XR8'] },
  'XR8', 'XR6', 'Windsor-powered V8 Falcon.', [
    '5.0L Windsor V8',
    'Sports suspension tune',
    'XR bodykit and sports seats',
  ]);
R('xr8-boss260', { makes: ['Ford'], models: [...FALCON_BA_BF, 'Falcon Ute \\(AU-BF\\)'], years: [2002, 2008], match: ['XR8'] },
  'XR8', 'XR6 Turbo', 'BA/BF V8 Falcon.', [
    '5.4L "Boss 260" quad-cam V8, 260 kW',
    'Manual or automatic',
    'Sports suspension tune',
  ]);
R('xr8-fg', { makes: ['Ford'], models: FALCON_FG, years: [2008, 2014], match: ['XR8'] },
  'XR8', 'XR6 Turbo', 'FG V8 Falcon.', [
    '5.4L "Boss 290" quad-cam V8, 290 kW',
    '6-speed manual or 6-speed automatic',
    'Sports suspension tune',
  ]);
R('xr8-fgx', { makes: ['Ford'], models: ['Falcon \\(FG X\\)'], match: ['XR8'] },
  'XR8', 'XR6 Turbo', 'The last V8 Falcon.', [
    '5.0L supercharged "Miami" V8, 335 kW / 570 Nm',
    '6-speed manual or 6-speed automatic',
    'Brembo front brakes',
  ]);
R('xr6-turbo', { makes: ['Ford'], models: [...FALCON_BA_BF, ...FALCON_FG, 'Falcon \\(FG X\\)', 'Falcon Ute \\(AU-BF\\)'], years: [2002, 2016], match: ['XR6 Turbo'] },
  'XR6 Turbo', 'XR6', 'The turbo Barra. Tuner royalty.', [
    '4.0L Barra turbo inline-6: 240 kW (BA), 245 kW (BF), 270 kW (FG/FG X)',
    'Manual or automatic (6-speed from BF)',
    'Sports suspension tune',
    'Famous for how much power the stock bottom end handles',
  ]);
R('xr6-barra', { makes: ['Ford'], models: [...FALCON_BA_BF, ...FALCON_FG, 'Falcon \\(FG X\\)', 'Falcon Ute \\(AU-BF\\)'], years: [2002, 2016], match: ['\\bXR6\\b'] },
  'XR6', 'Falcon base', 'Sporty six-cylinder Falcon.', [
    '4.0L Barra inline-6, naturally aspirated',
    'Sports suspension tune',
    'XR bodykit and sports seats',
  ]);
R('g6e-turbo', { makes: ['Ford'], models: [...FALCON_FG, 'Falcon \\(FG X\\)'], match: ['G6E Turbo'] },
  'G6E Turbo', 'G6E', 'Luxury Falcon with the turbo Barra.', [
    '4.0L Barra turbo inline-6',
    'Leather trim and luxury equipment',
  ]);
R('g6e', { makes: ['Ford'], models: [...FALCON_FG, 'Falcon \\(FG X\\)'], match: ['G6E'] },
  'G6E', 'G6', 'Luxury-focused Falcon.', [
    '4.0L Barra inline-6, naturally aspirated',
    'Leather trim and luxury equipment',
  ]);
R('mustang-gt', { makes: ['Ford'], models: ['Mustang'], years: [2015, 2026], match: ['\\bGT\\b'] },
  'Mustang GT', 'EcoBoost', 'The V8 Mustang.', [
    '5.0L Coyote V8 (306–345 kW depending on year)',
    '6-speed manual or automatic (10-speed from 2018)',
    'Brembo front brakes',
  ]);
R('mustang-dark-horse', { makes: ['Ford'], models: ['Mustang'], years: [2024, 2026], match: ['Dark Horse'] },
  'Mustang Dark Horse', 'Mustang GT', 'Track-focused flagship S650 Mustang.', [
    '5.0L Coyote V8, 349 kW / 548 Nm',
    '6-speed manual or 10-speed automatic',
    'Sits above the GT in the S650 range',
  ]);
R('ranger-phev', { makes: ['Ford'], models: ['Ranger'], years: [2025, 2026], match: ['PHEV'] },
  'Ranger PHEV', 'Ranger diesel', 'Plug-in hybrid Ranger.', [
    '2.3L turbo petrol plug-in hybrid, 207 kW / 697 Nm system output',
    '11.8 kWh battery, roughly 50 km electric range',
    '10-speed automatic, 4WD',
    '3,500 kg braked towing, same as the diesels',
  ]);
R('ranger-wildtrak-px', { makes: ['Ford'], models: ['Ranger'], years: [2011, 2016], match: ['Wildtrak'] },
  'Ranger Wildtrak (PX)', 'XLT', 'Lifestyle flagship Ranger.', [
    '3.2L five-cylinder turbo-diesel, 147 kW / 470 Nm',
    'Wildtrak styling pack and sports bar',
  ]);
R('ranger-wildtrak-px3', { makes: ['Ford'], models: ['Ranger'], years: [2018, 2020], match: ['Wildtrak'] },
  'Ranger Wildtrak (PX III)', 'XLT', 'Lifestyle flagship Ranger.', [
    '3.2L five-cylinder turbo-diesel, or 2.0L bi-turbo diesel (157 kW / 500 Nm, 10-speed auto)',
    'Wildtrak styling pack and sports bar',
  ]);
R('ranger-wildtrak-next', { makes: ['Ford'], models: ['Ranger'], years: [2022, 2026], match: ['Wildtrak'] },
  'Ranger Wildtrak', 'XLT', 'Lifestyle flagship of the current Ranger.', [
    '2.0L bi-turbo diesel (154 kW / 500 Nm) or 3.0L V6 turbo-diesel (184 kW / 600 Nm)',
    '10-speed automatic',
    'Wildtrak styling, sports bar and leather-accented seats',
  ]);
R('ranger-raptor-px3', { makes: ['Ford'], models: ['Ranger'], years: [2018, 2020], match: ['Raptor'] },
  'Ranger Raptor (PX III)', 'Wildtrak', 'Ford Performance\'s desert-runner Ranger.', [
    '2.0L bi-turbo diesel, 157 kW / 500 Nm, 10-speed auto',
    'FOX 2.5-inch position-sensitive bypass dampers',
    'Wider track and flared guards',
    'BFGoodrich All-Terrain tyres',
    'Terrain Management with Baja mode',
  ]);
R('ranger-raptor-next', { makes: ['Ford'], models: ['Ranger'], years: [2022, 2026], match: ['Raptor'] },
  'Ranger Raptor', 'Wildtrak', 'Petrol V6 Raptor.', [
    '3.0L twin-turbo EcoBoost V6, 292 kW / 583 Nm',
    '10-speed automatic, full-time 4WD',
    'FOX Live Valve adaptive dampers',
    'Wider track and flared guards',
  ]);

// ───────────────────────── Toyota ─────────────────────────
R('gr-yaris', { makes: ['Toyota'], models: ['GR Yaris', 'Yaris'], years: [2020, 2026], match: ['^GR( Yaris)?$', 'Rallye'] },
  'GR Yaris', 'Yaris', 'Rally-homologation hot hatch from Gazoo Racing.', [
    '1.6L turbo 3-cylinder (G16E-GTS): 200 kW / 370 Nm, 224 kW / 400 Nm from 2025',
    'GR-Four all-wheel drive with adjustable torque split',
    '6-speed manual; 8-speed auto added on the updated model',
    'Three-door body with carbon roof and aluminium panels',
    'Rallye adds Torsen limited-slip diffs front and rear',
  ]);
R('gr-corolla', { makes: ['Toyota'], models: ['GR Corolla'], match: ['.'] },
  'GR Corolla', 'Corolla', 'Five-door hatch with the GR Yaris drivetrain.', [
    '1.6L turbo 3-cylinder (G16E-GTS), 221–224 kW',
    'GR-Four all-wheel drive with adjustable torque split',
    '6-speed manual (8-speed auto option from 2025)',
    'Widened body with flared guards',
  ]);
R('gr86', { makes: ['Toyota'], models: ['GR86'], match: ['.'] },
  'GR86', '—', 'Second-gen Toyota/Subaru sports coupe.', [
    '2.4L flat-four (FA24), 174 kW / 250 Nm',
    'Rear-wheel drive with Torsen limited-slip diff',
    '6-speed manual or 6-speed automatic',
  ]);
R('toyota-86', { makes: ['Toyota'], models: ['86'], match: ['.'] },
  '86', '—', 'First-gen Toyota/Subaru sports coupe.', [
    '2.0L flat-four (FA20), 147–152 kW depending on year and gearbox',
    'Rear-wheel drive with Torsen limited-slip diff',
    '6-speed manual or 6-speed automatic',
    'GTS and GR Sport add equipment and styling, not power',
  ]);
R('supra-20', { makes: ['Toyota'], models: ['Supra'], years: [2019, 2026], match: ['GTS 2\\.0'] },
  'GR Supra 2.0', 'GT', 'Four-cylinder GR Supra.', [
    '2.0L turbo four (BMW B48), 190 kW / 400 Nm',
    '8-speed automatic, rear-wheel drive',
  ]);
R('supra-gts', { makes: ['Toyota'], models: ['Supra'], years: [2019, 2026], match: ['GTS'] },
  'GR Supra GTS', 'GT', 'Six-cylinder GR Supra.', [
    '3.0L turbo inline-6 (BMW B58): 250 kW (2019–20), 285 kW from 2021, 500 Nm',
    'Rear-wheel drive with active limited-slip diff',
    '8-speed automatic; 6-speed manual offered later',
  ]);
R('lc300-gr-sport', { makes: ['Toyota'], models: ['LandCruiser 300'], match: ['GR Sport'] },
  'LandCruiser 300 GR Sport', 'VX', 'Off-road focused 300 Series.', [
    'Front and rear locking differentials',
    'E-KDSS electronic stabiliser bar disconnect',
    'GR styling and badging',
  ]);
R('hilux-gr-sport', { makes: ['Toyota'], models: ['HiLux'], years: [2022, 2025], match: ['GR Sport'] },
  'HiLux GR Sport', 'Rogue', 'Gazoo Racing-tuned HiLux.', [
    '2.8L turbo-diesel, up to 165 kW / 550 Nm on later models',
    'Monotube dampers and wider track',
    'GR styling, wheels and sports seats',
  ]);
R('toyota-gr-sport', { makes: ['Toyota'], match: ['GR Sport'] },
  'GR Sport', 'Upper grades', 'Gazoo Racing-styled grade.', [
    'GR-styled bumpers, grille and badging',
    'Unique alloy wheels',
    'Sports seats and GR interior accents',
  ]);
R('celica-gt-four', { makes: ['Toyota'], models: ['Celica'], match: ['GT-Four'] },
  'Celica GT-Four', 'GT', 'Group A rally-homologation Celica.', [
    '2.0L turbo four-cylinder (3S-GTE)',
    'Full-time four-wheel drive',
    'Built so Toyota could go World Rally Championship racing',
  ]);
R('corolla-sportivo', { makes: ['Toyota'], models: ['Corolla'], years: [2002, 2006], match: ['Sportivo'] },
  'Corolla Sportivo', 'Corolla', 'The hot Corolla of the 2000s.', [
    '1.8L high-revving 2ZZ-GE four with VVTL-i',
    '6-speed manual',
    'Sports bodykit and suspension',
  ]);
R('toyota-sportivo', { makes: ['Toyota'], models: ['Camry', 'Aurion'], match: ['Sportivo'] },
  'Sportivo', 'Mid grades', 'Sports-styled grade.', [
    'Sports bodykit and alloy wheels',
    'Sports seat trim',
    'Same engine as the equivalent standard grade',
  ]);
R('toyota-levin-zr', { makes: ['Toyota'], models: ['Corolla'], match: ['Levin ZR'] },
  'Levin ZR', 'Levin', 'Top sporty Corolla hatch of its day.', [
    'Levin sports styling',
    'Extra equipment over the Levin SX',
  ]);
R('toyota-zr', { makes: ['Toyota'], models: ['Corolla', 'Corolla Cross', 'Yaris', 'Yaris Cross', 'Prius', 'Prius V', 'Celica'], match: ['\\bZR\\b'] },
  'ZR', 'SX / Ascent Sport', 'Top grade for its model.', [
    'Most equipment in the range',
    'Larger alloy wheels',
    'Same engine choices as the grades below',
  ]);
R('toyota-sr5', { makes: ['Toyota'], models: ['HiLux', 'HiLux Surf'], match: ['SR5'] },
  'SR5', 'SR', 'Upper-spec HiLux.', [
    'Alloy wheels (SR runs steel on most models)',
    'More comfort and convenience kit than the SR',
    'Same engine as the SR of its generation',
  ]);
R('toyota-rogue', { makes: ['Toyota'], models: ['HiLux'], match: ['Rogue'] },
  'HiLux Rogue', 'SR5', 'Luxury-focused top HiLux.', [
    'Rogue-specific styling and wheels',
    'Top-spec interior',
    'Same 2.8L turbo-diesel as the SR5',
  ]);
R('tarago-ultima', { makes: ['Toyota'], models: ['Tarago'], match: ['Ultima'] },
  'Tarago Ultima', 'GLX', 'Top-spec Tarago people mover.', [
    'Most luxury equipment in the Tarago range',
  ]);
R('toyota-gxl', { makes: ['Toyota'], models: ['LandCruiser.*', 'Prado', 'Fortuner', 'Kluger', 'RAV4', 'C-HR', 'Corolla Cross', 'Yaris Cross', 'Prius', 'Crown Kluger', 'Cressida'], match: ['GXL'] },
  'GXL', 'GX', 'Mid-spec grade.', [
    'More comfort and convenience kit than the GX',
    'Same engine choices as the GX',
  ]);
R('toyota-vx', { makes: ['Toyota'], models: ['LandCruiser.*', 'Prado'], match: ['\\bVX\\b'] },
  'VX', 'GXL', 'Upper-spec LandCruiser / Prado.', [
    'Leather trim and premium equipment',
    'Upgraded off-road electronics over the GXL',
  ]);
R('toyota-sahara', { makes: ['Toyota'], models: ['LandCruiser.*'], match: ['Sahara'] },
  'LandCruiser Sahara', 'VX', 'Luxury flagship LandCruiser.', [
    'Leather trim with heated and cooled front seats',
    'Premium audio and the most equipment in the range',
  ]);
R('toyota-kakadu', { makes: ['Toyota'], models: ['Prado'], match: ['Kakadu'] },
  'Prado Kakadu', 'VX', 'Flagship Prado.', [
    'Leather trim with heated and ventilated front seats',
    'Premium audio and the most equipment in the range',
  ]);
R('toyota-crusade', { makes: ['Toyota'], models: ['Fortuner'], match: ['Crusade'] },
  'Fortuner Crusade', 'GXL', 'Top-spec Fortuner.', [
    'Leather trim and the most equipment in the range',
    'Same 2.8L turbo-diesel as the GXL',
  ]);
R('toyota-grande', { makes: ['Toyota'], models: ['Kluger', 'Camry', 'Vienta'], match: ['Grande'] },
  'Grande', 'GXL', 'Luxury flagship grade.', [
    'Leather trim and the most equipment in the range',
  ]);
R('camry-atara-sl', { makes: ['Toyota'], models: ['Camry'], match: ['Atara SL'] },
  'Camry Atara SL', 'Atara SX', 'Top-spec Camry Atara.', [
    'Leather trim and premium equipment',
    'Same engine choices as the Atara range',
  ]);
R('rav4-cruiser', { makes: ['Toyota'], models: ['RAV4'], match: ['Cruiser'] },
  'RAV4 Cruiser', 'GXL', 'Top luxury RAV4.', [
    'Leather trim and the most equipment in the range',
    'Same powertrain choices as the GXL',
  ]);

// ───────────────────────── Mazda ─────────────────────────
R('mazda3-mps', { makes: ['Mazda'], models: ['3'], match: ['MPS'] },
  'Mazda3 MPS', 'SP25', 'Turbo Mazda3 hot hatch.', [
    '2.3L turbo four (MZR DISI), 190 kW / 380 Nm',
    '6-speed manual only, front-wheel drive',
    'Front limited-slip differential',
  ]);
R('rx7-fc-turbo', { makes: ['Mazda'], models: ['RX-7'], years: [1986, 1991], match: ['Turbo II'] },
  'RX-7 Turbo II (FC)', 'RX-7', 'Turbocharged second-gen RX-7.', [
    '1.3L 13B-T twin-rotor with a single twin-scroll turbo',
    'Rear-wheel drive, 5-speed manual',
  ]);
R('rx7-fd', { makes: ['Mazda'], models: ['RX-7'], years: [1992, 2002], match: ['.'] },
  'RX-7 (FD)', '—', 'Third-gen RX-7.', [
    '1.3L 13B-REW twin-rotor with sequential twin turbos',
    'Rear-wheel drive, light and low',
  ]);
R('mazda3-sp', { makes: ['Mazda'], models: ['3'], match: ['SP23', 'SP25'] },
  'SP23 / SP25', 'Maxx / Neo', 'Sporty Mazda3.', [
    'SP23: 2.3L four, SP25: 2.5L four (naturally aspirated)',
    'Sportier suspension tune and alloy wheels',
  ]);
R('mx5-rf-gt', { makes: ['Mazda'], models: ['MX-5'], match: ['RF GT'] },
  'MX-5 RF GT', 'RF Roadster', 'Folding-hardtop MX-5, top grade.', [
    '2.0L Skyactiv-G: 118 kW (2016–18), 135 kW from 2019',
    'Leather trim with heated seats',
    'BOSE premium audio',
  ]);
R('mazda-touring', { makes: ['Mazda'], match: ['\\bTouring\\b'], exclude: ['Grand Touring', 'sTouring'] },
  'Touring', 'Maxx / Sport', 'Comfort-focused mid grade.', [
    'Leather-appointed seats',
    'More equipment than the entry grades',
  ]);
R('mazda-stouring', { makes: ['Mazda'], match: ['sTouring'] },
  'sTouring', 'Touring', 'Sportier-styled Touring.', ['Touring equipment with sportier styling']);
R('mazda-grand-touring', { makes: ['Mazda'], match: ['Grand Touring'] },
  'Grand Touring', 'Touring', 'Top-spec grade.', ['The most equipment in the range']);
R('mazda-akari', { makes: ['Mazda'], match: ['Akari'] }, 'Akari', 'Touring', 'Top-spec grade.', ['The most equipment in the range']);
R('mazda-asaki', { makes: ['Mazda'], match: ['Asaki'] }, 'Asaki', 'GT', 'Flagship luxury grade.', ['Nappa leather and the most equipment in the range']);
R('mazda-azami', { makes: ['Mazda'], match: ['Azami'] }, 'Azami', 'GT', 'Flagship luxury grade.', ['Premium leather and the most equipment in the range']);
R('mazda-atenza', { makes: ['Mazda'], match: ['Atenza'] }, 'Atenza', 'GT', 'Flagship luxury grade.', ['The most equipment in the range']);
R('mazda-genki', { makes: ['Mazda'], match: ['Genki'] }, 'Genki', 'Maxx', 'Top-spec Mazda2.', ['Sports styling and the most equipment in the range']);
R('mazda-astina', { makes: ['Mazda'], match: ['Astina'] }, 'Astina', 'GT / SP25', 'Top-spec grade.', ['The most equipment in the range for its year']);

// ───────────────────────── Nissan ─────────────────────────
R('skyline-gt-r', { makes: ['Nissan'], models: ['Skyline'], match: ['GT-R'] },
  'Skyline GT-R (R32–R34)', 'GTS-t', 'Godzilla, the original.', [
    '2.6L RB26DETT twin-turbo inline-6, 206 kW advertised (gentlemen\'s agreement)',
    'ATTESA E-TS all-wheel drive',
    'Super HICAS four-wheel steering',
  ]);
R('r35-gt-r', { makes: ['Nissan'], models: ['GT-R'], match: ['.'] },
  'GT-R (R35)', '—', 'Nissan\'s supercar killer.', [
    '3.8L twin-turbo VR38DETT V6, 353–419 kW depending on year',
    'ATTESA E-TS all-wheel drive',
    '6-speed dual-clutch transaxle',
    'Bilstein DampTronic adjustable dampers',
    'Track Edition adds a NISMO-tuned chassis',
  ]);
R('370z-nismo', { makes: ['Nissan'], models: ['370Z'], match: ['NISMO'] },
  '370Z NISMO', '370Z', 'Factory-tuned 370Z.', [
    '3.7L V6 (VQ37VHR) tuned by NISMO',
    'NISMO aero kit and chassis tune',
    'Recaro seats',
  ]);
R('350z-nismo', { makes: ['Nissan'], models: ['350Z'], match: ['NISMO'] },
  '350Z NISMO', '350Z', 'Factory-tuned 350Z.', ['3.5L V6 (VQ35)', 'NISMO aero kit and chassis tune']);
R('skyline-gt-t', { makes: ['Nissan'], models: ['Skyline'], years: [1998, 2002], match: ['GT-T'] },
  'Skyline GT-t (R34)', 'GT', 'Turbo rear-drive R34.', [
    '2.5L RB25DET NEO turbo inline-6',
    'Rear-wheel drive',
  ]);
R('skyline-gts-t-r32', { makes: ['Nissan'], models: ['Skyline'], years: [1989, 1993], match: ['GTS-T'] },
  'Skyline GTS-t (R32)', 'GTS', 'Turbo rear-drive R32.', [
    '2.0L RB20DET turbo inline-6, 158 kW',
    'Rear-wheel drive',
  ]);
R('skyline-gts-t-r33', { makes: ['Nissan'], models: ['Skyline'], years: [1994, 1998], match: ['GTS-T'] },
  'Skyline GTS25-t (R33)', 'GTS', 'Turbo rear-drive R33.', [
    '2.5L RB25DET turbo inline-6, 184 kW',
    'Rear-wheel drive',
  ]);
R('pulsar-sss', { makes: ['Nissan'], models: ['Pulsar'], match: ['\\bSSS\\b'] },
  'Pulsar SSS', 'Q / Ti', 'Sporty Pulsar.', ['Sportier engine and suspension than the regular Pulsar', 'SSS styling and badging']);
R('navara-pro4x-d27', { makes: ['Nissan'], models: ['Navara'], years: [2026, 2026], match: ['PRO-4X'] },
  'Navara PRO-4X (D27)', 'ST-X', 'Off-road styled top Navara.', [
    '2.4L twin-turbo diesel (4N16), 150 kW / 470 Nm',
    '6-speed automatic, dual-range 4x4',
    'PRO-4X styling and all-terrain focus',
  ]);
R('navara-pro4x-d23', { makes: ['Nissan'], models: ['Navara'], years: [2021, 2025], match: ['PRO-4X'] },
  'Navara PRO-4X (D23)', 'ST-X', 'Off-road styled top Navara.', [
    '2.3L twin-turbo diesel, 140 kW / 450 Nm',
    'Electronic locking rear differential',
    'PRO-4X styling and all-terrain tyres',
  ]);
R('patrol-y63-pro4x', { makes: ['Nissan'], models: ['Patrol'], match: ['Y63 PRO-4X'] },
  'Patrol PRO-4X (Y63)', 'Ti', 'Off-road flavoured new-gen Patrol.', [
    '3.5L twin-turbo V6, 317 kW / 700 Nm',
    '9-speed automatic',
    '3,700 kg braked towing',
  ]);
R('nissan-ti-l', { makes: ['Nissan'], models: ['Patrol', 'Pathfinder', 'X-Trail'], match: ['Ti-L'] },
  'Ti-L', 'Ti', 'Flagship grade.', ['Premium leather trim and the most equipment in the range']);
R('nissan-ti-s', { makes: ['Nissan'], models: ['X-Trail'], match: ['Ti-S'] },
  'Ti-S', 'Ti', 'Sport-styled grade.', ['Sports styling over the Ti']);
R('nissan-ti', { makes: ['Nissan'], match: ['\\bTi\\b'] },
  'Ti', 'ST-L / ST', 'Upper-spec grade.', ['Leather-appointed seats', 'More equipment than the ST grades']);
R('navara-st-x', { makes: ['Nissan'], models: ['Navara'], match: ['ST-X'] },
  'Navara ST-X', 'ST', 'Top volume-selling Navara grade.', ['More equipment than the ST', 'Same engine as the ST of its generation']);

// ───────────────────────── Mitsubishi ─────────────────────────
R('evo-x', { makes: ['Mitsubishi'], models: ['Lancer'], match: ['Evolution X'] },
  'Lancer Evolution X', 'Ralliart', 'The final Evo.', [
    '2.0L turbo four (4B11T), 217 kW / 366 Nm',
    'S-AWC all-wheel control with active centre diff and yaw control',
    '5-speed manual (GSR) or 6-speed TC-SST twin-clutch (MR)',
    'Brembo front brakes and Recaro seats',
  ]);
R('evo', { makes: ['Mitsubishi'], models: ['Lancer'], years: [1996, 2007], match: ['\\bEvolution\\b'] },
  'Lancer Evolution', 'Lancer GSR', 'Rally-bred turbo AWD Lancer (Evo IV to IX).', [
    '2.0L turbo four (4G63T)',
    'Full-time AWD with Active Yaw Control (active centre diff from Evo VII)',
    'Brembo brakes and Recaro seats on most versions',
  ]);
R('lancer-ralliart', { makes: ['Mitsubishi'], models: ['Lancer'], match: ['Ralliart'] },
  'Lancer Ralliart', 'VRX', 'Half-way house to the Evo X.', [
    '2.0L turbo four (4B11T), 177 kW / 343 Nm',
    '6-speed TC-SST twin-clutch',
    'All-wheel drive with active centre diff',
  ]);
R('triton-gsr-mq', { makes: ['Mitsubishi'], models: ['Triton'], years: [2019, 2023], match: ['\\bGSR\\b'] },
  'Triton GSR (MR)', 'GLS', 'Sports-styled Triton.', [
    '2.4L turbo-diesel (4N15), 133 kW / 430 Nm',
    'GSR styling pack',
  ]);
R('triton-gsr-mv', { makes: ['Mitsubishi'], models: ['Triton'], years: [2024, 2026], match: ['\\bGSR\\b'] },
  'Triton GSR (MV)', 'GLS', 'Top new-gen Triton.', [
    '2.4L twin-turbo diesel (4N16), 150 kW / 470 Nm',
    '6-speed automatic, dual-range 4x4',
    '3,500 kg braked towing',
  ]);
R('3000gt-vr4', { makes: ['Mitsubishi'], models: ['3000GT'], match: ['VR-4'] },
  '3000GT VR-4', '3000GT', 'Mitsubishi\'s tech-heavy GT.', [
    '3.0L twin-turbo V6 (6G72TT)',
    'Full-time all-wheel drive',
    'Four-wheel steering',
  ]);
R('gto-twin-turbo', { makes: ['Mitsubishi'], models: ['GTO'], match: ['Twin Turbo'] },
  'GTO Twin Turbo', 'GTO', 'Japan-market twin of the 3000GT VR-4.', [
    '3.0L twin-turbo V6 (6G72TT)',
    'Full-time all-wheel drive',
    'Four-wheel steering',
  ]);
R('lancer-vrx', { makes: ['Mitsubishi'], models: ['Lancer'], match: ['\\bVRX\\b'] },
  'Lancer VRX', 'ES / LS', 'Sports-styled Lancer.', ['VRX bodykit and alloy wheels', 'Same engine as the regular Lancer of its year']);
R('outlander-phev-exceed', { makes: ['Mitsubishi'], models: ['Outlander'], match: ['PHEV Exceed'] },
  'Outlander PHEV Exceed', 'PHEV', 'Top-spec plug-in Outlander.', ['Plug-in hybrid with twin-motor all-wheel drive', 'The most equipment in the range']);
R('mitsubishi-exceed', { makes: ['Mitsubishi'], match: ['Exceed'] },
  'Exceed', 'LS', 'Top-spec grade.', ['Leather trim and the most equipment in the range']);

// ───────────────────────── Hyundai ─────────────────────────
R('i30n-performance', { makes: ['Hyundai'], models: ['i30 N'], match: ['Performance'] },
  'i30 N Performance', 'i30 N', 'i30 N with the Performance Pack.', [
    '2.0L turbo four: 202 kW / 353 Nm, 206 kW / 392 Nm from 2021',
    'Electronic limited-slip front diff',
    'Bigger brakes and 19-inch wheels',
    '6-speed manual; 8-speed N DCT from 2021',
  ]);
R('i30n', { makes: ['Hyundai'], models: ['i30 N'], match: ['.'] },
  'i30 N', 'i30 N Line', 'Hyundai\'s first N car.', [
    '2.0L turbo four: 202 kW / 353 Nm, 206 kW / 392 Nm from 2021',
    'Adaptive dampers and N drive modes',
    '6-speed manual with rev-matching; 8-speed N DCT from 2021',
  ]);
R('kona-n', { makes: ['Hyundai'], models: ['Kona N'], match: ['.'] },
  'Kona N', 'Kona N Line', 'Hot SUV with the i30 N\'s engine.', [
    '2.0L turbo four, 206 kW / 392 Nm',
    '8-speed wet dual-clutch, front-wheel drive',
    'Electronic limited-slip front diff',
  ]);
R('ioniq5-n', { makes: ['Hyundai'], models: ['Ioniq 5 N'], match: ['.'] },
  'Ioniq 5 N', 'Ioniq 5', 'Hyundai\'s electric N car.', [
    'Dual-motor AWD: 448 kW, 478 kW / 770 Nm with N Grin Boost',
    '84 kWh battery',
    'N e-Shift simulated gearshifts and N Active Sound+',
  ]);
R('veloster-n', { makes: ['Hyundai'], models: ['Veloster'], years: [2019, 2021], match: ['^N$'] },
  'Veloster N', 'Veloster Turbo', 'Three-door N hatch.', [
    '2.0L turbo four, 202 kW / 353 Nm',
    'Electronic limited-slip front diff',
    '6-speed manual; 8-speed N DCT added later',
  ]);
R('veloster-sr-turbo', { makes: ['Hyundai'], models: ['Veloster'], years: [2012, 2018], match: ['SR Turbo'] },
  'Veloster SR Turbo', 'Veloster', 'Turbo first-gen Veloster.', [
    '1.6L turbo four (T-GDi), 150 kW / 265 Nm',
    '6-speed manual or 6-speed automatic',
  ]);
R('hyundai-n-line', { makes: ['Hyundai'], match: ['N Line'] },
  'N Line', 'Elite / Active', 'N-styled grade (not a full N car).', [
    'N Line bumpers, side skirts and wheels',
    'Sports seats and steering wheel',
  ]);
R('hyundai-highlander', { makes: ['Hyundai'], match: ['Highlander'] },
  'Highlander', 'Elite', 'Top-spec grade.', ['Leather trim and the most equipment in the range']);
R('hyundai-elite', { makes: ['Hyundai'], match: ['Elite'] },
  'Elite', 'Active', 'Upper mid grade.', ['Leather-appointed seats', 'More equipment than the Active']);
R('hyundai-trophy', { makes: ['Hyundai'], match: ['Trophy'] },
  'Trophy', '—', 'Limited sports edition.', ['Special-edition styling and equipment']);

// ───────────────────────── Kia ─────────────────────────
R('stinger-gt-line-20', { makes: ['Kia'], models: ['Stinger'], match: ['GT-Line 2\\.0T'] },
  'Stinger GT-Line 2.0T', '200S', 'Four-cylinder Stinger with GT styling.', [
    '2.0L turbo four, rear-wheel drive',
    '8-speed automatic',
  ]);
R('stinger-gt', { makes: ['Kia'], models: ['Stinger'], match: ['\\bGT\\b(?!-)'] },
  'Stinger GT', '330S', 'Kia\'s twin-turbo V6 sports sedan.', [
    '3.3L twin-turbo V6, 272 kW / 510 Nm',
    'Rear-wheel drive with mechanical limited-slip diff',
    'Brembo brakes and adaptive dampers',
    '8-speed automatic',
  ]);
R('cerato-gt', { makes: ['Kia'], models: ['Cerato'], match: ['^GT$'] },
  'Cerato GT', 'Sport+', 'Turbo Cerato.', [
    '1.6L turbo four, 150 kW / 265 Nm',
    '7-speed dual-clutch',
    'Sports-tuned suspension',
  ]);
R('ev6-gt', { makes: ['Kia'], models: ['EV6'], match: ['^GT$'] },
  'EV6 GT', 'GT-Line', 'High-performance EV6.', [
    'Dual-motor AWD, 430 kW / 740 Nm',
    'Electronic limited-slip diff',
    'Adaptive dampers and bigger brakes',
  ]);
R('kia-gt-line', { makes: ['Kia'], match: ['GT-Line'] },
  'GT-Line', 'Sport / S', 'Sports-styled top grade.', [
    'GT-Line bumpers, trim and wheels',
    'Sports seats and steering wheel',
  ]);
R('kia-platinum', { makes: ['Kia'], match: ['Platinum'] },
  'Platinum', 'SLi', 'Flagship grade.', ['Premium leather and the most equipment in the range']);
R('kia-sli', { makes: ['Kia'], match: ['\\bSLi\\b'] },
  'SLi', 'Si', 'Upper mid grade.', ['Leather-appointed seats', 'More equipment than the Si']);

// ───────────────────────── Volkswagen ─────────────────────────
R('formentor-vz5', { makes: ['CUPRA'], models: ['Formentor'], years: [2022, 2026], match: ['VZ5'] },
  'Formentor VZ5', 'VZx', 'Five-cylinder Formentor.', [
    '2.5L turbo inline-5, 287 kW / 480 Nm',
    '4Drive all-wheel drive, 7-speed dual-clutch',
  ]);
R('formentor-vzx', { makes: ['CUPRA'], models: ['Formentor'], years: [2025, 2026], match: ['^VZx'] },
  'Formentor VZx', 'V', 'Hot four-cylinder Formentor.', [
    '2.0L turbo four, 245 kW / 420 Nm',
    '4Drive all-wheel drive, 7-speed dual-clutch',
  ]);
R('defender-octa', { makes: ['Land Rover'], models: ['Defender'], years: [2025, 2026], match: ['OCTA'] },
  'Defender OCTA', 'Defender V8', 'The most extreme Defender.', [
    '4.4L twin-turbo V8 (mild hybrid), 467 kW / 750 Nm',
    '6D Dynamics hydraulically interlinked suspension',
  ]);
R('rrs-sv', { makes: ['Land Rover'], models: ['Range Rover Sport'], years: [2024, 2026], match: ['\\bSV\\b'] },
  'Range Rover Sport SV', 'P530', 'Performance flagship Range Rover Sport.', [
    '4.4L twin-turbo V8 (mild hybrid), 467 kW / 750 Nm',
    '6D Dynamics hydraulically interlinked suspension',
  ]);
R('lbx-morizo', { makes: ['Lexus'], models: ['LBX'], years: [2025, 2026], match: ['Morizo'] },
  'LBX Morizo RR', 'LBX', 'GR Yaris engine in a Lexus.', [
    '1.6L turbo three-cylinder (G16E), 206 kW / 390 Nm',
    'All-wheel drive',
  ]);
R('mache-gt', { makes: ['Ford'], models: ['Mustang Mach-E'], years: [2021, 2026], match: ['^GT$'] },
  'Mach-E GT', 'Premium', 'Dual-motor performance Mach-E.', [
    'Dual-motor all-wheel drive',
    '434 kW / 955 Nm from the 2026 update',
  ]);
R('civic-type-r-fl5', { makes: ['Honda'], models: ['Civic'], years: [2023, 2026], match: ['Type R'] },
  'Civic Type R (FL5)', 'Civic VTi-LX', 'Sixth-gen Type R.', [
    '2.0L turbo four (K20C1), 235 kW / 420 Nm',
    '6-speed manual, front-wheel drive',
  ]);
R('alfa-qv', { makes: ['Alfa Romeo'], models: ['Giulia', 'Stelvio'], years: [2016, 2026], match: ['Quadrifoglio'] },
  'Quadrifoglio', 'Veloce', 'Alfa\'s twin-turbo V6 flagship.', [
    '2.9L twin-turbo V6, 375–382 kW',
    'Giulia rear-wheel drive; Stelvio Q4 all-wheel drive',
  ]);
R('wrx-vb', { makes: ['Subaru'], models: ['WRX'], years: [2022, 2026], match: ['.'] },
  'WRX (VB)', 'Impreza', 'Current-gen WRX sedan and Sportswagon.', [
    '2.4L turbo flat-four (FA24), 202 kW / 350 Nm',
    'Symmetrical all-wheel drive; 6-speed manual or CVT',
  ]);
R('octavia-rs-mk4-fl', { makes: ['Skoda'], models: ['Octavia'], years: [2025, 2026], match: ['\\bRS\\b'] },
  'Octavia RS (Mk4 facelift)', 'Sportline', 'Facelifted performance Octavia.', [
    '2.0L turbo four, 195 kW / 370 Nm',
    '7-speed dual-clutch, front-wheel drive',
  ]);
R('octavia-rs-mk4', { makes: ['Skoda'], models: ['Octavia'], years: [2021, 2024], match: ['\\bRS\\b'] },
  'Octavia RS (Mk4)', 'Style', 'Performance Octavia.', [
    '2.0L turbo four, 180 kW / 370 Nm',
    '7-speed dual-clutch, front-wheel drive',
  ]);
R('amarok-w600', { makes: ['Volkswagen'], models: ['Amarok'], years: [2025, 2026], match: ['W600'] },
  'Amarok W600', 'TDI600 Aventura', 'Walkinshaw-developed Amarok.', [
    '3.0L V6 turbo-diesel, 184 kW / 600 Nm',
    'Walkinshaw suspension and styling upgrades',
  ]);
R('mg4-xpower', { makes: ['MG'], models: ['MG4'], years: [2023, 2026], match: ['X-?POWER'] },
  'MG4 XPOWER', 'MG4 Essence', 'Dual-motor performance MG4.', [
    'Dual-motor all-wheel drive',
    '0-100 km/h in 3.8 s (claimed)',
  ]);
R('ram-trx', { makes: ['RAM'], models: ['1500', '1500 TRX'], match: ['TRX'] },
  'RAM 1500 TRX', 'RAM 1500 Laramie', 'Supercharged desert-runner.', [
    '6.2L supercharged V8, 523 kW / 882 Nm',
    'Long-travel off-road suspension',
  ]);
R('911-gt3rs-992', { makes: ['Porsche'], models: ['911'], years: [2023, 2026], match: ['GT3 RS'] },
  '911 GT3 RS (992)', '911 GT3', 'Aero-led track 911.', [
    '4.0L naturally aspirated flat-six, 386 kW / 465 Nm',
    '7-speed PDK, rear-wheel drive',
  ]);
R('cayenne-turbo-gt', { makes: ['Porsche'], models: ['Cayenne'], years: [2022, 2026], match: ['Turbo GT'] },
  'Cayenne Turbo GT', 'Cayenne Turbo', 'Nürburgring-honed Cayenne Coupe.', [
    '4.0L twin-turbo V8, 471–485 kW',
    'All-wheel drive, 8-speed Tiptronic S',
  ]);
R('taycan-turbo-gt', { makes: ['Porsche'], models: ['Taycan'], years: [2024, 2026], match: ['Turbo GT'] },
  'Taycan Turbo GT', 'Taycan Turbo S', 'The quickest Taycan.', [
    'Dual-motor all-wheel drive; up to 815 kW with launch control',
    'Weissach package available',
  ]);
R('golf-gti-clubsport', { makes: ['Volkswagen'], models: ['Golf'], years: [2021, 2026], match: ['GTI Clubsport'] },
  'Golf GTI Clubsport', 'GTI', 'Track-leaning Mk8 GTI.', [
    '2.0L turbo four (EA888), 221 kW',
    'Front-wheel drive with electronic diff lock',
    'Adaptive dampers',
  ]);
R('golf-gti-performance', { makes: ['Volkswagen'], models: ['Golf'], years: [2016, 2020], match: ['GTI Performance'] },
  'Golf GTI Performance', 'GTI', 'Mk7/7.5 GTI with the Performance Pack.', [
    'Higher-output 2.0L turbo four than the standard GTI of its time',
    'Mechanical limited-slip front diff (VAQ)',
    'Bigger brakes',
  ]);
R('golf-gti', { makes: ['Volkswagen'], models: ['Golf'], match: ['\\bGTI\\b'] },
  'Golf GTI', 'Golf', 'The original hot hatch.', [
    'Turbo petrol: 1.8T (Mk4), then 2.0L, from 147 kW (Mk5) to 180 kW (Mk8)',
    'Manual or DSG dual-clutch',
    'Sports suspension and tartan seats',
  ]);
R('mini-jcw-hatch', { makes: ['Mini'], models: ['Hatch'], years: [2024, 2026], match: ['^JCW (Classic|Favoured)'] },
  'John Cooper Works', 'Cooper', 'Hot-hatch flagship of the MINI Cooper range.', [
    '2.0L turbo four, 170 kW / 380 Nm',
    '7-speed dual-clutch, front-wheel drive',
  ]);
R('mini-jcw-countryman', { makes: ['Mini'], models: ['Countryman'], years: [2024, 2026], match: ['^JCW'] },
  'John Cooper Works ALL4', 'Countryman', 'Performance flagship Countryman.', [
    '2.0L turbo four, 221 kW / 400 Nm',
    'ALL4 all-wheel drive',
  ]);
R('polo-gti', { makes: ['Volkswagen'], models: ['Polo'], match: ['\\bGTI\\b'] },
  'Polo GTI', 'Polo', 'Pocket-sized GTI.', [
    'Turbo petrol: 1.8T, 1.4 twincharger, 1.8 TSI, then 2.0 TSI (147 kW) from 2018',
    'Front-wheel drive',
  ]);
R('golf-r32', { makes: ['Volkswagen'], models: ['Golf'], match: ['R32'] },
  'Golf R32', 'GTI', 'VR6-powered all-wheel-drive Golf.', [
    '3.2L VR6, 184 kW / 320 Nm',
    '4MOTION all-wheel drive',
    '6-speed manual or DSG',
  ]);
R('golf-r', { makes: ['Volkswagen'], models: ['Golf', 'Golf Wagon'], match: ['^R$'] },
  'Golf R', 'GTI', 'All-wheel-drive hot Golf.', [
    '2.0L turbo four: 188 kW (Mk6), 206–213 kW (Mk7), 235 kW then 245 kW (Mk8)',
    '4MOTION all-wheel drive (torque-vectoring rear diff on Mk8)',
    'Adaptive dampers',
  ]);
R('scirocco-r', { makes: ['Volkswagen'], models: ['Scirocco'], match: ['^R$'] },
  'Scirocco R', 'Scirocco', 'Hot Scirocco coupe.', ['2.0L turbo four, 188 kW', 'Front-wheel drive']);
R('troc-r', { makes: ['Volkswagen'], models: ['T-Roc'], match: ['^R$'] },
  'T-Roc R', 'T-Roc', 'Hot small SUV.', ['2.0L turbo four, 221 kW', '4MOTION all-wheel drive', '7-speed DSG']);
R('touareg-r', { makes: ['Volkswagen'], models: ['Touareg'], match: ['Touareg R', '^R eHybrid'] },
  'Touareg R', 'Touareg', 'Plug-in hybrid flagship Touareg.', ['3.0L turbo V6 plug-in hybrid, 340 kW / 700 Nm', '4MOTION all-wheel drive']);
R('vw-alltrack', { makes: ['Volkswagen'], match: ['Alltrack'] },
  'Alltrack', 'Wagon', 'Raised, all-wheel-drive wagon.', ['4MOTION all-wheel drive', 'Raised ride height and rugged body cladding']);
R('vw-highline', { makes: ['Volkswagen'], match: ['Highline'] },
  'Highline', 'Comfortline', 'Top regular grade.', ['Leather or premium trim', 'More equipment than the Comfortline']);
R('vw-comfortline', { makes: ['Volkswagen'], match: ['Comfortline'] },
  'Comfortline', 'Trendline', 'Mid grade.', ['More equipment than the Trendline']);

// ───────────────────────── BMW ─────────────────────────
const S3 = ['3 Series'], S5 = ['5 Series'];
R('m3-cs-g80', { makes: ['BMW'], models: ['M3', '3 Series'], years: [2023, 2026], match: ['^(M3 )?CS$'] },
  'M3 CS (G80)', 'M3 Competition', 'Lighter, harder M3.', [
    '3.0L twin-turbo inline-6 (S58), 405 kW / 650 Nm',
    'M xDrive all-wheel drive, carbon-fibre bonnet and roof',
  ]);
R('m3-g80-comp-m', { makes: ['BMW'], models: ['M3'], years: [2021, 2026], match: ['^(Touring )?Competition'] },
  'M3 Competition (G80/G81)', 'M3', 'The current M3 sedan and Touring.', [
    '3.0L twin-turbo inline-6 (S58), 375–390 kW',
    '8-speed M Steptronic; M xDrive all-wheel drive available',
  ]);
R('m4-cs-g82', { makes: ['BMW'], models: ['M4', '4 Series'], years: [2024, 2026], match: ['\\bCS\\b'] },
  'M4 CS (G82)', 'M4 Competition', 'Lightweight, track-focused M4.', [
    '3.0L twin-turbo inline-6 (S58), 405 kW / 650 Nm',
    'M xDrive all-wheel drive',
  ]);
R('m4-g82-comp', { makes: ['BMW'], models: ['M4', '4 Series'], years: [2021, 2026], match: ['M4 Competition', '^Competition'] },
  'M4 Competition (G82/G83)', 'M440i', 'Coupe and convertible M4, turned up.', [
    '3.0L twin-turbo inline-6 (S58), 375 kW (390 kW from the 2025 update)',
    '8-speed M Steptronic; M xDrive all-wheel drive',
  ]);
R('m4-g82', { makes: ['BMW'], models: ['M4', '4 Series'], years: [2021, 2026], match: ['^M4( Coupe)?( Manual)?$'] },
  'M4 (G82)', 'M440i', 'The rear-drive, manual M4.', [
    '3.0L twin-turbo inline-6 (S58), 353 kW / 550 Nm',
    '6-speed manual, rear-wheel drive',
  ]);
R('x1-m35i', { makes: ['BMW'], models: ['X1'], years: [2023, 2026], match: ['M35i'] },
  'M35i xDrive', 'xDrive20i', 'Hot compact BMW SUV.', [
    '2.0L turbo four, 221 kW / 400 Nm',
    '7-speed dual-clutch, xDrive all-wheel drive',
  ]);
R('x2-m35i', { makes: ['BMW'], models: ['X2'], years: [2024, 2026], match: ['M35i'] },
  'M35i xDrive (U10)', 'xDrive20i', 'Hot compact BMW coupe-SUV.', [
    '2.0L turbo four, 221 kW / 400 Nm',
    '7-speed dual-clutch, xDrive all-wheel drive',
  ]);
R('m235-f74', { makes: ['BMW'], models: ['2 Series Gran Coupe'], years: [2025, 2026], match: ['^M235 xDrive$'] },
  'M235 xDrive (F74)', '220', 'Current-gen performance Gran Coupe.', [
    '2.0L turbo four, 233 kW / 400 Nm',
    '7-speed dual-clutch, xDrive all-wheel drive',
  ]);
R('m235i-f44', { makes: ['BMW'], models: ['2 Series Gran Coupe'], years: [2020, 2025], match: ['M235i'] },
  'M235i xDrive (F44)', '220i', 'First-gen performance Gran Coupe.', [
    '2.0L turbo four (B48), 225 kW / 450 Nm',
    '8-speed auto, xDrive all-wheel drive',
  ]);
R('m3-g80-comp', { makes: ['BMW'], models: S3, years: [2021, 2026], match: ['M3 Competition'] },
  'M3 Competition (G80)', 'M3', 'The current M3, turned up.', [
    '3.0L twin-turbo inline-6 (S58), 375–390 kW',
    '8-speed M Steptronic; M xDrive all-wheel drive available',
  ]);
R('m3-g80', { makes: ['BMW'], models: S3, years: [2021, 2026], match: ['\\bM3\\b'] },
  'M3 (G80)', 'M340i', 'Sixth-gen M3.', ['3.0L twin-turbo inline-6 (S58), 353 kW / 550 Nm', '6-speed manual or 8-speed M Steptronic']);
R('m3-f80', { makes: ['BMW'], models: S3, years: [2014, 2020], match: ['\\bM3\\b'] },
  'M3 (F80)', '340i', 'Turbo-six M3.', ['3.0L twin-turbo inline-6 (S55), 317 kW (Competition 331 kW)', '6-speed manual or 7-speed M DCT']);
R('m3-e9x', { makes: ['BMW'], models: S3, years: [2007, 2013], match: ['\\bM3\\b'] },
  'M3 (E90/E92)', '335i', 'The only V8 M3.', ['4.0L V8 (S65), 309 kW, revs past 8,000 rpm', '6-speed manual or 7-speed M DCT']);
R('m3-e46', { makes: ['BMW'], models: S3, years: [2000, 2006], match: ['\\bM3\\b'] },
  'M3 (E46)', '330i', 'Fan-favourite M3.', ['3.2L inline-6 (S54), 252 kW', '6-speed manual or SMG II']);
R('m5-g90', { makes: ['BMW'], models: [...S5, 'M5'], years: [2024, 2026], match: ['\\bM5\\b'] },
  'M5 (G90)', 'M550i', 'Plug-in hybrid V8 M5.', ['4.4L twin-turbo V8 plug-in hybrid, 535 kW / 1,000 Nm', 'M xDrive all-wheel drive']);
R('m5-f90-comp', { makes: ['BMW'], models: S5, years: [2018, 2023], match: ['M5 Competition'] },
  'M5 Competition (F90)', 'M5', 'F90 M5, turned up.', ['4.4L twin-turbo V8 (S63), 460 kW', 'M xDrive with 2WD mode']);
R('m5-f90', { makes: ['BMW'], models: S5, years: [2018, 2023], match: ['\\bM5\\b'] },
  'M5 (F90)', 'M550i', 'First all-wheel-drive M5.', ['4.4L twin-turbo V8 (S63), 441 kW / 750 Nm', 'M xDrive with 2WD mode']);
R('m5-f10', { makes: ['BMW'], models: S5, years: [2011, 2017], match: ['\\bM5\\b'] },
  'M5 (F10)', '550i', 'First turbo M5.', ['4.4L twin-turbo V8 (S63), 412 kW (Competition more)', 'Rear-wheel drive, 7-speed M DCT']);
R('m5-e60', { makes: ['BMW'], models: S5, years: [2005, 2010], match: ['\\bM5\\b'] },
  'M5 (E60)', '550i', 'The V10 M5.', ['5.0L V10 (S85), 373 kW', 'Rear-wheel drive, 7-speed SMG III']);
R('m5-e39', { makes: ['BMW'], models: S5, years: [1999, 2004], match: ['\\bM5\\b'] },
  'M5 (E39)', '540i', 'The analogue V8 M5.', ['4.9L V8 (S62), 294 kW', '6-speed manual only']);
R('m135-f70', { makes: ['BMW'], models: ['1 Series'], years: [2025, 2026], match: ['^M135 xDrive$'] },
  'M135 xDrive (F70)', '120', 'Current-gen performance 1 Series.', ['2.0L turbo four, 233 kW / 400 Nm', '7-speed dual-clutch, xDrive all-wheel drive']);
R('m135i-f40', { makes: ['BMW'], models: ['1 Series'], match: ['M135i xDrive'] },
  'M135i xDrive (F40)', '120i', 'All-wheel-drive four-cylinder M135i.', ['2.0L turbo four (B48), 225 kW / 450 Nm', 'xDrive all-wheel drive']);
R('m135i-f20', { makes: ['BMW'], models: ['1 Series'], match: ['M135i'] },
  'M135i (F20)', '125i', 'Rear-drive six-cylinder hatch.', ['3.0L turbo inline-6 (N55)', 'Rear-wheel drive']);
R('m140i', { makes: ['BMW'], models: ['1 Series'], match: ['M140i'] },
  'M140i (F20)', 'M135i', 'Last rear-drive six-cylinder 1 Series.', ['3.0L turbo inline-6 (B58), 250 kW / 500 Nm', 'Rear-wheel drive']);
R('m2-g87', { makes: ['BMW'], models: ['2 Series', 'M2'], years: [2023, 2026], match: ['^(M2 )?Coupe( Auto| Manual)?$', '^M2 M xDrive$'] },
  'M2 (G87)', 'M240i', 'Second-gen M2.', ['3.0L twin-turbo inline-6 (S58), 338 kW (353 kW from 2025)', '6-speed manual or 8-speed M Steptronic', 'Rear-wheel drive (M xDrive AWD option from 2026)']);
R('m2-cs-g87', { makes: ['BMW'], models: ['M2'], years: [2025, 2026], match: ['^(M2 )?CS$'] },
  'M2 CS (G87)', 'M2', 'Lightened, more powerful limited-run M2.', ['3.0L twin-turbo inline-6 (S58), 390 kW / 650 Nm', '8-speed M Steptronic, rear-wheel drive']);
R('m2-competition', { makes: ['BMW'], models: ['2 Series', 'M2'], years: [2018, 2021], match: ['Competition'] },
  'M2 Competition (F87)', 'M2', 'M2 with the M4\'s engine.', ['3.0L twin-turbo inline-6 (S55), 302 kW', 'Rear-wheel drive']);
R('m2-f87', { makes: ['BMW'], models: ['2 Series', 'M2'], years: [2016, 2018], match: ['^M2 Coupe$'] },
  'M2 (F87)', 'M240i', 'First-gen M2.', ['3.0L turbo inline-6 (N55), 272 kW', 'Rear-wheel drive']);
R('m240i-g42', { makes: ['BMW'], models: ['2 Series'], match: ['M240i xDrive'] },
  'M240i xDrive (G42)', '220i', 'Current six-cylinder 2 Series coupe.', ['3.0L turbo inline-6 (B58), 285 kW', 'xDrive all-wheel drive']);
R('m240i-f22', { makes: ['BMW'], models: ['2 Series'], match: ['M240i'] },
  'M240i (F22)', '230i', 'Rear-drive six-cylinder coupe.', ['3.0L turbo inline-6 (B58), 250 kW', 'Rear-wheel drive']);
R('z4-m40i', { makes: ['BMW'], models: ['Z4'], match: ['M40i'] },
  'Z4 M40i', 'sDrive30i', 'Six-cylinder Z4 roadster.', ['3.0L turbo inline-6 (B58), 250–285 kW', 'Rear-wheel drive']);
R('x-m40i', { makes: ['BMW'], models: ['X3', 'X4'], match: ['M40i'] },
  'M40i', 'xDrive30i', 'Six-cylinder M Performance SUV.', ['3.0L turbo inline-6 (B58), 260–285 kW depending on year', 'xDrive all-wheel drive']);
R('x-m50i', { makes: ['BMW'], models: ['X5', 'X6', 'X7'], match: ['M50i'] },
  'M50i', 'xDrive40i', 'V8 M Performance SUV.', ['4.4L twin-turbo V8 (N63), 390 kW / 750 Nm', 'xDrive all-wheel drive']);
R('m550i', { makes: ['BMW'], models: S5, match: ['M550i'] },
  'M550i xDrive', '540i', 'V8 M Performance 5 Series.', ['4.4L twin-turbo V8 (N63), 390 kW / 750 Nm', 'xDrive all-wheel drive']);
R('340i', { makes: ['BMW'], models: S3, match: ['340i'] },
  '340i / M340i', '330i', 'Six-cylinder 3 Series.', ['3.0L turbo inline-6 (B58): 240 kW (F30 340i) to 285 kW (G20 M340i)']);
R('335i', { makes: ['BMW'], models: S3, match: ['335i'] },
  '335i', '330i / 328i', 'Turbo six 3 Series.', ['3.0L turbo inline-6, 225 kW: twin-turbo N54 (early E9x), N55 from 2010']);
R('550i', { makes: ['BMW'], models: S5, match: ['550i'] },
  '550i', '535i', 'V8 5 Series.', ['V8: 4.8L (E60), 4.4L twin-turbo N63 (F10, 300–330 kW)']);
R('535i', { makes: ['BMW'], models: S5, years: [2010, 2017], match: ['535i'] },
  '535i (F10)', '528i', 'Six-cylinder 5 Series.', ['3.0L turbo inline-6 (N55), 225 kW / 400 Nm', '8-speed automatic']);


// ───────────────────────── Audi (RS / R8) ─────────────────────────
const AUDI = ['Audi'];
const RS3M = ['RS3', 'A3 Sportback'];
R('rs3-8y', { makes: AUDI, models: RS3M, years: [2021, 2026], match: ['RS3'] },
  'RS3 (8Y)', 'S3', 'Five-cylinder hot hatch, current generation.', [
    '2.5L turbo five-cylinder, 294 kW / 500 Nm',
    'quattro AWD with RS Torque Splitter rear axle',
    '7-speed S tronic dual-clutch',
  ]);
R('rs3-8v', { makes: AUDI, models: RS3M, years: [2015, 2020], match: ['RS3'] },
  'RS3 (8V)', 'S3', 'Five-cylinder hot hatch.', [
    '2.5L turbo five-cylinder, 270 kW early, 294 kW from the update',
    'quattro all-wheel drive',
    '7-speed S tronic dual-clutch',
  ]);
R('rs3-8p', { makes: AUDI, models: RS3M, years: [2011, 2013], match: ['RS3'] },
  'RS3 Sportback (8P)', 'S3', 'The first RS3.', [
    '2.5L turbo five-cylinder, 250 kW / 450 Nm',
    'quattro all-wheel drive',
    '7-speed S tronic dual-clutch',
  ]);
R('rs4-b9', { makes: AUDI, models: ['RS4'], years: [2018, 2023], match: ['RS4'] },
  'RS4 Avant (B9)', 'S4', 'Twin-turbo V6 super-wagon.', ['2.9L twin-turbo V6, 331 kW / 600 Nm', 'quattro AWD, 8-speed tiptronic']);
R('rs4-b8', { makes: AUDI, models: ['RS4'], years: [2012, 2016], match: ['RS4'] },
  'RS4 Avant (B8)', 'S4', 'Last naturally aspirated V8 RS4.', ['4.2L naturally aspirated V8, 331 kW, revs to 8,250 rpm', 'quattro AWD, 7-speed S tronic']);
R('rs4-b7', { makes: AUDI, models: ['RS4'], years: [2004, 2008], match: ['RS4'] },
  'RS4 (B7)', 'S4', 'High-revving V8 RS4.', ['4.2L naturally aspirated V8, 309 kW', 'quattro AWD, 6-speed manual']);
R('rs5-f5', { makes: AUDI, models: ['RS5'], years: [2017, 2026], match: ['RS5'] },
  'RS5 (F5)', 'S5', 'Twin-turbo V6 RS5.', ['2.9L twin-turbo V6, 331 kW / 600 Nm', 'quattro AWD, 8-speed tiptronic']);
R('rs5-8t', { makes: AUDI, models: ['RS5'], years: [2010, 2016], match: ['RS5'] },
  'RS5 (8T)', 'S5', 'V8 RS5 coupe.', ['4.2L naturally aspirated V8, 331 kW', 'quattro AWD, 7-speed S tronic']);
R('rs6-c8', { makes: AUDI, models: ['RS6'], years: [2020, 2026], match: ['RS6'] },
  'RS6 Avant (C8)', 'S6', 'The family-car flex.', ['4.0L twin-turbo V8, 441 kW / 800 Nm (Performance 463 kW)', 'quattro AWD, 8-speed tiptronic', 'Mild-hybrid 48V system']);
R('rs6-c7', { makes: AUDI, models: ['RS6'], years: [2013, 2019], match: ['RS6'] },
  'RS6 Avant (C7)', 'S6', 'Twin-turbo V8 RS6.', ['4.0L twin-turbo V8, 412 kW (Performance 445 kW)', 'quattro AWD, 8-speed tiptronic']);
R('rs6-c6', { makes: AUDI, models: ['RS6'], years: [2007, 2011], match: ['RS6'] },
  'RS6 Avant (C6)', 'S6', 'The V10 RS6.', ['5.0L twin-turbo V10, 426 kW', 'quattro AWD, 6-speed tiptronic']);
R('rs7-c8', { makes: AUDI, models: ['RS7'], years: [2020, 2026], match: ['RS7'] },
  'RS7 (C8)', 'S7', 'Sportback version of the RS6.', ['4.0L twin-turbo V8, 441 kW / 800 Nm (Performance 463 kW)', 'quattro AWD, 8-speed tiptronic']);
R('rs7-c7', { makes: AUDI, models: ['RS7'], years: [2014, 2019], match: ['RS7'] },
  'RS7 (C7)', 'S7', 'Twin-turbo V8 Sportback.', ['4.0L twin-turbo V8, 412 kW (Performance 445 kW)', 'quattro AWD, 8-speed tiptronic']);
R('rsq3-f3', { makes: AUDI, models: ['RS Q3'], years: [2020, 2026], match: ['RS Q3'] },
  'RS Q3 (F3)', 'Q3', 'Five-cylinder performance SUV.', ['2.5L turbo five-cylinder, 294 kW / 480 Nm', 'quattro AWD, 7-speed S tronic']);
R('rsq3-8u', { makes: AUDI, models: ['RS Q3'], years: [2014, 2018], match: ['RS Q3'] },
  'RS Q3 (8U)', 'Q3', 'The first RS SUV.', ['2.5L turbo five-cylinder (228–250 kW depending on year)', 'quattro AWD, 7-speed S tronic']);
R('rsq8', { makes: AUDI, models: ['RS Q8'], match: ['^RS Q8$'] },
  'RS Q8', 'SQ8', 'V8 performance SUV.', ['4.0L twin-turbo V8, 441 kW / 800 Nm (later Performance 471 kW)', 'quattro AWD, 8-speed tiptronic', 'Mild-hybrid 48V with active anti-roll']);
R('rs-etron-gt-perf', { makes: AUDI, models: ['e-tron GT'], match: ['RS e-tron GT Performance'] },
  'RS e-tron GT Performance', 'RS e-tron GT', 'Updated flagship electric RS.', ['Dual-motor AWD electric, up to 680 kW with launch control', 'Two-speed rear gearbox']);
R('rs-etron-gt', { makes: AUDI, models: ['e-tron GT'], match: ['RS e-tron GT'] },
  'RS e-tron GT', 'e-tron GT', 'Audi\'s electric RS (Taycan relative).', ['Dual-motor AWD electric, up to 475 kW with launch control (2021–24)', 'Two-speed rear gearbox']);
R('tt-rs-8s', { makes: AUDI, models: ['TT'], years: [2017, 2023], match: ['TT RS'] },
  'TT RS (8S)', 'TTS', 'Five-cylinder TT.', ['2.5L turbo five-cylinder, 294 kW / 480 Nm', 'quattro AWD, 7-speed S tronic']);
R('tt-rs-8j', { makes: AUDI, models: ['TT'], years: [2010, 2015], match: ['TT RS'] },
  'TT RS (8J)', 'TTS', 'First five-cylinder TT RS.', ['2.5L turbo five-cylinder, 250 kW', 'quattro AWD']);
R('r8-v10-perf', { makes: AUDI, models: ['R8'], match: ['V10 Performance'] },
  'R8 V10 Performance', 'R8 V10', 'Top second-gen R8.', ['5.2L naturally aspirated V10, 449 kW', 'Mid-engine, 7-speed S tronic']);
R('r8-v10-plus', { makes: AUDI, models: ['R8'], match: ['V10 Plus'] },
  'R8 V10 Plus', 'R8 V10', 'Hardcore R8.', ['5.2L naturally aspirated V10 (404 kW first gen, 449 kW second gen)', 'Mid-engine, quattro AWD']);
R('r8-v10-gen2', { makes: AUDI, models: ['R8'], years: [2016, 2019], match: ['^V10$'] },
  'R8 V10 (Gen 2)', 'R8', 'Second-gen R8.', ['5.2L naturally aspirated V10, 397 kW', 'Mid-engine, quattro AWD, 7-speed S tronic']);
R('r8-v10-gen1', { makes: AUDI, models: ['R8'], years: [2009, 2015], match: ['^V10$'] },
  'R8 V10 (Gen 1)', 'R8 V8', 'V10 first-gen R8, shares its engine family with the Gallardo.', ['5.2L naturally aspirated V10, 386 kW', 'Mid-engine, quattro AWD']);
R('r8-v8', { makes: AUDI, models: ['R8'], match: ['^V8$'] },
  'R8 V8', '—', 'The original R8.', ['4.2L naturally aspirated V8 (RS4-derived), 309–316 kW', 'Mid-engine, quattro AWD', 'Gated 6-speed manual or R tronic']);
R('rs2', { makes: AUDI, models: ['RS2 Avant'], match: ['.'] },
  'RS2 Avant', 'S2', 'The original RS, built with Porsche.', ['2.2L turbo five-cylinder, 232 kW', 'quattro AWD, 6-speed manual', 'Assembled by Porsche at Zuffenhausen']);

// Sanity: ids unique, scopes well-formed
const ids = new Set();
for (const r of rules) {
  if (ids.has(r.id)) throw new Error('dup id ' + r.id);
  ids.add(r.id);
  if (!r.makes?.length) throw new Error('rule without makes: ' + r.id);
  [...(r.models || []), ...r.match, ...(r.exclude || [])].forEach(p => new RegExp(p, 'i'));
}
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'trimInfo.json'), JSON.stringify(rules, null, 2) + '\n');
console.log('wrote', rules.length, 'trim rules');
