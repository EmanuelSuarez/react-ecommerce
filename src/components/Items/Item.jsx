import React from "react";
// import ItemCount from "../ItemCount";

export default function Item ({ product }) {

    console.log("item");

    return (
                    <div class="group relative">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src={product.imagen} alt="" class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    {product.nombre}
                                </a>
                                </h3>
                                <p class="mt-1 text-sm text-gray-500"></p>
                            </div>
                            <p class="text-sm font-medium text-gray-900">{product.precio}</p>
                        </div>
                    </div>
        
    )
}