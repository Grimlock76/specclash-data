import { ELEMENTS } from '../data/elements.js'

export default function ElementBadge({ element, size = 'md' }) {
  const el = ELEMENTS[element]
  if (!el) return null
  const sizes = { sm: { fontSize: 11, padding: '2px 7px' }, md: { fontSize: 13, padding: '3px 10px' }, lg: { fontSize: 15, padding: '5px 14px' } }
  const s = sizes[size] || sizes.md
  return (
    <span style={{
      background: el.color + '22',
      border: `1px solid ${el.color}55`,
      color: el.color,
      borderRadius: 20,
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      ...s,
    }}>
      <span>{el.icon}</span>
      <span>{el.name}</span>
    </span>
  )
}
