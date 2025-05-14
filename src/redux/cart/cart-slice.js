import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (store, {payload})=> {

        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;