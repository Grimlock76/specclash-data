const BODY_TYPES = ['All', 'Sedan', 'Wagon', 'Ute', 'SUV', 'Coupe', 'Hatch', 'Van']

function getBodyType(model, trim = '') {
  const m = model.toLowerCase()
  const t = trim.toLowerCase()

  // Trim-level checks first (specific trims within mixed models)
  if (/sportwagon|wagon|\bshooting brake\b|\balltrack\b|\bavant\b|\badventra\b/.test(t)) return 'Wagon'
  if (/sportback/.test(t)) return 'Hatch'
  if (/\bute\b/.test(t) || /\butility\b/.test(t) || /kingswood ute/.test(t)) return 'Ute'
  if (/sandman|one tonner/.test(t)) return 'Van'
  if (/\bseca\b/.test(t)) return 'Hatch'
  if (/commuter/.test(t)) return 'Van'

  // Model-level checks
  if (/\bute\b/.test(m)) return 'Ute'
  if (/hilux surf/.test(m)) return 'SUV'
  if (/ranger|f-150|hilux/.test(m)) return 'Ute'
  if (/territory|everest|escape|puma|landcruiser|prado|rav4|kluger|c-hr|fj cruiser|fortuner|yaris cross|corolla cross/.test(m)) return 'SUV'
  if (/monaro|mustang|supra|celica|mr2|soarer|paseo/.test(m) || m === '86' || m === 'gr86') return 'Coupe'
  if (/torana|focus|yaris|echo|starlet|gr corolla|prius c/.test(m)) return 'Hatch'
  if (/hiace|tarago|granvia/.test(m)) return 'Van'
  if (/\bbz4x\b|\bcrown\b/.test(m)) return 'SUV'
  if (/\bprius v\b/.test(m)) return 'Wagon'

  // ── Early disambiguation (must precede generic letter-number rules below) ──
  if (/\bs5 ev\b/.test(m)) return 'SUV'   // MG S5 EV — precede Audi \bs5\b → Coupe

  // ── Mazda ──
  if (/rx-7|rx-8|mx-5|mx-6/.test(m)) return 'Coupe'
  if (/cx-3|cx-5|cx-8|cx-9|cx-60|cx-90|mx-30/.test(m)) return 'SUV'
  if (/\bbt-50\b/.test(m)) return 'Ute'
  if (/\b323\b/.test(m)) return 'Hatch'
  if (m === '2') return 'Hatch'
  if (m === '3') return 'Hatch'

  // ── Nissan ──
  if (/\b300zx\b|\b370z\b|\b400z\b|\bsilvia\b|\b180sx\b|\b200sx\b|\b240z\b|\b280zx\b/.test(m)) return 'Coupe'
  if (/\bgt-r\b/.test(m)) return 'Coupe'
  if (/patrol|x-trail|pathfinder|qashqai|juke|dualis|\bkicks\b|\bariya\b/.test(m)) return 'SUV'
  if (/navara/.test(m)) return 'Ute'
  if (/\bmicra\b|\bpulsar\b|\bleaf\b/.test(m)) return 'Hatch'
  if (/\bstagea\b/.test(m)) return 'Wagon'

  // ── Hyundai ──
  if (/\bveloster\b|\btiburon\b|\bgenesis coupe\b/.test(m) || m === 'coupe') return 'Coupe'
  if (/\btucson\b|\bsanta fe\b|\bix35\b|\bkona\b|\bioniq 5\b|\bpalisade\b|\bterracan\b/.test(m)) return 'SUV'
  if (/\bstaria\b/.test(m)) return 'Van'
  if (/\bioniq 6\b|\bsonata\b|\belantra\b|\bi45\b|\bi40\b/.test(m)) return 'Sedan'
  if (/\bexcel\b|\bgetz\b|\baccent\b|\bi20\b|\bi30\b|\bioniq\b/.test(m)) return 'Hatch'

  // ── Kia ──
  if (/\bstinger\b/.test(m)) return 'Sedan'
  if (/\bsportage\b|\bsorento\b|\bseltos\b|\btelluride\b|\bniro\b|\bev3\b|\bev5\b|\bev6\b|\bev9\b/.test(m)) return 'SUV'
  if (/\bcarnival\b/.test(m)) return 'Van'
  if (/\brio\b|\bcerato\b|\bpicanto\b|\bsoul\b/.test(m)) return 'Hatch'
  if (/\boptima\b|\bcadenza\b/.test(m)) return 'Sedan'

  // ── BMW ──
  if (/\bx2\b|\bx4\b|\bx6\b|\bx7\b|\bix\b|\bix3\b|\bix1\b|\bx1\b|\bx3\b|\bx5\b/.test(m)) return 'SUV'
  if (/\b2 series active tourer\b|\b2 series gran tourer\b/.test(m)) return 'Hatch'
  if (/\bz3\b|\bz4\b|\b2 series\b|\b4 series\b|\b6 series\b|\b8 series\b|\bm2\b|\bm4\b|\bm8\b|\bi8\b/.test(m)) return 'Coupe'
  if (/\b1 series\b|\bi3\b/.test(m)) return 'Hatch'
  if (/\b3 series\b|\b5 series\b|\b6 series gran coupe\b|\b7 series\b|\bi4\b|\bi5\b|\bi7\b/.test(m)) return 'Sedan'

  // ── Volkswagen ──
  if (/\bscirocco\b/.test(m)) return 'Coupe'
  if (/\btiguan\b|\btouareg\b|\bt-roc\b|\bid\.4\b|\bid\.5\b/.test(m)) return 'SUV'
  if (/\bamarok\b/.test(m)) return 'Ute'
  if (/\bmultivan\b|\btransporter\b|\bcaravelle\b/.test(m)) return 'Van'
  if (/\bgolf wagon\b/.test(m)) return 'Wagon'
  if (/\bjetta\b|\bpassat\b|\barteon\b|\bid\.7\b/.test(m)) return 'Sedan'
  if (/\bgolf\b|\bpolo\b|\bbeetle\b|\bid\.3\b/.test(m)) return 'Hatch'

  // ── Mitsubishi ──
  if (/\bstarion\b|\b3000gt\b|\bgto\b|\beclipse spyder\b|\bfto\b/.test(m)) return 'Coupe'
  if (/\beclipse\b/.test(m)) return 'Coupe'
  if (/\bpajero\b|\boutlander\b|\basx\b|\beclipse cross\b|\bchallenger\b|\brvr\b|\bpajero sport\b/.test(m)) return 'SUV'
  if (/\btriton\b/.test(m)) return 'Ute'
  if (/\bcolt\b|\bmirage\b|\bspace star\b|\bcarisma\b|\bi-miev\b|\bsportback\b/.test(m)) return 'Hatch'
  if (/\bl300\b|\bexpress\b|\bdelica\b|\bgrandis\b/.test(m)) return 'Van'

  // ── Subaru ──
  if (/\bbrz\b/.test(m)) return 'Coupe'
  if (/\btribeca\b|\bforester\b|\bxv\b|\bcrosstrek\b|\boutback\b|\bsolterra\b/.test(m)) return 'SUV'
  if (/\blevorg\b/.test(m)) return 'Wagon'
  if (/\bwrx\b|\bliberty\b|\bimpreza\b/.test(m)) return 'Sedan'

  // ── Honda ──
  if (/\bnsx\b|\bs2000\b|\bprelude\b|\bcr-z\b/.test(m)) return 'Coupe'
  if (/\bcr-v\b|\bhr-v\b|\bzr-v\b|\be:ny1\b|\bmdx\b/.test(m)) return 'SUV'
  if (/\bodyssey\b/.test(m)) return 'Van'
  if (/\bcivic\b|\bjazz\b|\binsight\b/.test(m)) return 'Hatch'
  if (/\baccord\b|\blegend\b|\bintegra\b/.test(m)) return 'Sedan'

  // ── Lexus ──
  if (/\blc\b|\brc\b/.test(m)) return 'Coupe'
  if (/\bux\b|\bnx\b|\brx\b|\bgx\b|\blx\b|\brz\b/.test(m)) return 'SUV'
  if (/\bct\b/.test(m)) return 'Hatch'
  if (/\bis\b|\bes\b|\bgs\b|\bls\b/.test(m)) return 'Sedan'

  // ── Audi ──
  if (/\bcabriolet\b|\bquattro\b|\bs2\b|\btt\b|\br8\b|\ba5\b|\bs5\b|\brs5\b/.test(m)) return 'Coupe'
  if (/e-tron gt/.test(m)) return 'Sedan'
  if (/allroad|\bavant\b|\brs4\b|\brs6\b/.test(m)) return 'Wagon'
  if (/\bq2\b|\bq3\b|\bq4\b|\bq5\b|\bq6\b|\bq7\b|\bq8\b|\be-tron\b|\bsq5\b|\bsq7\b|\bsq8\b|\brs q3\b|\brs q8\b/.test(m)) return 'SUV'
  if (/\ba1\b|\ba2\b|\ba3\b|\bs1\b|\bs3\b|\brs3\b/.test(m)) return 'Hatch'
  if (/\ba4\b|\ba6\b|\ba7\b|\ba8\b|\b80\b|\b90\b|\b100\b|\bv8\b|\brs2\b|\bs4\b|\bs6\b|\bs7\b|\brs7\b|\bs8\b/.test(m)) return 'Sedan'

  // ── Porsche ──
  if (/\b911\b|\b718\b|\bboxster\b|\bcayman\b/.test(m)) return 'Coupe'
  if (/\bcayenne\b|\bmacan\b/.test(m)) return 'SUV'
  if (/\bpanamera\b|\btaycan\b/.test(m)) return 'Sedan'

  // ── Suzuki ──
  if (/\bjimny\b|\bvitara\b|\bs-cross\b|\bgrand vitara\b/.test(m)) return 'SUV'
  if (/\bswift\b|\bbaleno\b|\bignis\b/.test(m)) return 'Hatch'

  // ── Land Rover ──
  if (/\bdefender\b|\bdiscovery\b|\brange rover\b|\bfreelander\b/.test(m)) return 'SUV'

  // ── Volvo ──
  if (/\bxc40\b|\bxc60\b|\bxc90\b|\bc40\b|\bex30\b|\bex90\b/.test(m)) return 'SUV'
  if (/\bv40\b|\bv60\b|\bv90\b/.test(m)) return 'Wagon'
  if (/\bc30\b/.test(m)) return 'Hatch'
  if (/\bs40\b|\bs60\b|\bs90\b/.test(m)) return 'Sedan'

  // ── Tesla ──
  if (/\bmodel y\b|\bmodel x\b|\bcybertruck\b/.test(m)) return 'SUV'
  if (/\bmodel 3\b|\bmodel s\b/.test(m)) return 'Sedan'

  // ── Isuzu ──
  if (/\bd-max\b/.test(m)) return 'Ute'
  if (/\bmu-x\b/.test(m)) return 'SUV'

  // ── MG ──
  if (/\bu9\b/.test(m)) return 'Ute'
  if (/\bzs ev\b|\bzs\b|\bmg hs\b|\bqs\b/.test(m)) return 'SUV'
  if (/\bmg3\b|\bmg4\b|\bmg6\b/.test(m)) return 'Hatch'
  if (/\bcyberster\b/.test(m)) return 'Coupe'

  // ── GWM / Haval ──
  if (/\bcannon\b/.test(m)) return 'Ute'
  if (/\bhaval\b|\btank\b/.test(m)) return 'SUV'
  if (/\bute\b/.test(m)) return 'Ute'

  // ── Mahindra ──
  if (/\bpik-up\b/.test(m)) return 'Ute'
  if (/\bscorpio\b|xuv|\bthar\b/.test(m)) return 'SUV'

  // ── BYD ──
  if (/\batto 3\b|\bsealion\b/.test(m)) return 'SUV'
  if (/\bseal\b/.test(m)) return 'Sedan'
  if (/\bdolphin\b/.test(m)) return 'Hatch'
  if (/\bshark\b/.test(m)) return 'Ute'

  // ── Genesis ──
  if (/\bgv70\b|\bgv80\b/.test(m)) return 'SUV'
  if (/\bg70\b|\bg80\b|\bg90\b/.test(m)) return 'Sedan'

  // ── Mercedes-Benz ──
  if (/\bg-class\b|\bglc\b|\bgle\b|\bgls\b|\bgla\b|\bglb\b|\beqa\b|\beqb\b|\beqc\b|\beqe suv\b|\beqs suv\b/.test(m)) return 'SUV'
  if (/\bamg gt\b|\bcla\b|\bslk\b|\bslc\b|\bsl\b/.test(m)) return 'Coupe'
  if (/\ba-class\b|\bb-class\b/.test(m)) return 'Hatch'
  if (/\bc-class\b|\be-class\b|\bs-class\b|\bcls\b|\beqe\b|\beqs\b/.test(m)) return 'Sedan'

  // ── Jeep ──
  if (/\bgladiator\b/.test(m)) return 'Ute'
  if (/\bwrangler\b|\bgrand cherokee\b|\bcherokee\b|\bcompass\b|\brenegade\b|\bpatriot\b|\bavenger\b/.test(m)) return 'SUV'

  // ── RAM ──
  if (/\b1500\b|\b2500\b/.test(m)) return 'Ute'

  // ── Alfa Romeo ──
  if (/\bgiulia\b/.test(m)) return 'Sedan'
  if (/\bstelvio\b|\btonale\b/.test(m)) return 'SUV'

  // ── Jaguar ──
  if (/\bf-type\b/.test(m)) return 'Coupe'
  if (/\bf-pace\b|\be-pace\b|\bi-pace\b/.test(m)) return 'SUV'
  if (/\bxe\b|\bxf\b|\bxj\b/.test(m)) return 'Sedan'

  // ── CUPRA ──
  if (/\bformentor\b/.test(m)) return 'SUV'
  if (/\bborn\b|\bleon\b/.test(m)) return 'Hatch'

  // ── Polestar ──
  if (/\bpolestar 2\b/.test(m)) return 'Sedan'
  if (/\bpolestar 3\b|\bpolestar 4\b/.test(m)) return 'SUV'

  // ── Skoda ──
  if (/\benyaq\b|\bkaroq\b|\bkodiaq\b/.test(m)) return 'SUV'
  if (/\bsuperb\b/.test(m)) return 'Sedan'
  if (/\boctavia\b|\bfabia\b/.test(m)) return 'Hatch'

  // ── LDV ──
  if (/\bt60\b/.test(m)) return 'Ute'
  if (/\bmifa\b/.test(m)) return 'Van'

  // ── Chery ──
  if (/\bomoda\b|\btiggo\b/.test(m)) return 'SUV'

  // ── Renault ──
  if (/\bkoleos\b|\barkana\b|\bcaptur\b|\bscenic\b|\baustral\b/.test(m)) return 'SUV'
  if (/\btrafic\b|\bkangoo\b|\bmaster\b/.test(m)) return 'Van'
  if (/\bclio\b|\bmegane\b/.test(m)) return 'Hatch'

  // ── Dodge ──
  if (/\bchallenger\b|\bviper\b/.test(m)) return 'Coupe'
  if (/\bdurango\b|\bjourney\b/.test(m)) return 'SUV'
  if (/\bcharger\b/.test(m)) return 'Sedan'

  // ── Chevrolet ──
  if (/\bcorvette\b|\bcamaro\b/.test(m)) return 'Coupe'
  if (/\bcolorado\b|\bsilverado\b/.test(m)) return 'Ute'
  if (/\btahoe\b|\bsuburban\b|\btraverse\b|\bequinox\b|\bblazertahoe\b/.test(m)) return 'SUV'

  // ── Datsun ──
  if (/fairlady/.test(m)) return 'Coupe'
  if (/\b240z\b|\b260z\b|\b280z\b|\b280zx\b/.test(m)) return 'Coupe'
  if (/\b510\b/.test(m) && /wagon/.test(t)) return 'Wagon'
  if (/\b510\b/.test(m)) return 'Sedan'
  if (/\b1200\b/.test(m) && /coupe/.test(t)) return 'Coupe'
  if (/\b1200\b/.test(m) && /van/.test(t)) return 'Van'
  if (/\b1200\b/.test(m)) return 'Sedan'
  if (/\b120y\b|\b180b\b|\b200b\b|\bstanza\b|\b710 violet\b/.test(m)) return 'Sedan'
  if (/\bbluebird 310\b|\b410 bluebird\b|\b910 bluebird\b/.test(m)) return 'Sedan'
  if (/\bsilvia csp311\b|\bsilvia\b/.test(m)) return 'Coupe'
  if (/\bcedric\b|\blaurel\b/.test(m)) return 'Sedan'
  if (/\bskyline\b/.test(m)) return 'Sedan'
  if (/\bcherry\b|\bf10\b/.test(m)) return 'Hatch'
  if (/\bsunny\b/.test(m) && /wagon/.test(t)) return 'Wagon'
  if (/\bsunny\b/.test(m)) return 'Sedan'
  if (/\b521 ute\b|\b620 ute\b|\b720 ute\b/.test(m)) return 'Ute'
  if (/\bpatrol\b/.test(m)) return 'SUV'
  if (/\bgo\+\b|\bgo plus\b/.test(m)) return 'Hatch'
  if (/\bgo\b|\bredi-go\b|\bmi-do\b/.test(m)) return 'Hatch'
  if (/\bon-do\b/.test(m)) return 'Sedan'

  // ── TVR ──
  if (/\bgrantura\b|\bm series\b|\btasmin\b|\bs series\b|\bgriffith\b|\bchimaera\b|\bcerbera\b|\btuscan\b|\bsagaris\b|\bt350\b/.test(m)) return 'Coupe'

  // ── Bristol ──
  if (/\bfighter\b/.test(m)) return 'Coupe'

  // ── Jensen ──
  if (/\bjensen-healey\b/.test(m)) return 'Coupe'
  if (/\binterceptor\b|\bff\b/.test(m)) return 'Coupe' // Jensen Interceptor/FF are GTs (also catches Ferrari FF)

  // ── AC ──
  if (/\bace\b|\bcobra\b|\b428\b|\b3000me\b/.test(m)) return 'Coupe'

  // ── Dacia ──
  if (/\bduster\b/.test(m)) return 'SUV'
  if (/\bjogger\b/.test(m)) return 'Wagon'
  if (/\bsandero\b|\bspring\b/.test(m)) return 'Hatch'

  // ── Smart ──
  if (/\broadster\b/.test(m)) return 'Coupe'
  if (/\bfortwo\b/.test(m)) return 'Hatch'

  // ── Alpina ──
  if (/\bxb7\b/.test(m)) return 'SUV'

  // ── Opel ──
  if (/\bmokka\b/.test(m)) return 'SUV'
  if (/\bmanta\b|\bgt\b/.test(m)) return 'Coupe'
  if (/\bcorsa\b|\bastra\b|\bkadett\b/.test(m)) return 'Hatch'
  if (/\bomega\b|\bvectra\b|\bascona\b|\brekord\b|\bsenator\b|\binsignia\b/.test(m)) return 'Sedan'

  // ── SEAT ──
  if (/\bateca\b|\btarraco\b/.test(m)) return 'SUV'
  if (/\barona\b/.test(m)) return 'SUV'
  if (/\bibiza\b|\btoledo\b/.test(m)) return 'Hatch'
  if (/\bleon\b/.test(m)) return 'Hatch'
  if (/\balhambra\b/.test(m)) return 'Van'

  // ── Bugatti / Pagani / Koenigsegg ──
  if (/bugatti|pagani|koenigsegg|veyron|chiron|tourbillon|zonda|huayra|utopia|cc8s|ccr|ccx|agera|jesko|gemera|regera/.test(m)) return 'Coupe'

  // ── Cadillac ──
  if (/\bescalade\b|\bsrx\b|\bxt5\b/.test(m)) return 'SUV'
  if (/\beldorado\b/.test(m)) return 'Coupe'

  // ── Buick ──
  if (/\benclave\b|\benvision\b|\bencore\b/.test(m)) return 'SUV'
  if (/\briviera\b/.test(m)) return 'Coupe'

  // ── Mercury ──
  if (/\bcougar\b|\bcapri\b/.test(m)) return 'Coupe'
  if (/\bvillager\b/.test(m)) return 'Van'

  // ── Plymouth ──
  if (/\bbarracuda\b|\bsuperbird\b|\bprowler\b/.test(m)) return 'Coupe'
  if (/\bhorizon\b/.test(m)) return 'Hatch'

  // ── Studebaker ──
  if (/\bavanti\b|\bhawk\b/.test(m)) return 'Coupe'

  // ── Nash ──
  if (/\bmetropolitan\b|\bnash-healey\b/.test(m)) return 'Coupe'

  // ── Vauxhall ──
  if (/\bmokka\b/.test(m)) return 'SUV'
  if (/\bastra\b|\bcorsa\b|\bviva\b/.test(m)) return 'Hatch'
  if (/\bmonaro vxr\b/.test(m)) return 'Coupe'

  // ── Morgan ──
  if (/morgan|4\/4|plus 4|plus 8|aero 8|plus six|3 wheeler|super 3/.test(m)) return 'Coupe'

  // ── De Tomaso ──
  if (/\bpantera\b|\bmangusta\b|\bvallelunga\b|\bguara\b/.test(m)) return 'Coupe'

  // ── Alpine ──
  if (/\ba106\b|\ba108\b|\ba110\b|\ba310\b|\bgta\b/.test(m)) return 'Coupe'

  // ── Sunbeam ──
  if (/\balpine\b|\btiger\b/.test(m)) return 'Coupe'
  if (/\brapier\b/.test(m)) return 'Sedan'
  if (/\blotus\b/.test(m)) return 'Hatch'

  // ── Hillman ──
  if (/\bimp\b/.test(m)) return 'Hatch'
  if (/\bminx\b|\bhunter\b|\bavenger\b/.test(m)) return 'Sedan'

  // ── Morris ──
  if (/\bminor\b|\boxford\b|\bmarina\b|\bital\b/.test(m)) return 'Sedan'

  // ── Austin ──
  if (/\bmetro\b|\ballegro\b|\bmaxi\b|\bmaestro\b/.test(m)) return 'Hatch'
  if (/\ba30\b|\ba35\b|\ba40\b|\b1100\b|\b1300\b|\bmontego\b|\bambassador\b/.test(m)) return 'Sedan'

  // ── MG (classic) ──
  if (/\bmga\b|\bmgb\b|\bmgc\b|\bmidget\b/.test(m)) return 'Coupe'
  if (/\bzr\b|\bmetro\b/.test(m)) return 'Hatch'
  if (/\bzt\b/.test(m)) return 'Sedan'

  // ── Abarth ──
  if (/\b124 spider\b/.test(m)) return 'Coupe'
  if (/\b500\b|\b595\b|\b695\b|\bpunto\b/.test(m)) return 'Hatch'

  // ── DS ──
  if (/\bds7\b/.test(m)) return 'SUV'
  if (/\bds9\b/.test(m)) return 'Sedan'
  if (/\bds3\b|\bds4\b|\bds5\b/.test(m)) return 'Hatch'

  // ── Wiesmann ──
  if (/\bmf3\b|\bgt mf4\b|\bmf5\b|\bgecko\b/.test(m)) return 'Coupe'

  // ── Simca ──
  if (/\bsimca 1200 s\b/.test(m)) return 'Coupe'
  if (/\brallye\b/.test(m) || /rallye/.test(t)) return 'Hatch'
  if (/\bhorizon\b/.test(m)) return 'Hatch'
  if (/\bsimca 1100\b/.test(m)) return 'Hatch'
  if (/\bsimca 1000\b|\baronde\b/.test(m)) return 'Sedan'

  // ── Lada ──
  if (/\bniva\b/.test(m)) return 'SUV'
  if (/\briva\b/.test(m) && /estate/.test(t)) return 'Wagon'
  if (/\bsamara\b/.test(m)) return 'Hatch'

  // ── NSU ──
  if (/\bwankel spider\b|\bro 80\b/.test(m)) return 'Sedan'
  if (/\b1000 tts\b|\b1000 tt\b/.test(m)) return 'Sedan'

  // ── Caterham ──
  if (/\bseven\b/.test(m)) return 'Coupe'

  // ── Autobianchi ──
  if (/\ba112\b|\bprimula\b|\ba111\b/.test(m)) return 'Hatch'
  if (/\bbianchina\b/.test(m)) return 'Sedan'

  // ── DAF ──
  if (/\bvariomatic\b|\b33\b|\b44\b|\b55\b|\b66\b/.test(m)) return 'Sedan'

  // ── Matra ──
  if (/\brancho\b/.test(m)) return 'SUV'
  if (/\bbagheera\b|\bmurena\b|\bm530\b/.test(m)) return 'Coupe'

  // ── Riley ──
  if (/\belf\b/.test(m)) return 'Sedan'
  if (/\bkestrel\b/.test(m)) return 'Sedan'

  // ── Wolseley ──
  if (/\bhornet\b/.test(m)) return 'Sedan'

  // ── Singer ──
  if (/\bgaze(lle)?\b/.test(m) && /estate/.test(t)) return 'Wagon'
  if (/\bgaze(lle)?\b|\bvogue\b|\bchamois\b/.test(m)) return 'Sedan'
  if (/\b9 roadster\b|\bhunter\b/.test(m)) return 'Sedan'

  // ── Standard ──
  if (/estate/.test(t)) return 'Wagon'
  if (/\bvanguard\b|\bensign\b/.test(m)) return 'Sedan'

  // ── Reliant ──
  if (/\bscimitar gte\b/.test(m)) return 'Wagon'
  if (/\bscimitar ss1\b/.test(m)) return 'Coupe'
  if (/\bkitten\b/.test(m) && /estate/.test(t)) return 'Wagon'
  if (/\brobin\b|\brialto\b|\bkitten\b/.test(m)) return 'Sedan'

  // ── Panhard ──
  if (/\b24 ct\b/.test(m)) return 'Coupe'

  // ── Innocenti ──
  if (/\bturbo de tomaso\b/.test(t)) return 'Hatch'
  if (/\bregent\b/.test(m)) return 'Sedan'
  if (/\bmini\b/.test(m) || /\b1100\b/.test(m) || /\b950\b/.test(m)) return 'Hatch'

  // ── Ginetta ──
  if (/\bg4\b|\bg15\b|\bg33\b|\bg40\b|\bg55\b|\bg60\b/.test(m)) return 'Coupe'

  // ── Marcos ──
  if (/\bmantis\b|\bmantara\b|\bgts\b|\blm\b|\b1800 gt\b|\b3000 gt\b|\bxylon\b/.test(m)) return 'Coupe'

  // ── Facel Vega ──
  if (/\bexcellence\b/.test(m)) return 'Sedan'
  if (/\bfvs\b|\bhk500\b|\bfacel ii\b|\bfacellia\b|\bfacel 6\b/.test(m)) return 'Coupe'

  // ── Lancia ──
  // Disambiguate early alphabet models (same name as later models)
  if (/beta \(1909\)/.test(m)) return 'Sedan'
  if (/gamma \(1910\)/.test(m)) return 'Sedan'
  if (/delta \(1911\)/.test(m)) return 'Sedan'
  if (/kappa \(1919\)/.test(m)) return 'Sedan'
  if (/zeta \(1912\)/.test(m)) return 'Sedan'
  // Pre-war: non-conflicting early models
  if (/\balpha\b/.test(m)) return 'Sedan'
  if (/\bdikappa\b/.test(m)) return 'Sedan'
  if (/\btrikappa\b/.test(m)) return 'Sedan'
  if (/\bepsilon\b/.test(m)) return 'Sedan'
  if (/\beta\b/.test(m)) return 'Sedan'
  if (/\btheta\b/.test(m)) return 'Sedan'
  // Pre-war classics: cabriolet trims → Coupe
  if (/\b(lambda|dilambda|astura|augusta|artena)\b/.test(m) && /cabriolet/.test(t)) return 'Coupe'
  if (/\bastura\b/.test(m) && /sport/.test(t)) return 'Coupe'
  if (/\blambda\b/.test(m)) return 'Sedan'
  if (/\bdilambda\b/.test(m)) return 'Sedan'
  if (/\bartena\b/.test(m)) return 'Sedan'
  if (/\bastura\b/.test(m)) return 'Sedan'
  if (/\baugusta\b/.test(m)) return 'Sedan'
  // Modern models (check longer names before shorter)
  if (/\bflavia ii\b/.test(m)) return 'Coupe'
  if (/\bnew ypsilon\b/.test(m)) return 'Hatch'
  if (/\baprilia\b/.test(m)) return 'Sedan'
  if (/\bardea\b/.test(m)) return 'Sedan'
  if (/\baurelia\b/.test(m) && /berlina/.test(t)) return 'Sedan'
  if (/\baurelia\b/.test(m)) return 'Coupe'
  if (/\bappia\b/.test(m) && /berlina/.test(t)) return 'Sedan'
  if (/\bappia\b/.test(m)) return 'Coupe'
  if (/\bflaminia\b/.test(m) && /berlina/.test(t)) return 'Sedan'
  if (/\bflaminia\b/.test(m)) return 'Coupe'
  if (/\bflavia\b/.test(m) && /berlina/.test(t)) return 'Sedan'
  if (/\bflavia\b/.test(m)) return 'Coupe'
  if (/\bfulvia\b/.test(m) && /berlina/.test(t)) return 'Sedan'
  if (/\bfulvia\b/.test(m)) return 'Coupe'
  if (/\bbeta montecarlo\b/.test(m)) return 'Coupe'
  if (/\bstratos\b/.test(m)) return 'Coupe'
  if (/\brally 037\b/.test(m)) return 'Coupe'
  if (/\bgamma\b/.test(m) && /berlina/.test(t)) return 'Sedan'
  if (/\bgamma\b/.test(m)) return 'Coupe'
  if (/\btrevi\b/.test(m)) return 'Sedan'
  if (/\bprisma\b/.test(m)) return 'Sedan'
  if (/\bthema\b/.test(m) && /\bsw\b/.test(t)) return 'Wagon'
  if (/\bthema\b/.test(m)) return 'Sedan'
  if (/\by10\b/.test(m)) return 'Hatch'
  if (/\bdelta\b/.test(m)) return 'Hatch'
  if (/\bdedra\b/.test(m) && /\bsw\b/.test(t)) return 'Wagon'
  if (/\bdedra\b/.test(m)) return 'Sedan'
  if (/\bkappa\b/.test(m) && /\bsw\b/.test(t)) return 'Wagon'
  if (/\bkappa\b/.test(m) && /coupe/.test(t)) return 'Coupe'
  if (/\bkappa\b/.test(m)) return 'Sedan'
  if (/\bzeta\b/.test(m)) return 'Van'
  if (/\bypsilon\b/.test(m)) return 'Hatch'
  if (/\blybra\b/.test(m) && /\bsw\b/.test(t)) return 'Wagon'
  if (/\blybra\b/.test(m)) return 'Sedan'
  if (/\bthesis\b/.test(m)) return 'Sedan'
  if (/\bphedra\b/.test(m)) return 'Van'
  if (/\bmusa\b/.test(m)) return 'Van'
  if (/\bvoyager\b/.test(m)) return 'Van'
  if (/\bbeta\b/.test(m) && /spider/.test(t)) return 'Coupe'
  if (/\bbeta\b/.test(m)) return 'Coupe'

  // ── Recent imports (supplements 233–237) ──
  if (/\btavascan\b|\bterramar\b/.test(m)) return 'SUV'          // Cupra
  if (/\bg6\b|\bg9\b/.test(m)) return 'SUV'                       // Xpeng
  if (/\bx9\b/.test(m)) return 'Van'                             // Xpeng X9 (MPV)
  if (/\bs07\b|\be07\b/.test(m)) return 'SUV'                     // Deepal
  if (/\bbe11\b/.test(m)) return 'SUV'                           // Skywell
  if (/\bu5\b|\bu6\b/.test(m)) return 'SUV'                       // Aiways
  if (/\bquartermaster\b/.test(m)) return 'Ute'                  // Ineos
  if (/\bgrenadier\b/.test(m)) return 'SUV'                      // Ineos
  if (/\bt9\b/.test(m)) return 'Ute'                             // JAC
  if (/\btunland\b/.test(m)) return 'Ute'                        // Foton
  if (/\bc5 aircross\b/.test(m)) return 'SUV'                     // Citroen
  if (/\bberlingo\b/.test(m)) return 'Van'                       // Citroen
  if (/\bc3\b|\bc4\b|\be-c4\b/.test(m)) return 'Hatch'            // Citroen
  if (/\bjumbuck\b/.test(m)) return 'Ute'                        // Proton
  if (/\bexora\b/.test(m)) return 'Van'                          // Proton
  if (/\bsatria\b|\bgen-2\b|\bsuprima s\b/.test(m)) return 'Hatch' // Proton
  if (/\be-hs9\b|\bhs5\b/.test(m)) return 'SUV'                   // Hongqi
  if (/\bxenon\b/.test(m)) return 'Ute'                          // Tata
  if (/\bdashing\b|\bt2\b/.test(m)) return 'SUV'                  // Jetour
  if (/\bdreamer\b/.test(m)) return 'Van'                        // Voyah
  if (/\bfree\b|\bcourage\b/.test(m)) return 'SUV'               // Voyah
  if (m === '11') return 'SUV'                                   // Avatr 11 (12 = sedan)
  if (/\bseres 3\b/.test(m)) return 'SUV'                         // Seres
  if (/\bim6\b/.test(m)) return 'SUV'                            // IM Motors
  if (/\btiggo 9\b/.test(m)) return 'SUV'                         // Chery (also caught by tiggo rule)

  // ── 2026-07-03 all-Sedan audit corrections (881 models reviewed) ──
  // SUVs / 4x4s
  if (/\brdx\b|\bqx\d+|\blyriq\b|\bcs55\b|\bbravada\b|\baztek\b|\bbronco\b|\bcullinan\b|\b9-7x\b/.test(m)) return 'SUV'
  if (/\btang\b|\bseal u\b|\batto 2\b|\bcoolray\b|\bmonjaro\b|\bgalaxy l7\b|\bgv60\b|\belroq\b|\bkamiq\b/.test(m)) return 'SUV'
  if (/\btrailblazer\b|\btrax\b|\bblazer\b|\bjimmy\b|\benvoy\b|\bterrain\b|\bacadia\b|\byukon\b|\btyphoon\b/.test(m)) return 'SUV'
  if (/\bnavigator\b|\baviator\b|\bnautilus\b|\bmkx\b|\bmkc\b|\bvue\b|\boutlook\b|\bocean\b|\bgravity\b/.test(m)) return 'SUV'
  if (/\blevante\b|\bgrecale\b|\burus\b|\blm002\b|\beletre\b|\bdbx\b|\bpurosangue\b|\bstonic\b|\bvenue\b|\binster\b/.test(m)) return 'SUV'
  if (/\bmusso\b|\bkorando\b|\brexton\b|\btivoli\b|\bfronx\b|\bfreemont\b|\bsedici\b|\b500x\b|\b500l\b|\b600e\b/.test(m)) return 'SUV'
  if (/\bterios\b|\bferoza\b|\bc-crosser\b|\bcrossback\b|\bcountryman\b|\baceman\b|\bt-cross\b|\bex40\b|\bec40\b/.test(m)) return 'SUV'
  if (/\bes\d\b|\bec\d\b|\bel\d\b|\bvf \d\b|\br1s\b|\bh2\b|\bh3\b|\bev suv\b|\bbz3c\b|\blbx\b|\bix\d\b|\bjunior\b/.test(m)) return 'SUV'
  if (/cj-\d|\brocky\b|\bnomad\b|\bh2 suv\b/.test(m) || m === 'mb' || m === 'eagle' || m === 'tx' || m === '4' ||
      m === '5' || m === '7' || m === 'e5' || m === '5 ev' || m === '01' || m === '02') return 'SUV'
  if (m === '2008' || m === '3008' || m === '4007' || m === '4008' || m === '5008' || m === 'e-3008') return 'SUV'
  // Utes
  if (/\btasman\b|\bavalanche\b|\bs-10\b|\bsyclone\b|\bcanyon\b|\bel camino\b|\br1t\b|\bev pickup\b|\bet60\b|\bt90\b/.test(m) || m === '3500') return 'Ute'
  // Vans
  if (/\bsprinter\b|\bvito\b|\bpacifica\b|\balphard\b|\bvellfire\b|\bcoaster\b|\bdeliver 9\b|\bcrafter\b|id\.buzz/.test(m)) return 'Van'
  if (/\bmultipla\b|\bdoblo\b|\bducato\b|\bpicasso\b|\btacuma\b|\bhi-jet\b|\bpyzar\b|\bmontana\b|\brelay\b|transit/.test(m)) return 'Van'
  // Coupes (classic GTs, muscle, exotics)
  if (/\bamx\b|\bjavelin\b|\btalon\b|\bmonte carlo\b|\bfirebird\b|\bsolstice\b|\btoronado\b|\b442\b|\bmarlin\b|\bcharger\b/.test(m)) return 'Coupe'
  if (/\bdb\d+\b|\bvantage\b|\bvanquish\b|\bdbs\b|\bsprite\b|\b100\/4\b|\b100 six\b|\b3000 mk/.test(m)) return 'Coupe'
  if (/\bintegra\b|\brsx\b|\ba610\b|\bcrossfire\b|\bdmc-12\b|\bcopen\b|\bbarchetta\b|\brcz\b|\bstag\b/.test(m)) return 'Coupe'
  if (/\btr[2-8]\b|\bspitfire\b|\bgt6\b|\bwankel spider\b|\bhimiko\b|\borochi\b|\brock star\b|\bmt900\b/.test(m)) return 'Coupe'
  if (/\bmiura\b|\bespada\b|\burraco\b|\bcountach\b|\bjalpa\b|\bdiablo\b|\bmurcielago\b|\bgallardo\b|\baventador\b|\bhuracan\b|\brevuelto\b|\btemerario\b/.test(m)) return 'Coupe'
  if (/\b308 gtb\b|\b328 gtb\b|\b348\b|\b355\b|\b360\b|\b430\b|\b456\b|\b458\b|\b488\b|\bf8\b|\btestarossa\b|\b512\b|\bf40\b|\bf50\b|\benzo\b|\blaferrari\b/.test(m)) return 'Coupe'
  if (/\bcalifornia\b|\bportofino\b|\b599\b|\b612\b|\bgtc4\b|\b812\b|\bsf90\b|\broma\b|\b550\b|\b575\b|\bdino\b|\b365 gt\b|\b296\b|\b12cilindri\b/.test(m)) return 'Coupe'
  if (/\bmp4\b|\b650s\b|\b675lt\b|\b540c\b|\b570s\b|\b570gt\b|\b600lt\b|\b720s\b|\b750s\b|\b765lt\b|\bsenna\b|\bartura\b/.test(m)) return 'Coupe'
  if (/\besprit\b|\bevora\b|\bemira\b|\bexige\b|\bbora\b|\bmerak\b|\bkhamsin\b|\b3200gt\b|\bgranturismo\b|\bgrancabrio\b|\bmc20\b|\bbiturbo\b|\bghibli classic\b/.test(m)) return 'Coupe'
  if (/\bcorniche\b|\bcamargue\b|\bwraith\b|\bspectre\b|\bgt350\b|\bgt500\b|\bultimate aero\b|\btuatara\b|\bvenom\b|\bnevera\b|\bconcept_one\b/.test(m)) return 'Coupe'
  if (/\batom\b|\bmono\b|\bm600\b|\bm14\b|\bc8\b|\bc12\b|\bw8\b|\bm12\b|\bmark vii\b|\bmark viii\b|\bcontinental r\b|\bazure\b|\bcontinental gtc\b/.test(m)) return 'Coupe'
  if (/apollo|glickenhaus|t\.50|scg/.test(m) || m === 'dawn' || m === 'z' || m === '350z' || m === 'tc' || m === 'fr-s' ||
      m === 'sc1' || m === 'sc2' || m === 'sky' || m === 'cle' || m === 'series 1' || m === 'q60' || m === 'convertible') return 'Coupe'
  // Hatches
  if (/\bgremlin\b|\ba290\b|\bseagull\b|\bbolt ev\b|\bsonic\b|\bspark\b|\bvolt\b|\bpt cruiser\b|\bcharade\b|\bsirion\b|\byrv\b|\bmira\b|\bmove\b/.test(m)) return 'Hatch'
  if (/\bmatiz\b|\blanos\b|\bkalos\b|\bpanda\b|\buno\b|\btipo\b|\bbravo\b|\bstilo\b|\bsaxo\b|\bxantia\b|\bzx\b|\bbx\b|\bvibe\b|\brobin\b|\brialto\b/.test(m)) return 'Hatch'
  if (/\bzoe\b|\b5 e-tech\b|\bforfour\b|\bprius\b|\bfunky cat\b|\b500e\b|\b107\b|\b205\b|\b206\b|\b207\b|\b208\b/.test(m)) return 'Hatch'
  if (m === '306' || m === '307' || m === '308' || m === 'ora' || m === 'hatch' || m === 'electric' ||
      m === 'xa' || m === 'xb' || m === 'xd' || m === 'iq' || m === 'im' || m === 'gv' || m === 'gvx') return 'Hatch'
  // Wagons
  if (/\bsummit wagon\b|\bsafari\b|\bclubman\b/.test(m)) return 'Wagon'

  // ── s241 depth pack ──
  if (m === 'hs' || m === 's05' || /\bh7\b|\btiggo 4\b/.test(m)) return 'SUV'

  // ── s242 pack (Tayron/J8 SUVs; K4 & Tiggo 8 covered by default/tiggo rule) ──
  if (/\btayron\b|\bj8\b/.test(m)) return 'SUV'

  // ── s240 pack (KGM / Denza / Iveco / Farizon + EV-brand depth) ──
  if (/\bactyon sports\b/.test(m)) return 'Ute'                  // SsangYong ute — BEFORE actyon
  if (/\btorres\b|\bactyon\b/.test(m)) return 'SUV'               // KGM (+ SsangYong Actyon)
  if (m === 'b5') return 'SUV'                                   // Denza B5
  if (/\bdaily\b/.test(m)) return 'Van'                          // Iveco
  if (m === 'sv') return 'Van'                                   // Farizon SV
  if (/\bex5\b|\bstarray\b/.test(m)) return 'SUV'                 // Geely
  if (m === '7x' || m === 'x') return 'SUV'                      // Zeekr 7X / X
  if (m === '009') return 'Van'                                  // Zeekr 009 people mover
  if (/\bc10\b|\bb10\b/.test(m)) return 'SUV'                     // Leapmotor
  if (m === '#1' || m === '#3' || m === '#5') return 'SUV'       // Smart EVs

  return 'Sedan'
}

export { BODY_TYPES, getBodyType }
