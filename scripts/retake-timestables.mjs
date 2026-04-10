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

await page.goto("https://sprit6487.github.io/slowmath_timestables/", {
  waitUntil: "networkidle2",
  timeout: 20000,
});

// Wait for splash to auto-dismiss
await new Promise((r) => setTimeout(r, 4000));

// Inspect views
const views = await page.evaluate(() =>
  [...document.querySelectorAll("[id]")].map((el) => ({
    id: el.id,
    display: window.getComputedStyle(el).display,
  })).filter(v => v.id && v.display !== "none").map(v => v.id)
);
console.log("Visible views:", views);

// Hide login, show start-view
const result = await page.evaluate(() => {
  const login = document.querySelector("#login-view, .login-view, [class*='login']");
  const start = document.querySelector("#start-view, .start-view, [class*='start']");

  if (login) { login.style.display = "none"; }
  if (start) { start.style.display = "flex"; }

  return {
    hiddenLogin: login?.id || login?.className,
    shownStart: start?.id || start?.className,
  };
});
console.log("DOM manipulation:", result);

await new Promise((r) => setTimeout(r, 500));

await page.screenshot({
  path: join(OUT_DIR, "slowmath_timestables.png"),
  clip: { x: 0, y: 0, width: 390, height: 844 },
});

await browser.close();
console.log("Done.");
