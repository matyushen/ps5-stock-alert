import { Link } from "./links";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export const sendMessage = async (link: Link) => {
  console.log(
    `Sending a stock alert to Whatsapp ${process.env.TWILIO_PHONE_TO}`
  );

  await client.messages.create({
    from: `${process.env.TWILIO_PHONE_FROM}`,
    body: `🚨🚨🚨 There might be a PS5 in stock at ${link.url} 🚨🚨🚨`,
    to: `${process.env.TWILIO_PHONE_TO}`,
  });
};
