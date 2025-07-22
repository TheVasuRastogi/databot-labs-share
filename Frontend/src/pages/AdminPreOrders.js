import React, { useEffect, useState } from 'react';

const AdminPreOrders = () => {
  const [preOrders, setPreOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState('');

  useEffect(() => {
    fetch('/api/v1/preorders', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        if (data.success) setPreOrders(data.data);
        else setError(data.message || 'Failed to fetch pre-orders');
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch pre-orders');
        setLoading(false);
      });
  }, []);

  const handleStatusChange = async (id, status) => {
    setUpdating(id);
    try {
      const res = await fetch(`/api/v1/preorders/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (data.success) {
        setPreOrders(preOrders => preOrders.map(po => po._id === id ? { ...po, status } : po));
      } else {
        alert(data.message || 'Failed to update status');
      }
    } catch (err) {
      alert('Failed to update status');
    }
    setUpdating('');
  };

  if (loading) return <div className="text-white p-8">Loading pre-orders...</div>;
  if (error) return <div className="text-red-400 p-8">{error}</div>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Pre-orders (Admin)</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/10 rounded-xl">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Created</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {preOrders.map(po => (
              <tr key={po._id} className="border-b border-white/10">
                <td className="px-4 py-2">{po.name}</td>
                <td className="px-4 py-2">{po.email}</td>
                <td className="px-4 py-2">{po.product}</td>
                <td className="px-4 py-2">{po.message}</td>
                <td className="px-4 py-2">{po.status}</td>
                <td className="px-4 py-2">{new Date(po.createdAt).toLocaleString()}</td>
                <td className="px-4 py-2">
                  <select
                    value={po.status}
                    onChange={e => handleStatusChange(po._id, e.target.value)}
                    disabled={updating === po._id}
                    className="bg-black/30 border border-white/20 rounded px-2 py-1 text-white"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPreOrders; 