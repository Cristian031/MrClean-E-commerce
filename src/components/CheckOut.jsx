import React, { useContext, useState } from 'react';
import { CartContext } from './context/CartContext';
import Swal from 'sweetalert2';
import { doc, setDoc } from 'firebase/firestore';
import {db} from '../firebase/firebaseService.js'; 
import '../css/Checkout.css';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [form, setForm] = useState({
        name: '',
        email: '',
        entregaMethod: 'entrega',
        comments: '',
        paymentMethod: 'transfer'
    });

    const handleInputChange = ({ target: { name, value } }) => {
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const generateWhatsAppMessage = () => {
        const message = encodeURIComponent(`
            Hola, me gustaría realizar el pedido con los siguientes detalles:
            Nombre: ${form.name}
            Email: ${form.email}
            Método de entrega: ${form.entregaMethod}
            Comentarios: ${form.comments}
            Total a pagar: $${totalPrice.toFixed(2)}
            Muchas gracias!
        `.trim());
        return `https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE_NUMBER}?text=${message}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orderDetails = {
            ...form,
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
                        placeholder="Ingresa tu nombre"
                        value={form.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ingresa tu correo electrónico"
                        value={form.email}
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
                        <option value="entrega">Entrega a domicilio</option>
                        <option value="pickup">Retiro</option>
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
                        <option value="transfer">Transferencia</option>
                        <option value="efectivo">Efectivo</option>
                    </select>
                </div>
                <button type="submit">Realizar pedido</button>
            </form>
        </div>
    );
};

export default Checkout;
