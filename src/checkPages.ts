import { links, Link, LinkType } from "./links";
import { playSiren } from "./play";
import { sendMessage } from "./sendMessage";
import formatISO from "date-fns/formatISO";
import { Page } from "playwright/types/types";

const { chromium } = require("playwright");

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
  console.log(`🚨 ${" "}There might be a ${link.name} in stock at ${link.url}`);
  await page.screenshot({
    path: `screenshots/screenshot-${formatISO(new Date())}.png`,
  });
  await sendMessage(link);
  await playSiren();
};

export const checkPages = async () => {
  const browser = await chromium.launch({ headless: true });
  const browserContext = await browser.newContext({
    viewport: {
      width: 2560,
      height: 1440,
      deviceScaleFactor: 2,
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
          await variantButton.click({ force: true });
          // FIXME: Next assertion is done before page reload for some reason, so we wait
          await sleep(1500);
        }
      }
      const addToCartButton = await page.$(
        "#desktop_buybox_feature_div #addToCart input#add-to-cart-button"
      );
      await handleStockAvailability(link, !!addToCartButton, page);
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
      const sorryTitle = await page.$('text="Sorry, PS5-Fans."');
      await handleStockAvailability(link, !sorryTitle, page);
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
