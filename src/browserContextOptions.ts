import { BrowserContextOptions } from "playwright";

export const browserContextOptions: BrowserContextOptions = {
  userAgent:
    "Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; de-de) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10",
  geolocation: {
    latitude: 52.53037768488711,
    longitude: 13.402106608194009,
  },
  hasTouch: true,
  locale: "de-DE",
  viewport: {
    width: 2160,
    height: 1620,
  },
};
