# Nahawandi — Design Guide

The design language of nahawandi.com. Use it for any new page, section,
component or visual for Nahawandi (live electronic music, producer, DJ —
Amman / Bremen), so everything reads as one site.

Values here match the live code in `src/styles/global.css`. If you change a
token there, update this file too.

---

## 1. Character

**Editorial, minimal, black and white, Arabic and Latin side by side.**
It should feel like a quiet record sleeve or a gallery catalogue, not a club
flyer.

- **Black page, white type, grey for everything secondary.** No accent
  colour, ever.
- **Large condensed capitals against small spaced-out capitals.** Scale
  contrast does the work that colour would do elsewhere.
- **Italic serif for the voice.** Sentences that "speak" (intros, quotes,
  headings like *The Sound Archive*) are set in italic Garamond.
- **Arabic is part of the design, not a translation.** Arabic words and
  numerals sit next to the English as equals, in their own typeface.
- **Ornament is geometric and sparse.** Eight-point stars, rosettes, dots and
  arches, drawn as thin white lines, used at low opacity. Never decorative
  "oriental" clip art.
- **Lots of space.** Sections breathe; one idea per screen.
- **Slow, soft motion.** Things fade and rise into place; ornaments turn slowly.

### Do not

- Add colour (no gold, no brand blue, no gradients other than black fades on photos).
- Use desert, camel, mosque, lantern or generic "Middle Eastern pattern" imagery
  to suggest origin. The culture is carried by the music, the Arabic type and
  the geometry, not by clichés.
- Use emoji. Icons are thin line SVGs only (see §7).
- Use rounded "app" buttons, drop-shadow cards, or bold sans-serif body text.
- Make claims about a recording's origin, mode or history that are not
  confirmed by Nahawandi.

---

## 2. Colour

| Token | Value | Use |
|---|---|---|
| `--bg` | `#000` | Page background |
| `--text` | `#fff` | Main text, active states, ornaments |
| `--muted` | `rgb(154,154,154)` | Secondary text: labels, meta, captions, inactive tabs |
| `--line` | `rgb(40,40,40)` | Hairline dividers, row borders, nav border |
| `--surface` | `rgb(27,27,27)` | The one raised area: contact/footer block, mini player |

White at reduced opacity is the only other colour:

- `rgba(255,255,255,.2–.35)` for outlines (inner arch line, buttons at rest, small dividers)
- `rgba(255,255,255,.6)` for the outline of the main Booking button
- Ornaments at opacity `.3–.7`; large background ornaments at `.12–.14`

Photos are **black and white** (`filter: grayscale(1)` if the source isn't) and
fade to black at the bottom: `linear-gradient(to bottom, transparent, #000)` over the lower 45%.

---

## 3. Typography

Three Google Fonts, loaded in `src/layouts/Base.astro`:

```
Amiri:wght@400;700
EB Garamond:ital,wght@0,400;0,500;1,400
Oswald:wght@400;500
```

| Font | CSS variable | Role |
|---|---|---|
| **Oswald** (400/500) | `--oswald` | Condensed uppercase display: logo, the big NAHAWANDI, section and set titles, tab names, gig names |
| **EB Garamond** (400/500, italic) | `--garamond` | Everything else: body, italic voice lines, track titles, and the small labels |
| **Amiri** | `--amiri` | All Arabic text (always `direction: rtl`) |

The Arabic logo **النهاوندي** is an SVG drawing (`ArabicWordmark.astro`), not a font.

### Type styles

| Style | Spec (desktop) | Example |
|---|---|---|
| **Hero name** | Oswald, 212px, line-height 1, uppercase | NAHAWANDI |
| **Display** (`.display`) | Oswald, 104px, line-height .92, letter-spacing -.005em, uppercase | LIVE, set titles |
| **Wordmark** (`.wordmark`) | Oswald, uppercase, line-height 1, 36–44px | Logo in nav/footer |
| **Tab / gig name** | Oswald, 27px (tabs), 44px (gigs), uppercase | GROOVE · HYPNOTIC |
| **Italic heading** | Garamond italic, 60px, line-height 1.1 | *The Sound Archive* |
| **Voice line** | Garamond italic, 24–29px, line-height 1.4, letter-spacing -.02em | Hero intro sentence |
| **Body** | Garamond 20–26px, line-height 1.55 | About story |
| **Secondary body** | Garamond 20px, `--muted` | Maqam paragraph, intros |
| **Track title** | Garamond 28px, letter-spacing -.02em | Mawwal |
| **Label** (`.label`) | Garamond 15px, **uppercase, letter-spacing .2em**, line-height 1.4 | SOUND · ABOUT · AMMAN / BREMEN |
| **Arabic accent** | Amiri 46px, `--muted` (above headings) or 17–22px inline | الأرشيف |

Rules:

- Headings are weight 400. Never bold.
- Labels are the "small caps" voice of the site: menus, meta, buttons, captions,
  dates. Always uppercase with wide tracking.
- Pair an Oswald or italic heading with one label and one body line. Don't stack
  three heading sizes.
- Arabic accent above an italic English heading is a signature pairing:
  `الأرشيف` over *The Sound Archive*.

### Numbering

Lists and stages are numbered with Latin and Arabic-Indic digits together, as labels:

```
01 · ٠١    02 · ٠٢    03 · ٠٣
```

---

## 4. Layout and spacing

- **Container** (`.wrap`): max-width 1300px, centred, side gutter `--gutter`.
- **Gutter:** 52px desktop · 36px tablet (≤1199px) · 24px phone (≤809px).
- **Breakpoints:** desktop ≥1200 · tablet 810–1199 · phone ≤809 · small phone ≤370.
- **Wide screens (≥1400px):** the container drops its max-width and every
  size grows with the window (`max(<desktop px>, <same value in vw>)`, where
  vw = px ÷ 14), so the page keeps the 1400px proportions at any width or
  zoom level. New components should follow the same rule.
- **Section rhythm:** 90–144px vertical padding on desktop, 56–88px on phones.
- **Rows:** lists (tracks, gigs) are full-width rows separated by 1px `--line`
  borders, generous padding (32–40px), no boxes or cards.
- **Grid:** mostly two-column splits (photo | text) with ~90px gap; collapse
  to a single centred column on phones.
- **Sections are separated by the ornament divider** (§6), not by colour bands.

### Phones

- Content becomes one centred column; side-by-side items stack.
- Big Oswald text sizes from the screen width (e.g. hero name
  `calc((100vw - 48px) * .19)`) so it never overflows.
- Nothing may cause sideways scrolling, down to 320px wide.
- Tabs become a 2×2 grid; rows become `number | title | +` grids.

---

## 5. Shapes: the arch

The **arch** is the main shape: a rectangle with a fully rounded top
(`border-radius: 9999px 9999px 0 0`), with a thin inner arch line inset 14–16px:

```css
.inner-arch {
  position: absolute; inset: 16px 16px 0 16px;
  border: 1px solid rgba(255,255,255,.35); border-bottom: 0;
  border-radius: 9999px 9999px 0 0;
}
```

Use it for portrait photos and image placeholders. Photos inside fade to
black at the bottom. Large text may overlap the bottom of an arch (the hero
name sits across the photo's lower edge).

No other rounded corners, except circles (play button, mini player buttons, dots).

---

## 6. Ornaments

Defined in `src/components/Ornament.astro` (viewBox 40×40, white):

| Kind | Drawing | Typical use |
|---|---|---|
| `dot` | Two filled squares, one turned 45° (a tiny solid eight-point star) | Separators between nav items and labels, size 5–8 |
| `star` | Two outlined squares, one turned 45°, small circle in the centre | Next to labels, captions, place names, size 13–18 |
| `rosette` | Four outlined squares turned in 22.5° steps, centre circle and dot | Divider centre, size 30, slowly spinning |
| `big-rosette` | Rosette with an extra outer circle | Large background mark in a section corner, size 150–190, opacity .14, spinning very slowly |

**Divider** (`Divider.astro`): `—— ◆ ✺ ◆ ——` hairline rules growing in from
both sides, two dots and a spinning rosette in the middle. It goes between
every main section.

**Star scatter:** a few small stars and dots at different opacities, twinkling,
in empty space (hero left side). Keep it to 4–6 items.

---

## 7. Icons

Line icons in `src/components/Icon.astro`: viewBox 16, `stroke-width 1.4`,
round caps and joins, `currentColor`. Available: play, arrow-down,
arrow-up-right, arrow-left, prev, next, close, volume, mute, note, spotify,
soundcloud, applemusic.

- External links end with a small `arrow-up-right` (11px).
- Platform links get the platform line icon before the name.
- **Never emoji** (`font-variant-emoji: text` is set globally).

---

## 8. Components

| Component | Look |
|---|---|
| **Nav** | Sticky, black, 110px tall (72px on phones), 1px `--line` bottom border. Oswald logo left; labels with dot separators right; **Booking** as an outline button. |
| **Outline button** (`.btn-outline`) | 1px white border at .6, label text, 14px × 22px padding, dots either side. Hover: fills white, text turns black. |
| **Line button** (`.btn-line`) | Same idea, solid white 1px border, 18px × 22px padding. |
| **Text link** (`.link-line`) | Label text with a 2px white underline 8px below; letter-spacing widens on hover. |
| **Play circle** | 70px circle, 1.5px white border, filled play icon; fills white on hover. |
| **Track row** | `01 · ٠١` number, Garamond title, muted labels for meta, `+` that turns into `×` (rotates 45°) when open. Opens smoothly to show details and the SoundCloud player. |
| **Tabs** | Oswald names in muted grey with small counts; active tab white with a 2px white underline that grows in. |
| **Gig row** | Muted label date, Oswald uppercase venue, star + label place. |
| **Mini player** | Fixed bottom-right, `--surface` background, thin border, round outline buttons. Hidden on phones. |
| **Arch photo** | See §5. |
| **Contact block** | `--surface` background; italic underlined email; italic link list; footer with both wordmarks. |

---

## 9. Motion

- **Easing:** `--ease: cubic-bezier(0.22, 1, 0.36, 1)` for everything (a soft ease-out).
- **Reveal on scroll** (`.reveal`): from opacity 0, 28px lower, blur 6px → in
  place over ~1s. Stagger with `--d` (0.05–0.35s).
- **Fade** (`.reveal-fade`): opacity only, 1.4s.
- **Word-by-word** (`.words`): headings split into words that rise and unblur
  one after another (45ms apart).
- **Lines** (`.grow-x`): hairlines grow from 0 to full width over 1.4s.
- **Ornaments:** rosettes spin (60s per turn; big ones 120s); stars twinkle
  (4.5s); the scroll hint floats gently.
- **Hover:** 0.3–0.45s; rows shift right 10–12px; buttons invert to white.
- **Always respect `prefers-reduced-motion`:** show everything at once, stop
  spins and twinkles.

---

## 10. Voice and copy

- Short, calm, first person when it's Nahawandi speaking.
- Labels in uppercase; sentences in normal case.
- English first, Arabic as a companion word or heading, never a full parallel
  translation of every line.
- Name things plainly: *The Sound Archive*, *Live*, *Booking*.

---

## 11. Sound experiences (e.g. `/al-bosta/`)

Built with `src/components/SoundExperience.astro` and a JSON file per track
(`src/data/al-bosta.json`).

- Same black page, fonts and labels; stage cards numbered `01 · ٠١ —— THE SOURCE`.
- Background visuals drawn in thin white lines from the site's own shapes:
  arches (atmosphere), a melodic line (voice), a circle of 16 star steps
  (rhythm), the rosette (kick), and scattered stars that grow denser as the
  track builds. No moving text, no colour.
- A small `--surface` control bar at the bottom with round outline buttons.

---

## 12. Checklist for anything new

- [ ] Black background, white and grey only
- [ ] Oswald for display, Garamond for body and labels, Amiri for Arabic
- [ ] Labels uppercase with .2em tracking
- [ ] Arabic companion word or numbering where it fits
- [ ] Ornaments thin, white, low opacity, sparse
- [ ] Arch for portrait images, black fade at the bottom
- [ ] Soft reveal motion with `--ease`, reduced-motion respected
- [ ] Works from 320px phones to zoomed-out wide screens, no sideways scrolling
- [ ] No emoji, no stock "oriental" imagery, no unverified claims
