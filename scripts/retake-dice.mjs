import puppeteer from "puppeteer";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/screenshots");

const browser = await puppeteer.launch({
  headless: true,
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--font-render-hinting=none",
  ],
});

const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });

await page.goto("https://sprit6487.github.io/slowmath_dice/", {
  waitUntil: "networkidle0",
  timeout: 30000,
});

await new Promise((r) => setTimeout(r, 4000));

await page.screenshot({
  path: join(OUT_DIR, "slowmath_dice.png"),
  clip: { x: 0, y: 0, width: 390, height: 844 },
});

await browser.close();
console.log("Done.");
