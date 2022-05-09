import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { getProducts } from '../../utils/productos';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

    const [product, setProduct] = useState({});
    let { id } = useParams();
    const [productId, setProductId] = useState(id);

    useEffect(() => {
    const db = getFirestore();
    
    const item = doc(db, 'products', id);
    getDoc(item).then( (res) => {
      setProduct({ id: res.id, ...res.data() })
    })

    }, [id])

  return (
    <>
    <ItemDetail product={product}/>
    </>
  )
}
