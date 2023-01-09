import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { shazamApi } from "./services/shazam";

const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
