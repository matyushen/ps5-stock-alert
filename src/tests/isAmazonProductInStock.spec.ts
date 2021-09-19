import { isAmazonProductInStock } from "../isAmazonProductInStock";
import { test, expect } from "@playwright/test";
import { browserContextOptions } from "../browserContextOptions";

test.use({
  ...browserContextOptions,
});

test("isAmazonProductInStock - true", async ({ page }) => {
  await page.goto("https://www.amazon.de/-/en/9399506/dp/B094WLFGD3");
  expect(await isAmazonProductInStock(page, "B094WLFGD3")).toEqual(true);
});

test("isAmazonProductInStock - false", async ({ page }) => {
  await page.goto("https://www.amazon.de/-/en/dp/B08H98GVK8");
  expect(await isAmazonProductInStock(page, "B08H98GVK8")).toEqual(false);
});
