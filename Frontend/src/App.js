import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Routes from './Routes';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import './index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Routes />
            </main>
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: '#333',
                  color: '#fff',
                },
              }}
            />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;