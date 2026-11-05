// The two walkthroughs. `sel` = element to spotlight (omit for a centred card).
// Steps whose element isn't on the page are skipped.
export const INTRO_STEPS = [
  { title: 'Welcome to Spec Clash', text: 'Pit any two cars against each other, spec for spec: power, torque, 0-100, fuel, weight, towing and price.' },
  { sel: '.slot-grid > :nth-child(1)', title: 'Pick your first car', text: 'Type a make or model in the search, or narrow it down with Body Type. Choose the trim and year, then hit LOAD.' },
  { sel: '.slot-grid > :nth-child(2)', title: 'Pick its rival', text: 'Do the same here for the car you want to clash it with. Each car gets its own colour: red for car 1, blue for car 2.' },
  { sel: '.slot-grid > :nth-child(1)', title: 'Trim details', text: 'Once a car is loaded, open Trim Details to see the full rundown, or tap view listings to find one for sale.' },
  { sel: '[data-tour="random"]', title: 'Can’t decide?', text: 'Hit Random for a surprise matchup. It’s a good way to find a fight you didn’t know you wanted.' },
  { title: 'Load two cars to keep going', text: 'Once both are loaded we’ll show you round the results: the winner, the full spec table and the animated CLASH.' },
]

export const RESULTS_STEPS = [
  { sel: '[data-tour="scorecard"]', title: 'Who wins', text: 'Each car scores points for the specs it wins, weighted by what matters most, so the car with the most wins doesn’t always take it. Highest score wins the clash. The tags show which specs each car won.' },
  { sel: '[data-tour="presets"]', title: 'Change what matters', text: 'Balanced weighs everything. Performance cares about power and pace, Economy about fuel and price. Watch the winner change.' },
  { sel: '[data-tour="toolbar"]', title: 'Show it off', text: '▶ Clash plays the animated face-off. ⬇ Card saves a story-size image for TikTok or Instagram. Δ % shows how far apart each spec is.' },
  { sel: '[data-tour="spectable"]', title: 'Every spec, side by side', text: 'The glowing number wins that row. Scroll down for engine, performance, fuel, size, towing and price.' },
  { sel: '[data-tour="share"]', title: 'Send it to a mate', text: 'Share copies a link straight to this matchup so they can see who wins and argue about it.' },
]

const KEY = { intro: 'sc_tour_done', results: 'sc_tour2_done' }
export const tourSeen = which => { try { return localStorage.getItem(KEY[which]) === '1' } catch { return true } }
export const markTourSeen = which => { try { localStorage.setItem(KEY[which], '1') } catch { /* private mode */ } }
