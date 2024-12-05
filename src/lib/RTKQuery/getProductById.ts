import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../api/supabaseClient";
import { IDataSupabase } from "../types/types";

export const supabaseApi = createApi({
  reducerPath: "supabaseApi",
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    getCategory: builder.query<IDataSupabase[], string>({
      queryFn: async (id) => {
        const { data, error } = await supabase.from(`${id}`).select("*");
        //  .eq('done', false)

        if (error) console.log(error.message);

        return { data: data || [] };
      },
    }),
    getProduct: builder.query<IDataSupabase[], string>({
      queryFn: async (id) => {
        const { data, error } = await supabase.from(`${id}`).select("*");
        //  .eq('done', false)

        if (error) console.log(error.message);

        return { data: data || [] };
      },
    }),
  }),
});

export const { useGetCategoryQuery, useGetProductQuery } = supabaseApi;
