import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GameMain from './GameMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameMain />
  </StrictMode>,
)
