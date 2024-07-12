import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  pathName:""
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getPathName: (state, action) => {
      state.pathName = action.payload;
    }
  }
});

export const { getPathName } = counterSlice.actions;
export const counterReducer =counterSlice.reducer;