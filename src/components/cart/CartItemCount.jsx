import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext'

export default function CartItemCount({ product }) {

    const { cart, addToCart, addItem, subtractItem } = useContext(CartContext);
    const [itemCount, setItemCount] = useState(product.count)
    console.log(product.count);

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
        <div className="container w-32 border-solid border-2 border-black mt-2">
        <div className="flex justify-around my-2">
            <button 
            className="rounded-full bg-black p-2 w-10 text-white"
            onClick={subtract}
            >-</button>

            <p >{itemCount}</p>

            <button
            className="rounded-full bg-black p-2 w-10 text-white"
            onClick={add}
            >+</button>
        </div>
    </div>
    )
}
