import { links, Link, LinkType } from "./links";
import { ChromiumBrowserContext } from "playwright";
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
    console.log(`Still no stock for ${link.name}: ${link.url}`);
    return;
  }
  console.log(`🚨 ${" "}There might be a ${link.name} in stock at ${link.url}`);
  await page.screenshot({
    path: `screenshots/screenshot-${formatISO(new Date())}.png`,
  });
  await sendMessage(link);
  await playSiren();
};

const evaluateAmazonLink = async (
  link: Link,
  context: ChromiumBrowserContext
) => {
  const page = await context.newPage();
  await page.goto(link.url);
  if (link.dataDefaultAsin) {
    const variantButton = await page.$(
      `li[data-defaultasin=${link.dataDefaultAsin}] button`
    );

    if (variantButton) {
      await variantButton.click({ force: true });
      // FIXME: Next assertion is done before page reload for some reason, so we wait
      await sleep(1000);
    }
  }

  const addToCartButton = await page.$(
    "#desktop_buybox_feature_div #addToCart input#add-to-cart-button"
  );

  await handleStockAvailability(link, !!addToCartButton, page);

  await page.close();
};

const evaluateMediaMarktLink = async (
  link: Link,
  context: ChromiumBrowserContext
) => {
  const page = await context.newPage();
  await page.goto(link.url);
  const title = await page.textContent('[data-test="product-title"]');
  await handleStockAvailability(
    link,
    title.includes("SONY PlayStation 5"),
    page
  );
  await page.close();
};

const evaluateGameStopLink = async (
  link: Link,
  context: ChromiumBrowserContext
) => {
  const page = await context.newPage();
  await page.goto(link.url);
  const sorryTitle = await page.$('text="Sorry, PS5-Fans."');
  await handleStockAvailability(link, !sorryTitle, page);
  await page.close();
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
    if (link.type === LinkType.AMAZON) {
      await evaluateAmazonLink(link, browserContext);
    }
    if (link.type === LinkType.MEDIAMARKT) {
      await evaluateMediaMarktLink(link, browserContext);
    }
    if (link.type === LinkType.GAMESTOP) {
      await evaluateGameStopLink(link, browserContext);
    }
  }

  await browser.close();
};
