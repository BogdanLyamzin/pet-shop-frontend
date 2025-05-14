import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
    "categories/fetch",
    async(_, {rejectWithValue})=> {

    }
)