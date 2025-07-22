import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const userRes = await axios.get('/api/v1/auth/me', { withCredentials: true });
        setUser(userRes.data.user);
        const ordersRes = await axios.get('/api/v1/orders', { withCredentials: true });
        setOrders(ordersRes.data.orders || []);
      } catch (err) {
        setError('Failed to load profile or orders. Please login again.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white/5 rounded-2xl p-8 mb-8 shadow-lg">
        <div className="flex items-center gap-6 mb-6">
          <img
            src={user?.avatar?.url || '/images/default_avatar.jpg'}
            alt="Avatar"
            className="w-20 h-20 rounded-full border-4 border-purple-500 object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold mb-1">{user?.name}</h2>
            <p className="text-gray-300">{user?.email}</p>
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 text-xs font-semibold">
              {user?.role}
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/update-profile')}
            className="px-4 py-2 rounded-lg bg-purple-500/80 hover:bg-purple-600 transition text-white font-semibold"
          >
            Update Profile
          </button>
          <button
            onClick={() => navigate('/change-password')}
            className="px-4 py-2 rounded-lg bg-blue-500/80 hover:bg-blue-600 transition text-white font-semibold"
          >
            Change Password
          </button>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-white/5 rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Order History</h3>
        {orders.length === 0 ? (
          <p className="text-gray-400">No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-4">Order ID</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order._id} className="border-b border-white/10">
                    <td className="py-2 px-4">{order._id}</td>
                    <td className="py-2 px-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="py-2 px-4">{order.status}</td>
                    <td className="py-2 px-4">${order.totalPrice?.toFixed(2) || '0.00'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
