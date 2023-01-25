import React from 'react';
import './style.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

export default function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Greeting" />
    </div>
  );
}
