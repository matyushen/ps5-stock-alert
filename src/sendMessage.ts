import { formatISO } from "date-fns";
import { createReadStream } from "fs";
import { Page } from "playwright";
import { getEnvVar } from "./utils";
const telegram = require("telegram-bot-api");
import { WebClient } from "@slack/client";

const client = new telegram({
  token: getEnvVar("TELEGRAM_BOT_TOKEN"),
});

const sendSlackMessage = async (text: string, path: string): Promise<void> => {
  const token = process.env.SLACK_TOKEN;
  const channel = process.env.SLACK_CHANNEL_ID;

  if (!token || !channel) return;

  const slackClient = new WebClient(token);
  try {
    await slackClient.files.upload({
      channels: channel,
      file: createReadStream(path),
      initial_comment: `${text} <!channel>`,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const sendMessage = async (
  message: string,
  page: Page
): Promise<void> => {
  const path = `screenshots/screenshot-${formatISO(new Date())}.png`;
  await page.screenshot({
    path,
  });

  await sendSlackMessage(message, path);

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
