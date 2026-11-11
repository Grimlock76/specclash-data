import { pickArchetype } from '../utils/archetype.js'
import { DARK, VIEWBOX, WHEELS, shapeFor, spokePath } from '../utils/silhouettePaths.js'

// Side-profile silhouette for every make/model — the v2 Spec-Clash lineup.
// All shapes are original vector art (see utils/silhouettePaths.js), tinted
// with `color` (Car 1 red, Car 2 blue). Front of the car faces right.

function Part({ e }) {
  return (
    <path d={e.d}
      fill={e.f ? (e.f === 'body' ? 'currentColor' : e.f) : 'none'}
      fillOpacity={e.f ? e.o : undefined}
      stroke={e.s || undefined} strokeOpacity={e.s ? e.so : undefined}
      strokeWidth={e.s ? (e.w || 1) : undefined}
      strokeLinecap={e.cap} strokeLinejoin={e.join}
      strokeDasharray={e.dash ? e.dash.join(' ') : undefined} />
  )
}

function Wheel({ x, y, k, s = 1 }) {
  const W = WHEELS[k]
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <circle r={W.r} fill="#141414" />
      {W.tread && <circle r={W.r - 1.5} fill="none" stroke="#3a3a3a" strokeWidth="3" strokeDasharray="3 3" />}
      <circle r={W.rim} fill="#2b2b2b" />
      <path d={spokePath(W.spoke)} stroke="#9a9a9a" strokeWidth={W.sw} fill="none" />
      <circle r={W.hub} fill="#9a9a9a" />
    </g>
  )
}

export default function CarSilhouette({ archetype, bodyType, color = '#333', height = 58 }) {
  const S = shapeFor(archetype || pickArchetype(bodyType))
  const [scx, scy, srx] = S.shadow
  return (
    <svg viewBox={`${VIEWBOX.x} ${VIEWBOX.y} ${VIEWBOX.w} ${VIEWBOX.h}`} height={height} width="100%"
      preserveAspectRatio="xMidYMax meet"
      style={{ display: 'block', color, transition: 'color 0.3s' }} aria-hidden>
      <g transform={`translate(${S.dx},${S.dy})`}>
        <ellipse cx={scx} cy={scy} rx={srx} ry="3" fill="#000" opacity="0.5" />
        <g transform={S.bodyDy ? `translate(0,${S.bodyDy})` : undefined}>
          {(S.pre || []).map((e, i) => <Part key={'p' + i} e={e} />)}
          <path d={S.body} fill="currentColor" />
          {S.glass && <path d={S.glass} fill={DARK} />}
          {(S.post || []).map((e, i) => <Part key={'q' + i} e={e} />)}
        </g>
        {S.wheels.map((w, i) => <Wheel key={i} {...w} />)}
      </g>
    </svg>
  )
}
