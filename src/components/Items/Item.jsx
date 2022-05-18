import React from "react";
import { Link } from "react-router-dom";
// import ItemCount from "../ItemCount";

export default function Item ({ product }) {

    

    return (
                    <div className="group relative mb-4">
                        <Link to={`/item/${product.id}`} className="w-full min-h-80">
                            <img src={product.img} alt="" className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                        </Link>
                        <div className="mt-2 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                <strong>{product.name}</strong>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500"></p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                    </div>
        
    )
}