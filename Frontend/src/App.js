import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import AppRoutes from './Routes';

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
            <main className="flex-grow pt-16 sm:pt-20 min-h-[calc(100vh-4rem)]">
              <AppRoutes />
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