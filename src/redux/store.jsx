import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import productDetailsReducer from './slice/ProductDetailsSlice'
import FilterSlice from './slice/FilterSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    productDetails: productDetailsReducer,
    products : FilterSlice
  },
})