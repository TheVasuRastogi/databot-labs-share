import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Checkout = () => {
  const { cart, clearCart, getCartTotal } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const orderItems = (cart.items || []).map(item => ({
        product: item.product._id || item.product,
        quantity: item.quantity,
        price: item.price
      }));
      const orderData = {
        orderItems,
        shippingInfo,
        paymentInfo: { method: 'COD' } // Placeholder for payment info
      };
      await axios.post('/api/v1/order/new', orderData, { withCredentials: true });
      await clearCart();
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.message || 'Order placement failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-2xl bg-white/5 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Address</label>
            <input type="text" name="address" value={shippingInfo.address} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1">City</label>
              <input type="text" name="city" value={shippingInfo.city} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            </div>
            <div className="flex-1">
              <label className="block mb-1">Postal Code</label>
              <input type="text" name="postalCode" value={shippingInfo.postalCode} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            </div>
          </div>
          <div>
            <label className="block mb-1">Country</label>
            <input type="text" name="country" value={shippingInfo.country} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Order Summary</h2>
            <ul className="mb-2">
              {(cart.items || []).map(item => (
                <li key={item._id} className="flex justify-between">
                  <span>{item.product.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
          </div>
          {error && <div className="text-red-400 mt-2">{error}</div>}
          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg mt-6 hover:from-blue-600 hover:to-purple-700 transition-colors font-medium">
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
