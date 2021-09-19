import { Page } from "playwright";
import { changeAmazonRegion } from "./changeAmazonRegion";

export const isAmazonProductInStock = async (
  page: Page,
  asin: string
): Promise<boolean> => {
  await changeAmazonRegion(page);
  await page.waitForTimeout(1000);

  const variantButton = await page.$(`li[data-defaultasin=${asin}] button`);
  if (variantButton) {
    // There might be some cookies banners or modals, we ignore them
    await variantButton.click({ force: true });
    // FIXME: Next assertion is done before page reload for some reason, so we wait
    await page.waitForTimeout(3000);
  }

  const addToCartButton = await page.$(
    "#desktop_buybox_feature_div #addToCart input#add-to-cart-button"
  );

  const availabilitySuccessLabel = await page.$(
    "#availability .a-color-success"
  );

  return !!addToCartButton && !!availabilitySuccessLabel;
};
