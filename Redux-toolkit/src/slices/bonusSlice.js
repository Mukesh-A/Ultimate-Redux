import { createAction, createSlice } from "@reduxjs/toolkit";

const incrementByAmount = createAction("account/incrementByAmount");

const initialState = {
  points: 1,
};

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1; //immer, it look like we are mutating the state but we are just copying
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) state.points += 1;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
