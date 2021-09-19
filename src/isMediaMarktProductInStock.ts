import { Page } from "playwright";

export const isMediaMarktProductInStock = async (
  page: Page
): Promise<boolean> => {
  await page.waitForTimeout(1000);
  const addToCartButton = await page.$(` #pdp-add-to-cart-button`);
  const notInStockText = await page.$(
    "text=Dieser Artikel ist aktuell nicht verfügbar."
  );

  if (!notInStockText && !addToCartButton) {
    console.log("Could not check Media Markt stock!");
    throw new Error("Could not check stock!");
  }

  return !!addToCartButton;
};
