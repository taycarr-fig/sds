#!/usr/bin/env node
/**
 * Captures the Sign In page UI and saves a PNG screenshot.
 * Start the app first: npm run app:dev
 * Then run: node scripts/capture-signin.mjs
 */
import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "dist", "capture");
const OUT_PATH = join(OUT_DIR, "signin-capture.png");

const APP_URL = "http://localhost:8000/#signin";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(APP_URL, { waitUntil: "networkidle" });
  await page.waitForSelector('text="Sign in to your account"', { timeout: 10000 });

  mkdirSync(OUT_DIR, { recursive: true });
  await page.screenshot({ path: OUT_PATH, fullPage: true });

  await browser.close();
  console.log("Screenshot saved to:", OUT_PATH);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
