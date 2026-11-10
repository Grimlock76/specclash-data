// Sends one queued video to the connected account's TikTok drafts (inbox).
// POST {"video":"https://<store>.public.blob.vercel-storage.com/queue/<file>.mp4"}
//   (or the older "/queue/<file>.mp4")  ->  {"publish_id": "..."}
// The user then opens TikTok, adds a sound and posts it themselves.
import { cookies, cookie, refresh, seal, sessionFrom, unseal, SESSION_COOKIE } from '../_lib/tiktok.js'
import { isOwner, sameOrigin } from '../_lib/owner.js'

// Fetch queue videos from the production site, never from the request's Host header
const ORIGIN = 'https://spec-clash.vercel.app'
// Queue videos now live on this project's own Blob store. Its public host comes
// from the store id inside the token (vercel_blob_rw_<storeId>_<secret>), so
// only our store is ever fetched.
const blobHost = () => {
  const id = String(process.env.BLOB_READ_WRITE_TOKEN || '').split('_')[3]
  return id ? `${id.toLowerCase()}.public.blob.vercel-storage.com` : ''
}
function videoUrl(v) {
  if (/^\/queue\/[a-z0-9-]+\.mp4$/.test(v)) return { url: `${ORIGIN}${v}`, owner: true }
  let u
  try { u = new URL(v) } catch { return null }
  const host = blobHost()
  if (u.protocol !== 'https:' || !host || u.host !== host || u.search || u.hash) return null
  if (!/^\/queue\/[a-z0-9-]+\.mp4$/.test(u.pathname)) return null
  return { url: u.href, owner: false }
}

export const config = { maxDuration: 60 }

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); res.status(405).end(); return }
  if (!sameOrigin(req)) { res.status(403).json({ error: 'bad origin' }); return }
  if (!isOwner(req)) { res.status(403).json({ error: 'owner only' }); return }
  const video = String((req.body && req.body.video) || '')
  const src = videoUrl(video)
  if (!src) { res.status(400).json({ error: 'bad video path' }); return }

  const s = unseal(cookies(req)[SESSION_COOKIE])
  if (!s || !s.rt || s.rexp < Date.now()) { res.status(401).json({ error: 'not connected' }); return }

  try {
    // Fresh access token (TikTok may rotate the refresh token, so re-seal it)
    const t = await refresh(s.rt)
    const ns = sessionFrom(t)
    const days = Math.max(1, Math.floor((ns.rexp - Date.now()) / 864e5))
    res.setHeader('Set-Cookie', cookie(SESSION_COOKIE, seal(ns), days * 86400))

    // the owner cookie only ever goes to our own site (/queue is owner-only), never to Blob
    const file = await fetch(src.url, src.owner ? { headers: { cookie: String(req.headers.cookie || '') } } : {})
    if (!file.ok) throw new Error(`video fetch ${file.status}`)
    const bytes = Buffer.from(await file.arrayBuffer())
    if (bytes.length > 64 * 1024 * 1024) throw new Error('video over 64 MB')

    const init = await fetch('https://open.tiktokapis.com/v2/post/publish/inbox/video/init/', {
      method: 'POST',
      headers: { Authorization: `Bearer ${t.access_token}`, 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ source_info: { source: 'FILE_UPLOAD', video_size: bytes.length, chunk_size: bytes.length, total_chunk_count: 1 } }),
    }).then(r => r.json())
    if (init.error && init.error.code !== 'ok') throw new Error(`init: ${init.error.code} ${init.error.message || ''}`)
    const { publish_id, upload_url } = init.data || {}
    if (!upload_url) throw new Error('init: no upload_url')

    const put = await fetch(upload_url, {
      method: 'PUT',
      headers: { 'Content-Type': 'video/mp4', 'Content-Length': String(bytes.length), 'Content-Range': `bytes 0-${bytes.length - 1}/${bytes.length}` },
      body: bytes,
    })
    if (!put.ok) throw new Error(`upload ${put.status}`)
    console.log(JSON.stringify({ event: 'tiktok-upload', video, publish_id, ts: new Date().toISOString() }))
    res.status(200).json({ publish_id })
  } catch (e) {
    console.error('tiktok upload', e.message)
    res.status(502).json({ error: e.message })
  }
}
