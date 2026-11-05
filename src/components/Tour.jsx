import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

// First-visit walkthrough: dims the page, spotlights one thing at a time.
// Shown once per browser (sc_tour_done), replayable from "How it works".
const STEPS = [
  { title: 'Welcome to Spec Clash', text: 'Pit any two cars against each other, spec for spec. Here’s the 20-second tour.' },
  { sel: '.slot-grid > :nth-child(1)', title: 'Pick your first car', text: 'Search a make and model, choose the trim and year, then hit LOAD.' },
  { sel: '.slot-grid > :nth-child(2)', title: 'Pick its rival', text: 'Do the same here for the car you want to clash it with.' },
  { sel: '[data-tour="random"]', title: 'Can’t decide?', text: 'Hit Random for a surprise matchup.' },
  { title: 'Then the fun bit', text: 'You’ll see who wins, every spec side by side, and CLASH for the animated battle. Share sends the matchup to a mate.' },
]
const PAD = 8

export default function Tour({ onDone }) {
  const [i, setI] = useState(0)
  const [rect, setRect] = useState(null)
  const step = STEPS[i]
  const last = i === STEPS.length - 1

  const finish = useCallback(() => {
    try { localStorage.setItem('sc_tour_done', '1') } catch { /* private mode */ }
    onDone()
  }, [onDone])

  const measure = useCallback(() => {
    const el = step.sel && document.querySelector(step.sel)
    if (!el) { setRect(null); return }
    const r = el.getBoundingClientRect()
    setRect({ top: r.top - PAD, left: r.left - PAD, width: r.width + PAD * 2, height: r.height + PAD * 2 })
  }, [step])

  const next = () => (last ? finish() : setI(n => n + 1))

  useLayoutEffect(() => {
    const el = step.sel && document.querySelector(step.sel)
    if (el) el.scrollIntoView({ block: 'center', behavior: 'instant' })
    const raf = requestAnimationFrame(measure)
    return () => cancelAnimationFrame(raf)
  }, [step, measure])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') finish() }
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure, true)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('resize', measure); window.removeEventListener('scroll', measure, true); window.removeEventListener('keydown', onKey) }
  }, [measure, finish])

  // Card sits below the spotlight if there's room, otherwise above; centred when there's no target
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800
  let cardStyle = { left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }
  if (rect) {
    const below = rect.top + rect.height + 12
    cardStyle = below + 190 < vh
      ? { left: '50%', top: below, transform: 'translateX(-50%)' }
      : { left: '50%', top: Math.max(12, rect.top - 12), transform: 'translate(-50%,-100%)' }
  }

  return (
    <div className="tour" role="dialog" aria-modal="true" aria-labelledby="tour-title">
      {rect
        ? <div className="tour-spot" style={rect} />
        : <div className="tour-dim" />}
      <div className="tour-card" style={cardStyle}>
        <div className="tour-step">{i + 1} / {STEPS.length}</div>
        <h2 id="tour-title">{step.title}</h2>
        <p>{step.text}</p>
        <div className="tour-actions">
          <button className="tour-skip" onClick={finish}>{last ? 'Close' : 'Skip'}</button>
          <div style={{ display: 'flex', gap: 8 }}>
            {i > 0 && <button className="tour-back" onClick={() => setI(n => n - 1)}>Back</button>}
            <button className="tour-next" onClick={next} autoFocus>{last ? 'Let’s go' : 'Next'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
