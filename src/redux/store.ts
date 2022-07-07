import { configureStore } from '@reduxjs/toolkit';
import fetchCatsReducer from './slices/catImages';

export const store = configureStore({
  reducer: {
    cats: fetchCatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
