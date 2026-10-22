import { useEffect, useRef, useState } from 'react'

// Every number in the string counts up from 0 ("317 kW (425 hp)" animates both),
// keeping decimals and thousands separators so "$54,490" never flickers to "$54490".
const NUM = /\d[\d,]*\.?\d*/g
const HAS_NUM = /\d/

function frameText(text, k) {
  return text.replace(NUM, raw => {
    const n = parseFloat(raw.replace(/,/g, ''))
    const dec = (raw.split('.')[1] || '').length
    const v = n * k
    return raw.includes(',')
      ? v.toLocaleString('en-AU', { minimumFractionDigits: dec, maximumFractionDigits: dec })
      : v.toFixed(dec)
  })
}

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export default function CountUp({ text, delay = 0, duration = 1400 }) {
  const animate = typeof text === 'string' && HAS_NUM.test(text) && !reducedMotion()
  const [shown, setShown] = useState(animate ? frameText(text, 0) : text)
  const raf = useRef(0)

  useEffect(() => {
    if (!animate) return
    let start = 0
    const tick = t => {
      if (!start) start = t
      const p = Math.min(1, Math.max(0, (t - start - delay) / duration))
      const e = 1 - Math.pow(1 - p, 4)
      setShown(p >= 1 ? text : frameText(text, e))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [text, delay, duration, animate])

  return animate ? shown : text
}
