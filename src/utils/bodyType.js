const BODY_TYPES = ['All', 'Sedan', 'Wagon', 'Ute', 'SUV', 'Coupe', 'Hatch', 'Van']

function getBodyType(model, trim = '') {
  const m = model.toLowerCase()
  const t = trim.toLowerCase()

  // Trim-level checks first (specific trims within mixed models)
  if (/sportwagon|wagon/.test(t)) return 'Wagon'
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
  if (/cx-3|cx-5|cx-8|cx-9|mx-30/.test(m)) return 'SUV'
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

  // ── Mitsubishi ──
  if (/\bstarion\b|\b3000gt\b|\bgto\b|\beclipse spyder\b|\bfto\b/.test(m)) return 'Coupe'
  if (/\beclipse\b/.test(m)) return 'Coupe'
  if (/\bpajero\b|\boutlander\b|\basx\b|\beclipse cross\b|\bchallenger\b|\brvr\b|\bpajero sport\b/.test(m)) return 'SUV'
  if (/\btriton\b/.test(m)) return 'Ute'
  if (/\bcolt\b|\bmirage\b|\bspace star\b|\bcarisma\b|\bi-miev\b|\bsportback\b/.test(m)) return 'Hatch'
  if (/\bl300\b|\bexpress\b|\bdelica\b|\bgrandis\b/.test(m)) return 'Van'

  return 'Sedan'
}

export { BODY_TYPES, getBodyType }
