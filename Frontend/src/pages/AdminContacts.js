import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.get('/api/v1/contact');
      setContacts(data.contacts || []);
    } catch (err) {
      setError('Failed to load contacts.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact message?')) return;
    try {
      await axios.delete(`/api/v1/contact/${id}`);
      fetchContacts();
    } catch (err) {
      setError('Failed to delete contact.');
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      await axios.put(`/api/v1/contact/${id}`, { status });
      fetchContacts();
    } catch (err) {
      setError('Failed to update status.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white/5 rounded-2xl p-8 shadow-lg mb-8">
        <h1 className="text-2xl font-bold mb-4">Admin Contact Management</h1>
        {error && <div className="text-red-400 mb-2">{error}</div>}
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto" />
        ) : (
          <table className="min-w-full text-left text-sm mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Message</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact._id} className="border-b border-white/10">
                  <td className="py-2 px-4">{contact.name}</td>
                  <td className="py-2 px-4">{contact.email}</td>
                  <td className="py-2 px-4">{contact.message}</td>
                  <td className="py-2 px-4">{contact.status || 'pending'}</td>
                  <td className="py-2 px-4">
                    <button onClick={() => handleUpdateStatus(contact._id, 'resolved')} className="text-green-400 hover:underline mr-2">Mark Resolved</button>
                    <button onClick={() => handleDeleteContact(contact._id)} className="text-red-400 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminContacts;