import { useEffect, useRef, useCallback } from 'react'
import { FILTERS } from './useEditorState.js'

function fmt(s) {
  const t = Math.max(0, s)
  const m = Math.floor(t / 60)
  const sec = Math.floor(t % 60)
  const ms  = Math.floor((t % 1) * 10)
  return `${m}:${String(sec).padStart(2, '0')}.${ms}`
}

function DraggableText({ overlay, containerRef, isSelected, onClick, onUpdate }) {
  const handlePointerDown = useCallback((e) => {
    e.stopPropagation()
    onClick(overlay.id)
    const container = containerRef.current
    if (!container) return
    const rect   = container.getBoundingClientRect()
    const startX = e.clientX
    const startY = e.clientY
    const px0    = overlay.x
    const py0    = overlay.y

    const onMove = (me) => {
      const dx = ((me.clientX - startX) / rect.width)  * 100
      const dy = ((me.clientY - startY) / rect.height) * 100
      onUpdate(overlay.id, {
        x: Math.max(3, Math.min(97, px0 + dx)),
        y: Math.max(3, Math.min(97, py0 + dy)),
      })
    }
    const onUp = () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerup',   onUp)
    }
    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerup',   onUp)
  }, [overlay, containerRef, onClick, onUpdate])

  return (
    <div
      className={`ev-text-node${isSelected ? ' selected' : ''}`}
      style={{
        left:       `${overlay.x}%`,
        top:        `${overlay.y}%`,
        fontSize:   overlay.fontSize,
        color:      overlay.color,
        fontWeight: overlay.bold   ? '700' : '400',
        fontStyle:  overlay.italic ? 'italic' : 'normal',
      }}
      onPointerDown={handlePointerDown}
    >
      {overlay.text || ' '}
    </div>
  )
}

export default function VideoPreview({ state }) {
  const {
    clip, trimStart, trimEnd,
    currentTime, setCurrentTime,
    isPlaying, setIsPlaying,
    muted, setMuted,
    videoRef, audioRef,
    textOverlays, selectedTextId, setSelectedTextId,
    updateText,
    activeFilter, selectedTool,
    audioTrack,
  } = state

  const containerRef = useRef(null)
  const seekingRef   = useRef(false)

  const filterCss = FILTERS[activeFilter]?.css ?? 'none'

  useEffect(() => {
    const vid = videoRef.current
    if (!vid || !clip) return
    vid.src = clip.url
    vid.currentTime = trimStart
  }, [clip]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    const onTime = () => {
      if (seekingRef.current) return
      const t = vid.currentTime
      setCurrentTime(t)
      if (t >= trimEnd) {
        vid.pause()
        vid.currentTime = trimStart
        setIsPlaying(false)
        setCurrentTime(trimStart)
      }
    }
    vid.addEventListener('timeupdate', onTime)
    return () => vid.removeEventListener('timeupdate', onTime)
  }, [trimEnd, trimStart, setCurrentTime, setIsPlaying])

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    isPlaying ? vid.play().catch(() => {}) : vid.pause()
  }, [isPlaying])

  useEffect(() => {
    const vid = videoRef.current
    if (vid) vid.muted = muted
  }, [muted])

  // Sync background audio track
  useEffect(() => {
    const aud = audioRef.current
    if (!aud) return
    if (audioTrack?.url) {
      aud.src    = audioTrack.url
      aud.volume = audioTrack.volume ?? 0.8
      aud.loop   = true
      if (isPlaying) aud.play().catch(() => {})
      else aud.pause()
    } else {
      aud.pause()
      aud.src = ''
    }
  }, [audioTrack, isPlaying])

  const togglePlay = () => {
    const vid = videoRef.current
    if (!vid) return
    if (currentTime >= trimEnd) {
      vid.currentTime = trimStart
      setCurrentTime(trimStart)
    }
    setIsPlaying(p => !p)
  }

  const onSeekChange = (e) => {
    const t = Number(e.target.value)
    seekingRef.current = true
    setCurrentTime(t)
    if (videoRef.current) videoRef.current.currentTime = t
    setTimeout(() => { seekingRef.current = false }, 50)
  }

  const visibleTexts = textOverlays.filter(
    t => currentTime >= t.startTime && currentTime <= t.endTime
  )
  const isTextTool = selectedTool === 'text'

  return (
    <div className="ev-preview-wrap">
      <div className="ev-preview-stage">
        <div className="ev-preview-container" ref={containerRef}>
          <video
            ref={videoRef}
            className="ev-preview-video"
            style={{ filter: filterCss === 'none' ? undefined : filterCss }}
            playsInline
            preload="metadata"
          />
          <div
            className={`ev-text-overlay${isTextTool ? ' interactive' : ''}`}
            onClick={() => isTextTool && setSelectedTextId(null)}
          >
            {visibleTexts.map(t => (
              <DraggableText
                key={t.id}
                overlay={t}
                containerRef={containerRef}
                isSelected={t.id === selectedTextId}
                onClick={setSelectedTextId}
                onUpdate={updateText}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="ev-controls">
        <button className="ev-play-btn" onClick={togglePlay}>
          {isPlaying ? '⏸' : '▶'}
        </button>

        <input
          type="range"
          className="ev-seek"
          min={trimStart}
          max={trimEnd}
          step={0.01}
          value={currentTime}
          onChange={onSeekChange}
        />

        <span className="ev-time">{fmt(currentTime)} / {fmt(trimEnd - trimStart)}</span>

        <button className="ev-mute-btn" onClick={() => setMuted(m => !m)}>
          {muted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* hidden audio element for background music */}
      <audio ref={audioRef} style={{ display: 'none' }} />
    </div>
  )
}
