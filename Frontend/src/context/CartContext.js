import React, { createContext, useState, useEffect } from 'react';
import { cartAPI } from '../utils/api';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const { data } = await cartAPI.getCart();
            setCart(data.cart);
        } catch (error) {
            console.error('Error fetching cart:', error);
            setError(error.response?.data?.message || 'Error fetching cart');
        } finally {
            setLoading(false);
        }
    };

    const addToCart = async (productId, quantity = 1) => {
        try {
            setError(null);
            const { data } = await cartAPI.addToCart(productId, quantity);
            setCart(data.cart);
            return data;
        } catch (error) {
            setError(error.response?.data?.message || 'Error adding to cart');
            throw error;
        }
    };

    const updateCartItem = async (productId, quantity) => {
        try {
            setError(null);
            const { data } = await cartAPI.updateCartItem(productId, quantity);
            setCart(data.cart);
            return data;
        } catch (error) {
            setError(error.response?.data?.message || 'Error updating cart');
            throw error;
        }
    };

    const removeFromCart = async (productId) => {
        try {
            setError(null);
            const { data } = await cartAPI.removeFromCart(productId);
            setCart(data.cart);
            return data;
        } catch (error) {
            setError(error.response?.data?.message || 'Error removing from cart');
            throw error;
        }
    };

    const clearCart = async () => {
        try {
            setError(null);
            await cartAPI.clearCart();
            setCart([]);
        } catch (error) {
            setError(error.response?.data?.message || 'Error clearing cart');
            throw error;
        }
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartItemsCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const value = {
        cart,
        loading,
        error,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartItemsCount,
        itemCount: getCartItemsCount(),
        total: getCartTotal()
    };

    return (
        <CartContext.Provider value={value}>
            {!loading && children}
        </CartContext.Provider>
    );
};
