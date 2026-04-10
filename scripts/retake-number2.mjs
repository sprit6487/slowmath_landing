import puppeteer from "puppeteer";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/screenshots");

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});

const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });

await page.goto("https://sprit6487.github.io/slowmath_number/", {
  waitUntil: "networkidle2",
  timeout: 20000,
});

// Wait for splash to auto-dismiss (3s + fade)
await new Promise((r) => setTimeout(r, 4000));

// Inspect what views exist
const views = await page.evaluate(() => {
  const all = document.querySelectorAll("[id]");
  return [...all].map((el) => ({
    id: el.id,
    display: window.getComputedStyle(el).display,
    class: el.className,
  })).filter(v => v.id);
});
console.log("Views:", JSON.stringify(views.slice(0, 20), null, 2));

await browser.close();
