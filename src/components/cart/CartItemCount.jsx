import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext'

export default function CartItemCount({ product }) {

    const { cart, addToCart, addItem, subtractItem } = useContext(CartContext);
    const [itemCount, setItemCount] = useState(product.count)

    const add = () => {
        if ( product.count < product.stock ) {
            addItem(product)
            setItemCount(itemCount + 1)
        }
    }
    const subtract = () => {
        if (product.count > 1) {
            subtractItem(product)
            setItemCount(itemCount - 1)
        }
    }

    return (
        <div className="container w-32 border-solid mt-2">
        <div className="flex justify-around my-2">
            {itemCount > 1 ?
            <button className="rounded-sm bg-black p-2 w-10 text-white" onClick={subtract}>-</button>
            : <button className="rounded-sm bg-gray-200 p-2 w-10 text-white">-</button>}

            <p className='pt-2'>{itemCount}</p>

            {product.stock > itemCount ?
            <button className="rounded-sm bg-black p-2 w-10 text-white" onClick={add}>+</button>
            : <button className="rounded-sm bg-gray-200 p-2 w-10 text-white">+</button>}
        </div>
    </div>
    )
}
