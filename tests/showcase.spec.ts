import { test, expect } from "@playwright/test";
import { extensions } from "../lib/extensions";
import { siteConfig } from '../lib/site-config';

test('canonical URLs, product previews, sitemap, and host redirects match the public domain', async ({ page, request }) => {
  for (const extension of extensions) {
    await page.goto(`/extensions/${extension.slug}`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${siteConfig.url}/extensions/${extension.slug}`);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', `${siteConfig.url}/extensions/${extension.slug}`);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', extension.description);
  }
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  for (const extension of extensions) expect(xml).toContain(`${siteConfig.url}/extensions/${extension.slug}`);
  expect(await (await request.get('/robots.txt')).text()).toContain(`${siteConfig.url}/sitemap.xml`);
  const redirect = await request.get('/extensions/text-extractor?ref=portfolio', { headers: { host: 'extensions.nishkumar.dev' }, maxRedirects: 0 });
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe(`${siteConfig.url}/extensions/text-extractor?ref=portfolio`);
});

for (const width of [360, 768, 1024, 1440, 1920]) {
  test(`all pages fit at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of [
      "/",
      ...extensions.map((item) => `/extensions/${item.slug}`),
    ]) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      await expect
        .poll(() =>
          page.locator("img").evaluateAll((images) =>
            images
              .filter((image) => {
                const bounds = image.getBoundingClientRect();
                return bounds.top < window.innerHeight && bounds.bottom > 0;
              })
              .every(
                (image) =>
                  image instanceof HTMLImageElement &&
                  image.complete &&
                  image.naturalWidth > 0,
              ),
          ),
        )
        .toBe(true);
      expect(
        await page
          .locator("h1")
          .evaluate((element) =>
            parseFloat(getComputedStyle(element).fontSize),
          ),
      ).toBeGreaterThan(25);
      if (
        (width === 360 || width === 1440) &&
        (route === "/" || route.endsWith("text-extractor"))
      ) {
        await page.screenshot({
          path: `test-results/${route === "/" ? "collection" : "detail"}-${width}.png`,
          fullPage: true,
        });
      }
    }
    expect(errors).toEqual([]);
  });
}

test("search, category, browser, sorting, and empty state work together", async ({
  page,
}) => {
  await page.goto("/");
  const cards = page.locator("#extensions .extension-card");
  await expect(cards).toHaveCount(extensions.length);
  await page.getByRole("button", { name: "Productivity", exact: true }).click();
  await expect(cards).toHaveCount(1);
  await page.getByRole("button", { name: "All tools" }).click();
  await page
    .getByRole("combobox", { name: "Browser", exact: true })
    .selectOption("edge");
  await expect(cards).toHaveCount(
    extensions.filter((item) => item.browsers.includes("edge")).length,
  );
  await page
    .getByRole("searchbox", { name: "Search extensions" })
    .fill("  extractor  ");
  await expect(cards).toHaveCount(1);
  await expect(cards.first()).toContainText("Text Extractor");
  await page.getByRole("searchbox").fill("not-an-extension");
  await expect(
    page.getByRole("heading", { name: "No tools match just yet." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(cards).toHaveCount(extensions.length);
  await page
    .getByRole("combobox", { name: "Sort extensions" })
    .selectOption("name");
  await expect(cards.first()).toContainText("Pure Anime");
  await page
    .getByRole("combobox", { name: "Sort extensions" })
    .selectOption("updated");
  await expect(cards.first()).toContainText("Text Extractor");
});

test("preview, detail gallery, FAQ, and direct navigation work", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "Explore Text Extractor", exact: true })
    .first()
    .click();
  await expect(page).toHaveURL(/extensions\/text-extractor/);
  await page.getByRole("button", { name: "Next screenshot" }).click();
  await expect(page.locator("figcaption")).toContainText("2 / 3");
  await page.getByRole("button", { name: "Next screenshot" }).click();
  await expect(page.locator("figcaption")).toContainText("3 / 3");
  await page.getByRole("button", { name: "Next screenshot" }).click();
  await expect(page.locator("figcaption")).toContainText("1 / 3");
  await page.locator("summary").first().focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  const product = extensions.find((item) => item.slug === "text-extractor")!;
  const configuredStores = [product.storeUrl, product.edgeStoreUrl].filter(
    Boolean,
  ).length;
  await expect(page.locator(".store-actions a")).toHaveCount(configuredStores);
  await expect(page.locator(".store-unavailable")).toHaveCount(
    product.browsers.length - configuredStores,
  );
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Text Extractor", exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "All extensions", exact: true }).click();
  await expect(page.locator("#extensions")).toBeInViewport();
  expect((await page.goto("/extensions/does-not-exist"))?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "This tab leads nowhere." }),
  ).toBeVisible();
});

test("mobile navigation supports keyboard and closes on resize", async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  const button = page.getByRole("button", { name: "Open menu" });
  await expect(page.locator("h1")).toHaveCSS("font-size", "36px");
  await expect(page.locator(".featured-actions .button")).toHaveCSS(
    "flex-basis",
    "100%",
  );
  await expect(button).toBeVisible();
  await button.click();
  await expect(page.locator("#site-navigation")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(button).toBeFocused();
  await expect(page.locator("#site-navigation")).toBeHidden();
  await button.click();
  await page
    .locator("#site-navigation")
    .getByRole("link", { name: "The maker" })
    .click();
  await expect(page.locator("#site-navigation")).toBeHidden();
  await expect(page.locator("#about")).toBeInViewport();
  await button.click();
  await page.setViewportSize({ width: 1024, height: 800 });
  await expect(page.locator(".menu-trigger")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await page.setViewportSize({ width: 360, height: 800 });
  await expect(page.locator("#site-navigation")).toBeHidden();
});

test("external destinations, reduced motion, and metadata are correct", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(
    page.locator('header a[href="https://www.nishkumar.dev"]'),
  ).toBeVisible();
  await expect(
    page.locator('header a[href="https://www.demos.nishkumar.dev"]'),
  ).toBeVisible();
  await expect(page).toHaveTitle("Chrome Extensions & Edge Add-ons by Nitish Kumar");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  const preview = await page.request.get("/opengraph-image");
  expect(preview.status()).toBe(200);
  expect(preview.headers()["content-type"]).toContain("image/png");
});

test("only real projects remain, and unpublished projects cannot be installed", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("#extensions .extension-card")).toHaveCount(2);
  await expect(page.locator("#extensions")).toContainText("Text Extractor");
  await expect(page.locator("#extensions")).toContainText("Pure Anime");
  await expect(page.locator(".featured-content .release-badge")).toHaveText(
    "In review",
  );
  await expect(page.locator("#extensions")).not.toContainText("fictional");
  for (const name of [
    "Tab Harbor",
    "Focus Lane",
    "Clipnote",
    "Palette Pocket",
    "Readwise View",
    "Link Sweep",
  ]) {
    await expect(page.getByRole("heading", { name, exact: true })).toHaveCount(
      0,
    );
  }
  await page.goto("/extensions/text-extractor");
  await expect(page.locator(".release-notice")).toContainText(
    "Store verification is in progress",
  );
  await expect(page.locator(".store-actions a")).toHaveCount(0);
  await expect(page.locator(".store-unavailable").first()).toContainText(
    "Awaiting store approval",
  );
  await page.goto("/extensions/pure-anime");
  await expect(page.locator(".release-notice")).toContainText(
    "Not yet published",
  );
  await expect(page.locator(".store-actions a")).toHaveCount(0);
  await expect(page.locator(".store-unavailable")).toContainText("Coming soon");
  await page.getByRole("button", { name: "Next screenshot" }).click();
  await expect(page.locator("figcaption")).toContainText("2 / 2");
  const policy = await page.request.get(
    "/extensions/text-extractor/privacy.html",
  );
  expect(policy.status()).toBe(200);
  expect(await policy.text()).toContain("Text Extractor privacy policy");
  for (const slug of [
    "tab-harbor",
    "focus-lane",
    "clipnote",
    "palette-pocket",
    "readwise-view",
    "link-sweep",
  ]) {
    expect((await page.goto(`/extensions/${slug}`))?.status()).toBe(404);
  }
});
