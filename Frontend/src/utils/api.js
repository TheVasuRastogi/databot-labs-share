import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor for adding auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Auth API calls
export const authAPI = {
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    logout: () => api.post('/auth/logout'),
    getProfile: () => api.get('/auth/me'),
    updateProfile: (data) => api.put('/users/me', data),
    updatePassword: (passwords) => api.put('/auth/password/update', passwords),
    forgotPassword: (email) => api.post('/auth/password/forgot', { email }),
    resetPassword: (token, passwords) => api.put(`/auth/password/reset/${token}`, passwords)
};

// Product API calls
export const productAPI = {
    getAllProducts: (params) => api.get('/products', { params }),
    getProduct: (id) => api.get(`/products/${id}`),
    createReview: (id, review) => api.post(`/products/${id}/review`, review),
    getProductReviews: (id) => api.get(`/products/${id}/reviews`),
    deleteReview: (id, reviewId) => api.delete(`/products/${id}/reviews/${reviewId}`),
    // Admin routes
    createProduct: (productData) => api.post('/products', productData),
    updateProduct: (id, productData) => api.put(`/products/${id}`, productData),
    deleteProduct: (id) => api.delete(`/products/${id}`)
};

// Order API calls
export const orderAPI = {
    createOrder: (orderData) => api.post('/orders', orderData),
    getOrder: (id) => api.get(`/orders/${id}`),
    myOrders: () => api.get('/orders/me'),
    // Admin routes
    getAllOrders: () => api.get('/orders'),
    updateOrder: (id, orderData) => api.put(`/orders/${id}`, orderData),
    deleteOrder: (id) => api.delete(`/orders/${id}`)
};

// Cart API calls
export const cartAPI = {
    getCart: () => api.get('/cart'),
    addToCart: (productId, quantity) => api.post('/cart', { productId, quantity }),
    updateCartItem: (productId, quantity) => api.put('/cart', { productId, quantity }),
    removeFromCart: (productId) => api.delete(`/cart/${productId}`),
    clearCart: () => api.delete('/cart')
};

// Contact API calls
export const contactAPI = {
    submitContact: (contactData) => api.post('/contact', contactData),
    // Admin routes
    getAllContacts: () => api.get('/contact'),
    updateContactStatus: (id, status) => api.put(`/contact/${id}`, { status }),
    deleteContact: (id) => api.delete(`/contact/${id}`)
};

// User API calls (Admin)
export const userAPI = {
    getAllUsers: () => api.get('/users'),
    getUser: (id) => api.get(`/users/${id}`),
    updateUser: (id, userData) => api.put(`/users/${id}`, userData),
    deleteUser: (id) => api.delete(`/users/${id}`)
};

export default api; 