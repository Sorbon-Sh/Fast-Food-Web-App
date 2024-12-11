import { createSlice } from "@reduxjs/toolkit";
//* State managment TODO
//? End points!
// const initialState: IDataSupabase | null = {value: null};
export const productData = createSlice({
  name: "productData",
  initialState: {
    value: "pizza",
    size: "30",
    sizeForm: 0,
    orderCount: 0,
    modalState: false,
  },
  reducers: {
    endpoint: (state, action) => {
      state.value = action.payload;
      sessionStorage.setItem("state", state.value);
    },
    sizeChoice: (state, action) => {
      state.size = action.payload;
    },
    sizeFormPizza: (state, action) => {
      state.sizeForm = action.payload;
    },
    orderCount: (state, action) => {
      state.orderCount = action.payload;
    },
    modalState: (state) => {
      state.modalState = !state.modalState;
    },
  },
});

export const { endpoint, sizeChoice, sizeFormPizza, orderCount, modalState } =
  productData.actions;
export default productData.reducer;
