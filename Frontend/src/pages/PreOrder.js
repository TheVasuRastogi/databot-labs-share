import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';
import { preOrderAPI } from '../utils/api';
import { useAuth } from '../hooks/useAuth';

const LOCAL_STORAGE_KEY = 'preorder_form';

const PreOrder = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [productDetails, setProductDetails] = useState(null);

  // Load product details from localStorage
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please login to place a pre-order');
      navigate('/login');
      return;
    }

    const savedProduct = localStorage.getItem('preOrderProduct');
    if (!savedProduct) {
      toast.error('Please select a product first');
      navigate('/products');
      return;
    }
    const parsedProduct = JSON.parse(savedProduct);
    setProductDetails(parsedProduct);

    // Pre-fill form with user data if available
    if (user) {
      setForm(prev => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email
      }));
    }
  }, [navigate, isAuthenticated, user]);

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    quantity: 1,
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage on every change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!productDetails) {
      toast.error('Please select a product first');
      navigate('/products');
      return;
    }

    setStatus('loading');
    setError('');
    
    try {
      // Prepare the data
      if (!productDetails || !productDetails.name) {
        throw new Error('Please select a product first');
      }

      const preOrderData = {
        name: form.name,
        email: form.email,
        company: form.company || undefined,
        phone: form.phone,
        product: productDetails.name,
        productName: productDetails.name,
        quantity: parseInt(form.quantity),
        message: form.message || undefined,
        expectedDelivery: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000) // 60 days from now
      };

      const { data } = await preOrderAPI.submitPreOrder(preOrderData);
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to submit pre-order');
      }

      setStatus('success');
      setForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        quantity: 1,
        message: ''
      });
      // Clear all related storage
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      localStorage.removeItem('preOrderProduct');
      
      // Show success message
      toast.success('🎉 Pre-order submitted successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Show follow-up message
      setTimeout(() => {
        toast.info('🤝 Our team will contact you soon to discuss your pre-order details.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }, 1000);

      // Navigate back to products after messages
      setTimeout(() => {
        navigate('/products');
      }, 3000);

    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong');
      toast.error('❌ ' + (err.message || 'Failed to submit pre-order'), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
        >
          <FaArrowLeft />
          Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Preview */}
          <div className="bg-white/5 p-6 rounded-2xl">
            <img 
              src={productDetails?.image} 
              alt={productDetails?.productName} 
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{productDetails?.productName}</h2>
            <p className="text-white/70 mb-4">{productDetails?.category}</p>
            <div className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg inline-block">
              Pre-order
            </div>
          </div>

          {/* Pre-order Form */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-xl">
            <h1 className="text-3xl font-bold mb-6">Pre-order Details</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input 
                type="hidden"
                name="product"
                value={form.product}
              />
              <div>
                <label className="block mb-1 font-semibold">Name</label>
                <input 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-2 rounded bg-black/30 border border-white/20 text-white" 
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input 
                  name="email" 
                  type="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-2 rounded bg-black/30 border border-white/20 text-white" 
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Company Name (Optional)</label>
                <input 
                  name="company" 
                  value={form.company} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 rounded bg-black/30 border border-white/20 text-white" 
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Phone Number</label>
                <input 
                  name="phone" 
                  type="tel" 
                  value={form.phone} 
                  onChange={handleChange} 
                  required
                  placeholder="+1 (234) 567-8900"
                  className="w-full px-4 py-2 rounded bg-black/30 border border-white/20 text-white" 
                />
                <p className="mt-1 text-sm text-gray-400">
                  Supported formats:
                  <br />• International: +1234567890, +91 1234567890
                  <br />• Local: 1234567890, 123-456-7890
                  <br />• With parentheses: (123) 456-7890
                </p>
              </div>
              <div>
                <label className="block mb-1 font-semibold">Quantity</label>
                <input 
                  name="quantity" 
                  type="number" 
                  min="1" 
                  value={form.quantity} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-2 rounded bg-black/30 border border-white/20 text-white" 
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Message (optional)</label>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-black/30 border border-white/20 text-white" 
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'} 
                className={`w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg text-white transition-all flex items-center justify-center gap-2 ${
                  status === 'loading' ? 'opacity-80 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  'Submit Pre-order'
                )}
              </button>
              {/* Success and error messages are now handled by toast notifications */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrder; 