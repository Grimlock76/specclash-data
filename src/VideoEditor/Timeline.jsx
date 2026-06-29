import { useRef, useCallback } from 'react'

export default function Timeline({ state }) {
  const {
    clip,
    trimStart, setTrimStart,
    trimEnd, setTrimEnd,
    currentTime, setCurrentTime,
    isPlaying, setIsPlaying,
    videoRef,
    textOverlays,
    audioTrack,
  } = state

  const trackRef = useRef(null)
  const { duration } = clip ?? { duration: 1 }

  const toPercent = (t) => `${((t / duration) * 100).toFixed(3)}%`

  const seekTo = useCallback((ratio) => {
    const t = Math.max(trimStart, Math.min(trimEnd, ratio * duration))
    setCurrentTime(t)
    if (videoRef.current) videoRef.current.currentTime = t
  }, [duration, trimStart, trimEnd, setCurrentTime, videoRef])

  const startHandleDrag = useCallback((side, e) => {
    e.preventDefault()
    e.stopPropagation()
    const track = trackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()

    const onMove = (me) => {
      const ratio = Math.max(0, Math.min(1, (me.clientX - rect.left) / rect.width))
      const t     = ratio * duration
      if (side === 'start') {
        const next = Math.min(t, trimEnd - 0.3)
        setTrimStart(Math.max(0, next))
        if (videoRef.current) videoRef.current.currentTime = Math.max(0, next)
        setCurrentTime(Math.max(0, next))
      } else {
        const next = Math.max(t, trimStart + 0.3)
        setTrimEnd(Math.min(duration, next))
        if (videoRef.current) videoRef.current.currentTime = Math.min(duration, next)
        setCurrentTime(Math.min(duration, next))
      }
    }
    const onUp = () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerup',   onUp)
    }
    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerup',   onUp)
  }, [duration, trimStart, trimEnd, setTrimStart, setTrimEnd, setCurrentTime, videoRef])

  const onTrackClick = useCallback((e) => {
    const track = trackRef.current
    if (!track) return
    const rect  = track.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    seekTo(ratio)
    if (isPlaying) {
      setIsPlaying(false)
      setTimeout(() => setIsPlaying(true), 30)
    }
  }, [seekTo, isPlaying, setIsPlaying])

  const startPct = (trimStart / duration) * 100
  const endPct   = (trimEnd   / duration) * 100
  const nowPct   = (currentTime / duration) * 100

  return (
    <div className="ev-timeline">
      {/* Video / trim track */}
      <div className="ev-tl-row">
        <span className="ev-tl-label">clip</span>
        <div
          ref={trackRef}
          className="ev-tl-track"
          onClick={onTrackClick}
        >
          {/* dim left */}
          <div className="ev-tl-dim" style={{ left: 0, width: toPercent(trimStart) }} />
          {/* active region */}
          <div
            className="ev-tl-active"
            style={{ left: toPercent(trimStart), right: `${(100 - endPct).toFixed(3)}%` }}
          />
          {/* dim right */}
          <div className="ev-tl-dim" style={{ right: 0, width: `${(100 - endPct).toFixed(3)}%` }} />

          {/* trim handles */}
          <div
            className="ev-tl-handle left"
            style={{ left: toPercent(trimStart) }}
            onPointerDown={(e) => startHandleDrag('start', e)}
          />
          <div
            className="ev-tl-handle right"
            style={{ left: toPercent(trimEnd) }}
            onPointerDown={(e) => startHandleDrag('end', e)}
          />

          {/* playhead */}
          <div className="ev-tl-playhead" style={{ left: `${nowPct.toFixed(3)}%` }} />
        </div>
      </div>

      {/* Audio track */}
      {audioTrack && (
        <div className="ev-tl-row">
          <span className="ev-tl-label">music</span>
          <div className="ev-tl-track" style={{ cursor: 'default' }}>
            <div className="ev-tl-audio" />
          </div>
        </div>
      )}

      {/* Text track */}
      {textOverlays.length > 0 && (
        <div className="ev-tl-row">
          <span className="ev-tl-label">text</span>
          <div className="ev-tl-track" style={{ cursor: 'default' }}>
            {textOverlays.map(t => {
              const ls = (t.startTime / duration * 100).toFixed(3)
              const rs = (100 - (t.endTime / duration * 100)).toFixed(3)
              return (
                <div
                  key={t.id}
                  className="ev-tl-text-seg"
                  style={{ left: `${ls}%`, right: `${rs}%` }}
                  title={t.text}
                >
                  {t.text}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
