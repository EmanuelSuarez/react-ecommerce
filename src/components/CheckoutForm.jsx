import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './cart/CartContext';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'

const CheckoutForm = () => {

    const { cart, total, clear } = useContext(CartContext);
    const [ buyerName, setBuyerName ] = useState('');
    const [ buyerPhone, setBuyerPhone ] = useState('');
    const [ buyerEmail, setBuyerEmail ] = useState('');
    const [ items, setItems ] = useState({});

    useEffect( () => {
        const itemsObj = cart.map((item) => ({ id: item.id, title: item.name, price: item.price, count: item.count}))
        setItems(itemsObj);
    }, [])

    const checkout = (e) => {
        e.preventDefault()

        const order = {
            buyer: { name: buyerName, phone: buyerPhone, email: buyerEmail},
            items: items,
            total: total
        };

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then(({ id }) =>  {
            Swal.fire({
                icon: 'success',
                title: 'Felicitaciones! completaste tu compra',
                text: `Codigo de orden: ${id}`
              })
            
        })
        clear()
    }




    return (
        <>
        <form action="submit" className='w-full m-6 md:w-2/3 md:mx-auto flex flex-col space-y-4 mt-8'>
            <div>
                <label className='text-3xl uppercase' htmlFor="name">Name: </label>
                <input 
                className='border-black border-2 w-full' 
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                />
            </div>
            <div>
                <label className='text-3xl uppercase' htmlFor="phone">phone: </label>
                <input 
                className='border-black border-2 w-full' 
                type="text"
                value={buyerPhone}
                onChange={(e) => setBuyerPhone(e.target.value)}
                />
            </div>
            <div>
                <label className='text-3xl uppercase' htmlFor="email">email: </label>
                <input 
                className='border-black border-2 w-full' 
                type="text"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                />
            </div>
            <div className='text-right'>
                <button className='bg-black text-white text-2xl uppercase p-3 rounded-md' onClick={checkout}>Comprar </button>
            </div>
        </form>
        </>
    );
}

export default CheckoutForm;
