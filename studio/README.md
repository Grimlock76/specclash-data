# Spec-Clash Studio

TikTok content tools for @specclash05. Not part of the live app build: nothing in this folder is bundled or deployed to spec-clash.vercel.app.

## What's here

- `index.html`: **Spec-Clash Studio**, the animated 9:16 matchup player. Fill in two cars, hit play, screen-record. Slow fades, winning stats glow in the make's colour (Holden red, Ford blue), rounds, story cards and a winner outro. Open it straight in a browser; edits are remembered in that browser only.
- `decks/`: the four tap-through matchup decks (W1 vs GT F 351, SS-V Redline vs XR8, Caprice V 6.0 vs 6.2, Patrol Y63 vs LC300). Their source data is in `scripts/carousels/*.json`.

## Originals

These were copied from the claude.ai artifacts on 31 Oct 2026 so there's a backup outside the artifact service:

- Studio: https://claude.ai/code/artifact/fb88eea6-d1f3-4e59-988b-f839348cc6bf
- W1 vs GT F 351: https://claude.ai/code/artifact/4690bc33-a519-4a36-bf89-3fa520cbec59
- SS-V Redline vs XR8: https://claude.ai/code/artifact/5166e6ea-2cd4-4b02-8727-814bb36cc4b6
- Caprice V 6.0 vs 6.2: https://claude.ai/code/artifact/bc142302-e02a-45b0-9566-c52e6110281e
- Patrol vs LC300: https://claude.ai/code/artifact/a574cc68-4444-4890-9775-bb317c2e1ce2

If you change one side, copy it to the other so they don't drift.

## Spec rules

0-100 times can be manufacturer-claimed or published review figures (Drive, WhichCar, CarsGuide testing). Everything else should match Carsales / CarsGuide. Presets marked "from memory" in Studio need checking before posting.
