import axios from "axios";
import { getEnvVar } from "./utils";

export const sendMessage = async (message: string): Promise<void> => {
  console.log(message);
  try {
    await axios.post(
      `https://api.telegram.org/bot${getEnvVar(
        "TELEGRAM_BOT_TOKEN"
      )}/sendMessage`,
      {
        chat_id: getEnvVar("TELEGRAM_CHAT_ID"),
        text: message,
      }
    );
  } catch (error) {
    console.error(error);
  }
};
