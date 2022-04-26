import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {

    const { cart, removeFromCart } = useContext(CartContext);
    console.log(cart);

    return (
        <div>
            <button onClick={ () => removeFromCart(5)}>borrar</button>
        </div>
    );
}

export default Cart;
