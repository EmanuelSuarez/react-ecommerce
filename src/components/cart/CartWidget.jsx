import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function CartWidget() {

    const { cartCount } = useContext(CartContext);

    return (
        <>
        {cartCount > 0 ? <p>🛒{cartCount}</p> : <p>🛒</p>}
        </>
    )
}