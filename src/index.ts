import { links, Link, LinkType } from "./links";
import { sendMessage } from "./sendMessage";
import { Page } from "playwright";
import { format } from "date-fns";

const { chromium } = require("playwright");
const TIMEOUT = 5 * 60 * 1000;

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const evaluateAmazonLink = async (link: Link, page: Page) => {
  if (link.dataDefaultAsin) {
    const variantButton = await page.$(
      `li[data-defaultasin=${link.dataDefaultAsin}] button`
    );

    if (variantButton) {
      await variantButton.click({ force: true });
      // FIXME: Next assertion is done before page reload for some reason, so we wait
      await sleep(3000);
    }
  }

  const addToCartButton = await page.$(
    "#desktop_buybox_feature_div #addToCart input#add-to-cart-button"
  );

  if (addToCartButton) {
    console.log(`🚨 There might be a ${link.name} in stock at ${link.url}`);
    await sendMessage(link);
  } else {
    console.log(`Still no stock for ${link.name}: ${link.url}`);
  }
};

const run = async () => {
  const browser = await chromium.launch({ headless: true });
  const browserContext = await browser.newContext({
    viewport: {
      width: 2560,
      height: 1440,
      deviceScaleFactor: 2,
    },
  });
  let count = 1;

  const checkPages = async () => {
    console.log(`🚀 Cycle: #${count}`);
    for (let link of links) {
      const page = await browserContext.newPage();
      await page.goto(link.url);
      if (link.type === LinkType.AMAZON) {
        await evaluateAmazonLink(link, page);
      }
      await page.close();
    }

    console.log(`💤 Sleeping at ${format(new Date(), "PPpp")}`);
    count += 1;
    await sleep(TIMEOUT);
    await checkPages();
  };

  await checkPages();

  await browser.close();
};

run().catch((e) => console.log(e.message));
