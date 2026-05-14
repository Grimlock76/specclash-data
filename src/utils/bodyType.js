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
  if (/\bsportage\b|\bsorento\b|\bseltos\b|\btelluride\b|\bniro\b|\bev6\b|\bev9\b/.test(m)) return 'SUV'
  if (/\bcarnival\b/.test(m)) return 'Van'
  if (/\brio\b|\bcerato\b|\bpicanto\b|\bsoul\b/.test(m)) return 'Hatch'
  if (/\boptima\b|\bcadenza\b/.test(m)) return 'Sedan'

  // ── BMW ──
  if (/\bx2\b|\bx4\b|\bx6\b|\bx7\b|\bix\b|\bix3\b|\bix1\b|\bx1\b|\bx3\b|\bx5\b/.test(m)) return 'SUV'
  if (/\b2 series active tourer\b|\b2 series gran tourer\b/.test(m)) return 'Hatch'
  if (/\bz3\b|\bz4\b|\b2 series\b|\b4 series\b|\b6 series\b|\b8 series\b|\bm2\b|\bm4\b|\bm8\b/.test(m)) return 'Coupe'
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
  if (/\bnsx\b|\bs2000\b|\bprelude\b/.test(m)) return 'Coupe'
  if (/\bcr-v\b|\bhr-v\b|\bzr-v\b|\be:ny1\b/.test(m)) return 'SUV'
  if (/\bodyssey\b/.test(m)) return 'Van'
  if (/\bcivic\b|\bjazz\b/.test(m)) return 'Hatch'
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
  if (/\bs60\b|\bs90\b/.test(m)) return 'Sedan'

  // ── Tesla ──
  if (/\bmodel y\b|\bmodel x\b|\bcybertruck\b/.test(m)) return 'SUV'
  if (/\bmodel 3\b|\bmodel s\b/.test(m)) return 'Sedan'

  // ── Isuzu ──
  if (/\bd-max\b/.test(m)) return 'Ute'
  if (/\bmu-x\b/.test(m)) return 'SUV'

  // ── MG ──
  if (/\bzs ev\b|\bzs\b|\bmg hs\b/.test(m)) return 'SUV'
  if (/\bmg3\b|\bmg4\b|\bmg6\b/.test(m)) return 'Hatch'
  if (/\bcyberster\b/.test(m)) return 'Coupe'

  // ── GWM / Haval ──
  if (/\bhaval\b|\btank\b/.test(m)) return 'SUV'
  if (/\bute\b/.test(m)) return 'Ute'

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
  if (/\bwrangler\b|\bgrand cherokee\b|\bcherokee\b|\bcompass\b|\brenegade\b/.test(m)) return 'SUV'

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
  if (/\bkoleos\b|\barkana\b/.test(m)) return 'SUV'
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

  return 'Sedan'
}

export { BODY_TYPES, getBodyType }
