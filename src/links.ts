export type Link = {
  name: string;
  url: string;
  dataDefaultAsin?: string;
  type: LinkType;
};

export enum LinkType {
  AMAZON = "AMAZON",
  MEDIAMARKT = "MEDIAMARKT",
  GAMESTOP = "GAMESTOP",
  EURONICS = "EURONICS",
  CYBERPORT = "CYBERPORT",
}

export const links: Link[] = [
  {
    name: "Amazon DE - Digital",
    url: "https://www.amazon.de/-/en/dp/B08H98GVK8",
    dataDefaultAsin: "B08H98GVK8",
    type: LinkType.AMAZON,
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
];
