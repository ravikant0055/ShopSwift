import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
//   user:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null ,
  token:localStorage.getItem('token') || null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
    setLoading: (state, action) => {
        state.loading = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, setToken, setUser } = authSlice.actions

export default authSlice.reducer