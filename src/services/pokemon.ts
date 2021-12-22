import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

type Pokemon = {
  name: string;
};

type Results = {
  results: Pokemon[];
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPokemons: builder.query<Results, AnyObject>({
      query: ({ offset = 10, limit = 10 }) =>
        `/pokemon?offset=${offset}&limit=${limit}`,
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonsQuery,
  util: { getRunningOperationPromises },
} = pokemonApi;

export const { getPokemonByName, getPokemons } = pokemonApi.endpoints;
