import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { authAPI, orderAPI, preOrderAPI } from '../utils/api';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FaUser, 
  FaEnvelope, 
  FaShoppingBag, 
  FaEdit, 
  FaKey, 
  FaSignOutAlt,
  FaEye,
  FaCreditCard,
  FaShippingFast,
  FaCheckCircle,
  FaClock,
  FaSync
} from 'react-icons/fa';

const Profile = () => {
  const { user, isAuthenticated, loading: authLoading, logout } = useAuth();
  const [orders, setOrders] = useState([]);
  const [preOrders, setPreOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/login');
      return;
    }

    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated, authLoading, navigate]);

  const loadData = async () => {
    setLoading(true);
    setError('');
    try {
      // Fetch pre-orders using API utility
      const { data } = await preOrderAPI.getMyPreOrders();
      setPreOrders(data.data || []);
      console.log('Pre-orders loaded:', data.data?.length);
    } catch (err) {
      console.error('Error loading pre-orders:', err);
      setError('Failed to load your pre-orders. Please try again.');
      toast.error('Failed to load pre-orders. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      navigate('/');
    } catch (err) {
      console.error('Logout error:', err);
      toast.error('Logout failed');
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return <FaCheckCircle className="w-4 h-4 text-green-400" />;
      case 'shipped':
        return <FaShippingFast className="w-4 h-4 text-blue-400" />;
      case 'processing':
        return <FaClock className="w-4 h-4 text-yellow-400" />;
      default:
        return <FaClock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'shipped':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'processing':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#030014]" />
          <div className="absolute inset-0 bg-grid-white/[0.08] bg-[length:50px_50px]" />
          <div className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] bg-purple-500/40 rounded-full filter blur-[120px]" />
          <div className="absolute -bottom-[500px] -right-[500px] w-[1000px] h-[1000px] bg-blue-500/40 rounded-full filter blur-[120px]" />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-300">Loading your profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#030014]" />
          <div className="absolute inset-0 bg-grid-white/[0.08] bg-[length:50px_50px]" />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Please Login</h2>
            <p className="text-gray-400 mb-8">You need to be logged in to view your profile.</p>
            <Link 
              to="/login" 
              className="bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 rounded-lg hover:from-violet-700 hover:to-indigo-700 transition font-medium"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      <Helmet>
        <title>Profile | DataBot-Labs - Your Account</title>
        <meta name="description" content="Manage your DataBot-Labs account, view order history, and update your profile settings." />
      </Helmet>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#030014]" />
        <div className="absolute inset-0 bg-grid-white/[0.08] bg-[length:50px_50px]" />
        
        {/* Gradient orbs */}
        <div className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] bg-purple-500/40 rounded-full filter blur-[120px]" />
        <div className="absolute -bottom-[500px] -right-[500px] w-[1000px] h-[1000px] bg-blue-500/40 rounded-full filter blur-[120px]" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f30_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f30_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Additional ambient light */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="pt-32 pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Welcome back, {user?.name?.split(' ')[0]}
              </h1>
              <p className="text-lg text-gray-300">
                Manage your account and track your robotics journey
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 pb-24">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.05] p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">{user?.name}</h2>
                    <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                      <FaEnvelope className="w-4 h-4" />
                      <span className="text-sm">{user?.email}</span>
                    </div>
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                      user?.role === 'admin' 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      <FaUser className="w-3 h-3" />
                      {user?.role || 'user'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => navigate('/update-profile')}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] transition-all duration-300 group"
                    >
                      <FaEdit className="w-4 h-4 text-violet-400 group-hover:text-violet-300" />
                      <span className="font-medium">Update Profile</span>
                    </button>
                    <button
                      onClick={() => navigate('/change-password')}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] transition-all duration-300 group"
                    >
                      <FaKey className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                      <span className="font-medium">Change Password</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-all duration-300 group text-red-400"
                    >
                      <FaSignOutAlt className="w-4 h-4 group-hover:text-red-300" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orders Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.05] p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <FaClock className="w-6 h-6 text-orange-400" />
                      <h3 className="text-2xl font-bold">Pre-orders</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => loadData()}
                        className="p-2 hover:bg-white/5 rounded-full transition-colors"
                        disabled={loading}
                      >
                        <FaSync className={`w-4 h-4 text-gray-400 ${loading ? 'animate-spin' : 'hover:text-white'}`} />
                      </button>
                      <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2">
                        <FaClock className="w-3 h-3" />
                        {preOrders.length} Pre-orders
                      </span>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-6 flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-red-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      </div>
                      {error}
                    </div>
                  )}

                  {preOrders.length === 0 ? (
                    <div className="text-center py-12">
                      <FaClock className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-400 mb-2">No pre-orders yet</h4>
                      <p className="text-gray-500 mb-6">Start your robotics journey with your first pre-order</p>
                      <Link 
                        to="/products" 
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition font-medium"
                      >
                        <FaClock className="w-4 h-4" />
                        Browse Products
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {preOrders.map((preOrder, index) => (
                        <motion.div
                          key={preOrder._id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-6 hover:bg-white/[0.04] transition-colors"
                        >
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                <FaClock className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h5 className="font-semibold text-white">Pre-order: {preOrder.product}</h5>
                                <p className="text-sm text-gray-400">{new Date(preOrder.createdAt).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                                {preOrder.status || 'Pending'}
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-white">Quantity: {preOrder.quantity}</p>
                                <p className="text-xs text-gray-400">Message: {preOrder.message || 'None'}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;