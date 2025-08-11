import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/route/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import Software from './pages/Software';
import Technologies from './pages/Technologies';
import PreOrder from './pages/PreOrder';
import AdminPreOrders from './pages/AdminPreOrders';
import OrderDetails from './pages/OrderDetails';
import AdminProducts from './pages/AdminProducts';
import AdminTeam from './pages/AdminTeam';
import AdminMilestones from './pages/AdminMilestones';
import AdminContacts from './pages/AdminContacts';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Set axios defaults
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
    return (
        <Router>
            <ScrollToTop />
            <AuthProvider>
                <CartProvider>
                    <div className="flex flex-col min-h-screen bg-black text-white">
                        <Header />
                        <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/:id" element={<ProductDetails />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/resources" element={<Resources />} />
                            <Route path="/software" element={<Software />} />
                            <Route path="/technologies" element={<Technologies />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/preorder" element={<PreOrder />} />
                            <Route path="/admin/preorders" element={<AdminPreOrders />} />
                            <Route
                                path="/orders/:id"
                                element={
                                    <ProtectedRoute>
                                        <OrderDetails />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/admin/products"
                                element={
                                    <ProtectedRoute requiredRole="admin">
                                        <AdminProducts />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/admin/team"
                                element={
                                    <ProtectedRoute requiredRole="admin">
                                        <AdminTeam />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/admin/milestones"
                                element={
                                    <ProtectedRoute requiredRole="admin">
                                        <AdminMilestones />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/admin/contacts"
                                element={
                                    <ProtectedRoute requiredRole="admin">
                                        <AdminContacts />
                                    </ProtectedRoute>
                                }
                            />
                            
                            {/* Protected Routes */}
                            <Route
                                path="/cart"
                                element={
                                    <ProtectedRoute>
                                        <Cart />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <ProtectedRoute>
                                        <Profile />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </main>
                        <Footer />
                        <ToastContainer />
                    </div>
                </CartProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;

