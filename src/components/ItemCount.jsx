import { useState, useContext } from "react"
import { CartContext } from "./CartContext";


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
        }
    }

    return (
        <>
        <div className="container w-64 border-solid border-2 border-black">
            <div className="flex justify-around mb-5">
                <button 
                className="rounded-full bg-red-500 p-2 w-10"
                onClick={subs}
                >-</button>
                <p 
                
                >{count}</p>
                <button
                className="rounded-full bg-green-500 p-2 w-10"
                onClick={adding}
                
                >+</button>
            </div>
            <div className="flex items-center">
                <button 
                    className="rounded-full bg-blue-500 p-2 w-64"
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