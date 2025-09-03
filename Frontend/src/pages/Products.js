import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRobot, FaSearch, FaStar, FaPlus } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import SEOHelmet from '../components/common/SEOHelmet';

const faqs = [
  {
    q: 'What industries can use ShowRobot Netherlands products?',
    a: 'Retail automation, industrial manufacturing, logistics, education, and research all benefit from our modular robots and components.'
  },
  {
    q: 'Do your robots support ROS and modern toolchains?',
    a: 'Yes. Our platforms support ROS/ROS2, common SDKs, and modern toolchains for rapid integration and prototyping.'
  },
  {
    q: 'How can I evaluate a product before purchasing?',
    a: 'Use the Pre-order button to contact our team. We provide demos, videos, and spec sheets tailored to your use case.'
  },
  {
    q: 'Do you offer custom modules or integrations?',
    a: 'Absolutely. From grippers to linear rails and vision systems, we customize modules and interfaces to your requirements.'
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, loading: cartLoading } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const [addingToCart, setAddingToCart] = useState({});
  const [openFAQ, setOpenFAQ] = useState(null);
  const navigate = useNavigate();

  const handlePreOrder = (product) => {
    if (!isAuthenticated) {
      toast.error('Please login to place a pre-order');
      navigate('/login');
      return;
    }
    const productDetails = {
      name: product.name,
      image: product.image,
      category: product.category
    };
    localStorage.setItem('preOrderProduct', JSON.stringify(productDetails));
    navigate('/preorder');
  };

  const renderSpecs = (specs) => {
    if (!specs || typeof specs !== 'object') return null;
    return (
      <ul className="space-y-2 list-disc list-inside text-gray-300 text-sm">
        {Object.entries(specs).map(([key, value]) => (
          <li key={key}>
            <span className="text-white/90 font-medium capitalize">{key.replace(/_/g, ' ')}:</span>{' '}
            {typeof value === 'object' ? (
              <div className="ml-4 mt-2">{renderSpecs(value)}</div>
            ) : (
              <span className="text-gray-300">{String(value)}</span>
            )}
          </li>
        ))}
      </ul>
    );
  };

const products = [
  {
      id: '1',
      name: 'ShowRobot Netherlands - Advanced Retail Automation',
    category: 'Retail Automation',
      image: '/images/industrial-robot.svg',
      rating: 5.0,
      isPreorder: true,
      comingSoon: false,
      shortDesc: 'Revolutionary retail automation solution from ShowRobot Netherlands with 24/7 operation and programmable intelligence',
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
      name: 'ShowRobot Netherlands - Mobile Retail Assistant',
      category: 'Retail Automation',
      image: '/images/20250616_110627.svg',
      rating: 4.9,
      isPreorder: true,
      comingSoon: false,
      shortDesc: 'Advanced mobile retail automation system from ShowRobot Netherlands with 24/7 operation and programmable intelligence',
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
      name: 'ShowRobot Netherlands - Fixed Retail Automation',
      category: 'Retail Automation',
      image: '/images/arm.svg',
      rating: 4.8,
      isPreorder: true,
      comingSoon: false,
      shortDesc: 'High-strength retail automation system from ShowRobot Netherlands with 24/7 operation and programmable intelligence',
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
      comingSoon: true,
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
      comingSoon: true,
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
      comingSoon: true,
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
      comingSoon: true,
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
      comingSoon: true,
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
      comingSoon: true,
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
      comingSoon: true,
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
    { id: 'retail', name: 'Retail Automation' },
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

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: filteredProducts.map((p, i) => ({
      '@type': 'Product',
      position: i + 1,
      name: p.name,
      description: p.shortDesc,
      image: p.image,
      category: p.category,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: p.rating,
        reviewCount: 1
      }
    }))
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white py-16 sm:py-20 relative">
      <SEOHelmet 
        title="All Robots & Components | ShowRobot Netherlands"
        description="Browse all ShowRobot Netherlands products and components on a single page: detailed specs, highlights, and parts for retail automation, mobile robotics, AI & vision, and more."
        keywords="ShowRobot Netherlands, retail automation, robotics parts, robot specs, AI vision, mobile robotics, collaborative robots, linear rail, gripper"
      />
      
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
      
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
              All Products & Full Details
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400/90 max-w-xl sm:max-w-2xl mx-auto px-4 leading-relaxed">
              Explore every product, with specifications, parts overview, highlights, and pre-order options — all on one page.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col gap-4 sm:gap-6 bg-[#141416] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
            {/* Search */}
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

            {/* Categories */}
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

        {/* Full-detail Product List (alternating layout) */}
        <div className="space-y-0">
          {filteredProducts.map((product, idx) => {
            const imageOnLeft = idx % 2 === 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative py-16 sm:py-20"
              >
                {/* subtle top divider for rhythm */}
                {idx !== 0 && (
                  <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                )}

                <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, x: imageOnLeft ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`${imageOnLeft ? 'md:col-start-1 md:col-span-6 md:order-1' : 'md:col-start-7 md:col-span-6 md:order-2'} relative w-full`}
                  >
                    <div className="relative h-80 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      {product.comingSoon && (
                        <div className="absolute inset-0 rounded-2xl bg-black/50 backdrop-blur-[1px] flex items-center justify-center">
                          <span className="text-white/90 text-sm">Coming Soon</span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                        <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs bg-white/10 backdrop-blur text-white/90 border border-white/10">{product.category}</span>
                        <span className="flex items-center px-3 py-1 rounded-full text-[11px] sm:text-xs bg-black/40 backdrop-blur text-white/90 border border-white/10">
                          <FaStar className="text-yellow-400 mr-1" /> {product.rating}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: imageOnLeft ? 24 : -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className={`${imageOnLeft ? 'md:col-start-7 md:col-span-6 md:order-2 md:pl-4 lg:pl-6 xl:pl-8' : 'md:col-start-1 md:col-span-6 md:order-1 md:pr-4 lg:pr-6 xl:pr-8'} p-5 sm:p-7 lg:p-10`}
                  >
                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                      {product.name}
                    </h3>

                    {/* Overview */}
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                      {product.shortDesc}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="text-white/90 font-semibold mb-3">Key Highlights</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                        {product.highlights.map((h, i) => (
                          <div key={i} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-gray-200">
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-8">
                      <h4 className="text-white/90 font-semibold mb-3">Specifications</h4>
                      {renderSpecs(product.specs)}
                    </div>

                    {/* Parts / Tags */}
                    <div className="mb-8 grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-white/90 font-semibold mb-2">Included Modules / Parts</h4>
                        {product.specs && Object.keys(product.specs).length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {Object.keys(product.specs).map((part) => (
                              <span key={part} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 capitalize">
                                {part.replace(/_/g, ' ')}
                              </span>
                            ))}
                          </div>
                        ) : product.comingSoon ? null : (
                          <p className="text-sm text-gray-400">Details coming soon.</p>
                        )}
                      </div>
                      <div>
                        <h4 className="text-white/90 font-semibold mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 capitalize">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handlePreOrder(product)}
                        disabled={addingToCart[product.id] || (!product.isPreorder && product.stock === 0)}
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-colors duration-300 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white ${addingToCart[product.id] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {addingToCart[product.id] ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Adding...</span>
                          </>
                        ) : (
                          <>
                            <FaPlus className="text-sm" />
                            Pre-order
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* subtle bottom divider for rhythm */}
                <div className="mt-12 sm:mt-16 lg:mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* SEO Text Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Why Choose ShowRobot Netherlands</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our robots and components are engineered for reliability, modularity, and seamless integration. From retail automation arms and mobile platforms to
            vision systems and linear rails, each product is designed to accelerate deployment and reduce maintenance. With ROS/ROS2 support and modern SDKs,
            developers can prototype quickly while operations teams benefit from robust safety and diagnostics.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Whether you are upgrading an industrial line or launching a new autonomous service, ShowRobot Netherlands provides the hardware and software
            ecosystem to scale. Contact our team for tailored recommendations, demos, and integration support.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <div className="bg-[#141416] border border-white/10 rounded-2xl">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-white/10 last:border-0">
                <button
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 text-white/90 font-medium"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  aria-expanded={openFAQ === i}
                >
                  {f.q}
                </button>
                {openFAQ === i && (
                  <div className="px-5 sm:px-6 pb-5 text-gray-300 text-sm sm:text-base">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
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
