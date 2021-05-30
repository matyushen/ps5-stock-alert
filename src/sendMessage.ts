import { formatISO } from "date-fns";
import { createReadStream } from "fs";
import { Page } from "playwright";
import { getEnvVar } from "./utils";
const telegram = require("telegram-bot-api");

const client = new telegram({
  token: getEnvVar("TELEGRAM_BOT_TOKEN"),
});

export const sendMessage = async (
  message: string,
  page: Page
): Promise<void> => {
  const path = `screenshots/screenshot-${formatISO(new Date())}.png`;
  await page.screenshot({
    path,
    fullPage: true,
  });

  client
    .sendPhoto({
      chat_id: getEnvVar("TELEGRAM_CHAT_ID"),
      caption: message,
      photo: createReadStream(path),
    })
    .then(() => {
      console.log(message);
    })
    .catch(console.error);
};
