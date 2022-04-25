import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getProducts} from '../../utils/productos';
import { ItemList } from './ItemList';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  let params = useParams();

  useEffect(()=>{
    if (params.categoryId !== category & params.categoryId !== '') {
      setCategory(params.categoryId)
    }
  },[params])

  useEffect(() => {
    getProducts()
    .then((res) => {
      if (category !== '' & category !== undefined) {
        setProducts(res.filter(product => product.category === params.categoryId));
      } else {
        setProducts(res);
      }
    })
    .catch((err) => console.log(err));
  }, [category]);
  
    
  return (
    <>  
        <ItemList products={products} />
    </>
  )
}

export default ItemListContainer;
