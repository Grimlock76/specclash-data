// Lets the queue page show "Connected" vs "Connect TikTok".
import { cookies, unseal, SESSION_COOKIE } from '../_lib/tiktok.js'

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  const s = unseal(cookies(req)[SESSION_COOKIE])
  const ok = !!(s && s.rt && s.rexp > Date.now())
  res.status(200).json({ connected: ok, expires: ok ? new Date(s.rexp).toISOString() : null })
}
