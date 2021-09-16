const { WebhookClient } = require('discord.js');
const { webhookId, webhookToken } = require('./config.json');

const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });

export const sendMessage = async (
  message: string,
): Promise<void> => {
  webhookClient.send({
    content: message,
    username: 'Our Own Zak Brown',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Zak_Brown_Goodwood_Festival_of_Speed_2021_%28cropped%29.jpg',
  });
};
