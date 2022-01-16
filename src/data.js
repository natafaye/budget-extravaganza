
let currentTransactionId = 2;
export const getTransactionId = () => currentTransactionId++;

export const TRANSACTIONS = [
    {
        _id: 0,
        categoryId: 0,
        amount: 1400,
        notes: "first paycheck"
    },
    {
        _id: 1,
        categoryId: 2,
        amount: -45.89,
        notes: "lots of pasta and stuff"
    }
]

export const CATEGORIES = [
    {
        _id: 0,
        name: "Income",
        target: 3000,
    },
    {
        _id: 1,
        name: "Rent",
        target: 1500
    },
    {
        _id: 2,
        name: "Groceries",
        target: 400
    }
]