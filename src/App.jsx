import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola Bienvenido"/>  
    </>
  )
}

export default App
