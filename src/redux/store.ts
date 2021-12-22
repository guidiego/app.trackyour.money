import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { reducer as featureReducer } from "~/features";
import { reducer as apiReducer, middleware } from "~/services";

export const makeStore = () =>
  configureStore({
    reducer: {
      ...featureReducer,
      ...apiReducer,
    },
    middleware,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const storeWrapped = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
