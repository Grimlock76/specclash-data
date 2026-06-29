import { useState, useRef, useCallback } from 'react'

export const FILTERS = {
  original: { label: 'Original', css: 'none' },
  vivid:    { label: 'Vivid',    css: 'brightness(1.05) saturate(1.6) contrast(1.1)' },
  moody:    { label: 'Moody',    css: 'contrast(1.25) saturate(0.75) brightness(0.88)' },
  bw:       { label: 'B&W',      css: 'grayscale(1) contrast(1.15)' },
  warm:     { label: 'Warm',     css: 'sepia(0.35) saturate(1.3) brightness(1.05)' },
  cool:     { label: 'Cool',     css: 'hue-rotate(18deg) saturate(1.15) brightness(1.02)' },
  vintage:  { label: 'Vintage',  css: 'sepia(0.55) contrast(1.1) brightness(0.92) saturate(0.85)' },
}

export default function useEditorState() {
  const [clip, setClip] = useState(null)
  const [trimStart, setTrimStart] = useState(0)
  const [trimEnd, setTrimEnd]     = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying]     = useState(false)
  const [muted, setMuted]             = useState(false)

  const [textOverlays, setTextOverlays]     = useState([])
  const [selectedTextId, setSelectedTextId] = useState(null)

  const [audioTrack, setAudioTrack] = useState(null)

  const [activeFilter, setActiveFilter] = useState('original')
  const [selectedTool, setSelectedTool] = useState('trim')

  const videoRef = useRef(null)
  const audioRef = useRef(null)

  const clearClip = useCallback(() => {
    setClip(null)
    setTrimStart(0)
    setTrimEnd(0)
    setCurrentTime(0)
    setIsPlaying(false)
    setTextOverlays([])
    setSelectedTextId(null)
    setAudioTrack(null)
    setActiveFilter('original')
    if (videoRef.current) { videoRef.current.src = ''; videoRef.current.load() }
    if (audioRef.current) { audioRef.current.src = ''; audioRef.current.load() }
  }, [])

  const loadVideo = useCallback((file) => {
    const url = URL.createObjectURL(file)
    const probe = document.createElement('video')
    probe.preload = 'metadata'
    probe.src = url
    probe.onloadedmetadata = () => {
      const dur = isFinite(probe.duration) ? probe.duration : 30
      setClip({ file, url, name: file.name, duration: dur })
      setTrimStart(0)
      setTrimEnd(dur)
      setCurrentTime(0)
      setIsPlaying(false)
      setTextOverlays([])
      setSelectedTextId(null)
      setAudioTrack(null)
      setActiveFilter('original')
    }
  }, [])

  const addText = useCallback(() => {
    const id = `t${Date.now()}`
    setTextOverlays(prev => [...prev, {
      id,
      text: 'Tap to edit',
      x: 50, y: 75,
      fontSize: 36,
      color: '#ffffff',
      bold: false,
      italic: false,
      startTime: 0,
      endTime: 5,
    }])
    setSelectedTextId(id)
    setSelectedTool('text')
  }, [])

  const updateText = useCallback((id, updates) => {
    setTextOverlays(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t))
  }, [])

  const deleteText = useCallback((id) => {
    setTextOverlays(prev => prev.filter(t => t.id !== id))
    setSelectedTextId(prev => prev === id ? null : prev)
  }, [])

  const loadAudio = useCallback((file) => {
    const url = URL.createObjectURL(file)
    setAudioTrack({ file, url, name: file.name, volume: 0.8, videoVolume: 1.0 })
  }, [])

  const updateAudio = useCallback((updates) => {
    setAudioTrack(prev => prev ? { ...prev, ...updates } : null)
  }, [])

  const removeAudio = useCallback(() => setAudioTrack(null), [])

  return {
    clip, loadVideo, clearClip,
    trimStart, setTrimStart,
    trimEnd, setTrimEnd,
    currentTime, setCurrentTime,
    isPlaying, setIsPlaying,
    muted, setMuted,
    videoRef, audioRef,
    textOverlays, selectedTextId, setSelectedTextId,
    addText, updateText, deleteText,
    audioTrack, loadAudio, updateAudio, removeAudio,
    activeFilter, setActiveFilter,
    selectedTool, setSelectedTool,
  }
}
