import { useState } from 'react'
import { AFFILIATE_ACTIVE } from '../utils/listings.js'

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <footer style={{ padding: '26px 24px 44px', maxWidth: 760 }}>
      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.55, margin: 0 }}>
        Specifications are compiled from public sources and may contain errors or omissions —
        always verify details with the manufacturer or a licensed dealer before making a purchase
        decision. “Price (current est.)” figures are indicative estimates only, not valuations,
        appraisals or offers.
        {AFFILIATE_ACTIVE && ' Listing links are affiliate links — Spec Clash may earn a commission from purchases made through them, at no cost to you.'}
      </p>
      <div className="no-print" style={{ display: 'flex', gap: 16, marginTop: 10 }}>
        <a href="/vs/" style={{ color: '#3a3a3a', fontSize: 12, textDecoration: 'underline', textUnderlineOffset: 3 }}>
          Browse popular comparisons
        </a>
        <button onClick={() => setShowPrivacy(s => !s)} style={{
          background: 'none', border: 'none', padding: 0,
          color: '#3a3a3a', fontSize: 12, cursor: 'pointer',
          textDecoration: 'underline', textUnderlineOffset: 3
        }}>Privacy</button>
      </div>
      {showPrivacy && (
        <p className="no-print" style={{ color: '#333', fontSize: 12, lineHeight: 1.55, marginTop: 8 }}>
          Spec Clash uses cookieless analytics (Vercel Analytics) to count visits — no cookies,
          no cross-site tracking, no ads. Searches that return no results are logged anonymously
          (the search text only) so catalogue gaps can be filled. Your comparisons, settings and
          Pro status live in your browser&apos;s local storage and never leave your device.
        </p>
      )}
    </footer>
  )
}
