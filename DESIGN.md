---
name: "TRA / Cinematic Countdown"
description: "A black-stage countdown studio with cold-blue particle numerals and one orange signal."
colors:
  signal-orange: "#e26b3b"
  action-fill: "rgba(169, 63, 32, 0.88)"
  action-hover: "#b84d2d"
  action-focus: "#f08a5c"
  cold-blue: "#9ec6e4"
  ink: "#e8f0f3"
  muted: "#7c8d96"
  dim: "#6b7f88"
  surface: "#040809"
  stage: "#010304"
  rule: "rgba(125, 161, 180, 0.2)"
  rule-soft: "rgba(125, 161, 180, 0.11)"
  quiet-dot: "#58676f"
  action-text: "#fff4ee"
  control-surface: "rgba(14, 22, 24, 0.58)"
  control-active: "rgba(20, 38, 47, 0.68)"
  particle-white: "#f4f8fa"
  star-blue: "#a5c9e2"
  beam-blue: "#19558b"
  center-glow: "#78b8e8"
  front-light: "#eaf6ff"
  rim-blue: "#0b3d71"
typography:
  display:
    fontFamily: '"Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(32px, 3vw, 44px)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  control:
    fontFamily: '"Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "39px"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.06em"
  body:
    fontFamily: '"Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "12px"
    lineHeight: 1.8
  label:
    fontFamily: '"Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "9px"
    letterSpacing: "0.19em"
    fontFeature: "tabular-nums"
  annotation:
    fontFamily: '"Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(13px, 1.5vw, 21px)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  stage: "0"
  control: "2px"
  dot: "50%"
spacing:
  micro: "8px"
  compact: "14px"
  inset: "20px"
  section-gap: "34px"
  rail-gutter: "clamp(24px, 3vw, 46px)"
  stage-gutter: "clamp(18px, 3vw, 50px)"
  mobile-stage-gutter: "12px"
components:
  primary-action:
    backgroundColor: "{colors.action-fill}"
    textColor: "{colors.action-text}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "51px"
  secondary-action:
    backgroundColor: "{colors.control-surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "0 8px"
    height: "44px"
  preset-row:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    height: "44px"
    padding: "0 0 0 1px"
  duration-input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0 0 9px"
---

# Design System: TRA / Cinematic Countdown

## Overview

**Creative North Star: "The Cinematic Time Field"**

TRA / Cinematic Countdown treats time as a scene with an atmosphere, not as a utility bar. The wide stage owns the visual hierarchy: a black field, cold-blue light, faint stars, radial beams, and white rounded blocks assembling into the current numeral. The control rail stays quiet and operational, using fine rules, compact uppercase labels, and one orange signal family to make action and status legible.

The built system is intentionally sparse. There are no rounded cards or structural drop shadows; depth comes from tonal black layers, thin blue-gray rules, fog, additive light, and the movement of the WebGL field. The large countdown numeral is geometry rather than font: a 5×7 glyph map is rendered from up to 50 instanced rounded blocks, while text annotations and controls remain secondary.

### Known Constraints

- `index.html` loads no web font. Typography depends on the system stack `Avenir Next`, `Helvetica Neue`, Helvetica, Arial, sans-serif, so metrics can vary across operating systems.
- The app is dark-only, has a 320px minimum viewport, and keeps the root scene overflow-hidden. The stage and rail need to remain viable within that fixed composition.
- The visual effect stays inside one compact Three.js/WebGL canvas: instanced blocks, shared buffer geometry, capped pixel ratio, and no post-processing pipeline. Preserve that compact bundle when extending the scene.
- WebGL creation can fail. The shipped fallback is a large, plain numeric readout with a blue radial glow; it is a resilience path, not a second visual system.

**Key Characteristics:**

- Black cinematic stage with cold-blue atmosphere.
- White, softly rounded block numerals assembled in 3D space.
- One orange signal reserved for action, focus, and live/completion emphasis.
- Quiet left control rail paired with a wide stage-first composition.
- Editorial micro-labels, thin rules, and restrained geometry.

## Colors

The palette is near-black and low-chroma blue-gray, with luminous whites carrying the numeral and orange kept rare enough to read as a signal.

### Primary

- **Signal Orange** (`#e26b3b`): Accent for focus underlines, selected preset cues, the highlighted first letter of the stage word, and live/completion indicators.
- **Action Orange Fill** (`rgba(169, 63, 32, 0.88)`): Default fill for the primary start/pause/replay action; it is denser and darker than the accent itself.
- **Action Hover** (`#b84d2d`) and **Action Focus** (`#f08a5c`): The primary action's response colors for hover and focus-visible borders.

### Secondary

- **Cold Blue** (`#9ec6e4`): Italic intro emphasis, the duration-field underline at rest, active secondary controls, and the cool edge of the interface's lighting language.

### Tertiary

- **Particle White** (`#f4f8fa`): Base material for the instanced countdown blocks, varied subtly per instance toward cool white.
- **Star Blue** (`#a5c9e2`): Additive far and near star fields.
- **Beam Blue** (`#19558b`), **Center Glow** (`#78b8e8`), **Front Light** (`#eaf6ff`), and **Rim Blue** (`#0b3d71`): The Three.js beam shader and scene-light palette.

### Neutral

- **Ink** (`#e8f0f3`): High-priority interface text, active status, numeric controls, and stage time.
- **Muted** (`#7c8d96`): Supporting labels, captions, inactive actions, and secondary metadata.
- **Dim** (`#6b7f88`): Lowest-priority range hints, footer notes, and secondary stage metadata.
- **Surface** (`#040809`): The app background, header, and control-rail base.
- **Stage** (`#010304`): The visual shell and WebGL clear/fog color.
- **Rule** (`rgba(125, 161, 180, 0.2)`) and **Soft Rule** (`rgba(125, 161, 180, 0.11)`): Hairline separators and shell borders.
- **Quiet Dot** (`#58676f`): Inactive status/caption indicator before the live or complete signal takes over.
- **Action Text** (`#fff4ee`): Warm white text inside the orange primary action.

**The One Signal Rule.** Orange marks a moment that needs attention: action, focus, selection, live status, or completion. It should not become a general page fill or compete with the white numeral.

## Typography

**Display Font:** Avenir Next (with Helvetica Neue, Helvetica, Arial, sans-serif fallbacks); **Body Font:** the same system sans stack; **Label/Mono Font:** none—the app uses the same sans family with tabular numerals.

**Character:** Interface type is light, open, and tightly tracked. Large text uses a low weight and negative tracking; utility labels use small uppercase text with generous tracking so they behave like filmic instrumentation. The hero numeral is not typographic—it is a Three.js block glyph.

### Hierarchy

- **Display** (300, `clamp(32px, 3vw, 44px)`, `0.98` line-height, `-0.045em` tracking): The two-line “Give it / a second.” rail introduction; the second line is italic and cold blue.
- **Control numeral** (300, `39px`, `1` line-height, `-0.06em` tracking): The editable seconds value in the duration field.
- **Stage annotation** (300, `clamp(13px, 1.5vw, 21px)`, `1` line-height, `0.08em` tracking): The word label beside the 3D glyph, with its first letter in orange.
- **Body** (12px, `1.8` line-height): The short Chinese explanatory copy and duration hint; the intro copy is capped at `23ch`.
- **Label** (8–10px, uppercase, `0.13–0.19em` tracking): Header metadata, field labels, stage caption, status, action labels, and footer instrumentation.
- **Stage time** (300, `13px` desktop / `11px` mobile, `0.08em` tracking): The remaining time readout paired with the small `REMAINING` label on larger screens.

**The Geometry-First Numeral Rule.** Do not replace the main stage number with a conventional display font. Text is for context and state; the countdown's identity is the assembled rounded-block glyph.

## Layout

The desktop composition is a full-viewport header above a two-column workspace. The header is `74px` tall. Below it, the workspace uses `minmax(276px, 324px)` for the control rail and `minmax(0, 1fr)` for the stage, preserving a wide field even as the viewport grows.

The rail is a vertical stack with `clamp(32px, 5vh, 66px)` top padding, `clamp(24px, 3vw, 46px)` horizontal padding, and a `28px` bottom inset. Intro, duration, quick presets, and actions follow a loose `34px` section rhythm; actions are pushed to the bottom with auto margin. The stage uses `22px` top, `clamp(18px, 3vw, 50px)` horizontal, and `20px` bottom padding. Its metadata, visual shell, and footer are stacked so the shell expands into the remaining height, with a `560px` minimum.

The layout pivots at two implemented breakpoints:

- **At `900px` and below:** The workspace becomes a column. The stage moves first and occupies at least `76vh`; the visual shell is at least `540px`. The control rail follows, loses its right border, gains a top rule, and uses a compact action gap.
- **At `560px` and below:** The header drops to `62px`; brand copy and the header status hide. Stage and workspace minimum heights are released, stage padding becomes `15px 12px 16px`, and the visual shell is `min(72vh, 540px)`. Secondary metadata is removed, the stage word moves to the upper-right, bottom annotations inset to `17px`, and the control rail uses `34px 20px 24px` padding with a `38px` intro heading.

The mobile rule is stage-first, not rail-first: the visual event remains the first thing encountered, while the controls become a follow-on section below it. Spacing is intentionally measured in small intervals—`8px`, `14px`, `20px`, `28px`, and `34px`—with interactive rows at least `44px` high and the primary action at least `51px` high.

## Elevation & Depth

This is a layered atmospheric system, not a card-and-shadow system. The rail and stage are separated by one-pixel rules and subtle black gradients. The WebGL scene supplies depth through exponential fog (`0.032` density), ambient/directional/point/rim lighting, additive star and beam materials, and a central blue glow. The renderer uses ACES filmic tone mapping at `1.38` exposure and sRGB output; the blocks remain luminous white with `toneMapped: false`.

There are no structural drop shadows. The only CSS shadows are small status halos—a quiet gray ring and an orange `18px` glow on live/completion signals—and the no-WebGL fallback's `42px` blue text glow. The stage shell stays flat, dark, and sharp-edged so the light field supplies the drama.

### Shadow Vocabulary

- **Quiet indicator halo:** A three-pixel translucent ring around the inactive status/caption dot.
- **Signal halo:** A three-pixel orange ring plus an `18px` orange glow when the header is live or the cycle has completed.
- **Fallback glow:** A `42px` blue text shadow used only when the renderer cannot create WebGL.

**The Flat Stage Rule.** Use borders, gradients, fog, and light to establish depth. Do not add floating panels or generic elevation shadows around the stage.

## Shapes

The interface uses near-square silhouettes with very restrained rounding. Structural shells have no radius; buttons and secondary controls use a `2px` radius; the duration field is an underline rather than a boxed input. Preset rows are separated by hairlines instead of enclosed in cards. Status dots are circular (`50%` radius), and the two eleven-pixel crosshairs are strictly decorative alignment marks.

The signature soft edge lives in the scene, not the CSS: each block is a `0.48 × 0.48 × 0.28` Three.js rounded box with five corner segments and a `0.09` world-unit radius. This gives the numeral a tactile silhouette without turning the surrounding UI into a pill system.

## Components

### Buttons

The action vocabulary is explicit, text-led, and paired with thin Lucide line icons.

- **Primary action:** Full rail width, `51px` minimum height, `2px` radius, `1px` orange border, translucent dark-orange fill, warm-white text, `10px` medium uppercase label, and `10px` icon gap. Hover/focus lifts it by `1px` and shifts the fill/border toward brighter orange over `180ms` ease.
- **Primary state labels:** The same control becomes `START COUNTDOWN`, `PAUSE COUNTDOWN`, `RESUME COUNTDOWN`, or `REPLAY MOMENT` according to timer state. The icon changes between play, pause, and replay.
- **Secondary actions:** Reset and sound are equal-width `44px` rows with `2px` radius, one-pixel blue-gray borders, translucent control surfaces, `8px` horizontal padding, and `8px` uppercase labels. The sound toggle exposes `SOUND ON` / `SOUND OFF` and uses `aria-pressed`.
- **Header reset:** A borderless `44px`-high ghost action with muted text and a small reset icon; hover/focus promotes it to ink.
- **Preset rows:** Full-width `44px` rows with top/bottom hairlines and transparent backgrounds. Hover, focus, and selection move the row `7px` right, brighten the text, tint the rule orange, and reveal the orange arrow icon.
- **Focus:** All buttons and the duration input share a `1px` orange `:focus-visible` outline with a `4px` offset.

### Inputs / Fields

The duration field is a large, borderless numeric input with a single blue underline. It accepts `1–3600` seconds, uses numeric input mode, hides browser spin buttons, and commits on blur or Enter. The field is `39px` and light-weight; the `SEC` suffix, range, and current-duration hint remain compact supporting text. Focus changes only the underline and the global focus ring to orange.

### Navigation

There is one compact header rather than a link-heavy navigation bar. The left brand lockup is a `17px` / `600` `TRA` mark with `0.2em` tracking, a `34px` hairline, and the `TIME / RELATIONAL ATMOSPHERE` descriptor. The right side holds the status dot/label and reset action. At `560px`, the descriptor and status label hide while the brand mark and reset remain.

### Stage Shell & Containers

The stage is the main container: a flexible black shell with a one-pixel blue-gray border, edge-darkening overlays, two decorative crosshairs, a bottom guide line, stage metadata, a bottom-left caption, and a bottom-right remaining-time readout. There is no card component in the system. The rail and stage are structural surfaces, not floating content blocks.

### Particle Countdown Canvas

The canvas is the signature component. Three.js builds a perspective scene with up to `50` instanced rounded blocks, a 5×7 digit grid, `220` far stars, `90` near stars, and `12` shared radial beams. Blocks begin as scattered particles and ease into the current 0–99 glyph; surplus blocks scatter and scale to zero. The value is rounded up for display, and durations over `99` seconds switch the visual value to minutes while the annotation changes to `MINUTES` or `SECONDS`.

The canvas follows pointer movement with damped world rotation/translation, keeps a crosshair cursor over the field, and returns the field to center on pointer leave. If WebGL cannot initialize, the canvas falls back to a centered padded numeric string with a blue radial gradient and text glow.

### Motion & State Behavior

The scene is alive at rest but becomes more active while running. Stars drift, beams rotate, light intensity breathes, and the blocks carry a small settling turbulence. UI transitions use `180ms` ease; the stage word enters with a `600ms` blur-to-sharp transition using `cubic-bezier(0.2, 0.75, 0.2, 1)`.

| State | Visible UI | Scene behavior |
| --- | --- | --- |
| Set / ready | `READY / SET`, `THE STAGE IS READY`, `START COUNTDOWN` | Target glyph is settled; ambient motion runs at the idle factor (`0.42`). |
| Running | `LIVE / RUNNING`, `THE MOMENT IS LIVE`, `PAUSE COUNTDOWN` | The timer ticks on `requestAnimationFrame`; field motion uses full speed (`1`). |
| Paused / hold | `PAUSED / HOLD`, `RESUME COUNTDOWN` | Remaining time is held; ambient canvas motion continues at the slower idle factor rather than freezing. |
| Complete | `CYCLE / COMPLETE`, `TIME HAS ARRIVED`, `REPLAY MOMENT` | Caption dot turns orange with a halo; blocks pulse by `6%` when motion is allowed; completion audio plays when sound is on. |

Reset returns the current duration to ready state and remounts the canvas so its scattered starting field is re-seeded. Setting a preset or committing a new duration also stops the timer, returns to ready, and remounts the canvas. Replay resets the duration and starts immediately. Sound is a completion cue only; it is not a continuous ticking layer.

### Accessibility & Performance

- Native buttons and a native number input carry visible labels or `aria-label`s; the sound toggle exposes its pressed state. The controls are grouped in an aside and the stage has explicit timer/image labels.
- Decorative crosshairs, icons, and the stage word are hidden from assistive technology; the star field remains inside the labeled WebGL image. A visually hidden polite live region announces the rounded-up seconds and the completion message while the visual timer itself remains `aria-live="off"`.
- Space starts/pauses and `R` resets when focus is not inside an input, button, link, or editable element. The keyboard path is a supplement to the visible controls, not their replacement.
- `prefers-reduced-motion: reduce` disables the stage-word animation, makes UI transitions effectively immediate, shortens glyph transitions to `0.18s`, reduces canvas speed/turbulence, and removes the completion pulse. The canvas cursor also returns to the default cursor.
- The renderer requests high performance with antialiasing, caps pixel ratio at `2`, observes size changes with `ResizeObserver`, clamps frame delta to `0.05`, reuses instanced/shared geometry, and disposes scene resources on teardown.

## Do's and Don'ts

### Do:

- **Do** keep the stage near-black and let cold blue provide atmosphere; white should carry the main numeral.
- **Do** use orange as a rare signal for action, focus, selection, live status, and completion.
- **Do** preserve the left-rail / wide-stage relationship on desktop and the stage-first order below `900px`.
- **Do** keep controls text-led, at least `44px` high, and visibly focusable.
- **Do** preserve the system font fallback and document any platform-specific metric changes rather than assuming Avenir Next is installed.
- **Do** respect reduced motion, the polite timer announcement, and the no-WebGL numeric fallback.

### Don't:

- **Don't** turn the orange signal into a full-page color field or use it for routine decoration.
- **Don't** introduce pill-shaped controls, rounded cards, generic drop shadows, or glossy UI chrome.
- **Don't** replace the Three.js block glyph with a conventional hero font in the primary stage.
- **Don't** add heavy post-processing, a second animation runtime, or a large visual dependency without revisiting the compact WebGL bundle constraint.
- **Don't** hide the timer's state in color alone; keep the explicit labels, action text, and live-region announcement.
- **Don't** freeze the paused canvas completely: the shipped behavior keeps a slower atmospheric drift so hold still feels like a live field.
