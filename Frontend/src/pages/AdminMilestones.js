import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminMilestones = () => {
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchMilestones();
  }, []);

  const fetchMilestones = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.get('/api/v1/milestones');
      setMilestones(data.milestones || []);
    } catch (err) {
      setError('Failed to load milestones.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddMilestone = () => {
    setForm({ title: '', description: '' });
    setShowForm(true);
  };

  const handleDeleteMilestone = async (id) => {
    if (!window.confirm('Are you sure you want to remove this milestone?')) return;
    try {
      await axios.delete(`/api/v1/milestones/${id}`);
      fetchMilestones();
    } catch (err) {
      setError('Failed to remove milestone.');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await axios.post('/api/v1/milestones', form);
      setShowForm(false);
      fetchMilestones();
    } catch (err) {
      setError('Failed to add milestone.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white/5 rounded-2xl p-8 shadow-lg mb-8">
        <h1 className="text-2xl font-bold mb-4">Admin Milestone Management</h1>
        <button onClick={handleAddMilestone} className="bg-blue-600 px-4 py-2 rounded text-white font-semibold mb-4">Add Milestone</button>
        {error && <div className="text-red-400 mb-2">{error}</div>}
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto" />
        ) : (
          <table className="min-w-full text-left text-sm mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {milestones.map(milestone => (
                <tr key={milestone._id} className="border-b border-white/10">
                  <td className="py-2 px-4">{milestone.title}</td>
                  <td className="py-2 px-4">{milestone.description}</td>
                  <td className="py-2 px-4">
                    <button onClick={() => handleDeleteMilestone(milestone._id)} className="text-red-400 hover:underline">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <form onSubmit={handleFormSubmit} className="bg-white/10 p-8 rounded-xl w-full max-w-md space-y-4 relative">
            <button type="button" onClick={() => setShowForm(false)} className="absolute top-2 right-2 text-white/60 hover:text-white">&times;</button>
            <h2 className="text-xl font-bold mb-2">Add Milestone</h2>
            <input type="text" name="title" value={form.title} onChange={handleFormChange} placeholder="Title" required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            <textarea name="description" value={form.description} onChange={handleFormChange} placeholder="Description" required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg mt-4 hover:from-blue-600 hover:to-purple-700 transition-colors font-medium">
              {loading ? 'Saving...' : 'Save Milestone'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminMilestones;