import { useState } from "react"


export default function ItemCount({ stock, addToCart }) {

    const [count, setCount] = useState(0);
    const adding = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const subs = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const onAdd = () => {
        if (count !== 0) {
            alert(`You aded ${count} items to your cart`)
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
                    onClick={() => addToCart(count)}
                
                >Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}