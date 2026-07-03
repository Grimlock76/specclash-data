// Outbound "view listings" links for loaded cars — the monetisation on-ramp.
//
// Works today as a plain convenience link to carsales search results. Once an
// affiliate program approves you (carsales runs via Commission Factory), paste
// the deep-link wrapper below and every listings click becomes commissionable;
// the footer disclosure switches on automatically.
//
// Example Commission Factory wrapper:
//   const AFFILIATE_WRAPPER = 'https://t.cfjump.com/XXXXX/t?Url='
// The destination URL is appended (URL-encoded) to the wrapper.
const AFFILIATE_WRAPPER = null

export const AFFILIATE_ACTIVE = Boolean(AFFILIATE_WRAPPER)

// carsales canonical search paths are /cars/{make-slug}/{model-slug}/
const slug = s => s
  .normalize('NFD').replace(/[̀-ͯ]/g, '')   // Citroën → Citroen
  .replace(/\s*\(.*?\)\s*/g, ' ')                     // Falcon (FG) → Falcon
  .replace(/&/g, 'and')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

export function listingUrl(make, model) {
  const dest = `https://www.carsales.com.au/cars/${slug(make)}/${slug(model)}/`
  return AFFILIATE_WRAPPER ? AFFILIATE_WRAPPER + encodeURIComponent(dest) : dest
}

// Fire-and-forget click log (mirrors the /api/miss pattern) so affiliate
// applications can be backed with real click-through numbers.
export function logListingClick(make, model) {
  try {
    fetch(`/api/out?mk=${encodeURIComponent(make)}&md=${encodeURIComponent(model)}`, { keepalive: true })
      .catch(() => {})
  } catch { /* older browsers */ }
}
