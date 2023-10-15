import React from "react";
import { PokemonCard } from "../types/pokemonCards";

const CardItem: React.FC<PokemonCard> = ({ data }) => {
  return (
    <li className="mt-6">
      <img src={data.images.small} alt="" />
    </li>
  );
};

export default CardItem;
