
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ItemListContainer from './components/Items/ItemListContainer';
// import ListadoContainer from './components/listado/ListadoContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';

export default function App() {

  


  return (
    <>
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route exact path='/' element={ <ItemListContainer/> }/>

        {/* <Route exact path='/' element={ <ListadoContainer/> }/>
        <Route exact path='/category/:id' element={ <ListadoContainer/> }/> */}


      </Routes>
    </BrowserRouter>

    </>
  );
};
