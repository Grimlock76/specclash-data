import { useState, useRef } from 'react'

export default function UploadZone({ onUpload, onBack }) {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const handleFiles = (files) => {
    const video = Array.from(files).find(f => f.type.startsWith('video/'))
    if (video) onUpload(video)
  }

  const onDragOver  = (e) => { e.preventDefault(); setDragging(true) }
  const onDragLeave = ()  => setDragging(false)
  const onDrop      = (e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files) }
  const onClick     = ()  => inputRef.current?.click()
  const onChange    = (e) => handleFiles(e.target.files)

  return (
    <div className="ev-app ev-upload">
      <div className="ev-upload-header">
        <div className="ev-logo">
          TikClip <span className="ev-logo-accent">Editor</span>
        </div>
        {onBack && (
          <button className="ev-back-btn" onClick={onBack}>
            ← Spec Clash
          </button>
        )}
      </div>

      <div
        className={`ev-dropzone${dragging ? ' ev-dropzone--drag' : ''}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={onClick}
      >
        <div className="ev-dropzone-icon">▶</div>
        <p className="ev-dropzone-title">Drop your video here</p>
        <p className="ev-dropzone-sub">or click to browse · MP4, MOV, WebM supported</p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        style={{ display: 'none' }}
        onChange={onChange}
      />
    </div>
  )
}
