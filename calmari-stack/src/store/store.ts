import { create } from "zustand";
import { PokemonCard } from "../types/pokemonCards";

export const useCardStore = create((set) => ({
  card: {},
  setCard: (data: PokemonCard) => set({ card: { ...data } })
}));
