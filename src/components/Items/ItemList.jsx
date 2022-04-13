import React from 'react'
import Item from './Item'

export const ItemList = ({ products }) => {

    console.log(`itemlist`);
    console.log(products);

  return (
    <>
    <div>
        {products.map((product) => {
                <Item key={product.id} product={product} />
        })}
    </div>
    </>
  )
}
