import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { PropagateLoader } from 'react-spinners';
import { db } from "../../firebase/firebaseService";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [articulo, setArticulo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idArticulo } = useParams();

  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  useEffect(() => {
    const fetchArticulo = async () => {
      setLoading(true);
      try {
        // Obtiene solo el documento específico del artículo
        const docRef = doc(db, 'products', idArticulo);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Si el documento existe, establece el artículo en el estado
          setArticulo({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No se encontró el artículo");
        }
      } catch (error) {
        console.error("Error al obtener el artículo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticulo();
  }, [idArticulo]);

  if (loading) {
    return (
      <div style={loaderStyle}>
        <PropagateLoader color="#36D7B7" loading={loading} size={15} />
      </div>
    );
  }

  if (!articulo) {
    return <div>El artículo no está disponible.</div>;
  }

  return (
    <ItemDetail articulo={articulo} />
  );
};

export default ItemDetailContainer;
