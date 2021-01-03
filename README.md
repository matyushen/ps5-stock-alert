# Be smart about hunting for a PS5

## Stop wasting your time on refreshing those pages.

A simple app that will check a given list of Amazon's (and other stores) pages for PS5 stock. Uses Twilio to send sms when the stock is detected. It will also play siren sound when the stock is detected.

Inspired by a great [episode](https://syntax.fm/show/311/hasty-treat-how-would-we-script-a-ps5-buying-bot) on Syntax podcast.

A Twilio account is required.

Don't forget to create an `.env` file in the root:

```dotenv
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_FROM=
TWILIO_PHONE_TO=
```
