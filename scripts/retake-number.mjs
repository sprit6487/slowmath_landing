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

// Wait for page to fully render
await new Promise((r) => setTimeout(r, 3000));

// Try pressing Escape to close modal/login overlay
await page.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 500));

// Check page structure
const html = await page.evaluate(() => document.body.innerHTML.substring(0, 2000));
console.log("Page HTML snippet:", html.substring(0, 500));

// Try to find and click a close button or skip button
const clicked = await page.evaluate(() => {
  const candidates = [
    ...document.querySelectorAll("button, a, [role='button']"),
  ];
  const skip = candidates.find(
    (el) =>
      el.textContent?.includes("건너뛰") ||
      el.textContent?.includes("시작") ||
      el.textContent?.includes("닫기") ||
      el.textContent?.includes("×") ||
      el.textContent?.includes("X")
  );
  if (skip) {
    skip.click();
    return skip.textContent;
  }
  return null;
});
console.log("Clicked:", clicked);

await new Promise((r) => setTimeout(r, 1500));

await page.screenshot({
  path: join(OUT_DIR, "slowmath_number_attempt2.png"),
  clip: { x: 0, y: 0, width: 390, height: 844 },
});

await browser.close();
console.log("Done.");
