import { createSlice } from "@reduxjs/toolkit";
//* State managment TODO
//? End points!
// const initialState: IDataSupabase | null = {value: null};
export const productData = createSlice({
  name: "productData",
  initialState: { value: "pizza" },
  reducers: {
    endpoint: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { endpoint } = productData.actions;
export default productData.reducer;
