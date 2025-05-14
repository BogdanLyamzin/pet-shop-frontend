import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cart-slice";
import categoriesReducer from "./categories/categories-slice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        categories: categoriesReducer,
    }
})
