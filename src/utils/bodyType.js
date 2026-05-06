const BODY_TYPES = ['All', 'Sedan', 'Wagon', 'Ute', 'SUV', 'Coupe', 'Hatch', 'Van']

function getBodyType(model, trim = '') {
  const m = model.toLowerCase()
  const t = trim.toLowerCase()

  // Trim-level checks first (specific trims within mixed models)
  if (/sportwagon|wagon|\bshooting brake\b|\balltrack\b|\bavant\b/.test(t)) return 'Wagon'
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
  if (/\bsportage\b|\bsorento\b|\bseltos\b|\btelluride\b|\bniro\b|\bev6\b/.test(m)) return 'SUV'
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
  if (/\bjetta\b|\bpassat\b|\barteon\b/.test(m)) return 'Sedan'
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

  // ── Mercedes-Benz ──
  if (/\bg-class\b|\bglc\b|\bgle\b|\bgls\b|\bgla\b|\bglb\b|\beqa\b|\beqb\b|\beqc\b/.test(m)) return 'SUV'
  if (/\bamg gt\b|\bcla\b|\bslk\b|\bslc\b|\bsl\b/.test(m)) return 'Coupe'
  if (/\ba-class\b|\bb-class\b/.test(m)) return 'Hatch'
  if (/\bc-class\b|\be-class\b|\bs-class\b|\bcls\b|\beqe\b|\beqs\b/.test(m)) return 'Sedan'

  return 'Sedan'
}

export { BODY_TYPES, getBodyType }
