import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  let params = useParams();

  useEffect(()=>{
    if (params.categoryId !== category & params.categoryId !== '') {
      setCategory(params.categoryId)
    }
  },[params])

  useEffect( () => {
    const db = getFirestore();
    
    if (category) {
      const itemsCollection = query(collection(db, 'products'), where('categoryId', '==', category))
      getDocs(itemsCollection)
        .then(res => {
          setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
    } else {
      const itemsCollection = collection(db, 'products');
      getDocs(itemsCollection).then((res) => {
        setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
    }
    
  }, [category])
    
  return (
    <>  
        <ItemList products={products} />
        {console.log('cargando')}
    </>
  )
}

export default ItemListContainer;
