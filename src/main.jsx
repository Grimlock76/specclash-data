import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'
import VideoEditorApp from './VideoEditor/index.jsx'

function Root() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (hash.startsWith('#/editor')) {
    return <VideoEditorApp onBack={() => { window.location.hash = '' }} />
  }
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
    <Analytics />
  </StrictMode>,
)
