import React from "react";

export const PurePokemonList = ({ pokemons = [] }) => (
  <ul>
    {pokemons.map((pokemon) => (
      <li key={pokemon.name}>{pokemon.name}</li>
    ))}
  </ul>
);

export default PurePokemonList;
