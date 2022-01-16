import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from './transactionSlice';

export default function TransactionForm({ onStopCreating }) {
    const categoryList = useSelector(state => state.categories.list);
    const dispatch = useDispatch();

    const firstCategoryId = categoryList[0]._id;

    const [categoryId, setCategoryId] = useState(firstCategoryId);
    const [notes, setNotes] = useState("");
    const [amount, setAmount] = useState(0);

    const handleCategoryChange = (event) => setCategoryId(event.target.value)
    const handleNotesChange = (event) => setNotes(event.target.value)
    const handleAmountChange = (event) => setAmount(event.target.value)

    const handleSave = () => {
        const transaction = { categoryId: parseInt(categoryId), notes, amount }
        dispatch( addTransaction(transaction) )
        onStopCreating();
    }

    const handleCancel = () => {
        setCategoryId(firstCategoryId);
        setNotes("");
        setAmount(0);
        onStopCreating();
    }

    return (
        <tr>
            <td> 
                <select onChange={ handleCategoryChange } value={ categoryId } >
                    { categoryList.map(category => <option value={ category._id }> { category.name } </option>) }
                </select>
            </td>
            <td>
                <input type="text" onChange={ handleNotesChange } value={ notes } />
            </td>
            <td>
                <input type="number" onChange={ handleAmountChange } value={ amount } />
            </td>
            <td className="text-end">
                <button className="btn btn-sm btn-warning me-2" onClick={ handleCancel } >Cancel</button>
                <button className="btn btn-sm btn-success" onClick={ handleSave } >Save</button>
            </td>
        </tr>
    )
}
