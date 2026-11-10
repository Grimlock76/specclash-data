import { cookie, SESSION_COOKIE } from '../_lib/tiktok.js'
import { sameOrigin } from '../_lib/owner.js'

export default function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); res.status(405).end(); return }
  // Another site must not be able to sign the owner out of TikTok
  if (!sameOrigin(req)) { res.status(403).json({ error: 'bad origin' }); return }
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Set-Cookie', cookie(SESSION_COOKIE, '', 0))
  res.status(204).end()
}
