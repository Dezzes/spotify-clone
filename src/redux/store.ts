import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./reducers/playerSlice";
import shazamApi from "./services/shazam";

const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
