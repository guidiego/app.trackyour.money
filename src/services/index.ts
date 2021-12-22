import { pokemonApi } from "./pokemon";

export const reducer = {
  [pokemonApi.reducerPath]: pokemonApi.reducer,
};

export const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(pokemonApi.middleware);
