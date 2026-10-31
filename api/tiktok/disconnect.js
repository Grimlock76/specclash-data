import { cookie, SESSION_COOKIE } from '../_lib/tiktok.js'

export default function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); res.status(405).end(); return }
  res.setHeader('Set-Cookie', cookie(SESSION_COOKIE, '', 0))
  res.status(204).end()
}
