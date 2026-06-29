import { useState } from 'react'
import './editor.css'
import useEditorState from './useEditorState.js'
import useFFmpeg      from './useFFmpeg.js'
import UploadZone     from './UploadZone.jsx'
import VideoPreview   from './VideoPreview.jsx'
import Timeline       from './Timeline.jsx'
import Panels         from './Panels.jsx'
import ExportModal    from './ExportModal.jsx'

const TOOLS = [
  { id: 'trim',   icon: '✂',  label: 'Trim'   },
  { id: 'text',   icon: 'T',  label: 'Text'   },
  { id: 'music',  icon: '♫',  label: 'Music'  },
  { id: 'filter', icon: '✨', label: 'Filter' },
]

export default function VideoEditorApp({ onBack }) {
  const state  = useEditorState()
  const ffmpeg = useFFmpeg()
  const [showExport, setShowExport] = useState(false)

  if (!state.clip) {
    return <UploadZone onUpload={state.loadVideo} onBack={onBack} />
  }

  const openExport = () => {
    ffmpeg.reset()
    setShowExport(true)
  }

  return (
    <div className="ev-editor">
      {/* Header */}
      <div className="ev-header">
        <div className="ev-header-left">
          <span className="ev-logo-sm">
            TikClip <span style={{ color: 'var(--accent)' }}>Editor</span>
          </span>
          <nav className="ev-tools">
            {TOOLS.map(t => (
              <button
                key={t.id}
                className={`ev-tool-tab${state.selectedTool === t.id ? ' active' : ''}`}
                onClick={() => state.setSelectedTool(t.id)}
              >
                <span>{t.icon}</span> {t.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="ev-header-right">
          {onBack && (
            <button className="ev-icon-btn" onClick={onBack} title="Back to Spec Clash">←</button>
          )}
          <button
            className="ev-icon-btn"
            title="Load new video"
            onClick={() => {
              if (confirm('Load a new video? Current edits will be lost.')) state.clearClip()
            }}
          >+</button>
          <button className="ev-export-btn" onClick={openExport}>Export</button>
        </div>
      </div>

      {/* Body */}
      <div className="ev-body">
        <div className="ev-preview-wrap">
          <VideoPreview state={state} />
          <Timeline     state={state} />
        </div>
        <Panels state={state} />
      </div>

      {showExport && (
        <ExportModal
          state={state}
          ffmpeg={ffmpeg}
          onClose={() => setShowExport(false)}
        />
      )}
    </div>
  )
}
