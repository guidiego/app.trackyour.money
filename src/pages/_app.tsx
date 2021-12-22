import "../styles/global.css";

import React from "react";
import Head from "next/head";
import AbortController from "abort-controller";

import { storeWrapped } from "~/redux/store";
import { AppType } from "next/dist/shared/lib/utils";

Object.assign(globalThis, {
  AbortController,
});

const App: AppType = (props) => {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Next + TS + Tailwind + RTK w/ WebWorker</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default storeWrapped.withRedux(App);
