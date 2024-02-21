import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter_products : [],
    all_products : [],
}

export const FilterSlice = createSlice({
    name : 'filter',
    initialState,
    reducers : {
        loadFilterProduct : (state,action) => {
            state.filter_products = action.payload
            state.all_products = action.payload
        }

    }
})

export const {loadFilterProduct} = FilterSlice.actions

export default FilterSlice.reducer;