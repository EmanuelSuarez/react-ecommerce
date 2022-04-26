import React, { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isInCart, setIsInCart] = useState(false)
    

    const addToCart = (item) => {
        console.log(`funcion del contexto ${item.nombre}`);
        setCart([ ...cart, item ]);
        setIsInCart(true)
    }
    const removeFromCart = (id) => setCart(cart.filter( item => item.id !== id));
    const clear = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clear }} >
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;