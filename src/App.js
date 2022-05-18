import NavBar from './components/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/cart/CartContext';
import Cart from './components/cart/Cart';
import CheckoutForm from './components/CheckoutForm';

export default function App() {

  


  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/checkout' element={<CheckoutForm/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
};
