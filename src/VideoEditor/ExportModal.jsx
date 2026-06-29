import { useEffect } from 'react'

const PHASE_LABELS = {
  loading:    'Loading FFmpeg (~30 MB)…',
  processing: 'Rendering your video…',
  done:       'Export complete!',
  error:      '',
}

export default function ExportModal({ state, ffmpeg, onClose }) {
  const { clip, trimStart, trimEnd, audioTrack, activeFilter, textOverlays } = state
  const { phase, progress, errMsg, outputUrl, exportVideo, reset } = ffmpeg

  useEffect(() => {
    exportVideo({ clip, trimStart, trimEnd, audioTrack, activeFilter, textOverlays })
    return () => reset()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const isDone       = phase === 'done'
  const isError      = phase === 'error'
  const isProcessing = phase === 'loading' || phase === 'processing'

  const filename = clip?.name?.replace(/\.[^.]+$/, '') + '_edited.mp4'

  return (
    <div className="ev-modal-backdrop" onClick={e => e.target === e.currentTarget && !isProcessing && onClose()}>
      <div className="ev-export-card">
        <h2 className="ev-export-card-title">
          {isDone ? 'Ready to Download' : isError ? 'Export Failed' : 'Exporting…'}
        </h2>

        {isProcessing && (
          <>
            <p className="ev-export-status">{PHASE_LABELS[phase]}</p>
            <div className="ev-progress-bar">
              <div className="ev-progress-fill" style={{ width: `${phase === 'loading' ? 100 : progress}%` }} />
            </div>
            {phase === 'processing' && (
              <p className="ev-export-status">{progress}% complete</p>
            )}
          </>
        )}

        {isDone && (
          <>
            <p className="ev-export-status">Your video has been processed in-browser.<br />No data was uploaded to any server.</p>
            <a
              href={outputUrl}
              download={filename}
              className="ev-download-btn"
            >
              ↓ Download MP4
            </a>
            <button className="ev-cancel-btn" onClick={onClose}>Done</button>
          </>
        )}

        {isError && (
          <>
            <p className="ev-export-error">{errMsg}</p>
            <p className="ev-export-status" style={{ fontSize: 11, color: '#444' }}>
              Make sure your browser supports SharedArrayBuffer and you have a stable internet connection (FFmpeg loads from CDN).
            </p>
            <button className="ev-cancel-btn" onClick={onClose}>Close</button>
          </>
        )}
      </div>
    </div>
  )
}
