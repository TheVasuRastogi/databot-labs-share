import React, { createContext, useState, useEffect, useContext } from 'react';
import { cartAPI } from '../utils/api';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated) {
            fetchCart();
        } else {
            setCart({ items: [] });
            setLoading(false);
        }
    }, [isAuthenticated]);

    const fetchCart = async () => {
        try {
            setLoading(true);
            setError(null);
            const { data } = await cartAPI.getCart();
            setCart(data.cart || { items: [] });
        } catch (error) {
            console.error('Error fetching cart:', error);
            setError(error.response?.data?.message || 'Error fetching cart');
            setCart({ items: [] }); // Set empty cart on error
        } finally {
            setLoading(false);
        }
    };

    const addToCart = async (productId, quantity = 1, options = {}) => {
        if (!isAuthenticated) {
            throw new Error('Please login to add items to cart');
        }
        
        try {
            setError(null);
            const { data } = await cartAPI.addToCart(productId, quantity, options);
            setCart(data.cart || { items: [] });
            return data;
        } catch (error) {
            setError(error.response?.data?.message || 'Error adding to cart');
            throw error;
        }
    };

    const updateCartItem = async (itemId, quantity) => {
        try {
            setError(null);
            const { data } = await cartAPI.updateCartItem(itemId, quantity);
            setCart(data.cart);
            return data;
        } catch (error) {
            setError(error.response?.data?.message || 'Error updating cart');
            throw error;
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            setError(null);
            const { data } = await cartAPI.removeFromCart(itemId);
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
            setCart({ items: [] });
        } catch (error) {
            setError(error.response?.data?.message || 'Error clearing cart');
            throw error;
        }
    };

    const getCartTotal = () => {
        return (cart.items || []).reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartItemsCount = () => {
        return (cart.items || []).reduce((total, item) => total + item.quantity, 0);
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
