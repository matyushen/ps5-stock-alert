export type Link = {
  name: string;
  url: string;
  dataDefaultAsin?: string;
  type: LinkType;
};

export enum LinkType {
  MCLAREN = "MCLAREN STORE",
}

export const links: Link[] = [
  {
    name: "Daniel Ricciardo British GP 9FORTY Cap",
    url: "https://www.mclarenstore.com/en/de/mclaren-f1-daniel-ricciardo-british-gp-9forty-cap/701219425-mint.html",
    dataDefaultAsin: "701219425-mint",
    type: LinkType.MCLAREN,
  },
  {
    name: "Gulf Classic 9FORTY Cap",
    url: "https://www.mclarenstore.com/en/de/mclaren-f1-gulf-classic-9forty-cap/701218455-blue.html",
    dataDefaultAsin: "701218455-blue",
    type: LinkType.MCLAREN,
  },
];
