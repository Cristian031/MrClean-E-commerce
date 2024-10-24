import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import productos from "../../data/productos";
import { PropagateLoader } from 'react-spinners';

const ItemDetailContainer = () => {
  const [articulo, setArticulo] = useState(null); // Cambié el nombre a singular para reflejar que es un solo artículo
  const [loading, setLoading] = useState(true); // Estado de carga
  const { idArticulo } = useParams();

  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // O ajusta la altura según necesites
  };

  useEffect(() => {
    setLoading(true); // Comienza a cargar
    productos
      .then((respuesta) => {
        const newArticulo = respuesta.find((articulo) => articulo.id === parseInt(idArticulo));
        setArticulo(newArticulo);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false)); // Finaliza la carga
  }, [idArticulo]);

  if (loading) {
    return (
      <div style={loaderStyle}>
        <PropagateLoader color="#36D7B7" loading={loading} size={15} />
      </div>
    );
  }

  return (
    <ItemDetail articulo={articulo} />
  );
};

export default ItemDetailContainer;
