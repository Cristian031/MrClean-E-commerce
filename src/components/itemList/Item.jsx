import { Link } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2"; 
import '../../css/Item.css';
import Button from "../Button";
import { CartContext } from "../context/CartContext"; 

const Item = ({ articulo }) => {
  const { addProduct, getProductQuantity } = useContext(CartContext); 
  const cantidad = 1; 
  const cantidadEnCarrito = getProductQuantity(articulo.id);

  const handleAddProduct = () => {
    const totalEnCarrito = cantidadEnCarrito + cantidad; 

    if (totalEnCarrito <= articulo.stock) {
      addProduct({ ...articulo, cantidad });

      Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: 'success',
        title: `${cantidad} unidad(es) de ${articulo.name} ha(n) sido agregada(s) al carrito.`,
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No se puede agregar más productos',
        text: `Solo hay ${articulo.stock} unidades disponibles.`,
      });
    }
  };

  if (!articulo) {
    return (
      <div style={{ textAlign: 'center' }}>
        Cargando...
      </div>
    );
  }

  return (
    <div key={articulo.id} className="item">
      <img src={articulo.image} alt={articulo.name} />
      <h2>{articulo.name}</h2>
      <Link to={`/detail/${articulo.id}`} className="detalle-link">Ver descripción</Link>
      <Button onClick={handleAddProduct} disabled={cantidadEnCarrito + cantidad >= articulo.stock}>
        Agregar producto
      </Button>
    </div>
  );
};

export default Item;
