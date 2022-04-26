import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProducts } from '../../utils/productos';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

    const [product, setProduct] = useState({});
    let params = useParams();
    const [productId, setProductId] = useState(params.id);

    useEffect(() => {
      getProducts()
      .then((res) => {
          setProduct(res.filter(product => product.id == productId)[0]);
      })
      .catch((err) => console.log(err));
    }, [productId]);

  return (
    <>
    <ItemDetail product={product}/>
    </>
  )
}
