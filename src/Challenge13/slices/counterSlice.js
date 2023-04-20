import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementBy: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { incrementBy, decrement } = counterSlice.actions;
export default counterSlice.reducer;
