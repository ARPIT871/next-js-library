import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slices/counter/counterSlice';

export const makeStore = () => 
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });