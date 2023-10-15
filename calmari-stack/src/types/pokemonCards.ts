export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Weaknesse {
  type: string;
  value: string;
}

export interface Resistance {
  type: string;
  value: string;
}

export interface Legality {
  unlimited: string;
}

export interface SetImage {
  symbol: string;
  logo: string;
}

export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legality;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: SetImage;
}

export interface Image {
  small: string;
  large: string;
}

export interface Holofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface ReverseHolofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface Price {
  holofoil: Holofoil;
  reverseHolofoil: ReverseHolofoil;
}
export interface cardMarketPrice {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number;
  suggestedPrice: number;
  reverseHoloSell: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
}

export interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices: cardMarketPrice;
}

export interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: Price;
}

export interface PokemonCard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  attacks: Attack[];
  weaknesses: Weaknesse[];
  resistances: Resistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legality;
  images: Image;
  tcgplayer: Tcgplayer;
  cardmarket: Cardmarket;
}
