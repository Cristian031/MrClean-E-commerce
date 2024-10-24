import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; 
import Mascotas from "./components/Mascotas";
import NotFound from "./components/NoPage";
import Checkout from "./components/Carrito";
import Login from "./components/auth/Login";

import { CartProvider } from "./components/context/CartContext";
import { AuthProvider } from "./components/auth/AuthContext";
import AdminRoute from "./components/auth/AdminRoute";
import AddProductForm from "./components/upload/Agregar"; 

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} /> {/* Ruta de Login */}
            <Route path="/Mascotas" element={<Mascotas />} />
            <Route path="/catalog" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Productos"} />} />
            <Route path="/detail/:idArticulo" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin/add-product" element={
              <AdminRoute>
                <AddProductForm />
              </AdminRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
