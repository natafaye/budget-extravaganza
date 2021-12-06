import React from 'react'
import TransactionRow from './TransactionRow'

export default function TransactionTable({ transactionList, deleteTransaction }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Notes</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { transactionList.map( transactionThing => 
                    <TransactionRow transaction={ transactionThing } deleteTransaction={ deleteTransaction } /> 
                ) }
            </tbody>
        </table>
    )
}


// function someName(transactionThing) {
//     return <TransactionRow transaction={ transactionThing } />
// }
// transactionList.map(someName)

// const someName = (transactionThing) => {
//     return <TransactionRow transaction={ transactionThing } />
// }
// transactionList.map(someName)

// const someName = transactionThing => <TransactionRow transaction={ transactionThing } />
// transactionList.map(someName)

// transactionList.map(transactionThing => <TransactionRow transaction={ transactionThing } />)