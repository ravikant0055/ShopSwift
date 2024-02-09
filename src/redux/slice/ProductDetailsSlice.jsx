import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  details: {
    product_id:'',
  details:[],
  descriptions:[],
  fabric: [],
  care_instructions: []
  }
  
}

export const productDetailsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.details = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProductDetails } = productDetailsSlice.actions

export default productDetailsSlice.reducer