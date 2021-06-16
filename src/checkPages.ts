import { links, Link, LinkType } from "./links";
import { sendMessage } from "./sendMessage";
import { chromium, Page } from "playwright";

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const handleStockAvailability = async (
  link: Link,
  stockFound: boolean,
  page: Page
) => {
  if (!stockFound) {
    console.log(`Still no stock for ${link.name}`);
    return;
  }
  await sendMessage(
    `🚨 ${" "}There might be a PS5 (${link.name}) in stock at ${link.url}`,
    page
  );
};

export const checkPages = async () => {
  const browser = await chromium.launch({
    headless: process.env.HEADLESS === "true",
  });
  const browserContext = await browser.newContext({
    viewport: {
      width: 2560,
      height: 1440,
    },
  });

  for (const link of links) {
    const page = await browserContext.newPage();
    await page.goto(link.url);

    if (link.type === LinkType.AMAZON) {
      if (link.dataDefaultAsin) {
        const variantButton = await page.$(
          `li[data-defaultasin=${link.dataDefaultAsin}] button`
        );
        if (variantButton) {
          // There might be some cookies banners or modals, we ignore them
          await variantButton.click({ force: true });
          // FIXME: Next assertion is done before page reload for some reason, so we wait
          await sleep(1500);
        }
      }
      const addToCartButton = await page.$(
        "#desktop_buybox_feature_div #addToCart input#add-to-cart-button"
      );

      const availabilitySuccessLabel = await page.$(
        "#availability .a-color-success"
      );
      await handleStockAvailability(
        link,
        !!addToCartButton && !!availabilitySuccessLabel,
        page
      );
    }

    if (link.type === LinkType.MEDIAMARKT) {
      const title = await page.textContent('[data-test="product-title"]');
      await handleStockAvailability(
        link,
        title.includes("SONY PlayStation 5"),
        page
      );
    }

    if (link.type === LinkType.CYBERPORT) {
      const title = await page.textContent(
        '[title="Mehr Informationen zum Produkt"]'
      );
      await handleStockAvailability(
        link,
        title.includes("Sony PlayStation 5"),
        page
      );
    }

    if (link.type === LinkType.GAMESTOP) {
      const cards = await page.$$(".gameCardStyle");
      const hasMoreCards = cards && cards.length > 5;
      await handleStockAvailability(link, hasMoreCards, page);
    }

    if (link.type === LinkType.EURONICS) {
      const addToCartButton = await page.$("#buybox--button");
      await handleStockAvailability(link, !!addToCartButton, page);
    }
    await page.close();
  }

  await browserContext.close();
  await browser.close();
};
