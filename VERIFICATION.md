# Redesign verification

Verified locally on September 17, 2026. The redesign has not been pushed or deployed.

## Automated checks

- `npm run build`: passes; generates homepage, six product pages, and sitemap.
- `npm run check`: passes for 15 HTML pages and 206 local link/asset references,
  heading count, duplicate IDs, and each product's App Store and privacy destination.
- JavaScript syntax checks: pass for the build script and browser enhancement.
- Prettier checks: pass for scripts, stylesheets, JSON, and package metadata.
- `git diff --check`: passes.
- No TypeScript, framework lint configuration, or existing unit-test suite exists.
  No production package dependencies were introduced.
- Original versus edited policy bodies were compared against Git: all eight are
  identical after excluding the newly added return navigation. The Block Blitzen
  document title was also corrected; that is outside the policy body.

## Browser checks

- Homepage inspected at 320, 390, 480, 768, 1024, 1440, and 1920 CSS pixels.
  No horizontal overflow, measured against the document's client width.
- All six detail pages and all eight privacy pages checked at 320 and 1024 pixels:
  correct headings, no horizontal overflow, no broken loaded images.
- Visually inspected mobile hero, tablet collection and Coming Soon section,
  desktop homepage/detail layout, and mobile Chomp Champ privacy page.
- No browser console warnings or errors recorded during the checks.
- Brain workout filter correctly shows Tile Glider and Word Blitzen. Keyboard
  activation of All apps restores six cards and retains button focus.
- First Tab focuses the visible skip link. Enter opens the privacy disclosure;
  its Chomp Champ policy link navigates to the correct page.
- Native disclosure controls, email links, and ordinary anchor navigation work
  without a framework. Email links were inspected but no message was sent.
- All six App Store IDs were verified against Apple's developer lookup response.
  App Store device/pricing details remain on Apple's pages. The existing Tile
  Glider Google Play destination is preserved, not newly independently certified.
- Without JavaScript, all product cards and download links remain in the static
  HTML; filter controls stay hidden. No client-side rendering is required.

## Lighthouse

Local Chromium lab audits against the preview server:

| Mode | Performance | Accessibility | Best practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 100 | 100 | 100 | 100 | 1.7 s | 0 |
| Tablet, 768 x 1024 | 100 | 100 | 100 | 100 | 1.8 s | 0 |
| Desktop, 1440 x 1000 | 100 | 100 | 100 | 100 | 0.4 s | 0 |
| Mobile, reduced motion forced | 100 | 100 | 100 | 100 | 1.8 s | 0 |

Mobile total blocking time was 0 ms. INP requires real interaction/field data and
is not claimed from this navigation audit. These are local lab measurements, not
guarantees of production performance or a complete accessibility certification.
The reduced-motion run used Chrome's `--force-prefers-reduced-motion` flag; the
stylesheet disables animation, transitions, and smooth scrolling in that mode.

Audit reports and Lighthouse viewport captures are saved in `artifacts/` as
`lighthouse-mobile.json`, `lighthouse-tablet.json`, `lighthouse-desktop.json`, and
`mobile.jpg`, `tablet.jpg`, `desktop.jpg`. Lighthouse exports reduced-resolution
captures; the full-size views were also visually inspected in the preview browser.
These artifacts are ignored by Git and are not deployed.

## Remaining launch checks

After approval and publication: verify the live GitHub Pages build, canonical and
social-image URLs, production caching, real iPhone App Store routing, VoiceOver,
and Safari rendering. Obtain official aBop/Crossfire Blast launch assets and links
when available. No analytics service or mailing-list collection has been added.
