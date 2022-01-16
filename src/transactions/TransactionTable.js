import React from 'react'
import TransactionRow from './TransactionRow'
import { useSelector } from 'react-redux'
import TransactionForm from './TransactionForm';

export default function TransactionTable({ isCreating, onStopCreating }) {
    const transactionList = useSelector(state => state.transactions.list);

    // isCreating

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Notes</th>
                    <th>Amount</th>
                    <th>
                    </th>
                </tr>
            </thead>
            <tbody>
                { (isCreating) ? <TransactionForm onStopCreating={ onStopCreating } key={-1} /> : <tr/> }
                { transactionList.map( transaction => 
                    <TransactionRow transaction={ transaction } key={transaction._id} />
                ) }
            </tbody>
        </table>
    )
}