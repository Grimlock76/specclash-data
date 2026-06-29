import { useState, useRef, useCallback } from 'react'

const FILTER_FFMPEG = {
  vivid:   'eq=brightness=0.04:saturation=1.5:contrast=1.1',
  moody:   'eq=brightness=-0.09:saturation=0.75:contrast=1.25',
  bw:      'hue=s=0,eq=contrast=1.15',
  warm:    'eq=saturation=1.3:brightness=0.04,colortemperature=temperature=7500',
  cool:    'hue=h=18:s=1.0,eq=brightness=0.02',
  vintage: 'eq=brightness=-0.06:saturation=0.8:contrast=1.1',
}

function buildArgs({ trimStart, trimEnd, audioTrack, activeFilter, textOverlays }) {
  const dur = Math.max(0.1, trimEnd - trimStart)
  const hasMusic = !!audioTrack?.file
  const colorFf  = FILTER_FFMPEG[activeFilter]
  const hasVF    = !!colorFf || textOverlays.length > 0

  const args = [
    '-ss', String(trimStart),
    '-i', 'input_video',
    '-t', String(dur),
  ]
  if (hasMusic) args.push('-i', 'input_audio')

  if (hasVF || hasMusic) {
    const vChain = []
    if (colorFf) vChain.push(colorFf)
    textOverlays.forEach(t => {
      const safe = t.text.replace(/[':]/g, ' ')
      const yPos = Math.round((t.y / 100) * 1080)
      vChain.push(
        `drawtext=text='${safe}':x=(w-tw)/2:y=${yPos}:fontsize=${t.fontSize}:fontcolor=white:enable='between(t\\,${t.startTime}\\,${t.endTime})'`
      )
    })

    const parts = []
    if (vChain.length) parts.push(`[0:v]${vChain.join(',')}[vout]`)
    if (hasMusic) {
      const vidVol = audioTrack.videoVolume ?? 1.0
      parts.push(
        `[0:a]volume=${vidVol}[av];[1:a]volume=${audioTrack.volume ?? 0.8}[am];[av][am]amix=inputs=2:duration=first[aout]`
      )
    }

    if (parts.length) {
      args.push('-filter_complex', parts.join(';'))
      args.push('-map', vChain.length ? '[vout]' : '0:v')
      args.push('-map', hasMusic ? '[aout]' : '0:a?')
    }
  }

  args.push(
    '-c:v', 'libx264', '-preset', 'ultrafast', '-crf', '22',
    '-c:a', 'aac', '-b:a', '128k',
    '-movflags', '+faststart',
    'output.mp4'
  )
  return args
}

export default function useFFmpeg() {
  const [phase, setPhase]     = useState('idle')   // idle | loading | processing | done | error
  const [progress, setProgress] = useState(0)
  const [errMsg, setErrMsg]   = useState('')
  const [outputUrl, setOutputUrl] = useState(null)
  const ffRef = useRef(null)

  const load = useCallback(async () => {
    if (ffRef.current) return true
    setPhase('loading')
    setErrMsg('')
    try {
      const { FFmpeg }    = await import('@ffmpeg/ffmpeg')
      const { toBlobURL } = await import('@ffmpeg/util')

      const ff = new FFmpeg()
      ff.on('progress', ({ progress: p }) => setProgress(Math.round(p * 100)))

      const base = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
      await ff.load({
        coreURL: await toBlobURL(`${base}/ffmpeg-core.js`,   'text/javascript'),
        wasmURL: await toBlobURL(`${base}/ffmpeg-core.wasm`, 'application/wasm'),
      })

      ffRef.current = ff
      return true
    } catch (e) {
      setPhase('error')
      setErrMsg(`Failed to load FFmpeg: ${e.message}`)
      return false
    }
  }, [])

  const exportVideo = useCallback(async ({ clip, trimStart, trimEnd, audioTrack, activeFilter, textOverlays }) => {
    setPhase('loading')
    setProgress(0)
    setOutputUrl(null)
    setErrMsg('')

    const ok = await load()
    if (!ok) return

    setPhase('processing')
    try {
      const { fetchFile } = await import('@ffmpeg/util')
      const ff = ffRef.current

      await ff.writeFile('input_video', await fetchFile(clip.file))
      if (audioTrack?.file) {
        await ff.writeFile('input_audio', await fetchFile(audioTrack.file))
      }

      const args = buildArgs({ trimStart, trimEnd, audioTrack, activeFilter, textOverlays })
      await ff.exec(args)

      const data = await ff.readFile('output.mp4')
      const blob = new Blob([data.buffer], { type: 'video/mp4' })
      setOutputUrl(URL.createObjectURL(blob))
      setPhase('done')

      // cleanup
      await ff.deleteFile('input_video').catch(() => {})
      await ff.deleteFile('input_audio').catch(() => {})
      await ff.deleteFile('output.mp4').catch(() => {})
    } catch (e) {
      setPhase('error')
      setErrMsg(e.message)
    }
  }, [load])

  const reset = useCallback(() => {
    setPhase('idle')
    setProgress(0)
    setOutputUrl(null)
    setErrMsg('')
  }, [])

  return { phase, progress, errMsg, outputUrl, exportVideo, reset }
}
