import React from 'react'

export default function TransactionRow({ transaction }) {
    return (
        <tr>
            <td>{ transaction.categoryId }</td>
            <td>{ transaction.notes }</td>
            <td>${ transaction.amount }</td>
            <td class="text-end">
                <button class="btn btn-sm btn-secondary me-2">Edit</button>
                <button class="btn btn-sm btn-warning">Delete</button>
            </td>
        </tr>
    )
}
