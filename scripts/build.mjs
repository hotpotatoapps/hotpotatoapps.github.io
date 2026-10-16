import fs from "node:fs/promises";
const apps = JSON.parse(await fs.readFile("data/apps.json", "utf8"));
const upcoming = JSON.parse(await fs.readFile("data/upcoming.json", "utf8"));
const origin = "https://hotpotatoapps.github.io";
const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const arrow = '<span aria-hidden="true">&#8599;</span>';
const abopDemo = `<figure class="demo-thumbnail" id="abop-crossfire-demo"><a class="video-launch" href="assets/abop-crossfire-4-player-demo.mp4" aria-label="Play aBop Crossfire four-player demo"><img src="assets/abop-crossfire-poster.jpg" width="2160" height="4692" alt="Four-player Crossfire gameplay in aBop" loading="lazy"><span class="video-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7Z" fill="currentColor"/></svg></span></a><video hidden controls playsinline preload="none" poster="assets/abop-crossfire-poster.jpg" width="2160" height="4692" aria-label="aBop Crossfire four-player demo"><source src="assets/abop-crossfire-4-player-demo.mp4" type="video/mp4"></video><figcaption>Crossfire four-player demo</figcaption></figure>`;
const icon = (app, extra = "") =>
  `<img src="assets/${app.slug}.webp" width="512" height="512" alt="${esc(app.name)} app icon" ${extra}>`;
const store = (app) =>
  `<a class="button button-dark" href="https://apps.apple.com/app/id${app.id}" aria-label="Download on the App Store: ${esc(app.name)}">Download on the App Store ${arrow}</a>`;
const brand = `<a class="brand" href="index.html" aria-label="Hot Potato Apps &amp; Games home"><img src="assets/mark.svg" alt="" width="38" height="38"><span>hot potato <span class="brand-small">APPS &amp; GAMES</span></span></a>`;
const header = (home) =>
  `<a class="skip-link" href="#main">Skip to content</a><header class="site-header wrap">${brand}<nav aria-label="Main navigation"><a href="${home ? "" : "index.html"}#apps">Apps</a><a href="${home ? "" : "index.html"}#about">About</a><a href="${home ? "" : "index.html"}#support">Support</a><a class="nav-contact" href="mailto:hotpotatoapps@gmail.com">Say hello ${arrow}</a></nav></header>`;
const footer = `<footer class="wrap site-footer"><div>${brand}<p>A little more play in your every day.</p></div><nav aria-label="Footer navigation"><a href="index.html#apps">Explore apps</a><a href="index.html#support">Support &amp; privacy</a><a href="privacy_statement.html">Privacy policy</a><a href="mailto:hotpotatoapps@gmail.com">Contact</a></nav><p class="copyright">&copy; ${new Date().getFullYear()} Hot Potato Apps. Independently made.</p></footer>`;
function page({
  title,
  description,
  path = "",
  body,
  home = false,
  image = "assets/social-card.png",
}) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#f6f4ec"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${origin}/${path}"><meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${origin}/${path}"><meta property="og:image" content="${origin}/${image}"><meta property="og:image:alt" content="Hot Potato Apps: a little more play in your every day"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="assets/mark.svg" type="image/svg+xml"><link rel="preload" href="assets/space-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="assets/site.css"><script src="assets/site.js" defer></script></head><body>${header(home)}<main id="main">${body}</main>${footer}</body></html>\n`;
}
function card(app, index) {
  return `<article class="app-card" data-category="${app.filter}"><a class="app-art ${app.color}" href="${app.slug}.html" aria-label="Explore ${esc(app.name)}"><span class="art-number" aria-hidden="true">0${index + 1}</span>${icon(app, 'loading="lazy"')}<span class="art-arrow" aria-hidden="true">&#8599;</span></a><div class="card-body"><div class="card-meta"><span>${esc(app.category)}</span><span class="available">Available</span></div><h3><a href="${app.slug}.html">${esc(app.name)}</a></h3><p>${esc(app.description)}</p><div class="card-links"><a href="${app.slug}.html" aria-label="Explore app: ${esc(app.name)}">Explore app <span aria-hidden="true">&#8594;</span></a><a href="https://apps.apple.com/app/id${app.id}" aria-label="Download ${esc(app.name)} on the App Store">App Store ${arrow}</a></div></div></article>`;
}
const featured = apps.find((app) => app.slug === "abop");
const bySlug = (slug) => apps.find((app) => app.slug === slug);
const body = `
<section class="hero wrap" aria-labelledby="hero-title">
  <div class="hero-copy"><p class="eyebrow"><span class="small-dot"></span> INDEPENDENT MINDS. PLAYFUL APPS.</p><h1 id="hero-title">Life could use<br>a little <span class="word-play">more play<svg viewBox="0 0 420 28" aria-hidden="true"><path d="M5 19Q190-6 412 13M60 25Q240 7 367 20"/></svg></span>.</h1><p class="hero-description">We turn everyday moments into unexpectedly good fun. Discover clever games and playful experiences, made for your iPhone and iPad.</p><div class="actions"><a class="button button-orange" href="#apps">Find your next favorite <span aria-hidden="true">&#8594;</span></a><a class="text-link" href="#about">Meet the studio ${arrow}</a></div><p class="platform-note"><svg aria-hidden="true" viewBox="0 0 16 22"><rect x="3" y="1" width="10" height="20" rx="2"/><path d="M6 4h4M7 18h2"/></svg> Made for Apple. Made for a good time.</p></div>
  <div class="hero-art" aria-label="A collection of Hot Potato app icons"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><span class="spark spark-one" aria-hidden="true">+</span><span class="spark spark-two" aria-hidden="true">+</span><a class="hero-icon hero-icon-chomp" href="abop.html" aria-label="Explore aBop">${icon(featured, 'fetchpriority="high"')}<span>aBop ${arrow}</span></a><a class="hero-icon hero-icon-pinky" href="pinky-pile.html" aria-label="Explore Pinky Pile">${icon(bySlug("pinky-pile"))}</a><a class="hero-icon hero-icon-tile" href="tile-glider.html" aria-label="Explore Tile Glider">${icon(bySlug("tile-glider"))}</a><a class="hero-icon hero-icon-block" href="block-blitzen.html" aria-label="Explore Block Blitzen">${icon(bySlug("block-blitzen"))}</a><div class="studio-stamp">SMALL STUDIO.<br><strong>Big play.</strong><span aria-hidden="true">&#10035;</span></div><span class="art-caption">TAP INTO SOMETHING DIFFERENT</span></div>
</section>
<div class="ticker" aria-hidden="true"><div class="wrap"><span>A little competition.</span><b>+</b><span>A little curiosity.</span><b>+</b><span>A lot of personality.</span><b>+</b><span>That's Hot Potato.</span></div></div>
<section class="wrap feature-section" aria-labelledby="featured-title"><div class="section-label"><span>01 / IN THE SPOTLIGHT</span><span>AVAILABLE NOW</span></div><div class="feature feature-abop"><div class="feature-copy"><p class="eyebrow">aBop / FOR iMESSAGE</p><h2 id="featured-title">Make Messages<br>more fun.</h2><p>A drawing challenge. A perfectly timed surprise. A friendly Nudge. Turn your next message into something you can play, share, and enjoy together.</p><div class="feature-tags"><span>DRAW, Nudge + Surprise</span><span>Games in your chats</span></div><div class="actions">${store(featured)}<a class="text-link" href="abop.html">Meet aBop ${arrow}</a></div></div><div class="feature-art"><div class="feature-rings" aria-hidden="true"></div>${icon(featured, 'loading="lazy"')}<span class="bite-note">GOOD CHATS.<br>GREAT TIMES.</span></div></div><a class="text-link" href="abop.html#abop-crossfire-demo">Watch the Crossfire four-player demo ${arrow}</a></section>
<section class="wrap collection section-space" id="apps" aria-labelledby="apps-title"><span id="games"></span><div class="section-heading"><div><p class="eyebrow">02 / THE COLLECTION</p><h2 id="apps-title">Find your kind of fun.</h2></div><p>For the five-minute break.<br>The friendly rivalry. The just-one-more.</p></div><div class="collection-tools"><div class="filters" role="group" aria-label="Filter apps" hidden><button type="button" data-filter="all" aria-pressed="true">All apps</button><button type="button" data-filter="quick" aria-pressed="false">Quick play</button><button type="button" data-filter="puzzles" aria-pressed="false">Brain workout</button><button type="button" data-filter="laughs" aria-pressed="false">Just for laughs</button></div><p class="result-count" aria-live="polite">${apps.length} apps. Plenty of personality.</p></div><div class="app-grid">${apps.map(card).join("")}</div></section>
<section class="upcoming section-space" id="coming-soon" aria-labelledby="upcoming-title"><div class="wrap"><div class="section-heading"><div><p class="eyebrow">03 / STILL COOKING</p><h2 id="upcoming-title">The next little big ideas.</h2></div><p>A peek at what's coming.<br>Good things take a little playtesting.</p></div><div class="upcoming-grid">${upcoming.map((app) => `<article class="upcoming-card ${app.slug}"><div class="coming-label"><span class="status-soon">${esc(app.status)}</span><span>${esc(app.category)}</span></div><figure class="upcoming-art"><img src="${esc(app.icon)}" width="512" height="512" alt="${esc(app.name)} app icon" loading="lazy"><figcaption>${esc(app.name)}</figcaption></figure><div><h3>${esc(app.headline)}</h3><p>${esc(app.description)}</p><a class="text-link" href="mailto:hotpotatoapps@gmail.com?subject=${encodeURIComponent(app.name + " updates")}">Ask about ${esc(app.name)} ${arrow}</a></div></article>`).join("")}</div></div></section>
<section class="wrap studio section-space" id="about" aria-labelledby="about-title"><div class="studio-intro"><p class="eyebrow">04 / THE STUDIO</p><h2 id="about-title">Serious about<br>not being boring.</h2><p>Hot Potato Apps is an independent studio with a soft spot for a good idea and a great little game. We make Apple experiences that invite you to try something different.</p><p>From a nostalgic fake call to a game you play with your face, the question is always the same: <strong>what would make this more fun?</strong></p><a class="text-link" href="mailto:hotpotatoapps@gmail.com">Talk to the studio ${arrow}</a></div><div class="principles"><article><span>01</span><div><h3>Apple tech. Human fun.</h3><p>ARKit turns your face into a controller. Game Center turns a personal best into a friendly challenge.</p></div></article><article><span>02</span><div><h3>Small moments, well spent.</h3><p>One more puzzle, a quick word race, an unexpected laugh. There's room for play in an ordinary day.</p></div></article><article><span>03</span><div><h3>A studio you can reach.</h3><p>A question, a curious idea, or a bug to report? Your message goes directly to Hot Potato Apps.</p></div></article></div></section>
<section class="wrap support section-space" id="support" aria-labelledby="support-title"><div><p class="eyebrow">05 / HERE TO HELP</p><h2 id="support-title">A real person.<br>On the other end.</h2><p>Need a hand? Tell us the app, your device, and what's happening. Ideas and friendly hellos are welcome, too.</p><a class="button button-dark" href="mailto:hotpotatoapps@gmail.com?subject=App%20support">Email the studio ${arrow}</a><p class="email-address">hotpotatoapps@gmail.com</p></div><div class="support-details"><details><summary>Where can I download the apps?</summary><p>Use any App Store link above to see device compatibility, current pricing, and availability in your region. Tile Glider is also on <a href="https://play.google.com/store/apps/details?id=com.colorgatejam">Google Play</a>.</p></details><details><summary>What about privacy?</summary><p>Each app has its own policy, with details about the services it uses.</p><ul class="privacy-list">${apps.map((app) => `<li><a href="${app.privacy}">${app.name} privacy ${arrow}</a></li>`).join("")}<li><a href="crossfire_blast_privacy_statement.html">Crossfire Blast privacy ${arrow}</a></li></ul></details><details><summary>When are the next apps coming?</summary><p>Crossfire Blast is coming soon. Its release date hasn't been announced yet. You can <a href="mailto:hotpotatoapps@gmail.com?subject=Upcoming%20apps">email us about upcoming apps</a>; this does not sign you up for a mailing list.</p></details></div></section>
<section class="final-cta"><div class="wrap"><p class="eyebrow">YOUR NEXT GOOD BREAK STARTS HERE.</p><h2>Less scrolling.<br>More playing.</h2><a class="button button-light" href="#apps">Pick your next favorite <span aria-hidden="true">&#8594;</span></a><span class="cta-flower" aria-hidden="true">&#10035;</span></div></section>`;
await fs.writeFile(
  "index.html",
  page({
    title: "Hot Potato Apps | A Little More Play",
    description:
      "Clever games and playful Apple experiences from an independent studio. Discover aBop for iMessage, Chomp Champ, Fake Caller, and more. Crossfire Blast coming soon.",
    body,
    home: true,
  }),
);
for (const app of apps) {
  const screenshotWidth =
    app.slug === "fake-caller"
      ? 320
      : ["block-blitzen", "word-blitzen"].includes(app.slug)
        ? 221
        : 222;
  const detail = `<section class="wrap detail-hero section-space"><a class="text-link back-link" href="index.html#apps">&#8592; All apps</a><div class="detail-layout"><div><p class="eyebrow">${esc(app.category)} / AVAILABLE NOW</p><h1>${esc(app.name)}</h1><p class="detail-tagline">${esc(app.tagline)}</p><p>${esc(app.intro)}</p><div class="actions">${store(app)}${app.android ? `<a class="text-link" href="${app.android}">Get it on Google Play ${arrow}</a>` : ""}</div><p class="platform-note">${esc(app.platform)} &middot; Check the App Store for device requirements.</p></div><div class="detail-art ${app.color}">${icon(app, 'fetchpriority="high"')}</div></div></section><section class="wrap detail-features section-space" aria-labelledby="features-title"><p class="eyebrow">A LITTLE LOOK INSIDE</p><h2 id="features-title">Here's where the fun starts.</h2><div class="feature-list">${app.features.map(([title, copy], index) => `<article><span class="eyebrow">0${index + 1}</span><h3>${esc(title)}</h3><p>${esc(copy)}</p></article>`).join("")}</div></section><section class="wrap detail-preview section-space">${app.slug === "abop" ? '<div class="preview-gallery">' : ""}<figure><img src="${esc(app.screenshot || `assets/${app.slug}-screen.webp`)}" width="${screenshotWidth}" height="480" alt="${esc(app.name)} promotional screenshot from the App Store" loading="lazy"><figcaption>From the ${esc(app.name)} App Store listing.</figcaption></figure>${app.slug === "abop" ? `${abopDemo}</div>` : ""}<div><p class="eyebrow">READY WHEN YOU ARE</p><h2>A new favorite<br>is one tap away.</h2><p>Visit the App Store for more screenshots, device compatibility, and the latest version.</p>${store(app)}<div class="detail-support"><a href="${app.privacy}">Privacy policy ${arrow}</a><a href="mailto:hotpotatoapps@gmail.com?subject=${encodeURIComponent(app.name + " support")}">Get support ${arrow}</a></div></div></section>`;
  await fs.writeFile(
    `${app.slug}.html`,
    page({
      title: `${app.name} | Hot Potato Apps`,
      description: app.description,
      path: `${app.slug}.html`,
      body: detail,
    }),
  );
}
await fs.writeFile(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${["", ...apps.map((app) => `${app.slug}.html`)].map((path) => `<url><loc>${origin}/${path}</loc></url>`).join("")}</urlset>\n`,
);
console.log(`Built homepage, ${apps.length} app pages, and sitemap.`);
