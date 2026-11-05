// GET    /api/owner          -> { owner: true|false }
// POST   /api/owner {code}   -> 204 + owner cookie, or 401 (slowed down)
// DELETE /api/owner          -> 204, cookie cleared ("lock this device")
import { codeMatches, isOwner, ownerCookie, ownerToken } from './_lib/owner.js'

const YEAR = 365 * 86400
const sleep = ms => new Promise(r => setTimeout(r, ms))

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method === 'GET') { res.status(200).json({ owner: isOwner(req) }); return }
  if (req.method === 'DELETE') { res.setHeader('Set-Cookie', ownerCookie('', 0)); res.status(204).end(); return }
  if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST, DELETE'); res.status(405).end(); return }

  // Same-origin only (blocks other sites posting guesses with the user's browser)
  const origin = req.headers.origin
  if (origin && origin !== `https://${req.headers.host}`) { res.status(403).json({ error: 'bad origin' }); return }

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
