// GET    /api/owner          -> { owner: true|false, calendar?: secret feed URL (owner only) }
// POST   /api/owner {code}   -> 204 + owner cookie, or 401 (slowed down)
// DELETE /api/owner          -> 204, cookie cleared ("lock this device")
import { calendarKey, codeMatches, isOwner, ownerCookie, ownerToken, sameOrigin } from './_lib/owner.js'

const YEAR = 365 * 86400
const sleep = ms => new Promise(r => setTimeout(r, ms))

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method === 'GET') {
    const owner = isOwner(req)
    res.status(200).json(owner ? { owner, calendar: `https://${req.headers.host}/queue/calendar.ics?k=${calendarKey()}` } : { owner })
    return
  }
  if (req.method !== 'POST' && req.method !== 'DELETE') { res.setHeader('Allow', 'GET, POST, DELETE'); res.status(405).end(); return }
  // Same-origin only (blocks other sites posting guesses, or locking the device,
  // with the user's browser)
  if (!sameOrigin(req)) { res.status(403).json({ error: 'bad origin' }); return }
  if (req.method === 'DELETE') { res.setHeader('Set-Cookie', ownerCookie('', 0)); res.status(204).end(); return }

  const input = String((req.body && req.body.code) || '').slice(0, 64)
  if (!codeMatches(input)) {
    await sleep(1200)                       // makes guessing slow
    console.log(JSON.stringify({ event: 'owner-code-fail', ts: new Date().toISOString() }))
    res.status(401).json({ error: 'wrong code' }); return
  }
  res.setHeader('Set-Cookie', ownerCookie(ownerToken(), YEAR))
  console.log(JSON.stringify({ event: 'owner-unlock', ts: new Date().toISOString() }))
  res.status(204).end()
}
