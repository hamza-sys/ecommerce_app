import { createSlice } from "@reduxjs/toolkit";

const productsReducer = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        loadProducts: (state, action) => {
            state = action.payload
        }
    }
})

export const {loadProducts} = productsReducer.actions

export default productsReducer.reducer