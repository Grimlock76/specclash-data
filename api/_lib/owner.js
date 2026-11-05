// Owner access: a secret code (OWNER_CODE env var) swaps for an http-only cookie.
// The cookie holds an HMAC of the code, so changing OWNER_CODE in Vercel signs
// every device out. The code itself never reaches the browser bundle.
import crypto from 'node:crypto'

export const OWNER_COOKIE = 'sc_owner'
const code = () => process.env.OWNER_CODE || ''
const norm = s => String(s || '').trim().toUpperCase().replace(/[\s-]/g, '')
export const ownerToken = () => crypto.createHmac('sha256', norm(code())).update('spec-clash-owner-v1').digest('base64url')

const eq = (a, b) => {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b))
  return x.length === y.length && crypto.timingSafeEqual(x, y)
}

export function codeMatches(input) {
  if (norm(code()).length < 12) return false          // refuse if unset or too short
  return eq(norm(input), norm(code()))
}

export function readCookie(req, name) {
  for (const part of String(req.headers.cookie || '').split(';')) {
    const i = part.indexOf('=')
    if (i > 0 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim())
  }
  return ''
}

export const isOwner = req => norm(code()).length >= 12 && eq(readCookie(req, OWNER_COOKIE), ownerToken())

export const ownerCookie = (value, maxAge) =>
  `${OWNER_COOKIE}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`

// Secret for the calendar feed link (/queue/calendar.ics?k=…); must match middleware.js
export const calendarKey = () => crypto.createHmac('sha256', norm(code())).update('spec-clash-calendar-v1').digest('base64url').slice(0, 32)
