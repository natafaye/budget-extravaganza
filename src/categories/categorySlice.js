import { createSlice } from '@reduxjs/toolkit'
import { CATEGORTIES } from '../data';

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        list: CATEGORTIES
    },
    reducers: {
        updateCategory: (state, action) => {
            // code here
        }
    }
});

export const { updateCategory } = categorySlice.actions
export default categorySlice.reducer