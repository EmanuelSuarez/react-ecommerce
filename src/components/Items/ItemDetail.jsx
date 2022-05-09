import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {

    const [inCart, setInCart] = useState(false);

    const toCart = (quantity) => {
        setInCart(true);
    }

  return (
        <div className="container mx-auto px-6">
            <div className="md:flex md:items-start mt-5">
                <div className="w-full h-64 md:w-1/2 lg:h-96">
                    <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={product.img} alt={product.name}/>
                </div>
                <div className='flex flex-col'>
                    <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                        <h3 className="text-gray-700 uppercase text-lg">{product.name}</h3>
                        <span className="text-gray-500 mt-3">{product.price}</span>
                        <br/>
                        <p className='uppercase mt-6 mb-2'>Descripcion: </p>
                        <h4>{product.description}</h4>
                    </div>
                    <div className='mt-10 ml-8'>
                        {
                            inCart ? <Link className="rounded-full bg-blue-500 p-2 w-64" to={'/cart'}>Finalizar Compra</Link> : <ItemCount product={product} toCart={toCart}/>
                        }
                    </div>
                </div>
            </div>
        </div>
  )
};

export default ItemDetail;
