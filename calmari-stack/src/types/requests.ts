import { PokemonCard } from "./pokemonCards";

export interface pokemonResult {
  data: string;
}

export interface pokemonCardsRes {
  data: PokemonCard[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
