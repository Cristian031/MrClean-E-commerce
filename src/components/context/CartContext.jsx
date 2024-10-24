import React, { createContext, useState } from "react";
import Swal from "sweetalert2"; // Asegúrate de importar SweetAlert

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
    };
    

    const getProductQuantity = (id) => {
        const product = cart.find(item => item.id === id);
        return product ? product.cantidad : 0; // Cambié 'quantity' a 'cantidad'
    };

    const addProduct = (item) => { 
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex >= 0) {
            const existingItem = cart[existingItemIndex];
            const updatedCantidad = existingItem.cantidad + item.cantidad;
            if (updatedCantidad <= item.stock) {
                const updatedCart = [...cart];
                updatedCart[existingItemIndex].cantidad = updatedCantidad;
                setCart(updatedCart);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se puede agregar más productos',
                    text: `Solo hay ${item.stock} unidades disponibles.`,
                });
            }
        } else {
            if (item.cantidad <= item.stock) {
                setCart([...cart, item]);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se puede agregar más productos',
                    text: `Solo hay ${item.stock} unidades disponibles.`,
                });
            }
        }
    };
    
    const removeProduct = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.cantidad), 0);

    return (
        <CartContext.Provider value={{ cart, clearCart, addProduct, removeProduct, getProductQuantity, totalPrice }}> 
            {children}
        </CartContext.Provider>
    );
};
