import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProduct } from '../../utils/productos';

export default function ItemDetailContainer() {

    const [product, setProduct] = useState({})

    useEffect( () => {
        getProduct()
            .then( (res) => {
                setProduct(res);
            })
    }, [])

  return (
    <ItemDetail product={product}/>
  )
}
