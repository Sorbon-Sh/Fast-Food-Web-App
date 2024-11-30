import { configureStore } from "@reduxjs/toolkit";
import { supabaseApi } from "./RTKQuery/getProductById";
import { productData } from "./slices/grudSupabase";

export const store = configureStore({
  reducer: {
    [supabaseApi.reducerPath]: supabaseApi.reducer,
    [productData.reducerPath]: productData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    //* Для Запросов
    getDefaultMiddleware().concat(supabaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
