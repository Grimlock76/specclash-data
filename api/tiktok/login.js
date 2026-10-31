// Starts "Connect TikTok": sends the browser to TikTok's consent screen.
import crypto from 'node:crypto'
import { config, redirectUri, SCOPES, STATE_COOKIE, cookie } from '../_lib/tiktok.js'

export default function handler(req, res) {
  let key
  try { ({ key } = config()) } catch (e) { res.status(500).send(e.message); return }
  const state = crypto.randomBytes(16).toString('hex')
  const url = new URL('https://www.tiktok.com/v2/auth/authorize/')
  url.search = new URLSearchParams({
    client_key: key, scope: SCOPES, response_type: 'code', redirect_uri: redirectUri(req), state,
  }).toString()
  res.setHeader('Set-Cookie', cookie(STATE_COOKIE, state, 600))
  res.setHeader('Cache-Control', 'no-store')
  res.redirect(302, url.toString())
}
