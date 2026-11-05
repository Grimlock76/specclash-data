// Runs after `vite build`: pushes the TikTok queue videos to Vercel Blob and
// points dist/queue/queue.json at the Blob URLs.
//
// Why: every Vercel deployment stores its own copy of the build output, so
// shipping the MP4s inside public/ cost ~40 MB per deploy and filled the free
// tier's 10 GB Deployment Storage. Blob stores each video once.
//
// Videos live in queue-videos/<slug>.mp4 (written by build-post-queue.mjs).
// Each one is uploaded as queue/<slug>-<content hash>.mp4, so an unchanged
// video is skipped and a re-render gets a fresh URL (no stale CDN cache).
//
// On Vercel the build fails if BLOB_READ_WRITE_TOKEN is missing, so a broken
// queue never goes live. Locally without a token, the videos are copied into
// dist/queue/ instead so `vite preview` still plays them.
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { head, put, BlobNotFoundError } from '@vercel/blob'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'queue-videos')
const DIST_Q = path.join(ROOT, 'dist/queue')
const QUEUE = path.join(DIST_Q, 'queue.json')

if (!fs.existsSync(QUEUE)) { console.log('queue videos: no dist/queue/queue.json, skipping'); process.exit(0) }
const q = JSON.parse(fs.readFileSync(QUEUE, 'utf8'))
const token = process.env.BLOB_READ_WRITE_TOKEN

if (!token) {
  if (process.env.VERCEL) { console.error('queue videos: BLOB_READ_WRITE_TOKEN is not set on this Vercel project'); process.exit(1) }
  for (const p of q.posts) {
    const f = path.join(SRC, `${p.slug}.mp4`)
    if (fs.existsSync(f)) fs.copyFileSync(f, path.join(DIST_Q, `${p.slug}.mp4`))
  }
  console.log('queue videos: no Blob token, copied videos into dist/queue for local preview')
  process.exit(0)
}

let uploaded = 0, reused = 0
for (const p of q.posts) {
  const f = path.join(SRC, `${p.slug}.mp4`)
  if (!fs.existsSync(f)) { console.error(`queue videos: missing ${path.relative(ROOT, f)}`); process.exit(1) }
  const bytes = fs.readFileSync(f)
  const hash = crypto.createHash('sha256').update(bytes).digest('hex').slice(0, 16)
  const pathname = `queue/${p.slug}-${hash}.mp4`
  let url
  try {
    url = (await head(pathname, { token })).url
    reused++
  } catch (e) {
    if (!(e instanceof BlobNotFoundError)) throw e
    url = (await put(pathname, bytes, { access: 'public', token, addRandomSuffix: false, contentType: 'video/mp4', cacheControlMaxAge: 31536000 })).url
    uploaded++
  }
  p.video = url
}

fs.writeFileSync(QUEUE, JSON.stringify(q, null, 2) + '\n')
console.log(`queue videos: ${uploaded} uploaded, ${reused} already on Blob`)
