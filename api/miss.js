// Records searches that returned zero results — the queue of cars users want
// but can't find. View with `npx vercel logs <deployment-url>` or the Vercel
// dashboard (Observability → Logs, filter "search-miss"). Logs are ephemeral
// on the hobby plan; wire a log drain or KV store if a durable list is needed.
export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    res.status(405).end()
    return
  }
  const q = String(req.query.q ?? '').trim().slice(0, 80)
  const body = String(req.query.b ?? '').slice(0, 20)
  if (q.length >= 2) {
    console.log(JSON.stringify({ event: 'search-miss', q, body, ts: new Date().toISOString() }))
  }
  res.status(204).end()
}
