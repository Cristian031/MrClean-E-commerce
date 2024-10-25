import React, { createContext, useState, useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import Swal from "sweetalert2";
import { db } from '../../firebase/firebaseService.js'; 

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Carga el carrito desde Firestore al iniciar
    useEffect(() => {
        const loadCart = async () => {
            const cartDoc = await getDoc(doc(db, "carts", "userCart"));
            if (cartDoc.exists()) {
                const items = cartDoc.data().items || [];
                setCart(items); 
            }
        };

        loadCart();
    }, []);

    const saveCartToFirestore = async (cartToSave) => {
        try {
            await setDoc(doc(db, "carts", "userCart"), { items: cartToSave });
        } catch (error) {
            console.error("Error al guardar el carrito en Firestore: ", error);
        }
    };

    const clearCart = () => {
        setCart([]);
        saveCartToFirestore([]); // Guardar el carrito vacío en Firestore
    };

    const addProduct = async (item) => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        const stock = Number(item.stock);
        
        if (existingItemIndex >= 0) {
            const existingItem = cart[existingItemIndex];
            const updatedCantidad = existingItem.cantidad + item.cantidad;

            if (updatedCantidad <= stock) {
                const updatedCart = [...cart];
                updatedCart[existingItemIndex].cantidad = updatedCantidad;
                setCart(updatedCart);
                await saveCartToFirestore(updatedCart);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se puede agregar más productos',
                    text: `Solo hay ${stock} unidades disponibles.`,
                });
            }
        } else {
            if (item.cantidad <= stock) {
                const newCartItem = {
                    ...item,
                    cantidad: item.cantidad
                };
                setCart([...cart, newCartItem]);
                await saveCartToFirestore([...cart, newCartItem]);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se puede agregar más productos',
                    text: `Solo hay ${stock} unidades disponibles.`,
                });
            }
        }
    };

    const removeProduct = async (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        await saveCartToFirestore(updatedCart); // Guarda el carrito actualizado
    };

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.cantidad), 0);

    const getProductQuantity = (id) => {
        const item = cart.find(cartItem => cartItem.id === id);
        return item ? item.cantidad : 0;
    };

    return (
        <CartContext.Provider value={{ cart, clearCart, addProduct, removeProduct, totalPrice, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
