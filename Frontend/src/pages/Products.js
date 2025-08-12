import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRobot, FaRuler, FaCogs, FaMicrochip, FaBox, FaBolt, 
  FaFilter, FaSearch, FaStar, FaArrowRight, FaShoppingCart, FaPlus } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, loading: cartLoading } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const [addingToCart, setAddingToCart] = useState({});
  const navigate = useNavigate();

  const handlePreOrder = (product) => {
    if (!isAuthenticated) {
      toast.error('Please login to place a pre-order');
      navigate('/login');
      return;
    }
    
    // Store minimal product details
    const productDetails = {
      name: product.name,
      image: product.image,
      category: product.category
    };
    localStorage.setItem('preOrderProduct', JSON.stringify(productDetails));
    
    navigate('/preorder');
  };

const products = [
  {
      id: '1',
      name: 'Robotic Arm on Linear Rail',
    category: 'Industrial',
      image: '/images/industrial-robot.svg',
      rating: 5.0,
      isPreorder: true,
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
      name: 'Robotic Joint Assembly',
      category: 'Mobile Robotics',
      image: '/images/20250616_110627.svg',
      rating: 4.9,
      isPreorder: true,
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
      image: '/images/arm.svg',
      rating: 4.8,
      isPreorder: true,
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
    },
    {
      id: '4',
      name: 'SLAM Navigation Robot',
      category: 'Mobile Robotics',
      image: '/images/domestic-robot.jpg',
      rating: 4.7,
      price: 15999,
      stock: 0,
      isPreorder: true,
      shortDesc: 'Advanced autonomous navigation robot with SLAM capabilities',
      highlights: [
        'Real-time Mapping',
        'Obstacle Avoidance',
        'Multi-floor Navigation',
        '8-hour Battery Life'
      ],
      specs: {
        navigation: {
          sensors: 'LiDAR + Cameras',
          mapping: 'SLAM Algorithm',
          speed: '1.5 m/s'
        }
      },
      tags: ['autonomous', 'navigation', 'slam']
    },
    {
      id: '5',
      name: 'Educational Robot Kit',
      category: 'Educational',
      image: '/images/educational-robot.jpg',
      rating: 4.6,
      price: 2999,
      stock: 0,
      isPreorder: true,
      shortDesc: 'Complete educational robotics platform for learning',
      highlights: [
        'Modular Design',
        'Programming Interface',
        'Sensor Array',
        'Educational Materials'
      ],
      specs: {
        educational: {
          platform: 'Arduino/ROS',
          sensors: 'Ultrasonic, IMU, Camera',
          programming: 'Scratch, Python, C++'
        }
      },
      tags: ['educational', 'programming', 'learning']
    },
    {
      id: '6',
      name: 'Entertainment Robot Companion',
      category: 'Entertainment',
      image: '/images/entertainment-robot.jpg',
      rating: 4.5,
      isPreorder: true,
      shortDesc: 'Interactive entertainment robot with AI personality',
      highlights: [
        'Voice Recognition',
        'Interactive Display',
        'AI Personality',
        'Smart Home Integration'
      ],
      specs: {
        ai: {
          voice: 'Natural Language Processing',
          display: '7-inch Touchscreen',
          connectivity: 'WiFi, Bluetooth'
        }
      },
      tags: ['entertainment', 'ai', 'companion']
    },
    {
      id: '7',
      name: 'Smart Gripper System',
      category: 'Industrial',
      image: '/images/industrial-robot.jpg',
      rating: 4.4,
      isPreorder: true,
      shortDesc: 'Intelligent gripper with adaptive force control',
      highlights: [
        'Adaptive Force Control',
        'Multiple Finger Options',
        'Position Feedback',
        'Quick-Change Mount'
      ],
      specs: {},
      tags: ['gripper', 'adaptive', 'force-control']
    },
    {
      id: '8',
      name: 'Linear Slider Rail',
      category: 'Industrial',
      image: '/images/industrial-robot.jpg',
      rating: 4.3,
      isPreorder: true,
      shortDesc: 'Precision linear motion system for extended reach',
      highlights: [
        '2m Travel Length',
        'Servo-driven Control',
        'Low Backlash Design',
        'Cable Management'
      ],
      specs: {},
      tags: ['linear', 'precision', 'motion']
    },
    {
      id: '9',
      name: 'Advanced Vision System',
      category: 'AI & Vision',
      image: '/images/industrial-robot.jpg',
      rating: 4.2,
      isPreorder: true,
      shortDesc: 'AI-powered computer vision system for quality control',
      highlights: [
        'Real-time Object Detection',
        'Quality Inspection',
        'Machine Learning',
        'Edge Computing'
      ],
      specs: {},
      tags: ['ai', 'vision', 'quality-control']
    },
    {
      id: '10',
      name: 'Collaborative Robot',
      category: 'Industrial',
      image: '/images/industrial-robot.jpg',
      rating: 4.1,
      isPreorder: true,
      shortDesc: 'Safe collaborative robot for human-robot interaction',
      highlights: [
        'Safety Certified',
        'Force Sensing',
        'Easy Programming',
        'Flexible Deployment'
      ],
      specs: {},
      tags: ['collaborative', 'safety', 'industrial']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'mobile', name: 'Mobile Robotics' },
    { id: 'educational', name: 'Educational' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'ai', name: 'AI & Vision' }
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
    <div className="min-h-screen bg-[#0A0A0B] text-white py-16 sm:py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] sm:bg-[length:100px_100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] sm:bg-[length:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Our Products
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400/90 max-w-xl sm:max-w-2xl mx-auto px-4 leading-relaxed">
              Discover our range of advanced robotic solutions, from industrial arms to mobile platforms
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col gap-4 sm:gap-6 bg-[#141416] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
            {/* Search - Moved to top for better mobile UX */}
            <div className="relative w-full">
              <FaSearch className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 sm:py-2.5 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            {/* Categories - Scrollable on mobile */}
            <div className="overflow-x-auto pb-2 -mb-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <div className="flex gap-2 sm:gap-4 min-w-max">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-[#141416] rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-end">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-0.5 sm:mb-1 line-clamp-1">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-300">{product.category}</p>
                    </div>
                    <div className="flex items-center bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      <FaStar className="text-yellow-400 mr-1 text-xs sm:text-sm" />
                      <span className="text-white text-xs sm:text-sm">{product.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {product.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-300"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Price and Stock */}
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Contact for pricing
                      </span>
                      <div className="text-xs sm:text-sm">
                        <span className="bg-orange-500/20 text-orange-400 px-2 sm:px-3 py-1 rounded-full">
                          Pre-order
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        to={`/products/${product.id}`}
                        className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-300 text-xs sm:text-sm"
                      >
                        View Details
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                      <button
                        onClick={() => handlePreOrder(product)}
                        disabled={addingToCart[product.id] || (!product.isPreorder && product.stock === 0)}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-medium bg-orange-500 hover:bg-orange-600 text-white ${addingToCart[product.id] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {addingToCart[product.id] ? (
                          <>
                            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span className="sm:hidden">...</span>
                            <span className="hidden sm:inline">Adding...</span>
                          </>
                        ) : (
                          <>
                            <FaPlus className="text-xs sm:text-sm" />
                            Pre-order
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <FaRobot className="text-4xl sm:text-6xl text-gray-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">No products found</h3>
            <p className="text-sm sm:text-base text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
