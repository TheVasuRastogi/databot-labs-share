import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

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

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

            const { data } = await axios.get('/api/v1/auth/me', config);
            setUser(data.user);
            setIsAuthenticated(true);
        } catch (err) {
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

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const { data } = await axios.post('/api/v1/auth/login', { email, password }, config);
            
            localStorage.setItem('token', data.token);
            setUser(data.user);
            setIsAuthenticated(true);
            
            return data;
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await axios.get('/api/v1/auth/logout');
            localStorage.removeItem('token');
            setUser(null);
            setIsAuthenticated(false);
        } catch (err) {
            setError(err.response?.data?.message || 'Logout failed');
        }
    };

    const register = async (userData) => {
        try {
            setLoading(true);
            setError(null);

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const { data } = await axios.post('/api/v1/auth/register', userData, config);
            
            localStorage.setItem('token', data.token);
            setUser(data.user);
            setIsAuthenticated(true);
            
            return data;
        } catch (err) {
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

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            };

            const { data } = await axios.put('/api/v1/auth/me/update', userData, config);
            setUser(data.user);
            
            return data;
        } catch (err) {
            setError(err.response?.data?.message || 'Profile update failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

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
