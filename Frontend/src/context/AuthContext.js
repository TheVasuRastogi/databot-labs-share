import React, { createContext, useState, useEffect } from 'react';
import api, { authAPI } from '../utils/api';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }

            const { data } = await authAPI.getProfile();
            setUser(data.user);
            setIsAuthenticated(true);
        } catch (err) {
            console.error('Auth check failed:', err);
            localStorage.removeItem('token');
            setUser(null);
            setIsAuthenticated(false);
            setError(err.response?.data?.message || 'Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            setLoading(true);
            setError(null);

            const { data } = await authAPI.login({ email, password });
            
            if (data.success && data.token) {
                localStorage.setItem('token', data.token);
                setUser(data.user);
                setIsAuthenticated(true);
                return data;
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (err) {
            console.error('Login failed:', err);
            const errorMessage = err.response?.data?.message || err.message || 'Login failed';
            setError(errorMessage);
            // Clear any existing token on login failure
            localStorage.removeItem('token');
            setUser(null);
            setIsAuthenticated(false);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await authAPI.logout();
            localStorage.removeItem('token');
            setUser(null);
            setIsAuthenticated(false);
        } catch (err) {
            console.error('Logout failed:', err);
            setError(err.response?.data?.message || 'Logout failed');
            // Still remove token and user state even if logout API fails
            localStorage.removeItem('token');
            setUser(null);
            setIsAuthenticated(false);
        }
    };

    const register = async (userData) => {
        try {
            setLoading(true);
            setError(null);

            const { data } = await authAPI.register(userData);
            
            localStorage.setItem('token', data.token);
            setUser(data.user);
            setIsAuthenticated(true);
            
            return data;
        } catch (err) {
            console.error('Registration failed:', err);
            setError(err.response?.data?.message || 'Registration failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateProfile = async (userData) => {
        try {
            setLoading(true);
            setError(null);

            const { data } = await authAPI.updateProfile(userData);
            setUser(data.user);
            
            return data;
        } catch (err) {
            console.error('Profile update failed:', err);
            setError(err.response?.data?.message || 'Profile update failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Update axios token on auth state change
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete api.defaults.headers.common['Authorization'];
        }
    }, [isAuthenticated]);

    const value = {
        user,
        loading,
        error,
        isAuthenticated,
        login,
        logout,
        register,
        updateProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;