// Post queue page: lists upcoming TikTok posts and sends them to TikTok drafts.
(function () {
  const $ = id => document.getElementById(id)
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))
  let connected = false

  const flash = new URLSearchParams(location.search).get('tiktok')
  if (flash) {
    $('flash').textContent = flash === 'connected' ? 'TikTok connected ✅' : 'TikTok connect failed: ' + flash
    if (flash !== 'connected') $('flash').classList.add('err')
    history.replaceState(null, '', location.pathname)
  }

  const fmt = iso => new Date(iso).toLocaleString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit', timeZone: 'Australia/Perth' })

  async function status() {
    try {
      const s = await fetch('/api/tiktok/status', { cache: 'no-store' }).then(r => r.json())
      connected = !!s.connected
    } catch { connected = false }
    $('conn').textContent = connected ? 'TikTok connected' : 'TikTok not connected'
    $('conn').classList.toggle('on', connected)
    $('connectBtn').hidden = connected
    $('disconnectBtn').hidden = !connected
    document.querySelectorAll('[data-send]').forEach(b => { b.disabled = !connected })
  }

  $('disconnectBtn').addEventListener('click', async () => {
    await fetch('/api/tiktok/disconnect', { method: 'POST' })
    status()
  })

  function card(p) {
    const past = new Date(p.post_at).getTime() < Date.now() - 3 * 3600e3
    const caption = p.caption + '\n\n' + p.hashtags.join(' ')
    const el = document.createElement('article')
    el.className = 'card' + (past ? ' past' : '')
    el.innerHTML = `
      <div class="top"><h2>${esc(p.title)}</h2><span class="when">${esc(fmt(p.post_at))}</span></div>
      <div class="grid">
        <video src="${esc(p.video)}" controls playsinline preload="metadata"></video>
        <div style="display:grid;gap:10px;align-content:start">
          <div class="cap">${esc(caption)}</div>
          <div><b style="font-size:13px">Sound ideas</b><ul>${p.sounds.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>
          <div class="btns">
            <button class="primary" data-send>Send to TikTok drafts</button>
            <button data-copy>Copy caption</button>
            <a class="btn" href="${esc(p.video)}" download>Save video</a>
          </div>
          <div class="msg"></div>
          ${p.sources && p.sources.length ? `<details><summary>Spec sources</summary><ul>${p.sources.map(s => `<li>${esc(s)}</li>`).join('')}</ul></details>` : ''}
        </div>
      </div>`
    const msg = el.querySelector('.msg')
    el.querySelector('[data-copy]').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(caption); msg.textContent = 'Caption copied 📋'; msg.classList.remove('err') }
      catch { msg.textContent = 'Copy failed. Press and hold the caption to copy it.'; msg.classList.add('err') }
    })
    const send = el.querySelector('[data-send]')
    send.disabled = !connected
    send.addEventListener('click', async () => {
      send.disabled = true; msg.classList.remove('err'); msg.textContent = 'Uploading to TikTok… (up to a minute)'
      try {
        const r = await fetch('/api/tiktok/upload', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ video: p.video }) })
        const j = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(j.error || r.status)
        msg.textContent = 'Sent ✅ Check your TikTok inbox notifications to finish the post.'
      } catch (e) {
        msg.textContent = 'Upload failed: ' + e.message; msg.classList.add('err'); send.disabled = false
      }
    })
    return el
  }

  fetch('/queue/queue.json', { cache: 'no-store' }).then(r => r.json()).then(q => {
    const list = $('list')
    list.style.display = 'grid'; list.style.gap = '16px'
    if (!q.posts.length) { list.innerHTML = '<p class="note">Nothing queued yet. The Sunday pack lands here.</p>'; return }
    q.posts.forEach(p => list.appendChild(card(p)))
    status()
  }).catch(() => { $('list').innerHTML = '<p class="note">Couldn\'t load the queue.</p>' })
})()
