import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', role: '', avatar: null });

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.get('/api/v1/team');
      setTeam(data.teamMembers || []);
    } catch (err) {
      setError('Failed to load team members.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar') {
      setForm({ ...form, avatar: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleAddTeamMember = () => {
    setForm({ name: '', role: '', avatar: null });
    setShowForm(true);
  };

  const handleDeleteTeamMember = async (id) => {
    if (!window.confirm('Are you sure you want to remove this team member?')) return;
    try {
      await axios.delete(`/api/v1/team/${id}`);
      fetchTeam();
    } catch (err) {
      setError('Failed to remove team member.');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('role', form.role);
      if (form.avatar) formData.append('avatar', form.avatar);
      await axios.post('/api/v1/team', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setShowForm(false);
      fetchTeam();
    } catch (err) {
      setError('Failed to add team member.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white/5 rounded-2xl p-8 shadow-lg mb-8">
        <h1 className="text-2xl font-bold mb-4">Admin Team Management</h1>
        <button onClick={handleAddTeamMember} className="bg-blue-600 px-4 py-2 rounded text-white font-semibold mb-4">Add Team Member</button>
        {error && <div className="text-red-400 mb-2">{error}</div>}
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto" />
        ) : (
          <table className="min-w-full text-left text-sm mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Role</th>
                <th className="py-2 px-4">Avatar</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {team.map(member => (
                <tr key={member._id} className="border-b border-white/10">
                  <td className="py-2 px-4">{member.name}</td>
                  <td className="py-2 px-4">{member.role}</td>
                  <td className="py-2 px-4">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="w-12 h-12 object-cover rounded" />
                    ) : 'N/A'}
                  </td>
                  <td className="py-2 px-4">
                    <button onClick={() => handleDeleteTeamMember(member._id)} className="text-red-400 hover:underline">Remove</button>
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
            <h2 className="text-xl font-bold mb-2">Add Team Member</h2>
            <input type="text" name="name" value={form.name} onChange={handleFormChange} placeholder="Name" required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            <input type="text" name="role" value={form.role} onChange={handleFormChange} placeholder="Role" required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            <input type="file" name="avatar" accept="image/*" onChange={handleFormChange} className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg mt-4 hover:from-blue-600 hover:to-purple-700 transition-colors font-medium">
              {loading ? 'Saving...' : 'Save Team Member'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminTeam;