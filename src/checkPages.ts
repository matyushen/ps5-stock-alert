import { links, Link, LinkType } from "./links";
import { sendMessage } from "./sendMessage";
import { chromium, Page } from "playwright";
import { isAmazonProductInStock } from "./isAmazonProductInStock";
import { formatISO, formatDuration, intervalToDuration } from "date-fns";
import { isMediaMarktProductInStock } from "./isMediaMarktProductInStock";
import { browserContextOptions } from "./browserContextOptions";

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
  const startTime = new Date();
  const browser = await chromium.launch({
    chromiumSandbox: false,
    headless: process.env.HEADLESS === "true",
    args: ["--no-sandbox"],
  });
  const browserContext = await browser.newContext({
    ...browserContextOptions,
    storageState: "state.json",
  });

  for (const link of links) {
    const page = await browserContext.newPage();

    await page.goto(link.url);

    try {
      if (link.type === LinkType.AMAZON) {
        if (link.dataDefaultAsin) {
          const isInStock = await isAmazonProductInStock(
            page,
            link.dataDefaultAsin
          );

          await handleStockAvailability(link, isInStock, page);
        }
      }

      if (link.type === LinkType.MEDIAMARKT) {
        const isInStock = await isMediaMarktProductInStock(page);

        await handleStockAvailability(link, isInStock, page);
      }
    } catch {
      const path = `screenshots/screenshot-error-${formatISO(new Date())}.png`;
      await page.screenshot({
        path,
      });
    }
    await browserContext.storageState({ path: "state.json" });
    await page.close();
  }

  await browserContext.close();
  await browser.close();

  console.log(
    `💤 ${" "}Run completed in ${formatDuration(
      intervalToDuration({ start: startTime, end: new Date() })
    )}`
  );
};
