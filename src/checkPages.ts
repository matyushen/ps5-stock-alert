import { links, Link, LinkType } from "./links";
import { sendMessage } from "./sendMessage";
import { chromium } from "playwright";


const handleStockAvailability = async (
  link: Link,
  stockFound: boolean,
) => {
  if (!stockFound) {
    await sendMessage(
      `Still no stock for ${link.name}`
    );
    return;
  }
  await sendMessage(
    `🚨 ${" "}The cool cap (${link.name}) might be available at ${link.url} @here`
  );
};

export const checkPages = async () => {
  const browser = await chromium.launch({
    chromiumSandbox: false,
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

    if (link.type === LinkType.MCLAREN) {
      const is_disabled = await page.$('.add-to-cart[disabled]') !== null;
      await handleStockAvailability(link, !is_disabled);
    }
    await page.close();
  }

  await browserContext.close();
  await browser.close();
};
