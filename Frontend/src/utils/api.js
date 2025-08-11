import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        // Add token to request if available
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        // Add Accept header
        config.headers.Accept = 'application/json';
        return config;
    },
    (error) => {
        console.error('Request interceptor error:', error);
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        
        // Handle 401 Unauthorized responses
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            // Only redirect if we're not already on the login/register page
            if (!window.location.pathname.includes('/login') && !window.location.pathname.includes('/register')) {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

// Auth API
export const authAPI = {
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    logout: () => api.get('/auth/logout'),
    getProfile: () => api.get('/auth/me'),
    updateProfile: (data) => api.put('/auth/me/update', data),
    updatePassword: (passwords) => api.put('/auth/password/update', passwords),
    forgotPassword: (email) => api.post('/auth/password/forgot', { email }),
    resetPassword: (token, passwords) => api.put(`/auth/password/reset/${token}`, passwords)
};

// Product API
export const productAPI = {
    getAllProducts: (params) => api.get('/products', { params }),
    getProduct: (id) => api.get(`/product/${id}`),
    createReview: (productId, review) => api.post(`/product/${productId}/review`, review),
    getProductReviews: (id) => api.get(`/product/${id}/reviews`),
    deleteReview: (id, reviewId) => api.delete(`/product/${id}/reviews/${reviewId}`),
    // Admin routes
    createProduct: (productData) => api.post('/admin/product/new', productData),
    updateProduct: (id, productData) => api.put(`/admin/product/${id}`, productData),
    deleteProduct: (id) => api.delete(`/admin/product/${id}`)
};

// Contact API
export const contactAPI = {
    submitContact: (data) => api.post('/contact', data)
};

// Order API
export const orderAPI = {
    createOrder: (orderData) => api.post('/orders/new', orderData),
    getOrder: (id) => api.get(`/orders/${id}`),
    myOrders: () => api.get('/orders/me'),
    // Admin routes
    getAllOrders: () => api.get('/admin/orders'),
    updateOrder: (id, orderData) => api.put(`/admin/orders/${id}`, orderData),
    deleteOrder: (id) => api.delete(`/admin/orders/${id}`)
};

// Pre-order API
export const preOrderAPI = {
    submitPreOrder: (data) => api.post('/preorders', data),
    getMyPreOrders: () => api.get('/preorders/my'),
    // Admin routes
    getAllPreOrders: () => api.get('/preorders'),
    updatePreOrderStatus: (id, status) => api.patch(`/preorders/${id}`, { status })
};

// Cart API
export const cartAPI = {
    getCart: () => api.get('/cart'),
    addToCart: (productId, quantity, options = {}) => api.post('/cart', { productId, quantity, ...options }),
    updateCartItem: (itemId, quantity) => api.put(`/cart/${itemId}`, { quantity }),
    removeFromCart: (itemId) => api.delete(`/cart/${itemId}`),
    clearCart: () => api.delete('/cart')
};

export default api;