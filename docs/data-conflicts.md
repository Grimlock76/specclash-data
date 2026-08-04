# Fuel-type / fuel-figure sweep (2026-07-16)

The validator's fuel-implausible bucket (1601 flags) turned out to be almost
entirely false positives and is now clean (0 flags):

- **296 entries relabeled** `hybrid`/`petrol`/`diesel` → `Plug-in Hybrid`
  (scripts/fix-phev-labels.cjs). Detection: non-EV entries with a fuel figure
  under 2.2 L/100km — impossible without a charge socket. All 62 model/trim
  combos were manually confirmed as genuine plug-ins (Outlander PHEV, Volvo T8
  Recharge, X5 xDrive45e, GLC300e, GLE350de, BYD DM-i, CUPRA e-Hybrid, …).
- **Validator tuned** (scripts/validate-specs.cjs): PHEVs exempt from the
  2 L/100km floor; upper caps era/power-aware (pre-1960: 90, pre-1990: 40,
  ≥400 kW: 45, city cycle: ≥30) since a Veyron's official urban figure of
  ~40 L/100km and a 1927 Bugatti Royale's ~50 are real, not errors.

# Duplicate-key power conflicts

Generated 2026-07-03 by the /loop data-quality sweep. Same spec key defined in
two files with >10% power disagreement. The LATER file wins in the app, and
spot-checks show the later value is usually correct — so these are mostly
harmless stale shadows. Groups worth future review are ones where the winning
value looks wrong (Maserati batch fixed 2026-07-03; Camry "Atara SL" pre-2012
is a trim-name anachronism, power is right for the 2.4L).

| Years | Model+Trim | Shadowed | Wins |
|---|---|---|---|
| 12 | Toyota|Camry|Atara SL | 200 kW (s11, shadowed) | 120 kW (s20, wins) |
| 11 | Volvo|S60|T8 Recharge | 280 kW (s56, shadowed) | 335 kW (s113, wins) |
| 10 | SsangYong|Rexton|Ultimate | 178 kW (s90, shadowed) | 131 kW (s115, wins) |
| 8 | Maserati|GranTurismo|MC Stradale | 405 kW (s77, shadowed) | 338 kW (s113, wins) |
| 8 | Alpine|A310|V6 | 118 kW (s98, shadowed) | 103 kW (s114, wins) |
| 7 | Maserati|Ghibli|S | 410 kW (s77, shadowed) | 301 kW (s113, wins) |
| 7 | Aston Martin|Vantage|F1 Edition | 430 kW (s86, shadowed) | 376 kW (s115, wins) |
| 7 | Hyundai|i20|N Line | 88 kW (s32, shadowed) | 150 kW (s116, wins) |
| 7 | Hyundai|Kona|Elite | 130 kW (s32, shadowed) | 110 kW (s116, wins) |
| 7 | Toyota|LandCruiser 70|GX | 195 kW (s14, shadowed) | 151 kW (s128, wins) |
| 7 | Toyota|LandCruiser 70|GXL | 195 kW (s14, shadowed) | 151 kW (s128, wins) |
| 7 | Toyota|LandCruiser 70|Workmate | 195 kW (s14, shadowed) | 151 kW (s128, wins) |
| 6 | Mitsubishi|Eclipse|RS | 100 kW (s20, shadowed) | 88 kW (s27, wins) |
| 6 | SsangYong|Korando|Ultimate | 100 kW (s90, shadowed) | 120 kW (s115, wins) |
| 6 | Hyundai|i20|Elite | 94 kW (s32, shadowed) | 74 kW (s116, wins) |
| 6 | Honda|Jazz|e:HEV Vibe | 72 kW (s43, shadowed) | 96 kW (s125, wins) |
| 6 | Honda|Jazz|e:HEV Luxe | 72 kW (s43, shadowed) | 96 kW (s125, wins) |
| 5 | Mitsubishi|Eclipse|GS | 69 kW (s20, shadowed) | 88 kW (s27, wins) |
| 5 | Lotus|Emira|V6 First Edition | 265 kW (s88, shadowed) | 298 kW (s114, wins) |
| 5 | Volkswagen|ID.4|Pro 4MOTION | 150 kW (s117, shadowed) | 195 kW (s123, wins) |
| 5 | Volkswagen|ID.4|GTX | 220 kW (s117, shadowed) | 250 kW (s123, wins) |
| 5 | Citroën|C3|Shine | 130 kW (s78, shadowed) | 81 kW (s234, wins) |
| 4 | Maserati|Ghibli|Trofeo | 580 kW (s77, shadowed) | 427 kW (s113, wins) |
| 4 | Maserati|Levante|Trofeo | 580 kW (s77, shadowed) | 427 kW (s113, wins) |
| 4 | Maserati|GranTurismo|S | 440 kW (s77, shadowed) | 323 kW (s113, wins) |
| 4 | Hyundai|Kona|Electric Active | 100 kW (s32, shadowed) | 150 kW (s122, wins) |
| 3 | HSV Commodore|VT GTS | 225 kW (s3, shadowed) | 260 kW (holden, wins) |
| 3 | Statesman|WH Statesman | 152 kW (s3, shadowed) | 171 kW (holden, wins) |
| 3 | HSV Grange|VF II GEN-F2 | 430 kW (s3, shadowed) | 340 kW (holden, wins) |
| 3 | Toyota|Supra|GTS | 250 kW (s10, shadowed) | 285 kW (s20, wins) |
| 3 | Datsun|Skyline|2000GT | 96 kW (s71, shadowed) | 78 kW (s73, wins) |
| 3 | Genesis|GV70|Electrified | 320 kW (s62, shadowed) | 360 kW (s110, wins) |
| 3 | Volkswagen|ID.3|Pro S | 210 kW (s40, shadowed) | 150 kW (s117, wins) |
| 3 | Nissan|Juke|ST | 103 kW (s30, shadowed) | 84 kW (s118, wins) |
| 3 | Nissan|Juke|ST-L | 103 kW (s30, shadowed) | 84 kW (s118, wins) |
| 3 | Mitsubishi|ASX|MK2 ES | 96 kW (s26, shadowed) | 74 kW (s119, wins) |
| 3 | Mazda|CX-90|GT | 241 kW (s41, shadowed) | 209 kW (s120, wins) |
| 3 | Hyundai|Kona|Electric | 150 kW (s116, shadowed) | 100 kW (s122, wins) |
| 3 | Kia|EV9|GT | 380 kW (s116, shadowed) | 430 kW (s123, wins) |
| 3 | Ford|Ranger|P703 Raptor | 292 kW (ford, shadowed) | 224 kW (s127, wins) |
| 3 | CUPRA|Leon|VZ | 180 kW (s120, shadowed) | 221 kW (s233, wins) |
| 2 | HSV Commodore|VX GTS | 235 kW (s3, shadowed) | 260 kW (holden, wins) |
| 2 | Statesman|VP Statesman | 130 kW (s3, shadowed) | 147 kW (holden, wins) |
| 2 | Commodore|VZ Ute S | 152 kW (s2, shadowed) | 175 kW (holden, wins) |
| 2 | HSV Senator|VT Senator | 225 kW (s3, shadowed) | 260 kW (holden, wins) |
| 2 | HSV Senator|VX Senator | 235 kW (s3, shadowed) | 260 kW (holden, wins) |
| 2 | HSV Grange|VF GEN-F | 430 kW (s3, shadowed) | 340 kW (holden, wins) |
| 2 | HSV Senator|VE II Senator | 430 kW (s3, shadowed) | 325 kW (holden, wins) |
| 2 | HSV|GTS|VE II GTS | 430 kW (s7, shadowed) | 325 kW (s9, wins) |
| 2 | Audi|A3|S3 | 213 kW (s45, shadowed) | 245 kW (s50, wins) |
| 2 | Datsun|Skyline|GT-R | 160 kW (s71, shadowed) | 134 kW (s73, wins) |
| 2 | Datsun|Skyline|2000GT-X | 103 kW (s71, shadowed) | 82 kW (s73, wins) |
| 2 | Datsun|Silvia|Standard | 74 kW (s71, shadowed) | 63 kW (s73, wins) |
| 2 | Renault|Clio|RS Line | 103 kW (s70, shadowed) | 74 kW (s110, wins) |
| 2 | Alfa Romeo|Tonale|Veloce PHEV | 165 kW (s66, shadowed) | 206 kW (s111, wins) |
| 2 | Tesla|Model 3|Long Range AWD | 340 kW (s57, shadowed) | 258 kW (s111, wins) |
| 2 | Tesla|Model Y|Long Range AWD | 366 kW (s57, shadowed) | 324 kW (s111, wins) |
| 2 | Tesla|Model Y|Performance | 450 kW (s57, shadowed) | 393 kW (s111, wins) |
| 2 | Tesla|Model S|P100D | 568 kW (s57, shadowed) | 460 kW (s111, wins) |
| 2 | Tesla|Model X|P100D | 568 kW (s57, shadowed) | 460 kW (s111, wins) |
| 2 | GWM|Haval Jolion|Ultra | 130 kW (s60, shadowed) | 110 kW (s111, wins) |
| 2 | MG|ZS|Essence | 115 kW (s59, shadowed) | 82 kW (s115, wins) |
| 2 | Toyota|C-HR|GX Hybrid | 90 kW (s118, shadowed) | 103 kW (s125, wins) |
| 2 | Toyota|C-HR|GXL Hybrid | 90 kW (s118, shadowed) | 103 kW (s125, wins) |
| 2 | Toyota|C-HR|GXL PHEV | 135 kW (s118, shadowed) | 164 kW (s125, wins) |
| 2 | Toyota|C-HR|Koba PHEV | 135 kW (s118, shadowed) | 164 kW (s125, wins) |
| 2 | Ford|Ranger|P703 XLT | 184 kW (ford, shadowed) | 154 kW (s127, wins) |
| 2 | Lamborghini|Huracan|STO | 640 kW (s76, shadowed) | 470 kW (s191, wins) |
| 2 | Citroën|C4|Shine | 130 kW (s78, shadowed) | 114 kW (s234, wins) |
| 1 | Statesman|WL Caprice | 270 kW (s3, shadowed) | 225 kW (holden, wins) |
| 1 | Statesman|VL Caprice | 157 kW (s3, shadowed) | 109 kW (holden, wins) |
| 1 | Statesman|VN Caprice | 173 kW (s3, shadowed) | 127 kW (holden, wins) |
| 1 | HSV Commodore|VR GTS | 195 kW (s3, shadowed) | 215 kW (holden, wins) |
| 1 | HSV Senator|VS Senator | 200 kW (s3, shadowed) | 260 kW (holden, wins) |
| 1 | Torana|UC SL | 97 kW (s6, shadowed) | 63 kW (holden, wins) |
| 1 | Ford|Falcon (XY)|GT | 157 kW (s4, shadowed) | 220 kW (ford, wins) |
| 1 | Ford|Falcon (XR)|GT | 149 kW (s4, shadowed) | 164 kW (ford, wins) |
| 1 | Ford|FPV GT (BA-BF)|GT | 290 kW (s4, shadowed) | 260 kW (ford, wins) |
| 1 | Ford|Falcon (XL)|Standard | 74 kW (s4, shadowed) | 63 kW (ford, wins) |
| 1 | Ford|Falcon (XM)|Standard | 86 kW (s4, shadowed) | 75 kW (ford, wins) |
| 1 | Ford|Falcon (XM)|Sprint | 104 kW (s4, shadowed) | 119 kW (ford, wins) |
| 1 | Ford|Falcon (XP)|Standard | 86 kW (s4, shadowed) | 97 kW (ford, wins) |
| 1 | Ford|Falcon (XR)|Standard | 86 kW (s4, shadowed) | 97 kW (ford, wins) |
| 1 | Ford|Falcon (XT)|500 | 108 kW (s4, shadowed) | 97 kW (ford, wins) |
| 1 | Ford|Falcon (XT)|GT | 157 kW (s4, shadowed) | 186 kW (ford, wins) |
| 1 | Ford|Falcon (XW)|GT | 157 kW (s4, shadowed) | 216 kW (ford, wins) |
| 1 | Ford|Falcon (XA)|GS | 164 kW (s4, shadowed) | 112 kW (ford, wins) |
| 1 | Ford|Falcon (XB)|Cobra | 224 kW (s4, shadowed) | 176 kW (ford, wins) |
| 1 | Ford|Falcon (XC)|500 | 108 kW (s4, shadowed) | 94 kW (ford, wins) |
| 1 | Ford|Falcon (XC)|Cobra | 194 kW (s4, shadowed) | 147 kW (ford, wins) |
| 1 | Ford|Falcon (XC)|Fairmont | 108 kW (s4, shadowed) | 94 kW (ford, wins) |
| 1 | Ford|Falcon (XD)|GL | 108 kW (s4, shadowed) | 97 kW (ford, wins) |
| 1 | Ford|Falcon (XD)|ESP | 194 kW (s4, shadowed) | 130 kW (ford, wins) |
| 1 | Ford|Falcon (XD)|Fairmont | 114 kW (s4, shadowed) | 97 kW (ford, wins) |
| 1 | Ford|Falcon (XE)|GL | 114 kW (s4, shadowed) | 97 kW (ford, wins) |
| 1 | Ford|Falcon (XE)|ESP | 194 kW (s4, shadowed) | 130 kW (ford, wins) |
| 1 | Ford|Falcon (XE)|S-Pack | 120 kW (s4, shadowed) | 97 kW (ford, wins) |
| 1 | Ford|Falcon (XF)|GL | 114 kW (s4, shadowed) | 97 kW (ford, wins) |
| 1 | Ford|Falcon (XF)|S-Pack | 120 kW (s4, shadowed) | 100 kW (ford, wins) |
| 1 | Ford|Falcon (XF)|Longreach | 114 kW (s4, shadowed) | 97 kW (ford, wins) |
| 1 | Ford|Falcon (EA)|S | 132 kW (s4, shadowed) | 113 kW (ford, wins) |
| 1 | Ford|Falcon (EB)|GL | 132 kW (s4, shadowed) | 113 kW (ford, wins) |
| 1 | Ford|Falcon (ED)|GL | 132 kW (s4, shadowed) | 148 kW (ford, wins) |
| 1 | Ford|Falcon (AU)|XR6 Turbo | 240 kW (s4, shadowed) | 172 kW (ford, wins) |
| 1 | Mitsubishi|Outlander|VR-X | 114 kW (s20, shadowed) | 162 kW (s26, wins) |
| 1 | Datsun|510|Standard | 72 kW (s71, shadowed) | 47 kW (s73, wins) |
| 1 | Datsun|510|Wagon | 72 kW (s71, shadowed) | 47 kW (s73, wins) |
| 1 | Datsun|510|2-door | 72 kW (s71, shadowed) | 47 kW (s73, wins) |
| 1 | Datsun|1000|Standard | 37 kW (s71, shadowed) | 28 kW (s73, wins) |
| 1 | Datsun|Fairlady 1600|Standard | 64 kW (s71, shadowed) | 71 kW (s73, wins) |
| 1 | Datsun|Fairlady 2000|Standard | 112 kW (s71, shadowed) | 96 kW (s73, wins) |
| 1 | Datsun|240Z|Standard | 125 kW (s71, shadowed) | 110 kW (s73, wins) |
| 1 | Datsun|120Y|Standard | 52 kW (s71, shadowed) | 41 kW (s73, wins) |
| 1 | Datsun|120Y|GL | 52 kW (s71, shadowed) | 41 kW (s73, wins) |
| 1 | Datsun|120Y|GX | 60 kW (s71, shadowed) | 52 kW (s73, wins) |
| 1 | Datsun|120Y|Wagon | 52 kW (s71, shadowed) | 41 kW (s73, wins) |
| 1 | Datsun|120Y|GL-E | 62 kW (s71, shadowed) | 52 kW (s73, wins) |
| 1 | Datsun|180B|Standard | 74 kW (s71, shadowed) | 63 kW (s73, wins) |
| 1 | Datsun|620 Ute|Standard | 62 kW (s71, shadowed) | 52 kW (s73, wins) |
| 1 | Datsun|200B|SSS | 100 kW (s71, shadowed) | 82 kW (s73, wins) |
| 1 | Datsun|200B|GL-E | 90 kW (s71, shadowed) | 74 kW (s73, wins) |
| 1 | Datsun|Stanza|GL | 74 kW (s71, shadowed) | 60 kW (s73, wins) |
| 1 | Datsun|280ZX|Standard | 118 kW (s71, shadowed) | 102 kW (s73, wins) |
| 1 | Datsun|280ZX|2+2 | 118 kW (s71, shadowed) | 102 kW (s73, wins) |
| 1 | Datsun|280ZX|Turbo | 145 kW (s71, shadowed) | 121 kW (s73, wins) |
| 1 | Datsun|280ZX|Targa | 118 kW (s71, shadowed) | 102 kW (s73, wins) |
| 1 | Datsun|710 Violet|Standard | 60 kW (s71, shadowed) | 52 kW (s73, wins) |
| 1 | Datsun|710 Violet|GL | 66 kW (s71, shadowed) | 52 kW (s73, wins) |
| 1 | Datsun|Skyline|1800 | 74 kW (s71, shadowed) | 63 kW (s73, wins) |
| 1 | Datsun|Laurel|Standard | 82 kW (s71, shadowed) | 63 kW (s73, wins) |
| 1 | Datsun|Patrol|Hardtop | 100 kW (s71, shadowed) | 72 kW (s73, wins) |
| 1 | Datsun|Patrol|Wagon | 100 kW (s71, shadowed) | 72 kW (s73, wins) |
| 1 | Datsun|Patrol|SGL | 100 kW (s71, shadowed) | 63 kW (s73, wins) |
| 1 | Datsun|410 Bluebird|Standard | 48 kW (s71, shadowed) | 41 kW (s73, wins) |
| 1 | Datsun|410 Bluebird|SSS | 64 kW (s71, shadowed) | 71 kW (s73, wins) |
| 1 | Datsun|521 Ute|Standard | 48 kW (s71, shadowed) | 40 kW (s73, wins) |
| 1 | Datsun|Cherry|GL | 48 kW (s71, shadowed) | 35 kW (s73, wins) |
| 1 | Datsun|Silvia|1800 | 88 kW (s71, shadowed) | 74 kW (s73, wins) |
| 1 | Datsun|Silvia|Turbo | 125 kW (s71, shadowed) | 84 kW (s73, wins) |
| 1 | Datsun|910 Bluebird|GL | 74 kW (s71, shadowed) | 60 kW (s73, wins) |
| 1 | Datsun|910 Bluebird|SGL | 82 kW (s71, shadowed) | 67 kW (s73, wins) |
| 1 | Datsun|Cedric|SGL | 82 kW (s71, shadowed) | 107 kW (s73, wins) |
| 1 | Datsun|Cedric|GL | 90 kW (s71, shadowed) | 74 kW (s73, wins) |
| 1 | Datsun|Cedric|Diesel | 65 kW (s71, shadowed) | 44 kW (s73, wins) |
| 1 | Datsun|Redi-GO|Standard | 39 kW (s71, shadowed) | 35 kW (s73, wins) |
| 1 | Datsun|on-DO|Standard | 82 kW (s71, shadowed) | 61 kW (s73, wins) |
| 1 | Datsun|on-DO|Dream | 82 kW (s71, shadowed) | 61 kW (s73, wins) |
| 1 | Datsun|on-DO|Trust | 82 kW (s71, shadowed) | 61 kW (s73, wins) |
| 1 | Datsun|mi-DO|Standard | 82 kW (s71, shadowed) | 61 kW (s73, wins) |
| 1 | Datsun|mi-DO|Dream | 82 kW (s71, shadowed) | 61 kW (s73, wins) |
| 1 | Datsun|mi-DO|Trust | 82 kW (s71, shadowed) | 61 kW (s73, wins) |
| 1 | Datsun|Bluebird 310|Standard | 33 kW (s71, shadowed) | 26 kW (s73, wins) |
| 1 | Datsun|Bluebird 310|Deluxe | 44 kW (s71, shadowed) | 26 kW (s73, wins) |
| 1 | Datsun|Silvia CSP311|Standard | 67 kW (s71, shadowed) | 78 kW (s73, wins) |
| 1 | Datsun|Sunny|Standard | 52 kW (s71, shadowed) | 41 kW (s73, wins) |
| 1 | Datsun|Sunny|GL | 60 kW (s71, shadowed) | 52 kW (s73, wins) |
| 1 | Honda|Jazz|VTi-S | 81 kW (s43, shadowed) | 66 kW (s108, wins) |
| 1 | Tesla|Model 3|Performance | 460 kW (s57, shadowed) | 358 kW (s111, wins) |
| 1 | Jeep|Grand Cherokee|Summit | 260 kW (s64, shadowed) | 210 kW (s113, wins) |
| 1 | MG|MG3|Core | 70 kW (s59, shadowed) | 83 kW (s115, wins) |
| 1 | MG|MG3|Excite | 70 kW (s59, shadowed) | 83 kW (s115, wins) |
| 1 | MG|MG6|Standard | 99 kW (s59, shadowed) | 118 kW (s115, wins) |
| 1 | MG|MG6|Magnette | 99 kW (s59, shadowed) | 118 kW (s115, wins) |
| 1 | Hyundai|Tucson|Active X | 122 kW (s32, shadowed) | 195 kW (s123, wins) |
| 1 | Volvo|V90|T8 Recharge | 335 kW (s56, shadowed) | 287 kW (s124, wins) |
| 1 | Ford|Ranger|P703 XL | 154 kW (ford, shadowed) | 125 kW (s127, wins) |
| 1 | Toyota|LandCruiser 200|GX | 227 kW (s12, shadowed) | 200 kW (s128, wins) |
| 1 | Toyota|LandCruiser 200|GXL | 227 kW (s12, shadowed) | 200 kW (s128, wins) |
| 1 | Toyota|LandCruiser 200|VX | 227 kW (s12, shadowed) | 200 kW (s128, wins) |
| 1 | Toyota|LandCruiser 200|Sahara | 227 kW (s12, shadowed) | 200 kW (s128, wins) |
| 1 | Porsche|911|Dakar | 353 kW (s107, shadowed) | 283 kW (s175, wins) |
| 1 | Porsche|Taycan|Taycan 4S | 390 kW (s46, shadowed) | 320 kW (s175, wins) |
| 1 | Porsche|Taycan|Taycan Sport Turismo | 300 kW (s46, shadowed) | 350 kW (s175, wins) |
| 1 | Mercedes-Benz|AMG GT|AMG GT 43 | 320 kW (s48, shadowed) | 270 kW (s175, wins) |
| 1 | Honda|CR-V|e:PHEV | 158 kW (s120, shadowed) | 135 kW (s175, wins) |
| 1 | Nissan|X-Trail|Ti-L e-4ORCE | 225 kW (s41, shadowed) | 150 kW (s175, wins) |
| 1 | Volkswagen|Amarok|TDI500 Style | 154 kW (s36, shadowed) | 186 kW (s176, wins) |
| 1 | Volkswagen|Amarok|TDI600 Aventura | 184 kW (s36, shadowed) | 225 kW (s176, wins) |
| 1 | Volkswagen|Amarok|TDI600 PanAmericana | 184 kW (s36, shadowed) | 225 kW (s176, wins) |
| 1 | Toyota|Prius|GXL | 144 kW (s29, shadowed) | 164 kW (s176, wins) |
| 1 | Toyota|Alphard|Executive | 134 kW (s119, shadowed) | 200 kW (s176, wins) |
| 1 | Toyota|Alphard|Executive Lounge | 134 kW (s119, shadowed) | 200 kW (s176, wins) |
| 1 | BMW|M2|CS | 373 kW (s117, shadowed) | 331 kW (s176, wins) |
| 1 | Genesis|G90|3.5T | 311 kW (s62, shadowed) | 380 kW (s177, wins) |
| 1 | Genesis|G90|3.5T e-AWD | 311 kW (s62, shadowed) | 382 kW (s177, wins) |
| 1 | CUPRA|Born|VZ | 231 kW (s68, shadowed) | 170 kW (s177, wins) |
| 1 | Ford|Mustang|Dark Horse | 345 kW (ford, shadowed) | 304 kW (s177, wins) |
| 1 | Hyundai|Kona|Active petrol | 88 kW (s32, shadowed) | 115 kW (s178, wins) |
| 1 | MG|MG HS|PHEV | 196 kW (s59, shadowed) | 163 kW (s178, wins) |
| 1 | Chery|Tiggo 8 Pro|Turbo | 140 kW (s70, shadowed) | 115 kW (s178, wins) |
| 1 | Aston Martin|Vantage|V12 Vantage | 618 kW (s115, shadowed) | 515 kW (s178, wins) |
| 1 | Ford|Everest|UB Sport | 250 kW (ford, shadowed) | 154 kW (s179, wins) |
| 1 | Kia|Sportage|S Hybrid | 169 kW (s41, shadowed) | 134 kW (s179, wins) |
| 1 | Kia|Sportage|SX Hybrid | 169 kW (s41, shadowed) | 134 kW (s179, wins) |
| 1 | Kia|Sportage|GT-Line Hybrid | 169 kW (s41, shadowed) | 134 kW (s179, wins) |
| 1 | Honda|Civic|VTi | 113 kW (s43, shadowed) | 131 kW (s180, wins) |
| 1 | Land Rover|Range Rover Sport|Dynamic SE | 294 kW (s161, shadowed) | 250 kW (s180, wins) |
| 1 | Toyota|HiAce|Van SWB Diesel | 110 kW (s119, shadowed) | 150 kW (s181, wins) |
| 1 | Toyota|HiAce|Commuter GL | 110 kW (s119, shadowed) | 150 kW (s181, wins) |
| 1 | Toyota|HiAce|Commuter Deluxe | 110 kW (s119, shadowed) | 150 kW (s181, wins) |
| 1 | Lexus|RX|RX 350 | 203 kW (s44, shadowed) | 181 kW (s181, wins) |
| 1 | Lexus|RX|RX 350h | 179 kW (s44, shadowed) | 215 kW (s181, wins) |
| 1 | Land Rover|Defender|130 S | 221 kW (s126, shadowed) | 294 kW (s181, wins) |
| 1 | Tesla|Model Y|Long Range 7-Seat | 324 kW (s111, shadowed) | 258 kW (s182, wins) |
| 1 | Porsche|Cayenne|Turbo S | 471 kW (s46, shadowed) | 404 kW (s182, wins) |
| 1 | Lamborghini|Urus|S | 666 kW (s76, shadowed) | 478 kW (s182, wins) |
| 1 | Lamborghini|Urus|Performante | 666 kW (s76, shadowed) | 493 kW (s182, wins) |
| 1 | Volvo|XC90|Recharge T8 | 335 kW (s113, shadowed) | 288 kW (s183, wins) |
| 1 | Ford|Bronco|Raptor | 302 kW (s128, shadowed) | 235 kW (s183, wins) |
| 1 | Subaru|Outback|Wilderness | 194 kW (s119, shadowed) | 136 kW (s183, wins) |
| 1 | GWM|Haval H6|Ultra | 190 kW (s60, shadowed) | 150 kW (s184, wins) |
| 1 | MG|MG HS|PHEV Trophy | 162 kW (s115, shadowed) | 185 kW (s184, wins) |
| 1 | Porsche|Cayenne|S | 330 kW (s46, shadowed) | 250 kW (s185, wins) |
| 1 | Toyota|Supra|GTS 2.0 | 145 kW (s10, shadowed) | 190 kW (s185, wins) |
| 1 | Volkswagen|Golf|70TSI Life | 70 kW (s36, shadowed) | 81 kW (s186, wins) |
| 1 | Kia|Carnival|SLi | 148 kW (s33, shadowed) | 216 kW (s187, wins) |
| 1 | Kia|Carnival|Platinum | 148 kW (s33, shadowed) | 216 kW (s187, wins) |
| 1 | Kia|Sportage|GT-Line | 132 kW (s33, shadowed) | 176 kW (s187, wins) |
| 1 | Ford|Escape|ZH Ambiente | 165 kW (s5, shadowed) | 138 kW (s188, wins) |
| 1 | Ford|Escape|ZH Trend | 165 kW (s5, shadowed) | 138 kW (s188, wins) |
| 1 | Ford|Escape|ZH ST-Line | 165 kW (s5, shadowed) | 183 kW (s188, wins) |
| 1 | MG|ZS|Excite+ Turbo | 100 kW (s115, shadowed) | 115 kW (s189, wins) |
| 1 | MG|ZS|Essence Turbo | 100 kW (s115, shadowed) | 115 kW (s189, wins) |
| 1 | Cadillac|Escalade|Premium Luxury | 230 kW (s94, shadowed) | 313 kW (s190, wins) |
| 1 | GWM|Haval H6|Ultra Petrol | 110 kW (s111, shadowed) | 165 kW (s190, wins) |
| 1 | GWM|Haval H6|Ultra AWD | 145 kW (s111, shadowed) | 165 kW (s190, wins) |
| 1 | GWM|Haval H6|Hybrid | 179 kW (s111, shadowed) | 215 kW (s190, wins) |
| 1 | Jaguar|F-Pace|R-Dynamic SE | 221 kW (s67, shadowed) | 294 kW (s190, wins) |
| 1 | Jeep|Wrangler|392 | 376 kW (s113, shadowed) | 311 kW (s190, wins) |
| 1 | Mercedes-Benz|C-Class|C63 S AMG | 500 kW (s38, shadowed) | 375 kW (s191, wins) |
| 1 | Hyundai|Sonata|Hybrid | 135 kW (s41, shadowed) | 151 kW (s192, wins) |
| 1 | Kia|Sorento|GT-Line X | 169 kW (s33, shadowed) | 199 kW (s193, wins) |
| 1 | Lexus|RX|RX 450h | 183 kW (s44, shadowed) | 230 kW (s193, wins) |
| 1 | Maserati|Ghibli|GT | 350 kW (s77, shadowed) | 243 kW (s193, wins) |
| 1 | Maserati|Ghibli|Modena | 430 kW (s77, shadowed) | 301 kW (s193, wins) |
| 1 | Maserati|Levante|GT | 350 kW (s77, shadowed) | 243 kW (s193, wins) |
| 1 | Maserati|Levante|Modena | 430 kW (s77, shadowed) | 353 kW (s193, wins) |
| 1 | Maserati|Quattroporte|GT | 330 kW (s77, shadowed) | 243 kW (s193, wins) |
| 1 | Maserati|Quattroporte|Trofeo | 580 kW (s77, shadowed) | 441 kW (s193, wins) |
| 1 | Mini|Countryman|Cooper SE | 135 kW (s89, shadowed) | 165 kW (s194, wins) |
| 1 | DS|DS3|E-Tense | 115 kW (s104, shadowed) | 100 kW (s195, wins) |
| 1 | Dodge|Challenger|SRT Hellcat Redeye | 631 kW (s113, shadowed) | 526 kW (s195, wins) |
| 1 | Dodge|Charger|SRT Hellcat Redeye | 631 kW (s113, shadowed) | 526 kW (s195, wins) |
| 1 | Lamborghini|Huracan|Evo | 630 kW (s76, shadowed) | 470 kW (s197, wins) |
| 1 | Lamborghini|Huracan|Evo Spyder | 630 kW (s76, shadowed) | 470 kW (s197, wins) |
| 1 | Lamborghini|Huracan|Tecnica | 640 kW (s76, shadowed) | 470 kW (s197, wins) |
| 1 | Opel|Corsa|1.2 Turbo | 74 kW (s99, shadowed) | 96 kW (s198, wins) |
| 1 | Peugeot|208|e-208 | 136 kW (s74, shadowed) | 100 kW (s198, wins) |
| 1 | Peugeot|2008|e-2008 | 136 kW (s74, shadowed) | 100 kW (s198, wins) |
| 1 | Audi|Q2|2.0 TDI quattro | 140 kW (s47, shadowed) | 110 kW (s201, wins) |
| 1 | Dodge|Challenger|SRT Demon | 770 kW (s113, shadowed) | 617 kW (s202, wins) |
| 1 | Mazda|6|GT | 170 kW (s22, shadowed) | 138 kW (s203, wins) |
| 1 | Toyota|Camry|Ascent | 160 kW (s11, shadowed) | 133 kW (s204, wins) |
| 1 | Toyota|Camry|Ascent Sport | 160 kW (s11, shadowed) | 133 kW (s204, wins) |
| 1 | Toyota|Camry|SL | 160 kW (s11, shadowed) | 218 kW (s204, wins) |
| 1 | Toyota|Camry|Ascent Hybrid | 100 kW (s41, shadowed) | 158 kW (s204, wins) |
| 1 | Toyota|Camry|Ascent Sport Hybrid | 118 kW (s41, shadowed) | 158 kW (s204, wins) |
| 1 | Toyota|Camry|SX Hybrid | 118 kW (s41, shadowed) | 158 kW (s204, wins) |
| 1 | Toyota|Camry|SXL Hybrid | 118 kW (s41, shadowed) | 158 kW (s204, wins) |
| 1 | Toyota|Corolla|Ascent Sport | 90 kW (s10, shadowed) | 103 kW (s204, wins) |
| 1 | Toyota|RAV4|Edge | 163 kW (s13, shadowed) | 133 kW (s204, wins) |
| 1 | Volkswagen|Tiguan|Allspace 132TSI | 132 kW (s36, shadowed) | 110 kW (s204, wins) |
| 1 | BMW|5 Series|M550i | 340 kW (s37, shadowed) | 390 kW (s205, wins) |
| 1 | Kia|Picanto|GT-Line | 74 kW (s33, shadowed) | 62 kW (s206, wins) |
| 1 | Kia|Rio|GT-Line | 103 kW (s33, shadowed) | 74 kW (s206, wins) |
| 1 | Mazda|CX-5|Akera | 170 kW (s22, shadowed) | 140 kW (s206, wins) |
| 1 | Peugeot|5008|GT | 180 kW (s74, shadowed) | 121 kW (s206, wins) |
| 1 | SEAT|Ibiza|1.0 TSI | 70 kW (s99, shadowed) | 85 kW (s207, wins) |
| 1 | SsangYong|Rexton|EX | 178 kW (s90, shadowed) | 133 kW (s207, wins) |
| 1 | Volvo|XC60|T8 Twin Engine AWD | 335 kW (s113, shadowed) | 292 kW (s207, wins) |
| 1 | Audi|A7|3.0 TDI quattro | 180 kW (s50, shadowed) | 160 kW (s208, wins) |
| 1 | Audi|Q7|3.0 TFSI quattro | 200 kW (s45, shadowed) | 250 kW (s208, wins) |
| 1 | Fiat|Abarth 500|695 | 180 kW (s74, shadowed) | 132 kW (s208, wins) |
| 1 | Ford|Ranger|PX Mk2 XL | 118 kW (ford, shadowed) | 147 kW (s209, wins) |
| 1 | Ford|Ranger|PX Mk2 XLS | 118 kW (s5, shadowed) | 147 kW (s209, wins) |
| 1 | HSV|GTSR|VF II GTSR Maloo | 430 kW (s7, shadowed) | 560 kW (s209, wins) |
| 1 | Honda|Civic|VTi-L | 103 kW (s43, shadowed) | 127 kW (s209, wins) |
| 1 | Hyundai|Elantra|Sport | 130 kW (s32, shadowed) | 150 kW (s209, wins) |
| 1 | Lada|Niva|1.7i 4WD | 84 kW (s105, shadowed) | 59 kW (s209, wins) |
| 1 | Lamborghini|Aventador|LP740-4 S | 740 kW (s76, shadowed) | 544 kW (s209, wins) |
| 1 | Lamborghini|Aventador|SVJ | 770 kW (s76, shadowed) | 566 kW (s209, wins) |
| 1 | Lamborghini|Aventador|SVJ Roadster | 770 kW (s76, shadowed) | 566 kW (s209, wins) |
| 1 | Lamborghini|Aventador|Ultimae | 780 kW (s76, shadowed) | 578 kW (s209, wins) |
| 1 | Peugeot|3008|GT | 225 kW (s74, shadowed) | 133 kW (s210, wins) |
| 1 | Vauxhall|Astra|VXR | 141 kW (s98, shadowed) | 206 kW (s210, wins) |
| 1 | Ford|Mustang|Fastback 5.0 GT | 307 kW (ford, shadowed) | 339 kW (s211, wins) |
| 1 | Ford|Ranger|PX XLS | 110 kW (s5, shadowed) | 147 kW (s211, wins) |
| 1 | HSV|Clubsport|VF II Clubsport R8 | 340 kW (s7, shadowed) | 430 kW (s212, wins) |
| 1 | HSV|Maloo|VF II Maloo R8 | 325 kW (s7, shadowed) | 430 kW (s212, wins) |
| 1 | Toyota|Fortuner|Crusade | 150 kW (s16, shadowed) | 122 kW (s212, wins) |
| 1 | Toyota|HiLux|Rogue | 150 kW (s11, shadowed) | 126 kW (s212, wins) |
| 1 | Mazda|MX-5|MX-5 | 96 kW (s21, shadowed) | 118 kW (s212, wins) |
| 1 | Hyundai|Sonata|Active | 138 kW (s32, shadowed) | 119 kW (s213, wins) |
| 1 | Hyundai|Sonata|Elite | 177 kW (s32, shadowed) | 119 kW (s213, wins) |
| 1 | Volkswagen|Multivan|TDI340 | 84 kW (s36, shadowed) | 110 kW (s213, wins) |
| 1 | Mercedes-Benz|GLC|GLC220d | 143 kW (s38, shadowed) | 125 kW (s213, wins) |
| 1 | Honda|Accord|VTi-S | 137 kW (s43, shadowed) | 201 kW (s214, wins) |
| 1 | Lexus|RC|RC 300h | 151 kW (s44, shadowed) | 133 kW (s214, wins) |
| 1 | Audi|A4|2.0 TFSI | 140 kW (s45, shadowed) | 165 kW (s215, wins) |
| 1 | Volvo|XC90|T8 Twin Engine Excellence | 335 kW (s113, shadowed) | 300 kW (s216, wins) |
| 1 | Jeep|Renegade|Limited | 130 kW (s64, shadowed) | 103 kW (s216, wins) |
| 1 | Jeep|Renegade|Sport | 103 kW (s64, shadowed) | 84 kW (s216, wins) |
| 1 | Jaguar|XE|S | 250 kW (s67, shadowed) | 280 kW (s217, wins) |
| 1 | Chevrolet|Suburban|Premier | 275 kW (s82, shadowed) | 313 kW (s218, wins) |
| 1 | Chevrolet|Tahoe|Premier | 275 kW (s82, shadowed) | 313 kW (s218, wins) |
| 1 | Fiat|500X|Cross | 184 kW (s74, shadowed) | 103 kW (s218, wins) |
| 1 | Fiat|500X|Lounge | 140 kW (s74, shadowed) | 103 kW (s218, wins) |
| 1 | Fiat|500X|Pop | 140 kW (s74, shadowed) | 84 kW (s218, wins) |
| 1 | Fiat|Tipo|Cross | 120 kW (s74, shadowed) | 88 kW (s218, wins) |
| 1 | Fiat|Tipo|Easy | 120 kW (s74, shadowed) | 88 kW (s218, wins) |
| 1 | Fiat|Tipo|Lounge | 120 kW (s74, shadowed) | 88 kW (s218, wins) |
| 1 | Fiat|Tipo|Sport | 150 kW (s74, shadowed) | 110 kW (s218, wins) |
| 1 | Ferrari|488 GTB|GTB | 660 kW (s76, shadowed) | 492 kW (s218, wins) |
| 1 | Ferrari|488 GTB|Pista | 720 kW (s76, shadowed) | 530 kW (s218, wins) |
| 1 | Ferrari|488 GTB|Spider | 660 kW (s76, shadowed) | 492 kW (s218, wins) |
| 1 | GWM|Haval H6|Lux | 110 kW (s60, shadowed) | 145 kW (s219, wins) |
| 1 | GWM|Tank 300|Ultra | 220 kW (s60, shadowed) | 167 kW (s225, wins) |
