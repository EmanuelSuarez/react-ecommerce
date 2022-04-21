import React from 'react'

const ItemDetail = ({product}) => {

  return (
        <div className="container mx-auto px-6">
            <div className="md:flex md:items-start mt-5">
                <div className="w-full h-64 md:w-1/2 lg:h-96">
                    <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={product.imagen} alt={product.nombre}/>
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 className="text-gray-700 uppercase text-lg">{product.nombre}</h3>
                    <span className="text-gray-500 mt-3">{product.precio}</span>
                    <br/>
                    <p className='uppercase mt-6 mb-2'>Descripcion: </p>
                    <h4>{product.descripcion}</h4>
                </div>
            </div>
            </div>
  )
};

export default ItemDetail;
