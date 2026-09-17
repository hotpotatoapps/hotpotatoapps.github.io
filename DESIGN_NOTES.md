# Hot Potato Apps redesign

## Direction

A premium, playful independent studio: warm paper, dark ink, potato-orange accents,
and expressive product artwork. Large, tight typography supplies confidence; tilted
real app icons and small graphic gestures supply personality. The dark upcoming
section makes aBop and Crossfire Blast feel distinct without suggesting availability.

The static HTML/CSS/JavaScript stack and GitHub Pages hosting are preserved. A small,
dependency-free Node build shares page structure and reads product data from JSON.
Generated HTML is committed, so GitHub Pages does not need a build service.

## Audit and decisions

- Retain all six live products, their verified App Store IDs, the Tile Glider Android
  link, all privacy-policy URLs and wording, the support address, and `app-ads.txt`.
- Replace the puzzle-only positioning, dense four-column cards, missing hero CTA,
  remote font/image requests, and inconsistent page presentation.
- Add navigation, an obvious app-selection action, real product artwork, useful
  detail pages, Coming Soon previews, studio context, and visible support access.
- The original mobile hero placed three generic statistics ahead of any product.
  The redesign puts the primary action near the top and makes product art clickable.
- No framework, package dependencies, analytics, mailing-list backend, or deployment
  automation existed. No trackers or unconnected signup forms were added.
- Fix the existing Block Blitzen policy browser title, which incorrectly said Word
  Blitzen. Policy bodies remain unchanged except for added return navigation.

## Visual tokens

- Paper: `#f6f4ec`; ink: `#24251f`; muted copy: `#626359`.
- Action orange: `#c63817`; decorative orange: `#e84924`; line: `#d9d9ce`.
- Product surfaces: lime, blue, rose, lavender, peach, and yellow, used with dark text.
- Typography: locally hosted Space Grotesk, variable weights 400-700, Latin WOFF2.
  SIL Open Font License is in `assets/FONT-LICENSE.txt`.
- Spacing: 8px baseline, fluid 54-92px sections, maximum content width 1280px.
- Rounded art panels: 18-24px. Pill buttons: at least 44px touch height.
- Layout: 3 product columns on large screens, 2 on tablets/phones, 1 below 360px.
  Navigation remains exposed without a hamburger menu or JavaScript requirement.
- App screenshots are official App Store promotional images, not fabricated UI.

## Three hero concepts

1. **Selected: "Life could use a little more play."**
   Human and immediate, broad enough for games, novelty apps, and iMessage.
   Supporting copy: "We turn everyday moments into unexpectedly good fun. Discover
   clever games and playful experiences, made for your iPhone and iPad."
   Primary CTA: "Find your next favorite." Secondary CTA: "Meet the studio."
2. **Alternative: "Small apps. Unexpectedly good times."**
   Strong independent-studio character, but "small" can undersell richer experiences.
   Suggested subhead: "A quick challenge, a shared laugh, a new way to play. Meet the
   Apple apps with a little extra personality."
3. **Alternative: "Turn an ordinary moment into play."**
   Clear benefit and an inviting action, but less distinctive in the first few seconds.
   Suggested subhead: "From face-powered games to playful conversations, Hot Potato
   Apps gives your iPhone something unexpectedly fun to do."

## Motion

Reusable tokens: fast feedback 160ms, hero entrance 600ms, 18px entrance distance,
`cubic-bezier(.2,.7,.2,1)` easing, and a restrained spring for hover feedback.
Use transform and opacity. Card reveals progressively enhance browsers that support
view timelines; cards remain visible without JavaScript. No looping animation,
autoplay video, scroll hijacking, parallax, cursor effects, or animation libraries.
Reduced-motion mode disables animations, transitions, and smooth scrolling. Legal
pages, support accordions, and their content never receive entrance animations.

## Content and provenance

Live-app copy and current availability were checked against Apple's US iTunes lookup
API for developer ID 289898535 on September 17, 2026. App IDs are retained in
`data/apps.json`. The existing Chomp Champ icon was retained and optimized. The other
icons and one screenshot per app were downloaded from the official listing artwork.

aBop and Crossfire Blast are Coming Soon by the owner's explicit instruction. Their
descriptions use the owner's brief. Their typography is a website treatment, not an
assertion of final app-icon or product-interface design. No release date, price,
device requirement, download count, award, review, or testimonial was invented.

Chomp Champ leads because real assets and detailed verified content are available.
aBop can become the lead feature once launch assets are supplied. Experimental motion
and foldable-device ideas are omitted until there is a concrete public announcement.

Email links open the visitor's email app. They do not collect an address on the site,
submit a form, or sign anyone up for updates. No social accounts were assumed.

## Three main conversion improvements

1. A clear hero action and clickable artwork lead immediately to app discovery.
2. Mood filters, distinct product panels, and real detail pages help visitors select
   an app; each detail page has one prominent App Store action.
3. Explicit Available/Coming Soon labels and accessible support/privacy links answer
   practical questions without fake proof or misleading download buttons.

## Measurement and post-launch tests

Primary metric: **app-selection rate**, defined as the proportion of homepage visits
with at least one product-detail or product App Store click. Deduplicate per visit.
It measures the primary goal without penalizing visitors who prefer direct download.

Secondary metrics: detail-to-App-Store click rate, hero CTA rate, filter use, support
clicks, and upcoming-app inquiry clicks. An email-link click is not a sent message.
App Store clicks are not installs. No analytics service is installed; agree on a
privacy-conscious measurement approach before collecting these metrics.

Prioritized plan:

1. After publication, check the live domain, App Store routing on real iPhones,
   image caching, keyboard/VoiceOver use, and mobile field performance.
2. Establish an app-selection baseline, then test the selected hero against concept
   2. Change only the headline/subhead and compare selection rate by device class.
3. Compare Chomp Champ versus aBop as the featured product once aBop has launch assets.
4. Test mood-filter usage and card order; keep direct download access available.
5. Consider a launch list only after choosing a working provider and consent flow.

## Assets still useful

- Official aBop and Crossfire Blast icons, screenshots, and release links when ready.
- A confirmed aBop privacy policy before its release or any deeper product page.
- Optional founder photo/name/bio and approved social links for a more personal story.
- Optional clean gameplay captures; existing App Store promotional screenshots are
  deliberately shown as promotional images, not simulated website interactions.

## Important files

- `data/apps.json`, `data/upcoming.json`: changing product content and availability.
- `scripts/build.mjs`: shared header/footer, homepage, cards, and detail templates.
- `assets/site.css`, `assets/site.js`: responsive styling and progressive filters.
- `assets/legal.css`: consistent, motion-free policy presentation.
- `index.html` and six generated product HTML pages: directly deployable output.
- Eight existing policy pages: styles/navigation updated; legal wording retained.
- `assets/`: optimized artwork, local font/license, brand mark, and social card.
- `scripts/check.mjs`: local asset/link, heading, ID, and destination checks.
- `sitemap.xml`, `robots.txt`: search discovery. No deployment configuration changes.

See `VERIFICATION.md` for checks and audit results. Local screenshots and audit
reports live in the ignored `artifacts/` folder; they are not website payload.
