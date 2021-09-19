import { test, expect } from "@playwright/test";
import { changeAmazonRegion } from "../changeAmazonRegion";
import { browserContextOptions } from "../browserContextOptions";

test.use({
  ...browserContextOptions,
});

test("changeAmazonRegion DE", async ({ page }) => {
  await page.goto("https://amazon.de/");
  await changeAmazonRegion(page, "10119");
  const title = page.locator("#glow-ingress-line2");
  await expect(title).toContainText("10119");
});
