import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 1,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1; //immer, it look like we are mutating the state but we are just copying
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
