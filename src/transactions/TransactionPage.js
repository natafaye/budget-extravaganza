import React from 'react'
import TransactionTable from './TransactionTable'
import { useSelector } from 'react-redux'

export default function TransactionPage() {
    const numTransactions = useSelector(state => state.transactions.list.length)

    return (
        <React.Fragment>
            <div className="row mb-5 mt-4">
                <div className="col">
                    <h3 className="mt-1">Transactions</h3>
                    <p> { numTransactions } </p>
                </div>
                <div className="col text-end">
                    <button className="btn btn-info">New Transaction</button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <TransactionTable />
                </div>
            </div>
        </React.Fragment>
    )
}
