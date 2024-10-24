import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importa useNavigate
import productos from '../../data/productos.js';
import ItemList from '../itemList/ItemList.jsx';
import { PropagateLoader } from 'react-spinners';

function ItemListContainer() {
  const [articulos, setArticulos] = useState([]);   // Estado para los productos filtrados
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const { idCategory } = useParams();
  const navigate = useNavigate(); // Para redirigir si la categoría es inválida

  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // O ajusta la altura según necesites
  };

  // Lista de categorías válidas
  const categoriasValidas = ["perros", "gatos", "accesorios", "liquidos", "plasticos"];

  // useEffect para filtrar los productos cuando cambia el categoryId
  useEffect(() => {
    setLoading(true); // Iniciar la carga

    // Validar si la categoría es válida
    if (idCategory && !categoriasValidas.includes(idCategory)) {
      navigate("/not-found"); // Redirige a la página NotFound si la categoría no es válida
      setLoading(false); // Finaliza la carga aquí para no dejarlo en estado de carga
      return;
    }

    productos
      .then((respuesta) => {
        if (idCategory) {
          const newArticulo = respuesta.filter(articulo => articulo.category.id === idCategory);
          setArticulos(newArticulo);
        } else {
          setArticulos(respuesta);
        }
      })
      .catch(error => {
        console.error(error); 
      })
      .finally(() => {
        setLoading(false); 
      });

  }, [idCategory, navigate]);

  if (loading) {
    return (
      <div style={loaderStyle}>
        <PropagateLoader color="#36D7B7" loading={loading} size={15} />
      </div>
    );
  }
  return (
    <div className="itemListContainer">
      <ItemList articulos={articulos} />  
    </div>
  );
}

export default ItemListContainer;
