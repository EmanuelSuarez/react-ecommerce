import React, { useContext } from 'react'
import ItemCount from '../ItemCount';
import { CartContext } from './CartContext'
import CartItemCount from './CartItemCount';

export default function CartItemDetail({ product }) {

    const { removeFromCart } = useContext(CartContext);

    const remove = () => {
        removeFromCart(product.id, product.count, product.precio)
    }

    return (
        <div className='flex justify-between mx-4 bg-white border-b-4'>
            <div className='flex justify-between w-2/3'>
                <div><img className='w-40 my-auto' src={product.imagen} alt={product.imagen} /></div>
                <div className='mx-2' >
                    <p>{product.nombre}</p>
                    <p>{product.descripcion}</p>
                </div>
            </div>
            <div>
                <CartItemCount product={product} />
                <button onClick={remove}>Eliminar</button>
            </div>
            <div>{product.precio}</div>
        </div>
    )
}
