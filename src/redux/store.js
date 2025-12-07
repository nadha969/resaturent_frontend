import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const restaurentstore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default restaurentstore;