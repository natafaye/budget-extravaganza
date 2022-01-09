import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function CategoryPage() {
    let navigate = useNavigate();

    let { categoryId } = useParams();
    categoryId = parseInt(categoryId);
    const category = useSelector( state => state.categories.list.find(category => category._id === categoryId) );

    useEffect(() => {
        if(!category) {
            navigate("/notfound");
        }
    }, [category])

    return (
        (!category) ? <div/> :
        <div>
            Category: { category.name }
        </div>
    )
}