import { test, expect } from "@playwright/test";
import { extensions } from "../lib/extensions";

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
        (route === "/" || route.endsWith("tab-harbor"))
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
  await expect(cards).toHaveCount(6);
  await page.getByRole("button", { name: "Productivity", exact: true }).click();
  await expect(cards).toHaveCount(2);
  await page.getByRole("button", { name: "All tools" }).click();
  await page
    .getByRole("combobox", { name: "Browser", exact: true })
    .selectOption("edge");
  await expect(cards).toHaveCount(5);
  await page
    .getByRole("searchbox", { name: "Search extensions" })
    .fill("  palette  ");
  await expect(cards).toHaveCount(1);
  await expect(cards.first()).toContainText("Palette Pocket");
  await page.getByRole("searchbox").fill("not-an-extension");
  await expect(
    page.getByRole("heading", { name: "No tools match just yet." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(cards).toHaveCount(6);
  await page
    .getByRole("combobox", { name: "Sort extensions" })
    .selectOption("name");
  await expect(cards.first()).toContainText("Clipnote");
  await page
    .getByRole("combobox", { name: "Sort extensions" })
    .selectOption("updated");
  await expect(cards.first()).toContainText("Readwise View");
});

test("preview, detail gallery, FAQ, and direct navigation work", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Reading list", exact: true }).click();
  await expect(page.locator(".featured-visual")).toContainText(
    "A little inspiration",
  );
  await page
    .getByRole("link", { name: "Explore Tab Harbor", exact: true })
    .first()
    .click();
  await expect(page).toHaveURL(/extensions\/tab-harbor/);
  await page.getByRole("button", { name: "Next screenshot" }).click();
  await expect(page.locator("figcaption")).toContainText("2 of 2");
  await page.getByRole("button", { name: "Next screenshot" }).click();
  await expect(page.locator("figcaption")).toContainText("1 of 2");
  await page.locator("summary").first().focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await expect(page.locator(".store-actions a")).toHaveCount(0);
  await expect(page.locator(".store-unavailable")).toHaveCount(2);
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Tab Harbor", exact: true }),
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
  await expect(page).toHaveTitle("Nish / Extensions");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  const preview = await page.request.get("/opengraph-image");
  expect(preview.status()).toBe(200);
  expect(preview.headers()["content-type"]).toContain("image/png");
});
