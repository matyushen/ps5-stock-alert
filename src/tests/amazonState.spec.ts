import { test, expect } from "@playwright/test";
import { browserContextOptions } from "../browserContextOptions";

test.use({ ...browserContextOptions, storageState: "state.json" });

test("amazon state", async ({ page }) => {
  await page.goto("https://www.amazon.de");
  const title = page.locator("#glow-ingress-line2");
  await expect(title).toContainText("10119");
});
