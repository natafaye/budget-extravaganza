import React from 'react'
import { deleteTransaction } from './transactionSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function TransactionRow({ transaction }) {
    const dispatch = useDispatch();

    const category = useSelector( state => state.categories.list.find( category => category._id === transaction.categoryId ) )

    const onDeleteClicked = () => {
        dispatch( deleteTransaction(transaction._id) )
    }

    return (
        <tr>
            <td>{ category.name }</td>
            <td>{ transaction.notes }</td>
            <td>${ transaction.amount }</td>
            <td className="text-end">
                <button className="btn btn-sm btn-secondary me-2">Edit</button>
                <button className="btn btn-sm btn-warning" onClick={ onDeleteClicked }>Delete</button>
            </td>
        </tr>
    )
}