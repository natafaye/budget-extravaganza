import { createSlice } from '@reduxjs/toolkit'
import { getTransactionId, TRANSACTIONS } from '../data';

const transactionSlice = createSlice({
    name: "transactions",
    initialState: {
        list: TRANSACTIONS,
        loading: false
    },
    reducers: {
        addTransaction: (state, action) => {
            action.payload._id = getTransactionId();
            state.list.push(action.payload)
        },
        deleteTransaction: (state, action) => {
            const indexToRemove = state.list.findIndex(t => t._id === action.payload);
            state.list.splice(indexToRemove, 1)
        },
        deleteAllTransactions: state => {
            state.list = []
        } 
    }
});

export const { addTransaction, deleteTransaction, deleteAllTransactions } = transactionSlice.actions
export default transactionSlice.reducer