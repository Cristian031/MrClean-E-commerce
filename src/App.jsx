import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; 
import Mascotas from "./components/Mascotas";
import NotFound from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* Ruta raíz que muestra el HomePage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Mascotas" element={<Mascotas />} />

        {/* Ruta para mostrar el catálogo de productos */}
        <Route path="/catalog" element={<ItemListContainer />} />

        {/* Ruta para mostrar productos por categoría */}
        <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Productos"}/>} />

        {/* Ruta para mostrar el detalle de un producto específico */}
        <Route path="/detail/:idArticulo" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
