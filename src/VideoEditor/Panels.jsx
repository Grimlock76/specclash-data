import { useRef } from 'react'
import { FILTERS } from './useEditorState.js'

function fmt(s) {
  const t   = Math.max(0, Number(s) || 0)
  const m   = Math.floor(t / 60)
  const sec = (t % 60).toFixed(1)
  return `${m}:${sec.padStart(4, '0')}`
}

function parseTime(str) {
  const [min, sec] = String(str).split(':')
  return (parseFloat(min) || 0) * 60 + (parseFloat(sec) || 0)
}

/* ── Trim ──────────────────────────────────────────────────────────── */

function TrimPanel({ state }) {
  const { clip, trimStart, setTrimStart, trimEnd, setTrimEnd, videoRef, setCurrentTime } = state

  const apply = (side, val) => {
    const t = Math.max(0, Math.min(clip.duration, parseTime(val)))
    if (side === 'start') {
      const next = Math.min(t, trimEnd - 0.1)
      setTrimStart(next)
      if (videoRef.current) videoRef.current.currentTime = next
      setCurrentTime(next)
    } else {
      const next = Math.max(t, trimStart + 0.1)
      setTrimEnd(next)
      if (videoRef.current) videoRef.current.currentTime = next
      setCurrentTime(next)
    }
  }

  const dur = trimEnd - trimStart

  return (
    <div className="ev-panel-section">
      <p className="ev-panel-title">Trim</p>
      <div className="ev-trim-times">
        <div className="ev-trim-field">
          <span className="ev-trim-label">In</span>
          <input
            className="ev-trim-input"
            defaultValue={fmt(trimStart)}
            key={`in-${trimStart.toFixed(1)}`}
            onBlur={e  => apply('start', e.target.value)}
            onKeyDown={e => e.key === 'Enter' && apply('start', e.target.value)}
          />
        </div>
        <div className="ev-trim-field">
          <span className="ev-trim-label">Out</span>
          <input
            className="ev-trim-input"
            defaultValue={fmt(trimEnd)}
            key={`out-${trimEnd.toFixed(1)}`}
            onBlur={e  => apply('end', e.target.value)}
            onKeyDown={e => e.key === 'Enter' && apply('end', e.target.value)}
          />
        </div>
      </div>
      <div className="ev-info-box">
        Duration: <strong>{fmt(dur)}</strong> &nbsp;·&nbsp; Total: {fmt(clip?.duration ?? 0)}
      </div>
      <p className="ev-panel-title" style={{ marginTop: 8 }}>Drag the handles on the timeline to trim</p>
    </div>
  )
}

/* ── Text ──────────────────────────────────────────────────────────── */

function TextPanel({ state }) {
  const {
    clip,
    textOverlays, selectedTextId, setSelectedTextId,
    addText, updateText, deleteText,
  } = state

  const selected = textOverlays.find(t => t.id === selectedTextId)

  return (
    <div className="ev-panel-section">
      <p className="ev-panel-title">Text Overlays</p>

      <div className="ev-text-list">
        {textOverlays.map(t => (
          <div
            key={t.id}
            className={`ev-text-item${t.id === selectedTextId ? ' active' : ''}`}
            onClick={() => setSelectedTextId(t.id)}
          >
            <span className="ev-text-item-label">{t.text || '(empty)'}</span>
            <button
              className="ev-text-del"
              onClick={e => { e.stopPropagation(); deleteText(t.id) }}
              title="Delete"
            >×</button>
          </div>
        ))}
      </div>

      <button className="ev-add-btn" onClick={addText}>+ Add Text</button>

      {selected && (
        <div className="ev-text-editor">
          <textarea
            className="ev-text-input"
            rows={2}
            value={selected.text}
            onChange={e => updateText(selected.id, { text: e.target.value })}
            placeholder="Enter text…"
          />

          <div className="ev-text-style-row">
            <button
              className={`ev-style-btn${selected.bold ? ' active' : ''}`}
              onClick={() => updateText(selected.id, { bold: !selected.bold })}
              title="Bold"
            ><b>B</b></button>

            <button
              className={`ev-style-btn${selected.italic ? ' active' : ''}`}
              onClick={() => updateText(selected.id, { italic: !selected.italic })}
              title="Italic"
            ><i>I</i></button>

            <input
              type="color"
              className="ev-color-input"
              value={selected.color}
              onChange={e => updateText(selected.id, { color: e.target.value })}
              title="Text colour"
            />

            <input
              type="number"
              className="ev-size-input"
              value={selected.fontSize}
              min={12} max={120} step={2}
              onChange={e => updateText(selected.id, { fontSize: Number(e.target.value) })}
              title="Font size"
            />
            <span style={{ fontSize: 10, color: '#555', letterSpacing: 1 }}>px</span>
          </div>

          <p className="ev-panel-title" style={{ margin: '4px 0 0' }}>Show from / to</p>
          <div className="ev-time-range">
            <input
              className="ev-trim-input"
              type="number"
              min={0} max={clip?.duration ?? 30} step={0.1}
              value={selected.startTime.toFixed(1)}
              onChange={e => updateText(selected.id, { startTime: Number(e.target.value) })}
              title="Start time (s)"
            />
            <input
              className="ev-trim-input"
              type="number"
              min={0} max={clip?.duration ?? 30} step={0.1}
              value={selected.endTime.toFixed(1)}
              onChange={e => updateText(selected.id, { endTime: Number(e.target.value) })}
              title="End time (s)"
            />
          </div>
          <p style={{ fontSize: 10, color: '#444', letterSpacing: 1, textAlign: 'center' }}>
            Drag text on the preview to reposition
          </p>
        </div>
      )}

      {!selected && textOverlays.length > 0 && (
        <p style={{ fontSize: 11, color: '#444', letterSpacing: 1, textAlign: 'center' }}>
          Click an overlay to edit it
        </p>
      )}
    </div>
  )
}

/* ── Music ─────────────────────────────────────────────────────────── */

function MusicPanel({ state }) {
  const { audioTrack, loadAudio, updateAudio, removeAudio } = state
  const inputRef = useRef(null)

  const handleFiles = (files) => {
    const audio = Array.from(files).find(f => f.type.startsWith('audio/') || /\.(mp3|m4a|ogg|wav|aac|flac)$/i.test(f.name))
    if (audio) loadAudio(audio)
  }

  const onDrop = (e) => { e.preventDefault(); handleFiles(e.dataTransfer.files) }

  return (
    <div className="ev-panel-section">
      <p className="ev-panel-title">Background Music</p>

      {!audioTrack ? (
        <div
          className="ev-music-drop"
          onDragOver={e => e.preventDefault()}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
        >
          <span className="ev-music-icon">♫</span>
          <span className="ev-music-drop-label">Drop audio or click to browse</span>
          <span style={{ fontSize: 11, color: '#3a3a3a', letterSpacing: 0.5 }}>MP3, M4A, WAV, OGG</span>
        </div>
      ) : (
        <>
          <div className="ev-music-loaded">
            <span className="ev-music-icon-sm">♫</span>
            <span className="ev-music-name" title={audioTrack.name}>{audioTrack.name}</span>
            <button className="ev-music-remove" onClick={removeAudio} title="Remove">×</button>
          </div>

          <div className="ev-vol-row">
            <div className="ev-vol-label">
              <span className="ev-vol-name">Music volume</span>
              <span className="ev-vol-val">{Math.round((audioTrack.volume ?? 0.8) * 100)}%</span>
            </div>
            <input
              type="range"
              className="ev-range-input"
              min={0} max={1} step={0.05}
              value={audioTrack.volume ?? 0.8}
              onChange={e => updateAudio({ volume: Number(e.target.value) })}
            />
          </div>

          <div className="ev-vol-row">
            <div className="ev-vol-label">
              <span className="ev-vol-name">Original audio</span>
              <span className="ev-vol-val">{Math.round((audioTrack.videoVolume ?? 1.0) * 100)}%</span>
            </div>
            <input
              type="range"
              className="ev-range-input"
              min={0} max={1} step={0.05}
              value={audioTrack.videoVolume ?? 1.0}
              onChange={e => updateAudio({ videoVolume: Number(e.target.value) })}
            />
          </div>
        </>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="audio/*,.mp3,.m4a,.ogg,.wav,.aac,.flac"
        style={{ display: 'none' }}
        onChange={e => handleFiles(e.target.files)}
      />
    </div>
  )
}

/* ── Filters ───────────────────────────────────────────────────────── */

const FILTER_STYLES = {
  original: { filter: 'none',                                                background: 'linear-gradient(135deg,#6b48ff,#ff6b35,#4bc8ff)' },
  vivid:    { filter: 'brightness(1.05) saturate(1.6) contrast(1.1)',        background: 'linear-gradient(135deg,#ff3366,#ffcc00,#33cc55)' },
  moody:    { filter: 'contrast(1.25) saturate(0.75) brightness(0.88)',      background: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)' },
  bw:       { filter: 'grayscale(1) contrast(1.15)',                         background: 'linear-gradient(135deg,#888,#333,#aaa)' },
  warm:     { filter: 'sepia(0.35) saturate(1.3) brightness(1.05)',          background: 'linear-gradient(135deg,#ff9a3c,#ff6a00,#ffce47)' },
  cool:     { filter: 'hue-rotate(18deg) saturate(1.15) brightness(1.02)',   background: 'linear-gradient(135deg,#43c6ac,#4ca1af,#c4e0e5)' },
  vintage:  { filter: 'sepia(0.55) contrast(1.1) brightness(0.92) saturate(0.85)', background: 'linear-gradient(135deg,#c9a87c,#8b6348,#d4a96a)' },
}

function FilterPanel({ state }) {
  const { activeFilter, setActiveFilter } = state

  return (
    <div className="ev-panel-section">
      <p className="ev-panel-title">Filters</p>
      <div className="ev-filter-grid">
        {Object.entries(FILTERS).map(([id, { label }]) => {
          const style = FILTER_STYLES[id] ?? FILTER_STYLES.original
          return (
            <div
              key={id}
              className={`ev-filter-item${activeFilter === id ? ' active' : ''}`}
              onClick={() => setActiveFilter(id)}
            >
              <div
                className="ev-filter-preview"
                style={{ background: style.background, filter: style.filter }}
              />
              <div className="ev-filter-name">{label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Root panel switcher ─────────────────────────────────────────── */

export default function Panels({ state }) {
  const { selectedTool } = state

  return (
    <div className="ev-panel">
      {selectedTool === 'trim'   && <TrimPanel   state={state} />}
      {selectedTool === 'text'   && <TextPanel   state={state} />}
      {selectedTool === 'music'  && <MusicPanel  state={state} />}
      {selectedTool === 'filter' && <FilterPanel state={state} />}
    </div>
  )
}
