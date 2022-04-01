import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

export default function App() {

  const greeting = "Hello!"

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Hello!" />

    </>
  );
};
