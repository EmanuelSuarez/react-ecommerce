import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItemDetail from './CartItemDetail';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, total, cartCount } = useContext(CartContext);



    return (
        <>
			<div className="border-2 mx-auto">
				<div>
					<h2 className='uppercase m-5' >carrito</h2>
					<div>
						{cartCount > 0 ? cart.map( (cart) => <CartItemDetail key={cart.id} product={cart} />) : <EmptyCart/>}
					</div>
					<div>
						<div className='flex justify-between ml-auto mr-5 w-1/3' >
							<p>Total:</p><p>{total ? total : 'vacio'}</p>
						</div>
					</div>
					<div className='flex justify-end'>
					    <Link to={'/checkout'} className='text-xl text-white bg-black p-4 rounded-md my-4'>Finalizar compra</Link>
					</div>
				</div>
			</div>
		</>
    );
}

export default Cart;
