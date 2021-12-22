import React from "react";
import DarkModeButton from "~/features/DarkMode/Button";
import { storeWrapped } from "~/redux/store";
import { getPokemons, getRunningOperationPromises } from "~/services/pokemon";

import PokemonList, {
  Props as PokemonListProps,
} from "../features/PokemonList";

type Props = {
  query: PokemonListProps;
};

export const Home: React.FC<Props> = ({ query }) => (
  <>
    <div>
      PokeList
      <DarkModeButton />
    </div>
    <div>
      <PokemonList {...query} />
    </div>
  </>
);

export const getServerSideProps = storeWrapped.getServerSideProps(
  (store) => async (ctx) => {
    const { offset = 10, limit = 10 } = ctx.query;
    const query = { offset, limit };

    store.dispatch<Any>(getPokemons.initiate(query));
    await Promise.allSettled(getRunningOperationPromises());

    return { props: { query } };
  }
);

export default Home;
