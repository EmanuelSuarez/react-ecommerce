import React, { useEffect, useState } from 'react';
import {getProducts} from '../../utils/productos';
import { ItemList } from './ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => console.log(err));
    }, []);

    
  return (
    <>  
        <ItemList products={products} />
    </>
  )
}

export default ItemListContainer;
