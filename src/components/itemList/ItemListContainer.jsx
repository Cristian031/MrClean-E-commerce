import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { db } from '../../firebase/firebaseService.js'; 
import { collection, getDocs } from 'firebase/firestore';
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
    height: '100vh',
  };

  // Lista de categorías válidas
  const categoriasValidas = ["perros", "gatos", "accesorios", "liquidos", "plasticos"];

  // useEffect para filtrar los productos cuando cambia el categoryId
  useEffect(() => {
    setLoading(true); // Iniciar la carga

    // Validar si la categoría es válida
    if (idCategory && !categoriasValidas.includes(idCategory)) {
      navigate("/not-found"); // Redirige a la página NotFound si la categoría no es válida
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const productosRef = collection(db, 'products'); 
        const querySnapshot = await getDocs(productosRef);
        const productosArray = [];

        querySnapshot.forEach((doc) => {
          productosArray.push({ id: doc.id, ...doc.data() }); // Agrega el ID del documento y los datos al array
        });

        // Filtra los productos por categoría
        if (idCategory) {
          const newArticulo = productosArray.filter(articulo => articulo.category.id === idCategory);
          setArticulos(newArticulo);
        } else {
          setArticulos(productosArray);
        }
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); // Llama a la función para obtener los datos

  }, [idCategory, navigate]);

  if (loading) {
    return (
      <div style={loaderStyle}>
        <PropagateLoader color="#36D7B7" loading={loading} size={15} />
      </div>
    );
  }

  if (!articulos.length) {
    return <div>No hay productos disponibles para esta categoría.</div>;
  }

  return (
    <div className="itemListContainer">
      <ItemList articulos={articulos} />  
    </div>
  );
}

export default ItemListContainer;
