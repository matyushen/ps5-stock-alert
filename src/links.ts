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
  // {
  //   name: "Cyberport",
  //   url:
  //     "https://www.cyberport.de/tools/search-results.html?autosuggest=false&q=playstation+5",
  //   type: LinkType.CYBERPORT,
  // },
  {
    name: "Euronics",
    url:
      "https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/playstation-5/spielekonsole/playstation-5-konsole-4061856837826",
    type: LinkType.EURONICS,
  },
  {
    name: "Euronics - Digital",
    url:
      "https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/playstation-5/spielekonsole/playstation-5-digital-edition-konsole-4061856837833",
    type: LinkType.EURONICS,
  },
  {
    name: "Media Markt",
    url: "https://www.mediamarkt.de/de/search.html?query=playstation%205",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Game Stop",
    url: "https://www.gamestop.de/PS5",
    type: LinkType.GAMESTOP,
  },
  {
    name: "Saturn",
    url: "https://www.saturn.de/de/search.html?query=playstation%205",
    type: LinkType.MEDIAMARKT,
  },
  {
    name: "Amazon DE - Digital",
    url: "https://www.amazon.de/-/en/dp/B08H98GVK8",
    dataDefaultAsin: "B08H98GVK8",
    type: LinkType.AMAZON,
  },
//   {
//     name: "Amazon IT - Digital",
//     url:
//       "https://www.amazon.it/Sony-PlayStation-5-Digital-Edition/dp/B08KJF2D25",
//     dataDefaultAsin: "B08KJF2D25",
//     type: LinkType.AMAZON,
//   },
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
    name: "Amazon ES - Consola PlayStation 5 + Marvel´s Spider-Man Miles Morales + Destruction Allstars",
    url: "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B095WS48MB",
    dataDefaultAsin: "B095WS48MB",
    type: LinkType.AMAZON,
  },
    {
    name: "PlayStation 5 Consola Digital + Mando inalámbrico DualSense",
    url:
      "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B08X1WG2GJ",
    dataDefaultAsin: "B08X1WG2GJ",
    type: LinkType.AMAZON,
  },
    {
    name: "PlayStation 5 - PS5 Standard Ratchet & Clank + Suscripción PlayStation Plus 365 + Destruction AllStars [Bundle]",
    url: "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B097FHC3VB",
    dataDefaultAsin: "B097FHC3VB",
    type: LinkType.AMAZON,
  },
    {
    name: "PlayStation 5 - PS5 Standard + Ratchet & Clank + Tarjeta PSN 20 € [Bundle]",
    url: "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B0977DGMX7",
    dataDefaultAsin: "B0977DGMX7",
    type: LinkType.AMAZON,
  },
    {
    name: "Sony Consola PS5 & Ratchet & Clank - Una Dimensión Aparte",
    url: "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B099BQFGJL",
    dataDefaultAsin: "B099BQFGJL",
    type: LinkType.AMAZON,
  },
    {
    name: "Consola PlayStation 5 + Mando inalámbrico DualSense Cosmic Red",
    url: "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B09CZ9JWD9",
    dataDefaultAsin: "B09CZ9JWD9",
    type: LinkType.AMAZON,
  },
    {
    name: "Consola PlayStation 5 + Mando inalámbrico DualSense Midnight Black",
    url: "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B09CZ9P2FK",
    dataDefaultAsin: "B09CZ9P2FK",
    type: LinkType.AMAZON,
  },
    {
    name: "PlayStation 5 Consola + Mando inalámbrico DualSense",
    url: "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B08X1SPNKR",
    dataDefaultAsin: "B08X1SPNKR",
    type: LinkType.AMAZON,
  },
    {
    name: "PlayStation 5 - PS5 825GB Digital + Mando Media Remote PS5 + Tarjeta Suscripción PlayStation Plus 365 [Bundle]",
    url: "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B097FHCM3J",
    dataDefaultAsin: "B097FHCM3J",
    type: LinkType.AMAZON,
  },
    {
    name: "Consola PlayStation 5 Digital + PlayStation 5 - Mando inalámbrico DualSense Midnight Black - Exclusivo para PS5",
    url: "https://www.amazon.es/Playstation-Consola-PlayStation-5/dp/B097J2YHBG",
    dataDefaultAsin: "B097J2YHBG",
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
  // {
  //   name: "Amazon IT",
  //   url:
  //     "https://www.amazon.it/Sony-PlayStation-5-Digital-Edition/dp/B08KKJ37F7",
  //   dataDefaultAsin: "B08KKJ37F7",
  //   type: LinkType.AMAZON,
  // },
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
