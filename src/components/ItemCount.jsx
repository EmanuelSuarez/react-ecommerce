import { render } from "@testing-library/react";
import { useState, useContext } from "react"
import { CartContext } from "./cart/CartContext";


export default function ItemCount({ product, toCart }) {

    const { addToCart } = useContext(CartContext);

    const [count, setCount] = useState(0);
    const adding = () => {
        if (count < product.stock) {
            setCount(count + 1)
        }
    }
    const subs = () => {
        if (count > 0) {
            setCount(count - 1)
            console.log('render');
        }
    }


    return (
        <>
        <div className="container w-auto">
            <div className="flex space-x-4 mb-5">
                <div className="flex space-x-1">
                    <button 
                    className="rounded-sm bg-black p-2 w-10 text-white text-xl"
                    onClick={subs}
                    >-</button>
                    <p 
                    className="w-20 border-2 border-black pt-1 text-xl text-center"
                    >{count}</p>
                    <button
                    className="rounded-sm bg-black p-2 w-10 text-white"
                    onClick={adding}
                    
                    >+</button>
                </div>
                <button 
                    className="rounded-sm bg-black p-2 text-white text-xl"
                    onClick={() => {
                        addToCart({ ...product, count });
                        toCart(count);
                    }}
                
                >Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}