import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    image: null
  });
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.get('/api/v1/products');
      setProducts(data.products);
    } catch (err) {
      setError('Failed to load products.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setForm({ name: '', price: '', category: '', stock: '', image: null });
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      price: product.price,
      category: product.category || '',
      stock: product.stock,
      image: null
    });
    setShowForm(true);
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await axios.delete(`/api/v1/admin/product/${id}`);
      fetchProducts();
    } catch (err) {
      setError('Failed to delete product.');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('price', form.price);
      formData.append('category', form.category);
      formData.append('stock', form.stock);
      if (form.image) formData.append('image', form.image);
      if (editingProduct) {
        await axios.put(`/api/v1/admin/product/${editingProduct._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.post('/api/v1/admin/product/new', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      setShowForm(false);
      fetchProducts();
    } catch (err) {
      setError('Failed to save product.');
    } finally {
      setLoading(false);
    }
  };

  // Filtering and search
  const filteredProducts = products.filter(p =>
    (!search || p.name.toLowerCase().includes(search.toLowerCase())) &&
    (!categoryFilter || p.category === categoryFilter)
  );
  const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean)));

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white/5 rounded-2xl p-8 shadow-lg mb-8">
        <h1 className="text-2xl font-bold mb-4">Admin Product Management</h1>
        <div className="flex gap-4 mb-4">
          <button onClick={handleAddProduct} className="bg-blue-600 px-4 py-2 rounded text-white font-semibold">Add Product</button>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-3 py-2 rounded bg-black/40 border border-white/10"
          />
          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="px-3 py-2 rounded bg-black/40 border border-white/10"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        {error && <div className="text-red-400 mb-2">{error}</div>}
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto" />
        ) : (
          <table className="min-w-full text-left text-sm mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Stock</th>
                <th className="py-2 px-4">Image</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product._id} className="border-b border-white/10">
                  <td className="py-2 px-4">{product.name}</td>
                  <td className="py-2 px-4">${product.price}</td>
                  <td className="py-2 px-4">{product.category}</td>
                  <td className="py-2 px-4">{product.stock}</td>
                  <td className="py-2 px-4">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                    ) : 'N/A'}
                  </td>
                  <td className="py-2 px-4">
                    <button onClick={() => handleEditProduct(product)} className="text-blue-400 hover:underline mr-2">Edit</button>
                    <button onClick={() => handleDeleteProduct(product._id)} className="text-red-400 hover:underline">Delete</button>
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
            <h2 className="text-xl font-bold mb-2">{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
            <input type="text" name="name" value={form.name} onChange={handleFormChange} placeholder="Name" required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            <input type="number" name="price" value={form.price} onChange={handleFormChange} placeholder="Price" required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            <input type="text" name="category" value={form.category} onChange={handleFormChange} placeholder="Category" className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            <input type="number" name="stock" value={form.stock} onChange={handleFormChange} placeholder="Stock" required className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            <input type="file" name="image" accept="image/*" onChange={handleFormChange} className="w-full px-4 py-2 rounded bg-black/40 border border-white/10" />
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg mt-4 hover:from-blue-600 hover:to-purple-700 transition-colors font-medium">
              {loading ? 'Saving...' : 'Save Product'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;