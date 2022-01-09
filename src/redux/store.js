import { configureStore } from '@reduxjs/toolkit'
import transactionReducer from '../transactions/transactionSlice'
import categoryReducer from '../budget/categorySlice'

export const store = configureStore({
  reducer: {
      transactions: transactionReducer,
      categories: categoryReducer
  },
})