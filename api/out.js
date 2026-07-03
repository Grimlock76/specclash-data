// Logs outbound listing clicks — the click-through numbers that back an
// affiliate program application. View alongside search-miss logs in the
// Vercel dashboard (Observability → Logs, filter "listing-click").
export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    res.status(405).end()
    return
  }
  const mk = String(req.query.mk ?? '').slice(0, 40)
  const md = String(req.query.md ?? '').slice(0, 60)
  if (mk) {
    console.log(JSON.stringify({ event: 'listing-click', mk, md, ts: new Date().toISOString() }))
  }
  res.status(204).end()
}
