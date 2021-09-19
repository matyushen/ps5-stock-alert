import { test, expect } from "@playwright/test";
import { isMediaMarktProductInStock } from "../isMediaMarktProductInStock";
import { browserContextOptions } from "../browserContextOptions";

test.use({
  ...browserContextOptions,
});

test("if product is in stock on media markt", async ({ page }) => {
  await page.goto(
    "https://www.mediamarkt.de/de/product/_sony-dualsense%E2%84%A2-2681392.html"
  );
  expect(await isMediaMarktProductInStock(page)).toEqual(true);
});

test("if product is not in stock on media mark", async ({ page }) => {
  await page.goto(
    "https://www.mediamarkt.de/de/product/_sony-playstation®5-dualsense™-2752998.html"
  );
  expect(await isMediaMarktProductInStock(page)).toEqual(false);
});

test("if product is in stock on saturn", async ({ page }) => {
  await page.goto(
    "https://www.saturn.de/de/product/_sony-dualsense%E2%84%A2-2681392.html"
  );
  expect(await isMediaMarktProductInStock(page)).toEqual(true);
});

test("if product is not in stock on saturn", async ({ page }) => {
  await page.goto(
    "https://www.saturn.de/de/product/_sony-playstation®5-dualsense™-2752998.html"
  );
  expect(await isMediaMarktProductInStock(page)).toEqual(false);
});
