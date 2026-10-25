/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node 24 asset generation script. */
const { chromium } = require("@playwright/test");
const { extensions } = require("../lib/extensions.ts");
const { mkdir } = require("node:fs/promises");
const path = require("node:path");

// Capture our code-native concept screens as local, replaceable PNG assets.
(async () => {
  const browser = await chromium.launch({
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
  });
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: 1,
    });
    for (const extension of extensions.filter((item) => item.isSample)) {
      await page.goto(`http://localhost:3000/extensions/${extension.slug}`, {
        waitUntil: "networkidle",
      });
      await page.evaluate(() => document.fonts.ready);
      for (const [index, screenshot] of extension.screenshots.entries()) {
        if (index)
          await page.getByRole("button", { name: "Next screenshot" }).click();
        const destination = path.join(
          __dirname,
          "..",
          "public",
          screenshot.src,
        );
        await mkdir(path.dirname(destination), { recursive: true });
        await page
          .locator(".detail-gallery .product-preview")
          .screenshot({ path: destination });
        console.log(screenshot.src);
      }
    }
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
