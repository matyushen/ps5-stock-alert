import { links, Link, LinkType } from "./links";
import { sendMessage } from "./sendMessage";
import { Page } from "puppeteer";
import { viewportSettings } from "./viewportSettings";

const puppeteer = require("puppeteer");

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const evaluateAmazonLink = async (link: Link, page: Page) => {
  const variantButton = await page.$(
    `li[data-defaultasin=${link.dataDefaultAsin}] button`
  );

  if (variantButton) {
    await variantButton.click();
    await page.waitForTimeout(1000);
  }

  const addToCartButton = await page.$(
    "form#addToCart input#add-to-cart-button"
  );

  if (addToCartButton) {
    console.log(
      `🚨🚨🚨 There might be a ${link.name} in stock at ${link.url} 🚨🚨🚨`
    );
    await sendMessage(link);
    return true;
  } else {
    console.log(`Still no stock for ${link.name}: ${link.url}`);
    return false;
  }
};

const run = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport(viewportSettings);

  const checkPages = async (page: Page) => {
    for (let link of links) {
      await page.goto(link.url, { waitUntil: "load", timeout: 0 });
      if (link.type === LinkType.AMAZON) {
        await evaluateAmazonLink(link, page);
      }
    }
    await sleep(60000);
    await page.reload();
    await checkPages(page);
  };

  await checkPages(page);

  await browser.close();
};

run().catch((e) => console.log(e.message));
