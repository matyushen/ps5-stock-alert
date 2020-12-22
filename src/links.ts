export type Link = {
  name: string;
  url: string;
  dataDefaultAsin?: string;
  type: LinkType;
  snapShot?: string;
};

// TODO: Add gamestop.de, saturn.de, mediamarkt.de
export enum LinkType {
  AMAZON = "AMAZON",
}

export const links: Link[] = [
  {
    name: "Amazon DE - Digital",
    url: "https://www.amazon.de/-/en/dp/B08H98GVK8",
    dataDefaultAsin: "B08H93ZRK9",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon IT - Digital",
    url:
      "https://www.amazon.it/Sony-PlayStation-5-Digital-Edition/dp/B08KJF2D25",
    dataDefaultAsin: "B08KJF2D25",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon NL - Digital",
    url:
      "https://www.amazon.nl/Sony-PlayStation-PlayStation®5-Digital-Edition/dp/B08H98GVK8",
    dataDefaultAsin: "B08H98GVK8",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon FR - Digital",
    url:
      "https://www.amazon.fr/PlayStation-Digital-manette-DualSense-Couleur/dp/B08H98GVK8",
    dataDefaultAsin: "B08H98GVK8",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon ES - Digital",
    url:
      "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B08KJF2D25",
    dataDefaultAsin: "B08KJF2D25",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon DE",
    url: "https://www.amazon.de/-/en/dp/B08H93ZRK9",
    dataDefaultAsin: "B08H93ZRK9",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon IT",
    url:
      "https://www.amazon.it/Sony-PlayStation-5-Digital-Edition/dp/B08KKJ37F7",
    dataDefaultAsin: "B08KKJ37F7",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon NL",
    url:
      "https://www.amazon.nl/Sony-PlayStation-PlayStation®5-Digital-Edition/dp/B08H93ZRK9",
    dataDefaultAsin: "B08H93ZRK9",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon FR",
    url:
      "https://www.amazon.fr/PlayStation-Digital-manette-DualSense-Couleur/dp/B08H93ZRK9",
    dataDefaultAsin: "B08H93ZRK9",
    type: LinkType.AMAZON,
  },
  {
    name: "Amazon ES",
    url:
      "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B08KKJ37F7",
    dataDefaultAsin: "B08KKJ37F7",
    type: LinkType.AMAZON,
  },
];
