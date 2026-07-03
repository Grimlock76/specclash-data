import { pickArchetype } from '../utils/archetype.js'
import { DARK, poly, PATHS } from '../utils/silhouettePaths.js'

// Stylised side-profile silhouettes — the "image slot" for every make/model.
// All paths are hand-authored original vector art (NOT traced from photos),
// so there is no image licensing or copyright exposure. Tinted via `color`.
// viewBox 200x76, ground y=64, front of car faces right.
// Each archetype = body (currentColor) + windows (punched dark) + lite
// (head/tail lights, lightened) + deco (body-coloured accents) + dark
// (dark accents) + rimmed wheels + ground shadow.

function Wheel({ cx, r }) {
  return (
    <>
      <circle cx={cx} cy="64" r={r} />
      <circle cx={cx} cy="64" r={r - 4} fill={DARK} />
      <circle cx={cx} cy="64" r={r - 7} />
    </>
  )
}

export default function CarSilhouette({ archetype, bodyType, color = '#333', height = 52 }) {
  const key = archetype || pickArchetype(bodyType)
  const { body, windows, lite = [], deco = [], dark = [] } = PATHS[key] || PATHS.sedanModern
  const wheelR = /fourWheelDriveBox|uteDualcab/.test(key) ? 10.5 : 9.5
  return (
    <svg viewBox="0 0 200 76" height={height} width="100%"
      style={{ display: 'block', color, transition: 'color 0.3s' }} aria-hidden>
      <ellipse cx="100" cy="72" rx="92" ry="2.5" fill="#000" opacity="0.5" />
      <g fill="currentColor">
        {deco.length > 0 && <path d={deco.map(poly).join(' ')} />}
        <path d={body} />
        <path d={windows.map(poly).join(' ')} fill={DARK} />
        {dark.length > 0 && <path d={dark.map(poly).join(' ')} fill={DARK} />}
        {lite.length > 0 && <path d={lite.map(poly).join(' ')} fill="#fff" opacity="0.4" />}
        <Wheel cx={48} r={wheelR} />
        <Wheel cx={152} r={wheelR} />
      </g>
    </svg>
  )
}
