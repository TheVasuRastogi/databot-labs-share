import React, { useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaCogs, FaRobot, FaTools, FaCode, 
  FaChartLine, FaShieldAlt, FaMicrochip, FaBox, FaRuler, FaBolt, 
  FaWrench, FaCloudDownloadAlt, FaGithub, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('specs');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const [addingToCart, setAddingToCart] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      navigate('/login');
      return;
    }

    try {
      setAddingToCart(true);
      await addToCart(id, quantity, { isPreorder: product?.isPreorder });
      toast.success(product?.isPreorder ? 'Added to cart as pre-order!' : 'Added to cart successfully!');
    } catch (error) {
      toast.error(error.message || error.response?.data?.message || 'Failed to add to cart');
    } finally {
      setAddingToCart(false);
    }
  };

  const products = {
    '1': {
      name: 'Robotic Arm on Linear Rail',
      category: 'Industrial',
      image: '/images/industrial-robot.svg',
      rating: 5.0,
      price: 25999,
      stock: 5,
      isPreorder: false,
      description: 'High-precision robotic arm mounted on a linear rail system, combining versatility with extended reach capabilities.',
      specs: {
        arm: {
          title: 'Robotic Arm Specifications',
          items: [
            { label: 'Arm Length', value: '1.04 meters' },
            { label: 'Weight', value: '17 kg' },
            { label: 'Frame', value: 'Aluminum alloy + steel reinforcement' },
            { label: 'Joints', value: 'Hardened bearings (angular/crossed roller)' },
            { label: 'Actuators', value: 'NEMA 17/23 closed-loop steppers' },
            { label: 'End Effector', value: 'ISO 9409-1 compatible steel flange' }
          ]
        },
        rail: {
          title: 'Linear Rail System',
          items: [
            { label: 'Standard Length', value: '1 meter' },
            { label: 'Extended Length', value: 'Up to 2.5 meters' },
            { label: 'Guide Type', value: 'HIWIN heavy-duty profile' },
            { label: 'Drive', value: 'NEMA 23 stepper/servo' },
            { label: 'Accuracy', value: '±0.05 mm with encoder' },
            { label: 'Base', value: 'Rigid aluminum/steel plate' }
          ]
        },
        combined: {
          title: 'Combined System Features',
          items: [
            { label: 'Total Reach (1m)', value: '~2.04 meters' },
            { label: 'Total Reach (2.5m)', value: '~3.54 meters' },
            { label: 'Arm Payload', value: '~5 kg' },
            { label: 'Rail Speed', value: '0.5–1 m/s' },
            { label: 'System Repeatability', value: '±0.1 mm' },
            { label: 'Control System', value: 'TMC5160 + STM32F466RET6' }
          ]
        }
      },
      features: [
        {
          title: 'Extended Reach',
          icon: <FaRuler />,
          description: 'Up to 3.54m total reach with extended rail'
        },
        {
          title: 'High Precision',
          icon: <FaCogs />,
          description: '±0.1 mm system repeatability'
        },
        {
          title: 'Advanced Control',
          icon: <FaMicrochip />,
          description: 'Integrated TMC5160 and STM32F466RET6'
        }
      ],
      technical: {
        construction: [
          'Aluminum alloy frame with steel reinforcement',
          'Hardened bearings for minimal backlash',
          'HIWIN profile guide rail system',
          'Preloaded ball bearings carriage',
          'Rigid mounting system',
          'Integrated cable management'
        ],
        control: [
          'TMC5160 motor drivers',
          'STM32F466RET6 controller',
          'Closed-loop stepper control',
          'Encoder feedback system',
          'Custom G-code support',
          'ROS2 Moveit2 integration'
        ],
        software: [
          'ROS 2 (Humble/Iron) compatible',
          'MoveIt 2 motion planning',
          'Custom path planning',
          'Real-time monitoring',
          'Advanced safety features',
          'Cloud integration ready'
        ]
      }
    },
    '2': {
      name: 'Robotic Joint Assembly',
      category: 'Mobile Robotics',
      image: '/images/20250616_110627.svg',
      rating: 4.9,
      price: 18999,
      stock: 0,
      isPreorder: true,
      description: 'Precision robotic joint assembly with high-torque motors and integrated control for articulated robotic arms.',
  specs: {
        physical: {
          title: 'Physical Specifications',
          items: [
            { label: 'Dimensions', value: '12×12×8 cm (L×W×H)' },
            { label: 'Weight', value: '2.5 kg' },
            { label: 'Material', value: 'Anodized Aluminum + Hardened Steel' },
            { label: 'Mounting', value: 'Standard ISO flange or customizable adapter' },
            { label: 'Rotation Range', value: '±180 degrees' },
            { label: 'Sealing', value: 'IP65-rated housing' }
          ]
        },
        drive: {
          title: 'Drive System',
          items: [
            { label: 'Motor Type', value: 'High-torque BLDC/Servo motor' },
            { label: 'Gearbox', value: 'Precision Harmonic Drive' },
            { label: 'Torque', value: 'Up to 75 Nm continuous' },
            { label: 'Encoder', value: 'Absolute rotary encoder' },
            { label: 'Controller', value: 'Integrated CANopen/RS485' },
            { label: 'Voltage', value: '24V/48V compatible' }
          ]
        },
        sensors: {
          title: 'Sensor Suite',
          items: [
            { label: 'Position Feedback', value: 'High-resolution encoder' },
            { label: 'Torque Sensing', value: 'Optional integrated torque sensor' },
            { label: 'Temperature', value: 'Internal thermal monitoring' },
            { label: 'Vibration', value: 'Built-in vibration detection' },
            { label: 'Limit Detection', value: 'Programmable electronic limits' },
            { label: 'Health Monitoring', value: 'Real-time diagnostics' }
          ]
        }
      },
      features: [
        {
          title: 'Precision Motion',
          icon: <FaCogs />,
          description: 'Smooth and accurate joint rotation with minimal backlash'
        },
        {
          title: 'High Torque',
          icon: <FaBolt />,
          description: 'Capable of handling heavy payloads in articulated arms'
        },
        {
          title: 'Integrated Control',
          icon: <FaMicrochip />,
          description: 'Onboard controller with CAN/RS485 interface'
        }
    
      ],
      technical: {
        chassis: [
          'Compact and robust harmonic gearbox',
      'Low backlash for precise movement',
      'ISO standard mounting flange',
      'Integrated cable routing',
      'IP65-sealed housing for dust and moisture protection'
        ],
        electronics: [
         'High-resolution absolute encoder',
      'Integrated motor driver with safety features',
      'Temperature and vibration sensors',
      'CANopen and RS485 communication interfaces',
      'Optional torque sensing module'
        ],
        software: [
         'Compatible with ROS and industrial PLCs',
      'Supports trajectory planning',
      'Real-time feedback and diagnostics',
      'Torque and speed control modes',
      'Programmable soft limits'
        ]
      }
    },
    '3': {
      name: 'Goliath Arm (Fixed)',
      category: 'Industrial',
      image: '/images/arm.svg',
      rating: 4.8,
      price: 22999,
      stock: 3,
      isPreorder: false,
      description: 'High-strength industrial robotic arm for automation, built for precision and reliability in demanding environments.',
      specs: {
        physical: {
          title: 'Physical Specifications',
          items: [
            { label: 'Length', value: '1.04 meters' },
            { label: 'Weight', value: '17 kg' },
            { label: 'Frame', value: 'Aluminum + Steel' },
            { label: 'Mount', value: 'ISO 9409-1' },
            { label: 'Payload', value: '5 kg' },
            { label: 'Precision', value: 'High accuracy' }
          ]
        },
        motors: {
          title: 'Motor & Control',
          items: [
            { label: 'Motors', value: 'Industrial-grade, closed-loop' },
            { label: 'Control', value: 'Closed-loop stepper/servo' },
            { label: 'Feedback', value: 'Encoder feedback' }
          ]
        }
      },
      features: [
        {
          title: 'Heavy Duty',
          icon: <FaBox />,
          description: 'Built for continuous, industrial operation'
        },
        {
          title: 'Precision',
          icon: <FaCogs />,
          description: 'High accuracy for repetitive tasks'
        },
        {
          title: 'Versatile Mount',
          icon: <FaTools />,
          description: 'ISO 9409-1 compatible, easy integration'
        }
      ],
      technical: {
        construction: [
          'Aluminum and steel frame',
          'ISO 9409-1 mounting flange',
          'Industrial-grade bearings',
          'Low maintenance design'
        ],
        electronics: [
          'Closed-loop stepper/servo motors',
          'Encoder feedback system',
          'Industrial control interface'
        ],
        software: [
          'Compatible with ROS and industrial PLCs',
          'Supports trajectory planning',
          'Real-time feedback and diagnostics'
        ]
      }
    },
    '4': {
      name: 'Coming Soon Product 1',
      category: 'Industrial',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '5': {
      name: 'Coming Soon Product 2',
      category: 'Mobile Robotics',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '6': {
      name: 'Coming Soon Product 3',
      category: 'Industrial',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '7': {
      name: 'Coming Soon Product 4',
      category: 'Mobile Robotics',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '8': {
      name: 'Coming Soon Product 5',
      category: 'Industrial',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '9': {
      name: 'Coming Soon Product 6',
      category: 'Mobile Robotics',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '10': {
      name: 'Coming Soon Product 7',
      category: 'Industrial',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '11': {
      name: 'Coming Soon Product 8',
      category: 'Mobile Robotics',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '12': {
      name: 'Coming Soon Product 9',
      category: 'Industrial',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '13': {
      name: 'Coming Soon Product 10',
      category: 'Mobile Robotics',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    }
  };
  

  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/" className="text-blue-400 hover:text-blue-300">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white py-20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

          {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-[#141416] border border-white/10"
          >
                  <img
                    src={product.image}
                    alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {product.name}
                  </h1>
              <p className="text-gray-400 text-lg mb-4">{product.description}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-white">
                    {product.isPreorder ? 'Contact for pricing' : product.price ? `$${product.price.toLocaleString()}` : 'Contact for pricing'}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                    {product.category}
                  </span>
                  {product.isPreorder ? (
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                      Pre-order
                    </span>
                  ) : product.stock > 0 ? (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      In Stock ({product.stock})
                    </span>
                  ) : (
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-white/70">Quantity:</span>
                    <div className="flex items-center bg-white/5 rounded-lg border border-white/10">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-white/10 rounded-l-lg transition-colors"
                        disabled={quantity === 1}
                      >
                        <FaMinus className={quantity === 1 ? 'text-white/30' : 'text-white/70'} />
                      </button>
                      <span className="px-4 py-2 text-white font-medium min-w-[50px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(Math.min(product.stock || 999, quantity + 1))}
                        className="p-2 hover:bg-white/10 rounded-r-lg transition-colors"
                        disabled={!product.isPreorder && quantity >= product.stock}
                      >
                        <FaPlus className={(!product.isPreorder && quantity >= product.stock) ? 'text-white/30' : 'text-white/70'} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={addingToCart || (!product.isPreorder && product.stock === 0)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                      product.isPreorder
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : product.stock > 0
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-gray-500 cursor-not-allowed text-gray-300'
                    } ${addingToCart ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {addingToCart ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Adding...
                      </>
                    ) : product.isPreorder ? (
                      <>
                        <FaPlus />
                        Add Pre-order to Cart
                      </>
                    ) : product.stock > 0 ? (
                      <>
                        <FaShoppingCart />
                        Add to Cart
                      </>
                    ) : (
                      'Out of Stock'
                    )}
                  </button>
                </div>
              </div>
          </div>

            {/* Quick Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#141416] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="text-blue-400 text-xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold mb-1 text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
                  </div>

            {/* Open Source Badge */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141416] border border-white/10">
              <FaGithub className="text-2xl text-white" />
                  <div>
                <h3 className="font-semibold text-white">Open Source Project</h3>
                <p className="text-sm text-gray-400">Available on GitHub with ROS2 support</p>
              </div>
              <Link
                to="https://github.com/bvdhaagen/goliath"
                className="ml-auto px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                target="_blank"
              >
                View Code
              </Link>
                  </div>
          </motion.div>
                  </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 border-b border-white/10">
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'specs'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'technical'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('technical')}
            >
              Technical Details
            </button>
                  </div>
                </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activeTab === 'specs' ? (
            // Specifications Content
            Object.entries(product.specs).map(([key, section]) => (
              <div
                key={key}
                className="p-6 rounded-2xl bg-[#141416] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="font-medium text-white">{item.value}</span>
                  </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Technical Details Content
            Object.entries(product.technical).map(([key, items]) => (
              <div
                key={key}
                className="p-6 rounded-2xl bg-[#141416] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 capitalize bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {key}
                </h3>
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheckCircle className="text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
              </div>
            ))
          )}
          </div>

        {/* ROS 2 Integration Section */}
        <div className="mt-16 p-8 rounded-2xl bg-[#141416] border border-white/10">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ROS 2 Integration
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <FaCode className="text-3xl text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Modern Stack</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  ROS 2 (Humble/Iron)
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  MoveIt 2 Integration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Nav2 Compatible
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <FaCloudDownloadAlt className="text-3xl text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Ready to Use</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Pre-configured Packages
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Example Applications
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Documentation
                </li>
                </ul>
              </div>
            <div className="space-y-4">
              <FaWrench className="text-3xl text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Customizable</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Modular Design
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Extensible Architecture
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Custom Plugin Support
                </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
