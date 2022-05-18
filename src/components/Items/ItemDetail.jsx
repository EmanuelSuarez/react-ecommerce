import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {

    const [inCart, setInCart] = useState(false);

    const toCart = (quantity) => {
        setInCart(true);
    }

  return (
        <div className='container mx-auto flex flex-col md:flex-row mt-4 xl:max-w-6xl'>
            <div className='w-full md:w-1/2 rounded-md px-4 md:px-0'>
                <img className='rounded-md w-full object-cover h-96 md:h-auto' src={product.img} alt={product.name} />  
            </div>
            <div className='w-full md:w-1/2 flex flex-col px-4'>
                <h1 className='text-2xl my-2'>{product.name}</h1>
                <span className='text-3xl my-2'>${product.price}</span>
                <p className='uppercase my-2'>descripcion:</p>
                <h2 className='text-sm my-2 lg:text-lg xl:text-xl'>{product.description}</h2>
                <div className='mt-4 md:mt-auto my-2'>
                    {
                        inCart ? <Link className="rounded-sm bg-black p-2 w-64 text-white text-xl" to={'/cart'}>Finalizar Compra</Link> : <ItemCount product={product} toCart={toCart}/>
                    }
                </div>
            </div>
        </div>
  )
};

export default ItemDetail;
