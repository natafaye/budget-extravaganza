import React from 'react'
import TransactionTable from './TransactionTable'

export default function TransactionPage({ transactionList, deleteTransaction }) {
    return (
        <React.Fragment>
            <div className="row mb-5 mt-4">
                <div className="col">
                    <h3 className="mt-1">Transactions</h3>
                    <p> { transactionList.length } </p>
                </div>
                <div className="col text-end">
                    <button className="btn btn-info">New Transaction</button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <TransactionTable transactionList={ transactionList } deleteTransaction={ deleteTransaction } />
                </div>
            </div>
        </React.Fragment>
    )
}
