export type Link = {
  name: string;
  url: string;
  dataDefaultAsin?: string;
  type: LinkType;
};

export enum LinkType {
  AMAZON = "AMAZON",
  MEDIAMARKT = "MEDIAMARKT",
}

export const links: Link[] = [
  {
    name: "Amazon DE - Digital",
    url: "https://www.amazon.de/-/en/dp/B08H98GVK8",
    dataDefaultAsin: "B08H98GVK8",
    type: LinkType.AMAZON,
  },
  {
    name: "Media Markt DE - Digital",
    url:
      "https://www.mediamarkt.de/de/product/_sony-playstation%C2%AE5-digital-edition-2661939.html",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Saturn DE - Digital",
    url:
      "https://www.saturn.de/de/product/_sony-playstation%C2%AE5-digital-edition-2661939.html",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Amazon DE - Marvel's Spider-Man: Miles Morales",
    url: "https://www.amazon.de/-/en/dp/B091DZ8WZQ",
    dataDefaultAsin: "B091DZ8WZQ",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon DE",
    url: "https://www.amazon.de/-/dp/B08H93ZRK9",
    dataDefaultAsin: "B08H93ZRK9",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon DE - Ratchet & Clank",
    url: "https://www.amazon.de/-/en/dp/B095Z1QGWJ",
    dataDefaultAsin: "B095Z1QGWJ",
    type: LinkType.AMAZON,
  },
  {
    name: "Media Markt DE",
    url:
      "https://www.mediamarkt.de/de/product/_sony-playstation%C2%AE5-2661938.html",
    type: LinkType.MEDIAMARKT,
  },

  {
    name: "Media Markt DE - With DualSense",
    url:
      "https://www.mediamarkt.de/de/product/_sony-playstation®5-dualsense™-2752998.html",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Media Markt DE - Ratchet & Clank",
    url:
      "https://www.mediamarkt.de/de/product/_sony-ps5-ratchet-clank-rift-apart-2741441.html",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Media Markt DE - Ghost of Tsushima Director's Cut",
    url:
      "https://www.mediamarkt.de/de/product/_sony-ps5-ghost-of-tsushima-director-s-cut-2757003.html",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Saturn DE",
    url:
      "https://www.saturn.de/de/product/_sony-playstation%C2%AE5-2661938.html",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Saturn DE - With DualSense",
    url:
      "https://www.saturn.de/de/product/_sony-playstation®5-dualsense™-2752998.html",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Saturn DE - Ratchet & Clank",
    url:
      "https://www.saturn.de/de/product/_sony-ps5-ratchet-clank-rift-apart-2741441.html",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Saturn DE - Ghost of Tsushima Director's Cut",
    url:
      "https://www.saturn.de/de/product/_sony-ps5-ghost-of-tsushima-director-s-cut-2757003.html",
    type: LinkType.MEDIAMARKT,
  },
];
