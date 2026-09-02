# Design QA

- Source visual truth: `/tmp/tra-countdown.mp4` (2100×720, 30 fps) plus `/tmp/tra-source-latitude-early.png`, `/tmp/tra-source-latitude-middle.png`, and `/tmp/tra-source-latitude-late.png`.
- Implementation: `http://127.0.0.1:3000/hotpot-timer/`.
- Desktop evidence: `/tmp/tra-sphere-desktop-early.png`, `/tmp/tra-sphere-desktop-middle.png`, and `/tmp/tra-sphere-desktop-late.png` (1273×716 captures; 1280×720 CSS viewport; DPR 2).
- Mobile evidence: `/tmp/tra-sphere-mobile.png` (383×829 capture; 390×844 CSS viewport; DPR 1).
- Normalized comparison: `/tmp/tra-latitude-sequence-compare.jpg` (1440×600), using equal 480×300 focused stage crops for three 10 → 9 phases.

## Full-view comparison

The desktop and mobile captures retain the stage-first layout, near-black palette, cool-blue atmosphere, restrained orange signal, and working controls. The control rail has been removed so the WebGL stage now owns the viewport; configuration is a compact top-left strip and playback is an icon group directly below the glyph. Desktop and mobile have no horizontal overflow.

## Focused comparison

The current implementation rotates around a vertical axis embedded directly in each glyph's numeral plane. Cubes move into front/back depth around that near axis, while bounded radial, tangential, and vertical waves prevent synchronized rails. Two-character values use a separate axis for each glyph, and every path returns to an exact target point.

## Required fidelity surfaces

- Fonts/typography: the stage word remains a light, tightly tracked system sans matching the source's quiet annotation; tool typography follows the existing design system.
- Spacing/layout: cube scale and per-glyph rotation radii stay local to the numeral; stage framing remains centered at desktop and mobile.
- Colors/tokens: near-black field, cool-white cubes, depth-dimmed faces, restrained blue halo/rays, and orange word initial match the source hierarchy.
- Image quality: all focal imagery is native Three.js geometry; cubes are 0.255-unit rounded cubes with a low-opacity point-sprite glow, not flat planes.
- Copy/content: countdown labels and A–Z controls are coherent and unchanged outside the visual correction.

## Findings and comparison history

- Pass 1 — P1: the previous motion interpolated into a random center vortex instead of following a shared ring; P1: block depth was 0.18 against 0.30 width; P2: no visible per-cube halo. Fixed with a measured clockwise trajectory, equal XYZ cube dimensions, 3D quaternion spin, and a soft additive halo.
- Pass 2 — P2: `/tmp/tra-source-implementation-ring-compare.jpg` showed a ring that was too large, too uniform, and too bright. Fixed by reducing block/cell/ring scale, increasing per-block phase staggering, and dimming instances by Z depth.
- Pass 3 — P1: user clarification established that the apparent ring was not a screen-plane orbit; it was a sphere with north/south poles and counterclockwise latitude circles. Replaced the XY polar path with a constant-radius spherical path around Y, moved latitude handoff to the rear hemisphere, and oriented cubes tangent to the sphere.
- Pass 4 — `/tmp/tra-latitude-sequence-compare.jpg` shows no remaining actionable P0/P1/P2 mismatch against the clarified trajectory. The source's 1.55 s editorial transition is proportionally compressed to 0.96 s so a real-time countdown can still change once per second.
- Pass 5 — Removed the remaining synchronized latitude-band appearance. Every cube now has a seeded launch delay, spin rate, radial lift, and two-axis flight wave; row assignment is less rigid, turbulence peaks mid-transition, and all offsets resolve before the target glyph settles.
- Pass 6 — Moved the rotation center from the remote sphere center to the numeral plane itself. Single glyphs use their own centerline; two-character values calculate independent left/right axes and add an assignment penalty that discourages crossing between glyphs.
- Pass 7 — Added a progressively disclosed `FX` panel with seven persistent controls. Desktop and 390×844 mobile captures confirm the panel stays inside the viewport; the native sliders and reset action expose accessible labels, and trail rendering reuses three instanced meshes rather than adding full-screen post-processing.

## Interaction and accessibility checks

- Countdown start/pause/reset and direct duration entry tested.
- Alphabet autoplay verified with `ABCD`: one click reached `C` after two seconds. A ten-letter sequence was paused at `C`, remained at `C` after another 1.25 seconds, and reset to `A`.
- Desktop and 390×844 mobile compositions were checked; the mobile tool strip, glyph, playback controls, and bottom instrumentation remain unobstructed with no horizontal overflow.
- The FX panel, all seven labeled sliders, default reset, and responsive 280px mobile panel were inspected. Closed state returns the stage to its quiet single-icon footprint.
- Keyboard-labelled native controls remained reachable; reduced-motion fallback remains implemented.
- Motion regression: exact endpoints, axis depth in the numeral plane, independent two-glyph axes, counterclockwise travel, real front/back depth, distinct paths, and bounded turbulence all pass.
- Browser console errors: none.

final result: passed
