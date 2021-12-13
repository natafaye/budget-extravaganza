import React from 'react'
import TransactionRow from './TransactionRow'
import { useSelector } from 'react-redux'

export default function TransactionTable() {
    const transactionList = useSelector(state => state.transactions.list);
    const categoryList = useSelector(state => state.categories.list);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Notes</th>
                    <th>Amount</th>
                    <th>
                        <select>
                            { categoryList.map(category => <option> { category.name } </option>) }
                        </select>
                    </th>
                </tr>
            </thead>
            <tbody>
                { transactionList.map( transaction => 
                    <TransactionRow transaction={ transaction } key={transaction._id} /> 
                ) }
            </tbody>
        </table>
    )
}