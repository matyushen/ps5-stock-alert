import { Page } from "playwright";

export const changeAmazonRegion = async (
  page: Page,
  postalCode: string = "10119"
) => {
  const title = await page.locator("#glow-ingress-line2").textContent();

  if (title?.includes("10119")) {
    return;
  }

  await page.click("#nav-global-location-popover-link");
  await page.waitForTimeout(2000);

  await page.fill("#GLUXZipUpdateInput", postalCode);

  await page.click("#GLUXZipUpdate");
  await page.waitForTimeout(2000);

  if (page.url().includes("amazon.de")) {
    await page.waitForSelector("#GLUXZipConfirmationSection");
    const submitButton = await page.$('[data-action="a-popover-close"]');
    if (submitButton?.isEnabled()) {
      await submitButton.click();
      await page.waitForTimeout(2000);
    }
  }
};
