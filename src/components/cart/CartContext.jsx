import React, { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);
    


    const addToCart = (item) => {

        const itemId = cart.findIndex( (cart) => cart.id === item.id)
        if (itemId === -1) {
            setCart([ ...cart, item ]);
            setCartCount(cartCount + item.count)
            setTotal(total + (parseFloat(item.precio) * item.count))
            console.log(`item agregado al cart`);
        } else {
            const cartCopy = [...cart];
            if (cartCopy[itemId].count + item.count > cartCopy[itemId].stock) {
                console.log(`limite de stock superado`);
            } else {
                cartCopy[itemId].count = cartCopy[itemId].count + item.count;
                setCart(cartCopy);
                setCartCount(cartCount + item.count)
                setTotal(total + (parseFloat(item.precio) * item.count))
            };
        }
    }
    
    const addItem = (item) => {
        const itemId = cart.findIndex( (cart) => cart.id === item.id)
        const cartCopy = [...cart];
        cartCopy[itemId].count = cartCopy[itemId].count + 1;
        setCart(cartCopy);
        setCartCount(cartCount + 1)
        setTotal(total + parseFloat(item.precio))
    }

    const subtractItem = (item) => {
        const itemId = cart.findIndex( (cart) => cart.id === item.id)
        const cartCopy = [...cart];
        cartCopy[itemId].count = cartCopy[itemId].count - 1;
        setCart(cartCopy);
        setCartCount(cartCount - 1)
        setTotal(total - parseFloat(item.precio))
    }

    const removeFromCart = (id, count, price) => {
        setCart(cart.filter( item => item.id !== id));
        setCartCount(0)
        setTotal(total - (count * price))
    };

    const clear = () => {
        setCart([]);
        setTotal(0)
        setCartCount(0)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clear, cartCount, total, addItem, subtractItem }} >
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;