import { createSlice } from "@reduxjs/toolkit";

import { fetchCategories } from "./categories-thunks";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: builder => {

    }
});

export default categoriesSlice.reducer;