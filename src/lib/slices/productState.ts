import { createSlice } from "@reduxjs/toolkit";
//* State managment TODO
//? End points!
// const initialState: IDataSupabase | null = {value: null};
export const productData = createSlice({
  name: "productData",
  initialState: { value: "pizza", size: "30" },
  reducers: {
    endpoint: (state, action) => {
      state.value = action.payload;
      sessionStorage.setItem("state", state.value);
    },
    sizeChoice: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { endpoint, sizeChoice } = productData.actions;
export default productData.reducer;
