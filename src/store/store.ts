import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import dataReducer from '../features/dataSlice';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
  },
});
