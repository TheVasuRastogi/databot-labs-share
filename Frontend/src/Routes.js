import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/route/ProtectedRoute';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Software from './pages/Software';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PreOrder from './pages/PreOrder';
import OrderDetails from './pages/OrderDetails';
import Resources from './pages/Resources';
import Technologies from './pages/Technologies';

// Admin Routes
import AdminProducts from './pages/AdminProducts';
import AdminPreOrders from './pages/AdminPreOrders';
import AdminTeam from './pages/AdminTeam';
import AdminContacts from './pages/AdminContacts';
import AdminMilestones from './pages/AdminMilestones';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/software" element={<Software />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/technologies" element={<Technologies />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pre-order" element={<PreOrder />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        
        {/* Admin Routes */}
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/pre-orders" element={<AdminPreOrders />} />
        <Route path="/admin/team" element={<AdminTeam />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin/milestones" element={<AdminMilestones />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
