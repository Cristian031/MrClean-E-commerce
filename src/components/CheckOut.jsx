import React, { useContext, useState } from 'react';
import { CartContext } from './context/CartContext';
import Swal from 'sweetalert2';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseService.js'; 
import '../css/Checkout.css';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [form, setForm] = useState({
        name: '',
        apellido: '',
        entregaMethod: '',
        comments: '',
        paymentMethod: ''
    });

    const handleInputChange = ({ target: { name, value } }) => {
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    // Función para formatear la primera letra en mayúscula
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    // Genera los detalles del pedido en formato de texto
    const generateOrderDetails = () => {
        return cart.map(({ name, cantidad, price }) =>
            `Producto: ${name}, Cantidad: ${cantidad}, Precio: $${price}`
        ).join('\n');
    };

    const generateWhatsAppMessage = () => {
        const orderDetails = generateOrderDetails();
        
        // Formateamos el método de entrega y el método de pago
        const entregaMethodFormatted = form.entregaMethod ? capitalizeFirstLetter(form.entregaMethod) : "No especificado";
        const paymentMethodFormatted = form.paymentMethod ? capitalizeFirstLetter(form.paymentMethod) : "No especificado";

        const message = encodeURIComponent(`
            Hola, me gustaría realizar el pedido con los siguientes detalles:
            Nombre comprador: ${form.name}
            Apellido comprador: ${form.apellido}
            Método de entrega: ${entregaMethodFormatted}
            Método de pago: ${paymentMethodFormatted}
            Comentarios: ${form.comments}
            Detalle del pedido:
            ${orderDetails}
            Total a pagar: $${totalPrice.toFixed(2)}
            Muchas gracias!
        `.trim());

        return `https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE_NUMBER}?text=${message}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orderDetails = {
            ...form,
            entregaMethod: capitalizeFirstLetter(form.entregaMethod) || "No especificado",
            paymentMethod: capitalizeFirstLetter(form.paymentMethod) || "No especificado",
            items: cart,
            total: totalPrice.toFixed(2),
            createdAt: new Date().toISOString()
        };

        // Guardar pedido en Firestore
        await setDoc(doc(db, "orders", `${Date.now()}`), orderDetails);

        clearCart();

        const whatsappUrl = generateWhatsAppMessage();

        await Swal.fire({
            title: 'Pedido realizado con éxito',
            text: `Tu pedido ha sido registrado.`,
            icon: 'success',
            footer: `
                <p>Gracias por tu compra!</p>
                <p>Haz clic en el siguiente botón para enviar los detalles del pedido por WhatsApp:</p>
                <a href="${whatsappUrl}" target="_blank" class="swal2-confirm swal2-styled" style="display: inline-block; padding: 10px; background: #25D366; color: white; border-radius: 5px; text-decoration: none;">Enviar por WhatsApp</a>
            `,
        });
    };

    if (cart.length === 0) {
        return (
            <div className="checkout-container">
                <h2>Carrito de compras</h2>
                <p>No hay productos en el carrito</p>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Carrito de compras</h2>
            <div className="checkout-details">
                <h3>Detalle de tu compra</h3>
                <ul className='cart-ul'>
                    {cart.map(({ id, image, name, cantidad, price }) => (
                        <li key={id} className="cart-item">
                            <img src={image} alt={name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <span>{name}</span>
                                <span>Cantidad: {cantidad}</span>
                                <span>Precio: ${price}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>

            <form className="checkout-form" onSubmit={handleSubmit}>
                <h3>Datos del pedido</h3>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ingrese su nombre"
                        value={form.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        placeholder="Ingrese su apellido"
                        value={form.apellido}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Entrega</label>
                    <select
                        name="entregaMethod"
                        value={form.entregaMethod}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccione un método</option>
                        <option value="Domicilio">Entrega a domicilio</option>
                        <option value="Retiro">Retiro</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="comments">Comentarios adicionales</label>
                    <textarea
                        name="comments"
                        id="comments"
                        value={form.comments}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Método de pago</label>
                    <select
                        name="paymentMethod"
                        value={form.paymentMethod}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccione un método</option>
                        <option value="transferencia">Transferencia</option>
                        <option value="efectivo">Efectivo</option>
                    </select>
                </div>
                <button type="submit">Realizar pedido</button>
            </form>
        </div>
    );
};

export default Checkout;
