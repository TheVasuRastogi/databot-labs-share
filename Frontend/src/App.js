import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { COMPANY_LOGO } from './utils/brandAssets';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import Survey from './pages/Survey';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

function SiteLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-theme text-theme">
      <Header />
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer theme="light" position="bottom-right" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Helmet>
        <link rel="icon" href={COMPANY_LOGO} type="image/jpeg" />
        <link rel="shortcut icon" href={COMPANY_LOGO} type="image/jpeg" />
        <link rel="apple-touch-icon" href={COMPANY_LOGO} />
      </Helmet>
      <ScrollToTop />
      <SiteLayout />
    </Router>
  );
}

export default App;
