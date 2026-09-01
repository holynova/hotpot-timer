# Design QA

- Source visual truth: `/tmp/tra-original-transition-fine.png`, a 10 fps contact sheet sampled from the supplied 2100×720 TRA countdown video.
- Implementation evidence: `/tmp/tra-source-implementation-compare.jpg`, `/tmp/tra-final-transition-early.jpg`, `/tmp/tra-final-transition-middle.jpg`, `/tmp/tra-final-transition-late.jpg`, and `/tmp/tra-final-mobile.jpg`.
- Desktop viewport: 1280×1100 for the focused transition captures; the deliverable preview was restored to 1280×720.
- Mobile viewport: 390×844.
- Tested state: countdown 10 → 9, with the numeric value changing before the word label; A–Z sequence with 26 steps and A → B manual transform.

## Full-view comparison

The source and implementation are compared together in `/tmp/tra-source-implementation-compare.jpg`. The source occupies the upper sequence and the implementation occupies the lower focused sequence. The surrounding control panel is intentionally retained as the tool UI; the comparison focuses on the visual stage.

## Focused comparison

The particle blocks now follow the observed sequence: recognizable glyph, rotational breakup, inward center vortex, then outward reassembly. Excess blocks fade toward the field edge. Rays remain narrow and blue, while the star field is subtle and top-weighted. The word label holds the old value during the first part of the transition and changes near reassembly.

## Findings and iteration history

- Initial implementation used direct point-to-point interpolation, which made the new digit readable too early.
- Replaced it with a two-phase vortex state machine and delayed label update.
- Reduced block size and beam width, adjusted camera framing, and tuned the block material toward the source’s cool white highlight.
- Fixed direct-input interaction so a newly entered sequence immediately shows its first letter; the next click advances one letter.
- Desktop and mobile screenshots show no horizontal overflow. Browser console had no errors or warnings during the final runs.

final result: passed
