// Shared helpers for the TikTok Login Kit + Content Posting (upload to drafts) flow.
// Tokens never touch a database: the refresh token lives in an AES-256-GCM
// encrypted, http-only cookie keyed off TIKTOK_CLIENT_SECRET, so only the
// browser that connected can upload, and only this server can read it.
import crypto from 'node:crypto'

export const SCOPES = 'user.info.basic,video.upload'
export const SESSION_COOKIE = 'tt_session'
export const STATE_COOKIE = 'tt_state'

export function config() {
  const key = process.env.TIKTOK_CLIENT_KEY
  const secret = process.env.TIKTOK_CLIENT_SECRET
  if (!key || !secret) throw new Error('TIKTOK_CLIENT_KEY / TIKTOK_CLIENT_SECRET are not set')
  return { key, secret }
}

export const redirectUri = req => `https://${req.headers.host}/api/tiktok/callback`

const aesKey = () => crypto.createHash('sha256').update('tt-session:' + config().secret).digest()

export function seal(obj) {
  const iv = crypto.randomBytes(12)
  const c = crypto.createCipheriv('aes-256-gcm', aesKey(), iv)
  const body = Buffer.concat([c.update(JSON.stringify(obj), 'utf8'), c.final()])
  return Buffer.concat([iv, c.getAuthTag(), body]).toString('base64url')
}

export function unseal(str) {
  try {
    const buf = Buffer.from(String(str), 'base64url')
    const d = crypto.createDecipheriv('aes-256-gcm', aesKey(), buf.subarray(0, 12))
    d.setAuthTag(buf.subarray(12, 28))
    return JSON.parse(Buffer.concat([d.update(buf.subarray(28)), d.final()]).toString('utf8'))
  } catch { return null }
}

export function cookies(req) {
  const out = {}
  for (const part of String(req.headers.cookie || '').split(';')) {
    const i = part.indexOf('=')
    if (i > 0) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim())
  }
  return out
}

export const cookie = (name, value, maxAge) =>
  `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`

async function tokenRequest(params) {
  const r = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Cache-Control': 'no-cache' },
    body: new URLSearchParams(params),
  })
  const j = await r.json().catch(() => ({}))
  if (!r.ok || !j.access_token) throw new Error(`TikTok token error: ${j.error_description || j.error || r.status}`)
  return j
}

export function exchangeCode(req, code) {
  const { key, secret } = config()
  return tokenRequest({ client_key: key, client_secret: secret, code, grant_type: 'authorization_code', redirect_uri: redirectUri(req) })
}

export function refresh(refreshToken) {
  const { key, secret } = config()
  return tokenRequest({ client_key: key, client_secret: secret, grant_type: 'refresh_token', refresh_token: refreshToken })
}

// Session saved in the cookie: refresh token + when it dies, and the TikTok open_id.
export const sessionFrom = t => ({
  rt: t.refresh_token,
  rexp: Date.now() + (t.refresh_expires_in || 0) * 1000,
  oid: t.open_id,
})
