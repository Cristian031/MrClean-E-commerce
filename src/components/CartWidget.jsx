import React, { useState, useContext } from "react";
import Modal from 'react-modal';
import { CartContext } from "./context/CartContext";
import '../css/CartWidget.css';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

Modal.setAppElement('#root');

function CartWidget() {
    const { cart, removeProduct, totalPrice } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

    const IrCheckout = () => {
        navigate('/checkout'); 
        toggleModal();         
    };
    

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleRemoveProduct = (id) => {
        removeProduct(id);
    };

    return (
        <div>
            <div className="cart-container" onClick={toggleModal}>
                <img src="./cart.png" alt="icono de carrito de compra" />
                <span>{totalItems}</span>
            </div>

            <Modal isOpen={isOpen} onRequestClose={toggleModal} className="modal-content" overlayClassName="modal-overlay">
                <div className="modal-header">
                    <h2>Tu Carrito</h2>
                    <button onClick={toggleModal}>Cerrar</button>
                </div>

                {cart.length === 0 ? (
                    <p>Sin productos en el carrito. ¿Qué esperas?</p>
                ) : (
                    <div className="cart-items-container">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <p>Precio: ${item.price}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <p>Subtotal: ${(item.price * item.cantidad).toFixed(2)}</p>
                                </div>
                                <button onClick={() => handleRemoveProduct(item.id)} className="remove-btn">
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                        <div className="cart-summary">
                            <h3>Total: ${totalPrice.toFixed(2)}</h3>
                            <button onClick={IrCheckout}>Finalizar Compra</button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default CartWidget;
