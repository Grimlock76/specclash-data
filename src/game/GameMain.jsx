import { GameProvider, useGame } from './context/GameContext.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import WorldMapScreen from './screens/WorldMapScreen.jsx'
import BattleScreen from './screens/BattleScreen.jsx'
import RosterScreen from './screens/RosterScreen.jsx'
import UpgradeScreen from './screens/UpgradeScreen.jsx'

function ScreenRouter() {
  const { state } = useGame()
  switch (state.screen) {
    case 'home':     return <HomeScreen />
    case 'worldmap': return <WorldMapScreen />
    case 'battle':   return <BattleScreen />
    case 'roster':   return <RosterScreen />
    case 'upgrade':  return <UpgradeScreen />
    default:         return <HomeScreen />
  }
}

export default function GameMain() {
  return (
    <GameProvider>
      <ScreenRouter />
    </GameProvider>
  )
}
