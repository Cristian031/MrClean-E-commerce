import { useState, useContext } from "react";
import Swal from "sweetalert2";
import Button from "../Button";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ articulo }) => {
    const { addProduct, getProductQuantity } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const cantidadEnCarrito = getProductQuantity(articulo.id);
    const stockRestante = articulo.stock - cantidadEnCarrito; // Calcula el stock restante

    const handleIncrease = () => {
        if (cantidad < stockRestante) {
            setCantidad(cantidad + 1);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No se puede agregar más productos',
                text: `Solo hay ${stockRestante} unidades disponibles.`,
            });
        }
    };

    const handleDecrease = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleAddProduct = () => {
        if (cantidad + cantidadEnCarrito <= articulo.stock) {
            addProduct({ ...articulo, cantidad });
            Swal.fire({
                toast: true,
                position: 'bottom-end',
                icon: 'success',
                title: `${cantidad} unidad(es) de ${articulo.name} ha(n) sido agregada(s) al carrito.`,
                showConfirmButton: false,
                timer: 3000,
            });
            setCantidad(1); // Resetear la cantidad después de agregar
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No se puede agregar más productos',
                text: `Solo hay ${articulo.stock} unidades disponibles.`,
            });
        }
    };
    
    if (!articulo) {
        return <div>Cargando producto...</div>;
    }

    const total = articulo.price * cantidad;
    
    return (
        <div className="item-detail">
            <h2>{articulo.name}</h2>
            <img src={articulo.image} alt={articulo.name} />
            <p>{articulo.description}</p>
            <p>Cantidad disponibles: {articulo.stock} unidades</p>
            <div>
                <button className="boton-cantidad" onClick={handleDecrease}> - </button>
                <span className="cantidad"> {cantidad} </span>
                <button 
                    className="boton-cantidad" 
                    onClick={handleIncrease} 
                    disabled={cantidad === stockRestante}>
                    +
                </button>
            </div>
            <p>Precio unitario: ${articulo.price}</p>
            <p><strong>Total: ${total.toFixed(2)}</strong></p>
            <Button 
                onClick={handleAddProduct} 
                disabled={cantidadEnCarrito + cantidad >= articulo.stock}>
                Agregar producto
            </Button>
        </div>
    );
};

export default ItemDetail;
