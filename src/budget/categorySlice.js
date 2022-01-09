import { createSlice } from '@reduxjs/toolkit'
import { CATEGORIES } from '../data';

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        list: CATEGORIES
    },
    reducers: {
        updateCategory: (state, action) => {
            // code here
        }
    }
});

export const { updateCategory } = categorySlice.actions
export default categorySlice.reducer