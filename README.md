# Hot Potato Apps website

Static HTML, CSS, and a small optional JavaScript enhancement, hosted on GitHub Pages.
The committed HTML works directly without a server-side build or package install.

## Updating products

Edit `data/apps.json` for released apps and `data/upcoming.json` for Coming Soon copy.
Edit `scripts/build.mjs` for shared page structure or homepage editorial copy.
Then run:

```sh
npm run build
npm run check
```

Node.js 20 or newer is sufficient; the build has no package dependencies. Include
the regenerated HTML and sitemap with source changes when publishing. Existing
privacy policies are maintained separately and never overwritten by the build.

## Local preview

```sh
python3 -m http.server 8088 --bind 127.0.0.1
```

Open `http://127.0.0.1:8088`. Filters enhance the page when JavaScript is enabled;
all apps and download links are present in the original HTML without JavaScript.

Artwork is stored locally as WebP. The original supplied Chomp Champ PNG remains
available. Font licensing is in `assets/FONT-LICENSE.txt`. No tracking, backend,
newsletter service, or external font calls are introduced.

Read `DESIGN_NOTES.md` for the creative direction, content assumptions, and future
experiments, and `VERIFICATION.md` for the implementation checks.
