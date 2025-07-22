import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRobot, FaRuler, FaCogs, FaMicrochip, FaBox, FaBolt, 
  FaFilter, FaSearch, FaStar, FaArrowRight } from 'react-icons/fa';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

const products = [
  {
      id: '1',
      name: 'Robotic Arm on Linear Rail',
    category: 'Industrial',
      price: '€8,999',
      image: '/images/industrial-robot.jpg',
      rating: 5.0,
      shortDesc: 'High-precision robotic arm with linear rail system',
      highlights: [
        'Arm Length: 1.04m',
        'Total Reach: up to 3.54m',
        'Precision: ±0.1mm',
        'ROS2 Compatible'
      ],
      specs: {
        arm: {
          length: '1.04 meters',
          weight: '17 kg',
          payload: '5 kg'
        },
        rail: {
          length: '1-2.5 meters',
          accuracy: '±0.05 mm'
        }
      },
      tags: ['industrial', 'automation', 'precision']
    },
    {
      id: '2',
      name: 'Goliath Mobile',
      category: 'Mobile Robotics',
      price: '€12,999',
      image: '/images/industrial-robot.jpg',
      rating: 4.9,
      shortDesc: 'Advanced mobile robotic platform with all-terrain capabilities',
      highlights: [
        'Size: 68×42×30 cm',
        'Weight: 35 kg',
        '4× 80W BLDC Motors',
        'LIDAR Navigation'
      ],
      specs: {
        physical: {
          dimensions: '68×42×30 cm',
          weight: '35 kg'
        },
        drive: {
          motors: '4× 80W BLDC',
          battery: '24V/48V'
        }
      },
      tags: ['mobile', 'autonomous', 'all-terrain']
    },
    {
      id: '3',
      name: 'Goliath Arm (Fixed)',
      category: 'Industrial',
      price: '€6,999',
      image: '/images/industrial-robot.jpg',
      rating: 4.8,
      shortDesc: 'High-strength industrial robotic arm for automation',
      highlights: [
        'Length: 1.04m',
        'Weight: 17 kg',
        'Industrial Grade',
        'High Precision'
      ],
      specs: {
        physical: {
          length: '1.04 meters',
          weight: '17 kg'
        },
        construction: {
          frame: 'Aluminum + Steel',
          mount: 'ISO 9409-1'
        }
      },
      tags: ['industrial', 'fixed', 'automation']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'mobile', name: 'Mobile Robotics' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || 
      product.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our range of advanced robotic solutions, from industrial arms to mobile platforms
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-[#141416] rounded-2xl p-6 border border-white/10">
            {/* Categories */}
            <div className="flex gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 bg-white/5 border border-white/10 rounded-full py-2 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-[#141416] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-300">{product.category}</p>
                    </div>
                    <div className="flex items-center bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-white">{product.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    {product.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-lg p-3 text-sm text-gray-300"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Price and Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <div className="flex gap-2">
                      <Link
                        to={`/products/${product.id}`}
                        className="flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300"
                      >
                        View Details
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <Link
                        to="/preorder"
                        state={{ product: product.name }}
                        className="flex items-center gap-2 px-6 py-2 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 min-w-[150px] text-center"
                      >
                        Pre-order Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <FaRobot className="text-6xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
