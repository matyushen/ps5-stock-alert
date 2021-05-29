# Be smart about hunting for a PS5

## Stop wasting your time on refreshing those pages.

A simple app that will check a given list of Amazon's (and other stores) pages for PS5 stock. Sends notifications to Telegram when the stock is detected. Runs on a schedule in GitHub Actions workflow and can be run locally for a more precise execution.

Inspired by a great [episode](https://syntax.fm/show/311/hasty-treat-how-would-we-script-a-ps5-buying-bot) on Syntax podcast.

Don't forget to create an `.env` file in the root:

```dotenv
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```
