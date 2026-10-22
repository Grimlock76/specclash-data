import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import config from '../data/config.json'
import CarSilhouette from './CarSilhouette.jsx'
import CountUp from './CountUp.jsx'
import { pickArchetype } from '../utils/archetype.js'
import { getBodyType } from '../utils/bodyType.js'

// Ultimate Clash: a full-screen, round-by-round face-off of the first two loaded
// cars. Built to be watched (or screen-recorded), not read like the table.
const COLORS = config.slotColors

const firstNum = v => {
  const m = String(v ?? '').replace(/,/g, '').match(/\d+(\.\d+)?/)
  return m ? parseFloat(m[0]) : NaN
}

// [key, label, unit, higherWins, format]
const STATS = [
  ['hp', 'Power', 'kW', true],
  ['tq', 'Torque', 'Nm', true],
  ['p2w', 'Power-to-weight', 'kW/t', true],
  ['z1', '0–100 km/h', 's', false],
  ['ts', 'Top speed', 'km/h', true],
  ['wt', 'Weight', 'kg', false],
  ['fx', 'Fuel (combined)', 'L/100km', false],
  ['pr', 'Price new', '', false],
]

function statValue(car, key) {
  if (key === 'p2w') {
    const kw = firstNum(car.specs?.hp), kg = firstNum(car.specs?.wt)
    return kw && kg ? Math.round((kw / kg) * 1000) : NaN
  }
  if (key === 'fx' && car.specs?.ft === 'Electric') return NaN
  return firstNum(car.specs?.[key])
}

function fmt(n, key) {
  if (key === 'pr') return '$' + Math.round(n).toLocaleString('en-AU')
  if (key === 'wt') return Math.round(n).toLocaleString('en-AU')
  return Number.isInteger(n) ? String(n) : n.toFixed(1)
}

const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const INTRO_MS = 3400, ROUND_MS = 3000

export default function UltimateClash({ cars, onClose }) {
  const [a, b] = cars
  const rounds = useMemo(() => STATS.map(([key, label, unit, higher]) => {
    const va = statValue(a, key), vb = statValue(b, key)
    if (isNaN(va) || isNaN(vb)) return null
    const win = va === vb ? -1 : (higher ? va > vb : va < vb) ? 0 : 1
    return { key, label, unit, vals: [va, vb], win }
  }).filter(Boolean), [a, b])

  const total = rounds.length
  // stage: -1 intro, 0..total-1 rounds, total = verdict
  const [stage, setStage] = useState(reducedMotion() ? total : -1)
  const [run, setRun] = useState(0)
  const timers = useRef([])
  const closeBtn = useRef(null)

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  // Only schedules timers, so the mount effect never sets state synchronously
  const schedule = useCallback(() => {
    clear()
    timers.current.push(setTimeout(() => setStage(0), INTRO_MS))
    for (let i = 1; i <= total; i++) timers.current.push(setTimeout(() => setStage(i), INTRO_MS + i * ROUND_MS))
  }, [total])
  const replay = () => { setStage(-1); setRun(n => n + 1); schedule() }

  // Latest onClose without re-running the mount effect when the parent re-renders
  const closeRef = useRef(onClose)
  useEffect(() => { closeRef.current = onClose })

  useEffect(() => {
    if (!reducedMotion()) schedule()
    closeBtn.current?.focus()
    const onKey = e => { if (e.key === 'Escape') closeRef.current() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { clear(); window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [schedule])

  const skip = () => { if (stage < total) { clear(); setStage(total) } }

  const scoredSoFar = rounds.slice(0, stage >= total ? total : Math.max(0, stage))
  const score = [0, 1].map(i => scoredSoFar.filter(r => r.win === i).length)
  const fin = [0, 1].map(i => rounds.filter(r => r.win === i).length)
  const leader = fin[0] === fin[1] ? -1 : fin[0] > fin[1] ? 0 : 1
  const pull = score[0] + score[1] ? 50 + ((score[0] - score[1]) / Math.max(total, 1)) * 50 : 50
  const name = c => `${c.year} ${c.make} ${c.model}`
  const arch = c => pickArchetype(getBodyType(c.model, c.trim, c.make), { year: c.year, make: c.make, model: c.model })
  const r = stage >= 0 && stage < total ? rounds[stage] : null

  return (
    <div className="uc" role="dialog" aria-modal="true" aria-label="Ultimate Clash" onClick={skip}>
      <div className="uc-stage" key={run}>
        <div className="uc-top">
          <span className="uc-brand">ULTIMATE <b>CLASH</b></span>
          <button ref={closeBtn} className="uc-x" onClick={e => { e.stopPropagation(); onClose() }} aria-label="Close">×</button>
        </div>

        {/* tug-of-war score bar */}
        <div className="uc-tug" aria-hidden="true">
          <span style={{ width: `${pull}%`, background: COLORS[a.idx] }} />
          <span style={{ width: `${100 - pull}%`, background: COLORS[b.idx] }} />
        </div>
        <div className="uc-score" aria-live="polite">
          <b style={{ color: COLORS[a.idx] }}>{score[0]}</b><i>–</i><b style={{ color: COLORS[b.idx] }}>{score[1]}</b>
        </div>

        {stage === -1 && (
          <div className="uc-intro">
            <div className="uc-car uc-in-left">
              <CarSilhouette archetype={arch(a)} color={COLORS[a.idx]} height={70} />
              <div className="uc-name" style={{ color: COLORS[a.idx] }}>{name(a)}</div>
              <div className="uc-trim">{a.trim}</div>
            </div>
            <div className="uc-vs">VS</div>
            <div className="uc-car uc-in-right">
              <CarSilhouette archetype={arch(b)} color={COLORS[b.idx]} height={70} />
              <div className="uc-name" style={{ color: COLORS[b.idx] }}>{name(b)}</div>
              <div className="uc-trim">{b.trim}</div>
            </div>
          </div>
        )}

        {r && (
          <div className="uc-round" key={r.key}>
            <div className="uc-rnum">Round {stage + 1} of {total}</div>
            <div className="uc-rlabel">{r.label}</div>
            {[a, b].map((c, i) => {
              const max = Math.max(...r.vals)
              return (
                <div key={i} className={'uc-row' + (r.win === i ? ' uc-win' : r.win === -1 ? '' : ' uc-lose')} style={{ '--c': COLORS[c.idx] }}>
                  <div className="uc-rowtop">
                    <span className="uc-who" style={{ color: COLORS[c.idx] }}>{c.make} {c.model}</span>
                    <span className="uc-val">
                      {r.win === i && <span className="uc-arrow">▲</span>}
                      <CountUp text={fmt(r.vals[i], r.key)} delay={250} duration={1200} />
                      {r.unit && <small>{r.unit}</small>}
                    </span>
                  </div>
                  <div className="uc-track"><span className="uc-fill" style={{ width: `${(r.vals[i] / max) * 100}%` }} /></div>
                </div>
              )
            })}
            <div className="uc-rverdict">
              {r.win === -1 ? 'Dead heat' : `${[a, b][r.win].make} ${[a, b][r.win].model} takes it`}
            </div>
          </div>
        )}

        {stage >= total && (
          <div className="uc-verdict">
            <div className="uc-vlabel">{leader === -1 ? 'All square' : 'Winner on paper'}</div>
            <div className="uc-vname" style={{ '--c': leader === -1 ? '#fff' : COLORS[[a, b][leader].idx] }}>
              {leader === -1 ? 'Dead heat' : name([a, b][leader])}
            </div>
            <div className="uc-vscore">{fin[0]} – {fin[1]}</div>
            <ul className="uc-summary">
              {rounds.map(x => (
                <li key={x.key}>
                  <span>{x.label}</span>
                  <b style={{ color: x.win === -1 ? '#888' : COLORS[[a, b][x.win].idx] }}>
                    {x.win === -1 ? 'Tie' : [a, b][x.win].model}
                  </b>
                </li>
              ))}
            </ul>
            <div className="uc-actions">
              <button onClick={e => { e.stopPropagation(); replay() }}>↻ Replay</button>
              <button onClick={e => { e.stopPropagation(); onClose() }}>Done</button>
            </div>
          </div>
        )}

        {stage < total && <div className="uc-hint">Tap to skip</div>}
        <div className="uc-foot">spec-clash.vercel.app</div>
      </div>
    </div>
  )
}
