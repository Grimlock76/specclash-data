// Has this browser already seen the first-visit tour?
export const tourSeen = () => { try { return localStorage.getItem('sc_tour_done') === '1' } catch { return true } }
