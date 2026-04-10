import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/screenshots");
mkdirSync(OUT_DIR, { recursive: true });

const BASE = "https://sprit6487.github.io";

const apps = [
  "slowmath_number",
  "slowmath_dice",
  "slowmath_matching",
  "slowmath_easy",
  "slowmath_circle",
  "slowmath_plusone",
  "slowmath_plustwo",
  "slowmath_plusthree",
  "slowmath_combining",
  "slowmath_splitting",
  "slowmath_complement",
  "slowmath_comparing",
  "slowmath_comparing2",
  "slowmath_pattern",
  "slowmath_color",
  "slowmath_colorcopy",
  "slowmath_linedraw",
  "slowmath_dot2dot",
  "slowmath_numberdraw",
  "slowmath_clock",
  "slowmath_timestables",
];

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});

for (const slug of apps) {
  const url = `${BASE}/${slug}/`;
  console.log(`→ ${slug}`);
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });

  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 20000 });
    // Wait for splash to auto-dismiss (splash removes itself after 3s + 500ms fade)
    await new Promise((r) => setTimeout(r, 4000));

    await page.screenshot({
      path: join(OUT_DIR, `${slug}.png`),
      clip: { x: 0, y: 0, width: 390, height: 844 },
    });
    console.log(`  ✓ saved`);
  } catch (e) {
    console.error(`  ✗ ${e.message}`);
  }
  await page.close();
}

await browser.close();
console.log("Done.");
