import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import productDetailsReducer from './slice/ProductDetailsSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    productDetails: productDetailsReducer,
  },
})