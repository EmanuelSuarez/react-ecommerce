import NavBar from './components/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  


  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
        <Route exact path='/cart' element={<ItemDetailContainer/>} />

      </Routes>

    </BrowserRouter>
    </>
  );
};
