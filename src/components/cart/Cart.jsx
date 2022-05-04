import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItemDetail from './CartItemDetail';
import EmptyCart from './EmptyCart';

const Cart = () => {

    const { cart, total, cartCount } = useContext(CartContext);


    return (
        <>
			<div className="container border-2 mx-auto bg-blue-100">
				<div>
					<h2 className='uppercase m-5' >carrito</h2>
					<div>
						{cartCount > 0 ? cart.map( (cart) => <CartItemDetail key={cart.id} product={cart} />) : <EmptyCart/>}
					</div>
					<div>
						<div className='flex justify-between ml-auto mr-5 w-1/3' >
							<p>Total:</p><p>{total}</p>
						</div>
					</div>
				</div>
			</div>
		</>
    );
}

export default Cart;
