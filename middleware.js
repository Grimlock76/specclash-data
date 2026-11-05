// Vercel Routing Middleware: everything under /queue/ is owner-only.
// Owner = a valid sc_owner cookie (set by /api/owner after the owner code).
// The calendar feed is the one exception: calendar apps can't log in, so
// /queue/calendar.ics also opens with ?k=<calendar key>, a secret derived from
// OWNER_CODE (changing the code changes the link). Unset OWNER_CODE = locked.
export const config = { matcher: ['/queue', '/queue/:path*'] }

const enc = new TextEncoder()
const norm = s => String(s || '').trim().toUpperCase().replace(/[\s-]/g, '')
const b64url = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
async function hmac(key, msg) {
  const k = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  return b64url(await crypto.subtle.sign('HMAC', k, enc.encode(msg)))
}
const same = (a, b) => {
  if (a.length !== b.length) return false
  let d = 0
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return d === 0
}
function cookie(req, name) {
  for (const part of (req.headers.get('cookie') || '').split(';')) {
    const i = part.indexOf('=')
    if (i > 0 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim())
  }
  return ''
}

export default async function middleware(request) {
  const code = norm(process.env.OWNER_CODE)
  if (code.length >= 12) {
    if (same(cookie(request, 'sc_owner'), await hmac(code, 'spec-clash-owner-v1'))) return   // continue
    const url = new URL(request.url)
    if (url.pathname === '/queue/calendar.ics') {
      const key = (await hmac(code, 'spec-clash-calendar-v1')).slice(0, 32)
      if (same(url.searchParams.get('k') || '', key)) return
    }
  }
  return new Response(
    '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><title>Not found</title>' +
    '<body style="background:#0a0a0a;color:#bbb;font:16px system-ui;padding:40px">Not found. ' +
    '<a style="color:#A970FF" href="/">Back to Spec Clash</a></body>',
    { status: 404, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } },
  )
}
