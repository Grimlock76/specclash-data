// TikTok sends the user back here after they approve. Swap the code for
// tokens and keep only the refresh token, sealed in an http-only cookie.
import { cookies, cookie, exchangeCode, seal, sessionFrom, STATE_COOKIE, SESSION_COOKIE } from '../_lib/tiktok.js'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  const { code, state, error, error_description } = req.query
  const back = msg => res.redirect(302, '/queue/?tiktok=' + encodeURIComponent(msg))
  if (error) return back('denied: ' + (error_description || error))
  const expected = cookies(req)[STATE_COOKIE]
  if (!code || !state || !expected || state !== expected) return back('state-mismatch')
  try {
    const t = await exchangeCode(req, String(code))
    const s = sessionFrom(t)
    const days = Math.max(1, Math.floor((s.rexp - Date.now()) / 864e5))
    res.setHeader('Set-Cookie', [cookie(SESSION_COOKIE, seal(s), days * 86400), cookie(STATE_COOKIE, '', 0)])
    console.log(JSON.stringify({ event: 'tiktok-connected', ts: new Date().toISOString() }))
    return back('connected')
  } catch (e) {
    console.error('tiktok callback', e.message)
    return back('error')
  }
}
