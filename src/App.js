import React from 'react';
import Api from './components/Api';
import ApiContainer from './components/ApiContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

export default function App() {

  const greeting = "Hello!"

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={greeting} />

    </>
  );
};
