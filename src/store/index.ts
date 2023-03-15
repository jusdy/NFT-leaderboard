import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menu/reducer';

const store = configureStore({
    reducer: {
        menuReducer,
    },
  });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
