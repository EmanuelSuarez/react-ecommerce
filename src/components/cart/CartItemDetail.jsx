import React, { useContext } from 'react'
import ItemCount from '../ItemCount';
import { CartContext } from './CartContext'
import CartItemCount from './CartItemCount';

export default function CartItemDetail({ product }) {

    const { removeFromCart } = useContext(CartContext);

    const remove = () => {
        removeFromCart(product.id, product.count, product.price)
    }

    return (
        <div className='flex mx-4 bg-white border-b-4'>
            <div className='flex w-full'>
                <div><img className='w-20 h-20 object-cover my-auto' src={product.img} alt={product.name} /></div>
                <div className='mx-2'>
                    <p className='uppercase text-xs'>{product.name}</p>
                    <div className='flex '>
                        <CartItemCount product={product} />
                        <button onClick={remove}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg></button>
                        <div className='absolute right-5'>{product.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
