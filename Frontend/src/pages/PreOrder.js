import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PreOrder = () => {
  const location = useLocation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    product: location.state?.product || '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/preorders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Failed to submit pre-order');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6">
        <h1 className="text-3xl font-bold mb-4">Pre-order Now</h1>
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-black/30 border border-white/20 text-white" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-black/30 border border-white/20 text-white" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Product</label>
          <input name="product" value={form.product} onChange={handleChange} required className="w-full px-4 py-2 rounded bg-black/30 border border-white/20 text-white" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message (optional)</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="w-full px-4 py-2 rounded bg-black/30 border border-white/20 text-white" />
        </div>
        <button type="submit" disabled={status==='loading'} className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg text-white hover:opacity-90 transition-all">
          {status==='loading' ? 'Submitting...' : 'Submit Pre-order'}
        </button>
        {status==='success' && <div className="text-green-400 font-semibold">Pre-order submitted! We will contact you soon.</div>}
        {status==='error' && <div className="text-red-400 font-semibold">{error}</div>}
      </form>
    </div>
  );
};

export default PreOrder; 