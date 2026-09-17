import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
const files = (await fs.readdir(".")).filter((file) => file.endsWith(".html"));
let links = 0;
for (const file of files) {
  const html = await fs.readFile(file, "utf8");
  assert.equal(
    (html.match(/<h1[ >]/g) || []).length,
    1,
    `${file}: expected one H1`,
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${file}: duplicate IDs`);
  for (const [, ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|data:)/.test(ref)) continue;
    const [target, anchor] = ref.split("#");
    const destination = target || file;
    await fs.access(destination);
    if (anchor) {
      const content = target ? await fs.readFile(destination, "utf8") : html;
      assert.ok(
        content.includes(`id="${anchor}"`),
        `${file}: missing anchor ${ref}`,
      );
    }
    links++;
  }
}
const css = await fs.readFile("assets/site.css", "utf8");
for (const [, asset] of css.matchAll(/url\(([^)]+)\)/g))
  await fs.access(path.join("assets", asset));
const apps = JSON.parse(await fs.readFile("data/apps.json", "utf8"));
for (const app of apps) {
  const html = await fs.readFile(`${app.slug}.html`, "utf8");
  assert.ok(html.includes(`https://apps.apple.com/app/id${app.id}`));
  assert.ok(html.includes(`href="${app.privacy}"`));
}
console.log(
  `PASS: ${files.length} HTML pages, ${links} local links/assets, unique IDs, headings, and all six App Store/privacy destinations.`,
);
