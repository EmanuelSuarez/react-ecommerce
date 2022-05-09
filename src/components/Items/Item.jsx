import React from "react";
import { Link } from "react-router-dom";
// import ItemCount from "../ItemCount";

export default function Item ({ product }) {

    

    return (
                    <div className="group relative">
                        <Link to={`/item/${product.id}`} className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src={product.img} alt="" className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                        </Link>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                <p>{product.name}</p>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500"></p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                    </div>
        
    )
}