// ItemListContainer.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from '../../data/productos.js';
import ItemList from '../itemList/ItemList.jsx';

function ItemListContainer({ greeting }) {
  const [articulos, setArticulos] = useState([]);   // Estado para los productos filtrados
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const { idCategory } = useParams();

  // useEffect para filtrar los productos cuando cambia el categoryId
  useEffect(() => {
    setLoading(true); // Iniciar la carga
    productos
      .then((respuesta) => {
        if(idCategory) {
          const newArticulo = respuesta.filter(articulo => articulo.category.id === idCategory);
          setArticulos(newArticulo);
        } else {
          setArticulos(respuesta);
        }
        setLoading(false); // Finalizar la carga
      })
      .catch(error => {
        console.log(error);
        setLoading(false); // Asegúrate de finalizar la carga incluso si hay un error
      });

  }, [idCategory]);

  // Mostrar un mensaje de carga en lugar de un componente separado
  if (loading) {
    return <div>Cargando...</div>; // Puedes personalizar esto como desees
  }

  return (
    <div className="itemListContainer">
      <ItemList articulos={articulos} />  
    </div>
  );
}

export default ItemListContainer;
