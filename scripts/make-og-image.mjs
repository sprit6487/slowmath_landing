import puppeteer from "puppeteer";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../public/og-image.png");

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

await page.goto("http://localhost:4444", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise((r) => setTimeout(r, 2000));

// Show only turtle + brand + slogan in the hero
await page.evaluate(() => {
  // Hide everything after the header
  document.querySelectorAll("header ~ *").forEach((el) => {
    el.style.display = "none";
  });

  const header = document.querySelector("header");
  if (!header) return;

  // Hide description, CTA, keyword badges (keep only logo div + h1)
  header.querySelectorAll("p:not(.font-black), a, div.flex.flex-wrap").forEach((el) => {
    el.style.display = "none";
  });

  // Expand header to fill viewport height with gradient
  header.style.minHeight = "630px";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "center";
  header.style.paddingBottom = "80px";
});

await new Promise((r) => setTimeout(r, 300));

await page.screenshot({
  path: OUT,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

await browser.close();
console.log("OG image saved:", OUT);
