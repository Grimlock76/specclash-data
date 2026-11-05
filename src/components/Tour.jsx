import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

// Spotlight walkthrough: dims the page and highlights one thing at a time.
// Steps come from utils/tour.js; ones whose element isn't on screen are skipped.
import { markTourSeen } from '../utils/tour'

const PAD = 8

export default function Tour({ steps: allSteps, name, onDone }) {
  const [STEPS, setSteps] = useState(allSteps)
  // Drop steps whose element isn't on the page (checked once the page has rendered)
  useLayoutEffect(() => {
    const raf = requestAnimationFrame(() => setSteps(allSteps.filter(st => !st.sel || document.querySelector(st.sel))))
    return () => cancelAnimationFrame(raf)
  }, [allSteps])
  const [i, setI] = useState(0)
  const [rect, setRect] = useState(null)
  const step = STEPS[Math.min(i, STEPS.length - 1)]
  const last = i === STEPS.length - 1

  const finish = useCallback(() => {
    markTourSeen(name)
    onDone()
  }, [onDone, name])

  const measure = useCallback(() => {
    const el = step.sel && document.querySelector(step.sel)
    if (!el) { setRect(null); return }
    const r = el.getBoundingClientRect()
    setRect({ top: r.top - PAD, left: r.left - PAD, width: r.width + PAD * 2, height: r.height + PAD * 2 })
  }, [step])

  const next = () => (last ? finish() : setI(n => n + 1))

  useLayoutEffect(() => {
    const el = step.sel && document.querySelector(step.sel)
    if (el) el.scrollIntoView({ block: el.getBoundingClientRect().height > window.innerHeight * 0.6 ? 'start' : 'center', behavior: 'instant' })
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
    if (below + 200 < vh) cardStyle = { left: '50%', top: below, transform: 'translateX(-50%)' }
    else if (rect.top - 12 > 200) cardStyle = { left: '50%', top: rect.top - 12, transform: 'translate(-50%,-100%)' }
    else cardStyle = { left: '50%', bottom: 16, transform: 'translateX(-50%)' }
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
