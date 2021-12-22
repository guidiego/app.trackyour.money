import React, { useState } from "react";
import PurePokemonList from "./PurePokemonList";

import { useGetPokemonsQuery } from "~/services/pokemon";

export type Props = {
  offset: number;
  limit: number;
};

export const PokemonList: React.FC<Props> = ({ offset, limit }) => {
  const [query, setQuery] = useState({ offset, limit });
  const { data } = useGetPokemonsQuery(query);

  return <PurePokemonList pokemons={data.results} />;
};

export default PokemonList;
