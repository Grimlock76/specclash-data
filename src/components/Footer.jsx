import { useState } from 'react'

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <footer style={{ padding: '26px 24px 44px', maxWidth: 760 }}>
      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.55, margin: 0 }}>
        Specifications are compiled from public sources and may contain errors or omissions —
        always verify details with the manufacturer or a licensed dealer before making a purchase
        decision. “Price (current est.)” figures are indicative estimates only, not valuations,
        appraisals or offers.
      </p>
      <button className="no-print" onClick={() => setShowPrivacy(s => !s)} style={{
        background: 'none', border: 'none', padding: 0, marginTop: 10,
        color: '#3a3a3a', fontSize: 12, cursor: 'pointer',
        textDecoration: 'underline', textUnderlineOffset: 3
      }}>Privacy</button>
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
