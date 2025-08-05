import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      setError('');
      try {
        const { data } = await axios.get(`/api/v1/order/${id}`, { withCredentials: true });
        setOrder(data.order);
      } catch (err) {
        setError('Failed to load order details.');
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

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

  if (!order) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white/5 rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Order Details</h1>
        <div className="mb-4">
          <span className="font-semibold">Order ID:</span> {order._id}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Status:</span> {order.status}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Date:</span> {new Date(order.createdAt).toLocaleDateString()}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Shipping Info:</span>
          <div className="ml-4">
            <div>{order.shippingInfo?.address}</div>
            <div>{order.shippingInfo?.city}, {order.shippingInfo?.postalCode}, {order.shippingInfo?.country}</div>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Items:</span>
          <ul className="ml-4">
            {order.orderItems.map(item => (
              <li key={item._id} className="flex justify-between">
                <span>{item.product?.name || item.product} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 font-bold text-lg">
          Total: ${order.totalPrice || order.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
        </div>
        <Link to="/profile" className="text-blue-400 hover:underline">Back to Profile</Link>
      </div>
    </div>
  );
};

export default OrderDetails;