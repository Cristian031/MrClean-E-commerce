import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; 
import Mascotas from "./components/Mascotas";
import NotFound from "./components/NoPage";
import Checkout from "./components/CheckOut";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard"; // Importa el Dashboard
import AdminRoute from "./components/auth/AdminRoute"; // Importa AdminRoute

import { CartProvider } from "./components/context/CartContext";
import { AuthProvider } from "./components/auth/AuthContext";
import { FireProvider } from "./components/context/FireContext";

function App() {
  return (
    <FireProvider>
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
              
              {/* Ruta protegida para agregar productos */}
              <Route
                path="/admin/add-product"
                element={
                  <AdminRoute>
                    <Dashboard />
                  </AdminRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </FireProvider>  
  );
}

export default App;
